window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["gorsel-grafik-okuma"] = {
  kazanimlar: ["T.8.3.27", "T.8.3.32"],
  giris: "Bu konu ezber değil, **yöntem** konusudur. Afiş, karikatür, çizgi roman, grafik ve tablo sorularında bilgi zaten görselin içindedir. Bu özetten sonra bir görselde neye, hangi sırayla bakacağını bileceksin.",
  bolumler: [
    {
      baslik: "Grafiğe bakmadan önce: başlık, eksen, birim",
      maddeler: [
        "**Önce başlığı oku.** Başlık grafiğin neyi, nerede, ne zaman ölçtüğünü söyler. Yargının kapsamı başlığı aşamaz.",
        "**Eksenleri oku.** Yatay eksende çoğu zaman gruplar ya da zaman (gün, ay, yıl), dikey eksende ölçülen miktar olur.",
        "**Birimi bul.** Kilogram mı, adet mi, yüzde mi, bin kişi mi? “Bin kişi” yazan grafikte 12 çizgisi 12.000 demektir.",
        "**Ölçeğe bak.** Eksendeki çizgiler kaçar kaçar artıyor?",
        "**Göstergeyi (renk açıklamasını) oku.** İki renkli çubuk ya da iki çizgi varsa her rengin neyi temsil ettiğini karıştırma."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Görsel türü</th><th>Ne için kullanılır?</th><th>İlk bakacağın yer</th></tr><tr><td><strong>Çubuk grafik</strong></td><td>Grupları karşılaştırmak</td><td>Dikey eksenin ölçeği ve sıfırdan başlayıp başlamadığı</td></tr><tr><td><strong>Çizgi grafik</strong></td><td>Zaman içindeki değişimi göstermek</td><td>Çizginin nerede yükselip nerede düştüğü, en yüksek ve en düşük nokta</td></tr><tr><td><strong>Daire grafik</strong></td><td>Bir bütünün parçalara dağılımını göstermek</td><td>Yüzdeler ve toplamın verilip verilmediği</td></tr><tr><td><strong>Tablo / çizelge</strong></td><td>Birden çok bilgiyi satır-sütun düzeninde vermek</td><td>Satır ve sütun başlıkları</td></tr></table>",
      dikkat: [
        "**Komşu çubuğu okuma:** Gözün yandaki çubuğa kayabilir; çubuğun ucundan eksene düz bir çizgi hayal et.",
        "**Satır kaydırma:** Tabloda üst ya da alt satırın değerini alma. Satır ve sütun başlığını birlikte söyle: “Salı satırı, fiyat sütunu.”"
      ]
    },
    {
      baslik: "Değeri okumak ve hesaplamak",
      maddeler: [
        "Sorular çoğu zaman **iki değer arasındaki ilişkiyi** sorar: fark, toplam, kaç katı, sıralama.",
        "**Daire grafikte yüzdeyi sayıya çevir:** sayı = toplam × yüzde. Toplam 300 kişi, dilim %15 ise 300 × [[15|100]] = 45 kişi.",
        "Kesir ile yüzdeyi eşle: yarısı = %50, dörtte biri = %25, beşte biri = %20, onda biri = %10.",
        "**Dikey eksen sıfırdan başlamıyorsa** çubukların boyu seni yanıltır. Eksen 500'den başlıyorsa 520 ile 560 değerli iki çubuktan biri ötekinin üç katı uzun görünür ama gerçek fark yalnızca 40'tır. Boya değil, eksendeki sayıya bak.",
        "**Toplamlar farklıysa “başına düşen” değeri bul.** Verimi karşılaştırmak için ürünü ağaç sayısına böl: 900 kg ürün veren 30 ağaçta ağaç başına 30 kg, 500 kg veren 20 ağaçta 25 kg düşer.",
        "**“Bilgilere uygun grafik hangisidir?” sorusu:** Metindeki her koşulu (en çok, eşit, yarısı kadar, yarısından az) ayrı ayrı yaz, sonra her grafiği koşul koşul sına. Bir koşulu bozan grafiği hemen ele; çoğu çeldirici tek bir koşulu bozar."
      ],
      ornekler: [
        "Mini örnek: “En sevdiğin mevsim hangisi?” anketine 400 kişi katılmış. Daire grafikte “ilkbahar” dilimi %35, “sonbahar” dilimi %20. Soru: İlkbaharı seçenler, sonbaharı seçenlerden kaç kişi fazladır? Adım 1: yüzde farkı 35 − 20 = 15. Adım 2: 400 × [[15|100]] = 60 kişi. Sağlama: 400'ün %35'i 140, %20'si 80; 140 − 80 = 60."
      ],
      dikkat: [
        "**Hesabı yapmadan eleme:** “Aşağı yukarı eşit” deyip geçme; yakın değerlerde sayıları oku, işlemi yap."
      ]
    },
    {
      baslik: "Artış miktarı mı, artış oranı mı?",
      maddeler: [
        "**Artış miktarı** “kaç tane arttı?” sorusunun cevabıdır: son değer − ilk değer.",
        "**Artış oranı** “kendine göre ne kadar büyüdü?” sorusunun cevabıdır: 40'tan 80'e çıkan şey **iki katına** çıkmıştır, 400'den 440'a çıkan şey yalnızca onda biri kadar büyümüştür. İkisinde de artış 40'tır.",
        "“Daha çok arttı” sözü çoğunlukla miktarı, “iki katına çıktı, hızla büyüdü” sözü oranı anlatır. Şıkkın hangisini söylediğini ayırt et."
      ],
      ornekler: [
        "Bir çiçekçi ocakta 40, şubatta 60, martta 90 saksı satmış. Şubattan marta artış (30), ocaktan şubata artıştan (20) fazladır; ama iki ayda da satış kendine göre **yarısı kadar** artmıştır (40'ın yarısı 20, 60'ın yarısı 30). “Mart artışı daha büyüktür” yargısı miktar için doğru, oran için yanlıştır."
      ],
      dikkat: [
        "**Yüzdeyi sayı sanma:** İki daire grafiğin toplamları farklıysa yüzdenin düşmesi sayının düştüğünü göstermez. Toplam 150'ken %40 = 60 kişi; toplam 300'ken %25 = 75 kişidir. Yüzde azaldı, kişi sayısı arttı.",
        "**Tek seriye bakma:** İki çizgili grafikte “iki yılda da, iki grupta da” diye kurulan yargıyı her iki çizgide ayrı ayrı sına.",
        "**“Her seferinde arttı” yargısı:** Her adımı tek tek kontrol et. Aynı kalan değer artış değildir; bir tek düşüş yargıyı bozar."
      ]
    },
    {
      baslik: "Ulaşılır mı, ulaşılamaz mı?",
      maddeler: [
        "Bir yargıya **ulaşılabilmesi** için bilgi görselde olmalı ya da görseldeki sayılarla hesaplanabilmelidir: fark, toplam, sıralama, en çok, en az.",
        "Yargı nedeni, geleceği, duyguyu ya da grafikte olmayan bir grubu anlatıyorsa **ulaşılamaz**.",
        "“__Ulaşılamaz__” kökünde üç şık görselde doğrulanır. Senin işin o üçünü **hesaplayarak** bulup elemektir; cevap kalan şıktır.",
        "“__Kesinlikle__ doğrudur” kökünde yalnızca görselden zorunlu olarak çıkan yargı doğrudur. “Olabilir, belki” düzeyinde kalan yargı elenir: yüzdesi aynı kalan bir grubun kişi sayısı, toplam değiştiyse aynı kalmamış olabilir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Şıktaki yargı</th><th>Karar</th><th>Neden?</th></tr><tr><td>“Mart'ta nisandan 15 kişi fazla gelmiştir.”</td><td>Ulaşılır</td><td>İki değer grafikte var, fark hesaplanır</td></tr><tr><td>“Satışlar hava soğuduğu için düşmüştür.”</td><td>Ulaşılamaz</td><td>Grafik ne olduğunu gösterir, <strong>niçin</strong> olduğunu göstermez</td></tr><tr><td>“Gelecek ay da artış sürecektir.”</td><td>Ulaşılamaz</td><td>Grafik geçmişi gösterir; gelecek tahmindir</td></tr><tr><td>“Ziyaretçiler en çok cumartesiden memnun kalmıştır.”</td><td>Ulaşılamaz</td><td>Kişi sayısı memnuniyeti ölçmez</td></tr><tr><td>Yüzde grafiği verilmiş, “kaç kişi” soruluyor</td><td>Toplam verildiyse ulaşılır, verilmediyse ulaşılamaz</td><td>Yüzdeyi sayıya çevirmek için toplam gerekir</td></tr></table>",
      dikkat: [
        "**Grafikte bulunan bilgiyi ulaşılamaz sanma:** En sık hatadır. Yargı grafikte yazmıyor gibi görünse de iki değeri çıkarınca ya da toplayınca bulunuyorsa **ulaşılabilir**.",
        "**Aşırı genelleme:** Grafik bir sınıfı, bir haftayı ya da üç ayı gösteriyorsa şıktaki “bütün öğrenciler, her hafta, yıl boyunca” sözü grafiğin sınırını aşar."
      ]
    },
    {
      baslik: "Afiş, duyuru ve bilgi görseli",
      maddeler: [
        "Afişi bir soru listesiyle oku: **Ne? Ne zaman? Nerede? Kimler katılabilir? Ne getirilecek, ne sağlanacak? Ücret var mı? Son başvuru ne zaman?**",
        "Katılım koşulları **birlikte** geçerlidir: yaş, sınıf, tarih, belge koşulunun hepsini sağlayan katılabilir. Bir koşulu sağlamayanı hemen ele.",
        "“Getiriniz” ile “sağlanacaktır” sözlerini ayır: birincisini katılımcı getirir, ikincisini düzenleyen verir.",
        "Tarih ve süre hesabında afişin sözcüklerine sadık kal: “en geç 10 Mayıs” 10 Mayıs'ı içerir; “10 Mayıs'tan önce” içermez. Aynı dikkat sınır sözlerinde de gerekir: “en fazla 2 saat” sınırına eşit olan 2 saat hedefi aşmaz; “9-12 yaş arası” 13 yaşı kapsamaz; “20'nin altında” 20'yi içermez.",
        "“İndirimler birleştirilmez”, “bir günde en fazla … TL” gibi kurallar hesabı değiştirir. Gün sayarken sayımın nereden başladığına (“ertesi günden”) ve hafta sonunun sayılıp sayılmadığına bak.",
        "**Tablodan seçim** sorularında önce koşulu bozan satırları ele, **sonra** kalanlar arasından en ucuzu ya da en yakını seç. En ucuz satır çoğu zaman bir koşulu bozan çeldiricidir. “—”, “Kapalı” gibi işaretler de bilgidir.",
        "“Hangi afiş ölçütlere uygundur?” sorusunda her afişte ölçütleri tek tek işaretle. Ünlem cümlesi soru değildir.",
        "Bilgi görselinde (infografik) okları izleyerek sırayı, sayıları okuyarak miktarı çıkar; çizgi türü ya da renk (açık/kapalı) da bilgidir."
      ],
      dikkat: [
        "**Bir koşulu atlama:** Dört koşuldan üçünü sağlayan kişi yine katılamaz. Kalan son koşulu da kontrol etmeden şıkkı işaretleme.",
        "**Görselde olmayan bilgiyi ekleme:** Afişte yazmayan bir malzemeyi ya da kuralı “mantıklı” diye ekleme. Soru afişe göre sorulur, senin tahminine göre değil."
      ]
    },
    {
      baslik: "Karikatür ve çizgi roman",
      maddeler: [
        "Karikatürün mesajı çoğu zaman **çizimdedir**. Sor: Kim var, ne yapıyor? Hangi ayrıntı abartılmış? Kim ötekilerden farklı?",
        "Abartılan ayrıntıyı bulunca bir basamak genelle: tek davranıştan, gösterdiği **tutuma** geç.",
        "Karikatürde söz ile davranış çelişiyorsa mesaj oradadır. Örneğin “Sessiz olun” levhasını megafonla bağırarak duyuran bir görevli çizilmişse eleştirilen, söylenenle yapılanın uyuşmamasıdır.",
        "Çizgi romanda **kareler arasında ne değiştiğine** bak: zaman geçmiş mi, yüz ifadesi değişmiş mi, bir karakter balonda söylediğini sonraki karede yapmış mı? Balonda söylenen, gerçekleşmiş olay değildir; gerçekleşeni çizim gösterir."
      ],
      dikkat: [
        "**Görünende kalma:** Karikatürdeki nesneyi (araç, eşya) mesaj sanma. Nesne yalnızca bir araçtır; asıl eleştirilen, onu kullanan kişinin tutumudur.",
        "**Görseli aşan yorum:** Karikatürde hiçbir işareti olmayan bir eleştiriyi (ör. “teknoloji zararlıdır”) şıkta görürsen ele.",
        "**Ayrıntıyı ana mesaj sanma:** Arka plandaki bir ayrıntı gerçekten görselde olabilir ama karikatürün asıl söylediği o değildir."
      ]
    },
    {
      baslik: "Metin ile grafik birlikte, iki görsel yan yana",
      maddeler: [
        "Metin + grafik sorularında metindeki her yargıyı (haber başlığındaki iddialar dâhil) **tek tek** grafikte sına.",
        "Numaralı cümlelerin yanına “uyuyor / çelişiyor / grafikte yok” diye not düş. “Çelişiyor” grafiğin tersini, “grafikte yok” grafiğin hiç söylemediğini anlatır.",
        "İki grafik ya da iki tablo verildiğinde önce ikisinin **ortak ölçütünü** bul (aynı birim mi, aynı zaman mı, aynı toplam mı?), sonra karşılaştır. Ölçekleri farklı iki grafikte çubuk boylarını değil, sayıları karşılaştır."
      ],
      dikkat: [
        "**Ters yön:** “A, B'den fazladır” yerine “B, A'dan fazladır” diyen şık hızlı okuyana doğru görünür. Karşılaştırma şıklarında kimin kimden fazla olduğunu iki kez oku.",
        "**Sütunları karıştırma:** İki sütunlu tabloda (ör. öğrenci / yetişkin) istenen sütunu kökte işaretle, hesabı yalnız o sütunla yap."
      ]
    }
  ],
  lgs: [
    "Görsel ve grafik soruları yöntemi bilen için hızlı net kaynağıdır.",
    "Sık görülen kök “Bu grafikten aşağıdakilerden hangisine __ulaşılamaz__?” biçimindedir. Çeldiriciler çoğunlukla görselde gerçekten bulunan ama hesap gerektiren bilgilerdir.",
    "Afiş sorularında birkaç kişinin bilgisi verilir ve “hangisi katılabilir” diye sorulur; doğru cevap bütün koşulları aynı anda sağlayan tek kişidir. “__Katılamaz__” kökünde ise en az bir koşulu bozan tek kişiyi ararsın."
  ],
  yokla: [
    { soru: "Bir grafiğin değerlerini okumadan önce hangi dört şeye bakarsın?", cevap: "Başlığa, eksenlere, birime ve ölçeğe (sıfırdan başlıyor mu?). İki renk varsa göstergeye de." },
    { soru: "Bir dükkânın satışı 50'den 100'e, ötekinin 300'den 360'a çıkmış. Hangisinin satışı daha çok artmıştır, hangisi kendine göre daha hızlı büyümüştür?", cevap: "İkincisinin artışı daha çoktur (60 > 50). Ama ilki iki katına çıkmıştır, ikincisi yalnızca beşte biri kadar büyümüştür; oran olarak ilki daha hızlı büyümüştür." },
    { soru: "Bir çizgi grafik bir ilçedeki üç aylık yağışı gösteriyor. “Yağış arttığı için tarlalarda verim yükselmiştir.” yargısına ulaşılabilir mi?", cevap: "Ulaşılamaz. Grafik yalnızca yağış miktarını gösterir; verim hakkında ve neden-sonuç hakkında bilgi vermez." },
    { soru: "Daire grafikte bir dilim %25. Toplam verilmemişse bu dilimdeki kişi sayısını bulabilir misin?", cevap: "Bulamam. Dilimin bütünün dörtte biri olduğunu söyleyebilirim ama kişi sayısı için toplamın bilinmesi gerekir." },
    { soru: "Bir afişte “Kalem ve kâğıt tarafımızdan sağlanacaktır, suluboya takımınızı getiriniz.” yazıyor. Katılımcı ne getirmelidir?", cevap: "Yalnızca suluboya takımını. Kalem ve kâğıdı düzenleyen verir; “sağlanacaktır” ile “getiriniz” işi farklı kişilere yükler." }
  ]
};
