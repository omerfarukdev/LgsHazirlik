// Fen Bilimleri — Elektrik Yükleri ve Elektriklenme (F.8.7.1): Kademe 3 (LGS Ayarı) yedeği, sıra 26-75
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektriklenme"] = window.LGS_BANK["elektriklenme"] || []).push(
{
  "id": "fen-el-326",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kuru bir kış gününde yalıtkan kumaşlı koltuğa sürtünen kazağıyla arabadan inen Burak, metal kapı koluna dokunurken küçük bir kıvılcım görüyor ve elinde hafif bir sızı hissediyor. Nemli bir yaz gününde ise aynı şeyi hiç yaşamıyor.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Kazak ile koltuk aynı cins yüklenir; boşalma nemli havada daha belirgindir.",
    "Kazak ile koltuk zıt cins yüklenir; boşalma nemli havada daha belirgindir.",
    "Kazak ile koltuk zıt cins yüklenir; boşalma kuru havada daha belirgindir.",
    "Kazak ile koltuk aynı cins yüklenir; boşalma kuru havada daha belirgindir."
  ],
  "dogru": 2,
  "hatalar": [
    "Sürtünmeyi aynı cins sanma ve nemi etkili sanma: sürtünen cisimler zıt cins yüklenir; nem yükü havaya kaçırdığı için olay kuru havada belirgindir.",
    "Nemi etkili sanma: nemli havada biriken yük havaya kaçar, bu yüzden boşalma kuru havada daha belirgindir.",
    null,
    "Sürtünmeyi aynı cins sanma: sürtünen cisimler zıt cins yüklenir; aynı cins olsalar birbirini iterlerdi."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisim zıt cins ve eşit miktarda yüklenir; biriken zıt yükler iletken bir cisimle buluşunca boşalır.\nAdım 1: Kazak ile koltuk birbirine sürtünür. Biri elektron verip pozitif, diğeri elektron alıp negatif yüklenir; yani zıt cins yüklenirler.\nAdım 2: Burak metal kapı koluna dokununca biriken yükler hızla geçer; kıvılcım ve sızı bu ani geçişin sonucudur.\nAdım 3: Nemli havada yük havaya kaçtığı için birikme olmaz. Bu yüzden olay kuru havada daha belirgindir.\nSağlama: Yaz günü hava nemli olduğu için kıvılcım görülmemesi bu sonuca uyar.\nSık yapılan hata: Sürtünen cisimlerin aynı cins yüklendiğini sanmak.\nCevap C."
},
{
  "id": "fen-el-327",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir öğrenci yalıtkan iplerle asılı üç metal küreyle deney yapıyor. Negatif yüklü olduğunu bildiği S küresini önce P'ye, sonra R'ye yaklaştırıyor; en sonda P ile R'yi birbirine yaklaştırıyor. Gözlemlerini tabloya yazıyor.\nI. P pozitif yüklüdür.\nII. R nötr olabilir.\nIII. P ile R aynı cins yüklüdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>S – P</td><td>Birbirini çekiyor</td></tr><tr><td>S – R</td><td>Birbirini çekiyor</td></tr><tr><td>P – R</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": ["Yalnız I","Yalnız III","I ve III","II ve III"],
  "dogru": 2,
  "hatalar": ["III'ü atlama: P ile R birbirini ittiğine göre ikisi de yüklüdür ve aynı cinstir; III de kesinlikle doğrudur.","I'i atlama: P, negatif S'yi çekiyor ve R'yi ittiği için yüklü; öyleyse pozitiftir.",null,"II'yi doğru sanma: R, P'yi ittiği için yüklüdür; nötr olamaz."],
  "aciklama": "Yüklü bir cisim nötr cismi de çeker; bu yüzden çekme tek başına kesin kanıt değildir. İtme ise iki cismin de yüklü ve aynı cins olduğunu kanıtlar.\nAdım 1: P ile R birbirini itiyor; ikisi de yüklü ve aynı cinstir. III kesinlikle doğrudur, II yanlıştır.\nAdım 2: P yüklüdür ve negatif S'yi çekiyor; öyleyse P pozitiftir. I kesinlikle doğrudur.\nAdım 3: R de P ile aynı cins olduğu için pozitiftir; S'yi çekmesi de buna uyar.\nSık yapılan hata: S'yi çeken kürelerin nötr de olabileceğini düşünüp itme gözlemini kullanmamak.\nCevap C."
},
{
  "id": "fen-el-328",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Nötr bir PVC boru, nötr bir yün atkıya sürtülüyor. Sürtünme sonunda atkı pozitif yükleniyor. Daha sonra boru ile atkı birbirinden ayrılıyor ve birbirine yaklaştırılıyor.\n**Buna göre elektronların geçiş yönü ve yaklaştırılan cisimlerin birbirine etkisi aşağıdakilerden hangisinde doğru verilmiştir?**",
  "gorsel": null,
  "secenekler": [
    "Elektronlar borudan atkıya geçmiştir; boru ile atkı birbirini iter.",
    "Elektronlar atkıdan boruya geçmiştir; boru ile atkı birbirini iter.",
    "Elektronlar borudan atkıya geçmiştir; boru ile atkı birbirini çeker.",
    "Elektronlar atkıdan boruya geçmiştir; boru ile atkı birbirini çeker."
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ve etkiyi ters kurma: pozitif yüklenen atkı elektron kaybetmiştir. Ayrıca sürtünen cisimler zıt cins yüklendiği için birbirini çeker.",
    "Sürtünende aynı cins sanma: boru negatif, atkı pozitiftir; zıt cins yükler birbirini çeker, itmez.",
    "Yönü ters kurma: atkı pozitif yüklendiğine göre elektron kaybetmiştir, yani elektronlar atkıdan boruya geçmiştir.",
    null
  ],
  "aciklama": "Sürtünmede elektron veren cisim pozitif, elektron alan cisim negatif yüklenir.\nAdım 1: Atkı pozitif yüklendiğine göre negatif yüklü taneciklerinden bir kısmını kaybetmiştir; elektronlar atkıdan boruya geçmiştir.\nAdım 2: Elektron alan boru negatif yüklenir. Boru negatif, atkı pozitiftir.\nAdım 3: Zıt cins yüklü iki cisim birbirini çeker.\nSağlama: Verilen elektron kadar elektron alındığı için boru ve atkının yük miktarları eşittir, toplam yük yine sıfırdır.\nSık yapılan hata: Sürtünen cisimlerin aynı cins yüklendiğini sanıp \"birbirini iter\" demek.\nCevap D."
},
{
  "id": "fen-el-329",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fırtınalı bir akşam gökyüzünü izleyen Ceren, bazı yük boşalmalarının iki bulut arasında, bazılarının ise bulut ile yer yüzeyi arasında olduğunu fark ediyor. Ceren defterine şu yargıları yazıyor.\nI. İki bulut arasındaki boşalmaya yıldırım denir.\nII. Bulut ile yer yüzeyi arasındaki boşalmaya yıldırım denir.\nIII. Bulutun alt kısmı negatif yüklüyse bulut ile yer arasındaki boşalmada elektronlar buluttan yere geçer.\n**Buna göre Ceren’in yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "II ve III",
    "I ve II",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "III’ü atlama: elektronlar negatif yüklü bölgeden pozitif yüklü bölgeye, yani buluttan yere geçer; III de doğrudur.",
    null,
    "Şimşekle yıldırımı karıştırma: iki bulut arasındaki boşalma yıldırım değildir, yıldırım bulut ile yer arasında olur. I yanlıştır.",
    "Şimşekle yıldırımı karıştırma: I yanlıştır; iki bulut arasındaki boşalmanın ışığına şimşek denir."
  ],
  "aciklama": "Yük boşalmasının ışığına şimşek, sesine gök gürültüsü denir. Boşalma bulut ile yer arasında olursa bu olaya yıldırım denir.\nAdım 1 (I): İki bulut arasındaki boşalma yıldırım değildir; yıldırım yalnızca bulut ile yer arasında olur. I yanlıştır.\nAdım 2 (II): Bulut ile yer yüzeyi arasındaki boşalma yıldırımdır. II doğrudur.\nAdım 3 (III): Boşalmada elektronlar negatif yüklü bölgeden pozitif yüklü bölgeye geçer. Alt kısmı negatif olan bulutun elektronları yere gider. III doğrudur.\nSağlama: Elektron geçişi sonunda hem bulutun hem yer yüzeyinin yükü azalır.\nSık yapılan hata: Şimşek ile yıldırımı aynı olay sanmak.\nCevap B."
},
{
  "id": "fen-el-330",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinden K’nin negatif yüklü olduğu biliniyor. Küreler iki ayrı denemede ikişer ikişer yaklaştırıldığında şekildeki gibi dengeye geliyor.\n**Buna göre M küresi için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<svg viewBox=\"0 0 500 206\" role=\"img\" aria-label=\"Birinci denemede K ve L küreleri birbirinden uzaklaşıyor, ikinci denemede L ve M küreleri birbirine yaklaşıyor\"><line x1=\"40\" y1=\"14\" x2=\"220\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"290\" y1=\"14\" x2=\"470\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"90\" y1=\"14\" x2=\"50\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"170\" y1=\"14\" x2=\"210\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"330\" y1=\"14\" x2=\"356\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"430\" y1=\"14\" x2=\"404\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"128\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"210\" cy=\"128\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"356\" cy=\"128\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"404\" cy=\"128\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"136\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"210\" y=\"135\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">?</text><text x=\"356\" y=\"135\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">?</text><text x=\"404\" y=\"135\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">?</text><text x=\"50\" y=\"168\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"210\" y=\"168\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text><text x=\"356\" y=\"168\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text><text x=\"404\" y=\"168\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><text x=\"130\" y=\"198\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1. deneme</text><text x=\"380\" y=\"198\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2. deneme</text></svg>",
  "secenekler": [
    "Kesinlikle pozitif yüklüdür.",
    "Pozitif yüklü ya da nötrdür.",
    "Kesinlikle nötrdür.",
    "Negatif yüklü ya da nötrdür."
  ],
  "dogru": 1,
  "hatalar": [
    "Çekmeyi zıt yük sanma: L negatif olduğuna göre M pozitif olabilir ama nötr de olabilir; pozitif olması kesin değildir.",
    null,
    "Çekmeyi nötr için kesin sanma: pozitif yüklü M de negatif L’yi çekerdi; M’nin nötr olması kesin değildir.",
    "Yük cinsini ters kurma: M negatif olsaydı negatif L’yi iterdi, çekmezdi."
  ],
  "aciklama": "İtme, iki cismin de yüklü ve aynı cins olduğunu gösterir. Çekme ise zıt cins yükler arasında olduğu gibi yüklü ile nötr cisim arasında da görülür.\nAdım 1: 1. denemede K ile L birbirini itiyor. K negatif olduğuna göre L de negatiftir.\nAdım 2: 2. denemede L ile M birbirini çekiyor. Negatif L’yi çekebilen M, pozitif yüklü ya da nötr olabilir.\nAdım 3: M negatif olsaydı L ile arasında itme görülürdü; bu yüzden M negatif olamaz.\nSağlama: Hem pozitif hem nötr M, negatif L’yi çeker; gözlem ikisinde de aynıdır, bu yüzden biri kesin değildir.\nSık yapılan hata: Çekmeyi görünce karşıdaki cismin kesinlikle zıt yüklü olduğunu sanmak.\nCevap B."
},
{
  "id": "fen-el-331",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan ayak üzerindeki nötr bir metal silindirin sol ucu K, sağ ucu L ile adlandırılıyor. Pozitif yüklü bir çubuk, silindirin K ucuna dokunmadan yaklaştırılıyor. Öğrenciler yaklaştırma sırasında olanları şu yargılarla açıklıyor.\nI. K ucu pozitif yüklenir.\nII. L ucu pozitif yüklenir.\nIII. Çubuk uzaklaştırılınca silindir yeniden nötr olur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "II ve III",
    "Yalnız I",
    "Yalnız II",
    "I ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters kurma: pozitif çubuk silindirdeki elektronları kendine doğru çeker; çubuğa yakın K ucu negatif olur. I yanlıştır.",
    "III’ü atlama: çubuk uzaklaşınca elektronlar eski yerlerine döner ve silindir yeniden nötr olur; III de doğrudur.",
    "Yönü ters kurma: I yanlıştır; pozitif çubuğa yakın K ucu negatif, uzak L ucu pozitif olur."
  ],
  "aciklama": "Etkiyle elektriklenmede yüklü cisim iletkene dokunmadan yaklaşınca iletkenin içindeki elektronlar yer değiştirir; yakın uç zıt, uzak uç aynı cins yüklenir.\nAdım 1 (I): Pozitif çubuk elektronları kendine çeker. Elektronlar K ucuna toplanır ve K ucu negatif olur. I yanlıştır.\nAdım 2 (II): K ucu elektron kazandığı için L ucunda elektron eksilir; L ucu pozitif olur. II doğrudur.\nAdım 3 (III): Çubuk uzaklaştırılınca elektronlar eski yerine döner ve silindir yine nötr olur. III doğrudur.\nSağlama: K ucundaki negatif yük, L ucundaki pozitif yüke eşittir; silindirin toplam yükü sıfırdır.\nSık yapılan hata: Yakın ucun yaklaşan cisimle aynı cins yüklendiğini sanmak.\nCevap A."
},
{
  "id": "fen-el-332",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yünlü halının üzerinde terlikle yürüyen Ece, metal kapı koluna dokunduğunda küçük bir çarpılma hissediyor. Ece’nin vücudundaki yük birikimi sürtünmeyle elektriklenme sonucu oluşmuştur.\n**Aşağıdaki olaylardan hangisinde yüklenme, Ece’dekiyle aynı elektriklenme çeşidiyle gerçekleşir?**",
  "gorsel": null,
  "secenekler": [
    "Yüklü bir çubuk yaklaştırılan nötr metal kutunun yakın yüzünde zıt yük toplanması",
    "Pozitif yüklü bir metal çubuğun nötr metal küreye değip küreyi yüklemesi",
    "Kuru saça sürtülen plastik tarağın negatif yüklenmesi",
    "Negatif yüklü bulutun altındaki yer yüzeyinin pozitif yüklenmesi"
  ],
  "dogru": 2,
  "hatalar": [
    "Etkiyi sürtünme sanma: çubuk kutuya değmez, kutudaki yükler yer değiştirir; bu etki ile elektriklenmedir.",
    "Dokunmayı sürtünme sanma: çubuk ile küre sürtünmez, birbirine değer; bu dokunma ile elektriklenmedir.",
    null,
    "Etkiyi sürtünme sanma: bulut yere değmeden yer yüzeyini yükler; bu etki ile elektriklenmedir."
  ],
  "aciklama": "Elektriklenme üç yolla olur: sürtünme (cisimler birbirine sürtülür), dokunma (yüklü cisim ile başka cisim birbirine değer) ve etki (yüklü cisim dokunmadan yaklaşır).\nAdım 1: Ece’nin yüklenmesi terliğin halıya sürtünmesiyle olur; yani sürtünme ile elektriklenmedir.\nAdım 2: Tarağın saça sürtülerek yüklenmesi de sürtünme ile elektriklenmedir.\nAdım 3: Yüklü çubuk yaklaştırılan kutu ve bulutun altındaki yer yüzeyi dokunma olmadan yüklendiği için etkiyle, çubuğun küreye değmesi ise dokunmayla elektriklenmedir.\nSağlama: Seçeneklerde \"sürtülen\" ifadesi geçen tek olay taraktır.\nSık yapılan hata: Yük birikimi gözlenen her olaya sürtünme demek.\nCevap C."
},
{
  "id": "fen-el-333",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Negatif yüklü bir plastik çubuk, yalıtkan iplerle asılı K, L ve M kürelerine sırayla yaklaştırılıyor. K küresi çubuktan uzaklaşıyor; L ve M küreleri ise çubuğa doğru hareket ediyor. Ayrıca L küresinin pozitif yüklü olduğu biliniyor. Öğrenciler şu yargıları ileri sürüyor.\nI. K negatif yüklüdür.\nII. M nötrdür.\nIII. M negatif yüklü olamaz.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur ama çubuğa çekilen M’nin negatif olamayacağını söyleyen III de doğrudur.",
    "Eksik değerlendirme: III doğrudur ama çubuktan itilen K’nin negatif olduğunu söyleyen I de doğrudur.",
    "Çekmeyi nötr için kesin sanma: M pozitif de olabilir, II kesin değildir. Üstelik I de doğrudur.",
    null
  ],
  "aciklama": "İtme aynı cins yükler arasında olur; çekme ise zıt cins yükler arasında ya da yüklü ile nötr cisim arasında görülür.\nAdım 1 (I): K çubuktan itiliyor; çubuk negatif olduğuna göre K de negatiftir. I doğrudur.\nAdım 2 (II): M çubuğa çekiliyor; M pozitif olabilir ya da nötr olabilir. Nötr olduğu kesin değildir. II kesin değildir.\nAdım 3 (III): M negatif olsaydı negatif çubuğu iterdi; çekildiğine göre negatif olamaz. III doğrudur.\nSağlama: L’nin pozitif olması sorunun cevabını etkilemez; yalnızca M’nin ne olabileceğini göstermek için verilmiştir.\nSık yapılan hata: Çekmeyi zıt yüklü olmanın kesin kanıtı saymak.\nCevap D."
},
{
  "id": "fen-el-334",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Nötr, metal bir K küresi yalıtkan sapından tutuluyor. Öğrenci, yüklü bir çubuk kullanarak K küresini negatif yüklemek istiyor.\n**Buna göre aşağıdaki işlemlerden hangisi K küresini negatif yükler?**",
  "gorsel": null,
  "secenekler": [
    "Negatif yüklü çubuğu K’ye dokundurup çekmek",
    "Pozitif yüklü çubuğu K’ye dokundurup çekmek",
    "Negatif yüklü çubuğu K’ye dokundurmadan yaklaştırıp uzaklaştırmak",
    "Pozitif yüklü çubuğu K’ye dokundurmadan yaklaştırıp uzaklaştırmak"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Dokunmada zıt yük sanma: pozitif çubuk K’den elektron çeker; K elektron kaybeder ve pozitif yüklenir.",
    "Etkide yük geçtiğini sanma: çubuk K’ye değmediği için K’ye elektron geçmez; çubuk uzaklaşınca K yeniden nötr olur.",
    "Etkide yük geçtiğini sanma: çubuk K’ye değmediği için K’den elektron çıkmaz; çubuk uzaklaşınca K nötr olur."
  ],
  "aciklama": "Dokunma ile elektriklenmede nötr cisim, yüklü cisimle aynı cins yüklenir. Etki ile elektriklenmede ise cisme yük girmez, yalnız yükler yer değiştirir.\nAdım 1: K’nin negatif yüklenmesi için elektron kazanması gerekir.\nAdım 2: Negatif yüklü çubuk K’ye dokundurulunca çubuktaki fazla elektronların bir kısmı K’ye geçer; K negatif yüklenir.\nAdım 3: Çubuk K’ye değmeden yaklaştırılırsa K’ye elektron girmez; çubuk uzaklaşınca K yine nötr olur.\nSağlama: Dokunmada çubuk ile K aynı cins yüklü olur; pozitif çubuk K’yi pozitif yükler.\nSık yapılan hata: Dokunmada zıt cins yüklenme olacağını sanmak.\nCevap A."
},
{
  "id": "fen-el-335",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen öğretmeni, öğrencilerden günlük hayatta karşılaştıkları olayları elektriklenmeyle ilişkilendirmelerini istiyor. Öğrencilerin verdiği olaylar şunlardır.\nI. Pusula ibresinin kuzeyi göstermesi\nII. Kuru saçı tarayan plastik tarağın saçları kendine çekmesi\nIII. Elektrostatik boyamada boya damlacıklarının nesneye yapışması\n**Buna göre bu olaylardan hangileri elektriklenmeyle açıklanır?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: II elektriklenmedir ama elektrostatik boyamada yüklü damlacıkların nesneye çekilmesi olan III de elektriklenmedir.",
    "Eksik değerlendirme: III elektriklenmedir ama sürtünmeyle yüklenen tarağın saçı çekmesi olan II de elektriklenmedir.",
    null,
    "Manyetizmayı elektriklenme sanma: pusula ibresi yer manyetik alanı nedeniyle hareket eder; yük alışverişiyle ilgisi yoktur."
  ],
  "aciklama": "Elektriklenme, cisimlerin elektron alıp vererek yüklenmesi ve yüklü cisimlerin etkileşmesidir.\nAdım 1 (I): Pusula ibresi, mıknatıs gibi yer manyetik alanına tepki verir; elektriklenme değildir.\nAdım 2 (II): Taraktaki sürtünmeyle biriken yük, saç tellerini çeker. Elektriklenmedir.\nAdım 3 (III): Boya damlacıkları yüklenir ve zıt yüklü nesneye çekilir. Elektriklenmedir.\nSağlama: Yalnızca II ve III’te yük birikmesi ve yüklü cisimlerin birbirine etkisi vardır.\nSık yapılan hata: Bir cismin başka bir cismi çekmesini hemen elektriklenme saymak; mıknatıs ve pusula çekimi yükle değil manyetizmayla ilgilidir.\nCevap C."
},
{
  "id": "fen-el-336",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir öğrenci, yalıtkan K, L, M ve N cisimlerini ikişer ikişer birbirine sürtüp hangi cismin negatif yüklendiğini tabloya yazıyor. Sürtünmeden önce bütün cisimler nötrdür.\n**Buna göre elektron verme eğilimi en fazla olan cisim ile en az olan cisim birbirine sürtülürse aşağıdakilerden hangisi gerçekleşir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Sürtünen cisimler</th><th>Negatif yüklenen cisim</th></tr><tr><td>K ve L</td><td>K</td></tr><tr><td>L ve N</td><td>N</td></tr><tr><td>M ve N</td><td>M</td></tr><tr><td>K ve M</td><td>M</td></tr></table>",
  "secenekler": [
    "L negatif, M pozitif yüklenir; elektronlar M’den L’ye geçer.",
    "L pozitif, M negatif yüklenir; elektronlar L’den M’ye geçer.",
    "L pozitif, M negatif yüklenir; elektronlar M’den L’ye geçer.",
    "L negatif, M pozitif yüklenir; elektronlar L’den M’ye geçer."
  ],
  "dogru": 1,
  "hatalar": [
    "Sıralamayı ters kurma: L, K ve N’ye elektron verdiği için elektron verme eğilimi en fazla olan cisimdir; L pozitif yüklenir.",
    null,
    "Elektron yönünü ters kurma: pozitif yüklenen L elektron kaybeder, elektronlar L’den M’ye geçer.",
    "Yük işaretini ters kurma: elektron veren L pozitif, elektron alan M negatif yüklenir."
  ],
  "aciklama": "Sürtünen iki cisimden elektron verme eğilimi fazla olan elektron verir ve pozitif yüklenir; diğeri elektron alır ve negatif yüklenir. Negatif yüklenen cisim, elektron verme eğilimi daha az olandır.\nAdım 1: K–L: K negatif olduğu için L elektron verendir, yani L > K. L–N: N negatif, L > N.\nAdım 2: M–N: M negatif, N > M. K–M: M negatif, K > M. Böylece L en başta, M en sondadır.\nAdım 3: L ile M sürtülünce L elektron verir ve pozitif, M elektron alır ve negatif yüklenir.\nSağlama: Sıralama L > K ve N > M biçimindedir; M, tabloda her sürtünmede negatif yüklenen tek cisimdir.\nSık yapılan hata: Negatif yüklenen cismi elektron veren sanmak.\nCevap B."
},
{
  "id": "fen-el-337",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kuru bir bezle sürtülen plastik kalemin masadaki nötr ince kâğıt şeritlerini kendine çektiğini gören Mina, nedenini şu yargılarla açıklıyor.\nI. Kalem ile bez aynı cins yüklenmiştir.\nII. Kâğıt şeritler, kalemle zıt cins yüklüdür.\nIII. Kâğıt şeritler nötr olduğu hâlde yüklü kalem tarafından çekilebilir.\n**Buna göre Mina’nın yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "Yalnız III"
  ],
  "dogru": 3,
  "hatalar": [
    "Sürtünmede aynı cins sanma: sürtünen kalem ile bez zıt cins yüklenir; I yanlıştır.",
    "Nötr cismi yüklü sanma: kâğıt şeritler sürtünmeye katılmadığı için nötrdür, zıt cins yüklü değildir. II yanlıştır.",
    "Hem sürtünmeyi hem şeritlerin durumunu yanlış yorumlama: I ve II yanlıştır; şeritler nötrdür ve kalem tarafından çekilir.",
    null
  ],
  "aciklama": "Yüklü bir cisim, nötr hafif cisimleri de kendine çeker; çünkü nötr cismin yakın yüzünde zıt cins yük toplanır.\nAdım 1 (I): Sürtünen kalem ile bez zıt cins yüklenir. Aynı cins yüklenmediği için I yanlıştır.\nAdım 2 (II): Kâğıt şeritler baştan beri nötrdür; kalemle sürtünmemiştir. Zıt cins yüklü olduğu söylenemez. II yanlıştır.\nAdım 3 (III): Yüklü kalem yaklaşınca şeritlerdeki yükler yer değiştirir ve şeritler çekilir. Nötr olması çekilmelerine engel değildir. III doğrudur.\nSağlama: Şeritler kaleme değmeden çekilmektedir; bu yük aktarımı değil yük yer değiştirmesidir.\nSık yapılan hata: Çekilen her cismin yüklü olduğunu sanmak.\nCevap D."
},
{
  "id": "fen-el-338",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Başlangıçta nötr olan, yalıtkan K ve L cisimleriyle bir işlem yapılıyor. İşlem sonunda cisimler birbirinden ayrı duruyor; K’nin pozitif, L’nin negatif yüklü olduğu görülüyor.\n**Buna göre bu sonuç aşağıdaki işlemlerden hangisiyle elde edilmiş olabilir?**",
  "gorsel": "<svg viewBox=\"0 0 300 120\" role=\"img\" aria-label=\"İşlem sonunda K cismi pozitif, L cismi negatif yüklüdür\"><circle cx=\"90\" cy=\"50\" r=\"28\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"59\" text-anchor=\"middle\" font-size=\"26\" fill=\"currentColor\">+</text><circle cx=\"210\" cy=\"50\" r=\"28\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"26\" fill=\"currentColor\">−</text><text x=\"90\" y=\"106\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"210\" y=\"106\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text></svg>",
  "secenekler": [
    "K ile L birbirine dokundurulup ayrılmış; elektronlar L’den K’ye geçmiştir.",
    "K ile L birbirine dokundurulup ayrılmış; elektronlar K’den L’ye geçmiştir.",
    "K ile L birbirine sürtülüp ayrılmış; elektronlar L’den K’ye geçmiştir.",
    "K ile L birbirine sürtülüp ayrılmış; elektronlar K’den L’ye geçmiştir."
  ],
  "dogru": 3,
  "hatalar": [
    "Dokunmayla yüklenme sanma: iki nötr cisim dokunduğunda yük geçişi olmaz. Üstelik L’den K’ye elektron geçseydi K pozitif değil negatif olurdu.",
    "Dokunmayla yüklenme sanma: iki nötr cisim birbirine dokunduğunda aralarında yük geçişi olmaz, ikisi de nötr kalır. Yük ayrışması sürtünmeyle olur.",
    "Elektron yönünü ters kurma: elektron alan cisim negatif yüklenir. K pozitif olduğuna göre K elektron vermiştir; elektronlar K’den L’ye geçmiştir.",
    null
  ],
  "aciklama": "Sürtünmede iki nötr cisimden biri elektron verip pozitif, öteki elektron alıp negatif yüklenir. Dokunma ile elektriklenmede ise yüklü bir cisim gerekir; iki nötr cismin dokunması yük oluşturmaz.\nAdım 1: K pozitif olduğuna göre K elektron kaybetmiştir; L negatif olduğuna göre elektron kazanmıştır. Elektronlar K’den L’ye geçmiştir.\nAdım 2: Başlangıçta ikisi de nötr olduğu için birbirine dokundurmak elektron geçişi başlatmaz. Zıt yüklerin ortaya çıkması sürtünmeyle olur.\nAdım 3: Hem sürtünmeyi hem K’den L’ye elektron geçişini veren şık doğrudur.\nSağlama: K’nin kaybettiği elektron sayısı L’nin kazandığı elektron sayısına eşit olduğundan toplam yük yine sıfırdır.\nSık yapılan hata: Pozitif yüklenen cismin elektron aldığını sanmak.\nCevap D."
},
{
  "id": "fen-el-339",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan ipe asılı bir L küresinin yük durumu araştırılıyor. Negatif yüklü bir çubuk L küresine yaklaştırıldığında küre çubuğa doğru hareket ediyor. Aynı L küresi, nötr küçük kâğıt parçalarına yaklaştırıldığında parçaları kendine çekiyor.\nI. L negatif yüklüdür.\nII. L pozitif yüklüdür.\nIII. L nötrdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız I",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Çubukla aynı cinste sanma: negatif L, negatif çubuğu iterdi; L çubuğa çekildiğine göre negatif değildir.",
    "Nötr cismin yüklü gibi davrandığını sanma: nötr bir L, nötr kâğıt parçalarını çekemez; kâğıdı çekmesi L’nin yüklü olduğunu gösterir.",
    "I’i de doğru sanma: negatif çubuk tarafından çekilen L negatif olamaz; yalnızca II doğrudur."
  ],
  "aciklama": "Yalnızca yüklü bir cisim nötr kâğıt parçalarını çekebilir. Çubuğun çekmesi ise karşıdaki cismin zıt cins yüklü ya da nötr olduğunu gösterir.\nAdım 1: Negatif çubuk L’yi çekiyor. Negatif olsaydı L itilirdi; bu yüzden L pozitif ya da nötrdür.\nAdım 2: L nötr kâğıt parçalarını çekiyor. Nötr bir cisim kâğıdı çekemez, yani L yüklüdür.\nAdım 3: Hem \"pozitif ya da nötr\" hem \"yüklü\" olabilen tek durum pozitif olmaktır. II doğru, I ve III yanlıştır.\nSağlama: Pozitif L hem negatif çubuğu çeker hem de nötr kâğıt parçalarını çeker; iki gözlem birlikte uyar.\nSık yapılan hata: Yalnızca bir gözlemle karar verip iki gözlemi birleştirmemek.\nCevap A."
},
{
  "id": "fen-el-340",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kış aylarında Selim, her sabah aynı yün kazağı çıkarırken duyduğu çıtırtıyı not ediyor ve odanın nem oranını da ölçüyor. Sonuçlar tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Gün</th><th>Odadaki nem oranı</th><th>Çıtırtı</th></tr><tr><td>1</td><td>%25</td><td>Çok güçlü</td></tr><tr><td>2</td><td>%45</td><td>Zayıf</td></tr><tr><td>3</td><td>%65</td><td>Çok zayıf</td></tr><tr><td>4</td><td>%85</td><td>Hiç duyulmadı</td></tr></table>",
  "secenekler": [
    "Nem arttıkça sürtünen cisimler daha çok yüklenir ve çıtırtı güçlenir.",
    "Nem, çıtırtının duyulması için gereken ilk koşuldur.",
    "Nem arttıkça biriken yük havaya kaçar ve çıtırtı zayıflar.",
    "Nem arttıkça yük havaya kaçar; bu yüzden kazak ile saç aynı cins yüklenir."
  ],
  "dogru": 2,
  "hatalar": [
    "Nemi artırıcı sanma: tabloda nem arttıkça çıtırtı zayıflıyor; nem yüklenmeyi artırmaz, azaltır.",
    "Nemi koşul sanma: çıtırtı en çok nem oranı düşükken duyuluyor; nem çıtırtıya engel olur.",
    null,
    "Nedeni doğru, sonucu yanlış kurma: yük havaya kaçınca yüklenme azalır; sürtünen cisimlerin cinsi nemle değişmez, yine zıt cinstir."
  ],
  "aciklama": "Nem, yükü havaya kaçırır; bu yüzden elektriklenme olayları kuru havada daha belirgindir.\nAdım 1: Tabloda nem oranı %25'ten %85'e çıkarken çıtırtı çok güçlüden hiç duyulmamaya düşüyor.\nAdım 2: Çıtırtı, kazakta biriken yükün boşalmasıyla oluşur. Çıtırtı azaldıysa biriken yük azalmıştır.\nAdım 3: Nemli havada yük havaya kaçtığı için kazakta yük birikemez ve çıtırtı zayıflar.\nSağlama: Nem arttıkça çıtırtı azalıyor; yani nem ile yük birikimi ters orantılı değişiyor.\nSık yapılan hata: Nemin elektriklenmeyi artırdığını sanmak.\nCevap C."
},
{
  "id": "fen-el-341",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan ayak üzerindeki nötr metal silindirin sol ucu K, sağ ucu L ile gösterilmiştir. Negatif yüklü bir balon, silindirin sağ tarafından dokunmadan yaklaştırılıyor.\n**Buna göre K ve L uçlarının yükleri ile silindirin hareketi aşağıdakilerden hangisinde doğru verilmiştir?**",
  "gorsel": "<svg viewBox=\"0 0 400 150\" role=\"img\" aria-label=\"Soldaki nötr metal silindirin sağına, dokunmadan negatif yüklü bir balon yaklaştırılmıştır\"><rect x=\"30\" y=\"40\" width=\"130\" height=\"44\" rx=\"16\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"58\" y=\"69\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">K</text><text x=\"132\" y=\"69\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">L</text><line x1=\"95\" y1=\"84\" x2=\"95\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"65\" y1=\"108\" x2=\"125\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"95\" y=\"134\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Nötr metal silindir</text><ellipse cx=\"300\" cy=\"62\" rx=\"40\" ry=\"48\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"282\" y=\"66\" text-anchor=\"middle\" font-size=\"24\" fill=\"currentColor\">−</text><text x=\"318\" y=\"66\" text-anchor=\"middle\" font-size=\"24\" fill=\"currentColor\">−</text><text x=\"300\" y=\"92\" text-anchor=\"middle\" font-size=\"24\" fill=\"currentColor\">−</text><text x=\"300\" y=\"140\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Negatif yüklü balon</text><line x1=\"165\" y1=\"62\" x2=\"255\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text x=\"210\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">dokunma yok</text></svg>",
  "secenekler": [
    "K negatif, L pozitif olur; silindir balondan uzaklaşır.",
    "K negatif, L pozitif olur; silindir balona doğru çekilir.",
    "K pozitif, L negatif olur; silindir balona doğru çekilir.",
    "K pozitif, L negatif olur; silindir balondan uzaklaşır."
  ],
  "dogru": 1,
  "hatalar": [
    "Yüklü cismin nötr cismi ittiğini sanma: yakın uç L zıt cins yüklendiği için çekim itmeye baskın gelir; silindir balona doğru çekilir.",
    null,
    "Yönü ters kurma: negatif balon elektronları kendinden uzağa, yani K ucuna iter; yakın uç L pozitif olur.",
    "Yönü ters kurma ve itme sanma: yakın uç L pozitif olur, silindir balona doğru çekilir."
  ],
  "aciklama": "Etkiyle elektriklenmede yakın uç, yaklaşan cismin zıt cinsiyle; uzak uç ise aynı cinsiyle yüklenir. Yakın uç daha yakın olduğu için çekim itmeye baskın gelir.\nAdım 1: Negatif balon, silindirdeki elektronları kendinden uzağa, yani sol uca (K) doğru iter.\nAdım 2: K elektron kazanıp negatif, balona yakın L ucu elektron kaybedip pozitif olur.\nAdım 3: Balona yakın L ucu pozitif olduğu için balon tarafından çekilir; çekim, uzaktaki negatif K ucunun itmesinden büyüktür. Silindir balona doğru hareket eder.\nSağlama: Silindirin toplam yükü hâlâ sıfırdır; yalnızca yükler yer değiştirmiştir.\nSık yapılan hata: Yüklü cismin nötr bir cismi ittiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-342",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Pozitif yüklü bir çubuk, yalıtkan iplerle asılı K ve L kürelerine ayrı ayrı yaklaştırıldığında K küresi çubuğa doğru, L küresi ise çubuktan uzağa hareket ediyor. Daha sonra K ve L küreleri birbirine yaklaştırılıyor.\n**Buna göre K ve L kürelerinin birbirine etkisiyle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Birbirlerini kesinlikle çekerler.",
    "Birbirlerini kesinlikle iterler.",
    "Yalnızca L, K’yi çeker; K, L’yi etkilemez.",
    "K nötr ise etkileşim olmaz, negatif ise çekim olur."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Aynı cins sanma: K çubuk tarafından çekildiği için pozitif değildir; pozitif L ile aynı cins olamaz, itme görülmez.",
    "Kuvveti tek yönlü sanma: kuvvet karşılıklıdır; L, K’yi çekiyorsa K da L’yi çeker.",
    "Nötr cismi etkisiz sanma: yüklü L, nötr K’yi de çeker; K nötr olsa da çekim görülür."
  ],
  "aciklama": "İtme aynı cins yükler arasında olur; yüklü cisim nötr cismi çeker; kuvvet her zaman karşılıklıdır.\nAdım 1: L, pozitif çubuktan itiliyor; bu yüzden L pozitif yüklüdür.\nAdım 2: K, pozitif çubuğa çekiliyor; K negatif ya da nötrdür. K pozitif olamaz.\nAdım 3: Pozitif L, negatif K’yi çeker; nötr K’yi de çeker. Her iki durumda da K ile L birbirini çeker.\nSağlama: K’nin yükü bilinmese de sonuç değişmez; bu yüzden çekme kesindir.\nSık yapılan hata: K nötr olursa hiç etkileşme olmayacağını sanmak.\nCevap A."
},
{
  "id": "fen-el-343",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir öğrenci, günlük hayattaki olayları elektriklenme çeşitleriyle eşleştiriyor.\nI. Montu çıkarırken çıtırtı duyulması: sürtünme ile elektriklenme\nII. Pozitif yüklü bir çubuğun nötr metal küreye değerek küreyi yüklemesi: dokunma ile elektriklenme\nIII. Negatif yüklü bir çubuk yaklaştırılan nötr silindirin uçlarının zıt yüklenmesi: dokunma ile elektriklenme\n**Buna göre öğrencinin eşleştirmelerinden hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II’yi atlama: çubuk küreye değerek yük verdiği için II de doğrudur.",
    null,
    "Etkiyi dokunma sanma: III’te çubuk silindire değmiyor, bu etki ile elektriklenmedir. Ayrıca I de doğrudur.",
    "Etkiyi dokunma sanma: III’te çubuk silindire değmediği için eşleştirme yanlıştır; doğrusu etki ile elektriklenmedir."
  ],
  "aciklama": "Sürtünmede cisimler birbirine sürtülür, dokunmada yüklü cisim ile başka cisim birbirine değer, etkide ise yüklü cisim dokunmadan yaklaştırılır.\nAdım 1 (I): Kazak ve montun sürtünmesiyle yük birikir; sürtünme ile elektriklenmedir. I doğrudur.\nAdım 2 (II): Çubuk küreye değiyor ve küreyi yüklüyor; dokunma ile elektriklenmedir. II doğrudur.\nAdım 3 (III): Çubuk silindire dokunmuyor; yükler yalnızca silindirin içinde yer değiştiriyor. Bu etki ile elektriklenmedir, yani III yanlıştır.\nSağlama: \"Dokunmadan yaklaştırma\" ifadesi geçen yerde etki aranır.\nSık yapılan hata: Yaklaştırılan yüklü cisim nötr cismi yüklüyor sanıp olayı dokunmaya bağlamak.\nCevap B."
},
{
  "id": "fen-el-344",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen laboratuvarında plastik bir cetvelin yalnızca bir ucu yünlü kumaşa sürtülüyor. Cetvel nötr kâğıt parçalarına yaklaştırıldığında yalnızca sürtülen uç parçaları çekiyor; sürtülmeyen uç ise parçaları çekmiyor.\n**Buna göre bu gözlemin nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Plastik bir iletkendir; elektronlar yalnızca sürtülen noktada toplanır.",
    "Plastik bir iletkendir; protonlar sürtülen noktada yerinde kalır ve cetveli yükler.",
    "Plastik bir yalıtkandır; sürtünmeyle protonlar sürtülen noktaya geçer.",
    "Plastik bir yalıtkandır; elektronlar rahat hareket edemediği için yük sürtülen yerde kalır."
  ],
  "dogru": 3,
  "hatalar": [
    "Plastiği iletken sanma: iletkende elektronlar rahatça hareket eder ve cismin her yerine yayılır; plastik ise yalıtkandır.",
    "Plastiği iletken sanma ve protonları yük taşıyıcı sayma: plastik yalıtkandır ve elektriklenmede protonlar cisimler arasında geçmez.",
    "Protonların geçtiğini sanma: elektriklenmede yer değiştiren yalnızca elektronlardır, protonlar çekirdekte kalır.",
    null
  ],
  "aciklama": "İletken maddelerde elektronlar rahatça hareket eder; yalıtkan maddelerde hareket edemez. Yalıtkanda yük, sürtünen yerde kalır.\nAdım 1: Plastik cetvel yalıtkandır. Sürtünme sırasında elektron alışverişi yalnızca sürtülen bölgede olur.\nAdım 2: Yalıtkanda elektronlar cetvelin öbür ucuna doğru akamaz; yük sürtülen yerde kalır.\nAdım 3: Yalnızca sürtülen uç yüklü olduğu için yalnızca o uç nötr kâğıt parçalarını çeker.\nSağlama: Cetvel metal olsaydı elektronlar tüm cetvele yayılırdı.\nSık yapılan hata: Plastiği iletken sanmak ya da protonların hareket ettiğini düşünmek.\nCevap D."
},
{
  "id": "fen-el-345",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübü öğrencileri, televizyon ve bilgisayar ekranlarının çabuk tozlandığını fark ediyor. Ekran çalışırken yüzeyi yüklenir ve havadaki nötr toz tanecikleri ekrana doğru çekilir. Öğrenciler şu yargıları yazıyor.\nI. Yüklü ekran, nötr toz taneciklerini kendine çekebilir.\nII. Toz tanecikleri, ancak ekranla zıt cins yüklüyse ekrana çekilir.\nIII. Ekranın yükü pozitif de olsa negatif de olsa nötr tozlar ekrana çekilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "III’ü atlama: yüklü ekran, yükünün işaretinden bağımsız olarak nötr tozu çeker; III de doğrudur.",
    "Çekmeyi hep zıt yük sanma: nötr toz tanecikleri de yüklü cisim tarafından çekilir; tozun yüklü olması gerekmez. II yanlıştır.",
    null,
    "Çekmeyi hep zıt yük sanma: II yanlıştır, çünkü nötr toz tanecikleri de yüklü ekran tarafından çekilir; I ise doğrudur."
  ],
  "aciklama": "Yüklü bir cisim nötr cismi de çeker; çünkü nötr cismin yüklü cisme yakın yüzünde zıt cins yük toplanır. Bu çekim, yüklü cismin pozitif ya da negatif olmasına bağlı değildir.\nAdım 1 (I): Yüklü ekran, nötr toz taneciklerini kendine çeker. I doğrudur.\nAdım 2 (II): Çekilmek için tozun yüklü olması gerekmez; nötr toz da çekilir. II yanlıştır.\nAdım 3 (III): Ekran pozitifse tozdaki elektronlar ekrana yakın yüze, negatifse uzak yüze toplanır. İki durumda da yakın yüz ekrana zıt cins yüklenir ve çekim olur. III doğrudur.\nSağlama: Ekranın yükü hangi işaretli olursa olsun, tozun yakın yüzü ona zıt cins yüklenir.\nSık yapılan hata: Çekilen her cismin yüklü olduğunu sanmak.\nCevap C."
},
{
  "id": "fen-el-346",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekilde K, L, M ve N cisimlerindeki yük taneciklerinin sayısı gösterilmiştir. Artı işaretleri protonları, eksi işaretleri elektronları temsil etmektedir.\n**Bu cisimlerden ikisi birbirine yaklaştırıldığında birbirini iten ikili aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 496 160\" role=\"img\" aria-label=\"K, L, M ve N cisimlerindeki proton ve elektron sayıları\"><circle cx=\"62\" cy=\"70\" r=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"62\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"62\" y=\"88\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − −</text><circle cx=\"186\" cy=\"70\" r=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"186\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"186\" y=\"88\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − − − −</text><circle cx=\"310\" cy=\"70\" r=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"310\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"310\" y=\"88\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−</text><circle cx=\"434\" cy=\"70\" r=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"434\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"434\" y=\"88\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − − −</text><text x=\"62\" y=\"144\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"186\" y=\"144\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text><text x=\"310\" y=\"144\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><text x=\"434\" y=\"144\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">N</text></svg>",
  "secenekler": [
    "K ile L",
    "L ile M",
    "L ile N",
    "K ile M"
  ],
  "dogru": 2,
  "hatalar": [
    "Nötr cismi iter sanma: K’de proton ve elektron sayısı eşit olduğu için K nötrdür; yüklü L, nötr K’yi çeker, itmez.",
    "Zıt yükleri iter sanma: L’de elektron fazla (negatif), M’de proton fazla (pozitif); zıt cins yüklü olduklarından birbirini çeker.",
    null,
    "Nötr cismi iter sanma: K nötrdür, pozitif M onu çeker; itme için ikisinin de yüklü ve aynı cins olması gerekir."
  ],
  "aciklama": "Elektron sayısı proton sayısından fazla olan cisim negatif, az olan cisim pozitif yüklüdür; sayılar eşitse cisim nötrdür. Aynı cins yükler iter.\nAdım 1: K’de 3 proton, 3 elektron var; nötrdür. L’de 3 proton, 5 elektron var; negatiftir.\nAdım 2: M’de 3 proton, 1 elektron var; pozitiftir. N’de 3 proton, 4 elektron var; negatiftir.\nAdım 3: İtme için iki cismin de yüklü ve aynı cins olması gerekir. Negatif olan tek ikili L ile N’dir.\nSağlama: K nötr olduğu için herkesi çeker; L ile M zıt cinstir ve çeker.\nSık yapılan hata: Nötr cismi yüksüz sayıp yüklü cisimlerin onu da itebileceğini sanmak.\nCevap C."
},
{
  "id": "fen-el-347",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Negatif yüklü bir çubuk, yalıtkan saplı nötr bir metal küreye önce dokunmadan yaklaştırılıyor. Sonra çubuk küreye dokundurulup uzaklaştırılıyor. Öğrenciler şu yargıları ileri sürüyor.\nI. Yaklaştırma sırasında küre negatif yüklenir.\nII. Dokunma anında elektronlar küreden çubuğa geçer.\nIII. Çubuk uzaklaştırıldıktan sonra küre negatif yüklüdür.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız III",
    "Yalnız I",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Etkide yük girdiğini sanma: çubuk küreye değmeden yaklaşırken küreye elektron girmez, küre toplamda nötr kalır. I yanlıştır.",
    "Yönü ve etkiyi yanlış kurma: yaklaştırmada küre yüklenmez, dokunmada da elektronlar çubuktan küreye geçer. I ve II yanlıştır.",
    "Elektron yönünü ters kurma: negatif çubukta fazla elektron vardır, dokunma anında elektronlar çubuktan küreye geçer. II yanlıştır."
  ],
  "aciklama": "Etkide yükler yalnız yer değiştirir; dokunmada ise yüklü cisimden nötr cisme elektron geçer ve ikisi aynı cins yüklenir.\nAdım 1 (I): Yaklaştırma sırasında çubuk küreye değmez. Küre toplamda nötr kalır; yakın ucu pozitif, uzak ucu negatif olur. I yanlıştır.\nAdım 2 (II): Çubuk negatif yüklüdür, elektron fazlası vardır. Dokunma anında elektronlar çubuktan küreye geçer. II yanlıştır.\nAdım 3 (III): Küre elektron kazandığı için negatif yüklenir ve çubuk uzaklaşsa da bu yük kürede kalır. III doğrudur.\nSağlama: Dokunmadan sonra küre ile çubuk aynı cins, yani negatif yüklüdür.\nSık yapılan hata: Yaklaştırmayı da yüklenme sanmak.\nCevap A."
},
{
  "id": "fen-el-348",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen öğretmeni, kış gününde kazağını çıkarırken çıtırtı duyan bir öğrencinin yaşadığı olayı, fırtınalı havada gökyüzünde çakan şimşekle karşılaştırıyor. Öğretmen iki olayın da yük hareketiyle ilgili olduğunu belirtiyor.\n**Buna göre bu iki olayın ortak özelliği aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "İkisinde de yük boşalmasına protonların yer değiştirmesi neden olur.",
    "İkisinde de yük boşalması yalnızca bulut ile yer yüzeyi arasında olur.",
    "İkisinde de yük birikimi nemli havada kuru havadan daha fazla olur.",
    "İkisinde de biriken yükler ani biçimde boşalır; ışık ve ses oluşur."
  ],
  "dogru": 3,
  "hatalar": [
    "Protonları hareketli sanma: elektriklenmede ve boşalmada yer değiştiren yalnızca elektronlardır; protonlar çekirdekte kalır.",
    "Her boşalmayı bulut-yer olayı sanma: şimşek bulutlar arasında da olur; kazak çıtırtısının ise bulutla ilgisi yoktur.",
    "Nemi artırıcı sanma: nem yükü havaya kaçırır; kazakta yük birikimi kuru havada daha fazladır.",
    null
  ],
  "aciklama": "Yük boşalması, biriken zıt yüklerin ani biçimde birbirini dengelemesidir. Boşalma sırasında ışık (kıvılcım, şimşek) ve ses (çıtırtı, gök gürültüsü) oluşur.\nAdım 1: Kazak çıkarırken sürtünen kumaşlarda yük birikir; bu yükler boşalırken kıvılcım ve çıtırtı oluşur.\nAdım 2: Bulutlarda biriken zıt yükler boşalırken şimşek (ışık) ve gök gürültüsü (ses) oluşur.\nAdım 3: Ortak özellik, biriken yüklerin ani boşalması ve bu sırada ışık ile ses oluşmasıdır. Yer değiştiren tanecikler protonlar değil elektronlardır; şimşek bulutlar arasında da olur; nem yükü havaya kaçırdığı için birikim kuru havada daha fazladır.\nSağlama: Kıvılcım ve çıtırtı ile şimşek ve gök gürültüsü, aynı iki ürünü verir: ışık ve ses.\nSık yapılan hata: Kazak çıtırtısını ve şimşeği birbirinden bağımsız, farklı nitelikte olaylar sanmak.\nCevap D."
},
{
  "id": "fen-el-349",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinin yük durumları araştırılıyor. Küreler ikişer ikişer yaklaştırıldığında gözlemler tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini çekiyor</td></tr><tr><td>L – M</td><td>Birbirini çekiyor</td></tr><tr><td>K – M</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": [
    "L kesinlikle hem K’ye hem M’ye zıt cins yüklüdür.",
    "K ile M kesinlikle aynı cins yüklüdür.",
    "L kesinlikle K ile aynı cins yüklüdür.",
    "K ile M kesinlikle zıt cins yüklüdür."
  ],
  "dogru": 1,
  "hatalar": [
    "Çekmeyi zıt yük sanma: yüklü K ve M, nötr L’yi de çeker; L’nin zıt cins yüklü olması kesin değildir.",
    null,
    "Çekmeyi aynı cins sanma: aynı cins yükler iter; L, K’yi çektiği için K ile aynı cins olamaz.",
    "İtmeyi zıt cins sanma: K ile M birbirini ittiğine göre aynı cins yüklüdür."
  ],
  "aciklama": "İtme, iki cismin de yüklü ve aynı cins olduğunu gösterir. Çekme ise zıt cinste olmayı ya da yüklü-nötr çiftini gösterir.\nAdım 1: K ile M birbirini itiyor; bu yüzden ikisi de yüklüdür ve aynı cinstir.\nAdım 2: L, hem K’yi hem M’yi çekiyor. L zıt cins yüklü olabilir ya da nötr olabilir; hangisi olduğu kesin değildir.\nAdım 3: L, K ile aynı cins olsaydı K’yi iterdi; L çekiyorsa K ile aynı cins olamaz. Ancak sorulan, kesinlikle doğru olandır: kesin olan yalnızca K ile M’nin aynı cins yüklü olmasıdır.\nSağlama: L nötr olsaydı da tablodaki gözlemler aynı çıkardı.\nSık yapılan hata: Çekmeyi görünce karşıdaki cismin zıt yüklü olduğunu sanmak.\nCevap B."
},
{
  "id": "fen-el-350",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Çamaşır kurutma makinesinden çıkan sentetik giysilerin birbirine yapıştığını gören Aylin, olayı araştırıp şu yargıları yazıyor.\nI. Giysiler makinede dönerken birbirine sürtünerek yüklenir.\nII. Birbirine yapışan iki giysi aynı cins yüklüdür.\nIII. Birbirine yapışan iki giysiden biri nötr olamaz.\n**Buna göre Aylin’in yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Aynı cinsi çeker sanma: aynı cins yükler birbirini iter; yapışma zıt cins yük ya da yüklü-nötr çiftinde olur.",
    "II’yi doğru sanma: aynı cins yüklü giysiler birbirini iterdi, yapışmazdı. II yanlıştır.",
    "Yüklü-nötr çiftini unutma: yüklü bir giysi nötr giysiyi de çeker, yani yapışan giysilerden biri nötr olabilir. III yanlıştır."
  ],
  "aciklama": "Sürtünmeyle yüklenen cisimler zıt cins yüklenir; zıt cins yükler birbirini çeker. Yüklü cisim ise nötr cismi de çeker.\nAdım 1 (I): Makinedeki giysiler birbirine sürtünerek elektron alıp verir ve yüklenir. I doğrudur.\nAdım 2 (II): Yapışma çekme demektir. Aynı cins yükler iter, bu yüzden yapışan giysiler aynı cins olamaz. II yanlıştır.\nAdım 3 (III): Yüklü bir giysi nötr bir giysiyi de çeker. Yapışan iki giysiden biri nötr olabilir. III yanlıştır.\nSağlama: Yapışma, iki giysinin de yüklü olduğunu göstermez; zıt cinsi ya da yüklü-nötr çiftini gösterir.\nSık yapılan hata: Yapışmayı aynı cins yüklenmeye ya da iki giysinin de yüklü olmasına bağlamak.\nCevap A."
},
{
  "id": "fen-el-351",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekilde nötr X ve Y cisimlerinin birbirine sürtülmeden önceki ve sürtüldükten sonraki hâli gösterilmiştir. Artı işaretleri protonları, eksi işaretleri elektronları temsil etmektedir.\n**Buna göre bu sürtünmeyle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 480 190\" role=\"img\" aria-label=\"X ve Y cisimlerinin sürtünmeden önceki ve sonraki proton ve elektron sayıları\"><circle cx=\"58\" cy=\"80\" r=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"58\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"58\" y=\"98\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − −</text><circle cx=\"162\" cy=\"80\" r=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"162\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"162\" y=\"98\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − −</text><line x1=\"215\" y1=\"80\" x2=\"255\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"255,72 270,80 255,88\" fill=\"currentColor\"/><circle cx=\"318\" cy=\"80\" r=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"318\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"318\" y=\"98\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−</text><circle cx=\"422\" cy=\"80\" r=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"422\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">+ + +</text><text x=\"422\" y=\"98\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">− − − − −</text><text x=\"58\" y=\"150\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">X</text><text x=\"162\" y=\"150\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Y</text><text x=\"318\" y=\"150\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">X</text><text x=\"422\" y=\"150\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Y</text><text x=\"110\" y=\"180\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sürtünmeden önce</text><text x=\"370\" y=\"180\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sürtünmeden sonra</text></svg>",
  "secenekler": [
    "X negatif yüklenmiştir; iki elektron Y’den X’e geçmiştir.",
    "X pozitif yüklenmiştir; iki proton X’ten Y’ye geçmiştir.",
    "X pozitif yüklenmiştir; iki elektron Y’den X’e geçmiştir.",
    "X pozitif yüklenmiştir; iki elektron X’ten Y’ye geçmiştir."
  ],
  "dogru": 3,
  "hatalar": [
    "Yük işaretini ters okuma: X’te elektron sayısı proton sayısından azdır, yani X pozitif yüklenmiştir.",
    "Protonların geçtiğini sanma: protonlar çekirdekte durur; şekilde proton sayıları değişmemiştir, değişen elektron sayılarıdır.",
    "Elektron yönünü ters kurma: X’in elektron sayısı azalmıştır, yani elektronlar X’ten Y’ye geçmiştir.",
    null
  ],
  "aciklama": "Elektron sayısı proton sayısından az olan cisim pozitif, fazla olan cisim negatif yüklüdür. Sürtünmede yalnızca elektronlar geçer.\nAdım 1: Sürtünmeden önce X ve Y’de 3 proton, 3 elektron vardır; ikisi de nötrdür.\nAdım 2: Sürtünmeden sonra X’te 3 proton, 1 elektron vardır; X’ten iki elektron ayrılmış ve X pozitif olmuştur.\nAdım 3: Y’de 3 proton, 5 elektron vardır; iki elektron kazanan Y negatiftir. Elektronlar X’ten Y’ye geçmiştir.\nSağlama: Verilen iki elektron kadar elektron alınmıştır; proton sayıları değişmemiştir ve toplam yük yine sıfırdır.\nSık yapılan hata: Pozitif yüklenen cismin proton aldığını sanmak.\nCevap D."
},
{
  "id": "fen-el-352",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı P, R ve S kürelerine önce negatif yüklü, sonra pozitif yüklü bir çubuk yaklaştırılıyor. Küre çubuğa doğru hareket ediyorsa “çekiliyor”, çubuktan uzaklaşıyorsa “itiliyor” olarak tabloya yazılıyor. Öğrenciler tabloya bakarak şu yargıları yazıyor.\nI. P pozitif yüklüdür.\nII. R negatif yüklüdür.\nIII. S pozitif yüklüdür.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>Negatif çubuk yaklaşınca</th><th>Pozitif çubuk yaklaşınca</th></tr><tr><td>P</td><td>Çekiliyor</td><td>Çekiliyor</td></tr><tr><td>R</td><td>İtiliyor</td><td>Çekiliyor</td></tr><tr><td>S</td><td>Çekiliyor</td><td>İtiliyor</td></tr></table>",
  "secenekler": [
    "Yalnız II",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "III’ü atlama: pozitif çubuk S’yi ittiğine göre S pozitiftir; III de doğrudur.",
    "Nötr ihtimalini unutma: P’yi iki çubuk da çektiği için P pozitif olamaz, nötrdür. I yanlıştır.",
    null,
    "Nötr ihtimalini unutma: P’yi hem pozitif hem negatif çubuk çektiği için P nötrdür; I yanlıştır."
  ],
  "aciklama": "İtme, itilen cismin çubukla aynı cins yüklü olduğunu kesin olarak gösterir. Hem pozitif hem negatif çubuğun çektiği cisim ise nötrdür.\nAdım 1 (P): İki çubuk da P’yi çekiyor. P pozitif olsaydı pozitif çubuğu iterdi, negatif olsaydı negatif çubuğu iterdi. P nötrdür; I yanlıştır.\nAdım 2 (R): Negatif çubuk R’yi itiyor; R negatiftir. Pozitif çubuğun R’yi çekmesi de bununla uyumludur. II doğrudur.\nAdım 3 (S): Pozitif çubuk S’yi itiyor; S pozitiftir. Negatif çubuğun S’yi çekmesi de uyumludur. III doğrudur.\nSağlama: P nötr, R negatif, S pozitiftir; tablodaki altı gözlemin hepsi bu sonuçla açıklanır.\nSık yapılan hata: İki çubuğun da çektiği cismi yüklü sanmak.\nCevap C."
},
{
  "id": "fen-el-353",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Etki ile elektriklenme konusunu çalışan bir öğrenci, dokunmadan yaklaştırılan yüklü bir çubuk ve nötr bir metal küre için not alıyor.\n**Bu notlardan hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Kürenin elektron sayısı da proton sayısı da değişmez; küre toplamda nötr kalır.",
    "Çubuk küreye dokunmadığı hâlde çubuktan küreye elektron geçer.",
    "Çubuk uzaklaştırılınca elektronlar eski yerine döner ve küre yeniden nötr olur.",
    "Çubuk negatifse elektronlar kürenin çubuğa uzak ucunda toplanır."
  ],
  "dogru": 1,
  "hatalar": [
    "Doğru bir ifadeyi yanlış sanma: etkide küreye dışarıdan yük girmez, elektron ve proton sayıları değişmez, yalnızca elektronlar yer değiştirir.",
    null,
    "Doğru bir ifadeyi yanlış sanma: yük geçişi olmadığı için çubuk uzaklaşınca elektronlar eski yerine döner.",
    "Doğru bir ifadeyi yanlış sanma: negatif çubuk elektronları kendinden uzağa iter; uzak uç negatif, yakın uç pozitif olur."
  ],
  "aciklama": "Etki ile elektriklenmede yüklü cisim iletkene değmeden yaklaşır; iletkene dışarıdan yük girmez, yalnız yükler yer değiştirir.\nAdım 1: Küreye çubuktan elektron geçmesi için çubuğun küreye değmesi gerekir; değmediği için elektron geçişi olmaz. B yanlıştır.\nAdım 2: Kürenin içindeki elektronlar yer değiştirir; toplam elektron ve proton sayıları aynı kalır. A doğrudur.\nAdım 3: Çubuk uzaklaşınca elektronlar eski yerine döner. C doğrudur. Negatif çubuk elektronları uzak uca iter. D doğrudur.\nSağlama: Etkide kürenin toplam yükü sıfırdır; yüklü kalmasını sağlayan şey dokunmadır.\nSık yapılan hata: Yüklü cisim yaklaşınca nötr cisme yük geçtiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-354",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kış mevsiminde sentetik kazağını çıkaran Kerem, sürtünme nedeniyle negatif yükleniyor. Kerem ahşap kapı koluna dokunduğunda hiçbir şey hissetmiyor; metal kapı koluna dokunduğunda ise küçük bir çarpılma hissediyor.\n**Buna göre bu durumun nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Metal iletkendir; Kerem’de biriken yük, elektronların metale geçmesiyle boşalır.",
    "Metal iletkendir; Kerem’de biriken yük, protonların metale geçmesiyle boşalır.",
    "Ahşap iletkendir; Kerem’de biriken yük, elektronların ahşaba geçmesiyle boşalır.",
    "Ahşap iletkendir; Kerem’de biriken yük, protonların ahşaba geçmesiyle boşalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Protonların geçtiğini sanma: protonlar çekirdekte durur; yük boşalması elektronların geçişiyle olur.",
    "Ahşabı iletken sanma: ahşap yalıtkandır, elektronlar rahat geçemez; çarpılma hissedilen metal koldur.",
    "Ahşabı iletken sanma ve protonları hareketli sayma: ahşap yalıtkandır ve protonlar cisimler arasında geçmez."
  ],
  "aciklama": "Elektronların rahatça hareket ettiği maddeler iletken, hareket edemediği maddeler yalıtkandır. Biriken yük, iletken bir cisme dokunulunca boşalır.\nAdım 1: Kerem negatif yüklüdür; yani elektron fazlası vardır.\nAdım 2: Metal bir iletkendir. Dokunulduğunda fazla elektronlar Kerem’den metale hızla geçer; bu ani geçiş çarpılma hissi verir.\nAdım 3: Ahşap yalıtkandır. Elektronlar ahşaba rahat geçemediği için hiçbir şey hissedilmez.\nSağlama: Yük boşalmasında protonlar değil, elektronlar hareket eder.\nSık yapılan hata: Yük boşalmasında protonların da hareket ettiğini sanmak.\nCevap A."
},
{
  "id": "fen-el-355",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen öğretmeni, kuru saça sürtülen plastik bir tarağın kâğıt parçalarıyla etkileşimini gösteriyor. Tarak saça sürtüldükten sonra küçük kâğıt parçalarına yaklaştırılıyor. Kâğıt parçaları tarağa değmeden önce tarağa doğru çekiliyor; tarağa değer değmez ise tarağın üzerinden fırlıyor.\n**Buna göre bu olayda sırasıyla tarağın yüklenmesi, kâğıt parçalarının çekilmesi ve kâğıt parçalarının fırlaması hangi elektriklenme çeşitleriyle açıklanır?**",
  "gorsel": null,
  "secenekler": [
    "Sürtünme, dokunma, etki",
    "Dokunma, sürtünme, etki",
    "Sürtünme, etki, dokunma",
    "Etki, sürtünme, dokunma"
  ],
  "dogru": 2,
  "hatalar": [
    "Çekilmeyi dokunma sanma: kâğıt parçaları çekilirken tarağa değmez, yükleri yer değiştirir; bu etkidir. Fırlama ise tarağa değip yük almalarıdır, yani dokunmadır.",
    "Evreleri karıştırma: tarak saça sürtülerek yüklenir. Kâğıtlar önce etkiyle çekilir, tarağa değince dokunmayla yüklenip fırlar.",
    null,
    "Tarağın yüklenmesini etki sanma: tarak saça sürtülerek yüklenir, yani ilk evre sürtünmedir. Kâğıtların çekilmesi ise etkidir."
  ],
  "aciklama": "Sürtünmede cisimler birbirine sürtülür. Etkide yüklü cisim dokunmadan yaklaşır ve nötr cismin yükleri yer değiştirir. Dokunmada ise cisimler birbirine değer ve aynı cins yüklenir.\nAdım 1: Tarak saça sürtülerek yüklenir; bu sürtünme ile elektriklenmedir.\nAdım 2: Kâğıt parçaları tarağa değmeden çekilir. Yükleri yer değiştirir, tarağa yakın yüzleri zıt cins yüklenir. Bu etki ile elektriklenmedir.\nAdım 3: Kâğıt parçaları tarağa değince taraktan yük alır, tarakla aynı cins yüklenir ve itilir. Bu dokunma ile elektriklenmedir.\nSağlama: \"Değmeden önce\" ifadesi etkiyi, \"değer değmez\" ifadesi dokunmayı gösterir.\nSık yapılan hata: Çekilen cismin de yük aldığını sanıp ikinci evreyi de dokunma saymak.\nCevap C."
},
{
  "id": "fen-el-356",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir laboratuvar masasında dört metal küre ipek ipliklerle asılıdır ve K küresinin pozitif yüklü olduğu ölçülmüştür. Öğretmen kürelerden bazılarını ikişer ikişer birbirine yaklaştırıp sonuçları tabloya yazıyor, sonra sınıfa üç yargı sunuyor.\nI. L negatif yüklüdür.\nII. M negatif yüklüdür.\nIII. N pozitif yüklüdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini çekiyor</td></tr><tr><td>L – M</td><td>Birbirini itiyor</td></tr><tr><td>M – N</td><td>Birbirini çekiyor</td></tr><tr><td>K – N</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur ama L ile aynı cins olan M’nin negatif olduğunu söyleyen II ve N’nin pozitif olduğunu söyleyen III de doğrudur.",
    "Eksik değerlendirme: N, pozitif K tarafından itildiği için pozitiftir; III de doğrudur.",
    "Eksik değerlendirme: L’nin negatif olduğunu söyleyen I de doğrudur. L itme yaptığı M ile aynı cinstir ve K’yi çekmektedir.",
    null
  ],
  "aciklama": "İtme, iki cismin de yüklü ve aynı cins olduğunu gösterir. Çekme yüklü-nötr çiftinde de görülür; ancak itme gözlemi, nötr ihtimalini ortadan kaldırır.\nAdım 1: L, M’yi itiyor; ikisi de yüklüdür ve aynı cinstir. L, pozitif K’yi çektiğine göre pozitif olamaz; L negatiftir. Böylece M de negatiftir. I ve II doğrudur.\nAdım 2: N, pozitif K tarafından itiliyor; N, K ile aynı cins, yani pozitiftir. III doğrudur.\nSağlama: M–N çiftinde negatif M, pozitif N’yi çeker; tablo ile uyumludur.\nSık yapılan hata: Bir cismin nötr olabileceğini, itme gözlemi varken de unutmamak.\nCevap D."
},
{
  "id": "fen-el-357",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerine pozitif yüklü bir çubuk yaklaştırıldığında K ve M küreleri çubuğa doğru, L küresi ise çubuktan uzağa hareket ediyor. Daha sonra K ve M küreleri birbirine yaklaştırıldığında birbirini itiyor.\n**Buna göre K, L ve M kürelerinin yükleri sırasıyla aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Nötr, pozitif, negatif",
    "Negatif, pozitif, negatif",
    "Negatif, nötr, negatif",
    "Pozitif, negatif, pozitif"
  ],
  "dogru": 1,
  "hatalar": [
    "İtmede nötr cismin de bulunabileceğini sanma: K ile M birbirini ittiğine göre ikisi de yüklüdür; K nötr olamaz.",
    null,
    "L’yi nötr sanma: nötr bir L de pozitif çubuğa çekilirdi; L itildiği için çubukla aynı cins, yani pozitiftir.",
    "Yükleri ters kurma: pozitif çubuğa çekilen K ve M pozitif olamaz; pozitif olsalardı çubuk tarafından itilirlerdi."
  ],
  "aciklama": "İtme, itilen cismin çubukla aynı cins yüklü olduğunu gösterir; çekilme ise cismin zıt cins yüklü ya da nötr olduğunu gösterir. İki cismin birbirini itmesi de ikisinin yüklü ve aynı cins olduğunu gösterir.\nAdım 1: L pozitif çubuktan itiliyor; L pozitiftir.\nAdım 2: K ve M çubuğa çekiliyor; ikisi de negatif ya da nötrdür.\nAdım 3: K ile M birbirini itiyor; bu yüzden ikisi de yüklü ve aynı cinstir. Negatif ya da nötr olduklarına göre ikisi de negatiftir.\nSağlama: Pozitif çubuk negatif K ve M’yi çeker, pozitif L’yi iter; üç gözlem de uyar.\nSık yapılan hata: Çubuğa çekilen her cismin nötr olabileceğini düşünüp itme gözlemini hesaba katmamak.\nCevap B."
},
{
  "id": "fen-el-358",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan saplı, nötr bir K metal küresine negatif yüklü bir çubuk dokundurulup çekiliyor. Ardından pozitif yüklü bir P çubuğu, K küresine dokundurulmadan yaklaştırılıyor ve bir süre sonra uzaklaştırılıyor. Öğrenciler bu işlemler için şu yargıları ileri sürüyor.\nI. P yaklaştırılırken K küresinin toplam yükü değişmez.\nII. P yaklaştırılırken K küresi ile P çubuğu birbirini çeker.\nIII. P uzaklaştırılınca K küresi nötr olur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II’yi atlama: K negatif, P pozitiftir; zıt cins yükler birbirini çeker. II de doğrudur.",
    null,
    "Etki ile dokunmayı karıştırma: P uzaklaşınca yer değiştiren elektronlar eski yerine döner ama dokunmayla kazanılan elektronlar kürede kalır; K nötr olmaz. III yanlıştır.",
    "I’i yanlış sanma: P dokunmadığı için K’ye dışarıdan yük girmez, toplam yük değişmez; I doğrudur. III ise yanlıştır, K negatif kalır."
  ],
  "aciklama": "Dokunmada nötr cisim, yüklü cisimle aynı cins yüklenir ve bu yük kalıcıdır. Etkide ise cisme dışarıdan yük girmez; yalnızca yükler yer değiştirir ve yaklaşan cisim uzaklaşınca bu yer değiştirme geri döner.\nAdım 1: Negatif çubuk K’ye dokununca K, çubuktan elektron alır ve negatif yüklenir.\nAdım 2 (I): P yaklaşırken K’ye değmediği için K’ye yük girmez; elektronlar yalnız yer değiştirir. Toplam yük değişmez. I doğrudur.\nAdım 3 (II): K negatif, P pozitiftir; zıt cins yükler birbirini çeker. II doğrudur.\nAdım 4 (III): P uzaklaşınca yer değiştiren elektronlar eski yerine döner, ancak dokunmayla kazanılan fazla elektronlar kürede kalır. K nötr olmaz, negatif kalır. III yanlıştır.\nSağlama: K’nin toplam elektron sayısı yalnızca dokunma anında değişir; P’nin yaklaşması ve uzaklaşması bu sayıyı değiştirmez.\nSık yapılan hata: Etkiyi de bir yüklenme sanıp dokunmayla kazanılan yükün kaybolacağını düşünmek.\nCevap B."
},
{
  "id": "fen-el-359",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "P yalıtkan çubuğu R kumaşına sürtülüyor ve sürtünme sırasında R kumaşından P çubuğuna elektron geçiyor. Sonra P çubuğu, yalıtkan ipe asılı nötr K metal küresine dokundurulup çekiliyor; P çubuğu yükünün bir kısmını veriyor ve yüklü kalıyor. Son olarak R kumaşı ve P çubuğu ayrı ayrı K küresine yaklaştırılıyor.\n**Buna göre K küresinin R kumaşı ve P çubuğu ile etkileşimi sırasıyla aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Çeker, iter",
    "İter, çeker",
    "Çeker, çeker",
    "İter, iter"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yükleri ters kurma: K negatif, R pozitiftir; zıt cins olduklarından K ile R birbirini çeker.",
    "Dokunmada zıt yük sanma: K, P ile dokunduğu için P ile aynı cins, yani negatif yüklenir; K ile P birbirini iter.",
    "R’yi çubukla aynı cins sanma: R elektron verdiği için pozitif yüklenmiştir; negatif K ile birbirini çeker."
  ],
  "aciklama": "Sürtünmede elektron alan cisim negatif, veren cisim pozitif yüklenir. Dokunmada ise nötr cisim, yüklü cisimle aynı cins yüklenir.\nAdım 1: Elektronlar R’den P’ye geçtiği için P negatif, R pozitif yüklenir.\nAdım 2: Negatif P, nötr K’ya dokununca elektron verir; K negatif yüklenir. P de negatif kalır.\nAdım 3: K negatif, R pozitif olduğundan K ile R birbirini çeker; K ile P ise aynı cins negatif olduğundan birbirini iter.\nSağlama: K ile P dokundukları için aynı cinstir; zıt cins olan R çekilir.\nSık yapılan hata: Dokunmada zıt cins yüklenme olacağını sanmak.\nCevap A."
},
{
  "id": "fen-el-360",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Elektriklenmeden yararlanan bazı teknolojiler ve çalışma ilkeleri eşleştiriliyor.\n**Bu eşleştirmelerden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Fotokopi makinesi: Toner tozu, silindirin yüklü bölgelerine zıt cins yüklü olduğu için çekilir.",
    "Elektrostatik boyama: Aynı cins yüklü damlacıklar birbirini iterek ince bir sis oluşturur.",
    "Baca filtresi: Yüklenen toz tanecikleri, kendileriyle aynı cins yüklü levhalara çekilir.",
    "Elektrostatik boyama: Boyanacak nesne damlacıklara zıt cins yüklü olduğu için damlacıklar nesneye çekilir."
  ],
  "dogru": 2,
  "hatalar": [
    "Doğru bir eşleştirmeyi yanlış sanma: toner, yüklü bölgelere zıt cins yüklenirse çekilir; eşleştirme doğrudur.",
    "Doğru bir eşleştirmeyi yanlış sanma: damlacıklar aynı cins yüklüdür ve birbirini iter; eşleştirme doğrudur.",
    null,
    "Doğru bir eşleştirmeyi yanlış sanma: damlacıklar ile nesne zıt cins yüklüyse damlacıklar nesneye çekilir; eşleştirme doğrudur."
  ],
  "aciklama": "Aynı cins yükler iter, zıt cins yükler çeker; yüklü cisim nötr cismi de çeker. Teknolojik uygulamalar bu etkilere dayanır.\nAdım 1: Fotokopide toner, silindirin yüklü bölgelerine zıt yüklü olduğu için çekilir. Doğru.\nAdım 2: Elektrostatik boyamada aynı cins yüklü damlacıklar birbirini iter ve ince sis oluşturur. Doğru.\nAdım 3: Baca filtresinde tozlar levhalara çekilmek için levhaların zıt cins yüklü olması gerekir; aynı cins olsalar toz itilir ve tutunamazdı. Bu eşleştirme yanlıştır.\nSağlama: Boyamada hem itme (damlacıklar arasında) hem çekme (damlacık ile nesne arasında) görülür; iki eşleştirme de doğrudur.\nSık yapılan hata: Yapışma için aynı cins yük gerektiğini sanmak.\nCevap C."
},
{
  "id": "fen-el-361",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinden her ikili birbirine yaklaştırıldığında üç ikilinin de birbirini çektiği gözleniyor: K ile L çekişiyor, L ile M çekişiyor, K ile M çekişiyor.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": ["Üç küre de yüklüdür.","Üç küre de aynı cins yüklüdür.","Kürelerden ikisi pozitif yüklüdür.","Biri nötr, diğer ikisi zıt yüklüdür."],
  "dogru": 3,
  "hatalar": ["Çekmeyi hep zıt yük sanma: yalnızca iki cins yük vardır, üç kürenin her ikilisi zıt cins olamaz; kürelerden biri nötrdür.","Çekmeyi aynı cins sanma: aynı cins yükler birbirini iter, çekmez.","İki pozitif küre birbirini iterdi: iki küre pozitif olsaydı aralarında itme gözlenirdi.",null],
  "aciklama": "Aynı cins yükler birbirini iter. Bir ikilinin çekişmesi için ya zıt cins yüklü olmaları ya da birinin yüklü, diğerinin nötr olması gerekir. İki nötr cisim ise birbirini etkilemez.\nAdım 1: Üç küre de yüklü olsaydı, iki cins yük olduğu için en az iki küre aynı cins olurdu ve birbirini iterdi. Bu gözlemle uyuşmaz.\nAdım 2: İki küre nötr olsaydı aralarında hiç etki olmazdı; yine uyuşmaz. Demek ki tam olarak bir küre nötrdür.\nAdım 3: Kalan iki küre yüklü ve çekişiyor; zıt cins yüklüdür. Nötr küre ise ikisini de çeker.\nSağlama: Örneğin K pozitif, L negatif, M nötr alınırsa üç ikilinin üçü de birbirini çeker.\nSık yapılan hata: Çekmeyi her zaman zıt cins sanıp nötr ihtimalini unutmak.\nCevap D."
},
{
  "id": "fen-el-362",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı P, R, S ve T kürelerinin yük durumları araştırılıyor. Küreler ikişer ikişer yaklaştırıldığında gözlemler tabloda verilmiştir. Öğrenciler şu yargıları ileri sürüyor.\nI. S nötrdür.\nII. T ile R zıt cins yüklüdür.\nIII. P ile R pozitif yüklüdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>P – R</td><td>Birbirini itiyor</td></tr><tr><td>R – S</td><td>Birbirini çekiyor</td></tr><tr><td>P – S</td><td>Birbirini çekiyor</td></tr><tr><td>S – T</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük cinsini kesin sanma: P ile R’nin aynı cins yüklü olduğu kesindir ama pozitif mi negatif mi olduğu bilinmez. III kesin değildir.",
    "S’yi nötr sanma: S, T ile itişiyor; itme için S yüklü olmalıdır. I yanlıştır.",
    "Yük cinsini kesin sanma: III kesin değildir; P ile R hem pozitif hem negatif olabilir. II ise doğrudur."
  ],
  "aciklama": "İtme, iki cismin de yüklü ve aynı cins olduğunu kesin olarak gösterir.\nAdım 1: P ile R itiştiğine göre ikisi de yüklüdür ve aynı cinstir. S ile T itiştiğine göre S ve T de yüklü ve aynı cinstir. I yanlıştır.\nAdım 2: S yüklüdür ve hem P’yi hem R’yi çekiyor; bu yüzden S, P ve R’ye zıt cinstir. T de S ile aynı cins olduğundan R ile zıt cinstir. II doğrudur.\nAdım 3: P ile R’nin pozitif mi negatif mi olduğu verilmemiştir; ikisi de negatif, S ve T pozitif olsaydı da tablo aynı olurdu. III kesin değildir.\nSağlama: P ve R pozitif, S ve T negatif alınırsa da tersi alınırsa da dört gözlem uyar.\nSık yapılan hata: Yük işaretini bilmeden yalnız cinsleri karşılaştırarak işaret söylemek.\nCevap A."
},
{
  "id": "fen-el-363",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir fabrikada plastik film rulosu üretilirken film silindirlere sürtünerek yüklenir ve havadaki nötr toz tanecikleri filme yapışarak ürünü kirletir. Mühendis, bu kirlenmenin nedenini araştırıyor ve şu notları alıyor.\nI. Film ile silindir, sürtünme sonunda zıt cins yüklenir.\nII. Yüklü film, nötr toz taneciklerini iter.\nIII. Film silindirden ayrıldıktan sonra film ile silindir birbirini çeker.\n**Buna göre mühendisin notlarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "I ve III",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eksik değerlendirme: III doğrudur ama sürtünen film ile silindirin zıt cins yüklendiğini söyleyen I de doğrudur.",
    "Yüklü cismin nötr cismi ittiğini sanma: yüklü film nötr tozu çeker, bu yüzden toz filme yapışır. II yanlıştır.",
    "Yüklü cismin nötr cismi ittiğini sanma: film tozu itseydi toz filme yapışmazdı; II yanlıştır, I ise doğrudur."
  ],
  "aciklama": "Sürtünmeyle yüklenen cisimler zıt cins yüklenir; yüklü bir cisim nötr hafif cisimleri de çeker.\nAdım 1 (I): Sürtünen film ile silindir zıt cins ve eşit miktarda yüklenir. I doğrudur.\nAdım 2 (II): Yüklü film nötr tozları iter değil çeker; tozların filme yapışması bunun kanıtıdır. II yanlıştır.\nAdım 3 (III): Film ile silindir zıt cins yüklü olduğundan birbirinden ayrıldıktan sonra da birbirini çeker. III doğrudur.\nSağlama: Yalnız II yanlıştır; çünkü gözlemle (toz filme yapışıyor) çelişir.\nSık yapılan hata: Yüklü cismin nötr toz tanecikleri üzerinde itme uyguladığını sanmak.\nCevap A."
},
{
  "id": "fen-el-364",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı X, Y ve Z kürelerinin yük durumları araştırılıyor. Küreler ikişer ikişer birbirine yaklaştırıldığında gözlemler tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>X – Y</td><td>Birbirini çekiyor</td></tr><tr><td>X – Z</td><td>Birbirini çekiyor</td></tr><tr><td>Y – Z</td><td>Hiçbir etki gözlenmiyor</td></tr></table>",
  "secenekler": [
    "Y pozitif, Z negatif yüklüdür.",
    "X nötr, Y ve Z zıt cins yüklüdür.",
    "X yüklüdür; Y ve Z kesinlikle nötrdür.",
    "X, Y ve Z kürelerinin üçü de yüklüdür."
  ],
  "dogru": 2,
  "hatalar": [
    "Etkisizliği zıt yük sanma: Y ile Z zıt cins olsaydı birbirini çekerdi; hiçbir etki gözlenmediğine göre ikisi de nötrdür.",
    "Yük durumlarını ters kurma: Y ile Z arasında etki olmadığı için ikisi nötrdür; X de ikisini çektiği için yüklüdür.",
    null,
    "Etkisizliği yüklülükle karıştırma: yüklü bir küre karşısındaki küreyi çeker ya da iter; Y ile Z arasında etki yoksa ikisi de nötrdür."
  ],
  "aciklama": "Yüklü bir cisim, karşısındaki cismi her zaman etkiler: zıt yüklüyse çeker, aynı yüklüyse iter, nötrse yine çeker. İki nötr cisim ise birbirini etkilemez.\nAdım 1: Y ile Z arasında hiçbir etki gözlenmiyor. İkisinden biri yüklü olsaydı diğerini çekerdi ya da iterdi; demek ki ikisi de nötrdür.\nAdım 2: X, nötr Y’yi ve nötr Z’yi çekiyor. Nötr cisimleri çekebilen X yüklü olmalıdır.\nAdım 3: Bu durumda X yüklü, Y ve Z nötrdür; X’in cinsi (pozitif ya da negatif) belirlenemez.\nSağlama: Yüklü X, nötr Y ve Z’yi çeker; nötr Y ile Z birbirini etkilemez; üç gözlem uyar.\nSık yapılan hata: Etki olmamasını zıt yükle açıklamaya çalışmak.\nCevap C."
},
{
  "id": "fen-el-365",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Özdeş K ve L metal küreleri nötrdür ve yalıtkan ayaklar üzerinde durmaktadır. Pozitif yüklü bir çubukla dört ayrı işlem uygulanıyor.\n**Bu işlemlerden hangisi sonunda K ve L küreleri yüklü kalır?**",
  "gorsel": null,
  "secenekler": ["Birbirine değen K ve L’ye çubuk dokunmadan yaklaştırılıyor; çubuk uzaklaştırılıyor ve küreler hiç ayrılmıyor.","Değen K ve L’ye çubuk dokunmadan yaklaştırılıyor; çubuk yerindeyken küreler ayrılıp çubuk uzaklaştırılıyor.","Birbirinden ayrı duran K ve L’ye çubuk dokunmadan yaklaştırılıyor; sonra çubuk uzaklaştırılıyor.","Birbirine değen K ve L’ye çubuk dokunmadan yaklaştırılıyor; çubuk uzaklaştırılıyor, sonra küreler ayrılıyor."],
  "dogru": 1,
  "hatalar": ["Yükün kalıcı olduğunu sanma: küreler ayrılmadığı için çubuk gidince elektronlar eski yerine döner ve küreler yine nötr olur.",null,"Yükün kalıcı olduğunu sanma: her küre ayrı ayrı yük kazanmaz, çubuk uzaklaşınca küreler yeniden nötr olur.","Ayırma sırasını gözden kaçırma: çubuk önce uzaklaşırsa elektronlar eski yerine döner; küreler nötr olarak ayrılır."],
  "aciklama": "Etki ile elektriklenmede iletken, yüklü cisim yerindeyken ikiye ayrılırsa zıt yükler iki parçada kalır. Ayrılma, çubuk uzaklaşmadan önce yapılmalıdır.\nAdım 1: Birbirine değen iki küre tek bir iletken gibi davranır. Pozitif çubuk elektronları kendine çeker; elektronlar çubuğa yakın küreye toplanır.\nAdım 2: Çubuk yerindeyken küreler ayrılırsa yakın küre negatif, uzak küre pozitif olarak kalır.\nAdım 3: Diğer üç işlemde ya küreler hiç ayrılmaz, ya çubuk önce uzaklaşır, ya da küreler baştan ayrıdır; bu yüzden küreler yeniden nötr olur.\nSağlama: Ayrılan kürelerin toplam yükü sıfırdır; biri negatif, diğeri pozitiftir.\nSık yapılan hata: Çubuğun yerindeyken ayırma şartını atlamak.\nCevap B."
},
{
  "id": "fen-el-366",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Elektriklenme konusunu tekrar eden bir öğrenci, aşağıdaki cümleleri yazıyor.\nI. Pozitif yüklenen cisim, proton kazanmış olandır.\nII. Nötr bir cisimde pozitif yük miktarı, negatif yük miktarına eşittir.\nIII. Sürtünmeyle yüklenen yalıtkan cisimde yük, sürtünen bölgede kalır.\n**Buna göre bu cümlelerden hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Protonların hareket ettiğini sanma: pozitif yüklenen cisim elektron kaybetmiştir, proton kazanmamıştır.",
    "III’ü atlama: yalıtkanda elektronlar hareket edemediği için yük sürtünen bölgede kalır; III de doğrudur.",
    "Protonların hareket ettiğini sanma: I yanlıştır; pozitif yüklenme elektron kaybıdır. II de doğrudur.",
    null
  ],
  "aciklama": "Elektriklenmede yer değiştiren yalnızca elektronlardır. Elektron veren cisim pozitif, elektron alan cisim negatif olur. Nötr cisimde pozitif ve negatif yük miktarları eşittir. Yalıtkanda elektronlar hareket edemez.\nAdım 1 (I): Pozitif yüklenen cisim elektron kaybetmiştir; proton kazanmamıştır. I yanlıştır.\nAdım 2 (II): Nötr cismin proton sayısı elektron sayısına eşittir; yani pozitif ve negatif yük miktarları eşittir. Nötr, yüksüz demek değildir. II doğrudur.\nAdım 3 (III): Yalıtkanda elektronlar rahatça hareket edemediği için sürtünen bölgede kalan yük cismin her yerine yayılmaz. III doğrudur.\nSağlama: Yalnızca I, protonların hareket ettiğini öne sürdüğü için yanlıştır.\nSık yapılan hata: Pozitif yüklenmeyi proton kazanmak sanmak.\nCevap D."
},
{
  "id": "fen-el-367",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan X çubuğu P kumaşına, yalıtkan Z çubuğu da R kumaşına sürtülüyor. Sürtünmeden önce hepsi nötrdür. Sürtünme sırasında X çubuğu P kumaşından elektron alıyor; Z çubuğu ise R kumaşına elektron veriyor.\n**Buna göre sürtünmeden sonra yapılacak yaklaştırmalarla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "X ile R birbirini çeker; Z ile P birbirini çeker.",
    "X ile R birbirini çeker; Z ile P birbirini iter.",
    "X ile R birbirini iter; Z ile P birbirini iter.",
    "X ile R birbirini iter; Z ile P birbirini çeker."
  ],
  "dogru": 2,
  "hatalar": [
    "Aynı cinsi çeker sanma: X negatif ve R de negatiftir, aynı cins olduklarından birbirini iter. Z ile P de pozitiftir, onlar da birbirini iter.",
    "X ile R’yi zıt sanma: X elektron alıp negatif, R elektron alıp negatif olmuştur; ikisi aynı cinstir, birbirini iter.",
    null,
    "Z ile P’yi zıt sanma: Z elektron kaybedip pozitif, P elektron kaybedip pozitif olmuştur; ikisi aynı cinstir, birbirini iter."
  ],
  "aciklama": "Sürtünmede elektron alan cisim negatif, veren cisim pozitif yüklenir. Aynı cins yükler iter.\nAdım 1: X, P’den elektron alıyor; X negatif, P pozitif olur.\nAdım 2: Z, R’ye elektron veriyor; Z pozitif, R negatif olur.\nAdım 3: X ve R ikisi de negatiftir, birbirini iter. Z ve P ikisi de pozitiftir, birbirini iter.\nSağlama: Zıt cins çiftler X–Z, X–P, Z–R ve P–R olur; verilen çiftlerin ikisi de aynı cinstir.\nSık yapılan hata: Sürtünen cisimleri ait oldukları gruba göre değil, yalnızca adına bakarak yorumlamak.\nCevap C."
},
{
  "id": "fen-el-368",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan ipe asılı S küresinin yük durumu araştırılırken yapılan dört ayrı gözlem şunlardır.\nI. Negatif yüklü bir çubuk S’yi çekiyor.\nII. Pozitif yüklü bir çubuk S’yi çekiyor.\nIII. S küresi, nötr kâğıt parçalarını çekiyor.\nIV. S küresi, pozitif yüklü bir L küresini çekiyor.\n**Buna göre bu gözlemlerden hangi ikisi birlikte gerçekleşirse S’nin pozitif yüklü olduğu kesin olarak söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "I ve II",
    "I ve III",
    "II ve III",
    "I ve IV"
  ],
  "dogru": 1,
  "hatalar": [
    "Karşıt gözlemleri birleştirme: negatif ve pozitif çubuğun ikisi de S’yi çekiyorsa S nötrdür, pozitif olduğu söylenemez.",
    null,
    "Gözlemleri ters yorumlama: pozitif çubuğun çektiği S negatif ya da nötrdür, kâğıdı çektiği için yüklüdür; bu ikili S’nin negatif olduğunu gösterir.",
    "Gözlemleri ters yorumlama: negatif çubuğun çektiği S pozitif ya da nötrdür, pozitif L’yi çektiği için negatif ya da nötrdür; bu ikili S’nin nötr olduğunu gösterir."
  ],
  "aciklama": "Çubuğun çekmesi, S’nin zıt cins yüklü ya da nötr olduğunu gösterir. Nötr kâğıt parçalarını çekebilmek için S’nin yüklü olması gerekir.\nAdım 1: I numaralı gözlem S’nin pozitif ya da nötr olduğunu gösterir (negatif çubuk çekiyor).\nAdım 2: III numaralı gözlem S’nin yüklü olduğunu gösterir (nötr kâğıdı yalnızca yüklü cisim çeker).\nAdım 3: Pozitif ya da nötr olan ve yüklü olduğu bilinen S yalnızca pozitif olabilir. I ve III birlikte kesin sonuç verir.\nSağlama: II ve III negatif, I ve II ile I ve IV nötr sonucunu verir; yalnızca I ve III pozitif sonucunu verir.\nSık yapılan hata: Her ikilinin sonucunu ayrı ayrı yazmadan tahmin etmek.\nCevap B."
},
{
  "id": "fen-el-369",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir öğrenci, dört ayrı deneyin sonucunu tabloya yazıyor. Metal küre kullanılan deneylerde küreler özdeştir ve yalıtkan saplarla tutulmaktadır. Öğrenci, deneylerden birinin sonucunu yanlış yazdığını fark ediyor.\n**Buna göre hangi deneyin sonucu yanlış yazılmıştır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Başlangıç</th><th>İşlem</th><th>Sonuç</th></tr><tr><td>1. deney</td><td>K ve L yalıtkan, nötr</td><td>K ile L birbirine sürtülüyor</td><td>K pozitif, L negatif</td></tr><tr><td>2. deney</td><td>K negatif, L nötr (metal küreler)</td><td>K ile L dokundurulup ayrılıyor</td><td>K negatif, L negatif</td></tr><tr><td>3. deney</td><td>K pozitif, L nötr (metal küreler)</td><td>K ile L dokundurulup ayrılıyor</td><td>K pozitif, L pozitif</td></tr><tr><td>4. deney</td><td>K nötr (metal küre)</td><td>Negatif çubuk K’ye dokunmadan yaklaştırılıyor</td><td>K toplamda pozitif yüklü</td></tr></table>",
  "secenekler": [
    "1. deney",
    "2. deney",
    "3. deney",
    "4. deney"
  ],
  "dogru": 3,
  "hatalar": [
    "Sürtünmeyi hatalı sanma: sürtünen cisimler zıt cins yüklenir; 1. deney doğrudur.",
    "Dokunmayı hatalı sanma: dokunmada yüklü cisimle nötr cisim aynı cins yüklenir; 2. deney doğrudur.",
    "Dokunmayı hatalı sanma: pozitif yüklü K, nötr L’ye dokununca L’den K’ye elektron geçer; ikisi de pozitif yüklenir. 3. deney doğrudur.",
    null
  ],
  "aciklama": "Sürtünmede cisimler zıt cins yüklenir; dokunmada yüklü ve nötr cisim aynı cins; etkide ise cisme dışarıdan yük girmez, toplam yük sıfır kalır.\nAdım 1: 1. deney sürtünmedir; K ile L zıt cins yüklenmiştir. Doğru.\nAdım 2: 2. deney dokunmadır; negatif K, nötr L ile aynı cins yüklenir. Doğru.\nAdım 3: 3. deney dokunmadır; pozitif K, nötr L’den elektron çeker ve ikisi de pozitif olur. Doğru.\nAdım 4: 4. deneyde çubuk K’ya değmiyor; K’ya dışarıdan yük girmez. K toplamda nötr kalır, yalnızca uçları zıt işaretli olur. \"K toplamda pozitif\" yanlıştır.\nSağlama: Pozitif olması için K’nın elektron kaybetmesi gerekirdi; dokunmadığı için kaybetmez.\nSık yapılan hata: Etkide cismin toplamda yüklendiğini sanmak.\nCevap D."
},
{
  "id": "fen-el-370",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir fırtınada bulutun alt kısmı negatif, bulutun altındaki yer yüzeyi ise pozitif yüklüdür. Bulut ile yer yüzeyi arasında yıldırım düşüyor.\n**Buna göre yıldırım düştükten sonra bulutun ve yer yüzeyinin yükleri için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Bulutun negatif yükü azalır; yer yüzeyinin pozitif yükü azalır.",
    "Bulutun negatif yükü azalır; yer yüzeyinin pozitif yükü artar.",
    "Bulutun negatif yükü artar; yer yüzeyinin pozitif yükü azalır.",
    "Bulutun negatif yükü artar; yer yüzeyinin pozitif yükü artar."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük artışı sanma: buluttan yere elektron geçince yer yüzeyinin elektron eksiği azalır, pozitif yükü artmaz.",
    "Elektron yönünü ters kurma: elektronlar buluttan yere geçtiği için bulutun negatif yükü azalır, artmaz.",
    "Boşalmayı yük birikmesi sanma: yıldırım yükleri artırmaz, yüklü bölgelerin birbirini dengelemesidir."
  ],
  "aciklama": "Yıldırım, bulut ile yer yüzeyi arasındaki yük boşalmasıdır. Boşalmada elektronlar negatif yüklü bölgeden pozitif yüklü bölgeye geçer.\nAdım 1: Bulutun alt kısmı negatif, yani elektron fazlasıdır. Yer yüzeyi pozitif, yani elektron eksiğidir.\nAdım 2: Yıldırım düşerken elektronlar buluttan yere geçer. Bulutun elektron fazlası azalır; negatif yükü azalır.\nAdım 3: Yere gelen elektronlar yer yüzeyinin elektron eksiğini giderir; pozitif yükü azalır.\nSağlama: Boşalma bittikten sonra iki bölgenin zıt yükleri de küçülmüş, yani birbirini dengelemiştir.\nSık yapılan hata: Boşalmayı yüklerin artması olarak yorumlamak.\nCevap A."
},
{
  "id": "fen-el-371",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinin yük durumları araştırılıyor. Küreler ikişer ikişer yaklaştırıldığında gözlemler tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi __olamaz__?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini itiyor</td></tr><tr><td>L – M</td><td>Birbirini çekiyor</td></tr><tr><td>K – M</td><td>Birbirini çekiyor</td></tr></table>",
  "secenekler": [
    "K ve L’nin ikisi de negatif yüklüdür.",
    "M, K ile aynı cins yüklüdür.",
    "M nötrdür.",
    "M, L’ye zıt cins yüklüdür."
  ],
  "dogru": 1,
  "hatalar": [
    "Mümkün bir durumu imkânsız sanma: K ile L itiştiğine göre aynı cins yüklüdür; ikisi de negatif olabilir.",
    null,
    "Mümkün bir durumu imkânsız sanma: yüklü K ve L, nötr M’yi çeker; M nötr olabilir.",
    "Mümkün bir durumu imkânsız sanma: M’nin L ve K ile çekişmesi, ikisine de zıt cins yüklü olmasıyla da açıklanır."
  ],
  "aciklama": "İtme, iki cismin yüklü ve aynı cins olduğunu gösterir. Çekme ise zıt cinste ya da yüklü-nötr çiftinde görülür.\nAdım 1: K ile L itiştiğine göre ikisi de yüklüdür ve aynı cinstir.\nAdım 2: M hem K’yı hem L’yi çekiyor. M, bu cinse zıt yüklü olabilir ya da nötr olabilir.\nAdım 3: M, K ile aynı cinste olsaydı K’yı iterdi. Bu olamaz. Diğer üç durum mümkündür.\nSağlama: K ve L negatif, M pozitif ya da nötr alınırsa üç gözlem de uyar.\nSık yapılan hata: Mümkün olan durumları imkânsız saymak.\nCevap B."
},
{
  "id": "fen-el-372",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Elinde yalnızca negatif yüklü bir çubuk ve yalıtkan ayaklar üzerinde duran, nötr ve özdeş K ve L metal küreleri bulunan Doruk, bu araçlarla dokunma ve etki ile elektriklenme işlemleri yaparak küreleri yüklemeye çalışıyor.\n**Buna göre Doruk’un aşağıdaki yük durumlarından hangisini elde etmesi __mümkün değildir__?**",
  "gorsel": null,
  "secenekler": [
    "K negatif, L negatif",
    "K pozitif, L negatif",
    "K pozitif, L pozitif",
    "K negatif, L nötr"
  ],
  "dogru": 2,
  "hatalar": [
    "Mümkün bir durumu imkânsız sanma: çubuk önce K’ye, sonra L’ye dokundurulursa iki küre de negatif yüklenir.",
    "Mümkün bir durumu imkânsız sanma: birbirine değen küreler çubuk yerindeyken ayrılırsa biri pozitif, diğeri negatif kalır.",
    null,
    "Mümkün bir durumu imkânsız sanma: çubuk yalnızca K’ye dokundurulursa K negatif, L nötr kalır."
  ],
  "aciklama": "Yük korunur: dokunmada negatif çubuk küreye elektron verir, etkide ise küreye hiç yük girmez. Küre sisteminin toplam yükü ancak sıfır ya da negatif olabilir.\nAdım 1: Çubuk K’ye dokunursa K negatif olur, L nötr kalır. Bu mümkündür.\nAdım 2: Çubuk K’ye, sonra L’ye dokunursa ikisi de negatif olur. Bu da mümkündür.\nAdım 3: Etkiyle birbirine değen küreler çubuk yerindeyken ayrılırsa biri pozitif, öteki negatif olur. Mümkündür.\nAdım 4: İki küre de pozitif olursa toplam yük pozitif olur; negatif çubuk sisteme elektron verebilir ama sistemden elektron alamaz. Bu durum mümkün değildir.\nSağlama: Çubuktan sisteme elektron geçişi toplam yükü artırmaz, azaltır; pozitif toplam yük elde edilemez.\nSık yapılan hata: Negatif çubukla küreyi pozitif yüklemek için dokunmanın yeterli olduğunu sanmak.\nCevap C."
},
{
  "id": "fen-el-373",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Kuru bir kış gününde yalıtkan plastik kaydıraktan kayarak inen Nehir’in saçları havalanıyor. Nehir kaydıraktan indikten sonra metal parmaklığa tutunduğunda elinde küçük bir sızı hissediyor. Kayma sırasındaki sürtünme sonunda Nehir’in negatif yüklendiği biliniyor.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Nehir’in negatif yükünün miktarı, kaydırağın pozitif yükünün miktarından daha fazladır.",
    "Saç telleri aynı cins yüklendiği için birbirini iter ve saçlar havalanır.",
    "Sızı, Nehir’den metal parmaklığa geçen elektronların yük boşalması sırasında oluşur.",
    "Kaydırak, Nehir ile sürtünme sonunda pozitif yüklenmiştir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Doğru bir ifadeyi yanlış sanma: saç telleri aynı cins yüklendiği için birbirini iter; ifade doğrudur.",
    "Doğru bir ifadeyi yanlış sanma: boşalmada hareket eden elektronlardır; Nehir’in fazla elektronları metale geçer. İfade doğrudur.",
    "Doğru bir ifadeyi yanlış sanma: sürtünen cisimler zıt cins yüklenir; Nehir negatifse kaydırak pozitiftir. İfade doğrudur."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisim zıt cins ve eşit miktarda yüklenir. Aynı cins yükler iter. Biriken yük, iletken bir cisme dokunulunca elektronların geçişiyle boşalır.\nAdım 1: Nehir negatif yüklendiğine göre kaydırak elektron vermiş, yani pozitif yüklenmiştir. Dördüncü ifade doğrudur.\nAdım 2: Saç telleri aynı cins yüklendiği için birbirini iter ve havalanır. İkinci ifade doğrudur.\nAdım 3: Nehir’de biriken fazla elektronlar iletken metale geçer; sızı bu ani geçişin sonucudur. Üçüncü ifade doğrudur.\nAdım 4: Sürtünen cisimlerin yük miktarları eşittir. Nehir’in yükünün daha fazla olduğunu söyleyen birinci ifade yanlıştır.\nSağlama: Nehir’den ayrılan elektron sayısı kaydırağın aldığı sayıya eşit olmak zorundadır; toplam yük sıfırdır.\nSık yapılan hata: Sürtünen cisimlerden küçük ya da hareketli olanın daha çok yüklendiğini sanmak.\nCevap A."
},
{
  "id": "fen-el-374",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Nötr K ve L balonları, aynı yünlü kumaşa art arda sürtülüyor. Her sürtünmede balon, kumaştan elektron alıyor. Sürtünmeden sonra balonlar birbirinden ayrılıyor ve yanlarına nötr bir kâğıt şerit konuyor. Daha sonra ikililer sırayla birbirine yaklaştırılıyor.\n**Buna göre K–L, K–kumaş ve K–kâğıt şerit ikililerinin birbirine etkisi sırasıyla aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Çeker, çeker, çeker",
    "İter, çeker, çeker",
    "İter, iter, çeker",
    "İter, çeker, etkilemez"
  ],
  "dogru": 1,
  "hatalar": [
    "Aynı kumaşla yüklenen balonları zıt sanma: K ve L ikisi de kumaştan elektron aldığı için aynı cins (negatif) yüklenir; birbirini iter.",
    null,
    "Kumaşı balonlarla aynı cins sanma: kumaş elektron verdiği için pozitiftir; negatif K’yi çeker.",
    "Nötr cismi etkisiz sanma: yüklü K, nötr kâğıt şeridi de çeker."
  ],
  "aciklama": "Sürtünmede elektron alan cisim negatif, veren cisim pozitif yüklenir. Aynı cins yükler iter, zıt cins yükler çeker; yüklü cisim nötr cismi de çeker.\nAdım 1: K ve L, kumaştan elektron aldığı için ikisi de negatif yüklenir. Kumaş iki kez elektron verdiği için pozitif yüklüdür.\nAdım 2 (K–L): İkisi de aynı cins yüklüdür; birbirini iter.\nAdım 3 (K–kumaş): Negatif K ile pozitif kumaş zıt cinstir; birbirini çeker.\nAdım 4 (K–kâğıt şerit): Yüklü K, nötr kâğıt şeridi çeker.\nSağlama: Yalnız kumaş balonlara zıt cins yüklüdür; bu yüzden itme yalnız K–L ikilisinde görülür.\nSık yapılan hata: Aynı kumaşla yüklenen cisimlerin zıt cins yüklendiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-375",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı altı küre, üç çift hâlinde birbirine yaklaştırılıyor ve gözlemler tabloda verilmiştir.\n**Buna göre bu altı küreden en az kaç tanesi yüklüdür?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini itiyor</td></tr><tr><td>M – N</td><td>Birbirini itiyor</td></tr><tr><td>P – R</td><td>Birbirini çekiyor</td></tr></table>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnız bir itme çiftini sayma: iki itme çifti dört kürenin yüklü olmasını gerektirir; ayrıca çekme çiftinde de en az bir küre yüklüdür.",
    "İki itme çiftini tam saymama: K, L, M ve N yüklüdür, yani bu çiftlerde dört küre yüklüdür; çekme çiftinde de en az bir küre eklenir.",
    "Çekme çiftini saymama: itme çiftlerinde dört küre yüklüdür; P ile R çekiştiğine göre ikisinden en az biri de yüklüdür.",
    null
  ],
  "aciklama": "İtme, iki cismin de yüklü olduğunu gösterir. Çekme ise ya iki cismin zıt yüklü olduğunu ya da birinin yüklü, diğerinin nötr olduğunu gösterir; yani çekme çiftinde en az bir küre yüklüdür.\nAdım 1: K–L itişiyor; K ve L yüklüdür (2 küre). M–N itişiyor; M ve N yüklüdür (2 küre).\nAdım 2: P–R çekişiyor. Bu çiftte ikisi de yüklü olabilir, ama en az biri yüklü olmak zorundadır (1 küre).\nAdım 3: En az sayı için çekme çiftinde bir kürenin yüklü, diğerinin nötr olduğunu varsayarız. Toplam 2 + 2 + 1 = 5.\nSağlama: P nötr, R yüklü alınırsa tablo aynı çıkar; daha az yüklü küre ile tablo oluşamaz.\nSık yapılan hata: Çekme çiftini saymayı unutmak.\nCevap D."
}
);
