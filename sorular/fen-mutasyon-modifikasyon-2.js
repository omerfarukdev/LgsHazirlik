// Fen Bilimleri — Mutasyon ve Modifikasyon: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["mutasyon-modifikasyon"] = window.LGS_BANK["mutasyon-modifikasyon"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-mm-301",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma merkezinde, tek bir civanperçemi bitkisi kökleriyle birlikte üç parçaya bölünerek üç bitki elde edilmiştir. Bu yolla elde edilen bitkilerin kalıtsal yapıları aynıdır. Bitkiler deniz kıyısında, orta yükseklikte ve yüksek dağda bulunan üç bahçeye dikilmiş, hepsine aynı bakım yapılmıştır. İki yıl sonra ölçülen boylar tabloda verilmiştir.
Buna göre;
I. Bitkilerin boyları arasındaki fark, bahçelerin ortam koşullarından kaynaklanmıştır.
II. 3. bahçedeki bitkinin boy genleri, dağın soğuk iklimi nedeniyle değişmiştir.
III. 3. bahçedeki bitkiden alınan bir parça deniz kıyısındaki bahçeye dikilirse daha uzun boylu bir bitki gelişebilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bahçe</th><th>Bulunduğu yer</th><th>Yükselti</th><th>Bitki boyu</th></tr><tr><td>1.</td><td>Deniz kıyısı</td><td>30 m</td><td>60 cm</td></tr><tr><td>2.</td><td>Orta yükseklik</td><td>1400 m</td><td>40 cm</td></tr><tr><td>3.</td><td>Yüksek dağ</td><td>3000 m</td><td>15 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: boy farkı ortamdan kaynaklanan bir modifikasyondur; bitkinin bir parçası farklı bir ortama dikilince boyu da değişebilir.",
    "Çevre etkisini gen değişikliği sanma: bitkiler aynı bitkiden bölündüğü için genleri aynıdır; soğuk iklim büyümeyi etkiler ama genleri değiştirmez.",
    null,
    "Deneyin değişkenini gözden kaçırma: kalıtsal yapıları aynı olan bitkiler arasındaki fark ortamdan kaynaklanır, bu yüzden I doğrudur; genler ise değişmemiştir, II yanlıştır."
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle ortaya çıkan, DNA'yı değiştirmeyen ve sonraki nesle aktarılmayan değişikliktir.
Adım 1: Üç bitki aynı bitkinin parçalarından elde edildiği için kalıtsal yapıları aynıdır. Bakımları da aynıdır. Farklı olan, bahçelerin bulunduğu yer ve oradaki iklim koşullarıdır.
Adım 2 (I): Genleri aynı olan bitkilerin boyları farklı çıktığına göre fark ortam koşullarından kaynaklanır. I doğrudur.
Adım 3 (II): Soğuk iklim bitkinin büyümesini yavaşlatır ama genlerini değiştirmez. Bu bir modifikasyondur. II yanlıştır.
Adım 4 (III): Modifikasyon DNA'yı değiştirmez; ortam değişince bitkinin büyümesi de değişebilir. Dağdaki bitkiden alınan bir parça deniz kıyısına dikilirse orada daha uzun boylu bir bitki gelişebilir. III doğrudur.
Sık yapılan hata: Gözle görülen her farkın genlerden kaynaklandığını düşünmek. Aynı genlere sahip canlılar farklı ortamlarda farklı görünebilir.
Cevap C.`
},
{
  id: "fen-mm-302",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir keçi çiftliğinde, uzun kulaklı bir anne ile babadan, kulak kepçeleri çok küçük olan bir oğlak doğmuştur. Oğlakla aynı doğumda dünyaya gelen iki kardeşinin kulakları ise anne ve babasınınki gibi uzundur. Çiftçi, oğlağın kulaklarının doğduğu soğuk gecede donarak küçüldüğünü düşünmüştür. Veteriner ise kulaklarda hiçbir donma ya da yara izi bulunmadığını, kulakların doğuştan bu biçimde olduğunu söylemiştir. Oğlak, kardeşleriyle aynı ahırda ve aynı besinlerle büyütülmüştür. Bir yıl sonra kardeşlerinin kulakları uzun, oğlağın kulakları ise yine çok küçüktür.
**Buna göre oğlaktaki durumla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Anne karnında yetersiz beslenmesinden kaynaklanır; oğlağın yavrularına geçemez.",
    "Doğduğu gecenin soğuğunun kulak genlerini bozmasından kaynaklanır; yavrularına geçebilir.",
    "Kulak gelişimini belirleyen gendeki bir değişiklikten kaynaklanır; yavrularına geçebilir.",
    "Kulak gelişimini belirleyen gendeki bir değişiklikten kaynaklanır; yavrularına geçemez."
  ],
  dogru: 2,
  hatalar: [
    "Doğuştan gelen farkı beslenmeye bağlama: oğlakla aynı anne karnında gelişen iki kardeşinin kulakları uzundur; oğlak doğduktan sonra da kardeşleriyle aynı besinleri aldığı hâlde kulakları küçük kalmıştır. Fark beslenmeyle açıklanamaz.",
    "Mutasyonun nedenini yanlış belirleme: oğlak küçük kulaklarla doğmuştur, yani kulakları soğuk geceden önce anne karnında bu biçimde gelişmiştir. Aynı gece doğan kardeşlerin kulakları uzundur ve kulaklarda donma izi yoktur.",
    null,
    "Doğuştan gelen gen değişikliğinin nesle geçmeyeceğini sanma: oğlak bu özellikle doğmuştur; değişiklik onu oluşturan ilk hücrede (zigotta) vardı. Bu yüzden bütün hücrelerinde, ileride oluşacak üreme hücrelerinde de bulunur ve yavrularına geçebilir."
  ],
  aciklama: `Mutasyon, DNA'da (genlerde ya da kromozomlarda) oluşan kalıcı değişikliktir. Bir canlı bir mutasyonla doğmuşsa bu değişiklik, onu oluşturan ilk hücrede (zigotta) vardır.
Adım 1: Oğlakla aynı anne karnında gelişen iki kardeşinin kulakları uzundur. Oğlak doğduktan sonra da kardeşleriyle aynı ahırda, aynı besinlerle büyümüş; bir yıl geçtiği hâlde kulakları küçük kalmıştır. Fark beslenme gibi çevre koşullarıyla açıklanamaz; A elenir.
Adım 2: Oğlak küçük kulaklarla doğmuştur; kulakları, soğuk geceden önce anne karnında bu biçimde gelişmiştir. Aynı gece doğan kardeşlerin kulakları uzundur ve veteriner donma izi bulmamıştır. Üstelik soğuk, DNA'yı değiştiren etkenlerden (ışınlar, bazı kimyasallar) değildir. B elenir.
Adım 3: Doğuştan gelen ve çevre koşullarıyla açıklanamayan bu fark, kulak gelişimini belirleyen gendeki bir değişiklikle, yani mutasyonla açıklanır.
Adım 4: Oğlağın bütün hücreleri zigotun bölünmesiyle oluşmuştur. Zigotta bulunan gen değişikliği vücut hücrelerine olduğu gibi ileride oluşacak üreme hücrelerine de geçer. Bu yüzden oğlağın yavrularına aktarılabilir. C doğrudur, D elenir.
Sık yapılan hata: Mutasyonun yalnızca özelliğin görüldüğü organda bulunduğunu düşünmek. Doğuştan gelen bir mutasyon canlının bütün hücrelerinde bulunur ve sonraki nesle aktarılabilir.
Cevap C.`
},
{
  id: "fen-mm-303",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, bir hafta boyunca okuduğu haberlerden ve yaptığı gözlemlerden dört değişikliği tabloya not etmiştir.
Buna göre;
I. K ve M'deki değişiklikler, canlıların DNA'sında oluşan değişikliklerdir.
II. L'deki değişiklik, kromozom sayısındaki bir değişikliktir.
III. N'deki özellik, bu çocuktan ileride doğacak çocuklarına aktarılabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Değişiklik</th><th>Açıklama</th></tr><tr><td>K</td><td>Düzenli antrenman yapan bir yüzücünün omuz ve kol kaslarının gelişmesi</td></tr><tr><td>L</td><td>Bir bebeğin vücut hücrelerinde 46 yerine 47 kromozom bulunması</td></tr><tr><td>M</td><td>Tuzlu bir toprakta yetişen bir arpa bitkisinin cılız kalması</td></tr><tr><td>N</td><td>Bir çocuğun alyuvarlarının, anne ve babasından aldığı genler nedeniyle orak biçiminde olması</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Görünür değişikliği DNA değişikliği sanma: kas gelişimi ve arpanın cılız kalması çevre etkisiyle oluşan modifikasyonlardır; DNA değişmez. I yanlıştır.",
    "III'ü eksik değerlendirme: orak hücre anemisine yol açan genler çocuğun bütün hücrelerinde, üreme hücrelerinde de bulunur; bu yüzden kendi çocuklarına aktarılabilir.",
    "Modifikasyonu mutasyon sanma: K ve M çevre etkisiyle oluşmuştur, DNA'yı değiştirmez; I yanlıştır, II ise doğrudur.",
    null
  ],
  aciklama: `Mutasyon, DNA'da oluşan kalıcı değişikliktir ve üreme hücrelerinde bulunursa sonraki nesle aktarılabilir. Modifikasyon ise çevrenin etkisiyle oluşur, DNA'yı değiştirmez.
Adım 1 (I): K'de kaslar antrenmanla gelişmiş, M'de arpanın büyümesi topraktaki tuz nedeniyle yavaşlamıştır. İkisi de çevre etkisiyle oluşan modifikasyondur; DNA değişmemiştir. I yanlıştır.
Adım 2 (II): İnsanın vücut hücrelerinde normalde 46 kromozom bulunur. 47 kromozom, kromozom sayısında oluşan bir mutasyondur (Down sendromunda olduğu gibi). II doğrudur.
Adım 3 (III): N'deki çocuk, orak hücre anemisine yol açan genleri anne babasından almıştır. Bu genler bütün hücrelerinde, üreme hücrelerinde de bulunur; bu yüzden kendi çocuklarına aktarılabilir. III doğrudur.
Sık yapılan hata: "Kaslar gelişti, öyleyse vücut yapısı kalıcı olarak değişti." demek. Antrenman bırakılınca kaslar yeniden küçülür; genler değişmez.
Cevap D.`
},
{
  id: "fen-mm-304",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Genç yaşta sigaraya başlayan ve yirmi yıl boyunca her gün sigara içen bir hastanın akciğerinde, hücrelerin kontrolsüz çoğalmasıyla oluşmuş bir doku bulunmuştur. Yapılan incelemede bu dokudaki hücrelerin DNA'sında, sigara dumanındaki bazı kimyasalların yol açtığı değişiklikler tespit edilmiştir. Hasta doktoruna, "Akciğerimdeki bu değişiklikler ileride doğacak çocuklarıma geçer mi?" diye sormuştur.
**Doktorun bu soruya vereceği bilimsel olarak doğru yanıt aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Geçer; çünkü DNA'da oluşan her değişiklik sonraki nesle de aktarılır.",
    "Geçmez; çünkü değişiklikler üreme hücrelerinde değil, akciğerde oluşmuştur.",
    "Geçmez; çünkü kimyasalların etkisiyle oluşan değişiklikler DNA'yı etkilemez.",
    "Geçer; çünkü değişiklikler uzun yıllar boyunca aynı etkenle birikerek oluşmuştur."
  ],
  dogru: 1,
  hatalar: [
    "Her DNA değişikliğini kalıtsal sanma: sonraki nesle yalnız üreme hücrelerindeki mutasyonlar geçebilir; akciğer hücresindeki değişiklik geçmez.",
    null,
    "Kimyasalların DNA'ya etkisini bilmeme: sigara dumanındaki bazı kimyasallar mutasyona yol açar; soruda da DNA'da değişiklik bulunduğu belirtilmiştir.",
    "Etkinin süresini kalıtımla karıştırma: bir değişikliğin nesle geçmesi, uzun sürede oluşmasına değil, üreme hücrelerinde bulunmasına bağlıdır."
  ],
  aciklama: `Mutasyona yol açan etkenler arasında radyasyon (X ışını, morötesi ışın) ve bazı kimyasallar bulunur. Sigara dumanındaki bazı kimyasallar da bunlardandır.
Adım 1: Hastanın akciğer hücrelerinin DNA'sında değişiklik bulunmuştur. DNA'da oluşan kalıcı değişiklik mutasyondur.
Adım 2: Bir mutasyonun sonraki nesle geçmesi için yavruyu oluşturacak üreme hücrelerinde (sperm ya da yumurta) bulunması gerekir.
Adım 3: Akciğer hücreleri vücut hücresidir; çocuk bu hücrelerden oluşmaz. Bu yüzden akciğerdeki değişiklikler çocuklara geçmez.
Sık yapılan hata: "DNA değiştiyse her durumda çocuğa geçer." demek. Vücut hücresindeki mutasyon yalnızca o kişiyi etkiler.
Cevap B.`
},
{
  id: "fen-mm-305",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftçi, kalıtsal yapıları birbirine çok benzeyen aynı çeşit ayçiçeği tohumlarını iki tarlaya ekmiştir. Tarlalardan birinde bitkiler arasında 20 cm, diğerinde 60 cm uzaklık bırakmıştır. Ertesi yıl, bitkiler arasında 20 cm uzaklık bırakılan tarladan topladığı tohumları üçüncü bir tarlaya, aralarında 60 cm uzaklık bırakarak ekmiştir. Tarlalardaki bitkilerin ortalama tabla (çiçek başı) çapları tabloda verilmiştir.
Buna göre;
I. Bitkiler arasında 20 cm uzaklık bırakılan tarladaki ayçiçeklerinin genleri değişmiştir.
II. Bitkiler arasındaki uzaklık, genlerin izin verdiği sınırlar içinde tabla büyüklüğünü etkilemiştir.
III. Küçük tablalı bitkilerin tohumlarından yetişen bitkilerin tablaları da küçük olmuştur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Tarla</th><th>Ekilen tohumlar</th><th>Bitkiler arası uzaklık</th><th>Ortalama tabla çapı</th></tr><tr><td>1. (1. yıl)</td><td>Paketten alınan tohumlar</td><td>20 cm</td><td>12 cm</td></tr><tr><td>2. (1. yıl)</td><td>Paketten alınan tohumlar</td><td>60 cm</td><td>25 cm</td></tr><tr><td>3. (2. yıl)</td><td>1. tarladan toplanan tohumlar</td><td>60 cm</td><td>25 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Çevre etkisini gen değişikliği sanma: sık ekim bitkilerin büyümesini etkiler ama genlerini değiştirmez; 1. tarladan toplanan tohumlar seyrek ekilince büyük tablalı bitkiler vermiştir.",
    null,
    "Modifikasyonu kalıtsal sanma: 1. tarladan toplanan tohumlar 3. tarlada 25 cm çaplı tablalar vermiştir; küçük tabla özelliği aktarılmamıştır.",
    "Tabloyu eksik okuma: II doğrudur, ancak 3. tarladaki bitkilerin tablaları 25 cm'dir; küçük tabla sonraki kuşağa geçmemiştir, III yanlıştır."
  ],
  aciklama: `Modifikasyon, genlerin izin verdiği sınırlar içinde çevre koşullarının etkisiyle oluşan, kalıtsal olmayan değişikliktir.
Adım 1 (II): Aynı çeşit tohumlardan sık ekilenlerin tablaları 12 cm, seyrek ekilenlerinki 25 cm olmuştur. Sık ekimde bitkiler ışık, su ve besin için birbiriyle yarışır. Uzaklık tabla büyüklüğünü etkilemiştir. II doğrudur.
Adım 2 (III): 1. tarladan toplanan tohumlar seyrek ekildiğinde tablalar 25 cm olmuştur. Küçük tabla özelliği yeni bitkilere geçmemiştir. III yanlıştır.
Adım 3 (I): Genler değişseydi bu tohumlardan yetişen bitkilerde de küçük tabla görülürdü. I yanlıştır.
Sık yapılan hata: Bir tarladaki bitkilerin küçük kalmasını genlerindeki bir bozukluğa bağlamak. Aynı genler, farklı ekim koşullarında farklı büyüklükte bitki oluşturabilir.
Cevap B.`
},
{
  id: "fen-mm-306",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bonsai ustası, bir çam ağacını otuz yıldır küçük ve sığ bir saksıda yetiştirmektedir. Usta, ağacın köklerini ve dallarını her yıl budamakta, gübreyi de az miktarda vermektedir. Ağaç otuz yaşında olmasına rağmen 40 cm boyundadır. Ustanın öğrencisi, bu ağacın kozalaklarından aldığı tohumları geniş bir bahçeye ekmiş ve fidanları budamadan büyütmüştür. Fidanlar, bahçedeki diğer çam fidanlarıyla aynı hızda büyümüştür.
**Buna göre bonsai ağacının küçük kalmasıyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Budamanın ağacın boy genlerinde yol açtığı bir mutasyondan kaynaklanır.",
    "Çevre koşullarıyla oluşan, ancak otuz yıl sürdüğü için tohumlarına da geçen bir değişikliktir.",
    "Ağacın boy genlerinin küçük saksıya uyacak biçimde değişmesiyle oluşmuştur.",
    "Çevre koşullarıyla oluşan ve ağacın tohumlarına geçmeyen bir değişikliktir."
  ],
  dogru: 3,
  hatalar: [
    "Çevre etkisini mutasyon sanma: budama ve küçük saksı ağacın genlerini değiştirmez; tohumlardan çıkan fidanların normal büyümesi de bunu gösterir.",
    "Uzun süreyi kalıtsallık sanma: değişikliğin çevre koşullarıyla oluştuğu doğrudur, ancak otuz yıl sürse de DNA'yı değiştirmediği için tohumlara geçmez; fidanlar normal hızla büyümüştür.",
    "Çevrenin genleri ihtiyaca göre değiştirdiğini sanma: ortam koşulları genleri değiştirmez; genler değişseydi tohumlardan çıkan fidanlar da küçük kalırdı.",
    null
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle oluşan, DNA'yı değiştirmeyen ve sonraki nesle aktarılmayan değişikliktir.
Adım 1: Ağacın küçük kalmasına yol açan etkenler budama, küçük saksı ve az gübredir. Bunların hepsi çevre koşuludur. Budama ve saksı genleri değiştirmez; A ve C elenir.
Adım 2: Ağacın tohumlarından çıkan ve budanmadan büyütülen fidanlar normal hızla büyümüştür. Küçük boy yeni ağaçlara geçmemiştir. B'nin ilk kısmı doğrudur ama ikinci kısmı bu gözlemle çelişir; B elenir.
Adım 3: Çevrenin etkisiyle oluşan ve sonraki nesle geçmeyen bu değişiklik bir modifikasyondur. Ağacın genleri değişmemiştir. D doğrudur.
Sık yapılan hata: Uzun süre devam eden bir değişikliğin kalıtsal olduğunu düşünmek. Modifikasyon yıllarca sürebilir; belirleyici olan, DNA'nın değişip değişmediğidir.
Cevap D.`
},
{
  id: "fen-mm-307",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 3,
  soru: `Nehir ile Mert, fen dersinde aşağıdaki konuşmayı yapmıştır.
Nehir: Her yaz güneşte bronzlaşıyorum, kışın ise tenim eski rengine dönüyor.
Mert: Albinizmi olan bir kişi güneşte ne kadar kalırsa kalsın bronzlaşamaz, çünkü vücudu renk maddesi üretemez.
Nehir: Öyleyse güneş, benim tenimde var olan bir yeteneği ortaya çıkarıyor ama yeni bir yetenek oluşturmuyor.
Buna göre;
I. Nehir'in bronzlaşması, genlerinin izin verdiği sınırlar içinde oluşan bir değişikliktir.
II. Albinizmi olan kişinin bronzlaşamaması, çevre koşullarının genlerdeki kalıcı bir değişikliği ortadan kaldıramadığını gösterir.
III. Nehir her yaz düzenli olarak bronzlaşırsa bu özellik zamanla kalıtsal hâle gelir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Tekrarlanan modifikasyonu kalıtsal sanma: bronzlaşma her yaz tekrarlansa da DNA'yı değiştirmez, kalıtsal hâle gelmez. II ise doğrudur.",
    "I'i yanlış sayma: Nehir'in teni güneşte koyulaşıp kışın eski hâline dönmektedir; bu, genlerin izin verdiği sınırlar içinde oluşan bir modifikasyondur. III ise yanlıştır.",
    "III'ü doğru sayma: çevre etkisiyle oluşan değişiklikler ne kadar tekrarlanırsa tekrarlansın DNA'yı değiştirmez ve sonraki nesle geçmez."
  ],
  aciklama: `Modifikasyon, genlerin izin verdiği sınırlar içinde çevrenin etkisiyle oluşan değişikliktir. Çevre, genlerde olmayan bir özelliği ortaya çıkaramaz.
Adım 1 (I): Nehir'in vücudu renk maddesi üretebilir; güneş bu üretimi artırır. Kışın ten eski rengine döner. Değişiklik genlerin izin verdiği sınırlar içindedir. I doğrudur.
Adım 2 (II): Albinizm, renk maddesi üretimini sağlayan gendeki bir mutasyondan kaynaklanır. Güneş bu geni değiştiremez; bu yüzden kişi bronzlaşamaz. II doğrudur.
Adım 3 (III): Bronzlaşma DNA'yı değiştirmez. Her yaz tekrarlansa da sonraki nesle geçmez. III yanlıştır.
Sık yapılan hata: Bir değişiklik sık tekrarlanırsa kalıtsal hâle geleceğini düşünmek. Kalıtsal olan yalnızca DNA'da, üreme hücrelerine kadar ulaşan değişikliklerdir.
Cevap A.`
},
{
  id: "fen-mm-308",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gitar öğretmeni, yıllardır her gün saatlerce gitar çaldığı için sol elinin parmak uçlarında deri kalınlaşması (nasır) oluştuğunu fark etmiştir. Öğretmen yaz tatilinde iki ay gitar çalmamış ve bu sürede nasırların inceldiğini görmüştür. Okullar açılıp yeniden her gün çalmaya başlayınca nasırlar birkaç hafta içinde yeniden kalınlaşmıştır. Öğretmenin yeni doğan bebeğinin parmak uçlarında ise nasır yoktur.
**Buna göre parmak uçlarındaki nasırla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Nasır, çevre etkisiyle oluşan ve DNA'yı değiştirmeyen bir değişimdir.",
    "Nasır, öğretmenin ileride doğacak çocuklarına kalıtımla aktarılabilir.",
    "Nasır, sol el hücrelerinin DNA'sında oluşan bir mutasyonun sonucudur.",
    "Nasır, çevre etkisiyle oluşur; oluştuktan sonra kullanılmasa da incelmez."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Modifikasyonu kalıtsal sanma: nasır DNA'yı değiştirmez; bu yüzden çocuklara geçmez. Bebeğin parmaklarında da nasır yoktur.",
    "Çevre etkisini mutasyon sanma: nasır, gitar tellerinin parmaklara sürekli baskısıyla oluşur ve çalmaya ara verilince incelir; kalıcı bir DNA değişikliği değildir.",
    "Veriyle çelişen yargıyı seçme: nasırın çevre etkisiyle oluştuğu doğrudur, ancak öğretmen yaz tatilinde iki ay çalmayınca nasırlar incelmiştir. Çevre değişince modifikasyon da değişebilir."
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle oluşan, DNA'yı değiştirmeyen ve sonraki nesle aktarılmayan değişikliktir.
Adım 1: Nasır, parmak uçlarının gitar tellerine her gün sürtünmesiyle oluşmuştur. Nedeni bir çevre koşuludur.
Adım 2: Öğretmen çalmaya ara verince nasır incelmiş, yeniden çalınca kalınlaşmıştır. Değişiklik ortama göre gidip gelmektedir; bu, kalıcı bir DNA değişikliği olmadığını gösterir. C elenir. Nasırın kullanılmayınca incelmediğini söyleyen D de bu gözlemle çelişir.
Adım 3: Çevre etkisiyle oluşan, DNA'yı değiştirmeyen ve kalıtsal olmayan değişiklik modifikasyondur. Modifikasyon çocuklara aktarılmaz; öğretmenin bebeğinde de nasır yoktur. B elenir, A doğrudur.
Sık yapılan hata: Bir değişiklik uzun süredir devam ediyorsa genlerin değiştiğini düşünmek. Nasır yıllarca sürse de nedeni sürekli devam eden sürtünmedir.
Cevap A.`
},
{
  id: "fen-mm-309",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftlikte, normal bacak uzunluğundaki bir koyun ile koçtan kısa bacaklı bir dişi kuzu doğmuştur. Kuzu, sürüdeki diğer kuzularla aynı otlakta otlamış ve aynı bakımı görmüştür. Büyüdüğünde bacakları yine kısa kalmıştır. Çiftçi bu koyunu normal bacaklı bir koçla çiftleştirdiğinde doğan kuzuların bir kısmının da kısa bacaklı olduğunu görmüştür. Kısa bacaklı koyunlar çitlerin üzerinden atlayamadığı için çiftçi bu koyunları çoğaltmaya karar vermiştir.
**Buna göre ilk kısa bacaklı kuzudaki değişiklikle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Genleri değiştirmeyen, bakım koşullarıyla oluşmuş bir değişikliktir.",
    "Otlaktaki besinlerin yetersiz olmasından kaynaklanan bir modifikasyondur.",
    "Kuzunun bacak hücrelerinde doğumdan sonra oluşmuş bir mutasyondur.",
    "Anne ya da babanın üreme hücresinde oluşmuş bir mutasyondan kaynaklanır."
  ],
  dogru: 3,
  hatalar: [
    "Kalıtsal değişikliği modifikasyon sanma: bakım koşulları sürüdeki bütün kuzular için aynıdır; özellik yavrulara da geçtiği için DNA'da bir değişiklik vardır.",
    "Çevreyi neden sanma: kuzu diğer kuzularla aynı otlakta beslenmiştir; ayrıca özellik yavrularına geçtiği için modifikasyon olamaz.",
    "Vücut hücresi mutasyonunu kalıtsal sanma: kuzu kısa bacaklı doğmuş ve özellik yavrularına geçmiştir; bacak hücrelerinde sonradan oluşan bir mutasyon yavrulara geçmezdi.",
    null
  ],
  aciklama: `Adım 1: Anne ve baba normal bacaklıdır; kuzu ise kısa bacaklı doğmuştur.
Adım 2: Kuzu diğer kuzularla aynı otlakta ve aynı bakımla büyümüştür. Fark çevreden kaynaklanmamaktadır.
Adım 3: Özellik kuzunun yavrularına da geçmiştir, yani kalıtsaldır. Kalıtsal olan yeni bir özellik DNA'daki kalıcı bir değişiklikle, yani mutasyonla açıklanır.
Adım 4: Kuzu bu özellikle doğmuş ve özelliği yavrularına aktarmıştır. Öyleyse değişiklik, kuzuyu oluşturan yumurta ya da sperm hücresinde bulunuyordu; yani anne ya da babanın bir üreme hücresinde oluşmuştur.
Sık yapılan hata: Mutasyonların hepsini zararlı sanmak. Mutasyonların çoğu zararlıdır, ancak bu örnekte olduğu gibi bazıları işe yarayabilir.
Cevap D.`
},
{
  id: "fen-mm-310",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun serasında, aynı çuha çiçeği bitkisinden çelikle üretilen ve kalıtsal yapıları aynı olan dört fide, sıcaklıkları farklı dört bölmede yetiştirilmiştir. Işık, su ve toprak bütün bölmelerde aynıdır. Fidelerin açtığı çiçeklerin renkleri tabloda verilmiştir.
Buna göre;
I. Bu deneyde bağımsız değişken ortamın sıcaklığıdır.
II. 3. bölmedeki bitki 15 °C'lik bölmeye taşınırsa sonradan açan çiçekleri kırmızı olabilir.
III. Çiçek rengindeki farklılık, bitkilerin DNA'sında bir değişiklik oluşturmamıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bölme</th><th>Sıcaklık</th><th>Çiçek rengi</th></tr><tr><td>1.</td><td>15 °C</td><td>Kırmızı</td></tr><tr><td>2.</td><td>20 °C</td><td>Kırmızı</td></tr><tr><td>3.</td><td>30 °C</td><td>Beyaz</td></tr><tr><td>4.</td><td>35 °C</td><td>Beyaz</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü gözden kaçırma: sıcaklıkla oluşan renk farkı modifikasyondur; DNA'yı değiştirmez ve ortam değişince yeni çiçeklerin rengi de değişebilir.",
    "Modifikasyonun DNA'yı değiştirdiğini sanma: fideler aynı genlere sahiptir ve renk farkı sıcaklıktan kaynaklanır; III de doğrudur.",
    "Değişkenleri ayırt edememe: bölmeden bölmeye değiştirilen tek etken sıcaklıktır; bu yüzden bağımsız değişken sıcaklıktır ve I de doğrudur.",
    null
  ],
  aciklama: `Bağımsız değişken, deneyde araştırmacının kendisinin değiştirdiği etkendir.
Adım 1 (I): Işık, su ve toprak her bölmede aynıdır; yalnızca sıcaklık değiştirilmiştir. Bağımsız değişken sıcaklıktır. I doğrudur.
Adım 2 (III): Fidelerin genleri aynıdır. Renk farkı, aynı genlerin farklı sıcaklıklarda farklı sonuç vermesinden doğar. DNA değişmemiştir; bu bir modifikasyondur. III doğrudur.
Adım 3 (II): Modifikasyon DNA'yı değiştirmediği için ortam değişince yeni oluşan çiçeklerin rengi de değişebilir. 30 °C'de beyaz çiçek açan bitki 15 °C'lik bölmeye taşınırsa sonradan açan çiçekleri kırmızı olabilir. II doğrudur.
Sağlama: Tabloda 15 °C ve 20 °C'de kırmızı, 30 °C ve 35 °C'de beyaz çiçek açılmıştır. Renk yalnızca sıcaklıkla birlikte değişmektedir.
Cevap D.`
},
{
  id: "fen-mm-311",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırmacı, kalıtsal yapıları aynı olan farelerle iki aşamalı bir çalışma yapmıştır. Birinci aşamada farelerin bir grubunu normal yemle, diğer grubunu besin değeri daha yüksek bir yemle beslemiştir. İkinci aşamada iki gruptaki farelerin yavrularının hepsini normal yemle beslemiştir. Farelerin yetişkinlikteki ortalama kütleleri tabloda verilmiştir.
**Bu çalışmanın sonuçlarına göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Grup</th><th>Ebeveynlerin yemi</th><th>Ebeveynlerin ortalama kütlesi</th><th>Yavruların yemi</th><th>Yavruların ortalama kütlesi</th></tr><tr><td>1.</td><td>Normal</td><td>30 g</td><td>Normal</td><td>30 g</td></tr><tr><td>2.</td><td>Besin değeri yüksek</td><td>38 g</td><td>Normal</td><td>30 g</td></tr></table>`,
  secenekler: [
    "Besin değeri yüksek yem, 2. gruptaki farelerin kütleyle ilgili genlerini değiştirmiştir.",
    "2. gruptaki ebeveynler, fazla kütle özelliğini yavrularına aktarmıştır.",
    "2. gruptaki ebeveynlerin fazla kütlesi, kalıtsal olmayan bir değişikliktir.",
    "2. gruptaki fazla kütle kalıtsal değildir; ebeveynler normal yeme geçse de kütleleri azalmaz."
  ],
  dogru: 2,
  hatalar: [
    "Beslenmeyi gen değişikliği sanma: beslenme DNA'yı değiştiren bir etken değildir; fazla kütle yavrulara da geçmemiş, iki grubun yavruları aynı kütlede olmuştur.",
    "Tabloyu eksik okuma: iki grubun yavrularının ortalama kütlesi de 30 g'dır; fazla kütle yavrulara geçmemiştir.",
    null,
    "Modifikasyonu geri dönmez sanma: fazla kütlenin kalıtsal olmadığı doğrudur, ancak çalışmada ebeveynlerin yemi hiç değiştirilmemiştir. Kütle yemle birlikte değiştiğine göre ebeveynler normal yeme geçince kütleleri de azalabilir; \"azalmaz\" yargısı bu sonuçlardan çıkarılamaz."
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle oluşan, DNA'yı değiştirmeyen ve sonraki nesle aktarılmayan değişikliktir.
Adım 1: Ebeveyn farelerin kalıtsal yapıları aynıdır; iki grup arasındaki tek fark yemdir. Besin değeri yüksek yemle beslenen grup ortalama 8 g daha ağır olmuştur. Demek ki yem kütleyi etkilemiştir.
Adım 2: İki grubun yavruları aynı yemle beslenince ikisi de ortalama 30 g olmuştur. Ebeveynlerdeki fazla kütle yavrulara geçmemiştir; B elenir.
Adım 3: Beslenme DNA'yı değiştiren bir etken değildir ve fazla kütle yavrulara aktarılmamıştır. Genlerin değiştiğini gösteren bir veri yoktur; A elenir.
Adım 4: Çevrenin (beslenmenin) etkisiyle oluşan ve sonraki nesle aktarılmayan bu değişiklik bir modifikasyondur, yani kalıtsal değildir. C doğrudur.
Adım 5: D'nin ilk kısmı doğrudur, ama çalışmada ebeveynlerin yemi hiç değiştirilmemiştir. Ebeveynler normal yeme geçince kütlelerinin azalmayacağı bu sonuçlardan çıkarılamaz. Üstelik modifikasyon çevreye bağlıdır; çevre değişince değişebilir. D elenir.
Sağlama: Ebeveyn aşamasında yemler farklıyken kütleler farklı, yavru aşamasında yemler aynıyken kütleler eşittir. Kütle, yemle birlikte değişmektedir.
Sık yapılan hata: Bir şıkkın ilk yarısı doğru diye şıkkın tamamını doğru saymak. D'deki "kütleleri azalmaz" yargısı bu çalışmada sınanmamıştır.
Cevap C.`
},
{
  id: "fen-mm-312",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırmacı, zebra balıklarını beş akvaryuma ayırmıştır. Birinci akvaryumun suyuna hiçbir madde eklememiş, diğer dört akvaryumun suyuna ise mutasyona yol açtığı bilinen bir kimyasal maddeden artan miktarlarda eklemiştir. Bir süre sonra bütün balıkları temiz suya almış, her akvaryumun balıklarını kendi içinde çiftleştirmiş ve yavruları temiz suda büyütmüştür. Daha sonra yavrular arasında omurgası eğri olanların oranını hesaplamıştır. Sonuçlar grafikte verilmiştir.
Buna göre;
I. Kimyasal madde eklenmeyen akvaryumdaki balıkların yavrularında omurga eğriliğine yol açan bir değişiklik oluşmamıştır.
II. Kimyasal maddenin bulunduğu sudaki balıkların kendi omurgaları da eğrilmiştir.
III. Suya eklenen kimyasal madde miktarı arttıkça yavrularda omurga eğriliği görülme oranı artmıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 330" role="img" aria-label="Kimyasal madde miktarı ile omurgası eğri yavru oranı grafiği">
<text x="285" y="20" text-anchor="middle" font-size="15" fill="currentColor">Grafik: Kimyasal madde miktarı ve omurgası eğri yavru oranı</text>
<line x1="70" y1="260" x2="500" y2="260" stroke="currentColor" stroke-width="2"/>
<line x1="70" y1="260" x2="70" y2="36" stroke="currentColor" stroke-width="2"/>
<g font-size="14" fill="currentColor" text-anchor="end">
<text x="62" y="265">0</text><text x="62" y="211">3</text><text x="62" y="157">6</text><text x="62" y="103">9</text><text x="62" y="49">12</text>
</g>
<g stroke="currentColor" stroke-width="1" opacity="0.3">
<line x1="70" y1="206" x2="500" y2="206"/><line x1="70" y1="152" x2="500" y2="152"/><line x1="70" y1="98" x2="500" y2="98"/><line x1="70" y1="44" x2="500" y2="44"/>
</g>
<g fill="var(--vurgu)">
<rect x="98" y="242" width="44" height="18"/><rect x="178" y="206" width="44" height="54"/><rect x="258" y="170" width="44" height="90"/><rect x="338" y="116" width="44" height="144"/><rect x="418" y="62" width="44" height="198"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="middle">
<text x="120" y="236">%1</text><text x="200" y="200">%3</text><text x="280" y="164">%5</text><text x="360" y="110">%8</text><text x="440" y="56">%11</text>
<text x="120" y="282">0</text><text x="200" y="282">1</text><text x="280" y="282">2</text><text x="360" y="282">3</text><text x="440" y="282">4</text>
<text x="285" y="312">Eklenen kimyasal madde miktarı (birim)</text>
</g>
<text x="20" y="150" font-size="14" fill="currentColor" text-anchor="middle" transform="rotate(-90 20 150)">Omurgası eğri yavru (%)</text>
</svg>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Grafiği okumadan varsayım yapma: kimyasal eklenmeyen akvaryumun yavrularında da %1 oranında omurga eğriliği görülmüştür; mutasyonlar kendiliğinden de oluşabilir. III ise doğrudur.",
    null,
    "Veriyle çelişen ve verilmeyen bilgiyi doğru sayma: I grafikle çelişir; kimyasala maruz kalan balıkların kendi omurgaları hakkında ise bilgi verilmemiştir.",
    "Fazla varsayım: araştırmacı yalnızca yavruların omurgalarını incelemiştir; kimyasala maruz kalan balıkların kendi omurgalarının eğrildiği söylenemez."
  ],
  aciklama: `Mutasyon, bazı kimyasallar ve ışınlar gibi etkenlerle oluşabildiği gibi hiçbir dış etken olmadan kendiliğinden de oluşabilir.
Adım 1 (III): Grafikte kimyasal madde miktarı 0'dan 4 birime çıktıkça omurgası eğri yavru oranı %1'den %11'e düzenli olarak artmaktadır. III doğrudur.
Adım 2 (I): Kimyasal eklenmeyen akvaryumda da oran %1'dir. Bu balıkların yavrularında da omurga eğriliği görülmüştür; bu, kendiliğinden oluşan mutasyonları gösterir. I yanlıştır.
Adım 3 (II): Araştırmacı yalnızca yavruları incelemiştir. Ebeveyn balıkların kendi omurgaları hakkında veri yoktur. Ayrıca üreme hücrelerinde oluşan bir değişiklik ebeveynin kendi vücudunu değil, o hücreden oluşan yavruyu etkiler. II söylenemez.
Sık yapılan hata: Yavrudaki bozukluğun ebeveynde de görüleceğini düşünmek. Üreme hücresindeki mutasyon, o hücreden gelişen yavruda ortaya çıkar.
Cevap B.`
},
{
  id: "fen-mm-313",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Evde bakılan bir kara kaplumbağasının kabuğundaki plakalar, yıllar içinde düz yerine tümsek biçiminde büyümüştür. Veteriner, bunun kaplumbağanın çok kuru bir ortamda tutulmasından ve fazla proteinli besinlerle beslenmesinden kaynaklandığını söylemiştir. Ortamın nemi artırılıp beslenme düzeltildikten sonra kabuğun eski tümsekli kısımları olduğu gibi kalmış, yeni büyüyen kısımları ise düz çıkmıştır. Bu kaplumbağanın yumurtalarından çıkan ve uygun koşullarda büyütülen yavruların kabukları da düzdür.
**Buna göre kabuktaki tümsekli büyümeyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kuru ortam, kaplumbağanın kabuk genlerini değiştirerek bu durumu oluşturmuştur.",
    "Tümsekli büyümeye genler değil, bakım koşulları ve beslenme yol açmıştır.",
    "Tümsekli büyüme çevre kaynaklıdır; koşullar düzelince eski tümsekler de zamanla düzleşir.",
    "Tümsekli kabuk özelliği, kaplumbağanın yavrularına kalıtım yoluyla aktarılır."
  ],
  dogru: 1,
  hatalar: [
    "Çevre etkisini gen değişikliği sanma: koşullar düzeltilince kabuğun yeni kısımları düz çıkmıştır ve yavruların kabukları düzdür; genler değişseydi bu olmazdı.",
    null,
    "Modifikasyonun her zaman geri döndüğünü sanma: tümsekli büyümenin çevre kaynaklı olduğu doğrudur, ancak soruda eski tümsekli kısımların olduğu gibi kaldığı, yalnızca yeni büyüyen kısımların düz çıktığı belirtilmiştir. Bir modifikasyon kalıcı iz bırakabilir ama yine de kalıtsal değildir.",
    "Modifikasyonu kalıtsal sanma: uygun koşullarda büyütülen yavruların kabukları düzdür; tümsekli büyüme yavrulara geçmemiştir."
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle oluşan, DNA'yı değiştirmeyen ve kalıtsal olmayan değişikliktir.
Adım 1: Tümsekli büyümenin nedeni kuru ortam ve fazla proteinli beslenmedir. Bunlar çevre koşullarıdır.
Adım 2: Koşullar düzeltilince kabuğun yeni büyüyen kısımları düz çıkmıştır. Uygun koşullarda büyütülen yavruların kabukları da düzdür. Değişiklik ortama bağlıdır ve yavrulara geçmemiştir; genler değişmemiştir. A ve D elenir.
Adım 3: Eski tümsekli kısımlar ise koşullar düzeldikten sonra da olduğu gibi kalmıştır. Demek ki oluşmuş tümsekler kendiliğinden düzleşmemiştir. C'nin ilk kısmı doğrudur ama ikinci kısmı bu gözlemle çelişir; C elenir. Bir modifikasyon kalıcı iz bırakabilir, ama bu onu kalıtsal yapmaz.
Adım 4: Çevre koşullarıyla oluşan, DNA'yı değiştirmeyen ve kalıtsal olmayan bu değişiklik bir modifikasyondur. Tümsekli büyümeye bakım koşulları ve beslenme yol açmıştır.
Sık yapılan hata: "Modifikasyon, ortam düzelince tamamen kaybolur." diye düşünmek. Bazı modifikasyonlarda ortam düzelince yalnızca yeni oluşan kısımlar etkilenir; önceden oluşmuş yapı olduğu gibi kalabilir. Belirleyici olan, DNA'nın değişip değişmediğidir.
Cevap B.`
},
{
  id: "fen-mm-314",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 3,
  soru: `Uzay istasyonunda altı ay kalan bir astronotun sağlık raporunda iki bilgi yer almaktadır. Birinci bilgiye göre astronotun kan hücrelerinde, uzaydaki kozmik ışınların yol açtığı DNA değişiklikleri bulunmuştur. İkinci bilgiye göre yer çekiminin çok az olduğu ortamda kasları az çalıştığı için astronotun kas kütlesi azalmıştır. Dünya'ya döndükten sonra düzenli egzersiz yapan astronotun kas kütlesi birkaç ay içinde eski düzeyine yaklaşmıştır.
Buna göre;
I. Kas kütlesindeki azalma, astronotun DNA'sındaki bir değişiklikten kaynaklanmıştır.
II. Kozmik ışınlar, mutasyona yol açabilen etkenler arasındadır.
III. Kan hücrelerindeki DNA değişiklikleri, astronotun ileride doğacak çocuklarına aktarılır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Modifikasyonu mutasyon sanma: kas kütlesi ortamın etkisiyle azalmış, egzersizle geri kazanılmıştır; DNA değişikliğinden kaynaklanmaz.",
    "Vücut hücresi mutasyonunu kalıtsal sanma: kan hücreleri vücut hücresidir; bu hücrelerdeki DNA değişiklikleri çocuklara geçmez.",
    "Farklı türdeki değişiklikleri aynı sanma: kas kaybı çevre kaynaklı ve geri dönebilen bir değişikliktir; kan hücrelerindeki mutasyon ise üreme hücresinde olmadığı için nesle geçmez."
  ],
  aciklama: `Adım 1 (II): Kozmik ışınlar bir tür radyasyondur ve astronotun kan hücrelerinin DNA'sında değişikliğe yol açmıştır. DNA'da kalıcı değişiklik mutasyondur; demek ki kozmik ışınlar mutasyona yol açabilen etkenlerdendir. II doğrudur.
Adım 2 (I): Kas kütlesi, kasların az çalıştığı ortamda azalmış, egzersizle yeniden artmıştır. Çevreye bağlı olarak oluşan ve geri dönebilen bu değişiklik bir modifikasyondur. I yanlıştır.
Adım 3 (III): Kan hücreleri vücut hücresidir. Vücut hücrelerindeki mutasyonlar sonraki nesle geçmez; nesle yalnız üreme hücrelerindeki mutasyonlar geçebilir. III yanlıştır.
Sık yapılan hata: Aynı kişide görülen iki değişikliği aynı türden saymak. Birinin nedeni DNA değişikliği, diğerinin nedeni ortam koşuludur.
Cevap A.`
},
{
  id: "fen-mm-315",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bağcı, aynı asmadan kestiği dallarla (çeliklerle) ürettiği fidanları, bağının güneş alan güney yamacına ve gölgede kalan kuzey yamacına dikmiştir. Bu yolla üretilen asmaların kalıtsal yapıları aynıdır. Yıllar sonra güney yamaçtaki üzümlerin daha tatlı, kuzey yamaçtakilerin ise daha ekşi olduğunu fark etmiştir. Bağcı, kuzey yamaçtaki bir asmadan kestiği çeliği güney yamaca diktiğinde, bu yeni asmanın üzümlerinin de tatlı olduğunu görmüştür.
**Bu gözlemlere göre üzümlerin tadındaki farkla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kuzey yamaçtaki asmaların hücrelerinde ekşiliğe yol açan mutasyon oluşmuştur.",
    "Üzümün tadını yalnızca güneş ışığı belirler; asmanın genleri tatta etkili değildir.",
    "Aynı genler, farklı ortam koşullarında farklı tatta üzüm oluşturmuştur.",
    "Ekşi üzüm özelliği, kuzey yamaçtaki asmalardan alınan çeliklere geçer."
  ],
  dogru: 2,
  hatalar: [
    "Çevre etkisini mutasyon sanma: kuzey yamaçtaki asmadan alınan çelik güneşli yamaçta tatlı üzüm vermiştir; kalıcı bir DNA değişikliği yoktur.",
    "Aşırı genelleme: gözlemlerde asmaların hepsinin genleri aynıdır, bu yüzden genlerin tada etkisi sınanmamıştır. Üstelik modifikasyon genlerin izin verdiği sınırlar içinde oluşur; tadı hem genler hem ortam belirler.",
    null,
    "Veriyle çelişen yargıyı seçme: kuzey yamaçtan alınan çelik güney yamaçta tatlı üzüm vermiştir; ekşilik çeliğe geçmemiştir."
  ],
  aciklama: `Adım 1: Asmaların hepsi aynı asmanın çeliklerinden üretildiği için genleri aynıdır. Farklı olan, yamaçların aldığı güneş ışığıdır.
Adım 2: Güneş alan yamaçtaki üzümler daha tatlıdır. Kuzey yamaçtaki asmadan alınan çelik güneşli yamaçta tatlı üzüm vermiştir. Tat farkı ortamdan kaynaklanır; A ve D elenir.
Adım 3: Aynı genlerin farklı ortamlarda farklı sonuç vermesi modifikasyondur. Modifikasyon DNA'yı değiştirmez. C doğrudur.
Adım 4: Bu gözlemlerde bütün asmaların genleri aynıdır; genlerin tada etkisi sınanmamıştır. "Tadı yalnızca güneş belirler." demek aşırı genellemedir. Modifikasyon genlerin izin verdiği sınırlar içinde oluşur; farklı çeşit üzümler aynı güneşte bile farklı tatta olabilir. B elenir.
Sık yapılan hata: Aynı türden iki canlı arasındaki her farkı genlere bağlamak. Genler aynı olduğu hâlde ortam farklıysa özellikler de farklı olabilir.
Cevap C.`
},
{
  id: "fen-mm-316",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir çiftçi, uzun boylu bezelyelerin yetiştiği tarlasının kurak ve taşlık bir köşesinde, boyu diğerlerinin yarısı kadar olan tek bir bezelye bitkisi fark etmiştir. Çiftçi, bu bitkinin kısa boyunun bir mutasyondan mı yoksa ortam koşullarından mı kaynaklandığını anlamak istemiştir. Bezelye bitkileri kendi kendine tozlaşabildiği için çiftçi, kısa boylu bitkinin kendi kendine tozlaşmasıyla oluşan tohumları ve tarladaki uzun boylu bir bitkinin tohumlarını ertesi yıl verimli ve sulak bir tarlada yan yana ekmiştir. İki gruptan çıkan bitkilerin hepsi uzun boylu olmuştur.
Buna göre;
I. İlk yıl görülen kısa boy, kalıtsal olmayan bir değişikliktir.
II. Kurak toprak, kısa boylu bitkinin boy genlerinde kalıcı bir değişikliğe yol açmıştır.
III. İki grup tohumun ertesi yıl aynı tarlada yetiştirilmesi, boy farkının genlerden mi çevreden mi kaynaklandığını ayırt etmeyi sağlamıştır.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: iki grup tohumun aynı koşullarda yetiştirilmesi çevre farkını ortadan kaldırır; böylece farkın kalıtsal olup olmadığı anlaşılır.",
    null,
    "I'i yanlış, II'yi doğru sayma: kısa bitkinin kendi tohumlarından çıkan bitkilerin hepsi uzun olmuştur; kısa boy yavrulara geçmediği için kalıtsal bir gen değişikliği yoktur.",
    "II'yi doğru sayma: boy genlerinde tohumlara geçen bir değişiklik olsaydı, kendi kendine tozlaşmayla oluşan yavruların bir kısmı ya da hepsi kısa boylu olurdu."
  ],
  aciklama: `Adım 1: Kısa boylu bitki kurak ve taşlık bir köşede, diğerleri daha iyi koşullarda büyümüştür. Yani bitkiler farklı çevrelerde yetişmiştir.
Adım 2: Kısa bitki kendi kendine tozlaştığı için tohumları yalnızca bu bitkinin genlerini taşır. Kısa boy tohumlara geçen bir gen değişikliğinden kaynaklansaydı, bu tohumlardan çıkan bitkilerin bir kısmı ya da hepsi kısa boylu olurdu.
Adım 3 (I ve II): Aynı tarlada yetişen iki grubun bitkilerinin hepsi uzun boylu olmuştur. Kısa boy yavrulara geçmemiştir, yani kalıtsal değildir. I kesinlikle doğrudur. Boy genlerinde kalıcı bir değişiklik olduğunu gösteren bir veri yoktur; II kesin değildir.
Adım 4 (III): İki grubu aynı ortamda yetiştirmek çevrenin etkisini eşitler. Fark sürerse genler, kaybolursa çevre sorumludur. III doğrudur.
Sık yapılan hata: Kuraklık gibi bir ortam koşulunun genleri değiştirdiğini düşünmek. Kuraklık bitkinin büyümesini etkiler; bu değişiklik tohumlara geçmez.
Cevap B.`
},
{
  id: "fen-mm-317",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırma bahçesindeki bezelye bitkilerinin hepsi, çiçek rengi bakımından saf döl mor çiçeklidir. Bezelyede mor çiçek geni, beyaz çiçek genine baskındır. Bir gün bu bitkilerden birinin polen hücrelerinden birinde, çiçek rengini belirleyen gende mutasyon oluşmuş ve bu hücrede çekinik bir beyaz çiçek geni ortaya çıkmıştır. Bu polen hücresinin döllediği yumurta hücresinden gelişen tohumdan "P" adı verilen bir bitki yetişmiştir. P büyüyünce çiçekleri, kendi poleniyle değil, bahçedeki saf döl mor çiçekli başka bir bitkinin polenleriyle tozlaştırılmıştır. Bu tozlaşmayla oluşan tohumlar ekilmiş ve yavru bitkiler elde edilmiştir. Bahçedeki bütün bitkiler aynı koşullarda yetiştirilmektedir.
**Buna göre P ve yavru bitkilerle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "P beyaz çiçeklidir; bu özelliği yavru bitkilerin hepsine aynen aktarır.",
    "P mor çiçeklidir; yavru bitkilerin hiçbiri beyaz çiçek genini taşıyamaz.",
    "P mor çiçeklidir; yavru bitkilerin bir kısmı beyaz çiçek genini taşıyabilir.",
    "P beyaz çiçeklidir; yavru bitkilerin yaklaşık yarısı beyaz çiçekli olur."
  ],
  dogru: 2,
  hatalar: [
    "Çekinik geni baskın gibi düşünme: P mutasyonlu genden yalnız bir tane taşır; çekinik gen tek başına etkisini gösteremez, P mor çiçeklidir.",
    "Mutasyonun nesle geçmediğini sanma: P mutasyonlu geni onu oluşturan polen hücresinden almıştır; bu gen P'nin bütün hücrelerinde vardır ve yavrularına geçebilir.",
    null,
    "Melez bitkinin görünüşünü yanlış belirleme: P'de bir mor, bir beyaz çiçek geni vardır; mor baskın olduğu için P mor çiçeklidir. Eşi saf döl mor çiçekli olduğu için beyaz çiçekli yavru oluşmaz."
  ],
  aciklama: `Mor çiçek genini M, mutasyonla oluşan çekinik beyaz çiçek genini m ile gösterelim.
Adım 1: Mutasyon bir polen hücresinde oluşmuştur; bu hücre m taşır. Yumurta hücresi saf döl mor çiçekli bir bitkiden geldiği için M taşır. P'nin genotipi Mm'dir.
Adım 2: P'nin bütün hücreleri tek bir zigotun bölünmesiyle oluştuğu için hepsi Mm taşır. P'nin üreme hücrelerinin bir kısmı M, bir kısmı m taşır.
Adım 3: M baskın olduğu için P mor çiçeklidir.
Adım 4: Mm × MM çaprazlamasında yavruların yaklaşık yarısı MM, yarısı Mm olur. Hepsi mor çiçeklidir; Mm olanlar beyaz çiçek genini taşır.
Sağlama: Beyaz çiçekli (mm) bir yavru için iki ebeveynin de m vermesi gerekir. Eş MM olduğu için bu tozlaşmadan beyaz çiçekli yavru çıkmaz.
Sık yapılan hata: Mutasyonun ortaya çıktığı ilk bireyde hemen görüleceğini düşünmek. Çekinik bir mutasyon birkaç kuşak boyunca gizli kalabilir.
Cevap C.`
},
{
  id: "fen-mm-318",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Himalaya tavşanlarında kulak, burun, ayak ve kuyruk uçlarındaki tüyler normal oda sıcaklığında siyah, vücudun geri kalanındaki tüyler beyaz çıkar. Bir yetiştirici, anne ve babası bu görünüşte olan Himalaya tavşanı yavrularını doğumdan itibaren sıcaklığı 30 °C'nin üzerinde tutulan bir odada büyütmüştür. Bu yavruların vücut uçları da dâhil bütün tüyleri beyaz çıkmıştır. Yetiştirici daha sonra bu tavşanlardan birinin kulağındaki tüyleri tıraş etmiş ve tavşanı serin bir odaya almıştır. Kulakta yeni çıkan tüylerin siyah olduğu gözlenmiştir.
Buna göre;
I. Sıcak odada büyütülen yavrularda, vücut uçlarında siyah tüy oluşturan genler kaybolmuştur.
II. Bu tavşanlarda vücut uçlarındaki tüylerin beyaz olması, yavrularına aktarılan bir özellik değildir.
III. Tavşanlarda tüy renginin ortaya çıkışında hem genler hem de ortam sıcaklığı etkilidir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Modifikasyonu genlerin kaybı sanma: serin odaya alınan tavşanın kulağında yeniden siyah tüy çıkmıştır; siyah tüy oluşturan genler duruyor. I yanlıştır; II ve III ise doğrudur.",
    "Genlerin kaybolduğunu sanma: I yanlıştır, çünkü serin ortamda kulakta yeniden siyah tüy çıkmıştır. III ise doğrudur.",
    null,
    "I'i doğru sayma: sıcaklık genleri yok etmez, yalnızca genlerin etkisini göstermesini engeller. Serin odada siyah tüyün yeniden çıkması bunu kanıtlar."
  ],
  aciklama: `Adım 1 (I): Sıcak odada bütün tüyleri beyaz çıkan tavşanın kulağında, serin odada yeniden siyah tüy çıkmıştır. Siyah tüy oluşturan genler kaybolmamıştır. I yanlıştır.
Adım 2 (III): Aynı genler sıcak ortamda beyaz, serin ortamda siyah tüy oluşturmaktadır. Tüy rengini hem genler hem de sıcaklık belirler. III doğrudur.
Adım 3 (II): Sıcak odada vücut uçlarındaki tüylerin beyaz çıkması bir modifikasyondur; DNA'yı değiştirmez. Yavrulara ebeveynlerin görünüşü değil, değişmemiş genleri geçer. Bu yüzden beyaz uç özelliği yavrulara aktarılmaz. II doğrudur.
Sık yapılan hata: Ebeveynin görünüşünün yavruya geçtiğini düşünmek. Yavruya görünüş değil gen geçer; modifikasyonla oluşan görünüş aktarılmaz.
Cevap C.`
},
{
  id: "fen-mm-319",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, üç farklı canlıda gördüğü K, L ve M değişikliklerini iki soruya göre incelemiş ve sonuçları tabloya yazmıştır. Bunun için her canlıyı, değişiklik ortaya çıkmadan önce yaşadığı ortama geri götürüp bir süre gözlemiştir. Ayrıca her canlının yavrularını, bu değişikliğin görülmediği canlıların yetiştiği normal ortamda büyütmüştür. Araştırmacı, bir değişikliğe "mutasyon" adını yalnızca elindeki veriler bunu kesin olarak gösterdiğinde vermek istemektedir; verilerin birden fazla açıklamaya izin verdiği durumlarda karar vermeyecektir.
**Buna göre K, L ve M değişikliklerinden hangileri kesinlikle mutasyondur?**`,
  gorsel: `<table class="tablo"><tr><th>Değişiklik</th><th>Canlı eski ortamına dönünce değişiklik ortadan kalktı mı?</th><th>Değişiklik canlının yavrularında görüldü mü?</th></tr><tr><td>K</td><td>Hayır</td><td>Evet</td></tr><tr><td>L</td><td>Hayır</td><td>Hayır</td></tr><tr><td>M</td><td>Evet</td><td>Hayır</td></tr></table>`,
  secenekler: ["Yalnız K", "K ve L", "K ve M", "K, L ve M"],
  dogru: 0,
  hatalar: [
    null,
    "Kalıcı olan her değişikliği mutasyon sanma: L yavrulara geçmemiştir; vücut hücresinde oluşmuş bir mutasyon da olabilir, uzun süren bir modifikasyon da. Kesin karar verilemez.",
    "Geri dönen değişikliği mutasyon sayma: M, canlı eski ortamına dönünce ortadan kalkmıştır; DNA'daki kalıcı bir değişiklik bu şekilde kaybolmaz.",
    "Tabloyu kullanmadan her değişikliği mutasyon sayma: M ortam değişince kaybolmuştur, bu yüzden mutasyon olamaz; L için de kesin karar verilemez."
  ],
  aciklama: `Mutasyon DNA'da kalıcı değişikliktir; üreme hücrelerinde oluşursa yavrulara geçebilir, vücut hücrelerinde oluşursa geçmez. Modifikasyon ise çevre kaynaklıdır ve kalıtsal değildir; çoğu zaman ortam değişince kaybolur, ama bazıları ömür boyu sürebilir.
Adım 1 (K): Değişiklik, normal ortamda büyüyen yavrularda da görülmüştür; yani kalıtsaldır. Modifikasyon kalıtsal olmadığına göre K kesinlikle mutasyondur.
Adım 2 (M): Canlı eski ortamına dönünce değişiklik kaybolmuştur. Mutasyon kalıcı olduğu için bu şekilde kaybolmaz. M bir modifikasyondur.
Adım 3 (L): Değişiklik kalıcıdır ama yavrulara geçmemiştir. Bu, vücut hücresinde oluşmuş bir mutasyon olabilir; yıllarca budanarak küçük tutulan bir ağaçtaki gibi uzun süren bir modifikasyon da olabilir. L için "kesinlikle mutasyondur" denemez.
Sık yapılan hata: "Kalıcıysa mutasyondur." ya da "Yavruya geçmediyse mutasyon değildir." demek. Bu iki kural da her durumda doğru değildir.
Cevap A.`
},
{
  id: "fen-mm-320",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Tek yumurta ikizleri Yusuf ile Yiğit, tek bir zigotun ikiye ayrılmasıyla oluştukları için doğduklarında bütün hücreleri aynı DNA'yı taşımaktadır. Yusuf yıllardır çok yüksek bir dağ köyünde dağ rehberi olarak çalışmaktadır. Sağlık kontrolünde Yusuf'un kanındaki alyuvar sayısının, deniz kıyısındaki bir şehirde yaşayan Yiğit'inkinden fazla olduğu görülmüştür. Doktor, havadaki oksijenin az olduğu yüksek yerlerde yaşayan kişilerde vücudun daha fazla alyuvar ürettiğini belirtmiştir. Ayrıca Yusuf'un yüzünde, güneşin morötesi ışınlarının deri hücrelerinin DNA'sında yol açtığı bir değişiklik sonucu oluşmuş bir leke bulunmuştur.
Buna göre;
I. Yusuf şehre taşınıp orada yaşamaya başlarsa alyuvar sayısı zamanla azalabilir.
II. Yusuf'un yüzündeki leke DNA'daki kalıcı bir değişiklikten kaynaklanır, alyuvar sayısındaki artış ise kaynaklanmaz.
III. Yusuf'un bütün hücrelerindeki DNA, bugün de Yiğit'in hücrelerindeki DNA ile tamamen aynıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: leke, deri hücrelerindeki DNA değişikliğinden yani mutasyondan; alyuvar artışı ise yüksek yerin etkisinden yani modifikasyondan kaynaklanır.",
    null,
    "Doğumdaki durumu bugüne taşıma: Yusuf'un bazı deri hücrelerinde DNA sonradan değişmiştir; bu yüzden bütün hücrelerindeki DNA artık Yiğit'inkiyle aynı değildir.",
    "Modifikasyonun geri dönebileceğini gözden kaçırma: alyuvar artışı ortama bağlı bir değişikliktir ve ortam değişince azalabilir; I doğrudur. III ise yanlıştır."
  ],
  aciklama: `Adım 1 (I): Alyuvar sayısındaki artış, oksijeni az olan ortamın etkisiyle oluşmuştur; DNA değişmemiştir. Bu bir modifikasyondur ve ortam değişince zamanla azalabilir. I doğrudur.
Adım 2 (II): Leke, morötesi ışınların deri hücrelerinin DNA'sında yol açtığı kalıcı değişiklikten, yani bir mutasyondan kaynaklanır. Alyuvar artışı ise DNA değişikliğinden kaynaklanmaz. II doğrudur.
Adım 3 (III): İkizlerin DNA'sı doğduklarında aynıdır. Ancak Yusuf'un bazı deri hücrelerinde sonradan mutasyon oluşmuştur; bu hücrelerdeki DNA artık farklıdır. III yanlıştır.
Sık yapılan hata: Tek yumurta ikizlerinin DNA'sının ömür boyu her hücrede aynı kalacağını düşünmek. Vücut hücrelerinde sonradan oluşan mutasyonlar yalnızca o hücrelerde ve onlardan bölünerek oluşan hücrelerde bulunur.
Cevap B.`
},
{
  id: "fen-mm-321",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, tarlalarda kullanılan X ve Y böcek ilaçlarının nohut bitkisinde kalıtsal değişikliğe yol açıp açmadığını araştırmıştır. Kendi kendine tozlaşabilen ve kalıtsal yapıları aynı olan nohut bitkilerini üç gruba ayırmıştır. Bir ay boyunca 1. gruba hiç ilaç uygulamamış, 2. gruptaki bitkilere X, 3. gruptaki bitkilere Y ilacı püskürtmüştür. Işık, su ve sıcaklık bütün gruplarda aynıdır. Daha sonra her gruptaki bitkilerin tohumlarını, ilaç kullanılmamış aynı tarlaya ekmiş ve çıkan yavru bitkileri incelemiştir. Gözlemler tabloda verilmiştir. Araştırmacı ayrıca 3. gruptaki kıvrık yapraklı yavruların tohumlarından çıkan bitkilerde de kıvrık yaprak görüldüğünü not etmiştir.
**Bu sonuçlara göre aşağıdakilerden hangisi kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Grup</th><th>Uygulanan ilaç</th><th>Ebeveyn bitkilerde gözlenen</th><th>Yavru bitkilerde gözlenen</th></tr><tr><td>1.</td><td>Yok</td><td>Değişiklik yok</td><td>300 yavrunun hepsi normal</td></tr><tr><td>2.</td><td>X</td><td>Yapraklarda sarı lekeler</td><td>300 yavrunun hepsi normal</td></tr><tr><td>3.</td><td>Y</td><td>Değişiklik yok</td><td>300 yavrunun 21'inde kıvrık yaprak</td></tr></table>`,
  secenekler: [
    "Y ilacı, bu deneyde sonraki kuşaklara aktarılan bir DNA değişikliğine yol açmıştır.",
    "X ilacı, ebeveyn bitkilerin yaprak hücrelerinin DNA'sında değişikliğe yol açmıştır.",
    "Y ilacı, ebeveynlerin görünüşünü değiştirmediğine göre DNA'larını da değiştirmemiştir.",
    "Kıvrık yaprak, 3. grubun yavrularının yetiştiği tarladaki koşullardan kaynaklanmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Görünen hasarı kesin mutasyon sanma: X'in yol açtığı lekeler yavrulara geçmemiştir ve yaprak hücreleri vücut hücresidir. Lekeler yaprak hücrelerinde oluşmuş bir mutasyon da olabilir, ilacın yol açtığı bir modifikasyon da; DNA'nın değiştiği kesin olarak söylenemez.",
    "Görünüşten DNA hakkında karar verme: Y uygulanan ebeveynlerde görünür bir değişiklik olmasa da yavrularında kuşaktan kuşağa geçen kıvrık yaprak ortaya çıkmıştır. Üreme hücrelerindeki bir DNA değişikliği, ebeveynin görünüşünü değiştirmeden yavruda ortaya çıkabilir.",
    "Veriyle çelişen yargıyı seçme: üç grubun yavruları aynı tarlada yetişmiştir, ama kıvrık yaprak yalnız 3. grubun yavrularında görülmüş ve sonraki kuşağa da geçmiştir. Ortam koşulları bu farkı açıklamaz."
  ],
  aciklama: `Mutasyon DNA'da oluşan kalıcı değişikliktir; üreme hücrelerinde oluşursa yavrulara geçebilir, vücut hücrelerinde oluşursa geçmez. Modifikasyon ise kalıtsal değildir.
Adım 1: Üç grubun yavruları aynı ilaçsız tarlada yetişmiştir. Yavrular arasında görülen bir fark ortamla açıklanamaz; D elenir.
Adım 2 (3. grup): Y uygulanan ebeveynlerde görünür bir değişiklik yoktur, ama yavrularının bir kısmı kıvrık yapraklıdır ve bu özellik bir sonraki kuşakta da görülmüştür. Kuşaktan kuşağa geçen bir özellik DNA'daki bir değişiklikten kaynaklanır. Bu değişiklik ebeveynlerin üreme hücreleriyle yavrulara ulaşmıştır; ebeveynlerin görünüşünün değişmemesi bunu engellemez. C elenir.
Adım 3: İlaç uygulanmayan 1. grupta kıvrık yapraklı yavru çıkmamıştır. Öyleyse bu değişiklik Y ilacıyla ilişkilidir. A kesinlikle söylenebilir.
Adım 4 (2. grup): X ilacı ebeveynlerin yapraklarında leke oluşturmuş, ama lekeler yavrulara geçmemiştir. Yaprak hücreleri vücut hücresidir; buradaki bir mutasyon da yavruya geçmezdi. Lekelerin mutasyon mu modifikasyon mu olduğu bu verilerle anlaşılamaz; yaprak hücrelerinin DNA'sının değiştiği kesin olarak söylenemez. B elenir.
Sık yapılan hata: Ebeveynde görünen değişikliği kalıtsal, görünmeyeni kalıtsal olmayan sanmak. Bir değişikliğin yavruya geçip geçmeyeceğini görünüş değil, DNA değişikliğinin üreme hücrelerinde bulunup bulunmadığı belirler.
Cevap A.`
},
{
  id: "fen-mm-322",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen öğretmeni, canlılarda görülen altı değişikliği tabloya yazmış ve öğrencilerinden bu değişikliklerden hangilerinin sonraki nesle aktarılabileceğini belirlemelerini istemiştir. Öğretmen, değişiklik yavruda henüz görülmemiş olsa bile aktarılma olasılığı varsa "aktarılabilir" sayılacağını söylemiştir.
**Buna göre tablodaki değişikliklerden kaç tanesi sonraki nesle aktarılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Değişiklik</th></tr><tr><td>1</td><td>Bir güvercinin üreme hücresinde oluşan ve yavrusunda ters kıvrık tüyler olarak görülen DNA değişikliği</td></tr><tr><td>2</td><td>Bol ışık alan bir domates bitkisinin gölgedekinden daha fazla meyve vermesi</td></tr><tr><td>3</td><td>Toprağına kireç katılan bir ortancanın pembe çiçek açması</td></tr><tr><td>4</td><td>Bir köpeğin karaciğer hücrelerinde zehirli bir kimyasalın yol açtığı DNA değişikliği</td></tr><tr><td>5</td><td>Radyasyona maruz kalan bir buğday bitkisinin çiçeklerindeki üreme hücrelerinde oluşan DNA değişikliği</td></tr><tr><td>6</td><td>Bir kazada kanadı kırılan bir kuşun kanadının iyileştikten sonra eğri kalması</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Yalnızca yavruda görülmüş olanı sayma: 5. değişiklik henüz yavruda görülmese de üreme hücrelerinde oluştuğu için sonraki nesle aktarılabilir.",
    null,
    "Vücut hücresindeki DNA değişikliğini sayma: 4. değişiklik karaciğer hücrelerindedir; vücut hücresindeki mutasyon sonraki nesle aktarılmaz.",
    "Kalıcı görünen her değişikliği kalıtsal sanma: 4. ve 6. değişiklikler kalıcıdır ama üreme hücrelerinde değildir; sonraki nesle aktarılmaz."
  ],
  aciklama: `Sonraki nesle yalnızca üreme hücrelerinin DNA'sındaki değişiklikler aktarılabilir. Modifikasyonlar, vücut hücresi mutasyonları ve yaralanmalar aktarılmaz.
Adım 1: 1. değişiklik üreme hücresinin DNA'sındadır ve yavruda görülmüştür. Aktarılabilir.
Adım 2: 5. değişiklik de üreme hücrelerinin DNA'sındadır. Yavruda henüz görülmemiş olsa da aktarılabilir.
Adım 3: 4. değişiklik bir mutasyondur ama karaciğer hücrelerinde, yani vücut hücrelerindedir. Aktarılmaz.
Adım 4: 2. ve 3. değişiklikler ışık ve toprak gibi çevre koşullarıyla oluşan modifikasyonlardır. 6. değişiklik bir yaralanmadır; DNA'yı değiştirmez. Bu üçü aktarılmaz.
Sağlama: Aktarılabilenler 1 ve 5'tir; toplam 2 değişiklik. İkisinin ortak yanı, DNA değişikliğinin üreme hücresinde bulunmasıdır.
Cevap B.`
},
{
  id: "fen-mm-323",
  kazanim: "F.8.2.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tarım lisesinin kümesindeki tavukların bacakları kuşaklardır çıplaktır, yani bacaklarında tüy yoktur. Bir yıl, sıcaklık ayarı birkaç gün bozulan kuluçka makinesinden çıkan civcivler arasında bacakları tüylü olan tek bir erkek civciv görülmüştür. Bazı öğrenciler bunun sıcaklık bozukluğundan kaynaklandığını düşünmüştür. Öğretmen, bu civciv büyüyüp horoz olunca onu saf döl çıplak bacaklı tavuklarla çiftleştirmiştir (1. grup). Karşılaştırma için saf döl çıplak bacaklı başka bir horozu da yine saf döl çıplak bacaklı tavuklarla çiftleştirmiştir (2. grup). İki grubun yumurtaları, ayarı düzgün çalışan aynı kuluçka makinesinde çıkarılmış; civcivler aynı kümeste aynı yemle büyütülmüştür. Sonuçlar tabloda verilmiştir.
Buna göre;
I. Tüylü bacaklı horozdaki değişiklik, makinedeki sıcaklık bozukluğundan kaynaklanan kalıtsal olmayan bir değişikliktir.
II. Bacakta tüy oluşmasına yol açan gen, tüylü bacaklı horozdan yavrularına aktarılmıştır.
III. 1. gruptaki civcivlerin bir kısmının bacaklarının tüylü, bir kısmının çıplak olması ortam farkından kaynaklanmamıştır.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Grup</th><th>Horoz</th><th>Tavuklar</th><th>Çıplak bacaklı civciv</th><th>Tüylü bacaklı civciv</th></tr><tr><td>1.</td><td>Tüylü bacaklı horoz</td><td>Saf döl çıplak bacaklı</td><td>31</td><td>29</td></tr><tr><td>2.</td><td>Saf döl çıplak bacaklı</td><td>Saf döl çıplak bacaklı</td><td>60</td><td>0</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: 1. gruptaki civcivlerin hepsi aynı makinede çıkmış, aynı kümeste aynı yemle büyümüştür. Ortamları aynı olduğu hâlde bir kısmının bacakları tüylü, bir kısmınınki çıplaktır; bu fark ortamdan kaynaklanamaz. III de doğrudur.",
    "Yavruların hepsinde görülmeyen özelliği aktarılmamış sanma: tüylü bacaklı civcivler yalnızca tüylü bacaklı horozun yavruları arasında çıkmıştır; aynı koşullardaki 2. grupta hiç yoktur. Bu özelliğe yol açan gen horozdan yavrularına geçmiştir; II de doğrudur.",
    "Sıcaklık bozukluğunu neden sanma: tüylü bacak, ayarı düzgün çalışan makinede çıkan yavrulara da geçmiştir. Kalıtsal olmayan bir değişiklik yavrulara aktarılmaz; I yanlıştır, II ise doğrudur.",
    null
  ],
  aciklama: `Modifikasyon çevre etkisiyle oluşur ve yavrulara aktarılmaz. Yavrulara aktarılan yeni bir özellik ise DNA'daki bir değişiklikten, yani mutasyondan kaynaklanır.
Adım 1 (III): 1. gruptaki civcivlerin hepsi ayarı düzgün çalışan aynı makinede çıkmış, aynı kümeste aynı yemle büyümüştür. Ortamları aynı olduğu hâlde 29'unun bacakları tüylü, 31'ininki çıplaktır. Bu fark ortamdan kaynaklanamaz. III doğrudur.
Adım 2 (II): Aynı koşullarda büyüyen 2. gruptaki 60 civcivin hiçbirinin bacakları tüylü değildir. Tüylü bacaklı civcivler yalnızca tüylü bacaklı horozun yavruları arasında çıkmıştır. Aradaki fark babadan gelen genden kaynaklanır; bu gen horozdan yavrularına aktarılmıştır. II doğrudur.
Adım 3 (I): Tüylü bacak, ayarı düzgün çalışan makinede çıkan yavrulara da geçmiştir. Kalıtsal olmayan bir değişiklik yavrulara aktarılmaz. Öyleyse horozdaki değişiklik, sıcaklık bozukluğundan kaynaklanan bir modifikasyon olamaz. I yanlıştır.
Adım 4: Kümeste kuşaklardır görülmeyen ve yavrulara aktarılan bir özelliğin tek bir civcivde ortaya çıkması, bu civcivi oluşturan üreme hücrelerinden birinde oluşan bir mutasyonla açıklanabilir.
Sık yapılan hata: Bir özellik yavruların hepsinde görülmedi diye onun kalıtsal olmadığını düşünmek. Her yavru, anne ve babasının genlerinin yalnızca bir kısmını alır; bu yüzden kalıtsal bir özellik yavruların yalnızca bir kısmında görülebilir.
Cevap D.`
},
{
  id: "fen-mm-324",
  kazanim: "F.8.2.3.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tarım öğretmeni, mısırın A ve B çeşitleriyle bir deney yapmıştır. Her çeşidin tohumları, kendi içinde kalıtsal yapı bakımından aynı olan bitkilerden elde edilmiştir. Öğretmen her çeşitten beşer grup oluşturmuş, her gruba farklı miktarda gübre vermiş ve ışık, su, sıcaklık gibi diğer koşulları bütün gruplarda aynı tutmuştur. Hasat zamanında ölçülen ortalama bitki boyları grafikte gösterilmiştir.
**Bu deneyin sonuçlarına göre aşağıdakilerden hangisi kesinlikle söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 540 340" role="img" aria-label="Gübre miktarı ile A ve B mısır çeşitlerinin ortalama boyu grafiği">
<text x="290" y="20" text-anchor="middle" font-size="15" fill="currentColor">Grafik: Gübre miktarı ve ortalama bitki boyu</text>
<line x1="80" y1="280" x2="520" y2="280" stroke="currentColor" stroke-width="2"/>
<line x1="80" y1="280" x2="80" y2="55" stroke="currentColor" stroke-width="2"/>
<g stroke="currentColor" stroke-width="1" opacity="0.3">
<line x1="80" y1="225" x2="520" y2="225"/><line x1="80" y1="170" x2="520" y2="170"/><line x1="80" y1="115" x2="520" y2="115"/><line x1="80" y1="60" x2="520" y2="60"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="end">
<text x="72" y="285">0</text><text x="72" y="230">50</text><text x="72" y="175">100</text><text x="72" y="120">150</text><text x="72" y="65">200</text>
</g>
<polyline points="130,148 220,115 310,93 400,82 490,82" fill="none" stroke="var(--vurgu)" stroke-width="3"/>
<g fill="var(--vurgu)">
<circle cx="130" cy="148" r="6"/><circle cx="220" cy="115" r="6"/><circle cx="310" cy="93" r="6"/><circle cx="400" cy="82" r="6"/><circle cx="490" cy="82" r="6"/>
</g>
<polyline points="130,192 220,170 310,159 400,159 490,159" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/>
<g fill="var(--vurgu2)">
<rect x="124" y="186" width="12" height="12"/><rect x="214" y="164" width="12" height="12"/><rect x="304" y="153" width="12" height="12"/><rect x="394" y="153" width="12" height="12"/><rect x="484" y="153" width="12" height="12"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="middle">
<text x="130" y="136">120</text><text x="220" y="103">150</text><text x="310" y="81">170</text><text x="400" y="70">180</text><text x="490" y="70">180</text>
<text x="130" y="216">80</text><text x="220" y="194">100</text><text x="310" y="183">110</text><text x="400" y="183">110</text><text x="490" y="183">110</text>
<text x="130" y="302">0</text><text x="220" y="302">1</text><text x="310" y="302">2</text><text x="400" y="302">3</text><text x="490" y="302">4</text>
<text x="300" y="328">Gübre miktarı (birim)</text>
</g>
<text x="22" y="170" font-size="14" fill="currentColor" text-anchor="middle" transform="rotate(-90 22 170)">Ortalama boy (cm)</text>
<line x1="330" y1="42" x2="360" y2="42" stroke="var(--vurgu)" stroke-width="3"/>
<text x="366" y="47" font-size="14" fill="currentColor">A çeşidi</text>
<line x1="436" y1="42" x2="466" y2="42" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/>
<text x="472" y="47" font-size="14" fill="currentColor">B çeşidi</text>
</svg>`,
  secenekler: [
    "Gübre miktarı artırılmaya devam edilirse A çeşidinin boyu da artmaya devam eder.",
    "İki çeşidin genlerinin belirlediği boy sınırı aynıdır; B çeşidi gübreyle A kadar uzayabilir.",
    "En çok gübre verilen A bitkilerinin tohumları, gübresiz toprakta da en uzun boyu verir.",
    "Gübrenin yol açtığı boy artışı, her çeşitte genlerin belirlediği bir sınırda durmuştur."
  ],
  dogru: 3,
  hatalar: [
    "Grafiği eksik okuma: A çeşidinde 3 ve 4 birim gübrede boy 180 cm'de kalmıştır; gübre artsa da boy artmaya devam etmemiştir.",
    "Grafiği yanlış yorumlama: B çeşidi 2, 3 ve 4 birim gübrede 110 cm'de kalmış, aynı gübre miktarlarında A 180 cm'ye ulaşmıştır. İki çeşidin genlerinin belirlediği sınır farklıdır; çevre bu sınırı aşamaz.",
    "Modifikasyonu kalıtsal sanma: gübreyle oluşan boy artışı DNA'yı değiştirmez; bu tohumlardan gübresiz toprakta çıkan bitkiler, gübresiz gruptaki bitkiler gibi büyür.",
    null
  ],
  aciklama: `Modifikasyon, genlerin izin verdiği sınırlar içinde oluşur. Çevre koşulu ne kadar iyileştirilirse iyileştirilsin canlı, genlerinin belirlediği sınırı aşamaz.
Adım 1: A çeşidinde gübre 0'dan 3 birime çıkarken ortalama boy 120 cm'den 180 cm'ye çıkmış, 4 birimde yine 180 cm'de kalmıştır. Gübre arttıkça boy artmaya devam etmemiştir; A elenir.
Adım 2: B çeşidinde boy 80 cm'den 110 cm'ye çıkmış, 2, 3 ve 4 birim gübrede 110 cm'de kalmıştır.
Adım 3: İki çeşitte de artış bir noktada durmuştur ve bu sınır iki çeşitte farklıdır. Diğer koşullar aynı olduğuna göre sınırı çeşitlerin genleri belirler. D doğrudur. Sınırlar farklı olduğu için B çeşidi ne kadar gübre alırsa alsın A kadar uzayamaz; B elenir.
Adım 4: Gübreyle oluşan boy artışı bir modifikasyondur ve tohumlara geçmez; C yanlıştır.
Sağlama: En çok gübre verilen B bitkileri (110 cm), gübresiz A bitkilerinin (120 cm) boyuna bile ulaşamamıştır.
Cevap D.`
},
{
  id: "fen-mm-325",
  kazanim: "F.8.2.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Soy ağacında bir ailenin üç kuşağında altı parmaklılık özelliğinin görülüşü gösterilmiştir. Bu ailede altı parmaklılık baskın bir genle ortaya çıkmaktadır; bu geni taşıyan herkeste özellik görülür. 1. kuşaktaki anne ve babada, onların anne babalarında ve diğer akrabalarında bu özellik görülmemiştir. Yani altı parmaklılık bu ailede ilk kez Kerem'de ortaya çıkmıştır.
Buna göre;
I. Kerem'in çocuklarında görülen altı parmaklılık kalıtsal bir özelliktir.
II. Kerem'in anne ve babasının vücut hücrelerinde altı parmaklılığa yol açan gen bulunur.
III. Kerem'in bundan sonra doğacak her çocuğu altı parmaklı olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Üç kuşaklı soy ağacı">
<g font-size="14" fill="currentColor">
<text x="8" y="65">1. kuşak</text><text x="8" y="135">2. kuşak</text><text x="8" y="235">3. kuşak</text>
</g>
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="260" y1="60" x2="340" y2="60"/><line x1="300" y1="60" x2="300" y2="110"/>
<line x1="320" y1="130" x2="400" y2="130"/><line x1="360" y1="130" x2="360" y2="185"/>
<line x1="210" y1="185" x2="480" y2="185"/>
<line x1="210" y1="185" x2="210" y2="210"/><line x1="300" y1="185" x2="300" y2="210"/><line x1="390" y1="185" x2="390" y2="210"/><line x1="480" y1="185" x2="480" y2="210"/>
<rect x="220" y="40" width="40" height="40"/><circle cx="360" cy="60" r="20"/>
<circle cx="420" cy="130" r="20"/>
<circle cx="300" cy="230" r="20"/><rect x="460" y="210" width="40" height="40"/>
</g>
<g stroke="currentColor" stroke-width="2" fill="var(--vurgu)">
<rect x="280" y="110" width="40" height="40"/>
<rect x="190" y="210" width="40" height="40"/><circle cx="390" cy="230" r="20"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="middle">
<text x="240" y="100">Baba</text><text x="360" y="100">Anne</text>
<text x="300" y="170">Kerem</text><text x="420" y="170">Eşi</text>
</g>
<rect x="120" y="282" width="18" height="18" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/>
<text x="146" y="297" font-size="14" fill="currentColor">Altı parmaklı</text>
<rect x="300" y="282" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="326" y="297" font-size="14" fill="currentColor">Normal</text>
<text x="280" y="328" font-size="14" fill="currentColor" text-anchor="middle">Kare: erkek, daire: kadın</text>
</svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Baskın genin gizli kalabileceğini sanma: bu gen baskındır ve taşıyan herkeste özellik görülür; Kerem'in anne babası normal olduğuna göre bu geni taşımazlar.",
    "Olasılığı kesinlik sanma: soy ağacında Kerem'in normal parmaklı çocukları da vardır; her çocuğunun altı parmaklı olacağı söylenemez.",
    "II ve III'ü doğru sayma: Kerem'in anne babası normal olduğu için baskın geni taşımaz; Kerem'in çocuklarının bir kısmı da normaldir. Doğru olan yalnız I'dir."
  ],
  aciklama: `Baskın gen, taşıyan bireyde etkisini gösteren gendir. Bu ailede altı parmaklılık geni baskındır.
Adım 1 (II): Kerem'in anne ve babası normaldir. Gen baskın olduğu için taşısalardı onlarda da altı parmaklılık görülürdü. Öyleyse vücut hücrelerinde bu gen yoktur. Kerem bu geni, anne ya da babasının bir üreme hücresinde oluşan mutasyonla almıştır. II yanlıştır.
Adım 2 (I): Kerem'in bütün hücrelerinde, üreme hücrelerinde de bu gen vardır. Soy ağacında Kerem'in iki çocuğu altı parmaklıdır; özellik Kerem'den çocuklarına geçmiştir, yani kalıtsaldır. I doğrudur.
Adım 3 (III): Kerem mutasyonlu genden bir tane, normal genden bir tane taşır. Üreme hücrelerinin bir kısmı bu geni taşır, bir kısmı taşımaz. Nitekim dört çocuğunun ikisi normaldir. III yanlıştır.
Sık yapılan hata: Ailede ilk kez görülen kalıtsal bir özelliğin mutlaka anne babanın vücudunda da bulunduğunu düşünmek. Özellik, bir üreme hücresinde oluşan mutasyonla ilk kez ortaya çıkabilir.
Cevap A.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "fen-mm-001",
  kazanim: "F.8.2.3.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Mutasyon, hücredeki aşağıdaki yapılardan hangisinde meydana gelen kalıcı bir değişikliktir?**`,
  gorsel: null,
  secenekler: ["Hücre zarı", "DNA", "Koful", "Hücre duvarı"],
  dogru: 1,
  hatalar: [
    "Hücrenin sınırını kalıtım yapısı sanma: hücre zarı madde giriş çıkışını düzenler; kalıtsal bilgiyi taşımaz.",
    null,
    "Depolama yapısını kalıtım yapısı sanma: koful su ve besin gibi maddeleri depolar; genler kofulda bulunmaz.",
    "Destek yapısını kalıtım yapısı sanma: hücre duvarı bitki hücresine şekil ve destek verir; kalıtsal bilgiyi taşımaz."
  ],
  aciklama: `Mutasyon, DNA'da, yani genlerde ya da kromozomlarda meydana gelen kalıcı değişikliktir.
Adım 1: Canlının kalıtsal bilgisi DNA'da bulunur. Genler DNA'nın parçalarıdır; kromozomlar da DNA'dan oluşur.
Adım 2: Kalıtsal bilgideki kalıcı değişiklik DNA'da olur. Hücre zarı, koful ve hücre duvarı kalıtsal bilgi taşımaz.
Sık yapılan hata: Mutasyonu hücrenin görünüşündeki herhangi bir değişiklik sanmak. Mutasyon, kalıtsal bilgiyi taşıyan DNA'daki değişikliktir.
Cevap B.`
},
{
  id: "fen-mm-002",
  kazanim: "F.8.2.3.2",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi modifikasyona örnektir?**`,
  gorsel: null,
  secenekler: [
    "Tüyleri ve gözleri renksiz bir tavşan doğması",
    "Yonca bitkisinde dört yaprak oluşması",
    "Alyuvarların orak biçiminde olması",
    "Arı sütüyle beslenen larvanın kraliçe olması"
  ],
  dogru: 3,
  hatalar: [
    "Albinizmi modifikasyon sanma: renk maddesi üretilememesi gendeki bir değişiklikten kaynaklanır; bu bir mutasyondur.",
    "Dört yapraklı yoncayı çevre etkisi sanma: dört yapraklı yonca, mutasyon örneği olarak bilinir.",
    "Orak hücre anemisini modifikasyon sanma: alyuvarların orak biçimi gendeki bir değişiklikten kaynaklanan kalıtsal bir durumdur; mutasyondur.",
    null
  ],
  aciklama: `Modifikasyon, çevre koşullarının etkisiyle oluşan, DNA'yı değiştirmeyen ve kalıtsal olmayan değişikliktir.
Adım 1: Renksiz doğan tavşan (albinizm), dört yapraklı yonca ve orak biçimli alyuvarlar DNA'daki değişikliklerden kaynaklanır. Bunlar mutasyon örnekleridir.
Adım 2: Bal arısı larvalarından arı sütüyle beslenmeyi sürdüren kraliçe, diğerleri işçi olur. Aradaki farkı besin, yani bir çevre koşulu belirler. Bu bir modifikasyondur.
Sık yapılan hata: Her doğuştan farkı çevreye bağlamak. Doğuştan gelen ve kalıtsal olan farklar genellikle mutasyon kaynaklıdır.
Cevap D.`
},
{
  id: "fen-mm-003",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi mutasyon ile modifikasyon arasındaki farklardan biridir?**`,
  gorsel: null,
  secenekler: [
    "Mutasyon yalnızca bitkilerde, modifikasyon yalnızca hayvanlarda görülür.",
    "Modifikasyon DNA'yı değiştirir, mutasyon ise değiştirmez.",
    "Mutasyon kalıtsal olabilir, modifikasyon ise kalıtsal değildir.",
    "Mutasyon çevreden hiç etkilenmez, modifikasyon ise çevreyle oluşur."
  ],
  dogru: 2,
  hatalar: [
    "Canlı grubuna göre ayırma: mutasyon da modifikasyon da hem bitkilerde hem hayvanlarda görülür.",
    "Kavramları ters çevirme: DNA'yı değiştiren mutasyondur; modifikasyon DNA'yı değiştirmez.",
    null,
    "Mutasyonu çevreden bağımsız sanma: X ışını, morötesi ışın ve bazı kimyasallar gibi çevresel etkenler mutasyona yol açabilir."
  ],
  aciklama: `Mutasyon DNA'da kalıcı değişikliktir; üreme hücrelerinde oluşursa sonraki nesle aktarılabilir. Modifikasyon ise çevre etkisiyle oluşur, DNA'yı değiştirmez ve kalıtsal değildir.
Adım 1: İki değişiklik de bitkilerde ve hayvanlarda görülür; A yanlıştır.
Adım 2: DNA'yı değiştiren mutasyondur; B ters çevrilmiştir.
Adım 3: Mutasyonların bir kısmı çevresel etkenlerle (ışın, kimyasal) oluşur; D yanlıştır.
Adım 4: Temel fark kalıtsallıktır. C doğrudur.
Sık yapılan hata: "Çevre etkisi = modifikasyon" diye düşünmek. Çevredeki bazı etkenler mutasyona da yol açabilir; belirleyici olan DNA'nın değişip değişmediğidir.
Cevap C.`
},
{
  id: "fen-mm-004",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, canlılarda görülen bazı değişiklikleri nedenleriyle eşleştirmiştir.
**Öğrencinin yaptığı eşleştirmelerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Down sendromu → kromozom sayısının değişmesi",
    "Albinizm → güneş ışığının yetersiz kalması",
    "Tenin bronzlaşması → deri genlerinde mutasyon",
    "Kraliçe arının iriliği → genlerinin değişmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Mutasyonu çevre etkisine bağlama: albinizm, renk maddesi üretimini sağlayan gendeki bir mutasyondan kaynaklanır; güneş ışığıyla ilgisi yoktur.",
    "Modifikasyonu mutasyon sanma: bronzlaşma güneşin etkisiyle oluşur ve zamanla geçer; genler değişmez.",
    "Beslenmenin etkisini gen değişikliği sanma: kraliçe arının iriliği larva döneminde arı sütüyle beslenmesinden kaynaklanır; bu bir modifikasyondur."
  ],
  aciklama: `Adım 1: Down sendromunda vücut hücrelerinde 46 yerine 47 kromozom bulunur. Kromozom sayısındaki bu değişiklik bir mutasyondur. A doğrudur.
Adım 2: Albinizm gendeki bir mutasyondan kaynaklanır; B yanlıştır.
Adım 3: Bronzlaşma ve kraliçe arının iriliği çevre koşullarıyla (güneş, besin) oluşan modifikasyonlardır; C ve D yanlıştır.
Sık yapılan hata: Mutasyon örnekleriyle modifikasyon örneklerinin nedenlerini karıştırmak. Önce "DNA değişmiş mi?" diye sor.
Cevap A.`
},
{
  id: "fen-mm-005",
  kazanim: "F.8.2.3.2",
  kademe: 0,
  zorluk: 2,
  soru: `Anne ve babası uzun boylu olan ve onlardan uzun boy genleri almış bir çocuk, büyüme çağında uzun süre yetersiz beslenmiştir. Bu çocuk yetişkin olduğunda anne ve babasından belirgin biçimde kısa boylu olmuştur.
**Bu durumla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Büyüme çağındaki yetersiz beslenme, çocuğun boy genlerini değiştirmiştir.",
    "Kısa boy beslenmeyle oluşmuştur; çocuğun ileride doğacak çocuklarına da aktarılır.",
    "Kısa boy, genlerin izin verdiği sınırlar içinde çevreyle oluşmuştur.",
    "Çocuğun boy genlerinde, büyüme çağında mutasyon oluşmuştur."
  ],
  dogru: 2,
  hatalar: [
    "Beslenmenin genleri değiştirdiğini sanma: beslenme büyümeyi etkiler ama DNA'yı değiştirmez; çocuğun genleri anne babasından aldığı genlerdir.",
    "Modifikasyonu kalıtsal sanma: kısa boyun beslenmeyle oluştuğu doğrudur, ancak beslenmeye bağlı değişiklik DNA'yı değiştirmez; bu yüzden çocuklara geçmez.",
    null,
    "Çevre etkisini mutasyon sanma: kısa boyun nedeni yetersiz beslenmedir; genlerde bir değişiklik olduğunu gösteren bir bilgi yoktur."
  ],
  aciklama: `Adım 1: Çocuk uzun boy genleri taşımaktadır, ancak büyüme çağında yetersiz beslenmiştir. Beslenme bir çevre koşuludur.
Adım 2: Genler, bir canlının ulaşabileceği boyun sınırını belirler. Beslenme yetersizse canlı bu sınıra ulaşamaz. Kısa boy, genlerin izin verdiği sınırlar içinde çevreyle oluşmuş bir modifikasyondur.
Adım 3: Modifikasyon DNA'yı değiştirmez ve kalıtsal değildir. Genler değişmediği için A ve D elenir. Kısa boy çocuğun ileride doğacak çocuklarına da aktarılmaz; B'nin ilk kısmı doğru olsa da ikinci kısmı yanlıştır.
Sık yapılan hata: Bir canlının genlerinde olan her özelliğin mutlaka ortaya çıkacağını düşünmek. Çevre uygun değilse genlerin izin verdiği özellik tam olarak ortaya çıkmayabilir.
Cevap C.`
},
{
  id: "fen-mm-006",
  kazanim: "F.8.2.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `Fenilketonüri, vücudun bazı besinlerde bulunan bir maddeyi işleyememesine yol açan kalıtsal bir hastalıktır. Hastalık, bu maddeyi işleyen proteinin yapısını belirleyen gendeki bir değişiklikten kaynaklanır. Bebeklikte fark edilip özel bir beslenme düzeni uygulanırsa hastalığın zararları büyük ölçüde önlenebilir.
Buna göre;
I. Hastalık, DNA'da oluşan kalıcı bir değişiklikten kaynaklanır.
II. Hastalığa yol açan gen, anne babadan çocuklara aktarılabilir.
III. Özel beslenme düzeni uygulanan kişinin hastalığa yol açan geni normal hâline döner.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: hastalık kalıtsaldır; hastalığa yol açan gen üreme hücrelerinde de bulunur ve çocuklara aktarılabilir.",
    null,
    "Zararın önlenmesini genin düzelmesi sanma: özel beslenme hastalığın zararlarını azaltır ama DNA'daki değişikliği ortadan kaldırmaz. III yanlış, II doğrudur.",
    "I'i yanlış sayma: hastalık gendeki bir değişiklikten, yani DNA'daki kalıcı bir değişiklikten kaynaklanır. III ise yanlıştır."
  ],
  aciklama: `Adım 1 (I): Hastalık gendeki bir değişiklikten kaynaklanır. Gendeki kalıcı değişiklik mutasyondur. I doğrudur.
Adım 2 (II): Metinde hastalığın kalıtsal olduğu belirtilmiştir. Genler üreme hücreleriyle anne babadan çocuklara geçer. II doğrudur.
Adım 3 (III): Beslenme bir çevre koşuludur. Hastalığın zararlarını azaltabilir ama DNA'yı değiştirmez; gen olduğu gibi kalır. III yanlıştır.
Sık yapılan hata: Bir hastalığın belirtilerinin önlenebilmesini, genin düzeldiği biçiminde yorumlamak. Çevre, genin etkisini değiştirebilir ama genin kendisini değiştirmez.
Cevap B.`
},
{
  id: "fen-mm-007",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, dört canlıda gözlediği ya da okuduğu değişiklikleri defterine not etmiştir.
**Bu değişikliklerden hangisi sonraki nesle aktarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Gölgede kalan bir sarmaşığın solgun yaprakları",
    "Bol beslenen bir köpeğin artan vücut ağırlığı",
    "Bir kurbağanın deri hücrelerinde ışınla oluşan DNA değişikliği",
    "Bir kedinin üreme hücresinde ışınla oluşan DNA değişikliği"
  ],
  dogru: 3,
  hatalar: [
    "Çevre etkisini kalıtsal sanma: gölgede solgun kalan yaprak ışık eksikliğinden kaynaklanan bir modifikasyondur; nesle geçmez.",
    "Beslenmeyle oluşan değişikliği kalıtsal sanma: kilo alma bir modifikasyondur; DNA değişmediği için yavrulara geçmez.",
    "Vücut hücresi mutasyonunu kalıtsal sanma: deri hücresi vücut hücresidir; buradaki DNA değişikliği yavrulara geçmez.",
    null
  ],
  aciklama: `Sonraki nesle yalnızca üreme hücrelerinin DNA'sında oluşan değişiklikler aktarılabilir.
Adım 1: Solgun yapraklar ve artan vücut ağırlığı ışık ve beslenme gibi çevre koşullarıyla oluşmuştur. Bunlar modifikasyondur ve aktarılmaz.
Adım 2: Kurbağadaki DNA değişikliği bir mutasyondur, ancak deri hücresinde, yani vücut hücresindedir. Aktarılmaz.
Adım 3: Kedideki DNA değişikliği üreme hücresindedir. Bu hücre döllenmeye katılırsa değişiklik yavruya geçer.
Sık yapılan hata: DNA değişikliği gören her seçeneği kalıtsal saymak. Hangi hücrede oluştuğuna da bakmak gerekir.
Cevap D.`
},
{
  id: "fen-mm-008",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, mutasyon ile modifikasyonu karşılaştırmak için defterine üç ifade yazmıştır.
I. İkisi de DNA'nın yapısını değiştirir.
II. Mutasyon, üreme hücrelerinde oluşursa sonraki nesle aktarılabilir.
III. Modifikasyon, genlerin izin verdiği sınırlar içinde oluşur.
**Bu ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: çevre, genlerde olmayan bir özelliği ortaya çıkaramaz; modifikasyon genlerin izin verdiği sınırlar içinde kalır.",
    "Modifikasyonun DNA'yı değiştirdiğini sanma: modifikasyon DNA'yı değiştirmez; I yanlıştır. III ise doğrudur.",
    "I'i doğru, II'yi yanlış sayma: DNA'yı yalnız mutasyon değiştirir; üreme hücresindeki mutasyon da nesle aktarılabilir.",
    null
  ],
  aciklama: `Adım 1 (I): Mutasyon DNA'yı değiştirir, modifikasyon değiştirmez. "İkisi de" ifadesi yanlıştır.
Adım 2 (II): Üreme hücresinde oluşan mutasyon, bu hücre döllenmeye katılırsa yavruya geçer. II doğrudur.
Adım 3 (III): Çevre koşulları, genlerin izin verdiği özellikleri değiştirebilir ama genlerde olmayan bir özelliği oluşturamaz. Örneğin gübre bir bitkiyi uzatır, ama genlerinin belirlediği sınırın ötesine uzatamaz. III doğrudur.
Sık yapılan hata: Mutasyon ile modifikasyonu "ikisi de değişiklik" diye aynı saymak. Aradaki temel fark, DNA'nın değişip değişmemesidir.
Cevap D.`
},
{
  id: "fen-mm-009",
  kazanim: "F.8.2.3.2",
  kademe: 0,
  zorluk: 3,
  soru: `Dokuz bantlı armadillo adlı memeli hayvan, her doğumda tek bir zigotun bölünüp ayrılmasıyla oluşan dört yavru doğurur. Bu yüzden aynı doğumdaki yavruların kalıtsal yapısı aynıdır. Aynı doğumdan olan iki yavru, farklı hayvanat bahçelerine gönderilmiştir. Birinci bahçede yavruya çeşitli ve zengin besinler, ikinci bahçede ise yalnızca temel besinler verilmiştir. Bir yıl sonra birinci bahçedeki yavrunun kütlesi, ikinci bahçedekinden 800 g fazla bulunmuştur.
**Buna göre bu kütle farkıyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kütle farkı, yavrular aynı bahçede aynı besinlerle büyütülseydi de ortaya çıkardı.",
    "Kütle farkı beslenmeyle oluşmuştur; ağır yavrunun fazla kütlesi kendi yavrularına da aktarılır.",
    "Kütle farkı, aynı genlere sahip bireylerde beslenmeyle oluşmuş bir farktır.",
    "Daha hafif olan yavrunun genlerinde, kütleyi azaltan bir mutasyon oluşmuştur."
  ],
  dogru: 2,
  hatalar: [
    "Çevre etkisini ters okuma: yavruların genleri aynı olduğu için aynı besinlerle büyüselerdi kütleleri de benzer olurdu. Farkı yaratan, genler değil beslenmedir.",
    "Modifikasyonu kalıtsal sanma: kütle farkının beslenmeyle oluştuğu doğrudur, ancak beslenmeyle kazanılan kütle DNA'yı değiştirmez; yavrulara geçmez.",
    null,
    "Çevre etkisini mutasyon sanma: kütle farkının nedeni beslenmedeki farktır; genlerde bir değişiklik olduğunu gösteren bir veri yoktur."
  ],
  aciklama: `Adım 1: Aynı doğumdaki armadillo yavruları tek bir zigottan geliştiği için genleri aynıdır.
Adım 2: İki yavru arasındaki tek önemli fark beslenmedir. Zengin besin alan yavru daha ağır olmuştur.
Adım 3: Aynı genlere sahip bireylerde çevrenin etkisiyle oluşan fark modifikasyondur. Modifikasyon DNA'yı değiştirmez ve yavrulara aktarılmaz. Genler aynı olduğu için yavrular aynı besinlerle büyüseydi kütleleri de benzer olurdu; A bu yüzden elenir. Genlerde bir değişiklik olduğunu gösteren veri olmadığından D de elenir. B'nin ilk kısmı doğrudur, ama fazla kütle yavrulara aktarılmaz; B de elenir.
Sık yapılan hata: Kardeşler arasındaki her farkı genlere bağlamak. Genleri tamamen aynı olan bireyler bile farklı çevrelerde farklı özellikler gösterebilir.
Cevap C.`
},
{
  id: "fen-mm-010",
  kazanim: "F.8.2.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir doğa kulübü, bir çayırın iki farklı bölgesinde yonca bitkilerini inceleyip yapraklarını saymıştır. Sonuçlar tabloda verilmiştir. Kulüp öğretmeni, dört yapraklı yoncaların genetik yapıdaki bir değişiklikle ortaya çıktığını ve bu yoncaların üç yapraklılar kadar sağlıklı büyüdüğünü söylemiştir.
Buna göre;
I. Dört yapraklı yoncalar, toprak verimli olduğu için oluşmuştur.
II. Dört yapraklı yoncada görülen değişiklik bir mutasyon örneğidir.
III. DNA'da oluşan değişiklikler canlıya her durumda zarar verir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bölge</th><th>Toprağın özelliği</th><th>İncelenen yonca sayısı</th><th>Dört yapraklı yonca sayısı</th></tr><tr><td>Dere kenarı</td><td>Nemli ve verimli</td><td>5.000</td><td>1</td></tr><tr><td>Yamaç</td><td>Kuru ve taşlı</td><td>5.000</td><td>1</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Veriyi kullanmama: verimli ve kuru toprakta dört yapraklı yonca sayısı aynıdır; toprağın verimi bu farkı açıklamaz. I yanlıştır.",
    "Mutasyonların hepsini zararlı sanma: mutasyonların çoğu zararlıdır ama bazıları etkisiz ya da yararlı olabilir; bu yoncalar da sağlıklı büyümektedir.",
    "Aşırı genelleme ve veriyi okumama: I tabloyla çelişir; III ise dört yapraklı yoncaların sağlıklı büyümesiyle çelişir."
  ],
  aciklama: `Adım 1 (I): Nemli ve verimli bölgede de, kuru ve taşlı bölgede de 5.000 yoncadan 1'i dört yapraklıdır. Toprak değişse de oran değişmemiştir; toprağın verimi bu farkı açıklamaz. I yanlıştır.
Adım 2 (II): Dört yapraklı yonca genetik yapıdaki kalıcı bir değişiklikle ortaya çıkar; bu bir mutasyon örneğidir. II doğrudur.
Adım 3 (III): Mutasyonların çoğu zararlıdır, ancak bazıları etkisiz ya da yararlı olabilir. Dört yapraklı yoncalar da sağlıklı büyümektedir. III yanlıştır.
Sık yapılan hata: "Mutasyon" sözcüğünü duyunca her zaman hastalık ya da zarar düşünmek.
Cevap A.`
},
{
  id: "fen-mm-011",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 3,
  soru: `Sena ile Kaan, bir değişikliğin mutasyon olup olmadığını anlamak için birer ölçüt önermiştir.
Sena: Bir değişiklik canlının ömrü boyunca sürüyorsa bu değişiklik bir mutasyondur.
Kaan: Bir değişiklik canlının yavrularına kalıtım yoluyla geçiyorsa bu değişiklik bir mutasyondur.
Öğretmenleri, küçük ve kalabalık bir havuzda yaşayan sazan balıklarının ömürleri boyunca küçük kaldığını, ancak bu balıkların yumurtalarından çıkıp geniş bir gölete bırakılan yavruların normal büyüklüğe ulaştığını hatırlatmıştır.
**Buna göre öğrencilerin ölçütleriyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kaan haklıdır; çünkü modifikasyonlar yavrulara aktarılmaz.",
    "Sena haklıdır; çünkü modifikasyonlar hiç uzun sürmez.",
    "İkisi de haklıdır; çünkü iki ölçüt de mutasyonu ayırt eder.",
    "İkisi de haksızdır; çünkü mutasyonlar yavrulara aktarılamaz."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Modifikasyonların hep kısa sürdüğünü sanma: kalabalık havuzdaki balıklar ömürleri boyunca küçük kalır ama bu bir modifikasyondur; uzun sürmek mutasyon ölçütü değildir.",
    "İki ölçütü de geçerli sanma: ömür boyu sürme modifikasyonlarda da görülebilir; bu yüzden Sena'nın ölçütü mutasyonu ayırt etmez.",
    "Mutasyonların nesle geçmediğini sanma: üreme hücrelerinde oluşan mutasyonlar yavrulara aktarılabilir; Kaan'ın ölçütü doğrudur."
  ],
  aciklama: `Adım 1 (Sena): Kalabalık havuzdaki balıklar ömürleri boyunca küçük kalmış, ama geniş gölete bırakılan yavruları normal büyüklüğe ulaşmıştır. Demek ki bir modifikasyon da ömür boyu sürebilir. Sena'nın ölçütü mutasyonu modifikasyondan ayırmaz.
Adım 2 (Kaan): Modifikasyon DNA'yı değiştirmez ve yavrulara kalıtımla geçmez. Kalıtımla yavruya geçen yeni bir değişiklik DNA'dadır, yani bir mutasyondur. Kaan haklıdır.
Adım 3: Kaan'ın ölçütü "geçiyorsa mutasyondur" der, tersini söylemez. Vücut hücrelerindeki mutasyonlar yavrulara geçmese de yine mutasyondur.
Sık yapılan hata: Kalıcılık ile kalıtsallığı karıştırmak. Kalıcı olmak, nesle geçmek demek değildir.
Cevap A.`
},
{
  id: "fen-mm-012",
  kazanim: "F.8.2.3.2",
  kademe: 0,
  zorluk: 3,
  soru: `Deniz kıyısındaki rüzgârlı bir tepede yetişen çam ağaçlarının gövdeleri, hep aynı yönden esen sert rüzgârın etkisiyle eğik büyümüştür. Bir ormancı, bu ağaçların kozalaklarından topladığı tohumları rüzgârdan korunaklı bir vadideki fidanlığa ekmiştir. Tohumlardan çıkan fidanların hepsi dik büyümüştür.
Buna göre;
I. Tepedeki ağaçların eğik büyümesi rüzgârın etkisiyle oluşmuştur.
II. Rüzgâr, tepedeki ağaçların gövde biçimini belirleyen genleri değiştirmiştir.
III. Eğik gövde özelliği, tepedeki ağaçların tohumlarından yetişen fidanlara aktarılmamıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: tohumlardan çıkan fidanların hepsi dik büyümüştür; eğik gövde özelliği yavrulara geçmemiştir.",
    "Çevre etkisini gen değişikliği sanma: rüzgâr gövdenin biçimini etkiler ama genleri değiştirmez; genler değişseydi fidanlarda da eğik gövde görülebilirdi.",
    null,
    "I'i yanlış, II'yi doğru sayma: eğik büyümenin nedeni rüzgârdır, ama rüzgâr genleri değiştirmemiştir; bu bir modifikasyondur."
  ],
  aciklama: `Adım 1 (I): Tepedeki ağaçlar sürekli aynı yönden esen rüzgârın etkisindedir ve gövdeleri rüzgârın estiği yöne eğilmiştir. I doğrudur.
Adım 2 (III): Aynı ağaçların tohumlarından korunaklı vadide çıkan fidanlar dik büyümüştür. Eğik gövde özelliği yavrulara geçmemiştir. III doğrudur.
Adım 3 (II): Rüzgâr gövde biçimini belirleyen genleri değiştirseydi ve bu değişiklik tohumlara geçseydi, fidanlarda da eğik gövde görülebilirdi. Veriler genlerin değiştiğini göstermez. II yanlıştır.
Sağlama: Rüzgârın etkisiyle oluşan, DNA'yı değiştirmeyen ve yavrulara geçmeyen bu değişiklik bir modifikasyondur.
Cevap C.`
},
{
  id: "fen-mm-013",
  kazanim: "F.8.2.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir mısır tarlasında, yeşil yapraklı bitkilerin tohumlarından çıkan fidelerin bir kısmının yapraklarının bembeyaz olduğu görülmüştür. Beyaz fideler klorofil üretemediği için besin üretememiş ve tohumdaki besin bitince birkaç hafta içinde ölmüştür. Araştırmacılar beyaz fideleri ışıklı ve besin bakımından zengin bir ortama taşımış, ancak fidelerin yine beyaz kaldığını görmüştür. İncelemede bu fidelerde klorofil üretimini sağlayan gende bir değişiklik bulunmuştur. Araştırmacılar bu genin çekinik olduğunu, yani iki ebeveynden de alındığında etkisini gösterdiğini belirlemiştir.
**Buna göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "Beyaz yaprak özelliği, ortam koşulları iyileştirilerek ortadan kaldırılamaz.",
    "Beyaz fidelerin yeşil yapraklı ebeveynleri bu çekinik geni taşıyor olabilir.",
    "Bu değişiklik, canlıya zarar veren bir mutasyon örneğidir.",
    "Yeşil yapraklı ebeveynler bu çekinik geni kesinlikle taşımamaktadır."
  ],
  dogru: 3,
  hatalar: [
    "Söylenebilen yargıyı seçme: fideler ışıklı ve zengin bir ortama taşındığı hâlde beyaz kalmıştır; özellik ortam koşullarıyla ortadan kalkmamaktadır.",
    "Çekinik genin gizli taşınabileceğini unutma: çekinik gen, ebeveynde baskın yeşil renk geniyle birlikte gizli kalabilir; bu yargı söylenebilir.",
    "Mutasyonların etkisini gözden kaçırma: klorofil üretemeyen fideler ölmüştür; bu, canlıya zarar veren bir mutasyondur ve yargı söylenebilir.",
    null
  ],
  aciklama: `Adım 1 (A): Fideler iyi koşullara taşındığı hâlde beyaz kalmıştır. Özellik çevreyle düzelmemektedir; A söylenebilir.
Adım 2 (C): Değişiklik klorofil üretimini sağlayan gendedir; DNA'daki bu kalıcı değişiklik bir mutasyondur. Fideler ölmüştür, yani mutasyon zararlıdır. C söylenebilir.
Adım 3 (B): Gen çekiniktir; beyaz fide bu geni iki ebeveyninden de almıştır. Yeşil yapraklı ebeveynler geni taşıdıkları hâlde, yanında baskın gen bulunduğu için yeşil görünüyor olabilir. B söylenebilir.
Adım 4 (D): Veriler ebeveynlerin bu geni taşıdığına işaret eder. "Kesinlikle taşımamaktadır" yargısı söylenemez.
Sık yapılan hata: Ebeveyn yeşil diye beyaz yaprak genini taşımadığını düşünmek. Çekinik mutasyonlar, taşıyıcı bireylerde kuşaklar boyunca gizli kalabilir.
Cevap D.`
},
{
  id: "fen-mm-014",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir hayvanat bahçesinde, turuncu kürklü iki kaplandan beyaz kürklü bir yavru doğmuştur. Yavrunun aynı doğumdaki kardeşleri turuncu kürklüdür ve yavrular aynı ortamda, aynı besinlerle büyütülmüştür. Beyaz yavru büyüdüğünde de kürkü beyaz kalmıştır. Uzmanlar, kaplanlarda beyaz kürk renginin, renk maddesi üretimini etkileyen gendeki bir değişiklikten kaynaklandığını ve bu genin çekinik olduğunu açıklamıştır.
Buna göre;
I. Beyaz kürk rengi, yavrunun büyüdüğü ortamın koşullarından kaynaklanmıştır.
II. Beyaz kürk rengine yol açan gen değişikliği, anne ya da babanın deri hücrelerinde oluşup yavruya geçmiştir.
III. Beyaz kürk rengine yol açan gen, yavrunun kendi üreme hücrelerinde de bulunur.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Vücut hücresindeki değişikliğin yavruya geçtiğini sanma: deri hücreleri vücut hücresidir; yavru ise anne ve babanın üreme hücrelerinden oluşur. II yanlıştır; III ise kesinlikle doğrudur.",
    null,
    "Kalıtsal özelliği ortama bağlama: yavrunun kardeşleri aynı ortamda turuncu kalmıştır; beyaz renk ortamdan kaynaklanamaz. Deri hücresinde oluşan bir değişiklik de yavruya geçmez; II de yanlıştır.",
    "Vücut hücresi mutasyonunu kalıtsal sanma: anne ya da babanın deri hücrelerinde oluşan bir değişiklik yavruya geçmez; yavruya üreme hücreleriyle gelen genler aktarılır. II yanlıştır; doğru olan yalnız III'tür."
  ],
  aciklama: `Mutasyon DNA'da oluşan kalıcı değişikliktir. Vücut hücrelerinde oluşan mutasyonlar yavrulara geçmez; yavruya yalnızca üreme hücreleriyle gelen genler aktarılır.
Adım 1 (I): Yavru, turuncu kardeşleriyle aynı ortamda ve aynı besinlerle büyümüştür. Beyaz renk ortamdan kaynaklanamaz; genlerden kaynaklanır. I yanlıştır.
Adım 2 (II): Yavru, anne ve babasının üreme hücrelerinin birleşmesiyle oluşan zigottan gelişmiştir. Anne ya da babanın deri hücreleri vücut hücresidir; bu hücrelerde oluşan bir değişiklik yavruya geçmez. II yanlıştır.
Adım 3 (III): Yavrunun bütün hücreleri tek bir zigotun bölünmesiyle oluşmuştur. Beyaz kürk geni vücut hücrelerinde olduğu gibi üreme hücrelerinde de bulunur. III kesinlikle doğrudur.
Sık yapılan hata: Özelliğin görüldüğü dokudaki bir değişikliğin yavruya geçeceğini düşünmek. Kürk rengi deride ortaya çıksa da onu yavruya taşıyan, üreme hücrelerindeki genlerdir.
Cevap B.`
},
{
  id: "fen-mm-015",
  kazanim: "F.8.2.3.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir hayvancılık fuarında iki sığır tanıtılmıştır.
Birinci sığır: Normal kas yapısındaki bir ırktandır. Sahibi onu aylarca protein bakımından zengin yemle beslemiş ve her gün uzun yürüyüşlere çıkarmıştır. Sığırın kasları belirgin biçimde gelişmiştir. Bu sığırın normal yemle beslenen yavrularının kas yapısı, ırkındaki diğer sığırlar gibi olmuştur.
İkinci sığır: Kas büyümesini sınırlayan gende değişiklik taşıyan bir ırktandır. Bu sığır doğuştan çok kaslıdır ve normal yemle beslendiği hâlde kasları belirgin biçimde gelişmiştir. Bu sığırın yavrularının bir kısmında da doğuştan fazla kas gelişimi görülmüştür.
**Buna göre bu iki sığırdaki kas gelişimiyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Birincideki kas gelişimi modifikasyon, ikincideki mutasyon kaynaklıdır; yalnızca ikincisi yavrulara geçebilir.",
    "İki sığırda da kas gelişimi mutasyon kaynaklıdır; çünkü ikisinde de vücut yapısı kalıcı olarak değişmiştir.",
    "İki sığırda da kas gelişimi modifikasyon kaynaklıdır; çünkü kas gelişimi her zaman beslenmeye bağlıdır.",
    "Birincideki kas gelişimi mutasyon, ikincideki modifikasyon kaynaklıdır; çünkü birincinin yemi değişmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Görünür kalıcılığı mutasyon sanma: birinci sığırın kasları yem ve egzersizle gelişmiş, yavrularına geçmemiştir. Bu bir modifikasyondur.",
    "Aşırı genelleme: kas gelişimi çoğu zaman beslenme ve egzersize bağlıdır, ama ikinci sığırda normal yemle bile fazla kas vardır ve özellik yavrulara geçmiştir; bu mutasyon kaynaklıdır.",
    "Nedenleri yer değiştirme: yem değişikliği bir çevre etkisidir ve modifikasyon oluşturur; gen değişikliği ise ikinci sığırdadır."
  ],
  aciklama: `Adım 1: Birinci sığırın kasları zengin yem ve egzersizle, yani çevre koşullarıyla gelişmiştir. Normal yemle beslenen yavrularında bu özellik görülmemiştir. Bu bir modifikasyondur.
Adım 2: İkinci sığırda kas büyümesini sınırlayan gende değişiklik vardır. DNA'daki bu kalıcı değişiklik bir mutasyondur. Sığır normal yemle bile çok kaslıdır ve özellik yavrularının bir kısmında da görülmüştür; yani kalıtsaldır.
Adım 3: Modifikasyon kalıtsal olmadığından yavrulara yalnızca ikinci sığırdaki özellik geçebilir.
Sık yapılan hata: Aynı görünüşün (gelişmiş kaslar) her zaman aynı nedenden kaynaklandığını düşünmek. Görünüş aynı olsa da biri çevreden, diğeri genlerden kaynaklanabilir.
Cevap A.`
}
);
