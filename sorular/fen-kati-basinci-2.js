// Fen Bilimleri — Katı Basıncı: Kademe 3 (LGS Ayarı) ve Havuz
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kati-basinci"] = window.LGS_BANK["kati-basinci"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-kb-301",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Doğa fotoğrafçısı Ela, üç ayaklı fotoğraf sehpasının ayak uçlarına iki tür başlık takabilmektedir: geniş kauçuk pabuçlar ve sivri metal uçlar. İki başlık türünün ağırlıkları birbirine eşittir. Ela, üzerine aynı fotoğraf makinesi takılı sehpayı yumuşak toprakta önce pabuçlarla, sonra sivri uçlarla kurmuş; sehpa ayaklarının toprakta bıraktığı izlerin derinliğini ölçüp aşağıdaki tabloya yazmıştır.
I. Sivri uçlarla kurulan sehpanın toprağa uyguladığı basınç daha büyüktür.
II. Sivri uçlar, sehpanın toprağa uyguladığı kuvveti artırmıştır.
III. Sivri uçlar, sehpa ayaklarının toprağa temas eden yüzey alanını küçültmüştür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ayak uçlarındaki başlık</th><th>Topraktaki iz derinliği</th></tr><tr><td>Geniş kauçuk pabuç</td><td>0,4 cm</td></tr><tr><td>Sivri metal uç</td><td>3,5 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: sivri uçlar toprağa çok küçük bir yüzeyle değer; basıncın artmasının nedeni de temas yüzeyinin küçülmesidir.",
    "Basınç ile kuvveti karıştırma: başlıkların ağırlıkları eşittir; sehpanın toprağa uyguladığı kuvvet değişmemiştir, artan basınçtır.",
    null,
    "Kuvvet ile basıncı yer değiştirme: izin 0,4 cm'den 3,5 cm'ye derinleşmesi basıncın arttığını gösterir, yani I doğrudur; kuvvet ise değişmemiştir, II yanlıştır."
  ],
  aciklama: `Katı basıncı, bir cismin yüzeye dik uyguladığı kuvvetin (çoğu zaman ağırlığının) yüzeyin birim alanına düşen etkisidir. Aynı ağırlık daha küçük bir yüzeye toplanırsa basınç artar.
Adım 1 (I): Aynı toprakta iz 0,4 cm'den 3,5 cm'ye derinleşmiştir. Aynı zeminde batma arttıysa basınç artmıştır. I doğrudur.
Adım 2 (II): Sehpanın toprağa uyguladığı kuvvet, sehpa ile makinenin toplam ağırlığıdır. Başlıkların ağırlıkları eşit olduğu için bu kuvvet değişmemiştir. II yanlıştır.
Adım 3 (III): Sivri uçlar toprağa geniş pabuçlardan çok daha küçük bir yüzeyle değer; temas yüzeyi küçülmüştür. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sağlama: Fotoğrafçılar sivri uçları, sehpa kaymasın diye yumuşak toprakta; geniş pabuçları ise parke gibi zarar görebilecek zeminlerde kullanır.
Cevap C.`
},
{
  id: "fen-kb-302",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Yol kenarında lastiği patlayan bir sürücü, aracını kaldırmak için krikoyu yumuşak toprağa yerleştirmiştir. Kriko toprağa gömülmeye başlayınca sürücü, krikonun altına tahta koymayı denemiştir. Üç durumda da kriko, aracın aynı köşesini aynı yüksekliğe kaldırmaktadır. Her durumda toprağa değen yüzeyin alanı aşağıdaki tabloda verilmiştir. Tahtaların ağırlığı önemsenmeyecektir.
**Buna göre üç durumda toprağa uygulanan kuvvet ve basınç için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Durum</th><th>Krikonun altında</th><th>Toprağa değen yüzey</th></tr><tr><td>K</td><td>Tahta yok</td><td>1 birim kare</td></tr><tr><td>L</td><td>Küçük tahta</td><td>4 birim kare</td></tr><tr><td>M</td><td>Büyük tahta</td><td>9 birim kare</td></tr></table>`,
  secenekler: [
    "Bütün durumlarda kuvvet eşit, en büyük basınç K'de",
    "Bütün durumlarda kuvvet eşit, en büyük basınç M'de",
    "En büyük kuvvet de en büyük basınç da K'de",
    "En büyük kuvvet de en büyük basınç da M'de"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan ile basınç ilişkisini ters kurma: M'de toprağa değen yüzey en büyüktür; aynı kuvvet en geniş alana yayıldığı için basınç en küçük olur.",
    "Basıncı kuvvetle karıştırma: kriko her durumda aracın aynı köşesini kaldırır; toprağa uygulanan kuvvet değişmez, K'de büyük olan basınçtır.",
    "Hem kuvveti değişken sanma hem ilişkiyi ters kurma: kuvvet değişmez; büyük tahta basıncı artırmaz, azaltır."
  ],
  aciklama: `Kriko, aracın ağırlığının bir bölümünü toprağa aktarır. Toprağa uygulanan kuvvet ile bu kuvvetin yayıldığı yüzey birlikte basıncı belirler.
Adım 1 (kuvvet): Üç durumda da kriko aracın aynı köşesini aynı yüksekliğe kaldırmaktadır ve tahtaların ağırlığı önemsenmemektedir. Toprağa uygulanan kuvvet üç durumda eşittir.
Adım 2 (alan): Toprağa değen yüzey K'de 1, L'de 4, M'de 9 birim karedir. En küçük yüzey K'dedir.
Adım 3 (basınç): Aynı kuvvet en küçük yüzeye K'de etki eder. Basınç en büyük K'de, en küçük M'de olur. Kriko bu yüzden tahta olmadan toprağa gömülür.
Sık yapılan hata: Tahtanın aracı "hafiflettiğini" düşünmek. Tahta kuvveti azaltmaz; aynı kuvveti daha geniş bir yüzeye yayarak basıncı azaltır.
Cevap A.`
},
{
  id: "fen-kb-303",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz, katı basıncını incelemek için spor salonundaki özdeş üç yumuşak minderi yan yana dizmiştir. Minderlerin üzerine, aynı büyüklükte ve düz yüzeyli özdeş demir ağırlık disklerini üst üste yerleştirmiştir: birinci mindere 1, ikinci mindere 2, üçüncü mindere 3 disk. Sonra her minderin ne kadar çöktüğünü cetvelle ölçüp tabloya yazmıştır.
I. Deneyde değiştirilen (bağımsız) değişken, disklerin mindere temas eden yüzey alanıdır.
II. Minderlerin çökme miktarı, deneyin bağımlı değişkenidir.
III. Disk sayısı arttıkça mindere uygulanan basınç da artmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Minder</th><th>Üzerindeki disk sayısı</th><th>Çökme miktarı</th></tr><tr><td>1. minder</td><td>1</td><td>0,8 cm</td></tr><tr><td>2. minder</td><td>2</td><td>1,5 cm</td></tr><tr><td>3. minder</td><td>3</td><td>2,1 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Değişkenleri karıştırma: diskler aynı büyüklükte ve üst üste konduğu için temas alanı üç minderde de aynıdır; değiştirilen şey disk sayısı, yani ağırlıktır. Ayrıca II ve III doğrudur.",
    "III'ü gözden kaçırma: temas alanı sabitken disk sayısı arttıkça çökme 0,8 cm'den 2,1 cm'ye çıkmıştır; basınç artmıştır.",
    "Bağımsız değişkeni yanlış belirleme: temas alanı bu deneyde sabit tutulan (kontrol) değişkendir; değiştirilen, disk sayısıdır.",
    null
  ],
  aciklama: `Bir deneyde bilerek değiştirilen şeye bağımsız değişken, bunun sonucunda ölçülen şeye bağımlı değişken, sabit tutulan şeylere kontrol değişkeni denir.
Adım 1 (I): Deniz her mindere farklı sayıda disk koymuştur; değiştirdiği şey disk sayısı, yani mindere uygulanan ağırlıktır. Diskler aynı büyüklükte olduğu ve üst üste konduğu için mindere temas eden yüzey değişmemiştir; temas alanı kontrol değişkenidir. I yanlıştır.
Adım 2 (II): Deneyde ölçülen sonuç minderin çökme miktarıdır. Bu, bağımlı değişkendir. II doğrudur.
Adım 3 (III): Temas alanı aynıyken disk sayısı arttıkça çökme 0,8 cm, 1,5 cm ve 2,1 cm olarak artmıştır. Çökmenin artması basıncın arttığını gösterir. III doğrudur.
Adım 4: Doğru olanlar II ve III'tür.
Sık yapılan hata: Üst üste konan diskleri "yüzey büyüdü" diye yorumlamak. Diskler üst üste konunca yükseklik artar, ama mindere değen yüzey yalnızca en alttaki diskin yüzeyidir.
Cevap D.`
},
{
  id: "fen-kb-304",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Büyük kargo uçaklarının iniş takımlarında çok sayıda tekerlek bulunur. Bir havalimanı mühendisi, havalimanını ziyaret eden öğrencilere bu tasarımın pist yüzeyini korumak için önemli olduğunu anlatmıştır. Mühendis, aynı uçağın iniş takımlarında daha az tekerlek olsaydı ağır uçakların beklediği bölgelerde pistin zamanla zarar görebileceğini de eklemiştir.
I. Tekerlek sayısının fazla olması, uçağın piste uyguladığı kuvveti azaltır.
II. Tekerlek sayısının fazla olması, uçağın piste temas eden toplam yüzey alanını artırır.
III. Aynı uçağın daha az tekerleği olsaydı, uçak yerde dururken piste daha küçük basınç uygulardı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basıncı kuvvetle karıştırma: tekerlek sayısı uçağın ağırlığını değiştirmez; piste uygulanan kuvvet aynıdır. Azalan, basınçtır; II ise doğrudur.",
    null,
    "İki yanılgı birden: kuvvet tekerlek sayısıyla azalmaz; tekerlek azalırsa temas yüzeyi küçülür ve basınç artar.",
    "Alan ile basınç ilişkisini ters kurma: tekerlek sayısı azalırsa piste değen yüzey küçülür; aynı ağırlık küçük yüzeye binince basınç artar."
  ],
  aciklama: `Aynı ağırlık daha geniş bir yüzeye yayılırsa zemine uygulanan basınç azalır; daha küçük bir yüzeye binerse basınç artar.
Adım 1 (I): Uçağın yerde dururken piste uyguladığı kuvvet, onun ağırlığıdır. Tekerlek sayısı uçağın ağırlığını azaltmaz. I yanlıştır.
Adım 2 (II): Her tekerlek piste bir yüzeyle değer. Tekerlek sayısı arttıkça piste değen toplam yüzey büyür. II doğrudur.
Adım 3 (III): Tekerlek sayısı azalırsa toplam temas yüzeyi küçülür. Aynı ağırlık daha küçük bir yüzeye bineceği için basınç artar, azalmaz. III yanlıştır.
Adım 4: Doğru olan yalnız II'dir.
Sık yapılan hata: Çok tekerleğin uçağı "hafiflettiğini" düşünmek. Ağırlık aynı kalır; tekerlekler bu ağırlığı pistin daha geniş bir bölümüne dağıtır.
Cevap B.`
},
{
  id: "fen-kb-305",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mühendislik ekibi, yumuşak ve gevşek bir toprak üzerine yapılacak spor salonu için görseldeki iki temel tasarımını karşılaştırmıştır. Birinci tasarımda binanın yükü toprağa kolonların altındaki küçük beton bloklarla aktarılmaktadır. İkinci tasarımda ise binanın altına, taban boyunca uzanan kalın ve geniş bir beton plaka dökülmektedir. İki tasarımda binanın ağırlığı yaklaşık aynıdır. Ekip, binanın zamanla toprağa gömülmemesi için ikinci tasarımı seçmiştir.
**Ekibin bu seçimi yapmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 540 260" role="img" aria-label="Birinci tasarımda bina üç küçük beton blok üzerinde, temas yüzeyi 48 metrekare; ikinci tasarımda bina geniş plaka üzerinde, temas yüzeyi 640 metrekare"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="180" width="220" height="40"/><rect x="290" y="180" width="240" height="40"/></g><g fill="none" stroke="currentColor" stroke-width="2"><rect x="40" y="40" width="180" height="120"/><rect x="320" y="40" width="180" height="120"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="2"><rect x="40" y="160" width="30" height="20"/><rect x="115" y="160" width="30" height="20"/><rect x="190" y="160" width="30" height="20"/><rect x="300" y="160" width="220" height="20"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="130" y="28" font-weight="bold">1. tasarım</text><text x="410" y="28" font-weight="bold">2. tasarım</text><text x="130" y="206">Yumuşak toprak</text><text x="410" y="206">Yumuşak toprak</text><text x="130" y="246">Temas yüzeyi: 48 m²</text><text x="410" y="246">Temas yüzeyi: 640 m²</text></g></svg>`,
  secenekler: [
    "Geniş plaka, binanın toprağa uyguladığı kuvveti azaltır.",
    "Geniş plaka, binanın toprağa uyguladığı basıncı azaltır.",
    "Geniş plaka, binanın toprağa temas eden yüzeyini küçültür.",
    "Geniş plaka, binanın toprağa uyguladığı basıncı artırır."
  ],
  dogru: 1,
  hatalar: [
    "Basıncı kuvvetle karıştırma: iki tasarımda binanın ağırlığı yaklaşık aynıdır; toprağa uygulanan kuvvet değişmez, değişen basınçtır.",
    null,
    "Görseli ters okuma: ikinci tasarımda temas yüzeyi 48 m²'den 640 m²'ye büyümüştür, küçülmemiştir.",
    "Alan ile basınç ilişkisini ters kurma: aynı ağırlık daha geniş bir yüzeye yayılınca basınç artmaz, azalır."
  ],
  aciklama: `Bir yapının toprağa uyguladığı basınç, ağırlığının toprağa değen yüzeye nasıl dağıldığına bağlıdır.
Adım 1: İki tasarımda binanın ağırlığı yaklaşık aynıdır; yani toprağa uygulanan kuvvet aşağı yukarı eşittir.
Adım 2: Görselde temel ile toprağın temas yüzeyi birinci tasarımda 48 m², ikinci tasarımda 640 m²'dir. İkinci tasarımda yüzey çok daha büyüktür.
Adım 3: Aynı ağırlık çok daha geniş bir yüzeye yayıldığında basınç küçülür. Yumuşak toprak bu küçük basıncı taşıyabilir, bina gömülmez.
Sağlama: Paletli iş makineleri de aynı ilkeyle çalışır: ağırlık aynı kalır, temas yüzeyi büyür, basınç azalır.
Cevap B.`
},
{
  id: "fen-kb-306",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Zeynep, içini kumla doldurup kapattığı bir karton kutuyu, düzlenmiş un dolu bir tepsinin üzerine üç farklı yüzeyi üzerinde sırayla koymuştur. Her denemeden önce unu yeniden düzlemiş, kutuyu kaldırdıktan sonra unda kalan izin derinliğini ölçmüştür. Sonuçlar aşağıdaki grafikte verilmiştir.
I. Kutunun una uyguladığı kuvvet üç denemede de aynıdır.
II. Temas yüzeyinin alanı arttıkça kutunun una uyguladığı basınç azalmıştır.
III. Her denemeden önce unun düzlenmesi, zemin koşullarını denemeler arasında aynı tutmak içindir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 310" role="img" aria-label="Sütun grafiği: temas yüzeyi 2 birim karede iz 5,5 cm, 3 birim karede 3,5 cm, 6 birim karede 1,5 cm"><text x="280" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Temas yüzeyi alanı ve iz derinliği</text><g stroke="currentColor" stroke-width="1" stroke-dasharray="4 5" opacity="0.5"><line x1="70" y1="208" x2="490" y2="208"/><line x1="70" y1="176" x2="490" y2="176"/><line x1="70" y1="144" x2="490" y2="144"/><line x1="70" y1="112" x2="490" y2="112"/><line x1="70" y1="80" x2="490" y2="80"/><line x1="70" y1="48" x2="490" y2="48"/></g><g fill="var(--vurgu)"><rect x="115" y="64" width="70" height="176"/><rect x="245" y="128" width="70" height="112"/><rect x="375" y="192" width="70" height="48"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="490" y2="240"/><line x1="70" y1="240" x2="70" y2="40"/></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="213">1</text><text x="62" y="181">2</text><text x="62" y="149">3</text><text x="62" y="117">4</text><text x="62" y="85">5</text><text x="62" y="53">6</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="150" y="56">5,5 cm</text><text x="280" y="120">3,5 cm</text><text x="410" y="184">1,5 cm</text><text x="150" y="262">2 birim kare</text><text x="280" y="262">3 birim kare</text><text x="410" y="262">6 birim kare</text><text x="280" y="294">Kutunun una değen yüzeyinin alanı</text><text x="22" y="144" transform="rotate(-90 22 144)">İz derinliği (cm)</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü gözden kaçırma: grafikte alan 2 birim kareden 6 birim kareye büyüdükçe iz 5,5 cm'den 1,5 cm'ye inmiştir; basınç azalmıştır. Unu düzlemek de zemini aynı tutar.",
    "III'ü gözden kaçırma: unu her seferinde düzlemek, zemini denemeler arasında aynı tutar; bu bir kontrol değişkenidir.",
    "Kuvvet ile basıncı karıştırma: iz derinliği değişince kuvvetin de değiştiğini sanma. Aynı kutunun ağırlığı yüzeyi değişince değişmez; I doğrudur.",
    null
  ],
  aciklama: `İz derinliği, aynı zeminde basıncın ne kadar büyük olduğunu gösteren bir ölçüdür. Sonuçları karşılaştırabilmek için değiştirilen değişken dışındaki her şey aynı tutulmalıdır.
Adım 1 (I): Üç denemede de aynı kutu kullanılmıştır. Kutunun ağırlığı hangi yüzeyi üzerinde durursa dursun aynıdır; una uyguladığı kuvvet değişmez. I doğrudur.
Adım 2 (II): Grafikte temas alanı 2, 3 ve 6 birim kare olurken iz derinliği 5,5 cm, 3,5 cm ve 1,5 cm olmuştur. Alan büyüdükçe iz sığlaşmış, yani basınç azalmıştır. II doğrudur.
Adım 3 (III): Unun sıkışıp sertleşmesi izi etkiler. Her denemeden önce unu düzlemek zemini aynı koşulda tutar; bu bir kontrol değişkenidir. III doğrudur.
Adım 4: Üç yargı da doğrudur.
Sık yapılan hata: İz derinliği değiştiği için kutunun una "daha çok bastığını", yani kuvvetin değiştiğini sanmak. Değişen kuvvet değil, kuvvetin yayıldığı alandır.
Cevap D.`
},
{
  id: "fen-kb-307",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir veteriner hekim, köpeklerin ağzının ön kısmındaki sivri köpek dişleriyle eti delip tuttuğunu, arka kısımdaki azı dişleriyle ise yiyecekleri ezip parçaladığını anlatmıştır. Veteriner ayrıca köpeklerin arka dişleriyle, ön dişlerine göre daha büyük kuvvetle ısırabildiğini belirtmiştir. İki diş türü aşağıdaki tabloda karşılaştırılmıştır.
I. İki diş aynı kuvvetle ısırsaydı köpek dişi yiyeceğe azı dişinden daha büyük basınç uygulardı.
II. Azı dişi daha büyük kuvvetle ısırdığı için yiyeceğe köpek dişinden daha büyük basınç uygular.
III. Köpek dişinin yiyeceği kolayca delmesi, ısırma kuvvetini çok küçük bir yüzeye toplamasıyla açıklanabilir.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Diş türü</th><th>Yiyeceğe değen yüzey</th><th>Görevi</th></tr><tr><td>Köpek dişi</td><td>Çok küçük (sivri uç)</td><td>Delme ve tutma</td></tr><tr><td>Azı dişi</td><td>Geniş</td><td>Ezme ve parçalama</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: köpek dişi çenenin kuvvetini sivri ucundaki çok küçük bir yüzeye toplar; basınç büyür ve diş yiyeceğe kolayca batar.",
    null,
    "Kuvveti tek başına yeterli sanma: azı dişi daha büyük kuvvetle ısırır ama bu kuvveti çok daha geniş bir yüzeye yayar; basıncının büyük olduğu kesin değildir. I ise doğrudur.",
    "II'yi doğru sanma: basınç yalnızca kuvvete değil temas yüzeyine de bağlıdır; azı dişinin kuvveti büyük ama yüzeyi de geniştir, basıncının büyük olduğu kesin değildir."
  ],
  aciklama: `Katı basıncı iki değişkene bağlıdır: yüzeye dik uygulanan kuvvet ve temas yüzeyinin alanı. İki basıncı karşılaştırırken ikisine birden bakmalısın. Canlıların vücut yapılarında da bu ilke görülür.
Adım 1 (I): Kuvvet aynı olsaydı yalnızca yüzey farkı kalırdı. Tabloya göre köpek dişinin yiyeceğe değen yüzeyi çok küçük, azı dişininki geniştir. Aynı kuvvet küçük yüzeyde daha büyük basınç oluşturur. I doğrudur.
Adım 2 (II): Azı dişinin kuvveti daha büyüktür; bu, basıncı artırıcı yönde etki eder. Ama azı dişinin yüzeyi de geniştir; bu da basıncı azaltıcı yönde etki eder. İki etki ters yönde olduğu için azı dişinin basıncının daha büyük olduğu kesin olarak söylenemez. II kesinlikle doğru değildir.
Adım 3 (III): Köpek dişi, çenenin kuvvetini sivri ucundaki çok küçük bir yüzeye toplar. Basınç büyür ve diş yiyeceğe kolayca batar. III doğrudur.
Adım 4: Kesinlikle doğru olanlar I ve III'tür.
Sık yapılan hata: Kuvveti büyük olanın basıncının da büyük olduğunu sanmak. Kuvvet büyük ama yüzey de genişse basınç daha küçük bile olabilir; kuvvete ve yüzeye birlikte bakmalısın.
Cevap B.`
},
{
  id: "fen-kb-308",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kamp malzemesi satan bir mağazada, aynı müşteri üç farklı kamp sandalyesine sırayla oturarak sandalyeleri kumsalda denemiştir. Sandalyelerin ağırlıkları birbirine eşittir. Sandalyelerin ayak sayıları ve ayak uçları aşağıdaki tabloda verilmiştir. K ve M sandalyelerinin sivri ayak uçları birbirinin aynısıdır.
**Buna göre müşteri otururken sandalyelerin kuma uyguladığı basınçların büyükten küçüğe sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sandalye</th><th>Ayak sayısı</th><th>Ayak uçları</th></tr><tr><td>K</td><td>3</td><td>Sivri</td></tr><tr><td>L</td><td>4</td><td>Geniş pabuçlu</td></tr><tr><td>M</td><td>4</td><td>Sivri</td></tr></table>`,
  secenekler: ["L > M > K", "K > L > M", "K > M > L", "M > K > L"],
  dogru: 2,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: geniş pabuçlu L kuma en büyük yüzeyle değer; basıncı en büyük değil, en küçüktür.",
    "Pabuçların etkisini ters değerlendirme: L'nin de M'nin de 4 ayağı vardır ama L'nin ayak uçları geniştir; bu yüzden L'nin basıncı M'ninkinden küçüktür.",
    null,
    "Ayak sayısının etkisini ters değerlendirme: M'nin sivri ayağı K'ninkinden bir fazladır; ağırlık daha çok ayağa paylaştırıldığı için M'nin basıncı K'ninkinden küçüktür."
  ],
  aciklama: `Sandalye ile müşterinin toplam ağırlığı üç durumda aynıdır; kuma uygulanan kuvvet eşittir. Bu durumda basıncı yalnızca kuma değen toplam yüzey belirler.
Adım 1 (K ile M): İkisinin de ayak uçları aynı sivri uçtur. K'nin 3, M'nin 4 ayağı vardır. M'nin kuma değen toplam yüzeyi daha büyüktür; basıncı K'ninkinden küçüktür.
Adım 2 (M ile L): İkisinin de 4 ayağı vardır. M'nin ayak uçları sivri, L'ninkiler geniş pabuçludur. L'nin toplam yüzeyi daha büyüktür; basıncı M'ninkinden küçüktür.
Adım 3: İki karşılaştırmayı birleştir: K > M > L.
Sağlama: Kumsalda sivri ayaklı sandalyeler kuma gömülür, geniş pabuçlu sandalyeler kumun üzerinde kalır.
Cevap C.`
},
{
  id: "fen-kb-309",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bavul firması, aynı modelde iki bavul üretmiştir. İki bavul arasındaki tek fark, K bavulunun tutma sapının 1 cm, L bavulununkinin 4 cm genişliğinde olmasıdır. Firma, iki bavulu aynı eşyalarla doldurup aynı gönüllüye aynı mesafede sırayla taşıtmış ve gönüllünün avuç içindeki kızarıklığı karşılaştırmıştır. L bavulu taşındıktan sonra avuçtaki kızarıklığın daha az olduğu görülmüştür.
I. Sap genişliği arttıkça bavulun avuca uyguladığı basınç artar.
II. Bavullara konan eşyalar, bu deneyin bağımlı değişkenidir.
III. Sap genişliği, avuca uygulanan basıncı etkileyen bir değişkendir.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız III", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "İki yanılgı birden: sap genişledikçe basınç azalır, artmaz; eşyalar da ölçülen sonuç değil, iki bavulda aynı tutulan kontrol değişkenidir.",
    "Alan ile basınç ilişkisini ters kurma: geniş saplı L bavulu daha az kızarıklık bırakmıştır; sap genişledikçe basınç azalır.",
    "Değişken türlerini karıştırma: eşyalar iki bavulda aynı tutulmuştur, yani kontrol değişkenidir; bağımlı değişken avuçtaki kızarıklıktır."
  ],
  aciklama: `Bu deneyde değiştirilen tek şey sap genişliğidir (bağımsız değişken). Gözlenen sonuç avuçtaki kızarıklıktır (bağımlı değişken). Eşyalar, gönüllü ve mesafe aynı tutulmuştur (kontrol değişkenleri).
Adım 1 (I): Geniş saplı L bavulu daha az kızarıklık bırakmıştır. Aynı yük daha geniş bir yüzeye yayılınca basınç azalır. I, ilişkiyi ters kurduğu için yanlıştır.
Adım 2 (II): Eşyalar iki bavulda aynıdır; bunlar sabit tutulan kontrol değişkenidir. Gözlenen sonuç kızarıklıktır. II yanlıştır.
Adım 3 (III): Yalnızca sap genişliği değiştirildiği hâlde kızarıklık değişmiştir. Demek ki sap genişliği avuca uygulanan basıncı etkiler. III doğrudur.
Adım 4: Kesinlikle doğru olan yalnız III'tür.
Sık yapılan hata: Kontrol değişkeni ile bağımlı değişkeni karıştırmak. Kendine "Deneyde neyi gözlüyorum ya da ölçüyorum?" diye sor; bu sorunun cevabı bağımlı değişkendir.
Cevap A.`
},
{
  id: "fen-kb-310",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Pastacılık kursuna giden Elif, açtığı kurabiye hamurunu iki farklı kalıpla kesmeye çalışmıştır. Metal kalıbın kesen kenarı çok ince, plastik kalıbın kenarı ise kalındır. Elif iki kalıba da aynı kuvvetle bastırdığında metal kalıp hamuru kolayca kesmiş, plastik kalıp ise hamurda yalnızca bir oyuk bırakmıştır.
I. Metal kalıbın hamura uyguladığı basınç, plastik kalıbınkinden büyüktür.
II. Plastik kalıbın kenarı biraz daha kalınlaştırılırsa hamuru daha kolay keser.
III. Aynı kuvvetle bastırıldığında kenar inceldikçe hamura uygulanan basınç artar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: kuvvet aynıyken kenar inceldikçe hamura değen yüzey küçülür ve basınç artar; metal kalıbın kolay kesmesi bunu gösterir.",
    "Alan ile basınç ilişkisini ters kurma: kenar kalınlaşınca hamura değen yüzey büyür, basınç azalır; kalıp daha zor keser.",
    "II'yi doğru sanma: kalın kenar aynı kuvveti daha geniş bir yüzeye yayar ve basıncı azaltır; bu, kesmeyi kolaylaştırmaz, zorlaştırır.",
    null
  ],
  aciklama: `Kesici aletler, uygulanan kuvveti çok küçük bir yüzeye toplayarak basıncı artırır. Aynı kuvvet ne kadar küçük bir yüzeye etki ederse basınç o kadar büyük olur.
Adım 1 (I): Elif iki kalıba aynı kuvvetle bastırmıştır. Metal kalıbın ince kenarı hamura daha küçük bir yüzeyle değer; basıncı daha büyüktür, bu yüzden hamuru kesmiştir. I doğrudur.
Adım 2 (II): Kenar kalınlaşırsa hamura değen yüzey büyür, basınç azalır. Kalıp hamuru daha zor keser. II yanlıştır.
Adım 3 (III): Kuvvet aynı kaldıkça kenar inceldikçe yüzey küçülür ve basınç artar. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sağlama: Körelmiş bir bıçağın ekmeği ezmesi, bilenmiş bıçağın ise kolayca kesmesi de aynı ilkeyle açıklanır.
Cevap D.`
},
{
  id: "fen-kb-311",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir inşaat alanında çalışan paletli bir kepçe, sabah kepçesi boşken çamurlu bir zeminden geçmiştir. Öğleden sonra kepçesine iri taşlar yüklenmiş olarak aynı zeminden bir kez daha geçmiştir. Kepçenin paletleri ve zeminin durumu iki geçişte de aynıdır. İş güvenliği sorumlusu, iki geçişte paletlerin zeminde bıraktığı izlerin derinliğini ölçüp aşağıdaki tabloya yazmıştır.
**Buna göre kepçe yüklüyken, boş olduğu duruma göre zemine uyguladığı kuvvet, paletlerin zemine temas eden yüzey alanı ve zemine uyguladığı basınç nasıl değişmiştir? (Şıklarda sırasıyla kuvvet, temas yüzeyi alanı ve basınç verilmiştir.)**`,
  gorsel: `<table class="tablo"><tr><th>Geçiş</th><th>Kepçenin durumu</th><th>Palet izinin derinliği</th></tr><tr><td>Sabah</td><td>Boş</td><td>3 cm</td></tr><tr><td>Öğleden sonra</td><td>Taş yüklü</td><td>7 cm</td></tr></table>`,
  secenekler: [
    "Artmış – Artmış – Değişmemiş",
    "Değişmemiş – Değişmemiş – Artmış",
    "Artmış – Değişmemiş – Artmış",
    "Artmış – Azalmış – Artmış"
  ],
  dogru: 2,
  hatalar: [
    "Yük arttıkça paletin zemine değen yüzeyinin de büyüdüğünü sanma: paletler aynıdır, temas yüzeyi değişmez; kuvvet arttığı için basınç artar.",
    "Kuvvet ile ağırlığın bağını görmeme: yüklenen taşlar kepçenin ağırlığını, dolayısıyla zemine uyguladığı kuvveti artırır.",
    null,
    "Temas yüzeyinin küçüldüğünü sanma: paletler değişmemiştir; basınç, yüzey küçüldüğü için değil, kuvvet arttığı için artmıştır."
  ],
  aciklama: `Katı basıncı iki değişkene bağlıdır: yüzeye dik uygulanan kuvvet (ağırlık) ve temas yüzeyinin alanı. Birini sabit tutup ötekini değiştirirsen basıncın nasıl değiştiğini görürsün.
Adım 1 (kuvvet): Kepçeye taş yüklenince kepçenin ağırlığı artar. Düz zeminde bir aracın zemine uyguladığı kuvvet ağırlığıdır; kuvvet artmıştır.
Adım 2 (temas alanı): Kepçe aynı paletlerle aynı zeminden geçmiştir. Paletlerin zemine değen yüzeyi değişmemiştir.
Adım 3 (basınç): Alan aynıyken kuvvet arttığı için basınç artmıştır. Tabloda izin 3 cm'den 7 cm'ye derinleşmesi de bunu doğrular.
Sık yapılan hata: İz derinleşti diye temas yüzeyinin küçüldüğünü düşünmek. Basınç iki yoldan artabilir: kuvvet artarak ya da alan küçülerek. Burada değişen kuvvettir.
Cevap C.`
},
{
  id: "fen-kb-312",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bade, "Bir cismin zemine temas eden yüzey alanı küçüldükçe zemine uyguladığı basınç artar." hipotezini sınamak istemiştir. Özdeş iki kutudan birini geniş yüzeyi üzerinde, ıslak kumun üzerine yavaşça bırakmıştır. Diğerini ise dar yüzeyi üzerinde, aynı kumun üzerine yarım metre yükseklikten düşürmüştür. Kutuların kumdaki izleri sırasıyla 1 cm ve 4 cm çıkmıştır. Bade bu sonuçla hipotezinin doğrulandığını söylemiş, ancak öğretmeni deneyin bu hipotezi sınamaya uygun olmadığını belirtmiştir.
**Öğretmenin bu değerlendirmesinin gerekçesi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İz derinliği basıncın göstergesi olarak hiç kullanılamaz.",
    "Kutuların ağırlıkları birbirinden farklıdır.",
    "Deneyde temas yüzeyi alanı değiştirilmemiştir.",
    "Kutular kuma aynı biçimde bırakılmamıştır."
  ],
  dogru: 3,
  hatalar: [
    "Aşırı genelleme: iz derinliği, koşullar aynı tutulduğunda basıncı karşılaştırmak için kullanılabilir; sorun ölçüm yönteminde değil, kutuların kuma farklı biçimde bırakılmasındadır.",
    "Metni dikkatli okumama: kutular özdeştir, ağırlıkları eşittir; ağırlık doğru biçimde sabit tutulmuştur.",
    "Bağımsız değişkeni görmeme: kutulardan biri geniş, diğeri dar yüzeyi üzerine konmuştur; temas alanı değiştirilmiştir.",
    null
  ],
  aciklama: `Bir hipotezi sınarken yalnızca bağımsız değişken değiştirilir; sonucu etkileyebilecek öteki her şey aynı tutulur.
Adım 1: Bade'nin hipotezindeki bağımsız değişken temas yüzeyi alanıdır. Bade bunu değiştirmiştir (geniş yüzey ve dar yüzey). Bu doğru bir adımdır.
Adım 2: Özdeş kutular kullanıldığı için ağırlık sabittir; zemin de aynı ıslak kumdur.
Adım 3: Ancak kutulardan biri kuma yavaşça bırakılmış, öteki yarım metre yükseklikten düşürülmüştür. Düşen kutu kuma çarptığı anda yalnızca ağırlığıyla değil, hareketinden gelen ek bir etkiyle de bastırır ve daha derin iz bırakır. İzlerdeki farkın alan farkından mı yoksa bırakılış biçiminden mi kaynaklandığı anlaşılamaz.
Adım 4: Deneyin geçerli olması için iki kutunun da kuma aynı biçimde, örneğin ikisinin de yavaşça bırakılması gerekirdi.
Sık yapılan hata: Sonuç hipotezle uyuşunca deneyin doğru kurulduğunu sanmak. Sonuç beklendiği gibi çıksa bile iki şey birden farklıysa deney hipotezi sınamaz.
Cevap D.`
},
{
  id: "fen-kb-313",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Eski bir binanın çatısını onaran ustalar, kırılgan çatı levhalarının üzerine doğrudan basmak yerine levhaların üzerine uzun ve geniş bir tahta kalas koyup kalasın üzerinden ilerlemektedir. Usta Kemal, çıraklarına levhaya doğrudan basmanın levhayı ayak altında kırabileceğini söylemiştir. Kalasın ağırlığı, ustanın ağırlığının yanında çok küçüktür.
I. Kalas, ustanın ağırlığının levhaya aktarıldığı yüzeyi büyütür.
II. Kalasın üzerinden yürümek, levhaya uygulanan basıncı azaltır.
III. Daha dar bir kalas kullanılsaydı levhaya uygulanan basınç daha da azalırdı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: ağırlık levhanın daha geniş bir bölümüne yayılınca levhaya uygulanan basınç azalır; levhanın kırılmamasının nedeni budur.",
    null,
    "Alan ile basınç ilişkisini ters kurma: dar kalas ağırlığı daha küçük bir yüzeye aktarır; basınç azalmaz, artar.",
    "I'i gözden kaçırma ve III'te ilişkiyi ters kurma: kalas ağırlığın aktarıldığı yüzeyi büyütür, yani I doğrudur; dar kalas ise basıncı artırır, III yanlıştır."
  ],
  aciklama: `Levhanın kırılması, ona uygulanan basınca bağlıdır. Ustanın ağırlığı değişmez; ama bu ağırlığın levhanın ne kadar geniş bir bölümüne aktarıldığı değiştirilebilir.
Adım 1 (I): Usta doğrudan levhaya basarsa ağırlığı yalnızca ayak tabanlarının değdiği küçük bir yüzeye aktarılır. Kalasın üzerindeyken ağırlık, kalasın levhaya değen geniş yüzeyine aktarılır. I doğrudur.
Adım 2 (II): Kalas çok hafif olduğu için toplam kuvvet neredeyse aynı kalır, ama bu kuvvet çok daha geniş bir yüzeye yayılır. Basınç azalır. II doğrudur.
Adım 3 (III): Daha dar bir kalas levhaya daha küçük bir yüzeyle değer. Aynı ağırlık küçük yüzeye binince basınç artar. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Kalasın ustayı "hafiflettiğini" düşünmek. Ağırlık aynı kalır; değişen, ağırlığın yayıldığı alandır.
Cevap B.`
},
{
  id: "fen-kb-314",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bahçede sert toprağı kazan Berk ile dedesi, ağırlıkları birbirine eşit ama uçlarının biçimi farklı iki kürek kullanmaktadır. İkisi de küreğini toprağa, üstüne ayağıyla basarak sokmaktadır. Berk, dedesinin küreğine kendisinden daha az kuvvetle bastığını fark etmiştir. Buna rağmen aynı toprakta dedenin küreği her seferinde Berk'in küreğinden daha derine girmektedir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Dedenin küreğinin toprağa değen ucu, Berk'inkinden daha küçük bir yüzeye sahiptir.",
    "Dedenin küreği toprağa, Berk'in küreğinden daha büyük bir kuvvet uygulamaktadır.",
    "Küreklerin uçları eşit büyüklükte olsaydı dedenin küreği yine daha derine girerdi.",
    "Berk daha büyük kuvvetle bastığı için onun küreği toprağa daha büyük basınç uygular."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Derine girmeyi kuvvete bağlama: kürekler eşit ağırlıktadır ve dede küreğine Berk'ten daha az kuvvetle basmaktadır; dedenin küreğinin toprağa uyguladığı kuvvet daha küçüktür. Daha büyük olan, basınçtır.",
    "Temas yüzeyinin etkisini görmeme: uçlar eşit büyüklükte olsaydı dedenin daha küçük kuvveti daha küçük bir basınç oluştururdu; dedenin küreği daha derine değil, daha az derine girerdi.",
    "Basıncı yalnızca kuvvete bağlama: Berk'in küreği daha az derine girdiğine göre onun basıncı daha küçüktür; Berk'in büyük kuvveti daha geniş bir uca yayıldığı için büyük basınç oluşturmamıştır."
  ],
  aciklama: `Katı basıncı iki değişkene bağlıdır: yüzeye uygulanan kuvvet ve temas yüzeyinin alanı. İki cismin kuvvetlerini ve basınçlarını karşılaştırabiliyorsan temas yüzeyleri hakkında da yargıya varabilirsin.
Adım 1 (kuvvet): Kürekler eşit ağırlıktadır ve dede küreğine Berk'ten daha az kuvvetle basmaktadır. Dedenin küreğinin toprağa uyguladığı kuvvet daha küçüktür. B yanlıştır.
Adım 2 (basınç): Aynı toprakta dedenin küreği daha derine girmektedir. Aynı zeminde daha derine girmek daha büyük basınç demektir. Dedenin küreğinin basıncı daha büyük, Berk'inki daha küçüktür. D yanlıştır.
Adım 3 (alan): Daha küçük bir kuvvetin daha büyük bir basınç oluşturabilmesi için bu kuvvetin daha küçük bir yüzeye etki etmesi gerekir. Uçlar eşit olsaydı ya da dedeninki daha geniş olsaydı, daha küçük kuvvet daha küçük basınç oluştururdu. Öyleyse dedenin küreğinin ucu toprağa daha küçük bir yüzeyle değmektedir. A doğru, C yanlıştır.
Sağlama: Sert toprağı kazmak için ucu dar ve sivri kürekler, kum ya da kar gibi gevşek malzemeyi küremek için ucu düz ve geniş kürekler kullanılır.
Cevap A.`
},
{
  id: "fen-kb-315",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir robotik takımı, kumlu bir yarışma parkurunda kullanacağı gezgin robot için tekerlek seçmektedir. Takım, robotu sırayla dar, orta ve geniş tekerleklerle donatıp aynı kum havuzunda yürütmüş ve tekerleklerin kumda bıraktığı izlerin derinliğini ölçmüştür. Üç tekerlek türünün ağırlıkları birbirine eşittir.
I. Robotun kuma uyguladığı kuvvet en çok dar tekerleklerle yapılan denemede olmuştur.
II. Robot kuma en büyük basıncı dar tekerleklerle uygulamıştır.
III. Geniş tekerlekli robota ek bir yük konursa izlerin derinliği 1,1 cm'den fazla olur.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Deneme</th><th>Tekerlek türü</th><th>İz derinliği</th></tr><tr><td>1. deneme</td><td>Dar</td><td>4,2 cm</td></tr><tr><td>2. deneme</td><td>Orta</td><td>2,6 cm</td></tr><tr><td>3. deneme</td><td>Geniş</td><td>1,1 cm</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: temas yüzeyi aynıyken ağırlık artarsa basınç artar; geniş tekerlekler daha derin iz bırakır.",
    "Kuvvet ile basıncı karıştırma: robotun ağırlığı üç denemede aynıdır, kuma uygulanan kuvvet eşittir; dar tekerleklerde büyük olan basınçtır.",
    "Kuvvet ile basıncı karıştırma ve II'yi eleme: dar tekerlekte artan kuvvet değil basınçtır; en derin iz (4,2 cm) en büyük basıncı gösterir.",
    null
  ],
  aciklama: `Bir aracın düz zemine uyguladığı kuvvet ağırlığıdır; basınç ise bu ağırlığın tekerleklerin zemine değen yüzeyine nasıl dağıldığına bağlıdır.
Adım 1 (I): Tekerlek türlerinin ağırlıkları eşit olduğu için robotun ağırlığı üç denemede aynıdır. Kuma uyguladığı kuvvet değişmemiştir. I yanlıştır.
Adım 2 (II): Aynı kum havuzunda en derin iz (4,2 cm) dar tekerleklerle oluşmuştur. Dar tekerleğin kuma değen yüzeyi en küçüktür; basınç en büyüktür. II doğrudur.
Adım 3 (III): Geniş tekerlekler aynı kalırsa temas yüzeyi değişmez. Robota yük konunca ağırlık, dolayısıyla kuvvet artar; basınç da artar ve iz 1,1 cm'den derin olur. III doğrudur.
Adım 4: Doğru olanlar II ve III'tür.
Sık yapılan hata: En derin izi "en büyük kuvvet" sanmak. Ağırlık aynıyken izi derinleştiren şey yüzeyin küçülmesidir.
Cevap D.`
},
{
  id: "fen-kb-316",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir halterci, salonun yumuşak zemin kaplaması üzerinde antrenman yapmaktadır. Antrenör, sporcunun zemine uyguladığı kuvvet ve basıncı aşağıdaki üç durumda karşılaştırmıştır. Ayakkabıların ağırlıkları önemsenmeyecektir.
1. durum: Sporcu halter olmadan, düz tabanlı ayakkabılarla iki ayağı üzerinde durmaktadır.
2. durum: Sporcu halteri omuzlarında taşırken aynı ayakkabılarla topuklarını kaldırıp parmak uçlarında yükselmiştir.
3. durum: Sporcu halteri omuzlarında taşırken tabanı daha geniş ayakkabılarla iki ayağı üzerinde durmaktadır.
I. 3. durumda sporcunun zemine uyguladığı kuvvet, 1. durumdakinden büyüktür.
II. 3. durumda sporcunun zemine uyguladığı basınç, 1. durumdakinden küçüktür.
III. 2. durumda sporcunun zemine uyguladığı basınç, 1. durumdakinden büyüktür.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: 2. durumda halterle ağırlık artmış, parmak uçlarında yükselince temas yüzeyi küçülmüştür; iki değişiklik de basıncı artırdığı için basınç kesinlikle artar.",
    "Ters yönde etki eden iki değişikliği kesin sonuç sanma: 3. durumda halter ağırlığı artırır, geniş taban yüzeyi büyütür; hangisinin daha etkili olduğu bilinmeden basıncın azaldığı kesin söylenemez. Ayrıca I ve III doğrudur.",
    null,
    "I'i gözden kaçırıp II'yi kesin sanma: halter sporcunun zemine uyguladığı kuvveti artırır, yani I doğrudur; 3. durumdaki basınç değişimi ise kesin değildir."
  ],
  aciklama: `İki değişiklik basıncı aynı yönde etkiliyorsa sonuç kesindir. Ters yönde etkiliyorsa, hangisinin daha güçlü olduğu bilinmeden sonuç kestirilemez.
Adım 1 (I): 3. durumda sporcu halteri taşımaktadır. Zemine uyguladığı kuvvet, kendi ağırlığı ile halterin ağırlığının toplamıdır; 1. durumdakinden büyüktür. I doğrudur.
Adım 2 (II): 3. durumda kuvvet artmıştır (bu, basıncı artırır), ama ayakkabı tabanı genişlemiştir (bu, basıncı azaltır). Halterin ağırlığı ve tabanın ne kadar genişlediği bilinmediği için basıncın azaldığı kesin değildir. II kesinlikle doğru değildir.
Adım 3 (III): 2. durumda kuvvet halterle artmıştır; parmak uçlarında yükselince zemine değen yüzey de küçülmüştür. İki değişiklik de basıncı artırır. III kesinlikle doğrudur.
Adım 4: Kesinlikle doğru olanlar I ve III'tür.
Sık yapılan hata: "Geniş taban her durumda basıncı azaltır." diye düşünmek. Aynı anda ağırlık da artıyorsa sonuç, iki değişikliğin büyüklüğüne bağlıdır.
Cevap C.`
},
{
  id: "fen-kb-317",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Emine, katı basıncını etkileyen değişkenleri incelemek için özdeş ahşap bloklarla beş düzenek kurmuştur. Her düzenekte blokları ıslak kum ya da un dolu bir kaba koymuş; blok sayısını ve blokların zemine değen yüzeyini tabloda gösterildiği gibi değiştirmiştir. Birden fazla blok kullanılan düzeneklerde bloklar hep üst üste konmuştur. Emine, bu düzeneklerden yalnızca ikisini karşılaştırarak "Temas yüzeyinin alanı arttıkça basınç azalır." hipotezini sınamak istemektedir.
**Buna göre Emine hangi iki düzeneği karşılaştırmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Zemin</th><th>Üst üste konan blok sayısı</th><th>Zemine değen yüzey</th></tr><tr><td>P</td><td>Islak kum</td><td>2</td><td>Geniş yüzey</td></tr><tr><td>R</td><td>Islak kum</td><td>2</td><td>Dar yüzey</td></tr><tr><td>S</td><td>Un</td><td>2</td><td>Dar yüzey</td></tr><tr><td>T</td><td>Islak kum</td><td>1</td><td>Dar yüzey</td></tr><tr><td>U</td><td>Un</td><td>1</td><td>Geniş yüzey</td></tr></table>`,
  secenekler: ["P ve R", "R ve S", "R ve T", "S ve U"],
  dogru: 0,
  hatalar: [
    null,
    "Zemini değiştirme: R ile S'de blok sayısı ve yüzey aynıdır, yalnızca zemin farklıdır; bu çift yüzey alanının değil zeminin etkisini gösterir.",
    "Yanlış değişkeni sınama: R ile T'de zemin ve yüzey aynıdır, yalnızca blok sayısı (ağırlık) farklıdır; bu çift ağırlığın etkisini gösterir.",
    "İki değişkeni birden değiştirme: S ile U'da hem blok sayısı hem de zemine değen yüzey farklıdır; izdeki farkın nedeni ayırt edilemez."
  ],
  aciklama: `Bir hipotezi sınamak için karşılaştırılan iki düzenekte yalnızca bağımsız değişken farklı, geri kalan her şey aynı olmalıdır.
Adım 1: Hipotezde bağımsız değişken temas yüzeyinin alanıdır. Aranan iki düzenekte zemine değen yüzey farklı olmalıdır.
Adım 2: Basıncı etkileyen ağırlık (blok sayısı) ve iz derinliğini etkileyen zemin türü aynı tutulmalıdır.
Adım 3: Şıkları tek tek incele. P ve R'nin ikisi de ıslak kumdadır, ikisinde de 2 blok vardır, yalnızca yüzey farklıdır; uygundur. R ve S'de yalnızca zemin, R ve T'de yalnızca blok sayısı farklıdır. S ve U'da ise hem blok sayısı hem yüzey farklıdır.
Sağlama: P ve R karşılaştırılırsa dar yüzeyi üzerindeki bloklar (R) daha derin iz bırakır ve bu fark yalnızca yüzeyden kaynaklanır.
Cevap A.`
},
{
  id: "fen-kb-318",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Irmak, katı basıncını incelemek için gövdeleri özdeş oyuncak figürler kullanmıştır. Figürlerin ayaklarına küçük ya da büyük plastik pabuçlar takmış, içlerine de özdeş bilyeler koymuştur. Her denemede figürü aynı süngerin üzerine koymuş, bir dakika bekleyip süngerin ne kadar çöktüğünü ölçmüştür. Dört denemenin sonuçları aşağıdaki tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Deneme</th><th>Ayaklardaki pabuçlar</th><th>Figürdeki bilye sayısı</th><th>Süngerin çökmesi</th></tr><tr><td>1. deneme</td><td>Küçük</td><td>4</td><td>2,4 cm</td></tr><tr><td>2. deneme</td><td>Büyük</td><td>4</td><td>1,0 cm</td></tr><tr><td>3. deneme</td><td>Büyük</td><td>2</td><td>0,6 cm</td></tr><tr><td>4. deneme</td><td>Büyük</td><td>6</td><td>1,5 cm</td></tr></table>`,
  secenekler: [
    "1. ve 2. denemeler karşılaştırıldığında bilye sayısı bağımsız değişkendir.",
    "2., 3. ve 4. denemeler karşılaştırıldığında pabuç büyüklüğü kontrol değişkenidir.",
    "1. ve 4. denemeler karşılaştırıldığında pabuç büyüklüğü kontrol değişkenidir.",
    "Küçük pabuçlu figüre 2 bilye konsaydı sünger kesinlikle 1,0 cm'den az çökerdi."
  ],
  dogru: 1,
  hatalar: [
    "Değişken türlerini karıştırma: 1. ve 2. denemelerde bilye sayısı aynıdır (4), yani sabit tutulan kontrol değişkenidir; bu iki denemede değiştirilen, pabuç büyüklüğüdür.",
    null,
    "Başka neyin farklı olduğunu denetlememe: 1. ve 4. denemelerde bilye sayısıyla birlikte pabuçlar da değişmiştir (küçük ve büyük); pabuç büyüklüğü bu çiftte sabit tutulmamıştır.",
    "Ters yönde etki eden iki değişikliği kesin sonuç sanma: 2. denemeye göre küçük pabuç basıncı artırır, bilye sayısının 4'ten 2'ye inmesi ise azaltır; çökmenin 1,0 cm'den az olacağı kesin söylenemez."
  ],
  aciklama: `Bir karşılaştırmada değiştirilen şey bağımsız değişken, ölçülen sonuç bağımlı değişken, sabit tutulan şeyler kontrol değişkenidir. Aynı deneyde bir değişkenin rolü, hangi denemeleri karşılaştırdığına göre değişebilir.
Adım 1 (A): 1. ve 2. denemelerde bilye sayısı 4'tür; pabuçlar küçükten büyüğe değişmiştir. Bu çiftte bilye sayısı kontrol, pabuç büyüklüğü bağımsız değişkendir. A yanlıştır.
Adım 2 (B): 2., 3. ve 4. denemelerin hepsinde pabuçlar büyüktür; değişen tek şey bilye sayısıdır (4, 2 ve 6). Bu üç denemede pabuç büyüklüğü kontrol değişkenidir. B doğrudur.
Adım 3 (C): 1. ve 4. denemelerde bilye sayısı 4'ten 6'ya çıkmış, pabuçlar da küçükten büyüğe değişmiştir. İki değişken birden farklıdır; pabuç büyüklüğü bu çiftte kontrol değişkeni olamaz. C yanlıştır.
Adım 4 (D): Küçük pabuçlu, 2 bilyeli figürü 2. denemeyle karşılaştır. Küçük pabuç basıncı artırır, daha az bilye basıncı azaltır. İki değişiklik ters yönde etki ettiği için çökmenin 1,0 cm'den az olacağı kesin değildir. 3. denemeyle karşılaştırınca ise yalnızca pabuç küçülmüştür; çökme 0,6 cm'den fazla olur. D yanlıştır.
Sık yapılan hata: Bir değişkenin rolünü bütün deney için tek sanmak. Önce hangi denemelerin karşılaştırıldığına bak, sonra her değişken için "Bu denemelerde aynı mı, farklı mı?" diye sor.
Cevap B.`
},
{
  id: "fen-kb-319",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Ahşap oymacılığı yapan Usta Cemil, keskinin geniş ve düz sapının ucuna tahta bir tokmakla vurarak keskinin ince ağzını tahtaya batırmaktadır. Keski, sapına uygulanan kuvveti azaltmadan ağzına iletmektedir. Usta Cemil, tokmağın vurduğu sap ucunun zarar görmediğini, keskinin ağzının ise tahtayı kolayca oyduğunu anlatmıştır. Ardından ağzı körelmiş eski bir keskiyle de aynı işi yapmaya çalışmıştır.
I. Keskinin ağzının tahtaya uyguladığı basınç, tokmağın sap ucuna uyguladığı basınçtan büyüktür.
II. Keskinin ağzı bilenirse, aynı kuvvetle vurulduğunda tahtaya uygulanan basınç artar.
III. Ağzı körelmiş keskiyle aynı oyuğu açmak için tokmakla daha küçük bir kuvvetle vurmak yeterlidir.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 3,
  hatalar: [
    "II'yi gözden kaçırma: keskinin ağzı bilenince tahtaya değen yüzey küçülür; aynı kuvvetle vurulduğunda basınç artar.",
    "I'i gözden kaçırma: aynı kuvvet sap ucunda geniş bir yüzeye, ağızda çok ince bir yüzeye etki eder; ağızdaki basınç çok daha büyüktür.",
    "Alan ile basınç ilişkisini ters kurma: körelmiş ağız tahtaya daha geniş bir yüzeyle değer; aynı oyuğu açmak için daha küçük değil, daha büyük kuvvet gerekir.",
    null
  ],
  aciklama: `Keski, aynı kuvveti iki farklı yüzeye iletir: tokmağın vurduğu geniş sap ucuna ve tahtaya değen ince ağza. Kuvvet aynı olduğu için basıncı belirleyen şey yüzeylerin büyüklüğüdür.
Adım 1 (I): Sap ucu geniş, keskinin ağzı çok incedir. Aynı kuvvet ince ağızda çok daha büyük bir basınç oluşturur. Sap ucu bu yüzden zarar görmez, ağız ise tahtayı oyar. I doğrudur.
Adım 2 (II): Keskinin ağzı bilenirse tahtaya değen yüzey küçülür; aynı kuvvetle vurulduğunda basınç artar. II doğrudur.
Adım 3 (III): Körelmiş ağız tahtaya daha geniş bir yüzeyle değer. Aynı kuvvetle vurulursa basınç küçülür ve ağız tahtaya zor girer. Aynı oyuğu açmak için daha büyük bir kuvvet gerekir. III yanlıştır.
Adım 4: Kesinlikle doğru olanlar I ve II'dir.
Sık yapılan hata: Keskinin kuvveti "büyüttüğünü" sanmak. Keski kuvveti büyütmez; aynı kuvveti ince bir ağza toplayarak basıncı büyütür.
Cevap D.`
},
{
  id: "fen-kb-320",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilim merkezinde, sivri uçları yukarı bakan binlerce çividen oluşan bir "çivi yatağı" sergilenmektedir. Çivilerin boyları eşittir ve uçları birbirine çok yakındır. Görevli, tek bir çivinin ucuna parmakla bastırmanın acı verdiğini, ama ziyaretçilerin görevli gözetiminde bu yatağa sırtüstü uzanabildiğini ve canlarının yanmadığını anlatmıştır.
I. Ziyaretçinin çivi yatağına uyguladığı toplam kuvvet, ayakta dururken yere uyguladığı kuvvetten küçüktür.
II. Ziyaretçinin ağırlığı çok sayıda çiviye paylaştırıldığı için vücudun çivilere değen bölümlerine uygulanan basınç küçüktür.
III. Çiviler seyrekleştirilip ziyaretçinin vücuduna değen çivi sayısı azaltılırsa, vücudun çivilere değen bölümlerine uygulanan basınç artar.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "Basınç ile kuvveti karıştırma: ziyaretçinin çivilere uyguladığı toplam kuvvet ağırlığıdır ve ayakta dururken yere uyguladığı kuvvete eşittir; küçülen, basınçtır.",
    "III'ü gözden kaçırma: vücuda değen çivi sayısı azalırsa aynı ağırlık daha az sayıda çivinin ucuna, yani daha küçük bir toplam yüzeye biner; basınç artar.",
    "Kuvvet ile basıncı karıştırma: I yanlıştır, çünkü toplam kuvvet ziyaretçinin ağırlığıdır ve değişmez. Ayrıca vücuda değen çivi sayısı azalırsa basınç artar; III doğrudur.",
    null
  ],
  aciklama: `Tek bir sivri çivinin ucu çok küçüktür; ona bastırılan kuvvet çok küçük bir yüzeye toplanır ve basınç çok büyük olur. Çivi yatağında ise ağırlık binlerce çivinin ucuna paylaştırılır.
Adım 1 (I): Ziyaretçinin çivi yatağına uyguladığı toplam kuvvet, onun ağırlığıdır. Ayakta dururken de yere ağırlığı kadar kuvvet uygular. Kuvvetler eşittir. I yanlıştır.
Adım 2 (II): Binlerce çivinin uçlarının toplam yüzeyi, tek bir çivinin ucundan çok büyüktür. Ağırlık bu geniş toplam yüzeye yayıldığı için vücudun çivilere değen bölümlerine düşen basınç küçüktür. II doğrudur.
Adım 3 (III): Çiviler seyrekleştirilip vücuda değen çivi sayısı azaltılırsa, aynı ağırlık daha az çivinin ucuna, yani daha küçük bir toplam yüzeye biner. Basınç artar. III kesinlikle doğrudur. Burada önemli olan, yataktaki toplam çivi sayısı değil vücuda değen çivi sayısıdır: yalnızca vücudun hiç değmediği kenarlardaki çiviler sökülseydi basınç değişmezdi.
Adım 4: Kesinlikle doğru olanlar II ve III'tür.
Sık yapılan hata: Çivi yatağının kişiyi "hafiflettiğini" sanmak. Ağırlık değişmez; çok sayıda çivi bu ağırlığı daha geniş bir toplam yüzeye dağıtır.
Cevap D.`
},
{
  id: "fen-kb-321",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Mobil vinçler, yük kaldırırken devrilmemek için yanlara açılan destek ayaklarına basar. Bir şantiyede, destek ayaklarının altına konan pabuçların etkisi yumuşak toprak üzerinde denenmiş ve her durumda destek ayaklarının toprakta bıraktığı izlerin derinliği ölçülmüştür. 2. ve 3. durumlarda vincin kaldırdığı beton blok aynıdır.
I. 1. ve 2. durumların karşılaştırılması, ağırlık arttıkça basıncın arttığını gösterir.
II. 2. ve 3. durumların karşılaştırılması, temas yüzeyi arttıkça basıncın azaldığını gösterir.
III. 1. ve 3. durumların karşılaştırılması, temas yüzeyinin basınca etkisini tek başına gösterir.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Durum</th><th>Vincin kaldırdığı yük</th><th>Destek ayağının altındaki pabuç</th><th>İz derinliği</th></tr><tr><td>1. durum</td><td>Yük yok</td><td>Küçük pabuç</td><td>2 cm</td></tr><tr><td>2. durum</td><td>Beton blok</td><td>Küçük pabuç</td><td>5 cm</td></tr><tr><td>3. durum</td><td>Beton blok</td><td>Büyük pabuç</td><td>1 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: 2. ve 3. durumlarda yük aynıdır, yalnızca pabuç büyümüştür; iz 5 cm'den 1 cm'ye indiğine göre temas yüzeyi arttıkça basınç azalmıştır.",
    "İki değişkenin birlikte değiştiğini görmeme: 1. ve 3. durumlarda hem yük hem pabuç farklıdır; izdeki fark tek başına temas yüzeyine bağlanamaz. Ayrıca I ve II doğrudur.",
    null,
    "I'i gözden kaçırıp III'ü doğru sayma: 1. ve 2. durumlarda pabuç aynı, yük farklıdır, yani I doğrudur; 1. ve 3. durumlarda ise iki değişken birden değişmiştir."
  ],
  aciklama: `Bir karşılaştırmadan bir değişkenin etkisi hakkında sonuç çıkarmak için iki durum arasında yalnızca o değişkenin farklı olması gerekir.
Adım 1 (I): 1. ve 2. durumlarda pabuç aynıdır (küçük). Değişen tek şey yüktür; vinç yük kaldırınca destek ayaklarına binen ağırlık artar. İz 2 cm'den 5 cm'ye derinleşmiştir. Ağırlık arttıkça basınç artmıştır. I doğrudur.
Adım 2 (II): 2. ve 3. durumlarda yük aynıdır. Değişen tek şey pabucun büyüklüğüdür. İz 5 cm'den 1 cm'ye inmiştir. Temas yüzeyi arttıkça basınç azalmıştır. II doğrudur.
Adım 3 (III): 1. ve 3. durumlar arasında hem yük hem pabuç farklıdır. İzdeki farkın bu iki değişkenden hangisinden kaynaklandığı ayırt edilemez. III yanlıştır.
Adım 4: Kesinlikle doğru olanlar I ve II'dir.
Sık yapılan hata: Sonucu uyumlu görünen her iki durumu karşılaştırmaya uygun saymak. Önce iki durum arasında kaç şeyin farklı olduğunu say; birden fazlaysa o karşılaştırmadan kesin sonuç çıkmaz.
Cevap C.`
},
{
  id: "fen-kb-322",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Kaybolan bir yürüyüşçüyü arayan bir iz takip ekibi, ormanda iki ayrı noktada aynı numara ve aynı taban desenine sahip bot izleri bulmuştur. Birinci iz, yağmurla yumuşamış çamurlu bir düzlükte 3 cm derinliğindedir. İkinci iz ise sıkışmış toprak bir patikada yalnızca 0,5 cm derinliğindedir. Ekipten Onur, "İzlerin derinliği çok farklı; öyleyse bu izler ağırlıkları farklı iki ayrı kişiye ait olmalı." demiştir. Ekip, aramayı iki gruba bölmeden önce Onur'un bu sonucunu sınamak istemektedir.
**Buna göre ekip, Onur'un sonucunu sınamak için aşağıdakilerden hangisini yapmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Bir ekip üyesini aynı model botlarla çamurda ve patikada yürütüp iz derinliklerini karşılaştırmak",
    "Bulunan iki izin uzunluğunu ve genişliğini ölçüp izlerin temas yüzeylerini karşılaştırmak",
    "Çamurdaki izin derinliğini farklı noktalarından birkaç kez daha ölçüp ortalamasını almak",
    "Ağırlıkları farklı iki ekip üyesini aynı model botlarla patikada yürütüp iz derinliklerini karşılaştırmak"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış değişkene odaklanma: iki iz aynı numara ve aynı desenli botlara aittir, temas yüzeyleri zaten aynıdır. Bu ölçüm, izleri farklı kılabilecek öteki etkeni, yani zemin farkını ortaya koymaz.",
    "Sorunu ölçüm hassasiyetinde sanma: tek bir izi tekrar tekrar ölçmek ölçümü güvenilir kılar, ama iki izin farklı zeminlerde olmasının etkisini ortadan kaldırmaz.",
    "Başka bir soruyu sınama: bu deney aynı zeminde ağırlığın iz derinliğine etkisini gösterir; ama çamur ile patika arasındaki farkın izi ne kadar değiştirdiğini göstermez. Onur'un sonucu tam da bu farkı yok saymaktadır."
  ],
  aciklama: `Aynı botla bırakılan izlerde temas yüzeyi aynıdır. Aynı zeminde daha derin iz daha büyük basınç, yani daha ağır bir kişi demektir. Ama iki iz farklı zeminlerdeyse derinlik farkı zeminin yumuşaklığından da kaynaklanabilir.
Adım 1: İki iz aynı numara ve aynı desenli botlara aittir; temas yüzeyleri aynıdır. Temas yüzeyini yeniden ölçmek yeni bir bilgi vermez (B).
Adım 2: İzlerden biri yumuşak çamurda, öteki sıkışmış patikadadır. Onur, zemin farkını hesaba katmadan derinlik farkını ağırlık farkına bağlamıştır. Sınanması gereken, zeminin tek başına izi ne kadar değiştirdiğidir.
Adım 3: Bunun için ağırlık ve bot aynı tutulup yalnızca zemin değiştirilmelidir: aynı kişi, aynı model botlarla hem çamurda hem patikada yürütülür. Bu kişinin izleri de çamurda derin, patikada sığ çıkarsa bulunan izlerdeki fark zeminle açıklanabilir ve Onur'un sonucu desteklenmez (A).
Adım 4: Öteki seçenekleri denetle. İki farklı kişiyi yalnızca patikada yürütmek, aynı zeminde ağırlığın etkisini gösterir ama zemin farkını sınamaz (D). Tek izi tekrar ölçmek de zemin farkını ortadan kaldırmaz (C).
Sık yapılan hata: İz derinliğini her koşulda ağırlığın ölçüsü saymak. İz derinlikleri ancak zemin aynıyken ağırlığı karşılaştırmaya yarar; bu yüzden deneylerde zemin bir kontrol değişkenidir.
Cevap A.`
},
{
  id: "fen-kb-323",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Can, kum havuzunda iki etkinlik yapmış ve sonuçları aşağıdaki tabloya yazmıştır. Şişelerin kapakları tabanlarından çok daha küçüktür.
1. etkinlik: Suyla dolu, ağzı kapalı bir plastik şişeyi önce tabanı üzerinde, sonra ters çevirip kapağı üzerinde kuma koymuştur.
2. etkinlik: Özdeş iki şişeden birini ağzına kadar, diğerini yarısına kadar suyla doldurup ikisini de tabanları üzerinde kuma koymuştur.
I. 1. etkinlikte şişe ters çevrildiğinde kuma uyguladığı kuvvet artmıştır.
II. 2. etkinlik, ağırlığın basınca etkisini göstermektedir.
III. Yarısına kadar dolu şişe ters çevrilip kapağı üzerinde kuma konsaydı, 2,5 cm'den daha derin iz bırakırdı.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Etkinlik</th><th>Şişe</th><th>Kuma değen yüzey</th><th>İz derinliği</th></tr><tr><td>1. etkinlik</td><td>Dolu şişe</td><td>Taban</td><td>0,5 cm</td></tr><tr><td>1. etkinlik</td><td>Dolu şişe</td><td>Kapak</td><td>2,5 cm</td></tr><tr><td>2. etkinlik</td><td>Dolu şişe</td><td>Taban</td><td>0,5 cm</td></tr><tr><td>2. etkinlik</td><td>Yarısı dolu şişe</td><td>Taban</td><td>0,3 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: şişe ters çevrilince ağırlığı değişmez; kuma uyguladığı kuvvet aynı kalır, artan basınçtır. II ise doğrudur.",
    null,
    "İki yanılgı birden: ters çevirmek kuvveti değiştirmez; yarısı dolu şişe dolu şişeden hafif olduğu için kapağı üzerinde daha sığ iz bırakır.",
    "İki etkinliği birleştirirken ağırlığı gözden kaçırma: yarısı dolu şişe kapağı üzerindeyken temas yüzeyi dolu şişeninkiyle aynıdır ama ağırlığı daha azdır; izi 2,5 cm'den derin değil, sığ olur."
  ],
  aciklama: `İki etkinliği önce ayrı ayrı çözümle, sonra birleştir. Her etkinlikte neyin değiştiğine, neyin aynı kaldığına bak.
Adım 1 (I): 1. etkinlikte aynı şişe kullanılmıştır. Şişe ters çevrilince ağırlığı değişmez; kuma uyguladığı kuvvet aynı kalır. Değişen, kuma değen yüzeydir (taban yerine küçük kapak). I yanlıştır.
Adım 2 (II): 2. etkinlikte şişeler özdeştir ve ikisi de tabanı üzerindedir; temas yüzeyi aynıdır. Değişen tek şey içindeki su miktarı, yani ağırlıktır. Ağır olan şişe daha derin iz bırakmıştır. II doğrudur.
Adım 3 (III): Yarısı dolu şişe kapağı üzerine konursa temas yüzeyi, dolu şişenin kapağı üzerindeki durumuyla aynı olur. Ama yarısı dolu şişe daha hafiftir; basıncı daha küçük olur ve 2,5 cm'den daha sığ iz bırakır. III yanlıştır.
Adım 4: Kesinlikle doğru olan yalnız II'dir.
Sık yapılan hata: Kapağın küçük olduğunu görüp "kapağı üzerinde duran her şişe en derin izi bırakır." demek. Temas yüzeyi aynıyken hafif olan cisim daha sığ iz bırakır.
Cevap B.`
},
{
  id: "fen-kb-324",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kayak merkezinde pistleri düzleştiren kar ezme aracının altında, kara değen geniş paletler vardır. Merkez yönetimi, gece çalışmaları için aracın tavanına ağır bir aydınlatma direği ve bir jeneratör takılmasına karar vermiştir. Bu donanım aracın ağırlığını artıracak ama kara değmeyecektir. Yönetim, donanım takıldıktan sonra aracın kara uyguladığı basıncın şimdikinden büyük olmamasını, böylece aracın yumuşak kara gömülmemesini istemekte ve mühendislerden bu isteği karşılayacak bir değişiklik önermelerini beklemektedir.
**Buna göre yönetimin isteğinin karşılanması için aşağıdakilerden hangisi kesinlikle yapılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Paletlerin kara değen yüzeyi aynı bırakılmalıdır.",
    "Paletlerin kara değen yüzeyi küçültülmelidir.",
    "Paletlerin kara değen yüzeyi büyütülmelidir.",
    "Donanım, aracın tavanı yerine arka tarafına takılmalıdır."
  ],
  dogru: 2,
  hatalar: [
    "Sınır durumunu gözden kaçırma: ağırlık artarken temas yüzeyi aynı kalırsa basınç artar; bu, yönetimin isteğine aykırıdır.",
    "Alan ile basınç ilişkisini ters kurma: yüzey küçülürse artan ağırlıkla birlikte basınç daha da büyür.",
    null,
    "Ağırlığın takıldığı yerin toplam kuvveti değiştirdiğini sanma: donanım nereye takılırsa takılsın aracın kara uyguladığı toplam kuvvet aynı miktarda artar; basıncın artmaması için temas yüzeyi büyümelidir."
  ],
  aciklama: `Basınç, kuvvet artınca artar; temas yüzeyi büyüyünce azalır. Kuvvet artacaksa basıncın artmaması için temas yüzeyinin büyümesi gerekir.
Adım 1: Donanım takılınca aracın ağırlığı, yani kara uyguladığı kuvvet artacaktır. Donanım kara değmediği için yeni bir temas yüzeyi oluşturmaz.
Adım 2: Paletlerin yüzeyi aynı kalırsa artan kuvvet aynı yüzeye biner ve basınç artar. Yüzey küçülürse basınç daha da artar.
Adım 3: Basıncın şimdikinden büyük olmaması için artan kuvvetin daha geniş bir yüzeye yayılması gerekir. Paletlerin kara değen yüzeyi kesinlikle büyütülmelidir.
Sağlama: Donanımın aracın tavanına ya da arkasına takılması toplam ağırlığı değiştirmez; bu yüzden donanımın yerini değiştirmek isteği karşılamaz.
Cevap C.`
},
{
  id: "fen-kb-325",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir malzeme laboratuvarında aynı boyutlarda, farklı malzemelerden yapılmış iki blok (X ve Y) incelenmiştir. İki blok da dikdörtgenler prizması biçimindedir ve yüzeylerinin alanları 2, 4 ve 8 birim karedir. Teknisyen, her bloğu aynı kum havuzuna bu üç yüzeyi üzerinde sırayla koymuş ve kumda kalan izlerin derinliğini aşağıdaki tabloya yazmıştır.
I. X ile Y'nin ağırlıkları birbirine eşittir.
II. Y, 2 birim karelik yüzeyi üzerindeyken kuma, X'in 4 birim karelik yüzeyi üzerindeyken uyguladığından daha küçük basınç uygular.
III. Y'nin ağırlığı artırılmadıkça Y, X'in bıraktığı en sığ izden daha derin bir iz bırakamaz.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kuma değen yüzey</th><th>X'in izi</th><th>Y'nin izi</th></tr><tr><td>2 birim kare</td><td>6,0 cm</td><td>2,4 cm</td></tr><tr><td>4 birim kare</td><td>3,2 cm</td><td>1,2 cm</td></tr><tr><td>8 birim kare</td><td>1,5 cm</td><td>0,6 cm</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Tabloyu eksik okuma: Y, 2 birim karelik yüzeyi üzerinde 2,4 cm iz bırakmıştır; bu iz X'in en sığ izinden (1,5 cm) derindir. III yanlış, II ise doğrudur.",
    "Aynı yüzeydeki iz farkını görmeme: X ile Y aynı büyüklükteki yüzeyleri üzerindeyken X her seferinde daha derin iz bırakmıştır; yüzeyler aynıyken bu fark ancak X'in daha ağır olmasıyla açıklanır.",
    "Basıncın yalnızca ağırlıkla değiştirilebileceğini sanma: Y'nin yüzeyi küçültülünce de basıncı artar; Y'nin 2 birim karelik yüzeyi üzerindeki 2,4 cm'lik izi X'in en sığ izinden (1,5 cm) derindir."
  ],
  aciklama: `Aynı kum havuzunda iz derinliği basıncı gösterir. Aynı yüzey alanında daha derin iz bırakan cisim daha ağırdır; aynı cisim ise yüzeyi küçüldükçe daha derin iz bırakır.
Adım 1 (I): 2 birim karelik yüzeyleri üzerindeyken X 6,0 cm, Y 2,4 cm iz bırakmıştır. Temas alanı aynıyken X'in izi daha derindir; X daha ağırdır. Öteki satırlar da bunu doğrular. I yanlıştır.
Adım 2 (II): Y'nin 2 birim karelik yüzeyi üzerindeki izi 2,4 cm, X'in 4 birim karelik yüzeyi üzerindeki izi 3,2 cm'dir. Aynı kumda daha sığ iz daha küçük basınç demektir. Y daha küçük bir yüzey üzerinde dursa da X'ten hafif olduğu için basıncı daha küçük kalmıştır. II doğrudur.
Adım 3 (III): X'in en sığ izi 1,5 cm'dir. Y ise ağırlığı değişmeden, 2 birim karelik yüzeyi üzerinde 2,4 cm iz bırakmıştır. Yani Y, yalnızca yüzeyi değiştirilerek X'in en sığ izinden daha derin iz bırakabilir. III yanlıştır.
Adım 4: Kesinlikle doğru olan yalnız II'dir.
Sık yapılan hata: Basıncı artırmanın tek yolunun ağırlığı artırmak olduğunu sanmak. Temas yüzeyini küçültmek de basıncı artırır.
Cevap A.`
}
);

/* ===================== HAVUZ ===================== */
(window.LGS_BANK["kati-basinci"] = window.LGS_BANK["kati-basinci"] || []).push(
{
  id: "fen-kb-001",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Düz bir balkon zemininde duran bir saksı için aşağıdaki değişiklikler düşünülmüştür.\n**Bu değişikliklerden hangisi yapılırsa saksının zemine uyguladığı basınç __değişmez__?**",
  gorsel: null,
  secenekler: [
    "Saksıdaki toprağın iyice sulanması",
    "Saksının aynı tabanıyla başka köşeye taşınması",
    "Saksıdaki toprağın bir kısmının boşaltılması",
    "Saksının altına üç küçük ayak takılması"
  ],
  dogru: 1,
  hatalar: [
    "Ağırlığın etkisini görmeme: toprak suyu emer ve saksı ağırlaşır; zemine uygulanan kuvvet artar, temas yüzeyi aynıyken basınç artar.",
    null,
    "Ağırlığın etkisini görmeme: toprak azalınca saksı hafifler; zemine uygulanan kuvvet azalır, temas yüzeyi aynıyken basınç azalır.",
    "Temas yüzeyinin etkisini görmeme: ayaklar saksıyı zemine yalnızca üç küçük noktada değdirir; temas yüzeyi küçülür, basınç artar."
  ],
  aciklama: `Katı basıncı iki değişkene bağlıdır: cismin yüzeye dik uyguladığı kuvvet (ağırlık) ve yüzeye temas eden alan. Bu ikisinden biri değişirse basınç da değişir.
Adım 1: Sulamak saksının ağırlığını artırır, toprak boşaltmak azaltır; ikisi de kuvveti değiştirir. Üç küçük ayak takmak ise temas alanını küçültür. Bu üç değişiklik basıncı değiştirir.
Adım 2: Saksıyı aynı tabanıyla aynı düz zeminde başka bir köşeye taşımak ne ağırlığı ne de temas alanını değiştirir. Basınç değişmez.
Sık yapılan hata: Saksının yerini basıncı etkileyen bir değişken sanmak. Aynı düz zeminde saksının nerede durduğu değil, ne kadar ağır olduğu ve zemine ne kadar geniş bir yüzeyle değdiği önemlidir.
Cevap B.`
},
{
  id: "fen-kb-002",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki uygulamalardan hangisi amacıyla doğru eşleştirilmiştir?**",
  gorsel: null,
  secenekler: [
    "Kar botunun tabanını genişletmek – basıncı artırmak",
    "Makasın ağızlarını bilemek – basıncı azaltmak",
    "Traktöre geniş palet takmak – basıncı artırmak",
    "Kazığın ucunu sivriltmek – basıncı artırmak"
  ],
  dogru: 3,
  hatalar: [
    "Amacı ters değerlendirme: geniş taban temas yüzeyini büyütür, basıncı azaltır; kişinin kara gömülmesini önler.",
    "Amacı ters değerlendirme: bilenen ağız kesilen cisme daha küçük bir yüzeyle değer; basınç azalmaz, artar.",
    "Amacı ters değerlendirme: palet, traktörün ağırlığını geniş bir yüzeye yayar ve basıncı azaltır.",
    null
  ],
  aciklama: `Basıncı artırmak için temas yüzeyi küçültülür; basıncı azaltmak için temas yüzeyi büyütülür.
Adım 1: Tabanı genişletilen kar botu ve geniş palet temas yüzeyini büyütür; amaçları basıncı azaltmaktır. Bu iki eşleştirme yanlıştır.
Adım 2: Makasın ağzını bilemek temas yüzeyini küçültür; amaç basıncı artırmaktır. Bu eşleştirme de yanlıştır.
Adım 3: Kazığın ucu sivriltilince toprağa değen yüzey küçülür, basınç artar ve kazık toprağa kolay girer. Doğru eşleştirme budur.
Cevap D.`
},
{
  id: "fen-kb-003",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Kutup ayılarının pençeleri çok geniştir. Bu özellik, karla kaplı zeminde yürürken onlara yarar sağlar.\n**Buna göre geniş pençelerin kutup ayısına sağladığı yarar aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kara uyguladığı kuvveti azaltarak batmasını önler.",
    "Kara uyguladığı basıncı artırarak kaymasını önler.",
    "Kara uyguladığı basıncı azaltarak batmasını önler.",
    "Kara değen yüzeyi küçülterek batmasını önler."
  ],
  dogru: 2,
  hatalar: [
    "Basınç ile kuvveti karıştırma: geniş pençe ayının ağırlığını, yani kara uyguladığı kuvveti değiştirmez; azalttığı şey basınçtır.",
    "Alan ile basınç ilişkisini ters kurma: geniş pençe kara değen yüzeyi büyütür; basıncı artırmaz, azaltır.",
    null,
    "Alan ile basınç ilişkisini ters kurma: geniş pençe kara değen yüzeyi küçültmez, büyütür."
  ],
  aciklama: `Aynı ağırlık daha geniş bir yüzeye yayılırsa basınç azalır.
Adım 1: Kutup ayısının ağırlığı pençelerinin büyüklüğüyle değişmez; kara uyguladığı kuvvet aynıdır.
Adım 2: Geniş pençeler kara daha büyük bir yüzeyle değer. Aynı ağırlık geniş yüzeye yayılınca kara uygulanan basınç azalır.
Adım 3: Basınç azalınca ayı kara daha az gömülür ve karda rahat yürür.
Sağlama: Karda yürüyen insanların geniş tabanlı kar ayakkabısı kullanması da aynı ilkeye dayanır.
Cevap C.`
},
{
  id: "fen-kb-004",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Kumsalda yürüyüş yapan Aras, önce sırtında hiçbir yük olmadan, sonra içi dolu ağır bir sırt çantası takarak aynı kumda yürümüştür. Aras iki yürüyüşte de aynı ayakkabıları giymiştir. Çantayla yürürken ayak izlerinin daha derin olduğunu fark etmiştir.
**Buna göre izlerin derinleşmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çanta, Aras'ın kuma uyguladığı kuvveti artırmıştır.",
    "Çanta, Aras'ın ayaklarının kuma değen yüzeyini küçültmüştür.",
    "Çanta, Aras'ın kuma uyguladığı basıncı azaltmıştır.",
    "Çanta, Aras'ın ayaklarının kuma değen yüzeyini büyütmüştür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Temas yüzeyinin değiştiğini sanma: Aras aynı ayakkabıları giymiştir; ayaklarının kuma değen yüzeyi değişmemiştir.",
    "Ters yön: izlerin derinleşmesi basıncın azaldığını değil, arttığını gösterir.",
    "Temas yüzeyinin değiştiğini sanma: ayakkabılar aynıdır; ayrıca yüzey büyüseydi izler derinleşmez, sığlaşırdı."
  ],
  aciklama: `Temas yüzeyi aynıyken zemine uygulanan kuvvet artarsa basınç da artar.
Adım 1: Aras iki yürüyüşte de aynı ayakkabıları giymiştir; ayaklarının kuma değen yüzeyi aynıdır.
Adım 2: Çanta takılınca Aras'ın kuma uyguladığı kuvvet, kendi ağırlığı ile çantanın ağırlığının toplamı olur; kuvvet artar.
Adım 3: Yüzey aynıyken kuvvet artınca basınç artar ve izler derinleşir.
Sık yapılan hata: İzin derinleşmesini yalnızca temas yüzeyiyle açıklamaya çalışmak. Basınç, ağırlık artınca da artar.
Cevap A.`
},
{
  id: "fen-kb-005",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Teknoloji ve tasarım dersinde öğrenciler, günlük eşyalarda yapılabilecek değişiklikleri ve bu değişikliklerin basıncı nasıl etkileyeceğine dair tahminlerini aşağıdaki gibi yazmıştır.
**Buna göre öğrencilerin tahminlerinden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Ekmek bıçağını bilemek – ekmeğe uygulanan basınç artar",
    "Bebek arabasının tekerleklerini genişletmek – kuma uygulanan basınç azalır",
    "Valizin tekerleklerini inceltmek – zemine uygulanan basınç azalır",
    "Zımba telinin uçlarını sivriltmek – kâğıda uygulanan basınç artar"
  ],
  dogru: 2,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: bilenen bıçağın ağzı ekmeğe daha küçük bir yüzeyle değer ve basınç artar; bu tahmin doğrudur.",
    "Alan ile basınç ilişkisini ters kurma: genişletilen tekerlekler ağırlığı daha geniş bir yüzeye yayar ve basınç azalır; bu tahmin doğrudur.",
    null,
    "Alan ile basınç ilişkisini ters kurma: sivri uçlar kâğıda daha küçük bir yüzeyle değer ve basınç artar; bu tahmin doğrudur."
  ],
  aciklama: `Temas yüzeyi küçülürse basınç artar, büyürse basınç azalır. Her tahmini bu kurala göre denetle.
Adım 1: Bıçağı bilemek ve zımba telinin uçlarını sivriltmek temas yüzeyini küçültür; basınç artar. Bu iki tahmin doğrudur.
Adım 2: Bebek arabasının tekerleklerini genişletmek temas yüzeyini büyütür; basınç azalır. Bu tahmin de doğrudur.
Adım 3: Valizin tekerleklerini inceltmek, tekerleklerin zemine değen yüzeyini küçültür. Valizin ağırlığı neredeyse aynı kaldığı için basınç azalmaz, artar. Bu tahmin yanlıştır.
Sık yapılan hata: "İnce tekerlek daha hafiftir, öyleyse basınç azalır." diye düşünmek. Tekerleklerin inceltilmesi valizin ağırlığını pek değiştirmez; temas yüzeyini küçülttüğü için basıncı artırır.
Cevap C.`
},
{
  id: "fen-kb-006",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Mangal hazırlayan Ahmet Bey, et parçalarını şişe geçirirken ucu sivri metal şişin, ucu küt olan tahta çubuğa göre etlere çok daha kolay girdiğini fark etmiştir. Ahmet Bey iki çubuğu da etlere aynı kuvvetle itmektedir.
I. Sivri uç, şişin ete temas eden yüzey alanını küçültür.
II. Sivri uçlu şiş, Ahmet Bey'in uyguladığı kuvveti artırır.
III. Aynı kuvvetle itildiğinde sivri şişin ete uyguladığı basınç daha büyüktür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: temas yüzeyi küçülünce aynı kuvvet daha büyük basınç oluşturur; sivri şişin ete kolay girmesinin nedeni budur.",
    "Basınç ile kuvveti karıştırma: şişin ucu kuvveti artırmaz; kuvveti Ahmet Bey uygular. Sivri uç yalnızca basıncı artırır.",
    "Basınç ile kuvveti karıştırma: iki çubuk aynı kuvvetle itilmiştir; sivri uçta artan kuvvet değil basınçtır. III ise doğrudur.",
    null
  ],
  aciklama: `Şişin ucu, elin uyguladığı kuvveti ete iletir. Uç ne kadar sivriyse bu kuvvet o kadar küçük bir yüzeye etki eder.
Adım 1 (I): Sivri uç ete çok küçük bir yüzeyle değer. I doğrudur.
Adım 2 (II): Kuvveti Ahmet Bey eliyle uygular; iki çubuk da aynı kuvvetle itilmiştir. Şişin ucu kuvveti artırmaz. II yanlıştır.
Adım 3 (III): Aynı kuvvet daha küçük bir yüzeye etki edince basınç büyür. Sivri şiş bu yüzden ete kolay girer. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sık yapılan hata: "Sivri şiş daha güçlü iter." demek. Sivri uç kuvveti değil, basıncı artırır.
Cevap D.`
},
{
  id: "fen-kb-007",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Selin, özdeş ve dolu iki süt kutusundan birini ıslak kuma en geniş yüzeyi üzerine yatırarak, diğerini aynı kuma en dar yüzeyi üzerine dikerek koymuştur. Ardından kutuların kumda bıraktığı izlerin derinliğini ölçmüştür.
**Buna göre Selin'in bu deneyde değiştirdiği (bağımsız) değişken aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kutuların ağırlığı",
    "Kutuların kuma değen yüzey alanı",
    "Kutuların kumda bıraktığı izin derinliği",
    "Kutuların konduğu zeminin türü"
  ],
  dogru: 1,
  hatalar: [
    "Kontrol değişkenini bağımsız sanma: kutular özdeş ve dolu olduğu için ağırlıkları aynıdır; ağırlık sabit tutulmuştur.",
    null,
    "Bağımlı değişkeni bağımsız sanma: iz derinliği Selin'in ölçtüğü sonuçtur, yani bağımlı değişkendir.",
    "Kontrol değişkenini bağımsız sanma: iki kutu da aynı ıslak kuma konmuştur; zemin sabit tutulmuştur."
  ],
  aciklama: `Bağımsız değişken, deneyi yapanın bilerek değiştirdiği şeydir. Bağımlı değişken ölçülen sonuçtur. Kontrol değişkenleri ise aynı tutulan şeylerdir.
Adım 1: Kutular özdeştir; ağırlıkları aynıdır. Zemin de aynı ıslak kumdur. Bunlar kontrol değişkenleridir.
Adım 2: Selin bir kutuyu geniş yüzeyi, ötekini dar yüzeyi üzerine koymuştur. Değiştirdiği şey kuma değen yüzey alanıdır; bu, bağımsız değişkendir.
Adım 3: İz derinliği ölçülen sonuçtur; bağımlı değişkendir.
Sık yapılan hata: Ölçülen sonucu (iz derinliği) değiştirilen değişken sanmak. Kendine "Ben neyi değiştirdim, neyi ölçtüm?" diye sor.
Cevap B.`
},
{
  id: "fen-kb-008",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Kaan, dar ve sert oturaklı bir tabureye uzun süre oturduğunda rahatsız olmuş, aynı sertlikte ama geniş oturaklı bir sandalyeye geçince rahatlamıştır.
I. Geniş oturaklı sandalye, Kaan'ın ağırlığını azaltmıştır.
II. Geniş oturaklı sandalye, Kaan'ın oturağa temas eden yüzey alanını küçültmüştür.
III. Geniş oturaklı sandalyede Kaan'ın vücuduna uygulanan basınç azalmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basınç ile ağırlığı karıştırma: sandalye Kaan'ı hafifletmez; rahatlamanın nedeni basıncın azalmasıdır.",
    null,
    "İki yanılgı birden: Kaan'ın ağırlığı değişmemiştir; geniş oturak temas yüzeyini küçültmemiş, büyütmüştür.",
    "Alan ile basınç ilişkisini ters kurma: geniş oturak Kaan'ın oturağa değen yüzeyini büyütür; yüzey küçülseydi rahatsızlık artardı. III ise doğrudur."
  ],
  aciklama: `Oturan birinin rahatsız olması, vücuduna uygulanan basıncın büyüklüğüne bağlıdır. Aynı ağırlık daha geniş bir yüzeye yayılırsa basınç azalır.
Adım 1 (I): Kaan'ın ağırlığı oturduğu yere göre değişmez. I yanlıştır.
Adım 2 (II): Dar oturak vücuda küçük bir yüzeyle değer; geniş oturak ise daha büyük bir yüzeyle değer. Temas yüzeyi küçülmemiş, büyümüştür. II yanlıştır.
Adım 3 (III): Aynı ağırlık daha geniş bir yüzeye yayıldığı için Kaan'ın vücuduna uygulanan basınç azalmıştır. III doğrudur.
Adım 4: Doğru olan yalnız III'tür.
Sık yapılan hata: Rahatlamayı "yükün hafiflemesi" ile açıklamak. Hafifleyen yük değil, vücuda düşen basınçtır.
Cevap B.`
},
{
  id: "fen-kb-009",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir bahçıvan, yumuşak toprağın üzerine koyduğu tahta bir sandığın içine özdeş saksıları birer birer yerleştirmiştir. Her saksı eklendiğinde sandığın toprağa batma derinliğini ölçmüş ve sonuçları aşağıdaki grafikte göstermiştir. Sandık deney boyunca hep aynı yüzeyi üzerinde durmuştur.
I. Sandığa eklenen her saksı, sandığın toprağa uyguladığı kuvveti artırmıştır.
II. Bu deney, temas yüzeyi alanının basınca etkisini göstermektedir.
III. Sandığın altına tabanından daha geniş ve çok hafif bir tahta levha konsaydı, aynı sayıda saksıyla sandık toprağa daha az batardı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 310" role="img" aria-label="Çizgi grafiği: 1 saksıda 0,5 cm, 2 saksıda 1,1 cm, 3 saksıda 1,6 cm, 4 saksıda 2,2 cm batma"><text x="280" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Saksı sayısı ve batma derinliği</text><g stroke="currentColor" stroke-width="1" stroke-dasharray="4 5" opacity="0.5"><line x1="70" y1="200" x2="490" y2="200"/><line x1="70" y1="160" x2="490" y2="160"/><line x1="70" y1="120" x2="490" y2="120"/><line x1="70" y1="80" x2="490" y2="80"/><line x1="70" y1="40" x2="490" y2="40"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="490" y2="240"/><line x1="70" y1="240" x2="70" y2="34"/></g><polyline points="150,200 250,152 350,112 450,64" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu)"><circle cx="150" cy="200" r="5"/><circle cx="250" cy="152" r="5"/><circle cx="350" cy="112" r="5"/><circle cx="450" cy="64" r="5"/></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="205">0,5</text><text x="62" y="165">1,0</text><text x="62" y="125">1,5</text><text x="62" y="85">2,0</text><text x="62" y="45">2,5</text><text x="138" y="190">0,5 cm</text><text x="238" y="142">1,1 cm</text><text x="338" y="102">1,6 cm</text><text x="438" y="54">2,2 cm</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="150" y="262">1</text><text x="250" y="262">2</text><text x="350" y="262">3</text><text x="450" y="262">4</text><text x="280" y="294">Sandıktaki saksı sayısı</text><text x="20" y="140" transform="rotate(-90 20 140)">Batma derinliği (cm)</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: sandığın altına geniş ve çok hafif bir levha konursa ağırlık neredeyse değişmeden daha geniş bir yüzeye yayılır, basınç azalır ve sandık daha az batar.",
    "Değişkeni yanlış belirleme: sandık hep aynı yüzeyi üzerinde durduğu için temas alanı değişmemiştir; deney ağırlığın etkisini gösterir. Ayrıca I ve III doğrudur.",
    "Değiştirilen değişkeni yanlış belirleme: deneyde değiştirilen, saksı sayısı yani ağırlıktır; temas yüzeyi sabittir. II yanlış, III doğrudur.",
    null
  ],
  aciklama: `Bu deneyde bahçıvan, sandığın toprağa değen yüzeyini değiştirmeden içindeki yükü artırmıştır. Böylece ağırlığın basınca etkisini gözlemiştir.
Adım 1 (I): Her saksı sandığın ağırlığını artırır. Sandığın toprağa uyguladığı kuvvet onun toplam ağırlığıdır; bu kuvvet her saksıyla artmıştır. I doğrudur.
Adım 2 (II): Sandık hep aynı yüzeyi üzerinde durduğu için temas alanı değişmemiştir; deneyde değiştirilen ağırlıktır. Deney temas yüzeyinin değil, ağırlığın etkisini gösterir. II yanlıştır.
Adım 3 (III): Levha çok hafif olduğu için toplam ağırlık neredeyse değişmez; ama bu ağırlık, sandığın tabanından daha geniş bir yüzeye yayılır. Basınç azalır ve sandık daha az batar. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sağlama: Grafikte saksı sayısı 1'den 4'e çıktıkça batma derinliği 0,5 cm'den 2,2 cm'ye artmıştır. Alan sabitken ağırlık arttıkça basınç artmıştır.
Cevap D.`
},
{
  id: "fen-kb-010",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sahil kasabasında bisiklet kiralayan Nazlı Hanım, kumlu yollar için müşterilerine kalın lastikli bisikletleri önermektedir. Bir müşteri, ağırlıkları yaklaşık aynı olan ince lastikli bir yol bisikletiyle ve kalın lastikli bir bisikletle aynı kumlu yolda sırayla sürüş yapmıştır. İnce lastikli bisikletin tekerlekleri kuma gömülmüş, kalın lastikli bisikletinkiler ise kumun üzerinde kalmıştır.
I. Kalın lastiğin kuma temas eden yüzeyi ince lastiğinkinden büyüktür.
II. İnce lastikli bisiklet kuma daha büyük basınç uygulamıştır.
III. Kalın lastikli bisiklete ağır bir çanta yüklenirse tekerlekler kuma daha az gömülür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II'yi gözden kaçırıp III'ü doğru sayma: gömülen ince lastik daha büyük basınç uygulamıştır; yük eklemek ise basıncı artırır, gömülmeyi azaltmaz.",
    "I'i gözden kaçırma ve III'te ilişkiyi ters kurma: kalın lastik kuma geniş bir yüzeyle değer; ağırlık artarsa basınç artar, tekerlek daha çok gömülür.",
    "III'ü doğru sayma: yük eklemek bisikletin ağırlığını, dolayısıyla kuma uyguladığı basıncı artırır; tekerlekler daha az değil, daha çok gömülür."
  ],
  aciklama: `Kuma gömülme, tekerleğin kuma uyguladığı basınca bağlıdır. Basınç ağırlık arttıkça artar, temas yüzeyi büyüdükçe azalır.
Adım 1 (I): Kalın lastik kuma daha geniş bir yüzeyle değer. I doğrudur.
Adım 2 (II): İki bisikletin ağırlığı yaklaşık aynıdır ve sürücü aynı kişidir. İnce lastik ağırlığı küçük bir yüzeye topladığı için kuma daha büyük basınç uygular ve gömülür. II doğrudur.
Adım 3 (III): Çanta yüklenince toplam ağırlık artar; temas yüzeyi aynı kaldığı için basınç artar. Tekerlekler daha az değil, daha çok gömülür. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Ağırlığı artırmanın da basıncı artırdığını unutmak. Temas yüzeyi aynı kalırken yük eklenirse basınç büyür.
Cevap A.`
},
{
  id: "fen-kb-011",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir mühendislik öğrencisi, üç farklı cismin (K, L ve M) yatay bir zemine uyguladığı kuvvetleri ve basınçları ikişer ikişer karşılaştırmış, bulduklarını aşağıdaki tabloya yazmıştır. Cisimler zemine yalnızca taban yüzeyleriyle değmektedir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Karşılaştırılan cisimler</th><th>Zemine uyguladıkları kuvvetler</th><th>Zemine uyguladıkları basınçlar</th></tr><tr><td>K ve L</td><td>Eşit</td><td>K'ninki daha büyük</td></tr><tr><td>K ve M</td><td>K'ninki daha büyük</td><td>Eşit</td></tr></table>`,
  secenekler: [
    "K'nin zemine temas eden yüzeyi L'ninkinden büyüktür.",
    "M'nin zemine uyguladığı kuvvet K'ninkine eşittir.",
    "M'nin zemine temas eden yüzeyi K'ninkinden küçüktür.",
    "L'nin zemine uyguladığı basınç K'ninkinden büyüktür."
  ],
  dogru: 2,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: K ile L'nin kuvvetleri eşittir; K'nin basıncı daha büyük olduğuna göre K'nin yüzeyi daha küçüktür.",
    "Basınç eşitliğini kuvvet eşitliği sanma: K ile M'nin basınçları eşittir ama tabloya göre K'nin kuvveti M'ninkinden büyüktür.",
    null,
    "Tabloyu ters okuma: tabloya göre K'nin basıncı L'ninkinden büyüktür; yani L'nin basıncı daha küçüktür."
  ],
  aciklama: `Basınç hem kuvvete hem de temas yüzeyine bağlıdır. İki cismin kuvvetleri ve basınçları karşılaştırılmışsa temas yüzeyleri hakkında da yargıya varılabilir.
Adım 1: K ile M'nin basınçları eşittir, ama M'nin kuvveti K'ninkinden küçüktür.
Adım 2: Daha küçük bir kuvvetin aynı basıncı oluşturabilmesi için daha küçük bir yüzeye etki etmesi gerekir. Yüzeyler eşit olsaydı M'nin basıncı K'ninkinden küçük çıkardı. Öyleyse M'nin temas yüzeyi K'ninkinden küçüktür.
Adım 3: Öteki şıkları denetle. K ile L'nin kuvvetleri eşit, K'nin basıncı büyüktür; öyleyse K'nin yüzeyi daha küçüktür, A yanlıştır. M'nin kuvveti K'ninkinden küçüktür; B yanlıştır. L'nin basıncı K'ninkinden küçüktür; D yanlıştır.
Sık yapılan hata: Basınçları eşit olan cisimlerin kuvvetlerinin ya da yüzeylerinin de eşit olduğunu sanmak. Farklı kuvvet ve yüzey çiftleri aynı basıncı oluşturabilir.
Cevap C.`
},
{
  id: "fen-kb-012",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir peynir dükkânında, büyük kaşar tekerleklerini kesmek için bıçak yerine iki ucu tutamaklı, ince bir çelik tel kullanılmaktadır. Satıcı teli peynirin üzerine yerleştirip tutamaklardan aşağı doğru çektiğinde tel peyniri düzgünce kesmektedir. Aynı işi kalın bir iple yapmaya çalışan çırak ise peyniri kesememiştir.
I. Telin peynire temas eden yüzeyi çok küçüktür.
II. Satıcının uyguladığı kuvvet, ince tel sayesinde peynire büyük bir basınç olarak etki eder.
III. Çırağın uyguladığı kuvvet satıcınınkiyle aynı olsaydı bile kalın ip peynire daha küçük basınç uygulardı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü gözden kaçırma: küçük temas yüzeyi, aynı kuvvetin büyük bir basınç oluşturmasını sağlar; kalın ip ise kuvveti daha geniş bir yüzeye yayar.",
    "I ve III'ü gözden kaçırma: basıncın büyük olmasının nedeni telin peynire çok küçük bir yüzeyle değmesidir; kalın ip bu yüzeyi büyütür.",
    "III'ü gözden kaçırma: kuvvetler eşit olsa bile kalın ip peynire daha geniş bir yüzeyle değer; basıncı daha küçük olur.",
    null
  ],
  aciklama: `Kesme işi, kesici kenarın uyguladığı basınca bağlıdır. İnce bir tel, tıpkı keskin bir bıçak ağzı gibi, kuvveti çok küçük bir yüzeye toplar.
Adım 1 (I): İnce tel peynire çok dar bir çizgi boyunca değer; temas yüzeyi çok küçüktür. I doğrudur.
Adım 2 (II): Satıcının çekme kuvveti bu küçük yüzeye etki eder; basınç büyür ve peynir kesilir. II doğrudur.
Adım 3 (III): Kalın ip peynire daha geniş bir yüzeyle değer. Kuvvet aynı olsa bile daha geniş yüzeyde basınç daha küçük olur. III doğrudur.
Adım 4: Üç yargı da doğrudur.
Sık yapılan hata: Çırağın peyniri kesememesini yalnızca "yeterince güçlü çekmemesine" bağlamak. Aynı kuvvetle bile kalın ip kesemez, çünkü basınç yüzeye de bağlıdır.
Cevap D.`
},
{
  id: "fen-kb-013",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Arda, oyun hamurunun üzerine dikdörtgenler prizması biçiminde bir tahta kutu koymuştur. Kutunun hamura uyguladığı basıncı değiştirmek için aşağıdaki işlemleri düşünmektedir. Kutuya konacak ağırlığın ve altına konacak levhanın büyüklüğü henüz belirlenmemiştir.
1. işlem: Kutunun içine ağırlık koymak
2. işlem: Kutuyu daha dar bir yüzeyi üzerine çevirmek
3. işlem: Kutunun altına, tabanından daha geniş ve çok hafif bir levha koymak
I. Yalnızca 1. işlem yapılırsa kutunun hamura uyguladığı basınç artar.
II. 1. ve 2. işlemler birlikte yapılırsa basınç artar.
III. 1. ve 3. işlemler birlikte yapılırsa basınç azalır.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: ağırlık eklemek de dar yüzeye çevirmek de basıncı artırır; ikisi birlikte yapılınca basınç kesinlikle artar.",
    "I'i gözden kaçırma: yüzey aynıyken ağırlık eklemek basıncı kesinlikle artırır.",
    null,
    "Ters yönde etki eden iki değişikliği kesin sonuç sanma: ağırlık basıncı artırır, geniş levha azaltır; hangisinin daha etkili olduğu ağırlığın ve levhanın büyüklüğü bilinmeden söylenemez. I ise doğrudur."
  ],
  aciklama: `İki değişiklik basıncı aynı yönde etkiliyorsa sonuç kesindir. Ters yönde etkiliyorsa, hangisinin daha güçlü olduğu bilinmeden sonuç kestirilemez.
Adım 1 (I): Yüzey aynı kalırken ağırlık eklenirse kuvvet artar ve basınç kesinlikle artar. I doğrudur.
Adım 2 (II): Ağırlık eklemek basıncı artırır; dar yüzeye çevirmek de basıncı artırır. İki değişiklik aynı yönde etki ettiği için basınç kesinlikle artar. II doğrudur.
Adım 3 (III): Ağırlık eklemek basıncı artırır; geniş levha ise temas yüzeyini büyütüp basıncı azaltır. Ağırlığın ve levhanın büyüklüğü bilinmediği için basıncın azalacağı kesin değildir; artabilir, azalabilir ya da değişmeyebilir. III kesinlikle doğru değildir.
Adım 4: Kesinlikle doğru olanlar I ve II'dir.
Sık yapılan hata: Birbirine zıt etki eden iki değişiklikten birini görmezden gelip kesin yargı vermek. "Kesinlikle" soran sorularda önce değişikliklerin aynı yönde mi, ters yönde mi etki ettiğine bak.
Cevap C.`
},
{
  id: "fen-kb-014",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Sude, katı basıncının hem ağırlığa hem de temas yüzeyine bağlı olduğunu sınıfta göstermek için özdeş karton kutular ve ıslak kum kullanacaktır. Kurduğu ilk iki düzenek şöyledir:
1. düzenek: Tek kutu, geniş yüzeyi üzerinde, ıslak kumda
2. düzenek: Üst üste iki kutu, geniş yüzeyleri üzerinde, ıslak kumda
Sude, 1. ve 2. düzeneklerle ağırlığın etkisini gösterecektir. Temas yüzeyinin etkisini göstermek için ise bir düzenek daha kuracak ve bu yeni düzeneği yalnızca 1. düzenekle karşılaştıracaktır.
**Buna göre Sude'nin kuracağı üçüncü düzenek aşağıdakilerden hangisi olmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Tek kutu, dar yüzeyi üzerinde, ıslak kumda",
    "Üst üste iki kutu, dar yüzeyleri üzerinde, ıslak kumda",
    "Tek kutu, geniş yüzeyi üzerinde, kuru unda",
    "Yan yana iki kutu, geniş yüzeyleri üzerinde, ıslak kumda"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki değişkeni birden değiştirme: bu düzenek 1. düzenekle karşılaştırılırsa hem kutu sayısı (ağırlık) hem temas yüzeyi farklı olur.",
    "Yanlış değişkeni değiştirme: bu düzenekte temas yüzeyi 1. düzenektekiyle aynıdır, yalnızca zemin farklıdır; zeminin etkisini gösterir.",
    "Ağırlıkla birlikte yüzeyi değiştirme: yan yana iki kutu, 1. düzeneğe göre hem ağırlığı hem temas yüzeyini artırır; basınç 1. düzenektekiyle aynı çıkar ve yüzeyin etkisi görülmez."
  ],
  aciklama: `Bir değişkenin etkisini göstermek için karşılaştırılan iki düzenekte yalnızca o değişken farklı olmalıdır.
Adım 1: Yeni düzenek 1. düzenekle karşılaştırılacaktır. 1. düzenekte tek kutu vardır, kutu geniş yüzeyi üzerindedir ve zemin ıslak kumdur.
Adım 2: Temas yüzeyinin etkisini görmek için yeni düzenekte yalnızca yüzey değişmeli; kutu sayısı (tek kutu) ve zemin (ıslak kum) aynı kalmalıdır.
Adım 3: Bu koşulları sağlayan düzenek "tek kutu, dar yüzeyi üzerinde, ıslak kumda" olandır.
Sağlama: B'deki düzenek 1. düzenekle değil 2. düzenekle karşılaştırılsaydı uygun olurdu; ama Sude yeni düzeneği yalnızca 1. düzenekle karşılaştıracaktır.
Cevap A.`
},
{
  id: "fen-kb-015",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Kerem, özdeş plastik kasaları ıslak kumun üzerine koyup içlerine özdeş un paketleri yerleştirerek dört deneme yapmıştır. Her denemede kasanın hangi yüzeyinin kuma değdiğini, kasadaki paket sayısını ve kasanın kumda bıraktığı izin derinliğini aşağıdaki tabloya yazmıştır.
**Buna göre bu tablodaki verilerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<table class="tablo"><tr><th>Deneme</th><th>Kasanın kuma değen yüzeyi</th><th>Kasadaki paket sayısı</th><th>İz derinliği</th></tr><tr><td>1. deneme</td><td>Geniş</td><td>4</td><td>1,0 cm</td></tr><tr><td>2. deneme</td><td>Dar</td><td>4</td><td>2,5 cm</td></tr><tr><td>3. deneme</td><td>Dar</td><td>8</td><td>4,0 cm</td></tr><tr><td>4. deneme</td><td>Geniş</td><td>8</td><td>2,0 cm</td></tr></table>`,
  secenekler: [
    "1. ve 2. denemeler, temas yüzeyi küçüldükçe basıncın arttığını gösterir.",
    "2. ve 4. denemeler, ağırlık arttıkça basıncın arttığını gösterir.",
    "1. ve 4. denemeler, ağırlık arttıkça basıncın arttığını gösterir.",
    "3. ve 4. denemeler, temas yüzeyi küçüldükçe basıncın arttığını gösterir."
  ],
  dogru: 1,
  hatalar: [
    "Geçerli bir karşılaştırmayı geçersiz sanma: 1. ve 2. denemelerde paket sayısı aynıdır (4), yalnızca yüzey farklıdır; bu yargı söylenebilir.",
    null,
    "Geçerli bir karşılaştırmayı geçersiz sanma: 1. ve 4. denemelerde yüzey aynıdır (geniş), yalnızca paket sayısı farklıdır; bu yargı söylenebilir.",
    "Geçerli bir karşılaştırmayı geçersiz sanma: 3. ve 4. denemelerde paket sayısı aynıdır (8), yalnızca yüzey farklıdır; bu yargı söylenebilir."
  ],
  aciklama: `İki deneme arasındaki farkın nedeni, ancak o iki deneme arasında tek bir değişken farklıysa kesin olarak söylenebilir.
Adım 1 (A): 1. ve 2. denemelerde paket sayısı 4'tür; yalnızca yüzey değişmiştir. Dar yüzeyde iz derinleşmiştir. Söylenebilir.
Adım 2 (C): 1. ve 4. denemelerde yüzey geniştir; yalnızca paket sayısı değişmiştir. Ağırlık artınca iz derinleşmiştir. Söylenebilir.
Adım 3 (D): 3. ve 4. denemelerde paket sayısı 8'dir; yalnızca yüzey değişmiştir. Dar yüzeyde iz daha derindir. Söylenebilir.
Adım 4 (B): 2. ve 4. denemeler arasında hem paket sayısı (4 ve 8) hem yüzey (dar ve geniş) farklıdır. Üstelik paket sayısı fazla olan 4. denemedeki iz daha sığdır. İki değişken birlikte değiştiği için bu çiftten ağırlığın etkisi hakkında sonuç çıkarılamaz. Söylenemez.
Sık yapılan hata: Her iki denemeyi karşılaştırmaya uygun saymak. Önce iki deneme arasında kaç değişkenin farklı olduğunu say.
Cevap B.`
}
);
