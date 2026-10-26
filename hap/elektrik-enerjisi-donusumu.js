window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["elektrik-enerjisi-donusumu"] = {
  "kazanimlar": [
    "F.8.7.3.1",
    "F.8.7.3.2",
    "F.8.7.3.3",
    "F.8.7.3.4",
    "F.8.7.3.5",
    "F.8.7.3.6"
  ],
  "giris": "Bu konuda elektrik enerjisinin **ısıya, ışığa ve harekete nasıl dönüştüğünü**, hareketten **nasıl elektrik elde edildiğini**, santrallerin **hangi zincirle elektrik ürettiğini** ve **tasarruflu kullanımın** önemini öğrenirsin. Sınavda dönüşüm zinciri şemaları, santral tabloları ve I-II-III öncüllü yargılar çıkar. Özeti okuyunca bir cihazın ya da santralin zincirini yazabilecek, avantaj ve dezavantajları ayırabileceksin.",
  "bolumler": [
    {
      "baslik": "Elektrik enerjisi neye dönüşür?",
      "maddeler": [
        "Elektrikli cihaz, elektrik enerjisini **asıl amacına** uygun enerjiye çevirir: **ısı, ışık ya da hareket.**",
        "**Isıtıcı telli cihazlarda** (ütü, su ısıtıcısı, soba) akım geçen tel ısınır; elektrik **ısıya** dönüşür.",
        "**Lambalarda** (ampul, LED) elektrik **ışığa** dönüşür.",
        "**Motorlu cihazlarda** (vantilatör, mikser, matkap, süpürge, asansör) elektrik **harekete** dönüşür.",
        "Çoğu cihazda **yan dönüşümler** de olur: çalışan motor biraz ısınır, ampul biraz ısı verir. Soru \"esas olarak\" diyorsa cihazın görevine bak.",
        "Bazı cihazlarda **iki ayrı görev** vardır ve ikisi de asıldır: saç kurutma makinesinde motor fanı döndürür (hareket), ısıtıcı tel havayı ısıtır (ısı); robot süpürgede motorlar hareket, gösterge LED'i ışık üretir. Cihazı **parça parça** incele."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Cihaz</th><th>Dönüşüm</th></tr><tr><td>Ütü, elektrikli soba ve ocak, su ısıtıcısı, tost makinesi</td><td>Elektrik → ısı</td></tr><tr><td>Ampul, LED, floresan lamba</td><td>Elektrik → ışık</td></tr><tr><td>Vantilatör, mikser, blender, matkap, süpürge, dikiş makinesi</td><td>Elektrik → hareket</td></tr><tr><td>Dinamo, jeneratör</td><td>Hareket → elektrik</td></tr></table>",
      "dikkat": [
        "**Her elektrikli aletin hareket ürettiğini sanma.** Dönen bir parça (pervane, bıçak, uç) varsa motor vardır; yalnız ısıtıyorsa ısı, yalnız aydınlatıyorsa ışıktır."
      ]
    },
    {
      "baslik": "Sigorta ve robotlar",
      "maddeler": [
        "**Elektrik sigortası** devreden geçen akım **güvenli sınırı aşınca devreyi keser.** Kablolar aşırı ısınmaz, cihazlar zarar görmez, yangın çıkması önlenir.",
        "Aynı prize çok cihaz takılırsa akım artar ve sigorta atar. Bu arıza değil, **korumadır.** Sigortayı devre dışı bırakmak tehlikelidir.",
        "Sigorta enerji vermez, depolamaz, tüketimi ölçmez. Tüketimi ölçen alet **sayaçtır**; **pil** enerjiyi kimyasal biçimde depolar, devreye elektrik verir.",
        "**Robotların** kol, tekerlek, eklem gibi hareketli parçaları **elektrik motorlarıyla** çalışır; hareketleri elektriğin hareket enerjisine dönüşmesine dayanır."
      ],
      "dikkat": [
        "**Sigorta atınca \"bozuldu\" deme.** Devreye gereğinden fazla yük binmiştir; önce yükü azalt. Sık atan sigorta yerine daha yüksek değerli sigorta takmak kabloların ısınma riskini artırır."
      ]
    },
    {
      "baslik": "Hareketten elektrik: dinamo ve jeneratör",
      "maddeler": [
        "**Dinamo ve jeneratör** dönme hareketini **elektriğe** çevirir. Motorun tersidir: motor elektrik harcayıp hareket üretir, jeneratör hareket harcayıp elektrik üretir.",
        "Küçük jeneratöre **dinamo** denir. Bisiklet farı ya da kolu çevrilen pilsiz fener böyle çalışır. Dönme durunca elektrik de durur; dinamo **ne kadar hızlı çevrilirse** lamba o kadar parlak yanar.",
        "**Model tasarlarken** önce hedef dönüşümü yaz, sonra parçayı seç: elektrik → ısı için ince metal tel, elektrik → ışık için ampul, elektrik → hareket için motor, hareket → elektrik için dinamo.",
        "**Pil şarj edilirken** prizdeki elektrik pilde **kimyasal enerjiye** dönüşür; pil çalışırken kimyasal enerji yeniden elektriğe, sonra motorda harekete dönüşür. Zincir: elektrik → kimyasal → elektrik → hareket. Motor ile dinamo aynı yapıdadır: motorun mili elle çevrilirse küçük bir jeneratör gibi elektrik üretebilir.",
        "Bir parçayı pille döndüreceksen listede **motor** bulunmalıdır; pil ve kablo tek başına hareket üretmez. Pilsiz elektrik gerekiyorsa kaynak dinamodur."
      ],
      "dikkat": [
        "**Motor ile dinamoyu karıştırma.** Zincirde ok hareketten elektriğe gidiyorsa dinamo, elektrikten harekete gidiyorsa motordur."
      ]
    },
    {
      "baslik": "Güç santralleri: elektrik nasıl üretilir?",
      "maddeler": [
        "Beş santralde de **bir etki türbini döndürür, türbine bağlı jeneratör hareketi elektriğe çevirir.** Santraller türbini neyin döndürdüğü ve enerjinin nereden geldiği bakımından ayrılır.",
        "**Hidroelektrik:** Baraj gölünde yüksekte duran suyun enerjisi akarken hareket enerjisine dönüşür; akan su türbini döndürür. Yüksekte duran suyun enerjisine **potansiyel enerji** denir. Zincir: **potansiyel → hareket → hareket → elektrik.**",
        "**Termik:** Kömür, doğal gaz gibi yakıtlar yakılır, ısı suyu buhara çevirir, buhar türbini döndürür. Zincir: **kimyasal → ısı → hareket → elektrik.**",
        "**Rüzgâr:** Esen rüzgârın hareket enerjisi kanatları ve türbini döndürür. Yakıt ve buhar yoktur. Zincir: **hareket → hareket → elektrik.**",
        "**Jeotermal:** Yer altındaki sıcak su ve buharın ısısı kullanılır; buhar türbini döndürür. Yakıt yakılmaz. Zincir: **ısı → hareket → elektrik.**",
        "**Nükleer:** Uranyumun çekirdek enerjisi ısıya dönüşür, ısı suyu buhara çevirir, buhar türbini döndürür. Zincir: **çekirdek → ısı → hareket → elektrik.**",
        "Türbini **buhar** döndüren santraller: termik, jeotermal, nükleer. **Su akışı** döndüren: hidroelektrik. **Hava akışı** döndüren: rüzgâr.",
        "**Parça adları:** kazan ve baca termikte, reaktör nükleerde (ısı kaynağı), baraj hidroelektrikte bulunur. Türbin ve jeneratör beşinde de ortaktır."
      ],
      "dikkat": [
        "**Elektriğin türbinde oluştuğunu sanma.** Türbin yalnızca döner; elektrik her santralde **jeneratörde** oluşur.",
        "**Her santralde yakıt yandığını ya da buhar olduğunu sanma.** Yanma yalnız termikte vardır; hidroelektrik ve rüzgârda buhar yoktur.",
        "**Güneş pilini bu santrallerle karıştırma.** Güneş pilinde türbin ve jeneratör yoktur; ışık doğrudan elektriğe çevrilir."
      ]
    },
    {
      "baslik": "Santrallerin avantajları ve dezavantajları",
      "maddeler": [
        "**Yenilenebilir kaynak:** Doğada kısa sürede yeniden oluşur, kullanmakla tükenmez (su, rüzgâr, jeotermal sıcak su). **Yenilenemez kaynak:** Oluşması çok uzun sürer, kullandıkça biter (kömür, doğal gaz, uranyum).",
        "**Termik:** Yakıt yakıldığı için **karbondioksit gibi sera gazları, is ve kül** havayı kirletir; yakıt tükenir. Üretim hava ya da suya bağlı olmadığı için sürekli yapılabilir.",
        "**Hidroelektrik:** Yakıt gerekmez, işletmede hava kirletmez. Baraj gölü **yerleşim, tarım ve orman alanlarını su altında bırakabilir**, canlı yaşamını etkiler; üretim yağış ve su miktarına bağlıdır.",
        "**Rüzgâr:** Yakıt gerekmez, işletmede kirletici gaz çıkmaz, kaynak tükenmez. Ancak üretim **rüzgâr hızı değişince değişir**, elverişli bölge gerekir; kanatlar kuşlar için tehlike olabilir.",
        "**Jeotermal:** Yakıt yakılmaz, havayı çok az kirletir, kaynak yenilenebilir sayılır. Yalnızca **yer altı sıcak su ve buharın bulunduğu bölgelerde** kurulabilir; kaynak zamanla azalabilir.",
        "**Nükleer:** Yakıt (uranyum) çok az miktarda yeterlidir, işletmede karbondioksit salınmaz. Ancak uranyum **yenilenemez**, kullanılmış yakıt **radyoaktif atıktır** ve uzun süre özenle saklanmalıdır; kaza riski de ciddidir."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Santral</th><th>Yakıt gerekir mi?</th><th>Yakıt yanar mı?</th><th>İşletmede karbondioksit</th><th>Kaynak</th><th>Başlıca sorun</th></tr><tr><td>Termik</td><td>Evet</td><td>Evet</td><td>Salar</td><td>Yenilenemez</td><td>Hava kirliliği</td></tr><tr><td>Nükleer</td><td>Evet (uranyum)</td><td>Hayır</td><td>Salmaz</td><td>Yenilenemez</td><td>Radyoaktif atık, kaza riski</td></tr><tr><td>Hidroelektrik</td><td>Hayır</td><td>Hayır</td><td>Salmaz</td><td>Yenilenebilir</td><td>Baraj gölü, yağışa bağımlılık</td></tr><tr><td>Rüzgâr</td><td>Hayır</td><td>Hayır</td><td>Salmaz</td><td>Yenilenebilir</td><td>Rüzgâra bağımlılık</td></tr><tr><td>Jeotermal</td><td>Hayır</td><td>Hayır</td><td>Çok az</td><td>Yenilenebilir</td><td>Yalnız uygun bölgede kurulur</td></tr></table>",
      "dikkat": [
        "**Yenilenebilir kaynağı \"sorunsuz\" sanma.** Rüzgâr ve su tükenmez ama üretim koşula bağlıdır; baraj gölü ve türbinler çevreyi etkileyebilir.",
        "**\"Yakıt gerekir\" ile \"yakıt yanar\" aynı şey değildir.** Nükleerde uranyum yakıttır ama yanmaz; ısı çekirdek enerjisinden gelir. Nükleeri kömür gibi düşünme: karbondioksit salmaz, ama yakıtı yenilenemez ve atığı radyoaktiftir. Soruda hangi ölçüt isteniyorsa (gaz, kaynak, atık) ona göre karar ver.",
        "**Bir santralin sorununu başkasına yükleme.** Baraj gölü yalnız hidroelektrikte, radyoaktif atık yalnız nükleerde, yanma gazı yalnız termikte yer alır."
      ]
    },
    {
      "baslik": "Bilinçli ve tasarruflu kullanım",
      "maddeler": [
        "Elektrik santrallerde yakıt, emek ve para harcanarak üretilir. Gereksiz tüketim hem **ailenin faturasını** hem **ülkenin kaynaklarını** boşa harcar.",
        "**Enerji verimliliği:** Aynı işi **daha az enerjiyle** yapabilmektir. Aynı ışığı veren LED ampul eski ampulden az elektrik tüketir. İşi hiç yapmamak verimlilik değildir.",
        "**Enerji sınıfı:** **A sınıfı en tasarruflu** gruptur; harf ilerledikçe verim düşer. Amaç \"en az elektrik tüketimi\" ise fiyat değil tüketim sütununa bak. Tüketim **kWh** (kilovatsaat) ile verilir; hesap gerekmez, çıkarma ve karşılaştırma yeter.",
        "**Enerji = güç × süre.** Güç W, süre saat ise sonuç Wh olur; **1 kWh = 1000 Wh.** Örnek: 800 W gücündeki cihaz 2 saat çalışırsa 1600 Wh = 1,6 kWh harcar. Tasarruf, iki tüketimin farkıdır; en çok tasarruf için gücü büyük olan cihazın süresini kısmak gerekir.",
        "**Evde tasarruf:** Gün ışığı varken lambayı söndürmek, boş odanın ışığını kapatmak, LED ampul ve A sınıfı cihaz seçmek, makineleri tam dolu çalıştırmak, sıcak yemeği soğutup buzdolabına koymak, buzdolabı kapağını uzun açık tutmamak, ütüyü açık unutmamak, kullanılmayan cihazı **fişten çekmek.**",
        "**Bekleme modu:** Kumandayla kapatılan cihaz prizde kalırsa az da olsa elektrik tüketir. Tüketim cihaza göre değişir; aynı süre bekleyen iki cihaz aynı kadar tüketmek zorunda değildir.",
        "**Kaçak elektrik:** Sayaç atlatılsa da elektrik santralde üretilmiş ve taşınmıştır; üretim azalmış sayılmaz. Bedeli ödenmeyen bu kayıp **ülke ekonomisine zarar verir**, maliyet ödeme yapan kullanıcılara da yansır. Şebekeye verilen ile faturalanan elektrik arasındaki fark kayıp ve kaçak miktarını gösterir.",
        "Çok sayıda ailenin tasarrufu ülkenin toplam tüketimini, harcadığı kaynağı ve yakıt yakan santrallerin çevreye zararını azaltır. Resmî kurumlar ve sivil toplum kuruluşları da verimlilik için bilgilendirme ve kampanya yapar."
      ],
      "dikkat": [
        "**\"Kapalı\" görünen cihaz elektrik tüketmez deme.** Bekleme modundaki ışıklı cihaz hâlâ elektrik çeker.",
        "**Azalma miktarı ile oranını karıştırma.** Miktarca en çok azalan ev oranca en başarılı olmayabilir; soru \"yüzde\" diyorsa azalmayı önceki tüketime böl.",
        "**Bir önlemin etkisini ölçerken tek koşulu değiştir.** Bekleme modunun etkisi için yalnız bekleme modu farklı, diğer koşulları (ör. doluluk) aynı iki ölçümü karşılaştır."
      ]
    }
  ],
  "lgs": [
    "**Enerji dönüşüm zinciri şeması:** Kutular ve oklar verilir, bir kutuya hangi enerjinin geleceği sorulur. Önce santralin ya da cihazın adını belirle, zinciri başından sona yaz. Türbinden sonra gelen basamak her zaman jeneratördür; elektrik orada oluşur.",
    "**Öncüllü yargılar:** \"Türbini buhar döndürür\", \"yakıt yakılır\", \"baraj gerekir\" gibi ifadeler her santrale uymaz. Yargıyı beş santralin hangisine ait olduğuna göre tek tek sına; \"her\" ya da \"kesinlikle\" geçiyorsa tek karşıt örnek ifadeyi çürütür.",
    "**Karşılaştırma, yıl ve deney tabloları:** Soru \"ulaşılamaz\" ya da \"kesinlikle\" diyorsa yalnız tabloda görünen ilişkiyi kullan; verilmeyen kaynağı, maliyeti ya da denenmemiş değişkeni cevaba katma. Bölgeye santral seçerken yalnız verilen koşulları kullan.",
    "**Tasarruf ve fatura tablosu:** Her önlemin katkısını bir önceki aydan çıkararak bul; \"en başarılı\" oran sorarsa azalmayı önceki tüketime böl. Sayılar küçüktür, çarpma gerekmez."
  ],
  "yokla": [
    {
      "soru": "Elektrikli soba, vantilatör ve LED şerit lambada elektrik enerjisi esas olarak hangi enerjilere dönüşür?",
      "cevap": "Soba: ısı. Vantilatör: hareket (motor pervaneyi döndürür). LED şerit: ışık."
    },
    {
      "soru": "Aynı prize çok sayıda cihaz takılınca sigorta atıyor. Neden? Sigortayı devreden çıkarmak neden yanlıştır?",
      "cevap": "Akım güvenli sınırı aşmıştır; sigorta devreyi keserek kabloların ısınmasını ve yangını önler. Devreden çıkarılırsa bu koruma kalkar."
    },
    {
      "soru": "Beş santralden hangilerinde türbini su buharı döndürür? Hangisinde akan su, hangisinde hava?",
      "cevap": "Buhar: termik, jeotermal, nükleer. Akan su: hidroelektrik. Hava: rüzgâr."
    },
    {
      "soru": "Jeotermal santralin enerji dönüşüm zincirini yaz. Yakıt yakılıyor mu?",
      "cevap": "Isı (yer altı sıcak su ve buharı) → hareket (türbin) → elektrik (jeneratör). Yakıt yakılmaz."
    },
    {
      "soru": "Rüzgâr santrali ile nükleer santralin birer avantajını ve dezavantajını söyle.",
      "cevap": "Rüzgâr: kaynak tükenmez, gaz salmaz; üretim rüzgâr hızına bağlıdır. Nükleer: işletmede karbondioksit salmaz; atığı radyoaktiftir, yakıtı yenilenemez."
    },
    {
      "soru": "Bir sitedeki bütün aileler A sınıfı çamaşır makinesi seçerse faturalar ve ülke için ne değişir? Kaçak elektrik neden ülkeye zarar verir?",
      "cevap": "Daha az elektrik tüketilir; faturalar azalır, ülkenin toplam tüketimi ve harcadığı kaynak da düşer. Kaçak elektriğin bedeli ödenmediği hâlde üretim maliyeti vardır; kayıp ülke ekonomisine ve ödeme yapan kullanıcılara yansır."
    }
  ]
};
