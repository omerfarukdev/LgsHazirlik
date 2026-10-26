// Fen Bilimleri — Elektrik Enerjisinin Dönüşümü: Kademe 3 (LGS Ayarı) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-enerjisi-donusumu"] = window.LGS_BANK["elektrik-enerjisi-donusumu"] || []).push(
{
  id: "fen-ed-326",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir seracının bitki yetiştirme odasında üç elektrikli cihaz çalışıyor: akım geçince ısınan bir ısıtıcı tel, havayı dolaştıran bir havalandırma fanı ve bitkilere ışık veren bir LED lamba. Seracı, bu cihazların enerji dönüşümleri için şu yargıları yazıyor.\n**Bu yargılardan hangileri doğrudur?**\nI. Isıtıcı telde elektrik enerjisi esas olarak ışık enerjisine dönüşür.\nII. Havalandırma fanının motorunda elektrik enerjisi hareket enerjisine dönüşür.\nIII. LED lambada elektrik enerjisi esas olarak ışık enerjisine dönüşür.",
  gorsel: null,
  secenekler: ["Yalnız II", "II ve III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: [
    "Eksik değerlendirme: LED lamba aydınlatma için kullanılır, elektrik enerjisini ışığa çevirir; III de doğrudur.",
    null,
    "Isıtıcıyı lamba sanma: ısıtıcı tel elektriği esas olarak ısıya çevirir, I yanlıştır; III ise doğrudur.",
    "Isıtıcıyı lamba sanma: I yanlıştır; ayrıca fanın motoru elektriği harekete çevirdiği için II doğrudur ve bu seçenekte dışarıda kalmıştır."
  ],
  aciklama: "Bir cihazda elektrik enerjisinin hangi enerjiye dönüştüğünü cihazın görevi belirler: ısıtıcı telde ısı, motorda hareket, lambada ışık.\nAdım 1: Isıtıcı tel akım geçince ısınır; elektrik enerjisi ısıya dönüşür. I yanlıştır.\nAdım 2: Fanı döndüren motorda elektrik enerjisi hareket enerjisine dönüşür. II doğrudur.\nAdım 3: LED lambadan beklenen ışıktır; III doğrudur.\nSık yapılan hata: Akkor halindeki bir telin ışık verdiğini görüp ısıtıcıyı ışık kaynağı saymak; ısıtıcı telin amacı ısıtmaktır.\nCevap B."
},
{
  id: "fen-ed-327",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kıyı kasabasındaki rüzgâr santralinde jeneratör arızalanıp devre dışı kalıyor; türbin kanatları ise güçlü rüzgârla dönmeye devam ediyor. Teknisyen durumu şöyle değerlendiriyor.\n**Teknisyenin yargılarından hangileri doğrudur?**\nI. Kanatlar rüzgârın hareket enerjisiyle dönmeyi sürdürebilir.\nII. Hareket enerjisi elektrik enerjisine çevrilemediği için elektrik üretimi durur.\nIII. Türbin döndüğü sürece elektrik, türbinin kendisinde oluşmaya devam eder.",
  gorsel: null,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I ve II"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: kanatları döndüren etki rüzgârdır, jeneratör arızalansa da rüzgâr esiyorsa kanatlar dönebilir; I de doğrudur.",
    "III'ü doğru sanma: elektrik türbinde değil jeneratörde oluşur; ayrıca II doğru olduğu hâlde dışarıda bırakılmış.",
    "I'i dışarıda bırakma ve III'ü doğru sayma: kanatların dönmesi rüzgâra bağlıdır, III ise elektriğin oluştuğu yeri yanlış gösterir.",
    null
  ],
  aciklama: "Türbin yalnızca döner; hareket enerjisini elektriğe çevirip elektriği oluşturan parça jeneratördür.\nAdım 1: Kanatları döndüren etki rüzgârdır. Jeneratör arızalansa da rüzgâr esiyorsa kanatlar dönebilir; I doğrudur.\nAdım 2: Hareket enerjisini elektrik enerjisine çeviren parça jeneratördür. Devre dışı kalınca elektrik üretilemez; II doğrudur.\nAdım 3: Elektrik her santralde jeneratörde oluşur, türbinde değil; III yanlıştır.\nSık yapılan hata: Elektriğin türbinde oluştuğunu sanmak.\nCevap D."
},
{
  id: "fen-ed-328",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ülkenin enerji kurumu, üç farklı santral türünün özelliklerini K, L ve M harfleriyle gösterilen bir tabloda toplamıştır.\n**Buna göre K, L ve M santralleri sırasıyla aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Özellik</th><th>K</th><th>L</th><th>M</th></tr><tr><td>Yakıt gerekir mi?</td><td>Evet</td><td>Evet (uranyum)</td><td>Hayır</td></tr><tr><td>Yakıt yanar mı?</td><td>Evet</td><td>Hayır</td><td>Hayır</td></tr><tr><td>İşletmede karbondioksit</td><td>Salar</td><td>Salmaz</td><td>Salmaz</td></tr><tr><td>Başlıca sorun</td><td>Hava kirliliği</td><td>Radyoaktif atık</td><td>Baraj gölü</td></tr></table>`,
  secenekler: ["Termik, nükleer, hidroelektrik", "Nükleer, termik, hidroelektrik", "Termik, hidroelektrik, nükleer", "Hidroelektrik, nükleer, termik"],
  dogru: 0,
  hatalar: [
    null,
    "K ile L yer değiştirmiş: yakıtı yakıp karbondioksit salan ve havayı kirleten santral termik, yakıtı yanmayan ama atığı radyoaktif olan santral nükleerdir.",
    "L ile M yer değiştirmiş: radyoaktif atık nükleer santralin, baraj gölü ise hidroelektrik santralin sorunudur.",
    "Sıra tümüyle ters: yakıt yakan ve havayı kirleten K hidroelektrik olamaz."
  ],
  aciklama: "Santralleri yakıt, yanma, gaz salımı ve başlıca sorun ölçütleriyle ayırabiliriz.\nAdım 1: K'de yakıt gerekir ve yanar; karbondioksit salınır, sorun hava kirliliğidir. Bu termik santraldir.\nAdım 2: L'de yakıt (uranyum) gerekir ama yanmaz; ısı çekirdek enerjisinden gelir, karbondioksit salınmaz, atık radyoaktiftir. Bu nükleer santraldir.\nAdım 3: M'de yakıt gerekmez, baraj gölü sorun olur. Bu hidroelektrik santraldir.\nSık yapılan hata: \"Yakıt gerekir\" ile \"yakıt yanar\" ifadelerini aynı sanıp nükleeri kömür gibi düşünmek.\nCevap A."
},
{
  id: "fen-ed-329",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Berk'in pilli oyuncak arabasında düğmeye basılınca ön farlar yanıyor ve tekerlekler dönüyor. Berk, tekerleklerin dönmesini sağlayan enerji dönüşümlerini pilden başlayarak sıraya dizmek istiyor.\n**Berk'in yazacağı doğru zincir aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kimyasal → hareket → elektrik",
    "Elektrik → kimyasal → hareket",
    "Kimyasal → elektrik → hareket",
    "Hareket → elektrik → kimyasal"
  ],
  dogru: 2,
  hatalar: [
    "Sıra hatası: pildeki kimyasal enerji önce elektrik enerjisine dönüşür; hareket, motor elektriği kullanınca ortaya çıkar.",
    "Pili elektrik üreticisi yerine depolayıcı sanma: pil elektrik harcayarak kimyasal enerji üretmez; kimyasal enerjisini elektriğe çevirir.",
    null,
    "Yön karıştırma: bu zincir hareketten elektrik elde edilen dinamo ve pil şarjı için geçerlidir; oyuncak araba elektrikten hareket elde eder."
  ],
  aciklama: "Pil enerjiyi kimyasal biçimde depolar ve devreye elektrik verir; motor bu elektriği harekete çevirir.\nAdım 1: Pildeki kimyasal enerji elektrik enerjisine dönüşür.\nAdım 2: Motor, elektrik enerjisini hareket enerjisine çevirir ve tekerlekler döner.\nAdım 3: Farlar ise elektriğin ışığa dönüştüğü ayrı koldur; tekerlek zincirine girmez.\nSağlama: Pil bitince motora elektrik gitmez ve araba durur.\nCevap C."
},
{
  id: "fen-ed-330",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okulun enerji kulübü, okuldaki elektrik tüketimini düşürmek için üç öneri hazırlıyor.\n**Bu önerilerden hangileri elektrik tasarrufuna ve enerji verimliliğine katkı sağlar?**\nI. Sınıflardaki eski ampullerin aynı ışığı veren LED ampullerle değiştirilmesi\nII. Hava kararmadan koridor lambalarının tamamının yakılması\nIII. Boş kalan sınıflarda ışığı kapatan hareket sensörlerinin takılması",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: sensör, boş sınıfta ışığı kapatarak gereksiz tüketimi önler; III de doğrudur.",
    "Eksik değerlendirme: LED ampul aynı ışığı daha az elektrikle verir; I de doğrudur.",
    null,
    "II'yi doğru sanma: lambaları erken yakmak gereksiz tüketimi artırır; ayrıca I doğru olduğu hâlde dışarıda bırakılmış."
  ],
  aciklama: "Enerji verimliliği, aynı işi daha az enerjiyle yapmaktır; tasarruf ise gereksiz tüketimi önlemektir.\nAdım 1: LED ampul aynı aydınlatmayı eski ampulden daha az elektrikle sağlar; I doğrudur.\nAdım 2: Hava kararmadan lambaları yakmak elektriği boşa harcar; II yanlıştır.\nAdım 3: Hareket sensörü boş sınıfta ışığı kapatır ve gereksiz tüketimi önler; III doğrudur.\nSağlama: Doğru yargılar I ve III'tür.\nCevap C."
},
{
  id: "fen-ed-331",
  kazanim: "F.8.7.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Zeynep, elektrik enerjisini ışık enerjisine dönüştüren bir gece lambası modeli tasarlıyor ve iki sürüm çiziyor. 1. sürümde bir pil, kablolar ve küçük bir ampul var. 2. sürümde pilin yerine, kolu elle çevrilen bir dinamo bağlanıyor; ampul ve kablolar aynı kalıyor. İki sürümde de ampul yanıyor ve bir süre sonra hafifçe ısınıyor.\n**Zeynep'in sürümleriyle ilgili aşağıdaki yargılardan hangileri doğrudur?**\nI. İki sürümde de ampulde elektrik enerjisi esas olarak ışık enerjisine dönüşür.\nII. 2. sürümde zincirin ilk basamağı kimyasal enerjidir.\nIII. 1. sürümde pil, elektrik enerjisini kimyasal enerjiye çevirerek ampulü yakar.",
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II'yi doğru sanma: dinamo kimyasal enerjiyi değil, elle verilen hareket enerjisini elektriğe çevirir; doğru olan I ise dışarıda bırakılmış.",
    "II'yi doğru sanma: 2. sürümde zincir hareket enerjisiyle başlar, kimyasal enerji yoktur; I ise doğrudur.",
    "Pilin yönünü ters yazma: pil, elektrikten kimyasal enerji üretmez, kimyasal enerjisini elektriğe çevirir; II de yanlıştır, doğru olan I dışarıda kalmış."
  ],
  aciklama: "Bir cihazda elektrik enerjisinin hangi enerjiye dönüştüğünü cihazın görevi belirler; elektriğin kaynağı ise pilde kimyasal enerji, dinamoda hareket enerjisidir.\nAdım 1: Ampul iki sürümde de elektrik alır ve ışık verir; ısınması, elektriğin bir kısmının ısıya gittiğini gösterir ama asıl dönüşüm ışıktır. I doğrudur.\nAdım 2: 2. sürümde elektriği dinamo üretir; dinamo elle verilen hareket enerjisini elektriğe çevirir, yani zincir hareketle başlar. II yanlıştır.\nAdım 3: 1. sürümde pil kimyasal enerjisini elektriğe çevirir; elektrikten kimyasal enerji üretmez. III yanlıştır.\nSık yapılan hata: Ampulün ısındığını görüp ısıyı asıl dönüşüm saymak.\nCevap A."
},
{
  id: "fen-ed-332",
  kazanim: "F.8.7.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Harcanan elektrik enerjisi, cihazın gücü ile çalışma süresinin çarpımına eşittir. Bir ailenin evindeki dört cihazın gücü ve günlük kullanım süreleri tabloda verilmiştir. Aile, bir cihazın günlük kullanım süresini yalnızca 1 saat kısaltarak en fazla tasarrufu yapmak istiyor.\n**Buna göre aile hangi cihazın süresini kısaltmalıdır?**",
  gorsel: `<table class="tablo"><tr><th>Cihaz</th><th>Güç (W)</th><th>Günlük süre (saat)</th></tr><tr><td>LED ampul</td><td>10</td><td>6</td></tr><tr><td>Televizyon</td><td>100</td><td>4</td></tr><tr><td>Bilgisayar</td><td>200</td><td>10</td></tr><tr><td>Isıtıcı</td><td>1000</td><td>1</td></tr></table>`,
  secenekler: ["LED ampul", "Televizyon", "Bilgisayar", "Isıtıcı"],
  dogru: 3,
  hatalar: [
    "Güce bakmama: LED ampulün gücü 10 W'tır, 1 saat kısaltmak yalnızca 10 Wh kazandırır.",
    "Güç farkını görmeme: televizyonda 1 saatlik kısaltma 100 Wh kazandırır; ısıtıcıda bu değer 1000 Wh'tır.",
    "Toplam tüketimi en yüksek cihazı seçme: bilgisayar günde 2000 Wh harcar ama 1 saat kısaltmak yalnızca 200 Wh kazandırır.",
    null
  ],
  aciklama: "1 saat kısaltılınca kazanılan enerji, cihazın gücü ile 1 saatin çarpımıdır; yani cihazın gücüne eşit sayıda Wh'tır.\nAdım 1: LED ampul 10 Wh, televizyon 100 Wh, bilgisayar 200 Wh, ısıtıcı 1000 Wh kazandırır.\nAdım 2: En büyük kazanç 1000 Wh ile ısıtıcıdadır.\nAdım 3: Bilgisayar günlük toplamda en çok enerjiyi (200 × 10 = 2000 Wh) harcar, fakat sorulan şey 1 saatlik kısaltmanın etkisidir.\nSık yapılan hata: Toplam tüketimi en yüksek olan cihazı seçmek.\nCevap D."
},
{
  id: "fen-ed-333",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fen kulübü, termik, nükleer ve jeotermal santrallerin üçünü birden tanıtan bir pano hazırlıyor. Panoya bu üç santralin ortak bir özelliği yazılacak.\n**Aşağıdakilerden hangisi bu üç santralin ortak özelliğidir?**",
  gorsel: null,
  secenekler: [
    "Türbini hareket hâlindeki hava döndürür",
    "Türbini yüksek basınçlı su buharı döndürür",
    "Yakıtın yanmasıyla ısı elde edilir",
    "Kullanılmış yakıt radyoaktif atık bırakır"
  ],
  dogru: 1,
  hatalar: [
    "Rüzgâr santraliyle karıştırma: türbini hareket hâlindeki havanın döndürdüğü santral rüzgâr santralidir.",
    null,
    "Yalnız termik santral için doğru: nükleerde ısı çekirdek enerjisinden, jeotermalde yer altından gelir; yakıt yanmaz.",
    "Yalnız nükleer santral için doğru: radyoaktif atık termik ve jeotermal santralde oluşmaz."
  ],
  aciklama: "Santralleri türbini neyin döndürdüğüne göre ayırabiliriz: su buharı, akan su ya da hava.\nAdım 1: Termik santralde yakıtın ısısı suyu buhara çevirir ve buhar türbini döndürür.\nAdım 2: Nükleer santralde çekirdek enerjisinden elde edilen ısı, jeotermal santralde yer altı sıcaklığı buhar oluşturur ve buhar türbini döndürür.\nAdım 3: Yakıtın yanması yalnız termikte, radyoaktif atık yalnız nükleerde, havayla dönen türbin yalnız rüzgârda vardır.\nSık yapılan hata: Buharla çalışan her santralde yakıt yandığını sanmak.\nCevap B."
},
{
  id: "fen-ed-334",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bölgede jeotermal santral kurulması tartışılıyor. Santral mühendisi, bu santrale ilişkin şu yargıları öne sürüyor.\n**Bu yargılardan hangileri doğrudur?**\nI. Türbini barajda biriken suyun akışı döndürür.\nII. Yalnızca yer altında sıcak su ve buhar bulunan bölgelerde kurulabilir.\nIII. Elektrik üretmek için kömür yakılır.",
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "III'ü doğru sanma: jeotermal santralde yakıt yakılmaz, ısı yer altından gelir; kömür termik santralin yakıtıdır.",
    "I'i doğru sanma: baraj gölü hidroelektrik santrale özgüdür; jeotermalde türbini yer altından gelen buhar döndürür.",
    "Hem I hem III yanlıştır: baraj ve kömür jeotermal santralde yoktur; doğru olan II ise dışarıda bırakılmış."
  ],
  aciklama: "Jeotermal santral, yer altındaki sıcak su ve buharın ısısından yararlanır; yakıt yakılmaz.\nAdım 1: Türbini döndüren etki yer altından gelen buhardır, baraj suyu değildir; I yanlıştır.\nAdım 2: Kaynak yer altı sıcak su ve buharı olduğu için santral yalnız bu kaynağın bulunduğu bölgelerde kurulabilir; II doğrudur.\nAdım 3: Kömür yakılması termik santrale özgüdür; III yanlıştır.\nSık yapılan hata: Buharla çalışan her santralde yakıt yakıldığını sanmak.\nCevap A."
},
{
  id: "fen-ed-335",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir belediye, ilçede enerji verimliliği kampanyası yürütüyor. Kampanya kapsamında üç çalışma planlanıyor.\n**Bu çalışmalardan hangileri enerji verimliliğini artırmaya yöneliktir?**\nI. Gündüz de açık kalan sokak lambalarının sayısını artırmak\nII. Evlerde eski buzdolaplarının yerine A sınıfı modellerin kullanılmasını özendirmek\nIII. Bekleme modunda elektrik harcayan cihazlar için bilgilendirme broşürü dağıtmak",
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: broşür, halkı bekleme modundaki gereksiz tüketim konusunda bilinçlendirir; III de doğrudur.",
    "Eksik değerlendirme: A sınıfı buzdolabı aynı işi daha az elektrikle yapar; II de doğrudur.",
    "I'i doğru sanma: gündüz sokak lambalarını açık bırakmak gereksiz tüketimi artırır; III ise dışarıda bırakılmış.",
    null
  ],
  aciklama: "Enerji verimliliği çalışmaları, aynı işin daha az enerjiyle yapılmasını ve gereksiz tüketimin azalmasını hedefler.\nAdım 1: Gündüz sokak lambasını açık bırakmak elektriği boşa harcar; I yanlıştır.\nAdım 2: A sınıfı buzdolabı daha az elektrikle aynı soğutmayı yapar; II doğrudur.\nAdım 3: Bilgilendirme broşürü bekleme tüketimini azaltacak davranışı yaygınlaştırır; III doğrudur.\nSağlama: Doğru yargılar II ve III'tür.\nCevap D."
},
{
  id: "fen-ed-336",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Dağlık bir bölgede yeni bir santral kurulacaktır. Bölgede yıl boyu su taşıyan ve eğimi yüksek bir nehir vardır; rüzgâr çoğu gün zayıf eser ve yer altında sıcak su ya da buhar kaynağı yoktur. Santralin işletme sırasında yakıt satın almayı gerektirmemesi isteniyor.\n**Bu koşullara göre bölgeye kurulması en uygun santral aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Jeotermal santral", "Hidroelektrik santral", "Rüzgâr santrali", "Termik santral"],
  dogru: 1,
  hatalar: [
    "Bölge koşulunu görmeme: jeotermal santral yer altı sıcak su ve buhar gerektirir, bölgede bu kaynak yoktur.",
    null,
    "Bölge koşulunu görmeme: rüzgâr çoğu gün zayıf estiği için rüzgâr santrali yeterli ve düzenli elektrik üretemez.",
    "Yakıt koşulunu görmeme: termik santralde yakıt yakılır ve satın alınır, istenen koşula uymaz."
  ],
  aciklama: "Bir bölgeye santral seçerken yalnızca verilen koşullara bakılır: kaynak var mı ve yakıt gerekiyor mu?\nAdım 1: Yakıt gerektirmemesi istendiği için termik santral elenir.\nAdım 2: Sıcak su ve buhar kaynağı olmadığı için jeotermal, rüzgâr zayıf olduğu için rüzgâr santrali elenir.\nAdım 3: Yıl boyu akan, eğimi yüksek nehir hidroelektrik santralin kaynağıdır.\nSık yapılan hata: Yenilenebilir her santralin her bölgeye kurulabileceğini sanmak.\nCevap B."
},
{
  id: "fen-ed-337",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir elektrik tamircisi, evdeki sigortanın görevini çırağına anlatırken şu yargıları söylüyor.\n**Bu yargılardan hangileri doğrudur?**\nI. Devreden geçen akım güvenli sınırı aşarsa sigorta devreyi keser.\nII. Sigorta, cihazların daha az elektrik tüketmesini sağlayarak faturayı düşürür.\nIII. Sigorta attığında kabloların aşırı ısınması ve yangın çıkması önlenmiş olur.",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Eksik değerlendirme: sigorta devreyi kestiğinde kabloların ısınması da durur; III de doğrudur.",
    null,
    "I'i dışarıda bırakma ve II'yi doğru sayma: sigorta tüketimi azaltmaz, yalnızca devreyi korur; I ise sigortanın temel görevidir.",
    "II'yi doğru sanma: sigorta tüketimi azaltmaz, enerji vermez; yalnızca aşırı akımda devreyi açar."
  ],
  aciklama: "Sigorta, devreden geçen akım güvenli sınırı aşınca devreyi keserek kabloları ve cihazları korur.\nAdım 1: Aşırı akımda devreyi kesmek sigortanın temel görevidir; I doğrudur.\nAdım 2: Sigorta tüketimi ölçmez ve azaltmaz; tüketimi ölçen alet sayaçtır. II yanlıştır.\nAdım 3: Devre kesilince kablolar ısınmayı sürdüremez, yangın riski ortadan kalkar; III doğrudur.\nSık yapılan hata: Sigortanın atmasını \"cihaz bozuldu\" diye yorumlamak.\nCevap B."
},
{
  id: "fen-ed-338",
  kazanim: "F.8.7.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Ekin, esen rüzgârla dönen bir pervaneyi dinamoya, dinamoyu da bir LED lambaya bağlayarak pilsiz bir aydınlatma modeli yapıyor. Model rüzgârlı havada LED'i yakıyor; rüzgâr kesilince LED sönüyor.\n**LED'in sönmesinin nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Pervanenin ışık enerjisi üretmeyi bırakması",
    "LED'in ısı enerjisi alamaması",
    "Dinamonun hareket enerjisi alamayıp elektrik üretememesi",
    "Dinamonun elektriği hareket enerjisine çevirmeyi bırakması"
  ],
  dogru: 2,
  hatalar: [
    "Pervane ışık üretmez: rüzgârın hareket enerjisini alır ve dinamoya iletir.",
    "LED ısıyla değil elektrik enerjisiyle yanar; ısı enerjisi alması gerekmez.",
    null,
    "Yön karıştırma: dinamo elektriği harekete çevirmez, hareketi elektriğe çevirir."
  ],
  aciklama: "Bu modelde zincir şöyledir: rüzgârın hareket enerjisi → dinamo → elektrik enerjisi → LED'de ışık enerjisi.\nAdım 1: Pervane rüzgârdan hareket enerjisi alır ve dinamonun milini döndürür.\nAdım 2: Dinamo bu hareket enerjisini elektrik enerjisine çevirir; LED bu elektrikle yanar.\nAdım 3: Rüzgâr kesilince pervane durur, dinamo hareket alamaz ve elektrik üretmez; LED söner.\nSağlama: Modelde pil olmadığı için elektriğin tek kaynağı dinamodur.\nCevap C."
},
{
  id: "fen-ed-339",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir öğrenci, üç aletin çalışırken aldığı ve esas olarak verdiği enerji türlerini tabloya yazmıştır. Aletler tabloda X, Y ve Z harfleriyle gösterilmiştir.\n**Buna göre X, Y ve Z aşağıdakilerden hangisindeki gibi eşleştirilebilir?**",
  gorsel: `<table class="tablo"><tr><th>Alet</th><th>Aldığı enerji</th><th>Esas olarak verdiği enerji</th></tr><tr><td>X</td><td>Hareket</td><td>Elektrik</td></tr><tr><td>Y</td><td>Elektrik</td><td>Hareket</td></tr><tr><td>Z</td><td>Elektrik</td><td>Işık</td></tr></table>`,
  secenekler: [
    "X: bisiklet dinamosu, Y: mikser motoru, Z: LED lamba",
    "X: mikser motoru, Y: bisiklet dinamosu, Z: LED lamba",
    "X: bisiklet dinamosu, Y: LED lamba, Z: mikser motoru",
    "X: LED lamba, Y: mikser motoru, Z: bisiklet dinamosu"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Motor ile dinamoyu karıştırma: elektrikten hareket elde eden alet motordur, hareketten elektrik elde eden alet dinamodur.",
    "Y ile Z yer değiştirmiş: elektriği harekete çeviren mikser motorudur, ışığa çeviren LED lambadır.",
    "Tamamen ters eşleştirme: LED lamba hareket alıp elektrik vermez; dinamo da elektrik alıp ışık vermez."
  ],
  aciklama: "Her aletin neyi alıp neyi verdiğine bakarak eşleştiririz.\nAdım 1: X hareket alıp elektrik verir; bu işi dinamo (jeneratör) yapar.\nAdım 2: Y elektrik alıp hareket verir; bu işi mikserin motoru yapar.\nAdım 3: Z elektrik alıp ışık verir; bu alet LED lambadır.\nSağlama: Motor ile dinamo birbirinin tersi dönüşümü yapar.\nCevap A."
},
{
  id: "fen-ed-340",
  kazanim: "F.8.7.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir evdeki koridor lambasında gücü 40 W olan eski bir ampul kullanılıyor ve ampul her gün 5 saat yanıyor. Aile, aynı ışığı veren gücü 10 W olan bir LED ampul takıyor. Harcanan elektrik enerjisi, gücün çalışma süresiyle çarpımına eşittir (1 kWh = 1000 Wh).\n**Bu değişiklik, 100 günde kaç kWh elektrik tasarrufu sağlar?**",
  gorsel: null,
  secenekler: ["1,5 kWh", "3 kWh", "5 kWh", "15 kWh"],
  dogru: 3,
  hatalar: [
    "Birim çevirme hatası: 15 000 Wh = 15 kWh'tır; burada 1000 yerine 10 000'e bölünmüş.",
    "Süreyi unutma: 30 W × 100 gün = 3000 Wh = 3 kWh bulunur; günlük 5 saat hesaba katılmamış.",
    "Yalnız LED'in tüketimini bulma: 10 W × 5 saat × 100 gün = 5 kWh'tır; tasarruf iki ampulün tüketim farkıdır.",
    null
  ],
  aciklama: "Tasarruf, eski ampulün ve LED ampulün tükettiği enerjilerin farkıdır; enerji = güç × süre.\nAdım 1: Güç farkı 40 − 10 = 30 W'tır.\nAdım 2: Süre 5 saat × 100 gün = 500 saattir.\nAdım 3: Tasarruf 30 W × 500 saat = 15 000 Wh = 15 kWh olur.\nSağlama: Eski ampul 20 kWh, LED ampul 5 kWh harcar; fark 15 kWh'tır.\nCevap D."
},
{
  id: "fen-ed-341",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Aynı ışık düzeyini veren iki ampulden biri eski tip (60 W), diğeri LED (9 W) ampuldür. İkisi de aynı süre yanmaktadır. Bir öğrenci bu ampuller için şu yargıları yazıyor.\n**Bu yargılardan hangileri doğrudur?**\nI. LED ampul aynı ışığı daha az elektrik enerjisiyle verir.\nII. Eski ampulde elektrik enerjisinin ışığa dönüşmeyip ısıya giden kısmı daha fazladır.\nIII. İki ampulde de ısıya dönüşen enerji miktarı eşittir.",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: eski ampul daha çok elektrik harcayıp aynı ışığı verdiği için ısıya giden kısmı da fazladır; II de doğrudur.",
    "III'ü doğru sanma: iki ampul farklı miktarda elektrik harcar ve aynı ışığı verir; ısıya dönüşen enerji eşit olamaz.",
    null,
    "III'ü doğru sanma ve I'i dışarıda bırakma: LED ampulün daha az enerjiyle aynı ışığı verdiği doğrudur, ısıya dönüşen enerji ise eşit değildir."
  ],
  aciklama: "Aynı ışığı veren iki ampulde, daha çok elektrik harcayan ampulün fazla enerjisi ışığa değil ısıya gider.\nAdım 1: LED ampul 9 W, eski ampul 60 W harcar; aynı ışık için LED daha az enerji kullanır. I doğrudur.\nAdım 2: Ortak ışık miktarı için gereken enerji aynıdır; eski ampuldeki fazla enerji ısıya dönüşür. II doğrudur.\nAdım 3: Bu yüzden ısıya dönüşen enerji eşit değildir; III yanlıştır.\nSık yapılan hata: LED ve eski ampulde ısıya dönüşen enerjiyi aynı sanmak.\nCevap C."
},
{
  id: "fen-ed-342",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ülke elektriğinin büyük bölümünü barajlı hidroelektrik santrallerden ve rüzgâr santrallerinden sağlıyor. Ülkede iki haftadır hiç yağış yok, baraj göllerinin su seviyesi düşüyor ve hava çok sakin.\n**Bu durumda santrallerin elektrik üretimi için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Her iki tür santralde de üretim azalabilir",
    "Kaynakları yenilenebilir olduğu için üretim değişmez",
    "Hidroelektrik santrallerin üretimi azalabilir; rüzgâr santrallerininki değişmez",
    "Rüzgâr santrallerinin üretimi azalabilir; hidroelektrik santrallerininki değişmez"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yenilenebilir kaynağı \"her zaman hazır\" sanma: kaynak tükenmese de yağış ve rüzgâr değişince üretim değişir.",
    "Eksik değerlendirme: sakin hava rüzgâr santralinin üretimini de azaltır; yalnız hidroelektrik etkilenmez.",
    "Eksik değerlendirme: yağışsızlık ve düşen su seviyesi hidroelektrik santralin üretimini de azaltır; yalnız rüzgâr etkilenmez."
  ],
  aciklama: "Yenilenebilir kaynaklar tükenmez ama her an aynı miktarda bulunmaz.\nAdım 1: Hidroelektrik santralin üretimi baraj gölündeki su miktarına, yani yağışa bağlıdır; su seviyesi düşünce üretim azalabilir.\nAdım 2: Rüzgâr santralinin üretimi rüzgâr hızına bağlıdır; hava sakinse kanatlar yavaş döner ve üretim azalır.\nAdım 3: İki kaynak da azaldığı için iki tür santralin de üretimi azalabilir.\nSık yapılan hata: Yenilenebilir santralin her zaman sürekli üretim yaptığını sanmak.\nCevap A."
},
{
  id: "fen-ed-343",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir mahallede 200 ev, elektrik tasarrufu çalışması yapıyor. Çalışmadan önce her evin aylık ortalama tüketimi 150 kWh, çalışmadan sonra 130 kWh olmuştur.\n**Mahallenin aylık toplam elektrik tüketimi çalışmayla kaç kWh azalmıştır?**",
  gorsel: null,
  secenekler: ["20 kWh", "4 000 kWh", "26 000 kWh", "30 000 kWh"],
  dogru: 1,
  hatalar: [
    "Ev sayısını katmama: 20 kWh yalnızca tek bir evin tasarrufudur; mahallede 200 ev vardır.",
    null,
    "Sonraki toplamı bulma: 130 × 200 = 26 000 kWh, çalışmadan sonraki toplam tüketimdir; azalma değildir.",
    "Önceki toplamı bulma: 150 × 200 = 30 000 kWh, çalışmadan önceki toplam tüketimdir; azalma değildir."
  ],
  aciklama: "Bir evin tasarrufunu bulup ev sayısıyla çarparız.\nAdım 1: Bir evin tasarrufu 150 − 130 = 20 kWh'tır.\nAdım 2: Mahallede 200 ev olduğundan toplam azalma 20 × 200 = 4 000 kWh olur.\nAdım 3: Çok sayıda ailenin küçük tasarrufu ülkenin toplam tüketimini de belirgin biçimde azaltır.\nSağlama: 30 000 − 26 000 = 4 000 kWh.\nCevap B."
},
{
  id: "fen-ed-344",
  kazanim: "F.8.7.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ailede elektrik tasarrufu konuşulurken çocuklar şu yargıları söylüyor.\n**Bu yargılardan hangileri doğrudur?**\nI. Kumandayla kapatılan televizyon prizde kalırsa hiç elektrik tüketmez.\nII. Buzdolabının kapağını sık sık ve uzun süre açık tutmak tüketimi azaltır.\nIII. Çamaşır makinesini yarım dolu iki kez çalıştırmak yerine tam dolu bir kez çalıştırmak tasarruf sağlar.",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "Yalnız III"],
  dogru: 3,
  hatalar: [
    "Bekleme modunu yok sayma: kumandayla kapatılan cihaz prizde kaldığı sürece az da olsa elektrik tüketir.",
    "Yön hatası: açık kapak soğutucunun daha çok çalışmasına yol açar ve tüketimi artırır.",
    "Hem I hem II yanlıştır: bekleme modu tüketimi sıfır değildir, açık kapak tüketimi artırır; doğru olan III dışarıda kalmış.",
    null
  ],
  aciklama: "Tasarruf, gereksiz tüketimi azaltan davranışlardır.\nAdım 1: Kumandayla kapatılan ama prizde kalan cihaz bekleme modundadır ve az da olsa elektrik çeker; I yanlıştır.\nAdım 2: Buzdolabı kapağını açık tutmak soğutucunun daha çok çalışmasına yol açar; II yanlıştır.\nAdım 3: Makineyi tam dolu çalıştırmak, aynı çamaşırı daha az yıkamayla temizler; III doğrudur.\nSık yapılan hata: \"Kapalı\" görünen cihazın hiç elektrik tüketmediğini sanmak.\nCevap D."
},
{
  id: "fen-ed-345",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir enerji fuarındaki panoda dört santralin enerji dönüşüm zincirlerinin ilk basamağı yazılıdır; santral adları K, L, M ve N harfleriyle gizlenmiştir. Her santralin zinciri bu basamaktan başlayıp türbin ve jeneratör üzerinden elektrik enerjisine ulaşır.\n**Buna göre K, L, M ve N santralleri sırasıyla aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Santral</th><th>Zincirin ilk basamağı</th></tr><tr><td>K</td><td>Yakıtın kimyasal enerjisi</td></tr><tr><td>L</td><td>Uranyumun çekirdek enerjisi</td></tr><tr><td>M</td><td>Yüksekte duran suyun enerjisi</td></tr><tr><td>N</td><td>Yer altındaki sıcak su ve buharın ısı enerjisi</td></tr></table>`,
  secenekler: [
    "Termik, nükleer, hidroelektrik, jeotermal",
    "Termik, jeotermal, hidroelektrik, nükleer",
    "Nükleer, termik, hidroelektrik, jeotermal",
    "Termik, nükleer, jeotermal, hidroelektrik"
  ],
  dogru: 0,
  hatalar: [
    null,
    "L ile N yer değiştirmiş: uranyumun çekirdek enerjisi nükleer santrale, yer altı sıcaklığı jeotermal santrale aittir.",
    "K ile L yer değiştirmiş: yakıtın kimyasal enerjisi termik, çekirdek enerjisi nükleer santralin ilk basamağıdır.",
    "M ile N yer değiştirmiş: yüksekte duran suyun enerjisi hidroelektriğin, yer altı ısısı jeotermalin başlangıcıdır."
  ],
  aciklama: "Her santralin zinciri farklı bir enerjiden başlar.\nAdım 1: Yakıtın kimyasal enerjisi yanarak ısıya dönüşür; bu termik santraldir (K).\nAdım 2: Çekirdek enerjisi uranyumdan elde edilir; bu nükleer santraldir (L).\nAdım 3: Yüksekte duran suyun enerjisi akarken hareket enerjisine dönüşür; bu hidroelektrik santraldir (M). Yer altı sıcak su ve buharın ısısı jeotermal santraldir (N).\nSık yapılan hata: Isıyla çalışan santralleri (termik, nükleer, jeotermal) kaynaklarına bakmadan birbirine karıştırmak.\nCevap A."
},
{
  id: "fen-ed-346",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir öğrenci, bisikletin farını yakan dinamoyu bir hidroelektrik santraldeki jeneratörle karşılaştırıp ortak bir özellik bulmaya çalışıyor.\n**Bu iki düzeneğin ortak özelliği aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "İkisi de elektrik enerjisini hareket enerjisine çevirir",
    "İkisi de ısı enerjisini elektrik enerjisine çevirir",
    "İkisinde de elektrik üretimi için buhar gerekir",
    "İkisinde de dönme hareketi elektrik enerjisine çevrilir"
  ],
  dogru: 3,
  hatalar: [
    "Yön karıştırma: elektrikten hareket elde eden alet motordur; dinamo ve jeneratör hareketten elektrik elde eder.",
    "Kaynak karıştırma: dinamo ve jeneratör ısıyı değil, dönme hareketini elektriğe çevirir.",
    "Hidroelektrik santralde ve dinamoda buhar yoktur: hidroelektrikte türbini akan su, dinamoda tekerlek döndürür.",
    null
  ],
  aciklama: "Dinamo küçük bir jeneratördür; jeneratör, kendisine verilen dönme hareketini elektriğe çevirir.\nAdım 1: Bisiklet dinamosunun mili tekerlekle döner ve dinamo elektrik üretir.\nAdım 2: Hidroelektrik santralde akan su türbini, türbin de jeneratörü döndürür; jeneratör elektrik üretir.\nAdım 3: Ortak nokta, ikisinde de dönme hareketinin elektrik enerjisine dönüşmesidir; hareketi sağlayan etki farklıdır (tekerlek, akan su).\nSık yapılan hata: Jeneratörü elektrikten hareket elde eden motorla karıştırmak.\nCevap D."
},
{
  id: "fen-ed-347",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir evde dört cihaz bulunuyor: blender (bıçakları döndürerek meyveyi ezer), tost makinesi (ekmeği kızartır), kurutma makinesi (tamburu döndürür ve içine sıcak hava üfler) ve LED gece lambası.\n**Bu cihazlardan hangisinde elektrik enerjisi esas olarak hem hareket hem ısı enerjisine dönüşür?**",
  gorsel: null,
  secenekler: ["Blender", "Tost makinesi", "Kurutma makinesi", "LED gece lambası"],
  dogru: 2,
  hatalar: [
    "Eksik dönüşüm: blenderin motoru elektriği harekete çevirir, ancak esas olarak ısı üretmez.",
    "Eksik dönüşüm: tost makinesi elektriği ısıya çevirir, ama içinde esas olarak dönen bir parça yoktur.",
    null,
    "Eksik dönüşüm: LED gece lambası elektriği esas olarak ışığa çevirir; ne hareket ne ısı asıl amaçtır."
  ],
  aciklama: "Cihazı parça parça incelersek hangi parçanın hangi dönüşümü yaptığını görürüz.\nAdım 1: Blenderde motor yalnızca hareket üretir; tost makinesinde ısıtıcı tel yalnızca ısı üretir.\nAdım 2: Kurutma makinesinde tamburu döndüren motor elektriği harekete, sıcak hava veren ısıtıcı tel ise ısıya çevirir.\nAdım 3: LED lamba elektriği ışığa çevirir.\nSağlama: İki ayrı görev, iki ayrı parça demektir: motor ve ısıtıcı.\nCevap C."
},
{
  id: "fen-ed-348",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Küçük bir ada ülkesinde hastane ve fabrikalar için yeni bir santral kurulacaktır. Santralden iki şey beklenmektedir: mevsimden ve hava koşullarından etkilenmeden gece gündüz sürekli elektrik üretmek ve işletme sırasında karbondioksit salmamak. Adada akarsu ve yer altı sıcak su kaynağı yoktur.\n**Bu beklentilere en uygun santral aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kömürlü termik santral",
    "Nükleer santral",
    "Rüzgâr santrali",
    "Barajlı hidroelektrik santral"
  ],
  dogru: 1,
  hatalar: [
    "Kömürlü termik santral sürekli üretebilir ama yakıtı yakar ve karbondioksit salar; beklentilerden biri karşılanmaz.",
    null,
    "Rüzgâr santrali karbondioksit salmaz ama üretimi rüzgâr hızına bağlıdır; sürekli üretim beklentisi karşılanmaz.",
    "Barajlı hidroelektrik santral akarsu ve yağışa bağlıdır; adada akarsu yoktur ve sürekli üretim güvencesi yoktur."
  ],
  aciklama: "Ölçütleri tek tek sınarız: sürekli üretim ve işletmede karbondioksit salmama.\nAdım 1: Rüzgâr ve hidroelektrik santralleri doğa koşullarına bağlı olduğu için sürekli üretim ölçütüne uymaz; ayrıca adada akarsu yoktur.\nAdım 2: Kömürlü termik santral sürekli üretir ama yakıt yaktığı için karbondioksit salar.\nAdım 3: Nükleer santral hava koşullarından bağımsız sürekli üretebilir ve işletmede karbondioksit salmaz; bedeli ise radyoaktif atık ve yenilenemez yakıttır.\nSık yapılan hata: Karbondioksit salmayan her santralin sürekli üretim yaptığını sanmak.\nCevap B."
},
{
  id: "fen-ed-349",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir dağ eteğinde, yer altından çıkarılan sıcak su ve buharla elektrik üreten bir santral var. Bu santralde yakıt yakılmıyor ve uranyum kullanılmıyor.\n**Bu santralde elektrik üretilirken enerji dönüşümleri hangi sırayla gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Kimyasal → ısı → hareket → elektrik",
    "Çekirdek → ısı → hareket → elektrik",
    "Isı → hareket → elektrik",
    "Hareket → hareket → elektrik"
  ],
  dogru: 2,
  hatalar: [
    "Termik santralle karıştırma: kimyasal enerjiyle başlayan zincirde yakıt yakılır; burada yakıt yoktur.",
    "Nükleer santralle karıştırma: çekirdek enerjisi uranyumdan gelir; burada uranyum kullanılmıyor.",
    null,
    "Rüzgâr santraliyle karıştırma: hareketle başlayan zincirde türbini hava döndürür; burada türbini buhar döndürür."
  ],
  aciklama: "Yer altı sıcak su ve buharından yararlanan santral jeotermal santraldir.\nAdım 1: Zincir yer altından gelen sıcak su ve buharın ısı enerjisiyle başlar.\nAdım 2: Bu buhar türbini döndürür; ısı enerjisi hareket enerjisine dönüşür.\nAdım 3: Türbine bağlı jeneratör hareket enerjisini elektrik enerjisine çevirir.\nSağlama: Yakıt ve uranyum olmadığı için zincirde kimyasal ya da çekirdek enerji yoktur.\nCevap C."
},
{
  id: "fen-ed-350",
  kazanim: "F.8.7.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bilim fuarında Kerem, musluktan akan suyla dönen bir çarkın miline bağlı bir düzenekle pil kullanmadan bir LED lamba yakacak bir model tasarlıyor. Elindeki malzemeler: çark, kablo, dinamo, pil, ısıtıcı tel ve LED lamba.\n**Kerem'in modelde kullanması gereken malzeme grubu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Çark, dinamo, kablo, LED lamba",
    "Çark, pil, kablo, LED lamba",
    "Çark, ısıtıcı tel, kablo, LED lamba",
    "Çark, dinamo, kablo, ısıtıcı tel"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Koşulu görmeme: model pil kullanmadan çalışmalıdır; pil olursa LED'i pil yakar ve çarkın hareketi işe yaramaz.",
    "Isıtıcıyı elektrik kaynağı sanma: ısıtıcı tel elektriği ısıya çevirir, çarkın hareketini elektriğe çeviremez.",
    "Amacı karıştırma: dinamo doğru seçilmiş ama amaç ışık elde etmektir; ısıtıcı tel ışık yerine ısı verir."
  ],
  aciklama: "Model tasarlarken önce hedef dönüşümü yazarız: hareket → elektrik → ışık.\nAdım 1: Çarkın dönme hareketini elektriğe çevirmek için dinamo gerekir; pil kullanılmadığı için elektriğin tek kaynağı odur.\nAdım 2: Elektriği ışığa çevirmek için LED lamba gerekir; kablolar bunları birbirine bağlar.\nAdım 3: Pil koşula aykırıdır, ısıtıcı tel ise ısı üretir; ikisi de amaca hizmet etmez.\nSık yapılan hata: Elektrik üretmek için dinamo yerine pil ya da ısıtıcı gibi başka bir parçayı seçmek; hareketten elektrik üreten parça dinamodur.\nCevap A."
},
{
  id: "fen-ed-351",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fen öğretmeni, öğrencilerden hareket enerjisinin elektrik enerjisine dönüştüğü düzenekleri bulmalarını istiyor. Öğrenciler üç düzenek yazıyor.\n**Bu düzeneklerden hangilerinde hareket enerjisi elektrik enerjisine dönüşür?**\nI. Kimyasal enerjisini elektriğe çeviren bir kalem pil\nII. Hidroelektrik santralin türbinine bağlı jeneratör\nIII. Işıktan elektrik elde eden bir güneş pili",
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "Yalnız II"],
  dogru: 3,
  hatalar: [
    "I'i doğru sanma: kalem pil kimyasal enerjiyi elektriğe çevirir, hareket enerjisi kullanmaz.",
    "Yanlış düzenekleri seçme: kalem pilde kimyasal enerji, güneş pilinde ışık enerjisi elektriğe dönüşür; hareket yoktur.",
    "III'ü doğru sanma: güneş pili ışıktan elektrik elde eder, türbini ve jeneratörü yoktur; II ise doğrudur.",
    null
  ],
  aciklama: "Hareket enerjisini elektriğe çeviren düzenek dinamo ya da jeneratördür.\nAdım 1: Kalem pil kimyasal enerjiyi elektrik enerjisine çevirir; hareket enerjisi kullanmaz. I yanlıştır.\nAdım 2: Türbine bağlı jeneratör, türbinin dönme hareketini elektrik enerjisine çevirir. II doğrudur.\nAdım 3: Güneş pilinde ışık doğrudan elektriğe çevrilir; türbin ve jeneratör yoktur. III yanlıştır.\nSık yapılan hata: Elektrik üreten her düzeneği jeneratör sanmak.\nCevap D."
},
{
  id: "fen-ed-352",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir hidroelektrik santralde baraj kapakları kapatılıyor ve türbine su gelmesi kesiliyor. Santral mühendisi bu durumun sonuçlarını şöyle sıralıyor.\n**Mühendisin yargılarından hangileri doğrudur?**\nI. Türbine su çarpmadığı için türbin yavaşlayıp durur.\nII. Türbin durduğu hâlde jeneratör elektrik üretmeyi sürdürür.\nIII. Baraj gölündeki suyun sahip olduğu enerji yok olur.",
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "Yalnız I"],
  dogru: 3,
  hatalar: [
    "II'yi doğru sanma: jeneratör hareket enerjisi alamazsa elektrik üretemez.",
    "III'ü doğru sanma: göldeki su yerinde durur ve enerjisini korur; yalnızca türbine ulaşmaz.",
    "Hem II hem III yanlıştır: jeneratör dönmeden elektrik üretmez, su enerjisini kaybetmez; doğru olan I dışarıda bırakılmış.",
    null
  ],
  aciklama: "Hidroelektrik santralde zincir şöyledir: yüksekteki su → akan su → türbin → jeneratör → elektrik.\nAdım 1: Türbini akan su döndürür. Su gelmezse türbin yavaşlayıp durur; I doğrudur.\nAdım 2: Jeneratör, türbinin dönme hareketini elektriğe çevirir. Hareket kesilince elektrik üretimi durur; II yanlıştır.\nAdım 3: Baraj gölündeki su enerjisini korur, yalnızca türbine akmaz; III yanlıştır.\nSık yapılan hata: Jeneratörün hareket olmadan da elektrik üretebileceğini sanmak.\nCevap D."
},
{
  id: "fen-ed-353",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir tabloda dört santralin yakıt yakıp yakmadığı ve kullandığı kaynağın yenilenebilir olup olmadığı verilmiştir.\n**Yalnızca tablodaki verilere göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Santral</th><th>Yakıt yakar mı?</th><th>Kaynak yenilenebilir mi?</th></tr><tr><td>P</td><td>Hayır</td><td>Evet</td></tr><tr><td>R</td><td>Hayır</td><td>Hayır</td></tr><tr><td>S</td><td>Evet</td><td>Hayır</td></tr><tr><td>T</td><td>Hayır</td><td>Evet</td></tr></table>`,
  secenekler: [
    "Yakıt yakmayan her santral yenilenebilir kaynak kullanır",
    "Yakıt yakan hiçbir santral yenilenebilir kaynak kullanmaz",
    "Yenilenemeyen kaynak kullanan her santral yakıt yakar",
    "Kaynağı yenilenebilir olan her santral yakıt yakar"
  ],
  dogru: 1,
  hatalar: [
    "Karşıt örneği görmeme: R santrali yakıt yakmaz ama kaynağı yenilenemez (nükleer santral gibi).",
    null,
    "Karşıt örneği görmeme: R santralinin kaynağı yenilenemez ama yakıt yakmaz; bu yargı tabloyla çelişir.",
    "Karşıt örneği görmeme: P ve T santralleri yenilenebilir kaynak kullanır ama yakıt yakmaz; bu yargı tabloyla çelişir."
  ],
  aciklama: "\"Kesinlikle doğru\" denen yargı, tablodaki bütün satırlarla çelişmeyen yargıdır; tek bir karşıt örnek yargıyı çürütür.\nAdım 1: R santrali yakıt yakmıyor ama yenilenemez kaynak kullanıyor; birinci ve üçüncü yargılar bu satırla çelişir.\nAdım 2: P ve T santralleri yenilenebilir kaynak kullanıyor ama yakıt yakmıyor; dördüncü yargı bu satırlarla çelişir.\nAdım 3: Yakıt yakan tek santral S'dir ve kaynağı yenilenebilir değildir; ikinci yargı tablodaki bütün satırlarla uyumludur.\nSık yapılan hata: Tanıdık kalıpları (\"yakıt yakmayan her santral yenilenebilirdir\") tabloya bakmadan doğru saymak.\nCevap B."
},
{
  id: "fen-ed-354",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ilçede kaçak elektrik kullanımı yaygınlaşıyor; sayaçtan geçmeden kullanılan elektrik miktarı artıyor.\n**Bu durumda şebekeye verilen elektrik ile faturalanan elektrik arasındaki fark ve sonucu için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Fark azalır; kaçak kullanan aileler ülke ekonomisine katkı sağlar",
    "Fark artar; kaybın bedeli yalnızca santralleri işleten kuruma aittir",
    "Fark artar; bedeli ödenmeyen kayıp ülke ekonomisine yük olur",
    "Fark değişmez; kaçak kullanımın ülke ekonomisine etkisi olmaz"
  ],
  dogru: 2,
  hatalar: [
    "Yön hatası: kaçak arttıkça fark azalmaz, artar; kaçak kullanım ekonomiye katkı değil zarar verir.",
    "Kaybı tek tarafa yükleme: bedeli ödenmeyen elektriğin maliyeti yalnızca kuruma kalmaz; ülke ekonomisine ve düzenli ödeme yapan kullanıcılara da yansır.",
    null,
    "Etkiyi yok sayma: kaçak elektrik de üretilip taşındığı için fark artar ve bedeli ödenmediği hâlde elektrik üretildiğinden ekonomiye zarar verir."
  ],
  aciklama: "Kaçak elektrik, santralde üretilmiş ve taşınmış ama bedeli ödenmemiş elektriktir.\nAdım 1: Sayaçtan geçmeyen elektrik faturalanmaz; şebekeye verilen ile faturalanan arasındaki fark artar.\nAdım 2: Üretim ve taşıma maliyeti ortadan kalkmaz; bedeli ödenmeyen bu kayıp ülke ekonomisine yük olur.\nAdım 3: Maliyet düzenli ödeme yapan kullanıcılara da yansıyabilir.\nSık yapılan hata: Kaçak kullanımı yalnızca kaçak kullanan kişiyi ilgilendiren bir sorun sanmak.\nCevap C."
},
{
  id: "fen-ed-355",
  kazanim: "F.8.7.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ailenin aylık elektrik tüketimi, aldığı tasarruf önlemlerinden sonra 150 kWh'tan 110 kWh'a düşmüştür. 1 kWh elektriğin bedeli 3 TL'dir (kurgusal değer).\n**Ailenin aylık elektrik faturası kaç TL azalmıştır?**",
  gorsel: null,
  secenekler: ["120 TL", "330 TL", "450 TL", "780 TL"],
  dogru: 0,
  hatalar: [
    null,
    "Sonraki faturayı bulma: 110 × 3 = 330 TL, önlemlerden sonraki faturadır; azalma değildir.",
    "Önceki faturayı bulma: 150 × 3 = 450 TL, önlemlerden önceki faturadır; azalma değildir.",
    "İki ayın tüketimini toplama: (150 + 110) × 3 = 780 TL; azalma için iki tüketimin farkı alınır."
  ],
  aciklama: "Fatura azalması, tüketim azalmasının birim bedelle çarpımıdır.\nAdım 1: Tüketim azalması 150 − 110 = 40 kWh'tır.\nAdım 2: Birim bedel 3 TL olduğundan azalan fatura 40 × 3 = 120 TL'dir.\nSağlama: Önceki fatura 450 TL, sonraki fatura 330 TL; fark 120 TL'dir.\nSık yapılan hata: Farkı almak yerine toplamı ya da yalnız bir ayın faturasını bulmak.\nCevap A."
},
{
  id: "fen-ed-356",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir atölyede iki ayrı hat vardır ve her hat kendi sigortasına bağlıdır. 1. hatta su ısıtıcısı ile tost makinesi, 2. hatta ise matkap ile LED lamba çalışıyor. 1. hat aşırı yüklenince yalnızca bu hattın sigortası atıyor.\n**Bu durumda atölyedeki enerji dönüşümleri için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Isı, hareket ve ışık dönüşümlerinin hepsi durur",
    "Yalnızca ısı dönüşümleri durur; hareket ve ışık dönüşümleri sürer",
    "Yalnızca hareket ve ışık dönüşümleri durur; ısı dönüşümleri sürer",
    "Yalnızca matkaptaki hareket dönüşümü durur; diğerleri sürer"
  ],
  dogru: 1,
  hatalar: [
    "Sigortanın kapsamını bilmeme: sigorta yalnızca bağlı olduğu hattın devresini keser; 2. hat çalışmaya devam eder.",
    null,
    "Hatları karıştırma: ısıtıcı ve tost makinesi 1. hattadır, sigortası atan hat budur; ısı dönüşümleri durur.",
    "Hatları karıştırma: matkap 2. hattadır ve sigortası atmamıştır; durması gereken 1. hattaki cihazlardır."
  ],
  aciklama: "Sigorta, aşırı akım geçen devreyi keser; kesilen devredeki cihazlar elektrik alamaz.\nAdım 1: Sigortası atan 1. hatta su ısıtıcısı ve tost makinesi vardır; ikisi elektrik enerjisini ısıya çevirir. Bu hatta elektrik kesilince ısı dönüşümleri durur.\nAdım 2: 2. hatta matkap (hareket) ve LED lamba (ışık) vardır; bu hattın sigortası atmadığı için elektrik gelmeye devam eder.\nAdım 3: Böylece yalnızca ısı dönüşümleri durur, hareket ve ışık dönüşümleri sürer.\nSık yapılan hata: Bir sigortanın atmasıyla evdeki bütün devrelerin kesildiğini sanmak.\nCevap B."
},
{
  id: "fen-ed-357",
  kazanim: "F.8.7.3.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ada okulunda fen kulübü, pil kullanmadan esen rüzgârla bir LED lambayı yakacak bir model yapıyor. Adada akarsu yoktur. Öğrenciler dört farklı düzenek tasarlamış; düzeneklerdeki parçaların sırası tabloda verilmiştir.\n**Amaca ulaşan düzenek hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Parça sırası</th></tr><tr><td>K</td><td>Su çarkı → dinamo → LED lamba</td></tr><tr><td>L</td><td>Pervane → ısıtıcı tel → LED lamba</td></tr><tr><td>M</td><td>Pil → elektrik motoru → pervane</td></tr><tr><td>N</td><td>Pervane → dinamo → LED lamba</td></tr></table>`,
  secenekler: [
    "K",
    "L",
    "M",
    "N"
  ],
  dogru: 3,
  hatalar: [
    "Koşulu görmeme: su çarkı akan su ister, adada akarsu yoktur; ayrıca düzeneğin rüzgârla çalışması gerekir.",
    "Isıtıcıyı elektrik kaynağı sanma: ısıtıcı tel elektriği ısıya çevirir, pervanenin hareketinden elektrik üretmez; LED yanmaz.",
    "Yön karıştırma: bu düzenek pilden elektrik alıp pervaneyi döndürür; rüzgârla LED yakmaz.",
    null
  ],
  aciklama: "Amaç ve koşulları birlikte sınarız: pilsiz, rüzgârla çalışan, ışık veren model; adada akarsu yok.\nAdım 1: K'de su çarkı akan su ister; akarsu olmadığı için elenir. M'de pil kullanılıyor ve pervane dönüyor ama LED yoktur; elenir.\nAdım 2: L'de pervanenin hareketini elektriğe çevirmesi gereken parça ısıtıcı tel olarak seçilmiş; ısıtıcı tel elektrik üretmez, elektriği ısıya çevirir. L elenir.\nAdım 3: N'de rüzgâr pervaneyi, pervane dinamoyu döndürür; dinamo hareketi elektriğe çevirir ve LED ışık verir.\nSık yapılan hata: Pervaneye bağlanan her parçanın elektrik üretebileceğini sanmak; hareketten elektrik üreten parça dinamodur.\nCevap D."
},
{
  id: "fen-ed-358",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Üç santralde elektrik üretilirken enerjinin izlediği yol tabloda verilmiştir. Santraller X, Y ve Z harfleriyle gösterilmiştir.\n**Tabloya göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Santral</th><th>1. basamak</th><th>2. basamak</th><th>3. basamak</th><th>4. basamak</th></tr><tr><td>X</td><td>Kimyasal enerji</td><td>Isı</td><td>Hareket</td><td>Elektrik</td></tr><tr><td>Y</td><td>Çekirdek enerjisi</td><td>Isı</td><td>Hareket</td><td>Elektrik</td></tr><tr><td>Z</td><td>Hareket</td><td>Elektrik</td><td>–</td><td>–</td></tr></table>`,
  secenekler: ["X ve Y'nin zincirleri aynı enerjiyle başlar","Z'nin zinciri X ve Y'nin zincirinden bir basamak daha kısadır","Üç santralde de elektrikten önceki basamak harekettir","Üç santralde de zincirin ikinci basamağı ısı enerjisidir"],
  dogru: 2,
  hatalar: ["Tabloyu yanlış okuma: X kimyasal enerjiyle, Y çekirdek enerjisiyle başlar.","Basamakları yanlış sayma: Z'nin zinciri iki, X ve Y'ninki dört basamaktır; Z, ikisinden bir değil iki basamak daha kısadır.",null,"Tabloyu yanlış okuma: ikinci basamak yalnız X ve Y'de ısıdır; Z'nin ikinci basamağı elektriktir."],
  aciklama: "Her yargıyı tablodaki satırlarla tek tek sınarız.\nAdım 1: X'in ilk basamağı kimyasal enerji, Y'nin çekirdek enerjisidir; birinci yargı yanlıştır.\nAdım 2: X ve Y dört, Z iki basamaktan oluşur; Z, ikisinden iki basamak daha kısadır, ikinci yargı yanlıştır. Z'nin ikinci basamağı elektriktir, ısı değildir; dördüncü yargı da yanlıştır.\nAdım 3: Üçünde de elektrikten hemen önceki basamak hareket enerjisidir; üçüncü yargı doğrudur. X ve Y'de bu hareket türbinin dönmesidir, Z'de zincir doğrudan hareketle başlar.\nSık yapılan hata: Zincirlerin başlangıcını aynı sanmak; farklı olan başlangıçtır, son iki basamak (hareket, elektrik) ortaktır.\nCevap C."
},
{
  id: "fen-ed-359",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Dağlık bir bölgedeki belediye, iki santral kurarak yıl boyunca elektrik üretimini sürdürmek istiyor; iki santralin birbirinin eksik kaldığı dönemi tamamlamasını bekliyor. Belediye işletmede yakıt yakılmasını kabul etmiyor. Bölgede yer altı sıcak su ve buhar kaynağı yoktur. Bölgedeki akarsu yaz aylarında kar erimesiyle bol su taşır, kışın ise donarak neredeyse akmaz. Rüzgâr kışın güçlü eser, yazın çoğu gün zayıftır.\n**Belediyenin bu isteklerine en uygun iki santral aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Rüzgâr santrali ve termik santral",
    "Hidroelektrik santral ve rüzgâr santrali",
    "Hidroelektrik santral ve jeotermal santral",
    "Rüzgâr santrali ve jeotermal santral"
  ],
  dogru: 1,
  hatalar: [
    "Yakıt koşulunu görmeme: termik santral yakıt yakar; belediye işletmede yakıt yakılmasını kabul etmiyor.",
    null,
    "Kaynak koşulunu görmeme: bölgede yer altı sıcak su ve buhar kaynağı yoktur, jeotermal santral kurulamaz.",
    "Kaynak koşulunu görmeme: jeotermal santral için yer altı sıcak su ve buhar gerekir, bölgede yoktur; rüzgâr santrali de yaz aylarında tek başına yetmez."
  ],
  aciklama: "Santral seçerken önce koşulları eleriz: yakıt yakılmayacak, kaynak bölgede bulunacak, iki santral birbirini tamamlayacak.\nAdım 1: Termik santral yakıt yaktığı için elenir. Yer altı sıcak su ve buhar kaynağı olmadığından jeotermal santral de elenir.\nAdım 2: Geriye hidroelektrik ve rüzgâr santralleri kalır; ikisi de yakıt yakmaz ve kaynakları bölgede vardır.\nAdım 3: Hidroelektrik santral yazın bol su sayesinde, rüzgâr santrali kışın güçlü rüzgâr sayesinde elektrik üretir; biri eksik kaldığında öbürü üretimi sürdürür.\nSık yapılan hata: Yakıt yakmayan her santrali her bölgeye uygun saymak; kaynağın bölgede ve zamanında bulunması gerekir.\nCevap B."
},
{
  id: "fen-ed-360",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bölgedeki dört ilçeye şebekeden verilen ve ilçelerde faturalanan elektrik enerjisi tabloda verilmiştir (milyon kWh). Aradaki fark, kayıp ve kaçak miktarını gösterir. Kayıp-kaçak oranı ise farkın şebekeden verilen enerjiye bölünmesiyle bulunur.\n**Buna göre kayıp-kaçak miktarı en fazla olan ilçe ile kayıp-kaçak oranı en yüksek olan ilçe sırasıyla hangileridir?**",
  gorsel: `<table class="tablo"><tr><th>İlçe</th><th>Şebekeden verilen (milyon kWh)</th><th>Faturalanan (milyon kWh)</th></tr><tr><td>K</td><td>200</td><td>180</td></tr><tr><td>L</td><td>100</td><td>85</td></tr><tr><td>M</td><td>50</td><td>45</td></tr><tr><td>N</td><td>400</td><td>350</td></tr></table>`,
  secenekler: ["N ve L", "L ve N", "N ve K", "L ve L"],
  dogru: 0,
  hatalar: [
    null,
    "Ölçütleri ters eşleştirme: miktarı en fazla olan ilçe N'dir (50), oranı en yüksek olan ilçe L'dir (%15); sıra tersine yazılmış.",
    "Oranı yanlış hesaplama: K'nin oranı 20/200 = %10'dur; L'nin oranı %15 ile daha yüksektir.",
    "Miktarı oranla karıştırma: L'nin kaybı 15 milyon kWh'tır, N'nin kaybı ise 50 milyon kWh'tır."
  ],
  aciklama: "Önce her ilçenin miktarını, sonra oranını buluruz.\nAdım 1: Miktarlar: K 20, L 15, M 5, N 50 milyon kWh. En fazla N'dir.\nAdım 2: Oranlar: K 20/200 = %10, L 15/100 = %15, M 5/50 = %10, N 50/400 = %12,5. En yüksek L'dir.\nAdım 3: Sıra \"miktar, oran\" biçiminde N ve L olur.\nSık yapılan hata: Miktarca en çok kayıp veren ilçenin oranca da en kötü olduğunu sanmak.\nCevap A."
},
{
  id: "fen-ed-361",
  kazanim: "F.8.7.3.6",
  kademe: 3,
  zorluk: 4,
  soru: "Harcanan elektrik enerjisi, gücün çalışma süresiyle çarpımına eşittir. Bir evdeki dört cihazın gücü ve günlük kullanım süreleri tabloda verilmiştir. Aile aşağıdaki davranışlardan yalnızca birini uygulayabilecektir.\n**Buna göre hangi davranış günlük en çok elektrik enerjisi tasarrufu sağlar?**",
  gorsel: `<table class="tablo"><tr><th>Cihaz</th><th>Güç (W)</th><th>Günlük süre (saat)</th></tr><tr><td>Elektrikli ısıtıcı</td><td>1500</td><td>4</td></tr><tr><td>Bilgisayar</td><td>200</td><td>6</td></tr><tr><td>Saç kurutma makinesi</td><td>1000</td><td>0,5</td></tr><tr><td>LED aydınlatma</td><td>20</td><td>8</td></tr></table>`,
  secenekler: [
    "Isıtıcıyı yalnızca 1 saat daha az çalıştırmak",
    "Bilgisayarı günlük süresinin yarısı kadar kullanmak",
    "Saç kurutma makinesini hiç kullanmamak",
    "Aydınlatmayı tamamen kapatmak"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Hesabı eksik yapma: bilgisayarın süresini yarıya indirmek 200 W × 3 saat = 600 Wh kazandırır; ısıtıcıdaki 1500 Wh'tan azdır.",
    "\"Hiç kullanmamak\" çekiciliği: saç kurutma 1000 W × 0,5 saat = 500 Wh harcar; bu tasarruf 1500 Wh'tan azdır.",
    "Süreye aldanma: aydınlatmayı kapatmak 20 W × 8 saat = 160 Wh kazandırır; bu en küçük tasarruftur."
  ],
  aciklama: "Her davranışta kazanılan enerjiyi güç × kısaltılan süre ile buluruz.\nAdım 1: Isıtıcı: 1500 W × 1 saat = 1500 Wh.\nAdım 2: Bilgisayar: 200 W × 3 saat = 600 Wh. Saç kurutma: 1000 W × 0,5 saat = 500 Wh. Aydınlatma: 20 W × 8 saat = 160 Wh.\nAdım 3: En büyük kazanç 1500 Wh ile ısıtıcıdadır.\nSık yapılan hata: Bir cihazı tamamen bırakmanın en çok tasarruf sağlayacağını sanmak; önemli olan güç ve süredir.\nCevap A."
},
{
  id: "fen-ed-362",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Kablosuz bir matkabın pili, prize takılan bir şarj cihazıyla dolduruluyor. Daha sonra matkap pille çalıştırılıp bir tahta delinirken ucu dönüyor.\n**Şarj sırasında ve matkap çalışırken gerçekleşen enerji dönüşümlerinin sırası aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Elektrik → hareket → kimyasal → elektrik",
    "Kimyasal → elektrik → hareket → kimyasal",
    "Elektrik → kimyasal → hareket → elektrik",
    "Elektrik → kimyasal → elektrik → hareket"
  ],
  dogru: 3,
  hatalar: [
    "Sıra hatası: şarj sırasında elektrik hareket enerjisine değil pilde depolanan kimyasal enerjiye dönüşür.",
    "Sıra hatası: zincir prizden gelen elektrik enerjisiyle başlar ve matkabın ucunun dönmesiyle, yani hareketle biter.",
    "Son basamağı yanlış yazma: matkap çalışırken zincir hareketle biter; elektrik, motora giren ara basamaktır.",
    null
  ],
  aciklama: "Pil enerjiyi kimyasal biçimde depolar: şarjda elektrik pile kimyasal enerji olarak girer, kullanırken kimyasal enerji yeniden elektriğe dönüşür.\nAdım 1: Şarj cihazından gelen elektrik enerjisi, pilde kimyasal enerjiye dönüşür.\nAdım 2: Matkap çalışırken pilin kimyasal enerjisi elektrik enerjisine dönüşür.\nAdım 3: Motor elektrik enerjisini hareket enerjisine çevirir ve matkabın ucu döner.\nSağlama: Zincir elektrik → kimyasal → elektrik → hareket biçiminde olur.\nCevap D."
},
{
  id: "fen-ed-363",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Şekilde bir santralde elektrik üretilirken enerjinin izlediği yol gösterilmiştir. K kutusunda santralin ısı enerjisini elde ettiği kaynak yer almaktadır. Bir öğrenci, şekle bakarak şu yargıları yazıyor.\n**Bu yargılardan hangileri kesinlikle doğrudur?**\nI. Türbini döndüren etki su buharıdır.\nII. Santralde kömür yakılır.\nIII. Isı enerjisi, doğrudan elektrik enerjisine dönüşür.",
  gorsel: `<svg viewBox="0 0 560 90" role="img" aria-label="K kaynağı, ısı, su buharı, türbin ve jeneratör sırasıyla oklarla bağlı"><rect x="5" y="15" width="90" height="60" rx="6" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="50" y="51" text-anchor="middle" font-size="15" fill="currentColor">K</text><line x1="98" y1="45" x2="113" y2="45" stroke="currentColor" stroke-width="2.5"/><polygon points="121,45 111,39 111,51" fill="currentColor"/><rect x="121" y="15" width="90" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="166" y="51" text-anchor="middle" font-size="15" fill="currentColor">Isı</text><line x1="214" y1="45" x2="229" y2="45" stroke="currentColor" stroke-width="2.5"/><polygon points="237,45 227,39 227,51" fill="currentColor"/><rect x="237" y="15" width="90" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="282" y="51" text-anchor="middle" font-size="15" fill="currentColor">Su buharı</text><line x1="330" y1="45" x2="345" y2="45" stroke="currentColor" stroke-width="2.5"/><polygon points="353,45 343,39 343,51" fill="currentColor"/><rect x="353" y="15" width="90" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="398" y="51" text-anchor="middle" font-size="15" fill="currentColor">Türbin</text><line x1="446" y1="45" x2="461" y2="45" stroke="currentColor" stroke-width="2.5"/><polygon points="469,45 459,39 459,51" fill="currentColor"/><rect x="469" y="15" width="90" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="514" y="51" text-anchor="middle" font-size="15" fill="currentColor">Jeneratör</text></svg>`,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "Yalnız I",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "II'yi kesin sanma: ısı kaynağı kömürün yanması olabilir ama uranyumun çekirdek enerjisi de olabilir; şekil bunu belirtmez. Üstelik doğru olan I dışarıda bırakılmış.",
    "II'yi kesin sanma: ısı enerjisi kömürden gelebileceği gibi çekirdek enerjisinden de gelebilir, şekilde kömür yazmıyor.",
    null,
    "II ve III yanlıştır: kömür kesin değildir, ısı da doğrudan elektriğe dönüşmez; ısı önce buhara, buhar türbine, türbin jeneratöre bağlanır. Doğru olan I dışarıda kalmış."
  ],
  aciklama: "\"Kesinlikle doğru\" yargı, yalnız şekilden kesin olarak çıkarılabilen yargıdır.\nAdım 1: Şekilde ısıdan sonra su buharı, buhardan sonra türbin gelir; yani türbini su buharı döndürür. I kesinlikle doğrudur.\nAdım 2: Isıyı sağlayan K, yakıtın kimyasal enerjisi olabileceği gibi uranyumun çekirdek enerjisi de olabilir; kömür kesin değildir. II için \"kesinlikle\" denemez.\nAdım 3: Şekilde ısıdan elektriğe giden doğrudan bir ok yoktur; ısı önce suyu buhara çevirir, buhar türbini, türbin jeneratörü döndürür. III yanlıştır.\nSık yapılan hata: Buhar kullanan her santralde kömür yandığını sanmak.\nCevap C."
},
{
  id: "fen-ed-364",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir öğrenci, yenilenebilir kaynak kullanan santraller (hidroelektrik, rüzgâr, jeotermal) için dört yargı yazıyor.\n**Bu yargılardan hangisi kesinlikle doğrudur?**",
  gorsel: null,
  secenekler: ["Hepsinde türbini döndüren buhar, yakıt yakılarak elde edilir","Hiçbirinde yakıt yakılarak ısı elde edilmez","Yalnızca jeotermal santralde yakıt yakılarak buhar elde edilir","Rüzgâr santralinde türbin, yakılan yakıtın ısısıyla döner"],
  dogru: 1,
  hatalar: ["Yakıt yakmayı genelleme: hidroelektrikte akan su, rüzgârda hava, jeotermalde yer altındaki sıcak su ve buhar türbini döndürür; hiçbirinde yakıt yakılmaz.",null,"Jeotermali termikle karıştırma: jeotermal santral buharı yer altındaki sıcak sudan alır, yakıt yakmaz.","Rüzgâr santralinde türbini doğrudan rüzgâr döndürür; ısı ya da yakıt kullanılmaz."],
  aciklama: "Yenilenebilir kaynak, doğada kısa sürede yeniden oluşan ve kullanmakla tükenmeyen kaynaktır; bu, santralin her koşulda aynı üretimi yaptığı anlamına gelmez.\nAdım 1: Hidroelektrikte akan su, rüzgâr santralinde rüzgâr, jeotermalde yer altından gelen buhar türbini döndürür; üçünde de yakıt yakılmaz. Bu yargı kesinlikle doğrudur.\nAdım 2: Birinci yargı buharı her santrale genelliyor; oysa hidroelektrik ve rüzgâr santralinde buhar yoktur, jeotermalde de buhar yakıtla değil yer altı ısısıyla elde edilir.\nAdım 3: Üçüncü yargı jeotermali termik santralle karıştırıyor; dördüncü yargı rüzgâr santraline yakıt yüklüyor. İkisi de yanlıştır.\nSık yapılan hata: Buhar gören her santralde yakıt yakıldığını sanmak. Jeotermal santralde buharı yerin kendi ısısı sağlar.\nCevap B."
},
{
  id: "fen-ed-365",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir robotik kulübünün robot kolu, kaldırabileceğinden çok ağır bir cismi kaldırmaya çalışınca motorlardan geçen akım güvenli sınırı aşıyor ve devredeki sigorta atıyor. Bundan sonra robot kolu hareket etmiyor.\n**Bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Sigorta, motorlara daha çok elektrik vererek yükü kaldırmaya çalışmıştır",
    "Motorlar bozulduğu için sigorta atmıştır",
    "Sigorta atınca motorlar jeneratör gibi çalışıp elektrik üretmeye başlar",
    "Devre kesilince motora elektrik gitmez, elektrik → hareket dönüşümü durur"
  ],
  dogru: 3,
  hatalar: [
    "Sigortayı enerji kaynağı sanma: sigorta enerji vermez, devreyi keserek korur.",
    "Neden-sonuç ters: sigorta, aşırı yük yüzünden akım arttığı için atmıştır; motorun bozulması şart değildir.",
    "Motor-jeneratör karışıklığı: elektrik kesilince motor dönme hareketi üretmez; kendiliğinden elektrik üretmez.",
    null
  ],
  aciklama: "Sigorta, akım güvenli sınırı aşınca devreyi keser; motor ancak elektrik alırsa çalışır.\nAdım 1: Aşırı yük, motorlardan geçen akımı güvenli sınırın üstüne çıkarmış; sigorta devreyi kesmiştir.\nAdım 2: Devre kesilince motorlara elektrik enerjisi gitmez.\nAdım 3: Motor elektrik enerjisini hareket enerjisine çevirdiği için hareket durur.\nSık yapılan hata: Sigortanın atmasını \"cihaz bozuldu\" diye yorumlamak; sigorta atmak bir korumadır.\nCevap D."
},
{
  id: "fen-ed-366",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bölgedeki bir rüzgâr santralinin ve bir jeotermal santralin dört günlük elektrik üretimi tabloda verilmiştir.\n**Tabloya göre aşağıdaki yargılardan hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Rüzgâr santrali (MWh)</th><th>Jeotermal santral (MWh)</th></tr><tr><td>1</td><td>40</td><td>30</td></tr><tr><td>2</td><td>20</td><td>30</td></tr><tr><td>3</td><td>0</td><td>30</td></tr><tr><td>4</td><td>20</td><td>30</td></tr></table>`,
  secenekler: [
    "Jeotermal santralin günlük ortalama üretimi, rüzgâr santralininkinden 10 MWh fazladır",
    "İki santralin dört günlük toplam üretimi 180 MWh'tır",
    "Rüzgâr santrali dört günde jeotermal santralden toplam 10 MWh fazla üretmiştir",
    "Rüzgâr santrali, jeotermal santralden en az iki gün daha çok üretmiştir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı yanlış hesaplama: rüzgâr 40 + 20 + 0 + 20 = 80, jeotermal 4 × 30 = 120 MWh'tır; ikisinin toplamı 200 MWh eder.",
    "Toplamları karşılaştırmama: rüzgâr santrali 80, jeotermal santral 120 MWh üretmiştir; rüzgâr santrali 40 MWh daha az üretmiştir.",
    "Tek günü genelleme: rüzgâr santrali jeotermalden yalnız 1. günde (40 > 30) daha çok üretmiştir."
  ],
  aciklama: "Tablodaki verileri yargılarla tek tek karşılaştırırız.\nAdım 1: Rüzgâr santralinin toplamı 40 + 20 + 0 + 20 = 80 MWh, günlük ortalaması 80 : 4 = 20 MWh'tır. Jeotermal santralin toplamı 4 × 30 = 120 MWh, günlük ortalaması 30 MWh'tır. Ortalamalar arasındaki fark 10 MWh'tır; ilk yargı doğrudur.\nAdım 2: İki santralin toplamı 80 + 120 = 200 MWh'tır; ikinci yargı yanlıştır. Rüzgâr santrali jeotermalden 40 MWh az üretmiştir; üçüncü yargı yanlıştır.\nAdım 3: Rüzgâr santrali jeotermalden yalnız 1. günde fazla üretmiştir; dördüncü yargı yanlıştır. Jeotermal santralin her gün 30 MWh üretmesi, hava koşullarından etkilenmeden sürekli üretebildiğini gösterir.\nSık yapılan hata: Tablodaki tek bir değere bakıp bütün günler için sonuç çıkarmak.\nCevap A."
},
{
  id: "fen-ed-367",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir aile, aynı iç hacimli iki buzdolabından birini alacaktır. Aile, buzdolabını 8 yıl kullanacak ve 8 yıllık toplam gideri (satın alma bedeli + elektrik gideri) en aza indirmek istiyor. 1 kWh elektriğin bedeli 5 TL'dir (kurgusal değer).\n**Buna göre aile hangi modeli seçmelidir ve 8 yılda diğerine göre ne kadar daha az harcar?**",
  gorsel: `<table class="tablo"><tr><th>Model</th><th>Fiyat (TL)</th><th>Yıllık tüketim (kWh)</th></tr><tr><td>X</td><td>10 000</td><td>200</td></tr><tr><td>Y</td><td>12 000</td><td>120</td></tr></table>`,
  secenekler: ["X; 1 200 TL", "X; 2 000 TL", "Y; 1 200 TL", "Y; 3 200 TL"],
  dogru: 2,
  hatalar: [
    "Modeli ters seçme: X'in 8 yıllık toplamı 10 000 + 8 000 = 18 000 TL, Y'ninki 16 800 TL'dir; Y daha ucuzdur.",
    "Yalnız fiyata bakma: 2 000 TL fiyat farkıdır; elektrik giderindeki fark da hesaba katılmalıdır.",
    null,
    "Fiyat farkını unutma: 3 200 TL yalnızca elektrik giderindeki farktır; Y'nin 2 000 TL daha pahalı satın alındığı da hesaba katılmalıdır."
  ],
  aciklama: "Toplam gider = satın alma bedeli + 8 yıllık elektrik gideri.\nAdım 1: X'in yıllık elektrik gideri 200 × 5 = 1000 TL; 8 yılda 8000 TL. Toplam 10 000 + 8 000 = 18 000 TL.\nAdım 2: Y'nin yıllık elektrik gideri 120 × 5 = 600 TL; 8 yılda 4800 TL. Toplam 12 000 + 4 800 = 16 800 TL.\nAdım 3: Y daha ucuzdur; fark 18 000 − 16 800 = 1 200 TL'dir.\nSık yapılan hata: Yalnızca etiket fiyatına bakıp enerji verimli cihazın işletme giderini yok saymak.\nCevap C."
},
{
  id: "fen-ed-368",
  kazanim: "F.8.7.3.2",
  kademe: 3,
  zorluk: 4,
  soru: "Şekilde bir öğrencinin tasarım çizimi verilmiştir: esen rüzgâr pervaneyi döndürüyor, pervane dinamoyu döndürüyor ve dinamo bir ısıtıcı teli çalıştırıyor. Öğrenci, modelin son parçasını ısıtıcı tel yerine bir LED lamba ile değiştiriyor.\n**Bu değişiklikle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 560 100" role="img" aria-label="Rüzgâr, pervane, dinamo ve ısıtıcı tel sırasıyla oklarla bağlı"><rect x="5" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="61" y="55" text-anchor="middle" font-size="15" fill="currentColor">Rüzgâr</text><line x1="121" y1="50" x2="141" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="147,50 137,44 137,56" fill="currentColor"/><rect x="151" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="207" y="55" text-anchor="middle" font-size="15" fill="currentColor">Pervane</text><line x1="267" y1="50" x2="287" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="293,50 283,44 283,56" fill="currentColor"/><rect x="297" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="353" y="55" text-anchor="middle" font-size="15" fill="currentColor">Dinamo</text><line x1="413" y1="50" x2="433" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="439,50 429,44 429,56" fill="currentColor"/><rect x="443" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="499" y="55" text-anchor="middle" font-size="15" fill="currentColor">Isıtıcı tel</text></svg>`,
  secenekler: [
    "Modelde artık hareket enerjisi elektrik enerjisine dönüşmez",
    "Yalnızca son basamak değişir: ısı yerine ışık elde edilir",
    "Dinamo yerine elektrik motoru kullanmak gerekir",
    "Pervane gereksiz olur, çünkü LED hareketle yanar"
  ],
  dogru: 1,
  hatalar: [
    "Dinamonun görevini yok sayma: LED'i yakacak elektriği yine dinamo üretir; hareket enerjisi elektriğe dönüşmeye devam eder.",
    null,
    "Motor-dinamo karışıklığı: elektriği üreten parça dinamodur; motor elektrik harcar, üretmez.",
    "Dönüşümü yanlış kurma: LED hareketle değil elektrikle yanar; elektriği ise pervanenin döndürdüğü dinamo üretir."
  ],
  aciklama: "Zincirde değişen yalnızca son parçadır: ısıtıcı tel elektriği ısıya, LED lamba ışığa çevirir.\nAdım 1: İlk tasarımda zincir: rüzgârın hareketi → pervane → dinamo (elektrik) → ısıtıcı tel (ısı).\nAdım 2: Pervane ve dinamo aynı kalır; rüzgârın hareket enerjisi yine elektrik enerjisine dönüşür.\nAdım 3: Son basamakta LED lamba elektrik enerjisini ışık enerjisine çevirir; ısı yerine ışık elde edilir.\nSık yapılan hata: Bir parçayı değiştirince bütün zincirin değiştiğini sanmak.\nCevap B."
},
{
  id: "fen-ed-369",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Hidroelektrik ve jeotermal santraller için bir öğrenci şu yargıları yazıyor.\n**Bu yargılardan hangileri her iki santral için de doğrudur?**\nI. İşletme sırasında yakıt yakılmaz.\nII. Kurulabilecekleri yerler, kaynağın bulunduğu bölgeyle sınırlıdır.\nIII. Kuruluşları sırasında baraj gölü oluşur.",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I ve II"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: hidroelektrik akarsu, jeotermal yer altı sıcak su ister; II de her ikisi için doğrudur.",
    "III'ü doğru sanma: baraj gölü yalnız hidroelektrik santralde oluşur; jeotermal santralde baraj yoktur.",
    "III'ü doğru sanma ve I'i atlama: baraj gölü yalnız hidroelektriktedir; ikisinde de yakıt yakılmaz.",
    null
  ],
  aciklama: "Her yargıyı iki santral için ayrı ayrı sınarız.\nAdım 1: Hidroelektrikte türbini akan su, jeotermalde yer altından gelen buhar döndürür; ikisinde de yakıt yakılmaz. I doğrudur.\nAdım 2: Hidroelektrik santral akarsu olan, jeotermal santral yer altı sıcak su ve buharı bulunan bölgelerde kurulabilir; II doğrudur.\nAdım 3: Baraj gölü yalnız hidroelektrik santrale özgüdür; III yalnız bir santral için doğrudur.\nSık yapılan hata: Bir santralin sorununu diğerine yüklemek.\nCevap D."
},
{
  id: "fen-ed-370",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Şekilde kömürlü bir termik santralde elektrik üretiminin aşamaları gösterilmiştir. K, kömürün yakıldığı kazanı; L, türbini; M ise jeneratörü göstermektedir. Bir öğrenci aşamalar için şu yargıları yazıyor.\n**Bu yargılardan hangileri doğrudur?**\nI. K'de kömürün kimyasal enerjisi ısı enerjisine dönüşür.\nII. L'de elektrik enerjisi hareket enerjisine dönüşür.\nIII. M'de hareket enerjisi elektrik enerjisine dönüşür.",
  gorsel: `<svg viewBox="0 0 560 100" role="img" aria-label="Kömür, K kazanı, L türbini ve M jeneratörü sırasıyla oklarla bağlı"><rect x="5" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="61" y="55" text-anchor="middle" font-size="15" fill="currentColor">Kömür</text><line x1="121" y1="50" x2="141" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="147,50 137,44 137,56" fill="currentColor"/><rect x="151" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="207" y="55" text-anchor="middle" font-size="15" fill="currentColor">K</text><line x1="267" y1="50" x2="287" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="293,50 283,44 283,56" fill="currentColor"/><rect x="297" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="353" y="55" text-anchor="middle" font-size="15" fill="currentColor">L</text><line x1="413" y1="50" x2="433" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="439,50 429,44 429,56" fill="currentColor"/><rect x="443" y="20" width="112" height="60" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="499" y="55" text-anchor="middle" font-size="15" fill="currentColor">M</text></svg>`,
  secenekler: [
    "I ve III",
    "Yalnız I",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eksik değerlendirme: jeneratör türbinin hareket enerjisini elektrik enerjisine çevirir; III de doğrudur.",
    "I'i dışarıda bırakma ve II'yi doğru sayma: türbin elektrik harcamaz, buharın hareketiyle döner; kazanda ise kömürün kimyasal enerjisi ısıya dönüşür.",
    "II'yi doğru sanma: türbinde elektrik enerjisi hareket enerjisine dönüşmez; türbini buharın hareket enerjisi döndürür."
  ],
  aciklama: "Termik santralde zincir: kimyasal enerji → ısı → hareket → elektrik.\nAdım 1: K kazanında kömür yanar; kömürün kimyasal enerjisi ısıya dönüşür. I doğrudur.\nAdım 2: L türbinini yüksek basınçlı buharın hareket enerjisi döndürür; türbinde elektrik harcanmaz. II yanlıştır.\nAdım 3: M jeneratörü türbinin hareket enerjisini elektrik enerjisine çevirir. III doğrudur.\nSık yapılan hata: Türbini elektrikle çalışan bir motor sanmak; türbin elektrik üretmez, jeneratörü döndürür.\nCevap A."
},
{
  id: "fen-ed-371",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir fabrikada pille çalışan bir taşıyıcı robot, tekerleklerini döndüren motorla yükü bir yerden başka yere götürüyor. Robotun üstündeki LED uyarı lambası çalışırken yanıp sönüyor. Yük ağırlaştıkça robotun motorunun gövdesi hafifçe ısınıyor. Pil bittiğinde robot duruyor ve lamba sönüyor.\n**Bu robotun çalışmasıyla ilgili aşağıdaki yargılardan hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "Pil, kimyasal enerjisini elektrik enerjisine çevirerek devreye verir",
    "LED lambada elektrik enerjisi esas olarak ışık enerjisine dönüşür",
    "Motorda elektrik enerjisi esas olarak ısıya dönüşür, hareket yan üründür",
    "Motorun ısınması, elektriğin bir kısmının ısıya dönüştüğünü gösterir"
  ],
  dogru: 2,
  hatalar: [
    "Doğru yargıyı yanlış sanma: pil, depoladığı kimyasal enerjiyi elektrik enerjisine çevirerek devreye verir.",
    "Doğru yargıyı yanlış sanma: LED lamba elektrik enerjisini esas olarak ışığa çevirir.",
    null,
    "Doğru yargıyı yanlış sanma: motorun ısınması, elektriğin bir kısmının ısıya gittiğini gösterir; bu yan dönüşümdür."
  ],
  aciklama: "Bir robotta her parçanın görevi farklıdır: pil elektrik sağlar, motor hareket üretir, lamba ışık verir. Soru yanlış olanı sorduğu için her yargıyı sırayla sınarız.\nAdım 1: Pil kimyasal enerjisini elektriğe çevirir; birinci yargı doğrudur.\nAdım 2: LED lamba elektriği esas olarak ışığa çevirir; ikinci yargı doğrudur.\nAdım 3: Motorun asıl görevi elektrik enerjisini hareket enerjisine çevirmektir; tekerlekler bu yüzden döner. Isınma yan üründür, asıl dönüşüm değildir. Üçüncü yargı yanlıştır. Motorun ısınması, elektriğin bir kısmının ısıya gittiğini gösterir; dördüncü yargı doğrudur.\nSık yapılan hata: Cihazın ısınmasını görüp ısıyı asıl dönüşüm saymak.\nCevap C."
},
{
  id: "fen-ed-372",
  kazanim: "F.8.7.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ildeki dört santralin enerji kaynağı tabloda verilmiştir. Her santralde elektrik, türbine bağlı jeneratörde üretilmektedir.\n**Buna göre hangi iki santralde türbini aynı etki döndürür ve bu etki hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Santral</th><th>Enerji kaynağı</th></tr><tr><td>K</td><td>Kömürün yanması</td></tr><tr><td>L</td><td>Uranyumun çekirdek enerjisi</td></tr><tr><td>M</td><td>Esen rüzgâr</td></tr><tr><td>N</td><td>Baraj gölünden akan su</td></tr></table>`,
  secenekler: [
    "K ve M; hareket hâlindeki hava",
    "L ve N; akan su",
    "K, L ve M; su buharı",
    "K ve L; su buharı"
  ],
  dogru: 3,
  hatalar: [
    "K ile M karışıklığı: kömür yanınca ısı elde edilir ve buhar türbini döndürür; hareket hâlindeki hava yalnız M'de (rüzgâr santrali) türbini döndürür.",
    "L ile N karışıklığı: L'de çekirdek enerjisinin ısıttığı su buharı türbini döndürür; akan su yalnız N'de (hidroelektrik santral) türbini döndürür.",
    "M'yi buharlı sanma: rüzgâr santralinde türbini hareket hâlindeki hava döndürür, buhar oluşmaz.",
    null
  ],
  aciklama: "Türbini döndüren etkiyi bulmak için her santralin kaynağından türbine giden yolu izleriz.\nAdım 1: K'de kömür yanar, ısı suyu buhara çevirir; buhar türbini döndürür. L'de uranyumun çekirdek enerjisinden elde edilen ısı suyu buhara çevirir; buhar türbini döndürür.\nAdım 2: M'de esen rüzgâr, doğrudan türbinin kanatlarını döndürür; buhar yoktur. N'de baraj gölünden akan su türbini döndürür.\nAdım 3: Türbini aynı etkinin döndürdüğü iki santral K ve L'dir; bu etki su buharıdır.\nSık yapılan hata: Yakıt yanmayan santralde de türbini döndüren etkinin farklı olduğunu sanmak; K ve L'nin ısı kaynakları farklıdır ama türbini ikisinde de buhar döndürür.\nCevap D."
},
{
  id: "fen-ed-373",
  kazanim: "F.8.7.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Fen kulübü öğrencileri, santral türlerini karşılaştıran bir pano hazırlıyor ve panoya dört karşılaştırma yazıyorlar.\n**Bu karşılaştırmalardan hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Nükleer santralde de termik santralde de yakıt yanarak ısı elde edilir",
    "Nükleer santralin yakıtı yenilenemez, işletmede karbondioksit salmaz",
    "Jeotermal santralin kaynağı yenilenemez ama işletmede karbondioksit salmaz",
    "Termik santral işletmede karbondioksit salar ama yakıtı yenilenebilirdir"
  ],
  dogru: 1,
  hatalar: [
    "Yakıt gerekir ile yakıt yanar karışıklığı: nükleer santralde uranyum yanmaz, ısı çekirdek enerjisinden gelir.",
    null,
    "Kaynağı karıştırma: jeotermal kaynak yenilenebilir sayılır; yer altı sıcaklığı kullanmakla tükenmez.",
    "Yakıtı karıştırma: termik santralin yakıtı olan kömür, doğalgaz gibi maddeler yenilenemez; yanlış olan \"yenilenebilirdir\" kısmıdır."
  ],
  aciklama: "Karşılaştırmada her santralin ölçütlerini ayrı ayrı bilmek gerekir: yakıt yanıyor mu, karbondioksit salınıyor mu, kaynak yenilenebilir mi?\nAdım 1: Termik santralde yakıt yanar; nükleerde yanmaz, ısı çekirdek enerjisinden gelir. Birinci yargı yanlıştır.\nAdım 2: Nükleer santral işletmede karbondioksit salmaz, ancak uranyum yenilenemez ve atığı radyoaktiftir. İkinci yargı doğrudur.\nAdım 3: Jeotermal kaynak yenilenebilirdir, üçüncü yargı yanlıştır; termik santralin yakıtı olan kömür ve doğalgaz yenilenemez, dördüncü yargı yanlıştır.\nSık yapılan hata: Karbondioksit salmayan her santralin kaynağını yenilenebilir saymak.\nCevap B."
},
{
  id: "fen-ed-374",
  kazanim: "F.8.7.3.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir dağıtım şirketi, bir mahallede kaçak kullanımı azaltmak için denetim başlatıyor. Denetimden önceki ve sonraki ayda mahalleye verilen ve mahallede faturalanan elektrik enerjisi tabloda verilmiştir. Verilen enerji iki ayda da aynıdır.\n**Buna göre aşağıdaki yargılardan hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Verilen (kWh)</th><th>Faturalanan (kWh)</th></tr><tr><td>Denetimden önce</td><td>800</td><td>640</td></tr><tr><td>Denetimden sonra</td><td>800</td><td>720</td></tr></table>`,
  secenekler: [
    "Kayıp-kaçak miktarı 80 kWh artmıştır",
    "Kayıp-kaçak oranı %20'den %15'e düşmüştür",
    "Kayıp-kaçak miktarı yarıya inmiştir",
    "Faturalanan enerji 160 kWh artmıştır"
  ],
  dogru: 2,
  hatalar: [
    "Yön hatası: kayıp-kaçak 160 kWh'tan 80 kWh'a inmiştir, 80 kWh azalmıştır.",
    "Oranı yanlış hesaplama: sonraki oran 80/800 = %10'dur, %15 değildir.",
    null,
    "Farkı yanlış alma: faturalanan enerji 640'tan 720'ye, yani 80 kWh artmıştır; 160 kWh önceki kayıp-kaçaktır."
  ],
  aciklama: "Kayıp-kaçak = verilen enerji − faturalanan enerji.\nAdım 1: Denetimden önce 800 − 640 = 160 kWh; sonra 800 − 720 = 80 kWh. Miktar yarıya inmiştir.\nAdım 2: Oranlar: önce 160/800 = %20, sonra 80/800 = %10. İkinci yargıdaki %15 yanlıştır.\nAdım 3: Faturalanan enerji 80 kWh artmıştır. Bu, kaçak kullanılan elektriğin bir bölümünün faturalandırıldığını gösterir.\nSık yapılan hata: Farkın azalmasını \"kayıp artıyor\" diye okumak.\nCevap C."
},
{
  id: "fen-ed-375",
  kazanim: "F.8.7.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir öğrenci, pille çalışan bir elektrik motorunun milini bir dinamoya bağlıyor ve dinamonun uçlarına bir LED lamba takıyor. Pil bağlanınca motor dönüyor, motorun döndürdüğü dinamo da LED lambayı yakıyor.\n**Bu düzenekte enerji dönüşümlerinin sırası aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kimyasal → elektrik → hareket → elektrik → ışık",
    "Kimyasal → hareket → elektrik → hareket → ışık",
    "Elektrik → kimyasal → hareket → ışık → elektrik",
    "Kimyasal → elektrik → ısı → hareket → ışık"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Motor ile dinamoyu karıştırma: pil bağlıyken motor elektrik harcayıp hareket üretir, dinamo ise hareketi elektriğe çevirir; bu dizi tersine yazılmış.",
    "Pilin yönünü yanlış yazma: pil elektrik harcamaz, kimyasal enerjisini elektriğe çevirir; ışık da zincirin sonunda yer alır.",
    "Yan ürünü basamak sanma: ısı bu düzenekte asıl basamak değildir; motor ve dinamo hareket ile elektrik arasında dönüşüm yapar."
  ],
  aciklama: "Zinciri parça parça kurarız: pil → motor → dinamo → LED.\nAdım 1: Pilin kimyasal enerjisi elektrik enerjisine dönüşür.\nAdım 2: Motor elektrik enerjisini hareket enerjisine çevirir ve mil döner.\nAdım 3: Mile bağlı dinamo hareketi yeniden elektrik enerjisine çevirir; LED lamba da bu elektriği ışığa dönüştürür.\nSağlama: Motor elektrikten harekete, dinamo hareketten elektriğe çevirir; ikisi birbirinin tersidir.\nCevap A."
}
);
