// Türkçe — Noktalama İşaretleri: Havuz eki (kademe 0, tur-nk-016 … tur-nk-075)
// Kural kaynağı: TDK Yazım Kılavuzu, "Noktalama İşaretleri". Gösterim: boş yer yay ayraçla ( ) gösterilir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["noktalama"] = window.LGS_BANK["noktalama"] || []).push(
/* ===================== HAVUZ — DÜZEY 1 ===================== */
{
  id: "tur-nk-016",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde nokta, bir sözün kısaltıldığını göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Yarışma 15.30’da başlayacak.",
    "Okulumuz 25. yıl kutlamasını yaptı.",
    "Dr. Sezer yarın yeni hastaları kabul edecek.",
    "Belgem 12.04.2026 tarihinde postalandı."
  ],
  dogru: 2,
  hatalar: [
    "Saati kısaltma sanma: “15.30” içindeki nokta saat ile dakikayı birbirinden ayırır.",
    "Sırayı kısaltma sanma: “25.” sayısındaki nokta sayının sıra bildirdiğini (yirmi beşinci) gösterir.",
    null,
    "Tarihi kısaltma sanma: “12.04.2026” içindeki noktalar gün, ay ve yılı birbirinden ayırır."
  ],
  aciklama: `Kural: Kısaltmalardan sonra nokta konur: Dr. (doktor), vb. (ve benzeri), Prof. (profesör) gibi.
Adım 1: Her noktayı açmayı dene. “Dr.” sözü “doktor” diye açılır; nokta, sözün kısaltıldığını gösterir.
Adım 2: “15.30” saat, “12.04.2026” tarih bildirir; noktalar sayıları ayırır. “25.” ise “yirmi beşinci” diye okunur, yani sıra bildirir.
Sağlama: Kısaltmanın noktası, açınca ortadan kalkan bir noktadır: Dr. → doktor.
Cevap C.`
},
{
  id: "tur-nk-017",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinin sonuna __soru işareti__ konur?**`,
  gorsel: null,
  secenekler: [
    "Bu akşam bizimle sinemaya gelebilir misin",
    "Kardeşim kimin geldiğini merak ettiğini söyledi",
    "Kaç kişinin sınava girdiğini henüz bilmiyorum",
    "Öğretmen sınavın ne zaman yapılacağını açıkladı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dolaylı soruyu soru sanma: “kimin” sözü var ama cümle bir şey sormuyor, kardeşin merakını aktarıyor; sonuna nokta konur.",
    "Soru sözüne aldanma: “kaç” sözü cümleyi soru yapmaz; konuşan kişi bilmediğini bildiriyor. Sonuna nokta konur.",
    "Soru sözüne aldanma: “ne zaman” bulunsa da cümle bir açıklama bildiriyor; yanıt beklemiyor. Sonuna nokta konur."
  ],
  aciklama: `Kural: Soru işareti, karşıdakinden yanıt bekleyen cümlenin sonuna konur. Soru sözü (kim, ne zaman, kaç) bir cümlede geçtiği için o cümle soru olmaz.
Adım 1: Her cümlenin sonunda karşıdakinden bir yanıt beklenip beklenmediğine bak.
Adım 2: “gelebilir misin” yüklemi soru ekiyle kurulmuş; yanıt bekler. Diğer üç cümle bir şeyi merak ettiğini, bilmediğini ya da açıkladığını bildiriyor.
Adım 3: Bildiren cümlenin sonuna nokta konur.
Sık yapılan hata: Cümlenin içinde “kim, kaç, ne zaman” görünce soru işareti koymak.
Cevap A.`
},
{
  id: "tur-nk-018",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Vay canına, ne kadar büyük bir pasta getirmişsiniz( )
**Bu cümlenin sonuna aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.)", "(?)", "(…)", "(!)"],
  dogru: 3,
  hatalar: [
    "Duyguyu görmeme: cümle hayranlık bildiriyor; sıradan bir bilgi vermiyor. Nokta bildirme cümlelerine konur.",
    "“Ne kadar” sözüne aldanma: cümlede yanıt beklenen bir soru yok, konuşan kişi şaşkınlığını söylüyor.",
    "Yarım cümle sanma: üç nokta tamamlanmamış cümlelere konur; bu cümle yüklemiyle bitmiştir.",
    null
  ],
  aciklama: `Kural: Şaşma, hayranlık, sevinç, korku gibi duyguları bildiren cümlelerin sonuna ünlem işareti konur.
Adım 1: “Vay canına” hayranlık ve şaşkınlık bildirir. Cümlenin tamamı bu duyguyu taşıyor.
Adım 2: Cümleden bir yanıt beklenmiyor; “ne kadar” burada soru sormuyor, büyüklüğü vurguluyor.
Adım 3: Duygu bildiren cümleye ünlem gelir.
Sağlama: “Ne kadar yürüdük?” yanıt bekler; “Ne kadar yoruldum!” yanıt beklemez, duygu bildirir.
Cevap D.`
},
{
  id: "tur-nk-019",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Ayşe( ) çantanı sandalyeden al.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.)", "(,)", "(:)", "(;)"],
  dogru: 1,
  hatalar: [
    "Küçük harfi gözden kaçırma: nokta cümleyi bitirir; ardından gelen “çantanı” küçük harfle başladığı için cümle bitmiyor.",
    null,
    "Açıklama sanma: iki nokta, ardından açıklama ya da örnek gelecekse konur; burada kişiye seslenilmiş, açıklama yapılmamış.",
    "Noktalı virgülü duraklama işareti sanma: noktalı virgül içinde virgül olan takımları ya da sıralı cümleleri ayırır; seslenmeden sonra kullanılmaz."
  ],
  aciklama: `Kural: Seslenme (hitap) sözlerinden sonra virgül konur.
Adım 1: “Ayşe” kime seslenildiğini gösterir; cümlenin geri kalanı ona söylenen sözdür.
Adım 2: Sonraki söz küçük harfle başlıyor, o hâlde cümle bitmedi; nokta olamaz.
Adım 3: İki nokta açıklama, noktalı virgül takım ayırma işidir. Seslenmeyi cümleden ayıran işaret virgüldür.
Sağlama: Aynı cümle “Çantanı sandalyeden al, Ayşe.” diye de yazılabilir; seslenme yine virgülle ayrılır.
Cevap B.`
},
{
  id: "tur-nk-020",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işareti __doğru__ kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Defterimi Ahmetler’e geri götürdüm.",
    "Dedemler yarın Bodrum’a gidecek.",
    "Komşumuz Rize’li bir çay üreticisi.",
    "Okul Müdürlüğü’ne dilekçe verdim."
  ],
  dogru: 1,
  hatalar: [
    "Çokluk ekini unutma: “Ahmet” kişi adına çokluk eki gelmiş (Ahmetler); çokluk eki alan özel adda kesme kullanılmaz. Doğrusu “Ahmetlere”.",
    null,
    "Yapım ekini kesmeyle ayırma: “-li” yapım ekidir; yapım eki alan özel adda kesme kullanılmaz. Doğrusu “Rizeli”.",
    "Kurum adını kişi adı sanma: kurum ve kuruluş adlarına gelen ekler kesmeyle ayrılmaz. Doğrusu “Okul Müdürlüğüne”."
  ],
  aciklama: `Kural: Özel adlara (kişi, yer) gelen hâl ekleri kesmeyle ayrılır. Yapım ekleri, çokluk eki ve kurum adlarına gelen ekler ayrılmaz.
Adım 1: “Bodrum’a” yer adına gelen yönelme hâli ekidir (-a). Kesme gerekir.
Adım 2: “Rize’li” yapım eki alıyor (Rizeli); “Ahmetler’e” çokluk eki taşıyor; “Okul Müdürlüğü’ne” kurum adı. Üçünde de kesme kullanılmaz.
Sağlama: Kurum adı ya da yapım eki görünce kesmeyi kaldır; yer adına hâl eki gelmişse kesmeyi koy.
Cevap B.`
},
{
  id: "tur-nk-021",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Bir tiyatro metninde konuşan kişinin adı büyük harfle yazılır, ardından bir işaret gelir ve konuşma başlar:
ZEYNEP( ) Işığı kim söndürdü?
**Bu metinde yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,)", "(;)", "(.)", "(:)"],
  dogru: 3,
  hatalar: [
    "Seslenme sanma: virgül seslenmeden sonra konur; burada ZEYNEP’e seslenilmiyor, konuşan kişi belirtiliyor.",
    "Noktalı virgülü karıştırma: noktalı virgül takımları ya da sıralı cümleleri ayırır; konuşan kişinin adından sonra kullanılmaz.",
    "Cümle bitişi sanma: ad bir cümle kurmaz; nokta, ad ile konuşmayı birbirinden kopuk iki cümleye ayırır.",
    null
  ],
  aciklama: `Kural: Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta konur.
Adım 1: “ZEYNEP” konuşanı gösterir; onun sözü arkadan gelir.
Adım 2: Arkasından gelecek sözü başlatan işaret iki noktadır.
Adım 3: Virgül seslenme, noktalı virgül takım ayırma görevi taşır. Konuşan kişiyi söz diziminden ayırmaz.
Sağlama: Tiyatro metinlerinde ADIN: konuşma biçimi böyledir.
Cevap D.`
},
{
  id: "tur-nk-022",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Kapıyı yavaşça araladım, içeride bir de baktım ki( )
**Bu cümlenin sonuna aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(…)", "(.)", "(!)", "(;)"],
  dogru: 0,
  hatalar: [
    null,
    "Cümleyi bitmiş sanma: “baktım ki” sözünden sonra söylenecek şey eksik, anlam tamamlanmamış. Nokta tamamlanmış cümleye konur.",
    "Duygu bildirdiğini sanma: cümlede sevinç ya da korku anlatan tamamlanmış bir söz yok, anlatım yarım kalmış.",
    "Noktalı virgülü bitiş sanma: noktalı virgül cümleyi bitirmez, takımları ya da sıralı cümleleri ayırır."
  ],
  aciklama: `Kural: Üç nokta, anlatımı tamamlanmamış, yarım kalmış cümlenin sonuna konur.
Adım 1: “Baktım ki” sözü, arkasından bir şeyin geleceğini haber veriyor ama cümle orada kesiliyor.
Adım 2: Anlam tamamlanmadığına göre nokta ya da ünlem gibi bitiren bir işaret uygun değil.
Adım 3: Yarım bırakılan cümlenin sonuna üç nokta konur.
Sağlama: “Baktım ki içeride bir kedi uyuyordu.” dersen cümle tamamlanmış olur; o zaman nokta konurdu.
Cevap A.`
},
{
  id: "tur-nk-023",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Bir roman bölümünde iki arkadaş şöyle konuşuyor:
— Yarın kütüphaneye gelecek misin?
— Sabah dersim var, öğleden sonra gelirim.
**Bu metinde satır başlarında kullanılan uzun çizginin ( — ) görevi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Ara sözü iki yandan ayırmak",
    "İki yer arasını göstermek",
    "Konuşmanın başladığını göstermek",
    "Sonradan eklenen bilgiyi vermek"
  ],
  dogru: 2,
  hatalar: [
    "Kısa çizgiyle karıştırma: ara sözü iki yandan kısa çizgiler ayırır; satır başındaki uzun çizgi cümle ortasında değildir.",
    "Kısa çizgiyle karıştırma: “İstanbul-Ankara” gibi iki yer arasını kısa çizgi gösterir; burada böyle bir ifade yok.",
    null,
    "Ayraçla karıştırma: ek bilgi ayraç içinde verilir; satır başındaki çizgi bilgi eklemez."
  ],
  aciklama: `Kural: Satır başına alınan konuşmanın önüne konuşma çizgisi (uzun çizgi) konur. Her yeni satırdaki çizgi, konuşan kişinin değiştiğini ve bir konuşmanın başladığını gösterir.
Adım 1: Metinde iki ayrı satır var, ikisi de uzun çizgiyle başlıyor.
Adım 2: İlk satırda soruyu bir kişi soruyor, ikincide başka bir kişi yanıtlıyor. Çizgiler konuşmaların sınırını gösteriyor.
Adım 3: Cümle ortasında bir söz ayrılmıyor, iki yer arası gösterilmiyor; öbür görevler elenir.
Cevap C.`
},
{
  id: "tur-nk-024",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Türk( )Japon dostluk şenliği bu hafta sonu İstanbul’da yapılacak.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,)", "(/)", "(-)", "(…)"],
  dogru: 2,
  hatalar: [
    "Virgülü ayırıcı sanma: virgül eş görevli sözcükleri ayırır; “Türk ile Japon” anlamını kısa çizgi verir.",
    "Eğik çizgiyle karıştırma: eğik çizgi dizeleri, tarihi ya da semt-il çiftini ayırır; iki ülke arasındaki ilişkiyi göstermez.",
    null,
    "Yarım cümle sanma: üç nokta tamamlanmamış cümlenin sonuna konur; burada bir söz eksik değil."
  ],
  aciklama: `Kural: Kısa çizgi “arasında, ile, ve, -den …-e” anlamlarını verir: Sinop-Samsun yolu, 1939-1945 yılları gibi.
Adım 1: “Türk Japon dostluğu” iki ülke arasındaki dostluğu anlatıyor. “Türk ile Japon” demek istiyoruz.
Adım 2: “… arasında, … ile” anlamı veren işaret kısa çizgidir.
Adım 3: Virgül, eğik çizgi ve üç nokta bu anlamı vermez.
Sağlama: “Türk-Japon dostluğu” sözünü “Türkiye ile Japonya arasındaki dostluk” diye açabiliyorsan çizgi yerindedir.
Cevap C.`
},
{
  id: "tur-nk-025",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde eğik çizgi, gün, ay ve yılı birbirinden ayırmak için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Belge 18/11/2026 tarihinde teslim edildi.",
    "Belge 18-20 Kasım arasında teslim edildi.",
    "Belge 18 Kasım 2026 günü teslim edildi.",
    "Belge saat 18.20’de teslim edildi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kısa çizgiyi eğik çizgi sanma: “18-20” arasındaki kısa çizgi “…den …e kadar” anlamı verir, iki günün arasını gösterir.",
    "Tarihte ayırıcı arama: ay adı yazıyla yazılınca gün, ay ve yılı ayıran bir işarete gerek kalmaz.",
    "Saati tarih sanma: “18.20” içindeki nokta saat ile dakikayı ayırır, tarih bildirmez."
  ],
  aciklama: `Kural: Tarihte gün, ay ve yıl eğik çizgiyle de ayrılabilir: 18/11/2026. Ay adı yazıyla yazılırsa araya işaret konmaz: 18 Kasım 2026.
Adım 1: Eğik çizgiyi (/) seçeneklerde ara. Yalnızca birinci seçenekte var.
Adım 2: “18/11/2026” sayıları gün, ay, yıl diye okunur; eğik çizgi bunları ayırıyor.
Adım 3: İkinci seçenekteki kısa çizgi iki gün arasını, dördüncü seçenekteki nokta saati gösterir.
Cevap A.`
},
{
  id: "tur-nk-026",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Okul kitaplığından “Define Adası” romanını aldım.
**Bu cümlede tırnak işaretinin görevi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Başkasının sözünü olduğu gibi aktarmak",
    "Alay anlamı katan sözü göstermek",
    "Ek bilgi ya da açıklama vermek",
    "Bir eserin adını göstermek"
  ],
  dogru: 3,
  hatalar: [
    "Aktarma sanma: tırnak içindeki söz birinin söylediği bir cümle değil, bir kitabın adı.",
    "Alay arayışı: alay anlamı ayraç içindeki ünlemle gösterilir; tırnak burada böyle bir görev taşımıyor.",
    "Ayraçla karıştırma: ek bilgi ve açıklama ayraç içinde verilir; tırnak içindeki söz bir bilgi eklemiyor.",
    null
  ],
  aciklama: `Kural: Tırnak işareti üç ana görevde kullanılır: başkasının sözünü aktarma, özel olarak vurgulanan sözü gösterme, eser ve yazı adlarını belirtme.
Adım 1: “Define Adası” bir romanın adı; cümleyi “romanını aldım” sözü tamamlıyor.
Adım 2: Kimsenin söylediği bir söz aktarılmıyor; bu yüzden aktarma elenir.
Adım 3: Kitap, şiir, film, haber başlığı gibi adlar tırnak içinde gösterilir.
Cevap D.`
},
{
  id: "tur-nk-027",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `Pazartesi günü fen, matematik( ) salı günü ise tarih, coğrafya çalışacağım.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,)", "(;)", "(:)", "(.)"],
  dogru: 1,
  hatalar: [
    "Takımları karıştırma: sözcükler zaten virgülle sıralanmış; iki günün takımını da virgülle ayırırsan hangi dersin hangi güne ait olduğu karışır.",
    null,
    "Açıklama sanma: iki nokta ardından açıklama ya da örnek gelecekse konur; burada ikinci takım yeni bir gün başlatıyor.",
    "Küçük harfi gözden kaçırma: nokta cümleyi bitirir; ardından gelen “salı” küçük harfle başladığı için cümle sürüyor."
  ],
  aciklama: `Kural: Virgülle ayrılmış takımlar noktalı virgülle birbirinden ayrılır.
Adım 1: Cümlede iki takım var: “fen, matematik” ve “tarih, coğrafya”. Her takımın içi virgüllü.
Adım 2: Takımları birbirinden ayırmak için virgül yetmez; aynı işaret hem içte hem dışta olunca gruplar karışır.
Adım 3: Takımlar arasına noktalı virgül konur. Nokta konamaz, çünkü cümle “salı” ile sürüyor.
Cevap B.`
},

/* ===================== HAVUZ — DÜZEY 2 ===================== */
{
  id: "tur-nk-028",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Bir tiyatro metninde şu bölüm yer alıyor:
OKTAY: (Pencereyi açar.) Odada dayanılmaz bir sıcak var.
**Bu metinde yay ayracın içindeki söz hangi amaçla kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Konuşan kişinin sözünü aktarmak",
    "Oyuncunun yapacağı hareketi göstermek",
    "Sözün alındığı kaynağı belirtmek",
    "Söylenen sözün tersini kastetmek"
  ],
  dogru: 1,
  hatalar: [
    "Aktarma sanma: konuşan kişinin sözü ayraçta değil, ayraçtan sonraki bölümde; ayraç içinde bir söz değil, bir hareket var.",
    null,
    "Kaynak göstermeyle karıştırma: atasözü ya da alıntının kaynağı ayraç içinde yazılır, burada ise “açar” bir eylem bildiriyor.",
    "Alayla karıştırma: sözün tersini kastetmek için ayraç içine ünlem konur; burada ünlem yok."
  ],
  aciklama: `Kural: Tiyatro metinlerinde oyuncunun hareketi, tavrı ve sahne durumu ayraç içinde gösterilir.
Adım 1: Ayraç içindeki söze bak: “Pencereyi açar.” Bir kişinin yapacağı iş.
Adım 2: Konuşma ayraçtan sonra başlıyor: “Odada dayanılmaz bir sıcak var.” Ayraç konuşmayı değil, sahnedeki hareketi bildiriyor.
Adım 3: Bu görev tiyatro metnine özgüdür; oyuncuya nasıl davranacağını söyler.
Cevap B.`
},
{
  id: "tur-nk-029",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Maç bitince antrenör oyunculara şöyle sordu( ) “Yarınki antrenmana kim gelemeyecek( )” Kimse yanıt vermedi( ) Ne kadar sessiz bir soyunma odasıydı( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(;) (?) (.) (!)",
    "(;) (!) (.) (!)",
    "(;) (?) (!) (.)",
    "(:) (?) (.) (!)"
  ],
  dogru: 3,
  hatalar: [
    "Birinci yeri yanlış doldurma: tırnak içinde aktarılacak söz geliyor, önüne noktalı virgül değil iki nokta konur.",
    "Birinci yeri noktalı virgül, ikinci yeri ünlem yapma: aktarma öncesine iki nokta gelir; “kim gelemeyecek” de yanıt bekleyen bir soru olduğundan sonuna soru işareti konur.",
    "Birinci yeri noktalı virgül yapıp son iki yeri ters doldurma: aktarma öncesine iki nokta gelir; “Kimse yanıt vermedi” sıradan bir bildirim, “Ne kadar sessiz…” ise duygu bildirir, nokta ile ünlem yer değiştirmiş.",
    null
  ],
  aciklama: `Kural: Aktarılacak sözden önce iki nokta, soru cümlesinin sonuna soru işareti, bildirme cümlesinin sonuna nokta, duygu bildiren cümlenin sonuna ünlem konur.
Adım 1: “şöyle sordu( ) “Yarınki…” Ardından başkasının sözü aktarılıyor: iki nokta.
Adım 2: “kim gelemeyecek( )” soru sözüyle kurulmuş, yanıt bekliyor: soru işareti.
Adım 3: “Kimse yanıt vermedi( )” bir olayı bildiriyor: nokta.
Adım 4: “Ne kadar sessiz bir soyunma odasıydı( )” sessizlik karşısındaki duyguyu anlatıyor: ünlem.
Sağlama: Sırayla (:) (?) (.) (!) yazılır.
Cevap D.`
},
{
  id: "tur-nk-030",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `(I) Evet, kupayı biz kazandık.
(II) Komşumuz, emekli bir öğretmen, bu sabah kapımızı çaldı.
(III) Hayır, bu akşam kimseyi beklemiyoruz.
(IV) Tezgâhta nar, incir ve ceviz satılıyordu.
**Numaralanmış cümlelerin hangi ikisinde virgüller aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve III", "I ve IV", "II ve III", "II ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Eş görevliyle karıştırma: IV’te virgül yan yana sıralanan sözcükleri ayırıyor; I’deki virgül ise “evet” sözünden sonra konmuş.",
    "Ara sözle karıştırma: II’deki iki virgül araya girmiş bir açıklamayı ayırıyor; III’teki virgül “hayır” sözünden sonra konmuş.",
    "Birbirinden farklı iki görevi eşleştirme: II’deki virgüller ara sözü, IV’tekiler eş görevli sözcükleri ayırıyor."
  ],
  aciklama: `Kural: Kabul ya da ret bildiren “evet, hayır, peki, tamam” gibi sözlerden sonra virgül konur. Ara sözü iki yandan, eş görevli sözcükleri araya virgül koyarak ayırırız.
Adım 1: I’de “Evet,” bir cevap sözü; virgül ondan sonra konmuş.
Adım 2: III’te “Hayır,” da bir cevap sözü; virgül aynı görevde.
Adım 3: II’de virgüller “emekli bir öğretmen” ara sözünü ayırır; IV’te “nar, incir” eş görevli sözcükleri ayırır. İkisi de I ve III’ten farklı.
Sağlama: Cevap sözlerini çıkarsan cümleler anlamını korur: “Kupayı biz kazandık.”
Cevap A.`
},
{
  id: "tur-nk-031",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Yeni eve taşındığımız için kitaplarımı kolilere koydum; ve hepsini garaja yerleştirdim.
**Bu cümledeki noktalama yanlışını düzeltmek için aşağıdakilerden hangisi yapılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "“;” işareti “:” ile değiştirilmeli.",
    "“;” işareti “,” ile değiştirilmeli.",
    "“;” işareti kaldırılmalı.",
    "“ve” sözünden sonra virgül konmalı."
  ],
  dogru: 2,
  hatalar: [
    "İki nokta kullanma: ardından açıklama ya da örnek gelmiyor; “hepsini garaja yerleştirdim” bir açıklama değil, ikinci eylem.",
    "Bağlaç öncesine virgül koyma: “ve” bağlacının önüne de arkasına da virgül konmaz.",
    null,
    "Bağlaç sonrasına virgül koyma: “ve” bağlacının arkasına virgül konmaz; yanlış, noktalı virgülde sürüyor."
  ],
  aciklama: `Kural: “ve, veya, yahut” bağlaçlarının önüne de arkasına da noktalama işareti konmaz.
Adım 1: Cümlede “koydum” ile “yerleştirdim” “ve” bağlacıyla bağlanıyor.
Adım 2: “ve” sözünden önce noktalı virgül konmuş; bu fazladan ve yanlış.
Adım 3: Doğru yazım: “…kolilere koydum ve hepsini garaja yerleştirdim.” İki nokta ya da virgül koymak yanlışı değiştirmez.
Sık yapılan hata: Noktalı virgülü “ve”den önce uzun duraklama gibi kullanmak.
Cevap C.`
},
{
  id: "tur-nk-032",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "Sınıfımızdan, üç öğrenci yarışmada derece aldı.",
    "Hayır, bu yıl kış tatilinde dağa gitmeyeceğiz.",
    "Sevgili dostlar, hepinizi aramızda görmek güzel.",
    "Bahçede güller, laleler ve sümbüller açmıştı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru kullanımı yanlış sanma: “Hayır” ret bildiren bir sözdür ve ardından virgül konur.",
    "Doğru kullanımı yanlış sanma: “Sevgili dostlar” bir seslenmedir ve ardından virgül konur.",
    "Doğru kullanımı yanlış sanma: “güller, laleler” eş görevli sözcüklerdir; sonuncudan önce “ve” varsa virgül konmaz."
  ],
  aciklama: `Kural: Virgül, cümle ögesinin bir parçasını diğerinden kopararak bölmez.
Adım 1: A’da “Sınıfımızdan” sözü “üç öğrenci” ile birlikte öznedir (sınıfımızdan üç öğrenci); virgül özneyi ortadan ikiye bölmüş.
Adım 2: B’deki virgül cevap sözünden, C’deki virgül seslenmeden sonra; ikisi de yerinde.
Adım 3: D’de “güller, laleler ve sümbüller” sıralaması doğru; “ve”den önce virgül yok.
Cevap A.`
},
{
  id: "tur-nk-033",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Müdürümüz( ) yıllardır bu okulda görev yapan bir matematik öğretmeni( ) törende şunu söyledi( ) “Başarı, vazgeçmeyenlerin ödülüdür.”
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(,) (;) (;)",
    "(;) (,) (;)",
    "(,) (,) (;)",
    "(,) (,) (:)"
  ],
  dogru: 3,
  hatalar: [
    "İkinci ve üçüncü yeri noktalı virgül yapma: ara sözünü iki yandan virgül ayırır, noktalı virgül ayırmaz; aktarma öncesine de iki nokta konur.",
    "Birinci ve üçüncü yeri noktalı virgül yapma: ara sözünün başına noktalı virgül değil virgül gelir; aktarma öncesine de iki nokta konur.",
    "Üçüncü yeri noktalı virgül yapma: “şunu söyledi” sözünden sonra aktarma geliyor; aktarmadan önce iki nokta konur.",
    null
  ],
  aciklama: `Kural: Ara sözü iki yandan virgülle ayrılır. Aktarılacak sözden önce iki nokta konur.
Adım 1: “Müdürümüz … törende şunu söyledi” cümlesinin özne ve yüklemi arasına “yıllardır bu okulda görev yapan bir matematik öğretmeni” sözü girmiş. Bu söz çıkarılsa cümle bozulmaz: ara sözü.
Adım 2: Ara sözünün başına ve sonuna virgül konur: (,) (,).
Adım 3: “şunu söyledi” ardından tırnak içinde aktarma geliyor; iki nokta konur.
Cevap D.`
},
{
  id: "tur-nk-034",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işareti __doğru__ kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bütün çocuklar’ı parka götürdük.",
    "Kuzenim Güneş Belediyesi’nde çalışıyor.",
    "Yaz sıcağı Temmuz’da başlar.",
    "Sınav 25 Mayıs’ta yapılacak."
  ],
  dogru: 3,
  hatalar: [
    "Cins ismi özel ad sanma: “çocuklar” özel ad değil; özel olmayan adlara gelen ekler kesmeyle ayrılmaz.",
    "Kurum adına kesme koyma: belediye bir kurumdur; kurum adlarına gelen ekler ayrılmaz. Doğrusu “Güneş Belediyesinde”.",
    "Belirli tarih yokluğunu gözden kaçırma: “Temmuz” burada belirli bir tarih bildirmiyor, genel bir zaman; küçük harfle ve kesmesiz “temmuzda” yazılır.",
    null
  ],
  aciklama: `Kural: Belirli bir tarih bildiren ay ve gün adları büyük harfle yazılır ve ekleri kesmeyle ayrılır: 25 Mayıs’ta. Özel olmayan sözcüklere ve kurum adlarına gelen ekler ayrılmaz.
Adım 1: D’de “25 Mayıs” belirli bir günü gösterir. Kesmeyle “25 Mayıs’ta” yazmak doğru.
Adım 2: A’da “çocuklar” cins ad; B’de “Güneş Belediyesi” kurum adı; kesme ikisinde de fazla.
Adım 3: C’de belirli bir tarih yok, “her yıl temmuzda” gibi genel bir zaman var; kesme olmaz.
Cevap D.`
},
{
  id: "tur-nk-035",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Pazartesi nöbetçi Ali, Zeynep; salı Deniz, Okan; çarşamba Aylin, Burak.
**Bu cümlede noktalı virgülün görevi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Sıralı iki cümleyi birbirinden ayırmak",
    "İçinde virgül bulunan takımları ayırmak",
    "Kendisinden sonra açıklama yapılacağını göstermek",
    "Ara sözü iki yandan ayırmak"
  ],
  dogru: 1,
  hatalar: [
    "Sıralı cümle sanma: noktalı virgüllerle ayrılan parçalar tam birer cümle değil, günlere göre kurulmuş isim takımları.",
    null,
    "İki noktayla karıştırma: açıklama yapılacağını iki nokta gösterir; burada noktalı virgülden sonra yeni bir gün başlıyor.",
    "Ara sözle karıştırma: ara sözü iki yandan kısa çizgi ya da virgül ayırır; noktalı virgül tek tek durur."
  ],
  aciklama: `Kural: Noktalı virgül, kendi içinde virgüllerle ayrılmış takımları birbirinden ayırır.
Adım 1: Cümlede üç takım var: “Pazartesi … Ali, Zeynep”, “salı Deniz, Okan”, “çarşamba Aylin, Burak”. Her birinin içinde virgül bulunuyor.
Adım 2: Takımları ayırmak için virgül yeterli olmaz, çünkü hangi virgülün takım sınırı olduğu karışır. O yüzden noktalı virgül kullanılmış.
Sağlama: Noktalı virgülleri virgülle değiştirirsen günlerle nöbetçiler arasındaki sınır silinir.
Cevap B.`
},
{
  id: "tur-nk-036",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde üç nokta, açıkça yazılmak istenmeyen bir sözün yerini tutmaktadır?**`,
  gorsel: null,
  secenekler: [
    "Kapıyı açacaktım ki birden…",
    "Sınav pek iyi geçmedi, ama…",
    "Bu resmi sınıfımızdan M… çizmiş.",
    "Sesi titredi, gözleri doldu, derken…"
  ],
  dogru: 2,
  hatalar: [
    "Yarım cümleyi gizli söz sanma: “birden” sözünden sonra olay eksik bırakılmış; üç nokta tamamlanmamış anlatımı gösteriyor.",
    "Yarım cümleyi gizli söz sanma: “ama” sözünden sonra düşünce yarım bırakılmış; yazılmak istenmeyen bir ad yok.",
    null,
    "Yarım cümleyi gizli söz sanma: anlatım “derken” ile kesilmiş; burada gizlenen bir söz değil, yarım kalan bir olay var."
  ],
  aciklama: `Kural: Üç nokta, açıkça yazılmak istenmeyen sözün yerini tutabilir: “Bu resmi M… çizmiş.” Aynı işaret, tamamlanmamış cümlelerin sonuna da gelir.
Adım 1: A, B ve D’de cümle bitmeden kesiliyor; söylenecek şey eksik, anlatım yarım.
Adım 2: C’de cümle tamam. “M…” ise bir adın ilk harfi; adı yazmak istenmemiş, yerini üç nokta tutmuş.
Sağlama: C’de üç noktayı atsan “Bu resmi sınıfımızdan çizmiş.” anlamı eksik kalır; yani üç nokta bir sözün yerinde.
Cevap C.`
},
{
  id: "tur-nk-037",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Cumhuriyet 29. Ekim 1923’te ilan edildi.
**Bu cümledeki noktalama yanlışını düzeltmek için aşağıdakilerden hangisi yapılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "“29.” sayısındaki nokta kaldırılmalı.",
    "“29” sayısına kesme eklenmeli.",
    "“Ekim” sözünden sonra nokta konmalı.",
    "“1923’te” sözündeki kesme kaldırılmalı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sayıyı ekli sanma: “29” bir ek almıyor, kesme gerekmez; ek alan “1923”ten sonra kesme zaten doğru kullanılmış.",
    "Nokta ekleme: ay adı sözün ortasında; nokta sıra sayısını gösterir, ay adından sonra gerekmez.",
    "Doğruyu bozma: yılı gösteren rakama gelen ek kesmeyle ayrılır, “1923’te” doğru yazılmıştır."
  ],
  aciklama: `Kural: Nokta sayıya sıra anlamı katar (3. sınıf). Ay adı yazıyla yazılan tarihte gün sayısına nokta konmaz: 29 Ekim 1923.
Adım 1: “29. Ekim” yazımı “yirmi dokuzuncu Ekim” demek olur; bu anlamlı değil, sayı sıra bildirmiyor, gün bildiriyor.
Adım 2: Yılın ardından gelen “-te” eki rakamla yazılan sayıya geldiği için kesmeyle ayrılır; bu doğru.
Adım 3: Düzeltme: “29 Ekim 1923’te”.
Cevap A.`
},
{
  id: "tur-nk-038",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Dedemle 1950( )60 yılları arasında kasabada oynanan maçları konuştuk. Anlattığına göre İzmir( )Ankara ekspresi her gün saat 14( )30’da kalkarmış.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(/) (-) (:)",
    "(-) (-) (.)",
    "(-) (/) (:)",
    "(-) (-) (:)"
  ],
  dogru: 1,
  hatalar: [
    "Birinci yeri eğik çizgi, üçüncü yeri iki nokta yapma: “1950’den 60’a kadar” anlamını kısa çizgi verir, eğik çizgi yıllar arası aralık göstermez; saatte dakikayı da iki nokta değil nokta ayırır.",
    null,
    "İkinci yeri eğik çizgi, üçüncüyü iki nokta yapma: İzmir ile Ankara arası kısa çizgiyle gösterilir; saatte dakikayı nokta ayırır.",
    "Üçüncü yeri iki nokta yapma: saatte saat ile dakikayı nokta ayırır (14.30); iki nokta bu görevde kullanılmaz."
  ],
  aciklama: `Kural: Kısa çizgi “…den …e, arasında, ile” anlamını verir. Saatte saat ile dakika arasına nokta konur.
Adım 1: “1950( )60 yılları” bir zaman aralığı; kısa çizgi: 1950-60.
Adım 2: “İzmir( )Ankara ekspresi” iki yer arasında çalışan sefer; kısa çizgi: İzmir-Ankara.
Adım 3: “14( )30” saat; saat ile dakikayı nokta ayırır: 14.30’da.
Sağlama: Sırayla (-) (-) (.).
Cevap B.`
},
{
  id: "tur-nk-039",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Türkçe dersinde dedemden duyduğum bir söz defterime şöyle yazıldı:
Ağaç yaşken eğilir. (Atasözü)
**Bu örnekte yay ayraç içindeki söz hangi amaçla kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Oyuncunun hareketini göstermek",
    "Sözün anlamını ters çevirmek",
    "Söylenen sözün kaynağını belirtmek",
    "Alıntıda atlanan bölümü göstermek"
  ],
  dogru: 2,
  hatalar: [
    "Tiyatro görevine kaydırma: oyuncunun hareketi tiyatro metinlerinde ayraç içinde verilir; burada sahne yok, bir söz var.",
    "Alay sanma: sözün tersini kastetmek için ayraç içine ünlem konurdu; burada yalnızca bir ad var.",
    null,
    "Atlanan bölümle karıştırma: atlanan bölüm ayraç içine konan üç nokta ile gösterilir; burada üç nokta yok."
  ],
  aciklama: `Kural: Alıntı yapılan sözün ya da atasözünün kaynağı ayraç içinde belirtilir.
Adım 1: “Ağaç yaşken eğilir.” cümlesi bir söz; ayraç içinde “Atasözü” yazıyor.
Adım 2: Ayraçtaki “Atasözü” sözün ne olduğunu, nereden alındığını söylüyor: kaynağı.
Adım 3: Hareket, alay ve atlanan bölüm gösterimlerinde ayraç içinde başka biçimler (fiil, ünlem, üç nokta) görürdük.
Cevap C.`
},
{
  id: "tur-nk-040",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Annem mutfaktan seslendi( ) “Sofrayı kurmama yardım eder misin( )” Ben de hemen yanıtladım( ) “Tabii ki yardım ederim.”
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(;) (.) (:)",
    "(:) (.) (:)",
    "(:) (.) (;)",
    "(:) (?) (:)"
  ],
  dogru: 3,
  hatalar: [
    "Birinci yeri noktalı virgül, ikinci yeri nokta yapma: aktarılacak sözden önce iki nokta gelir; “yardım eder misin” de yanıt bekleyen bir soru olduğundan sonuna soru işareti konur.",
    "Soruyu nokta ile bitirme: “yardım eder misin” soru ekiyle kurulmuş, yanıt bekliyor; tırnağın içinde soru işareti kalır.",
    "İkinci yeri nokta, üçüncü yeri noktalı virgül yapma: soru cümlesinin sonuna soru işareti gelir; “yanıtladım” sözünden sonra yeni bir aktarma geliyor, önüne iki nokta konur.",
    null
  ],
  aciklama: `Kural: Aktarılacak sözden önce iki nokta, aktarılan soru cümlesinin sonuna tırnak içinde soru işareti konur.
Adım 1: “seslendi( ) “Sofrayı…” Annemin sözü aktarılıyor: iki nokta.
Adım 2: “yardım eder misin( )” soru ekli, yanıt bekliyor: soru işareti.
Adım 3: “yanıtladım( ) “Tabii ki…” Yeni bir aktarma başlıyor: iki nokta.
Sağlama: Sırayla (:) (?) (:).
Cevap D.`
},
{
  id: "tur-nk-041",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Gezi için üç otobüs ayrıldı: birinci otobüste Ali, Burak, Can( ) ikincide Deniz, Elif, Fatma( ) üçüncüde Gül, Hakan, İpek vardı.
**Bu cümlede yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(;) (;)", "(,) (,)", "(,) (.)", "(,) (;)"],
  dogru: 0,
  hatalar: [
    null,
    "Takımları virgülle ayırma: her otobüsün yolcuları zaten virgülle sıralanmış; takımlar arasına da virgül koyarsan kimin hangi otobüste olduğu karışır.",
    "Birinci yeri virgül, ikinci yeri nokta yapma: takımlar arasına virgül konursa içteki ve dıştaki virgüller karışır; “üçüncüde” küçük harfle başlıyor, cümle bitmemiş, nokta konmaz.",
    "Birinci yeri virgül yapma: ilk takımın içi zaten virgüllü, takım sınırını virgül değil noktalı virgül gösterir."
  ],
  aciklama: `Kural: İçinde virgül bulunan takımlar noktalı virgülle ayrılır.
Adım 1: Üç takım var: “Ali, Burak, Can”, “Deniz, Elif, Fatma”, “Gül, Hakan, İpek”. Her takımın içi virgüllü.
Adım 2: Takımların sınırı virgülle gösterilirse içteki ve dıştaki virgüller birbirine karışır. Sınırı noktalı virgül çizer.
Adım 3: İki yerde de noktalı virgül gelir: (;) (;). Nokta olamaz, çünkü cümle “vardı” ile bitiyor.
Cevap A.`
},
{
  id: "tur-nk-042",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Rafın en üstünde duran kutuyu açtım. Bu( ) dedemin bana bıraktığı eski saatti.
**Bu metinde yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:)", "(;)", "(,)", "(!)"],
  dogru: 2,
  hatalar: [
    "Açıklama sanma: iki nokta ardından açıklama ya da örnek gelecek sözlerden sonra konur; burada özne olan bir zamirden sonra konuluyor.",
    "Noktalı virgül sanma: noktalı virgül takımları ya da sıralı cümleleri ayırır; “bu” zamirinin ardından kullanılmaz.",
    null,
    "Ünlem sanma: ünlem duygu bildirir ve cümleyi bitirir; ardından gelen “dedemin” küçük harfle başlıyor, cümle bitmemiş."
  ],
  aciklama: `Kural: Cümlenin öznesi olan “bu, şu, o” zamirlerinden sonra, sıfat sanılmasın diye virgül konur.
Adım 1: “Bu … saatti” cümlesinde “bu” kutudan çıkan şeyi gösteriyor, bir zamir ve cümlenin öznesidir.
Adım 2: Virgül olmazsa “bu dedemin” bir sıfat tamlaması gibi okunabilir. Virgül, zamirin tek başına özne olduğunu gösterir.
Adım 3: İki nokta, noktalı virgül ve ünlemin bu yerde görevi yok.
Sağlama: “Bu, dedemin saatiydi.” dediğinde virgülsüz okumaya göre anlam daha açıktır.
Cevap C.`
},
{
  id: "tur-nk-043",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Hafta sonu dedem Mersin’e(I) gitti. Dedemi 18.30’da(II) aradım. Mersin’de(III) hava çok sıcakmış. Kuzenim de 2011’de(IV) oradan taşınmış.
**Bu metinde numaralanmış kesme işaretlerinden hangi ikisi yer adına gelen eki ayırmak için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "I ve III",
    "II ve IV",
    "III ve IV"
  ],
  dogru: 1,
  hatalar: [
    "Yer adıyla saati eşleştirme: I yer adına gelen eki ayırıyor, ama II rakamla yazılan saate gelen eki ayırıyor.",
    null,
    "Rakamla yazılan iki sayıyı eşleştirme: II saate, IV yıla gelen eki ayırıyor; ikisi de yer adı değil.",
    "Yer adıyla yılı eşleştirme: III yer adına gelen eki ayırıyor, ama IV rakamla yazılan yıla gelen eki ayırıyor."
  ],
  aciklama: `Kural: Kesme, özel adlara (yer, kişi) ve rakamla yazılan sayılara gelen ekleri ayırır. Soru, hangi sözcüğe gelen ekten söz ettiğine bakmanı istiyor.
Adım 1: I: “Mersin’e” yer adına gelen -e eki.
Adım 2: II: “18.30’da” rakamla yazılmış saate gelen -da eki. IV: “2011’de” rakamla yazılmış yıla gelen -de eki.
Adım 3: III: “Mersin’de” yine yer adına gelen -de eki.
Adım 4: Yer adına gelen ekleri ayıranlar I ve III.
Cevap B.`
},
{
  id: "tur-nk-044",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Soruyu dikkatle okudum? Sonra çözmeye başladım.",
    "Öğretmen sınıfa sordu: Bu yıl hangi kitabı okumak istersiniz.",
    "Okulumuzun bahçesinde çok sayıda; ağaç var.",
    "Kütüphaneden “Küçük Prens” adlı kitabı ödünç aldım."
  ],
  dogru: 3,
  hatalar: [
    "Bildirme cümlesine soru işareti koyma: “okudum” bir şey sormuyor, bildiriyor. Sonuna nokta gelmeliydi.",
    "Soruyu nokta ile bitirme: “hangi kitabı okumak istersiniz” yanıt bekleyen bir soru; sonuna soru işareti gelmeliydi.",
    "Gereksiz noktalı virgül: “çok sayıda” ile “ağaç” aynı tamlamanın parçası; noktalı virgül sıralı cümleleri ya da içi virgüllü takımları ayırır, bir tamlamayı bölmez.",
    null
  ],
  aciklama: `Kural: Soru işareti yanıt bekleyen cümleye, nokta bildirme cümlesine konur; noktalı virgül bir tamlamayı bölmez; eser adı tırnak içinde yazılır.
Adım 1: A’da “okudum” bir bildirim; sonundaki soru işareti yanlış.
Adım 2: B’de son cümle bir soru; nokta yanlış. C’de “çok sayıda; ağaç” arasındaki noktalı virgül fazla.
Adım 3: D’de “Küçük Prens” eser adı olarak tırnaktadır ve cümle noktayla bitiyor. Hata yok.
Cevap D.`
},
{
  id: "tur-nk-045",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama __doğru__ kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Ece, arkadaşına dönüp “Yarın sınav var mı”? diye sordu.",
    "Ece, arkadaşına dönüp “Yarın sınav var mı?” diye sordu.",
    "Ece, arkadaşına dönüp “Yarın sınav var mı,” diye sordu.",
    "Ece, arkadaşına dönüp “Yarın sınav var mı.” diye sordu."
  ],
  dogru: 1,
  hatalar: [
    "Soru işaretini tırnağın dışına alma: aktarılan sözün kendi işareti tırnağın içinde kalır.",
    null,
    "Soru yerine virgül koyma: aktarılan söz bir soru, işareti soru işareti olmalı; virgül soruyu göstermez.",
    "Soruyu nokta ile bitirme: “var mı” soru ekiyle kurulmuş, yanıt bekliyor; sonuna nokta konmaz."
  ],
  aciklama: `Kural: Aktarılan sözün kendi noktası, soru işareti ya da ünlemi tırnağın içinde kalır.
Adım 1: Aktarılan söz “Yarın sınav var mı” ve soru ekiyle kurulmuş bir soru. İşareti soru işareti olmalı.
Adım 2: Bu işaret aktarılan sözün parçası olduğu için tırnağın içine yazılır: “…var mı?”.
Adım 3: A’da işaret dışarıda, C’de virgül, D’de nokta var; üçü de yanlış.
Cevap B.`
},
{
  id: "tur-nk-046",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, yazdığı kısa şiirin iki dizesini tek satıra yazıyor:
Gece indi dağlardan( ) Yıldızlar yandı bağlardan
**Bu satırda yay ayraçla ( ) gösterilen yere, dizeleri birbirinden ayırmak için aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(/)", "(.)", "(:)", "(;)"],
  dogru: 0,
  hatalar: [
    null,
    "Noktayı dize ayırıcı sanma: nokta cümleyi bitirir; yan yana yazılan dizeleri ayırma görevi eğik çizgidedir.",
    "İki noktayı dize ayırıcı sanma: iki nokta açıklama ya da örnek başlatır; ikinci dize birincinin açıklaması değil.",
    "Noktalı virgülü dize ayırıcı sanma: noktalı virgül takımları ya da sıralı cümleleri ayırır; yan yana yazılan dizelerde eğik çizgi kullanılır."
  ],
  aciklama: `Kural: Yan yana yazılan dizeler eğik çizgiyle ayrılır: Gece indi dağlardan / Yıldızlar yandı bağlardan.
Adım 1: Şiir dizeleri normalde alt alta yazılır. Yer kazanmak için yan yana yazınca satır sonları kaybolur.
Adım 2: Dize sınırını gösteren işaret eğik çizgidir.
Adım 3: Nokta, iki nokta ve noktalı virgülün başka görevleri var; dizeyi ayırmak için kullanılmaz.
Cevap A.`
},
{
  id: "tur-nk-047",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde iki noktanın kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Çantama şunları koydum: su, elma ve havlu.",
    "Hakem düdüğünü çalıp bağırdı: “Oyun bitti!”",
    "Kitabı bitirdim: fakat sonunu beğenmedim.",
    "Annem öğle yemeği için üç şey hazırladı: çorba, pilav, salata."
  ],
  dogru: 2,
  hatalar: [
    "Doğru kullanımı yanlış sanma: “şunları” sözü bir sıralama başlatıyor; iki nokta örnekten önce konur.",
    "Doğru kullanımı yanlış sanma: hakemin sözü aktarılıyor; aktarılan sözden önce iki nokta konur.",
    null,
    "Doğru kullanımı yanlış sanma: “üç şey” sözü sıralanacak örnekleri haber veriyor; iki nokta yerinde."
  ],
  aciklama: `Kural: İki nokta, ardından açıklama, örnek ya da aktarma gelecek sözden sonra konur. Karşıtlık bağlacı olan “fakat” bir açıklama başlatmaz.
Adım 1: A, B ve D’de iki noktadan sonra sırasıyla bir sıralama, aktarılan bir söz ve bir sıralama geliyor; üçü de yerinde.
Adım 2: C’de “Kitabı bitirdim” ile “fakat sonunu beğenmedim” karşıtlık bağlacıyla bağlanıyor. İkincisi birincisini açıklamıyor.
Adım 3: Karşıtlık bağlacından önce iki nokta konmaz; cümle “Kitabı bitirdim ama/fakat …” diye yazılır.
Cevap C.`
},

/* ===================== HAVUZ — DÜZEY 3 ===================== */
{
  id: "tur-nk-048",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Pazartesi akşamı günlüğüme şunları yazdım( ) Bugün okulda çok yoruldum( ) Teneffüste Elif’in yanına gidip şöyle sordum( ) “Bu akşam kütüphaneye gelecek misin( )” Ne kadar güzel bir arkadaşlığımız var( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(:) (.) (;) (.) (!)",
    "(,) (.) (:) (.) (!)",
    "(:) (.) (:) (.) (!)",
    "(:) (.) (:) (?) (!)"
  ],
  dogru: 3,
  hatalar: [
    "Üçüncü yeri noktalı virgül, dördüncü yeri nokta yapma: “şöyle sordum” sözünden sonra Elif’e yöneltilen soru aktarılıyor, aktarma öncesine iki nokta konur; “gelecek misin” de yanıt bekleyen bir soru olduğundan sonuna soru işareti gelir.",
    "Birinci yeri virgül, dördüncü yeri nokta yapma: “şunları yazdım” sözü ardından gelen açıklamayı haber veriyor, virgül değil iki nokta konur; “gelecek misin” de soru işaretiyle biter.",
    "Dördüncü yeri nokta yapma: “gelecek misin” soru ekiyle kurulmuş, yanıt bekliyor; tırnağın içinde soru işareti kalır.",
    null
  ],
  aciklama: `Kural: Açıklama ya da aktarma gelecek sözden sonra iki nokta, bildirme cümlesinin sonuna nokta, soruya soru işareti, duygu bildiren cümleye ünlem konur.
Adım 1: “şunları yazdım( )” ardından yazılanlar geliyor: iki nokta.
Adım 2: “çok yoruldum( )” bildirme cümlesi, sonraki sözcük büyük harfle başlıyor: nokta.
Adım 3: “şöyle sordum( ) “Bu akşam…” Elif’e yöneltilen soru aktarılıyor: iki nokta.
Adım 4: “gelecek misin( )” soru: soru işareti. Son cümle duygu bildiriyor: ünlem.
Sağlama: Sırayla (:) (.) (:) (?) (!).
Cevap D.`
},
{
  id: "tur-nk-049",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Çantamda şunlar var: kalem, silgi, cetvel.
(II) Müzenin bekçisi seslendi: “Kapanış vakti!”
(III) AYÇA: Hangi yoldan gidelim?
(IV) Dedem gülümseyerek ekledi: “Yolunuz açık olsun.”
**Numaralanmış cümlelerin hangi ikisinde iki nokta aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["II ve IV", "I ve II", "I ve III", "III ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Örnek sıralamasıyla aktarmayı eşleştirme: I’de iki nokta ardından gelecek örnekleri, II’de ise aktarılan sözü başlatıyor.",
    "Örnek sıralamasıyla konuşan kişinin adını eşleştirme: I’de iki nokta örnekleri başlatıyor, III’te konuşan kişinin adından sonra konmuş.",
    "Konuşan adıyla aktarmayı eşleştirme: III’te iki nokta konuşan kişinin adından sonra, IV’te aktarılan sözden önce konmuş."
  ],
  aciklama: `Kural: İki noktanın görevleri: örnek ya da açıklama başlatma, aktarılan sözden önce gelme, konuşan kişinin adından sonra gelme.
Adım 1: I: “şunlar var:” ardından örnekler sıralanıyor.
Adım 2: II: “seslendi:” ardından bekçinin sözü aktarılıyor. IV: “ekledi:” ardından dedenin sözü aktarılıyor. İkisi de aktarma.
Adım 3: III: “AYÇA:” konuşan kişinin adından sonra.
Adım 4: Aynı görevde olanlar II ve IV.
Cevap A.`
},
{
  id: "tur-nk-050",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Dedem sofrada “Sofrada telefon olmaz.” diyerek bizi uyardı.
(II) Okul kütüphanesinden “Bilim Çocukları” dergisini aldım.
(III) Babamın “kısa yol”u çoğu zaman bizi eve daha geç ulaştırır.
(IV) Dün akşam “Kaybolan Yıldız” adlı belgeseli izledim.
**Numaralanmış cümlelerin hangi ikisinde tırnak işareti aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
  dogru: 2,
  hatalar: [
    "Aktarmayla eser adını eşleştirme: I’de tırnak dedenin sözünü aktarıyor, II’de bir derginin adını gösteriyor.",
    "Aktarmayla vurguyu eşleştirme: I’de tırnak birinin sözünü aktarıyor, III’te kimsenin söylemediği bir sözü vurguluyor.",
    null,
    "Vurguyla eser adını eşleştirme: III’te tırnak “kısa yol” sözünü vurguluyor, IV’te bir belgeselin adını gösteriyor."
  ],
  aciklama: `Kural: Tırnak üç görevde kullanılır: başkasının sözünü aktarma, özel olarak vurgulanan sözü gösterme, eser adını belirtme.
Adım 1: I: dedemin söylediği söz aktarılıyor.
Adım 2: II: “Bilim Çocukları” bir derginin adı: eser adı. IV: “Kaybolan Yıldız” bir belgeselin adı: eser adı.
Adım 3: III: “kısa yol” kimsenin söylediği bir cümle değil; babanın alışkanlığına dikkat çeken, vurgulanan söz.
Adım 4: Aynı görevde olanlar II ve IV.
Cevap C.`
},
{
  id: "tur-nk-051",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde ara sözü kısa çizgilerle doğru biçimde ayrılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bahçemizdeki ceviz ağacı -yaklaşık yüz yıllık bu yıl da çok meyve verdi.",
    "Bahçemizdeki ceviz ağacı -yaklaşık yüz yıllık- bu yıl da çok meyve verdi.",
    "Bahçemizdeki ceviz ağacı yaklaşık yüz yıllık- bu yıl da çok meyve verdi.",
    "Bahçemizdeki ceviz -ağacı yaklaşık yüz yıllık- bu yıl da çok meyve verdi."
  ],
  dogru: 1,
  hatalar: [
    "Çizgiyi yalnız başına bırakma: ara sözünü iki yandan çizgi ayırır; ikinci çizgi eksik.",
    null,
    "Çizgiyi yalnız başına bırakma: ara sözünü iki yandan çizgi ayırır; ilk çizgi eksik.",
    "Ara sözünün sınırını yanlış çizme: “ağacı” sözü cümlenin öznesinin parçası, ara sözüne alınamaz; çizgiler yanlış yere konmuş."
  ],
  aciklama: `Kural: Ara sözü iki yandan kısa çizgiyle ayrılabilir; çizgiler ara sözünün hemen başına ve sonuna konur.
Adım 1: Cümleden çıkarılabilecek söz: “yaklaşık yüz yıllık”. Cümle onsuz da tamam: “Bahçemizdeki ceviz ağacı bu yıl da çok meyve verdi.”
Adım 2: Ara sözün başına ve sonuna birer çizgi gelir: -yaklaşık yüz yıllık-.
Adım 3: A ve C’de tek çizgi var; D’de çizgiler ara sözünü ağaçtan koparıp “ağacı” sözünü de içine almış.
Cevap B.`
},
{
  id: "tur-nk-052",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdakilerin hangisinin sonuna ünlem işareti __konmaz__?**`,
  gorsel: null,
  secenekler: [
    "Annem bana ne zaman döneceğimi sordu",
    "Ne kadar güzel bir manzara karşısındayız",
    "Yaşasın, yarın okul tatil olacak",
    "Bravo, yarışmayı sen kazandın"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Duyguyu görmeme: “Ne kadar güzel…” hayranlık bildiriyor; duygu bildiren cümlelerin sonuna ünlem konur.",
    "Duyguyu görmeme: “Yaşasın” sevinç bildiriyor; cümle sevinç duygusuyla bitiyor, ünlem konur.",
    "Duyguyu görmeme: “Bravo” takdir bildiriyor; cümle övgü taşıyor, ünlem konur."
  ],
  aciklama: `Kural: Ünlem işareti sevinç, hayranlık, takdir, korku gibi duyguları bildiren cümlelerin sonuna konur. Duygu taşımayan, bir olayı aktaran cümleye nokta konur.
Adım 1: B’de hayranlık, C’de sevinç, D’de takdir var; üçünün sonuna ünlem konur.
Adım 2: A’da annenin ne yaptığı anlatılıyor: “sordu”. Konuşan kişi bir duygu bildirmiyor, ne olduğunu aktarıyor. Sonuna nokta konur.
Sık yapılan hata: İçinde “ne zaman” gibi soru sözü bulunan her cümleyi soru ya da ünlem sanmak.
Cevap A.`
},
{
  id: "tur-nk-053",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Kasabamızın yıllık kitap şenliği 14 Mayıs’ta başlayacak. (II) Şenlikte yazarlarla söyleşiler, imza günleri ve çocuk atölyeleri yapılacak. (III) Etkinliklere katılmak isteyen öğrenciler; okul müdürlüğüne başvurabilir. (IV) Kayıt için öğrencilerin kimlik numarasını yazması yeterlidir.
**Bu metinde numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 2,
  hatalar: [
    "Kesmeyi yanlış sanma: “14 Mayıs” belirli bir tarih bildiriyor; belirli tarihte ay adına gelen ek kesmeyle ayrılır.",
    "Virgülü eksik ya da fazla sanma: “söyleşiler, imza günleri ve çocuk atölyeleri” eş görevli sözcükleri sıralıyor; “ve”den önce virgül konmaz.",
    null,
    "Doğru kullanımı yanlış sanma: IV’te ek bir işaret gerektiren yer yok; cümle yalnızca sonundaki noktayla biter."
  ],
  aciklama: `Kural: Noktalı virgül, içinde virgül bulunan takımları ya da sıralı cümleleri ayırır; özneden sonra konmaz.
Adım 1: I: belirli tarihte “14 Mayıs’ta” doğru. II: virgül eş görevli sözcükleri, “ve” bağlacından önce virgül yok; doğru.
Adım 2: III: “öğrenciler” özne; ondan sonra noktalı virgül konmuş. Özneyi yüklemden ayıran, takım ayırmayan bu işaret yanlış.
Adım 3: IV: cümle ek bir işaret gerektirmiyor; yalnızca sonundaki nokta yeterli.
Cevap C.`
},
{
  id: "tur-nk-054",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `— Bu kitabı daha önce okudun mu( )
— Hayır( ) ama arkadaşım çok övmüştü( ) diye yanıtladım.
**Bu diyalogda yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(?) (,) (.)",
    "(?) (;) (.)",
    "(.) (,) (.)",
    "(?) (,) (,)"
  ],
  dogru: 3,
  hatalar: [
    "Üçüncü yeri nokta yapma: konuşma çizgisiyle verilen söz “diye yanıtladım” gibi bir sözle sürüyorsa sonuna virgül gelir; nokta cümleyi bitirir.",
    "İkinci yeri noktalı virgül, üçüncü yeri nokta yapma: “Hayır” bir cevap sözüdür, ardından virgül konur; “övmüştü” sözü ise “diye yanıtladım” ile sürüyor, sonuna virgül gelir.",
    "Birinci ve üçüncü yeri nokta yapma: “okudun mu” soru ekiyle kurulmuş, yanıt bekleyen bir soru, sonuna soru işareti gelir; söz “diye yanıtladım” ile sürdüğü için üçüncü yere de nokta değil virgül konur.",
    null
  ],
  aciklama: `Kural: Soru ekli cümlenin sonuna soru işareti, cevap sözlerinden (evet, hayır) sonra virgül konur. Konuşma çizgisiyle verilen söz “diye yanıtladım” gibi bir sözle sürüyorsa onun sonuna virgül gelir.
Adım 1: “okudun mu” bir soru: (?).
Adım 2: “Hayır” bir cevap sözü; arkasındaki “ama” ile sürüyor: (,).
Adım 3: “övmüştü” sözü “diye yanıtladım” ile sürüyor; bu durumda söz virgülle biter: (,).
Sağlama: Sırayla (?) (,) (,).
Cevap D.`
},
{
  id: "tur-nk-055",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde yay ayraç içindeki işaret, bilginin kesin olmadığını göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Pek dikkatli (!) davranan kardeşim bardağı yine düşürdü.",
    "Kasabanın en yaşlı çınarı 400 (?) yaşında olabilir.",
    "Dedemin köyü (Yozgat’ta küçük bir köy) çok sakindir.",
    "Sakla samanı, gelir zamanı. (Atasözü)"
  ],
  dogru: 1,
  hatalar: [
    "Alayı belirsizlik sanma: ayraç içindeki ünlem söze alay anlamı katar; burada bilgi kesin olmasa da işaret bilgiye değil davranışa takılmış.",
    null,
    "Açıklamayı belirsizlik sanma: ayraç içindeki söz ek bilgi veriyor; bir işaret yok, bilgi kesin.",
    "Kaynağı belirsizlik sanma: ayraç içindeki “Atasözü” sözün kaynağını gösteriyor, bilginin kesinliğiyle ilgisi yok."
  ],
  aciklama: `Kural: Ayraç içindeki soru işareti bilginin kesin olmadığını, ayraç içindeki ünlem sözde alay ya da küçümseme bulunduğunu gösterir.
Adım 1: A’daki (!) “pek dikkatli” sözünün tersini kastediyor: alay.
Adım 2: B’deki (?) yaşın tam bilinmediğini, “400” sayısının kesin olmadığını gösteriyor.
Adım 3: C’de ayraç ek bilgi, D’de kaynak bildiriyor.
Cevap B.`
},
{
  id: "tur-nk-056",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Mart ayında Ankara’ya taşındık. (II) Ankara’da Türk Hava Kurumuna bağlı bir okula yazıldım. (III) Okulun müdürü Sevgi Hanımla tanıştık. (IV) Beni 8’inci sınıfa aldılar.
**Bu metinde numaralanmış cümlelerin hangisinde kesme işaretiyle ilgili bir yanlışlık vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Doğru kullanımı yanlış sanma: “Ankara’ya” yer adına gelen ek kesmeyle ayrılır; “Mart ayında” belirli bir tarih değil, küçük harfle ve kesmesiz yazılır.",
    "Kurum ekini hatalı sanma: “Türk Hava Kurumuna” kurum adıdır; kurum adına gelen ek kesmeyle ayrılmaz, cümle doğru yazılmış.",
    null,
    "Rakam ekini hatalı sanma: rakamla yazılan sıra sayısına gelen ek kesmeyle ayrılır; “8’inci” doğru yazılmış."
  ],
  aciklama: `Kural: Kişi adından sonra gelen saygı sözlerine (Bey, Hanım) gelen ek kesmeyle ayrılır: Sevgi Hanım’la. Kurum adlarına gelen ekler ayrılmaz. Rakamla yazılan sayılara gelen ekler ayrılır.
Adım 1: I: “Ankara’ya” yer adı; kesme yerinde. II: “Türk Hava Kurumuna” kurum adı; kesme yok, yerinde.
Adım 2: III: “Sevgi Hanım” kişi adı ve saygı sözü; ek kesmeyle ayrılmalıydı: “Sevgi Hanım’la”. Eksik.
Adım 3: IV: “8’inci” rakama gelen ek, doğru.
Cevap C.`
},
{
  id: "tur-nk-057",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Annem akşam yemeğine kaç kişinin geleceğini bana sordu?",
    "Defterini unutmuşsun, öğretmenin kızacağını bilmiyor musun.",
    "Yarışmaya katılmak isteyenler listeye: yazılsın ve tarihi öğrensin.",
    "Kahvaltıyı hazırladı, sofrayı kurdu ve çayı demledi."
  ],
  dogru: 3,
  hatalar: [
    "Dolaylı soruyu soru sanma: cümle bir şeyin sorulduğunu bildiriyor, yanıt beklemiyor. Sonuna nokta gelmeliydi.",
    "Soruyu nokta ile bitirme: “bilmiyor musun” soru ekiyle kurulmuş, yanıt bekliyor. Sonuna soru işareti gelmeliydi.",
    "Gereksiz iki nokta: “listeye” sözünden sonra açıklama, örnek ya da aktarma gelmiyor; cümle kesintisiz sürüyor.",
    null
  ],
  aciklama: `Kural: Dolaylı soru bildirme cümlesidir, sonuna nokta gelir. Soru ekli, yanıt bekleyen cümlenin sonuna soru işareti gelir. iki nokta ancak açıklama, örnek ya da aktarma gelecekse konur.
Adım 1: A’da “sordu” ile biten cümle bir bildirim; soru işareti yanlış.
Adım 2: B’de son cümle bir soru; nokta yanlış. C’de “listeye:” iki noktası fazla.
Adım 3: D’de “hazırladı, sofrayı kurdu” yüklemleri virgülle sıralanmış, “ve”den önce virgül yok, cümle noktayla bitiyor. Hata yok.
Cevap D.`
},
{
  id: "tur-nk-058",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Kasaba belediyesi yeni kütüphanenin açılışını yaptı( ) Açılışa kasabanın bütün okullarından öğrenciler katıldı( ) Belediye başkanı konuşmasında müjdeyi verdi( ) kütüphane hafta sonları da açık kalacak( ) Bu kütüphane kasabaya neler kazandıracak( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(.) (.) (:) (.) (?)",
    "(.) (.) (:) (,) (?)",
    "(,) (.) (:) (,) (?)",
    "(.) (;) (:) (,) (.)"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dördüncü yeri virgül yapma: ardından gelen “Bu” büyük harfle yeni bir cümleyi başlatıyor; cümleyi virgül değil nokta bitirir.",
    "Birinci ve dördüncü yeri virgül yapma: “yaptı” sözünden sonra büyük harfle “Açılışa” başlıyor, “kalacak” sözünden sonra da büyük harfle “Bu” başlıyor; yeni cümleye geçerken nokta konur.",
    "İkinci yeri noktalı virgül, dördüncü yeri virgül, son yeri nokta yapma: ardındaki “Belediye” büyük harfle başlıyor, yeni cümle başlıyor; son cümle ise yanıt bekleyen bir soru olduğundan soru işaretiyle biter."
  ],
  aciklama: `Kural: Yeni cümleye geçmeden önce nokta, açıklama gelecek sözden önce iki nokta, soru cümlesinin sonuna soru işareti konur.
Adım 1: “yaptı( ) Açılışa…” büyük harf yeni cümlenin başladığını gösterir: nokta.
Adım 2: “katıldı( ) Belediye…” yine büyük harf: nokta.
Adım 3: “müjdeyi verdi( ) kütüphane…” müjdenin ne olduğu açıklanıyor: iki nokta.
Adım 4: “kalacak( ) Bu” yeni cümle başlıyor: nokta. “kazandıracak( )” yanıt bekleyen soru: soru işareti.
Sağlama: Sırayla (.) (.) (:) (.) (?).
Cevap A.`
},
{
  id: "tur-nk-059",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Bir tiyatro metninin bir bölümü şöyledir:
BEYZA( ) (Elindeki mektubu masaya bırakır( )) Bu mektup bana mı gelmiş( )
ALP( ) Evet( ) sabah postacı getirdi.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(:) (.) (?) (:) (;)",
    "(:) (.) (?) (:) (,)",
    "(,) (.) (?) (:) (;)",
    "(:) (,) (?) (:) (;)"
  ],
  dogru: 1,
  hatalar: [
    "Son yeri noktalı virgül yapma: “Evet” kabul bildiren bir cevap sözüdür; ardından virgül konur.",
    null,
    "Birinci yeri virgül, son yeri noktalı virgül yapma: tiyatro metninde konuşan kişinin adından sonra iki nokta konur; “Evet” de kabul bildiren bir cevap sözü olduğundan ardından virgül gelir.",
    "İkinci yeri virgül, son yeri noktalı virgül yapma: ayraç içindeki sahne yönergesi bir cümledir ve nokta ile biter; “Evet” sözünden sonra da virgül konur."
  ],
  aciklama: `Kural: Tiyatro metninde konuşan kişinin adından sonra iki nokta konur. Ayraç içindeki sahne yönergesi cümleyse noktayla biter. Soru cümlesinin sonuna soru işareti, “evet, hayır” gibi sözlerden sonra virgül konur.
Adım 1: “BEYZA( )” ve “ALP( )” konuşan adlarından sonra iki nokta.
Adım 2: “bırakır( )” ayraç içindeki yönerge cümlesini bitirir: nokta.
Adım 3: “gelmiş( )” “mı” soru eki taşıyor: soru işareti.
Adım 4: “Evet( )” cevap sözü, ardından virgül.
Sağlama: Sırayla (:) (.) (?) (:) (,).
Cevap B.`
},
{
  id: "tur-nk-060",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) İstanbul-Ankara hızlı treni bu yıl hizmete girdi.
(II) Sözleşme 14/05/2026 tarihinde imzalandı.
(III) Dedem 1960-1965 yıllarında Sivas’ta askerlik yapmış.
(IV) Şiirin iki dizesini yazdım: Kar yağdı ovaya / Kış geldi yaylaya
**Numaralanmış cümlelerin hangi ikisinde çizgi hem aynı işaret hem de aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "II ve III",
    "II ve IV",
    "I ve III"
  ],
  dogru: 3,
  hatalar: [
    "Farklı işaretleri eşleştirme: I’de kısa çizgi, II’de eğik çizgi kullanılmış.",
    "Farklı işaretleri eşleştirme: II’de eğik çizgi, III’te kısa çizgi kullanılmış.",
    "Aynı işaretin farklı görevlerini eşleştirme: ikisinde de eğik çizgi var ama II’de tarihte gün, ay ve yılı, IV’te yan yana yazılan dizeleri ayırıyor.",
    null
  ],
  aciklama: `Kural: Kısa çizgi “arasında, ile, …den …e” anlamı verir; eğik çizgi tarihte gün, ay ve yılı, yan yana yazılan dizeleri ayırır.
Adım 1: I: “İstanbul-Ankara” iki şehir arasındaki hattı gösterir: kısa çizgi, “arasında”.
Adım 2: III: “1960-1965” iki yıl arasındaki süreyi gösterir: kısa çizgi, “…den …e”. I ile III aynı işaret ve aynı görev.
Adım 3: II’de eğik çizgi tarihte gün, ay ve yılı, IV’te dizeleri ayırıyor: aynı işaret, farklı görev.
Cevap D.`
},
{
  id: "tur-nk-061",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Okulumuz 12( )13 Nisan tarihlerinde Çanakkale’ye gezi düzenleyecek( ) Katılmak isteyenler şunları getirmeli( ) kimlik, veli izin belgesi ve yedek kıyafet( ) Başvurular 3 Nisan günü saat 15( )00’e kadar alınacaktır.
**Bu duyuruda yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(/) (.) (:) (.) (.)",
    "(/) (.) (;) (.) (.)",
    "(-) (.) (:) (.) (.)",
    "(/) (.) (:) (.) (:)"
  ],
  dogru: 2,
  hatalar: [
    "Birinci yeri eğik çizgi yapma: “12’sinden 13’üne kadar” anlamını kısa çizgi verir; eğik çizgi tarihte gün, ay, yılı ayırır.",
    "Birinci yeri eğik çizgi, üçüncü yeri noktalı virgül yapma: “12’sinden 13’üne kadar” anlamını kısa çizgi verir; “şunları getirmeli” sözü de sıralama haber verdiği için iki nokta ister.",
    null,
    "Birinci yeri eğik çizgi, son yeri iki nokta yapma: kısa çizgi gerekir; saatte saat ile dakikayı nokta ayırır (15.00), iki nokta bu görevde kullanılmaz."
  ],
  aciklama: `Kural: İki gün arasındaki aralığı kısa çizgi gösterir; sıralama başlatacak sözden sonra iki nokta, saatte saat ile dakika arasına nokta konur.
Adım 1: “12( )13 Nisan” bir tarih aralığı: kısa çizgi.
Adım 2: “düzenleyecek( ) Katılmak…” yeni cümle başlıyor: nokta.
Adım 3: “şunları getirmeli( ) kimlik…” sıralama geliyor: iki nokta. “kıyafet( ) Başvurular…” yeni cümle: nokta.
Adım 4: “15( )00” saat: nokta (15.00’e).
Sağlama: Sırayla (-) (.) (:) (.) (.).
Cevap C.`
},
{
  id: "tur-nk-062",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Dedem; her sabah erkenden kalkar, bahçedeki çiçekleri sular, ve çaydanlığı ocağa koyar.
**Bu cümledeki noktalama yanlışlarını düzeltmek için aşağıdakilerden hangisi yapılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Yalnızca “Dedem” sözünün ardındaki noktalı virgül kaldırılmalıdır.",
    "“Dedem” ardındaki noktalı virgül ile “sular” ardındaki virgül kaldırılmalıdır.",
    "“kalkar” ardındaki virgül noktalı virgüle çevrilmelidir.",
    "Yalnızca “sular” sözünün ardındaki virgül kaldırılmalıdır."
  ],
  dogru: 1,
  hatalar: [
    "Yarım düzeltme: öznenin ardındaki noktalı virgül yanlış, ama “ve”den önceki virgül de yanlış; ikisi birden düzeltilmeli.",
    null,
    "Yanlış işareti artırma: sıralı yüklemleri ayıran virgül zaten yerinde; noktalı virgül içinde virgül olan takımlar için gerekir.",
    "Yarım düzeltme: “ve”den önceki virgül yanlış, ama özneden sonra konan noktalı virgül de yanlış; ikisi birden düzeltilmeli."
  ],
  aciklama: `Kural: Özneden sonra noktalı virgül konmaz; “ve” bağlacından önce virgül konmaz.
Adım 1: “Dedem;” öznenin hemen ardına noktalı virgül konmuş. Özneyi yüklemden ayıran bu işaret yanlış.
Adım 2: “kalkar, … sular” yüklemleri virgülle sıralanmış; bu doğru.
Adım 3: “sular, ve çaydanlığı” bağlaçtan önce virgül konmuş; yanlış.
Adım 4: Doğru yazım: “Dedem her sabah erkenden kalkar, bahçedeki çiçekleri sular ve çaydanlığı ocağa koyar.”
Cevap B.`
},
{
  id: "tur-nk-063",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Dr. Kaya yarın okulumuza gelecek.
(II) Defterin ilk sayfasına 21.03.2027 yazdım.
(III) Gül Sokak’taki 7. evde oturuyoruz.
(IV) Yarışmada 3. oldum.
**Numaralanmış cümlelerin hangi ikisinde nokta aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["III ve IV", "I ve II", "I ve III", "II ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Kısaltmayla tarihi eşleştirme: I’deki nokta “doktor” kısaltmasını, II’deki noktalar gün, ay ve yılı ayırıyor.",
    "Kısaltmayla sırayı eşleştirme: I’deki nokta “Dr.” kısaltmasında, III’teki nokta “yedinci” demek olan sayıda.",
    "Tarihle sırayı eşleştirme: II’deki noktalar gün, ay ve yılı ayırıyor, IV’teki nokta “üçüncü” demek olan sayıda."
  ],
  aciklama: `Kural: Noktanın görevleri: kısaltma (Dr.), tarihte gün-ay-yılı ayırma, sayıdan sonra sıra bildirme (7. ev).
Adım 1: I: “Dr.” kısaltma.
Adım 2: II: “21.03.2027” tarih; noktalar gün, ay ve yılı ayırıyor.
Adım 3: III: “7. evde” yedinci ev, IV: “3. oldum” üçüncü oldum. İkisinde de nokta sıra bildiriyor.
Cevap A.`
},

/* ===================== HAVUZ — DÜZEY 4 ===================== */
{
  id: "tur-nk-064",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: "Okul gazetesinin editörü yeni sayının duyurusunu şöyle yazdı( ) Sevgili okurlar( ) bu sayıda üç bölüm bulacaksınız( ) bilim haberleri, röportajlar ve öğrenci öyküleri( ) Peki, en çok hangi bölümü merak ediyorsunuz( )\n**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**",
  gorsel: null,
  secenekler: [
    "(:) (,) (:) (.) (?)",
    "(,) (,) (:) (.) (?)",
    "(,) (;) (:) (,) (?)",
    "(,) (,) (;) (.) (.)"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Birinci yeri virgül yapma: “şöyle yazdı” sözü ardından gelen metni haber veriyor; açıklama öncesinde iki nokta gelir.",
    "Birinci ve ikinci yeri virgül ile noktalı virgül yapıp dördüncü yere virgül koyma: “şöyle yazdı” sözünden sonra iki nokta, “Sevgili okurlar” seslenmesinden sonra virgül, “öyküleri( ) Peki” yerinde yeni cümleye geçerken nokta konur.",
    "Birinci yeri virgül, üçüncü yeri noktalı virgül, son yeri nokta yapma: “şöyle yazdı” ve “bulacaksınız” sözlerinden sonra açıklama geliyor, iki nokta konur; son cümle de yanıt bekleyen bir soru olduğundan soru işaretiyle biter."
  ],
  aciklama: `Kural: Açıklama ya da örnek gelecek sözden sonra iki nokta, seslenmeden sonra virgül, cümle sonlarında nokta ve soru işareti konur.
Adım 1: “şöyle yazdı( )” ardından duyuru metni geliyor: iki nokta.
Adım 2: “Sevgili okurlar( )” kime seslenildiğini gösteriyor: virgül.
Adım 3: “üç bölüm bulacaksınız( ) bilim haberleri…” sıralanacak bölümler geliyor: iki nokta.
Adım 4: “öyküleri( ) Peki” yeni cümle başlıyor: nokta. “merak ediyorsunuz( )” soru: soru işareti.
Sağlama: Sırayla (:) (,) (:) (.) (?).
Cevap A.`
},
{
  id: "tur-nk-065",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `(I) Bu, geçen yaz babamla yaptığımız yolculuğun fotoğrafı.
(II) Yarın erken kalkacağım, dedi Mert.
(III) Peki, ödevi akşam birlikte yaparız.
(IV) Tamam, ben de seninle geliyorum.
**Numaralanmış cümlelerin hangi ikisinde virgül aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "III ve IV", "II ve IV"],
  dogru: 2,
  hatalar: [
    "Zamir virgülüyle aktarma virgülünü eşleştirme: I’de virgül özne olan “bu” zamirinden, II’de tırnaksız aktarılan sözden sonra konmuş.",
    "Zamir virgülüyle cevap sözü virgülünü eşleştirme: I’de virgül özne olan “bu” zamirinden, III’te “peki” cevap sözünden sonra konmuş.",
    null,
    "Aktarma virgülüyle cevap sözü virgülünü eşleştirme: II’de virgül tırnaksız aktarılan sözden, IV’te “tamam” cevap sözünden sonra konmuş."
  ],
  aciklama: `Kural: Virgül; özne olan “bu, şu, o” zamirinden sonra, kabul-ret bildiren “evet, hayır, peki, tamam, olur” gibi sözlerden sonra ve tırnaksız aktarılan sözden sonra konur. Üçü ayrı görevdir.
Adım 1: I: “Bu,” özne olan zamir.
Adım 2: II: “Yarın erken kalkacağım,” tırnak kullanılmadan aktarılan söz; ardından “dedi”.
Adım 3: III: “Peki,” ve IV: “Tamam,” kabul bildiren söz; ikisinde de virgül aynı görevde.
Cevap C.`
},
{
  id: "tur-nk-066",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `(I) Hayır, bu akşam gelemeyeceğim. (II) Salı günü Ali, Derya, çarşamba günü Mert, Elif nöbet tutacak. (III) Bu, hiç beklemediğim bir haberdi. (IV) Müzeyi gezerken rehberin anlattıklarını not aldım ve fotoğraflar çektim.
**Bu metinde numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 1,
  hatalar: [
    "Doğru kullanımı yanlış sanma: “Hayır” ret bildiren bir cevap sözüdür; ardından virgül konması doğrudur.",
    null,
    "Doğru kullanımı yanlış sanma: “Bu” cümlenin öznesi olan bir zamirdir; ardından virgül konması “bu” sözünün sıfat sanılmasını önler.",
    "Doğru kullanımı yanlış sanma: iki yüklem “ve” ile bağlanmış; bağlacın önünde ve arkasında işaret yoktur, nokta ile bitiyor."
  ],
  aciklama: `Kural: Virgülle ayrılmış takımlar noktalı virgülle ayrılır.
Adım 1: II’de iki gün anlatılıyor: salı (Ali, Derya) ve çarşamba (Mert, Elif). Her günün içi virgüllü.
Adım 2: Günler arasına da virgül konunca takım sınırı kayboluyor; günleri noktalı virgül ayırmalıydı: “Salı günü Ali, Derya; çarşamba günü Mert, Elif nöbet tutacak.”
Adım 3: I’deki “Hayır,”, III’teki “Bu,” ve IV’teki “ve” kullanımı kurallara uygun.
Cevap B.`
},
{
  id: "tur-nk-067",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `(I) Pazar günü ailecek Bolu’ya gittik. (II) Yolda annem “Neden bu kadar yavaş gidiyoruz.” diye sordu. (III) Gölün kıyısında yemek yedik; ve kısa bir yürüyüş yaptık. (IV) Akşam yola çıktık, gece yarısı evdeydik, ve çok yorgunduk.
**Bu metnin numaralanmış cümlelerinden kaçında noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["Hiçbirinde", "Yalnızca birinde", "Yalnızca ikisinde", "Üçünde"],
  dogru: 3,
  hatalar: [
    "Hataları görmeme: II’de soru nokta ile bitmiş, III ve IV’te “ve”den önce işaret konmuş; hatasız cümle sayısı bu kadar çok değil.",
    "Eksik sayma: tek hata yok. II’deki soru cümlesinin sonu, III’teki noktalı virgül ve IV’teki virgül yanlış.",
    "Eksik sayma: iki hata bulup birini kaçırma. I dışındaki üç cümlede de noktalama yanlışı var.",
    null
  ],
  aciklama: `Kural: Soru cümlesinin sonuna soru işareti konur; “ve” bağlacının önüne noktalı virgül ya da virgül konmaz.
Adım 1: I: “Bolu’ya” yer adına gelen ek kesmeyle ayrılmış, cümle noktayla bitiyor. Hata yok.
Adım 2: II: “Neden bu kadar yavaş gidiyoruz” bir soru; sonu nokta olmuş. Yanlış.
Adım 3: III: “yedik; ve” bağlaçtan önce noktalı virgül. Yanlış.
Adım 4: IV: “evdeydik, ve” bağlaçtan önce virgül. Yanlış.
Adım 5: Üç cümlede hata var.
Cevap D.`
},
{
  id: "tur-nk-068",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `(I) Dedemin bahçesi -köyün en eski bahçesi- bu yıl çiçek açtı.
(II) Hava sıcaklığı gece −4 °C’ye düştü.
(III) Bursa-İzmir yolunda iki saat bekledik.
(IV) Teyzem ilçemizin simgesi -asırlık çınar- üzerine bir yazı yazdı.
**Numaralanmış cümlelerin hangi ikisinde kısa çizgi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "II ve III",
    "III ve IV",
    "I ve IV"
  ],
  dogru: 3,
  hatalar: [
    "Ara sözüyle eksi işaretini eşleştirme: I’de çizgiler araya girmiş bir sözü ayırıyor, II’de çizgi sayının eksi olduğunu gösteriyor.",
    "Eksi işaretiyle yer arasını eşleştirme: II’de çizgi eksi işareti, III’te iki şehir arasını gösteriyor.",
    "Yer arasıyla ara sözünü eşleştirme: III’te çizgi iki şehir arasını gösteriyor, IV’te araya girmiş bir sözü ayırıyor.",
    null
  ],
  aciklama: `Kural: Kısa çizgi; ara sözünü iki yandan ayırır, “arasında” anlamı verir, matematikte eksi işareti olur.
Adım 1: I: “-köyün en eski bahçesi-” cümleye araya girmiş açıklamayı iki yandan ayırıyor.
Adım 2: II: “−4 °C” sayının eksi olduğunu gösteriyor. III: “Bursa-İzmir” iki şehir arası.
Adım 3: IV: “-asırlık çınar-” yine araya girmiş açıklama. I ve IV aynı görevde.
Cevap D.`
},
{
  id: "tur-nk-069",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Okuldan çıkarken Kaan yanıma geldi.
— Cumartesi basketbol maçına gelecek misin( )
— Annem izin verirse gelirim( ) dedim.
— Peki( ) izin çıkarsa bana mesaj yazar mısın( )
**Bu diyalogda yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(?) (,) (,) (?)",
    "(?) (.) (,) (?)",
    "(.) (.) (,) (?)",
    "(?) (.) (;) (?)"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İkinci yeri nokta yapma: konuşma çizgisiyle verilen söz “dedim” gibi bir sözle sürüyorsa sonuna virgül gelir; nokta cümleyi bitirir.",
    "Birinci ve ikinci yeri nokta yapma: “gelecek misin” soru ekiyle kurulmuş, yanıt bekleyen bir soru, sonuna soru işareti gelir; söz “dedim” ile sürdüğü için ikinci yere de virgül konur.",
    "İkinci yeri nokta, üçüncü yeri noktalı virgül yapma: söz “dedim” ile sürdüğü için virgül konur; “Peki” de bir cevap sözüdür, ardından virgül gelir."
  ],
  aciklama: `Kural: Soru ekli cümlenin sonuna soru işareti, “evet, hayır, peki, tamam” gibi sözlerden sonra virgül konur. Konuşma çizgisiyle verilen söz “dedim” gibi bir sözle sürüyorsa sonuna virgül gelir.
Adım 1: “gelecek misin( )” soru: (?).
Adım 2: “gelirim( ) dedim” söz bir anlatım sözüyle sürüyor: (,).
Adım 3: “Peki( )” cevap sözü: (,).
Adım 4: “yazar mısın( )” soru ekli, yanıt bekliyor: (?).
Sağlama: Sırayla (?) (,) (,) (?).
Cevap A.`
},
{
  id: "tur-nk-070",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Dün ders gezisiyle TBMM’ye(I) gittik. Rehber Sevgi Hanım’a(II) teşekkür ettik. Malazgirt Savaşı’nın 1071’de(III) yapıldığını öğrendik. Abim ise ODTÜ’de(IV) okuyor.
**Bu metinde numaralanmış kesme işaretlerinden hangi ikisi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve IV", "II ve III", "III ve IV"],
  dogru: 1,
  hatalar: [
    "Kısaltmayla saygı sözünü eşleştirme: I’de ek kısaltmaya, II’de kişi adının ardından gelen saygı sözüne gelmiş.",
    null,
    "Saygı sözüyle rakamı eşleştirme: II’de ek saygı sözüne, III’te rakamla yazılan sayıya gelmiş.",
    "Rakamla kısaltmayı eşleştirme: III’te ek rakamla yazılan sayıya, IV’te kısaltmaya gelmiş."
  ],
  aciklama: `Kural: Kesme, kısaltmalara, kişi adını izleyen saygı sözlerine ve rakamla yazılan sayılara gelen ekleri ayırır; her biri ayrı bir görevdir.
Adım 1: I: “TBMM’ye” bir kısaltmaya gelen ek.
Adım 2: II: “Sevgi Hanım’a” kişi adından sonra gelen saygı sözüne gelen ek.
Adım 3: III: “1071’de” rakamla yazılan sayıya gelen ek. IV: “ODTÜ’de” yine bir kısaltmaya gelen ek.
Adım 4: Aynı görevde olanlar I ve IV.
Cevap B.`
},
{
  id: "tur-nk-071",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Bilim kulübünün gözlem gecesinde öğretmenimiz teleskopu gösterip şunu söyledi( ) “Gökyüzü tam bu saatte en berraktır( )” Elif heyecanla sordu( ) “Satürn’ün halkalarını görebilecek miyiz( )” Öğretmenimiz gülümsedi( ) “Bekleyip göreceğiz.”
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(:) (.) (;) (.) (;)",
    "(,) (?) (:) (.) (:)",
    "(:) (.) (:) (?) (:)",
    "(:) (.) (:) (.) (:)"
  ],
  dogru: 2,
  hatalar: [
    "Üçüncü yeri noktalı virgül, dördüncü ve son yeri hatalı doldurma: “Elif heyecanla sordu” ve “gülümsedi” sözlerinden sonra aktarma geliyor, önüne iki nokta konur; “görebilecek miyiz” de yanıt bekleyen bir soru olduğundan soru işaretiyle biter.",
    "Birinci yeri virgül, ikinci yeri soru işareti, dördüncü yeri nokta yapma: “şunu söyledi” sözünden sonra iki nokta gelir; “berraktır” bir bildirimdir, sonuna nokta konur; “görebilecek miyiz” ise yanıt bekleyen bir soru, sonuna soru işareti konur.",
    null,
    "Dördüncü yeri nokta yapma: “görebilecek miyiz” soru ekiyle kurulmuş, yanıt bekliyor; tırnağın içinde soru işareti kalır."
  ],
  aciklama: `Kural: Aktarılacak sözden önce iki nokta, aktarılan bildirme cümlesinin sonuna nokta, aktarılan soruya soru işareti konur.
Adım 1: “söyledi( ) “Gökyüzü…” öğretmenin sözü aktarılıyor: iki nokta.
Adım 2: “berraktır( )” bildirme cümlesi: nokta, tırnağın içinde kalır.
Adım 3: “sordu( ) “Satürn’ün…” Elif’in sözü aktarılıyor: iki nokta. “görebilecek miyiz( )” soru: soru işareti.
Adım 4: “gülümsedi( ) “Bekleyip…” yine aktarma: iki nokta.
Sağlama: Sırayla (:) (.) (:) (?) (:).
Cevap C.`
},
{
  id: "tur-nk-072",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "Bu, yıllardır aradığım eski bir harita.",
    "Annem pazardan elma, armut şeftali aldı.",
    "Sabah börek, çay; akşam mantı, ayran içtik.",
    "Evet, yarın yarışmaya mutlaka katılacağım."
  ],
  dogru: 1,
  hatalar: [
    "Doğru kullanımı yanlış sanma: “Bu” cümlenin öznesi olan bir zamirdir; ardından virgül konması “bu” sözünün sıfat sanılmasını önler.",
    null,
    "Doğru kullanımı yanlış sanma: “börek, çay” ve “mantı, ayran” virgüllü takımlardır; takımları noktalı virgül ayırır.",
    "Doğru kullanımı yanlış sanma: “Evet” kabul bildiren bir cevap sözüdür; ardından virgül konur."
  ],
  aciklama: `Kural: Eş görevli sözcükler arasına virgül konur; sıralamadaki hiçbir ara atlanmaz.
Adım 1: B’de “elma, armut şeftali” sıralamasında “armut” ile “şeftali” arasında virgül eksik. Yanlış. Doğrusu “elma, armut ve şeftali” ya da “elma, armut, şeftali”.
Adım 2: A’daki “Bu,” zamir virgülü, C’deki noktalı virgül takımları ayırması, D’deki “Evet,” virgülü kurallara uygun.
Sık yapılan hata: Az kullanılan ama doğru olan “Bu,” ve noktalı virgül kullanımlarını yanlış sanıp sıralamadaki eksik virgülü kaçırmak.
Cevap B.`
},
{
  id: "tur-nk-073",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `**Aşağıdaki cümlelerin hangisinde eser adına gelen ek ve işaretler __doğru__ kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Kardeşim “Karlar Ülkesi”ni iki günde bitirdi.",
    "Kardeşim “Karlar Ülkesi”’ni iki günde bitirdi.",
    "Kardeşim “Karlar Ülkesi’ni” iki günde bitirdi.",
    "Kardeşim “Karlar Ülkesini” iki günde bitirdi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fazladan kesme koyma: tırnak içindeki sözün bittiği yeri tırnak zaten gösterir; tırnaktan sonra gelen ek kesmeyle ayrılmaz.",
    "Eki tırnağın içine alma: ek eser adının parçası değildir; tırnak kapandıktan sonra yazılır.",
    "Eki tırnağın içine alma: “-ni” eki eser adına gelen bir durum ekidir; tırnak kapandıktan sonra yazılır."
  ],
  aciklama: `Kural: Tırnak içindeki söze gelen ek tırnaktan sonra yazılır ve kesmeyle ayrılmaz: “Karlar Ülkesi”ni.
Adım 1: Eser adı “Karlar Ülkesi” tırnak içinde; ad bu işaretle zaten sınırlanmış.
Adım 2: Ek eser adının parçası değil; tırnak kapandıktan sonra bitişik yazılır.
Adım 3: Kesme işaretinin görevi (adın bittiği yeri göstermek) tırnakla zaten yapılıyor; yanına bir de kesme koymak fazladır.
Cevap A.`
},
{
  id: "tur-nk-074",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Hafta sonu için iki planım var( ) cumartesi kütüphanede kitap, dergi okuyacağım( ) pazar günü ise basketbol, voleybol oynayacağım( ) Bu( ) ailemin de onayladığı bir plan( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(:) (,) (.) (:) (.)",
    "(;) (;) (.) (:) (.)",
    "(:) (;) (.) (,) (.)",
    "(:) (;) (.) (:) (.)"
  ],
  dogru: 2,
  hatalar: [
    "İkinci yeri virgül, dördüncü yeri iki nokta yapma: iki günün takımları kendi içlerinde zaten virgülle sıralanmış, aralarına da virgül konursa takım sınırı kaybolur; “Bu” özne olan bir zamirdir, ardından açıklama gelmediği için iki nokta değil virgül konur.",
    "Birinci yeri noktalı virgül, dördüncü yeri iki nokta yapma: “iki planım var” sözü ardından gelen açıklamayı haber veriyor, açıklama öncesine iki nokta gelir; “Bu” zamirinden sonra da virgül konur.",
    null,
    "Dördüncü yeri iki nokta yapma: “Bu” özne olan bir zamirdir; ardından açıklama gelmiyor, sıfat sanılmaması için virgül konur."
  ],
  aciklama: `Kural: Açıklama gelecek sözden sonra iki nokta, içi virgüllü takımlar arasında noktalı virgül, özne olan “bu” zamirinden sonra virgül, cümle sonunda nokta konur.
Adım 1: “iki planım var( )” ardından planlar açıklanıyor: iki nokta.
Adım 2: “kitap, dergi okuyacağım( ) pazar…” iki takım var ve ilkinin içi virgüllü: noktalı virgül.
Adım 3: “oynayacağım( ) Bu” yeni cümle: nokta.
Adım 4: “Bu( ) ailemin…” özne olan zamir: virgül. Son cümle: nokta.
Sağlama: Sırayla (:) (;) (.) (,) (.).
Cevap C.`
},
{
  id: "tur-nk-075",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Bilim Şenliği 12( )14 Mayıs tarihlerinde yapılacak( ) Şenliğin açılışını belediye başkanı yapacak( ) Etkinlikte üç bölüm yer alacak( ) deney atölyesi, gökyüzü gözlemi ve robot gösterisi( ) Sen de bu şenliğe katılacak mısın( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "(/) (,) (.) (:) (.) (?)",
    "(/) (.) (.) (;) (.) (.)",
    "(/) (.) (.) (:) (.) (?)",
    "(-) (.) (.) (:) (.) (?)"
  ],
  dogru: 3,
  hatalar: [
    "Birinci yeri eğik çizgi, ikinci yeri virgül yapma: “12’sinden 14’üne kadar” anlamını kısa çizgi verir; “yapılacak” sözünden sonra büyük harfle yeni cümle başlıyor, nokta konur.",
    "Birinci yeri eğik çizgi, dördüncü yeri noktalı virgül, son yeri nokta yapma: “yer alacak” sözü ardından gelen sıralamayı haber veriyor, iki nokta konur; son cümle de yanıt bekleyen bir soru olduğundan soru işaretiyle biter.",
    "Birinci yeri eğik çizgi yapma: “12’sinden 14’üne kadar” anlamını kısa çizgi verir; eğik çizgi tarihte gün, ay ve yılı ayırır.",
    null
  ],
  aciklama: `Kural: Tarih aralığını kısa çizgi gösterir; cümle sonlarında nokta, sıralama öncesinde iki nokta, yanıt bekleyen cümlenin sonunda soru işareti konur.
Adım 1: “12( )14 Mayıs” iki gün arasındaki aralık: kısa çizgi.
Adım 2: “yapılacak( ) Şenliğin” ve “yapacak( ) Etkinlikte” yeni cümle başlıyor: iki yerde de nokta.
Adım 3: “yer alacak( ) deney atölyesi…” sıralama geliyor: iki nokta.
Adım 4: “robot gösterisi( ) Sen” yeni cümle: nokta. “katılacak mısın( )” soru: soru işareti.
Sağlama: Sırayla (-) (.) (.) (:) (.) (?).
Cevap D.`
}
);
