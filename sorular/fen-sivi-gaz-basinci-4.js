// Fen Bilimleri — Sıvı ve Gaz Basıncı: Kademe 2 (Pekiştirme) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
/* ===================== KADEME 2 — PEKİŞTİRME YEDEĞİ ===================== */
{
  id: "fen-sg-226",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Aynı gölün suyunda K balığı yüzeyden 2 m, L balığı ise 5 m derinlikte yüzmektedir. L balığı, K balığından hem daha büyük hem de daha ağırdır.
**Balıklara etki eden sıvı basıncı için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "K balığına etki eden basınç daha büyüktür; çünkü K daha küçüktür.",
    "İki balığa etki eden basınç eşittir; çünkü ikisi de aynı gölde yüzmektedir.",
    "L balığına etki eden basınç daha büyüktür; çünkü L daha derindedir.",
    "L balığına etki eden basınç daha büyüktür; çünkü L daha ağırdır."
  ],
  dogru: 2,
  hatalar: [
    "Ters yön: derinlik arttıkça sıvı basıncı artar; daha sığda olan K balığına etki eden basınç daha küçüktür.",
    "Derinliği yok sayma: balıkların aynı gölde olması basınçlarını eşit yapmaz; basınç derinliğe bağlıdır.",
    null,
    "Kütle ile basıncı karıştırma: sonuç doğru ama gerekçe yanlıştır; basıncı cismin ağırlığı değil, bulunduğu derinlik belirler."
  ],
  aciklama: `Durgun bir sıvıda basınç, sıvının cinsine ve derinliğe bağlıdır. Derinlik, sıvının açık yüzeyinden noktaya kadar aşağı doğru ölçülür.
Adım 1: İki balık da aynı gölün suyundadır; sıvının cinsi aynıdır, yani karşılaştırmayı derinlik belirler.
Adım 2: L balığı 5 m, K balığı 2 m derinliktedir. Derinlik arttıkça basınç arttığı için L'ye etki eden basınç daha büyüktür.
Adım 3: Balıkların büyüklüğü ya da ağırlığı sıvı basıncını değiştirmez.
Sık yapılan hata: “Ağır olan cisme daha büyük basınç etki eder” demek. Burada sonucu belirleyen ağırlık değil derinliktir.
Cevap C.`
},
{
  id: "fen-sg-227",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir hemşire, ucunda iğne bulunmayan bir şırınganın pistonunu sonuna kadar iterek içindeki havayı dışarı çıkarmıştır. Sonra şırınganın ucunu ağzı açık ilaç şişesindeki sıvı ilaca daldırmış ve pistonu geri çekmiştir. İlaç şırıngaya dolmuştur.
**Bu olayda ilacı şırıngaya dolduran etki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Dışarıdaki açık hava basıncı, ilacın yüzeyine etki ederek ilacı şırıngaya iter.",
    "Pistonun geri çekilmesiyle oluşan boşluk, ilacı şırınganın içine çeker.",
    "Şırıngadaki hava basıncı, ilacın yüzeyindeki açık hava basıncından büyük olur.",
    "İlaç şişesindeki sıvının kendi basıncı, ilacı şırıngaya doğru yukarı iter."
  ],
  dogru: 0,
  hatalar: [
    null,
    "“Boşluk çeker” yanılgısı: ilacı hareket ettiren boşluk değil, basıncı büyük olan taraftaki havanın itmesidir.",
    "Basınç yönünü ters kurma: piston çekilince şırıngadaki basınç azalır, dışarıdakinden küçük olur; büyük olmaz.",
    "Sıvı basıncı ile açık hava basıncını karıştırma: şişedeki ilacın derinliği çok küçüktür ve ilacı şırıngaya iten bu değildir."
  ],
  aciklama: `Açık hava basıncı, sıvı yüzeyine her an etki eder. Bir kabın içinde basınç azalırsa dışarıdaki büyük basınç sıvıyı o tarafa iter.
Adım 1: Piston geri çekilince şırıngadaki hava seyrekleşir ve içerideki basınç, dışarıdaki açık hava basıncından küçük olur.
Adım 2: İlacın açık yüzeyine açık hava basıncı etki etmektedir. Bu basınç, içerideki küçük basınçtan büyük olduğu için ilacı şırıngaya doğru iter.
Adım 3: Sıvıyı çeken bir “boşluk” yoktur; hareketi basınç farkı sağlar.
Sık yapılan hata: “Şırınga ilacı emer” diye düşünmek. Sormak gerekir: İçerideki mi büyük, dışarıdaki mi?
Cevap A.`
},
{
  id: "fen-sg-228",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir öğrenci, “Hava bir gaz olduğu için ağırlığı yoktur; bu yüzden Dünya'nın yüzeyine basınç da uygulamaz.” demiştir.
**Öğrencinin bu yargısını düzelten ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Havanın ağırlığı vardır; ancak bu ağırlık basınç oluşturmaz, basıncı rüzgâr oluşturur.",
    "Havanın ağırlığı vardır; ancak hava tabakasının basıncı, yükseklere çıkıldıkça artar.",
    "Havanın ağırlığı vardır; ancak basınç, havanın sıcaklığı nedeniyle oluşur, ağırlığıyla değil.",
    "Havanın ağırlığı vardır; hava tabakası bu ağırlığıyla her yöne basınç uygular."
  ],
  dogru: 3,
  hatalar: [
    "Ağırlık ile basıncı koparma: havanın ağırlığı vardır ve açık hava basıncını oluşturan tam da bu ağırlıktır; rüzgâr basıncın nedeni değildir.",
    "Ters yön: yükseklere çıkıldıkça üstte kalan hava tabakası incelir ve açık hava basıncı azalır; artmaz.",
    "İlgisiz neden: açık hava basıncı sıcaklıktan değil, Dünya'yı saran hava tabakasının ağırlığından doğar.",
    null
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğar ve barometreyle ölçülür.
Adım 1: Hava bir gazdır, ama gaz da maddedir ve ağırlığı vardır. Öğrencinin “gazın ağırlığı yoktur” düşüncesi yanlıştır.
Adım 2: Dünya'yı saran hava tabakası bu ağırlığıyla yer yüzeyindeki her cisme ve her yöne basınç uygular. Bu basınca açık hava basıncı denir.
Adım 3: Basıncın nedeni rüzgâr, sıcaklık ya da Güneş ışınları değil, hava tabakasının ağırlığıdır.
Sık yapılan hata: “Gaz ağırlıksızdır, o hâlde basınç yapmaz” demek. Gazlar da sıvılar gibi bulundukları ortamda her yöne basınç uygular.
Cevap D.`
},
{
  id: "fen-sg-229",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Özdeş K ve L kaplarına görseldeki gibi aynı yüksekliğe kadar sıvı doldurulmuştur: K'ye su, L'ye zeytinyağı. Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür. Kapların yan yüzeylerinde, tabandan aynı yükseklikte özdeş birer delik vardır. Bantla kapatılmış delikler aynı anda açılırken şu yargılar ileri sürülmüştür:\nI. Kaplar özdeş olduğu için iki delikten çıkan sıvı da aynı güçte fışkırır.\nII. K deliğinden çıkan su, L deliğinden çıkan zeytinyağından daha güçlü fışkırır.\nIII. Delikler kapların karşılıklı yüzeylerine aynı yükseklikte açılsaydı, her kaptaki fışkırma gücü şimdikinden farklı olurdu.\n**Buna göre yargılardan hangileri doğrudur?**",
  gorsel: `<svg viewBox="0 0 480 275" role="img" aria-label="Özdeş K ve L kapları aynı yüksekliğe kadar dolu: K'de su, L'de zeytinyağı; her kabın sol yan yüzeyinde tabandan aynı yükseklikte birer delik var"><rect x="50" y="70" width="140" height="170" fill="var(--dolgu)"/><rect x="290" y="70" width="140" height="170" fill="var(--dolgu)" opacity="0.55"/><path d="M50 40 V240 H190 V40" fill="none" stroke="currentColor" stroke-width="2"/><path d="M290 40 V240 H430 V40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="50" y1="70" x2="190" y2="70" stroke="var(--vurgu)" stroke-width="2" stroke-dasharray="6 4"/><line x1="290" y1="70" x2="430" y2="70" stroke="var(--vurgu)" stroke-width="2" stroke-dasharray="6 4"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"><circle cx="50" cy="205" r="5"/><circle cx="290" cy="205" r="5"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="120" y="30">K</text><text x="360" y="30">L</text><text x="120" y="150">Su</text><text x="360" y="150">Zeytinyağı</text><text x="240" y="264">İki kapta da sıvı yüksekliği ve delik yüksekliği aynıdır.</text></g></svg>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Özdeş kabı ölçüt sanma: kaplar özdeş olsa da sıvıların yoğunlukları farklıdır; aynı derinlikte yoğun sıvı daha büyük basınç yapar. I yanlıştır, II doğrudur.",
    null,
    "Yüzey ve kap yanılgıları birlikte: I yanlıştır (sıvılar farklıdır), III de yanlıştır (aynı derinlikte basınç her yönde eşittir); doğru olan II seçilmemiştir.",
    "Yüzey yanılgısı: II doğrudur, ama aynı derinlikte basınç her yönde eşit olduğundan deliğin hangi yüzeyde açıldığı sonucu değiştirmez; III yanlıştır."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının yoğunluğuna bağlıdır; aynı derinlikte her yönde eşittir. Delikten fışkıran suyun gücü, o deliğin derinliğindeki basınca bağlıdır.
Adım 1: I. yargıyı kontrol et. Kapların özdeş olması, sıvıların da özdeş olduğu anlamına gelmez. Delikler aynı derinlikte olsa da su zeytinyağından yoğundur ve deliğe daha büyük basınç yapar. İki sıvı aynı güçte fışkırmaz. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Derinlikler eşit, sıvılar farklıdır. Yoğunluğu büyük olan su daha büyük basınç yaptığı için K deliğinden daha güçlü fışkırır. Doğrudur.
Adım 3: III. yargıyı kontrol et. Aynı derinlikte basınç her yönde eşittir; deliğin hangi yüzeyde açıldığı fışkırma gücünü değiştirmez. Yanlıştır.
Sık yapılan hata: Kapların özdeş olmasından, içlerindeki sıvıların da aynı basıncı yapacağı sonucunu çıkarmak.
Cevap B.`
},
{
  id: "fen-sg-230",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir fabrikada kullanılan hidrolik presin içinde akışkan olarak hava yerine yağ seçilmiştir. Mühendis, havalı bir sistemin zayıf çalışacağını söylemiştir.
**Yağın tercih edilmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yağ basıncı itilen yöne iletir, hava ise her yöne iletir.",
    "Yağ hava gibi sıkışmadığı için uygulanan basınç neredeyse tamamen iletilir.",
    "Yağ basıncı iletirken kuvveti de büyüttüğü için pres küçük kuvvetle çalışır.",
    "Yağ havadan hafif olduğu için pistonları daha kolay yukarı kaldırır."
  ],
  dogru: 1,
  hatalar: [
    "Yön yanılgısı: Pascal prensibine göre sıvı, basıncı her yöne aynen iletir; yalnızca itilen yöne iletmez.",
    null,
    "Basınç ile kuvveti karıştırma: sıvı kuvveti değil basıncı iletir; kuvvetin büyümesini piston yüzeylerinin farkı sağlar.",
    "Yanlış özellik: yağ havadan yoğundur, hafif değildir; sistemin gücü akışkanın hafifliğinden değil sıkışmamasından gelir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir.
Adım 1: Gazlar kolayca sıkışır. Havalı sistemde itme önce havayı sıkıştırmaya harcanır, basıncın büyük bölümü karşı pistona ulaşmaz.
Adım 2: Sıvılar neredeyse hiç sıkışmaz. Yağ kullanılınca uygulanan basınç neredeyse kayıpsız karşı pistona iletilir.
Adım 3: Kuvveti büyüten yağ değil, geniş pistonun yüzeyinin büyük olmasıdır.
Sık yapılan hata: “Sıvı kuvveti büyütür” demek. Sıvı basıncı iletir, kuvvet piston yüzeyine göre değişir.
Cevap B.`
},
{
  id: "fen-sg-231",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıda bazı olaylar ve her olayı açıklayan bilgi eşleştirilmiştir:
I. Pedala basılınca berber koltuğunun yükselmesi: açık hava basıncı
II. Pipetle meyve suyunun içilmesi: açık hava basıncı
III. Hidrolik krikoyla aracın kaldırılması: Pascal prensibi
**Buna göre hangi eşleştirmeler doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Olay–bilgi eşleştirme yanılgısı: berber koltuğu, kapalı yağın basıncı iletmesiyle çalışır; I yanlıştır. Doğru eşleştirmeler II ve III'tür.",
    "Eksik değerlendirme: III doğrudur, ancak pipetle içmeyi açıklayan da açık hava basıncıdır; II de doğrudur.",
    "Pascal ile açık hava basıncını karıştırma: I yanlıştır (berber koltuğu Pascal prensibine dayanır); III doğru olduğu halde seçilmemiştir.",
    null
  ],
  aciklama: `Önce düzeneğe bak: sıvı kapalı bir kapta mı ve dışarıdan piston ya da pedalla itiliyor mu (Pascal prensibi), yoksa içerideki hava azalıp dışarıdaki hava mı itiyor (açık hava basıncı)?
Adım 1: I. eşleştirme: Berber koltuğunda pedala bağlı dar piston kapalı yağı iter, yağ da koltuğu taşıyan geniş pistonu yukarı iter. Bu bir Pascal prensibi uygulamasıdır; açık hava basıncı değildir. Yanlıştır.
Adım 2: II. eşleştirme: Pipetle içilirken pipetin içindeki basınç azalır, meyve suyunun yüzeyine etki eden açık hava basıncı sıvıyı pipete iter. Doğrudur.
Adım 3: III. eşleştirme: Hidrolik kriko kapalı yağın basıncı aynen iletmesine dayanır. Doğrudur.
Sık yapılan hata: Her sıvılı düzeneği aynı bilgiyle açıklamak.
Cevap D.`
},
{
  id: "fen-sg-232",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Yağız, “Sıvının derinliği aynıyken sıvının miktarı arttıkça kabın tabanındaki sıvı basıncı artar.” hipotezini sınamak istemektedir. Bunun için taban alanı farklı kaplar ve bir basınç ölçer kullanacaktır.
**Yağız hipotezini sınamak için aşağıdaki düzeneklerden hangisini kurmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Taban alanları farklı iki kaba aynı suyu aynı yüksekliğe kadar doldurup tabanlardaki basıncı ölçmelidir.",
    "Özdeş iki kaba aynı sudan farklı yüksekliklere kadar doldurup tabanlardaki basıncı ölçmelidir.",
    "Özdeş iki kaba aynı yüksekliğe kadar biri su, diğeri zeytinyağı doldurup tabanlardaki basıncı ölçmelidir.",
    "Taban alanları farklı iki kaba aynı sudan eşit miktarda doldurup tabanlardaki basıncı ölçmelidir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Değişkenleri birlikte değiştirme: hem su miktarı hem derinlik farklı olur; derinlik sabit tutulmadığı için sonucun hangisinden geldiği anlaşılamaz.",
    "Yanlış değişkeni sınama: bu düzenek sıvının cinsini sınar, miktarı değil.",
    "Sınanan değişkeni sabit tutma: miktar eşit olduğu için sınanan değişken değişmemiştir; üstelik derinlikler farklı olur."
  ],
  aciklama: `Bir hipotezi sınarken yalnızca sınanan değişken (bağımsız değişken) değiştirilir, ölçülen değişken (bağımlı) ölçülür, geri kalan her şey (kontrol değişkenleri) sabit tutulur.
Adım 1: Burada değiştirilecek değişken su miktarıdır; ölçülecek değişken tabandaki basınçtır.
Adım 2: Hipotez “derinlik aynıyken” miktarın etkisini sorduğundan derinlik sabit tutulmalıdır. Taban alanları farklı iki kaba aynı yüksekliğe su doldurulursa miktar farklı, derinlik aynı olur.
Adım 3: Diğer şıklarda ya miktar sabit kalır, ya cins değişir, ya da miktarla birlikte derinlik de değişir.
Sağlama: Doğru düzenekte iki kapta basınç aynı çıkar; bu da hipotezin desteklenmediğini gösterir.
Cevap A.`
},
{
  id: "fen-sg-233",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Dağda kamp yapan bir grup, tepe noktasında ağzını sıkıca kapattıkları yarı dolu bir pet şişeyi vadideki köye indirmiştir. Şişenin köyde büzüşmüş olduğunu görmüşlerdir.
**Şişenin büzüşmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Şişenin içindeki hava soğuyup sıvıya dönüşmüş ve hacmi küçülmüştür.",
    "Vadide açık hava basıncı, tepedeki açık hava basıncından daha küçüktür.",
    "Vadide açık hava basıncı artmış ve dışarıdaki basınç içerdekini geçmiştir.",
    "Şişenin içindeki suyun ağırlığı artmış ve şişeyi içeri doğru ezmiştir."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden uydurma: kapalı şişedeki hava sıvıya dönüşmez; değişen şişenin dışındaki açık hava basıncıdır.",
    "Ters yön: aşağı inildikçe açık hava basıncı azalmaz, artar; vadide basınç tepedekinden büyüktür.",
    null,
    "İlgisiz neden: kapalı şişeye su girmediği için suyun ağırlığı değişmez; şişeyi büzen suyun ağırlığı değildir."
  ],
  aciklama: `Açık hava basıncı, yükseldikçe azalır, alçaldıkça artar. Ağzı kapalı esnek bir kap yükseğe çıkınca kabarır, alçağa inince büzülür.
Adım 1: Şişe tepede kapatıldığı için içinde tepenin düşük basıncındaki hava kalmıştır. Şişenin içine hava girip çıkmaz.
Adım 2: Vadiye inilince dışarıdaki açık hava basıncı artar. Dışarıdaki basınç içerideki basınçtan büyük olur ve esnek şişe içeri doğru büzülür.
Adım 3: Değişen şey şişenin içi değil, dışarıdaki basınçtır.
Sağlama: Şişe tepeye geri götürülürse yeniden şişer.
Cevap C.`
},
{
  id: "fen-sg-234",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Hastaya serum takılırken serum torbası askıya asılmış ve torbanın ucu bir hortumla hastanın koluna bağlanmıştır. Serum yeterince hızlı akmayınca hemşire torbayı askıda biraz daha yukarı çekmiş, bunun üzerine serumun akışı hızlanmıştır.
**Akışın hızlanmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Serumun yoğunluğu artmış; bu yüzden iğne ucundaki sıvı basıncı büyümüştür.",
    "Torbadaki serum miktarı artmış; bu yüzden iğne ucundaki sıvı basıncı büyümüştür.",
    "Torba ile iğne ucu arasındaki yükseklik artmış; bu yüzden iğne ucundaki sıvı basıncı büyümüştür.",
    "Torbaya etki eden açık hava basıncı artmış; bu yüzden iğne ucundaki sıvı basıncı büyümüştür."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: torbayı yukarı çekmek serumun yoğunluğunu değiştirmez; basıncı büyüten, yüksekliğin artmasıdır.",
    "Miktar yanılgısı: torbayı yukarı çekmek serum miktarını artırmaz; basıncı belirleyen miktar değil, sıvının yüksekliği (derinliği) dir.",
    null,
    "Ters yön ve ilgisiz neden: yükseldikçe açık hava basıncı artmaz, azalır; ayrıca akışı hızlandıran bu değildir."
  ],
  aciklama: `Sıvı basıncı derinlikle artar. Serum askısı bu bilginin bir uygulamasıdır: torba ne kadar yüksekteyse iğne ucundaki serum basıncı o kadar büyük olur.
Adım 1: Torbayı yukarı çekmek, serumun yüzeyi ile iğne ucu arasındaki düşey uzaklığı artırır.
Adım 2: Bu uzaklık, sıvının derinliği gibi davranır. Derinlik arttığı için iğne ucundaki sıvı basıncı büyür.
Adım 3: Daha büyük basınç serumu damara daha hızlı iter. Serumun yoğunluğu ya da torbadaki miktar bu durumda belirleyici değildir.
Sık yapılan hata: “Torbada daha çok sıvı olduğu için basınç büyür” demek. Önemli olan miktar değil, yüksekliktir.
Cevap C.`
},
{
  id: "fen-sg-235",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Taban alanları ve biçimleri farklı K, L ve M kaplarına şu sıvılar konmuştur: K'ye 12 cm yüksekliğe kadar su, L'ye 18 cm yüksekliğe kadar tuzlu su, M'ye 12 cm yüksekliğe kadar zeytinyağı. Yoğunluklar arasında tuzlu su > su > zeytinyağı ilişkisi vardır.
**Buna göre kapların tabanlarındaki basınçlarla ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "L'nin tabanındaki basınç, K'ninkinden büyüktür.",
    "K'nin tabanındaki basınç, M'ninkinden küçüktür.",
    "L'nin tabanındaki basınç, M'ninkinden küçüktür.",
    "K'nin tabanındaki basınç, M'ninkine eşittir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: K ve M aynı derinliktedir, ama K'deki su zeytinyağından yoğundur; bu yüzden K'nin tabanındaki basınç M'ninkinden büyüktür.",
    "Ters yön: L hem daha derin hem de daha yoğun sıvı taşır; M'ye göre L'nin basıncı büyüktür.",
    "Derinliği tek ölçüt sanma: derinlikler eşit olsa da sıvıların yoğunlukları farklıdır, bu yüzden basınçlar eşit değildir."
  ],
  aciklama: `Sıvı basıncı iki etkene bağlıdır: derinlik ve sıvının yoğunluğu. Biri artarken öbürü azalıyorsa sonuç kesin söylenemez; ikisi de aynı yöndeyse kesindir.
Adım 1: L ile K'yi karşılaştır. L, K'den daha derin (18 cm > 12 cm) ve daha yoğun bir sıvı (tuzlu su > su) taşır. İki etken de aynı yöndedir; L'nin tabanındaki basınç kesinlikle büyüktür.
Adım 2: K ile M aynı derinliktedir; K'deki su daha yoğundur. K'nin basıncı M'ninkinden büyüktür; B ve D yanlıştır.
Adım 3: L ile M'de de iki etken L'yi büyük yapar; C yanlıştır.
Sağlama: Taban alanlarının farklı olması sonucu değiştirmez.
Cevap A.`
},
{
  id: "fen-sg-236",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Banyonun fayans duvarına vantuzlu bir askı yapıştırılmıştır. Vantuz duvara bastırılarak içindeki havanın bir kısmı dışarı çıkarılmıştır. Aylar sonra vantuzun kenarında küçük bir çatlak oluşmuş ve askı kısa süre içinde duvardan düşmüştür.
**Askının düşmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çatlaktan hava çıktığı için vantuzun içindeki basınç iyice azalmıştır.",
    "Çatlaktan hava girdiği için içerideki basınç, açık hava basıncına yaklaşmıştır.",
    "Çatlak yüzünden dışarıdaki açık hava basıncı vantuzun bulunduğu yerde ortadan kalkmıştır.",
    "Çatlak yüzünden vantuzun ağırlığı artmış ve askı aşağı çekilmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: çatlaktan hava çıkmaz, içeri girer; içerideki basınç azalmaz, artar.",
    null,
    "İlgisiz neden: açık hava basıncı her yerde vardır, çatlak onu ortadan kaldırmaz.",
    "İlgisiz neden: çatlak vantuzun ağırlığını anlamlı biçimde artırmaz; askıyı tutan şey ağırlık değil basınç farkıdır."
  ],
  aciklama: `Vantuz, içerideki basıncı dışarıdakinden küçük yaptığı için duvara tutunur. Vantuzu duvara bastıran, dışarıdaki açık hava basıncıdır.
Adım 1: Vantuz bastırıldığında içindeki hava azalmış, içeride dışarıdan daha küçük bir basınç oluşmuştur. Dışarıdaki büyük basınç vantuzu duvara bastırmıştır.
Adım 2: Çatlak oluşunca dışarıdaki hava vantuzun içine girmiştir. İçerideki basınç artar ve dışarıdaki açık hava basıncına yaklaşır.
Adım 3: Basınç farkı ortadan kalkınca vantuzu duvara bastıran net etki kalmaz ve askı düşer.
Sık yapılan hata: “Vantuz duvara yapışkan olduğu için tutunur” ya da “boşluk çeker” diye düşünmek.
Cevap B.`
},
{
  id: "fen-sg-237",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Fen dersinde bir öğrenci sıvı basıncıyla ilgili şu yargıları ileri sürmüştür:
I. Sıvılar yalnızca bulundukları kabın tabanına basınç uygular.
II. Sıvı içindeki bir cismin yan yüzeylerine etki eden basınç, aynı derinlikte alt yüzeyine etki eden basınçtan küçüktür.
III. Sıvıya bırakılan bir cismin her yüzeyine sıvı basıncı etki eder.
**Bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "Yalnız III"
  ],
  dogru: 3,
  hatalar: [
    "Yalnızca tabana basıncı sanma: sıvı kabın tabanına, yan yüzeylerine ve içindeki cisimlere de basınç uygular; I yanlıştır.",
    "Yön yanılgısı: I yanlıştır (sıvı yan yüzeylere de basınç uygular) ve II yanlıştır (aynı derinlikte basınç her yönde eşittir).",
    "Yön yanılgısı: III doğrudur, ama aynı derinlikte basınç her yönde eşittir; yan yüzeye etki eden basınç alt yüzeye etkinden küçük değildir. II yanlıştır.",
    null
  ],
  aciklama: `Sıvılar akışkandır; bulundukları kabın bütün yüzeylerine ve içine bırakılan cisimlere her yönden basınç uygular. Aynı derinlikte basınç her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Sıvı tabana olduğu kadar yan yüzeylere de basınç uygular. Yanlıştır.
Adım 2: II. yargıyı kontrol et. “Aynı derinlikte” denildiği için yan yüzeye ve alt yüzeye etki eden basınçlar eşittir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Sıvıya bırakılan cismin her yüzeyine sıvı basıncı etki eder. Doğrudur.
Sık yapılan hata: Basıncın yalnızca “yükü taşıyan” yüzeye etki ettiğini sanmak.
Cevap D.`
},
{
  id: "fen-sg-238",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi Pascal prensibine __dayanmaz__?**`,
  gorsel: null,
  secenekler: [
    "Emzikli sulama kabının emziğin ağzına kadar dolması",
    "Bir hidrolik presin metal levhayı şekillendirmesi",
    "Ekskavatör kepçesinin hidrolik silindirle kaldırılması",
    "Hidrolik asansörün otomobili yukarı çıkarması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Pascal'ı yanlış yerde arama: hidrolik pres, kapalı yağın basıncı aynen iletmesine dayanır; dışta kalan şık bu değildir.",
    "Pascal'ı yanlış yerde arama: hidrolik silindirler kapalı yağın basıncı iletmesiyle çalışır; dışta kalan şık bu değildir.",
    "Pascal'ı yanlış yerde arama: hidrolik asansör kapalı yağın basıncı aynen iletmesine dayanır; dışta kalan şık bu değildir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Bunun için sıvı kapalı bir kapta olmalı ve ona piston ya da pedalla dışarıdan basınç uygulanmalıdır.
Adım 1: Pres, ekskavatör kolu ve asansörde yağ kapalı bir sistemdedir; bir pistonla itilen yağ, basıncı karşı pistona iletir. Üçü de Pascal prensibine dayanır.
Adım 2: Emzikli kapta ise sıvı ağzı açık, alttan bağlı kollardadır; dışarıdan piston basıncı yoktur. Bu bir bileşik kap olayıdır: aynı sıvının yüzeyleri aynı hizada durur.
Sık yapılan hata: Sıvı varsa Pascal prensibi vardır sanmak.
Cevap A.`
},
{
  id: "fen-sg-239",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir gölün yüzeyinin hemen altındaki K noktasında su basıncı çok küçüktür. Ahmet, bu yüzden K noktasında etki eden toplam basıncı da çok küçük sanmaktadır.
**Buna göre K noktasındaki toplam basınçla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "K'de basınç yoktur; çünkü K yüzeye çok yakındır.",
    "K'deki toplam basınç, suyun basıncına eşittir.",
    "K'de açık hava basıncı etki etmez; çünkü K su içindedir.",
    "K'deki toplam basınç en az açık hava basıncı kadardır."
  ],
  dogru: 3,
  hatalar: [
    "Derinliği sıfırlama yanılgısı: su basıncı küçük olsa da K'ye açık hava basıncı etki eder; bu yüzden basınç sıfır değildir.",
    "Açık hava basıncını yok sayma: su yüzeyine etki eden açık hava basıncı suyun içine iletilir; toplam basınç iki basıncın toplamıdır.",
    "Açık hava basıncını yok sayma: açık hava basıncı su yüzeyinden suyun içine iletilir, bu yüzden K'ye de etki eder.",
    null
  ],
  aciklama: `Su altındaki bir noktaya etki eden toplam basınç, açık hava basıncı ile suyun basıncının toplamıdır.
Adım 1: Gölün yüzeyine açık hava basıncı etki eder. Bu basınç suyun içine de iletilir.
Adım 2: K noktasında su basıncı çok küçük olsa da açık hava basıncı yine vardır. Toplam basınç = açık hava basıncı + su basıncı olur.
Adım 3: Bu toplam, en az açık hava basıncı kadardır; su basıncı arttıkça da büyür.
Sık yapılan hata: Yüzeye yakın bir noktada “hiç basınç yok” demek.
Cevap D.`
},
{
  id: "fen-sg-240",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir öğrenci, sıvı basıncını etkileyen değişkenleri incelemek için dört kapta ölçüm yapmıştır. Kapların sıvısı, sıvı yüksekliği ve taban alanı tabloda verilmiştir.
**Sıvının cinsinin taban basıncına etkisini anlamak için hangi iki kapta yapılan ölçümler karşılaştırılmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Sıvı</th><th>Sıvı yüksekliği (cm)</th><th>Taban alanı (cm²)</th></tr><tr><td>K</td><td>Su</td><td>20</td><td>50</td></tr><tr><td>L</td><td>Su</td><td>20</td><td>100</td></tr><tr><td>M</td><td>Tuzlu su</td><td>20</td><td>50</td></tr><tr><td>N</td><td>Tuzlu su</td><td>30</td><td>100</td></tr></table>`,
  secenekler: [
    "K ve L",
    "K ve M",
    "L ve N",
    "M ve N"
  ],
  dogru: 1,
  hatalar: [
    "Yanlış değişkeni sınama: K ve L'de sıvı aynı, yalnızca taban alanı farklıdır; bu karşılaştırma taban alanının etkisini gösterir.",
    null,
    "Birden çok değişkeni değiştirme: L ve N'de hem sıvının cinsi hem sıvı yüksekliği farklıdır; sonuç hangisinden geldiği anlaşılamaz.",
    "Birden çok değişkeni değiştirme: M ve N'de sıvı aynıdır, yükseklik ve taban alanı farklıdır; sıvının cinsi sınanmamış olur."
  ],
  aciklama: `Bir değişkenin etkisini anlamak için yalnızca o değişkenin farklı, diğerlerinin aynı olduğu iki ölçüm karşılaştırılır.
Adım 1: Sınanacak değişken sıvının cinsidir; sıvı yüksekliği ve taban alanı sabit kalmalıdır.
Adım 2: Tabloda sıvısı farklı, yüksekliği ve taban alanı aynı olan tek çift K (su, 20 cm, 50 cm²) ve M (tuzlu su, 20 cm, 50 cm²) kaplarıdır.
Adım 3: Diğer çiftlerde sıvıyla birlikte başka değişkenler de değişir ya da sıvı aynıdır.
Sağlama: K–M karşılaştırmasında farklı olan tek şey sıvıdır.
Cevap B.`
},
{
  id: "fen-sg-241",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir grup öğrenci teleferikle dağın tepesine çıkarken bazılarının kulakları tıkanmıştır.
**Kulakların tıkanmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Dışarıdaki açık hava basıncı artar; kulak zarının içindeki basınç dışarıdan küçük kalır.",
    "Dışarıdaki açık hava basıncı artar; kulak zarının içindeki basınç dışarıdan büyük kalır.",
    "Dışarıdaki açık hava basıncı azalır; kulak zarının içindeki basınç dışarıdan büyük kalır.",
    "Dışarıdaki açık hava basıncı azalır; kulak zarının içindeki basınç dışarıdan küçük kalır."
  ],
  dogru: 2,
  hatalar: [
    "Ters yön: yükseldikçe açık hava basıncı artmaz, azalır; iç ve dış basıncın hangisinin büyük kaldığı da ters kurulmuş.",
    "Ters yön: yükseldikçe açık hava basıncı artmaz, azalır. İçerideki basıncın büyük kalması doğrudur, ama dış basıncın değişimi yanlıştır.",
    null,
    "Basınç farkının yönünü ters kurma: dış basınç azalırken kulak zarının içindeki hava hemen uyum sağlayamaz; içerideki basınç dışarıdan büyük kalır, küçük kalmaz."
  ],
  aciklama: `Açık hava basıncı yükseldikçe azalır. Kulak zarının iki yanındaki basınçlar eşitlenemezse zar baskı hisseder.
Adım 1: Teleferik yükseldikçe dışarıdaki açık hava basıncı azalır.
Adım 2: Kulağın içindeki hava hemen dışarı çıkıp uyum sağlayamaz; bu yüzden içerideki basınç, dışarıdakinden büyük kalır.
Adım 3: İçerideki büyük basınç zarı dışarı doğru iter; kulak tıkanır. Yutkunmak iç ve dış basıncı eşitler.
Sağlama: Aşağı inerken de benzer tıkanma olur, ama bu kez dışarıdaki basınç artar ve zar içeri doğru itilir.
Cevap C.`
},
{
  id: "fen-sg-242",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir ekskavatörün kolunda, ana pompaya farklı uzunlukta borularla bağlanmış iki özdeş hidrolik silindir vardır. K silindiri pompaya 1 m, L silindiri ise 4 m uzaklıktadır. Borular yağla dolu ve kapalıdır; yağın boru içindeki kayıpları önemsizdir. Pompa yağa basınç uygulamaktadır.
**Silindirlerdeki yağ basıncı ve pistonları iten kuvvetler için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Boru uzunluğu iletilen basıncı değiştirmediği için iki silindirde de basınç ve kuvvet eşittir.",
    "L'ye giden boru uzun olduğu için L'deki basınç ve L'deki kuvvet daha küçüktür.",
    "L'deki basınç daha küçüktür, ama silindirler özdeş olduğu için kuvvetler eşittir.",
    "İki silindirde de basınç, pompadakinden küçüktür; çünkü yağ yol boyunca basıncını harcar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzaklık yanılgısı: sıvı basıncı her yöne ve her noktaya aynen iletir; borunun uzun olması basıncı azaltmaz.",
    "Tutarsız akıl yürütme: basınç eşit olduğu için kuvvet de eşittir; ayrıca L'deki basıncın küçük olduğu varsayımı yanlıştır.",
    "Basıncı harcanır sanma: sıvılar basıncı kayıpsız iletir (kayıplar önemsiz verilmiştir); pompadaki basınç silindirlere aynen ulaşır."
  ],
  aciklama: `Pascal prensibi: Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Borunun uzunluğu ya da yönü basıncı değiştirmez.
Adım 1: Pompanın yağa uyguladığı basınç, borulardaki yağ tarafından hem K'ye hem L'ye aynen iletilir.
Adım 2: İki silindir özdeş olduğundan pistonların yüzey alanları eşittir. Basınç ve yüzey alanı eşit olunca pistonları iten kuvvetler de eşittir.
Adım 3: L'nin daha uzakta olması hiçbir şeyi değiştirmez.
Sık yapılan hata: “Uzak noktaya iletilen basınç zayıflar” demek.
Cevap A.`
},
{
  id: "fen-sg-243",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Cansu, bir su kabında basınç ölçerin sensörünü sırasıyla 5 cm, 10 cm ve 15 cm derinliğe indirerek her derinlikte ölçülen basıncı not etmiştir. Deneyde aynı kap ve aynı su kullanılmıştır.
**Bu deneydeki değişkenler için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Bağımsız değişken derinlik, bağımlı değişken basınç, kontrol değişkeni sıvının cinsidir.",
    "Bağımsız değişken basınç, bağımlı değişken derinlik, kontrol değişkeni sıvının cinsidir.",
    "Bağımsız değişken sıvının cinsi, bağımlı değişken basınç, kontrol değişkeni derinliktir.",
    "Bağımsız değişken derinlik, bağımlı değişken sıvının cinsi, kontrol değişkeni basınçtır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız ile bağımlı değişkeni karıştırma: Cansu derinliği kendisi değiştirmiş, basıncı ölçmüştür; basınç bağımlı değişkendir.",
    "Sınanan değişkeni yanlış belirleme: sıvı hep aynı kalmıştır, değiştirilen derinliktir; sıvının cinsi kontrol değişkenidir.",
    "Değişkenlerin rollerini karıştırma: sıvı değişmemiştir, bağımlı değişken sıvının cinsi olamaz; ölçülen basınçtır."
  ],
  aciklama: `Bağımsız değişken, deneyi yapanın değiştirdiği değişkendir. Bağımlı değişken, ölçülen değişkendir. Kontrol değişkenleri sabit tutulan koşullardır.
Adım 1: Cansu sensörü farklı derinliklere indirmiştir; değiştirdiği şey derinliktir. Bağımsız değişken derinliktir.
Adım 2: Her derinlikte basıncı ölçmüştür; ölçülen şey basınçtır. Bağımlı değişken basınçtır.
Adım 3: Aynı kap ve aynı su kullanılmıştır; sıvının cinsi ve kap sabit tutulan koşullardır, kontrol değişkenidir.
Sağlama: Derinlik arttıkça basınç artacak biçimde bir tablo elde edilmesi beklenir.
Cevap A.`
},
{
  id: "fen-sg-244",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir baraj duvarında, tabana yakın yerde K savak kapağı, su yüzeyine yakın yerde L savak kapağı vardır. Mühendisler iki kapağın da aynı baraj gölünün suyu ile temas ettiğini bilmektedir. Hangi kapağın daha sağlam yapılması gerektiğine karar vereceklerdir.
**Mühendislerin kararı ve gerekçesi aşağıdakilerden hangisi olmalıdır?**`,
  gorsel: null,
  secenekler: [
    "L kapağı daha sağlam olmalıdır; çünkü L'ye etki eden su basıncı daha büyüktür.",
    "İki kapak da aynı sağlamlıkta olmalıdır; çünkü ikisi de aynı baraj gölünün suyuyla temastadır.",
    "K kapağı daha sağlam olmalıdır; çünkü K'yi iten su kütlesi gölün öbür bölümlerinden fazladır.",
    "K kapağı daha sağlam olmalıdır; çünkü K'ye etki eden su basıncı daha büyüktür."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: yüzeye yakın L kapağına etki eden basınç daha küçüktür; derinlik arttıkça basınç artar.",
    "Derinliği yok sayma: iki kapağın aynı suyla temas etmesi basınçlarını eşit yapmaz; basınç derinliğe bağlıdır.",
    "Miktar yanılgısı: sonuç doğru ama gerekçe yanlıştır; basıncı belirleyen suyun miktarı değil, kapağın derinliğidir.",
    null
  ],
  aciklama: `Sıvı basıncı derinlikle artar. Bu yüzden baraj duvarları tabana doğru kalınlaşır; derindeki bölümler daha büyük basınca dayanmalıdır.
Adım 1: Kapaklar aynı gölün suyundadır; sıvının cinsi aynıdır, karşılaştırmayı derinlik belirler.
Adım 2: K kapağı tabana yakındır, yani L'den daha derindedir. K'ye etki eden basınç daha büyüktür.
Adım 3: Daha büyük basınca dayanacak K kapağı daha sağlam yapılmalıdır. Gölün toplam su miktarı basıncı belirlemez.
Sık yapılan hata: “Daha çok su, daha çok basınç” demek.
Cevap D.`
},
{
  id: "fen-sg-245",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Aysel, pipetle meyve suyu içerken pipetin üst kısmında küçük bir delik olduğunu fark etmiştir. Ne kadar uğraşsa da meyve suyunu içememiştir.
**Meyve suyunun içilememesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Delikten pipetin içine giren hava, meyve suyunu ağırlaştırdığı için sıvı yükselemez.",
    "Delik yüzünden “emme kuvveti” azaldığı için meyve suyu pipete çekilemez.",
    "Delikten hava girdiği için pipetin içindeki basınç düşmez ve sıvı yukarı itilemez.",
    "Delik yüzünden meyve suyu pipetin dışına sızar ve ağza kadar ulaşamaz."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: pipetin içine giren hava meyve suyunun ağırlığını anlamlı biçimde artırmaz; olayı belirleyen basınç farkıdır.",
    "“Emme kuvveti” yanılgısı: sıvıyı pipete çeken bir kuvvet yoktur; sıvıyı yukarı iten, içerideki basınç düştüğünde dışarıdaki açık hava basıncıdır.",
    null,
    "Olayı yanlış kurma: delik pipetin üst kısmındadır, meyve suyu oraya ulaşmaz; delikten dışarı sızma değil, pipetin içine hava girmesi söz konusudur."
  ],
  aciklama: `Pipetle içerken önce pipetin içindeki basınç azaltılır. Böylece içerideki basınç dışarıdakinden küçük olur ve meyve suyunun yüzeyine etki eden açık hava basıncı sıvıyı pipete iter.
Adım 1: Delik yokken emme sırasında pipetin içindeki basınç, dışarıdaki açık hava basıncından küçük olur.
Adım 2: Delik varsa dışarıdaki hava delikten pipetin içine girer. İçerideki basınç dışarıdaki basınca yaklaşır.
Adım 3: Basınç farkı oluşmayınca sıvıyı pipete iten net etki doğmaz ve meyve suyu yükselmez.
Sık yapılan hata: Sıvıyı “emerek çekiyoruz” sanmak. Sıvıyı iten dışarıdaki havadır.
Cevap C.`
},
{
  id: "fen-sg-246",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Şişirilip ağzı bağlanmış bir balon havada elle tutulmaktadır. Balonun yüzeyine iğneyle üstten, alttan ve yandan olmak üzere üç küçük delik açılmış, her deliğin önüne ince bir kâğıt şerit tutulmuştur. Deliklerden çıkan hava, önündeki şeridi dalgalandırır.\n**Bu deneyle ilgili aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: ["Hava hafif olduğu için yalnızca üstteki delikten çıkar ve üstteki şerit dalgalanır.","Gaz, balonun iç yüzeylerine her yönde basınç uyguladığı için üç şerit de dalgalanır.","Hava ağırlığı nedeniyle altta toplandığından yalnızca alttaki şerit dalgalanır.","Hava yalnızca yukarı ve aşağı yönde basınç uyguladığından yandaki şerit dalgalanmaz."],
  dogru: 1,
  hatalar: ["Yön yanılgısı: gazın hafif olması onu balonun üst bölgesinde toplamaz; gaz balonun iç yüzeylerine her yönde basınç uygular ve her delikten çıkar.",null,"Yön yanılgısı: gazlar ağırlıkları nedeniyle aşağıda toplanmaz; basıncı her yöne uygularlar, bu yüzden üstteki ve yandaki delikten de hava çıkar.","Yarım doğru: gaz yukarı ve aşağı yönlere basınç uygular, ama yana da uygular; bu yüzden yandaki delikten de hava çıkar."],
  aciklama: "Gazlar akışkandır; bulundukları kabın bütün iç yüzeylerine her yönde basınç uygular. Şişirilen bir balonun her yanından gerilmesi bunu gösterir.\nAdım 1: Şişirilmiş balonun içindeki havanın basıncı, dışarıdaki açık hava basıncından büyüktür; bu yüzden delik açılınca hava dışarı çıkar.\nAdım 2: Bu basınç yalnızca bir yönde değil, balonun bütün iç yüzeylerinde vardır. Üstte, altta ya da yanda açılan her delikten hava çıkar; üç şerit de dalgalanır.\nAdım 3: Havanın hafif olması onu balonun üstünde toplamaz; gaz, bulunduğu kabın her yerine yayılır.\nSağlama: Şişirilmiş bir balonun hangi yerine iğne batırırsan batır, hava o delikten kaçar.\nCevap B."
},
{
  id: "fen-sg-247",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir öğrenci, üç sıvıyı özdeş kaplara aynı yüksekliğe kadar doldurmuş ve her kabın tabanındaki sıvı basıncını aynı basınç ölçerle ölçmüştür. Ölçüm sonuçları tabloda verilmiştir.
**Buna göre X, Y ve Z sıvılarının yoğunlukları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Sıvı yüksekliği (cm)</th><th>Ölçülen basınç (kPa)</th></tr><tr><td>X</td><td>15</td><td>22</td></tr><tr><td>Y</td><td>15</td><td>18</td></tr><tr><td>Z</td><td>15</td><td>30</td></tr></table>`,
  secenekler: [
    "X > Y > Z",
    "Y > X > Z",
    "Z > Y > X",
    "Z > X > Y"
  ],
  dogru: 3,
  hatalar: [
    "Sıralamayı ters kurma: aynı derinlikte basıncı en büyük olan sıvı en yoğundur; Z'nin basıncı en büyük, Y'nin en küçüktür.",
    "Tabloyu yanlış okuma: Y'nin basıncı en küçüktür, yani en az yoğun sıvıdır; en yoğun olan Z'dir.",
    "Karışık sıralama: Z en yoğundur, ama X'in basıncı Y'ninkinden büyük olduğu için X, Y'den daha yoğundur.",
    null
  ],
  aciklama: `Aynı derinlikte sıvı basıncı, sıvının yoğunluğu ile birlikte büyür. Derinlikler eşitse basıncı büyük olan sıvı daha yoğundur.
Adım 1: Üç kapta da sıvı yüksekliği 15 cm'dir; derinlik sabittir. Basınçlar yalnızca sıvıların yoğunluğuna bağlıdır.
Adım 2: Ölçülen basınçları büyükten küçüğe sırala: Z (30 kPa) > X (22 kPa) > Y (18 kPa).
Adım 3: Aynı sırayla yoğunluklar da Z > X > Y olur.
Sağlama: Z'nin basıncı en büyük olduğu için en yoğun, Y'nin basıncı en küçük olduğu için en az yoğundur.
Cevap D.`
},
{
  id: "fen-sg-248",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir şirket derin deniz araştırmaları için dalgıç elbiseleri üretmektedir. Derin sularda kullanılacak elbisenin kumaşı ve bağlantıları, sığ sularda kullanılan elbiseye göre daha dayanıklı yapılmıştır.
**Bu farkın nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Derinde suyun yoğunluğu arttığı için elbiseye etki eden ağırlık da artar.",
    "Derinde su miktarı fazla olduğundan elbise daha çok suyla temas eder.",
    "Derinlik arttıkça sıvı basıncı arttığından elbise daha büyük basınca dayanmalıdır.",
    "Derinde açık hava basıncı arttığından elbise daha büyük basınca dayanmalıdır."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: derinde suyun yoğunluğu artmaz; elbiseyi zorlayan, derinlikle artan sıvı basıncıdır.",
    "Miktar yanılgısı: elbiseyi zorlayan suyun miktarı ya da temas yüzeyi değil, derinliğe bağlı basınçtır.",
    null,
    "Basınçları karıştırma: derine inildikçe artan şey açık hava basıncı değil, sıvı basıncıdır."
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve cismin her yüzeyine her yönden etki eder. Dalgıç elbisesi, dalgıcın indiği derinlikteki bu basınca dayanmalıdır.
Adım 1: Derin deniz dalgıcı, sığ sulardaki dalgıca göre daha derindedir.
Adım 2: Derinlik arttığı için elbiseye etki eden sıvı basıncı da artar.
Adım 3: Bu yüzden derin sular için üretilen elbise, daha büyük basınca dayanacak biçimde daha sağlam yapılır.
Sağlama: Baraj duvarının tabana doğru kalınlaşması da aynı nedene dayanır.
Cevap C.`
},
{
  id: "fen-sg-249",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Evde vakumlu bir turşu kavanozunun kapağını açmakta zorlanan Mehmet, kapağın ortasındaki düğmenin içe doğru çökük olduğunu fark etmiştir. Kapağı zorla kaldırdığında “pop” sesi gelmiş ve kapak kolayca açılmıştır.
**Kapağın başta zor açılmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kavanozun içindeki basınç dışarıdakinden büyük olduğu için kapak kavanoza doğru bastırılır.",
    "Kavanozun içindeki basınç dışarıdakinden küçük olduğu için açık hava basıncı kapağı bastırır.",
    "Kavanozun içindeki ve dışındaki basınç eşit olduğu için kapak kendiliğinden yapışık kalır.",
    "Kavanozun içindeki boşluk, kapağı kavanozun içine doğru kendine çeker ve bastırır."
  ],
  dogru: 1,
  hatalar: [
    "Basınç yönünü ters kurma: içerideki basınç büyük olsaydı kapak dışarı doğru itilirdi; çökük düğme içerideki basıncın küçük olduğunu gösterir.",
    null,
    "Basınç farkını yok sayma: basınçlar eşit olsaydı kapağı kavanoza bastıran net bir etki olmazdı ve kapak kolay açılırdı.",
    "“Boşluk çeker” yanılgısı: kapağı içeri doğru hareket ettiren boşluk değil, dışarıdaki büyük basıncın itmesidir."
  ],
  aciklama: `Kapalı bir kabın içindeki hava seyreltilmişse içerideki basınç, dışarıdaki açık hava basıncından küçük olur. Dış basınç kapağı kaba bastırır.
Adım 1: Vakumlu kavanozda içerideki hava seyreltilmiştir. İçerideki basınç, dışarıdaki açık hava basıncından küçüktür.
Adım 2: Dışarıdaki büyük basınç kapağı kavanoza doğru bastırır; düğmenin içe çökmesi de bunun işaretidir.
Adım 3: Kapak kaldırılınca dışarıdan hava girer, iki basınç eşitlenir ve “pop” sesi duyulur. Kapak bu andan sonra kolay açılır.
Sık yapılan hata: “Boşluk çeker” demek. Kapağı bastıran, dışarıdaki havanın büyük basıncıdır.
Cevap B.`
},
{
  id: "fen-sg-250",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Kapağı sıkıca kapatılmış boş bir pet şişe, bir dalgıç tarafından denizde önce 5 m, sonra 15 m derinliğe indirilmiştir. Şişenin 15 m'de, 5 m'dekine göre daha fazla büzüştüğü gözlenmiştir.
**Bu gözlemin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Derinlik arttıkça şişeyi her yönden sıkıştıran sıvı basıncı artar.",
    "Derinlik arttıkça şişenin ağırlığı artar ve şişe kendi üzerine çöker.",
    "Derinlik arttıkça şişenin üstündeki su basıncı artar; yanlardan etki eden basınç değişmez.",
    "Derinlik arttıkça şişenin kütlesi artar; çünkü su şişenin içine girer."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İlgisiz neden: şişenin ağırlığı derinlikle değişmez; şişeyi büzen, dışarıdan etki eden sıvı basıncının artmasıdır.",
    "Yön yanılgısı: sıvı basıncı yalnızca üstten etki etmez; aynı derinlikte her yönde eşittir, yanlardan da artar.",
    "Olay örgüsünü yanlış kurma: kapak sıkıca kapalıdır, şişenin içine su girmez; büzülme dışarıdaki basınçtandır."
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve cisimlerin her yüzeyine her yönden etki eder. Derindeki bir cisim daha büyük bir basınçla sıkışır.
Adım 1: Şişe 15 m'de 5 m'dekinden daha derindir; suyun şişeye uyguladığı basınç daha büyüktür.
Adım 2: Bu basınç şişenin üstüne, altına ve yanlarına eşit etki eder; şişeyi her yönden sıkıştırır.
Adım 3: Esnek pet şişe, daha büyük basınca daha fazla büzülerek tepki verir.
Sık yapılan hata: Basıncı yalnızca bir yönde ya da cismin ağırlığıyla ilgili sanmak.
Cevap A.`
},
{
  id: "fen-sg-251",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Esra, bir akvaryumun içinde 10 cm derinliğe indirdiği basınç ölçerin sensörünü önce yan tarafa, sonra yukarıya, sonra da aşağıya baktırmıştır. Sensör üç durumda da aynı değeri göstermiştir.
**Esra'nın gözlemi aşağıdakilerden hangisini gösterir?**`,
  gorsel: null,
  secenekler: [
    "Sıvı basıncı, yukarı yönde aşağı yöne göre daha büyüktür.",
    "Sıvı basıncı sensörün baktığı yöne göre değişir.",
    "Sıvı basıncı derinlik arttıkça azalır.",
    "Aynı derinlikte sıvı basıncı her yönde eşittir."
  ],
  dogru: 3,
  hatalar: [
    "Yön yanılgısı: sensör yukarı, yana ve aşağı bakarken aynı değeri gösterdiği için yukarı yöndeki basınç diğer yönlerdekinden büyük değildir.",
    "Yön yanılgısı: sensörün yönü değiştiği halde değer değişmemiştir; basınç yöne göre değişmez.",
    "Ters yön ve yanlış okuma: derinlik sabit tutulmuştur; ayrıca derinlik arttıkça sıvı basıncı azalmaz, artar.",
    null
  ],
  aciklama: `Sıvılar bulundukları kabın her yüzeyine ve içlerindeki cisimlere her yönden basınç uygular. Aynı derinlikte bu basınç her yönde eşittir.
Adım 1: Deneyde derinlik (10 cm) ve sıvı (su) sabit tutulmuştur; yalnızca sensörün yönü değişmiştir.
Adım 2: Yön değiştiği halde sensörün değeri değişmemiştir. Demek ki ölçülen basınç yöne bağlı değildir.
Adım 3: Bu sonuç, aynı derinlikte sıvı basıncının her yönde eşit olduğu bilgisini destekler.
Sağlama: Sensör farklı bir derinliğe indirilseydi değer değişirdi.
Cevap D.`
},
{
  id: "fen-sg-252",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Ağzı açık bir pet şişenin yan yüzeyine, su yüzeyinden sırasıyla 6 cm, 12 cm ve 18 cm derinlikte K, L ve M delikleri açılmıştır. Delikler bantla kapatılıp şişe ağzına kadar suyla doldurulmuştur. Şişeye su eklenmeden bantlar aynı anda çıkarılmış ve su akmaya başlamıştır. Bu deneyle ilgili şu yargılar ileri sürülmüştür:
I. Başlangıçta M deliğinden çıkan su, üç delik arasında en güçlü fışkıranıdır.
II. Su düzeyi azaldıkça L deliğinden fışkıran suyun gücü zayıflar.
III. Şişe daha geniş bir şişeyle değiştirilse M deliğinden çıkan su daha güçlü fışkırırdı.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Eksik değerlendirme: I doğrudur, ama su düzeyi azaldıkça deliğin derinliği de azaldığı için II de doğrudur.",
    null,
    "Genişlik yanılgısı: III yanlıştır, çünkü kabın genişliği basıncı değiştirmez; I de doğru olduğu halde seçilmemiştir.",
    "Genişlik yanılgısı: I ve II doğrudur, ama III yanlıştır; kabın genişliği, aynı derinlikteki basıncı değiştirmez."
  ],
  aciklama: `Delikten fışkıran suyun gücü, deliğin su yüzeyinden olan derinliğindeki basınca bağlıdır. Derinlik arttıkça basınç ve fışkırma gücü artar.
Adım 1: I. yargıyı kontrol et. M deliği 18 cm ile en derin deliktir. Basıncı en büyük olduğu için su oradan en güçlü fışkırır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Su aktıkça su yüzeyi alçalır; L deliğinin yüzeyden derinliği azalır, buna bağlı olarak basınç da azalır. Fışkırma zayıflar. Doğrudur.
Adım 3: III. yargıyı kontrol et. M deliğinin derinliği yine 18 cm'dir; şişenin genişliği sıvı basıncını değiştirmez. Yanlıştır.
Sık yapılan hata: Geniş kapta “daha çok su olduğu için daha güçlü fışkırır” demek. Miktar değil derinlik belirleyicidir.
Cevap B.`
},
{
  id: "fen-sg-253",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Mine, tabanına yakın bir yerine iğneyle küçük bir delik açtığı pet şişeyi ağzına kadar suyla doldurup kapağını sıkıca kapatmıştır. Delikten yalnızca birkaç damla su akmış, sonra akış durmuştur. Mine kapağı açınca delikten su fışkırmaya başlamıştır.
**Kapak açıldığında delikten suyun fışkırmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kapak açılınca suyun yoğunluğu artar ve deliğe etki eden sıvı basıncı bu yüzden büyür.",
    "Kapak açılınca suyun derinliği artar ve deliğe etki eden basınç bu yüzden büyür.",
    "Kapak açılınca suyun yüzeyine açık hava basıncı etki eder, deliğin önündeki su dışarı itilir.",
    "Kapak açılınca şişenin içindeki hava, suyu delikten dışarı doğru kendine çeker."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: kapağın açılması suyun yoğunluğunu değiştirmez; değişen, suyun yüzeyine etki eden basınçtır.",
    "İlgisiz neden: kapağı açmak suyun derinliğini artırmaz; su miktarı ve yüksekliği aynıdır.",
    null,
    "“Boşluk çeker” yanılgısı: suyu dışarı hareket ettiren, içerideki havanın çekmesi değil, basıncı büyük olan taraftan itmesidir."
  ],
  aciklama: `Açık hava basıncı sıvıların yüzeyine etki eder. Su altındaki bir noktada toplam basınç, suyun yüzeyine etki eden basınç ile suyun derinlikten gelen basıncının toplamıdır.
Adım 1: Kapak kapalıyken delikten birkaç damla su çıkınca şişedeki hava biraz seyrekleşir, suyun yüzeyine etki eden basınç dışarıdaki açık hava basıncından küçük olur. Bu fark, deliğin önündeki suyun dışarı çıkmasını engeller ve akış durur.
Adım 2: Kapak açılınca suyun yüzeyine de dışarıdakiyle aynı açık hava basıncı etki eder. Böylece deliğin önünde, suyun derinliğinden gelen basınç dışarıya doğru fazla kalır.
Adım 3: Bu fazla basınç suyu delikten dışarı iter.
Sık yapılan hata: “Hava suyu çeker” demek. İtmenin nedeni basınç farkıdır.
Cevap C.`
},
{
  id: "fen-sg-254",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir dağcı grubu, dağ yamacındaki üç kampta açık hava basıncını barometreyle ölçmüştür. Kampların yükseltileri ve ölçülen değerler tabloda verilmiştir. Bu verilerle ilgili şu yargılar ileri sürülmüştür:
I. Yükselti arttıkça açık hava basıncı azalmaktadır.
II. M kampındaki barometre, deniz seviyesindeki bir barometreden daha büyük bir değer göstermiştir.
III. 4000 m yükseltide ölçülecek basınç 540 hPa ile 700 hPa arasındadır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kamp</th><th>Yükselti (m)</th><th>Açık hava basıncı (hPa)</th></tr><tr><td>K</td><td>2000</td><td>795</td></tr><tr><td>L</td><td>3000</td><td>700</td></tr><tr><td>M</td><td>5000</td><td>540</td></tr></table>`,
  secenekler: [
    "I ve III",
    "Yalnız II",
    "II ve III",
    "Yalnız III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Deniz seviyesini yanlış değerlendirme: M kampı deniz seviyesinden çok yüksektedir; yükselti arttıkça basınç azaldığı için M'deki değer deniz seviyesindekinden küçüktür. II yanlıştır.",
    "Eksik ve yanlış değerlendirme: II yanlıştır (deniz seviyesinde basınç, yüksek kamplardakinden büyüktür) ve I de doğru olduğu halde seçilmemiştir.",
    "Eksik değerlendirme: III doğrudur, ama tablo yükselti arttıkça basıncın azaldığını da açıkça gösterir; I de doğrudur."
  ],
  aciklama: `Yükseklere çıkıldıkça üstte kalan hava tabakası incelir ve açık hava basıncı azalır. Tablodaki verilerden yola çıkarak her yargıyı sına.
Adım 1: I. yargı: Yükselti 2000 m, 3000 m, 5000 m arttıkça basınç 795, 700, 540 hPa olarak azalmıştır. Doğrudur.
Adım 2: II. yargı: Deniz seviyesi, kampların hepsinden daha alçaktır. Yükselti arttıkça basınç azaldığı için deniz seviyesindeki basınç, 5000 m'deki M kampındakinden büyüktür. M'deki barometre daha küçük değer gösterir. Yanlıştır.
Adım 3: III. yargı: 4000 m, 3000 m ile 5000 m arasındadır; basınç da 700 hPa ile 540 hPa arasında olmalıdır. Doğrudur.
Sağlama: Sıralama deniz seviyesi > K > L > (4000 m) > M şeklindedir.
Cevap A.`
},
{
  id: "fen-sg-255",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Tepeye kurulmuş ağzı açık bir su kulesi, bir mahalledeki evlere pompasız olarak su vermektedir. Kulenin su yüzeyi, X evinin musluğundan 40 m, Y ve Z evlerinin musluklarından ise 25 m yüksektedir. Y evi kuleye yakın, Z evi kuleye uzaktır. Boru kayıpları önemsizdir ve musluklar kapalıdır.
**Buna göre musluklara etki eden sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "P_{Y} = P_{Z} > P_{X}",
    "P_{X} = P_{Y} = P_{Z}",
    "P_{X} > P_{Y} > P_{Z}",
    "P_{X} > P_{Y} = P_{Z}"
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: musluk su yüzeyinin ne kadar altındaysa basınç o kadar büyüktür; X en aşağıdadır ve basıncı en büyüktür.",
    "Yüksekliği yok sayma: musluklar aynı kuleden beslense de su yüzeyine olan düşey uzaklıkları farklıdır; basınçlar eşit olmaz.",
    "Uzaklık yanılgısı: kuleye olan yatay uzaklık basıncı değiştirmez; Y ve Z, su yüzeyinin aynı kadar altında olduğundan basınçları eşittir.",
    null
  ],
  aciklama: `Su kulesi, sıvı basıncının derinlikle artmasının bir uygulamasıdır. Kule yüksekte olduğu için alçaktaki musluklara büyük basınçlı su ulaşır. Derinlik, kulenin su yüzeyinden muslukların bulunduğu noktaya kadar olan düşey uzaklıktır.
Adım 1: X musluğu su yüzeyinin 40 m altındadır. Y ve Z muslukları 25 m altındadır. X en derindedir, bu yüzden basıncı en büyüktür.
Adım 2: Y ve Z, su yüzeyinin aynı kadar altındadır; aynı sıvıda aynı derinlikte basınç eşittir.
Adım 3: Z evinin kuleye daha uzak olması basıncı değiştirmez; basıncı belirleyen yatay uzaklık değil, düşey derinliktir.
Sağlama: Sıralama P_{X} > P_{Y} = P_{Z} olur.
Cevap D.`
},
{
  id: "fen-sg-256",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Su dolu bir havuzun içine, kenarları 40 cm olan kapalı bir küp batırılmıştır. Küpün üst yüzü su yüzeyinin 100 cm altında kalmaktadır. Küpün üst yüzü U, alt yüzü A, sağ yan yüzü S, sol yan yüzü L'dir. Suyun bu yüzlere uyguladığı basınçlar, yüzlerin orta noktalarında karşılaştırılacaktır.
**Buna göre bu noktalardaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "U > S = L > A",
    "U = A > S = L",
    "A > U > S = L",
    "A > S = L > U"
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: derinlik arttıkça basınç artar; su yüzeyine en yakın U yüzünün basıncı en küçüktür.",
    "Yön yanılgısı: basıncın üst ve alt yüzde eşit olduğu sanılmıştır; alt yüz daha derin olduğu için A'nın basıncı daha büyüktür.",
    "Yan yüzleri yok sayma: A en derindir, ama S ve L orta noktalarında U'dan daha derindedir; U'nun basıncı S ve L'ninkinden küçüktür.",
    null
  ],
  aciklama: `Sıvı basıncı, su yüzeyinden ölçülen derinlikle artar. Aynı derinlikteki noktalarda basınç eşittir.
Adım 1: Noktaların derinliklerini bul. U'nun orta noktası 100 cm derinliktedir. S ve L yüzlerinin orta noktaları, küpün yüksekliğinin yarısı (20 cm) kadar daha aşağıdadır: 120 cm. A'nın orta noktası 40 cm daha aşağıdadır: 140 cm.
Adım 2: S ve L aynı derinlikte olduğundan basınçları eşittir.
Adım 3: Derinlik sırası 140 > 120 = 120 > 100 olduğu için basınç sırası A > S = L > U olur.
Sık yapılan hata: Küpün her yüzünün aynı derinlikte olduğunu düşünmek.
Cevap D.`
},
{
  id: "fen-sg-257",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir araba atölyesindeki hidrolik kriko, yağla dolu kapalı bir sistemdir. Dar piston el kolu ile aşağı doğru itilmekte, yağ da geniş pistonu yukarı doğru iterek aracı kaldırmaktadır. Usta, dar pistona uyguladığı kuvveti artırmıştır. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Dar pistonun altındaki yağ basıncı artar ve bu artış geniş pistona aynen iletilir.
II. Dar pistona uygulanan kuvvet yağ tarafından geniş pistona aynen iletilir; bu yüzden iki pistonu iten kuvvetler eşittir.
III. Geniş pistonun altındaki yağ basıncı, dar pistonun altındakinden büyüktür; araç bu yüzden kalkar.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: yağ kuvveti değil basıncı aynen iletir; geniş pistonu iten kuvvet daha büyüktür. II yanlıştır.",
    null,
    "Basınç ile kuvveti karıştırma: III yanlıştır. Pascal prensibine göre basınç geniş pistona aynen iletilir; geniş pistonun altındaki basınç daha büyük olmaz, büyüyen kuvvettir.",
    "İki yanılgı birlikte: II yanlıştır (kuvvetler eşit değildir) ve III yanlıştır (basınçlar aynıdır); doğru olan I seçilmemiştir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Sıvı kuvveti değil basıncı iletir.
Adım 1: I. yargıyı kontrol et. Dar pistona uygulanan kuvvet artınca dar pistonun altındaki yağ basıncı artar. Bu artış geniş pistona da aynen iletilir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Aynen iletilen şey basınçtır, kuvvet değildir. Aynı basınç geniş bir yüzeye etki ettiği için geniş pistonu iten kuvvet, dar pistona uygulanan kuvvetten büyüktür; kuvvetler eşit değildir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Basınç yağın her noktasına aynen iletildiğinden geniş pistonun altındaki basınç, dar pistonun altındakinden büyük olmaz; ikisi eşittir. Araç, aynı basıncın geniş yüzeye etki etmesiyle oluşan büyük kuvvetle kalkar. Yanlıştır.
Sık yapılan hata: “Geniş pistonun kuvveti büyükse basıncı da büyüktür” demek.
Cevap B.`
},
{
  id: "fen-sg-258",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir fen kulübü öğrencisi, sıvı basıncının derinlikle arttığını açıklayan örnekleri not defterine yazmaktadır. Yazdığı örneklerden birinin bu bilgiyle açıklanamayacağını fark etmiştir.
**Aşağıdakilerden hangisi sıvı basıncının derinlikle artmasıyla __açıklanamaz__?**`,
  gorsel: null,
  secenekler: [
    "Hidrolik presin küçük bir kuvvetle ağır bir yükü kaldırması",
    "Dalgıcın derin sularda kulaklarında baskı hissetmesi",
    "Baraj duvarının tabana doğru kalınlaşması",
    "Delikli bir kapta alttaki delikten suyun daha güçlü fışkırması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış eleme: dalgıcın kulaklarındaki baskı, derinlikle artan sıvı basıncıyla açıklanır; dışta kalan şık bu değildir.",
    "Yanlış eleme: baraj duvarının tabanda kalın yapılması derinlikle artan sıvı basıncı yüzündendir; dışta kalan şık bu değildir.",
    "Yanlış eleme: alttaki deliğin derinliği fazla olduğu için orada basınç büyüktür; bu da derinlikle artan sıvı basıncıyla açıklanır."
  ],
  aciklama: `Sıvı basıncı derinlikle arttığı için derindeki cisimler, duvarlar ve kulaklar daha büyük basınca maruz kalır.
Adım 1: Dalgıcın kulaklarındaki baskı, baraj duvarının tabanda kalın yapılması ve alttaki delikten suyun daha güçlü fışkırması, derinlik arttıkça basıncın artmasının sonuçlarıdır.
Adım 2: Hidrolik pres ise kapalı yağın uygulanan basıncı aynen iletmesine, yani Pascal prensibine dayanır. Orada ölçüt derinlik değil, dışarıdan pistonla uygulanan basınçtır.
Sık yapılan hata: Sıvı içeren her düzeneği derinlikle açıklamak.
Cevap A.`
},
{
  id: "fen-sg-259",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Sıvı basıncı ve Pascal prensibiyle ilgili şu yargılar ileri sürülmüştür:
I. Pascal prensibinin uygulanabilmesi için sıvının ağzı açık bir kapta bulunması gerekir.
II. Durgun bir sıvıda, aynı yatay düzeyde bulunan noktalardaki sıvı basıncı birbirine eşittir.
III. Denizaltılar derinlere indikçe gövdelerine etki eden sıvı basıncı artar.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve II"
  ],
  dogru: 2,
  hatalar: [
    "Koşulu ters kurma: Pascal prensibi, sıvının kapalı bir kapta olmasını ister; I yanlıştır. II ve III doğrudur.",
    "Eksik değerlendirme: III doğrudur, ama aynı sıvıda aynı yatay düzeydeki noktalarda basıncın eşit olması da doğrudur (II).",
    null,
    "Koşulu ters kurma: I yanlıştır, çünkü Pascal prensibi kapalı kap ister; III doğru olduğu halde seçilmemiştir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Sıvı basıncı ise derinlikle artar ve aynı derinlikte her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Basıncın bir pistonla uygulanıp sıvının her yerine iletilebilmesi için sıvının kapalı bir kapta olması gerekir. Ağzı açık kapta sıvı dışarı kaçar. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Sıvı basıncı derinliğe bağlıdır. Aynı yatay düzeydeki noktaların derinliği aynıdır, bu yüzden basınçları eşittir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Derinlik arttıkça sıvı basıncı artar; denizaltının gövdesi daha büyük basınca maruz kalır. Doğrudur.
Sık yapılan hata: Sıvı varsa Pascal prensibi uygulanır sanmak. Sıvının kapalı kapta olması gerekir.
Cevap C.`
},
{
  id: "fen-sg-260",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir meteoroloji ekibi, aynı gün aynı saatte dört kentte barometreyle açık hava basıncını ölçecektir. Kentlerin yükseltileri ve denize olan uzaklıkları tabloda verilmiştir.
**Ölçülen açık hava basınçlarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kent</th><th>Yükselti (m)</th><th>Denize uzaklık (km)</th></tr><tr><td>K</td><td>1900</td><td>200</td></tr><tr><td>L</td><td>15</td><td>0</td></tr><tr><td>M</td><td>850</td><td>300</td></tr><tr><td>N</td><td>1300</td><td>100</td></tr></table>`,
  secenekler: [
    "K > N > M > L",
    "L > M > N > K",
    "L > N > M > K",
    "N > M > K > L"
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: yükseldikçe açık hava basıncı azalır; en yüksekteki K'nin basıncı en küçüktür.",
    null,
    "İlgisiz ölçüt: sıralama denize uzaklığa göre kurulmuş (N, M'den daha yakın); açık hava basıncını belirleyen yükseltidir.",
    "Ters yön ve karışık sıralama: yükselti arttıkça basınç azalır; K en küçük, L en büyük basınca sahiptir."
  ],
  aciklama: `Açık hava basıncı, yükseldikçe üstteki hava tabakası incelediği için azalır. Karşılaştırmada ölçüt yükseltidir.
Adım 1: Kentleri yükseltisi küçükten büyüğe sırala: L (15 m) < M (850 m) < N (1300 m) < K (1900 m).
Adım 2: Yükselti arttıkça basınç azaldığı için basınç sırası büyükten küçüğe L > M > N > K olur.
Adım 3: Denize uzaklık tabloda bilgi olarak verilmiştir, ama sıralamayı belirlemez.
Sağlama: En alçak L en büyük, en yüksek K en küçük basınca sahiptir.
Cevap B.`
},
{
  id: "fen-sg-261",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Zeynep, su dolu bir bardağa pipet daldırmış, pipetin üst ucunu parmağıyla kapatıp pipeti bardaktan çıkarmıştır. Pipetin içindeki su aşağı akmamıştır. Zeynep parmağını kaldırınca su hemen akmıştır.
**Parmak pipetin ucundayken suyun akmamasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Parmak, pipetin içindeki suyun ağırlığını azaltarak suyun akmasını engeller.",
    "Parmağın ısısı, pipetin içindeki suyun yoğunluğunu artırarak akmasını engeller.",
    "Pipetin alt ucuna etki eden açık hava basıncı, suyu yukarı doğru tutar.",
    "Pipetin içindeki boşluk, suyu yukarı doğru çekerek akmasını engeller."
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: parmak suyun ağırlığını değiştirmez; suyu tutan, açık hava basıncıdır.",
    "İlgisiz neden: parmağın ısısı suyun yoğunluğunu anlamlı biçimde değiştirmez ve akmamayı açıklamaz.",
    null,
    "“Boşluk çeker” yanılgısı: suyu tutan boşluk değil, pipetin alt ucundan yukarı doğru iten açık hava basıncıdır."
  ],
  aciklama: `Açık hava basıncı her yöne etki eder. Pipetin alt ucunda su dışarıdaki havayla temas eder; hava suyu yukarı doğru iter.
Adım 1: Parmakla üst uç kapatılınca pipetin içindeki su biraz aşağı kayar, üstteki hava seyrekleşir ve basıncı dışarıdan küçük kalır.
Adım 2: Pipetin alt ucuna açık hava basıncı aşağıdan yukarı doğru etki eder. Bu basınç, içerideki küçük basıncın ve suyun ağırlığının toplamını dengeler; su akmaz.
Adım 3: Parmak kalkınca üst uçtan da hava girer ve suya yukarıdan da açık hava basıncı etki eder. Yukarıdan ve aşağıdan etki eden basınçlar eşitlendiği için suyun ağırlığı onu aşağı akıtır.
Sık yapılan hata: “Boşluk suyu çeker” demek.
Cevap C.`
},
{
  id: "fen-sg-262",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir laboratuvarda dört noktadaki sıvı basıncı karşılaştırılacaktır. P noktası su içinde 30 cm, R noktası tuzlu su içinde 30 cm, S noktası zeytinyağı içinde 40 cm, T noktası ise tuzlu su içinde 45 cm derinliktedir. Derinlikler sıvı yüzeyinden ölçülmüştür. Yoğunluklar arasında tuzlu su > su > zeytinyağı ilişkisi vardır.
**Buna göre aşağıdaki karşılaştırmalardan hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "T noktasındaki basınç, R noktasındakinden büyüktür.",
    "S noktasındaki basınç, P noktasındakinden büyüktür.",
    "R noktasındaki basınç, T noktasındakinden büyüktür.",
    "S noktasındaki basınç, T noktasındakinden büyüktür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek etkene bakma: S daha derindir, ama P'deki su zeytinyağından yoğundur; etkenler ters yönde olduğu için kesin söylenemez.",
    "Ters yön: R ile T aynı sıvıdadır ve T daha derindir; derinlik arttıkça basınç arttığı için T'nin basıncı büyüktür.",
    "Ters yön: T hem daha derin hem de daha yoğun bir sıvıdadır (tuzlu su > zeytinyağı); T'nin basıncı S'ninkinden büyüktür."
  ],
  aciklama: `Sıvı basıncı derinliğe ve yoğunluğa bağlıdır. Sıvı aynıysa derin olanın basıncı büyüktür; iki etken aynı yöndeyse sonuç kesindir; ters yöndeyse kesin söylenemez.
Adım 1: T ile R'yi karşılaştır. İkisi de tuzlu sudadır; T daha derindir (45 cm > 30 cm). T'nin basıncı kesinlikle daha büyüktür. A doğrudur, C yanlıştır.
Adım 2: S ile P'yi karşılaştır. S daha derin (40 cm > 30 cm), ama P'nin sıvısı olan su daha yoğundur. Etkenler ters yöndedir; kesin söylenemez.
Adım 3: S ile T'yi karşılaştır. T hem daha derin hem de daha yoğun bir sıvıdadır; T'nin basıncı daha büyüktür, D yanlıştır.
Sağlama: Kesin doğru olan tek karşılaştırma A'dır.
Cevap A.`
},
{
  id: "fen-sg-263",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir depoda kullanılan hidrolik transpaletin kolu aşağı yukarı hareket ettirildiğinde, kapalı sistemdeki yağ dar pistondan geniş pistona basınç iletir. Geniş piston, yükü taşıyan çatalı yukarı kaldırır. Bu sistemle ilgili şu yargılar ileri sürülmüştür:
I. Dar pistona uygulanan kuvvet artırılırsa yağın her noktasındaki basınç artar.
II. Yağ, basıncı yalnızca dar pistonun hareket yönünde iletir.
III. Basınç aynı kalmak üzere geniş pistonun yüzeyi büyütülürse geniş pistonu iten kuvvet de büyür.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "II ve III",
    "I ve III"
  ],
  dogru: 3,
  hatalar: [
    "Yön yanılgısı: Pascal prensibine göre sıvı basıncı her yöne aynen iletir; yalnızca hareket yönüne iletmez. II yanlıştır; I ve III doğrudur.",
    "Yön yanılgısı: II yanlıştır (basınç her yöne iletilir); I doğru olduğu halde III seçilmemiştir.",
    "Yön yanılgısı: III doğrudur, ama II yanlıştır (basınç yalnızca hareket yönüne değil, her yöne iletilir); I doğru olduğu halde seçilmemiştir.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir. Basınç büyüdüğü yüzeye etki ettiğinde kuvvet de büyür.
Adım 1: I. yargıyı kontrol et. Dar pistona uygulanan kuvvet artınca dar pistonun altındaki basınç artar. Bu artış sıvının her noktasına iletilir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Basınç yalnızca bir yöne değil, yağın bulunduğu her yöne ve noktaya iletilir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Aynı basınç daha geniş bir yüzeye etki ederse yüzeyi iten kuvvet büyür. Geniş pistonun yüzeyi büyüdükçe iten kuvvet de büyür. Doğrudur.
Sık yapılan hata: Geniş pistonun büyümesinin yağın basıncını da değiştireceğini sanmak. Basınç aynı kalır, değişen kuvvettir.
Cevap D.`
},
{
  id: "fen-sg-264",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Biçimleri farklı K, L ve M kaplarına görseldeki gibi aynı yüksekliğe kadar sıvı doldurulmuştur. K ve M kaplarında su, L kabında tuzlu su vardır. Tuzlu suyun yoğunluğu suyun yoğunluğundan büyüktür. Kapların taban alanları ve içlerindeki sıvı miktarları birbirinden farklıdır.
**Kapların tabanlarına etki eden sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 262" role="img" aria-label="Üç kap: K dar bir silindir ve içinde su, L yukarı doğru genişleyen bir kap ve içinde tuzlu su, M boyunlu bir kap ve içinde su; üç kapta da sıvı yüksekliği aynıdır"><g fill="var(--dolgu)"><rect x="40" y="110" width="60" height="100"/><polygon points="186.7,110 293.3,110 280,210 200,210"/><polygon points="411.8,110 448.2,110 480,210 380,210"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 60 V210 H100 V60"/><path d="M180 60 L200 210 H280 L300 60"/><path d="M415 60 V100 L380 210 H480 L445 100 V60"/></g><line x1="20" y1="110" x2="500" y2="110" stroke="var(--vurgu)" stroke-width="1.5" stroke-dasharray="6 4"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="70" y="165">Su</text><text x="240" y="165">Tuzlu su</text><text x="430" y="165">Su</text><text x="70" y="236">K</text><text x="240" y="236">L</text><text x="430" y="236">M</text><text x="260" y="256">Üç kapta da sıvı yüksekliği aynıdır.</text></g></svg>`,
  secenekler: [
    "P_{K} = P_{L} = P_{M}",
    "P_{L} > P_{K} = P_{M}",
    "P_{K} > P_{L} > P_{M}",
    "P_{K} = P_{L} > P_{M}"
  ],
  dogru: 1,
  hatalar: [
    "Sıvının cinsini yok sayma: derinlikler eşittir, ama L'deki tuzlu su daha yoğundur; L'nin tabanındaki basınç daha büyüktür.",
    null,
    "Kap biçimine bağlama: K ile M'nin sıvısı ve derinliği aynıdır; kapların biçimi basıncı değiştirmediği için basınçları eşittir.",
    "Kap biçimine bağlama ve cinsi yok sayma: M'nin boyunlu olması basıncı küçültmez; ayrıca tuzlu su L'yi büyük yapar."
  ],
  aciklama: `Sıvı basıncı, sıvının cinsine (yoğunluğuna) ve derinliğe bağlıdır. Kabın biçimi, genişliği ve sıvı miktarı basıncı değiştirmez.
Adım 1: K ile M'yi karşılaştır. İkisinde de sıvı sudur ve sıvı yüksekliği aynıdır. Kapların biçimleri ve miktarları farklı olsa da tabanlardaki basınçlar eşittir.
Adım 2: L ile K'yi karşılaştır. Derinlikler aynıdır, ama L'deki tuzlu su daha yoğundur. Aynı derinlikte yoğun sıvı daha büyük basınç yapar; L'nin tabanındaki basınç daha büyüktür.
Adım 3: Sıralama P_{L} > P_{K} = P_{M} olur.
Sık yapılan hata: Dar boyunlu ya da geniş kapta basıncın değişeceğini sanmak.
Cevap B.`
},
{
  id: "fen-sg-265",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir meteoroloji balonu yükselirken taşıdığı barometre, açık hava basıncını farklı yüksekliklerde ölçmüştür. Elde edilen değerler grafikte gösterilmiştir.
**Grafiğe göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 -14 520 276" role="img" aria-label="Açık hava basıncı ve yükseklik grafiği: 0 km yükseklikte 1000 hPa, 2 km yükseklikte 800 hPa, 4 km yükseklikte 630 hPa, 6 km yükseklikte 490 hPa"><path d="M60 22 V210 H490" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2"><line x1="60" y1="210" x2="60" y2="216"/><line x1="200" y1="210" x2="200" y2="216"/><line x1="340" y1="210" x2="340" y2="216"/><line x1="480" y1="210" x2="480" y2="216"/><line x1="54" y1="30" x2="60" y2="30"/><line x1="54" y1="120" x2="60" y2="120"/></g><polyline points="60,30 200,90 340,141 480,183" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu)"><circle cx="60" cy="30" r="4.5"/><circle cx="200" cy="90" r="4.5"/><circle cx="340" cy="141" r="4.5"/><circle cx="480" cy="183" r="4.5"/></g><g fill="currentColor" font-size="14"><g text-anchor="middle"><text x="60" y="234">0</text><text x="200" y="234">2</text><text x="340" y="234">4</text><text x="480" y="234">6</text><text x="200" y="78">800</text><text x="340" y="129">630</text><text x="480" y="171">490</text><text x="275" y="254">Yükseklik (km)</text></g><g text-anchor="end"><text x="50" y="35">1000</text><text x="50" y="125">700</text></g><text x="76" y="26">1000</text><text x="66" y="0">Basınç (hPa)</text></g></svg>`,
  secenekler: [
    "Yükseklik 2 km'den 4 km'ye çıkarken basınçtaki azalma, 0 km'den 2 km'ye çıkarkenkinden azdır.",
    "Yükseklik her 2 km arttığında basınç eşit miktarda azalmıştır.",
    "Yükseklik 4 km'den 6 km'ye çıkarken basınçtaki azalma, 0 km'den 2 km'ye çıkarkenkinden fazladır.",
    "Yükseklik 4 km'yi geçtikten sonra arttıkça basınç artmaya başlamıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eşit azalma yanılgısı: basınç 0–2 km arasında 200 hPa, 2–4 km arasında 170 hPa, 4–6 km arasında 140 hPa azalmıştır; azalma miktarları eşit değildir.",
    "Karşılaştırmayı ters kurma: 4–6 km arasındaki azalma 140 hPa, 0–2 km arasındaki 200 hPa'dır; yani daha azdır.",
    "Ters yön: 4 km'den sonra da basınç azalmaya devam eder (630 hPa'dan 490 hPa'ya); yükseklikle basınç artmaz."
  ],
  aciklama: `Açık hava basıncı yükseklikle azalır. Bu yargıları grafikteki değerlerle karşılaştır.
Adım 1: Her 2 km'lik aralıktaki azalmayı bul. 0–2 km: 1000 − 800 = 200 hPa. 2–4 km: 800 − 630 = 170 hPa. 4–6 km: 630 − 490 = 140 hPa.
Adım 2: Azalma miktarları eşit değildir (B yanlış). 2–4 km'deki azalma (170), 0–2 km'dekinden (200) azdır (A doğru). 4–6 km'deki azalma (140), 0–2 km'dekinden fazla değildir (C yanlış).
Adım 3: Basınç 6 km'ye kadar sürekli azalmıştır; 4 km'den sonra artmaz (D yanlış).
Sağlama: Alçak yükseklikte hava tabakası kalın olduğu için basınç hızlı düşer; yukarıda azalma yavaşlar.
Cevap A.`
},
{
  id: "fen-sg-266",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir su sebilinde, ağzı aşağı bakan dolu damacana su haznesine yerleştirilmiştir. Damacananın ağzı hazneye dolu suyun içinde kalmaktadır. Hazne doluyken damacanadan haznenin içine su akmamaktadır. Sebilden su alınıp haznedeki su azalınca damacananın içinde kabarcıklar yükselmekte ve damacanadaki su haznesine akmaktadır.
**Hazne doluyken damacanadaki suyun haznenin içine akmamasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Damacana dolu olduğu için damacanadaki suyun basıncı sıfır olur ve su akmaz.",
    "Damacananın ağzı suyun içinde kalınca damacanadaki suyun ağırlığı yok olur.",
    "Haznedeki suyun yüzeyine etki eden açık hava basıncı, damacanadaki suyu yukarı iter.",
    "Haznedeki su, damacanadaki suyu kendine doğru çekerek aşağı inmesini engeller."
  ],
  dogru: 2,
  hatalar: [
    "Yanlış varsayım: damacanadaki suyun da derinliğine bağlı bir basıncı vardır; sıfır olmaz. Suyu tutan, dışarıdaki açık hava basıncıdır.",
    "İlgisiz neden: ağzın suya batması suyun ağırlığını yok etmez; suyu tutan açık hava basıncıdır.",
    null,
    "“Çekme” yanılgısı: haznedeki su damacanadaki suyu çekmez; suyu tutan, haznenin yüzeyine etki eden açık hava basıncının itmesidir."
  ],
  aciklama: `Açık hava basıncı, sıvıların açık yüzeyine etki eder ve sıvıyı her yöne iter. Kapalı bir kapta sıvıyı tutan çoğu zaman bu basınçtır.
Adım 1: Damacananın ağzı haznedeki suyun içindedir. Haznedeki suyun yüzeyine açık hava basıncı etki eder; bu basınç damacananın ağzındaki suyu yukarı doğru iter.
Adım 2: Damacanadaki suyun ağzındaki basıncı, açık hava basıncını yenemez; su akmaz.
Adım 3: Haznedeki su azalıp damacananın ağzı açığa çıkınca damacanaya hava girer (kabarcıklar), içerideki basınç artar ve damacanadaki su haznesine akar.
Sık yapılan hata: Suyu tutan şeyin “boşluk” olduğunu sanmak. Tutan, dışarıdaki havanın basıncıdır.
Cevap C.`
},
{
  id: "fen-sg-267",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Aynı yeraltı suyundan beslenen iki kuyudan K kuyusunda su yüzeyi kuyu ağzından 3 m, kuyunun tabanı ise kuyu ağzından 10 m aşağıdadır. L kuyusunda su yüzeyi kuyu ağzından 1 m, kuyunun tabanı ise kuyu ağzından 9 m aşağıdadır. İki kuyu da ağzı açık ve aynı türde sudur.
**Kuyuların tabanlarındaki sıvı basınçları için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "K'nin tabanındaki basınç daha büyüktür; çünkü K kuyusunun tabanı kuyu ağzından daha uzaktadır.",
    "İki kuyunun tabanındaki basınç eşittir; çünkü ikisi de aynı yeraltı suyuyla beslenir.",
    "L'nin tabanındaki basınç daha büyüktür; çünkü L'de su yüzeyi ile taban arasındaki yükseklik daha fazladır.",
    "K'nin tabanındaki basınç daha büyüktür; çünkü K'de su yüzeyi kuyu ağzından daha uzaktadır."
  ],
  dogru: 2,
  hatalar: [
    "Derinliği yanlış ölçme: derinlik kuyu ağzından değil, su yüzeyinden ölçülür; K'de su yüksekliği 7 m, L'de 8 m'dir.",
    "Derinliği yok sayma: aynı suyla beslenmek tabandaki basıncı eşit yapmaz; su yüksekliği farklıdır (K'de 7 m, L'de 8 m).",
    null,
    "Derinliği yanlış ölçme: su yüzeyinin kuyu ağzından uzak olması su derinliğini artırmaz; tersine, K'de su yüksekliğini azaltır."
  ],
  aciklama: `Sıvı basıncında derinlik, sıvının açık yüzeyinden noktaya kadar olan uzaklıktır. Kabın ağzından ya da kenarından ölçülmez.
Adım 1: K kuyusunda su yüksekliği: taban 10 m, su yüzeyi 3 m aşağıda olduğundan 10 − 3 = 7 m.
Adım 2: L kuyusunda su yüksekliği: 9 − 1 = 8 m.
Adım 3: Aynı tür sudur; derinlik L'de daha fazla olduğundan L'nin tabanındaki basınç daha büyüktür.
Sık yapılan hata: Kuyunun toplam derinliğine (K'de 10 m) bakmak. Önemli olan su yüksekliğidir.
Cevap C.`
},
{
  id: "fen-sg-268",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Aşağıda üç gözlem verilmiştir:
I. Uçak havalanırken yolcunun elindeki kapalı çerez paketinin şişmesi
II. Deniz kıyısında kapağı kapatılan diş macunu tüpünün, yüksek bir dağ yolunda sertleşip şişmesi
III. Pipetle meyve suyu içilirken meyve suyunun pipetten yukarı çıkması
**Bu gözlemlerden hangileri, yükseldikçe açık hava basıncının azalmasıyla açıklanabilir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız III",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Gözlemi yanlış eşleştirme: III'te sıvıyı iten açık hava basıncıdır, ama olayın nedeni basıncın yükseklikle azalması değildir. I ve II ise bu bilgiyle açıklanır.",
    null,
    "Eksik ve yanlış değerlendirme: III yükselmeyle ilgili değildir; I ise yükseldikçe basıncın azalmasıyla açıklandığı halde seçilmemiştir.",
    "Fazla genelleme: III'ü de katmak yanlıştır; pipetle içmede yükseklik değişmez, sıvıyı iten basınç farkı pipetin içindeki basıncın azaltılmasıyla oluşur."
  ],
  aciklama: `Açık hava basıncı yükseldikçe azalır. Ağzı kapalı esnek kaplar, dış basınç azalınca içerideki basıncın etkisiyle şişer.
Adım 1: I. gözlem: Uçak yükselirken dışarıdaki basınç azalır; paketin içindeki basınç dışarıdakinden büyük kalır ve paket şişer. Açıklanır.
Adım 2: II. gözlem: Tüp deniz kıyısında kapatılmıştır. Dağ yolunda yükseldikçe dışarıdaki açık hava basıncı azalır; tüpün içi dışarıdakinden büyük basınçta kalır ve tüp şişer. Açıklanır.
Adım 3: III. gözlem: Pipetle içmede sıvıyı yukarı iten, pipetin içindeki basınç azaltılınca sıvının yüzeyine etki eden açık hava basıncıdır. Burada yükseklik değişmez; olay basıncın yükseklikle azalmasıyla açıklanmaz.
Sık yapılan hata: Açık hava basıncıyla ilgili her olayı yükseklikle ilişkilendirmek.
Cevap B.`
},
{
  id: "fen-sg-269",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Kapağı sıkıca kapalı, esnek duvarlı bir plastik şişe tamamen suyla doldurulmuştur. Şişenin üst yüzeyinde iğneyle üç küçük delik açılmış ve şişe gövdesinden elle sıkılmıştır. Suyun üç delikten de fışkırdığı görülmüştür.
**Bu olay aşağıdakilerden hangisiyle açıklanır?**`,
  gorsel: null,
  secenekler: [
    "Uygulanan kuvvet, kapalı kaptaki suyun her noktasına aynen iletilir.",
    "Uygulanan basınç, kapalı kaptaki suyun her noktasına aynen iletilir.",
    "Sıkılan suyun yoğunluğu artar; bu artış suyu deliklerden dışarı iter.",
    "Delikler üstte olduğundan su, açık hava basıncı sayesinde dışarı çıkar."
  ],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: Pascal prensibinde aynen iletilen kuvvet değil, basınçtır.",
    null,
    "İlgisiz neden: su neredeyse sıkıştırılamaz; sıkılınca yoğunluğu artmaz, deliklerden çıkış basıncın iletilmesiyledir.",
    "Açık hava basıncını yanlış yerde arama: dışarıdaki açık hava basıncı suyu dışarı itmez; şişeyi sıkmak suya dışarıdan basınç uygular."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir.
Adım 1: Şişe kapalı ve tamamen su dolu olduğu için içindeki su kapalı bir sistemdir. Sıkma, suya dışarıdan basınç uygular.
Adım 2: Bu basınç suyun her noktasına iletilir; üç delikte de dışarıya doğru etki eder ve suyu dışarı iter. İletilen şey kuvvet değil basınçtır.
Adım 3: Su neredeyse sıkışmadığı için basınç kayıpsız iletilir.
Sağlama: Sıkma bırakılınca basınç ortadan kalkar ve fışkırma durur.
Cevap B.`
},
{
  id: "fen-sg-270",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, geniş ve dar iki bidonun yan yüzeyindeki bir deliğin üzerinde bulunan su derinliğini 5 cm, 10 cm ve 15 cm yapıp fışkıran suyun yere düştüğü uzaklığı ölçmüştür. Her ölçümde deliğin zeminden yüksekliği aynı tutulmuştur. Sonuçlar tabloda verilmiştir.
**Tablodaki veriler aşağıdaki yargılardan hangisini destekler?**`,
  gorsel: `<table class="tablo"><tr><th>Delik derinliği (cm)</th><th>Geniş bidonda uzaklık (cm)</th><th>Dar bidonda uzaklık (cm)</th></tr><tr><td>5</td><td>14</td><td>14</td></tr><tr><td>10</td><td>20</td><td>20</td></tr><tr><td>15</td><td>24</td><td>24</td></tr></table>`,
  secenekler: [
    "Bu deneyde fışkıran suyun düştüğü uzaklığı yalnızca delik derinliği etkilemiştir.",
    "Bu deneyde fışkıran suyun düştüğü uzaklığı yalnızca bidonun genişliği etkilemiştir.",
    "Bu deneyde fışkıran suyun düştüğü uzaklığı hem bidonun genişliği hem delik derinliği etkilemiştir.",
    "Bu deneyde fışkıran suyun düştüğü uzaklığı ne bidonun genişliği ne de delik derinliği etkilemiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tabloyu ters okuma: iki bidonda aynı derinlikte aynı uzaklık ölçülmüştür, yani genişliğin etkisi yoktur; uzaklık derinlikle değişmektedir.",
    "Genişliği etkili sanma: aynı derinlikte geniş ve dar bidonun uzaklıkları eşittir; bidonun genişliğinin etkisi yoktur.",
    "Derinliğin etkisini yok sayma: her bidonda derinlik arttıkça uzaklık 14, 20, 24 cm olarak artmıştır."
  ],
  aciklama: `Bir değişkenin etkisini anlamak için o değişkenin değiştiği, diğerlerinin sabit kaldığı satırlara bakılır. Delikten fışkıran suyun gücü deliğin derinliğine bağlıdır; kabın genişliğine bağlı değildir.
Adım 1: Her satırda iki bidonu karşılaştır. 5 cm, 10 cm ve 15 cm derinlikte geniş ve dar bidonun uzaklıkları aynıdır (14, 20, 24 cm). Genişliğin etkisi yoktur.
Adım 2: Her bidonda derinlik 5 cm'den 15 cm'e artarken uzaklık 14 cm'den 24 cm'e artmıştır. Uzaklık derinliğe bağlıdır.
Adım 3: Bu deneyde değiştirilen iki değişkenden yalnızca derinlik etkili olmuştur. Bu, A seçeneğindeki yargıyı destekler.
Sağlama: Genişlik etkili olsaydı aynı satırdaki iki değer farklı olurdu.
Cevap A.`
},
{
  id: "fen-sg-271",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir otomobilin hidrolik fren sisteminde, fren yağının aktığı hortumda küçük bir çatlak oluşmuştur. Sürücü fren pedalına bastığında pedal normalden daha yumuşak biçimde aşağı inmiş, ancak otomobil yeterince yavaşlamamıştır.
**Frenin yeterince çalışmamasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Fren yağının yoğunluğu arttığı için pedala uygulanan kuvvet küçülmüş ve frenleme zayıflamıştır.",
    "Pedala uygulanan kuvvet, fren yağı tarafından değil metal borular tarafından iletilmektedir.",
    "Fren yağı sıkıştırılamadığı için pedalın uyguladığı basınç tekerleklere ulaşamamıştır.",
    "Sistem kapalı olmaktan çıktığı için pedalın uyguladığı basınç tekerleklere iletilememiştir."
  ],
  dogru: 3,
  hatalar: [
    "İlgisiz neden: çatlak yağın yoğunluğunu artırmaz; sorun, yağın basıncı iletecek kapalı bir sistemde olmamasıdır.",
    "Yanlış varsayım: basıncı ileten metal borular değil, boruların içindeki fren yağıdır.",
    "Özelliği ters kullanma: yağın sıkıştırılamaması basıncın iletilmesini sağlar, engellemez.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Bunun için sıvının kapalı bir sistemde olması gerekir.
Adım 1: Hidrolik fren, pedala bağlı pistonun kapalı fren yağına basınç uygulamasıyla çalışır. Yağ bu basıncı tekerleklerdeki pistonlara iletir.
Adım 2: Hortumdaki çatlak sistemi açık hâle getirir. Pedalın uyguladığı basıncın bir bölümü yağın dışarı sızmasına ve havanın girmesine gider, tekerlekteki pistonlara aynen ulaşamaz.
Adım 3: Bu yüzden pedal yumuşar ve fren zayıf kalır.
Sık yapılan hata: Sıkıştırılamamayı bir sorun sanmak. Hidrolik sistemde sıvı sıkışmadığı için çalışır.
Cevap D.`
},
{
  id: "fen-sg-272",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, X ve Y sıvılarını özdeş kaplara koymuş ve kapların tabanlarındaki sıvı basıncını aynı basınç ölçerle ölçmüştür. X sıvısı 30 cm yüksekliğe, Y sıvısı ise 20 cm yüksekliğe kadar doldurulduğunda basınç ölçer iki kapta da aynı değeri göstermiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "X'in yoğunluğu Y'ninkinden büyüktür; çünkü X'in yüksekliği daha fazladır.",
    "X ile Y'nin yoğunlukları eşittir; çünkü ikisinde de basınç ölçer aynı değeri göstermiştir.",
    "Y'nin yoğunluğu X'inkinden büyüktür; çünkü Y daha sığ derinlikte aynı basıncı oluşturmuştur.",
    "Y'nin yoğunluğu X'inkinden küçüktür; çünkü Y'nin yüksekliği daha azdır."
  ],
  dogru: 2,
  hatalar: [
    "Tek etkene bakma: yüksekliği fazla olan X, aynı basıncı oluşturduğuna göre daha az yoğundur; X'in yoğunluğu büyük olsaydı basıncı daha büyük olurdu.",
    "Derinliği yok sayma: basınçlar eşit ama derinlikler farklıdır; bu durum yoğunlukların farklı olduğunu gösterir.",
    null,
    "Ters yön: Y daha sığ olduğu halde aynı basıncı oluşturmuştur; bunu ancak daha yoğun bir sıvı yapabilir."
  ],
  aciklama: `Sıvı basıncı, derinlik ve yoğunluk arttıkça artar. İki sıvıda aynı basınç ölçülmüşse derinliği az olanın sıvısı daha yoğundur.
Adım 1: X sıvısı 30 cm, Y sıvısı 20 cm derinliktedir; X daha derindir.
Adım 2: Daha derin olan X'in basıncı, daha sığ olan Y'nin basıncına eşit çıkmıştır. Demek ki X'in yoğunluğunun eksiğini derinliği kapatmıştır; Y'nin yoğunluğu X'inkinden büyüktür.
Adım 3: Kapların özdeş olması ya da miktarlar yoğunluğu belirlemez.
Sağlama: Y, X'in yarısı kadar derinliğe yakın bir derinlikte aynı basıncı yapıyor; bu ancak daha yoğun sıvıyla olur.
Cevap C.`
},
{
  id: "fen-sg-273",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir oto servisindeki hidrolik lift, önce hafif bir otomobili, sonra ağır bir minibüsü aynı yüksekliğe kaldırıp dengede tutmuştur. Lift, kapalı yağ sistemiyle çalışmaktadır; dar pistona kuvvet uygulanmakta, yağın basıncı geniş pistona iletilmektedir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Minibüsü dengede tutmak için yağın basıncı daha küçük olmalıdır.",
    "Minibüsü dengede tutmak için yağın basıncı ve dar pistona uygulanan kuvvet daha büyük olmalıdır.",
    "İki araç için de yağın basıncı ve dar pistona uygulanan kuvvet aynı kalmalıdır; çünkü geniş piston aynıdır.",
    "Minibüs için dar pistona uygulanan kuvvet daha büyük olmalıdır, ancak yağın basıncı iki araçta da aynı kalır."
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: daha ağır yükü geniş pistonun dengelemesi için yağın basıncı büyük olmalıdır, küçük olmamalıdır.",
    null,
    "Yükün etkisini yok sayma: geniş piston aynı olsa da daha ağır yükü dengelemek için daha büyük kuvvet, yani daha büyük basınç gerekir.",
    "Basınç ile kuvveti ayırma: dar pistona uygulanan kuvvet artarsa yağın basıncı da artar; kuvvet büyüyüp basıncın aynı kalması mümkün değildir."
  ],
  aciklama: `Kapalı yağ sisteminde dar pistona uygulanan basınç, geniş pistona aynen iletilir. Geniş pistonu iten kuvvet, bu basıncın geniş yüzeye etkisidir.
Adım 1: Ağır minibüsü dengede tutmak için geniş pistonu yukarı iten kuvvet, otomobile göre daha büyük olmalıdır.
Adım 2: Aynı geniş piston yüzeyine daha büyük kuvvet ancak daha büyük yağ basıncıyla uygulanabilir. Yani minibüste yağın basıncı daha büyüktür.
Adım 3: Dar pistondaki yağ basıncı da aynı büyük basınçtır; dar pistonun yüzeyi değişmediği için ona uygulanan kuvvet de daha büyük olur.
Sık yapılan hata: Kuvvet büyürken basıncın aynı kalacağını düşünmek.
Cevap B.`
},
{
  id: "fen-sg-274",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir parkta, tepedeki ağzı açık bir su deposundan yer altından geçen bir boruyla beslenen bir fıskiye vardır. Sistemde pompa yoktur. Depodaki su yüzeyi fıskiyenin ağzından yüksektedir. Sağanak yağmurdan sonra depo dolmuş ve depodaki su yüzeyi daha da yükselmiştir; boru ve fıskiyenin ağzı ise aynı kalmıştır.
**Fıskiye kapalıyken fıskiyenin ağzına etki eden sıvı basıncının değişimi ve nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Artar; çünkü fıskiye ağzının su yüzeyinin altındaki derinliği artmıştır.",
    "Değişmez; çünkü boru ve fıskiye ağzı daha önceki hâliyle durmaktadır.",
    "Azalır; çünkü su yüzeyi fıskiyenin ağzından daha çok uzaklaşmıştır.",
    "Artar; çünkü depodaki suyun yoğunluğu artmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Derinliği yok sayma: boru ve ağız aynı kalsa da su yüzeyi yükseldiği için ağzın derinliği artmıştır; basınç da artar.",
    "Ters yön: su yüzeyi ağızdan uzaklaştıkça derinlik artar; derinlik arttıkça basınç azalmaz, artar.",
    "İlgisiz neden: basınç artmıştır, ama nedeni suyun yoğunluğu değildir; yağmur suyu eklenmesi yoğunluğu anlamlı biçimde değiştirmez, değişen derinliktir."
  ],
  aciklama: `Sıvı basıncı derinlikle artar. Derinlik, noktanın sıvının açık yüzeyinden olan düşey uzaklığıdır.
Adım 1: Fıskiyenin ağzı ve boru aynı kaldığı için ağzın konumu değişmemiştir.
Adım 2: Depodaki su yüzeyi yükselince ağzın su yüzeyine göre derinliği artar.
Adım 3: Derinlik arttığı için ağza etki eden sıvı basıncı artar; fıskiye açılınca su daha güçlü fışkırır. Yoğunluk bu olayda belirleyici değildir.
Sağlama: Baraj gölünde su yükseldikçe baraj duvarına etki eden basınç da artar.
Cevap A.`
},
{
  id: "fen-sg-275",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, üç kaba tabloda verilen sıvıları koymuş ve kapların tabanlarındaki sıvı basınçlarını karşılaştırmak istemiştir. Kapların biçimleri ve taban alanları birbirinden farklıdır. Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür.
**Buna göre kapların tabanlarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Sıvı</th><th>Sıvı yüksekliği (cm)</th><th>Sıvının kütlesi (kg)</th></tr><tr><td>K</td><td>Su</td><td>25</td><td>5</td></tr><tr><td>L</td><td>Su</td><td>40</td><td>2</td></tr><tr><td>M</td><td>Zeytinyağı</td><td>25</td><td>8</td></tr></table>`,
  secenekler: [
    "P_{M} > P_{K} > P_{L}",
    "P_{K} > P_{L} > P_{M}",
    "P_{L} > P_{M} > P_{K}",
    "P_{L} > P_{K} > P_{M}"
  ],
  dogru: 3,
  hatalar: [
    "Kütle ile basıncı karıştırma: sıralama sıvının kütlesine göre kurulmuş; oysa basıncı kütle değil derinlik ve yoğunluk belirler.",
    "Derinliği yok sayma: K ile L aynı sudur ve L daha derindir; L'nin basıncı K'ninkinden büyüktür.",
    "Yoğunluğu yok sayma: K ile M aynı derinliktedir ve K'deki su zeytinyağından yoğundur; K'nin basıncı M'ninkinden büyüktür.",
    null
  ],
  aciklama: `Sıvı basıncı, sıvının yoğunluğuna ve derinliğe bağlıdır. Sıvının kütlesi, kabın biçimi ve taban alanı basıncı değiştirmez.
Adım 1: K ile L'yi karşılaştır. İkisinde de sıvı sudur; L'nin yüksekliği (40 cm) daha fazladır. L'nin basıncı K'ninkinden büyüktür.
Adım 2: K ile M'yi karşılaştır. İkisinde de yükseklik 25 cm'dir; K'deki su, M'deki zeytinyağından yoğundur. K'nin basıncı M'ninkinden büyüktür.
Adım 3: Sıralama P_{L} > P_{K} > P_{M} olur. Kütle sütunu tuzaktır: en ağır sıvı (M, 8 kg) en küçük basıncı yapmaktadır.
Sağlama: L hem K'ye göre daha derin, hem M'ye göre daha yoğun bir sıvıya sahiptir; her iki karşılaştırma da aynı sıralamayı verir.
Cevap D.`
}
);
