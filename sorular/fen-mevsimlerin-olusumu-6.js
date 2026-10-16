// Fen Bilimleri — Mevsimlerin Oluşumu: Kademe 3 (LGS Ayarı) yedeği, 50 soru (326-375)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["mevsimlerin-olusumu"] = window.LGS_BANK["mevsimlerin-olusumu"] || []).push(
{
  id: "fen-mv-326",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Antarktika kıyısında, Güney Kutup Dairesi'nin içinde bulunan bir araştırma üssünde görevli Defne, 21 Aralık günü günlüğüne şunu yazmıştır: "Bugün Güneş gece yarısında bile ufkun üzerinde kaldı, hiç batmadı." Aynı gün Kuzey Kutup Dairesi'nin içinde görev yapan arkadaşı Mert de gökyüzünü gözlemlemiştir.
**Buna göre Mert'in aynı gün yaptığı gözlem aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Güneş 24 saat boyunca ufkun üzerinde kalmıştır.",
    "Gündüz ile gece yaklaşık 12'şer saat sürmüştür.",
    "Güneş hiç doğmamış, gün boyu ufkun altında kalmıştır.",
    "Gündüz süresi 12 saatten uzun, 24 saatten kısa olmuştur."
  ],
  dogru: 2,
  hatalar: [
    "İki kutbu aynı sanma: 21 Aralık'ta Güney Kutup Dairesi'nin içi 24 saat aydınlıkken Kuzey Kutup Dairesi'nin içi 24 saat karanlıktır.",
    "Ekinoksla karıştırma: gece ile gündüzün eşitliği 21 Mart ve 23 Eylül'e özgüdür, 21 Aralık'a değil.",
    null,
    "Kutupta gündüzü biraz uzamış sanma: 21 Aralık'ta Kuzey Yarım Küre'de gündüzler yılın en kısa hâlindedir ve kutup dairesinin içinde bu süre sıfıra iner."
  ],
  aciklama: `Kutup Dairesi, kutba yakın öyle bir bölgedir ki yılın bazı günlerinde Güneş orada hiç doğmaz ya da hiç batmaz.
Adım 1: Defne'nin gözlemi Güney Kutup Dairesi'nin içinde 21 Aralık'ta Güneş'in hiç batmadığını söylüyor. Güney Yarım Küre'de 21 Aralık yaz başlangıcıdır; bu yarım küre Güneş'e en çok yönelmiş durumdadır.
Adım 2: Aynı gün Kuzey Yarım Küre Güneş'ten uzağa yönelmiştir, orada kış başlar ve gündüzler yılın en kısa hâlindedir.
Adım 3: Bu yüzden Kuzey Kutup Dairesi'nin içinde Güneş hiç doğmaz, gün boyu ufkun altında kalır.
Sık yapılan hata: İki kutup bölgesini aynı durumda sanmak. Kutuplar her zaman birbirinin tersidir; biri 24 saat aydınlıksa öbürü 24 saat karanlıktır.
Cevap C.`
},
{
  id: "fen-mv-327",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tiyatro sahnesinde teknisyen, tavandaki bir spot lambanın ışığını önce oyuncunun tam üzerine (Durum 1), sonra yan tarafa doğru eğerek zemine (Durum 2) göndermiştir. İki durumda da lambanın zemine uzaklığı ve lambanın verdiği ışık aynıdır. Aydınlanan bölgelerin genişliği şekilde verilmiştir.
I. Durum 2'de aydınlanan bölgenin her metrekaresine düşen ışık enerjisi Durum 1'dekinden fazladır.
II. Durum 2'de ışık, Durum 1'dekinden daha geniş bir alana yayılır.
III. Durum 2'de lambanın zemine gönderdiği toplam ışık enerjisi Durum 1'dekinden azdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 250" role="img" aria-label="İki durumda spot lambanın zeminde aydınlattığı bölge: Durum 1 de 1 metre, Durum 2 de 2 metre"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="190" x2="240" y2="190"/><line x1="300" y1="190" x2="510" y2="190"/></g>
<g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><circle cx="140" cy="36" r="14"/><circle cx="340" cy="36" r="14"/></g>
<g stroke="var(--vurgu)" stroke-width="2"><line x1="132" y1="48" x2="115" y2="190"/><line x1="148" y1="48" x2="165" y2="190"/><line x1="346" y1="48" x2="360" y2="190"/><line x1="352" y1="46" x2="460" y2="190"/></g>
<g stroke="currentColor" stroke-width="2"><line x1="115" y1="212" x2="165" y2="212"/><line x1="115" y1="206" x2="115" y2="218"/><line x1="165" y1="206" x2="165" y2="218"/><line x1="360" y1="212" x2="460" y2="212"/><line x1="360" y1="206" x2="360" y2="218"/><line x1="460" y1="206" x2="460" y2="218"/></g>
<g fill="currentColor" font-size="16" text-anchor="middle"><text x="140" y="238">1 m</text><text x="410" y="238">2 m</text><text x="75" y="24">Durum 1</text><text x="275" y="24">Durum 2</text></g></svg>`,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı gözden kaçırma: ışık yana doğru eğildiğinde aydınlanan bölge genişler. III. yargıyı doğru sanma: lambanın verdiği ışık iki durumda da aynıdır, toplam enerji değişmez.",
    "I. yargıyı doğru sanma: aynı enerji daha geniş alana yayıldığı için birim yüzeye düşen enerji azalır. II. yargıyı gözden kaçırma: ışık yana doğru eğildiğinde aydınlanan bölge genişler. III. yargıyı doğru sanma: lambanın verdiği ışık iki durumda da aynıdır, toplam enerji değişmez.",
    "III. yargıyı doğru sanma: lambanın verdiği ışık iki durumda da aynıdır, toplam enerji değişmez."
  ],
  aciklama: `Birim yüzeye düşen enerji, yüzeyin her bir metrekaresine düşen ışık enerjisidir. Işık eğik düştüğünde aynı enerji daha geniş alana yayılır ve bu pay azalır.
Adım 1 (I. yargı): Aynı enerji daha geniş alana yayıldığı için birim yüzeye düşen enerji azalır. I. yargı yanlıştır.
Adım 2 (II. yargı): Işık yana doğru eğildiğinde aydınlanan bölge genişler. II. yargı doğrudur.
Adım 3 (III. yargı): Lambanın verdiği ışık iki durumda da aynıdır, toplam enerji değişmez. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız II.
Sık yapılan hata: Toplam enerji ile birim yüzeye düşen enerjiyi karıştırmak. Işık eğilince toplam enerji değişmez; yalnızca yayıldığı alan büyür.
Cevap A.`
},
{
  id: "fen-mv-328",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Singapur gibi Ekvator'a çok yakın bir şehre taşınan Emre'nin ailesi, bir yıl boyunca havayı izlemiştir. Aile, Türkiye'dekine benzer dört belirgin mevsimin yaşanmadığını, yıl boyunca öğle vakti Güneş'in gökyüzünde hep yüksekte durduğunu fark etmiştir.
**Buna göre bu şehirde mevsim farkının çok az hissedilmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Dünya'nın Güneş'e uzaklığının orada yıl boyunca hiç değişmemesi",
    "Dönme ekseninin eğikliğinin orada etkisini tamamen yitirmesi",
    "Gece ile gündüz sürelerinin orada yıl boyunca birbirinden çok farklı olması",
    "Öğle ışınlarının yatay yüzeyle yaptığı açının yıl boyunca az değişmesi"
  ],
  dogru: 3,
  hatalar: [
    "Uzaklık yanılgısı: Dünya'nın Güneş'e uzaklığı yıl içinde her yerde çok az değişir ve mevsimleri açıklamaz. Ekvator'u farklı yapan uzaklık değil, ışınların açısıdır.",
    "Eğikliğin yok sayılması: eksen eğikliği Dünya'nın her yerinde vardır. Ekvator'da etkisi, ışın açısının az değişmesi biçiminde görünür.",
    "Sonucu ters yazma: Ekvator'da gündüz ile gece yıl boyunca 12 saate yakındır, yani birbirinden çok farklı değildir.",
    null
  ],
  aciklama: `Mevsim farkı, bir yerde ışınların düşme açısının yıl boyunca ne kadar değiştiğine bağlıdır.
Adım 1: Eksen eğik olduğu için yıl içinde Güneş'in öğle yüksekliği her yerde değişir; ama bu değişim Ekvator çevresinde küçük, orta kuşakta büyüktür.
Adım 2: Aile Güneş'in yıl boyunca hep yüksekte durduğunu söylüyor. Yani öğle ışınları hep dike yakın düşüyor ve açı az değişiyor.
Adım 3: Açı az değiştiği için birim yüzeye düşen enerji de yıl boyunca az değişir ve mevsim farkı küçük kalır.
Sık yapılan hata: "Ekvator'a Güneş daha yakın" diye düşünmek. Yakınlık fark yaratmaz; ışınların açısı fark yaratır.
Cevap D.`
},
{
  id: "fen-mv-329",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir coğrafya kulübü, 21 Haziran günü üç şehrin gündüz sürelerini aşağıdaki tabloya yazmıştır.
I. K şehri Kuzey Yarım Küre'de, L şehri Güney Yarım Küre'dedir.
II. O gün K şehrinde yaz, L şehrinde kış mevsimi başlar.
III. M şehri kesinlikle Ekvator üzerindedir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Gündüz süresi</th></tr><tr><td>K</td><td>15 saat 20 dakika</td></tr><tr><td>L</td><td>9 saat 10 dakika</td></tr><tr><td>M</td><td>12 saat 5 dakika</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II. yargıyı gözden kaçırma: 21 Haziran'da Kuzey Yarım Küre'de yaz, Güney Yarım Küre'de kış başlar.",
    null,
    "II. yargıyı gözden kaçırma: 21 Haziran'da Kuzey Yarım Küre'de yaz, Güney Yarım Küre'de kış başlar. III. yargıyı doğru sanma: 12 saate çok yakın gündüz yalnızca Ekvator'a yakın olabileceğini gösterir; tam üzerinde olduğu kesin değildir.",
    "I. yargıyı gözden kaçırma: 21 Haziran'da gündüzü 12 saatten uzun olan yer Kuzey, kısa olan yer Güney Yarım Küre'dedir. III. yargıyı doğru sanma: 12 saate çok yakın gündüz yalnızca Ekvator'a yakın olabileceğini gösterir; tam üzerinde olduğu kesin değildir."
  ],
  aciklama: `21 Haziran'da Kuzey Yarım Küre'de en uzun gündüz yaşanır ve yaz başlar; Güney Yarım Küre'de ise en kısa gündüz ve kış başlangıcı vardır.
Adım 1 (I. yargı): 21 Haziran'da gündüzü 12 saatten uzun olan yer Kuzey, kısa olan yer Güney Yarım Küre'dedir. I. yargı doğrudur.
Adım 2 (II. yargı): 21 Haziran'da Kuzey Yarım Küre'de yaz, Güney Yarım Küre'de kış başlar. II. yargı doğrudur.
Adım 3 (III. yargı): 12 saate çok yakın gündüz yalnızca Ekvator'a yakın olabileceğini gösterir; tam üzerinde olduğu kesin değildir. III. yargı yanlıştır.
Adım 4: Doğru yargılar I ve II.
Sık yapılan hata: Gündüzü 12 saate yakın çıkan şehri "Ekvator'dadır" diye kesinleştirmek. Veri yakınlığı gösterir, tam konumu göstermez.
Cevap B.`
},
{
  id: "fen-mv-330",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıda Dünya'nın Güneş çevresindeki yörüngesinde birbirinin karşısında bulunan K ve L konumları şematik olarak çizilmiştir. Dönme ekseninin kuzey ucu noktayla işaretlenmiştir. Eksenin eğikliği ve yönü iki konumda da aynıdır; iki konum Güneş'ten eşit uzaklıktadır.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 520 290\" role=\"img\" aria-label=\"Dünya yörüngesinde K ve L konumları; eksenin kuzey ucu K konumunda Güneş'e doğru, L konumunda Güneş'ten uzağa doğru eğiktir\"><ellipse cx=\"260\" cy=\"140\" rx=\"190\" ry=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"6 5\"/><circle cx=\"260\" cy=\"140\" r=\"26\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><text x=\"260\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Güneş</text><circle cx=\"75\" cy=\"140\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"61.4\" y1=\"171.2\" x2=\"88.6\" y2=\"108.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"88.6\" cy=\"108.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"39\" y=\"146\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">K</text><circle cx=\"445\" cy=\"140\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"431.4\" y1=\"171.2\" x2=\"458.6\" y2=\"108.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"458.6\" cy=\"108.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"483\" y=\"146\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">L</text></svg>",
  secenekler: [
    "K konumunda Kuzey Yarım Küre'de kış yaşanır.",
    "L konumunda Kuzey Yarım Küre'ye ışınlar K konumundakine göre daha eğik düşer.",
    "L konumunda dönme ekseninin eğikliği K konumundakinden daha büyüktür.",
    "K konumunda Dünya Güneş'e daha yakın olduğundan Kuzey Yarım Küre'de yaz yaşanır."
  ],
  dogru: 1,
  hatalar: [
    "Eksen yönünü ters okuma: K konumunda eksenin kuzey ucu Güneş'e doğrudur; Kuzey Yarım Küre'ye ışınlar daha dik düşer ve orada yaz yaşanır.",
    null,
    "Eğikliğin değiştiğini sanma: eksenin eğikliği ve yönü yıl boyunca sabittir; değişen yalnızca Dünya'nın yörüngedeki konumudur.",
    "Uzaklık yanılgısı: iki konum Güneş'ten eşit uzaklıktadır. Yaz, yakınlıktan değil ışınların daha dik düşmesinden gelir."
  ],
  aciklama: `Güneş'e doğru eğik olan yarım küreye ışınlar daha dik düşer ve orada yaz yaşanır.
Adım 1: K konumunda eksenin kuzey ucu Güneş'e doğru eğiktir. Kuzey Yarım Küre'ye ışınlar dik düşer, orada yaz yaşanır (A yanlış).
Adım 2: L konumunda aynı ucun eğikliği Güneş'ten uzağa doğrudur. Kuzey Yarım Küre'ye ışınlar daha eğik düşer ve orada kış yaşanır. B doğrudur.
Adım 3: Eksenin eğikliği iki konumda da aynıdır, değişen yalnızca konumdur (C yanlış). İki konum Güneş'ten eşit uzaklıktadır, bu yüzden yaz nedeni yakınlık olamaz (D yanlış).
Sağlama: Aynı iki konumda Güney Yarım Küre'de durum tersidir; K'de kış, L'de yaz yaşanır.
Cevap B.`
},
{
  id: "fen-mv-331",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kuzey Yarım Küre'de bir bahçede çalışan bahçıvan, mart sonundan haziran sonuna kadar her hafta öğle vakti dik bir kazığın gölgesini ölçmüş ve gölgenin haftalar geçtikçe kısaldığını görmüştür.
I. Bu dönemde öğle ışınlarının yatay yüzeyle yaptığı açı küçülmüştür.
II. Bu dönemde bahçede gündüz süreleri uzamıştır.
III. Bu dönemde bahçenin birim yüzeyine düşen ışık enerjisi artmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "I. yargıyı doğru sanma: gölge kısaldıkça ışınlar dikleşir ve yatay yüzeyle yaptıkları açı büyür. II. yargıyı gözden kaçırma: Kuzey Yarım Küre'de mart sonundan haziran sonuna doğru yaz başlangıcına yaklaşılır ve gündüzler uzar. III. yargıyı gözden kaçırma: ışınlar dikleştikçe aynı enerji daha dar alana düşer ve birim yüzeye düşen enerji artar.",
    "II. yargıyı gözden kaçırma: Kuzey Yarım Küre'de mart sonundan haziran sonuna doğru yaz başlangıcına yaklaşılır ve gündüzler uzar.",
    "I. yargıyı doğru sanma: gölge kısaldıkça ışınlar dikleşir ve yatay yüzeyle yaptıkları açı büyür. III. yargıyı gözden kaçırma: ışınlar dikleştikçe aynı enerji daha dar alana düşer ve birim yüzeye düşen enerji artar.",
    null
  ],
  aciklama: `Gölge boyu, ışınların açısını gösteren bir ipucudur: gölge kısaldıkça ışınlar daha dik düşer.
Adım 1 (I. yargı): Gölge kısaldıkça ışınlar dikleşir ve yatay yüzeyle yaptıkları açı büyür. I. yargı yanlıştır.
Adım 2 (II. yargı): Kuzey Yarım Küre'de mart sonundan haziran sonuna doğru yaz başlangıcına yaklaşılır ve gündüzler uzar. II. yargı doğrudur.
Adım 3 (III. yargı): Işınlar dikleştikçe aynı enerji daha dar alana düşer ve birim yüzeye düşen enerji artar. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: Gölge kısalınca açının da küçüldüğünü sanmak. Kısa gölge, Güneş'in gökyüzünde daha yüksekte, yani açının daha büyük olduğu anlamına gelir.
Cevap D.`
},
{
  id: "fen-mv-332",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Güney Yarım Küre'de, Güney Afrika'nın Cape Town kenti yakınlarında yaşayan bir aile, yeni evinin salonunu kış aylarında (haziran-ağustos) gün boyu en çok güneş ışığı alacak biçimde tasarlamak istemektedir. Mimar, geniş cam cephenin hangi yöne bakması gerektiğini araştırmaktadır.
**Buna göre cam cephe hangi yöne bakmalıdır ve gerekçesi nedir?**`,
  gorsel: null,
  secenekler: [
    "Kuzeye; çünkü öğle vakti Güneş kuzey yönünde bulunur.",
    "Güneye; çünkü öğle vakti Güneş güney yönünde bulunur.",
    "Doğuya; çünkü Güneş her gün doğudan doğar.",
    "Batıya; çünkü Güneş her gün batıda batar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım küreyi unutma: Kuzey Yarım Küre'de öğle Güneş'i güneyde görülür; bu kural Güney Yarım Küre'de tersine döner.",
    "Doğuş yönünü öğle ışınlarıyla karıştırma: Güneş doğudan doğar ama gün boyu ışığı en çok öğle vakti, kuzeydeki konumundan alınır.",
    "Batış yönünü öğle ışınlarıyla karıştırma: Güneş batıda batar ama kış öğle ışınlarının en dik geldiği yön kuzeydir."
  ],
  aciklama: `Güneş öğle vakti, bulunduğun yarım kürenin kutbundan uzakta kalan yönde görülür. Kuzey Yarım Küre'de bu yön güney, Güney Yarım Küre'de kuzeydir.
Adım 1: Aile Güney Yarım Küre'de yaşıyor. Eksen eğikliği yüzünden Güneş burada öğle vakti gökyüzünün kuzey tarafında görünür.
Adım 2: Kışın Güneş alçaktır; en çok ışık, öğle Güneş'ine dönük yüzeye gelir. Yani kuzeye bakan cam cephe ışınları en dik alır.
Adım 3: Doğu ve batı cepheleri yalnızca sabah ve akşam ışık alır.
Sık yapılan hata: Kuzey Yarım Küre'de öğrenilen "güneye bak" kuralını her yere uygulamak. Önce yarım küreye bak.
Sağlama: Aynı ev Türkiye'de olsaydı cam cephe güneye bakardı.
Cevap A.`
},
{
  id: "fen-mv-333",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilgisayar oyununda gezegen simülasyonu kurulmuştur. Oyuncu, Dünya'nın Güneş çevresindeki dolanmasını durdurmuştur; Dünya yörüngedeki sabit bir noktada kalmış ve yalnız kendi ekseni çevresinde dönmektedir. Dönme süresi (24 saat) ve eksen eğikliği (23,5°) aynı bırakılmıştır.
I. Simülasyonda gece ile gündüz oluşmaz.
II. Simülasyonda mevsim değişimi oluşmaz.
III. Simülasyonda bir yerde gündüz süresi günden güne değişir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı doğru sanma: gece ile gündüzü dönme oluşturur ve dönme sürmektedir. II. yargıyı gözden kaçırma: dolanma durunca Dünya'nın Güneş'e göre konumu değişmez, yarım küreler sırayla Güneş'e yönelmez ve mevsim değişimi olmaz.",
    null,
    "II. yargıyı gözden kaçırma: dolanma durunca mevsim değişimi olmaz. III. yargıyı doğru sanma: Dünya yörüngedeki yerinde sabit kaldığı için Güneş'e göre durumu değişmez ve gündüz süresi günden güne değişmez.",
    "I. yargıyı doğru sanma: gece ile gündüzü dönme oluşturur ve dönme süresi değişmemiştir."
  ],
  aciklama: `Gece ile gündüzü dönme, mevsim değişimini ise eğik eksenle birlikte dolanma oluşturur. Dolanma durursa Dünya'nın Güneş'e göre konumu sabit kalır.
Adım 1 (I. yargı): Gece ile gündüzü dönme oluşturur ve dönme sürmektedir. I. yargı yanlıştır.
Adım 2 (II. yargı): Dolanma durduğunda yarım küreler sırayla Güneş'e yönelmez; ışınların açısı ve gündüz süreleri yıl boyunca değişmez. Mevsim değişimi oluşmaz. II. yargı doğrudur.
Adım 3 (III. yargı): Dünya yörüngedeki yerinde sabit kaldığı için gündüz süresi günden güne değişmez. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız II.
Sık yapılan hata: Eksen eğik olduğu için mevsimlerin kendiliğinden oluşacağını sanmak. Eğik eksen tek başına yetmez; Dünya'nın dolanarak Güneş'e göre konum değiştirmesi de gerekir.
Cevap B.`
},
{
  id: "fen-mv-334",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Ela, "Mevsimler Dünya'nın Güneş'e yaklaşıp uzaklaşmasıyla oluşur." görüşünü sınamak için bir deney yapmıştır. Lambanın ışığını termometreli bir levhaya dik tutmuş, levhayı lambadan 20 cm, 40 cm ve 60 cm uzağa koyarak sıcaklık artışını ölçmüştür. Levha uzaklaştıkça sıcaklık artışı azalmıştır. Ela bu sonucu görüşünün kanıtı saymıştır.
**Buna göre Ela'nın bu sonuçtan çıkardığı yargıya yöneltilebilecek en doğru eleştiri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Işığın levhaya geliş açısı da değiştirildiği için deney uzaklığın etkisini ayırt edememiştir.",
    "Dünya'nın Güneş'e uzaklığı yıl boyunca hiç değişmediği için uzaklık görüşü baştan geçersizdir.",
    "Aynı anda Güneş'e eşit uzaklıktaki iki yarım küre farklı mevsim yaşadığı için uzaklık neden olamaz.",
    "Mevsimleri yalnız gündüz süreleri belirlediği için sıcaklık ölçen bir deney bu görüşü sınayamaz."
  ],
  dogru: 2,
  hatalar: [
    "Deney tasarımını yanlış okuma: ışık levhaya hep dik tutulmuştur, yani geliş açısı sabittir. Değişen yalnız uzaklıktır; bu yüzden bu eleştiri deneye uymaz.",
    "Uzaklık değişimini yok sayma: Dünya'nın Güneş'e uzaklığı yıl içinde az da olsa değişir (ocak başında en yakın, temmuz başında en uzak). Görüşün sorunu uzaklığın değişmemesi değil, değişimin mevsimleri açıklamamasıdır.",
    null,
    "Tek etkene indirgeme: mevsimleri yalnız gündüz süresi belirlemez; ışınların düşme açısı da etkilidir. Üstelik sıcaklık ölçmek, ısınmayı sınamak için uygun bir ölçümdür."
  ],
  aciklama: `Bir görüş doğruysa, gerçek Dünya'daki gözlemlerle de uyuşmalıdır. Deneyde uzaklık sıcaklığı değiştirmiş olabilir; ama mevsimlerin nedeni olup olmadığına gerçek gözlemler karar verir.
Adım 1: Deneyde levha lambaya hep dik tutulmuş, yalnız uzaklık değiştirilmiştir. Sonuç: uzaklaştıkça ısınma azalır. Bu, uzaklığın ısınmayı etkileyebileceğini gösterir.
Adım 2: Gerçek Dünya'da aynı anda iki yarım küre Güneş'e hemen hemen eşit uzaklıktadır ama biri yaz, öbürü kış yaşar. Uzaklık neden olsaydı iki yarım küre aynı anda aynı mevsimi yaşardı.
Adım 3: Demek ki deney uzaklığın ısıtmayı etkilediğini gösterir ama mevsimlerin nedenini açıklamaz. Mevsimleri ışınların düşme açısı ve gündüz süresi belirler.
Sık yapılan hata: Deneyde elde edilen bir sonucu, doğadaki olayın da nedeni sanmak.
Cevap C.`
},
{
  id: "fen-mv-335",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çocuk ansiklopedisinin "Mevsimler" sayfasını hazırlayan öğrenciler, sayfaya aşağıdaki yargıları yazmıştır.
I. Kuzey Yarım Küre'de yaz yaşanırken Güney Yarım Küre'de kış yaşanır.
II. Yaz mevsimi, Dünya'nın Güneş'e en yakın olduğu dönemde yaşanır.
III. Güneş'e yönelen yarım kürede ışınlar daha dik düşer ve gündüzler uzar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı gözden kaçırma: eğik eksen yüzünden iki yarım küre aynı anda zıt durumdadır. II. yargıyı doğru sanma: Dünya'nın Güneş'e en yakın olduğu dönem ocak başıdır ve o sırada Kuzey Yarım Küre'de kış yaşanır. III. yargıyı gözden kaçırma: Güneş'e yönelen yarım küre daha dik ışın alır ve orada gündüzler uzar.",
    null,
    "I. yargıyı gözden kaçırma: eğik eksen yüzünden iki yarım küre aynı anda zıt durumdadır. II. yargıyı doğru sanma: Dünya'nın Güneş'e en yakın olduğu dönem ocak başıdır ve o sırada Kuzey Yarım Küre'de kış yaşanır.",
    "II. yargıyı doğru sanma: Dünya'nın Güneş'e en yakın olduğu dönem ocak başıdır ve o sırada Kuzey Yarım Küre'de kış yaşanır."
  ],
  aciklama: `Mevsimleri belirleyen, Dünya'nın Güneş'e yakınlığı değil, eğik eksen yüzünden yarım kürelerin sırayla Güneş'e yönelmesidir.
Adım 1 (I. yargı): Eğik eksen yüzünden iki yarım küre aynı anda zıt durumdadır. I. yargı doğrudur.
Adım 2 (II. yargı): Dünya'nın Güneş'e en yakın olduğu dönem ocak başıdır ve o sırada Kuzey Yarım Küre'de kış yaşanır. II. yargı yanlıştır.
Adım 3 (III. yargı): Güneş'e yönelen yarım küre daha dik ışın alır ve orada gündüzler uzar. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve III.
Sık yapılan hata: "Yaz sıcak, o hâlde Güneş'e yakın" diye düşünmek. Dünya Güneş'e en yakın konumdayken Kuzey Yarım Küre'de kış yaşanır.
Cevap B.`
},
{
  id: "fen-mv-336",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir şehirde yaşayan Nehir, aralık ayının ilk haftasında gündüzlerin her gün biraz daha uzadığını fark etmiştir.
**Buna göre bu şehirle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kuzey Yarım Küre'dedir ve kış mevsimine girmektedir.",
    "Kuzey Yarım Küre'dedir ve ilkbahar mevsimine girmektedir.",
    "Ekvator üzerindedir ve gece ile gündüz eşitlenmektedir.",
    "Güney Yarım Küre'dedir ve yaz mevsimine yaklaşmaktadır."
  ],
  dogru: 3,
  hatalar: [
    "Takvimdeki aya göre karar verme: Kuzey Yarım Küre'de kışa girerken gündüzler uzamaz, aksine 21 Aralık'a kadar kısalır.",
    "Mevsimi ay adından seçme: ilkbahar ancak mart sonrasında başlar; aralıkta Kuzey Yarım Küre'de gündüzler kısalır.",
    "Eşitlenmeyi yanlış yorumlama: gece-gündüz eşitliği 21 Mart ve 23 Eylül'de her yerde yaşanır; aralıkta gündüzün uzaması Ekvator'u kanıtlamaz.",
    null
  ],
  aciklama: `21 Aralık'ta Kuzey Yarım Küre'de en kısa, Güney Yarım Küre'de en uzun gündüz yaşanır.
Adım 1: Aralık ayının ilk haftasında 21 Aralık'a henüz gelinmemiştir. Kuzey Yarım Küre'de bu dönemde gündüzler kısalmaya devam eder.
Adım 2: Gündüzleri uzayan bir şehir bu yüzden Kuzey Yarım Küre'de olamaz; Güney Yarım Küre'dedir. Orada 21 Aralık'a doğru gündüzler uzar.
Adım 3: Güney Yarım Küre'de 21 Aralık, yaz başlangıcıdır. Yani şehir yaz mevsimine yaklaşmaktadır.
Sık yapılan hata: "Gündüzler uzuyor" bilgisini yalnız başına alıp mevsim çıkarmak. Tarihi ve yarım küreyi birlikte düşün.
Cevap D.`
},
{
  id: "fen-mv-337",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Hazal, güneş ışığında solan mavi fon kâğıtlarını aynı lambanın altına, lambadan eşit uzaklıkta, kâğıtların yüzeyi ışığa 90°, 60° ve 30° açı yapacak biçimde yerleştirmiştir. Her kâğıt rengi aynı tona gelene kadar bekletilmiş ve solma süreleri 90° için 4 saat, 60° için 6 saat, 30° için 11 saat bulunmuştur.
I. Bu deneyde değiştirilen değişken, ışığın kâğıda geliş açısıdır.
II. Bu deneyde sabit tutulan değişkenlerden biri, ışığın kâğıda geliş açısıdır.
III. Bu deney, birim yüzeye düşen enerjinin lambaya uzaklıkla değiştiğini gösterir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I. yargıyı gözden kaçırma: Hazal yalnızca kâğıtların eğimini değiştirmiştir. II. yargıyı doğru sanma: geliş açısı bilerek değiştirildiği için sabit tutulan değil, değiştirilen değişkendir.",
    "III. yargıyı doğru sanma: uzaklık sabit tutulduğu için deney uzaklığın etkisini göstermez; solma süresi gösterge olarak açının etkisini yansıtır.",
    "I. yargıyı gözden kaçırma: Hazal yalnızca kâğıtların eğimini değiştirmiştir. II. yargıyı doğru sanma: geliş açısı bilerek değiştirildiği için sabit tutulan değil, değiştirilen değişkendir. III. yargıyı doğru sanma: uzaklık sabit tutulduğu için deney uzaklığın etkisini göstermez; solma süresi gösterge olarak açının etkisini yansıtır."
  ],
  aciklama: `Deneyde bilerek değiştirilen büyüklüğe değiştirilen (bağımsız) değişken, aynı tutulanlara sabit tutulan (kontrol) değişken, ölçülerek sonuç veren büyüklüğe de gösterge denir.
Adım 1 (I. yargı): Hazal yalnızca kâğıtların eğimini değiştirmiştir. I. yargı doğrudur.
Adım 2 (II. yargı): Geliş açısı bilerek değiştirildiği için sabit tutulan değil, değiştirilen değişkendir. II. yargı yanlıştır.
Adım 3 (III. yargı): Uzaklık sabit tutulduğu için deney uzaklığın etkisini göstermez; solma süresi gösterge olarak açının etkisini yansıtır. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız I.
Sık yapılan hata: Sonucu veren (solma süresi) ile değiştirilen büyüklüğü (açı) karıştırmak. Açı sen değiştirirsin, süre ölçülür.
Cevap A.`
},
{
  id: "fen-mv-338",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir liman şehrinde fener bekçisi, fenerin lambasını Güneş battıktan hemen sonra yakıp ertesi sabah Güneş doğmadan hemen önce söndürmektedir. Bekçi bugün lambayı 17.15'te yakmış, yarın sabah 07.15'te söndürecektir.
**Buna göre bu şehirle ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Şehirde bugün sonbahar ya da kış mevsimi yaşanmaktadır.",
    "Şehir Kuzey Yarım Küre'de bulunmaktadır.",
    "Bugün şehirde gündüz süresi 14 saattir.",
    "Bugün şehre yılın en dik açısıyla ışın gelmektedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım küreyi veriden çıkarma: gündüzün kısa olması hem Kuzey'de kışın hem Güney'de yazın ters tarihte yaşanır; yarım küre bu veriyle belirlenemez.",
    "Gece ile gündüzü karıştırma: lamba 14 saat yanık kalmıştır; bu gece süresidir. Gündüz 24 − 14 = 10 saattir.",
    "Kısa gündüzü dik ışınla bağdaştırma: gündüz kısa olduğu için ışınlar eğik düşer, yılın en dik açısı değildir."
  ],
  aciklama: `Gece ile gündüzün toplamı 24 saattir. Gündüz 12 saatten kısaysa o yerde sonbahar ya da kış yaşanır.
Adım 1: Lamba 17.15'ten ertesi sabah 07.15'e kadar yanık kalıyor. 17.15'ten gece yarısına 6 saat 45 dakika, gece yarısından 07.15'e 7 saat 15 dakika vardır; toplam 14 saat.
Adım 2: Gece 14 saat ise gündüz 24 − 14 = 10 saattir.
Adım 3: Gündüz 12 saatten kısa olduğuna göre şehirde sonbahar ya da kış yaşanmaktadır. Yarım küre ise bu veriyle bilinemez.
Sağlama: Güneş 07.15'te doğup 17.15'te batmıştır; gündüz 10 saat eder.
Cevap A.`
},
{
  id: "fen-mv-339",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `K kenti Ekvator üzerinde, L kenti ise Kuzey Kutup Dairesi'nin içinde kurulmuştur. İki kentte yaşayan öğrenciler yıl boyunca gündüz sürelerini kaydetmiştir.
I. İki kentte de gündüz süresi yıl boyunca 12 saate yakındır.
II. L kentinde 21 Haziran'da Güneş gece yarısında bile ufkun üzerindedir.
III. K kentinde gündüz süresi yıl boyunca 12 saate yakındır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I. yargıyı doğru sanma: kutup dairesi içinde gündüz süresi mevsime göre sıfır ile 24 saat arasında değişir. II. yargıyı gözden kaçırma: 21 Haziran'da Kuzey Kutup Dairesi'nin içi Güneş'e yöneliktir ve Güneş orada batmaz. III. yargıyı gözden kaçırma: Ekvator'da gündüz süresi yıl boyunca 12 saate çok yakındır.",
    "I. yargıyı doğru sanma: kutup dairesi içinde gündüz süresi mevsime göre sıfır ile 24 saat arasında değişir. III. yargıyı gözden kaçırma: Ekvator'da gündüz süresi yıl boyunca 12 saate çok yakındır.",
    null,
    "I. yargıyı doğru sanma: kutup dairesi içinde gündüz süresi mevsime göre sıfır ile 24 saat arasında değişir."
  ],
  aciklama: `Ekvator'dan kutuplara gidildikçe yaz ile kış arasındaki gündüz süresi farkı büyür; kutup dairesinin içinde bu fark en uç değerine ulaşır.
Adım 1 (I. yargı): Kutup dairesi içinde gündüz süresi mevsime göre sıfır ile 24 saat arasında değişir. I. yargı yanlıştır.
Adım 2 (II. yargı): 21 Haziran'da Kuzey Kutup Dairesi'nin içi Güneş'e yöneliktir ve Güneş orada batmaz. II. yargı doğrudur.
Adım 3 (III. yargı): Ekvator'da gündüz süresi yıl boyunca 12 saate çok yakındır. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: Gündüz süresinin yıl boyunca her yerde yaklaşık aynı kaldığını sanmak. Bu yalnız Ekvator çevresinde geçerlidir.
Cevap C.`
},
{
  id: "fen-mv-340",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gezgin, 21 Aralık günü öğle vakti ulaştığı şehirde dik duran bütün cisimlerin gölgelerinin neredeyse kaybolduğunu görmüştür. Bu, Güneş ışınlarının o şehre tam dik düştüğünü gösterir.
**Buna göre bu şehirle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kuzey Yarım Küre'dedir ve kış mevsimi başlamaktadır.",
    "Güney Yarım Küre'dedir ve yaz mevsimi başlamaktadır.",
    "Ekvator üzerindedir ve ilkbahar mevsimi başlamaktadır.",
    "Kuzey Yarım Küre'dedir ve yaz mevsimi başlamaktadır."
  ],
  dogru: 1,
  hatalar: [
    "Kış başlangıcıyla gölgesizliği karıştırma: Kuzey Yarım Küre'de 21 Aralık'ta ışınlar çok eğik düşer, gölgeler yılın en uzun hâlindedir.",
    null,
    "Ekinoksla karıştırma: Ekvator'da gölgesiz öğle 21 Mart ve 23 Eylül'de yaşanır, 21 Aralık'ta değil.",
    "Tarihi yarım küreyle eşleştirememe: 21 Aralık'ta Kuzey Yarım Küre'de kış başlar, yaz değil."
  ],
  aciklama: `Tam dik gelen ışın, Güneş'in o gün tam tepede olduğu yer demektir. Bu yer yılda iki dönence çizgisi arasında yer değiştirir.
Adım 1: 21 Aralık'ta Güneş ışınları öğle vakti Güney Yarım Küre'deki dönenceye (Oğlak Dönencesi) dik düşer. Gölgesiz bir öğle ancak bu hattın çevresinde görülür.
Adım 2: Demek ki şehir Güney Yarım Küre'dedir.
Adım 3: Güney Yarım Küre'de 21 Aralık yaz başlangıcıdır.
Sık yapılan hata: Gölgesiz öğleyi her zaman Ekvator'la ilişkilendirmek. Ekvator'da bu durum yalnız 21 Mart ve 23 Eylül'de görülür.
Cevap B.`
},
{
  id: "fen-mv-341",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim şenliğinde jüri, öğrencilerin mevsimlerle ilgili panolarında yazan yargıları değerlendirmektedir.
I. Dünya Güneş çevresinde dolanırken dönme ekseninin eğikliği değişmez.
II. 21 Haziran'da Ekvator'dan eşit uzaklıktaki, biri kuzeyde biri güneyde iki yerin öğle ışınlarının düşme açıları birbirinden farklıdır.
III. Dönme ekseninin eğikliği artarsa bir yerde yaz ile kış mevsimlerindeki ışın açıları arasındaki fark büyür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "II. yargıyı gözden kaçırma: eğik eksen yüzünden bir yarım küre Güneş'e yönelikken öbürü uzaktadır. III. yargıyı gözden kaçırma: eğiklik büyüdükçe yaz ve kış ışın açıları arasındaki fark büyür, mevsim farkı belirginleşir.",
    "I. yargıyı gözden kaçırma: eksenin eğikliği ve yönü yıl boyunca sabittir. III. yargıyı gözden kaçırma: eğiklik büyüdükçe yaz ve kış ışın açıları arasındaki fark büyür, mevsim farkı belirginleşir.",
    "I. yargıyı gözden kaçırma: eksenin eğikliği ve yönü yıl boyunca sabittir.",
    null
  ],
  aciklama: `Mevsimleri, sabit duran eğik eksenin Dünya yörüngede ilerledikçe farklı yarım kürelerin Güneş'e yönelmesine yol açması oluşturur.
Adım 1 (I. yargı): Eksenin eğikliği ve yönü yıl boyunca sabittir. I. yargı doğrudur.
Adım 2 (II. yargı): Eğik eksen yüzünden bir yarım küre Güneş'e yönelikken öbürü uzaktadır. II. yargı doğrudur.
Adım 3 (III. yargı): Eğiklik büyüdükçe yaz ve kış ışın açıları arasındaki fark büyür, mevsim farkı belirginleşir. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve II ve III.
Sık yapılan hata: Eksenin yıl içinde yön değiştirdiğini düşünmek. Eksen hep aynı yöne bakar; değişen Dünya'nın yörüngedeki yeridir.
Cevap D.`
},
{
  id: "fen-mv-342",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Güney Yarım Küre'de bulunan bir kentte yaşayan Selin, takvimde 21 Haziran'dan 23 Eylül'e kadar geçen dönemi gözlemlemektedir.
**Buna göre bu dönemde Selin'in kentinde gündüz süreleri ve mevsimler için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Gündüzler kısalır; yaz biter, sonbahar başlar.",
    "Gündüzler uzar; sonbahar biter, kış başlar.",
    "Gündüzler kısalır; kış biter, ilkbahar başlar.",
    "Gündüzler uzar; kış biter, ilkbahar başlar."
  ],
  dogru: 3,
  hatalar: [
    "Yarım küreyi Kuzey sanma: Kuzey Yarım Küre'de bu dönemde gündüzler kısalır ve yaz biter; Güney'de durum tersidir.",
    "Mevsim sırasını karıştırma: 21 Haziran'da Güney Yarım Küre'de kış başlar, sonbahar değil bitmiştir.",
    "Gündüz yönünü ters okuma: kış bitip ilkbahar başlarken gündüzler uzamaya başlar, kısalmaz.",
    null
  ],
  aciklama: `Güney Yarım Küre'de 21 Haziran kış, 23 Eylül ilkbahar başlangıcıdır; 21 Haziran'da gündüz yılın en kısa süresindedir.
Adım 1: 21 Haziran'da Güney Yarım Küre'de kış başlar ve gündüz en kısadır.
Adım 2: Bu tarihten sonra Güney Yarım Küre Güneş'e doğru yönelmeye başlar; gündüzler her gün biraz uzar.
Adım 3: 23 Eylül'de gündüz ile gece eşitlenir ve ilkbahar başlar. Yani kış biter, ilkbahar başlar.
Sağlama: Aynı dönemde Kuzey Yarım Küre'de gündüzler kısalır, yaz biter ve sonbahar başlar.
Cevap D.`
},
{
  id: "fen-mv-343",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kuzey Yarım Küre'de bir okulun bahçesinde 1 m boyundaki dik bir çubuğun gölgesi, 21 Haziran günü üç ayrı saatte ölçülmüştür. Ölçümler tabloda verilmiştir.
I. Gölgenin en kısa olduğu 12.00'de Güneş ışınları yere en dik açıyla düşmüştür.
II. Üç ölçüm arasında birim yüzeye düşen enerji en çok 12.00'de ölçülmüştür.
III. Gölge boyunun gün içinde değişmesinin nedeni, Dünya'nın Güneş çevresindeki dolanmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Saat</th><th>Gölge boyu</th></tr><tr><td>10.00</td><td>52 cm</td></tr><tr><td>12.00</td><td>30 cm</td></tr><tr><td>15.00</td><td>58 cm</td></tr></table>",
  secenekler: [
    "I ve II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı gözden kaçırma: ışınlar en dik düştüğünde aynı enerji en dar alana dağılır. III. yargıyı doğru sanma: gün içindeki değişimi dönme oluşturur; dolanma bir yılda bir tur atmaktır.",
    "I. yargıyı gözden kaçırma: gölge ne kadar kısaysa ışınlar o kadar diktir. III. yargıyı doğru sanma: gün içindeki değişimi dönme oluşturur; dolanma bir yılda bir tur atmaktır.",
    "III. yargıyı doğru sanma: gün içindeki değişimi dönme oluşturur; dolanma bir yılda bir tur atmaktır."
  ],
  aciklama: `Aynı yerde bir gün içinde Güneş'in ufuktan yüksekliği değişir; bunun nedeni Dünya'nın kendi ekseni çevresinde dönmesidir.
Adım 1 (I. yargı): Gölge ne kadar kısaysa ışınlar o kadar diktir. I. yargı doğrudur.
Adım 2 (II. yargı): Işınlar en dik düştüğünde aynı enerji en dar alana dağılır. II. yargı doğrudur.
Adım 3 (III. yargı): Gün içindeki değişimi dönme oluşturur; dolanma bir yılda bir tur atmaktır. III. yargı yanlıştır.
Adım 4: Doğru yargılar I ve II.
Sık yapılan hata: Gün içindeki değişimleri dolanmaya bağlamak. Dolanma yıl boyu süren, dönme ise gün içinde yaşanan değişimleri açıklar.
Cevap A.`
},
{
  id: "fen-mv-344",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir dağcılık kulübünün broşüründe "Zirveye çıkan dağcı, deniz seviyesine göre Güneş'e yaklaşık 8,8 km daha yaklaşmış olur." bilgisi yer almaktadır. Kulüp üyesi Aslı, "O hâlde zirvede her zaman yaz yaşanır." demiştir. Dünya ile Güneş arasındaki uzaklık ise yaklaşık 150 milyon km'dir.
**Buna göre Aslı'nın görüşü için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Doğrudur; zirvede Güneş'e uzaklık azaldığı için ışınlar tabandakinden daha dik düşer.",
    "Yanlıştır; zirvede ışınlar tabandakinden daha eğik düştüğü için orada hep kış yaşanır.",
    "Yanlıştır; 8,8 km, Dünya-Güneş uzaklığının yanında çok küçüktür ve mevsimleri uzaklık belirlemez.",
    "Doğrudur; zirvede gece ile gündüz süreleri tabandakinden farklı olduğu için yaz yaşanır."
  ],
  dogru: 2,
  hatalar: [
    "Yakınlığı ışın açısıyla karıştırma: 8,8 km uzaklığı fark edilir biçimde değiştirmez ve ışınların açısını da değiştirmez.",
    "Yüksekliği ters etkiye bağlama: zirve ile taban arasındaki yükseklik farkı ışınların geliş açısını değiştirmez, kış yaşanmasının nedeni olamaz.",
    null,
    "Gece-gündüz süresini yükseltiye bağlama: aynı enlemdeki zirve ile taban arasında gündüz süresi farkı oluşmaz."
  ],
  aciklama: `Mevsimleri belirleyen, ışınların düşme açısıdır; Güneş'e uzaklık değil.
Adım 1: Dünya ile Güneş arasındaki uzaklık yaklaşık 150 milyon km'dir. Zirvede 8,8 km yaklaşmak bu uzaklığın on binde birinden bile azdır.
Adım 2: Bu kadar küçük bir fark, ışınların açısını da, aldığı enerjiyi de fark edilir biçimde değiştirmez.
Adım 3: Mevsimler, eğik eksen yüzünden ışınların yarım kürelere farklı açıyla düşmesiyle oluşur. Yükseklik bunu değiştirmez.
Sık yapılan hata: "Yüksekte Güneş'e yakınız, o hâlde sıcak olmalı" düşüncesi. Dağların serin olması başka etkenlerden gelir ve mevsim nedeni değildir.
Cevap C.`
},
{
  id: "fen-mv-345",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen kulübü, Türkiye'de bulunan Ardahan ve Antalya şehirlerinde 21 Haziran ve 21 Aralık günlerindeki gündüz sürelerini aşağıdaki tabloya yazmıştır.
I. 21 Haziran'da Ardahan'da gündüz süresi Antalya'dakinden kısadır.
II. Antalya'da yaz ile kış arasındaki gündüz süresi farkı Ardahan'dakinden azdır.
III. 21 Aralık'ta Ardahan'da ışınlar Antalya'dakinden kesinlikle daha dik düşer.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>21 Haziran</th><th>21 Aralık</th></tr><tr><td>Ardahan</td><td>15 saat 05 dakika</td><td>9 saat 15 dakika</td></tr><tr><td>Antalya</td><td>14 saat 30 dakika</td><td>9 saat 45 dakika</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı doğru sanma: tabloya göre Ardahan'da gündüz 15 saat 05 dakika, Antalya'da 14 saat 30 dakikadır. II. yargıyı gözden kaçırma: Antalya'da fark yaklaşık 4 saat 45 dakika, Ardahan'da yaklaşık 5 saat 50 dakikadır.",
    null,
    "I. yargıyı doğru sanma: tabloya göre Ardahan'da gündüz 15 saat 05 dakika, Antalya'da 14 saat 30 dakikadır. II. yargıyı gözden kaçırma: Antalya'da fark yaklaşık 4 saat 45 dakika, Ardahan'da yaklaşık 5 saat 50 dakikadır. III. yargıyı doğru sanma: Antalya'da kış gündüzü daha uzun olduğu için orası Ekvator'a daha yakındır ve ışınlar orada daha diktir.",
    "III. yargıyı doğru sanma: Antalya'da kış gündüzü daha uzun olduğu için orası Ekvator'a daha yakındır ve ışınlar orada daha diktir."
  ],
  aciklama: `Ekvator'dan uzaklaştıkça yaz ile kış arasındaki gündüz süresi farkı büyür ve mevsim farkı belirginleşir.
Adım 1 (I. yargı): Tabloya göre Ardahan'da gündüz 15 saat 05 dakika, Antalya'da 14 saat 30 dakikadır. I. yargı yanlıştır.
Adım 2 (II. yargı): Antalya'da fark yaklaşık 4 saat 45 dakika, Ardahan'da yaklaşık 5 saat 50 dakikadır. II. yargı doğrudur.
Adım 3 (III. yargı): Antalya'da kış gündüzü daha uzun olduğu için orası Ekvator'a daha yakındır ve ışınlar orada daha diktir. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız II.
Sık yapılan hata: Yaz gündüzü daha uzun olan şehrin ışınlarını da daha dik sanmak. Yazın gündüzün daha uzun olması Ekvator'dan daha uzak olunduğunu gösterir; o şehirde ışınlar daha eğiktir.
Cevap B.`
},
{
  id: "fen-mv-346",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hava durumu uygulaması, aynı gün iki şehirde Güneş'in yerel saatle doğuş ve batış saatlerini tabloda göstermiştir. Şehirlerden hiçbiri Ekvator üzerinde değildir.
**Buna göre bu iki şehrin yarım küreleri ve L şehrindeki gece süresi için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Güneşin doğuşu</th><th>Güneşin batışı</th></tr><tr><td>K</td><td>05.50</td><td>18.20</td></tr><tr><td>L</td><td>08.10</td><td>16.10</td></tr></table>",
  secenekler: [
    "K ve L aynı yarım kürede bulunur; L'de gece 8 saat sürer.",
    "K ve L farklı yarım kürelerde bulunur; L'de gece 16 saat sürer.",
    "K ve L farklı yarım kürelerde bulunur; L'de gece 8 saat sürer.",
    "K ve L aynı yarım kürede bulunur; L'de gece 16 saat sürer."
  ],
  dogru: 1,
  hatalar: [
    "Yarım küreyi ve geceyi karıştırma: K'de gündüz 12 saatten uzun, L'de kısa olduğuna göre şehirler zıt yarım kürelerdedir. Ayrıca 8 saat L'nin gündüz süresidir, gecesi değil.",
    null,
    "Gündüzü gece sanma: 16.10 − 08.10 = 8 saat L'nin gündüz süresidir; gece 24 − 8 = 16 saattir.",
    "Aynı yarım küre sanma: aynı gün bir yarım kürenin bütün yerlerinde gündüzler 12 saatten aynı yönde sapar. K'de gündüz uzun, L'de kısa olduğundan şehirler farklı yarım kürelerdedir."
  ],
  aciklama: `Gündüz süresi, batış saatinden doğuş saati çıkarılarak bulunur; gece ile gündüzün toplamı 24 saattir. Aynı gün bir yarım kürede gündüzler 12 saatten uzunsa öbür yarım kürede kısadır.
Adım 1: K'de gündüz = 18.20 − 05.50 = 12 saat 30 dakikadır. L'de gündüz = 16.10 − 08.10 = 8 saattir.
Adım 2: K'de gündüz 12 saatten uzun, L'de kısadır. Aynı gün aynı yarım kürenin bütün yerlerinde gündüzler 12 saatten aynı yönde sapar; bu yüzden K ve L farklı yarım kürelerdedir.
Adım 3: L'de gece = 24 saat − 8 saat = 16 saattir.
Sağlama: K'de gündüz 12 saat 30 dakika ise gece 11 saat 30 dakikadır; iki şehirde gece ve gündüz birbirinin tersi yönde sapmıştır.
Cevap B.`
},
{
  id: "fen-mv-347",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim kurgu romanında Dünya'nın hareketlerinden yalnız biri değişmiştir: dönme süresi 24 saatten 12 saate düşmüş; dolanma süresi (365 gün) ve eksen eğikliği (23,5°) aynı kalmıştır.
I. Romandaki Dünya'da mevsimler oluşmaz.
II. Romandaki Dünya'da bir yerde gece ile gündüzün her biri ortalama yaklaşık 6 saat sürer.
III. Romandaki Dünya'da mevsimlerin bir kez tamamlanması yine yaklaşık 365 gün sürer.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "I. yargıyı doğru sanma: mevsimleri oluşturan eğik eksen ve dolanma değişmemiştir. II. yargıyı gözden kaçırma: bir dönme 12 saat sürdüğünden gece ile gündüz birlikte 12 saatte tamamlanır ve her biri yaklaşık 6 saat olur. III. yargıyı gözden kaçırma: mevsimlerin süresini dolanma belirler ve dolanma süresi aynı kalmıştır.",
    "III. yargıyı gözden kaçırma: mevsimlerin süresini dolanma belirler ve dolanma süresi aynı kalmıştır.",
    "I. yargıyı doğru sanma: mevsimleri oluşturan eğik eksen ve dolanma değişmemiştir. III. yargıyı gözden kaçırma: mevsimlerin süresini dolanma belirler ve dolanma süresi aynı kalmıştır.",
    null
  ],
  aciklama: `Dönme süresi gece ile gündüzün uzunluğunu, dolanma süresi ise yılın ve mevsimlerin uzunluğunu belirler.
Adım 1 (I. yargı): Mevsimleri oluşturan eğik eksen ve dolanma değişmemiştir. I. yargı yanlıştır.
Adım 2 (II. yargı): Bir dönme 12 saat sürdüğünden gece ile gündüz birlikte 12 saatte tamamlanır ve her biri yaklaşık 6 saat olur. II. yargı doğrudur.
Adım 3 (III. yargı): Mevsimlerin süresini dolanma belirler ve dolanma süresi aynı kalmıştır. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: Dönme süresinin değişmesiyle mevsimlerin de değişeceğini sanmak. Mevsimler dolanma ve eksen eğikliğine bağlıdır.
Cevap D.`
},
{
  id: "fen-mv-348",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki tabloda K ve L şehirlerinde dört günde öğle vakti Güneş ışınlarının yatay yüzeyle yaptığı açı verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>21 Mart</th><th>21 Haziran</th><th>23 Eylül</th><th>21 Aralık</th></tr><tr><td>K</td><td>90°</td><td>66°</td><td>90°</td><td>66°</td></tr><tr><td>L</td><td>52°</td><td>76°</td><td>52°</td><td>29°</td></tr></table>",
  secenekler: [
    "L şehrinde açı yıl içinde daha çok değiştiği için mevsim farkı L'de daha belirgindir.",
    "K şehrinde açı yıl içinde daha çok değiştiği için mevsim farkı K'de daha belirgindir.",
    "İki şehirde de mart ve eylülde açı aynı olduğu için mevsim farkı iki şehirde eşittir.",
    "K şehrinde açı yıl içinde çok az değiştiği için orada ışınlar L'dekinden daha eğik düşer."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Farkı ters okuma: K'de açı 90° ile 66° arasında, yani 24° kadar değişir; L'de 76° ile 29° arasında, yani 47° kadar değişir.",
    "Eşit iki ölçüme bakıp genelleme: mart ve eylülde açıların aynı olması, yaz ve kış açılarının aynı olduğunu göstermez.",
    "Dik ışını eğik sanma: K'de açı değerleri 66° ile 90° arasındadır; ışınlar L'dekinden daha diktir."
  ],
  aciklama: `Mevsim farkı, bir yerde yaz ile kış arasında ışınların açısının ne kadar değiştiğine bağlıdır. Açı fazla değişen yerde mevsimler belirgin yaşanır.
Adım 1: K şehrinde en büyük açı 90°, en küçük 66°'dir; fark yaklaşık 24°.
Adım 2: L şehrinde en büyük açı 76°, en küçük 29°'dir; fark yaklaşık 47°.
Adım 3: L'de açı çok daha fazla değiştiği için mevsim farkı L'de daha belirgindir.
Sağlama: K'de açılar hep 66° ile 90° arasında olduğu için ışınlar yıl boyu dike yakındır; bu da Ekvator çevresinin özelliğidir.
Cevap A.`
},
{
  id: "fen-mv-349",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, ince bir delikten geçirdiği Güneş ışığı demetini öğle vakti özdeş K ve L kartonlarına göndermiştir. Aynı demet K kartonuna dik, L kartonuna eğik düşürülmüştür. Demetin K kartonunda aydınlattığı alan 1 cm², L kartonunda aydınlattığı alan 2 cm²'dir.
I. K ve L kartonlarına ulaşan toplam ışık enerjisi birbirinden farklıdır.
II. L kartonunun birim yüzeyine düşen enerji, K kartonunun birim yüzeyine düşenin iki katıdır.
III. L kartonunun 1 cm²'sine düşen enerji, K kartonunun 1 cm²'sine düşenin yarısıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve III"
  ],
  dogru: 2,
  hatalar: [
    "I. yargıyı doğru sanma: aynı demet iki kartona da gönderildiği için toplam enerji eşittir. III. yargıyı gözden kaçırma: aynı enerji 2 cm² alana yayıldığında her cm²'ye düşen pay 1 cm²'dekinin yarısı olur.",
    "II. yargıyı doğru sanma: L'de aynı enerji iki kat geniş alana yayıldığı için birim yüzeye düşen enerji yarıya iner. III. yargıyı gözden kaçırma: aynı enerji 2 cm² alana yayıldığında her cm²'ye düşen pay 1 cm²'dekinin yarısı olur.",
    null,
    "I. yargıyı doğru sanma: aynı demet iki kartona da gönderildiği için toplam enerji eşittir."
  ],
  aciklama: `Aynı ışık demeti eğik düştüğünde daha geniş alana yayılır; toplam enerji aynı kalır ama birim yüzeye düşen enerji azalır.
Adım 1 (I. yargı): Aynı demet iki kartona da gönderildiği için toplam enerji eşittir. I. yargı yanlıştır.
Adım 2 (II. yargı): L'de aynı enerji iki kat geniş alana yayıldığı için birim yüzeye düşen enerji yarıya iner. II. yargı yanlıştır.
Adım 3 (III. yargı): Aynı enerji 2 cm² alana yayıldığında her cm²'ye düşen pay 1 cm²'dekinin yarısı olur. III. yargı doğrudur.
Adım 4: Doğru yargı yalnız III.
Sık yapılan hata: Alan iki kat büyüyünce enerjinin de iki kat artacağını sanmak. Enerji aynıdır, pay küçülür.
Cevap C.`
},
{
  id: "fen-mv-350",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Fen öğretmeni, mevsimlerin oluşumuyla ilgili dört öğrencinin ifadesini tabloya yazmıştır.
**Buna göre hangi öğrencinin ifadesi bilimsel olarak doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>İfadesi</th></tr><tr><td>Ali</td><td>Mevsimler, Dünya'nın kendi ekseni çevresinde dönmesiyle oluşur.</td></tr><tr><td>Bora</td><td>Kuzey Yarım Küre'de kış, Dünya'nın Güneş'e en uzak olduğu dönemde yaşanır.</td></tr><tr><td>Ceren</td><td>Dönme ekseninin yönü yıl içinde değiştiği için yarım küreler sırayla Güneş'e yönelir.</td></tr><tr><td>Duru</td><td>Eksen eğik olduğu için aynı gün iki yarım kürenin öğle ışınları farklı açıyla düşer.</td></tr></table>",
  secenekler: [
    "Ali",
    "Bora",
    "Ceren",
    "Duru"
  ],
  dogru: 3,
  hatalar: [
    "Dönmeyi mevsim nedeni sanma: dönme gece ile gündüzü oluşturur; mevsimler eğik eksen ve dolanmayla oluşur.",
    "Uzaklık yanılgısı: Dünya Güneş'e en yakınken, yani ocak başında Kuzey Yarım Küre'de kış yaşanır.",
    "Eksenin yön değiştirdiğini sanma: eksenin eğikliği ve yönü sabittir; değişen Dünya'nın yörüngedeki konumudur.",
    null
  ],
  aciklama: `Her ifadeyi, mevsimlerin nedeniyle karşılaştır: eğik bir eksen ve Güneş çevresinde dolanma.
Adım 1: Ali'nin ifadesi dönmeyi mevsim nedeni sayıyor; dönme gece-gündüzü oluşturur. Yanlış.
Adım 2: Bora'nın ifadesinde uzaklık nedeni var. Dünya Güneş'e en yakın konumdayken (ocak başı) Kuzey Yarım Küre'de kış yaşanır. Yanlış.
Adım 3: Ceren eksenin yönünün değiştiğini söylüyor; oysa eksen yıl boyunca aynı yöne bakar. Yanlış.
Adım 4: Duru'nun ifadesi doğrudur: eğik eksen yüzünden iki yarım küre aynı gün Güneş'e farklı yönelir ve ışınlar farklı açıyla düşer.
Sık yapılan hata: Kulağa mantıklı gelen "yakınlık" ya da "dönme" ifadelerini seçmek.
Cevap D.`
},
{
  id: "fen-mv-351",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Merve, fen defterine Dünya'nın hareketleriyle ilgili aşağıdaki notları almıştır.
I. Dönme nedeniyle bir yerde Güneş ışınlarının geliş açısı gün içinde değişir.
II. Dolanma sırasında Dünya'nın dönme ekseninin yönü sürekli değişir.
III. Eksenin eğik olması, aynı gün iki yarım kürede gündüz sürelerinin farklı olmasına yol açar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı gözden kaçırma: Dünya döndükçe bir yerin Güneş'e göre konumu değişir ve ışınların açısı sabah ile öğlen farklı olur. II. yargıyı doğru sanma: eksenin yönü yıl boyunca sabittir, değişen Dünya'nın yörüngedeki konumudur. III. yargıyı gözden kaçırma: eğik eksenle bir yarım küre Güneş'e yönelikken öbürü uzakta kalır ve gündüz süreleri farklı olur.",
    null,
    "I. yargıyı gözden kaçırma: Dünya döndükçe bir yerin Güneş'e göre konumu değişir ve ışınların açısı sabah ile öğlen farklı olur. II. yargıyı doğru sanma: eksenin yönü yıl boyunca sabittir, değişen Dünya'nın yörüngedeki konumudur.",
    "II. yargıyı doğru sanma: eksenin yönü yıl boyunca sabittir, değişen Dünya'nın yörüngedeki konumudur."
  ],
  aciklama: `Dönme gün içindeki değişimleri, eğik eksen ve dolanma ise yıl içindeki değişimleri açıklar.
Adım 1 (I. yargı): Dünya döndükçe bir yerin Güneş'e göre konumu değişir ve ışınların açısı sabah ile öğlen farklı olur. I. yargı doğrudur.
Adım 2 (II. yargı): Eksenin yönü yıl boyunca sabittir, değişen Dünya'nın yörüngedeki konumudur. II. yargı yanlıştır.
Adım 3 (III. yargı): Eğik eksenle bir yarım küre Güneş'e yönelikken öbürü uzakta kalır ve gündüz süreleri farklı olur. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve III.
Sık yapılan hata: Eksenin yıl içinde yön değiştirdiğini düşünmek. Doğru bir şekilde çizilmiş yörüngede bütün eksenler birbirine paraleldir.
Cevap B.`
},
{
  id: "fen-mv-352",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen öğretmeni, Ekvator'a eşit uzaklıktaki K ve L şehirlerinde 21 Mart, 21 Haziran, 23 Eylül ve 21 Aralık tarihlerinde başlayan mevsimleri tabloya yazmış, bazı kutuları boş bırakmıştır. İki şehir farklı yarım kürelerdedir; hangisinin hangi yarım kürede olduğu belirtilmemiştir, dolu kutulardan bulunabilir.
**Buna göre tablodaki 1, 2, 3 ve 4 numaralı kutulara gelmesi gereken mevsimler sırasıyla aşağıdakilerden hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Tarih</th><th>K şehri</th><th>L şehri</th></tr><tr><td>21 Mart</td><td>Sonbahar</td><td>1</td></tr><tr><td>21 Haziran</td><td>2</td><td>Yaz</td></tr><tr><td>23 Eylül</td><td>İlkbahar</td><td>3</td></tr><tr><td>21 Aralık</td><td>4</td><td>Kış</td></tr></table>",
  secenekler: [
    "İlkbahar, Kış, Sonbahar, Yaz",
    "Sonbahar, Yaz, İlkbahar, Kış",
    "İlkbahar, Yaz, Sonbahar, Kış",
    "Sonbahar, Kış, İlkbahar, Yaz"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aynı satırdaki mevsimi kopyalama: iki şehir farklı yarım kürelerdedir ve aynı tarihte zıt mevsim yaşarlar. Boş kutu, yanındaki dolu kutunun tersidir.",
    "Kuzey Yarım Küre kuralını K için de uygulama: K, 21 Mart'ta sonbahar yaşadığı için Güney Yarım Küre'dedir. K'de 21 Haziran'da kış, 21 Aralık'ta yaz başlar.",
    "Yalnız L'nin kutularını kopyalama: 1 ve 3 numaralı kutulara K'nin mevsimini yazmışsın; L'de aynı gün zıt mevsim yaşanır."
  ],
  aciklama: `İki yarım küre her zaman zıt mevsimdedir. Önce şehirlerin hangi yarım kürede olduğunu dolu kutulardan bul, sonra boş kutuları tersinden doldur.
Adım 1: K'de 21 Mart'ta sonbahar başlıyorsa K, Güney Yarım Küre'dedir (Kuzey'de 21 Mart'ta ilkbahar başlar). Öyleyse L, Kuzey Yarım Küre'dedir. Dolu kutular da bunu doğrular: L'de 21 Haziran'da yaz, 21 Aralık'ta kış başlar.
Adım 2: 21 Mart'ta K'de sonbahar ise L'de ilkbahar başlar. 1 = İlkbahar.
Adım 3: 21 Haziran'da L'de yaz ise K'de kış başlar. 2 = Kış.
Adım 4: 23 Eylül'de K'de ilkbahar ise L'de sonbahar başlar. 3 = Sonbahar.
Adım 5: 21 Aralık'ta L'de kış ise K'de yaz başlar. 4 = Yaz.
Sağlama: Her satırda iki mevsim birbirinin zıddıdır: ilkbahar-sonbahar, yaz-kış.
Cevap A.`
},
{
  id: "fen-mv-353",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir coğrafya öğretmeni, Güneş ışınlarının öğle vakti tam dik (90°) düştüğü yerlerle ilgili öğrencilerden aşağıdaki yargıları yazmalarını istemiştir.
I. Yıl içinde ışınların öğle vakti tam dik düştüğü yer bazen Ekvator'un kuzeyinde, bazen güneyinde olur.
II. Türkiye'de yaz başlangıcında öğle ışınları tam dik düşer.
III. 21 Aralık'ta ışınlar Ekvator'a tam dik düşer.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I. yargıyı gözden kaçırma: tam dik ışının düştüğü yer yıl içinde kuzeydeki dönence ile güneydeki dönence arasında yer değiştirir. III. yargıyı doğru sanma: Ekvator'a ışınlar 21 Mart ve 23 Eylül'de dik düşer; 21 Aralık'ta güneydeki dönencedir.",
    "II. yargıyı doğru sanma: Türkiye bu kuşağın dışındadır; ülkemizde ışınlar hiçbir zaman tam dik düşmez.",
    "I. yargıyı gözden kaçırma: tam dik ışının düştüğü yer yıl içinde kuzeydeki dönence ile güneydeki dönence arasında yer değiştirir. II. yargıyı doğru sanma: Türkiye bu kuşağın dışındadır; ülkemizde ışınlar hiçbir zaman tam dik düşmez. III. yargıyı doğru sanma: Ekvator'a ışınlar 21 Mart ve 23 Eylül'de dik düşer; 21 Aralık'ta güneydeki dönencedir."
  ],
  aciklama: `Dönence, ışınların öğle vakti tam dik düşebildiği en kuzeydeki ve en güneydeki çizgidir. Dik ışın yıl boyunca bu iki çizgi arasında gidip gelir.
Adım 1 (I. yargı): Tam dik ışının düştüğü yer yıl içinde kuzeydeki dönence ile güneydeki dönence arasında yer değiştirir. I. yargı doğrudur.
Adım 2 (II. yargı): Türkiye bu kuşağın dışındadır; ülkemizde ışınlar hiçbir zaman tam dik düşmez. II. yargı yanlıştır.
Adım 3 (III. yargı): Ekvator'a ışınlar 21 Mart ve 23 Eylül'de dik düşer; 21 Aralık'ta güneydeki dönencedir. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız I.
Sık yapılan hata: Yaz başlangıcında bütün Kuzey Yarım Küre'ye ışınların dik düştüğünü sanmak. Dik ışın yalnız dönence kuşağında görülür; Türkiye'de açı hep 90°'den küçüktür.
Cevap A.`
},
{
  id: "fen-mv-354",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki şekilde, Dünya'nın Güneş ışınlarını aldığı bir tarihteki durumu gösterilmiştir. Dönme ekseninin kuzey ucu Güneş'e doğru eğiktir. K ve M noktaları kutupların yakınında, L noktası ise Ekvator üzerindedir. Şekilde sağ yarı karanlık (gece) taraftır.
**Buna göre Dünya bir tur döndüğünde K, L ve M noktalarının o günkü gündüz süreleri uzundan kısaya doğru hangi seçenekte doğru sıralanmıştır?**`,
  gorsel: "<svg viewBox=\"0 0 520 270\" role=\"img\" aria-label=\"Dünya'nın Güneş ışınlarını aldığı durum: eksenin kuzey ucu Güneş'e doğru eğik, K kuzey kutbuna yakın, L Ekvator'da, M güney kutbuna yakın\"><path d=\"M 330 45 A 85 85 0 0 1 330 215 Z\" fill=\"var(--dolgu)\" fill-opacity=\"0.7\"/><circle cx=\"330\" cy=\"130\" r=\"85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"30\" y1=\"50\" x2=\"297.3\" y2=\"50\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"297.3,50 287.3,45 287.3,55\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"90\" x2=\"251\" y2=\"90\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"251,90 241,85 241,95\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"130\" x2=\"241\" y2=\"130\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"241,130 231,125 231,135\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"170\" x2=\"251\" y2=\"170\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"251,170 241,165 241,175\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"210\" x2=\"297.3\" y2=\"210\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"297.3,210 287.3,205 287.3,215\" fill=\"var(--vurgu2)\"/><line x1=\"252\" y1=\"163.9\" x2=\"408\" y2=\"96.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><line x1=\"372.7\" y1=\"228.1\" x2=\"287.3\" y2=\"31.9\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"287.3\" cy=\"31.9\" r=\"5\" fill=\"var(--vurgu)\"/><text x=\"279.3\" y=\"23.9\" font-size=\"14\" fill=\"currentColor\" text-anchor=\"end\">Kuzey ucu</text><text x=\"30\" y=\"30\" font-size=\"15\" fill=\"currentColor\">Güneş ışınları</text><text x=\"378\" y=\"135\" font-size=\"15\" fill=\"currentColor\" text-anchor=\"middle\">Gece</text><circle cx=\"283.1\" cy=\"59.1\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"273.2\" y=\"50.1\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">K</text><circle cx=\"252\" cy=\"163.9\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"235.5\" y=\"177.1\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">L</text><circle cx=\"349.8\" cy=\"212.7\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"354\" y=\"236.2\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">M</text></svg>",
  secenekler: [
    "L > K > M",
    "K > M > L",
    "K > L > M",
    "M > L > K"
  ],
  dogru: 2,
  hatalar: [
    "Ekvator'u en uzun sanma: Ekvator'da gündüz 12 saattir; kutba yakın K ise bu tarihte hiç karanlığa girmez ve 24 saat aydınlıktır.",
    "M'yi aydınlık sanma: M, kutba yakın olduğu için bir tur döndüğünde bile karanlık yarıda kalır ve hiç gündüz yaşamaz.",
    null,
    "Sıralamayı ters okuma: eksen Güneş'e doğru eğik olduğu için K tarafı aydınlıkta kalır, M ise karanlıkta."
  ],
  aciklama: `Dünya döndükçe her nokta ekseni çevresinde bir daire çizer. Bu dairenin ne kadarının aydınlıkta kaldığı, gündüz süresini verir.
Adım 1: K, kutba yakın olduğu için döndüğünde çizdiği daire tamamen aydınlık yarıda kalır. Gündüz 24 saattir.
Adım 2: L Ekvator'dadır; çizdiği dairenin yarısı aydınlıkta, yarısı karanlıktadır. Gündüz 12 saattir.
Adım 3: M, çizdiği dairenin tamamı karanlık yarıda kaldığı için hiç gündüz yaşamaz. Gündüz 0 saattir.
Adım 4: Sıralama K > L > M olur.
Sağlama: Bu, Kuzey Yarım Küre'de yaz başlangıcıdır; Kuzey'de gündüzler en uzun, Güney'de en kısadır.
Cevap C.`
},
{
  id: "fen-mv-355",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen kulübü, mevsimlerin oluşumuyla ilgili posterini hazırlarken aşağıdaki yargıları panoya yazmıştır.
I. Dünya Güneş çevresinde dolanırken eksenin eğikliği değişmediği hâlde Güneş'e yönelen yarım küre değişir.
II. Eksen eğikliği olmasaydı da Dünya'nın dönmesi sayesinde gece ile gündüz oluşurdu.
III. Aynı yarım kürede kışın ışınlar, yazdakine göre yatay yüzeye daha eğik gelir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "II. yargıyı gözden kaçırma: gece ile gündüzü dönme oluşturur, eksenin eğikliğine bağlı değildir. III. yargıyı gözden kaçırma: kışın Güneş gökyüzünde daha alçaktır ve ışınlar yere daha eğik gelir.",
    "III. yargıyı gözden kaçırma: kışın Güneş gökyüzünde daha alçaktır ve ışınlar yere daha eğik gelir.",
    "I. yargıyı gözden kaçırma: eksen aynı yöne bakmaya devam ederken Dünya yörüngede ilerler ve sırayla farklı yarım küre Güneş'e yönelir.",
    null
  ],
  aciklama: `Eğik eksen sabit kalır, Dünya yörüngede ilerler; böylece yarım küreler sırayla Güneş'e yönelir. Gece ile gündüz ise dönmenin sonucudur.
Adım 1 (I. yargı): Eksen aynı yöne bakmaya devam ederken Dünya yörüngede ilerler ve sırayla farklı yarım küre Güneş'e yönelir. I. yargı doğrudur.
Adım 2 (II. yargı): Gece ile gündüzü dönme oluşturur, eksenin eğikliğine bağlı değildir. II. yargı doğrudur.
Adım 3 (III. yargı): Kışın Güneş gökyüzünde daha alçaktır ve ışınlar yere daha eğik gelir. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve II ve III.
Sık yapılan hata: Gece-gündüz ile mevsimleri aynı hareketin sonucu saymak. Gece-gündüz dönmeden, mevsimler eğik eksenle dolanmadan gelir.
Cevap D.`
},
{
  id: "fen-mv-356",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir uluslararası fen projesinde, K ve L şehirlerindeki öğrenciler 1 m boyundaki bir çubuğun öğle gölgesini ve o günkü gündüz süresini 21 Haziran ile 21 Aralık günlerinde ölçmüş; sonuçları tabloya yazmıştır.
I. K şehrinde 21 Aralık'ta ışınlar 21 Haziran'dakinden daha dik düşer.
II. L şehrinde 21 Aralık'ta birim yüzeye düşen enerji 21 Haziran'dakinden fazladır.
III. 21 Haziran'da K ve L şehirlerinin ikisinde de yaz mevsimi başlar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Tarih</th><th>Gölge boyu</th><th>Gündüz süresi</th></tr><tr><td>K</td><td>21 Haziran</td><td>40 cm</td><td>15 saat</td></tr><tr><td>K</td><td>21 Aralık</td><td>210 cm</td><td>9 saat</td></tr><tr><td>L</td><td>21 Haziran</td><td>150 cm</td><td>9 saat</td></tr><tr><td>L</td><td>21 Aralık</td><td>35 cm</td><td>14 saat 30 dakika</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı doğru sanma: K'de gölge 21 Aralık'ta 210 cm, 21 Haziran'da 40 cm olduğu için ışınlar Aralık'ta daha eğik düşer. II. yargıyı gözden kaçırma: L'de gölge Aralık'ta 35 cm, Haziran'da 150 cm olduğundan Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar.",
    null,
    "I. yargıyı doğru sanma: K'de gölge 21 Aralık'ta 210 cm, 21 Haziran'da 40 cm olduğu için ışınlar Aralık'ta daha eğik düşer. II. yargıyı gözden kaçırma: L'de gölge Aralık'ta 35 cm, Haziran'da 150 cm olduğundan Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar. III. yargıyı doğru sanma: K'de gündüz uzun ve gölge kısa olduğu için orada yaz başlar; L'de gündüz kısa ve gölge uzun olduğu için orada kış başlar.",
    "III. yargıyı doğru sanma: K'de gündüz uzun ve gölge kısa olduğu için orada yaz başlar; L'de gündüz kısa ve gölge uzun olduğu için orada kış başlar."
  ],
  aciklama: `Gölge boyu, gündüz süresi ve birim yüzeye düşen enerji birlikte yorumlanır: kısa gölge, dik ışın ve çok enerji demektir; uzun gündüz de aynı mevsime işaret eder.
Adım 1 (I. yargı): K'de gölge 21 Aralık'ta 210 cm, 21 Haziran'da 40 cm olduğu için ışınlar Aralık'ta daha eğik düşer. I. yargı yanlıştır.
Adım 2 (II. yargı): L'de gölge Aralık'ta 35 cm, Haziran'da 150 cm olduğundan Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar. II. yargı doğrudur.
Adım 3 (III. yargı): K'de gündüz uzun ve gölge kısa olduğu için orada yaz başlar; L'de gündüz kısa ve gölge uzun olduğu için orada kış başlar. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız II.
Sık yapılan hata: İki şehri aynı yarım küreden sanmak. Bir şehirde yaz kısa gölgeyle geliyorsa, aynı tarihte uzun gölgeli şehir öbür yarım kürededir.
Cevap B.`
},
{
  id: "fen-mv-357",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şehirde, 1 m boyundaki bir çubuğun öğle gölgesi ile gündüz süresi dört önemli tarihte ölçülmüş ve aşağıdaki tabloya yazılmıştır.
**Buna göre aşağıdaki sonuçlardan hangisine tablodaki verilerle __ulaşılamaz__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Tarih</th><th>Gölge boyu</th><th>Gündüz süresi</th></tr><tr><td>21 Mart</td><td>84 cm</td><td>12 saat</td></tr><tr><td>21 Haziran</td><td>30 cm</td><td>14 saat 20 dakika</td></tr><tr><td>23 Eylül</td><td>84 cm</td><td>12 saat</td></tr><tr><td>21 Aralık</td><td>200 cm</td><td>9 saat 40 dakika</td></tr></table>",
  secenekler: [
    "Şehir, Kuzey Yarım Küre'de bulunmaktadır.",
    "21 Haziran'da ışınlar 21 Aralık'takinden daha diktir.",
    "21 Haziran'da Dünya, Güneş'e 21 Aralık'takinden daha yakındır.",
    "21 Aralık'ta birim yüzeye düşen enerji 21 Mart'takinden azdır."
  ],
  dogru: 2,
  hatalar: [
    "Veriden çıkarılabilecek sonucu atma: 21 Haziran'da gündüzün en uzun olması şehrin Kuzey Yarım Küre'de olduğunu gösterir.",
    "Veriden çıkarılabilecek sonucu atma: Haziran'daki gölge 30 cm, Aralık'taki 200 cm olduğuna göre ışınlar Haziran'da daha diktir.",
    null,
    "Veriden çıkarılabilecek sonucu atma: Aralık'ta gölge Mart'tan uzundur, yani ışınlar daha eğiktir ve birim yüzeye düşen enerji azdır."
  ],
  aciklama: `Tablodaki iki büyüklük yalnızca ışınların açısını ve gündüz süresini anlatır. Bu veriyle yarım küreyi, mevsimi ve enerji karşılaştırmasını bulabilirsin; ama Dünya ile Güneş arasındaki uzaklığı bulamazsın.
Adım 1 (A): En uzun gündüz haziranda olduğuna göre şehir Kuzey Yarım Küre'dedir. Çıkarılabilir.
Adım 2 (B): Haziran gölgesi (30 cm) Aralık gölgesinden (200 cm) kısadır; ışınlar Haziran'da daha diktir. Çıkarılabilir.
Adım 3 (D): Aralık gölgesi Mart gölgesinden uzundur; ışınlar daha eğiktir, birim yüzeye daha az enerji düşer. Çıkarılabilir.
Adım 4 (C): Tabloda Dünya-Güneş uzaklığına dair hiçbir veri yoktur; gölge boyu ve gündüz süresi uzaklığı anlatmaz. Üstelik mevsimleri uzaklık belirlemez. Bu sonuca ulaşılamaz.
Sık yapılan hata: Kısa gölgeyi "Güneş daha yakın" diye yorumlamak. Gölge boyu ışınların açısını anlatır, Güneş'e uzaklığı değil. "Ulaşılamaz" kökünde önce veriyle ne bulunabildiğini listele.
Cevap C.`
},
{
  id: "fen-mv-358",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gök bilim dergisi, Güneş'e benzeyen bir yıldızın çevresinde Dünya gibi dönen ve dolanan Y gezegenini tanıtmıştır. Y gezegeninin yörüngesi Dünya'nınki gibi çembere çok yakındır ve dönme ekseninin eğikliği 8°'dir. Dünya'daki K şehri ile Y gezegenindeki L şehri, kendi gezegenlerinde Ekvator'dan aynı uzaklıktadır. Öğle vakti Güneş ışınlarının yatay yüzeyle yaptığı açı tabloda verilmiştir.
I. Y gezegeninde mevsimler oluşmaz.
II. Y gezegeninde yaz ile kış arasında birim yüzeye düşen enerji farkı, Dünya'dakinden azdır.
III. Y gezegeninde de iki yarım kürede zıt mevsimler yaşanır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Yaz başlangıcında açı</th><th>Kış başlangıcında açı</th></tr><tr><td>K (Dünya)</td><td>76°</td><td>29°</td></tr><tr><td>L (Y gezegeni)</td><td>60°</td><td>44°</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I. yargıyı doğru sanma: Y gezegeninin ekseni 8° eğiktir ve gezegen dolanmaktadır; tabloda yaz ile kış açıları da farklıdır. II. yargıyı gözden kaçırma: Y'de yaz ve kış açıları arasındaki fark 16°, Dünya'da 47°'dir; açı farkı küçük olduğu için enerji farkı da küçüktür. III. yargıyı gözden kaçırma: eksen eğik olduğundan Y gezegeninde de bir yarım küre Güneş'e yönelikken öbürü uzakta kalır.",
    "I. yargıyı doğru sanma: Y gezegeninin ekseni 8° eğiktir ve gezegen dolanmaktadır; tabloda yaz ile kış açıları da farklıdır. II. yargıyı gözden kaçırma: Y'de yaz ve kış açıları arasındaki fark 16°, Dünya'da 47°'dir; açı farkı küçük olduğu için enerji farkı da küçüktür.",
    null,
    "I. yargıyı doğru sanma: Y gezegeninin ekseni 8° eğiktir ve gezegen dolanmaktadır; tabloda yaz ile kış açıları da farklıdır."
  ],
  aciklama: `Eksenin eğikliği küçüldükçe yaz ve kış ışın açıları arasındaki fark küçülür; mevsimler yine oluşur ama daha silik yaşanır.
Adım 1 (I. yargı): Y gezegeninin ekseni 8° eğiktir ve gezegen dolanmaktadır; tabloda yaz ile kış açıları da farklıdır. I. yargı yanlıştır.
Adım 2 (II. yargı): Y'de yaz ve kış açıları arasındaki fark 16°, Dünya'da 47°'dir; açı farkı küçük olduğu için enerji farkı da küçüktür. II. yargı doğrudur.
Adım 3 (III. yargı): Eksen eğik olduğundan Y gezegeninde de bir yarım küre Güneş'e yönelikken öbürü uzakta kalır. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: Eğikliği küçük diye mevsimlerin hiç oluşmadığını sanmak. Eğiklik sıfır olmadığı sürece mevsimler vardır; yalnız farkları azalır.
Cevap C.`
},
{
  id: "fen-mv-359",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Kuzey Yarım Küre'de bulunan bir şehirde, 1 m boyundaki bir çubuğun öğle gölgesi ile gündüz süresi 21 Mart, 21 Haziran ve 21 Aralık günlerinde ölçülmüş; ölçümler tarihleri belirtilmeden, sırası karışık olarak tabloya yazılmıştır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ölçüm</th><th>Gölge boyu</th><th>Gündüz süresi</th></tr><tr><td>1. ölçüm</td><td>200 cm</td><td>9 saat 10 dakika</td></tr><tr><td>2. ölçüm</td><td>30 cm</td><td>14 saat 50 dakika</td></tr><tr><td>3. ölçüm</td><td>84 cm</td><td>12 saat</td></tr></table>",
  secenekler: [
    "2. ölçümün yapıldığı gün birim yüzeye düşen enerji, üç ölçüm içinde en fazladır.",
    "3. ölçümün yapıldığı gün şehirde sonbahar mevsimi başlamaktadır.",
    "1. ölçümün yapıldığı gün şehre düşen ışınlar, üç ölçüm içinde en diktir.",
    "3. ölçümün yapıldığı gün şehirde gündüz süresi gece süresinden uzundur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tarihi yanlış eşleştirme: 12 saatlik gündüz 21 Mart'a aittir; Kuzey Yarım Küre'de bu tarihte ilkbahar başlar, sonbahar değil.",
    "Gölge boyunu ters okuma: 200 cm'lik en uzun gölge ışınların en eğik düştüğünü gösterir.",
    "Eşitliği yanlış okuma: 3. ölçümde gündüz tam 12 saattir; gece de 12 saattir, biri öbüründen uzun değildir."
  ],
  aciklama: `Üç ölçümden hangisinin hangi tarihe ait olduğunu önce çöz. Sonra her seçeneği o tarihle sına.
Adım 1: Gündüz süresi 12 saat olan ölçüm 21 Mart'tır (3. ölçüm). En uzun gündüz Kuzey Yarım Küre'de 21 Haziran'dadır (2. ölçüm, 14 saat 50 dakika). En kısa gündüz 21 Aralık'tadır (1. ölçüm, 9 saat 10 dakika).
Adım 2: Gölgesi en kısa olan ölçüm ışınların en dik olduğu, yani birim yüzeye en çok enerjinin düştüğü ölçümdür: 2. ölçüm (30 cm). A doğrudur.
Adım 3: 3. ölçüm 21 Mart'tır; orada ilkbahar başlar ve gece-gündüz eşittir (B ve D yanlış). 1. ölçümde gölge en uzundur, ışınlar en eğiktir (C yanlış).
Sağlama: Üç gölge boyunu sıraya dizdiğinde 30 cm < 84 cm < 200 cm olur; bu sıra ışınların dikliğini Haziran > Mart > Aralık gösterir.
Cevap A.`
},
{
  id: "fen-mv-360",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir enerji şirketi, K ve L şehirlerine kurduğu özdeş güneş enerjili su ısıtıcı kolektörlerin ayda ısıttığı toplam su miktarını (ton) kaydetmiştir. Ölçüm günlerinin hepsi bulutsuz geçmiştir.
I. K ve L şehirleri farklı yarım kürelerdedir.
II. Ocak ayında K şehrinde gündüz süresi L şehrindekinden uzundur.
III. Temmuz ayında L şehrinde gündüz süresi K şehrindekinden kısadır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Ocak</th><th>Nisan</th><th>Temmuz</th><th>Ekim</th></tr><tr><td>K</td><td>6</td><td>14</td><td>22</td><td>12</td></tr><tr><td>L</td><td>21</td><td>13</td><td>5</td><td>14</td></tr></table>",
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  dogru: 3,
  hatalar: [
    "I. yargıyı gözden kaçırma: K'de temmuzda, L'de ocakta verim en yüksektir; yani biri yazı yaşarken öbürü kışı yaşar. II. yargıyı doğru sanma: ocakta L'de verim yüksek olduğundan L'de yaz yaşanır ve L'de gündüz K'dekinden uzundur. III. yargıyı gözden kaçırma: temmuzda K'de yaz, L'de kış yaşandığı için L'de gündüz K'dekinden kısadır.",
    "I. yargıyı gözden kaçırma: K'de temmuzda, L'de ocakta verim en yüksektir; yani biri yazı yaşarken öbürü kışı yaşar.",
    "II. yargıyı doğru sanma: ocakta L'de verim yüksek olduğundan L'de yaz yaşanır ve L'de gündüz K'dekinden uzundur. III. yargıyı gözden kaçırma: temmuzda K'de yaz, L'de kış yaşandığı için L'de gündüz K'dekinden kısadır.",
    null
  ],
  aciklama: `İki şehirde aynı aylarda verimin ters yönde değişmesi, şehirlerin zıt mevsimlerde, yani farklı yarım kürelerde olduğunu gösterir.
Adım 1 (I. yargı): K'de temmuzda, L'de ocakta verim en yüksektir; yani biri yazı yaşarken öbürü kışı yaşar. I. yargı doğrudur.
Adım 2 (II. yargı): Ocakta L'de verim yüksek olduğundan L'de yaz yaşanır ve L'de gündüz K'dekinden uzundur. II. yargı yanlıştır.
Adım 3 (III. yargı): Temmuzda K'de yaz, L'de kış yaşandığı için L'de gündüz K'dekinden kısadır. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve III.
Sık yapılan hata: Verim düşük olan ayı "Güneş uzak" diye yorumlamak. Verim düşüklüğü, ışınların eğik düşmesinden ve gündüzün kısa olmasından gelir.
Cevap D.`
},
{
  id: "fen-mv-361",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki şekilde Dünya'nın Güneş çevresindeki yörüngesinde bulunduğu dört konum gösterilmiştir. Dönme ekseninin kuzey ucu noktayla işaretlenmiştir; eksenin eğikliği ve yönü dört konumda da aynıdır. Dünya yörüngede K → L → M → N → K sırasıyla ilerlemektedir.
**Buna göre Dünya L konumundan N konumuna ilerlerken Güney Yarım Küre'de yaşayan biri için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 520 290\" role=\"img\" aria-label=\"Dünya yörüngesinde dört konum: K solda, L altta, M sağda, N üstte; eksenin kuzey ucu K konumunda Güneş'e doğru, M konumunda Güneş'ten uzağa eğik\"><ellipse cx=\"260\" cy=\"140\" rx=\"190\" ry=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"6 5\"/><circle cx=\"260\" cy=\"140\" r=\"26\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><text x=\"260\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Güneş</text><circle cx=\"75\" cy=\"145\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"61.4\" y1=\"176.2\" x2=\"88.6\" y2=\"113.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"88.6\" cy=\"113.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"39\" y=\"151\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">K</text><circle cx=\"260\" cy=\"232\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"246.4\" y1=\"263.2\" x2=\"273.6\" y2=\"200.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"273.6\" cy=\"200.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"300\" y=\"238\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">L</text><circle cx=\"445\" cy=\"145\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"431.4\" y1=\"176.2\" x2=\"458.6\" y2=\"113.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"458.6\" cy=\"113.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"483\" y=\"151\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">M</text><circle cx=\"260\" cy=\"56\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"246.4\" y1=\"87.2\" x2=\"273.6\" y2=\"24.8\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"273.6\" cy=\"24.8\" r=\"4.5\" fill=\"var(--vurgu)\"/><text x=\"300\" y=\"62\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">N</text></svg>",
  secenekler: [
    "Gündüz süreleri sürekli uzar; ilkbahar ve yaz mevsimleri yaşanır.",
    "Gündüz süreleri önce uzar, sonra kısalır; ilkbahar ve yaz mevsimleri yaşanır.",
    "Gündüz süreleri önce kısalır, sonra uzar; sonbahar ve kış mevsimleri yaşanır.",
    "Gündüz süreleri sürekli kısalır; sonbahar ve kış mevsimleri yaşanır."
  ],
  dogru: 1,
  hatalar: [
    "Dönüm noktasını gözden kaçırma: M konumunda gündüz en uzun hâline ulaşır, sonra N'ye doğru kısalmaya başlar; sürekli uzamaz.",
    null,
    "Mevsimleri ters okuma: M konumunda Güney Yarım Küre Güneş'e yönelmiştir, orada yaz yaşanır; sonbahar ve kış bu aralığa girmez.",
    "Yarım küreyi Kuzey sanma: Kuzey Yarım Küre için bu aralıkta sonbahar-kış yaşanır; Güney için durum tersidir."
  ],
  aciklama: `Eksen eğikliği sabit olduğundan konumlardaki durumu eksenin ucuna bakarak çıkarırız.
Adım 1: K konumunda eksenin kuzey ucu Güneş'e doğrudur: Kuzey Yarım Küre'de yaz başlıyor (21 Haziran). Buna göre L, 23 Eylül; M, 21 Aralık; N, 21 Mart konumudur.
Adım 2: Güney Yarım Küre'de L'de (23 Eylül) ilkbahar başlar, gündüz 12 saattir. M'de (21 Aralık) yaz başlar ve gündüz yılın en uzun süresindedir. N'de (21 Mart) sonbahar başlar ve gündüz yine 12 saattir.
Adım 3: Yani L'den M'ye gündüzler uzar, M'den N'ye kısalır. Aralıkta ilkbahar ve yaz yaşanır.
Sağlama: M konumunda eksenin kuzey ucu Güneş'ten uzağa eğiktir; Güney Yarım Küre Güneş'e yöneliktir ve orada gündüz en uzundur.
Cevap B.`
},
{
  id: "fen-mv-362",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir uzay ajansı, uydularla Dünya'nın atmosferinin dışına gelen toplam Güneş enerjisini ölçmüş ve yıl içindeki en büyük ile en küçük değerleri tabloya yazmıştır. Dünya'nın ocak başında Güneş'e en yakın, temmuz başında en uzak olduğu bilinmektedir.
I. Bu fark, mevsimlerin oluşmasının temel nedenidir.
II. Ocakta Dünya'ya daha çok enerji gelmesine rağmen aynı ayda iki yarım kürede farklı mevsimler yaşanır.
III. Atmosfer dışında gelen toplam enerji aynı olsa bile bir yerin aldığı enerji, ışınların o yere düşme açısına göre farklılaşır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ölçüm zamanı</th><th>Dünya'ya gelen toplam enerji (birim)</th></tr><tr><td>Ocak başı</td><td>1410</td></tr><tr><td>Temmuz başı</td><td>1320</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "I. yargıyı doğru sanma: fark küçüktür ve Dünya'nın her yerini aynı anda etkiler; zıt mevsimleri açıklayamaz. Mevsimleri ışınların düşme açısı belirler. II. yargıyı gözden kaçırma: Dünya'ya gelen toplam enerji bütün Dünya için aynıdır ama eğik eksen yüzünden aynı anda bir yarım küre yaz, öbürü kış yaşar. III. yargıyı gözden kaçırma: aynı enerji dik düşünce dar, eğik düşünce geniş alana yayılır ve birim yüzeye düşen pay açıya göre değişir.",
    "III. yargıyı gözden kaçırma: aynı enerji dik düşünce dar, eğik düşünce geniş alana yayılır ve birim yüzeye düşen pay açıya göre değişir.",
    "I. yargıyı doğru sanma: fark küçüktür ve Dünya'nın her yerini aynı anda etkiler; zıt mevsimleri açıklayamaz. Mevsimleri ışınların düşme açısı belirler. II. yargıyı gözden kaçırma: Dünya'ya gelen toplam enerji bütün Dünya için aynıdır ama eğik eksen yüzünden aynı anda bir yarım küre yaz, öbürü kış yaşar.",
    null
  ],
  aciklama: `Dünya'ya gelen toplam enerjinin küçük bir kısmının bile yıl içinde değişmesi, mevsimlerin nedeni olamaz. Mevsimler, aynı enerjinin farklı açılarla ve farklı genişlikte alanlara düşmesiyle oluşur.
Adım 1 (I. yargı): Fark küçüktür ve Dünya'nın her yerini aynı anda etkiler; zıt mevsimleri açıklayamaz. Mevsimleri ışınların düşme açısı belirler. I. yargı yanlıştır.
Adım 2 (II. yargı): Dünya'ya gelen toplam enerji bütün Dünya için aynıdır ama eğik eksen yüzünden aynı anda bir yarım küre yaz, öbürü kış yaşar. II. yargı doğrudur.
Adım 3 (III. yargı): Aynı enerji dik düşünce dar, eğik düşünce geniş alana yayılır ve birim yüzeye düşen pay açıya göre değişir. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: Toplam enerjinin fazla olduğu zamanı yaz sanmak. Aynı anda iki yarım kürede farklı mevsimler yaşandığı için nedeni toplam enerji olamaz.
Cevap D.`
},
{
  id: "fen-mv-363",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `K ve L şehirlerinde 21 Mart ile 21 Haziran günlerinde gündüz süreleri ölçülmüş ve aşağıdaki tabloya yazılmıştır. Şehirlerin hangi yarım kürede olduğu belirtilmemiştir.
I. K şehri Ekvator üzerindedir.
II. 21 Haziran'da L şehrinde yaz mevsimi başlar.
III. K ve L şehirleri farklı yarım kürelerdedir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>21 Mart</th><th>21 Haziran</th></tr><tr><td>K</td><td>12 saat</td><td>15 saat 10 dakika</td></tr><tr><td>L</td><td>12 saat</td><td>9 saat 5 dakika</td></tr></table>",
  secenekler: [
    "Yalnız III",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I. yargıyı doğru sanma: 21 Mart'ta gündüz her yerde 12 saattir ve K'de 21 Haziran'da gündüz 15 saati geçtiği için K, Ekvator'da olamaz. II. yargıyı doğru sanma: L'de 21 Haziran'da gündüz yılın en kısa süresindedir; orada yaz değil kış başlar. III. yargıyı gözden kaçırma: 21 Haziran'da K'de gündüz uzun, L'de kısadır; bu, iki şehrin zıt yarım kürelerde olduğunu gösterir.",
    "I. yargıyı doğru sanma: 21 Mart'ta gündüz her yerde 12 saattir ve K'de 21 Haziran'da gündüz 15 saati geçtiği için K, Ekvator'da olamaz.",
    "II. yargıyı doğru sanma: L'de 21 Haziran'da gündüz yılın en kısa süresindedir; orada yaz değil kış başlar."
  ],
  aciklama: `21 Mart'ta gündüz her yerde yaklaşık 12 saattir; asıl ayırt edici tarih 21 Haziran'dır: gündüzü uzun olan yer Kuzey, kısa olan yer Güney Yarım Küre'dedir.
Adım 1 (I. yargı): 21 Mart'ta gündüz her yerde 12 saattir ve K'de 21 Haziran'da gündüz 15 saati geçtiği için K, Ekvator'da olamaz. I. yargı yanlıştır.
Adım 2 (II. yargı): L'de 21 Haziran'da gündüz yılın en kısa süresindedir; orada yaz değil kış başlar. II. yargı yanlıştır.
Adım 3 (III. yargı): 21 Haziran'da K'de gündüz uzun, L'de kısadır; bu, iki şehrin zıt yarım kürelerde olduğunu gösterir. III. yargı doğrudur.
Adım 4: Doğru yargı yalnız III.
Sık yapılan hata: 21 Mart'taki 12 saatlik gündüzü "Ekvator'dadır" diye yorumlamak. O gün gündüz her yerde 12 saattir; yeri yıl içindeki değişimden bulursun.
Cevap A.`
},
{
  id: "fen-mv-364",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Kuzey Yarım Küre'de bulunan bir okulun bahçesine yerleştirilen bir ölçer, üç günde öğle vakti bir metrekarelik yatay yüzeye düşen ışık enerjisini ölçmüştür. Ölçüm sonuçları ve o günlerin hava durumu tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Tarih</th><th>Hava durumu</th><th>Ölçülen enerji (birim)</th></tr><tr><td>21 Mart</td><td>Açık</td><td>700</td></tr><tr><td>21 Haziran</td><td>Bulutlu</td><td>520</td></tr><tr><td>21 Aralık</td><td>Açık</td><td>280</td></tr></table>",
  secenekler: [
    "21 Haziran'da ışınlar 21 Mart'takinden daha eğik düşmüştür.",
    "21 Haziran'da gündüz süresi 21 Mart'takinden kısadır.",
    "Üç tarih içinde ışınlar en eğik 21 Aralık'ta düşmüştür.",
    "21 Haziran'da Güneş daha az enerji yaydığı için ölçülen değer düşüktür."
  ],
  dogru: 2,
  hatalar: [
    "Ölçülen değeri açıyla bağdaştırma: haziranda düşük ölçümün nedeni bulutluluktur; haziranda ışınlar zaten mart ayından daha diktir.",
    "Gündüz süresini ters okuma: Kuzey Yarım Küre'de 21 Haziran'da gündüz yılın en uzun süresindedir, 21 Mart'ta ise 12 saattir.",
    null,
    "Güneş'in enerjisini değiştirme: Güneş'in yaydığı enerji yıl içinde değişmez; düşük ölçümün nedeni bulutlardır."
  ],
  aciklama: `Ölçülen enerji yalnız ışınların açısına değil, hava durumuna da bağlıdır. Bu yüzden ölçüm değerleri açı hakkında tek başına kesin bilgi vermez; tarih ise açıyı kesin olarak belirler.
Adım 1: Haziran ölçümü bulutlu gününe aittir; değeri düşük çıkması bulutlardan olabilir. Bu yüzden ölçüm değerine bakarak açı hakkında karar verilemez (A, D elenir).
Adım 2: Kuzey Yarım Küre'de gündüz 21 Haziran'da en uzun, 21 Mart'ta 12 saattir. B yanlıştır.
Adım 3: Kuzey Yarım Küre'de ışınlar 21 Aralık'ta en eğik, 21 Haziran'da en diktir; 21 Mart bunların arasındadır. C kesinlikle doğrudur.
Sık yapılan hata: Düşük enerji ölçümünü "ışınlar eğik gelmiş" diye yorumlamak. Hava durumunu da değerlendir.
Cevap C.`
},
{
  id: "fen-mv-365",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şehirde Güneş'in yerel saatle doğuş ve batış saatleri 21 Haziran ile 21 Aralık günlerinde tabloya yazılmıştır.
I. 21 Haziran'da bu şehirde gece 8 saat 20 dakika sürmüştür.
II. 21 Aralık'ta bu şehirde gündüz 9 saat 20 dakika sürmüştür.
III. Bu şehir Güney Yarım Küre'dedir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Tarih</th><th>Güneşin doğuşu</th><th>Güneşin batışı</th></tr><tr><td>21 Haziran</td><td>05.00</td><td>20.40</td></tr><tr><td>21 Aralık</td><td>07.30</td><td>16.50</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II. yargıyı gözden kaçırma: 21 Aralık'ta gündüz 16.50 − 07.30 = 9 saat 20 dakikadır.",
    null,
    "II. yargıyı gözden kaçırma: 21 Aralık'ta gündüz 16.50 − 07.30 = 9 saat 20 dakikadır. III. yargıyı doğru sanma: 21 Haziran'da gündüz uzun, 21 Aralık'ta kısa olduğundan şehir Kuzey Yarım Küre'dedir.",
    "I. yargıyı gözden kaçırma: 21 Haziran'da gündüz 20.40 − 05.00 = 15 saat 40 dakika, gece 24 saat − 15 saat 40 dakika = 8 saat 20 dakikadır. III. yargıyı doğru sanma: 21 Haziran'da gündüz uzun, 21 Aralık'ta kısa olduğundan şehir Kuzey Yarım Küre'dedir."
  ],
  aciklama: `Gündüz süresi = batış saati − doğuş saati, gece süresi = 24 saat − gündüz süresi. Hangi tarihte gündüzün uzun olduğu, yarım küreyi söyler.
Adım 1 (I. yargı): 21 Haziran'da gündüz 20.40 − 05.00 = 15 saat 40 dakika, gece 24 saat − 15 saat 40 dakika = 8 saat 20 dakikadır. I. yargı doğrudur.
Adım 2 (II. yargı): 21 Aralık'ta gündüz 16.50 − 07.30 = 9 saat 20 dakikadır. II. yargı doğrudur.
Adım 3 (III. yargı): 21 Haziran'da gündüz uzun, 21 Aralık'ta kısa olduğundan şehir Kuzey Yarım Küre'dedir. III. yargı yanlıştır.
Adım 4: Doğru yargılar I ve II.
Sık yapılan hata: Saatleri çıkarırken dakikaları karıştırmak ve gündüzü gece sanmak. Önce gündüzü bul, geceyi 24'ten çıkararak hesapla.
Cevap B.`
},
{
  id: "fen-mv-366",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `K kenti Kuzey Yarım Küre'de, L kenti Güney Yarım Küre'de bulunmaktadır; iki kent Ekvator'dan eşit uzaklıktadır. Bu kentlerde yaşayan iki arkadaş, 21 Aralık günü bulutsuz havada öğle vakti Güneş'i gözlemleyip birbirine bilgi vermiştir.
**Buna göre bu gözlemlerle ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Gündüz süresi, L kentinde K kentindekinden kısadır.",
    "Birim yüzeye düşen enerji, L kentinde K kentindekinden azdır.",
    "L kenti, K kentine göre Güneş'e belirgin biçimde daha yakındır.",
    "Öğle ışınları, L kentinde K kentindekinden daha dik düşer."
  ],
  dogru: 3,
  hatalar: [
    "Gündüz süresini ters okuma: 21 Aralık'ta Güney Yarım Küre Güneş'e yönelmiştir; orada yaz başlar ve gündüz K kentindekinden uzundur.",
    "Enerjiyi ters yorumlama: L kentinde ışınlar daha dik düştüğü için aynı enerji daha dar alana yayılır ve birim yüzeye düşen enerji K kentindekinden fazladır.",
    "Uzaklık yanılgısı: iki kentin Güneş'e uzaklığı arasındaki fark, 150 milyon km'nin yanında yok sayılacak kadar küçüktür; aradaki fark ışınların açısından gelir.",
    null
  ],
  aciklama: `Güneş'e yönelen yarım kürede ışınlar daha dik düşer ve gündüzler uzar; öbür yarım küre Güneş'ten uzaktadır. İki kent Ekvator'dan eşit uzaklıkta olduğu için aralarındaki fark yalnız hangi yarım kürede olduklarından gelir.
Adım 1: 21 Aralık'ta Güney Yarım Küre Güneş'e yönelmiştir; L kentinde yaz, K kentinde kış başlar.
Adım 2: Güneş'e yönelen L kentinde gündüz K kentindekinden uzundur (A yanlış) ve öğle ışınları daha dik düşer (D doğru).
Adım 3: Işınlar dik düştüğünde aynı enerji daha dar alana dağılır; L kentinde birim yüzeye düşen enerji K kentindekinden fazladır (B yanlış).
Adım 4: İki kentin Güneş'e uzaklığı arasındaki fark çok küçüktür ve mevsimlerin nedeni değildir (C yanlış).
Sağlama: 21 Haziran'da durum tersine döner; K kentinde gündüz daha uzun olur ve ışınlar daha dik düşer.
Cevap D.`
},
{
  id: "fen-mv-367",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki şekilde Dünya'nın Güneş ışınlarını aldığı bir tarihteki durumu gösterilmiştir. Dönme ekseninin kuzey ucu Güneş'ten uzağa eğiktir. K noktası Güney Yarım Küre'de, L noktası Ekvator'da, M noktası Kuzey Yarım Küre'de orta kuşakta yer almaktadır. Işınlar K noktasına dik düşmektedir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 520 270\" role=\"img\" aria-label=\"Dünya'nın Güneş ışınlarını aldığı durum: eksenin kuzey ucu Güneş'ten uzağa eğik, K güney yarım kürede, L Ekvator'da, M kuzey yarım kürede\"><path d=\"M 330 45 A 85 85 0 0 1 330 215 Z\" fill=\"var(--dolgu)\" fill-opacity=\"0.7\"/><circle cx=\"330\" cy=\"130\" r=\"85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"30\" y1=\"50\" x2=\"297.3\" y2=\"50\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"297.3,50 287.3,45 287.3,55\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"90\" x2=\"251\" y2=\"90\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"251,90 241,85 241,95\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"130\" x2=\"241\" y2=\"130\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"241,130 231,125 231,135\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"170\" x2=\"251\" y2=\"170\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"251,170 241,165 241,175\" fill=\"var(--vurgu2)\"/><line x1=\"30\" y1=\"210\" x2=\"297.3\" y2=\"210\" stroke=\"var(--vurgu2)\" stroke-width=\"2\"/><polygon points=\"297.3,210 287.3,205 287.3,215\" fill=\"var(--vurgu2)\"/><line x1=\"252\" y1=\"96.1\" x2=\"408\" y2=\"163.9\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><line x1=\"287.3\" y1=\"228.1\" x2=\"372.7\" y2=\"31.9\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"372.7\" cy=\"31.9\" r=\"5\" fill=\"var(--vurgu)\"/><text x=\"382.7\" y=\"23.9\" font-size=\"14\" fill=\"currentColor\" text-anchor=\"start\">Kuzey ucu</text><text x=\"30\" y=\"30\" font-size=\"15\" fill=\"currentColor\">Güneş ışınları</text><text x=\"378\" y=\"135\" font-size=\"15\" fill=\"currentColor\" text-anchor=\"middle\">Gece</text><circle cx=\"245\" cy=\"130\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"227\" y=\"136\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">K</text><circle cx=\"252\" cy=\"96.1\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"235.5\" y=\"94.9\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">L</text><circle cx=\"298.8\" cy=\"50.9\" r=\"5.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"292.2\" y=\"40.2\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"middle\">M</text></svg>",
  secenekler: [
    "Kuzey Yarım Küre'de gündüzler gecelerden uzundur.",
    "K noktasında gündüz süresi M noktasındakinden kısadır.",
    "L noktasında gündüz ile gece süreleri yaklaşık eşittir.",
    "M noktasında ışınlar K noktasındakinden daha dik düşer."
  ],
  dogru: 2,
  hatalar: [
    "Durumu yaz sanma: eksenin kuzey ucu Güneş'ten uzağa eğik olduğu için Kuzey Yarım Küre'de kış yaşanır ve gündüzler gecelerden kısadır.",
    "Gündüz sürelerini ters okuma: K Güneş'e yönelen yarım kürededir, orada gündüz uzundur; M ise gündüzü kısa olan yarım kürededir.",
    null,
    "Dik ışını yanlış kişiye verme: ışınlar K noktasına diktir; M'ye düşen ışınlar daha eğiktir."
  ],
  aciklama: `Eksenin kuzey ucu Güneş'ten uzağa eğikse Kuzey Yarım Küre'de kış, Güney Yarım Küre'de yaz yaşanır.
Adım 1: Şekildeki durum 21 Aralık durumudur. Kuzey Yarım Küre'de gündüzler kısadır, Güney'de uzundur (A yanlış).
Adım 2: K Güney Yarım Küre'dedir ve gündüzü uzundur; M Kuzey Yarım Küre'dedir ve gündüzü kısadır. B yanlıştır.
Adım 3: L Ekvator'dadır; dönen Dünya'da Ekvator çizdiği dairenin yarısını aydınlıkta, yarısını karanlıkta geçirir. Gündüz ile gece yaklaşık 12'şer saattir. C doğrudur.
Adım 4: Işınlar K'ye dik düştüğü için M'ye göre daha eğik değil, daha diktir; D yanlıştır.
Sağlama: Aynı şekilde L noktası yıl boyunca 12 saate yakın gündüz yaşar.
Cevap C.`
},
{
  id: "fen-mv-368",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gök bilimci, Güneş'e benzeyen bir yıldızın çevresinde dolanan Z gezegenini incelemektedir. Z gezegeni kendi ekseni çevresinde dönmektedir; dönme ekseni dolanma düzlemine tam diktir (eğiklik 0°). Gezegenin yörüngesi çok basıktır, yani yıldıza uzaklığı yıl içinde büyük ölçüde değişmektedir.
I. Z gezegeninde bir yerin öğle ışınlarının düşme açısı yıl içinde değişir.
II. Z gezegeninde bir yerin gündüz süresi yıl boyunca değişmez.
III. Z gezegeninde iki yarım kürede zıt mevsimler yaşanır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı gözden kaçırma: eksen dik olduğu için Güneş'e yönelen yarım küre değişmez ve gündüz süresi sabit kalır. III. yargıyı doğru sanma: eksen dik olduğundan yarım küreler sırayla Güneş'e yönelmez ve zıt mevsimler oluşmaz.",
    "I. yargıyı doğru sanma: eksen dik olduğu için bir yerin öğle ışınlarının açısı yıl boyunca aynı kalır. II. yargıyı gözden kaçırma: eksen dik olduğu için Güneş'e yönelen yarım küre değişmez ve gündüz süresi sabit kalır. III. yargıyı doğru sanma: eksen dik olduğundan yarım küreler sırayla Güneş'e yönelmez ve zıt mevsimler oluşmaz.",
    "I. yargıyı doğru sanma: eksen dik olduğu için bir yerin öğle ışınlarının açısı yıl boyunca aynı kalır. III. yargıyı doğru sanma: eksen dik olduğundan yarım küreler sırayla Güneş'e yönelmez ve zıt mevsimler oluşmaz."
  ],
  aciklama: `Dönme ekseni dolanma düzlemine dik olursa bir yerin ışın açısı ve gündüz süresi yıl boyunca değişmez; zıt mevsimler oluşmaz.
Adım 1 (I. yargı): Eksen dik olduğu için bir yerin öğle ışınlarının açısı yıl boyunca aynı kalır. I. yargı yanlıştır.
Adım 2 (II. yargı): Eksen dik olduğu için Güneş'e yönelen yarım küre değişmez ve gündüz süresi sabit kalır. II. yargı doğrudur.
Adım 3 (III. yargı): Eksen dik olduğundan yarım küreler sırayla Güneş'e yönelmez ve zıt mevsimler oluşmaz. III. yargı yanlıştır.
Adım 4: Doğru yargı yalnız II.
Sık yapılan hata: Yörüngenin basık olmasının yarım küreler için zıt mevsim oluşturacağını sanmak. Uzaklık değişimi iki yarım küreyi aynı anda aynı yönde etkiler.
Cevap A.`
},
{
  id: "fen-mv-369",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Zeynep, ışığın geliş açısının birim yüzeye düşen enerjiyi nasıl değiştirdiğini incelemek için bir deney tasarlamıştır. Özdeş üç siyah kabın her birine 100 mL su koymuş, aynı lambayı kapların su yüzeyine 30 cm uzaklıktan sırasıyla 90°, 60° ve 30° açıyla yöneltmiştir. Suyun sıcaklığının 10 °C artması için geçen süreler sırasıyla 6, 8 ve 14 dakika bulunmuştur.
**Buna göre bu deneyde değiştirilen değişken, sabit tutulan değişkenler ve sonucun yorumu aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Değiştirilen: lamba–kap uzaklığı; sabit: geliş açısı ve su miktarı; yorum: açı küçüldükçe birim yüzeye düşen enerji azalır.",
    "Değiştirilen: ışığın geliş açısı; sabit: lamba–kap uzaklığı ve su miktarı; yorum: açı küçüldükçe birim yüzeye düşen enerji azalır.",
    "Değiştirilen: ışığın geliş açısı; sabit: lamba–kap uzaklığı ve su miktarı; yorum: açı küçüldükçe birim yüzeye düşen enerji artar.",
    "Değiştirilen: suyun ısınma süresi; sabit: geliş açısı ve su miktarı; yorum: ısınma süresi uzadıkça birim yüzeye düşen enerji artar."
  ],
  dogru: 1,
  hatalar: [
    "Rolleri ters yerleştirme: uzaklık sabit tutulmuş, geliş açısı değiştirilmiştir. Yorum kısmı doğru olsa da değişkenlerin rolleri yanlıştır.",
    null,
    "Yorumu ters okuma: açı küçüldükçe ışık aynı enerjiyi daha geniş alana yayar; birim yüzeye düşen enerji artmaz, azalır. Isınma süresinin uzaması da bunu gösterir.",
    "Göstergeyi değiştirilen sanma: ısınma süresi Zeynep'in değiştirdiği değil, ölçtüğü sonuçtur. Süre uzadıkça suya birim zamanda ulaşan enerji azalmıştır, artmamıştır."
  ],
  aciklama: `Bir deneyde bilerek değiştirilen büyüklük değiştirilen (bağımsız) değişken, aynı tutulanlar sabit tutulan (kontrol) değişkenler, ölçülerek sonuç veren büyüklük ise göstergedir.
Adım 1: Zeynep ışığın geliş açısını 90°, 60° ve 30° yapmıştır. Değiştirilen değişken geliş açısıdır.
Adım 2: Lamba–kap uzaklığı (30 cm), su miktarı (100 mL) ve kapların özdeşliği her düzenekte aynıdır. Bunlar sabit tutulan değişkenlerdir. Isınma süresi ise ölçülen göstergedir.
Adım 3: Açı küçüldükçe süre 6 dakikadan 14 dakikaya uzamıştır. Aynı sıcaklık artışı için daha uzun süre gerekiyorsa suya her dakika daha az enerji ulaşıyor demektir; yani açı küçüldükçe birim yüzeye düşen enerji azalır.
Sağlama: Eğik gelen ışık aynı enerjiyi daha geniş alana yaydığı için mevsimler kışa yaklaşırken ışınların eğikleşmesi de ısınmayı azaltır.
Cevap B.`
},
{
  id: "fen-mv-370",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Dünya'nın Güneş çevresindeki yörüngesinde dört konumunu gösteren bir maket hazırlayan öğrenciler, arkadaşlarına aşağıdaki yargıları söylemiştir.
I. Dünya yörüngenin hangi noktasında olursa olsun eksenin kuzey ucu uzayda aynı yöne bakar.
II. Dünya Güneş'e en yakın olduğu noktadan geçerken eksenin kuzey ucu Güneş'e doğru eğiktir.
III. Eksenin kuzey ucu Güneş'e doğru eğikken Güney Yarım Küre'de geceler gündüzlerden uzundur.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I. yargıyı gözden kaçırma: eksenin eğikliği ve yönü yıl boyunca sabittir; doğru bir makette bütün eksenler paraleldir. II. yargıyı doğru sanma: Dünya Güneş'e en yakın olduğunda, yani ocak başında, eksenin kuzey ucu Güneş'ten uzağa eğiktir ve Kuzey Yarım Küre'de kış yaşanır. III. yargıyı gözden kaçırma: kuzey ucu Güneş'e eğikken Güney Yarım Küre Güneş'ten uzak kalır, orada kış yaşanır ve gündüzler kısalır.",
    null,
    "I. yargıyı gözden kaçırma: eksenin eğikliği ve yönü yıl boyunca sabittir; doğru bir makette bütün eksenler paraleldir. II. yargıyı doğru sanma: Dünya Güneş'e en yakın olduğunda, yani ocak başında, eksenin kuzey ucu Güneş'ten uzağa eğiktir ve Kuzey Yarım Küre'de kış yaşanır.",
    "II. yargıyı doğru sanma: Dünya Güneş'e en yakın olduğunda, yani ocak başında, eksenin kuzey ucu Güneş'ten uzağa eğiktir ve Kuzey Yarım Küre'de kış yaşanır."
  ],
  aciklama: `Eksen yörüngenin her noktasında aynı yöne bakar. Kuzey ucu Güneş'e doğru eğikse Kuzey'de yaz, Güney'de kış yaşanır.
Adım 1 (I. yargı): Eksenin eğikliği ve yönü yıl boyunca sabittir; doğru bir makette bütün eksenler paraleldir. I. yargı doğrudur.
Adım 2 (II. yargı): Dünya Güneş'e en yakın olduğunda, yani ocak başında, eksenin kuzey ucu Güneş'ten uzağa eğiktir ve Kuzey Yarım Küre'de kış yaşanır. II. yargı yanlıştır.
Adım 3 (III. yargı): Kuzey ucu Güneş'e eğikken Güney Yarım Küre Güneş'ten uzak kalır, orada kış yaşanır ve gündüzler kısalır. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve III.
Sık yapılan hata: Güneş'e en yakın konumu eksenin Güneş'e dönük olduğu konum sanmak. Yakınlık ile eksen eğikliğinin yönü ayrı kavramlardır.
Cevap B.`
},
{
  id: "fen-mv-371",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Türkiye'de yaşayan Ayşe ile başka bir ülkede yaşayan Pablo, bulutsuz havada 21 Mart ve 21 Aralık günlerinde öğle vakti 1 m boyundaki birer çubuğun gölgesini ve gündüz süresini ölçüp birbirine göndermiştir. Ölçümler tabloda verilmiştir; Pablo'nun şehrinin hangi yarım kürede olduğu belirtilmemiştir.
**Buna göre 21 Mart'tan 21 Aralık'a geçerken aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kişi</th><th>Tarih</th><th>Gölge boyu</th><th>Gündüz süresi</th></tr><tr><td>Ayşe</td><td>21 Mart</td><td>84 cm</td><td>12 saat</td></tr><tr><td>Ayşe</td><td>21 Aralık</td><td>200 cm</td><td>9 saat 15 dakika</td></tr><tr><td>Pablo</td><td>21 Mart</td><td>70 cm</td><td>12 saat</td></tr><tr><td>Pablo</td><td>21 Aralık</td><td>21 cm</td><td>14 saat 25 dakika</td></tr></table>",
  secenekler: [
    "Ayşe'nin şehrinde gündüz süresi uzar, birim yüzeye düşen enerji artar.",
    "Pablo'nun şehrinde gündüz süresi kısalır, birim yüzeye düşen enerji azalır.",
    "Ayşe'nin şehrinde gündüz süresi kısalır, birim yüzeye düşen enerji artar.",
    "Pablo'nun şehrinde gündüz süresi uzar, birim yüzeye düşen enerji artar."
  ],
  dogru: 3,
  hatalar: [
    "Tabloyu ters okuma: Ayşe'nin gölgesi 84 cm'den 200 cm'e uzamış, gündüzü 12 saatten 9 saat 15 dakikaya inmiştir; ışınlar eğikleşmiş, enerji azalmıştır.",
    "Pablo'nun verisini Ayşe'ninkiyle karıştırma: Pablo'nun gölgesi 70 cm'den 21 cm'e kısalmış, gündüzü 12 saatten 14 saat 25 dakikaya çıkmıştır.",
    "Yarı doğru okuma: Ayşe'nin gündüzü gerçekten kısalmıştır; ama gölgesi uzadığı için ışınlar eğikleşmiş ve birim yüzeye düşen enerji azalmıştır, artmamıştır.",
    null
  ],
  aciklama: `Kısa gölge, ışınların daha dik düştüğünü ve birim yüzeye daha çok enerji geldiğini gösterir. Gündüz süresi 12 saatten uzunsa o yer ilkbahar ya da yaz yarım küresindedir.
Adım 1 (Ayşe): Gölge 84 cm'den 200 cm'e uzamıştır; ışınlar eğikleşmiş, birim yüzeye düşen enerji azalmıştır. Gündüz de 12 saatten 9 saat 15 dakikaya inmiştir. A ve C yanlıştır.
Adım 2 (Pablo): Gölge 70 cm'den 21 cm'e kısalmıştır; ışınlar dikleşmiş, birim yüzeye düşen enerji artmıştır. Gündüz 12 saatten 14 saat 25 dakikaya çıkmıştır.
Adım 3: Pablo'da hem gündüz uzamış hem enerji artmıştır; yani Pablo 21 Aralık'ta yaz yaşayan Güney Yarım Küre'dedir. D doğru, B yanlıştır.
Sağlama: Aynı dönemde Ayşe'de kış başlamıştır; kısa gündüz ve uzun gölge aynı yarım küreyi gösterir.
Cevap D.`
},
{
  id: "fen-mv-372",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen kulübü, Türkiye'de bulunan K şehri ile Güney Yarım Küre'de bulunan L şehrinde 1 m boyundaki bir çubuğun öğle gölgesini dört önemli tarihte ölçmüş ve sonuçları tabloya yazmıştır.
I. 21 Mart'ta iki şehirde gölge boyları farklı olduğundan gündüz süreleri de farklıdır.
II. 21 Aralık'ta K şehrindeki ışınlar L şehrindekinden daha diktir.
III. L şehrinde 21 Aralık'ta birim yüzeye düşen enerji, 21 Haziran'dakinden fazladır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>21 Mart</th><th>21 Haziran</th><th>23 Eylül</th><th>21 Aralık</th></tr><tr><td>K</td><td>80 cm</td><td>28 cm</td><td>80 cm</td><td>190 cm</td></tr><tr><td>L</td><td>70 cm</td><td>150 cm</td><td>70 cm</td><td>20 cm</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  dogru: 2,
  hatalar: [
    "I. yargıyı doğru sanma: 21 Mart'ta gündüz her yerde yaklaşık 12 saattir; gölge boyu farkı, şehirlerin Ekvator'a olan uzaklık farkından gelir. III. yargıyı gözden kaçırma: L'de gölge Aralık'ta 20 cm, Haziran'da 150 cm olduğu için Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar.",
    "II. yargıyı doğru sanma: 21 Aralık'ta K'de gölge 190 cm, L'de 20 cm'dir; ışınlar L'de daha diktir. III. yargıyı gözden kaçırma: L'de gölge Aralık'ta 20 cm, Haziran'da 150 cm olduğu için Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar.",
    null,
    "I. yargıyı doğru sanma: 21 Mart'ta gündüz her yerde yaklaşık 12 saattir; gölge boyu farkı, şehirlerin Ekvator'a olan uzaklık farkından gelir. II. yargıyı doğru sanma: 21 Aralık'ta K'de gölge 190 cm, L'de 20 cm'dir; ışınlar L'de daha diktir. III. yargıyı gözden kaçırma: L'de gölge Aralık'ta 20 cm, Haziran'da 150 cm olduğu için Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar."
  ],
  aciklama: `Gölge boyu sadece ışınların açısını anlatır. Gündüz süresi ise tarihe ve yarım küreye bağlıdır; ekinoks günlerinde her yerde 12 saattir.
Adım 1 (I. yargı): 21 Mart'ta gündüz her yerde yaklaşık 12 saattir; gölge boyu farkı, şehirlerin Ekvator'a olan uzaklık farkından gelir. I. yargı yanlıştır.
Adım 2 (II. yargı): 21 Aralık'ta K'de gölge 190 cm, L'de 20 cm'dir; ışınlar L'de daha diktir. II. yargı yanlıştır.
Adım 3 (III. yargı): L'de gölge Aralık'ta 20 cm, Haziran'da 150 cm olduğu için Aralık'ta ışınlar daha diktir ve birim yüzeye düşen enerji artar. III. yargı doğrudur.
Adım 4: Doğru yargı yalnız III.
Sık yapılan hata: Gölge boyu farkını gündüz süresi farkı sanmak. İki ayrı kavramdır; 21 Mart'ta gölge boyları farklı olsa da gündüz süreleri eşittir.
Cevap C.`
},
{
  id: "fen-mv-373",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir coğrafya yarışmasında yarışmacılara, aynı gün üç şehirde ölçülen gece süreleri verilmiştir. Ölçümün hangi tarihte yapıldığı belirtilmemiştir; şehirlerden hiçbiri kutup dairesinin içinde değildir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Gece süresi</th></tr><tr><td>P</td><td>14 saat 40 dakika</td></tr><tr><td>R</td><td>9 saat 50 dakika</td></tr><tr><td>S</td><td>11 saat 40 dakika</td></tr></table>",
  secenekler: [
    "P ile R şehirleri farklı yarım kürelerde bulunmaktadır.",
    "Bu ölçümler Kuzey Yarım Küre'de kış mevsiminde yapılmıştır.",
    "P şehri, Güney Yarım Küre'de bulunan şehirdir.",
    "S şehri, R şehrinden Ekvator'a daha uzak bir yerdedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tarihi veriden kesinleştirme: bu gece süreleri Kuzey'in kışına da Güney'in kışına da uyabilir; ölçüm günü verilmemiştir.",
    "Yarım küreyi kesinleştirme: tarih bilinmediği için P'nin Güney'de mi Kuzey'de mi olduğu belli değildir; yalnız P ile R'nin zıt yarım kürelerde olduğu kesindir.",
    "Gündüz süresini ters yorumlama: aynı gün gündüzü 12 saate daha yakın olan yer Ekvator'a daha yakındır; S'nin gündüzü R'ninkinden 12 saate daha yakındır."
  ],
  aciklama: `Bir yerin gündüz süresi, 24 saatten gece süresi çıkarılarak bulunur. Aynı gün bir yarım kürede gündüzler 12 saatten uzunsa öbür yarım kürede kısadır.
Adım 1: Gündüz süreleri: P'de 24 saat − 14 saat 40 dakika = 9 saat 20 dakika; R'de 24 saat − 9 saat 50 dakika = 14 saat 10 dakika; S'de 24 saat − 11 saat 40 dakika = 12 saat 20 dakikadır.
Adım 2: P'de gündüz 12 saatten kısa, R'de uzundur. Aynı gün bir yarım kürenin bütün yerlerinde gündüzler 12 saatten aynı yönde sapar; bu yüzden P ile R farklı yarım kürelerdedir. A doğrudur.
Adım 3: Tarih verilmediği için P'nin hangi yarım kürede olduğu ya da mevsimin hangisi olduğu bilinemez (B ve C kesin değildir).
Adım 4: Aynı gün gündüzü 12 saate ne kadar yakınsa o yer Ekvator'a o kadar yakındır. S'nin gündüzü (12 saat 20 dakika), R'ninkinden (14 saat 10 dakika) 12 saate daha yakındır; yani S, R'den Ekvator'a daha yakındır (D yanlıştır).
Sık yapılan hata: Hiç verilmeyen tarihi ya da yarım küreyi veriden kesinleştirmek. "Kesinlikle" kökünde yalnız verinin kesin olarak söylediğini seç.
Cevap A.`
},
{
  id: "fen-mv-374",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `P ve R şehirlerinde, 21 Haziran ile 21 Aralık günlerinde bulutsuz havada öğle vakti birim yüzeye düşen ışık enerjisi ve gündüz süresi ölçülmüş; sonuçlar tabloya yazılmıştır.
I. P ve R şehirleri farklı yarım kürelerdedir.
II. R şehrinde 21 Aralık'ta öğle ışınları 21 Haziran'dakinden daha dik düşer.
III. İki şehirde de gündüz süresinin uzun olduğu tarihte birim yüzeye düşen enerji daha fazla ölçülmüştür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Tarih</th><th>Birim yüzeye düşen enerji (birim)</th><th>Gündüz süresi</th></tr><tr><td>P</td><td>21 Haziran</td><td>90</td><td>15 saat</td></tr><tr><td>P</td><td>21 Aralık</td><td>35</td><td>9 saat</td></tr><tr><td>R</td><td>21 Haziran</td><td>30</td><td>9 saat</td></tr><tr><td>R</td><td>21 Aralık</td><td>88</td><td>15 saat</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "II. yargıyı gözden kaçırma: R'de birim yüzeye düşen enerji Aralık'ta çok olduğundan ışınlar o tarihte daha diktir. III. yargıyı gözden kaçırma: P'de 15 saatlik gündüzle 90, R'de 15 saatlik gündüzle 88 birim ölçülmüştür; uzun gündüz ile fazla enerji birlikte görülür.",
    "I. yargıyı gözden kaçırma: P'de yaz Haziran'da, R'de yaz Aralık'ta yaşandığından iki şehir zıt yarım kürelerdedir. III. yargıyı gözden kaçırma: P'de 15 saatlik gündüzle 90, R'de 15 saatlik gündüzle 88 birim ölçülmüştür; uzun gündüz ile fazla enerji birlikte görülür.",
    "III. yargıyı gözden kaçırma: P'de 15 saatlik gündüzle 90, R'de 15 saatlik gündüzle 88 birim ölçülmüştür; uzun gündüz ile fazla enerji birlikte görülür.",
    null
  ],
  aciklama: `Yaz mevsiminde gündüz uzar ve ışınlar daha dik düşer; ikisi birlikte birim yüzeye düşen enerjiyi artırır.
Adım 1 (I. yargı): P'de yaz Haziran'da, R'de yaz Aralık'ta yaşandığından iki şehir zıt yarım kürelerdedir. I. yargı doğrudur.
Adım 2 (II. yargı): R'de birim yüzeye düşen enerji Aralık'ta çok olduğundan ışınlar o tarihte daha diktir. II. yargı doğrudur.
Adım 3 (III. yargı): P'de 15 saatlik gündüzle 90, R'de 15 saatlik gündüzle 88 birim ölçülmüştür; uzun gündüz ile fazla enerji birlikte görülür. III. yargı doğrudur.
Adım 4: Doğru yargılar I ve II ve III.
Sık yapılan hata: Tablodaki verilerden yalnız birini yorumlayıp öbürünü atlamak. Gündüz süresi, enerji ve ışın açısı birbirini destekleyen üç ipucudur.
Cevap D.`
},
{
  id: "fen-mv-375",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `K ve L şehirlerinde, 21 Haziran ile 23 Eylül günlerinde öğle vakti Güneş ışınlarının yatay yüzeyle yaptığı açı ve gündüz süresi ölçülmüş; sonuçlar tabloya yazılmıştır.
**Buna göre aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Şehir</th><th>Tarih</th><th>Öğle ışın açısı</th><th>Gündüz süresi</th></tr><tr><td>K</td><td>21 Haziran</td><td>70°</td><td>14 saat 40 dakika</td></tr><tr><td>K</td><td>23 Eylül</td><td>46°</td><td>12 saat</td></tr><tr><td>L</td><td>21 Haziran</td><td>23°</td><td>9 saat 20 dakika</td></tr><tr><td>L</td><td>23 Eylül</td><td>46°</td><td>12 saat</td></tr></table>",
  secenekler: [
    "23 Eylül'de L şehrinde ilkbahar mevsimi başlar.",
    "K şehrinde birim yüzeye düşen enerji 21 Haziran'da 23 Eylül'dekinden fazladır.",
    "23 Eylül'de iki şehirde ışın açıları eşit olduğundan iki şehir aynı yarım kürededir.",
    "21 Haziran'da L şehrinde gündüz süresi K şehrindekinden kısadır."
  ],
  dogru: 2,
  hatalar: [
    "Doğru yargıyı yanlış sanma: 21 Haziran'da L'de gündüz kısadır, yani L Güney Yarım Küre'dedir; 23 Eylül'de Güney Yarım Küre'de ilkbahar başlar.",
    "Doğru yargıyı yanlış sanma: K'de açı Haziran'da 70°, Eylül'de 46°'dir; açı büyüdükçe ışınlar dikleşir ve birim yüzeye düşen enerji artar.",
    null,
    "Doğru yargıyı yanlış sanma: tabloya göre 21 Haziran'da L'de gündüz 9 saat 20 dakika, K'de 14 saat 40 dakikadır."
  ],
  aciklama: `Ekinoks günlerinde Ekvator'dan eşit uzaklıktaki iki şehirde ışın açıları eşit olur; ama bu şehirler aynı yarım kürede olmak zorunda değildir.
Adım 1: 21 Haziran'da K'de gündüz uzun, L'de kısadır. Yani K Kuzey, L Güney Yarım Küre'dedir. D doğrudur.
Adım 2: 23 Eylül'de Güney Yarım Küre'de ilkbahar başlar. L Güney'de olduğu için A doğrudur.
Adım 3: K'de açı Haziran'da 70°, Eylül'de 46°'dir; Haziran'da ışınlar daha diktir ve birim yüzeye daha çok enerji düşer. B doğrudur.
Adım 4: Eylül'de iki şehirde açıların eşit olması, iki şehrin Ekvator'dan eşit uzaklıkta olduğunu gösterir; ama zıt yarım kürelerde oldukları için C yanlıştır.
Sağlama: Haziran'da K ile L arasındaki 47°'lik açı farkı, iki şehrin farklı yarım kürelerde olduğunu da doğrular.
Cevap C.`
}
);
