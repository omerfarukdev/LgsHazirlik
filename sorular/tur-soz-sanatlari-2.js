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
  soru: `Okullar arası atletizm şampiyonasında, sekiz sporcunun yarıştığı sekiz yüz metre finalinde koşan bir öğrenci, yarıştan sonra o günü defterine şöyle yazmıştır:

(I) Isınma bittiğinde boş kulvarlar, misafirlerini bekleyen ev sahipleri gibi sabırsızlanıyordu. (II) Tabanca patlayınca öne fırlamadım; antrenörümün söylediği gibi ilk turu grubun ortasında geçtim. (III) Son virajda bacaklarım kurşun gibi ağırdı; her adımda sırtımda koca bir dağ taşıyordum. (IV) Tam o sırada antrenörüm tribünden “Kollarını bırakma!” diye bağırdı. (V) Bitiş çizgisini ikinci sırada geçip çimlere uzandığımda çivili ayakkabılarım “Bugünlük bu kadar yeter!” diye sızlanıyordu. (VI) Birinciliği kaybetmiştim ama o gün kendime olan güvenimi kazanmıştım.

Bu cümleleri inceleyen üç öğrenci şunları söylemiştir:

Defne: II. cümlede söz sanatı yoktur; III. cümlede ise benzetme ile abartma birlikte kullanılmıştır.
Tarık: IV. ve V. cümlelerin ikisinde de konuşturma yapılmıştır; VI. cümlede ise karşıtlık vardır.
Selin: I. ve V. cümlelerde kişileştirme vardır; ancak benzetme bu iki cümleden yalnızca birinde yapılmıştır.

**Buna göre hangi öğrencilerin söyledikleri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız Defne", "Defne ve Tarık", "Defne ve Selin", "Tarık ve Selin"],
  dogru: 2,
  hatalar: ["Yarım bırakma: Defne'yi doğru bulup Selin'i elemişsin. I. cümlede kulvarlar sabırsızlanıyor, V. cümlede ayakkabılar sızlanıyor; ikisi de kişileştirmedir. Benzetme ise yalnızca I. cümlededir (“ev sahipleri gibi”). Selin de doğru söylüyor.", "Kısmen doğru yargıyı doğru sayma: Tarık'ın VI. cümleyle ilgili söylediği doğrudur (kaybetmek – kazanmak). Ama IV. cümlede bağıran antrenördür, yani bir insandır; konuşturma yalnızca V. cümlededir.", null, "İki hata birden: Tarık, IV. cümlede bir insanın sözünü konuşturma saydığı için yanlıştır. Defne ise doğrudur: II. cümlede iki şey birbirine benzetilmemiştir; III. cümlede “kurşun gibi” benzetmesi ile “dağ taşımak” abartması birliktedir."],
  aciklama: `Önce ölçütleri hatırla. Benzetme: farklı iki şeyin ortak bir özellik yüzünden birbirine benzetilmesidir. Kişileştirme: insan olmayan bir varlığa insana özgü bir özellik verilmesidir. Konuşturma: insan olmayan bir varlığa söz söyletilmesidir. Abartma: bir durumun gerçekte olamayacak kadar büyük ya da küçük gösterilmesidir.
Adım 1: Cümleleri tek tek etiketle. (I) Kulvarlar “ev sahipleri gibi” denerek benzetilmiş, “sabırsızlanıyordu” denerek kişileştirilmiş. (II) “Antrenörümün söylediği gibi” sözünde “gibi”, “söylediğine uygun olarak” demektir; iki şey benzetilmemiştir, sanat yoktur. (III) “Kurşun gibi ağırdı”: bacaklar, ağırlık yönünden kurşuna benzetilmiş. “Sırtımda koca bir dağ taşıyordum”: kimse dağ taşıyamaz, yorgunluk büyütülmüş; abartma. (IV) Bağıran antrenördür, yani insandır; sanat yoktur. (V) Ayakkabılar sızlanıyor ve söz söylüyor: kişileştirme ve konuşturma var. “Bu kadar” sözü miktar bildirir, benzetme kurmaz. (VI) Kaybetmek – kazanmak zıt kavramlardır ve yarışın anlatıcıya kattığını vurgular: karşıtlık.
Adım 2: Defne → II'de sanat yok; III'te benzetme ile abartma birlikte. Söylediğinin iki yarısı da doğru.
Adım 3: Tarık → VI'da karşıtlık olduğu doğru. Ama IV'te konuşan insandır; konuşturma yalnızca V'tedir. “İkisinde de” dediği için yargısı yanlış.
Adım 4: Selin → I'de (sabırsızlanan kulvarlar) ve V'te (sızlanan ayakkabılar) kişileştirme var; benzetme ise yalnızca I'de. Doğru.
Adım 5: Doğru söyleyenler Defne ile Selin'dir.
Sık yapılan hata: Bir yargının bir yarısı doğru çıkınca tamamını doğru saymak. Tarık'ın VI. cümle için söylediği doğrudur; yanlışlık öteki yarıdadır. Her yargıyı parça parça sına.
Cevap C.`
},
{
  id: "tur-ss-317",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Sarkıtlar, mağara tavanından sızan suyun içinde çözünmüş kirecin damla damla birikmesiyle oluşur. Bu oluşum çok yavaş ilerler; boyu bir metreyi bulan bir sarkıtın oluşması on bin yıl kadar sürebilir. Yerden yukarı doğru büyüyenlere ise dikit denir; bir sarkıtla bir dikit zamanla birleşirse sütun adını alır. Yaz tatilinde böyle bir mağarayı gezen bir öğrenci, gördüklerini şöyle anlatmıştır:

(I) Girişten birkaç adım sonra gün ışığı arkamızda kaldı; rehberimiz fenerini yakıp önce yere, sonra tavana tuttu. (II) Tavandan inen sarkıtlar, dev bir orgun boruları gibi yan yana diziliydi. (III) Rehberimiz, yapılan ölçümlere göre bu taşların bir santimetre uzamasının yüz yıl kadar sürebildiğini söyledi. (IV) Tavandaki damlalar işlerini hiç aksatmıyor, taşı sabırla büyütüyordu. (V) İçerisi öyle soğuktu ki nefesimiz daha ağzımızdan çıkmadan donup yere düşüyordu. (VI) Fenerin ışığı üzerlerine gelince tavandaki yarasalar kanat çırpıp mağaranın derinlerine uçtu. Dışarı çıktığımda saatime baktım: İçeride yalnızca kırk dakika kalmıştık.

**Bu metinde numaralanmış cümlelerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["II. cümlede sarkıtlar, yan yana dizili olmaları yönünden org borularına benzetilmiştir.", "III. ve V. cümlelerde bir ölçü gerçeğin dışına taşırılarak abartma yapılmıştır.", "IV. cümlede kişileştirme yapılmış, ancak konuşturmaya yer verilmemiştir.", "VI. cümlede anlatılan davranış doğal olduğu için kişileştirme yapılmamıştır."],
  dogru: 1,
  hatalar: ["Benzetme yönünü gözden kaçırma: “org boruları gibi yan yana diziliydi” sözünde benzeyen sarkıtlar, kendisine benzetilen org boruları, ortak özellik ise yan yana dizili olmaktır. Bu yargı söylenebilir.", null, "Kişileştirmeyi konuşturmayla karıştırma: damlalar “işlerini aksatmıyor, sabırla büyütüyor” denerek insan gibi anlatılmış ama hiçbir söz söylememiştir. Bu yargı söylenebilir.", "Hayvanın doğal davranışını kişileştirme sanma: yarasaların ışıktan kaçıp uçması gerçekte de olan bir davranıştır; insana özgü bir özellik verilmemiştir. Bu yargı söylenebilir."],
  aciklama: `“Söylenemez” diyen sorularda üç seçenek doğru, biri yanlıştır. Abartma, bir durumu gerçekte olamayacak kadar büyük ya da küçük göstermektir; ölçüt “Bu gerçekte olabilir mi?” sorusudur.
Adım 1: A → (II) “org boruları gibi yan yana diziliydi.” Sarkıtlar org borularına benzetilmiş; ortak özellik cümlede açıkça yazıyor: yan yana dizili olmak. Söylenebilir.
Adım 2: B → İki cümleyi ayrı ayrı sına. (V) Nefesin ağızdan çıkmadan donup yere düşmesi gerçekte olamaz; abartma var. (III) ise bir ölçüm sonucudur. Metnin başına dön: bir metrelik, yani yüz santimetrelik bir sarkıtın oluşması on bin yıl kadar sürebiliyor. Bu, santimetre başına yüz yıl eder. (III)'teki süre giriş bilgisiyle birebir uyumlu, gerçek bir süredir; abartma yok. Yargı iki cümleyi birden abartma saydığı için söylenemez.
Adım 3: C → (IV) Damlalar işlerini aksatmıyor, sabır gösteriyor; bunlar insana özgüdür, kişileştirme var. Damlalar söz söylemediği için konuşturma yok. Söylenebilir.
Adım 4: D → (VI) Yarasaların ışıktan rahatsız olup uçması doğal bir davranıştır; kişileştirme yok. Söylenebilir.
Sık yapılan hata: Büyük bir sayı görünce hemen abartma demek. “Yüz yıl” kulağa çok gelir ama burada ölçülmüş, gerçek bir süredir. Sayının büyüklüğüne değil, gerçekte olup olamayacağına bak.
Cevap B.`
},
{
  id: "tur-ss-318",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Kış tatilinde arkadaşım Ozan'la, yere çizilen siyah şeridi izleyen küçük bir robot yaptık. Parçaları bir öğleden sonrada birleştirdik; kodu yazıp hatalarını ayıklamak ise günlerimizi aldı. O günleri okul dergisine şöyle anlattım:

(I) Robotun altındaki iki sensörden biri şeridin siyahını, öbürü zeminin beyazını algıladığı sürece robot düz ilerliyordu. (II) Ekrandaki kod satırları, bitmek bilmeyen bir karınca sürüsü gibi alt alta uzanıyordu. (III) Ozan, tek bir yazım hatasını bulmak için o gece aynı satırı bin kez okudu. (IV) Hatayı düzeltince robot şeridin üstünde gururla ilerledi; her virajda bize gösteriş yapmayı da ihmal etmedi.

Bu yazıyı okuyan bir öğrenci, numaralanmış cümlelerde bulduğu söz sanatını ve bu sanatın anlatıma katkısını aşağıdaki tabloya yazmıştır.

**Buna göre tablodaki satırlardan hangisinde hem söz sanatı hem de anlatıma katkısı doğru verilmiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Cümle</th><th>Söz sanatı</th><th>Anlatıma katkısı</th></tr><tr><td>I</td><td>Karşıtlık</td><td>Zıt renkler yan yana getirilerek bir çelişki öne çıkarılmıştır.</td></tr><tr><td>II</td><td>Benzetme</td><td>Ekrandaki yazıların çok küçük olduğu gözde canlandırılmıştır.</td></tr><tr><td>III</td><td>Abartma</td><td>Yazılan kodun ne kadar uzun olduğu büyütülerek vurgulanmıştır.</td></tr><tr><td>IV</td><td>Kişileştirme</td><td>Robotun düzgün çalışması, insan duygularıyla canlı kılınmıştır.</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: ["Bilgi veren zıt sözcükleri sanat sanma: siyah – beyaz zıt sözcüklerdir ama cümle yalnızca sensörlerin nasıl çalıştığını bildirir; bir çelişki ya da duygu öne çıkarılmamıştır. Karşıtlık sanatı yoktur.", "Benzetme yönünü yanlış seçme: sanat doğru, kod satırları karınca sürüsüne benzetilmiş. Ama ortak özellik cümlede yazıyor: bitmek bilmeden alt alta uzanmak. Gözde canlandırılan küçüklük değil, çokluktur.", "Kısmen doğru: “bin kez” abartmadır. Ama büyütülen şey kodun uzunluğu değil, tek bir hatayı bulmak için harcanan emektir; Ozan aynı satırı okuyup durmuştur. Uzunluk, II. cümlenin anlattığı şeydir.", null],
  aciklama: `Her satırda iki şeyi sınayacaksın: Yazılan sanat cümlede gerçekten var mı? Yazılan katkı, o cümlenin anlattığı şeye uyuyor mu? Biri tutmazsa satır elenir.
Adım 1: I. satır → Siyah – beyaz zıt sözcüklerdir. Ancak karşıtlık sanatında zıt kavramlar anlamı güçlendirmek için bir araya getirilir. Bu cümle yalnızca sensörlerin nasıl çalıştığını bildirir; çelişki ya da duygu yoktur. Sanat yanlış yazılmış.
Adım 2: II. satır → Kod satırları “karınca sürüsü gibi” denerek benzetilmiş; sanat doğru. Benzetme yönü, yani ortak özellik cümlede yazıyor: bitmek bilmeden alt alta uzanmak. Gözde canlandırılan şey satırların çokluğudur. Tabloda “yazıların küçüklüğü” denmiş; katkı yanlış.
Adım 3: III. satır → Bir gecede aynı satır bin kez okunamaz; abartma var, sanat doğru. Peki büyütülen ne? Ozan'ın tek bir hatayı bulmak için harcadığı emek. Tabloda “kodun uzunluğu” yazıyor; bu, II. cümlenin anlattığı şeydir. Katkı yanlış.
Adım 4: IV. satır → Robot “gururla ilerledi”, “gösteriş yapmayı ihmal etmedi”: gurur ve gösteriş insana özgüdür, kişileştirme var. Katkı: hatası düzeltilen robotun sorunsuz çalışması, insan duygularıyla canlı kılınmış. İkisi de doğru.
Sık yapılan hata: Sanatı doğru bulunca satırı doğru saymak. II. ve III. satırlarda sanat yerindedir; yanlışlık katkıdadır. Katkıyı sınarken “Bu cümlede asıl vurgulanan ne?” diye sor ve cevabı cümlenin kendi sözcüklerinde ara.
Cevap D.`
},
{
  id: "tur-ss-319",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Okulumuzun doğa kulübü, ayda bir cumartesi günü belediyenin hayvan barınağında gönüllü çalışıyor. Geçen cumartesi sıra bizim gruptaydı; mama dağıtımını ve kulübelerin temizliğini biz üstlendik. O günü kulüp panosuna şöyle yazdım:

(I) Bizi kapıda karşılayan görevli Selim Abi, civcivlerini kollayan bir tavuk gibi kulübelerin arasında dolaşıp duruyordu. (II) Mama kovasının tıkırtısını duyan köpekler hep birlikte tel örgüye koştu, öyle bir havladı ki kulübelerin çatısı havaya uçtu. (III) Yaşlı kedi Duman bu telaşa katılmayı kendine yediremedi; tahtında oturan bir padişah gibi minderinden kalkmadan mamanın ayağına gelmesini bekledi. (IV) Temizliğe geçtiğimizde eski süpürge onca tüyü tek başına toplamaya razı olmadı; daha ikinci kulübede sapı kırılıverdi. (V) Ardından hortumu açtık; hortum birden elimden fırladı, yerde bir yılan gibi kıvrılarak hepimizi ıslattı. (VI) Öğleden sonra Selim Abi, kapıya bırakılan kutudaki yavru kediyi avucuna alıp içeri getirdi; yavru öyle ufaktı ki bir ceviz kabuğuna rahatça sığardı.

**Bu metinde kişileştirme ve abartma yapılan cümleler aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Kişileştirme III ve IV. cümlelerde; abartma II ve VI. cümlelerde yapılmıştır.", "Kişileştirme I, III ve IV. cümlelerde; abartma II ve VI. cümlelerde yapılmıştır.", "Kişileştirme IV. cümlede; abartma II ve VI. cümlelerde yapılmıştır.", "Kişileştirme III, IV ve V. cümlelerde; abartma II. cümlede yapılmıştır."],
  dogru: 0,
  hatalar: [null, "İnsanın davranışını kişileştirme sanma: I. cümlede tavuğa benzetilen Selim Abi bir insandır. İnsan bir hayvana benzetilince benzetme olur; kişileştirme ise insan olmayan bir varlığa insan özelliği vermektir.", "Edatlı cümlede kişileştirmeyi kaçırma: III. cümlede “padişah gibi” benzetmesi var diye kişileştirmeyi saymamışsın. Kedinin bir işi “kendine yedirememesi” insana özgü bir gururdur; aynı cümlede iki sanat birlikte bulunabilir.", "İki hata birden: V. cümlede hortum bir yılana benzetilmiş, ona insana özgü bir özellik verilmemiştir; kişileştirme yoktur. VI. cümlede ise yavrunun ceviz kabuğuna sığması küçülterek yapılan bir abartmadır; listeden çıkarılamaz."],
  aciklama: `Kişileştirme, insan olmayan bir varlığa insana özgü bir özellik vermektir. Abartma, bir durumu gerçekte olamayacak kadar büyük ya da küçük göstermektir. Her cümlede iki soru sor: “İnsan olmayan bir varlık, yalnızca insanın yapabileceği bir şey mi yapıyor?” ve “Bu gerçekte olabilir mi?”
Adım 1: (I) Selim Abi bir insandır; tavuğa benzetilmiş. Bu benzetmedir. Yapan insan olduğu için kişileştirme yok.
Adım 2: (II) Köpeklerin koşması ve havlaması doğal davranıştır; kişileştirme yok. Havlamayla çatının havaya uçması ise gerçekte olamaz: abartma var.
Adım 3: (III) Kedi bir işi “kendine yediremiyor”: bu, insana özgü bir gururdur, kişileştirme var. Aynı cümlede “padişah gibi” benzetmesi de bulunur; bir sanat ötekini silmez.
Adım 4: (IV) Süpürge çalışmaya “razı olmuyor”: razı olmak insana özgüdür, kişileştirme var. Gerçek dışı bir ölçü yok.
Adım 5: (V) Hortum yılana benzetilmiş: benzetme. Fırlamak, kıvrılmak insana özgü değildir; kişileştirme yok.
Adım 6: (VI) Avuca alınabilen bir yavru kedi, ceviz kabuğuna sığmaz. Durum gerçek dışı ölçüde küçültülmüş; küçültme de abartmadır.
Adım 7: Kişileştirme III ve IV. cümlelerde, abartma II ve VI. cümlelerdedir.
Sık yapılan hata: Cümlede canlı bir varlık ya da “gibi” görünce karar vermek. Kişileştirmenin ölçütü varlığın canlı olması değil, yapılan işin insana özgü olmasıdır: köpeğin havlaması doğaldır, kedinin gururlanması değildir.
Cevap A.`
},
{
  id: "tur-ss-320",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Türkçe öğretmeni derste şu açıklamayı yaptı: “Karşıtlık sanatında zıt kavramlar, anlatımı güçlendirmek için bir araya getirilir. İçinde zıt anlamlı sözcükler geçen her cümlede bu sanat yoktur; bu yüzden zıt sözcük aramakla yetinmeyin, cümlenin ne anlatmak istediğine bakın: Zıt kavramlar bir çelişkiyi ya da duyguyu öne çıkarıyor mu?” Ardından, bir öğrencinin her sabah okula giderken bindiği metroyu anlattığı yazıdan seçtiği şu altı cümleyi tahtaya yazdı:

(I) Kapılar her durakta açılır, ama yüzler hep kapalı kalır.
(II) Vagonda birbirimize bu kadar yakın dururken aslında ne kadar uzağız!
(III) Yolculardan kimi kitabına dalar, kimi kulaklığını takıp telefonuna bakar.
(IV) Hattın ilk treni sabah altıda kalkar, son treni gece yarısı depoya girer; cumartesi günleri seferler bir saat geç başlar.
(V) Tünelin karanlığında, aydınlıkta göremediğim bir şeyi görürüm: camdaki kendi yüzümü.
(VI) Evden okula metroyla aşağı yukarı yirmi dakikada varıyorum; otobüsle bu yol bir saat sürerdi.

**Bu açıklamaya göre numaralanmış cümlelerin hangilerinde karşıtlık sanatı vardır?**`,
  gorsel: null,
  secenekler: ["I, II ve V", "I, III ve V", "II, IV ve V", "II, V ve VI"],
  dogru: 0,
  hatalar: [null, "Farklılığı zıtlık sanma: III. cümlede “kimi … kimi …” kalıbı var ama kitap okumak ile telefona bakmak birbirinin zıddı değildir, yalnızca farklıdır. Ayrıca II. cümledeki yakın – uzak karşıtlığı dışarıda kalmış.", "Bilgi cümlesindeki zıt sözcükleri sanat sanma: IV. cümlede ilk – son ve sabah – gece sözcükleri yalnızca sefer saatlerini bildirir; anlatımı güçlendirmek için kullanılmamıştır. Ayrıca I. cümledeki karşıtlık dışarıda kalmış.", "Kalıplaşmış sözü karşıtlık sanma: VI. cümledeki “aşağı yukarı” sözü “yaklaşık” demektir; aşağı ile yukarı karşılaştırılmamıştır. Ayrıca I. cümledeki karşıtlık dışarıda kalmış."],
  aciklama: `Karşıtlık (tezat), zıt kavramların anlamı güçlendirmek için birlikte kullanılmasıdır. Öğretmenin uyarısı işin anahtarı: zıt sözcük bulmak yetmez. Her cümlede iki soru sor: “Gerçekten zıt iki kavram var mı?” ve “Bunlar bir etki yaratmak için mi yan yana getirilmiş?”
Adım 1: (I) Açılır – kapalı. Kapıların açılmasıyla yüzlerin kapalı kalması yan yana konarak insanların içine kapanıklığı vurgulanmış. Karşıtlık var.
Adım 2: (II) Yakın – uzak. Bedenlerin yakınlığıyla insanların birbirine uzaklığı arasındaki çelişki öne çıkarılmış. Karşıtlık var.
Adım 3: (III) “Kimi … kimi …” kalıbı var ama kitap okumak ile telefona bakmak zıt değil, farklı işlerdir. İlk soru tutmuyor; karşıtlık yok.
Adım 4: (IV) İlk – son, sabah – gece zıt sözcüklerdir; ancak cümle bir tarife gibi yalnızca sefer saatlerini bildirir. İkinci soru tutmuyor; karşıtlık yok.
Adım 5: (V) Karanlık – aydınlık. “Aydınlıkta göremediğimi karanlıkta görürüm” diyerek şaşırtıcı bir çelişki kurulmuş. Karşıtlık var.
Adım 6: (VI) “Aşağı yukarı” kalıplaşmış bir sözdür, “yaklaşık” demektir; aşağı ile yukarı arasında bir çelişki kurulmamıştır. Yirmi dakika ile bir saat de zıt değil, yalnızca farklı sürelerdir. Karşıtlık yok.
Adım 7: Karşıtlık I, II ve V'te vardır.
Sık yapılan hata: Zıt anlamlı iki sözcük görür görmez karşıtlık demek. Zıt sözcükler tarifede, duyuruda ya da “aşağı yukarı, er geç” gibi kalıplarda da geçer; sanat olması için bir çelişkiyi ya da duyguyu öne çıkarmaları gerekir.
Cevap A.`
},
{
  id: "tur-ss-321",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Ablası üniversite okumak için başka bir şehre giden Kerem, onun ardından “Ablam Gidince” adlı bir şiir yazmıştır. Şiirde ablasına seslenen Kerem, onun evden ayrıldığı sabahı ve sonraki günleri anlatmaktadır. Kerem, şiirinin bazı bölümlerinde birden çok söz sanatına başvurmuştur. Şiirin bölümleri aşağıdaki tabloda numaralanmıştır.

**Bu şiirin numaralanmış bölümlerinden hangisinde benzetme ve karşıtlık birlikte kullanılmış, kişileştirmeye ise yer verilmemiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Bölüm</th><th>Dizeler</th></tr><tr><td>I</td><td>Valizin, kapının önünde boynunu bükmüş bekliyordu;<br>Ev o sabah kalabalık bir istasyondu,<br>Giden sendin, geride kalan bizdik.</td></tr><tr><td>II</td><td>Rafların kitap dolu, odan yine de bomboş;<br>Sen dönene kadar her akşam lambanı yakacağım,<br>Masanda yarım kalmış bir bulmaca duruyor.</td></tr><tr><td>III</td><td>Telefonda sesin yakın, kendin uzak şehirlerde;<br>Özlemin, cebimde taşıdığım ağır bir taştır,<br>Okula giderken de onu yanımda götürürüm.</td></tr><tr><td>IV</td><td>Gece uzun bir yol gibi, sabah kısa bir an;<br>Saat, yokluğunu saymaktan yorulup sustu,<br>Takvimde dönüş gününü kırmızıyla işaretledim.</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: ["Koşulu yarım uygulama: benzetme (ev – istasyon) ve karşıtlık (giden – kalan) var; ama valiz “boynunu bükmüş bekliyor” denerek kişileştirilmiş. Kişileştirmeye yer verilmemiş olması koşulu sağlanmaz.", "“Kadar” görünce benzetme deme: dolu – bomboş karşıtlığı var, kişileştirme yok; ancak “dönene kadar” sözü süre bildirir, iki şeyi birbirine benzetmez. Benzetme koşulu sağlanmaz.", null, "Koşulu yarım uygulama: “yol gibi” benzetmesi ve uzun – kısa karşıtlığı var; ama saat “yorulup sustu” denerek kişileştirilmiş. Kişileştirmeye yer verilmemiş olması koşulu sağlanmaz."],
  aciklama: `Kök üç koşulu birden istiyor: benzetme olacak, karşıtlık olacak, kişileştirme olmayacak. Her bölümü bu üç soruyla sına; biri tutmazsa bölüm elenir.
Adım 1: I. bölüm → Benzetme: “Ev … bir istasyondu” (ev, kalabalık ve hareketli olması yönünden istasyona benzetilmiş; edat yok). Karşıtlık: giden – kalan. Kişileştirme: valiz “boynunu bükmüş bekliyordu”. Boyun bükmek, üzülen bir insanın davranışıdır; valize insan özelliği verilmiş. Üçüncü koşul tutmuyor.
Adım 2: II. bölüm → Karşıtlık: dolu – bomboş. Kişileştirme yok. Benzetme: “dönene kadar” sözünde “kadar” zaman sınırı bildirir; farklı iki şey benzetilmemiş. Birinci koşul tutmuyor.
Adım 3: III. bölüm → Karşıtlık: yakın – uzak. Benzetme: “Özlemin … ağır bir taştır” (özlem, ağırlığı yönünden taşa benzetilmiş; edat yok). Kişileştirme: ses de özlem de insana özgü bir iş yapmıyor; taşıyan, götüren Kerem'dir. Üç koşul da tutuyor.
Adım 4: IV. bölüm → Benzetme: “uzun bir yol gibi”. Karşıtlık: uzun – kısa, gece – sabah. Kişileştirme: saat saymaktan “yorulup sustu”; yorulmak insana özgüdür. Üçüncü koşul tutmuyor.
Sık yapılan hata: İlk iki koşulu bulunca durmak. I. ve IV. bölümlerde benzetme de karşıtlık da hemen göze çarpar; ama kökün son parçası (“kişileştirmeye yer verilmemiştir”) bu bölümleri eler. III. bölümdeki benzetme ise “gibi” olmadan kurulduğu için kolayca gözden kaçar.
Cevap C.`
},
{
  id: "tur-ss-322",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `I. Metin
O cumartesi çömlek atölyesinde benden başka dört öğrenci daha vardı; hepimiz çamura ilk kez dokunuyorduk. Fırına girecek kâseler rafta sıra sıra duruyordu. Çarkın başına oturduğumda çamur elimde durmadı; ıslak bir balık gibi parmaklarımın arasından kayıp gitti. Yarım saat uğraştım, ortaya eğri büğrü bir kâse çıktı. Kâse, tezgâhın üstünden “Beni böyle mi bırakacaksın?” diye sitem etti. Ustam gülümseyip onu yeniden çarka koydu. Akşam eve döndüğümde tırnaklarımın arasında bir tarla dolusu toprak vardı.

II. Metin
Okul orkestrası aylardır bu konsere hazırlanıyordu. Programda üç eser vardı; Elif ikincisinde tek başına çalacaktı. Konser günü kulis, üst üste yığılmış kutularla doluydu; öyle dardı ki içeride bir serçe kanat açamazdı. Şef, öğrencilere dönüp “Acele etmeyin, birbirinizi dinleyin.” dedi. Elif sahneye çıktığında salon, karanlık ve durgun bir denizdi. Çellosu o gece hiç nazlanmadı; akordu bozmadan son notaya dek ona eşlik etti. Elif yayını indirdi ve alkışı bekledi.

**Numaralanmış metinlerin yalnızca birinde bulunan söz sanatı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Benzetme", "Kişileştirme", "Abartma", "Konuşturma"],
  dogru: 3,
  hatalar: ["Edatsız benzetmeyi kaçırma: I. metinde çamur “balık gibi” denerek, II. metinde salon edat kullanılmadan denize benzetilmiştir. Benzetme iki metinde de vardır.", "Konuşturmayı kişileştirmeden ayrı sanma: II. metinde çello “nazlanmadı” denerek kişileştirilmiştir; I. metinde söz söyleyen kâse de kişileştirilmiştir. Kişileştirme iki metinde de vardır.", "Küçültmeyi abartma saymama: I. metinde tırnak arasındaki “bir tarla dolusu toprak”, II. metinde kulisin “bir serçe kanat açamayacak” kadar dar olması gerçeğin dışındadır. Abartma iki metinde de vardır.", null],
  aciklama: `İki metnin her birinde dört sanatı ayrı ayrı arayıp küçük bir çizelge kuracaksın; yalnızca bir metinde çıkan sanat cevaptır.
Adım 1: Benzetme → I. metin: çamur “ıslak bir balık gibi” kayıyor (edatlı). II. metin: “salon, karanlık ve durgun bir denizdi” (salon denize benzetilmiş; edat yok). İkisinde de var.
Adım 2: Abartma → I. metin: tırnakların arasına bir tarla dolusu toprak sığmaz; büyütme. II. metin: içinde insanların durduğu bir kuliste serçenin kanat açamaması olamaz; bu da küçülterek yapılan abartmadır. İkisinde de var.
Adım 3: Konuşturma → I. metin: kâse “Beni böyle mi bırakacaksın?” diyor; insan olmayan bir varlık konuşuyor, konuşturma var. II. metin: tırnak içindeki sözü şef söylüyor; şef insandır, konuşturma yok. Yalnızca I. metinde var.
Adım 4: Kişileştirme → I. metin: konuşan ve sitem eden kâse aynı zamanda kişileştirilmiştir. II. metin: çello “nazlanmadı”; nazlanmak insana özgüdür. İkisinde de var.
Adım 5: Yalnızca bir metinde bulunan sanat konuşturmadır.
Sık yapılan hata: İki metinde de tırnak içinde söz görünce “konuşturma ikisinde de var” demek ya da I. metindeki kişileştirmeyi, konuşturmanın içinde saklı olduğu için görmemek. Her tırnakta “Konuşan insan mı?” diye sor; insan değilse iki sanatı birden yaz.
Cevap D.`
},
{
  id: "tur-ss-323",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Nuri Bey, otuz yıldır bir dağ kasabasının postacısıdır; kasabada onu tanımayan yoktur. Sabah yedide postaneden çıkar; önce çarşıyı, sonra yamaçtaki mahalleleri dolaşır. Çantasında mektuplardan başka gazete, ilaç, bazen de tamirden dönen bir gözlük taşır. Kar yağınca işi iki kat uzar. Emekli olmasına iki yıl kalmıştır, ama yerine kimin geçeceği henüz belli değildir. (I) Kışın yukarı mahalleye çıkan dik sokak, buzdan bir merdivendir; o yine de mektupları bekletmez. (II) Eski bisikleti yokuşun başında inat eder, tek adım atmak istemez; Nuri Bey onu elinde sürükler. (III) Bahçe kapılarındaki posta kutuları, daha uzaktan “Bugün bize ne getirdin?” diye seslenir. (IV) Mahallenin köpekleri onu tanır; bisikletin sesini duyunca kuyruk sallayarak yola çıkar. (V) - - - -

Bu metni inceleyen öğrenciler benzetme, kişileştirme, konuşturma, karşıtlık ve abartma sanatlarını arıyor. Metnin sonuna, numaralanmış cümlelerde bu sanatlardan hiç kullanılmamış olan ikisini birlikte içeren, kullanılmış olanlara ise yer vermeyen bir cümle getirilmek isteniyor.

**Buna göre metinde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["Akşam eve döndüğünde ayakları birer kütük gibi olur; o gün yürüdüğü yol dünyayı üç kez dolanır.", "Getirdiği zarfı açınca kimi güler, kimi ağlar; o zarfı bekleyene ise tek bir gün bin yıl sürer.", "Dönüş yolunda çantası hafifler ama yüreği ağırlaşır; yorgun bisikleti de onunla birlikte iç çeker.", "Otuz yılda binlerce mektup taşımış; iyi haberi de kötü haberi de aynı güler yüzle kapıya bırakmıştır."],
  dogru: 1,
  hatalar: ["Edatsız benzetmeyi kaçırma: (I) cümlede sokak “gibi” kullanılmadan merdivene benzetilmişti. Bu seçenekteki abartma yenidir ama “kütük gibi” benzetmesi metinde zaten kullanılmış bir sanattır; karşıtlık da yoktur.", null, "Kuralı yarım uygulama: hafifler – ağırlaşır karşıtlığı yenidir; ama bisikletin yorulup iç çekmesi kişileştirmedir ve bu sanat (II) ile (III) cümlelerde zaten kullanılmıştır. Abartma ise yoktur.", "Gerçekçi büyük sayıyı abartma sanma: otuz yılda binlerce mektup taşımak olağandır, ölçü gerçeğin dışına çıkmaz. Cümlede yalnızca iyi – kötü karşıtlığı kalır; ikinci sanat eksiktir."],
  aciklama: `Bu soru iki aşamalıdır: önce metinde hangi sanatların kullanıldığını bul, sonra seçeneklerde kullanılmamış iki sanatı ara.
Adım 1: (I) “Dik sokak, buzdan bir merdivendir”: sokak merdivene benzetilmiş; edat yok ama benzetme var. (II) Bisiklet “inat eder, adım atmak istemez”: kişileştirme. (III) Posta kutuları “Bugün bize ne getirdin?” diye sesleniyor: konuşturma (ve kişileştirme). (IV) Köpeklerin tanıdıkları birini kuyruk sallayarak karşılaması doğal davranıştır; sanat yok.
Adım 2: Kullanılanlar: benzetme, kişileştirme, konuşturma. Kullanılmayanlar: karşıtlık ve abartma. Aradığın cümlede bu ikisi olacak, öteki üçü olmayacak.
Adım 3: A → “kütük gibi” benzetme (kullanılmış), “dünyayı üç kez dolanır” abartma. Karşıtlık yok. Elenir.
Adım 4: B → “kimi güler, kimi ağlar”: gülmek – ağlamak zıt kavramlardır ve aynı zarfın uyandırdığı karşıt duyguları öne çıkarır; karşıtlık. “Tek bir gün bin yıl sürer”: gerçekte olamaz, abartma. Benzetme, kişileştirme, konuşturma yok. Uyuyor.
Adım 5: C → hafifler – ağırlaşır karşıtlık; “yorgun bisikleti iç çeker” kişileştirme (kullanılmış). Abartma yok. Elenir.
Adım 6: D → iyi – kötü karşıtlık var; “otuz yılda binlerce mektup” ise gerçek olabilecek bir sayıdır, abartma değildir. Tek sanat kalır. Elenir.
Sık yapılan hata: (I) cümlede “gibi” olmadığı için benzetmeyi “kullanılmamış” saymak. O zaman A da doğru görünür. Edatsız benzetmeyi “X bir Y'dir” kalıbından tanı.
Cevap B.`
},
{
  id: "tur-ss-324",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Geçen yaz dayımın yanına gitmek için ilk kez uçağa bindim. Yolculuk yalnızca bir saat sürecekti, ama ben o bir saati haftalardır hayal ediyordum. Cam kenarındaki koltuğa oturup kemerimi herkesten önce bağladım. Annem yanımda dergi okurken ben yerimde duramıyor, gözümü kanattan ayıramıyordum. (1) Uçak pistte hızlanırken kalbimin gümbürtüsü motorların sesini bastırıyordu. (2) Tekerlekler yerden kesildikten birkaç dakika sonra şehir, çocukların halıya dizdiği bir oyuncak takımı kadar küçüktü. (3) Kanadın ucundaki küçük ışık, yol boyunca hiç uyumadan bize nöbet tuttu. (4) Uçak alçalmaya başladığında hem seviniyor hem üzülüyordum: Birazdan dayıma kavuşacak, ama gökyüzünden ayrılacaktım.

Bu metinle ilgili şu yargılar veriliyor:
I. (2) numaralı cümlede edatla kurulmuş bir benzetme vardır; şehir, düzenli dizilmiş olması yönünden oyuncak takımına benzetilmiştir.
II. (1) numaralı cümlede abartma yapılmıştır; bu sanat, anlatıcının ilk uçuşundaki heyecanının büyüklüğünü vurgulamaktadır.
III. (3) numaralı cümlede kişileştirme vardır; (4) numaralı cümledeki karşıtlık ise iki ayrı zıt kavram çiftiyle kurulmuştur.

**Buna göre numaralanmış yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: ["Zıt çiftleri eksik sayma: III. yargıyı elemişsin. (3)'te ışığın uyumadan nöbet tutması kişileştirmedir. (4)'te ise iki ayrı çift var: sevinmek – üzülmek ve kavuşmak – ayrılmak. Yargının iki yarısı da doğrudur.", "Benzetme yönünü yanlış seçme: (2)'de ortak özellik cümlede yazıyor: küçük olmak. “Halıya dizdiği” sözü oyuncak takımını tanıtır, benzetme yönü değildir; I. yargı yanlıştır. III. yargı ise doğrudur, (4)'te iki zıt çift vardır.", null, "Kısmen doğru yargıyı doğru sayma: I. yargının ilk yarısı doğru, “kadar” edatıyla benzetme yapılmış. Ama şehir düzenli dizildiği için değil, küçük göründüğü için oyuncak takımına benzetilmiş; yargının ikinci yarısı yanlıştır."],
  aciklama: `Bu soruda her yargı iki parçalıdır; parçalardan biri yanlışsa yargının tamamı yanlış olur.
Adım 1: I. yargı → (2) “Şehir, … bir oyuncak takımı kadar küçüktü.” “Kadar” edatıyla benzetme yapılmış; ilk yarı doğru. Benzetme yönü, iki şeyin ortak özelliğidir ve cümlede açıkça yazıyor: küçük olmak. “Çocukların halıya dizdiği” sözü yalnızca oyuncak takımını tanıtır. Şehir düzenli olduğu için değil, yukarıdan küçük göründüğü için benzetilmiş; ikinci yarı yanlış.
Adım 2: II. yargı → (1) Kalp atışının sesi uçak motorunu bastıramaz; ölçü gerçeğin dışında, abartma var. Metnin başına dön: anlatıcı ilk kez uçuyor, bu yolculuğu haftalardır hayal ediyor, yerinde duramıyor. Büyütülen kalp gümbürtüsü bu heyecanı vurgular. Doğru.
Adım 3: III. yargı → (3) Işık “hiç uyumadan nöbet tuttu”: uyumamak ve nöbet tutmak insana özgüdür, kişileştirme var. (4) Zıt çiftleri say: sevinmek – üzülmek ve kavuşmak – ayrılmak. İki ayrı çift var; ikisi birlikte anlatıcının karışık duygularını öne çıkarıyor. Doğru.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: Benzetmeyi bulunca yargının devamını okumadan doğru saymak. I. yargıda benzetme de edat da doğrudur; yanlışlık benzetme yönündedir. Yönü bulmak için “Hangi bakımdan benzetilmiş?” diye sor; cevap çoğu zaman cümlenin içinde hazırdır.
Cevap C.`
},
{
  id: "tur-ss-325",
  kazanim: "T.8.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Belediyenin her bahar düzenlediği uçurtma şenliği bu yıl sahildeki çayırda yapıldı. Şenliğe çevre ilçelerden de yüzlerce çocuk katıldı; hakemler, uçurtmaların havada kalma süresini ölçecekti. Doruk, çıtalarını iki akşam uğraşıp kendi elleriyle bağladığı mavi uçurtmasını getirmişti. Hava açıktı, rüzgâr da tam kıvamındaydı. Babası, çayırın kenarındaki çay ocağından oğlunu izliyordu.

(I) Uçurtma daha ilk koşuda havalandı; ipin ucunda, eve dönmek istemeyen bir çocuk gibi ayak diriyor, Doruk'la inatlaşıyordu. (II) Rüzgâr bir ara kesilince çayırdaki papatyalar başlarını kaldırıp “Şimdi düşecek!” diye fısıldaştı. (III) Öğleye doğru gökyüzü, rengârenk balıkların yüzdüğü bir akvaryumdu; bulutlar da nazikçe kenara çekilip uçurtmalara yer açtı. (IV) Akşamüstü hava bozacak gibiydi; Doruk ipi toplamaya başlayınca mavi uçurtma buna küsüp başını öte yana çevirdi. (V) Tam o sırada kuyruğu kopan sarı bir uçurtma, sapandan çıkmış taş gibi fırlayıp bir solukta güneşe vardı. Akşam olduğunda hakemler süreleri açıkladı; mavi uçurtma kırk iki dakikayla üçüncü olmuştu.

**Bu metinde numaralanmış cümlelerin hangi ikisinde kullanılan söz sanatları aynıdır?**`,
  gorsel: null,
  secenekler: ["I ve III", "I ve V", "II ve IV", "III ve IV"],
  dogru: 0,
  hatalar: [null, "Yalnızca ortak sanata bakma: iki cümlede de “gibi” ile kurulmuş benzetme var; ama I. cümlenin ikinci sanatı kişileştirme (ayak diremek, inatlaşmak), V. cümleninki abartmadır (bir solukta güneşe varmak). Sanatlar aynı değil.", "Konuşturmayı ayrı bir sanat olarak saymama: iki cümlede de kişileştirme var; ama II. cümlede papatyalar söz söylediği için ayrıca konuşturma yapılmıştır. IV. cümlede uçurtma küsüyor, konuşmuyor.", "Edatsız benzetmeyi kaçırma: III. cümlede gökyüzü “gibi” kullanılmadan akvaryuma benzetilmiş; yani kişileştirmenin yanında benzetme de var. IV. cümledeki “bozacak gibiydi” ise tahmin bildirir; orada yalnızca kişileştirme vardır."],
  aciklama: `Önce beş cümlenin her birine, içindeki sanatların tam listesini yaz; sonra listesi birebir aynı olan iki cümleyi ara. Bir sanat eksik ya da fazlaysa cümleler eşleşmez.
Adım 1: (I) “Bir çocuk gibi”: uçurtma çocuğa benzetilmiş, benzetme. “Ayak diriyor, inatlaşıyordu”: insana özgü davranış, kişileştirme. Liste: benzetme + kişileştirme.
Adım 2: (II) Papatyalar “Şimdi düşecek!” diye fısıldaşıyor: insan olmayan varlık söz söylüyor, konuşturma; konuşturma kişileştirmeyi de içerir. Liste: kişileştirme + konuşturma.
Adım 3: (III) “Gökyüzü … bir akvaryumdu”: gökyüzü akvaryuma benzetilmiş; edat yok ama benzetme var. Bulutlar “nazikçe kenara çekilip yer açtı”: nezaket insana özgüdür, kişileştirme. Liste: benzetme + kişileştirme.
Adım 4: (IV) “Bozacak gibiydi”: “gibi” burada tahmin bildirir, benzetme yok. Uçurtma “küsüp başını çevirdi”: kişileştirme. Liste: yalnızca kişileştirme.
Adım 5: (V) “Sapandan çıkmış taş gibi”: benzetme. “Bir solukta güneşe vardı”: gerçekte olamaz, abartma. Liste: benzetme + abartma.
Adım 6: Listesi aynı olan iki cümle I ve III'tür.
Sık yapılan hata: Cümleleri “gibi” sözcüğüne göre eşleştirmek. I, IV ve V'te “gibi” vardır ama IV'te benzetme kurmaz; III'te ise “gibi” yoktur ama benzetme vardır. Ölçüt sözcük değil, farklı iki şeyin ortak bir özellikle yan yana getirilip getirilmediğidir.
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
