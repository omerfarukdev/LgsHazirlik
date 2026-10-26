// Fen Bilimleri — Elektrik Enerjisinin Dönüşümü: Kademe 2 (Pekiştirme) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-enerjisi-donusumu"] = window.LGS_BANK["elektrik-enerjisi-donusumu"] || []).push(
{
  id: "fen-ed-226",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir evde dört cihaz çalışıyor: ütü, blender, abajur ve vantilatör. Cihazların hepsi çalışırken bir miktar ısınıyor. Öğretmen, her cihazın elektrik enerjisini esas olarak hangi enerjiye çevirdiğini soruyor.\n**Bu cihazlardan hangisinde elektrik enerjisi esas olarak ısı enerjisine dönüşür?**",
  gorsel: null,
  secenekler: ["Blender", "Vantilatör", "Ütü", "Abajur"],
  dogru: 2,
  hatalar: [
    "Hareket enerjisiyle karıştırma: blender motoru bıçağı döndürür, ısınması yalnızca bir yan etkidir.",
    "Hareket enerjisiyle karıştırma: vantilatör motoru pervaneyi döndürür, ısınması yalnızca bir yan etkidir.",
    null,
    "Yan etkiyi asıl amaç sanma: abajur biraz ısınır ama asıl amacı ışık vermektir."
  ],
  aciklama: "Asıl amacı ısıtmak olan cihazlarda elektrik enerjisi ısı enerjisine dönüşür.\nAdım 1: Her cihazın görevine bak: blender ve vantilatör bir parçayı döndürür, abajur aydınlatır, ütü ise kumaşı düzeltecek kadar ısınır.\nAdım 2: Ütünün tabanındaki ısıtıcı telden akım geçince tel ısınır; elektrik enerjisi ısı enerjisine dönüşür.\nAdım 3: Abajur, blender ve vantilatör de biraz ısınır ama bu bir yan etkidir; soru 'esas olarak' dediğinde cihazın görevine bakılır.\nSık yapılan hata: Isınan her cihazın asıl amacının ısı olduğunu sanmak.\nCevap C."
},
{
  id: "fen-ed-227",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir nükleer santralde zincir şöyle işliyor: reaktörde elde edilen ısı suyu buhara çevirir, buhar türbini döndürür, türbin de jeneratörü döndürür. Bir arıza yüzünden reaktör bölümü ısı üretemez hâle geliyor.\n**Bu durumda aşağıdakilerden hangisi gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Buhar oluşmaz; türbin ve jeneratör durur, elektrik üretilmez",
    "Türbin dönmeyi sürdürür; yalnız jeneratör elektrik üretemez",
    "Su buharlaşmayı sürdürür; ancak türbin hiç dönmez",
    "Jeneratör, türbin durduğu hâlde elektrik üretmeyi sürdürür"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zinciri yok sayma: türbini buhar döndürür; buhar olmayınca türbin de durur, jeneratöre kadar zincir kopar.",
    "Zinciri yarıda bırakma: ısı olmadan su buharlaşmaz; buhar yoksa türbini döndürecek bir etki de kalmaz.",
    "Jeneratörü kendi kendine çalışır sanma: jeneratör ancak dışarıdan gelen dönme hareketiyle elektrik üretir; türbin durunca o da durur."
  ],
  aciklama: "Santrallerde enerji bir zincirle taşınır; zincirin bir halkası kopunca sonrakilerin hepsi çalışmaz.\nAdım 1: Reaktör ısı üretemezse su ısınmaz, buhar oluşmaz.\nAdım 2: Buhar olmayınca türbini döndürecek bir etki kalmaz; türbin durur.\nAdım 3: Türbin durunca ona bağlı jeneratör de dönmez; jeneratör hareketi elektriğe çevirdiğinden elektrik üretilmez.\nSağlama: Zincir sırası reaktör → buhar → türbin → jeneratör → elektrik biçimindedir; ilk halka kopunca son halka da çalışmaz.\nCevap A."
},
{
  id: "fen-ed-228",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Bir aile, aydınlatma ve buzdolabı kaynaklı elektrik tüketimini azaltmak için ampulleri LED ile değiştirmiş ve eski buzdolabının yerine A sınıfı yenisini almıştır. Aylık tüketimler tabloda verilmiştir.\n**Bu değişikliklerle ailenin aylık toplam tüketimi kaç kWh azalmıştır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Cihaz grubu</th><th>Önce (kWh)</th><th>Sonra (kWh)</th></tr><tr><td>Aydınlatma</td><td>40</td><td>10</td></tr><tr><td>Buzdolabı</td><td>50</td><td>30</td></tr></table>",
  secenekler: ["20", "30", "40", "50"],
  dogru: 3,
  hatalar: [
    "Eksik toplama: yalnız buzdolabındaki azalma (50 − 30 = 20) alınmış, aydınlatma unutulmuş.",
    "Eksik toplama: yalnız aydınlatmadaki azalma (40 − 10 = 30) alınmış, buzdolabı unutulmuş.",
    "Azalma ile son tüketimi karıştırma: 40 kWh, değişiklikten sonraki toplam tüketimdir (10 + 30); azalma değildir.",
    null
  ],
  aciklama: "Azalma = önceki tüketim − sonraki tüketim; iki cihaz grubunun azalmaları toplanır.\nAdım 1: Aydınlatmada azalma 40 − 10 = 30 kWh.\nAdım 2: Buzdolabında azalma 50 − 30 = 20 kWh.\nAdım 3: Toplam azalma 30 + 20 = 50 kWh.\nSağlama: Önce toplam 40 + 50 = 90, sonra toplam 10 + 30 = 40 kWh; fark 90 − 40 = 50 kWh.\nCevap D."
},
{
  id: "fen-ed-229",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bölgede kurulacak enerji tesisleri için hidroelektrik ve rüzgâr santralleri karşılaştırılıyor.\n**Bu iki santralle ilgili aşağıdaki yargılardan hangileri doğrudur?**\nI. İkisinin de kaynağı yenilenebilirdir.\nII. İkisinde de işletme sırasında yakıt yakılarak karbondioksit açığa çıkar.\nIII. İkisinde de elektrik üretimi doğa koşullarına göre değişebilir.",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Eksik değerlendirme: yağış ve rüzgâr değiştiği için üretim de değişir; III de doğrudur.",
    null,
    "I'i dışarıda bırakma: su ve rüzgâr yenilenebilir kaynaktır, I doğrudur; II ise yanlıştır.",
    "II'yi doğru sanma: yakıt yanması termik santrale özgüdür; bu iki santralde yakıt yakılmaz."
  ],
  aciklama: "Yenilenebilir kaynak, doğada kısa sürede yeniden oluşan kaynaktır.\nAdım 1: I doğrudur; akan su ve rüzgâr yenilenebilir kaynaklardır.\nAdım 2: II yanlıştır; hidroelektrik ve rüzgâr santrallerinde yakıt yakılmaz, işletmede karbondioksit salınmaz.\nAdım 3: III doğrudur; hidroelektrikte üretim yağışa ve su miktarına, rüzgârda rüzgâr hızına bağlıdır.\nSağlama: Doğru yargılar I ve III'tür.\nCevap B."
},
{
  id: "fen-ed-230",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Dağ evinin elektrik tesisatı projelendirilirken bir mühendis, devreye mutlaka sigorta konulması gerektiğini söylüyor. Öğrencilerden biri, tesisatta sigorta bulunmasaydı ne olacağını merak ediyor.\n**Sigorta olmasaydı ve devreden güvenli sınırın çok üstünde akım geçseydi aşağıdakilerden hangisi olurdu?**",
  gorsel: null,
  secenekler: [
    "Devre kendiliğinden açılır, akım kesilir ve cihazlar korunurdu",
    "Kablolar aşırı ısınır, yangın ve cihaz hasarı riski doğardı",
    "Cihazlar normal çalışmayı sürdürür, yalnızca fatura artardı",
    "Fazla akım kablolarda kalıp cihazlara hiç ulaşmazdı"
  ],
  dogru: 1,
  hatalar: [
    "Sigortanın görevini sigortasız devreye yükleme: devreyi açıp akımı kesen parça sigortadır; o yoksa devre kendiliğinden açılmaz.",
    null,
    "Zararı yok sayma: aşırı akım yalnızca faturayı artırmaz; kabloları ısıtır, cihazları bozar, yangına yol açabilir.",
    "Akımın yolunu yanlış düşünme: aşırı akım kablolarda takılıp kalmaz; devre kapalıysa cihazlardan da kablolardan da geçer."
  ],
  aciklama: "Sigorta, akım güvenli sınırı aşınca devreyi açarak tesisatı korur.\nAdım 1: Sigorta yoksa devreyi kesecek bir koruma da yoktur; devre kendiliğinden açılmaz.\nAdım 2: Aşırı akım kabloları çok ısıtır; yangın çıkabilir ve cihazlar bozulabilir.\nAdım 3: Akım cihazlarla birlikte kablolardan da geçer; kablolarda birikip kalmaz ve sorun yalnızca fatura değildir.\nSık yapılan hata: Sigortanın görevini devrenin kendiliğinden yaptığını sanmak.\nCevap B."
},
{
  id: "fen-ed-231",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ailenin çamaşır makinesi, yarım dolu da tam dolu da çalışsa her yıkamada 2 kWh elektrik tüketiyor. Aile haftada 8 yarım dolu yıkama yapıyordu; aynı çamaşırları artık makineyi tam doldurarak haftada 4 yıkamada yıkıyor.\n**Bu değişiklikle ailenin 4 haftada elektrik tüketimi kaç kWh azalır?**",
  gorsel: null,
  secenekler: ["8", "16", "24", "32"],
  dogru: 3,
  hatalar: [
    "Süreyi unutma: 8 kWh yalnız bir haftalık azalmadır; 4 hafta için çarpılmamıştır.",
    "Birimi unutma: 16, azalan yıkama sayısı (4) ile hafta sayısının (4) çarpımıdır; yıkama başına 2 kWh ile çarpılmamıştır.",
    "Çıkarma hatası: haftalık fark 8 − 4 = 4 yıkamadır; 3 yıkama alınmamalıdır.",
    null
  ],
  aciklama: "Makineyi tam doldurmak, aynı işi daha az yıkamayla yapmayı sağlar ve elektrik tasarrufu getirir.\nAdım 1: Haftalık yıkama sayısı 8 − 4 = 4 azalır.\nAdım 2: Her yıkama 2 kWh olduğundan haftalık azalma 4 × 2 = 8 kWh'tir.\nAdım 3: 4 haftada azalma 8 × 4 = 32 kWh'tir.\nSağlama: Önce 8 × 2 × 4 = 64 kWh, sonra 4 × 2 × 4 = 32 kWh; fark 32 kWh.\nCevap D."
},
{
  id: "fen-ed-232",
  kazanim: "F.8.7.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Kübra, bilim fuarı için pille çalışan küçük bir oyuncak araba tasarlıyor. Taslağında pil, kablo ve anahtar çizmiş; arabanın tekerleklerini döndürecek parçayı henüz seçmemiştir.\n**Kübra'nın tasarıma eklemesi gereken parça aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Pilden akım alan küçük bir motor",
    "Tekerlekle dönen küçük bir dinamo",
    "Akım geçtikçe ısınan ince bir tel",
    "Yalnızca ışık veren küçük bir LED"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Motor-dinamo karıştırma: dinamo hareketi elektriğe çevirir; pilin elektriğiyle arabayı yürütmez.",
    "Isı modeliyle karıştırma: ince tel elektriği ısıya çevirir, tekerlek döndürmez.",
    "Işık modeliyle karıştırma: LED elektriği ışığa çevirir, hareket üretmez."
  ],
  aciklama: "Önce hedef dönüşümü yaz: pilin elektrik enerjisi → tekerleğin hareket enerjisi.\nAdım 1: Elektrik enerjisini hareket enerjisine çeviren parça elektrik motorudur.\nAdım 2: İnce tel ısı, LED ışık verir; ikisi de tekerleği döndürmez.\nAdım 3: Dinamo ise tersini yapar, hareketten elektrik üretir; pilli arabada gerekmez.\nSağlama: Motor pilden akım aldığı sürece tekerlekler döner.\nCevap A."
},
{
  id: "fen-ed-233",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ilçedeki rüzgâr santralinde kanatlar, kulenin içindeki jeneratöre bağlı bir milin ucundadır. Rüzgâr kanatları döndürdükçe mil de döner. Bir öğrenci, santral maketini incelerken elektriğin hangi bölümde oluştuğunu soruyor.\n**Elektrik enerjisi bu santralde nerede oluşur?**",
  gorsel: null,
  secenekler: [
    "Kanatlarda; rüzgârın kanatlara çarpmasıyla",
    "Kablolarda; jeneratörden gelen akımın taşınmasıyla",
    "Jeneratörde; mildeki dönme hareketinin çevrilmesiyle",
    "Kule gövdesinde; kanatlar döndükçe titreşmesiyle"
  ],
  dogru: 2,
  hatalar: [
    "Türbinle karıştırma: kanatlar yalnızca döner; elektrik kanatlarda oluşmaz.",
    "Taşıma-üretim karışıklığı: kablolar elektriği taşır, üretmez; elektrik jeneratörde oluşur.",
    null,
    "Yanlış neden: titreşim elektrik üretmez; elektrik, dönme hareketinin jeneratörde dönüşmesiyle oluşur."
  ],
  aciklama: "Santrallerde elektrik her zaman jeneratörde oluşur.\nAdım 1: Rüzgâr kanatları ve mili döndürür; bu bir hareket enerjisidir.\nAdım 2: Mil jeneratörü döndürür; jeneratör bu hareket enerjisini elektrik enerjisine çevirir.\nAdım 3: Kablolar elektriği taşır; kanatlar ve kule elektrik üretmez.\nSık yapılan hata: Elektriğin kanatlarda ya da türbinde oluştuğunu sanmak.\nCevap C."
},
{
  id: "fen-ed-234",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Robotik kulübünde üretilen bir robotun tekerlekleri pille çalışan motorlarla dönüyor, gözleri ise iki küçük LED'dir. Kulüp üyeleri robot için yargılar yazıyor.\n**Buna göre aşağıdaki yargılardan hangileri doğrudur?**\nI. Tekerlek motorlarında elektrik enerjisi hareket enerjisine dönüşür.\nII. Gözlerdeki LED'lerde elektrik enerjisi ışık enerjisine dönüşür.\nIII. Tekerlekler dönerken motorlar hareket enerjisini elektrik enerjisine çevirir.",
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II'yi dışarıda bırakma ve III'ü doğru sanma: LED ışık verir, II doğrudur; motor elektrik harcar, III yanlıştır.",
    "I'i dışarıda bırakma: motor elektriği harekete çevirir, I doğrudur; III ise yön hatasıdır.",
    "III'ü doğru sanma: hareketten elektrik elde etmek dinamonun işidir; tekerlek motoru elektrik harcar."
  ],
  aciklama: "Motor elektriği harekete, LED elektriği ışığa çevirir.\nAdım 1: I doğrudur; motor pilin elektriğini tekerleklerin hareketine çevirir.\nAdım 2: II doğrudur; LED elektrik enerjisini ışık enerjisine çevirir.\nAdım 3: III yanlıştır; motor elektrik harcar, elektrik üretmez.\nSağlama: Doğru yargılar I ve II'dir.\nCevap A."
},
{
  id: "fen-ed-235",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun kütüphanesinde her biri 50 W gücündeki 2 akkor ampul, aynı ışığı veren ve her biri 10 W gücündeki 2 LED ampulle değiştiriliyor. Ampuller günde 3 saat yanıyor. Bir cihazın harcadığı enerji, gücü ile çalışma süresinin çarpımına eşittir (W · saat).\n**Bu değişiklikle günlük elektrik enerjisi tüketimi kaç W · saat azalır?**",
  gorsel: null,
  secenekler: ["40", "60", "120", "240"],
  dogru: 3,
  hatalar: [
    "Süre ve ampul sayısını unutma: 40, tek ampulün güç farkıdır (50 − 10); ne 3 saatle ne 2 ampulle çarpılmıştır.",
    "Azalma yerine LED tüketimini bulma: 60, iki LED ampulün 3 saatlik tüketimidir (2 × 10 × 3).",
    "Ampul sayısını unutma: 120, tek ampul için hesaplanan azalmadır (40 × 3).",
    null
  ],
  aciklama: "Enerji verimliliği, aynı işi daha az enerjiyle yapmaktır; azalma, önceki ve sonraki tüketimin farkıdır.\nAdım 1: Akkor ampullerin tüketimi 2 × 50 × 3 = 300 W · saat.\nAdım 2: LED ampullerin tüketimi 2 × 10 × 3 = 60 W · saat.\nAdım 3: Azalma 300 − 60 = 240 W · saat.\nSağlama: Tek ampulde güç farkı 40 W; 2 ampul ve 3 saat için 40 × 2 × 3 = 240.\nCevap D."
},
{
  id: "fen-ed-236",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir fen öğretmeni, tahtaya santral ve dezavantaj eşleştirmeleri yazıyor ve öğrencilerden doğru olanı bulmalarını istiyor.\n**Aşağıdaki eşleştirmelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Rüzgâr santrali: Kullanılmış yakıtın radyoaktif olması",
    "Nükleer santral: Kullanılmış yakıtın radyoaktif olması",
    "Termik santral: Baraj gölünün vadiyi kaplaması",
    "Hidroelektrik santral: Baca gazıyla havanın kirlenmesi"
  ],
  dogru: 1,
  hatalar: [
    "Santral karıştırma: rüzgâr santralinde yakıt kullanılmaz; radyoaktif atık nükleer santralin sorunudur.",
    null,
    "Santral karıştırma: baraj gölü hidroelektrik santralin özelliğidir; termik santralin sorunu yanma gazıdır.",
    "Santral karıştırma: baca gazı yakıt yakan termik santralde oluşur; hidroelektrikte yakıt yanmaz."
  ],
  aciklama: "Her santralin kendine özgü bir sorunu vardır.\nAdım 1: Radyoaktif atık, uranyumun kullanıldığı nükleer santralde oluşur.\nAdım 2: Baraj gölü hidroelektrik santralde, baca gazı ise yakıt yakan termik santralde bulunur.\nAdım 3: Rüzgâr santralinde yakıt olmadığı için atık da yoktur.\nSık yapılan hata: Bir santralin sorununu başka bir santrale yüklemek.\nCevap B."
},
{
  id: "fen-ed-237",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Kamp alanında elle çevrilen kolla çalışan, pilsiz bir şarj aleti kullanılıyor. Kol çevrildikçe aletin içindeki dinamo dönüyor ve telefon şarj oluyor.\n**Bu alet için aşağıdaki yargılardan hangileri doğrudur?**\nI. Kol çevrilirken elektrik enerjisi hareket enerjisine dönüşür.\nII. Alet, ısı enerjisini elektrik enerjisine dönüştürür.\nIII. Kol çevrilmeyi bıraktığında elektrik üretimi durur.",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Yön karıştırma: elektrikten hareket elde etmek motorun işidir; dinamo hareketi elektriğe çevirir.",
    "Tür karıştırma: dinamo ısıyı değil, dönme hareketini elektriğe çevirir.",
    null,
    "I ve II yön ya da tür hatasıdır; ikisi de yanlıştır."
  ],
  aciklama: "Dinamo, dönme hareketini elektrik enerjisine çeviren küçük bir jeneratördür.\nAdım 1: I yanlıştır; kol çevrilirken hareket enerjisi elektrik enerjisine dönüşür, tersi olmaz.\nAdım 2: II yanlıştır; alet ısıdan değil, kolun hareketinden elektrik elde eder.\nAdım 3: III doğrudur; dönme durunca elektrik üretimi de durur.\nSağlama: Yalnızca III doğrudur.\nCevap C."
},
{
  id: "fen-ed-238",
  kazanim: "F.8.7.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Fen kulübü, okul serasındaki fidelerin gece üşümemesi için pille çalışan küçük bir ısıtma modeli tasarlıyor. Öğrenciler dört farklı malzeme listesi hazırlıyor ve birini seçecekler.\n**Modelin amacı elektrik enerjisini ısı enerjisine dönüştürmek olduğuna göre hangi liste seçilmelidir?**",
  gorsel: null,
  secenekler: [
    "Pil, kablo, anahtar ve küçük motor",
    "Pil, kablo, anahtar ve LED",
    "Pil, kablo, anahtar ve ince metal tel",
    "Pil, kablo, anahtar ve dinamo"
  ],
  dogru: 2,
  hatalar: [
    "Hareket modeliyle karıştırma: motor elektriği harekete çevirir, ısıtmak için uygun değildir.",
    "Işık modeliyle karıştırma: LED elektriği ışığa çevirir; fideleri ısıtacak kadar ısı vermez.",
    null,
    "Yön karıştırma: dinamo hareketi elektriğe çevirir; pilli bir ısıtma modelinde ısı vermez."
  ],
  aciklama: "Model tasarlarken önce hedef dönüşüm yazılır, sonra uygun parça seçilir.\nAdım 1: Hedef: elektrik enerjisi → ısı enerjisi.\nAdım 2: Akım geçince ısınan ince metal tel bu dönüşümü sağlar.\nAdım 3: Motor hareket, LED ışık üretir; dinamo ise hareketten elektrik elde eder.\nSağlama: Elektrikli ısıtıcıların içinde de akım geçince ısınan bir tel vardır.\nCevap C."
},
{
  id: "fen-ed-239",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ilçede yer altından çıkarılan sıcak su ve buharla çalışan bir jeotermal santral kuruluyor. Mühendis, ziyaretçilere santralin çalışmasını anlatıyor.\n**Bu santralde türbini döndüren etki aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Yer altındaki sıcak suyun oluşturduğu buhar",
    "Kömürün yakılmasıyla ısınan suyun buharı",
    "Baraj gölünden aşağı akan suyun hareketi",
    "Kıyıdan esen rüzgârın kanatlara çarpması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Termik santralle karıştırma: kömür yakarak buhar elde etmek termik santralin yöntemidir; jeotermalde yakıt yakılmaz.",
    "Hidroelektrik santralle karıştırma: akan suyun hareketiyle türbin döndürmek barajlı santralin yöntemidir.",
    "Rüzgâr santraliyle karıştırma: hava hareketiyle kanat döndürmek rüzgâr santralinin yöntemidir; jeotermalde rüzgâr kullanılmaz."
  ],
  aciklama: "Jeotermal santralde yer altının ısısı kullanılır; yer altından gelen sıcak su ve buhar türbine ulaşır.\nAdım 1: Yer altındaki sıcak su ve buhar, ısı enerjisi taşır.\nAdım 2: Bu buhar türbini döndürür; ısı enerjisi hareket enerjisine dönüşür.\nAdım 3: Türbine bağlı jeneratör hareketi elektriğe çevirir.\nSağlama: Bu santralde yakıt yakılmaz, su akıtılmaz ve rüzgâr kullanılmaz; türbini yalnızca yer altı buharı döndürür.\nCevap A."
},
{
  id: "fen-ed-240",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir vadide kurulan barajlı hidroelektrik santralin yöreye etkileri tartışılıyor.\n**Bu santralle ilgili aşağıdaki yargılardan hangileri doğrudur?**\nI. Elektrik üretirken yakıt yakıldığı için is ve kül çıkar.\nII. Baraj gölü tarım ve yerleşim alanlarını su altında bırakabilir.\nIII. Elektrik üretimi yağış ve su miktarına bağlı olarak değişebilir.",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "Termik santralle karıştırma: is ve kül yakıt yakmaktan çıkar; hidroelektrikte yakıt yanmaz, I yanlıştır.",
    "Eksik değerlendirme: III doğrudur, ama baraj gölünün olumsuz etkisini anlatan II de doğrudur.",
    "I yanlıştır: yakıt yanmaz; III de dışarıda kalmıştır.",
    null
  ],
  aciklama: "Hidroelektrik santral yakıt kullanmaz ama baraj ve su miktarına bağımlılık bazı sorunlar getirir.\nAdım 1: I yanlıştır; santralde yakıt yanmadığı için is ve kül oluşmaz.\nAdım 2: II doğrudur; baraj gölü vadiyi kaplayarak tarım ve yerleşim alanlarını etkileyebilir.\nAdım 3: III doğrudur; kurak dönemde su azalınca üretim düşer.\nSağlama: Doğru yargılar II ve III'tür.\nCevap D."
},
{
  id: "fen-ed-241",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir mahallede bazı evlerin sayaç kullanmadan elektrik hattına bağlandığı belirlendi. Mahalle muhtarı, bu durumun ülke ekonomisine etkisini öğrencilere soruyor.\n**Kaçak elektrik kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Elektrik zaten bol üretildiği için ekonomiye herhangi bir yük olmaz",
    "Üretilip taşındığı hâlde bedeli ödenmediği için ekonomiye kayıp olur",
    "Yalnızca kaçak kullananı ilgilendirdiği için ekonomiye yansımaz",
    "Tüketimi azalttığı için santrallerin kaynak harcamasını düşürür"
  ],
  dogru: 1,
  hatalar: [
    "Maliyeti yok sayma: elektrik bol da olsa her kilovatsaatin üretim ve taşıma maliyeti vardır; bedeli ödenmeyen kısım kayıp olur.",
    null,
    "Etkiyi küçümseme: bedeli ödenmeyen elektrik kaybı ülke ekonomisine ve ödeme yapan kullanıcılara yansır.",
    "Yön hatası: kaçak kullanım tüketimi artırır; kaynaklar daha çabuk tükenir."
  ],
  aciklama: "Kaçak elektrik, bedeli ödenmeden kullanılan elektriktir.\nAdım 1: Bu elektrik de santralde üretilir ve hatlarla taşınır; yani bir maliyeti vardır.\nAdım 2: Bedeli ödenmediği için bu maliyet kayıp olarak ortaya çıkar.\nAdım 3: Kayıp ülke ekonomisine yük olur ve diğer kullanıcılara da yansır.\nSık yapılan hata: Kaçak kullanımı yalnızca bireysel bir sorun sanmak.\nCevap B."
},
{
  id: "fen-ed-242",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ailede elektrik faturasını düşürmek için üç öneri sıralanıyor.\n**Bu önerilerden hangileri evde elektrik tasarrufu sağlar?**\nI. Sıcak yemeği soğumasını beklemeden buzdolabına koymak\nII. Çamaşır makinesini tam dolu çalıştırmak\nIII. Odadan ayrılırken lambayı açık bırakmak",
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Gereksiz tüketimi tasarruf sanma: boş odada yanan lamba elektriği boşa harcar.",
    "I'i doğru sanma: sıcak yemek buzdolabını daha çok çalıştırır ve tüketimi artırır.",
    "Gereksiz tüketim davranışlarını tasarruf sanma: I ve III elektriği boşa harcar."
  ],
  aciklama: "Tasarruf, gereksiz elektrik tüketimini önlemektir.\nAdım 1: Sıcak yemek buzdolabının iç sıcaklığını artırır; soğutucu daha çok çalışır, I tasarruf sağlamaz.\nAdım 2: Makineyi tam dolu çalıştırmak aynı çamaşırı daha az yıkamayla yıkatır, II tasarruf sağlar.\nAdım 3: Boş odada lambayı açık bırakmak elektriği boşa harcar, III tasarruf sağlamaz.\nSağlama: Tasarruf sağlayan yalnızca II'dir.\nCevap A."
},
{
  id: "fen-ed-243",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir apartmanın asansöründe kabini yukarı çıkaran bir motor, kabinin içini aydınlatan bir lamba ve havayı dolaştıran küçük bir fan çalışıyor.\n**Bu üç parçanın asıl enerji dönüşümleri için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Motor: ısı; lamba: ışık; fan: hareket",
    "Motor: hareket; lamba: ısı; fan: ışık",
    "Motor: ışık; lamba: hareket; fan: ısı",
    "Motor: hareket; lamba: ışık; fan: hareket"
  ],
  dogru: 3,
  hatalar: [
    "Motoru ısıtıcı sanma: motor kabini hareket ettirir; ısınması yan etkidir.",
    "Lambayı ısıtıcı, fanı lamba sanma: lamba ışık verir, fan havayı döndürür.",
    "Dönüşümleri karıştırma: motor ışık, lamba hareket üretmez.",
    null
  ],
  aciklama: "Her parçanın görevine bakılır: döndüren ya da kaldıran parça hareket, aydınlatan parça ışık üretir.\nAdım 1: Asansör motoru kabini kaldırır; elektrik enerjisi hareket enerjisine dönüşür.\nAdım 2: Lamba aydınlatır; elektrik enerjisi ışık enerjisine dönüşür.\nAdım 3: Fan havayı döndürür; yine elektrik enerjisi hareket enerjisine dönüşür.\nSık yapılan hata: Çalışırken biraz ısınan motoru ya da lambayı ısıtıcı sanmak.\nCevap D."
},
{
  id: "fen-ed-244",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Kıyıdaki bir rüzgâr santralinde sabah saatlerinde rüzgâr tamamen kesiliyor ve kanatlar duruyor. Santral mühendisi, bu sırada üretimin ne olduğunu rapora yazacak.\n**Bu durumda aşağıdakilerden hangisi gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Kanatlar durduğu hâlde türbin dönmeyi sürdürür ve elektrik üretilir",
    "Santral, yakıt yakarak türbini döndürmeye başlar",
    "Jeneratör hiç döndürülmediği için elektrik üretilmez",
    "Jeneratör kendi kendine dönerek elektrik üretmeyi sürdürür"
  ],
  dogru: 2,
  hatalar: [
    "Zinciri yok sayma: türbini kanatlar döndürür; kanatlar durunca türbin de durur.",
    "Santral karıştırma: yakıt yakmak termik santralin yöntemidir; rüzgâr santralinde yakıt yoktur.",
    null,
    "Enerji kaynağını yok sayma: jeneratör kendiliğinden dönmez; elektrik ancak dışarıdan gelen hareketle üretilir."
  ],
  aciklama: "Rüzgâr santralinde elektrik, rüzgârın kanatları döndürmesiyle başlayan zincirle üretilir.\nAdım 1: Rüzgâr kesilirse kanatlar durur.\nAdım 2: Kanatlara bağlı türbin ve jeneratör de durur.\nAdım 3: Jeneratör hareket enerjisini elektriğe çevirdiğinden, hareket olmayınca elektrik de üretilmez.\nSağlama: Bu yüzden rüzgâr santralinin üretimi rüzgâra bağlıdır.\nCevap C."
},
{
  id: "fen-ed-245",
  kazanim: "F.8.7.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Defne, hem dönen hem de ışık veren pilli bir oyuncak vantilatör modeli tasarlıyor. Pervane dönecek, pervanenin ucundaki küçük lamba yanacaktır.\n**Defne'nin pil ve kablo dışında modeline eklemesi gereken parçalar aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Yalnızca bir elektrik motoru",
    "Bir elektrik motoru ve bir LED",
    "Bir ısıtıcı tel ve bir LED",
    "Bir dinamo ve bir elektrik motoru"
  ],
  dogru: 1,
  hatalar: [
    "Eksik tasarım: motor pervaneyi döndürür ama lamba için ışık veren bir parça da gerekir.",
    null,
    "Hareket parçasını unutma: ısıtıcı tel ısı verir, pervaneyi döndürmez; dönüşümlerden biri sağlanamaz.",
    "Dinamo gereksizliği: dinamo hareketten elektrik üretir, pilli modelde ışık sağlamaz; lamba için LED gerekir."
  ],
  aciklama: "İki ayrı hedef için iki ayrı dönüşüm sağlayacak parça gerekir.\nAdım 1: Pervane dönecek: elektrik → hareket, yani elektrik motoru.\nAdım 2: Lamba yanacak: elektrik → ışık, yani LED.\nAdım 3: Isıtıcı tel ve dinamo bu iki hedeften birini bile sağlamaz.\nSağlama: Motor ve LED birlikte pervaneyi döndürür ve ışık verir.\nCevap B."
},
{
  id: "fen-ed-246",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir belediye enerji verimliliği çalışmaları başlatıyor ve halkı bilgilendirmek için bir broşür hazırlıyor.\n**Aşağıdakilerden hangisi enerji verimliliği çalışmaları kapsamında __değildir__?**",
  gorsel: null,
  secenekler: [
    "Kamu binalarındaki eski ampulleri LED ampullerle değiştirmek",
    "Cihaz alırken enerji sınıfına dikkat edilmesini anlatmak",
    "Boş sınıflarda lambaları kapatan hareket sensörleri takmak",
    "Cihazların bekleme modunda prizde sürekli kalmasını önermek"
  ],
  dogru: 3,
  hatalar: [
    "Verimlilik örneğini dışarıda bırakma: LED ampul aynı ışığı daha az elektrikle verir, bu bir verimlilik çalışmasıdır.",
    "Verimlilik örneğini dışarıda bırakma: enerji sınıfına dikkat etmek verimli cihaz seçmeyi sağlar.",
    "Verimlilik örneğini dışarıda bırakma: sensör boş sınıfta lambanın gereksiz yanmasını önler ve elektrik tasarrufu sağlar.",
    null
  ],
  aciklama: "Enerji verimliliği, aynı işi daha az enerjiyle yapabilmektir.\nAdım 1: LED ampul, enerji sınıfına dikkat etmek ve hareket sensörü aynı işi daha az elektrikle yapmayı ya da gereksiz tüketimi önlemeyi sağlar.\nAdım 2: Cihazları bekleme modunda prizde bırakmak, kullanılmadığı hâlde elektrik çekmeye devam ettiği için enerjiyi boşa harcar; verimliliğin tersidir.\nAdım 3: Soru 'değildir' dediği için gereksiz tüketime yol açan seçenek bulunur.\nSık yapılan hata: Olumsuz kökü gözden kaçırıp verimlilik örneğini seçmek.\nCevap D."
},
{
  id: "fen-ed-247",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Fen kulübü öğrencileri iki ayrı düzenek kuruyor. Birinde musluktan akan su bir çarkı, diğerinde vantilatörün oluşturduğu hava akımı bir pervaneyi döndürüyor. İki milin ucunda da birer küçük dinamo var ve dinamolara bağlı LED'lerin ikisi de yanıyor.\n**Bu iki düzenek, gerçek santrallerden hangi ikisinin çalışma mantığını temsil eder?**",
  gorsel: null,
  secenekler: [
    "Hidroelektrik ve rüzgâr santralleri",
    "Hidroelektrik ve termik santraller",
    "Rüzgâr ve jeotermal santraller",
    "Termik ve jeotermal santraller"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım doğru: akan su hidroelektriği temsil eder ama hava akımı termik santrali değil rüzgâr santralini temsil eder; modelde yakıt ve buhar yoktur.",
    "Yarım doğru: hava akımı rüzgâr santralini temsil eder ama akan su jeotermali değil hidroelektriği temsil eder; modelde yer altı buharı yoktur.",
    "Buharlı santrallerle karıştırma: modelde ne yakıt ne de buhar vardır; çarkı su, pervaneyi hava döndürür."
  ],
  aciklama: "Türbini hareketli su döndüren santral hidroelektrik, hareketli hava döndüren santral rüzgâr santralidir.\nAdım 1: Birinci düzenekte akan su çarkı döndürüyor; bu hidroelektrik santralin mantığıdır.\nAdım 2: İkinci düzenekte hava akımı pervaneyi döndürüyor; bu rüzgâr santralinin mantığıdır.\nAdım 3: Termik ve jeotermalde türbini buhar döndürür; modelde buhar yoktur.\nSağlama: Çark ve pervane türbini, dinamolar jeneratörü temsil eder; ikisinde de hareket elektriğe çevrilir.\nCevap A."
},
{
  id: "fen-ed-248",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ülkenin enerji planlamacıları, yakıtı yenilenemez olduğu hâlde işletme sırasında karbondioksit salmayan bir santral türü arıyor.\n**Bu özelliklere uyan santral aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Termik santral", "Nükleer santral", "Rüzgâr santrali", "Hidroelektrik santral"],
  dogru: 1,
  hatalar: [
    "İkinci özelliği atlama: termik santralin yakıtı yenilenemezdir ama yakıt yanınca karbondioksit salınır.",
    null,
    "Birinci özelliği atlama: rüzgâr santrali karbondioksit salmaz ama kaynağı yenilenebilirdir.",
    "Birinci özelliği atlama: hidroelektrik santral karbondioksit salmaz ama kaynağı yenilenebilirdir."
  ],
  aciklama: "İki ölçüt birlikte aranır: kaynak yenilenemez olacak, işletmede karbondioksit salınmayacak.\nAdım 1: Termik santralin yakıtı yenilenemezdir, ama yakıt yanınca karbondioksit çıkar; ikinci ölçüt sağlanmaz.\nAdım 2: Rüzgâr ve hidroelektrik santraller karbondioksit salmaz, ama kaynakları yenilenebilirdir; birinci ölçüt sağlanmaz.\nAdım 3: Nükleer santralin uranyumu yenilenemezdir ve uranyum yanmadığı için karbondioksit salınmaz.\nSık yapılan hata: Ölçütlerden yalnız birine bakıp seçeneği belirlemek.\nCevap B."
},
{
  id: "fen-ed-249",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Fan destekli bir elektrikli fırında üstte ve altta ısıtıcı teller, havayı dolaştıran bir fan ve içeriyi aydınlatan küçük bir lamba bulunuyor.\n**Bu parçalar için aşağıdaki eşleştirmelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Isıtıcı teller: elektrik → hareket",
    "İç lamba: elektrik → hareket",
    "Fan motoru: elektrik → hareket",
    "Fan motoru: elektrik → ışık"
  ],
  dogru: 2,
  hatalar: [
    "Isıtıcı teli motor sanma: teller akım geçince ısınır; elektrik enerjisi ısı enerjisine dönüşür.",
    "Lambayı motor sanma: lamba elektrik enerjisini ışık enerjisine çevirir.",
    null,
    "Fanı lamba sanma: fan motoru havayı döndürür; ışık vermez."
  ],
  aciklama: "Aynı cihazda birden çok dönüşüm olabilir; parçalar tek tek incelenir.\nAdım 1: Isıtıcı teller elektriği ısıya, lamba elektriği ışığa çevirir.\nAdım 2: Fan, bir motorla döner; motor elektrik enerjisini hareket enerjisine çevirir.\nAdım 3: Şıklarda yalnızca 'fan motoru: elektrik → hareket' doğrudur.\nSağlama: Fanın dönmesi hareket belirtisidir.\nCevap C."
},
{
  id: "fen-ed-250",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Bir evde televizyon, oyun konsolu ve ses sistemi tek bir çoklu prize takılmıştır. Cihazlar kumandayla kapatılıyor ama prizde kalıyor ve üzerlerindeki küçük ışıklar yanık duruyor. Ailenin bir üyesi, çoklu prizin üzerindeki düğmeyi kapatmayı öneriyor.\n**Bu öneriyle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Düğme kapatılınca prize bağlı bütün cihazların bekleme tüketimi sona erer",
    "Düğme kapatılınca yalnızca televizyonun bekleme tüketimi sona erer",
    "Cihazlar kumandayla kapatıldığı için zaten hiç elektrik tüketmez",
    "Düğme kapatılınca cihazlar bekleme modunda daha çok elektrik tüketir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kapsamı daraltma: düğme prize bağlı bütün cihazların elektriğini keser, yalnız birini değil.",
    "Bekleme modunu yok sayma: ışığı yanan cihaz bekleme modunda az da olsa elektrik çeker.",
    "Yön hatası: düğme kapatılınca elektrik gelmez, tüketim artmaz."
  ],
  aciklama: "Bekleme modundaki cihazlar prizde kaldığı sürece az da olsa elektrik tüketir.\nAdım 1: Kumandayla kapatılan cihaz tamamen kapanmaz; ışığı yanık kalır, elektrik çekmeye devam eder.\nAdım 2: Çoklu prizin düğmesi kapatılınca bağlı bütün cihazlara giden elektrik kesilir.\nAdım 3: Böylece bekleme tüketimi sona erer ve fatura düşer.\nSık yapılan hata: Kumandayla kapatılan cihazın hiç elektrik tüketmediğini sanmak.\nCevap A."
},
{
  id: "fen-ed-251",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir dağıtım şirketi, iki mahalleye verdiği elektrik enerjisi ile bu mahallelerde faturalandırılan elektrik enerjisini tabloda göstermiştir. İkisi arasındaki fark, kayıp ve kaçak miktarını verir.\n**Tabloya göre aşağıdakilerden hangisi söylenebilir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Mahalle</th><th>Verilen enerji (kWh)</th><th>Faturalanan enerji (kWh)</th></tr><tr><td>Çamlık</td><td>1000</td><td>940</td></tr><tr><td>Yalı</td><td>800</td><td>780</td></tr></table>",
  secenekler: [
    "Çamlık'ta kayıp ve kaçak 40 kWh'tir",
    "Yalı'daki kayıp ve kaçak Çamlık'takinden fazladır",
    "İki mahallede de kayıp ve kaçak 20 kWh'tir",
    "Çamlık'taki kayıp ve kaçak Yalı'dakinin üç katıdır"
  ],
  dogru: 3,
  hatalar: [
    "Çıkarma hatası: 1000 − 940 = 60 kWh'tir, 40 değil.",
    "Karşılaştırma yönü hatası: Yalı'da 20 kWh, Çamlık'ta 60 kWh kayıp ve kaçak vardır; fazla olan Çamlık'tır.",
    "Tek satırı genelleme: 20 kWh yalnızca Yalı için doğrudur, Çamlık için değil.",
    null
  ],
  aciklama: "Kayıp ve kaçak miktarı, verilen enerji ile faturalanan enerjinin farkıdır; bedeli ödenmeyen bu enerji ülke ekonomisine zarar verir.\nAdım 1: Çamlık'ta fark 1000 − 940 = 60 kWh'tir.\nAdım 2: Yalı'da fark 800 − 780 = 20 kWh'tir.\nAdım 3: 60 kWh, 20 kWh'in 3 katıdır.\nSağlama: 20 × 3 = 60.\nCevap D."
},
{
  id: "fen-ed-252",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kafede kullanılan filtre kahve makinesinde suyu ısıtan bir ısıtıcı tel, suyu üst bölüme taşıyan küçük bir pompa motoru ve makinenin açık olduğunu gösteren kırmızı bir LED gösterge bulunuyor. Bir öğrenci makineyi inceleyip yargılar yazıyor.\n**Buna göre aşağıdaki yargılardan hangileri doğrudur?**\nI. Isıtıcı telde elektrik enerjisi ısı enerjisine dönüşür.\nII. Pompa motorunda elektrik enerjisi ışık enerjisine dönüşür.\nIII. Göstergedeki LED'de elektrik enerjisi ışık enerjisine dönüşür.",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: LED gösterge elektriği ışığa çevirir, III de doğrudur.",
    "II'yi doğru sanma: pompa motoru suyu hareket ettirir, elektrik enerjisi hareket enerjisine dönüşür; III de dışarıda kalmıştır.",
    null,
    "I'i dışarıda bırakma: ısıtıcı tel elektriği ısıya çevirir, I doğrudur; II ise yanlıştır."
  ],
  aciklama: "Aynı cihazın her parçası ayrı bir dönüşüm yapabilir; parçalar tek tek incelenir.\nAdım 1: Isıtıcı tel akım geçince ısınır ve suyu ısıtır; I doğrudur.\nAdım 2: Pompa motoru suyu hareket ettirir; elektrik enerjisi hareket enerjisine dönüşür, ışığa değil. II yanlıştır.\nAdım 3: Gösterge LED'i elektriği ışığa çevirir; III doğrudur.\nSık yapılan hata: Cihazın ya da parçanın görevine bakmadan dönüşümü tahmin etmek.\nCevap C."
},
{
  id: "fen-ed-253",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir nükleer santralde elektrik üretilirken enerji, şekildeki kutularda gösterilen biçimlere dönüşür. Kutulardaki enerji türlerinden üçü K, L ve M harfleriyle gösterilmiş; oklarda ise dönüşümü sağlayan bölümler yazılmıştır.\n**K, L ve M ile gösterilen enerjiler sırasıyla aşağıdakilerden hangisidir?**",
  gorsel: "<svg viewBox=\"0 0 560 112\" role=\"img\" aria-label=\"K enerjisi, L enerjisi, M enerjisi ve elektrik enerjisi kutuları sırasıyla oklarla bağlı; oklar altında reaktör, türbin ve jeneratör yazıyor\"><rect x=\"5\" y=\"15\" width=\"112\" height=\"60\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"61\" y=\"41\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K enerjisi</text><text x=\"61\" y=\"59\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">(uranyumda)</text><line x1=\"121\" y1=\"45\" x2=\"141\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"147,45 137,39 137,51\" fill=\"currentColor\"/><line x1=\"134\" y1=\"52\" x2=\"134\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><text x=\"134\" y=\"102\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Reaktör</text><rect x=\"151\" y=\"15\" width=\"112\" height=\"60\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"207\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L enerjisi</text><line x1=\"267\" y1=\"45\" x2=\"287\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"293,45 283,39 283,51\" fill=\"currentColor\"/><line x1=\"280\" y1=\"52\" x2=\"280\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><text x=\"280\" y=\"102\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Türbin</text><rect x=\"297\" y=\"15\" width=\"112\" height=\"60\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"353\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">M enerjisi</text><line x1=\"413\" y1=\"45\" x2=\"433\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"439,45 429,39 429,51\" fill=\"currentColor\"/><line x1=\"426\" y1=\"52\" x2=\"426\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><text x=\"426\" y=\"102\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Jeneratör</text><rect x=\"443\" y=\"15\" width=\"112\" height=\"60\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"499\" y=\"41\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Elektrik</text><text x=\"499\" y=\"59\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">enerjisi</text></svg>",
  secenekler: [
    "Kimyasal, ısı, hareket",
    "Çekirdek, ısı, hareket",
    "Çekirdek, hareket, ısı",
    "Isı, çekirdek, hareket"
  ],
  dogru: 1,
  hatalar: [
    "Termik santralle karıştırma: kimyasal enerji yakıt yakan santralde bulunur; uranyum yanmaz, enerjisi çekirdekten gelir.",
    null,
    "Sıra hatası: reaktörde ısı elde edilir, hareket enerjisi türbinde oluşur; L ısı, M hareket olmalıdır.",
    "Sıra hatası: ısı, çekirdek enerjisinden elde edilir; çekirdek enerjisi ısıdan sonra gelmez."
  ],
  aciklama: "Nükleer santralde zincir: çekirdek → ısı → hareket → elektrik biçimindedir.\nAdım 1: Uranyumun enerjisi çekirdek enerjisidir; K = çekirdek.\nAdım 2: Reaktör bu enerjiyi ısıya çevirir, ısı suyu buhara dönüştürür; L = ısı.\nAdım 3: Buhar türbini döndürür; M = hareket. Jeneratör bu hareketi elektriğe çevirir.\nSık yapılan hata: Nükleer santrali kömürlü santral gibi düşünüp kimyasal enerji yazmak.\nCevap B."
},
{
  id: "fen-ed-254",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ülke, yakıt yakan termik santrallerin payını azaltıp nükleer santral kurmayı düşünüyor. Konuyu inceleyen bir öğrenci bu iki santralle ilgili aşağıdaki yargıları yazıyor.\n**Buna göre bu yargılardan hangileri doğrudur?**\nI. Termik santralde yakıt yandığı için işletme sırasında karbondioksit açığa çıkar.\nII. Kömürlü termik santralde yanma sonucu kül oluşur.\nIII. Nükleer santralde de termik santralde de türbini su buharı döndürür.",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: II ve III de doğrudur; kömür yanınca kül kalır ve iki santralde de türbini buhar döndürür.",
    "III'ü dışarıda bırakma: nükleerde reaktörün ısısı, termikte yakıtın ısısı suyu buhara çevirir ve buhar türbini döndürür; III de doğrudur.",
    "I'i dışarıda bırakma: yakıt yanınca karbondioksit açığa çıkar, I de doğrudur.",
    null
  ],
  aciklama: "Santral karşılaştırmasında yakıtın yanması, atık ve türbini döndüren etki ayrı ayrı sınanır.\nAdım 1: I doğrudur; termik santralde yakıt yanar ve karbondioksit çıkar.\nAdım 2: II doğrudur; kömür yanınca geriye kül kalır.\nAdım 3: III doğrudur; termik santralde yakıtın ısısı, nükleer santralde reaktörün ısısı suyu buhara çevirir ve buhar türbini döndürür.\nSağlama: Üç yargı da doğrudur.\nCevap D."
},
{
  id: "fen-ed-255",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Dört santralde türbini döndüren etki ve etkinin kaynağı tabloda verilmiştir.\n**Tabloya göre K, L, M ve N santralleri sırasıyla aşağıdakilerden hangisidir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Santral</th><th>Türbini döndüren etki</th><th>Etkinin kaynağı</th></tr><tr><td>K</td><td>Akan su</td><td>Baraj gölünde biriken su</td></tr><tr><td>L</td><td>Esen hava</td><td>Havanın hareketi</td></tr><tr><td>M</td><td>Su buharı</td><td>Yer altındaki sıcak su ve buhar</td></tr><tr><td>N</td><td>Su buharı</td><td>Yakıtın yanmasıyla elde edilen ısı</td></tr></table>",
  secenekler: [
    "Hidroelektrik, rüzgâr, jeotermal, termik",
    "Hidroelektrik, rüzgâr, termik, jeotermal",
    "Rüzgâr, hidroelektrik, jeotermal, termik",
    "Jeotermal, rüzgâr, hidroelektrik, termik"
  ],
  dogru: 0,
  hatalar: [
    null,
    "M ile N yer değiştirmiş: yer altı sıcak su ve buharı jeotermal, yakıt yanması termik santralin özelliğidir.",
    "K ile L yer değiştirmiş: baraj gölündeki su hidroelektrikte, esen hava rüzgârda türbini döndürür.",
    "K ile M yer değiştirmiş: akan su baraj gölünden gelir (hidroelektrik), buhar ise yer altından gelir (jeotermal)."
  ],
  aciklama: "Her santralde türbini döndüren etki farklıdır; etkinin kaynağı santrali belirler.\nAdım 1: K'da türbini akan su döndürür ve su baraj gölünden gelir; K hidroelektriktir.\nAdım 2: L'de türbini esen hava döndürür; L rüzgârdır.\nAdım 3: M ve N'de buhar vardır; M'de buhar yer altındandır (jeotermal), N'de yakıt yanarak elde edilir (termik).\nSağlama: Buharla çalışan iki santral tablodaki kaynağa bakılarak ayrılır.\nCevap A."
},
{
  id: "fen-ed-256",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Fen kulübü, sigortanın çalışmasını gösteren bir model hazırlıyor. Pile bağlı devreye ince bir metal tel (sigorta teli) yerleştiriliyor ve devreye ampuller eklenmeye başlanıyor. Ampul sayısı arttıkça devreden geçen akım büyüyor; belli bir sayıda ince tel eriyor ve bütün ampuller sönüyor.\n**Bu gözlemle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Tel eriyip devreyi açar ve akımı keser; diğer parçalar korunur",
    "Tel eriyince devreden geçen akım artar ve ampuller daha parlak yanar",
    "Tel, ampul sayısı arttıkça fazla elektrik enerjisini kendinde depolar",
    "Tel, devreden geçen akımı ölçerek tüketimi sayaç gibi kayda geçirir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Akımı artırma sanısı: sigorta devreyi açar ve akımı keser; ampuller sönmüştür, parlamaz.",
    "Pille karıştırma: elektrik enerjisini depolayan pillerdir; sigorta teli depolama yapmaz.",
    "Sayaçla karıştırma: tüketimi kaydeden alet sayaçtır; sigorta teli ölçüm yapmaz."
  ],
  aciklama: "Sigorta, akım güvenli sınırı aşınca eriyerek ya da açarak devreyi keser.\nAdım 1: Ampul sayısı arttıkça akım büyür ve ince tel ısınır.\nAdım 2: Akım sınırı aşınca tel erir, devre açılır ve akım kesilir; ampuller söner.\nAdım 3: Böylece kablolar fazla ısınıp yangın çıkarmadan devre korunmuş olur.\nSağlama: Gerçek tesisatta da sigortanın atması bir arıza değil, korumadır.\nCevap A."
},
{
  id: "fen-ed-257",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ülkede iki santralin aynı gün içindeki elektrik üretimi grafikte verilmiştir (değerler kurgusaldır). İki santral de talebe göre üretimini ayarlamıyor; üretimdeki değişim yalnızca kaynağın durumundan geliyor.\n**Grafiğe göre K ve L santralleri aşağıdakilerden hangisi olabilir?**",
  gorsel: "<svg viewBox=\"0 -7 560 269\" role=\"img\" aria-label=\"Sütun grafiği: sabah, öğle, akşam ve gece için K ve L santrallerinin üretimi. K: 40, 10, 55, 20 MWh. L: her zaman 30 MWh\"><text x=\"70\" y=\"12\" font-size=\"14\" fill=\"currentColor\">Üretim (MWh)</text><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"60\" y1=\"200\" x2=\"540\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"56\" y1=\"140\" x2=\"60\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"56\" y1=\"80\" x2=\"60\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"56\" y1=\"20\" x2=\"60\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"52\" y=\"205\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">0</text><text x=\"52\" y=\"145\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><text x=\"52\" y=\"85\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">40</text><text x=\"52\" y=\"25\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">60</text><rect x=\"95\" y=\"80\" width=\"36\" height=\"120\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"113\" y=\"76\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">40</text><rect x=\"139\" y=\"110\" width=\"36\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"157\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">30</text><rect x=\"215\" y=\"170\" width=\"36\" height=\"30\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"233\" y=\"166\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">10</text><rect x=\"259\" y=\"110\" width=\"36\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"277\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">30</text><rect x=\"335\" y=\"35\" width=\"36\" height=\"165\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"353\" y=\"31\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">55</text><rect x=\"379\" y=\"110\" width=\"36\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"397\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">30</text><rect x=\"455\" y=\"140\" width=\"36\" height=\"60\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"473\" y=\"136\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">20</text><rect x=\"499\" y=\"110\" width=\"36\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"517\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">30</text><text x=\"135\" y=\"222\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sabah</text><text x=\"255\" y=\"222\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Öğle</text><text x=\"375\" y=\"222\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Akşam</text><text x=\"495\" y=\"222\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Gece</text><rect x=\"190\" y=\"238\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"210\" y=\"250\" font-size=\"14\" fill=\"currentColor\">K santrali</text><rect x=\"330\" y=\"238\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"350\" y=\"250\" font-size=\"14\" fill=\"currentColor\">L santrali</text></svg>",
  secenekler: [
    "K: nükleer santral; L: rüzgâr santrali",
    "K: jeotermal santral; L: rüzgâr santrali",
    "K: rüzgâr santrali; L: nükleer santral",
    "K: jeotermal santral; L: nükleer santral"
  ],
  dogru: 2,
  hatalar: [
    "Yönleri ters okuma: gün içinde değişmeyen üretim nükleer gibi yakıtla çalışan santrale, değişen üretim rüzgâra uyar; burada tersi yazılmış.",
    "Her iki santral de yanlış: jeotermal üretim hava koşuluna bağlı değildir, K ise değişiyor; rüzgâr santralinin üretimi de gün boyu sabit kalmaz.",
    null,
    "K'yi yanlış seçme: jeotermal santralin üretimi hava koşullarıyla değişmez; grafikte K belirgin biçimde değişiyor."
  ],
  aciklama: "Üretimi hava koşuluna bağlı santral gün içinde dalgalanır; yakıtla ya da yer altı ısısıyla çalışan santral düzenli üretir.\nAdım 1: K'nın üretimi 40, 10, 55 ve 20 MWh olarak değişiyor; bu rüzgâr hızına bağlı değişimi gösterir.\nAdım 2: L her zaman 30 MWh üretiyor; bu, hava koşuluna bağlı olmayan bir santrale uyar (nükleer).\nAdım 3: Jeotermal de düzenli üretir, ama K değişken olduğu için K jeotermal olamaz; rüzgâr santrali ise sabit üretemez.\nSık yapılan hata: Rüzgâr santralinin üretiminin sürekli ve sabit olduğunu sanmak.\nCevap C."
},
{
  id: "fen-ed-258",
  kazanim: "F.8.7.3.2",
  kademe: 2,
  zorluk: 3,
  soru: "Okul bahçesine, pedal çevrildikçe hem bir LED'in yandığı hem de ince bir telin ısındığı bir model yapılacaktır. Modelde pil kullanılmayacak, elektrik yalnızca pedalın dönmesiyle elde edilecektir. Öğrenciler dört farklı malzeme grubu hazırlıyor.\n**Hangi malzeme grubu bu amaca uygundur?**",
  gorsel: null,
  secenekler: [
    "Elektrik motoru, LED ve ısıtıcı tel",
    "Pedala bağlı dinamo, LED ve ısıtıcı tel",
    "Pedala bağlı dinamo, elektrik motoru ve LED",
    "Pedala bağlı elektrik motoru, LED ve ısıtıcı tel"
  ],
  dogru: 1,
  hatalar: [
    "Elektrik kaynağı eksik: pil yok ve hareketten elektrik üreten parça da yok; motor kendi başına elektrik sağlamaz.",
    null,
    "Isı hedefini atlama: ısıtıcı tel yok, ısınma sağlanamaz; elektrik motoru da gereksizdir.",
    "Motor-dinamo karıştırma: elektrik motoru elektrik harcayıp hareket üretir; pedalın hareketinden elektrik elde etmek dinamonun işidir."
  ],
  aciklama: "Önce kaynağı, sonra hedefleri belirle: pedalın hareket enerjisi → elektrik → ışık ve ısı.\nAdım 1: Pil yok; hareketten elektrik üreten parça dinamodur.\nAdım 2: Elektrik LED'e giderse ışık, ısıtıcı tele giderse ısı elde edilir.\nAdım 3: Elektrik motoru elektrik üretmez, harcar; bu modelde gerekmez.\nSağlama: Pedal durursa dinamo da durur, LED söner ve tel soğur.\nCevap B."
},
{
  id: "fen-ed-259",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir fen kulübü, hidroelektrik santral ile kömürlü termik santralin karşılaştırıldığı bir afiş hazırlıyor. Afişte iki santralin ortak özelliği olarak yalnızca bir cümle yer alacak.\n**Afişe aşağıdakilerden hangisi yazılmalıdır?**",
  gorsel: null,
  secenekler: [
    "İkisinde de türbini buhar döndürür, jeneratör buharı yoğuşturur",
    "İkisinde de yakıt yanar ve açığa çıkan ısı jeneratörü döndürür",
    "İkisinde de elektrik türbinde oluşur, jeneratör onu depolar",
    "İkisinde de türbine bağlı jeneratör hareketi elektriğe çevirir"
  ],
  dogru: 3,
  hatalar: [
    "Kaynakları karıştırma: hidroelektrikte türbini buhar değil akan su döndürür; jeneratör de buharı yoğuşturmaz, hareketi elektriğe çevirir.",
    "Hidroelektrik ile termik santrali karıştırma: yakıt yalnız termikte yanar; ısı doğrudan jeneratörü değil, buhar yoluyla türbini döndürür.",
    "Üretim yeri ve depolama karışıklığı: türbin yalnızca döner, elektrik jeneratörde oluşur; jeneratör elektriği depolamaz.",
    null
  ],
  aciklama: "Santrallerde türbini döndüren etki farklıdır, ama türbin-jeneratör ikilisi ortaktır.\nAdım 1: Hidroelektrikte türbini akan su, termikte yakıtın ısıttığı buhar döndürür; bu bölüm ortak değildir.\nAdım 2: Her iki santralde de türbine bağlı jeneratör dönme hareketini elektrik enerjisine çevirir; ortak olan budur.\nAdım 3: Yakıt yanması yalnız termikte vardır; elektrik türbinde oluşmaz ve jeneratör depolama yapmaz.\nSık yapılan hata: Elektriğin türbinde üretildiğini ya da santrallerin hepsinde yakıt yandığını sanmak.\nCevap D."
},
{
  id: "fen-ed-260",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir belediye, 20 sokak lambasını daha verimli lambalarla yeniliyor. Eski lambaların her biri günde 3 kWh, yenilerinin her biri günde 1 kWh elektrik harcıyor. Lambalar her gün çalışıyor.\n**Bu yenilemeyle belediyenin 10 günde yaptığı elektrik tasarrufu kaç kWh'tir?**",
  gorsel: null,
  secenekler: ["20", "40", "400", "600"],
  dogru: 2,
  hatalar: [
    "Eksik hesap: 20, tek lambanın 10 günlük tasarrufudur (2 × 10); lamba sayısıyla çarpılmamıştır.",
    "Eksik hesap: 40, 20 lambanın 1 günlük tasarrufudur (2 × 20); gün sayısıyla çarpılmamıştır.",
    null,
    "Tasarruf yerine eski tüketimi bulma: 600, eski lambaların 10 günlük tüketimidir (3 × 20 × 10)."
  ],
  aciklama: "Tasarruf, eski tüketim ile yeni tüketim arasındaki farktır.\nAdım 1: Bir lambada günlük tasarruf 3 − 1 = 2 kWh.\nAdım 2: 20 lambada günlük tasarruf 2 × 20 = 40 kWh.\nAdım 3: 10 günde tasarruf 40 × 10 = 400 kWh.\nSağlama: Eski tüketim 600, yeni tüketim 200 kWh; fark 400 kWh.\nCevap C."
},
{
  id: "fen-ed-261",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 3,
  soru: "Bir aile, iki ay boyunca elektrik tüketimini ve alışkanlıklarını tabloya yazmıştır. Aile, Aralık ayında iki alışkanlığını birden değiştirmiştir.\n**Tabloya göre aşağıdakilerden hangisi söylenebilir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Ay</th><th>Çoklu priz geceleri</th><th>Çamaşır makinesi</th><th>Tüketim (kWh)</th></tr><tr><td>Kasım</td><td>Açık bırakıldı</td><td>Yarım dolu çalıştı</td><td>150</td></tr><tr><td>Aralık</td><td>Kapatıldı</td><td>Tam dolu çalıştı</td><td>138</td></tr></table>",
  secenekler: [
    "Azalma iki uygulamanın birlikte etkisi olabilir; birine bağlanamaz",
    "Azalma yalnızca çoklu prizin geceleri kapatılmasından kaynaklanmıştır",
    "Azalma yalnızca makinenin tam dolu çalıştırılmasından kaynaklanmıştır",
    "İki uygulama da etkisiz olduğu hâlde tüketim kendiliğinden azalmıştır"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek nedene bağlama: iki koşul birlikte değiştiği için azalmayı yalnız çoklu prize bağlamak mümkün değildir.",
    "Tek nedene bağlama: iki koşul birlikte değiştiği için azalmayı yalnız makinenin doluluğuna bağlamak mümkün değildir.",
    "Veriyi yok sayma: iki uygulama tasarruf davranışıdır ve tüketim azalmıştır; ilişkiyi reddetmek tablodan çıkmaz."
  ],
  aciklama: "Bir önlemin etkisini ölçmek için yalnız tek koşul değiştirilmeli, diğerleri aynı kalmalıdır.\nAdım 1: Tabloda Kasım'dan Aralık'a iki koşul birden değişmiştir: çoklu priz ve makinenin doluluğu.\nAdım 2: Tüketim 150 − 138 = 12 kWh azalmıştır; ama bu azalmanın ne kadarının hangi uygulamadan geldiği ayrılamaz.\nAdım 3: Bu yüzden azalma birine bağlanamaz; iki uygulamanın birlikte etkisi olabilir.\nSık yapılan hata: Birden çok koşul değişmişken sonucu tek nedene bağlamak.\nCevap A."
},
{
  id: "fen-ed-262",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Dört santralin elektrik üretirken izlediği enerji dönüşüm zincirleri tabloda verilmiştir.\n**Tabloya göre aşağıdaki yargılardan hangisi doğrudur?**",
  gorsel: "<table class=\"tablo\"><tr><th>Santral</th><th>Enerji dönüşüm zinciri</th></tr><tr><td>K</td><td>Kimyasal → ısı → hareket → elektrik</td></tr><tr><td>L</td><td>Çekirdek → ısı → hareket → elektrik</td></tr><tr><td>M</td><td>Isı → hareket → elektrik</td></tr><tr><td>N</td><td>Hareket → hareket → elektrik</td></tr></table>",
  secenekler: [
    "Dört zincirde de ilk basamak ısı enerjisidir",
    "Yalnız K ve L'de ısı enerjisi hareket enerjisine dönüşür",
    "Dört zincirde de ısı enerjisi bulunur",
    "Dört zincirde de elektrik enerjisi hareket enerjisinden elde edilir"
  ],
  dogru: 3,
  hatalar: [
    "Başlangıcı genelleme: K'nın ilk basamağı kimyasal, L'ninki çekirdek, N'ninki hareket enerjisidir; yalnız M ısıyla başlar.",
    "Eksik okuma: M'de de ısı enerjisi hareket enerjisine dönüşür; yargı yalnız K ve L'ye indirgenmiştir.",
    "Tek zinciri genelleme: N'nin zincirinde ısı enerjisi yoktur.",
    null
  ],
  aciklama: "Zincirleri tek tek okuyup ortak noktayı bulmak gerekir.\nAdım 1: Dört zincirin sonu da 'hareket → elektrik' ile biter; elektrik her zaman jeneratörde hareketten elde edilir.\nAdım 2: İlk basamaklar farklıdır (kimyasal, çekirdek, ısı, hareket), bu yüzden birinci şık yanlıştır.\nAdım 3: N'de ısı enerjisi yoktur, M'de de ısı hareket enerjisine dönüşür; ikinci ve üçüncü şıklar yanlıştır.\nSağlama: Her santralde son basamak jeneratördür.\nCevap D."
},
{
  id: "fen-ed-263",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ilde kömürlü termik, nükleer, barajlı hidroelektrik ve jeotermal santraller birlikte çalışıyor. İlde art arda iki yıl boyunca yağış çok az düşmüş ve baraj gölü büyük ölçüde çekilmiştir.\n**Bu durumda hangi santralin elektrik üretiminin en çok azalması beklenir?**",
  gorsel: null,
  secenekler: [
    "Kömürlü termik santral",
    "Barajlı hidroelektrik santral",
    "Nükleer santral",
    "Jeotermal santral"
  ],
  dogru: 1,
  hatalar: [
    "Kaynağı karıştırma: termik santral kömürle çalışır; yağış kömür stokunu azaltmaz.",
    null,
    "Kaynağı karıştırma: nükleer santral uranyumla çalışır; yağıştan etkilenmez.",
    "Kaynağı karıştırma: jeotermal santral yer altı sıcak su ve buharıyla çalışır; yağış azlığı üretimi doğrudan düşürmez."
  ],
  aciklama: "Üretimi yağışa ve su miktarına bağlı olan santral kuraklıkta en çok etkilenir.\nAdım 1: Hidroelektrik santral, baraj gölündeki suyun akışıyla çalışır.\nAdım 2: Yağış azalıp göl çekilince türbini döndürecek su azalır; üretim düşer.\nAdım 3: Termik, nükleer ve jeotermal santraller yağışa bağlı kaynak kullanmaz.\nSık yapılan hata: Yenilenebilir kaynağı her koşulda sürekli sanmak.\nCevap B."
},
{
  id: "fen-ed-264",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir saç kurutma makinesinde havayı üfleyen bir fan motoru ve havayı ısıtan bir ısıtıcı tel bulunuyor. Makine, 15 dakikalık bir kullanımda üç konumda kalıyor; her konumda hangi parçanın çalıştığı ve konumda geçen süre tabloda verilmiştir.\n**Bu kullanımda elektrik enerjisinin ısı enerjisine ve hareket enerjisine dönüştüğü süreler sırasıyla kaç dakikadır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Konum</th><th>Isıtıcı tel</th><th>Fan motoru</th><th>Süre (dk)</th></tr><tr><td>Soğuk hava</td><td>Kapalı</td><td>Açık</td><td>4</td></tr><tr><td>Sıcak hava</td><td>Açık</td><td>Açık</td><td>6</td></tr><tr><td>Kapalı</td><td>Kapalı</td><td>Kapalı</td><td>5</td></tr></table>",
  secenekler: ["6 ve 4", "6 ve 10", "6 ve 15", "10 ve 10"],
  dogru: 1,
  hatalar: [
    "Sıcak konumu hareketten çıkarma: sıcak konumda fan da döner; hareket süresi yalnızca 4 değil, 4 + 6 = 10 dakikadır.",
    null,
    "Kapalı konumu sayma: makine kapalıyken hiçbir parça çalışmaz; 15 dakika toplam kullanım süresidir, hareketin süresi değildir.",
    "Isıyı fan açıkken sayma: soğuk konumda ısıtıcı tel kapalıdır, ısı oluşmaz; ısı yalnızca sıcak konumdaki 6 dakikadır."
  ],
  aciklama: "Isıtıcı tel elektriği ısıya, fan motoru harekete çevirir; süre hesaplanırken hangi parçanın açık olduğuna bakılır.\nAdım 1: Isı yalnızca ısıtıcı tel açıkken oluşur: sıcak hava konumu, 6 dakika.\nAdım 2: Hareket fan motoru açıkken oluşur: soğuk hava (4 dk) ve sıcak hava (6 dk) konumları; 4 + 6 = 10 dakika.\nAdım 3: Kapalı konumda hiçbir parça çalışmadığından 5 dakikalık süre iki dönüşüme de katılmaz.\nSağlama: 4 + 6 + 5 = 15 dakika.\nCevap B."
},
{
  id: "fen-ed-265",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Fen öğretmeni, santraller konusunu tekrar ederken dört ifade yazıyor ve öğrencilerden yanlış olanı bulmalarını istiyor.\n**Aşağıdaki ifadelerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "Nükleer santralde de türbini su buharı döndürür",
    "Jeotermal santralde yakıt yakılmadan buhar elde edilir",
    "Hidroelektrik santralde türbini yakıtın ısısı döndürür",
    "Rüzgâr santralinde türbini döndürmek için buhar kullanılmaz"
  ],
  dogru: 2,
  hatalar: [
    "Doğru ifadeyi yanlış sanma: nükleer santralde de ısı suyu buhara çevirir ve buhar türbini döndürür.",
    "Doğru ifadeyi yanlış sanma: jeotermalde buhar yer altı ısısından gelir, yakıt yakılmaz.",
    null,
    "Doğru ifadeyi yanlış sanma: rüzgâr santralinde türbini hava hareketi döndürür, buhar yoktur."
  ],
  aciklama: "Soru yanlış ifadeyi istiyor; doğru ifadeleri eleyerek ilerle.\nAdım 1: Nükleerde buhar türbini döndürür; jeotermalde buhar yakıt yakılmadan elde edilir; rüzgârda buhar yoktur. Bu üç ifade doğrudur.\nAdım 2: Hidroelektrik santralde yakıt kullanılmaz; türbini baraj gölünden akan suyun hareketi döndürür.\nAdım 3: Bu yüzden 'yakıtın ısısı döndürür' ifadesi yanlıştır.\nSık yapılan hata: Olumsuz kökü gözden kaçırıp doğru ifadeyi seçmek.\nCevap C."
},
{
  id: "fen-ed-266",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir belediye, rüzgâr santrali (K) ile termik santralin (L) maliyetlerini karşılaştırıyor. Kurulum maliyeti bir kez ödenir; yakıt gideri her yıl ödenir. Başka gider yoktur ve değerler kurgusaldır.\n**Tabloya göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: "<table class=\"tablo\"><tr><th>Santral</th><th>Kurulum maliyeti (milyon TL)</th><th>Yıllık yakıt gideri (milyon TL)</th></tr><tr><td>K (rüzgâr)</td><td>120</td><td>0</td></tr><tr><td>L (termik)</td><td>80</td><td>10</td></tr></table>",
  secenekler: [
    "İlk yıl sonunda K'nın toplam maliyeti L'den azdır",
    "L'nin toplam maliyeti hiçbir zaman K'ya ulaşmaz",
    "6 yıl sonunda L'nin toplam maliyeti 130 milyon TL'dir",
    "4 yıl sonunda iki santralin toplam maliyeti eşit olur"
  ],
  dogru: 3,
  hatalar: [
    "Hesap hatası: ilk yıl sonunda K'nın maliyeti 120, L'ninki 80 + 10 = 90 milyon TL'dir; L daha azdır.",
    "Yakıt giderini yok sayma: L'nin toplam maliyeti her yıl 10 milyon TL artar ve K'nın 120'sine ulaşır.",
    "Hesap hatası: 6 yıl sonunda L'nin maliyeti 80 + 6 × 10 = 140 milyon TL'dir, 130 değil.",
    null
  ],
  aciklama: "Toplam maliyet = kurulum maliyeti + yıl sayısı × yıllık yakıt gideri.\nAdım 1: K'da yakıt gideri yoktur; toplam maliyet hep 120 milyon TL'dir.\nAdım 2: L'de toplam maliyet 80 + 10 × yıl sayısıdır; 4 yılda 80 + 40 = 120 milyon TL olur.\nAdım 3: Bu değer K'nınkine eşittir; 4 yıldan sonra L daha pahalı hâle gelir.\nSağlama: 1 yılda L = 90, 6 yılda L = 140 milyon TL; diğer şıklar tutmaz.\nCevap D."
},
{
  id: "fen-ed-267",
  kazanim: "F.8.7.3.2",
  kademe: 2,
  zorluk: 3,
  soru: "Meyve kurutma modeli yapan bir öğrenci, pille çalışan modelin hem ısı vermesini hem de hava akımı oluşturmasını istiyor; çünkü meyvedeki suyun buharlaşması için ısı ve havanın dolaşması gerekir.\n**Pil ve kablo dışında modele hangi parçalar eklenmelidir?**",
  gorsel: null,
  secenekler: [
    "Pervaneli bir elektrik motoru ve ısıtıcı tel",
    "Pedala bağlı bir dinamo ve LED",
    "Bir LED ve pervaneli bir elektrik motoru",
    "Bir ısıtıcı tel ve bir LED"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kaynağı karıştırma: pilli modelde dinamo gerekmez; dinamo ve LED ne ısı ne de hava akımı sağlar.",
    "Isı hedefini atlama: LED ışık verir, meyveyi kurutacak ısıyı sağlamaz.",
    "Hava akımını atlama: ısıtıcı tel ısı verir ama havayı dolaştıracak bir motor yoktur; LED de gereksizdir."
  ],
  aciklama: "İki hedef için iki dönüşüm gerekir: elektrik → ısı ve elektrik → hareket.\nAdım 1: Isı için akım geçince ısınan ısıtıcı tel gerekir.\nAdım 2: Hava akımı için pervaneyi döndüren elektrik motoru gerekir.\nAdım 3: LED ışık verir, dinamo hareketten elektrik üretir; bu modelde ikisi de gereksizdir.\nSağlama: Motor ve ısıtıcı tel birlikte sıcak hava akımı oluşturur.\nCevap A."
},
{
  id: "fen-ed-268",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ülkede termik, jeotermal ve rüzgâr santralleri birlikte kullanılıyor. Bir öğrenci bu üç santralle ilgili yargılar yazıyor.\n**Buna göre aşağıdaki yargılardan hangileri doğrudur?**\nI. Yakıt yanması bu üç santralden yalnız termik santralde görülür.\nII. Rüzgâr santralinde türbini buhar döndürür.\nIII. Jeotermal ve rüzgâr santrallerinin kaynakları yenilenebilirdir.",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: jeotermal ve rüzgâr kaynakları yenilenebilir olduğundan III de doğrudur.",
    "II'yi doğru sanma: rüzgâr santralinde türbini hava hareketi döndürür, buhar yoktur; III de dışarıda kalmıştır.",
    null,
    "I'i dışarıda bırakma: yakıt yanması yalnız termikte vardır, I doğrudur; II ise yanlıştır."
  ],
  aciklama: "Her yargı ilgili santrale göre ayrı sınanır.\nAdım 1: I doğrudur; jeotermalde yer altı ısısı, rüzgârda hava hareketi kullanılır, yakıt yalnız termikte yanar.\nAdım 2: II yanlıştır; rüzgâr santralinde buhar yoktur.\nAdım 3: III doğrudur; yer altı sıcak suyu ve rüzgâr yenilenebilir kaynaklardır.\nSağlama: Doğru yargılar I ve III'tür.\nCevap C."
},
{
  id: "fen-ed-269",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir otelin 20 odasındaki eski televizyonların her biri 150 W gücündedir. Otel yönetimi, bunları aynı görüntü kalitesini veren ve her biri 60 W gücündeki yeni televizyonlarla değiştirdi. Her odadaki televizyon günde ortalama 5 saat açık kalıyor. Enerji, güç ile süre çarpılarak bulunur ve 1 kWh = 1000 W · saat'tir.\n**Bu değişiklikle otelin günlük elektrik tüketimi kaç kWh azalır?**",
  gorsel: null,
  secenekler: ["0,09", "0,45", "4,5", "9"],
  dogru: 3,
  hatalar: [
    "Oda sayısını ve süreyi unutma: 0,09 kWh, bir televizyonun yalnızca 1 saatlik güç farkına karşılık gelen azalmadır (90 W · saat).",
    "Oda sayısını unutma: 0,45 kWh yalnızca bir odanın günlük azalmasıdır.",
    "Oda sayısını yanlış alma: 4,5 kWh, 10 odanın günlük azalmasıdır; otelde 20 oda vardır.",
    null
  ],
  aciklama: "Enerji verimliliği, aynı işi daha az enerjiyle yapmaktır; azalma, önceki ve sonraki tüketimin farkıdır.\nAdım 1: Bir televizyonda güç farkı 150 − 60 = 90 W'tır.\nAdım 2: Bir odada günlük azalma 90 × 5 = 450 W · saat = 0,45 kWh'tir.\nAdım 3: 20 odada azalma 0,45 × 20 = 9 kWh'tir.\nSağlama: 20 oda × 90 W × 5 saat = 9000 W · saat = 9 kWh.\nCevap D."
},
{
  id: "fen-ed-270",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir öğrenci, kömürlü bir termik santralde enerjinin izlediği yolu şekildeki gibi çizmiştir. Öğretmeni, iki kutunun yerinin yanlış olduğunu söylüyor.\n**Şemanın doğru olması için hangi iki kutunun yeri değiştirilmelidir?**",
  gorsel: "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"Kömür, kazan, jeneratör, türbin ve elektrik enerjisi kutuları sırasıyla oklarla bağlı\"><rect x=\"5\" y=\"20\" width=\"88\" height=\"50\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"49\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Kömür</text><line x1=\"96\" y1=\"45\" x2=\"110\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"118,45 108,40 108,50\" fill=\"currentColor\"/><rect x=\"121\" y=\"20\" width=\"88\" height=\"50\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"165\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Kazan</text><line x1=\"212\" y1=\"45\" x2=\"226\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"234,45 224,40 224,50\" fill=\"currentColor\"/><rect x=\"237\" y=\"20\" width=\"88\" height=\"50\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"281\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Jeneratör</text><line x1=\"328\" y1=\"45\" x2=\"342\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"350,45 340,40 340,50\" fill=\"currentColor\"/><rect x=\"353\" y=\"20\" width=\"88\" height=\"50\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"397\" y=\"50\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Türbin</text><line x1=\"444\" y1=\"45\" x2=\"458\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"466,45 456,40 456,50\" fill=\"currentColor\"/><rect x=\"469\" y=\"20\" width=\"88\" height=\"50\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"513\" y=\"42\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Elektrik</text><text x=\"513\" y=\"60\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">enerjisi</text></svg>",
  secenekler: [
    "Kömür ile Kazan",
    "Jeneratör ile Türbin",
    "Kazan ile Jeneratör",
    "Türbin ile Elektrik enerjisi"
  ],
  dogru: 1,
  hatalar: [
    "Sırayı yanlış değerlendirme: kömür önce yakılır, ısı kazandaki suyu ısıtır; bu iki kutunun sırası doğrudur.",
    null,
    "Parçaların görevini karıştırma: kazan ısı ve buhar sağlar, jeneratörden çok önce gelir; asıl hata türbinle jeneratörün yerindedir.",
    "Çıktıyı ara basamak sanma: elektrik enerjisi zincirin sonudur, türbinle yer değiştiremez."
  ],
  aciklama: "Termik santralde sıra: yakıt → kazan (ısı ve buhar) → türbin → jeneratör → elektrik biçimindedir.\nAdım 1: Kömür yakılır, ısı kazandaki suyu buhara çevirir; ilk iki kutu doğrudur.\nAdım 2: Buhar önce türbini döndürür, türbine bağlı jeneratör hareketi elektriğe çevirir.\nAdım 3: Şemada jeneratör türbinden önce yazılmış; bu iki kutunun yeri değiştirilmelidir.\nSık yapılan hata: Elektriğin türbinden önce üretildiğini sanmak.\nCevap B."
},
{
  id: "fen-ed-271",
  kazanim: "F.8.7.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Tabloda dört cihazın elektrik enerjisini esas olarak hangi enerjilere çevirdiği 'Evet' ve 'Hayır' ile gösterilmiştir.\n**Buna göre P, Q, R ve S cihazları sırasıyla aşağıdakilerden hangisi olabilir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Cihaz</th><th>Isı</th><th>Işık</th><th>Hareket</th></tr><tr><td>P</td><td>Evet</td><td>Hayır</td><td>Evet</td></tr><tr><td>Q</td><td>Hayır</td><td>Evet</td><td>Hayır</td></tr><tr><td>R</td><td>Hayır</td><td>Hayır</td><td>Evet</td></tr><tr><td>S</td><td>Evet</td><td>Hayır</td><td>Hayır</td></tr></table>",
  secenekler: [
    "Fanlı elektrikli ısıtıcı, LED lamba, blender, tost makinesi",
    "Blender, LED lamba, fanlı elektrikli ısıtıcı, tost makinesi",
    "Fanlı elektrikli ısıtıcı, tost makinesi, blender, LED lamba",
    "LED lamba, fanlı elektrikli ısıtıcı, tost makinesi, blender"
  ],
  dogru: 0,
  hatalar: [
    null,
    "P ile R yer değiştirmiş: hem ısı hem hareket veren cihaz fanlı ısıtıcıdır, blender yalnız hareket verir.",
    "Q ile S yer değiştirmiş: yalnız ışık veren cihaz LED lambadır, tost makinesi ışık için kullanılmaz.",
    "Bütün sıra karışmış: P hem ısı hem hareket, Q yalnız ışık verir; ilk iki cihaz bu özellikleri taşımaz."
  ],
  aciklama: "Her cihazın asıl dönüşümlerini bul, tablodaki Evet'lerle eşleştir.\nAdım 1: P hem ısı hem hareket verir: fanlı elektrikli ısıtıcı (tel ısıtır, fan döner).\nAdım 2: Q yalnız ışık verir: LED lamba. R yalnız hareket verir: blender. S yalnız ısı verir: tost makinesi.\nAdım 3: Bu sıra yalnızca birinci şıkta vardır.\nSık yapılan hata: İki dönüşümü olan cihazı tek dönüşümlü sanmak.\nCevap A."
},
{
  id: "fen-ed-272",
  kazanim: "F.8.7.3.6",
  kademe: 2,
  zorluk: 3,
  soru: "Bir evde televizyon (4 W), kablolu yayın alıcısı (10 W) ve ses sistemi (6 W), kumandayla kapatıldıktan sonra günde ortalama 20 saat bekleme modunda kalıyor. Aile, bu cihazları çoklu prizin düğmesiyle tamamen kapatmaya karar veriyor. Enerji, güç ile süre çarpılarak bulunur ve 1 kWh = 1000 W · saat'tir.\n**Bekleme tüketimi sona erdiğinde ailenin 10 günde elektrik tüketimi kaç kWh azalır?**",
  gorsel: null,
  secenekler: ["0,4", "2", "4", "4000"],
  dogru: 2,
  hatalar: [
    "Süreyi unutma: 0,4 kWh yalnız 1 günlük bekleme tüketimidir; 10 günle çarpılmamıştır.",
    "Süreyi yanlış alma: 2 kWh, günlük bekleme süresinin 10 saat alındığı durumun sonucudur.",
    null,
    "Birimi çevirmeme: 4000, W · saat cinsinden değerdir; kWh için 1000'e bölünmelidir."
  ],
  aciklama: "Bekleme modundaki cihazlar prizde kaldıkça az da olsa elektrik tüketir; düğmeyi kapatmak bu tüketimi bitirir.\nAdım 1: Toplam güç 4 + 10 + 6 = 20 W.\nAdım 2: Günlük tüketim 20 × 20 = 400 W · saat; 10 günde 4000 W · saat.\nAdım 3: 4000 W · saat = 4000 ÷ 1000 = 4 kWh.\nSağlama: Günlük 0,4 kWh × 10 gün = 4 kWh.\nCevap C."
},
{
  id: "fen-ed-273",
  kazanim: "F.8.7.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Öğrenciler, rüzgârla dönen kanatlara bağlı bir dinamo ve bir LED'den oluşan rüzgâr santrali maketiyle deney yapıyor. Amaçları, kanat sayısının LED'in parlaklığına etkisini araştırmaktır. Üç deneyin koşulları ve sonuçları tabloda verilmiştir.\n**Bu amaç için hangi iki deney karşılaştırılmalıdır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Deney</th><th>Kanat sayısı</th><th>Hava hızı</th><th>LED</th></tr><tr><td>1</td><td>2</td><td>Düşük</td><td>Sönük yanar</td></tr><tr><td>2</td><td>2</td><td>Yüksek</td><td>Çok parlak yanar</td></tr><tr><td>3</td><td>4</td><td>Düşük</td><td>Orta parlaklıkta yanar</td></tr></table>",
  secenekler: [
    "Deney 1 ve 2; çünkü ikisinde de yalnız hava hızı farklıdır",
    "Deney 1 ve 3; çünkü ikisinde de yalnız kanat sayısı farklıdır",
    "Deney 2 ve 3; çünkü ikisinde de LED'in parlaklığı farklıdır",
    "Deney 2 ve 3; çünkü ikisinde de hem kanat hem hız farklıdır"
  ],
  dogru: 1,
  hatalar: [
    "Değişkeni karıştırma: 1 ve 2'de kanat sayısı aynıdır, değişen hava hızıdır; bu karşılaştırma hava hızının etkisini gösterir.",
    null,
    "Sonucu koşul sanma: LED'in parlaklığı ölçülen sonuçtur; karşılaştırılacak deneyler değişkenin yalnız birinde farklı olanlar seçilerek belirlenir.",
    "Birden çok değişkeni birlikte değiştirme: 2 ve 3'te hem kanat sayısı hem hava hızı farklıdır; parlaklık farkının hangisinden geldiği anlaşılamaz."
  ],
  aciklama: "Bir değişkenin etkisini anlamak için karşılaştırılan iki deneyde yalnız o değişken farklı, diğerleri aynı olmalıdır.\nAdım 1: Araştırılan değişken kanat sayısıdır.\nAdım 2: Deney 1 ve 3'te hava hızı aynı (düşük), kanat sayısı farklıdır (2 ve 4); LED'deki fark yalnız kanat sayısından gelir.\nAdım 3: Deney 2 ve 3'te hem kanat sayısı hem hava hızı farklıdır; deney 1 ve 2'de ise yalnız hava hızı farklıdır.\nSağlama: Deney 3'te LED, deney 1'e göre daha parlaktır; kanat sayısı arttıkça dinamo daha çok elektrik üretmiştir.\nCevap B."
},
{
  id: "fen-ed-274",
  kazanim: "F.8.7.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir öğrenci, 'Yenilenebilir kaynak kullanan santrallerin çevreye hiçbir olumsuz etkisi yoktur.' diyor. Öğretmeni, bu görüşün yanlış olduğunu bir örnekle göstermesini istiyor.\n**Öğretmenin görüşü çürütmek için vereceği örnek aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Nükleer santral: Kullanılmış yakıt radyoaktif atık olur",
    "Termik santral: Yakıt yanınca havaya sera gazı karışır",
    "Hidroelektrik santral: Yakıt yanınca baca gazı oluşur",
    "Rüzgâr santrali: Kanatlar kuş göç yollarını etkileyebilir"
  ],
  dogru: 3,
  hatalar: [
    "Kaynağı yanlış sınıflandırma: nükleer santralin yakıtı uranyumdur, yenilenebilir değildir; bu örnek öğrencinin görüşünü çürütmez.",
    "Kaynağı yanlış sınıflandırma: termik santral yenilenemeyen yakıtla çalışır; yenilenebilir kaynak örneği değildir.",
    "Yanlış eşleştirme: hidroelektrik santral yenilenebilirdir ama yakıt yakılmaz, baca gazı oluşmaz; bu gerçek bir olumsuz etki değildir.",
    null
  ],
  aciklama: "Bir genellemeyi çürütmek için genellemenin kapsamındaki bir karşıt örnek gerekir; örnek hem yenilenebilir bir santrale ait hem de gerçek bir olumsuz etki olmalıdır.\nAdım 1: Nükleer ve termik santraller yenilenemeyen kaynak kullanır, genellemenin kapsamına girmez.\nAdım 2: Hidroelektrik santral yenilenebilirdir ama yakıt yakılmadığı için baca gazı oluşmaz; verilen etki gerçek değildir.\nAdım 3: Rüzgâr santrali yenilenebilir kaynak (rüzgâr) kullanır ve kanatları kuşların göç yollarını etkileyebilir; bu, yenilenebilir bir santralin bile olumsuz etkisi olabileceğini gösterir.\nSık yapılan hata: Yenilenebilir kaynağı sorunsuz sanmak.\nCevap D."
},
{
  id: "fen-ed-275",
  kazanim: "F.8.7.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir sitedeki üç apartmanda enerji verimliliği çalışmaları yapılmış; çalışmalardan önceki yıl ile sonraki yıla ait toplam elektrik tüketimi tabloda verilmiştir.\n**Tabloya göre tüketimini geçen yılkine göre yüzde olarak en çok azaltan apartman hangisidir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Apartman</th><th>Geçen yıl (kWh)</th><th>Bu yıl (kWh)</th></tr><tr><td>Güneş</td><td>1000</td><td>900</td></tr><tr><td>Yıldız</td><td>400</td><td>380</td></tr><tr><td>Deniz</td><td>500</td><td>425</td></tr></table>",
  secenekler: ["Deniz", "Güneş", "Yıldız", "Üç apartmanda da oran eşit"],
  dogru: 0,
  hatalar: [
    null,
    "Miktarı oranla karıştırma: Güneş'te azalma 100 kWh ile en çoktur ama geçen yıla oranı %10'dur; Deniz'de %15'tir.",
    "Hesap hatası: Yıldız'da azalma 20 kWh, oran 20 ÷ 400 = %5 ile en küçüktür.",
    "Oranları hesaplamama: oranlar %10, %5 ve %15 olup birbirinden farklıdır."
  ],
  aciklama: "Tasarruf oranı = (geçen yıl − bu yıl) ÷ geçen yıl. Enerji verimliliği çalışmaları hem ailenin hem ülkenin elektrik giderini azaltır.\nAdım 1: Güneş'te tasarruf 1000 − 900 = 100 kWh; oran 100 ÷ 1000 = %10.\nAdım 2: Yıldız'da tasarruf 400 − 380 = 20 kWh; oran 20 ÷ 400 = %5.\nAdım 3: Deniz'de tasarruf 500 − 425 = 75 kWh; oran 75 ÷ 500 = %15.\nSık yapılan hata: En çok tasarruf miktarı olan apartmanı, en yüksek oranlı apartman sanmak.\nCevap A."
}
);
