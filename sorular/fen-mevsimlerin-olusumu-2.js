// Fen Bilimleri — Mevsimlerin Oluşumu: Kademe 3 (LGS Ayarı) ve Havuz
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["mevsimlerin-olusumu"] = window.LGS_BANK["mevsimlerin-olusumu"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-mv-301",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun teknoloji atölyesinde öğrenciler, özdeş iki güneş pilini aynı ışık kaynağından çıkan eşit genişlikte birer ışık demetiyle aydınlatmıştır. Demetler pillere farklı açılarla ulaştığı için pillerin üzerinde aydınlanan bölgelerin genişlikleri aşağıdaki gibi ölçülmüştür.
I. K düzeneğinde aydınlanan bölgenin her santimetrekaresine düşen ışık enerjisi daha fazladır.
II. İki pile ulaşan toplam ışık enerjisi birbirine eşittir.
III. Işığın yüzeye ulaşma açısı, birim yüzeye düşen enerji miktarını değiştirmez.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 280" role="img" aria-label="Özdeş iki güneş pilinde aydınlanan bölge genişlikleri: K düzeneğinde 4 cm, L düzeneğinde 8 cm"><g stroke="var(--vurgu)" stroke-width="2" fill="none"><line x1="80" y1="35" x2="80" y2="176"/><line x1="140" y1="35" x2="140" y2="176"/><line x1="200" y1="105" x2="330" y2="180"/><line x1="320" y1="105" x2="450" y2="180"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="55" y="180" width="110" height="12"/><rect x="300" y="180" width="190" height="12"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="80" y1="212" x2="140" y2="212"/><line x1="80" y1="206" x2="80" y2="218"/><line x1="140" y1="206" x2="140" y2="218"/><line x1="330" y1="212" x2="450" y2="212"/><line x1="330" y1="206" x2="330" y2="218"/><line x1="450" y1="206" x2="450" y2="218"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="110" y="26">Işık demeti</text><text x="250" y="88">Işık demeti</text><text x="110" y="238">4 cm</text><text x="390" y="238">8 cm</text><text x="110" y="266" font-weight="bold">Düzenek K</text><text x="390" y="266" font-weight="bold">Düzenek L</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Toplam enerjiyi gözden kaçırma: demetlerin genişliği eşit olduğu için iki pile ulaşan toplam enerji de eşittir; II doğrudur.",
    null,
    "Birim yüzey ile toplamı karıştırma: toplam enerji eşit olduğu için birim yüzeye düşenin de eşit olduğunu sanma; oysa L'de aynı enerji iki kat geniş bir bölgeye yayılmıştır.",
    "I ile III'ün birbiriyle çeliştiğini fark etmeme: I, birim yüzeye düşen enerjinin açıya göre değiştiğini söyler; III ise değişmediğini. İkisi aynı anda doğru olamaz."
  ],
  aciklama: `Birim yüzeye düşen ışık enerjisi, belirli bir alana (örneğin bir santimetrekareye) düşen enerji miktarıdır. Aynı enerji geniş bir alana yayılırsa birim yüzeye düşen miktar azalır.
Adım 1 (II'yi incele): İki demet de aynı kaynaktan çıkıyor ve genişlikleri eşit. Bu yüzden pillere ulaşan toplam enerji eşittir. II doğrudur.
Adım 2 (I'i incele): Aynı enerji K'de 4 cm'lik, L'de 8 cm'lik bir bölgeye yayılmıştır. Bölge iki kat genişlediğine göre L'de bir santimetrekareye düşen enerji yarıya iner. Öyleyse K'de birim yüzeye düşen enerji daha fazladır. I doğrudur.
Adım 3 (III'ü incele): Aydınlanan bölgenin genişliğini belirleyen şey ışığın yüzeye ulaşma açısıdır. Açı değişince birim yüzeye düşen enerji de değişir. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sağlama: Dünya'da da durum böyledir. Güneş'in yaydığı enerji yıl boyunca aynı kalırken ışınlar yere eğik düştüğünde aynı enerji daha geniş bir alana yayılır, birim yüzey daha az enerji alır ve hava soğur.
Cevap B.`
},
{
  id: "fen-mv-302",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim merkezinin planetaryum gösterisinde Dünya'nın Güneş çevresindeki dolanması canlandırılmaktadır. Gösteride Dünya'nın dönme ekseni, yörüngenin her noktasında uzayda aynı yöne bakacak biçimde eğik tutulmuştur. Yörünge üzerindeki dört konum K, L, M ve N harfleriyle gösterilmiş, kuzey kutupları küçük birer noktayla işaretlenmiştir. Gösteriyi izleyen Bora, kuzey kutbunun Güneş'e doğru yöneldiği konumu defterine not etmiştir.
**Buna göre Bora'nın not ettiği konum ve o sırada ülkemizde yaşanan mevsim aşağıdakilerden hangisinde birlikte verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 560 320" role="img" aria-label="Dünya'nın yörüngedeki dört konumu; dönme ekseni her konumda aynı yöne eğik"><ellipse cx="280" cy="160" rx="210" ry="110" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/><circle cx="280" cy="160" r="30" fill="var(--vurgu)"/><g stroke="currentColor" stroke-width="2"><circle cx="70" cy="160" r="22" fill="var(--dolgu)"/><circle cx="280" cy="50" r="22" fill="var(--dolgu)"/><circle cx="490" cy="160" r="22" fill="var(--dolgu)"/><circle cx="280" cy="270" r="22" fill="var(--dolgu)"/><line x1="82" y1="132" x2="58" y2="188"/><line x1="292" y1="22" x2="268" y2="78"/><line x1="502" y1="132" x2="478" y2="188"/><line x1="292" y1="242" x2="268" y2="298"/></g><g fill="var(--vurgu2)"><circle cx="82" cy="132" r="5"/><circle cx="292" cy="22" r="5"/><circle cx="502" cy="132" r="5"/><circle cx="292" cy="242" r="5"/></g><g fill="currentColor" font-size="17" font-weight="bold"><text x="70" y="228" text-anchor="middle">K</text><text x="232" y="56" text-anchor="middle">L</text><text x="490" y="228" text-anchor="middle">M</text><text x="232" y="276" text-anchor="middle">N</text></g><g fill="currentColor" font-size="16"><text x="318" y="166">Güneş</text><text x="44" y="308">Kuzey kutbu</text></g><circle cx="30" cy="302" r="5" fill="var(--vurgu2)"/></svg>`,
  secenekler: ["K – Yaz", "K – Kış", "M – Yaz", "M – Kış"],
  dogru: 0,
  hatalar: [
    null,
    "Doğru konumu bulup mevsimi ters eşleştirme: kuzey kutbu Güneş'e yönelmişken ışınlar Kuzey Yarım Küre'ye daha dik düşer, birim yüzeye düşen enerji artar ve yaz yaşanır.",
    "Hem görseldeki yönü ters okuma hem de eksen Güneş'ten uzağa bakarken yaz yaşandığını sanma.",
    "Görselde kuzey kutbunun baktığı yönü ters okuma: M konumunda kuzey kutbu Güneş'ten uzağa bakar, bu yüzden M aranan konum değildir."
  ],
  aciklama: `Dünya'nın dönme ekseni dolanma düzlemine dik değildir; eğiktir ve yörüngede ilerlerken uzayda hep aynı yöne bakar. Bu yüzden yıl içinde bazen kuzey kutbu, bazen güney kutbu Güneş'e doğru yönelir.
Adım 1: Görselde eksenlerin üst uçları (kuzey kutupları) sağa doğru eğiktir. Güneş yörüngenin ortasındadır.
Adım 2: K konumu Güneş'in solundadır; oradaki eksenin üst ucu sağa, yani Güneş'e doğru bakar. Aranan konum K'dir.
Adım 3: Kuzey kutbu Güneş'e yönelince Güneş ışınları Kuzey Yarım Küre'ye daha dik düşer. Aynı enerji daha küçük bir alana yayılır, birim yüzeye düşen enerji artar.
Adım 4: Ülkemiz Kuzey Yarım Küre'dedir; bu konumda ülkemizde yaz yaşanır.
Sağlama: Aynı anda M konumunda kuzey kutbu Güneş'ten uzağa bakar; orası Kuzey Yarım Küre için kış konumudur.
Sık yapılan hata: Eksenin baktığı yönü Güneş'e göre ters okumak. Önce Güneş'in hangi tarafta olduğuna, sonra eksenin üst ucunun ona doğru mu yoksa ondan uzağa mı baktığına bak.
Cevap A.`
},
{
  id: "fen-mv-303",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir havayolu şirketinin uçuş dergisinde, aynı gün iki ayrı şehre yapılan seferler tanıtılmıştır. Yazıda, 21 Aralık günü İstanbul'da kar yağarken Arjantin'in başkenti Buenos Aires'te yolcuların denize girdiği anlatılmaktadır. Buenos Aires Güney Yarım Küre'de yer almaktadır.
I. İki şehirde aynı anda farklı mevsimlerin yaşanması, Dünya'nın dönme ekseninin eğik olmasıyla açıklanır.
II. O gün öğle vakti Güneş ışınları Buenos Aires'e İstanbul'dakine göre daha dik düşmektedir.
III. Dünya'nın Güneş'e olan uzaklığı, iki şehir arasındaki bu mevsim farkının nedenidir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: aralıkta Güney Yarım Küre'de yaz yaşandığına göre Güneş ışınları Buenos Aires'e daha dik düşer.",
    "Eksen eğikliğinin rolünü görmeme: eksen eğik olmasaydı iki yarım kürede aynı anda farklı mevsimler yaşanmazdı.",
    null,
    "Uzaklık yanılgısı: Dünya'nın Güneş'e uzaklığı aynı anda iki şehir için de aynıdır; aynı uzaklık farklı mevsimleri açıklayamaz."
  ],
  aciklama: `Mevsimler, Güneş ışınlarının yere düşme açısının yıl içinde değişmesiyle oluşur. Açıyı değiştiren de Dünya'nın dönme ekseninin dolanma düzlemine dik olmayışıdır.
Adım 1 (I): Eksen eğik olduğu için yılın bir bölümünde kuzey kutbu, diğer bölümünde güney kutbu Güneş'e yönelir. Bu yüzden iki yarım kürede aynı anda ters mevsimler yaşanır. I doğrudur.
Adım 2 (II): Aralıkta güney kutbu Güneş'e yöneliktir. Öyleyse ışınlar Güney Yarım Küre'deki Buenos Aires'e daha dik, Kuzey Yarım Küre'deki İstanbul'a daha eğik düşer. Dik düşen ışınlarda birim yüzeye düşen enerji artar; Buenos Aires sıcaktır. II doğrudur.
Adım 3 (III): Dünya tek bir gök cismidir; iki şehir aynı anda Güneş'ten aynı uzaklıktadır. Uzaklık ikisi için de aynı olduğuna göre aralarındaki mevsim farkını açıklayamaz. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: "Yaz, Dünya Güneş'e yaklaştığı için olur." demek. Bu doğru olsaydı iki yarım kürede aynı anda aynı mevsim yaşanırdı.
Cevap C.`
},
{
  id: "fen-mv-304",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir doğa gözlem kulübü, aynı kamp alanına ocak ve temmuz aylarında birer kez gitmiştir. Kulüp üyeleri her iki kampta da öğle vakti 1,5 metre boyundaki aynı direğin gölgesini ölçmüş ve gölgesiz bir noktada toprağın yüzey sıcaklığını kaydetmiştir. Elde ettikleri veriler aşağıdadır.
I. Temmuz kampında Güneş ışınları kamp alanına ocak kampındakine göre daha dik düşmüştür.
II. Temmuz kampında toprağın birim yüzeyine düşen ışık enerjisi daha fazladır.
III. İki kamp arasındaki bu farkın nedeni, Dünya'nın dönme ekseninin eğik olmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kamp</th><th>1,5 m boyundaki direğin gölge uzunluğu</th><th>Toprağın yüzey sıcaklığı</th></tr><tr><td>Ocak kampı</td><td>3,0 m</td><td>4 °C</td></tr><tr><td>Temmuz kampı</td><td>0,6 m</td><td>38 °C</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Işın açısı ile birim yüzeye düşen enerji arasındaki bağı kuramama: ışınlar dikleştikçe aynı enerji daha küçük bir alana düşer, birim yüzeye düşen enerji artar.",
    "Farkın nedenini belirleyememe: ışınların düşme açısının yıl içinde değişmesi, Dünya'nın dönme ekseninin eğik olmasından kaynaklanır.",
    "Gölge verisini yorumlayamama: gölge kısaldıkça ışınlar dikleşir; temmuzda gölge ocaktakinin beşte biri kadardır, demek ki ışınlar çok daha diktir.",
    null
  ],
  aciklama: `Bir direğin gölgesi, Güneş ışınları dikleştikçe kısalır, eğikleştikçe uzar. Gölge uzunluğu bu yüzden ışınların düşme açısını gösteren bir veridir.
Adım 1 (I): Aynı direk ocakta 3,0 m, temmuzda 0,6 m gölge vermiştir. Gölge kısaldığına göre temmuzda ışınlar daha dik düşmüştür. I doğrudur.
Adım 2 (II): Işınlar dik düştüğünde aynı miktar enerji daha küçük bir alana yayılır; birim yüzeye düşen enerji artar. Tablodaki 38 °C'lik yüzey sıcaklığı da bunu destekler. II doğrudur.
Adım 3 (III): Işınların düşme açısının yıl içinde değişmesinin nedeni, Dünya'nın dönme ekseninin dolanma düzlemine dik olmayışıdır. Eksen dik olsaydı açı yıl boyunca değişmez, iki kampta da aynı gölge ölçülürdü. III doğrudur.
Adım 4: Üç yargı da doğrudur.
Sık yapılan hata: Sıcaklık farkını Dünya'nın Güneş'e uzaklığıyla açıklamak. Aynı kamp alanında ölçüm yapıldığı hâlde gölge boyunun değişmesi, değişenin uzaklık değil açı olduğunu gösterir.
Cevap D.`
},
{
  id: "fen-mv-305",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir market zinciri, yıl boyunca taze meyve bulundurabilmek için hem Türkiye'den hem de Güney Yarım Küre'deki Şili'den alım yapmaktadır. Zincirin tedarik biriminin hazırladığı hasat takvimi aşağıda verilmiştir. Tabloya bakan Zeynep, aynı ürünün iki ülkede yaklaşık altı ay arayla olgunlaştığını fark etmiştir.
**Buna göre tabloda görülen bu durumun temel nedeni aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Türkiye'de hasat</th><th>Şili'de hasat</th></tr><tr><td>Kiraz</td><td>Haziran – Temmuz</td><td>Aralık – Ocak</td></tr><tr><td>Üzüm</td><td>Ağustos – Eylül</td><td>Şubat – Mart</td></tr><tr><td>Elma</td><td>Eylül – Ekim</td><td>Mart – Nisan</td></tr></table>`,
  secenekler: [
    "Dünya'nın dönme ekseninin dolanma düzlemine dik olmaması",
    "Dünya'nın yörüngedeki dolanma hızının yıl boyunca değişmesi",
    "Dünya'nın dönme yönünün yarım kürelere göre farklı olması",
    "Dünya'nın Güneş'e olan uzaklığının yıl boyunca değişmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dolanma hızını mevsimlerin nedeni sanma: hız değişse bile iki yarım küre aynı anda aynı miktarda ışık alırdı, ters mevsimler oluşmazdı.",
    "Dünya'nın dönme yönünün yarım kürelere göre değiştiğini sanma: Dünya tek parçadır ve tek bir yönde döner.",
    "Uzaklık yanılgısı: uzaklık aynı anda iki yarım küre için de aynıdır; bu yüzden ters mevsimleri açıklayamaz."
  ],
  aciklama: `Aynı ürünün iki ülkede altı ay arayla olgunlaşması, bu ülkelerde aynı anda farklı mevsimlerin yaşandığını gösterir. Türkiye Kuzey, Şili Güney Yarım Küre'dedir.
Adım 1: Mevsimi belirleyen şey, birim yüzeye düşen ışık enerjisi miktarıdır. Bu miktar da Güneş ışınlarının yere düşme açısına bağlıdır.
Adım 2: Dünya'nın dönme ekseni, Güneş çevresindeki dolanma düzlemine dik değildir; eğiktir ve yörüngede hep aynı yöne bakar. Bu yüzden yılın bir bölümünde kuzey kutbu, diğer bölümünde güney kutbu Güneş'e yönelir.
Adım 3: Kuzey kutbu Güneş'e yönelikken Kuzey Yarım Küre ışınları dik alır ve yaz yaşar; aynı anda Güney Yarım Küre ışınları eğik alır ve kış yaşar. Altı ay sonra durum tersine döner.
Adım 4: Öyleyse hasat takvimlerinin altı ay kaymasının temel nedeni eksenin eğik olmasıdır.
Sık yapılan hata: Mevsimleri Dünya'nın Güneş'e uzaklığına bağlamak. Uzaklık her iki ülke için aynı anda aynıdır; aynı neden farklı sonuçlar doğuramaz.
Cevap A.`
},
{
  id: "fen-mv-306",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor bilimleri merkezi, açık hava antrenmanlarını planlamak için sporcuların kullandığı sahada yılın dört gününde ölçüm yapmıştır. Her ölçümde öğle vakti Güneş ışınlarının yatay zeminle yaptığı açı ile sahanın bir metrekarelik bölümüne bir saatte düşen ışık enerjisi kaydedilmiştir.
I. Işınların yatay zeminle yaptığı açı büyüdükçe birim yüzeye düşen enerji artmaktadır.
II. 21 Aralık ölçümünde sahaya hiç ışık enerjisi ulaşmamıştır.
III. 21 Mart ile 23 Eylül ölçümlerinde ışınlar sahaya aynı açıyla düşmüştür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm günü</th><th>Işınların yatay zeminle yaptığı açı</th><th>Bir metrekareye bir saatte düşen enerji</th></tr><tr><td>21 Mart</td><td>50°</td><td>3,2 birim</td></tr><tr><td>21 Haziran</td><td>73°</td><td>4,0 birim</td></tr><tr><td>23 Eylül</td><td>50°</td><td>3,2 birim</td></tr><tr><td>21 Aralık</td><td>26°</td><td>1,8 birim</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: tabloda iki tarihte de açı 50°, enerji 3,2 birimdir; bu eşitlik doğrudan okunabilir.",
    "Açı ile enerji arasındaki ilişkiyi görmeme: tabloda açı büyüdükçe enerji de artmaktadır, ayrıca aralıkta enerji sıfırlanmamıştır.",
    null,
    "Azalmayı yoklukla karıştırma: 21 Aralık'ta birim yüzeye 1,8 birim enerji düşmüştür; miktar azalmıştır ama sıfır değildir."
  ],
  aciklama: `Güneş ışınları yere ne kadar dik düşerse aynı enerji o kadar küçük bir alana yayılır; birim yüzeye düşen enerji artar.
Adım 1 (I): Tabloda açılar 26°, 50°, 73° olarak büyürken enerji 1,8; 3,2; 4,0 birim olarak artmıştır. I doğrudur.
Adım 2 (II): 21 Aralık satırında enerji 1,8 birimdir. Bu, yılın en küçük değeridir ama sıfır değildir. Kışın da Güneş ışığı gelir, yalnızca birim yüzeye düşen miktarı azalır. II yanlıştır.
Adım 3 (III): 21 Mart ve 23 Eylül satırlarında açı da enerji de aynıdır (50° ve 3,2 birim). Öyleyse ışınlar bu iki günde sahaya aynı açıyla düşmüştür. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sık yapılan hata: "Kışın Güneş ısıtmaz." demek. Kışın Güneş yine ışık gönderir; değişen, ışınların eğik gelmesi yüzünden birim yüzeye düşen enerjinin azalmasıdır.
Cevap C.`
},
{
  id: "fen-mv-307",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzenin gök bilim salonunda, Dünya'nın Güneş çevresindeki yolculuğunu gösteren bir animasyon ekranı bulunmaktadır. Ziyaretçiler düğmeye bastıkça Dünya yörüngede bir adım ilerler; ekranda Dünya'nın dönme ekseni her adımda çizgiyle gösterilir. Rehber ziyaretçilere şunu söyler: "Dünya yörüngede ilerlerken dönme ekseninin uzayda baktığı yön değişmez; değişen, ekseni Güneş'e göre nasıl gördüğümüzdür."
**Buna göre bu animasyonla ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Animasyon ekranında Dünya'nın iki yörünge konumu; eksenler birbirine paralel"><rect x="10" y="10" width="500" height="240" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="260" cy="130" rx="160" ry="70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/><circle cx="260" cy="130" r="26" fill="var(--vurgu)"/><g stroke="currentColor" stroke-width="2"><circle cx="100" cy="130" r="24" fill="var(--dolgu)"/><circle cx="420" cy="130" r="24" fill="var(--dolgu)"/><line x1="111" y1="100" x2="89" y2="160"/><line x1="431" y1="100" x2="409" y2="160"/></g><g fill="var(--vurgu2)"><circle cx="111" cy="100" r="5"/><circle cx="431" cy="100" r="5"/><circle cx="30" cy="228" r="5"/></g><g fill="currentColor" font-size="16"><text x="292" y="136">Güneş</text><text x="42" y="233">Kuzey kutbu</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="100" y="200">K konumu</text><text x="420" y="200">L konumu</text></g></svg>`,
  secenekler: [
    "Ekseni Güneş'e yönelen yarım kürede Güneş ışınları daha dik düşer.",
    "Dünya yörüngede ilerlerken eksenin eğiklik açısı değişmez.",
    "Yarım kürelerin aldığı ışık enerjisi miktarı yıl boyunca değişir.",
    "Dünya yörüngenin karşı tarafına geçtiğinde eksenin baktığı yön tersine döner."
  ],
  dogru: 3,
  hatalar: [
    "Eksenin yöneldiği yön ile ışınların dikliği arasındaki bağı kuramama: ekseni Güneş'e yönelen yarım kürede ışınlar daha dik düşer, bu yargı söylenebilir.",
    "Eksenin eğiklik açısı ile baktığı yönü karıştırma: rehberin sözüne göre yön değişmez, açı da sabittir; bu yargı söylenebilir.",
    "Yıl içindeki enerji değişimini yok sayma: eksen eğik olduğu için yarım kürelerin aldığı enerji yıl boyunca değişir; bu yargı söylenebilir.",
    null
  ],
  aciklama: `Dünya'nın dönme ekseni yörünge boyunca uzayda hep aynı yöne bakar; buna eksenin paralel kalması denir. Görselde K ve L konumlarındaki eksenlerin birbirine paralel çizilmiş olması da bunu gösterir.
Adım 1: Görselde K konumunda kuzey kutbu Güneş'e doğru, L konumunda Güneş'ten uzağa bakar. Ama iki çizgi de aynı yöne eğiktir; yön değişmemiştir, yalnızca Dünya yörüngede yer değiştirmiştir.
Adım 2: Öyleyse "eksenin baktığı yön tersine döner" ifadesi hem rehberin sözüne hem de görsele aykırıdır. Bu yargı söylenemez.
Adım 3: Diğer yargıları denetle. Ekseni Güneş'e yönelen yarım küre ışınları daha dik alır; eğiklik açısı sabittir; yarım kürelerin aldığı enerji yıl boyunca değişir. Üçü de söylenebilir.
Sağlama: Eksenin yönü gerçekten tersine dönseydi hiçbir yarım küre Güneş'e yönelmiş olmazdı ve mevsimler oluşmazdı.
Cevap D.`
},
{
  id: "fen-mv-308",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fabrikanın çatısına, güneş panellerinin eğimini yıl boyunca kendiliğinden değiştiren bir sistem kurulmuştur. Sistem, öğle vakti Güneş ışınlarının panel yüzeyine dik düşmesini sağlayacak biçimde paneli eğer. Teknisyen Aylin, bir yıllık kayıtları incelediğinde panelin yatay zeminle yaptığı açının haziranda en küçük, aralıkta en büyük değere ulaştığını görmüştür. Fabrika Kuzey Yarım Küre'dedir.
I. Haziranda öğle vakti Güneş ışınları yatay zemine, aralık ayındakine göre daha dik düşmektedir.
II. Panel eğimindeki bu yıllık değişimin nedeni Dünya'nın dönme ekseninin eğik olmasıdır.
III. Sistem kurulmasaydı, yataya sabitlenmiş bir panelin birim yüzeyine haziranda düşen enerji aralık ayındakinden az olurdu.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 265" role="img" aria-label="Panelin yatayla yaptığı açı haziranda 17 derece, aralıkta 64 derece"><g stroke="currentColor" stroke-width="2"><line x1="30" y1="190" x2="240" y2="190"/><line x1="290" y1="190" x2="495" y2="190"/></g><g stroke="var(--vurgu)" stroke-width="7" stroke-linecap="round"><line x1="60" y1="190" x2="194" y2="149"/><line x1="320" y1="190" x2="368" y2="91"/></g><g stroke="var(--vurgu2)" stroke-width="2"><line x1="110" y1="113" x2="127" y2="170"/><line x1="129" y1="158" x2="127" y2="170"/><line x1="119" y1="161" x2="127" y2="170"/><line x1="290" y1="114" x2="344" y2="140"/><line x1="337" y1="131" x2="344" y2="140"/><line x1="332" y1="140" x2="344" y2="140"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="88" y="183">17°</text><text x="345" y="183">64°</text><text x="130" y="222" font-weight="bold">Haziran</text><text x="392" y="222" font-weight="bold">Aralık</text><text x="260" y="248">Oklar Güneş ışınlarının geliş yönünü gösterir.</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: panel eğiminin yıl içinde değişmesi, ışınların düşme açısının değişmesinden; o da eksenin eğik olmasından kaynaklanır.",
    "I'i gözden kaçırma: panel yataya yakınken (17°) ışınlar yatay zemine dik yaklaşır, panel dikleştikçe (64°) ışınlar zemine eğik gelir.",
    null,
    "III'ü doğru sayma: haziranda ışınlar daha dik geldiği için yatay bir panelin birim yüzeyine düşen enerji aralık ayındakinden az değil, fazla olurdu."
  ],
  aciklama: `Panel, ışınları dik alacak biçimde eğildiğine göre panelin yatayla yaptığı açı, ışınların yatay zemine düşme açısını dolaylı olarak gösterir. Işınlar zemine ne kadar dik gelirse panelin yatırılması o kadar az gerekir.
Adım 1 (I): Haziranda panel neredeyse yatıktır (17°); bu, ışınların yatay zemine çok dik geldiği anlamına gelir. Aralıkta panel dikleşmiştir (64°); ışınlar zemine eğik gelmektedir. I doğrudur.
Adım 2 (II): Öğle vakti ışınların düşme açısının yıl içinde değişmesinin nedeni, Dünya'nın dönme ekseninin dolanma düzlemine dik olmayışıdır. Eksen dik olsaydı açı yıl boyunca aynı kalır, panelin eğimini değiştirmeye gerek kalmazdı. II doğrudur.
Adım 3 (III): Yataya sabitlenmiş bir panelde birim yüzeye düşen enerji, ışınlar dikleştikçe artar. Haziranda ışınlar daha dik geldiğine göre o ayda düşen enerji aralık ayındakinden az değil, fazla olurdu. III yanlıştır.
Adım 4: Kesinlikle doğru olanlar I ve II'dir.
Sık yapılan hata: Panelin açısı ile ışınların açısını aynı sanmak. Panel dikleştikçe ışınlar zemine daha eğik gelir; iki açı ters yönde değişir.
Cevap C.`
},
{
  id: "fen-mv-309",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Cem, mevsimlerin nedenini araştırmak için bir model kurmuştur. Modelde sabit duran bir lamba Güneş'i, üzerine ışık sensörü yapıştırılmış bir küre Dünya'yı temsil etmektedir. Sensör, yüzeyinin birim alanına düşen ışık enerjisini ölçmektedir. Cem iki deneme yapmış ve sonuçları kaydetmiştir.
I. İki denemede de sensörün birim yüzeyine düşen ışık enerjisi değişmiştir.
II. Bu deneyde mevsimlerin oluşumunu açıklayan deneme 2. denemedir.
III. 1. deneme, mevsimlerin Dünya'nın Güneş'e yaklaşmasıyla oluştuğunu kanıtlamaktadır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Deneme</th><th>Yapılan değişiklik</th><th>Sensörün ölçtüğü değer</th></tr><tr><td>1. deneme</td><td>Sensör yüzeyi ışınlara dik tutuldu, küre lambaya yaklaştırıldı (40 cm'den 30 cm'ye).</td><td>5 birimden 9 birime çıktı</td></tr><tr><td>2. deneme</td><td>Küre–lamba uzaklığı 40 cm'de sabit tutuldu, küre döndürülerek ışınlar sensöre eğik düşürüldü.</td><td>5 birimden 2 birime indi</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: Dünya'da yıl içinde değişen şey ışınların düşme açısıdır; modelde bunu yapan deneme 2. denemedir.",
    "I'i eleyip III'ü kabul etme: iki denemede de ölçülen değer değişmiştir; ayrıca uzaklık değişimi mevsimleri açıklamaz.",
    null,
    "Uzaklık yanılgısı: 1. denemede sensörün değeri artmıştır ama bu yalnızca ışık kaynağına yaklaşmanın etkisini gösterir; Dünya'da iki yarım küre aynı anda ters mevsim yaşadığı için uzaklık mevsimlerin nedeni olamaz."
  ],
  aciklama: `Bir modelde bir etkiyi sınamak için yalnızca o etkiyi değiştirip sonucu gözlemek gerekir. Cem'in iki denemesi farklı iki etkiyi ayrı ayrı sınamaktadır.
Adım 1 (I): 1. denemede ölçülen değer 5 birimden 9 birime çıkmış, 2. denemede 5 birimden 2 birime inmiştir. İki denemede de birim yüzeye düşen enerji değişmiştir. I doğrudur.
Adım 2 (II): Dünya'da mevsimler, dönme ekseninin eğikliği yüzünden ışınların yere düşme açısının yıl içinde değişmesiyle oluşur. Modelde uzaklığı sabit tutup yalnızca açıyı değiştiren deneme 2. denemedir. II doğrudur.
Adım 3 (III): 1. deneme, kaynağa yaklaşınca birim yüzeye düşen enerjinin artacağını gösterir; bu doğru bir gözlemdir ama mevsimlerin nedenini kanıtlamaz. Uzaklık mevsimleri belirleseydi Kuzey ve Güney Yarım Küre'de aynı anda aynı mevsim yaşanırdı. Oysa biri yaz yaşarken diğeri kış yaşar. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Bir denemede ölçülen değerin değişmesini, o etkinin mevsimlerin nedeni olduğuna kanıt saymak. Bir etkinin ölçümü değiştirmesi, doğadaki olayın nedeninin de o olduğu anlamına gelmez.
Cevap C.`
},
{
  id: "fen-mv-310",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gök bilim dergisinde, Güneş'e benzeyen bir yıldızın çevresinde dolanan üç gezegen tanıtılmıştır. Üç gezegenin de dolanma düzlemi aynıdır, üçü de kendi ekseni çevresinde dönmektedir ve yörüngeleri çembere çok yakındır. Gezegenlerin dönme ekseninin dolanma düzlemiyle yaptığı açılar aşağıdaki tabloda verilmiştir.
**Buna göre bu gezegenlerle ilgili aşağıdaki yargılardan hangisi __yanlıştır__?**`,
  gorsel: `<table class="tablo"><tr><th>Gezegen</th><th>Dönme ekseninin dolanma düzlemiyle yaptığı açı</th></tr><tr><td>P</td><td>90°</td></tr><tr><td>R</td><td>66°</td></tr><tr><td>S</td><td>45°</td></tr></table>`,
  secenekler: [
    "P gezegeninde belirgin bir mevsim değişimi görülmez.",
    "R gezegeninin ekseni, dolanma düzlemine dik doğrultuyla 24° açı yapar.",
    "S gezegeninde mevsim farkları R gezegenindekinden daha belirgindir.",
    "S gezegeninde eksenin eğik olması, gezegenin yıldıza uzaklığını yıl içinde değiştirir."
  ],
  dogru: 3,
  hatalar: [
    "Ekseni düzleme dik olan gezegende de mevsim yaşanacağını sanma: dik eksende yarım küreler yıl boyunca ışığı aynı açıyla alır, mevsim değişimi oluşmaz. Bu yargı doğrudur.",
    "Dik doğrultuyla yapılan açıyı bulamama: eksen düzlemle 66° açı yapıyorsa dik doğrultuyla 90° − 66° = 24° açı yapar. Bu yargı doğrudur.",
    "Eğiklik arttıkça mevsim farkının azalacağını sanma: eksen düzleme ne kadar yatıksa yarım küreler arasındaki ışın açısı farkı o kadar büyür. Bu yargı doğrudur.",
    null
  ],
  aciklama: `Bir gezegende mevsimlerin oluşması, dönme ekseninin dolanma düzlemine dik olmamasına bağlıdır. Eksen düzlemle 90° açı yapıyorsa eksen düzleme diktir ve eğiklik yoktur.
Adım 1 (A): P'nin ekseni düzlemle 90° açı yapar, yani diktir. Yıl boyunca iki yarım küre de ışığı aynı açıyla alır; belirgin bir mevsim değişimi görülmez. Doğru.
Adım 2 (B): Eksen düzlemle 66° açı yapıyorsa düzleme dik doğrultuyla 90° − 66° = 24° açı yapar. Doğru. (Dünya'da bu değer yaklaşık 23,5°'tir.)
Adım 3 (C): S'nin ekseni düzlemle 45°, dik doğrultuyla 45° açı yapar; R'de bu değer 24°'dir. S'nin eğikliği daha büyük olduğuna göre yarım kürelerin aldığı ışık açısı arasındaki fark da daha büyüktür; mevsim farkları daha belirgindir. Doğru.
Adım 4 (D): Eksenin eğikliği, gezegenin yıldız çevresindeki yörüngesinin biçimiyle ilgili değildir. Yörüngeler çembere çok yakın olduğuna göre uzaklık zaten pek değişmez; eğiklik uzaklığı belirlemez. Bu yargı yanlıştır.
Sık yapılan hata: Eksen eğikliğini gezegenin yıldıza uzaklığıyla karıştırmak. Eğiklik, ışığın yüzeye hangi açıyla düştüğünü belirler; uzaklığı değil.
Cevap D.`
},
{
  id: "fen-mv-311",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir otobüs firması, dinlenme tesisinin otoparkına araçları yazın serin tutacak bir gölgelik yaptırmak istemektedir. Mimar, gölgeliği öyle bir yükseklik ve genişlikte tasarlamıştır ki yaz aylarında öğle vakti gelen ışınlar aracın üzerine düşmez, kış aylarında öğle vakti gelen ışınlar ise gölgeliğin altından geçerek aracı ısıtır. Tasarımdaki ışın açıları aşağıda verilmiştir. Otopark Kuzey Yarım Küre'dedir.
I. Yaz aylarında öğle vakti Güneş ışınları gölgeliğe daha dik geldiği için araç gölgede kalır.
II. Kış aylarında öğle vakti ışınlar daha eğik geldiği için gölgeliğin altından geçip araca ulaşır.
III. Bu tasarımın işe yaraması, Dünya'nın dönme ekseninin dolanma düzlemine dik olmasına bağlıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Gölgelik tasarımı: yaz ışınları 73 derece, kış ışınları 26 derece"><line x1="20" y1="210" x2="500" y2="210" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="6" stroke-linecap="round"><line x1="150" y1="210" x2="150" y2="90"/><line x1="150" y1="90" x2="330" y2="90"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="200" y="160" width="110" height="40" rx="8"/><rect x="226" y="138" width="56" height="24" rx="6"/></g><g fill="currentColor"><circle cx="226" cy="204" r="10"/><circle cx="290" cy="204" r="10"/></g><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="350" y1="24" x2="293" y2="210"/></g><g stroke="var(--vurgu2)" stroke-width="2.5"><line x1="420" y1="46" x2="227" y2="140"/></g><g fill="currentColor" font-size="16"><text x="356" y="20">Yaz: 73°</text><text x="428" y="42">Kış: 26°</text></g><text x="240" y="80" fill="currentColor" font-size="16" text-anchor="middle">gölgelik</text></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: kışın ışınlar yatayla küçük bir açı yaptığı için gölgeliğin altından girebilir; görselde bu açı 26°'dir.",
    null,
    "I'i eleyip III'ü kabul etme: yazın ışınların dik gelmesi tasarımın temelidir; ayrıca eksen dik olsaydı yaz ile kış arasında açı farkı oluşmaz, tasarım işe yaramazdı.",
    "III'ü doğru sayma: tasarım, yaz ve kış açılarının farklı olmasına dayanır. Eksen dolanma düzlemine dik olsaydı bu açı yıl boyunca değişmez ve gölgelik hiçbir zaman fark yaratmazdı."
  ],
  aciklama: `Öğle vakti Güneş ışınlarının yatayla yaptığı açı yaz aylarında büyük, kış aylarında küçüktür. Mimar tam da bu farktan yararlanmıştır.
Adım 1 (I): Görselde yaz ışınları yatayla 73° açı yapar; neredeyse tepeden gelir. Bu yüzden gölgeliğin kenarından içeri giremez ve araç gölgede kalır. I doğrudur.
Adım 2 (II): Kış ışınları yatayla yalnızca 26° açı yapar; yandan gelir. Gölgeliğin altından geçerek araca ulaşır. II doğrudur.
Adım 3 (III): Yaz ile kış arasındaki bu açı farkı, Dünya'nın dönme ekseninin dolanma düzlemine dik olmamasından kaynaklanır. Eksen dik olsaydı öğle vakti ışın açısı yıl boyunca değişmez, gölgelik yazın da kışın da aynı biçimde çalışırdı. Yargı tam tersini söylediği için III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sağlama: Eksen eğikliği olmasa aynı gölgelik yıl boyunca aynı gölgeyi verirdi; yazın serinletip kışın ısıtma özelliği ortadan kalkardı.
Cevap B.`
},
{
  id: "fen-mv-312",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tarım araştırma istasyonunu gezen öğrencilere şu soru yöneltilmiştir: "Dünya'nın dönme ekseninin eğiklik açısı bugünkünden daha büyük olsaydı ülkemizdeki tarım takviminde neler değişirdi?" Öğrencilerin verdiği yanıtlar aşağıdaki tabloda toplanmıştır. Dünya'nın yörüngesinde ve Güneş'in yaydığı enerjide hiçbir değişiklik olmadığı varsayılmaktadır.
**Buna göre hangi öğrencilerin yanıtı doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Yanıtı</th></tr><tr><td>Deniz</td><td>Yaz aylarında öğle vakti ışınlar yere daha dik düşerdi, yazlar bugünkünden daha sıcak olurdu.</td></tr><tr><td>Ege</td><td>Kış aylarında öğle vakti ışınlar yere daha eğik düşerdi, kışlar bugünkünden daha soğuk olurdu.</td></tr><tr><td>Umut</td><td>Dünya Güneş'e daha yakın geçeceği için bütün yıl boyunca daha sıcak olurdu.</td></tr><tr><td>Nil</td><td>Yaz ile kış arasındaki sıcaklık farkı bugünkünden daha az olurdu.</td></tr></table>`,
  secenekler: ["Deniz ve Ege", "Deniz ve Nil", "Ege ve Umut", "Deniz, Ege ve Nil"],
  dogru: 0,
  hatalar: [
    null,
    "Eğiklik arttığında mevsim farkının azalacağını sanma: eğiklik arttıkça yaz ile kış arasındaki ışın açısı farkı büyür, sıcaklık farkı da artar.",
    "Eksen eğikliğini Dünya–Güneş uzaklığıyla karıştırma: eğiklik açısı değişse de yörünge değişmediğine göre uzaklık da değişmez. Ayrıca Deniz'in yanıtı doğrudur.",
    "Nil'in yanıtını da doğru sayma: Deniz ile Ege yaz–kış farkının artacağını, Nil ise azalacağını söylüyor; bu üç yanıt aynı anda doğru olamaz."
  ],
  aciklama: `Eksenin eğikliği, yaz ve kış aylarında Güneş ışınlarının yere kaç derecelik açıyla düştüğünü belirler. Eğiklik büyürse yaz ile kış arasındaki açı farkı da büyür.
Adım 1 (Deniz): Eğiklik arttığında yaz mevsiminde Kuzey Yarım Küre Güneş'e daha çok yönelir; ışınlar yere daha dik düşer. Birim yüzeye düşen enerji artar, yazlar daha sıcak olur. Deniz'in yanıtı doğrudur.
Adım 2 (Ege): Aynı nedenle kış mevsiminde Kuzey Yarım Küre Güneş'ten daha çok uzaklaşır; ışınlar daha eğik düşer, birim yüzeye düşen enerji azalır ve kışlar daha soğuk olur. Ege'nin yanıtı doğrudur.
Adım 3 (Umut): Eksenin eğikliği ile Dünya'nın yörüngesi ayrı şeylerdir. Soruda yörüngenin değişmediği belirtilmiştir; öyleyse Güneş'e uzaklık da değişmez. Umut'un yanıtı yanlıştır.
Adım 4 (Nil): Deniz ve Ege'nin gösterdiği gibi yazlar ısınır, kışlar soğur; aradaki fark artar, azalmaz. Nil'in yanıtı yanlıştır.
Adım 5: Yalnızca Deniz ve Ege doğrudur.
Sık yapılan hata: Eksen eğikliğini Dünya'nın Güneş'e uzaklığıyla ilişkilendirmek. Eğiklik yalnızca ışığın yüzeye düşme açısını değiştirir.
Cevap A.`
}
);
