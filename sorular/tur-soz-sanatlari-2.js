// Türkçe — Söz Sanatları: Kademe 3 (LGS Ayarı) ve Havuz (Kademe 0)
// Kazanım: T.8.3.7 Metindeki söz sanatlarını tespit eder.
// Kapsam: yalnızca benzetme, kişileştirme, konuşturma, karşıtlık, abartma. Kural: konuşturma olan yerde kişileştirme de vardır.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["soz-sanatlari"] = window.LGS_BANK["soz-sanatlari"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-ss-301",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Pazar yerinde dolaşan bir öğrenci, gördüklerini dizeler hâlinde yazmış:
I. Tezgâhlara kasa kasa domates dizilmişti.
II. Satıcı öyle bağırdı ki sesi iki mahalle öteden duyuldu.
III. Elmalar, al yanaklı çocuklar gibi parlıyordu.
IV. Güneş, tezgâhtaki kasaları sessizce izliyordu.
**Numaralı dizelerin hangisinde abartma vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Sıradan anlatımı sanatlı sanma: I. dizede kasaların dizilmesi olduğu gibi anlatılıyor, olduğundan büyük ya da küçük gösterilen bir durum yok.",
    null,
    "Benzetmeyi abartma sanma: III. dizede 'gibi' edatıyla elmalar çocuk yanağına benzetiliyor; durum büyütülmüyor.",
    "Kişileştirmeyi abartma sanma: IV. dizede güneşe insana özgü 'izlemek' eylemi yükleniyor; bu kişileştirmedir."
  ],
  aciklama: `Abartma, bir durumu ya da özelliği olduğundan çok büyük ya da çok küçük göstermektir.
Adım 1: I. dizede domateslerin tezgâha dizilmesi olduğu gibi anlatılıyor. Sanat yok.
Adım 2: II. dizede bir insanın sesi iki mahalle öteden duyulmuş. Gerçekte bu mümkün değil; durum büyütülmüş. Bu abartmadır.
Adım 3: III. dizede "gibi" edatı var; elmalar çocuk yanağına benzetilmiş. Bu benzetmedir.
Adım 4: IV. dizede güneş bir insan gibi izliyor. Bu kişileştirmedir.
Sağlama: "Sesi iki mahalle öteden duyuldu" cümlesini gerçek sanırsak olağan dışı bir durum çıkar; bu, abartmanın işaretidir.
Cevap B.`
},
{
  id: "tur-ss-302",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Okul servisinden inen Mert, yarışmayı kazandığını söyleyince anneannesi önce sustu. Sonra __sevinçten ağlıyor, gözyaşları arasında gülüyordu__. Mert, bu hâlin hiç unutulmayacağını düşündü.
**Bu parçada altı çizili sözde hangi söz sanatı vardır?**`,
  gorsel: null,
  secenekler: ["Benzetme", "Kişileştirme", "Abartma", "Karşıtlık"],
  dogru: 3,
  hatalar: [
    "Benzetme için 'gibi, kadar, sanki' gibi bir edat ya da 'X bir Y'dir' kalıbı gerekir; altı çizili sözde hiçbir şey başka bir şeye benzetilmiyor.",
    "Kişileştirme, insan dışı bir varlığa insana özgü davranış vermektir; ağlayan ve gülen zaten bir insan.",
    "Abartmada bir durum büyütülür; burada ağlamak ve gülmek olduğu gibi anlatılıyor, gerçeğin ötesine geçilmiyor.",
    null
  ],
  aciklama: `Karşıtlık, birbirine zıt kavramların etkiyi artırmak için aynı söz içinde bir arada kullanılmasıdır (gece-gündüz, ağlamak-gülmek gibi).
Adım 1: Altı çizili sözde "ağlıyor" ve "gülüyordu" var. Bu iki eylem birbirine zıttır.
Adım 2: Zıt kavramlar aynı sözde yan yana getirilerek anneannenin karışık duygusu daha güçlü anlatılmış.
Adım 3: "Gibi, kadar, sanki" gibi bir edat yok; benzetme yok. Anneanne bir insan olduğu için kişileştirme yok. Gerçek dışı büyütme de yok; abartma değil.
Sağlama: Sözün içindeki zıt çiftleri bul: ağlamak - gülmek. Zıt çift varsa karşıtlıktır.
Cevap D.`
},
{
  id: "tur-ss-303",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, dağ gezisini anlatan günlüğüne şu cümleleri yazmıştır.
**Bu cümlelerin hangisinde __kişileştirme yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Patika, yamaçta gerilmiş ince bir ip gibi görünüyordu.",
    "Çam ağaçları, yolumuza çıkan her gezgine dallarıyla selam verdi.",
    "Akşam olunca dağ, bulutları yorgan gibi üstüne çekti.",
    "Dere, taşlara çarpa çarpa “Beni de götürün!” diye yalvardı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümlede kişileştirme var: çam ağaçları insan gibi selam veriyor.",
    "Bu cümlede kişileştirme var: dağ, insan gibi yorgan çekiyor. 'Gibi' edatı benzetme de kurar; ama dağa verilen insanca davranış kişileştirmedir.",
    "Bu cümlede kişileştirme var: dere insan gibi yalvarıyor. Konuşturma da var; konuşturma olan yerde kişileştirme de bulunur."
  ],
  aciklama: `Kişileştirme, insan olmayan varlıklara insana özgü duygu ve davranış vermektir. Soru "yoktur" diye sorduğu için kişileştirme taşımayan cümleyi arıyoruz.
Adım 1: B'de çam ağaçları selam veriyor; selam vermek insana özgüdür. Kişileştirme var.
Adım 2: C'de dağ, bulutları üstüne çekiyor; yorgan çekmek insana özgü bir davranıştır. "Gibi" edatı benzetme kurar ama dağa insanca davranış verilmesi kişileştirmedir.
Adım 3: D'de dere yalvarıyor, sözü aktarılıyor; yalvarmak insana özgüdür. Konuşturma ve kişileştirme var.
Adım 4: A'da patika ince bir ipe benzetilmiş; "görünmek" insana özgü bir davranış değildir. Yalnızca benzetme var, kişileştirme yok.
Sık yapılan hata: Cümlede "gibi" edatını görünce her şeye yalnızca benzetme demek. Edatlı cümlede de varlığa insana özgü bir eylem verilmiş olabilir.
Cevap A.`
},
{
  id: "tur-ss-304",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, köyündeki çınarı anlatan şu dizeleri yazmış:
I. Çınar, yıllardır köyün yolunu bekler,
II. Gölgesi serin bir battaniye gibi uzanır,
III. Çeşme, "Susadıysan gel, ben buradayım." der,
IV. Gece olunca sokak lambası uykuya dalar.
**Bu dizelerin hangisinde konuşturma sanatı kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Kişileştirmeyi konuşturma sanma: çınar yolu bekliyor ama konuşmuyor. Konuşturma için varlığın sözünün aktarılması gerekir.",
    "Benzetmeyi konuşturma sanma: II. dizede 'gibi' ile gölge battaniyeye benzetiliyor; kimse konuşmuyor.",
    null,
    "Kişileştirmeyi konuşturma sanma: lamba uykuya dalıyor ama konuşmuyor."
  ],
  aciklama: `Konuşturma, insan dışı bir varlığa konuşma yeteneği verip sözünü aktarmaktır. Konuşturma olan yerde kişileştirme de bulunur; ama kişileştirme olan her yerde konuşturma yoktur.
Adım 1: I. dizede çınar bekliyor. Kişileştirme var; ama çınarın sözü verilmemiş.
Adım 2: II. dizede "gibi" edatı var; benzetme.
Adım 3: III. dizede çeşme "Susadıysan gel, ben buradayım." diyor. Çeşmenin sözü tırnak içinde aktarılmış. Konuşturma bu dizededir.
Adım 4: IV. dizede lamba uykuya dalıyor; yine kişileştirme, ama konuşma yok.
Sağlama: Tırnak içinde insan olmayan bir varlığın sözü var mı diye bak.
Cevap C.`
},
{
  id: "tur-ss-305",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Okul basketbol takımı, maç sonrası toplanıp değerlendirme yaptı. Salon, tam bir kaynayan kazandı. Kaptan Efe, topu alınca rakibi hiç yorulmadan oyuna getirip tilki gibi sıyrıldı. Takım arkadaşları ise kaya gibi sağlam bir duvar örüp rakip hücumları durdurdu. Antrenör, oturduğu yerden onları alkışladı.
**Efe için kurulan benzetmenin benzetme yönü (ortak özellik) aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Sağlam olma", "Gürültülü olma", "Kurnaz olma", "Hızlı olma"],
  dogru: 2,
  hatalar: [
    "Başka benzetmenin yönünü karıştırma: 'sağlam' olma, takım arkadaşlarının 'kaya gibi' benzetmesinin yönüdür; Efe için kurulan benzetme 'tilki gibi'dir.",
    "Başka benzetmenin yönünü karıştırma: 'gürültülü' olma, salonun 'kaynayan kazan'a benzetilmesinin yönüdür; Efe ile ilgili değildir.",
    null,
    "Cümlede olmayan bir özelliği ortak özellik sanma: hızdan söz edilmiyor; Efe rakibi 'oyuna getiriyor', bu da tilkiyle ortak kurnazlıktır."
  ],
  aciklama: `Benzetmenin dört ögesi vardır: benzeyen (başka bir şeye benzetilen), kendisine benzetilen (benzediği şey), benzetme yönü (ikisinin ortak özelliği) ve benzetme edatı (gibi, kadar, sanki).
Adım 1: Parçada üç benzetme var: salon kaynayan kazana (gürültü), Efe tilkiye, takım arkadaşları kayaya (sağlamlık). Soru yalnızca Efe'nin benzetmesini soruyor.
Adım 2: Efe için benzeyen "Efe", kendisine benzetilen "tilki", edat "gibi"dir.
Adım 3: Efe rakibi hiç yorulmadan oyuna getirip sıyrılıyor. Tilki de hilesi ve kurnazlığıyla bilinir; ortak özellik kurnazlıktır.
Sağlama: "Efe kurnazdır, tilki de kurnazdır" cümlesi ortak özelliği gösterir. Sağlamlık ve gürültü başka benzetmelerin yönüdür.
Cevap C.`
},
{
  id: "tur-ss-306",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde benzetme ve abartma birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Sınav sabahı kalbim kuş gibi çırpındı, sanki göğsümü delip çıkacaktı.",
    "Yeni montuyla kar gibi bembeyaz görünen arkadaşım, kapıda bizi bekledi.",
    "Bu konuyu sana yüz kere anlattım, ama sen hâlâ dinlemiyorsun.",
    "Bahçedeki gül, yaz akşamına gülümseyerek başını eğdi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca benzetme var: 'kar gibi bembeyaz' benzetmedir; ama durum büyütülmemiş, abartma yok.",
    "Yalnızca abartma var: 'yüz kere anlattım' sayısı büyütür; ama başka bir şeye benzetme yapılmamış.",
    "Yalnızca kişileştirme var: gül gülümsüyor ve başını eğiyor; ne benzetme ne abartma var."
  ],
  aciklama: `Soruda iki sanatın aynı cümlede bulunması isteniyor; bu yüzden her cümlede ayrı ayrı iki sanatı da aramalısın.
Adım 1: A'da "kuş gibi çırpındı" benzetmedir (edat: gibi). "Göğsümü delip çıkacaktı" ise kalbin çarpışını gerçekten olduğundan çok büyük göstermektedir; abartmadır. İki sanat birlikte.
Adım 2: B'de "kar gibi bembeyaz" benzetmedir; abartma yok.
Adım 3: C'de "yüz kere" abartmadır; benzetme yok.
Adım 4: D'de gül gülümsüyor; kişileştirme var, başka sanat yok.
Sık yapılan hata: Cümlede bir sanatı bulunca aramayı bırakmak. İki sanat isteniyorsa ikisini de doğrula.
Cevap A.`
},
{
  id: "tur-ss-307",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Eski çanta, kapının eşiğinde bekleyip ev halkının koşuşturmasını izliyor, her sabah derin bir iç çekiyordu. Kimse onu yeniden sırtlanıp yola çıkmıyordu.
**Bu parçada çantaya yapılan söz sanatı ve metne katkısı aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Benzetme; çantanın eskiliği başka bir eşyaya benzetilerek anlatılmıştır.",
    "Abartma; çantanın ağırlığı olduğundan fazla gösterilerek anlatılmıştır.",
    "Konuşturma; çantanın sözlerine yer verilerek öfkesi duyurulmuştur.",
    "Kişileştirme; çantanın unutulmuşluğu canlı bir varlık gibi duyurulmuştur."
  ],
  dogru: 3,
  hatalar: [
    "Benzetme edatı ya da 'X bir Y'dir' kalıbı yok; çanta başka bir şeye benzetilmiyor.",
    "Çantanın ağırlığından söz edilmiyor; ayrıca büyütülmüş bir durum yok.",
    "Çantanın söylediği bir söz aktarılmıyor; yalnızca iç çekmesi anlatılıyor. Bu konuşturma değil.",
    null
  ],
  aciklama: `Bir sanatı bulmak yetmez; sanatın metne ne kattığını da düşünmelisin.
Adım 1: Çanta bekliyor, izliyor, iç çekiyor. Bunlar insana özgü eylemlerdir; sanat kişileştirmedir.
Adım 2: Çantanın söylediği hiçbir söz aktarılmamış; konuşturma değil. Benzetme edatı ve büyütme de yok.
Adım 3: Çanta insan gibi iç çekince okuyucu, kullanılmayan bir eşyanın yalnızlığını ve unutulmuşluğunu canlı biçimde hisseder. Katkı budur.
Sağlama: Seçeneğin iki yarısı da (sanat ve katkı) uymalı. Yalnızca sanat adı doğru, katkı yanlış olan seçenekleri ele.
Cevap D.`
},
{
  id: "tur-ss-308",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, aşağıdaki tabloda dizelerin yanına hangi söz sanatını içerdiğini yazmıştır.
**Bu tabloda yazılan söz sanatlarından hangisi yanlıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Dize</th><th>Yazılan söz sanatı</th></tr><tr><td>I</td><td>Güneş, buluta bakıp "Çekil!" dedi.</td><td>Konuşturma</td></tr><tr><td>II</td><td>Bu kutuyu taşımaktan kollarım kopacaktı.</td><td>Benzetme</td></tr><tr><td>III</td><td>Evin içi sıcacık, dışarısı dondurucu soğuktu.</td><td>Karşıtlık</td></tr><tr><td>IV</td><td>Gözleri iki küçük ay gibi parlıyordu.</td><td>Benzetme</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "I. satır doğru: güneş konuşturulmuştur ('Çekil!' dedi). Bu satırı yanlış sanmak, konuşturmayı tanımamaktır.",
    null,
    "III. satır doğru: 'sıcacık' ile 'soğuk' zıt kavramlardır, karşıtlık vardır.",
    "IV. satır doğru: 'gibi' edatıyla gözler aya benzetilmiş, benzetme vardır."
  ],
  aciklama: `Soru "yanlıştır" diye sorduğu için her satırı kendi sanatıyla karşılaştırıp uymayanı bulacaksın.
Adım 1: I. satırda güneş "Çekil!" diyor. İnsan dışı varlığın sözü aktarılmış; konuşturma doğru.
Adım 2: II. satırda "kollarım kopacaktı" deniyor. Yük ne kadar ağır olursa olsun kol kopmaz; durum büyütülmüş. Bu abartmadır, benzetme değildir; hiçbir edat ya da benzetilen yok. Tabloda "Benzetme" yazılması yanlış.
Adım 3: III. satırda sıcacık - soğuk zıt kavramları var; karşıtlık doğru.
Adım 4: IV. satırda "gibi" edatı var; gözler aya benzetilmiş; benzetme doğru.
Sık yapılan hata: Bir cümlede mecaz bir anlatım görünce hemen benzetme demek. Benzetmede benzeyen, benzetilen ve ortak özellik bulunmalıdır.
Cevap B.`
},
{
  id: "tur-ss-309",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Sabah olunca liman, uykusundan yeni uyanmış bir çocuk gibi gerindi. Vapurun düdüğü şehrin bütün evlerini sarstı. Martılar balıkçı teknelerine selam verip açıklara uçtu.
**Bu parçada aşağıdaki söz sanatlarından hangisi __kullanılmamıştır__?**`,
  gorsel: null,
  secenekler: ["Benzetme", "Konuşturma", "Kişileştirme", "Abartma"],
  dogru: 1,
  hatalar: [
    "Bu sanat kullanılmış: 'uyanmış bir çocuk gibi' benzetmedir.",
    null,
    "Bu sanat kullanılmış: liman gerinir, martılar selam verir; insana özgü davranışlar var.",
    "Bu sanat kullanılmış: düdüğün şehrin bütün evlerini sarsması olduğundan büyük gösterilmiştir."
  ],
  aciklama: `Soru "kullanılmamıştır" dediği için dört sanatı da parçada tek tek arayacağız; bulamadığımız cevaptır.
Adım 1: "Uykusundan yeni uyanmış bir çocuk gibi gerindi" sözünde edat var; benzetme.
Adım 2: Liman geriniyor, martılar selam veriyor. Bunlar insana özgü; kişileştirme.
Adım 3: "Düdük bütün evleri sarstı" sözü gerçek dışı büyütme; abartma.
Adım 4: Hiçbir varlığın konuşması aktarılmamış; tırnak içi söz yok. Konuşturma kullanılmamış.
Sağlama: Konuşturma için bir sözün aktarılması şart. Parçada diyalog ya da tırnak içi söz yok.
Cevap B.`
},
{
  id: "tur-ss-310",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Kış, sessizce kapımızı çaldı;
dışarısı soğuk, içerisi sıcacıktı.
Sobanın başında toplandık akşam,
çayın buharı pencerelere yazı yazdı.
**Bu dizelerde aşağıdaki söz sanatlarından hangileri birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Kişileştirme ve abartma",
    "Karşıtlık ve benzetme",
    "Kişileştirme ve karşıtlık",
    "Kişileştirme ve konuşturma"
  ],
  dogru: 2,
  hatalar: [
    "Kişileştirme doğru ama abartma yok: hiçbir durum olduğundan büyük gösterilmemiş.",
    "Karşıtlık doğru ama benzetme yok: 'gibi, kadar, sanki' ya da 'X bir Y'dir' kalıbı bulunmuyor.",
    null,
    "Kişileştirme doğru ama konuşturma yok: hiçbir varlığın sözü aktarılmamış."
  ],
  aciklama: `Burada iki sanatı birlikte bulmalısın; yani her seçeneğin iki yarısını da dizelerle sınayacaksın.
Adım 1: "Kış kapımızı çaldı" ve "çayın buharı yazı yazdı" sözlerinde kış ve buhar insan gibi davranıyor. Kişileştirme var.
Adım 2: "Dışarısı soğuk, içerisi sıcacıktı" dizesinde soğuk ve sıcak zıt kavramlar. Karşıtlık var.
Adım 3: Hiçbir dizede edatla kurulmuş bir benzetme, büyütülmüş bir durum ya da tırnak içi söz yok. Benzetme, abartma ve konuşturma yok.
Sağlama: Seçeneklerde yarısı doğru olanları ele; iki sanatı da bulduğun seçenek kalır.
Cevap C.`
},
{
  id: "tur-ss-311",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, kütüphane izlenimlerini şu dizelerle anlatmış:
I. Kitaplığın en üst rafında bir sürü sözlük durur.
II. Lamba, odanın köşesinde uyuklayıp durdu.
III. Sayfalar kuş kanadı gibi hafif çırpınır.
IV. Okuma odasında öyle bir sessizlik vardı ki bütün dünya susmuştu.
**Bu dizelerin hangisinde __söz sanatı yoktur__?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Burada söz sanatı var: lamba, insan gibi uyuklayıp duruyor; kişileştirme.",
    "Burada söz sanatı var: 'gibi' edatıyla sayfalar kuş kanadına benzetilmiş; benzetme.",
    "Burada söz sanatı var: 'bütün dünya susmuştu' sözü durumu olduğundan büyük gösterir; abartma."
  ],
  aciklama: `Soru, hiçbir söz sanatı taşımayan dizeyi soruyor. Her dizeyi sırayla inceleyelim.
Adım 1: I. dizede sözlüklerin rafta durduğu olduğu gibi söyleniyor. Sanat yok.
Adım 2: II. dizede lamba uyukluyor; kişileştirme.
Adım 3: III. dizede "gibi" ile benzetme.
Adım 4: IV. dizede "bütün dünya susmuştu" sözü abartma.
Sık yapılan hata: "Kitaplık, sözlük" gibi sözcükleri görüp edebî bir hava olduğunu sanmak. Sanat, sözcüklerin sayısına değil anlatımın biçimine bağlıdır.
Cevap A.`
},
{
  id: "tur-ss-312",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde kişileştirme vardır, ancak konuşturma yoktur?**`,
  gorsel: null,
  secenekler: [
    "Ağaç, rüzgâra “Beni sallama!” diye seslendi.",
    "Kuyudaki su, “Beni kimse içmedi.” diyerek ağladı.",
    "Kitaplar, sahibine “Bizi unutma.” dedi.",
    "Deniz, kıyıdaki taşları sabırla okşadı."
  ],
  dogru: 3,
  hatalar: [
    "Burada ağacın sözü aktarılıyor; konuşturma var. Soru konuşturmanın olmadığı cümleyi istiyor.",
    "Burada suyun sözü tırnak içinde verilmiş; konuşturma var.",
    "Burada kitapların sözü aktarılıyor; konuşturma var.",
    null
  ],
  aciklama: `Konuşturma olan her yerde kişileştirme de vardır. Soru bunu tersine çevirip yalnızca kişileştirme olan, konuşma aktarılmayan cümleyi arıyor.
Adım 1: A, B ve C'de ağaç, su ve kitaplar konuşuyor. Sözleri tırnak içinde aktarılmış; konuşturma var.
Adım 2: D'de deniz taşları okşuyor. Okşamak insana özgüdür; kişileştirme var. Ama denizin sözü aktarılmamış; konuşturma yok.
Sağlama: Seçeneklerde tırnak içinde bir söz olanlar eleniyor; tırnaksız olan kalıyor.
Sık yapılan hata: Kişileştirme ile konuşturmayı aynı şey sanmak. Konuşturma, kişileştirmenin bir türüdür; sözün aktarılması şarttır.
Cevap D.`
},
{
  id: "tur-ss-313",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Türkçe öğretmeni tahtaya dört cümle yazdı. Sınıfa, bu cümlelerden yalnızca birinde benzetmenin "gibi, kadar, sanki" gibi bir edat kullanılmadan kurulduğunu söyledi. Bazı cümlelerde ise edat sözcükleri geçtiği hâlde hiçbir şey başka bir şeye benzetilmiyordu.
**Aşağıdaki cümlelerin hangisinde benzetme, benzetme edatı kullanılmadan kurulmuştur?**`,
  gorsel: null,
  secenekler: [
    "Küçük kardeşim, bir kedi yavrusu kadar meraklıdır.",
    "Her sabah olduğu gibi servis bu kez de geç kaldı.",
    "Servis, kırk dakika kadar bekledikten sonra yola çıktı.",
    "Babaannemin sesi, bu evin en güvenli limanıdır."
  ],
  dogru: 3,
  hatalar: [
    "Burada benzetme var ama 'kadar' edatıyla kurulmuş: kardeş kedi yavrusuna benzetiliyor.",
    "'Gibi' sözcüğü geçiyor ama benzetme yok: 'her sabah olduğu gibi' bir durumun yinelendiğini bildirir, hiçbir şey başka bir şeye benzetilmiyor.",
    "'Kadar' sözcüğü geçiyor ama benzetme yok: 'kırk dakika kadar' yaklaşık bir süre bildirir, hiçbir şey başka bir şeye benzetilmiyor.",
    null
  ],
  aciklama: `Benzetme iki şekilde kurulabilir: "gibi, kadar, sanki" gibi edatlarla ya da "X bir Y'dir" biçimiyle (edatsız). Edat sözcüğünün cümlede geçmesi tek başına benzetme demek değildir.
Adım 1: A'da "kadar" edatı var; kardeş kedi yavrusuna benzetilmiş. Edatlı benzetme.
Adım 2: B'de "gibi" sözcüğü geçiyor ama "her sabah olduğu gibi" bir benzetme kurmaz; servisin yine geç kaldığı anlatılıyor.
Adım 3: C'de "kadar" sözcüğü geçiyor ama "kırk dakika kadar" yaklaşık süre bildirir; benzetme yok.
Adım 4: D'de "ses ... limandır" deniyor; ses liman olarak anlatılıyor, edat kullanılmamış. Ortak özellik güven verme. Edatsız benzetme budur.
Sağlama: Cümleyi "X, Y gibi" biçiminde okuyabiliyor musun? D'de "Ses, liman gibidir" diye okunabilir; B ve C'de okunamaz.
Cevap D.`
},
{
  id: "tur-ss-314",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Dede, bahçeye çıkıp "Bu yıl elmalar erken olgunlaştı." dedi. Ali ise yaşlı ağacın dalına dokunup "Çok güzel meyve verdin." diye fısıldadı. Ağaç hışırdayarak "Teşekkürler, ama asıl emek sizin." cevabını verdi.
**Bu parçada konuşturma sanatı hangi varlık için yapılmıştır?**`,
  gorsel: null,
  secenekler: ["Ali", "Ağaç", "Dede", "Elmalar"],
  dogru: 1,
  hatalar: [
    "Ali bir insan; konuşması doğal. Konuşturma, insan olmayan varlığın konuşturulmasıdır.",
    null,
    "Dede de bir insan; konuşması gerçekte olur. Konuşturma için insan dışı varlık gerekir.",
    "Elmalar parçada konuşmuyor; yalnızca olgunlaşmaları anlatılıyor."
  ],
  aciklama: `Konuşturma, konuşamayan bir varlığa söz söyletmektir.
Adım 1: Dede ve Ali insan; sözleri gerçekte de söylenebilir. Konuşturma değil.
Adım 2: Elmalar yalnızca olgunlaşmış; sözü aktarılmamış.
Adım 3: Ağaç "Teşekkürler, ama asıl emek sizin." diyor. Ağaç konuşamaz; sözü aktarıldığı için konuşturma burada.
Sağlama: Tırnak içindeki her sözün sahibini sor: insan mı değil mi? İnsan değilse konuşturmadır.
Cevap B.`
},
{
  id: "tur-ss-315",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Edebiyat öğretmeni, dört öğrencisine karşıtlık içeren bir cümle yazmalarını istedi. Öğrencilerin yazdıklarından yalnızca birinde zıt kavramlar anlam etkisi için bir arada kullanılmıştı; diğerlerinde başka sanatlar ya da sıradan anlatım vardı.
**Aşağıdaki cümlelerin hangisinde karşıtlık vardır?**`,
  gorsel: null,
  secenekler: [
    "Yıllarca uzaklarda aradığım huzuru, meğer en yakınımdaki sofrada buluyormuşum.",
    "Karşı kaldırımdaki fırının önünde ekmek için uzun bir sıra olmuştu.",
    "Dalgalar, kıyıdaki kayalara öfkeyle vurup bir süre soluklanmadı.",
    "Havuzun suyu cam gibi berraktı, derinlerdeki taşlar bile görünüyordu."
  ],
  dogru: 0,
  hatalar: [
    null,
    "'Karşı' sözcüğüne aldanma: zıt kavramlar yan yana kullanılmamış, sıradan bir anlatım.",
    "Dalgalar öfkeleniyor; bu kişileştirmedir. Zıt kavram yok.",
    "'Cam gibi berrak' benzetmedir; zıt kavram yok."
  ],
  aciklama: `Karşıtlık, birbirine zıt kavramların etkiyi artırmak için aynı sözde bir arada kullanılmasıdır.
Adım 1: A'da "uzaklarda" ve "en yakınımdaki" zıt kavramlar; aynı cümlede bir arada kullanılmış. "Karşı" ya da "zıt" sözü geçmese de karşıtlık budur.
Adım 2: B'de "karşı" sözcüğü geçiyor ama kaldırım, fırın ve sıra arasında zıt bir çift yok.
Adım 3: C'de öfkelenen dalga kişileştirmedir. D'de "cam gibi" benzetmedir.
Sağlama: Karşıtlıkta kelimeleri çiftler hâlinde ara: uzak - yakın, sıcak - soğuk, gece - gündüz. Sözcüğün yalnızca "karşı" anlamı taşıması karşıtlık yapmaz.
Cevap A.`
},
{
  id: "tur-ss-316",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun ilk günü bir öğrenci defterine şunları yazmış:
(I) Uzun yaz tatilinin ardından okula döndüğümüzde sınıf, kaynayan bir kazan gibi gürültülüydü.
(II) Koridorun bir ucu gürültüyle, öbür ucu sessizlikle doluydu.
(III) Öğretmenimiz kapıdan girince tahta, bizi sessizce süzmeye başladı.
(IV) Defterlerimizi açıp yeni dönemin ilk dersine başladık.
**Bu cümlelerde sırasıyla benzetme ve karşıtlık hangi numaralı cümlelerde vardır?**`,
  gorsel: null,
  secenekler: ["I ve III", "III ve II", "I ve II", "II ve IV"],
  dogru: 2,
  hatalar: [
    "I doğru (benzetme) ama III karşıtlık değil; tahtanın süzmesi kişileştirmedir.",
    "Sırayı ve cümleleri karıştırma: III'te benzetme yok, kişileştirme var; karşıtlık II'dedir.",
    null,
    "Sırayı ters kurma: II'de benzetme değil karşıtlık var; IV'te ise sanat yok."
  ],
  aciklama: `Soruda hem iki sanat hem de sıra isteniyor: önce benzetmenin, sonra karşıtlığın bulunduğu cümle.
Adım 1: (I) cümlesinde "kazan gibi" edatlı benzetme var.
Adım 2: (II) cümlesinde "gürültü" ve "sessizlik" zıt kavramlar; karşıtlık var.
Adım 3: (III) cümlesinde tahta insan gibi süzüyor; kişileştirme. (IV) cümlesinde sanat yok.
Adım 4: Sıra: benzetme (I), karşıtlık (II).
Sağlama: Cevabı "benzetme: I, karşıtlık: II" biçiminde yaz, sonra seçeneklerle karşılaştır.
Sık yapılan hata: Sırayı unutup "II ve I" ya da başka sıralamayı seçmek.
Cevap C.`
},
{
  id: "tur-ss-317",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `I. Köprü, gergin bir yay gibi nehrin üstüne gerildi,
II. Dere, taşlara "Beni de yanınıza alın." diye seslendi,
III. Gündüz sustu, gece ağır ağır konuşmaya başladı,
IV. Ben o gece gözümü kırpmadan bir ömür bekledim.
**Bu dizeler için aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "I. dizede benzetme vardır.",
    "IV. dizede kişileştirme vardır.",
    "II. dizede konuşturma vardır.",
    "III. dizede karşıtlık vardır."
  ],
  dogru: 1,
  hatalar: [
    "Bu söylenebilir: 'yay gibi' edatıyla köprü yaya benzetilmiş.",
    null,
    "Bu söylenebilir: derenin sözü tırnak içinde aktarılıyor.",
    "Bu söylenebilir: 'gündüz' - 'gece' ve 'sustu' - 'konuşmaya başladı' zıt kavramlardır."
  ],
  aciklama: `"Söylenemez" diyen sorularda üç seçenek doğru, biri yanlıştır; yanlış olanı bulacağız.
Adım 1: I. dizede "gibi" ile köprü yaya benzetiliyor. Benzetme var; seçenek doğru.
Adım 2: II. dizede derenin sözü tırnak içinde veriliyor; konuşturma var; seçenek doğru.
Adım 3: III. dizede gündüz - gece ve sustu - konuşmaya başladı zıt çiftleri var; karşıtlık var; seçenek doğru.
Adım 4: IV. dizede konuşan "ben"dir, yani bir insan. İnsan olmayan bir varlığa insanlık verilmemiş; kişileştirme yok. "Bir ömür bekledim" ise abartmadır. Bu seçenek yanlış.
Cevap B.`
},
{
  id: "tur-ss-318",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Annem gidince ev, bir kuyu kadar derin oldu,
bekleyiş boyunca bir dakika bütün bir yıl sürdü.
**Bu dizelerde birlikte kullanılan söz sanatları ve bunların anlama katkısı aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Kişileştirme ve abartma; evin duygusal bir varlık olduğu gösterilmiştir.",
    "Benzetme ve karşıtlık; evdeki sessizlikle bekleyişin zıtlığı gösterilmiştir.",
    "Konuşturma ve benzetme; evin sesiyle annenin özlemi dile getirilmiştir.",
    "Benzetme ve abartma; evdeki boşluk ile bekleyişin ağırlığı vurgulanmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Abartma doğru ama kişileştirme yok: ev insana özgü bir davranış yapmıyor; 'derin oldu' bir benzetmedir.",
    "Benzetme doğru ama karşıtlık yok: zıt kavram çifti bulunmuyor.",
    "Benzetme doğru ama konuşturma yok: hiçbir varlığın sözü aktarılmamış.",
    null
  ],
  aciklama: `Bu soruda iki adım var: sanatları bul, sonra katkıyı sına.
Adım 1: Birinci dizede "kuyu kadar derin" sözünde "kadar" edatı var; ev kuyuya benzetilmiş. Benzetme.
Adım 2: İkinci dizede bir dakikanın bütün bir yıl sürmesi gerçek dışı büyütme; abartma.
Adım 3: Kişileştirme, karşıtlık ve konuşturma dizelerde yok; böylece A, B ve C elenir.
Adım 4: Kuyu benzetmesi evdeki boşluğu, "bir dakikanın bir yıl sürmesi" abartması bekleyişin ağırlığını duyuruyor. D'nin katkı cümlesi de buna uyuyor.
Sık yapılan hata: Yalnız sanat adına bakıp katkıyı okumamak. İkisi de uymalı.
Cevap D.`
},
{
  id: "tur-ss-319",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Hafta sonu arkadaşlarımla göl kıyısında kamp kurduk. İlk gece __çadırın kapısı rüzgârla sallanıp "Beni sıkı bağla." dedi__, sabaha doğru ise __ay, gümüş bir tepsi gibi gölün üstünde asılıydı__. Soğuk öyle sertti ki __dişlerimin takırtısı bütün ormanı uyandırdı__.
**Bu parçada altı çizili sözlerde sırasıyla hangi söz sanatları kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Konuşturma - benzetme - abartma",
    "Konuşturma - abartma - benzetme",
    "Benzetme - konuşturma - abartma",
    "Abartma - benzetme - konuşturma"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sıra karışmış: ikinci altı çizili sözde 'gibi' edatı var, yani benzetme; üçüncüde ise büyütme var, yani abartma.",
    "Sıra karışmış: ilk sözde çadırın kapısı konuşuyor, bu konuşturmadır; benzetme ikincidedir.",
    "Sıra tamamen karışmış: ilk söz abartma değil, çadır kapısının konuştuğu bir konuşturmadır."
  ],
  aciklama: `Üç altı çizili söz var; her birini ayrı ayrı çözüp sırayla yazacaksın.
Adım 1: "Çadırın kapısı ... 'Beni sıkı bağla.' dedi" sözünde kapının sözü aktarılmış; konuşturma.
Adım 2: "Ay, gümüş bir tepsi gibi gölün üstünde asılıydı" sözünde "gibi" edatı var; ay tepsiye benzetilmiş; benzetme.
Adım 3: "Dişlerimin takırtısı bütün ormanı uyandırdı" sözü gerçek dışı büyütme; abartma.
Adım 4: Sıra: konuşturma, benzetme, abartma.
Sağlama: Her altı çizili sözü tek tek eşleştir; sonra sırayı seçeneklerle karşılaştır.
Cevap A.`
},
{
  id: "tur-ss-320",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `I. Ay, dağın ardına utana utana saklandı.
II. Gölün yüzü ayna gibi parlıyordu.
III. Yaz sıcağı bütün denizi kaynatmaya yeterdi.
IV. Rüzgâr, kapıma gelip "Aç!" diye bağırdı.
**Bu dizelerin hangilerinde kişileştirme __yoktur__?**`,
  gorsel: null,
  secenekler: ["II ve III", "I ve IV", "I ve II", "III ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Ters seçmişsin: I'de ay utanıp saklanıyor, IV'te rüzgâr bağırıyor; ikisinde de kişileştirme var.",
    "I'de ay utandığı için kişileştirme var; yalnızca II'de yok.",
    "IV'te rüzgâr konuşuyor, bu hem konuşturma hem kişileştirmedir; yalnızca III'te yok."
  ],
  aciklama: `Soru kişileştirmenin bulunmadığı dizeleri istiyor; önce bulunduğu dizeleri çıkaralım.
Adım 1: I. dizede ay utanıp saklanıyor; utanmak insana özgüdür, kişileştirme var.
Adım 2: II. dizede "gibi" ile gölün yüzü aynaya benzetilmiş; kişileştirme yok.
Adım 3: III. dizede "bütün denizi kaynatmaya yeterdi" abartma; kişileştirme yok.
Adım 4: IV. dizede rüzgâr kapıya gelip "Aç!" diye bağırıyor. Konuşturma var; konuşturma olduğu için kişileştirme de var.
Adım 5: Kişileştirme olmayanlar II ve III.
Sık yapılan hata: Konuşturmayı kişileştirmeden ayrı sanıp IV'ü "kişileştirme yok" saymak.
Cevap A.`
},
{
  id: "tur-ss-321",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şair adayı, defterine aşağıdaki dizeleri yazmıştır.
**Tablodaki dizelerin hangisinde karşıtlık ve abartma birlikte kullanılmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Dize</th></tr><tr><td>I</td><td>Ev bomboş, kalbim dopdolu.</td></tr><tr><td>II</td><td>Gece, sessizce yorganını bize örttü.</td></tr><tr><td>III</td><td>Bir saniyelik sevincin için bütün ömrümce üzüldüm.</td></tr><tr><td>IV</td><td>Sesi, dağları taşları yerinden oynattı.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Karşıtlık var ('bomboş' - 'dopdolu') ama abartma yok; ikinci sanat eksik.",
    "Kişileştirme var (gece yorgan örtüyor); karşıtlık ve abartma yok.",
    null,
    "Abartma var (sesin dağları taşları yerinden oynatması) ama karşıtlık yok; ikinci sanat eksik."
  ],
  aciklama: `İki sanatı aynı dizede bulmalısın: karşıtlık ve abartma.
Adım 1: I. dizede "bomboş" ve "dopdolu" zıt; karşıtlık var. Ama durum büyütülmemiş; abartma yok.
Adım 2: II. dizede gece insan gibi yorgan örtüyor; kişileştirme.
Adım 3: III. dizede "sevinç" - "üzüldüm" zıt kavramlar (karşıtlık); "bir saniye" - "bütün ömrümce" ise durumu çok büyütür (abartma). İki sanat birlikte.
Adım 4: IV. dizede abartma var, karşıtlık yok.
Sağlama: Dizede önce zıt çifti, sonra büyütülen bir ifadeyi ara.
Cevap C.`
},
{
  id: "tur-ss-322",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `(I) Eski terazi, yorgun bir hamal gibi bir yana eğilmişti.
(II) Çocuklar tezgâhın başına toplanınca terazi, "Bana çok yük bindirmeyin." diye sızlandı.
(III) Bakkal Hasan Amca, bir kuruşluk fiyat farkı için yeryüzündeki herkesten özür diledi.
(IV) Hasan Amca'nın sesi yumuşak, bakışları sertti.
**Bu parçayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I. cümlede abartma vardır.",
    "II. cümlede benzetme vardır.",
    "III. cümlede kişileştirme vardır.",
    "IV. cümlede karşıtlık vardır."
  ],
  dogru: 3,
  hatalar: [
    "I. cümlede 'gibi' ile terazi hamala benzetilmiş; durum büyütülmemiş, abartma yok.",
    "II. cümlede terazi konuşturulmuş; benzetme edatı ya da 'X bir Y'dir' yok.",
    "III. cümlede kişileştirme yok: özür dileyen bir insan. 'Yeryüzündeki herkesten özür dilemek' ise abartmadır.",
    null
  ],
  aciklama: `Dört cümleyi sırayla çözüp seçeneklerdeki iddialarla karşılaştıracağız.
Adım 1: (I) "Yorgun bir hamal gibi" benzetmedir. Abartma yok; A yanlış.
Adım 2: (II) Terazi konuşuyor; konuşturma ve kişileştirme var. Benzetme yok; B yanlış.
Adım 3: (III) Özür dileyen Hasan Amca bir insan; kişileştirme yok. "Yeryüzündeki herkesten özür dilemek" abartmadır. C yanlış.
Adım 4: (IV) "Yumuşak" ve "sert" zıt kavramlar; karşıtlık var. D doğru.
Sık yapılan hata: Cümledeki sanatı bulup cümle numarasını karıştırmak. Önce her cümleyi etiketle, sonra seçenekleri oku.
Cevap D.`
},
{
  id: "tur-ss-323",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Eski mahallemizdeki incir ağacı, her yaz bize gölgesini kardeşçe paylaştırırdı. Öğle vakti ağacın altı buz gibi serindi. Oyuna dalınca saatlerin nasıl geçtiğini hiç anlamazdık.
I. Parçada konuşturma vardır.
II. Parçada kişileştirme ve benzetme birlikte kullanılmıştır.
III. Parçada karşıtlık vardır.
**Bu parça için yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I yanlış: ağaç ya da başka bir varlık konuşmuyor; sözü aktarılan insan dışı varlık yok.",
    null,
    "I ve III yanlış: konuşturma yok; ayrıca zıt kavram çifti de yok. Karşıtlık yok.",
    "III yanlış: parçada zıt kavramlar bir arada kullanılmamış; karşıtlık yok."
  ],
  aciklama: `Üç yargıyı tek tek parçayla sınayacağız.
Adım 1: I. yargı: Hiçbir varlığın sözü aktarılmıyor; konuşturma yok. I yanlış.
Adım 2: II. yargı: "Gölgesini kardeşçe paylaştırırdı" sözünde ağaç insan gibi davranıyor; kişileştirme. "Buz gibi serindi" sözünde "gibi" edatı var; benzetme. İki sanat birlikte; II doğru.
Adım 3: III. yargı: Zıt kavram çifti yok. III yanlış.
Adım 4: Yalnız II doğru.
Sağlama: Yargıların hiçbirini ezbere kabul etme; her biri için parçada kanıt satırı bul.
Cevap B.`
},
{
  id: "tur-ss-324",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Kıyıdaki eski fener, geceleri gemilere göz kırpıp yol gösteriyordu. Bir fırtına gecesinde fener, denize "Ben buradayım, korkmayın!" diye seslendi. Gemiler, dalgaların arasında yavru kuşlar gibi ışığa koştu.
**Bu parçayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Fenerin göz kırpması abartmadır; gemiler ise yavru kuşlara benzetilmiştir.",
    "Fenerin denize seslenmesi yalnızca kişileştirmedir; konuşturma kullanılmamıştır.",
    "Fener hem kişileştirilmiş hem konuşturulmuştur; gemiler ise yavru kuşlara benzetilmiştir.",
    "Fener ile dalgalar arasında karşıtlık kurulmuştur; gemiler ise kişileştirilmiştir."
  ],
  dogru: 2,
  hatalar: [
    "İkinci yarı doğru ('yavru kuşlar gibi' benzetmedir) ama fenerin göz kırpması abartma değil, kişileştirmedir; durum büyütülmüyor.",
    "Kişileştirme doğru ama konuşturma da var: fenerin sözü tırnak içinde aktarılıyor. 'Yalnızca' demek konuşturmayı görmemektir.",
    null,
    "Fener ile dalgalar arasında zıt kavram çifti yok; karşıtlık kurulmamış. Gemiler ise 'gibi' edatıyla benzetilmiş."
  ],
  aciklama: `Dört iddiayı parçayla tek tek sınayacağız; bir iddianın iki yarısı da doğru olmalı.
Adım 1: Fener göz kırpıyor ve yol gösteriyor; insana özgü davranışlar, yani kişileştirme. Durum büyütülmediği için abartma yok. A elenir.
Adım 2: Fener denize "Ben buradayım, korkmayın!" diyor; insan dışı varlığın sözü aktarıldığı için konuşturma var. Konuşturma olan yerde kişileştirme de bulunur. B ("yalnızca kişileştirme") elenir.
Adım 3: Gemiler "yavru kuşlar gibi" sözüyle benzetilmiş. Fener hem kişileştirilmiş hem konuşturulmuş olduğu için C'nin iki yarısı da doğrudur.
Adım 4: Zıt kavram çifti (gece-gündüz, sıcak-soğuk gibi) olmadığı için D'deki karşıtlık yok.
Sık yapılan hata: Seçeneğin yalnız bir yarısı doğru diye seçmek. İki yarı da parçayla uymalı.
Cevap C.`
},
{
  id: "tur-ss-325",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bisiklet yarışının başlangıcında kimi sporcu ileri atılıyor, kimi geride kalıyordu. Kırmızı formalı sporcular, yola dökülmüş bir lale tarlası gibi parlıyordu.
I. Parçada abartma vardır.
II. Parçada kişileştirme vardır.
III. Parçada karşıtlık ve benzetme birlikte kullanılmıştır.
**Bu parça için yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız III", "Yalnız I", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "I yanlış: hiçbir durum olduğundan büyük gösterilmemiş; abartma yok.",
    "I ve II yanlış: abartma ve kişileştirme yok. Doğru olan III'ü de dışarıda bırakmış olursun.",
    "II yanlış: sporcular lale tarlasına benzetiliyor ama insan dışı bir varlığa insana özgü davranış verilmiyor; kişileştirme yok."
  ],
  aciklama: `Üç yargıyı parçayla sınayalım.
Adım 1: I. yargı: "Atılıyor", "geride kalıyordu" gerçek eylemler; büyütme yok. Abartma yok.
Adım 2: II. yargı: Sporcular lale tarlasına benzetiliyor. "Parlamak" insana özgü bir eylem değil; kişileştirme yok.
Adım 3: III. yargı: "İleri atılıyor" - "geride kalıyordu" zıt kavramlar; karşıtlık var. "Lale tarlası gibi" edatlı benzetme. III doğru.
Adım 4: Yalnız III doğru.
Sık yapılan hata: "Parlıyordu" sözünü kişileştirme sanmak. Parlamak insana özgü bir davranış değildir; burada sporcular bir lale tarlasına benzetiliyor.
Cevap A.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "tur-ss-001",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde kişileştirme vardır?**`,
  gorsel: null,
  secenekler: [
    "Ay, gece boyunca gökyüzünde parlak görünüyordu.",
    "Bulutlar, rüzgârla birlikte doğuya doğru hareket etti.",
    "Yıldızlar, bizi izleyip göz kırparak gülümsedi.",
    "Yağmur, öğleden sonra yarım saat boyunca yağdı."
  ],
  dogru: 2,
  hatalar: [
    "Ay'ın parlak görünmesi gerçek bir durum; insana özgü davranış yok.",
    "Bulutların hareket etmesi doğal bir olay; insana özgü davranış yok.",
    null,
    "Yağmurun yağması doğal bir olay; insana özgü davranış yok."
  ],
  aciklama: `Kişileştirme, insan olmayan varlıklara insana özgü davranış vermektir.
Adım 1: A, B ve D'de ay, bulutlar ve yağmur doğal olaylarını yapıyor.
Adım 2: C'de yıldızlar izliyor, göz kırpıyor ve gülümsüyor. Bunlar insana özgü; kişileştirme.
Sağlama: "Bu işi gerçekten yıldızlar yapabilir mi?" diye sor. Yapamıyorsa kişileştirmedir.
Cevap C.`
},
{
  id: "tur-ss-002",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde benzetme vardır?**`,
  gorsel: null,
  secenekler: [
    "Sınıfımız arı kovanı gibi gürültülüydü.",
    "Kardeşim dün akşam yatmadan önce dişlerini fırçaladı.",
    "Bunu sana bin kere söyledim, ama dinlemedin.",
    "Kapı, rüzgârla birlikte “Gir!” dedi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sıradan bir anlatım; hiçbir şey başka bir şeye benzetilmiyor.",
    "Bu cümlede 'bin kere' sözü durumu büyütür; abartmadır.",
    "Bu cümlede kapı konuşturulmuş; konuşturmadır."
  ],
  aciklama: `Benzetme, bir şeyin başka bir şeye özelliği bakımından benzetilmesidir. "Gibi, kadar, sanki" gibi edatlar işaret verir.
Adım 1: A'da sınıf arı kovanına "gibi" edatıyla benzetiliyor; ortak özellik gürültü.
Adım 2: B sıradan bir anlatım. C'de "bin kere" abartma. D'de kapı konuşuyor; konuşturma.
Sağlama: İki şey arasında ortak özellik kurulmuş mu? Sadece A'da var.
Cevap A.`
},
{
  id: "tur-ss-003",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde karşıtlık vardır?**`,
  gorsel: null,
  secenekler: [
    "Çocuk, oyuncağını sevgiyle kucakladı.",
    "Akşam olunca bütün kuşlar yuvalarına döndü.",
    "Gökyüzü, yağmurdan sonra pırıl pırıl oldu.",
    "Gülerken ağlıyor, ağlarken gülüyordu."
  ],
  dogru: 3,
  hatalar: [
    "Sanat yok: zıt kavram çifti geçmiyor.",
    "Sanat yok: sıradan bir anlatım, zıt kavram çifti yok.",
    "Sanat yok: 'pırıl pırıl' ikilemedir, karşıtlık değil.",
    null
  ],
  aciklama: `Karşıtlık, zıt kavramların aynı sözde birlikte kullanılmasıdır.
Adım 1: A, B ve C'de zıt kavram çifti yok.
Adım 2: D'de "gülmek" ve "ağlamak" zıt kavramlar; yan yana kullanılmış.
Sağlama: Zıt çifti bul: gülmek - ağlamak.
Cevap D.`
},
{
  id: "tur-ss-004",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde abartma vardır?**`,
  gorsel: null,
  secenekler: [
    "Annem bu kitabı bin lira vererek bana aldı.",
    "Bu çanta öyle ağır ki içinde koca bir dağ taşıyorum.",
    "Çocuk, hırsından kıpkırmızı bir domates gibi oldu.",
    "Dere, taşların arasından mırıldanarak aktı."
  ],
  dogru: 1,
  hatalar: [
    "'Bin' sözcüğü geçiyor ama abartma yok: bin lira gerçek bir fiyattır, durum büyütülmemiş.",
    null,
    "Bu cümlede benzetme var ('gibi' edatı); durum büyütülmüyor.",
    "Bu cümlede kişileştirme var: dere mırıldanıyor."
  ],
  aciklama: `Abartma, bir durumu olduğundan çok büyük ya da çok küçük göstermektir.
Adım 1: A'da "bin lira" gerçek bir fiyat; sayı büyük görünse de durum büyütülmüyor. Abartma yok.
Adım 2: B'de çantanın içinde "koca bir dağ" taşındığı söyleniyor; gerçek dışı büyütme. Abartma.
Adım 3: C benzetme, D kişileştirme.
Sağlama: "Gerçekte olabilir mi?" diye sor. Olamıyorsa ve büyütme amaçlıysa abartmadır.
Cevap B.`
},
{
  id: "tur-ss-005",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `Kerem, kış tatilinde dağ evine gitti. Sabah pencereyi açtığında __kar, yamaçlara beyaz bir örtü gibi serilmişti__. Soğuk havada burnu kıpkırmızı olmuştu.
**Bu parçada altı çizili sözde hangi söz sanatı vardır?**`,
  gorsel: null,
  secenekler: ["Karşıtlık", "Benzetme", "Abartma", "Konuşturma"],
  dogru: 1,
  hatalar: [
    "Zıt kavram çifti yok; karşıtlık değil.",
    null,
    "Durum olduğundan büyük gösterilmemiş; abartma değil.",
    "Hiçbir varlığın sözü aktarılmamış; konuşturma değil."
  ],
  aciklama: `Altı çizili sözde "gibi" edatı var.
Adım 1: Kar, beyaz bir örtüye benzetilmiş; ortak özellik, yamaçları kaplaması ve beyazlık.
Adım 2: Zıt kavram yok, büyütme yok, tırnak içi söz yok.
Sağlama: Edatı sözden çıkarınca "kar örtüdür" biçiminde okunuyorsa benzetmedir.
Cevap B.`
},
{
  id: "tur-ss-006",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `Kütüphanede sessizce çalışırken raflardaki kitaplar birbirine "Bizi yine kimse okumadı." diye fısıldaştı. Ben ise sayfaları çevirmeye devam ettim.
**Bu parçada kitaplar için hangi söz sanatı kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["Karşıtlık", "Abartma", "Benzetme", "Konuşturma"],
  dogru: 3,
  hatalar: [
    "Zıt kavram çifti yok.",
    "Durum büyütülmemiş; abartma yok.",
    "Benzetme edatı ya da 'X bir Y'dir' yok.",
    null
  ],
  aciklama: `Konuşturma, insan olmayan bir varlığın sözünü aktarmaktır.
Adım 1: Kitaplar fısıldaşıyor ve sözleri tırnak içinde aktarılıyor.
Adım 2: Kitaplar konuşamaz; bu yüzden konuşturma.
Sağlama: Tırnak içindeki sözün sahibi insan değil.
Cevap D.`
},
{
  id: "tur-ss-007",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde __kişileştirme yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Sabah, sokak kedileri çöpün çevresinde toplandı.",
    "Rüzgâr, yaprakları kovalayıp bahçeden çıkardı.",
    "Dalgalar, kıyıya usulca selam verdi.",
    "Güneş, bulutların ardında oyun oynadı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Rüzgâr yaprakları kovalıyor; kişileştirme var.",
    "Dalgalar selam veriyor; kişileştirme var.",
    "Güneş oyun oynuyor; kişileştirme var."
  ],
  aciklama: `Soru kişileştirme olmayan cümleyi soruyor.
Adım 1: B'de rüzgâr kovalıyor, C'de dalgalar selam veriyor, D'de güneş oyun oynuyor. Üçü de insana özgü davranışlar.
Adım 2: A'da kediler toplanıyor; bu kedilerin kendi doğal davranışı.
Sık yapılan hata: Canlı varlık geçince (kedi) kişileştirme sanmak. Kediden beklenen davranış zaten gerçektir.
Cevap A.`
},
{
  id: "tur-ss-008",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `Öğretmenimizin sesi, sabah çanı gibi bütün koridoru doldurdu.
**Bu cümlede kendisine benzetilen öge aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Öğretmenin sesi",
    "Koridorun uzunluğu",
    "Sabah çanı",
    "Doldurma işi"
  ],
  dogru: 2,
  hatalar: [
    "'Öğretmenin sesi' benzeyendir, yani başka bir şeye benzetilen ögedir.",
    "Koridor yalnızca yerini bildirir; benzetmenin ögesi değildir.",
    null,
    "'Doldurmak' eylemdir; benzetmenin ögesi değildir."
  ],
  aciklama: `Benzeyen, başka bir şeye benzetilen ögedir. Kendisine benzetilen ise benzediği şeydir.
Adım 1: Öğretmenin sesi, sabah çanına benzetiliyor. Benzeyen: öğretmenin sesi.
Adım 2: Kendisine benzetilen: sabah çanı. Edat: gibi.
Sağlama: "X, Y gibi" kalıbında X benzeyen, Y kendisine benzetilendir.
Cevap C.`
},
{
  id: "tur-ss-009",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, okul bahçesini anlatan şu dizeleri yazmış:
I. Okul bahçesinde çınar ağacı yaprak döküyor.
II. Zil sesi, bir kuş sürüsü gibi dağıldı.
III. Mektubu okurken bir yandan seviniyor, bir yandan üzülüyordum.
IV. Gözlerim saatlerce yaşlarla doldu, sel oldu.
**Bu dizelerin hangisinde karşıtlık vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Sanat yok: ağacın yaprak dökmesi doğal bir olay.",
    "Burada 'gibi' ile benzetme var; zıt çift yok.",
    null,
    "Burada gözyaşının sel olması abartmadır; zıt çift yok."
  ],
  aciklama: `Karşıtlıkta zıt kavramlar aynı sözde bir arada bulunur.
Adım 1: I'de sanat yok. II'de "gibi" ile benzetme. IV'te "sel oldu" abartma.
Adım 2: III'te "seviniyor" ve "üzülüyordum" zıt kavramlar. Karşıtlık.
Sağlama: Zıt çifti bul: sevinmek - üzülmek.
Cevap C.`
},
{
  id: "tur-ss-010",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 3,
  soru: `Bulut, yorgun bir yolcu gibi dağa yaslandı,
güneş ona "Yolun açık olsun." dedi.
**Bu dizelerde hangi söz sanatları birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Benzetme ve konuşturma",
    "Karşıtlık ve konuşturma",
    "Benzetme ve abartma",
    "Abartma ve karşıtlık"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Konuşturma doğru ama karşıtlık yok: zıt kavram çifti geçmiyor.",
    "Benzetme doğru ama abartma yok: hiçbir durum büyütülmemiş.",
    "İkisi de yok: büyütülen durum ve zıt çift bulunmuyor."
  ],
  aciklama: `İki sanatı birlikte bulacağız.
Adım 1: Birinci dizede "yorgun bir yolcu gibi" edatlı benzetme.
Adım 2: İkinci dizede güneşin sözü aktarılıyor; konuşturma.
Adım 3: Abartma ve karşıtlık yok.
Sağlama: Her seçeneğin iki yarısını da sına; ikisi de uyuyorsa doğru.
Cevap A.`
},
{
  id: "tur-ss-011",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 3,
  soru: `Sabah erken saatte vadiye sis çökmüştü. Sis, yamaçları ince bir tül gibi sarmıştı. Pencerenin önündeki dut ağacı "Üşüyorum." diyerek dallarını titretti.
I. Parçada benzetme vardır.
II. Parçada karşıtlık vardır.
III. Parçada konuşturma vardır.
**Bu parça için yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "Eksik: III de doğru, dut ağacı konuşuyor.",
    "Eksik: I de doğru, 'tül gibi' benzetmedir.",
    "II yanlış: parçada zıt kavram çifti yok.",
    null
  ],
  aciklama: `Her yargıyı parçayla sınayalım.
Adım 1: I. yargı: "İnce bir tül gibi" edatlı benzetme; doğru.
Adım 2: II. yargı: Zıt kavram çifti yok; yanlış.
Adım 3: III. yargı: Dut ağacı "Üşüyorum." diyor; konuşturma; doğru.
Adım 4: Doğru olanlar I ve III.
Cevap D.`
},
{
  id: "tur-ss-012",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 3,
  soru: `Bisikletim yokuşu çıkarken bir kaplan gibi hırlıyordu. Pedallar, yorgun bacaklarıma "Dur artık!" dedi. Eve vardığımda bütün şehri yürümüş kadar yorgundum.
**Bu parçada aşağıdaki söz sanatlarından hangisi __kullanılmamıştır__?**`,
  gorsel: null,
  secenekler: ["Benzetme", "Karşıtlık", "Kişileştirme", "Abartma"],
  dogru: 1,
  hatalar: [
    "Bu sanat kullanılmış: 'kaplan gibi hırlıyordu' benzetmedir.",
    null,
    "Bu sanat kullanılmış: bisiklet hırlıyor, pedallar konuşuyor.",
    "Bu sanat kullanılmış: 'bütün şehri yürümüş kadar yorgun' durumu büyütür."
  ],
  aciklama: `Soru kullanılmayan sanatı soruyor.
Adım 1: "Kaplan gibi hırlıyordu" benzetme; hırlayan bisiklet ve konuşan pedallar kişileştirme.
Adım 2: "Bütün şehri yürümüş kadar yorgundum" abartma.
Adım 3: Zıt kavram çifti hiçbir yerde yok; karşıtlık kullanılmamış.
Cevap B.`
},
{
  id: "tur-ss-013",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 4,
  soru: `**Aşağıdaki cümlelerin hangisinde karşıtlık ve abartma birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bu yokuşu çıkmaktan ciğerlerim yanacak.",
    "Soğuk rüzgâr, yanaklarıma buz gibi dokundu.",
    "Eski kapı, her açılışta derin bir iç çekti.",
    "Seni bir kez güldürebilmek için ağlaya ağlaya bir göl doldurdum."
  ],
  dogru: 3,
  hatalar: [
    "Yalnızca abartma var: ciğerlerin yanması büyütmedir; zıt çift yok.",
    "Yalnızca benzetme var: 'buz gibi'; abartma ve karşıtlık yok.",
    "Yalnızca kişileştirme var: kapı iç çekiyor.",
    null
  ],
  aciklama: `İki sanat birlikte aranıyor.
Adım 1: A'da yalnız abartma (ciğerlerin yanması); B'de yalnız benzetme; C'de yalnız kişileştirme.
Adım 2: D'de "güldürmek" ve "ağlamak" zıt kavramlar (karşıtlık). "Ağlaya ağlaya bir göl doldurmak" olduğundan çok büyük gösterilmiş (abartma).
Sağlama: Zıt çifti bul, sonra büyütülen ifadeyi bul. İkisi de varsa doğru.
Cevap D.`
},
{
  id: "tur-ss-014",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 4,
  soru: `I. Sabah, sokaklara gülümseyerek indi,
II. Fırından çıkan ekmekler güneş gibi parlıyordu,
III. "Kimse uyanmasın!" dedi kaldırımdaki ihtiyar kedi,
IV. Sessizlik, bin yıl sürdü mahallede.
**Bu dizeler için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I. dizede kişileştirme, III. dizede konuşturma vardır.",
    "II. dizede abartma, IV. dizede benzetme vardır.",
    "II. dizede karşıtlık, IV. dizede kişileştirme vardır.",
    "I. dizede benzetme, IV. dizede konuşturma vardır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. dizede 'güneş gibi' ile benzetme var, abartma yok; IV. dizede abartma var, benzetme yok. Sanatlar yer değiştirmiş.",
    "II. dizede zıt çift yok; IV. dizede insana özgü davranış yok, kişileştirme da yok.",
    "I. dizede benzetme edatı yok, kişileştirme var; IV. dizede konuşan yok."
  ],
  aciklama: `Her dizeyi etiketleyip seçenekleri sınayacağız.
Adım 1: I. dizede sabah gülümseyerek iniyor; kişileştirme.
Adım 2: II. dizede "güneş gibi" ile benzetme.
Adım 3: III. dizede kedinin sözü aktarılıyor; konuşturma.
Adım 4: IV. dizede "bin yıl" abartma.
Adım 5: A seçeneği (I: kişileştirme, III: konuşturma) etiketlerle uyuşuyor. Diğerlerinde birer eşleştirme yanlış.
Cevap A.`
},
{
  id: "tur-ss-015",
  kazanim: "T.8.3.7",
  kademe: 0,
  zorluk: 4,
  soru: `Okul bahçesindeki çınar, öğretmenlerimizin bile çocukluğunu görmüş yaşlı bir tanık gibi dimdik duruyordu.
**Bu cümlede kullanılan benzetmenin anlama katkısı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çınarın gölgesinin çok geniş ve oldukça serin olduğunu",
    "Çınarın okula sonradan dikildiğini ve genç olduğunu",
    "Çınarın yıllardır orada olduğunu ve sağlam durduğunu",
    "Çınarın yaprak döküp çıplak ve bakımsız kaldığını"
  ],
  dogru: 2,
  hatalar: [
    "Gölge cümlede geçmiyor; benzetme yaşı ve sağlamlığı vurguluyor.",
    "Cümle tam tersini söylüyor: çınar öğretmenlerin çocukluğunu bile görmüş, yani çok eski; genç değil.",
    null,
    "Yaprak dökmek ya da bakımsızlık anlatılmıyor; çınar 'dimdik' duruyor."
  ],
  aciklama: `Benzetmenin katkısı, benzetilen şeyin hangi özelliğinin öne çıktığıdır.
Adım 1: Çınar, "yaşlı bir tanık"a benzetiliyor. Tanık olayları gören kişidir; "çocukluğunu görmüş" sözü çınarın çok eski olduğunu gösterir.
Adım 2: "Dimdik duruyordu" sözü sağlamlığı bildirir.
Adım 3: Gölge, yaprak dökme, bakımsızlık ve sonradan dikilme anlatılmıyor.
Sağlama: Benzetilen şeyin özelliklerini sırala: yaşlı, her şeyi görmüş, dimdik.
Cevap C.`
}
);
