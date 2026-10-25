// Türkçe — Cümle Türleri: Havuz eki (kademe 0), tur-ct-016 … tur-ct-075
// Kazanım: T.8.4.19 (yüklemin türü, yüklemin yeri, anlam, yapı)
// Bağlam aileleri: uçurtma şenliği, akvaryum, çiftlik, bilim şenliği, deprem tatbikatı, gece yolculuğu, atölye, gözlem
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cumle-turleri"] = window.LGS_BANK["cumle-turleri"] || []).push(
/* ===================== HAVUZ — DÜZEY 1 ===================== */
{
  id: "tur-ct-016",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Şenlikten dört cümle: (I) Gökyüzü rengârenk uçurtmalarla doldu. (II) Çocuklar iplerini sıkı tuttu. (III) Rüzgâr o sabah çok sertti. (IV) Sahildeki kalabalık hızla büyüdü. **Hangisi isim cümlesidir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "Fiil cümlesini isim cümlesi sanma: 'doldu' çekimli bir fiildir, cümle fiil cümlesidir.",
    "Fiil cümlesini isim cümlesi sanma: 'tuttu' çekimli bir fiildir, cümle fiil cümlesidir.",
    null,
    "Fiil cümlesini isim cümlesi sanma: 'büyüdü' çekimli bir fiildir, cümle fiil cümlesidir."
  ],
  aciklama: `Yüklemi çekimli fiil olan cümleye fiil cümlesi, yüklemi isim soylu bir sözcük (isim, sıfat, zamir) olan cümleye isim cümlesi denir.
Adım 1: Her cümlenin yüklemini bul: 'doldu', 'tuttu', 'sertti', 'büyüdü'.
Adım 2: 'doldu', 'tuttu' ve 'büyüdü' iş ya da oluş bildiren çekimli fiillerdir.
Adım 3: 'sertti', 'sert' sıfatına ek fiil (-ti) getirilerek yüklem olmuştur. Durum bildirir; III. cümle isim cümlesidir.
Sağlama: 'Rüzgâr o sabah çok sert idi.' dersen yüklem yine 'sert' sözcüğüdür.
Sık yapılan hata: Geçmiş zaman eki gördüğünde yüklemi fiil sanmak.
Cevap C.`
},
{
  id: "tur-ct-017",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Akvaryumdan dört cümle: (I) Küçük bir balık yüzdü camın önünde. (II) Çocuklar hayranlıkla bekledi. (III) Rehber adları tek tek söyledi. (IV) Gişe öğleden sonra kapandı. **Hangisi devrik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Kurallı cümleyi devrik sanma: yüklem 'bekledi' cümlenin sonundadır.",
    "Kurallı cümleyi devrik sanma: yüklem 'söyledi' cümlenin sonundadır.",
    "Kurallı cümleyi devrik sanma: yüklem 'kapandı' cümlenin sonundadır."
  ],
  aciklama: `Yüklemi sonda olan cümle kurallı, yüklemden sonra söz gelen cümle devriktir.
Adım 1: Yüklemleri bul: 'yüzdü', 'bekledi', 'söyledi', 'kapandı'.
Adım 2: II, III ve IV. cümlelerde yüklem son sözcüktür; bunlar kurallıdır.
Adım 3: I. cümlede yüklem 'yüzdü'dür ve ondan sonra 'camın önünde' gelir. Yüklem sonda değil.
Sağlama: Cümleyi 'Küçük bir balık camın önünde yüzdü.' diye düzeltebilirsin; bu düzeltme cümlenin devrik olduğunu gösterir.
Sık yapılan hata: Cümlenin ilk sözcüğüne bakıp karar vermek; önce yüklemi bul.
Cevap A.`
},
{
  id: "tur-ct-018",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Turnuvadan dört cümle: (I) Turnuva cumartesi başlayacak. (II) Ayşe ilk hamlesini yaptı. (III) Rakibi saate bakıyordu. (IV) Kimse yüksek sesle konuşmadı. **Hangisi olumsuz cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Olumlu cümleyi olumsuz sanma: 'başlayacak' yüklemi olumsuzluk eki taşımaz.",
    "Olumlu cümleyi olumsuz sanma: 'yaptı' yüklemi olumsuzluk eki taşımaz.",
    "Olumlu cümleyi olumsuz sanma: 'bakıyordu' yüklemi olumsuzluk eki taşımaz.",
    null
  ],
  aciklama: `Olumsuzluk yüklemde aranır: -ma/-me eki ya da değil, yok sözcükleri.
Adım 1: Yüklemleri bul: 'başlayacak', 'yaptı', 'bakıyordu', 'konuşmadı'.
Adım 2: İlk üç yüklemde olumsuzluk eki yoktur; yargı gerçekleşir.
Adım 3: 'konuşmadı' yüklemindeki -ma eki yargının gerçekleşmediğini bildirir.
Sağlama: 'Kimse konuştu' demek anlamsızdır; -ma eki cümlenin yönünü değiştirir.
Sık yapılan hata: 'Kimse' sözcüğünü görüp olumsuzluğu oradan çıkarmak; olumsuzluğu yüklemde ara.
Cevap D.`
},
{
  id: "tur-ct-019",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Barınaktan dört cümle: (I) Barınaktaki kediler yemeği bekledi. (II) Kapıyı açan gönüllü mamaları getirdi. (III) Küçük bir yavru kutuya saklandı. (IV) Hepsi sıcak köşede uyudu. **Hangisi birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "'Barınaktaki' sözcüğündeki -ki eki yan yargı kurmaz; tek yüklem ('bekledi') vardır, cümle basittir.",
    null,
    "Bu cümlede yalnızca 'saklandı' yüklemi vardır, fiilimsi yoktur; cümle basittir.",
    "Bu cümlede yalnızca 'uyudu' yüklemi vardır, fiilimsi yoktur; cümle basittir."
  ],
  aciklama: `Birleşik cümlede asıl yargıya bağlı bir yan yargı bulunur; fiilimsi bunlardan biridir.
Adım 1: Her cümlede yargı sayısına bak.
Adım 2: I, III ve IV. cümlelerde tek çekimli yüklem vardır ve fiilimsi yoktur.
Adım 3: II. cümlede 'açan' bir sıfat-fiildir (-an) ve 'Kapıyı açan' bir yan yargı kurar. Cümle birleşiktir.
Sağlama: 'Gönüllü kapıyı açtı' ile 'gönüllü mamaları getirdi' iki yargıdır; biri fiilimsiyle asıl yargıya bağlanmıştır.
Sık yapılan hata: 'Barınaktaki' gibi -ki ekli sözcüğü yan yargı saymak.
Cevap B.`
},
{
  id: "tur-ct-020",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Sınıftan dört cümle: (I) Sınıfta üç kutu duruyor. (II) Kâğıtları mavi kutuya attık, camları yeşile yerleştirdik. (III) Nöbetçiler kutuları cuma boşaltıyor. (IV) Öğretmenimiz çalışmayı beğendi. **Hangisi sıralı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "Tek yargılı cümleyi sıralı sanma: 'duruyor' tek yüklemdir, cümle basittir.",
    null,
    "Tek yargılı cümleyi sıralı sanma: 'boşaltıyor' tek yüklemdir, cümle basittir.",
    "Tek yargılı cümleyi sıralı sanma: 'beğendi' tek yüklemdir, cümle basittir."
  ],
  aciklama: `Sıralı cümlede birbirinden bağımsız yargılar bağlaç kullanılmadan, virgülle art arda dizilir.
Adım 1: Yüklemleri say: I, III ve IV. cümlelerde birer yüklem vardır.
Adım 2: II. cümlede 'attık' ve 'yerleştirdik' olmak üzere iki yüklem vardır.
Adım 3: İki yargı virgülle ayrılmış, aralarında bağlaç yoktur. Cümle sıralıdır.
Sağlama: Virgülün yerine 've' koyarsan cümle bağlı olur; bağlaç olmadığı için sıralıdır.
Sık yapılan hata: Cümlede birden çok isim görüp onu sıralı saymak; yüklemleri say.
Cevap B.`
},
{
  id: "tur-ct-021",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Tatbikattan dört cümle: (I) Tatbikat sabah onda başladı. (II) Öğrenciler sırasıyla bahçeye indi. (III) Müdür yardımcısı alanda bekliyordu. (IV) Zil çaldı ve herkes sıraların altına girdi. **Hangisi bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Tek yargılı cümleyi bağlı sanma: 'başladı' tek yüklemdir, bağlaç yoktur.",
    "Tek yargılı cümleyi bağlı sanma: 'indi' tek yüklemdir, bağlaç yoktur.",
    "Tek yargılı cümleyi bağlı sanma: 'bekliyordu' tek yüklemdir, bağlaç yoktur.",
    null
  ],
  aciklama: `Bağlı cümlede bağımsız yargılar ve, ama, fakat, çünkü gibi bağlaçlarla bağlanır.
Adım 1: Yüklemleri say: ilk üç cümlede birer yüklem vardır.
Adım 2: IV. cümlede 'çaldı' ve 'girdi' olmak üzere iki yargı vardır.
Adım 3: İki yargı 've' bağlacıyla bağlanmıştır. Cümle bağlıdır.
Sağlama: Bağlacı çıkarıp virgül koyarsan cümle sıralıya döner; bağlaç olduğu için bu cümle bağlıdır.
Sık yapılan hata: 'Sıralarla' gibi sözcüklerden yargı çıkarmak; yalnızca yüklemleri say.
Cevap D.`
},
{
  id: "tur-ct-022",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Şenlikten dört cümle: (I) Bu akşamki gösteriye kimler gelecek? (II) Deney masaları salona kuruldu. (III) Volkan maketi herkesin ilgisini çekti. (IV) Sunumlar yarın da sürecek. **Hangisi soru cümlesidir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Bildirme cümlesini soru sanma: bu cümle bir bilgi verir, soru eki ya da soru sözcüğü yoktur.",
    "Bildirme cümlesini soru sanma: bu cümle bir bilgi verir, cevap beklemez.",
    "Bildirme cümlesini soru sanma: bu cümle bir bilgi verir, soru sözcüğü yoktur."
  ],
  aciklama: `Soru cümlesi cevap bekler; soru eki (mi, mı, mu, mü) ya da soru sözcüğü (kim, ne, hangi, kaç) taşır.
Adım 1: Her cümlede soru eki ya da soru sözcüğü ara.
Adım 2: II, III ve IV. cümleler bilgi verir; cevap beklemez.
Adım 3: I. cümlede 'kimler' soru sözcüğü vardır ve cümleye 'Ali, Ece ve Mert' gibi bir cevap verilir.
Sağlama: Cümlenin sonundaki soru işareti de ipucudur, ama asıl ölçüt cevap beklemesidir.
Sık yapılan hata: Cümlenin başındaki 'Bu akşamki' sözünü görmeden soru sözcüğünü atlamak.
Cevap A.`
},
{
  id: "tur-ct-023",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Kumbarayla ilgili dört cümle: (I) Kumbarama bu ay para atmadım. (II) Yeni bisiklet için yeterince biriktirmedim. (III) Annem bana kumbaramı açma izni verdi. (IV) Arkadaşım bize uğramadı. **Hangisi olumludur?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "Olumsuz cümleyi olumlu sanma: 'atmadım' yüklemindeki -ma eki yargıyı olumsuz yapar.",
    "Olumsuz cümleyi olumlu sanma: 'biriktirmedim' yüklemindeki -me eki yargıyı olumsuz yapar.",
    null,
    "Olumsuz cümleyi olumlu sanma: 'uğramadı' yüklemindeki -ma eki yargıyı olumsuz yapar."
  ],
  aciklama: `Olumlu cümlede yargı gerçekleşir; olumsuz cümlede yüklem -ma/-me eki ya da değil, yok sözcüğüyle gerçekleşmediğini bildirir.
Adım 1: Yüklemleri bul: 'atmadım', 'biriktirmedim', 'verdi', 'uğramadı'.
Adım 2: 'atmadım', 'biriktirmedim' ve 'uğramadı' yüklemlerinde olumsuzluk eki vardır.
Adım 3: 'verdi' yüklemi olumsuzluk eki taşımaz; annenin izin verdiği bildirilir. III. cümle olumludur.
Sağlama: III. cümlede 'açma' sözcüğü bir isim-fiildir; olumsuzluk eki sayılmaz, yüklem 'verdi'dir.
Sık yapılan hata: 'açma' sözcüğündeki -ma ekini olumsuzluk sanmak.
Cevap C.`
},
{
  id: "tur-ct-024",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Havuzdan dört cümle: (I) Havuza girmeden önce duş aldık. (II) Yüzmeyi öğrenen çocuklar rozet kazandı. (III) Hava soğuk olursa havuz kapanacak. (IV) Havuzun suyu çok temizdi. **Hangisi basit cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "'Girmeden' zarf-fiildir (-madan); yan yargı kurar, cümle birleşiktir.",
    "'Öğrenen' sıfat-fiildir (-an); yan yargı kurar, cümle birleşiktir.",
    "'Olursa' şart ekiyle yan yargı kurar; cümle birleşiktir.",
    null
  ],
  aciklama: `Basit cümlede tek yargı vardır; fiilimsi, şart eki ya da 'ki' ile kurulmuş yan yargı bulunmaz.
Adım 1: I. cümlede 'girmeden' (zarf-fiil) yan yargı kurar.
Adım 2: II. cümlede 'öğrenen' (sıfat-fiil), III. cümlede 'olursa' (şart eki) yan yargı kurar. Üçü de birleşiktir.
Adım 3: IV. cümlede yalnızca 'temizdi' yüklemi vardır; fiilimsi ya da şart eki yoktur. Cümle basittir.
Sağlama: IV. cümleyi 'temiz' sözcüğüne kadar sadeleştirsen yargı sayısı yine birdir.
Sık yapılan hata: Tek çekimli yüklem görüp fiilimsili cümleyi basit saymak.
Cevap D.`
},
{
  id: "tur-ct-025",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Tren garından dört cümle: (I) Tren peronda yavaşça durdu. (II) Yolcular vagonlara bindi. (III) Peronun ucundaki bank bomboştu. (IV) Biletçi herkesi güler yüzle karşıladı. **Hangisi fiil cümlesi __değildir__?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "'Durdu' çekimli bir fiildir; bu cümle fiil cümlesidir, sorunun aradığı cümle değildir.",
    "'Bindi' çekimli bir fiildir; bu cümle fiil cümlesidir, sorunun aradığı cümle değildir.",
    null,
    "'Karşıladı' çekimli bir fiildir; bu cümle fiil cümlesidir, sorunun aradığı cümle değildir."
  ],
  aciklama: `Fiil cümlesinin yüklemi çekimli fiildir; isim cümlesinin yüklemi isim soylu bir sözcüktür. Soru fiil cümlesi olmayanı, yani isim cümlesini arıyor.
Adım 1: Yüklemleri bul: 'durdu', 'bindi', 'bomboştu', 'karşıladı'.
Adım 2: 'durdu', 'bindi' ve 'karşıladı' iş bildiren çekimli fiillerdir.
Adım 3: 'bomboştu', 'bomboş' sıfatına ek fiil getirilerek kurulmuştur; durum bildirir. III. cümle isim cümlesidir.
Sağlama: 'Bank boştur' dersen yüklem yine isim soyludur.
Sık yapılan hata: Olumsuz kök ('değildir') okunmadan fiil cümlesini seçmek.
Cevap C.`
},
{
  id: "tur-ct-026",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Maket kursundan dört cümle: (I) Yarın hava güzel olursa maketi uçuracağız. (II) Maketin kanatları balsa ağacından yapıldı. (III) Kumandayı dedem hazırladı. (IV) Pil şarjı sabaha tamamlandı. **Hangisi birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümlede tek yüklem ('yapıldı') vardır; fiilimsi ya da şart eki yoktur, cümle basittir.",
    "Bu cümlede tek yüklem ('hazırladı') vardır; yan yargı kuran bir yapı yoktur, cümle basittir.",
    "Bu cümlede tek yüklem ('tamamlandı') vardır; yan yargı kuran bir yapı yoktur, cümle basittir."
  ],
  aciklama: `Birleşik cümle, asıl yargıya bağlı bir yan yargı içerir; bu yan yargı fiilimsi, şart eki ya da 'ki' ile kurulabilir.
Adım 1: Her cümlede yan yargı kuran bir yapı ara.
Adım 2: II, III ve IV. cümlelerde tek yüklem vardır; yan yargı yoktur.
Adım 3: I. cümlede 'olursa' sözcüğündeki -sa eki 'Yarın hava güzel olursa' diye bir yan yargı kurar. Asıl yargı 'uçuracağız'dır. Cümle birleşiktir.
Sağlama: 'Güzel olursa' bir koşul bildirir; koşul yan yargıdır.
Sık yapılan hata: Yalnızca bir yüklem sayıp şart ekini yargı saymamak.
Cevap A.`
},
{
  id: "tur-ct-027",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `Sirkten dört cümle: (I) Güldü çocuklar palyaçoya. (II) Gösteri akşam yedide sona erdi. (III) Seyirciler alkışladı sonuna kadar. (IV) Döndü herkes sevinçle evine. **Hangisi kurallı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "Devrik cümleyi kurallı sanma: yüklem 'güldü' sonda değildir, ardından 'çocuklar' gelir.",
    null,
    "Devrik cümleyi kurallı sanma: yüklem 'alkışladı' sonda değildir, ardından 'sonuna kadar' gelir.",
    "Devrik cümleyi kurallı sanma: yüklem 'döndü' sonda değildir, ardından 'herkes' gelir."
  ],
  aciklama: `Kurallı cümlede yüklem cümlenin sonundadır. Üç cümle de yüklemi başa alıp devrik kurulmuş; birinin yüklemi sondadır.
Adım 1: Yüklemleri bul: 'güldü', 'sona erdi', 'alkışladı', 'döndü'.
Adım 2: I, III ve IV. cümlelerde yüklemden sonra başka sözler gelir; bunlar devriktir.
Adım 3: II. cümlede yüklem 'sona erdi' en sondadır. Cümle kurallıdır.
Sağlama: II. cümlenin sonuna bir sözcük eklemek istersen yüklemin yerini bozarsın.
Sık yapılan hata: Kök 'kurallı' diyor; devrik cümleyi aramak.
Cevap B.`
},
/* ===================== HAVUZ — DÜZEY 2 ===================== */
{
  id: "tur-ct-028",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Arıcılık atölyesini anlatan bir yazıda dört cümle yer alıyor: (I) Arıcı yaklaştı kovanlara yavaşça. (II) Arılar çiçekten çiçeğe uçuyor. (III) Bal bu yıl oldukça bol. (IV) Zahmetlidir arıcının işi. **Numaralanmış cümlelerin hangisi hem fiil cümlesi hem de devrik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnız fiil cümlesi ölçütünü sağlıyor: 'uçuyor' yüklemi sonda, cümle kurallıdır.",
    "İsim cümlesidir ve kurallıdır: 'bol' isim soylu yüklem, cümlenin sonundadır.",
    "Devrik ama isim cümlesidir: 'zahmetlidir' sıfat + ek fiildir (-dir), fiil cümlesi değildir."
  ],
  aciklama: `İki ölçüt var: yüklem çekimli fiil olacak ve yüklem sonda olmayacak. Her ölçütü ayrı denetle.
Adım 1: Yüklemleri bul: 'yaklaştı', 'uçuyor', 'bol', 'zahmetlidir'.
Adım 2: Türe bak: 'yaklaştı' ve 'uçuyor' fiildir; 'bol' ve 'zahmetlidir' isim soyludur. III ve IV elenir.
Adım 3: Yere bak: 'uçuyor' sondadır (kurallı); 'yaklaştı'dan sonra 'kovanlara yavaşça' gelir (devrik).
Sağlama: I. cümleyi 'Arıcı kovanlara yavaşça yaklaştı.' diye düzeltmek yüklemin yerinin bozuk olduğunu gösterir.
Sık yapılan hata: İlk uyan ölçütte durmak; ikinci ölçütü de sına.
Cevap A.`
},
{
  id: "tur-ct-029",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Hafta sonu hazırlığı sırasında aile içinde geçen dört cümle: (I) Bu kitabı gerçekten okudun mu? (II) Çayı kim demledi? (III) Defterini yine mi unuttun? (IV) Yağmur akşama kadar dinmeyecek mi? **Numaralanmış cümlelerin hangisi hem soru hem de olumsuz bir cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Soru ama olumludur: 'okudun' yüklemi olumsuzluk eki taşımaz.",
    "Soru ama olumludur: 'demledi' yüklemi olumsuzluk eki taşımaz.",
    "Soru ama olumludur: 'unuttun' yüklemi olumsuzluk eki taşımaz.",
    null
  ],
  aciklama: `Soru ile olumsuzluk ayrı ölçütlerdir. Bir cümle soru olduğu hâlde olumlu, olumsuz bir cümle de soru olmayabilir.
Adım 1: Soruyu denetle: dört cümlede de soru eki ya da soru sözcüğü vardır; hepsi soru cümlesidir.
Adım 2: Olumsuzluğu yüklemde ara: 'okudun', 'demledi' ve 'unuttun' olumsuzluk eki almamıştır.
Adım 3: 'dinmeyecek' yüklemindeki -me eki yargının gerçekleşmeyeceğini bildirir. IV. cümle hem soru hem olumsuzdur.
Sağlama: 'Yağmur dinmeyecek.' dersen cümle olumsuz kalır; soru eki cümleye soru anlamı katar.
Sık yapılan hata: Soru anlamını olumsuzluk sanmak; -ma/-me ekini yüklemde ara.
Cevap D.`
},
{
  id: "tur-ct-030",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Hayvanat bahçesini anlatan bir yazıdan üç cümle: (1) Bakıcı sabahları kafesi temizledi ve yem kaplarını doldurdu. (2) Zürafaların su havuzu bu yaz oldukça sığ. (3) Ziyaretçiler zürafaların yemeğini uzaktan izledi.

I. 1. cümle sıralı cümledir.
II. 2. cümle isim cümlesidir.
III. 3. cümle yapıca birleşik cümledir.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "'Ve' bağlacı iki yargıyı bağladığı için 1. cümle bağlıdır, sıralı değildir; ayrıca II doğru olduğu için tek başına I olamaz.",
    null,
    "1. cümle bağlı olduğu için I yanlıştır; 3. cümlede tek yüklem ('izledi') vardır, cümle basittir, III de yanlıştır.",
    "2. cümle isim cümlesidir (II doğru) ama 3. cümle birleşik değil, basittir; III yanlıştır."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle; yargılar birbirini etkilemez.
Adım 1: I. yargı: 1. cümlede 'temizledi' ve 'doldurdu' iki yargıdır ve 've' bağlacıyla bağlanmıştır. Bu bağlı cümledir, sıralı değildir. I yanlış.
Adım 2: II. yargı: 2. cümlenin yüklemi 'sığ'dır (ek fiil düşmüş). İsim soylu olduğu için isim cümlesidir. II doğru.
Adım 3: III. yargı: 3. cümlede tek yüklem ('izledi') vardır, fiilimsi yoktur. Cümle basittir. III yanlış.
Sağlama: Yalnız II doğru olduğundan seçenek 'Yalnız II' olur.
Sık yapılan hata: Ek fiilin düştüğü cümlede yüklem yok sanmak.
Cevap B.`
},
{
  id: "tur-ct-031",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Müze gezisini anlatan bir yazıdan dört cümle: (I) Elif ve Deniz müzeye birlikte gitti. (II) Dinozor iskeletini gördük, yanından sessizce geçtik. (III) İskelete baktık ama yanına yaklaşmadık. (IV) Cam vitrine dokunan çocuklar uyarıldı. **Numaralanmış cümlelerin hangisi bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "'Ve' burada yalnız iki özneyi bağlar; tek yüklem ('gitti') vardır, cümle basittir.",
    "İki yargı bağlaçsız, virgülle dizilmiş; bu sıralı cümledir.",
    null,
    "'Dokunan' sıfat-fiil olduğundan cümle birleşiktir; yargıları bağlayan bir bağlaç yoktur."
  ],
  aciklama: `Bağlı cümlede en az iki bağımsız yargı bağlaçla bağlanır. Bağlaç yalnız sözcükleri ya da özneleri bağlıyorsa cümle bağlı olmaz.
Adım 1: I. cümlede 've' Elif ile Deniz'i bağlar; yüklem tektir ('gitti'). Basit cümle.
Adım 2: II. cümlede 'gördük' ve 'geçtik' bağlaçsız, virgülle dizilmiş: sıralı cümle.
Adım 3: III. cümlede 'baktık' ve 'yaklaşmadık' iki bağımsız yargıdır ve 'ama' bağlacıyla bağlanmıştır: bağlı cümle.
Adım 4: IV. cümle 'dokunan' fiilimsisiyle kurulmuş birleşik cümledir.
Sağlama: 'ama'yı çıkarıp virgül koyarsan III. cümle sıralıya döner.
Sık yapılan hata: 've' görünce her cümleyi bağlı sanmak.
Cevap C.`
},
{
  id: "tur-ct-032",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Çiftlik gezisini anlatan dört cümle: (I) Tavuklar yumurtlamayı bitirince çiftçi onları saydı. (II) Çiftlikte ineklere ve koyunlara bakıyorlar. (III) Sabah inekleri sağdık, süt bidonlarını kamyona yükledik. (IV) Hava soğudu ama kimse üşümedi. **Numaralanmış cümlelerin hangisi sıralı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "'Bitirince' zarf-fiil olduğundan cümle birleşiktir; birbirinden bağımsız iki yargı yoktur.",
    "'Ve' yalnız 'ineklere' ile 'koyunlara' sözcüklerini bağlar; tek yüklem vardır, cümle basittir.",
    null,
    "İki bağımsız yargı 'ama' bağlacıyla bağlanmış; bu bağlı cümledir."
  ],
  aciklama: `Sıralı cümlede bağımsız yargılar bağlaç olmadan, virgülle ya da noktalı virgülle dizilir.
Adım 1: I. cümlede 'bitirince' (-ince zarf-fiili) yan yargı kurar: birleşik.
Adım 2: II. cümlede 'bakıyorlar' tek yüklemdir, 've' yalnız iki sözü bağlar: basit.
Adım 3: III. cümlede 'sağdık' ve 'yükledik' iki bağımsız yargıdır; aralarında yalnız virgül vardır: sıralı.
Adım 4: IV. cümlede iki yargı 'ama' ile bağlanmıştır: bağlı.
Sağlama: III. cümlede hiçbir bağlaç yok; 'ama' olan IV. cümle sıralı olamaz.
Sık yapılan hata: Bağlacı olan cümleyle bağlaçsız olanı karıştırmak.
Cevap C.`
},
{
  id: "tur-ct-033",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Kuş gözlemi gezisinden dört cümle: (I) Dürbünle ağaç tepelerine baktık. (II) Çınar ağacındaki yuva boştu. (III) Kuşlar sabah erkenden yuvadan ayrılmış. (IV) Rehberimiz bizi sessizlik konusunda uyardı. **Bu cümlelerden kaç tanesi isim cümlesidir?**`,
  gorsel: null,
  secenekler: ["Bir", "İki", "Üç", "Dört"],
  dogru: 0,
  hatalar: [
    null,
    "İki sayma: 'ayrılmış' -miş ekiyle kurulmuş çekimli bir fiildir (duyulan geçmiş zaman); bu cümle fiil cümlesidir.",
    "Fiil cümlelerini de saymışsın: 'baktık', 'ayrılmış' ve 'uyardı' çekimli fiillerdir.",
    "Hepsini isim cümlesi sayma: yalnız 'boştu' isim soylu yüklemdir, diğerleri çekimli fiildir."
  ],
  aciklama: `Yüklemi isim soylu olan cümleler isim cümlesidir; yüklem çekimli fiilse cümle fiil cümlesidir.
Adım 1: Yüklemleri bul: 'baktık', 'boştu', 'ayrılmış', 'uyardı'.
Adım 2: 'baktık' ve 'uyardı' iş bildirir; fiildir.
Adım 3: 'ayrılmış' bir fiildir; -miş eki duyulan geçmiş zaman ekidir, ek fiil değildir. Bu cümle fiil cümlesidir.
Adım 4: 'boştu' sıfata ek fiil getirilerek kurulmuştur; yalnız II. cümle isim cümlesidir.
Sağlama: 'ayrılmış' yerine 'ayrılmıştır' desen ek fiil olmadan da yüklem fiil kalır.
Sık yapılan hata: -miş ekini ek fiil sanmak.
Cevap A.`
},
{
  id: "tur-ct-034",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Pul koleksiyonunu anlatan bir yazıdan üç cümle: (1) Dedemin pul koleksiyonu yüzlerce ülkeden pul içeriyor. (2) Değerlidir dedemin en eski pulu. (3) Dedem albümü torunlarına bile göstermedi.

I. 1. cümle isim cümlesidir.
II. 2. cümle isim cümlesidir ve yüklemi sonda değildir.
III. 3. cümle olumsuzdur.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "'İçeriyor' çekimli bir fiildir; 1. cümle fiil cümlesidir, I yanlıştır.",
    "II doğru ama III de doğru: 'göstermedi' yüklemi -me eki taşır, cümle olumsuzdur.",
    "I yanlıştır: 1. cümlenin yüklemi 'içeriyor' fiildir, cümle isim cümlesi değildir.",
    null
  ],
  aciklama: `Her yargıyı ayrı denetle.
Adım 1: I. yargı: 1. cümlenin yüklemi 'içeriyor'dur; çekimli fiildir. Cümle fiil cümlesidir. I yanlış.
Adım 2: II. yargı: 2. cümlenin yüklemi 'değerlidir'tir (sıfat + ek fiil). İsim cümlesidir; yüklemden sonra 'dedemin en eski pulu' geldiği için devriktir. II doğru.
Adım 3: III. yargı: 'göstermedi' yüklemi -me eki taşır; cümle olumsuzdur. III doğru.
Sağlama: II ve III doğru olduğundan yanıt 'II ve III' olur.
Sık yapılan hata: Cümlede çok isim görüp 1. cümleyi isim cümlesi saymak.
Cevap D.`
},
{
  id: "tur-ct-035",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Orman yürüyüşünün anlatıldığı yazıdan dört cümle: (I) Ormanda telefonlar hiç çekmiyordu. (II) Haritaya bakmadan yolu bulamadık. (III) Pusula çantanın dibinde kaldı. (IV) Yolu bilen rehber öne geçti. **Numaralanmış cümlelerin hangisi hem olumsuz hem de birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "Olumsuz ama basit: yalnız 'çekmiyordu' yüklemi vardır, fiilimsi ya da şart eki yoktur.",
    null,
    "Basit ve olumludur: 'kaldı' tek yüklemdir, olumsuzluk eki yoktur.",
    "Birleşik ama olumludur: 'bilen' fiilimsi içerir, 'geçti' yüklemi olumsuzluk eki taşımaz."
  ],
  aciklama: `İki ölçüt var: olumsuz olacak, yapısı birleşik olacak.
Adım 1: Olumsuzluğu ara: I. cümlede 'çekmiyordu', II. cümlede 'bulamadık' olumsuzdur. III ve IV olumludur.
Adım 2: Yapıyı denetle: I. cümlede tek yüklem vardır, basit.
Adım 3: II. cümlede 'bakmadan' zarf-fiil (-madan) yan yargı kurar; cümle birleşiktir.
Sağlama: II. cümle hem 'bulamadık' ile olumsuzdur hem de 'bakmadan' ile birleşiktir.
Sık yapılan hata: Yalnız birleşik cümleyi bulup olumsuzluğu denetlememek.
Cevap B.`
},
{
  id: "tur-ct-036",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, kamp gecesini anlatan dört cümleyi aşağıdaki tabloda dört ölçüte göre çözümlemiştir. **Tablodaki hangi satırda verilen bilgilerden biri yanlıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Cümle</th><th>Yüklemin türü</th><th>Yüklemin yeri</th><th>Yapısı</th></tr><tr><td>I. Gece boyunca yandı ateş.</td><td>Fiil</td><td>Devrik</td><td>Basit</td></tr><tr><td>II. Çadırlar çok sessizdi.</td><td>İsim</td><td>Kurallı</td><td>Birleşik</td></tr><tr><td>III. Ateş sönünce herkes uyudu.</td><td>Fiil</td><td>Kurallı</td><td>Birleşik</td></tr><tr><td>IV. Ağaçtaki baykuşlar hâlâ ötüyor.</td><td>Fiil</td><td>Kurallı</td><td>Basit</td></tr></table>`,
  secenekler: ["I. satır", "II. satır", "III. satır", "IV. satır"],
  dogru: 1,
  hatalar: [
    "I. satır doğru: 'yandı' fiildir, ardından 'ateş' geldiği için devriktir, tek yargı vardır.",
    null,
    "III. satır doğru: 'uyudu' fiildir, yüklem sondadır, 'sönünce' zarf-fiili cümleyi birleşik yapar.",
    "IV. satır doğru: 'ötüyor' fiildir, yüklem sondadır; 'ağaçtaki' sözcüğündeki -ki eki yan yargı kurmaz, cümle basittir."
  ],
  aciklama: `Tablodaki her satırı yüklemden başlayarak denetle.
Adım 1: I. satır: yüklem 'yandı' (fiil), ardından 'ateş' geliyor (devrik), tek yargı (basit). Doğru.
Adım 2: II. satır: yüklem 'sessizdi' (isim), sondadır (kurallı). Fiilimsi, şart eki ya da 'ki' bağlacı yoktur; tek yargı vardır, cümle basittir. Tablodaki 'Birleşik' bilgisi yanlış.
Adım 3: III. satırda 'sönünce' yan yargı kurar (birleşik); IV. satırda 'ağaçtaki' -ki ekidir, cümle basittir. İkisi de doğru.
Sağlama: II. satırdaki cümleyi tek yargıdan oluştuğu için birleşik sayamazsın.
Sık yapılan hata: Tablodaki dört bilgiyi birlikte denetlemeyip tek ölçüte bakmak.
Cevap B.`
},
{
  id: "tur-ct-037",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Seramik atölyesinden dört cümle: (I) Çamuru yoğurunca şekil vermek kolaylaşıyor. (II) Elleri ıslak tutan öğrenci kapları düzgün çıkarıyor. (III) Atölyenin fırını bu hafta bozuk. (IV) Pişen kaplar yarın boyanacak. **Numaralanmış cümlelerin hangisinde birleşik cümle özelliği __yoktur__?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "'Yoğurunca' zarf-fiildir (-ınca); yan yargı kurar, cümle birleşiktir.",
    "'Tutan' sıfat-fiildir (-an); yan yargı kurar, cümle birleşiktir.",
    null,
    "'Pişen' sıfat-fiildir (-en); yan yargı kurar, cümle birleşiktir."
  ],
  aciklama: `Birleşik cümlede fiilimsi, şart eki ya da 'ki' ile kurulmuş bir yan yargı bulunur. Soru bunun olmadığı cümleyi arıyor.
Adım 1: I. cümlede 'yoğurunca' (zarf-fiil) ve 'vermek' (isim-fiil) yan yargı kurar.
Adım 2: II. cümlede 'tutan' (sıfat-fiil), IV. cümlede 'pişen' (sıfat-fiil) yan yargı kurar.
Adım 3: III. cümlede tek yüklem ('bozuk') vardır; fiilimsi, şart eki ya da 'ki' yok. Cümle basittir.
Sağlama: 'Atölyenin' sözcüğündeki -nin eki tamlama ekidir, yargı kurmaz.
Sık yapılan hata: Olumsuz kökü (yoktur) okumadan birleşik cümleyi seçmek.
Cevap C.`
},
{
  id: "tur-ct-038",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Doğum günü hazırlığı sırasında söylenen dört cümle: (I) Bu akşam evde kimse yok. (II) Dolapta yeterli yiyecek bulunmuyor. (III) Komşumuz bize çorba getirdi. (IV) Mutfak çok sıcaktı. **Numaralanmış cümlelerin hangisi, yüklemi -ma/-me eki taşımadığı hâlde olumsuzdur?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Olumsuzdur ama yüklemde -ma eki vardır ('bulunmuyor'); sorunun şartını sağlamaz.",
    "Olumludur: 'getirdi' yüklemi olumsuzluk eki taşımaz ve yargı gerçekleşmiştir.",
    "Olumludur: 'sıcaktı' bir durum bildirir, olumsuzluk anlamı taşımaz."
  ],
  aciklama: `Olumsuzluk -ma/-me ekiyle olabildiği gibi 'değil' ve 'yok' sözcükleriyle de olur.
Adım 1: Olumsuz cümleleri bul: 'yok' ve 'bulunmuyor' yargının gerçekleşmediğini bildirir. III ve IV olumludur.
Adım 2: II. cümlede olumsuzluk -mu eki (bulunmuyor) ile kurulmuştur; soru bu eki taşımayanı arıyor.
Adım 3: I. cümlenin yüklemi 'yok'tur. Ek yoktur ama sözcüğün kendisi yokluğu bildirir; isim cümlesidir ve olumsuzdur.
Sağlama: 'Bu akşam evde kimse var' dersen anlam tersine döner.
Sık yapılan hata: Olumsuzluğu yalnız -ma/-me ekiyle sınırlamak.
Cevap A.`
},
{
  id: "tur-ct-039",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Bir balon şenliğini anlatan yazıdan üç cümle: (1) Gökyüzüne bırakılan balonlar rüzgârla uzaklaştı. (2) Çocuklar uzun süre gökyüzüne baktı. (3) Balonlar nereye kadar gidecek?

I. 1. cümle yapıca birleşiktir.
II. 2. cümle devrik cümledir.
III. 3. cümle soru cümlesidir.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "II yanlıştır: 2. cümlede yüklem 'baktı' en sondadır, cümle kurallıdır; ayrıca I ve III doğrudur.",
    "III doğru ama I de doğru: 'bırakılan' sıfat-fiil olduğundan 1. cümle birleşiktir.",
    "I doğru ama II yanlıştır: 2. cümle kurallıdır; III'ü de atlamış olursun.",
    null
  ],
  aciklama: `Her yargıyı ayrı denetle.
Adım 1: I. yargı: 'bırakılan' bir sıfat-fiildir (-an); 'Gökyüzüne bırakılan' yan yargı kurar. 1. cümle birleşiktir. I doğru.
Adım 2: II. yargı: 2. cümlenin yüklemi 'baktı' sondadır. Cümle kurallıdır, devrik değildir. II yanlış.
Adım 3: III. yargı: 'nereye' soru sözcüğüdür ve cümle cevap bekler. 3. cümle soru cümlesidir. III doğru.
Sağlama: I ve III doğru, II yanlış olduğundan yanıt 'I ve III' olur.
Sık yapılan hata: 'Uzun süre' sözünü yükleme katıp yüklemi ortada saymak.
Cevap D.`
},
{
  id: "tur-ct-040",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Okul bahçesindeki fidan dikme çalışmasından dört cümle: (I) Fidanları diktik ve suladık. (II) Toprak kuruydu ama fideler canlıydı. (III) Hava ısındı fakat rüzgâr dinmedi. (IV) Fideler köklendi, yapraklar yeşerdi. **Numaralanmış cümleler yapıları bakımından incelendiğinde hangisi diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "I. cümle 've' ile bağlanmış bağlı cümledir; II ve III ile aynı türdendir, farklı olan değildir.",
    "II. cümle 'ama' ile bağlanmış bağlı cümledir; I ve III ile aynı türdendir, farklı olan değildir.",
    "III. cümle 'fakat' ile bağlanmış bağlı cümledir; I ve II ile aynı türdendir, farklı olan değildir.",
    null
  ],
  aciklama: `Önce her cümlenin yapısını bul, sonra tek başına kalan türü seç.
Adım 1: I. cümlede 've' iki yargıyı bağlar (diktik, suladık): bağlı.
Adım 2: II. cümlede 'ama', III. cümlede 'fakat' iki yargıyı bağlar: ikisi de bağlı.
Adım 3: IV. cümlede 'köklendi' ve 'yeşerdi' yargıları bağlaç olmadan, virgülle dizilmiştir: sıralı.
Sağlama: Üç cümlede bağlaç var, birinde yok; bağlaçsız olan IV. cümle farklıdır.
Sık yapılan hata: İki yargılı olmalarını görüp dördünü de aynı sanmak; bağlaca bak.
Cevap D.`
}
,
{
  id: "tur-ct-041",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Sinema gününe ilişkin dört cümle: (I) Okuldan sonra sinemaya gidecek misin? (II) Bitirdin mi ödevini? (III) Bu filmi kim izlemiş? (IV) Salon çok kalabalıktı bu akşam. **Numaralanmış cümlelerin hangisi hem soru cümlesi hem de devrik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "Soru cümlesidir ama kurallıdır: yüklem 'gidecek misin' cümlenin sonundadır.",
    null,
    "Soru cümlesidir ama kurallıdır: yüklem 'izlemiş' cümlenin sonundadır.",
    "Devriktir ama soru değil bildirme cümlesidir: 'kalabalıktı' cevap beklemez."
  ],
  aciklama: `İki ölçüt var: cümle soru olacak ve yüklem sonda olmayacak. Her ölçütü ayrı denetle.
Adım 1: Soruyu denetle: I, II ve III. cümlelerde soru eki ya da soru sözcüğü vardır; IV. cümle bilgi verir. IV elenir.
Adım 2: Yüklemin yerine bak: I. cümlede yüklem sondadır; III. cümlede 'izlemiş' sondadır. İkisi kurallıdır.
Adım 3: II. cümlede yüklem 'bitirdin mi' ifadesidir ve ardından 'ödevini' gelir. Yüklem sonda değil; cümle devriktir.
Sağlama: II. cümleyi 'Ödevini bitirdin mi?' diye düzeltebilirsin.
Sık yapılan hata: Soru ekini yüklemin sonu sayıp yüklemin cümle sonunda olduğunu düşünmek.
Cevap B.`
},
{
  id: "tur-ct-042",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci sınav sabahını anlatırken şu cümleyi kurmuştur: "Sınav kâğıtları dağıtılınca sınıfa derin bir sessizlik çöktü." **Bu cümle için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "İsim cümlesi, kurallı, birleşik",
    "Fiil cümlesi, devrik, birleşik",
    "Fiil cümlesi, kurallı, birleşik",
    "Fiil cümlesi, kurallı, basit"
  ],
  dogru: 2,
  hatalar: [
    "Yüklem 'çöktü' çekimli fiildir; cümleyi isim cümlesi sanmışsın.",
    "Yüklem 'çöktü' cümlenin sonundadır; cümleyi devrik sanmışsın.",
    null,
    "'Dağıtılınca' zarf-fiil olduğundan yan yargı kurar; cümleyi basit sanmışsın."
  ],
  aciklama: `Cümleyi dört ölçüte göre sırayla çözümle.
Adım 1: Yüklem 'çöktü'dür. Çekimli fiil olduğu için cümle fiil cümlesidir.
Adım 2: 'Çöktü' cümlenin son sözcüğüdür; cümle kurallıdır.
Adım 3: 'Dağıtılınca', -ınca ekiyle kurulmuş bir zarf-fiildir ve 'Sınav kâğıtları dağıtılınca' diye yan yargı oluşturur. Cümle birleşiktir.
Sağlama: Birleşik cümlede asıl yargı ('sessizlik çöktü') ile yan yargı ('kâğıtlar dağıtılınca') birlikte bulunur.
Sık yapılan hata: Tek çekimli yüklem görüp basit demek.
Cevap C.`
},
{
  id: "tur-ct-043",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Konuk ağırlamaya hazırlanan bir ailede söylenen dört cümle: (I) Paketi kimin getirdiğini henüz bilmiyoruz. (II) Bu paketi kim getirdi? (III) Misafirler akşam yemeğine kalacak mı? (IV) Hangi odada uyuyacaksın? **Numaralanmış cümlelerin hangisi soru cümlesi __değildir__?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümle soru cümlesidir: 'kim' soru sözcüğüdür ve cevap beklenir; soru olmayanı arıyorsun.",
    "Bu cümle soru cümlesidir: 'mı' soru ekidir ve cümle cevap bekler.",
    "Bu cümle soru cümlesidir: 'hangi' soru sözcüğüdür ve cevap beklenir."
  ],
  aciklama: `Soru cümlesi cevap bekler. Cümlede soru sözcüğü bulunması tek başına soru cümlesi yapmaz.
Adım 1: II, III ve IV. cümlelerde 'kim', 'mı' ve 'hangi' vardır; üçü de cevap bekler.
Adım 2: I. cümlede 'kimin' sözü vardır ama cümle 'bilmiyoruz' diyerek bir bilgi verir.
Adım 3: 'Evet' ya da 'hayır' diye cevap veremezsin; I. cümle bildirme cümlesidir, soru cümlesi değildir.
Sağlama: Cümlenin sonunda soru işareti yoktur; bu da bildirme cümlesi olduğunu destekler.
Sık yapılan hata: Soru sözcüğü gören her cümleyi soru saymak.
Cevap A.`
},
{
  id: "tur-ct-044",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Yüzme yarışmasını anlatan bir yazıdan dört cümle: (I) Yüzücüler son turda hızlandı ancak birinciliği kaçırdı. (II) Takım çalışması ve sabır başarının anahtarı. (III) Antrenman bitti, herkes soyunma odasına döndü. (IV) Hocamızın verdiği ödevi bitirmeden uyumadık. **Numaralanmış cümlelerin hangisi bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "'Ve' yalnız iki özneyi bağlar ('çalışması' ile 'sabır'); tek yüklem vardır, cümle basittir.",
    "İki bağımsız yargı bağlaçsız, virgülle dizilmiş; bu sıralı cümledir.",
    "'Verdiği' ve 'bitirmeden' fiilimsidir; cümle birleşiktir, bağımsız yargıları bağlayan bağlaç yoktur."
  ],
  aciklama: `Bağlı cümlede bağımsız yargılar bağlaçla bağlanır.
Adım 1: I. cümlede 'hızlandı' ve 'kaçırdı' iki bağımsız yargıdır; 'ancak' bağlacı bunları bağlar. Cümle bağlıdır.
Adım 2: II. cümlede 've' iki özneyi bağlar; yüklem (ek fiili düşmüş 'anahtarı') tektir.
Adım 3: III. cümlede iki yargı bağlaçsız, virgülle dizilmiştir: sıralı.
Adım 4: IV. cümlede fiilimsiler yan yargı kurar: birleşik.
Sağlama: 'Ancak'ı çıkarıp virgül koyarsan I. cümle sıralıya dönüşür.
Sık yapılan hata: Her 've' bağlacını yargıları bağlayan bağlaç sanmak.
Cevap A.`
},
{
  id: "tur-ct-045",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Gökyüzü gözlemine ilişkin bir yazıdan üç cümle: (1) Gece yarısı gökyüzünde onlarca meteor göründü. (2) Kimse teleskobun başından ayrılmadı. (3) Herkes büyülendi bu manzaraya.

I. 1. cümle devrik cümledir.
II. 2. cümle olumludur.
III. 3. cümle fiil cümlesidir ve yüklemi sonda değildir.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "1. cümlede yüklem 'göründü' sondadır; cümle kurallıdır, I yanlıştır.",
    "'Ayrılmadı' yüklemi -ma eki taşır; cümle olumsuzdur, II yanlıştır.",
    null,
    "I ve II yanlıştır: 1. cümle kurallı, 2. cümle olumsuzdur."
  ],
  aciklama: `Her yargıyı ayrı denetle.
Adım 1: I. yargı: 1. cümlenin yüklemi 'göründü' sondadır. Cümle kurallıdır. I yanlış.
Adım 2: II. yargı: 'ayrılmadı' yüklemindeki -ma eki yargının gerçekleşmediğini bildirir. Cümle olumsuzdur. II yanlış.
Adım 3: III. yargı: 'büyülendi' çekimli bir fiildir; arkasından 'bu manzaraya' gelir. Cümle fiil cümlesidir ve devriktir. III doğru.
Sağlama: Yalnız III doğru olduğundan yanıt 'Yalnız III' olur.
Sık yapılan hata: 'Kimse' sözcüğünü olumsuz sayıp II'yi doğru bulmak ve cümleyi olumlu saymak.
Cevap C.`
},
{
  id: "tur-ct-046",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Kar günü anlatan dört cümle: (I) Karlar yavaş yavaş eridi. (II) Çocuklar kardan adam yaptı ve evlerine döndü. (III) Sokaktaki kar çok kalın. (IV) Kar yağınca sokaklar çok sessiz. **Numaralanmış cümlelerin hangisi hem isim cümlesi hem de birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Fiil cümlesidir ve basittir: 'eridi' çekimli fiildir, yan yargı yoktur.",
    "Fiil cümlesidir: 'yaptı' ve 'döndü' çekimli fiillerdir; cümle bağlıdır.",
    "İsim cümlesidir ama basittir: 'sokaktaki' -ki ekidir, yan yargı kurmaz.",
    null
  ],
  aciklama: `İki ölçüt var: yüklem isim soylu olacak ve cümle birleşik olacak.
Adım 1: Yüklemleri bul: 'eridi', 'yaptı' ve 'döndü', 'kalın', 'sessiz'. I ve II. cümlelerde yüklem fiildir; elenir.
Adım 2: III. cümlenin yüklemi 'kalın'dır (isim cümlesi) ama 'sokaktaki' sözcüğündeki -ki eki yan yargı kurmaz; tek yargı vardır, cümle basittir.
Adım 3: IV. cümlenin yüklemi 'sessiz'dir (isim cümlesi), 'yağınca' zarf-fiili de yan yargı kurar. Cümle birleşiktir.
Sağlama: IV. cümlede iki yargı vardır: 'kar yağınca' ve 'sokaklar çok sessiz'.
Sık yapılan hata: -ki ekini yan yargı kurucu sanmak.
Cevap D.`
},
{
  id: "tur-ct-047",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `Gece yolculuğunu anlatan dört cümle: (I) Otobüs gece yarısı terminalden ayrıldı. (II) Yol boyunca camlar buğuluydu. (III) Yolcular koltuklarında uyuyakaldı. (IV) Şoför radyoyu kısık sesle açtı. **Numaralanmış cümlelerin hangisi yüklemin türü bakımından diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "'Ayrıldı' çekimli fiildir; cümle fiil cümlesidir, III ve IV ile aynı türdendir.",
    null,
    "'Uyuyakaldı' çekimli fiildir; cümle fiil cümlesidir, I ve IV ile aynı türdendir.",
    "'Açtı' çekimli fiildir; cümle fiil cümlesidir, I ve III ile aynı türdendir."
  ],
  aciklama: `Önce her cümlenin yüklemini bulup türünü yaz, sonra tek başına kalanı seç.
Adım 1: I. cümlenin yüklemi 'ayrıldı' (fiil).
Adım 2: III. cümlenin yüklemi 'uyuyakaldı' (fiil); IV. cümlenin yüklemi 'açtı' (fiil).
Adım 3: II. cümlenin yüklemi 'buğuluydu'dur; 'buğulu' sıfatına ek fiil (-ydu) gelmiştir. İsim cümlesi.
Sağlama: Üçü iş ya da oluş bildirir, ikincisi durum bildirir.
Sık yapılan hata: Geçmiş zaman ekini görüp bütün yüklemleri fiil saymak.
Cevap B.`
},
{
  id: "tur-ct-048",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, dedesiyle çıktığı balık avını anlatan yazıdan dört cümle seçti: (I) Dedemle sabaha karşı iskeleye gittik. (II) Çok sevindi dedem oltamdaki balığa bakınca. (III) Güneş doğunca deniz bakır rengindeydi. (IV) Yakaladığım balığı denize geri bıraktık. **Numaralanmış cümlelerin hangisi hem isim cümlesi hem birleşik cümledir ve yüklemi cümlenin sonundadır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "Fiil cümlesidir ve basittir: 'gittik' çekimli fiildir, yan yargı kuran bir yapı yoktur.",
    "Birleşik ama fiil cümlesi ve devriktir: 'sevindi' fiildir, ardından 'dedem...' sözleri gelir.",
    null,
    "Birleşik ve kurallıdır ama fiil cümlesidir: 'bıraktık' çekimli fiildir."
  ],
  aciklama: `Üç ölçüt var: isim cümlesi, birleşik, kurallı. Her cümleyi üç ölçüte ayrı ayrı vur.
Adım 1: I. cümle: yüklem 'gittik' (fiil), tek yargı (basit). Elenir.
Adım 2: II. cümle: yüklem 'sevindi' (fiil), ardından 'dedem oltamdaki balığa bakınca' gelir (devrik), 'bakınca' ile birleşik. Fiil olduğu için elenir.
Adım 3: IV. cümle: yüklem 'bıraktık' (fiil), 'yakaladığım' sıfat-fiil (birleşik), kurallı. Fiil olduğu için elenir.
Adım 4: III. cümle: yüklem 'rengindeydi' (isim + ek fiil), 'doğunca' ile birleşik, yüklem sonda. Üç ölçütü de sağlar.
Sağlama: III. cümlede 'doğunca' dışında yargı yoktur; cümlenin asıl yargısı durum bildirir.
Sık yapılan hata: Birleşik ve kurallı olan cümleyi bulup yüklemin türünü denetlememek.
Cevap C.`
},
{
  id: "tur-ct-049",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci günlüğüne yorucu bir günü anlatan dört cümle yazdı: (I) Öyle yoruldum ki dersi dinleyemedim. (II) Dünkü maçtan sonra ayağım şişti. (III) Bahçedeki çiçekler kurudu. (IV) Servis geldi ve herkes bindi. **Numaralanmış cümlelerin hangisi birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "'Dünkü' sözcüğündeki -ki eki sıfat yapar, yan yargı kurmaz; tek yüklem vardır, cümle basittir.",
    "'Bahçedeki' sözcüğündeki -ki eki sıfat yapar, yan yargı kurmaz; cümle basittir.",
    "İki bağımsız yargı 've' bağlacıyla bağlanmıştır; bu bağlı cümledir, birleşik değildir."
  ],
  aciklama: `Birleşik cümlede asıl yargıya bağlı bir yan yargı vardır; ayrı yazılan 'ki' bağlacı bunun bir yoludur.
Adım 1: II. cümlede 'dünkü' ve III. cümlede 'bahçedeki' bitişik yazılan -ki ekleridir; sıfat görevindedir, yargı kurmaz. İki cümle de basittir.
Adım 2: IV. cümlede 'geldi' ve 'bindi' iki bağımsız yargıdır; 've' bunları bağlar. Cümle bağlıdır.
Adım 3: I. cümlede ayrı yazılan 'ki' bağlacı vardır: 'Öyle yoruldum' asıl yargı, 'dersi dinleyemedim' ona bağlı yan yargıdır. Cümle birleşiktir.
Sağlama: 'Öyle yoruldum' cümlesi tek başına anlam taşır ama 'ki' sonrası sonucu verir; ikisi birbirine bağlıdır.
Sık yapılan hata: Bitişik -ki ekiyle ayrı yazılan 'ki' bağlacını karıştırmak.
Cevap A.`
},
{
  id: "tur-ct-050",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bisiklet tamirci dükkânında geçen bir sabahı anlatan beş cümle: (1) Bisiklet tamircisi lastiği şişirdi. (2) Söküldü zincir bir anda. (3) Tamirci yeni bir zincir buldu. (4) Çok memnun kaldı bisiklet sahibi. (5) Dükkân akşama kadar kalabalıktı. **Bu cümlelerden kaç tanesi devrik cümledir?**`,
  gorsel: null,
  secenekler: ["Bir", "İki", "Üç", "Dört"],
  dogru: 1,
  hatalar: [
    "Bir tanesini atlamışsın: hem 2. hem 4. cümlede yüklemden sonra söz gelir.",
    null,
    "Kurallı bir cümleyi de devrik saymışsın: 'kalabalıktı' 5. cümlenin sonundadır.",
    "Kurallı cümleleri de devrik saymışsın: 1, 3 ve 5. cümlelerde yüklem sondadır."
  ],
  aciklama: `Devrik cümlede yüklem sonda değildir. Beş cümleyi tek tek denetle.
Adım 1: 1. cümle: yüklem 'şişirdi' sonda; kurallı.
Adım 2: 2. cümle: yüklem 'söküldü', ardından 'zincir bir anda' gelir; devrik.
Adım 3: 3. cümle: yüklem 'buldu' sonda; kurallı.
Adım 4: 4. cümle: yüklem 'memnun kaldı', ardından 'bisiklet sahibi' gelir; devrik.
Adım 5: 5. cümle: yüklem 'kalabalıktı' sonda; kurallı.
Sağlama: Devrik cümleler 2 ve 4. cümlelerdir; toplam iki.
Sık yapılan hata: Yüklemi başta olmayan her cümleyi devrik saymak; yüklemin sonda olup olmadığına bak.
Cevap B.`
},
{
  id: "tur-ct-051",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, gösteri salonuna ait cümleleri aşağıdaki tabloda çözümlemiş, son satırı boş bırakmıştır. **Boş bırakılan III. satıra, diğer satırlardaki ölçütlere göre aşağıdakilerden hangisi yazılmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Cümle</th><th>Yüklemin türü</th><th>Yüklemin yeri</th><th>Yapısı</th></tr><tr><td>I. Bahçede çocuklar oynuyor.</td><td>Fiil</td><td>Kurallı</td><td>Basit</td></tr><tr><td>II. Çok güzeldi sahne.</td><td>İsim</td><td>Devrik</td><td>Basit</td></tr><tr><td>III. Çok sessizdi salon perde açılınca.</td><td>?</td><td>?</td><td>?</td></tr></table>`,
  secenekler: [
    "Fiil cümlesi, kurallı, birleşik",
    "İsim cümlesi, kurallı, basit",
    "İsim cümlesi, devrik, bağlı",
    "İsim cümlesi, devrik, birleşik"
  ],
  dogru: 3,
  hatalar: [
    "Yüklem 'sessizdi'dir; sıfat + ek fiil olduğundan cümle isim cümlesidir, yüklem de sonda değildir.",
    "Yüklem 'sessizdi' cümlenin sonunda değildir (ardından 'salon perde açılınca' gelir); 'açılınca' da yan yargı kurar.",
    "Yargıları bağlayan bir bağlaç yoktur; 'açılınca' bir zarf-fiildir, cümle bağlı değil birleşiktir.",
    null
  ],
  aciklama: `III. satırdaki cümleyi yüklemden başlayarak çözümle.
Adım 1: Yüklem 'sessizdi'dir (sıfat + ek fiil). İsim soylu olduğundan isim cümlesi.
Adım 2: 'Sessizdi'den sonra 'salon perde açılınca' gelir. Yüklem sonda değil; cümle devrik.
Adım 3: 'Açılınca', -ınca ekiyle kurulmuş zarf-fiildir ve 'perde açılınca' diye yan yargı kurar. Cümle birleşik.
Sağlama: II. satırdaki 'Çok güzeldi sahne.' ile III. satırdaki cümlenin yüklem türü ve yeri aynıdır; fark yapıdadır.
Sık yapılan hata: Sondaki fiilimsiyi çekimli yüklem sanıp cümleyi fiil cümlesi ve kurallı saymak.
Cevap D.`
},
{
  id: "tur-ct-052",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir gökbilim kulübü, gözlem gecesini şöyle anlattı: (I) Rehber teleskopu ayarladı dikkatle. (II) Gökyüzü bu gece bulutsuz. (III) Çocuklar yıldızları sırayla izledi. (IV) Bu gece yıldızlar parlaktı gökyüzünde. **Numaralanmış cümlelerin hangisi hem isim cümlesi hem de devrik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Devrik ama fiil cümlesidir: 'ayarladı' çekimli fiildir.",
    "İsim cümlesidir ama kurallıdır: yüklem 'bulutsuz' cümlenin sonundadır.",
    "Fiil cümlesidir ve kurallıdır: 'izledi' çekimli fiildir ve sondadır.",
    null
  ],
  aciklama: `İki ölçüt var: yüklem isim soylu olacak ve yüklem sonda olmayacak.
Adım 1: Yüklemleri bul: 'ayarladı', 'bulutsuz', 'izledi', 'parlaktı'.
Adım 2: Türe bak: 'ayarladı' ve 'izledi' fiil; 'bulutsuz' ve 'parlaktı' isim soyludur. I ve III elenir.
Adım 3: Yere bak: 'bulutsuz' sondadır (kurallı); 'parlaktı'dan sonra 'gökyüzünde' gelir (devrik).
Sağlama: IV. cümleyi 'Bu gece yıldızlar gökyüzünde parlaktı.' diye düzeltmek yüklemin yerinin bozuk olduğunu gösterir.
Sık yapılan hata: İsim cümlesini bulup yüklemin yerine bakmamak.
Cevap D.`
},
{
  id: "tur-ct-053",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci sınıf günlüğüne dört cümle yazdı: (I) Murat ve Selin ödevlerini birlikte bitirdi. (II) Sınıf hâlâ gürültülüydü çünkü öğretmen henüz gelmemişti. (III) Defterimi çantama koydum, kalemliğimi masada unuttum. (IV) Çantamı açınca kalemliğimin kayıp olduğunu gördüm. **Numaralanmış cümlelerin hangisi bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "'Ve' yalnız iki özneyi bağlar; tek yüklem ('bitirdi') vardır, cümle basittir.",
    null,
    "İki bağımsız yargı bağlaçsız, virgülle dizilmiş; bu sıralı cümledir.",
    "'Açınca' ve 'olduğunu' fiilimsidir; cümle birleşiktir."
  ],
  aciklama: `Bağlı cümle, bağımsız yargıların bağlaçla bağlandığı cümledir.
Adım 1: I. cümlede 've' Murat ile Selin'i bağlar; yüklem tektir. Basit.
Adım 2: II. cümlede 'gürültülüydü' ve 'gelmemişti' iki bağımsız yargıdır; 'çünkü' bağlacı bunları bağlar. Bağlı.
Adım 3: III. cümlede iki yargı virgülle ayrılmıştır; bağlaç yoktur. Sıralı.
Adım 4: IV. cümlede 'açınca' ve 'olduğunu' fiilimsilerdir. Birleşik.
Sağlama: 'Çünkü' gibi bağlaçlar yargıyı sebep ya da karşıtlık yoluyla bağlar; II. cümleyi bağlı yapan budur.
Sık yapılan hata: Yargısı iki olan her cümleyi bağlı saymak.
Cevap B.`
},
{
  id: "tur-ct-054",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Okullar arası bir müsabaka gününün sabahını anlatan dört cümle: (I) Zil çalmadan sınıf boşaldı. (II) Unutmamıştı kimse bu önemli günü. (III) Bahçe renkli bayraklarla doluydu. (IV) Konuk takımın otobüsü geç kaldı. **II. cümle için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Fiil cümlesi, devrik, olumsuz",
    "Fiil cümlesi, kurallı, olumsuz",
    "İsim cümlesi, devrik, olumlu",
    "Fiil cümlesi, devrik, olumlu"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yüklem 'unutmamıştı' sonda değildir; ardından 'kimse bu önemli günü' gelir, cümle devriktir.",
    "Yüklem 'unutmamıştı' çekimli fiildir; ek fiilli isim soylu bir yüklem değildir.",
    "Yüklemdeki -ma eki yargıyı olumsuz yapar; cümleyi olumlu sanmışsın."
  ],
  aciklama: `II. cümleyi sırayla üç ölçüte göre çözümle.
Adım 1: Yüklem 'unutmamıştı'dır. Kökü 'unut-'tur ve çekimli fiildir: fiil cümlesi.
Adım 2: 'Unutmamıştı'dan sonra 'kimse bu önemli günü' gelir. Yüklem sonda değil; devrik.
Adım 3: 'Unutmamıştı' yüklemindeki -ma eki yargının gerçekleşmediğini bildirir. Cümle olumsuz.
Sağlama: Cümleyi 'Kimse bu önemli günü unutmamıştı.' diye düzelt; yüklem sona gelir ve anlam değişmez.
Sık yapılan hata: Yüklemin sonundaki -tı ekini ek fiil sanıp isim cümlesi demek.
Cevap A.`
},
{
  id: "tur-ct-055",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Robot yarışmasını anlatan bir yazıdan üç cümle: (1) Robotun kolu sıkışınca yarışma bir an durdu. (2) Seyirciler hiç sesini çıkarmadı. (3) Bu yarışmanın en heyecanlı anıydı o.

I. 1. cümle yapıca birleşiktir.
II. 2. cümle olumsuzdur.
III. 3. cümle kurallıdır.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II doğru ama I de doğrudur: 'sıkışınca' zarf-fiildir, 1. cümle birleşiktir.",
    "III yanlıştır: 3. cümlede 'anıydı'dan sonra 'o' gelir, cümle devriktir.",
    null,
    "III yanlıştır: 3. cümle devriktir; ayrıca I doğrudur ('sıkışınca' yan yargı kurar)."
  ],
  aciklama: `Her yargıyı ayrı denetle.
Adım 1: I. yargı: 'sıkışınca' bir zarf-fiildir (-ınca) ve 'Robotun kolu sıkışınca' diye yan yargı kurar. 1. cümle birleşiktir. I doğru.
Adım 2: II. yargı: 'çıkarmadı' yüklemi -ma eki taşır; cümle olumsuzdur. II doğru.
Adım 3: III. yargı: 3. cümlenin yüklemi 'anıydı'dır ve ardından 'o' gelir. Yüklem sonda değil; cümle devriktir. III yanlış.
Sağlama: I ve II doğru, III yanlış; yanıt 'I ve II'.
Sık yapılan hata: Sondaki küçük sözcüğü (o) görmeyip yüklemi sonda saymak.
Cevap C.`
},
{
  id: "tur-ct-056",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Yağmurlu bir günü anlatan bir yazıdan dört cümle: (I) Bahçedeki gül fidanları dünkü yağmurla canlandı. (II) Öyle çok yağdı ki sokaklar göle döndü. (III) Yağmur durunca çocuklar sokağa çıktı. (IV) Su birikintisine atlayan çocuklar yağmurluklarını ıslattı. **Numaralanmış cümlelerin hangisi birleşik cümle __değildir__?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Birleşik cümledir: ayrı yazılan 'ki' bağlacı yan yargı kurar.",
    "Birleşik cümledir: 'durunca' zarf-fiili yan yargı kurar.",
    "Birleşik cümledir: 'atlayan' sıfat-fiili yan yargı kurar."
  ],
  aciklama: `Soru birleşik olmayan cümleyi, yani basit cümleyi arıyor.
Adım 1: II. cümlede ayrı yazılan 'ki' bağlacı vardır: 'Öyle çok yağdı' ve 'sokaklar göle döndü' iki yargıdır, birleşik.
Adım 2: III. cümlede 'durunca' (zarf-fiil), IV. cümlede 'atlayan' (sıfat-fiil) yan yargı kurar; ikisi de birleşik.
Adım 3: I. cümlede 'bahçedeki' ve 'dünkü' bitişik yazılan -ki eklidir, yargı kurmaz. Tek yüklem ('canlandı') vardır. Cümle basittir.
Sağlama: I. cümlede fiilimsi, şart eki ya da ayrı yazılan 'ki' bağlacı yok.
Sık yapılan hata: -ki ekini yan yargı sanmak.
Cevap A.`
},
{
  id: "tur-ct-057",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Pınar'ın sabahını anlatan dört cümle: (I) Pınar kapıda sabırsızca bekledi. (II) Çantasında eksik bir şey bırakmayan Pınar sevinçle yola çıktı. (III) Hiç acele etmeden yürüdü. (IV) Servisi kaçırdığı için okula yetişemedi. **Numaralanmış cümlelerin hangisi anlamca olumsuzdur?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Olumludur: 'sabırsızca' -sız eki taşır ama yüklem 'bekledi' olumsuzluk eki almamıştır.",
    "Olumludur: 'bırakmayan' fiilimsi olumsuz ek taşır ama yüklem 'çıktı' olumludur.",
    "Olumludur: 'etmeden' fiilimsi olumsuz ek taşır ama yüklem 'yürüdü' olumludur.",
    null
  ],
  aciklama: `Olumsuzluk yüklemde aranır: yargının gerçekleşip gerçekleşmediğine bak.
Adım 1: I. cümlede 'sabırsızca' sözcüğündeki -sız eki sözcüğün anlamını değiştirir ama yüklem 'bekledi' olumludur.
Adım 2: II. ve III. cümlelerde 'bırakmayan' ve 'etmeden' fiilimsileri olumsuzluk eki taşır; fakat yüklemler 'çıktı' ve 'yürüdü' olumludur. İki cümle de olumludur.
Adım 3: IV. cümlenin yüklemi 'yetişemedi'dir ve -me eki taşır. Yargı gerçekleşmemiştir; cümle olumsuzdur.
Sağlama: Olumsuz cümle 'okula yetişemedi' diyerek bir işin olmadığını bildirir.
Sık yapılan hata: Fiilimsideki olumsuz eki cümlenin olumsuzluğu sanmak.
Cevap D.`
},
{
  id: "tur-ct-058",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Okul kantininden dört cümle: (I) Dilek simit aldı ve Berk'e ikram etti. (II) Simit yiyen çocuklar bahçeye çıktı. (III) Dilek ve Berk kantindeki simitçiyle konuştu. (IV) Kantin kapanırsa simit bitebilir. **Numaralanmış cümlelerin hangisi yapısına göre basit cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "İki bağımsız yargı 've' ile bağlanmış; bu bağlı cümledir.",
    "'Yiyen' sıfat-fiildir; yan yargı kurar, cümle birleşiktir.",
    null,
    "'Kapanırsa' şart ekiyle yan yargı kurar; cümle birleşiktir."
  ],
  aciklama: `Basit cümlede tek yargı vardır.
Adım 1: I. cümlede 'aldı' ve 'ikram etti' iki yargıdır ve 've' bunları bağlar: bağlı.
Adım 2: II. cümlede 'yiyen' sıfat-fiilidir: birleşik. IV. cümlede 'kapanırsa' şart ekidir: birleşik.
Adım 3: III. cümlede 've' yalnız Dilek ile Berk'i bağlar; 'kantindeki' -ki ekidir. Tek yüklem ('konuştu') vardır. Basittir.
Sağlama: III. cümlede yargı sayısı bir; yan yargı kuran bir yapı yok.
Sık yapılan hata: 've' ve '-ki' yüzünden cümleyi bağlı ya da birleşik saymak.
Cevap C.`
},
{
  id: "tur-ct-059",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci defterine bir cümlenin özelliklerini tabloyla özetlemiştir. **Aşağıdaki cümlelerden hangisi tabloda verilen özelliklerin hepsini taşır?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüt</th><th>Cümlenin özelliği</th></tr><tr><td>Yüklemin türü</td><td>İsim cümlesi</td></tr><tr><td>Yüklemin yeri</td><td>Devrik</td></tr><tr><td>Anlam</td><td>Olumsuz</td></tr><tr><td>Yapı</td><td>Basit</td></tr></table>`,
  secenekler: [
    "Dışarısı soğuktu bu sabah.",
    "Hiç kolay değildir bu yolculuk.",
    "Bu yolculuk hiç kolay değildir.",
    "Yolculuğa katılmadı kimse."
  ],
  dogru: 1,
  hatalar: [
    "Yüklem 'soğuktu' isim soyludur ve cümle devriktir ama olumludur; olumsuzluk eki ya da 'değil' yok.",
    null,
    "İsim cümlesi, olumsuz ve basit ama yüklem 'değildir' sondadır; cümle kurallıdır.",
    "Devrik ve olumsuz ama yüklem 'katılmadı' çekimli fiildir; cümle fiil cümlesidir."
  ],
  aciklama: `Dört özelliği sırayla sına: isim cümlesi, devrik, olumsuz, basit.
Adım 1: A seçeneğinde yüklem 'soğuktu' (isim), devrik, basit ama olumlu. Olumsuzluk özelliğini sağlamaz.
Adım 2: C seçeneğinde yüklem 'değildir' (isim), olumsuz, basit ama yüklem sondadır; kurallı.
Adım 3: D seçeneğinde 'katılmadı' çekimli fiildir; fiil cümlesidir.
Adım 4: B seçeneğinde yüklem 'değildir'dir (isim cümlesi, olumsuz), ardından 'bu yolculuk' gelir (devrik), tek yargı vardır (basit). Dört özelliği de sağlar.
Sağlama: B seçeneğini kurallı sıraya sokarsan C seçeneğine dönersin; yani yalnız yerleri farklıdır.
Sık yapılan hata: Dört özellikten birkaçını denetleyip bırakmak.
Cevap B.`
},
{
  id: "tur-ct-060",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bulmaca yarışmasından dört cümle: (I) Kimse bulmacayı çözemedi. (II) Sonunda bütün kutular doldu. (III) Hiçbir ipucu işe yaramadı. (IV) Kimse sorulardan şikâyet etmedi. **Numaralanmış cümlelerden hangisi, anlam bakımından (olumlu-olumsuz) diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 1,
  hatalar: [
    "Olumsuzdur: 'çözemedi' yüklemi -me eki taşır; III ve IV ile aynı türdendir.",
    null,
    "Olumsuzdur: 'yaramadı' yüklemi -ma eki taşır; I ve IV ile aynı türdendir.",
    "Olumsuzdur: 'etmedi' yüklemi -me eki taşır; I ve III ile aynı türdendir."
  ],
  aciklama: `Önce her cümlenin olumlu mu olumsuz mu olduğunu yüklemden bul.
Adım 1: I. cümle: 'çözemedi' (-me eki) olumsuz.
Adım 2: III. cümle: 'yaramadı' (-ma eki) olumsuz. IV. cümle: 'etmedi' (-me eki) olumsuz.
Adım 3: II. cümle: 'doldu' olumsuzluk eki taşımaz; yargı gerçekleşmiştir. Olumlu.
Sağlama: Üç cümle bir işin yapılmadığını, II. cümle yapıldığını bildirir.
Sık yapılan hata: 'Kimse' ve 'hiçbir' sözcüklerini olumsuzluk sanmak ya da II. cümleyi aynı gruba katmak.
Cevap B.`
},
{
  id: "tur-ct-061",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Konser hazırlığını anlatan dört cümle: (I) Konser günü yaklaşıyor. (II) Biletleri sabah erkenden aldık. (III) Bu yılki konser biletleri çok pahalı. (IV) Salon yeterince büyüktür. **Numaralanmış cümlelerin hangisinde yüklem isim soylu olduğu hâlde ek fiil kullanılmamıştır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "Yüklem 'yaklaşıyor' çekimli fiildir; isim soylu yüklem yoktur.",
    "Yüklem 'aldık' çekimli fiildir; isim soylu yüklem yoktur.",
    null,
    "Yüklem isim soyludur ama 'büyüktür' sözcüğünde -tür ek fiili açıkça kullanılmıştır."
  ],
  aciklama: `İsim soylu yüklem ek fiil alabilir ya da ek fiil söylenmeyebilir. Soru ek fiil söylenmeyen isim cümlesini arıyor.
Adım 1: I ve II. cümlelerde 'yaklaşıyor' ve 'aldık' çekimli fiildir; isim cümlesi değildir.
Adım 2: IV. cümlede 'büyüktür' sözcüğü 'büyük' sıfatına -tür (ek fiil) getirilerek kurulmuştur. Ek fiil açıkça vardır.
Adım 3: III. cümlede yüklem 'pahalı'dır; sıfattır ve ek fiil almamıştır. Cümleyi 'pahalıdır' diye tamamlayabilirsin; ek fiil söylenmemiştir.
Sağlama: III. cümleyi 'pahalıdır' biçiminde okuyunca yüklem aynı sözcük kalır.
Sık yapılan hata: Ek fiil görünmeyen cümleyi yüklemsiz saymak.
Cevap C.`
},
{
  id: "tur-ct-062",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, köy gezisini anlatan yazısında bazı cümlelerin yüklemini başa almıştır: (I) Geldi mi arkadaşın bu akşam? (II) Çok sevindim mektubunu alınca. (III) Sevindirdi beni bu haber. (IV) Yıllar önce terk edilmiş o eski değirmenin önünde fotoğraf çektirdik. **Numaralanmış cümlelerin hangisi kurallı cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Devriktir: yüklem 'geldi mi' sonda değildir, ardından 'arkadaşın bu akşam' gelir.",
    "Devriktir: yüklem 'sevindim' sonda değildir; ardından 'mektubunu alınca' gelir.",
    "Devriktir: yüklem 'sevindirdi' sonda değildir; ardından 'beni bu haber' gelir.",
    null
  ],
  aciklama: `Kurallı cümlede yüklem sondadır. Uzun bir öbekle başlayan cümle de kurallı olabilir.
Adım 1: I. cümlede 'geldi mi'den sonra 'arkadaşın bu akşam' gelir; devrik.
Adım 2: II. cümlede 'sevindim'den sonra 'mektubunu alınca' gelir; devrik. 'Alınca' fiilimsi olduğu için yüklem sayılmaz.
Adım 3: III. cümlede 'sevindirdi'den sonra 'beni bu haber' gelir; devrik.
Adım 4: IV. cümle uzun bir tamlamayla başlar ama yüklem 'çektirdik' en sondadır. Kurallı.
Sağlama: IV. cümlede yüklemden sonra söz yoktur.
Sık yapılan hata: Cümlenin uzun başlangıcına bakıp yüklemin yerini yanlış tahmin etmek.
Cevap D.`
},
{
  id: "tur-ct-063",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Sessiz bir akşamı anlatan beş cümle: (1) Kapıyı açtım, ışığı yaktım. (2) Sofra kuruldu ve herkes yerine oturdu. (3) Dışarıda rüzgâr uğulduyordu. (4) Yağmur yağınca yollar kaydı. (5) Çay demlendi ama kimse içmedi. **Bu cümlelerden kaç tanesi sıralı cümledir?**`,
  gorsel: null,
  secenekler: ["Bir", "İki", "Üç", "Dört"],
  dogru: 0,
  hatalar: [
    null,
    "Bağlı cümleleri de sıralı saymışsın: 2 ve 5. cümlelerde 've' ve 'ama' bağlaçları vardır.",
    "Bağlı cümleleri ve birleşik bir cümleyi de saymışsın: yalnız 1. cümle bağlaçsız, virgülle dizilmiştir.",
    "Sıralı ile bağlı ve birleşiği karıştırmışsın: yalnız 1. cümle sıralıdır."
  ],
  aciklama: `Sıralı cümlede bağımsız yargılar bağlaç olmadan, virgülle dizilir.
Adım 1: 1. cümlede 'açtım' ve 'yaktım' iki yargıdır; virgülle ayrılmıştır, bağlaç yoktur: sıralı.
Adım 2: 2. cümlede 've', 5. cümlede 'ama' yargıları bağlar: ikisi de bağlı.
Adım 3: 3. cümlede tek yargı vardır: basit. 4. cümlede 'yağınca' zarf-fiildir: birleşik.
Sağlama: Sıralı cümle yalnız 1. cümledir; toplam bir.
Sık yapılan hata: İki yargılı her cümleyi sıralı saymak.
Cevap A.`
},
/* ===================== HAVUZ — DÜZEY 4 ===================== */
{
  id: "tur-ct-064",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, okul gezisini anlatan yazısını cümle türleri bakımından incelemektedir. Yazıdan alınan altı cümle numaralanmıştır. (1) Yolculuğumuz sabah altıda başlayınca herkes heyecanlandı. (2) Otobüsün camından geçen manzara bir film şeridi gibiydi. (3) Rehberimiz yolda gördüğümüz bitkileri tek tek tanıttı. (4) Öğle yemeğinde herkes çok yorgundu. (5) Dönüş yolunda şarkı söyleyerek vakit geçirdik. (6) Eve varınca annem kapıda bizi bekliyordu. **Bu cümlelerden kaç tanesi hem fiil cümlesi hem de birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["Bir", "İki", "Üç", "Dört"],
  dogru: 3,
  hatalar: [
    "Çok az saymışsın: yalnız 'başlayınca' değil, 'gördüğümüz', 'söyleyerek' ve 'varınca' da fiilimsidir.",
    "İki sayma: 1, 3, 5 ve 6. cümlelerin hepsi fiil cümlesidir ve fiilimsi içerir.",
    "Üç sayma: 6. cümlede 'varınca' zarf-fiili yan yargı kurar; 6. cümle de fiil cümlesi ve birleşiktir.",
    null
  ],
  aciklama: `Her cümlede iki şeyi denetle: yüklem çekimli fiil mi, fiilimsi var mı?
Adım 1: 1. cümle: yüklem 'heyecanlandı' (fiil), 'başlayınca' zarf-fiil. Sağlar.
Adım 2: 2. cümle: yüklem 'gibiydi' (isim), 'geçen' sıfat-fiil. Birleşik ama isim cümlesi; sağlamaz.
Adım 3: 3. cümle: yüklem 'tanıttı' (fiil), 'gördüğümüz' sıfat-fiil. Sağlar.
Adım 4: 4. cümle: yüklem 'yorgundu' (isim), fiilimsi yok. Sağlamaz.
Adım 5: 5. cümle: yüklem 'geçirdik' (fiil), 'söyleyerek' zarf-fiil. Sağlar.
Adım 6: 6. cümle: yüklem 'bekliyordu' (fiil), 'varınca' zarf-fiil. Sağlar.
Sağlama: Sağlayanlar 1, 3, 5 ve 6; toplam dört.
Sık yapılan hata: Birleşik cümleleri sayıp yüklemin türünü denetlememek.
Cevap D.`
}
,
{
  id: "tur-ct-065",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Okulda yapılan yangın tatbikatı sırasında bir öğrencinin tuttuğu notlardan dört cümle aşağıda numaralandırılmıştır. Cümlelerden bazıları aynı olayı farklı dizilişle ve farklı yapıyla anlatmaktadır. (I) Çıkmadı kimse odadan alarm çalınca. (II) Alarm çalınca herkes sakince bahçeye indi. (III) Çıkmadı kimse odadan. (IV) Odadan çıkan öğrenciler bahçede toplandı. **Numaralanmış cümlelerin hangisi hem olumsuz hem devrik hem de birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "Birleşik ama olumlu ve kurallıdır: 'indi' yüklemi olumsuzluk eki taşımaz ve cümlenin sonundadır.",
    "Olumsuz ve devriktir ama basittir: 'alarm çalınca' gibi yan yargı kuran bir yapı yoktur.",
    "Birleşiktir ('çıkan' sıfat-fiil) ama olumlu ve kurallıdır: 'toplandı' sondadır."
  ],
  aciklama: `Üç ölçüt var: olumsuz, devrik, birleşik. Her cümleyi üç ölçüte ayrı ayrı vur.
Adım 1: Olumsuzluk: I ve III. cümlelerde 'çıkmadı' (-ma eki) olumsuz. II ve IV. cümlelerde yüklem olumlu. II ve IV elenir.
Adım 2: Yüklemin yeri: I ve III. cümlelerde 'çıkmadı'dan sonra 'kimse odadan' gelir; ikisi de devrik.
Adım 3: Yapı: III. cümlede tek yargı vardır, basit. I. cümlede 'çalınca' zarf-fiili 'alarm çalınca' diye yan yargı kurar, birleşik.
Sağlama: I. cümle ile III. cümle arasındaki tek fark 'alarm çalınca' sözüdür; bu söz yapıyı değiştirir.
Sık yapılan hata: İlk iki ölçütü sağlayan III. cümlede durup yapıyı denetlememek.
Cevap A.`
},
{
  id: "tur-ct-066",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, eski bir kuleye çıkışını anlatan bir yazı yazmış ve cümlelerini numaralandırmıştır. (I) Kuleye sabah onda vardık. (II) Dar merdivenler kıvrılarak yukarı uzanıyordu. (III) Pek kolay değildi bu merdiveni çıkmak. (IV) Tepeye ulaşınca bütün şehri gördük. **III. cümle için aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "İsim cümlesidir.",
    "Yüklemi cümlenin sonunda değildir.",
    "Anlamca olumludur.",
    "Yapıca birleşik cümledir."
  ],
  dogru: 2,
  hatalar: [
    "Bu söylenebilir: yüklem 'değildi' isim soylu bir yüklemdir; cümle isim cümlesidir.",
    "Bu söylenebilir: 'değildi'den sonra 'bu merdiveni çıkmak' gelir, cümle devriktir.",
    null,
    "Bu söylenebilir: 'çıkmak' bir isim-fiildir ve yan yargı kurar, cümle birleşiktir."
  ],
  aciklama: `Soru III. cümle için doğru olmayan bilgiyi arıyor. Cümleyi dört ölçüte göre çözümle.
Adım 1: Yüklem 'değildi'dir. 'Değil' isim soylu bir yüklem kurar: isim cümlesi.
Adım 2: 'Değildi'den sonra 'bu merdiveni çıkmak' gelir. Yüklem sonda değil; devrik.
Adım 3: 'Değildi' yüklemi yargının gerçekleşmediğini bildirir: cümle olumsuz. 'Anlamca olumludur' söylenemez.
Adım 4: 'Çıkmak' isim-fiil olarak yan yargı kurar: birleşik.
Sağlama: Üç seçenek cümleyi doğru niteler; 'Anlamca olumludur' yanlış niteler.
Sık yapılan hata: 'Çıkmak' sözcüğündeki -mak ekini olumsuzluk sanmak ya da 'değil'i görmemek.
Cevap C.`
},
{
  id: "tur-ct-067",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir müzik topluluğunun konser provasını anlatan yazıdan dört cümle aşağıda numaralandırılmıştır. (I) Işıklar sönünce salon bir anda sessizliğe gömüldü. (II) Sahne ışığı yandı, ilk solist öne çıktı. (III) Solistin sesi çok etkileyiciydi. (IV) Dinleyiciler hiç kıpırdamadan şarkıyı dinledi. **Aşağıdakilerden hangisi bu cümlelerle ilgili olarak yanlıştır?**`,
  gorsel: null,
  secenekler: [
    "I. cümle yapıca birleşiktir.",
    "II. cümle bağlı cümledir.",
    "III. cümle isim cümlesidir.",
    "IV. cümle olumludur."
  ],
  dogru: 1,
  hatalar: [
    "Bu bilgi doğrudur: 'sönünce' zarf-fiilidir, yan yargı kurar.",
    null,
    "Bu bilgi doğrudur: yüklem 'etkileyiciydi' isim soyludur.",
    "Bu bilgi doğrudur: yüklem 'dinledi' olumsuzluk eki taşımaz; 'kıpırdamadan' fiilimsisindeki -ma eki cümleyi olumsuz yapmaz."
  ],
  aciklama: `Soru yanlış olan bilgiyi arıyor; dört seçeneği tek tek denetle.
Adım 1: I. cümlede 'sönünce' zarf-fiildir ve yan yargı kurar; cümle birleşiktir. Bu bilgi doğru.
Adım 2: II. cümlede 'yandı' ve 'çıktı' iki bağımsız yargıdır ve aralarında yalnız virgül vardır; bağlaç yoktur. Cümle sıralıdır, bağlı değildir. Bu bilgi yanlış.
Adım 3: III. cümlenin yüklemi 'etkileyiciydi'dir (sıfat + ek fiil): isim cümlesi. Doğru.
Adım 4: IV. cümlenin yüklemi 'dinledi'dir ve olumsuzluk eki taşımaz: olumlu. Doğru.
Sağlama: II. cümlede 've, ama, fakat' gibi bir bağlaç aradığında bulamazsın.
Sık yapılan hata: İki yargıyı gördüğünde bağlaç aramadan cümleyi bağlı sanmak.
Cevap B.`
},
{
  id: "tur-ct-068",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir yaz akşamını anlatan yazıdan dört cümle numaralandırılmıştır. (I) Hava kararınca çocuklar eve döndü. (II) Güneş batarken sahil çok kalabalık. (III) Misafirleri karşılayan ev sahibi sofradan kalktı. (IV) Çocuklar akşamüstü parkta oynadı. **Numaralanmış cümlelerden hangi ikisi, hem yüklemin türü hem de yapısı bakımından aynı gruba girer?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
  dogru: 1,
  hatalar: [
    "Yapıca aynıdır (ikisi de birleşik) ama türce farklıdır: I. cümle fiil, II. cümle isim cümlesidir.",
    null,
    "Hem türce hem yapıca farklıdır: II. cümle isim cümlesi ve birleşik, IV. cümle fiil cümlesi ve basittir.",
    "Türce aynıdır (ikisi de fiil cümlesi) ama yapıca farklıdır: III. cümle birleşik, IV. cümle basittir."
  ],
  aciklama: `Her cümlenin yüklem türünü ve yapısını yaz, sonra aynı ikiliyi taşıyan çifti bul.
Adım 1: I. cümle: yüklem 'döndü' (fiil), 'kararınca' zarf-fiil (birleşik). → fiil, birleşik.
Adım 2: II. cümle: yüklem 'kalabalık' (isim), 'batarken' zarf-fiil (birleşik). → isim, birleşik.
Adım 3: III. cümle: yüklem 'kalktı' (fiil), 'karşılayan' sıfat-fiil (birleşik). → fiil, birleşik.
Adım 4: IV. cümle: yüklem 'oynadı' (fiil), fiilimsi yok (basit). → fiil, basit.
Sağlama: Aynı ikiliyi taşıyan çift yalnız I ve III.
Sık yapılan hata: Yalnız yapıya bakıp I ve II'yi seçmek.
Cevap B.`
},
{
  id: "tur-ct-069",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrencinin dedesinden dinlediği hikâyeyi anlatan yazıdan üç cümle: (1) Kimse inanmadı bu olağanüstü hikâyeye. (2) Dedem anlatırken gözleri parlıyordu. (3) Gerçekten de çok ilginçti anlattıkları.

I. 1. cümle hem devrik hem olumsuzdur.
II. 2. cümle birleşiktir ve yüklemi fiildir.
III. 3. cümlenin yüklemi isim soyludur ve cümle devriktir.

**Yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "I doğru ama II ve III de doğrudur; yalnız I diyerek diğerlerini atlamışsın.",
    "II doğru ama I ve III de doğrudur: 'inanmadı' olumsuz ve devrik, 'ilginçti' isim soylu ve devriktir.",
    "II ve III doğru ama I de doğrudur: 'inanmadı' -ma eki taşır ve ardından 'bu olağanüstü hikâyeye' gelir.",
    null
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I. yargı: 1. cümlenin yüklemi 'inanmadı'dır. -ma eki taşır: olumsuz. Ardından 'bu olağanüstü hikâyeye' gelir: devrik. I doğru.
Adım 2: II. yargı: 'anlatırken' zarf-fiildir (-ken); yan yargı kurar, cümle birleşiktir. Yüklem 'parlıyordu' çekimli fiildir. II doğru.
Adım 3: III. yargı: yüklem 'ilginçti' (sıfat + ek fiil), isim soyludur; ardından 'anlattıkları' gelir: devrik. III doğru.
Sağlama: Üç yargının üçü de doğru olduğundan yanıt 'I, II ve III' olur.
Sık yapılan hata: Bir yargıyı doğru bulunca diğerlerini denetlemeden bırakmak.
Cevap D.`
},
{
  id: "tur-ct-070",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, okul hayatından aldığı dört cümleyi yapı bakımından sınıflandıracaktır. (I) Öğrenci tahtaya yazılanı defterine geçirdi. (II) Sınavı kazanırsan sana bisiklet alacağız. (III) Bahçedeki eski çınarın dalları dünkü fırtınada kırıldı. (IV) Öyle yağmur yağdı ki yollar kapandı. **Numaralanmış cümlelerden hangisi yapı bakımından diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 2,
  hatalar: [
    "Birleşik cümledir: 'yazılanı' sıfat-fiil olarak yan yargı kurar; II ve IV ile aynı gruptadır.",
    "Birleşik cümledir: 'kazanırsan' şart ekiyle yan yargı kurar; I ve IV ile aynı gruptadır.",
    null,
    "Birleşik cümledir: ayrı yazılan 'ki' yan yargı kurar; I ve II ile aynı gruptadır."
  ],
  aciklama: `Önce her cümlenin yan yargı kuran bir yapısı olup olmadığına bak.
Adım 1: I. cümlede 'yazılanı' bir sıfat-fiildir (-an) ve yan yargı kurar: birleşik.
Adım 2: II. cümlede 'kazanırsan' şart ekiyle (-sa) yan yargı kurar: birleşik.
Adım 3: IV. cümlede ayrı yazılan 'ki' bağlacı vardır; 'Öyle yağmur yağdı' ile 'yollar kapandı' birbirine bağlıdır: birleşik.
Adım 4: III. cümlede 'bahçedeki' ve 'dünkü' bitişik yazılan -ki eklidir; yargı kurmaz. Tek yüklem ('kırıldı') vardır: basit.
Sağlama: Üç cümle birleşik, bir cümle basit; farklı olan III. cümledir.
Sık yapılan hata: -ki eklerini yargı kurucu sanıp III. cümleyi de birleşik saymak.
Cevap C.`
},
{
  id: "tur-ct-071",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, harita okuma çalışmasında geçen cümlelerde 've' bağlacının neyi bağladığını incelemektedir. Aşağıdaki dört cümle numaralandırılmıştır. (I) Selin ve Ayhan haritayı birlikte inceledi. (II) Rehber haritayı açtı ve yolu gösterdi. (III) Yağmur dindi ve yolcular yola koyuldu. (IV) Pusulaya baktık ve doğru yönü bulduk. **Numaralanmış cümlelerin hangisinde 've' bağlacı kaldırılıp yerine virgül konulursa cümle sıralıya dönüşmez?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 0,
  hatalar: [
    null,
    "'Rehber haritayı açtı, yolu gösterdi.' biçiminde iki bağımsız yargı virgülle dizilir; sıralıya dönüşür.",
    "'Yağmur dindi, yolcular yola koyuldu.' biçiminde iki bağımsız yargı virgülle dizilir; sıralıya dönüşür.",
    "'Pusulaya baktık, doğru yönü bulduk.' biçiminde iki bağımsız yargı virgülle dizilir; sıralıya dönüşür."
  ],
  aciklama: `'Ve' yargıları bağlıyorsa bağlı cümle oluşur; bağlacı çıkarıp virgül koyunca bağımsız yargılar sıralı cümleye dönüşür. 'Ve' yalnız sözcükleri ya da özneleri bağlıyorsa bu dönüşüm olmaz.
Adım 1: II, III ve IV. cümlelerde 've' iki yargıyı bağlar (açtı / gösterdi, dindi / koyuldu, baktık / bulduk). Virgülle ayrılınca üçü de sıralı cümle olur.
Adım 2: I. cümlede 've' Selin ile Ayhan'ı bağlar; yüklem tektir ('inceledi').
Adım 3: 'Selin, Ayhan haritayı birlikte inceledi.' biçimi bozuk olur; cümle basit kalır, sıralıya dönüşmez.
Sağlama: I. cümlede yargı sayısı bir; sıralı cümle için en az iki bağımsız yargı gerekir.
Sık yapılan hata: Her 've' bağlacını yargı bağlayıcısı sanmak.
Cevap A.`
},
{
  id: "tur-ct-072",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, sınıf içinde duyduğu altı cümleyi numaralandırarak yüklemin yerine göre inceleyecektir. (1) Sınıfın camını kim açtı? (2) Bitirmişti herkes ödevini çoktan. (3) Öğretmen derse başlamadan önce yoklamayı aldı. (4) Çok yorgunduk o akşam. (5) Dışarıda yağmur yağarken bütün çocuklar pencerenin önünde toplandı. (6) Bu soruyu çözebilecek misin? **Bu cümlelerden hangi ikisi devrik cümledir?**`,
  gorsel: null,
  secenekler: ["2 ve 4", "1 ve 6", "3 ve 5", "4 ve 6"],
  dogru: 0,
  hatalar: [
    null,
    "Soru cümlelerini devrik saymışsın: 1. cümlede 'açtı', 6. cümlede 'çözebilecek misin' yüklemi sondadır; soru olması yüklemin yerini değiştirmez.",
    "Fiilimsili cümleleri devrik saymışsın: 3 ve 5. cümlelerde 'başlamadan' ve 'yağarken' yüklem değildir; yüklemler ('aldı', 'toplandı') sondadır.",
    "Soru ekini yüklemden ayrı sanmışsın: 6. cümlede 'misin' yüklemin parçasıdır ve cümlenin sonundadır; 4. cümle devrik olsa da 6. cümle kurallıdır."
  ],
  aciklama: `Devrik cümlede yüklemden sonra söz gelir. Altı cümleyi tek tek denetle.
Adım 1: 1. cümle: yüklem 'açtı' sonda; soru cümlesi olması yüklemin yerini değiştirmez. Kurallı.
Adım 2: 2. cümle: yüklem 'bitirmişti', ardından 'herkes ödevini çoktan' gelir. Devrik.
Adım 3: 3. cümle: 'başlamadan' fiilimsidir; yüklem 'aldı' sonda. Kurallı.
Adım 4: 4. cümle: yüklem 'yorgunduk', ardından 'o akşam' gelir. Devrik.
Adım 5: 5. cümle: 'yağarken' fiilimsidir; yüklem 'toplandı' sonda. Kurallı.
Adım 6: 6. cümle: yüklem 'çözebilecek misin' sonda. Kurallı.
Sağlama: Devrik olanlar yalnız 2 ve 4. cümlelerdir; yanıt '2 ve 4'.
Sık yapılan hata: Fiilimsi ya da soru ekini görüp cümleyi devrik saymak.
Cevap A.`
},
{
  id: "tur-ct-073",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, sınav sonuçlarının açıklandığı günü anlatırken altı cümle yazdı. (1) Dünkü sınavın sonuçları bugün açıklandı. (2) Soruları dikkatle okuyan öğrenciler yüksek not aldı. (3) Öğretmen sınav kâğıtlarını sınıfa dağıttı. (4) Öyle sevindim ki gözlerim doldu. (5) Çalışırsan sen de başarırsın. (6) Sınıf sevinçle alkışladı ve herkes yerine oturdu. **Bu cümlelerden kaç tanesi yapısına göre birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["İki", "Üç", "Dört", "Beş"],
  dogru: 1,
  hatalar: [
    "Bir cümleyi atlamışsın: 2, 4 ve 5. cümlelerin üçü de birleşiktir.",
    null,
    "Dört sayma: 1. cümledeki 'dünkü' -ki ekidir, 6. cümle bağlı cümledir; ikisi birleşik değildir.",
    "Beş sayma: 1, 3 ve 6. cümlelerde yan yargı kuran bir yapı yoktur."
  ],
  aciklama: `Birleşik cümlede fiilimsi, şart eki ya da ayrı yazılan 'ki' ile kurulmuş bir yan yargı bulunur.
Adım 1: 1. cümle: 'dünkü' bitişik -ki ekidir; tek yüklem var: basit.
Adım 2: 2. cümle: 'okuyan' sıfat-fiil: birleşik.
Adım 3: 3. cümle: tek yüklem, yan yargı yok: basit.
Adım 4: 4. cümle: ayrı yazılan 'ki' bağlacı: birleşik.
Adım 5: 5. cümle: 'çalışırsan' şart eki: birleşik.
Adım 6: 6. cümle: 've' iki bağımsız yargıyı bağlar: bağlı, birleşik değil.
Sağlama: Birleşik olanlar 2, 4 ve 5. cümlelerdir; toplam üç.
Sık yapılan hata: Bağlı cümleyi de birleşik saymak.
Cevap B.`
},
{
  id: "tur-ct-074",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, günlük konuşmalardan topladığı cümleleri anlam bakımından sınıflandırmaktadır. Cümleler aşağıda numaralandırılmıştır. (I) Toplantıya kimse katılmadı. (II) Havuzun suyu çok soğuk değildi. (III) Çocuklar parkta sessizce oynadı. (IV) Bu zor soruyu çözemeyecek değilim. **Numaralanmış cümlelerin hangisi biçimce olumsuz olduğu hâlde anlamca olumludur?**`,
  gorsel: null,
  secenekler: ["I. cümle", "II. cümle", "III. cümle", "IV. cümle"],
  dogru: 3,
  hatalar: [
    "Hem biçimce hem anlamca olumsuzdur: kimsenin katılmadığını bildirir.",
    "Hem biçimce hem anlamca olumsuzdur: suyun çok soğuk olmadığını bildirir.",
    "Hem biçimce hem anlamca olumludur: yüklemde olumsuzluk eki ya da 'değil' yok.",
    null
  ],
  aciklama: `Biçimce olumsuzluk yüklemde -ma/-me eki ya da 'değil' ile görünür. İki olumsuzluk üst üste gelirse anlam olumluya döner.
Adım 1: I. cümlede 'katılmadı' tek olumsuzluk taşır; anlam da olumsuz.
Adım 2: II. cümlede 'değildi' tek olumsuzluk taşır; anlam olumsuz.
Adım 3: III. cümlede olumsuzluk yok; olumlu.
Adım 4: IV. cümlede hem 'çözemeyecek' (-me eki) hem 'değilim' olumsuzluk taşır. İki olumsuzluk birbirini götürür; söylenen 'çözeceğim'dir. Biçimce olumsuz, anlamca olumlu.
Sağlama: 'Çözemeyecek değilim' yerine 'çözeceğim' dediğinde anlam aynı kalır.
Sık yapılan hata: Olumsuzluk ekini görüp anlamı da olumsuz saymak.
Cevap D.`
},
{
  id: "tur-ct-075",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, patenle ilk gezisini anlatan yazısından dört cümleyi numaralandırmıştır. (I) Parka sabah erkenden gittik. (II) Hava çok güzeldi. (III) Çok sevinmiştik yeni patenlerimizle parka gidince. (IV) Kimse düşmedi. **III. cümle için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Fiil cümlesi, kurallı, olumlu, birleşik",
    "İsim cümlesi, devrik, olumlu, birleşik",
    "Fiil cümlesi, devrik, olumlu, birleşik",
    "Fiil cümlesi, devrik, olumsuz, basit"
  ],
  dogru: 2,
  hatalar: [
    "Yüklem 'sevinmiştik'ten sonra 'yeni patenlerimizle parka gidince' gelir; cümle devriktir, kurallı değildir.",
    "'Sevinmiştik' çekimli bir fiildir; cümle fiil cümlesidir, isim cümlesi değildir.",
    null,
    "'Sevinmiştik' yüklemi olumsuzluk eki taşımaz; 'gidince' zarf-fiili yan yargı kurar, cümle birleşiktir."
  ],
  aciklama: `III. cümleyi dört ölçüte göre sırayla çözümle.
Adım 1: Yüklem 'sevinmiştik'tir. Çekimli fiil olduğu için fiil cümlesi.
Adım 2: 'Sevinmiştik'ten sonra 'yeni patenlerimizle parka gidince' gelir. Yüklem sonda değil; devrik.
Adım 3: Yüklemde olumsuzluk eki yok: olumlu.
Adım 4: 'Gidince' zarf-fiili yan yargı kurar: birleşik.
Sağlama: Cümleyi 'Yeni patenlerimizle parka gidince çok sevinmiştik.' diye düzeltince yüklem sona gelir; yani yer değişikliği cümlenin devrik olduğunu gösterir.
Sık yapılan hata: Sondaki fiilimsiyi yüklem sanıp cümleyi kurallı saymak.
Cevap C.`
}
);
