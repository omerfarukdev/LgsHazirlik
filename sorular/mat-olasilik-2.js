// Matematik — Basit Olayların Olma Olasılığı | 2. dosya
// Kademe 3 (LGS Ayarı): mat-ol-301…325 · Havuz: mat-ol-001…015
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
/* ===================== KADEME 3 — LGS AYARI (301…325) ===================== */
{
  id: "mat-ol-301",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ortaokulda bilim, drama ve satranç kulüplerine kayıtlı öğrencilerin sayıları aşağıdaki tabloda verilmiştir. Her öğrenci yalnızca bir kulübe kayıtlıdır.
Okul yönetimi, bu üç kulübün bütün üyelerinin adlarını tek bir listeye yazacak ve listeden rastgele bir öğrenci seçerek onu bilim şenliğinin sunucusu yapacaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kulüp</th><th>Kız öğrenci</th><th>Erkek öğrenci</th></tr><tr><td>Bilim</td><td>9</td><td>7</td></tr><tr><td>Drama</td><td>11</td><td>5</td></tr><tr><td>Satranç</td><td>4</td><td>8</td></tr></table>`,
  secenekler: ["Seçilen öğrencinin bilim kulübünden olma olasılığı, drama kulübünden olma olasılığına eşittir.", "Seçilen öğrencinin kız öğrenci olma olasılığı, erkek öğrenci olma olasılığına eşittir.", "Seçilen öğrencinin satranç kulübünden bir erkek olma olasılığı, bilim kulübünden bir kız olma olasılığından fazladır.", "Seçilen öğrencinin drama kulübünden bir erkek olma olasılığı, satranç kulübünden bir kız olma olasılığından azdır."],
  dogru: 0,
  hatalar: [
    null,
    "Satırları toplamadan karar verdin. Kız öğrenciler 9 + 11 + 4 = 24, erkek öğrenciler 7 + 5 + 8 = 20 kişidir; kız olma olasılığı daha fazladır.",
    "Karşılaştırmayı ters yaptın. Satranç kulübünde 8 erkek, bilim kulübünde 9 kız vardır; 8 < 9 olduğundan bu olasılık daha azdır.",
    "Karşılaştırmayı ters yaptın. Drama kulübünde 5 erkek, satranç kulübünde 4 kız vardır; 5 > 4 olduğundan bu olasılık daha fazladır."
  ],
  aciklama: `Aynı listeden yapılan bir seçimde her öğrencinin seçilme şansı eşittir. Bu yüzden iki olayın olasılığını karşılaştırmak için o olaylara uyan öğrenci sayılarını karşılaştırmak yeter: Sayısı çok olanın olasılığı da fazladır.
Adım 1: Kulüplerin üye sayılarını bul: bilim 9 + 7 = 16, drama 11 + 5 = 16, satranç 4 + 8 = 12.
Adım 2: Bilim ve drama kulüplerinin üye sayıları eşit (16) olduğundan bu iki kulüpten öğrenci seçilme olasılıkları da eşittir. A doğrudur.
Adım 3: Diğerlerini kontrol et: Kızlar 24, erkekler 20 kişidir (B yanlış). Satranç kulübündeki erkekler 8, bilim kulübündeki kızlar 9 kişidir (C yanlış). Drama kulübündeki erkekler 5, satranç kulübündeki kızlar 4 kişidir (D yanlış).
Sağlama: Listede 16 + 16 + 12 = 44 öğrenci vardır. Bilim kulübünden ve drama kulübünden olma olasılıklarının ikisi de [[16|44]] olur.
Sık yapılan hata: Tablonun yalnızca bir satırına ya da sütununa bakıp karar vermek. Önce istenen olaya uyan bütün kişileri say.
Cevap A.`
},
{
  id: "mat-ol-302",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir alışveriş merkezindeki çocuk etkinliğinde dört kutu vardır. Her kutuda ödüllü ve boş toplar bulunur; bütün topların büyüklüğü ve dokusu aynıdır. Oyuncu kutulardan birini seçer ve içine bakmadan bu kutudan bir top çeker. Ödüllü top çekerse hediye kazanır. Kutulardaki top sayıları aşağıda gösterilmiştir.
**Buna göre ödüllü top çekme olasılığının en fazla olması için oyuncu hangi kutuyu seçmelidir?**`,
  gorsel: `<svg viewBox="0 0 560 224" role="img" aria-label="Dört kutu: 1. kutuda 6 ödüllü ve 10 boş, 2. kutuda 2 ödüllü ve 4 boş, 3. kutuda 4 ödüllü ve 5 boş, 4. kutuda 5 ödüllü ve 7 boş top var."><circle cx="160" cy="20" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><text x="176" y="25" font-size="14">Ödüllü top</text><circle cx="330" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="346" y="25" font-size="14">Boş top</text><path d="M14 44 L14 168 L136 168 L136 44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><circle cx="31" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="53" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="75" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="97" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="119" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="31" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="53" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="75" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="97" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="119" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="31" cy="110" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="53" cy="110" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="75" cy="110" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="97" cy="110" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="119" cy="110" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="31" cy="88" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="75" y="192" font-size="15" font-weight="bold" text-anchor="middle">1. kutu</text><text x="75" y="212" font-size="14" text-anchor="middle">6 ödüllü, 10 boş</text><path d="M151 44 L151 168 L273 168 L273 44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><circle cx="168" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="190" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="212" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="234" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="256" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="168" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="212" y="192" font-size="15" font-weight="bold" text-anchor="middle">2. kutu</text><text x="212" y="212" font-size="14" text-anchor="middle">2 ödüllü, 4 boş</text><path d="M288 44 L288 168 L410 168 L410 44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><circle cx="305" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="327" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="349" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="371" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="393" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="305" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="327" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="349" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="371" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="349" y="192" font-size="15" font-weight="bold" text-anchor="middle">3. kutu</text><text x="349" y="212" font-size="14" text-anchor="middle">4 ödüllü, 5 boş</text><path d="M425 44 L425 168 L547 168 L547 44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><circle cx="442" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="464" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="486" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="508" cy="154" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="530" cy="154" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="442" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="464" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="486" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="508" cy="132" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="530" cy="132" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="442" cy="110" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><circle cx="464" cy="110" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="486" y="192" font-size="15" font-weight="bold" text-anchor="middle">4. kutu</text><text x="486" y="212" font-size="14" text-anchor="middle">5 ödüllü, 7 boş</text></svg>`,
  secenekler: ["1. kutu", "2. kutu", "3. kutu", "4. kutu"],
  dogru: 2,
  hatalar: [
    "En çok ödüllü topu olan kutuyu seçtin. Bu kutudaki toplam top sayısı da fazladır: Olasılık [[6|16]] = [[3|8]] olur ve [[4|9]] sayısından küçüktür.",
    "En az boş topu olan kutuyu seçtin. Bu kutuda olasılık [[2|6]] = [[1|3]] olur; dört kutu içindeki en küçük olasılıktır.",
    null,
    "Kesirleri karşılaştırırken yanıldın. 4. kutuda olasılık [[5|12]] olur; ortak paydada [[15|36]] < [[16|36]] olduğundan 3. kutunun olasılığı daha büyüktür."
  ],
  aciklama: `Bir olayın olasılığı, istenen durumların sayısının olası bütün durumların sayısına bölümüdür. Burada istenen durum ödüllü top, olası durumlar ise seçilen kutudaki bütün toplardır.
Adım 1: Her kutu için olasılığı yaz: 1. kutu [[6|16]] = [[3|8]], 2. kutu [[2|6]] = [[1|3]], 3. kutu [[4|9]], 4. kutu [[5|12]].
Adım 2: Kesirleri ortak paydada karşılaştır. 8, 3, 9 ve 12'nin EKOK'u 72'dir: [[27|72]], [[24|72]], [[32|72]], [[30|72]].
Adım 3: En büyük kesir [[32|72]] = [[4|9]] olduğundan ödüllü top çekme olasılığı en fazla olan kutu 3. kutudur.
Sağlama: Kesirleri yaklaşık ondalık sayı olarak da karşılaştırabilirsin: 0,375; 0,333; 0,444; 0,417. En büyüğü yine 3. kutununkidir.
Sık yapılan hata: Yalnızca ödüllü top sayısına bakmak. Olasılık bir oran olduğundan kutudaki toplam top sayısı da hesaba girer.
Cevap C.`
},
{
  id: "mat-ol-303",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gençlik merkezi, takvimi aşağıda verilen 30 günlük ayın günlerinden birini kurayla seçip o gün bir robotik atölyesi düzenleyecektir. Kura için ayın her günü ayrı bir kâğıda yazılıp bir kutuya atılacak ve kutudan bir kâğıt çekilecektir. Seçilen gün hafta içine denk gelirse atölye akşam saatlerinde yapılacaktır. (Cumartesi ve pazar günleri hafta sonudur.)
**Buna göre kurada seçilen günün hafta içine denk gelme olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Pzt</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th><th>Cmt</th><th>Paz</th></tr><tr><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr><tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr><tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr><tr><td>27</td><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td></tr></table>`,
  secenekler: ["[[13|15]]", "[[11|15]]", "[[5|7]]", "[[4|15]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca cumartesileri hafta sonu saydın. Pazar günleri de hafta sonudur; bu ayda 4 cumartesi ve 4 pazar vardır.",
    null,
    "Olası durumları haftanın 7 günü sandın. Kurada ayın 30 gününden biri seçilir; bu ayın 22 günü hafta içidir.",
    "Hafta sonuna denk gelme olasılığını buldun (8 gün). Soru hafta içini soruyor."
  ],
  aciklama: `Olası durumlar kutudaki kâğıtlar, yani ayın 30 günüdür. İstenen durumlar ise hafta içine denk gelen günlerdir.
Adım 1: Takvimden hafta sonu günlerini say: Cumartesiler 4, 11, 18, 25; pazarlar 5, 12, 19, 26. Toplam 8 gün.
Adım 2: Hafta içine denk gelen gün sayısı 30 − 8 = 22'dir.
Adım 3: Olasılık [[22|30]] = [[11|15]] olur.
Sağlama: Hafta sonuna denk gelme olasılığı [[8|30]] = [[4|15]] olur. [[11|15]] + [[4|15]] = 1. Bir olayın olma ve olmama olasılıklarının toplamı 1'dir.
Sık yapılan hata: "Haftanın 5 günü hafta içidir." diye düşünüp [[5|7]] yazmak. Bu ay tam haftalardan oluşmaz; olası durumları takvimden saymalısın.
Cevap B.`
},
{
  id: "mat-ol-304",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiçekçi, tezgâhındaki saksılardan birini rastgele seçip ayın müşterisine hediye edecektir. Tezgâhta yalnızca aşağıdaki tabloda yazan bitkilerin saksıları vardır; menekşeli saksıların sayıları tabloya yazılmamıştır.
Çiçekçi, seçilecek saksıda menekşe olmama olasılığının [[7|10]] olduğunu hesaplamıştır. Ayrıca tezgâhtaki mor menekşeli saksıların sayısı, beyaz menekşeli saksıların sayısının 2 katıdır.
**Buna göre seçilen saksıda beyaz menekşe olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Saksıdaki bitki</th><th>Saksı sayısı</th></tr><tr><td>Sardunya</td><td>9</td></tr><tr><td>Begonya</td><td>11</td></tr><tr><td>Kaktüs</td><td>8</td></tr><tr><td>Mor menekşe</td><td>?</td></tr><tr><td>Beyaz menekşe</td><td>?</td></tr></table>`,
  secenekler: ["[[1|3]]", "[[3|10]]", "[[1|5]]", "[[1|10]]"],
  dogru: 3,
  hatalar: [
    "Paydaya yalnızca menekşeli saksıları (12) yazdın. Seçim tezgâhtaki 40 saksının hepsinden yapılır.",
    "Menekşeli saksıların hepsini saydın (12 saksı). Soru yalnızca beyaz menekşeyi soruyor.",
    "Mor menekşe olma olasılığını buldun (8 saksı). Mor menekşeler beyazların 2 katıdır; beyaz menekşeli saksı 4 tanedir.",
    null
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir. Menekşe olmama olasılığı [[7|10]] ise menekşe olma olasılığı 1 − [[7|10]] = [[3|10]] olur.
Adım 1: Menekşesiz saksıları say: 9 + 11 + 8 = 28.
Adım 2: Bu 28 saksı, bütün saksıların [[7|10]] kadarıdır. Onda yedisi 28 ise onda biri 28 : 7 = 4, tamamı 4 · 10 = 40 saksıdır.
Adım 3: Menekşeli saksılar 40 − 28 = 12 tanedir. Mor menekşeler beyazların 2 katı olduğundan 12 saksı 3 eş parçaya ayrılır: beyaz 4, mor 8.
Adım 4: Beyaz menekşe olma olasılığı [[4|40]] = [[1|10]] olur.
Sağlama: Menekşe olma olasılığı [[12|40]] = [[3|10]], menekşe olmama olasılığı [[28|40]] = [[7|10]]; toplamları 1'dir.
Cevap D.`
},
{
  id: "mat-ol-305",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun bilgi yarışmasında sorular, bilgisayardaki bir soru havuzundan rastgele seçilmektedir. Havuzdaki soruların konulara göre sayıları aşağıdaki tabloda verilmiştir. Kullanılan bir soru havuzdan silinir ve bir daha seçilmez.
Yarışmanın ilk turunda yalnızca şu sorular kullanılmıştır: spor sorularının tamamı ve tarih sorularının yarısı.
**Buna göre ikinci turda bilgisayarın seçeceği ilk sorunun bilim sorusu olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Konu</th><th>Soru sayısı</th></tr><tr><td>Tarih</td><td>8</td></tr><tr><td>Bilim</td><td>12</td></tr><tr><td>Spor</td><td>6</td></tr><tr><td>Sanat</td><td>4</td></tr></table>`,
  secenekler: ["[[2|5]]", "[[6|13]]", "[[1|2]]", "[[3|5]]"],
  dogru: 3,
  hatalar: [
    "Kullanılan soruları havuzdan çıkarmadın ([[12|30]]). Olası durumlar yalnızca havuzda kalan sorulardır.",
    "Yalnızca tarih sorularının yarısını çıkardın ([[12|26]]). Spor sorularının tamamı da kullanılmıştır.",
    "Yalnızca spor sorularını havuzdan çıkardın ([[12|24]]). Tarih sorularının yarısı da kullanılmıştır.",
    null
  ],
  aciklama: `Olası durumlar, seçim anında havuzda bulunan sorulardır. Kullanılıp silinen sorular artık seçilemez.
Adım 1: İlk turda kullanılan soruları bul: spor 6, tarih 8 : 2 = 4. Toplam 10 soru silinmiştir.
Adım 2: Havuzda kalan soruları yaz: tarih 4, bilim 12, sanat 4. Toplam 20 soru.
Adım 3: Bilim sorusu seçilme olasılığı [[12|20]] = [[3|5]] olur.
Sağlama: Başlangıçta havuzda 8 + 12 + 6 + 4 = 30 soru vardı; 30 − 10 = 20 soru kalır.
Sık yapılan hata: Olasılığı başlangıçtaki toplamla hesaplamak. Durum değişince önce olası durumları yeniden say.
Cevap D.`
},
{
  id: "mat-ol-306",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir lunaparktaki puan çarkı aşağıda gösterilmiştir. Çarkın dilimleri farklı büyüklüktedir; her dilime kazanılacak puan ve dilimin merkez açısı yazılmıştır. Çark çevrildiğinde ok dilimlerden birinde durur ve oyuncu o dilimdeki puanı kazanır. Okun iki dilim arasındaki çizgide durmadığı kabul edilecektir.
**Defne çarkı bir kez çevirdiğine göre en az 3 puan kazanma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Puan çarkı: 1 puan 120 derece, 3 puan 60 derece, 2 puan 90 derece, 10 puan 30 derece, 5 puan 60 derece."><path d="M280 180 L316.23 44.77 A140 140 0 0 1 378.99 278.99 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 180 L378.99 278.99 A140 140 0 0 1 243.77 315.23 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 180 L243.77 315.23 A140 140 0 0 1 144.77 143.77 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 180 L144.77 143.77 A140 140 0 0 1 181.01 81.01 Z" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.5"/><path d="M280 180 L181.01 81.01 A140 140 0 0 1 316.23 44.77 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="366.55" y="152.81" font-size="15" text-anchor="middle" font-weight="bold">1 puan</text><text x="366.55" y="170.81" font-size="14" text-anchor="middle">120°</text><text x="303.19" y="262.55" font-size="15" text-anchor="middle" font-weight="bold">3 puan</text><text x="303.19" y="280.55" font-size="14" text-anchor="middle">60°</text><text x="202.4" y="220.8" font-size="15" text-anchor="middle" font-weight="bold">2 puan</text><text x="202.4" y="238.8" font-size="14" text-anchor="middle">90°</text><line x1="176.94" y1="120.5" x2="146.63" y2="103" stroke="currentColor" stroke-width="1.2"/><text x="139.7" y="95" font-size="15" text-anchor="end" font-weight="bold">10 puan</text><text x="139.7" y="113" font-size="14" text-anchor="end">30°</text><text x="256.81" y="89.45" font-size="15" text-anchor="middle" font-weight="bold">5 puan</text><text x="256.81" y="107.45" font-size="14" text-anchor="middle">60°</text><polygon points="267,16 293,16 280,50" fill="currentColor"/><circle cx="280" cy="180" r="6" fill="currentColor"/></svg>`,
  secenekler: ["[[3|5]]", "[[7|12]]", "[[5|12]]", "[[1|6]]"],
  dogru: 2,
  hatalar: [
    "Dilimleri eş büyüklükte sayıp 5 dilimden 3'ünü aldın. Dilimlerin açıları farklı olduğundan olasılık açılarla hesaplanır.",
    "3 puandan az kazanma olasılığını buldun (120° + 90° = 210°).",
    null,
    "Yalnızca 3 puanlık dilimi aldın (60°). \"En az 3 puan\" ifadesi 3, 5 ve 10 puanı kapsar."
  ],
  aciklama: `Dilimleri farklı büyüklükte olan bir çarkta okun bir dilimde durma olasılığı, o dilimin merkez açısının 360°'ye bölümüdür.
Adım 1: "En az 3 puan" ifadesi 3, 5 ve 10 puanlık dilimleri kapsar.
Adım 2: Bu dilimlerin açılarını topla: 60° + 60° + 30° = 150°.
Adım 3: Olasılık [[150|360]] = [[5|12]] olur.
Sağlama: 3 puandan az kazanma olasılığı [[210|360]] = [[7|12]] olur; [[5|12]] + [[7|12]] = 1.
Sık yapılan hata: Dilim sayısına bakıp [[3|5]] demek. Dilimler eş değilse olasılık dilim sayısıyla değil, açıyla bulunur.
Cevap C.`
},
{
  id: "mat-ol-307",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Selin, üzerinde 21, 27, 33, 39, 45 ve 51 sayıları yazan altı kartı ters çevirip karıştırıyor. Kardeşi Can bu kartlardan birini rastgele seçecektir. Selin, Can'ın seçeceği kartla ilgili dört olay yazıyor ve Can'dan bunlardan hangisinin hiçbir şekilde gerçekleşemeyeceğini bulmasını istiyor.
**Buna göre aşağıdakilerden hangisi imkânsız bir olaydır?**`,
  gorsel: `<svg viewBox="0 0 560 112" role="img" aria-label="Kartlar: 21, 27, 33, 39, 45, 51"><rect x="25" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="60" y="65" font-size="26" font-weight="bold" text-anchor="middle">21</text><rect x="113" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="148" y="65" font-size="26" font-weight="bold" text-anchor="middle">27</text><rect x="201" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="236" y="65" font-size="26" font-weight="bold" text-anchor="middle">33</text><rect x="289" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="324" y="65" font-size="26" font-weight="bold" text-anchor="middle">39</text><rect x="377" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="412" y="65" font-size="26" font-weight="bold" text-anchor="middle">45</text><rect x="465" y="10" width="70" height="92" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="500" y="65" font-size="26" font-weight="bold" text-anchor="middle">51</text></svg>`,
  secenekler: ["Seçilen karttaki sayının 5'in katı olması", "Seçilen karttaki sayının 9'un katı olması", "Seçilen karttaki sayının rakamları toplamının 6 olması", "Seçilen karttaki sayının asal sayı olması"],
  dogru: 3,
  hatalar: [
    "45 sayısını gözden kaçırdın. 45, 5'in katıdır; bu olayın olasılığı [[1|6]] olur, 0 olmaz.",
    "27 ile 45'i gözden kaçırdın. Bu iki sayı 9'un katıdır; olayın olasılığı [[2|6]] = [[1|3]] olur.",
    "33 ile 51'i gözden kaçırdın. 3 + 3 = 6 ve 5 + 1 = 6 olduğundan olayın olasılığı [[2|6]] = [[1|3]] olur.",
    null
  ],
  aciklama: `Hiçbir zaman gerçekleşemeyen olaya imkânsız olay denir; olasılığı 0'dır. Bir olayın imkânsız olması için kartların hiçbiri o olaya uymamalıdır.
Adım 1: Kartlardaki sayıları çarpanlarına ayır: 21 = 3 · 7, 27 = 3 · 9, 33 = 3 · 11, 39 = 3 · 13, 45 = 5 · 9, 51 = 3 · 17.
Adım 2: Her sayının 1 ve kendisinden başka böleni vardır; yani hiçbiri asal değildir. Asal sayı seçilmesi imkânsız olaydır.
Adım 3: Diğer olaylar gerçekleşebilir: 45, 5'in katıdır; 27 ve 45, 9'un katıdır; 33 ve 51'in rakamları toplamı 6'dır.
Sık yapılan hata: 39 ve 51'i asal sanmak. Rakamları toplamı 3'ün katı olan sayılar 3'e tam bölünür: 3 + 9 = 12, 5 + 1 = 6.
Cevap D.`
},
{
  id: "mat-ol-308",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim merkezini cumartesi günü ziyaret edenlerin yaş gruplarına göre dağılımı aşağıdaki daire grafiğinde gösterilmiştir. Grafikte yetişkinlere ait dilimin merkez açısı, çocuklara ait dilimin merkez açısının 2 katıdır.
Gün sonunda bu ziyaretçilerden biri bilgisayarla rastgele seçilecek ve ona bir teleskop hediye edilecektir.
**Buna göre teleskobu kazanan kişinin yetişkin olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Daire grafiği: Genç 105 derece, 65 yaş üstü 75 derece, Çocuk ve Yetişkin dilimlerinin açısı yazılmamış."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Ziyaretçilerin yaş gruplarına göre dağılımı</text><path d="M280 185 L280 55 A130 130 0 0 1 405.57 218.65 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L405.57 218.65 A130 130 0 0 1 280 315 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L280 315 A130 130 0 0 1 167.42 250 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L167.42 250 A130 130 0 0 1 280 55 Z" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.5"/><text x="343.94" y="131.93" font-size="15" text-anchor="middle" font-weight="bold">Genç</text><text x="343.94" y="149.93" font-size="14" text-anchor="middle">105°</text><text x="330.65" y="247.01" font-size="15" text-anchor="middle" font-weight="bold">65 yaş üstü</text><text x="330.65" y="265.01" font-size="14" text-anchor="middle">75°</text><text x="237.1" y="264.3" font-size="15" text-anchor="middle" font-weight="bold">Çocuk</text><text x="210.2" y="149.7" font-size="15" text-anchor="middle" font-weight="bold">Yetişkin</text></svg>`,
  secenekler: ["[[1|2]]", "[[1|3]]", "[[1|4]]", "[[1|6]]"],
  dogru: 1,
  hatalar: [
    "Kalan 180°'nin tamamını yetişkinlere verdin. Bu 180°, çocuk ve yetişkin dilimlerinin toplamıdır.",
    null,
    "Dört yaş grubunu eşit şanslı saydın. Dilimlerin açıları farklı olduğundan grupların olasılıkları da farklıdır.",
    "Çocuklara ait dilimin olasılığını buldun (60°). Yetişkin dilimi bunun 2 katıdır."
  ],
  aciklama: `Daire grafiğinde bir dilimin merkez açısı, o grubun bütün içindeki payını gösterir. Rastgele seçilen kişinin o gruptan olma olasılığı, dilimin açısının 360°'ye bölümüdür.
Adım 1: Açısı verilen dilimleri topla: 105° + 75° = 180°. Çocuk ve yetişkin dilimlerine 360° − 180° = 180° kalır.
Adım 2: Yetişkin dilimi çocuk diliminin 2 katı olduğundan 180° üç eş parçaya bölünür: 180° : 3 = 60°. Çocuk dilimi 60°, yetişkin dilimi 120°'dir.
Adım 3: Yetişkin olma olasılığı [[120|360]] = [[1|3]] olur.
Sağlama: 60° + 105° + 120° + 75° = 360°.
Cevap B.`
},
{
  id: "mat-ol-309",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Ela, 36 sayısının bütün pozitif bölenlerini ayrı ayrı toplara yazıyor; her bölen yalnızca bir topa yazılıyor. Topları bir torbaya koyup karıştırıyor. Kardeşi torbadan bakmadan bir top çekecek ve çektiği topta tam kare bir sayı yazıyorsa bir puan kazanacaktır.
**Buna göre Ela'nın kardeşinin puan kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|9]]", "[[1|3]]", "[[4|9]]", "[[5|9]]"],
  dogru: 2,
  hatalar: [
    "Paydaya 36 yazdın ([[4|36]]). Torbada 36 top değil, 36'nın bölenleri kadar, yani 9 top vardır.",
    "1'i tam kare saymadın ([[3|9]]). 1 = 1 · 1 olduğundan 1 de tam kare sayıdır.",
    null,
    "Tam kare olmayan bir sayının çekilme olasılığını buldun."
  ],
  aciklama: `Bir doğal sayının kendisiyle çarpımına tam kare sayı denir (1, 4, 9, 16, …).
Adım 1: 36'nın pozitif bölenlerini çarpan çiftleriyle bul: 1 · 36, 2 · 18, 3 · 12, 4 · 9, 6 · 6. Bölenler 1, 2, 3, 4, 6, 9, 12, 18 ve 36'dır; torbada 9 top vardır.
Adım 2: Bunlardan tam kare olanlar 1, 4, 9 ve 36'dır; 4 top.
Adım 3: Puan kazanma olasılığı [[4|9]] olur.
Sağlama: Tam kare olmayanlar 2, 3, 6, 12 ve 18'dir; 5 top. 4 + 5 = 9.
Sık yapılan hata: 1'i unutmak. 1 hem 36'nın bir bölenidir hem de tam karedir.
Cevap C.`
},
{
  id: "mat-ol-310",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kavanozda 5 çilekli ve 3 naneli şeker vardır. Kavanoza bir miktar karamelli şeker eklendikten sonra, kavanozdan rastgele alınan bir şekerin çilekli olma olasılığı [[1|4]] olmuştur. Şekerlerin ambalajları aynı olduğundan dışarıdan bakarak ayırt edilemezler.
**Buna göre kavanozdan rastgele alınan bir şekerin karamelli olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="Kavanozda Ç harfiyle gösterilen 5 çilekli ve N harfiyle gösterilen 3 naneli şeker var. Kavanoza sayısı bilinmeyen karamelli şekerler eklenecek."><rect x="62" y="14" width="136" height="22" rx="5" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="2"/><path d="M72 36 L72 54 Q40 64 40 96 L40 210 Q40 236 66 236 L194 236 Q220 236 220 210 L220 96 Q220 64 188 54 L188 36 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="70" cy="212" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="70" y="217" font-size="15" font-weight="bold" text-anchor="middle">Ç</text><circle cx="108" cy="212" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="108" y="217" font-size="15" font-weight="bold" text-anchor="middle">N</text><circle cx="146" cy="212" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="146" y="217" font-size="15" font-weight="bold" text-anchor="middle">Ç</text><circle cx="184" cy="212" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="184" y="217" font-size="15" font-weight="bold" text-anchor="middle">Ç</text><circle cx="89" cy="176" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="89" y="181" font-size="15" font-weight="bold" text-anchor="middle">N</text><circle cx="127" cy="176" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="127" y="181" font-size="15" font-weight="bold" text-anchor="middle">Ç</text><circle cx="165" cy="176" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="165" y="181" font-size="15" font-weight="bold" text-anchor="middle">N</text><circle cx="127" cy="140" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="127" y="145" font-size="15" font-weight="bold" text-anchor="middle">Ç</text><text x="262" y="80" font-size="15">Ç: çilekli şeker</text><text x="262" y="108" font-size="15">N: naneli şeker</text><rect x="256" y="140" width="290" height="62" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="401" y="166" font-size="15" font-weight="bold" text-anchor="middle">Eklenecek: karamelli şeker</text><text x="401" y="188" font-size="14" text-anchor="middle">(sayısı bilinmiyor)</text></svg>`,
  secenekler: ["[[3|5]]", "[[17|25]]", "[[12|17]]", "[[3|4]]"],
  dogru: 0,
  hatalar: [
    null,
    "[[1|4]] olasılığını \"1 çilekli şekere karşılık 4 başka şeker\" diye oran gibi okudun ve toplamı 25 aldın. Olasılık, istenen durumun bütün durumlara oranıdır; toplam 5 · 4 = 20 şekerdir.",
    "Paydaya karamelli ve çilekli şekerleri (12 + 5 = 17) yazıp naneli şekerleri unuttun. Kavanozda 20 şeker vardır.",
    "Karamelli şeker sayısını 20 − 5 = 15 buldun; naneli şekerleri çıkarmayı unuttun. Karamelli şeker 20 − 5 − 3 = 12 tanedir."
  ],
  aciklama: `Adım 1: Çilekli şeker olma olasılığı [[1|4]] ise çilekli şekerler kavanozdaki bütün şekerlerin dörtte biridir. 5 şeker dörtte bir olduğuna göre kavanozda 5 · 4 = 20 şeker vardır.
Adım 2: Karamelli şeker sayısı 20 − 5 − 3 = 12'dir.
Adım 3: Karamelli şeker olma olasılığı [[12|20]] = [[3|5]] olur.
Sağlama: Çilekli [[5|20]], naneli [[3|20]], karamelli [[12|20]]; bu olasılıkların toplamı [[20|20]] = 1'dir.
Sık yapılan hata: Olasılığı oran gibi okumak. [[1|4]], "her 4 şekerden 1'i çilekli" demektir; "1 çilekli şekere karşılık 4 başka şeker" demek değildir.
Cevap A.`
},
{
  id: "mat-ol-311",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sinema salonunun oturma planı aşağıda verilmiştir. Satılmış koltuklar çarpı işaretiyle gösterilmiştir. Gişe görevlisi, son dakikada gelen Mert'e boş koltuklardan birini bilgisayarla rastgele seçerek verecektir. Mert koridora bitişik bir koltukta oturmak istemektedir. Her sırada 4 ve 5 numaralı koltuklar koridora bitişiktir.
**Buna göre Mert'e verilen koltuğun koridora bitişik olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 302" role="img" aria-label="Sinema salonunun oturma planı: A, B, C, D sıralarında 1'den 8'e kadar koltuklar; 4 ile 5 numaralı koltuklar arasında koridor var. Satılmış koltuklar çarpı ile işaretli."><rect x="90" y="8" width="380" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="280" y="25" font-size="14" font-weight="bold" text-anchor="middle">PERDE</text><text x="84" y="62" font-size="14" font-weight="bold" text-anchor="middle">1</text><text x="132" y="62" font-size="14" font-weight="bold" text-anchor="middle">2</text><text x="180" y="62" font-size="14" font-weight="bold" text-anchor="middle">3</text><text x="228" y="62" font-size="14" font-weight="bold" text-anchor="middle">4</text><text x="336" y="62" font-size="14" font-weight="bold" text-anchor="middle">5</text><text x="384" y="62" font-size="14" font-weight="bold" text-anchor="middle">6</text><text x="432" y="62" font-size="14" font-weight="bold" text-anchor="middle">7</text><text x="480" y="62" font-size="14" font-weight="bold" text-anchor="middle">8</text><text x="34" y="98" font-size="15" font-weight="bold" text-anchor="middle">A</text><rect x="64" y="72" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M73 81 L95 103 M95 81 L73 103" stroke="currentColor" stroke-width="2.5"/><rect x="112" y="72" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="160" y="72" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="208" y="72" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M217 81 L239 103 M239 81 L217 103" stroke="currentColor" stroke-width="2.5"/><rect x="316" y="72" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M325 81 L347 103 M347 81 L325 103" stroke="currentColor" stroke-width="2.5"/><rect x="364" y="72" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="412" y="72" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="460" y="72" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M469 81 L491 103 M491 81 L469 103" stroke="currentColor" stroke-width="2.5"/><text x="34" y="146" font-size="15" font-weight="bold" text-anchor="middle">B</text><rect x="64" y="120" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="112" y="120" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M121 129 L143 151 M143 129 L121 151" stroke="currentColor" stroke-width="2.5"/><rect x="160" y="120" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M169 129 L191 151 M191 129 L169 151" stroke="currentColor" stroke-width="2.5"/><rect x="208" y="120" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="316" y="120" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M325 129 L347 151 M347 129 L325 151" stroke="currentColor" stroke-width="2.5"/><rect x="364" y="120" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="412" y="120" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="460" y="120" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="34" y="194" font-size="15" font-weight="bold" text-anchor="middle">C</text><rect x="64" y="168" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="112" y="168" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="160" y="168" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="208" y="168" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M217 177 L239 199 M239 177 L217 199" stroke="currentColor" stroke-width="2.5"/><rect x="316" y="168" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="364" y="168" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M373 177 L395 199 M395 177 L373 199" stroke="currentColor" stroke-width="2.5"/><rect x="412" y="168" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M421 177 L443 199 M443 177 L421 199" stroke="currentColor" stroke-width="2.5"/><rect x="460" y="168" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="34" y="242" font-size="15" font-weight="bold" text-anchor="middle">D</text><rect x="64" y="216" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M73 225 L95 247 M95 225 L73 247" stroke="currentColor" stroke-width="2.5"/><rect x="112" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="160" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="208" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="316" y="216" width="40" height="40" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M325 225 L347 247 M347 225 L325 247" stroke="currentColor" stroke-width="2.5"/><rect x="364" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="412" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="460" y="216" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="258" y1="70" x2="258" y2="258" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="4 4"/><line x1="306" y1="70" x2="306" y2="258" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="4 4"/><text x="282" y="164" font-size="14" text-anchor="middle" transform="rotate(-90 282 164)">KORİDOR</text><rect x="120" y="272" width="22" height="22" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="150" y="288" font-size="14">Boş koltuk</text><rect x="300" y="272" width="22" height="22" rx="4" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.8"/><path d="M305 277 L317 289 M317 277 L305 289" stroke="currentColor" stroke-width="2"/><text x="330" y="288" font-size="14">Satılmış koltuk</text></svg>`,
  secenekler: ["[[3|32]]", "[[3|20]]", "[[1|4]]", "[[3|8]]"],
  dogru: 1,
  hatalar: [
    "Paydaya salondaki bütün koltukları (32) yazdın. Satılmış koltuklar seçilemez; olası durumlar 20 boş koltuktur.",
    null,
    "Koltukların dolu olup olmadığına bakmadın: 32 koltuktan 8'i koridora bitişiktir. Seçim yalnızca boş koltuklar arasından yapılır.",
    "Koridora bitişik 8 koltuktan kaçının boş olduğunu buldun. Olası durumlar koridor koltukları değil, bütün boş koltuklardır."
  ],
  aciklama: `Olası durumlar, seçilebilecek bütün koltuklardır; yani yalnızca boş koltuklar.
Adım 1: Planda 4 sıra ve her sırada 8 koltuk vardır: 32 koltuk. Çarpı işaretli 12 koltuk satılmıştır; 32 − 12 = 20 koltuk boştur.
Adım 2: Koridora bitişik koltuklara (4 ve 5 numaralar) bak: A4 ve A5 dolu; B4 boş, B5 dolu; C4 dolu, C5 boş; D4 boş, D5 dolu. Koridora bitişik 3 boş koltuk vardır.
Adım 3: Olasılık [[3|20]] olur.
Sağlama: Koridora bitişik olmayan boş koltuklar 20 − 3 = 17 tanedir; [[3|20]] + [[17|20]] = 1.
Sık yapılan hata: Paydaya bütün koltukları yazmak. Seçim boş koltuklar arasından yapıldığı için payda 20'dir.
Cevap B.`
},
{
  id: "mat-ol-312",
  kazanim: "M.8.5.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir apartmanda kapı numaraları 1'den 30'a kadar olan 30 daire vardır. Apartman yönetimi, bu yılki bahar temizliğini hangi dairenin düzenleyeceğini kurayla belirleyecektir. Kapı numarası 4'ün katı olan daireler ile 6'nın katı olan daireler bu görevi geçmiş yıllarda yaptığı için kuraya katılmayacaktır. Kuraya katılan dairelerin numaraları ayrı kâğıtlara yazılıp bir torbaya atılacak ve torbadan bir kâğıt çekilecektir.
**Buna göre bu kura olayına ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["18", "20", "23", "25"],
  dogru: 1,
  hatalar: [
    "12 ile 24'ü iki kez çıkardın. Bu sayılar hem 4'ün hem 6'nın katıdır; kuradan bir kez çıkarılırlar.",
    null,
    "Yalnızca 4'ün katı olan 7 daireyi çıkardın. 6'nın katı olan daireler de kuraya katılmaz.",
    "Yalnızca 6'nın katı olan 5 daireyi çıkardın. 4'ün katı olan daireler de kuraya katılmaz."
  ],
  aciklama: `Bir olaya ait olası durumlar, o olayda ortaya çıkabilecek bütün sonuçlardır. Bu kurada sonuç torbadan çekilen kâğıttır; olası durumların sayısı torbadaki kâğıt sayısına eşittir.
Adım 1: 30'a kadar 4'ün katları: 4, 8, 12, 16, 20, 24, 28 (7 daire).
Adım 2: 30'a kadar 6'nın katları: 6, 12, 18, 24, 30 (5 daire). 12 ve 24 iki listede de vardır; bunlar 4 ile 6'nın ortak katlarıdır.
Adım 3: Kuraya katılmayan farklı daire sayısı 7 + 5 − 2 = 10'dur.
Adım 4: Torbaya 30 − 10 = 20 kâğıt atılır. Olası durumların sayısı 20'dir.
Sağlama: Katılmayanları tek tek yaz: 4, 6, 8, 12, 16, 18, 20, 24, 28, 30. On daire vardır.
Cevap B.`
},
{
  id: "mat-ol-313",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kutu oyununda piyon, zar atıldığında üst yüze gelen sayı kadar kare ileri götürülür. Bu oyunda kullanılan hilesiz zar özeldir; zarın açınımı aşağıda verilmiştir. Oyun tahtasında 6 ve 8 numaralı kareler yıldızlı karelerdir. Arda'nın piyonu şu anda 3 numaralı karededir. Piyon yıldızlı bir kareye giderse Arda bir yıldız kazanacaktır.
**Arda zarı bir kez attığına göre yıldız kazanma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Zarın açınımı: yüzlerde 3, 2, 5, 3, 4 ve 5 yazıyor. Oyun tahtasında 1'den 10'a kadar numaralı kareler var; 6 ve 8 numaralı kareler yıldızlı, piyon 3 numaralı karede."><text x="108" y="22" font-size="15" font-weight="bold" text-anchor="middle">Zarın açınımı</text><rect x="64" y="34" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="86" y="63" font-size="20" font-weight="bold" text-anchor="middle">3</text><rect x="20" y="78" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="42" y="107" font-size="20" font-weight="bold" text-anchor="middle">2</text><rect x="64" y="78" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="86" y="107" font-size="20" font-weight="bold" text-anchor="middle">5</text><rect x="108" y="78" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="130" y="107" font-size="20" font-weight="bold" text-anchor="middle">3</text><rect x="152" y="78" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="174" y="107" font-size="20" font-weight="bold" text-anchor="middle">4</text><rect x="64" y="122" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="86" y="151" font-size="20" font-weight="bold" text-anchor="middle">5</text><polygon points="282,62 284.94,69.95 293.41,70.29 286.76,75.55 289.05,83.71 282,79 274.95,83.71 277.24,75.55 270.59,70.29 279.06,69.95" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="302" y="79" font-size="15">Yıldızlı kare</text><circle cx="282" cy="106" r="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><path d="M273 124 L291 124 L286 112 L278 112 Z" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="302" y="117" font-size="15">Arda'nın piyonu</text><rect x="20" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="46" y="216" font-size="15" font-weight="bold" text-anchor="middle">1</text><rect x="72" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="98" y="216" font-size="15" font-weight="bold" text-anchor="middle">2</text><rect x="124" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="216" font-size="15" font-weight="bold" text-anchor="middle">3</text><circle cx="150" cy="230" r="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><path d="M141 248 L159 248 L154 236 L146 236 Z" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><rect x="176" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="202" y="216" font-size="15" font-weight="bold" text-anchor="middle">4</text><rect x="228" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="254" y="216" font-size="15" font-weight="bold" text-anchor="middle">5</text><rect x="280" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="306" y="216" font-size="15" font-weight="bold" text-anchor="middle">6</text><polygon points="306,225 308.7,232.28 316.46,232.6 310.37,237.42 312.47,244.9 306,240.6 299.53,244.9 301.63,237.42 295.54,232.6 303.3,232.28" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><rect x="332" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="358" y="216" font-size="15" font-weight="bold" text-anchor="middle">7</text><rect x="384" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="410" y="216" font-size="15" font-weight="bold" text-anchor="middle">8</text><polygon points="410,225 412.7,232.28 420.46,232.6 414.37,237.42 416.47,244.9 410,240.6 403.53,244.9 405.63,237.42 399.54,232.6 407.3,232.28" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><rect x="436" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="462" y="216" font-size="15" font-weight="bold" text-anchor="middle">9</text><rect x="488" y="196" width="52" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="514" y="216" font-size="15" font-weight="bold" text-anchor="middle">10</text><text x="540" y="278" font-size="14" text-anchor="end">İlerleme yönü →</text></svg>`,
  secenekler: ["[[1|6]]", "[[1|3]]", "[[1|2]]", "[[2|3]]"],
  dogru: 3,
  hatalar: [
    "Piyonun durduğu kareyi de sayarak ilerlettin. 3 numaralı kareden 3 kare ilerleyen piyon 6'ya, 5 kare ilerleyen piyon 8'e varır.",
    "Zarı 1'den 6'ya kadar numaralı standart bir zar sandın. Bu zarda 3 ve 5 sayıları ikişer yüzde yazılıdır.",
    "Zarda yazan farklı sayıları (2, 3, 4, 5) eşit şanslı saydın. Olası durumlar zarın 6 yüzüdür; 3 ve 5 ikişer yüzde vardır.",
    null
  ],
  aciklama: `Hilesiz bir zarda altı yüzün her birinin gelme olasılığı eşittir. Bir sayı birden fazla yüzde yazılıysa o sayının gelme olasılığı da artar.
Adım 1: Piyonun 3 numaralı kareden 6'ya gitmesi için 3, 8'e gitmesi için 5 gelmelidir.
Adım 2: Açınımda 3 sayısı iki yüzde, 5 sayısı iki yüzde yazılıdır. İstenen durum 4 yüzdür.
Adım 3: Olasılık [[4|6]] = [[2|3]] olur.
Sağlama: Yıldız kazandırmayan yüzler 2 ve 4 yazan iki yüzdür: [[2|6]] = [[1|3]]. [[2|3]] + [[1|3]] = 1.
Sık yapılan hata: Farklı sayıları sayıp [[2|4]] demek. Olası durumlar sayıların çeşidi değil, zarın yüzleridir.
Cevap D.`
},
{
  id: "mat-ol-314",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sınıfta söz alacak grubu belirlemek için 12 eş dilimli bir çark kullanılmaktadır. Çarkın dilimleri kırmızı (K), mavi (M) ve yeşil (Y) renklere boyanmıştır. Çark çevrilince okun durduğu dilimin rengi, söz alacak grubu gösterir.
Öğretmen, üç grubun söz alma olasılığının eşit olmasını istemektedir. Bunun için bazı dilimlerin rengini değiştirecektir.
**Buna göre en az kaç dilimin rengi değiştirilmelidir?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="12 eş dilimli çark; dilimler sırayla K, M, K, Y, K, K, M, K, Y, K, M, K harfleriyle gösterilmiş."><path d="M200 180 L236.23 44.77 A140 140 0 0 1 298.99 81.01 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L298.99 81.01 A140 140 0 0 1 335.23 143.77 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L335.23 143.77 A140 140 0 0 1 335.23 216.23 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L335.23 216.23 A140 140 0 0 1 298.99 278.99 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L298.99 278.99 A140 140 0 0 1 236.23 315.23 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L236.23 315.23 A140 140 0 0 1 163.77 315.23 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L163.77 315.23 A140 140 0 0 1 101.01 278.99 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L101.01 278.99 A140 140 0 0 1 64.77 216.23 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L64.77 216.23 A140 140 0 0 1 64.77 143.77 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L64.77 143.77 A140 140 0 0 1 101.01 81.01 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L101.01 81.01 A140 140 0 0 1 163.77 44.77 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M200 180 L163.77 44.77 A140 140 0 0 1 236.23 44.77 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="251.8" y="95.28" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="289.72" y="133.2" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="303.6" y="185" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="289.72" y="236.8" font-size="15" text-anchor="middle" font-weight="bold">Y</text><text x="251.8" y="274.72" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="200" y="288.6" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="148.2" y="274.72" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="110.28" y="236.8" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="96.4" y="185" font-size="15" text-anchor="middle" font-weight="bold">Y</text><text x="110.28" y="133.2" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="148.2" y="95.28" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="200" y="81.4" font-size="15" text-anchor="middle" font-weight="bold">K</text><polygon points="187,16 213,16 200,50" fill="currentColor"/><circle cx="200" cy="180" r="6" fill="currentColor"/><rect x="392" y="120" width="18" height="18" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.2"/><text x="418" y="135" font-size="15">K: kırmızı</text><rect x="392" y="156" width="18" height="18" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.2"/><text x="418" y="171" font-size="15">M: mavi</text><rect x="392" y="192" width="18" height="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.2"/><text x="418" y="207" font-size="15">Y: yeşil</text></svg>`,
  secenekler: ["2", "3", "4", "6"],
  dogru: 1,
  hatalar: [
    "Yalnızca yeşilin eksiğini (2 dilim) düşündün. Mavinin de 1 dilim eksiği vardır.",
    null,
    "Her rengin olması gereken dilim sayısını (12 : 3 = 4) buldun. Bu bir ara sonuçtur; soru rengi değişecek dilim sayısını soruyor.",
    "Kırmızının fazlasını (3) ve diğer renklerin eksiklerini (1 + 2) ayrı ayrı topladın. Bir kırmızı dilim başka renge boyanınca bir fazla ile bir eksik birlikte giderilir; aynı dilimleri iki kez saydın."
  ],
  aciklama: `Eş dilimli bir çarkta her dilimin gelme olasılığı eşittir: [[1|12]]. Bir rengin olasılığı, o renkteki dilim sayısının 12'ye bölümüdür. Renklerin olasılıkları ancak dilim sayıları eşitse eşit olur.
Adım 1: Çarktaki dilimleri say: kırmızı 7, mavi 3, yeşil 2.
Adım 2: Üç rengin olasılığının eşit olması için her renkte 12 : 3 = 4 dilim olmalıdır.
Adım 3: Kırmızıda 7 − 4 = 3 fazla dilim vardır. Bu 3 dilimden 1'i maviye, 2'si yeşile boyanırsa mavi 4, yeşil 4 dilim olur.
Adım 4: En az 3 dilimin rengi değiştirilmelidir.
Sağlama: Değişiklikten sonra her rengin olasılığı [[4|12]] = [[1|3]] olur.
Cevap B.`
},
{
  id: "mat-ol-315",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Olasılık dersinde öğretmen, rastgele yapılacak dört deneyi ve her deneyde kaydedilecek sonucu tahtaya yazmıştır. Öğrencilerden, kaydedilebilecek sonuçların hepsinin aynı olasılıkla ortaya çıktığı deneyi bulmalarını istemiştir.
**Buna göre aşağıdaki deneylerin hangisinde kaydedilebilecek sonuçların her birinin olasılığı eşittir?**`,
  gorsel: null,
  secenekler: ["1'den 20'ye kadar numaralı kartlardan biri çekilir; kartın birler basamağındaki rakam kaydedilir.", "1'den 24'e kadar numaralı kartlardan biri çekilir; kartın birler basamağındaki rakam kaydedilir.", "Haftanın yedi gününden biri seçilir; seçilen günün adındaki harf sayısı kaydedilir.", "Hilesiz bir zar atılır; üst yüze gelen sayının pozitif bölenlerinin sayısı kaydedilir."],
  dogru: 0,
  hatalar: [
    null,
    "Kartlar eşit şanslı diye rakamları da eşit şanslı sandın. 24'e kadar 1, 2, 3 ve 4 rakamları birler basamağında üçer kez (ör. 1, 11, 21), diğer rakamlar ikişer kez bulunur.",
    "Günler eşit şanslı diye harf sayılarını da eşit şanslı sandın. 4, 8 ve 9 harfli ikişer gün varken 5 harfli tek gün (pazar) vardır.",
    "Zarın yüzleri eşit şanslı diye bölen sayılarını da eşit şanslı sandın. Bölen sayısı 2 olan üç yüz (2, 3, 5) vardır; 1, 3 ve 4 değerleri birer yüzde çıkar."
  ],
  aciklama: `Bir deneyde sonuçların eşit şanslı olması için her sonuca aynı sayıda olası durumun karşılık gelmesi gerekir. Seçilen nesneler eşit şanslı olsa bile kaydedilen özellik eşit şanslı olmayabilir.
Adım 1: 1'den 20'ye kadar sayılarda birler basamağındaki her rakam iki kez geçer: 0 (10, 20), 1 (1, 11), 2 (2, 12), …, 9 (9, 19). On rakamın her birinin olasılığı [[2|20]] = [[1|10]] olur. Bu deney eşit şanslıdır.
Adım 2: 1'den 24'e kadar sayılarda 1, 2, 3, 4 rakamları üçer kez, diğer rakamlar ikişer kez geçer. Eşit şanslı değildir.
Adım 3: Gün adlarının harf sayıları: pazartesi 9, salı 4, çarşamba 8, perşembe 8, cuma 4, cumartesi 9, pazar 5. Beş harfli tek gün vardır. Eşit şanslı değildir.
Adım 4: Zarda bölen sayıları: 1 → 1, 2 → 2, 3 → 2, 4 → 3, 5 → 2, 6 → 4. 2 değeri üç yüzde çıkar. Eşit şanslı değildir.
Sık yapılan hata: "Kartlar eşit şanslıysa her sonuç eşit şanslıdır." diye düşünmek. Önce her sonuca kaç kartın karşılık geldiğini say.
Cevap A.`
},
{
  id: "mat-ol-316",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Ece, kardeşiyle oynayacağı bir şans oyunu için bir torbadaki topları yeniden düzenlemektedir. Torbadaki kırmızı, mavi, sarı ve yeşil topların sayılarına göre dağılımı aşağıdaki daire grafiğinde gösterilmiştir. Torbada 2 yeşil top vardır.
Ece torbaya yalnızca yeşil top ekleyecek, başka bir değişiklik yapmayacaktır. Oyunun dengeli olması için şu iki koşulu sağlamak istemektedir:
1. koşul: Ekleme yapıldıktan sonra torbadan rastgele çekilen bir topun yeşil olma olasılığı, mavi olma olasılığından fazla olmalıdır.
2. koşul: Aynı çekilişte topun yeşil olma olasılığı, kırmızı olma olasılığından az olmalıdır.
**Buna göre Ece torbaya en fazla kaç yeşil top ekleyebilir?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Daire grafiği: Kırmızı 150 derece, Mavi 90 derece, Sarı 90 derece, Yeşil 30 derece."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Torbadaki topların renklere göre dağılımı</text><path d="M280 185 L280 55 A130 130 0 0 1 345 297.58 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L345 297.58 A130 130 0 0 1 167.42 250 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L167.42 250 A130 130 0 0 1 215 72.42 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L215 72.42 A130 130 0 0 1 280 55 Z" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.5"/><text x="357.85" y="160.14" font-size="15" text-anchor="middle" font-weight="bold">Kırmızı</text><text x="357.85" y="178.14" font-size="14" text-anchor="middle">150°</text><text x="259.14" y="258.85" font-size="15" text-anchor="middle" font-weight="bold">Mavi</text><text x="259.14" y="276.85" font-size="14" text-anchor="middle">90°</text><text x="202.15" y="160.14" font-size="15" text-anchor="middle" font-weight="bold">Sarı</text><text x="202.15" y="178.14" font-size="14" text-anchor="middle">90°</text><text x="255.1" y="88.08" font-size="15" text-anchor="middle" font-weight="bold">Yeşil</text><text x="255.1" y="106.08" font-size="14" text-anchor="middle">30°</text></svg>`,
  secenekler: ["9", "8", "7", "5"],
  dogru: 2,
  hatalar: [
    "Torbada zaten bulunan 2 yeşil topu unuttun; eklenecek top sayısını yeşil top sayısı gibi düşündün. 9 top eklenirse yeşil top 11 olur ve kırmızıyı (10) geçer.",
    "Sınırı dahil ettin. 8 top eklenince yeşil top 10 olur ve kırmızıyla eşit olasılıklı hâle gelir; \"az\" koşulu bozulur.",
    null,
    "Koşulları sağlayan en küçük sayıyı buldun. Soru en fazla kaç top eklenebileceğini soruyor."
  ],
  aciklama: `Aynı torbadan yapılan bir çekilişte iki rengin olasılığını karşılaştırmak için top sayılarını karşılaştırmak yeter; çünkü iki olasılığın paydası da torbadaki bütün toplardır.
Adım 1: Yeşil dilimin açısı 30°'dir ve 2 topa karşılık gelir. Bir top 30° : 2 = 15°'lik pay demektir.
Adım 2: Diğer renklerin top sayılarını bul: kırmızı 150° : 15° = 10, mavi 90° : 15° = 6, sarı 90° : 15° = 6.
Adım 3: Ekleme yapıldıktan sonra yeşil top sayısı 6'dan fazla, 10'dan az olmalıdır: 7, 8 ya da 9.
Adım 4: Yeşil top sayısı en fazla 9 olabilir. Torbada 2 yeşil top olduğundan en fazla 9 − 2 = 7 top eklenebilir.
Sağlama: 7 top eklenince torbada 31 top olur. Yeşil [[9|31]], mavi [[6|31]], kırmızı [[10|31]]; [[6|31]] < [[9|31]] < [[10|31]].
Cevap C.`
},
{
  id: "mat-ol-317",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir pastanede 20 gün boyunca her akşam satılmadan kalan pasta dilimi sayıları kaydedilmiş ve aşağıdaki sütun grafiğinde gösterilmiştir. Örneğin bu 20 günün 6'sında akşam 1 dilim pasta kalmıştır.
Pastane sahibi, israfı azaltmak için kalan pasta dilimi sayısının 20 günlük ortalamanın üzerinde olduğu günleri incelemek istemektedir. Bu amaçla 20 günden birini rastgele seçip o günün kayıtlarına bakacaktır.
**Buna göre seçilen günde kalan pasta dilimi sayısının, 20 günlük ortalamadan fazla olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Sütun grafiği: 0 dilim kalan 3 gün, 1 dilim kalan 6 gün, 2 dilim kalan 5 gün, 3 dilim kalan 4 gün, 4 dilim kalan 2 gün."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Akşam satılmadan kalan pasta dilimi sayısı</text><text x="8" y="54" font-size="14">Gün sayısı</text><text x="56" y="283" font-size="14" text-anchor="end">0</text><line x1="64" y1="248.29" x2="544" y2="248.29" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="253.29" font-size="14" text-anchor="end">1</text><line x1="64" y1="218.57" x2="544" y2="218.57" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="223.57" font-size="14" text-anchor="end">2</text><line x1="64" y1="188.86" x2="544" y2="188.86" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="193.86" font-size="14" text-anchor="end">3</text><line x1="64" y1="159.14" x2="544" y2="159.14" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="164.14" font-size="14" text-anchor="end">4</text><line x1="64" y1="129.43" x2="544" y2="129.43" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="134.43" font-size="14" text-anchor="end">5</text><line x1="64" y1="99.71" x2="544" y2="99.71" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="104.71" font-size="14" text-anchor="end">6</text><line x1="64" y1="70" x2="544" y2="70" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="75" font-size="14" text-anchor="end">7</text><g stroke="currentColor" stroke-width="2"><line x1="64" y1="278" x2="544" y2="278"/><line x1="64" y1="278" x2="64" y2="62"/></g><text x="112" y="299" font-size="15" text-anchor="middle">0</text><rect x="88" y="188.86" width="48" height="89.14" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.2"/><text x="208" y="299" font-size="15" text-anchor="middle">1</text><rect x="184" y="99.71" width="48" height="178.29" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.2"/><text x="304" y="299" font-size="15" text-anchor="middle">2</text><rect x="280" y="129.43" width="48" height="148.57" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.2"/><text x="400" y="299" font-size="15" text-anchor="middle">3</text><rect x="376" y="159.14" width="48" height="118.86" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.2"/><text x="496" y="299" font-size="15" text-anchor="middle">4</text><rect x="472" y="218.57" width="48" height="59.43" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.2"/><text x="304" y="322" font-size="14" text-anchor="middle">Kalan pasta dilimi sayısı</text></svg>`,
  secenekler: ["[[11|20]]", "[[9|20]]", "[[11|36]]", "[[3|10]]"],
  dogru: 0,
  hatalar: [
    null,
    "Ortalamadan az pasta kalan günlerin olasılığını buldun (0 ve 1 dilim kalan 9 gün).",
    "Paydaya toplam pasta dilimi sayısını (36) yazdın. Seçim günler arasından yapıldığı için olası durumlar 20 gündür.",
    "Sütunların yüksekliğini hesaba katmadan 0, 1, 2, 3, 4 sayılarının ortalamasını (2) aldın. Gerçek ortalama 1,8 olduğundan 2 dilim kalan günler de ortalamanın üzerindedir."
  ],
  aciklama: `Aritmetik ortalama, verilerin toplamının veri sayısına bölümüdür. Sütun grafiğinde her değer, sütunun gösterdiği gün sayısı kadar tekrar eder.
Adım 1: Grafikten oku: 3 gün 0, 6 gün 1, 5 gün 2, 4 gün 3, 2 gün 4 dilim pasta kalmıştır.
Adım 2: Kalan dilimlerin toplamı 3 · 0 + 6 · 1 + 5 · 2 + 4 · 3 + 2 · 4 = 0 + 6 + 10 + 12 + 8 = 36'dır. Ortalama 36 : 20 = 1,8 dilimdir.
Adım 3: 1,8'den fazla olan değerler 2, 3 ve 4'tür. Bu günlerin sayısı 5 + 4 + 2 = 11'dir.
Adım 4: Olasılık [[11|20]] olur.
Sağlama: Ortalamadan az olan günler 3 + 6 = 9'dur; 11 + 9 = 20. Ortalama tam sayı olmadığından ortalamaya eşit gün yoktur.
Sık yapılan hata: Ortalamayı sütun yüksekliklerini hesaba katmadan bulmak. Her değer, kaç gün görüldüyse o kadar sayılmalıdır.
Cevap A.`
},
{
  id: "mat-ol-318",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kırtasiyenin hazırladığı hediye kutusunda yalnızca kırmızı, mavi ve sarı kalemler vardır. Kutuda toplam 30 kalem bulunmaktadır ve her renkten en az bir kalem vardır. Kırtasiye sahibi kutuyla ilgili şu bilgileri vermiştir:
Kırmızı kalemlerin sayısı, mavi kalemlerin sayısının 2 katıdır.
Kutudan rastgele alınan bir kalemin sarı olma olasılığı [[1|5]] sayısından büyük, [[1|2]] sayısından küçüktür.
Bir müşteri, bu bilgilere göre kutudaki mavi kalem sayısı için olabilecek bütün değerleri bulmaya çalışmaktadır.
**Buna göre kutudaki mavi kalemlerin sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["8", "4", "3", "2"],
  dogru: 3,
  hatalar: [
    "Kırmızı kalemlerin mavinin 2 katı olması koşulunu kullanmadın. Sarı kalem sayısı için 7'den 14'e kadar 8 değer saydın; oysa sarı kalem sayısı, 30'dan mavinin 3 katı çıkarılarak bulunur.",
    "Sınırların ikisini de dahil ettin. Mavi 5 iken sarı olma olasılığı tam [[1|2]], mavi 8 iken tam [[1|5]] olur; bu değerler \"büyük\" ve \"küçük\" koşullarını sağlamaz.",
    "Sınırlardan birini dahil ettin. Olasılığın tam [[1|5]] ya da tam [[1|2]] olduğu durumlar koşulu sağlamaz.",
    null
  ],
  aciklama: `Adım 1: Kırmızı kalem sayısı mavinin 2 katı olduğundan kırmızı ve mavi kalemler birlikte mavinin 3 katı kadardır. Sarı kalem sayısı = 30 − 3 · (mavi kalem sayısı).
Adım 2: Sarı olma olasılığı [[1|5]] olsaydı sarı kalem 30 : 5 = 6, [[1|2]] olsaydı 30 : 2 = 15 olurdu. Sarı kalem sayısı 6'dan büyük, 15'ten küçük olmalıdır.
Adım 3: Mavi kalem sayısının alabileceği değerleri dene: Mavi 1, 2, 3, 4, 5, 6, 7, 8, 9 iken sarı kalem sırasıyla 27, 24, 21, 18, 15, 12, 9, 6, 3 olur. Sarı kalem sayısı yalnızca mavi 6 iken (12) ve mavi 7 iken (9) 6 ile 15 arasındadır.
Adım 4: Mavi kalem sayısı 2 farklı değer alabilir.
Sağlama: Mavi 6 ise kırmızı 12, sarı 12 kalem olur ve sarı olma olasılığı [[12|30]] = [[2|5]] bulunur. Mavi 7 ise kırmızı 14, sarı 9 kalem olur ve olasılık [[9|30]] = [[3|10]] bulunur. İki değer de [[1|5]] = [[2|10]] ile [[1|2]] = [[5|10]] arasındadır.
Sık yapılan hata: Sınır değerleri dahil etmek. "Büyük" ve "küçük" sözcükleri eşitliği kapsamaz.
Cevap D.`
},
{
  id: "mat-ol-319",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun 8-A ve 8-B şubelerindeki öğrencilerin okula geliş biçimleri aşağıdaki sütun grafiğinde gösterilmiştir. Her öğrenci okula yalnızca bir biçimde gelmektedir.
Okul yönetimi, ulaşım anketi için bu iki şubeden birini kendisi belirleyecek, sonra belirlediği şubenin öğrencileri arasından rastgele bir öğrenci seçecektir. Hangi şubenin belirleneceğine henüz karar verilmemiştir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="İki veri gruplu sütun grafiği. 8-A: yürüyerek 10, servis 6, toplu taşıma 5, bisiklet 4. 8-B: yürüyerek 11, servis 9, toplu taşıma 4, bisiklet 6."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Öğrencilerin okula geliş biçimleri</text><text x="8" y="54" font-size="14">Öğrenci sayısı</text><text x="56" y="283" font-size="14" text-anchor="end">0</text><line x1="64" y1="260.67" x2="544" y2="260.67" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="265.67" font-size="14" text-anchor="end">1</text><line x1="64" y1="243.33" x2="544" y2="243.33" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="248.33" font-size="14" text-anchor="end">2</text><line x1="64" y1="226" x2="544" y2="226" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="231" font-size="14" text-anchor="end">3</text><line x1="64" y1="208.67" x2="544" y2="208.67" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="213.67" font-size="14" text-anchor="end">4</text><line x1="64" y1="191.33" x2="544" y2="191.33" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="196.33" font-size="14" text-anchor="end">5</text><line x1="64" y1="174" x2="544" y2="174" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="179" font-size="14" text-anchor="end">6</text><line x1="64" y1="156.67" x2="544" y2="156.67" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="161.67" font-size="14" text-anchor="end">7</text><line x1="64" y1="139.33" x2="544" y2="139.33" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="144.33" font-size="14" text-anchor="end">8</text><line x1="64" y1="122" x2="544" y2="122" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="127" font-size="14" text-anchor="end">9</text><line x1="64" y1="104.67" x2="544" y2="104.67" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="109.67" font-size="14" text-anchor="end">10</text><line x1="64" y1="87.33" x2="544" y2="87.33" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="92.33" font-size="14" text-anchor="end">11</text><line x1="64" y1="70" x2="544" y2="70" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="75" font-size="14" text-anchor="end">12</text><g stroke="currentColor" stroke-width="2"><line x1="64" y1="278" x2="544" y2="278"/><line x1="64" y1="278" x2="64" y2="62"/></g><text x="124" y="299" font-size="15" text-anchor="middle">Yürüyerek</text><rect x="84" y="104.67" width="40" height="173.33" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.2"/><rect x="124" y="87.33" width="40" height="190.67" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><text x="244" y="299" font-size="15" text-anchor="middle">Servis</text><rect x="204" y="174" width="40" height="104" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.2"/><rect x="244" y="122" width="40" height="156" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><text x="364" y="299" font-size="15" text-anchor="middle">Toplu taşıma</text><rect x="324" y="191.33" width="40" height="86.67" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.2"/><rect x="364" y="208.67" width="40" height="69.33" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><text x="484" y="299" font-size="15" text-anchor="middle">Bisiklet</text><rect x="444" y="208.67" width="40" height="69.33" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.2"/><rect x="484" y="174" width="40" height="104" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.2"/><rect x="330" y="42" width="14" height="14" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="350" y="54" font-size="14">8-A</text><rect x="430" y="42" width="14" height="14" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="450" y="54" font-size="14">8-B</text></svg>`,
  secenekler: ["Seçim 8-B'den yapılırsa yürüyerek gelen bir öğrencinin seçilme olasılığı, seçim 8-A'dan yapılırsa yürüyerek gelen bir öğrencinin seçilme olasılığından fazladır.", "Seçim 8-A'dan yapılırsa servisle gelen bir öğrencinin seçilme olasılığı, seçim 8-B'den yapılırsa bisikletle gelen bir öğrencinin seçilme olasılığına eşittir.", "Seçim 8-A'dan yapılırsa bisikletle gelen bir öğrencinin seçilme olasılığı, seçim 8-B'den yapılırsa toplu taşımayla gelen bir öğrencinin seçilme olasılığından azdır.", "Seçim 8-A'dan yapılırsa toplu taşımayla gelen bir öğrencinin seçilme olasılığı, seçim 8-B'den yapılırsa bisikletle gelen bir öğrencinin seçilme olasılığına eşittir."],
  dogru: 3,
  hatalar: [
    "Yalnızca öğrenci sayılarını karşılaştırdın (11 > 10). Şubelerin mevcutları farklıdır: [[11|30]] < [[10|25]] olduğundan bu olasılık 8-B'de daha azdır.",
    "Öğrenci sayıları eşit (6) diye olasılıkları eşit sandın. Paydalar farklıdır: [[6|25]] > [[6|30]].",
    "Payları eşit kesirleri ters karşılaştırdın. [[4|25]] ile [[4|30]] kesirlerinden paydası küçük olan daha büyüktür; 8-A'daki olasılık daha fazladır.",
    null
  ],
  aciklama: `Farklı topluluklardan yapılan seçimlerde olasılıkları karşılaştırırken yalnızca istenen kişi sayısına değil, topluluğun mevcuduna da bakılır.
Adım 1: Grafikten oku. 8-A: yürüyerek 10, servis 6, toplu taşıma 5, bisiklet 4; mevcut 25. 8-B: yürüyerek 11, servis 9, toplu taşıma 4, bisiklet 6; mevcut 30.
Adım 2: A seçeneği: [[11|30]] ile [[10|25]] karşılaştırılır. Ortak payda 150 alınırsa [[55|150]] < [[60|150]] olur. 8-B'deki olasılık daha azdır; A yanlıştır.
Adım 3: B seçeneği: [[6|25]] ile [[6|30]] eşit değildir; B yanlıştır. C seçeneği: [[4|25]] > [[4|30]] olduğundan C yanlıştır.
Adım 4: D seçeneği: [[5|25]] = [[1|5]] ve [[6|30]] = [[1|5]]. İki olasılık eşittir; D doğrudur.
Sık yapılan hata: Sütunların boylarını doğrudan karşılaştırmak. Şube mevcutları farklıysa önce olasılıkları kesir olarak yazıp sadeleştir.
Cevap D.`
},
{
  id: "mat-ol-320",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Zeynep'in telefonundaki çalma listesinde bulunan parçaların türlere göre sayıları aşağıdaki tabloda verilmiştir. Zeynep listeyi karışık çalma modunda başlattığında ilk çalınacak parça listeden rastgele seçilir.
Zeynep listeden bazı pop parçalarını silip her silinen parçanın yerine yeni bir klasik müzik parçası ekleyecektir. Böylece listedeki parça sayısı değişmeyecek, ilk çalınacak parçanın klasik müzik olma olasılığı ise pop olma olasılığından fazla olacaktır.
**Buna göre Zeynep en az kaç pop parçasını silmelidir?**`,
  gorsel: `<table class="tablo"><tr><th>Tür</th><th>Parça sayısı</th></tr><tr><td>Pop</td><td>12</td></tr><tr><td>Rock</td><td>6</td></tr><tr><td>Klasik müzik</td><td>2</td></tr></table>`,
  secenekler: ["11", "10", "6", "5"],
  dogru: 2,
  hatalar: [
    "Aradaki farkı (12 − 2 = 10) bulup \"fazla olsun\" diye 1 ekledin. Her değişiklik farkı 2 azalttığı için bu kadar değişiklik gerekmez.",
    "Aradaki farkı (10) kapatmak için 10 parça değiştirmek gerektiğini düşündün. Bir pop parçası silinip yerine klasik eklenince pop 1 azalır, klasik 1 artar; fark 2 kapanır.",
    null,
    "Sınır durumunu kontrol etmedin. 5 değişiklikten sonra pop ve klasik 7'şer parça olur; olasılıklar eşit olur, \"fazla\" koşulu sağlanmaz."
  ],
  aciklama: `Aynı listeden yapılan seçimde iki türün olasılığını karşılaştırmak için parça sayılarını karşılaştırmak yeter; iki olasılığın paydası da listedeki bütün parçalardır.
Adım 1: Başlangıçta pop 12, klasik müzik 2 parçadır; aradaki fark 10'dur.
Adım 2: Her değişiklikte pop 1 azalır, klasik 1 artar; fark 2 küçülür.
Adım 3: Değişiklikleri dene: 5 değişiklikte pop 7, klasik 7 olur (eşit). 6 değişiklikte pop 6, klasik 8 olur (klasik fazla).
Adım 4: Zeynep en az 6 pop parçasını silmelidir.
Sağlama: 6 değişiklikten sonra listede 6 pop, 6 rock, 8 klasik parça vardır; toplam yine 20'dir. Klasik olma olasılığı [[8|20]], pop olma olasılığı [[6|20]] olur.
Cevap C.`
},
{
  id: "mat-ol-321",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mağaza, açılış gününde müşterilerine torbadan top çektirerek hediye vermektedir. Torbada yalnızca kırmızı, mavi ve beyaz toplar vardır. Kırmızı top çeken müşteri bir kalem, mavi top çeken bir defter, beyaz top çeken bir sırt çantası kazanır.
Mağaza müdürü torbadaki top sayısını açıklamamış, ilk müşterinin torbadan çekeceği top için yalnızca şu bilgileri vermiştir:
Kırmızı top çekme olasılığı: [[3|8]]
Mavi top çekme olasılığı: [[5|12]]
**Buna göre torbada en az kaç beyaz top vardır?**`,
  gorsel: null,
  secenekler: ["5", "10", "20", "24"],
  dogru: 0,
  hatalar: [
    null,
    "Mavi top sayısını buldun (24 · [[5|12]] = 10). Soru beyaz topları soruyor.",
    "Toplam top sayısını EKOK(8, 12) = 24 yerine 8 · 12 = 96 aldın. 96 topta 20 beyaz top olur ama bu en küçük değer değildir.",
    "Torbadaki toplam top sayısını (24) buldun. Bu bir ara sonuçtur; soru beyaz top sayısını soruyor."
  ],
  aciklama: `Bir olasılık kesri, istenen top sayısının toplam top sayısına bölümüdür. Top sayıları doğal sayı olduğundan toplam top sayısı, kesirlerin paydalarına uygun olmalıdır.
Adım 1: Kırmızı top sayısı toplamın [[3|8]] kadarıdır; bunun doğal sayı olması için toplam 8'in katı olmalıdır. Mavi top sayısı toplamın [[5|12]] kadarıdır; toplam 12'nin de katı olmalıdır.
Adım 2: Toplam, 8 ile 12'nin ortak katıdır. En küçük ortak kat EKOK(8, 12) = 24'tür.
Adım 3: 24 topta kırmızı 24 · [[3|8]] = 9, mavi 24 · [[5|12]] = 10, beyaz 24 − 9 − 10 = 5 toptur.
Adım 4: Toplam büyüdükçe beyaz top sayısı da büyür (48 topta 10, 72 topta 15). Torbada en az 5 beyaz top vardır.
Sağlama: Beyaz top çekme olasılığı 1 − [[3|8]] − [[5|12]] = [[24|24]] − [[9|24]] − [[10|24]] = [[5|24]] olur; bu da 24 topta 5 beyaz top demektir.
Cevap A.`
},
{
  id: "mat-ol-322",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mahalle festivalinde kullanılan çark aşağıda gösterilmiştir. Çarkın 7 diliminden biri "Ödül", diğerleri "Pas" dilimidir; her dilimin merkez açısı üzerine yazılmıştır. Çarkı çeviren kişi, ok "Ödül" diliminde durursa ödül kazanır.
Festival ekibi, bazı "Pas" dilimlerini "Ödül" dilimine çevirerek ödül kazanma olasılığını [[1|2]] sayısından büyük yapmak istemektedir. Dilimlerin büyüklükleri değişmeyecektir.
**Buna göre en az kaç "Pas" dilimi "Ödül" dilimine çevrilmelidir?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Çark: Ödül 90 derece; Pas dilimleri 30, 45, 90, 30, 45 ve 30 derece."><path d="M280 185 L329.59 48.74 A145 145 0 0 1 416.26 234.59 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L416.26 234.59 A145 145 0 0 1 373.2 296.08 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L373.2 296.08 A145 145 0 0 1 267.36 329.45 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L267.36 329.45 A145 145 0 0 1 135.55 172.36 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L135.55 172.36 A145 145 0 0 1 161.22 101.83 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L161.22 101.83 A145 145 0 0 1 254.82 42.2 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 185 L254.82 42.2 A145 145 0 0 1 329.59 48.74 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="371.99" y="138.1" font-size="15" text-anchor="middle" font-weight="bold">Ödül</text><text x="371.99" y="156.1" font-size="14" text-anchor="middle">90°</text><text x="367.9" y="242.54" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="367.9" y="260.54" font-size="14" text-anchor="middle">30°</text><text x="310.52" y="277.8" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="310.52" y="295.8" font-size="14" text-anchor="middle">45°</text><text x="202.25" y="246.24" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="202.25" y="264.24" font-size="14" text-anchor="middle">90°</text><text x="179.17" y="144.3" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="179.17" y="162.3" font-size="14" text-anchor="middle">30°</text><text x="225.46" y="95.4" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="225.46" y="113.4" font-size="14" text-anchor="middle">45°</text><text x="289.35" y="74.11" font-size="15" text-anchor="middle" font-weight="bold">Pas</text><text x="289.35" y="92.11" font-size="14" text-anchor="middle">30°</text><polygon points="267,16 293,16 280,50" fill="currentColor"/><circle cx="280" cy="185" r="6" fill="currentColor"/></svg>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Sınırı dahil ettin. 90°'lik \"Pas\" dilimi çevrilince ödül bölgesi 180° olur; olasılık tam [[1|2]] olur, [[1|2]] sayısından büyük olmaz.",
    null,
    "Dilimleri eş büyüklükte sanıp 7 dilimin yarısından fazlasını (4 dilim) \"Ödül\" yapmaya çalıştın. Dilimlerin açıları farklıdır.",
    "En küçük dilimlerden başladın (30° + 30° + 30° + 45°). En az dilim çevirmek için en büyük dilimlerden başlamalısın."
  ],
  aciklama: `Dilimleri farklı büyüklükte olan bir çarkta bir bölgenin olasılığı, o bölgenin toplam açısının 360°'ye bölümüdür.
Adım 1: Olasılığın [[1|2]] sayısından büyük olması için "Ödül" bölgesinin toplam açısı 360° : 2 = 180°'den büyük olmalıdır.
Adım 2: Şu anda "Ödül" bölgesi 90°'dir. Bölgeye 180° − 90° = 90°'den fazla açı eklenmelidir.
Adım 3: En büyük "Pas" dilimi 90°'dir. Tek başına çevrilirse bölge tam 180° olur ve olasılık tam [[1|2]] olur; bu yetmez. Yani 1 dilim yetmez.
Adım 4: 90°'lik dilimle birlikte bir dilim daha (örneğin 30°'lik) çevrilirse bölge 90° + 90° + 30° = 210° olur: [[210|360]] = [[7|12]]. Bu değer [[1|2]] sayısından büyüktür. En az 2 dilim gerekir.
Sık yapılan hata: Dilim sayısına bakmak. Dilimler eş değilse olasılık dilim sayısıyla değil, açıların toplamıyla bulunur.
Cevap B.`
},
{
  id: "mat-ol-323",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Matematik kulübünün hazırladığı bir oyunda torbadaki toplar 1'den başlayarak sırayla numaralandırılmıştır; her topta farklı bir numara vardır ve son topun numarası torbadaki top sayısına eşittir. Kulüp başkanı Kerem, torbadaki top sayısını söylememiş, yalnızca iki ipucu vermiştir:
Torbadaki top sayısı 30'dan azdır.
Torbadan rastgele çekilen bir topun numarasının asal sayı olma olasılığı [[2|5]] olur.
**Buna göre torbada en fazla kaç top olabilir?**`,
  gorsel: null,
  secenekler: ["10", "15", "20", "25"],
  dogru: 2,
  hatalar: [
    "Koşulu sağlayan ilk değeri bulup durdun. 15 ve 20 top için de olasılık [[2|5]] olur; soru en fazla değeri soruyor.",
    "Asal sayıları eksik saydın. 20'ye kadar 8 asal sayı vardır (2, 3, 5, 7, 11, 13, 17, 19); [[8|20]] = [[2|5]] olur.",
    null,
    "1'i asal saydın. 1 asal değildir; 25'e kadar 9 asal sayı vardır ve [[9|25]], [[2|5]] değildir."
  ],
  aciklama: `Yalnızca iki pozitif böleni (1 ve kendisi) olan doğal sayılara asal sayı denir. 1'in tek böleni olduğundan 1 asal değildir.
Adım 1: Olasılık [[2|5]] ise asal numaralı topların sayısı toplamın beşte ikisidir. Bunun doğal sayı olması için top sayısı 5'in katı olmalıdır: 5, 10, 15, 20 ya da 25 (30'dan az).
Adım 2: Her biri için asal sayıları say: 5'e kadar 3 (2, 3, 5); 10'a kadar 4 (7 eklenir); 15'e kadar 6 (11, 13 eklenir); 20'ye kadar 8 (17, 19 eklenir); 25'e kadar 9 (23 eklenir).
Adım 3: Olasılıkları kontrol et: [[3|5]]; [[4|10]] = [[2|5]]; [[6|15]] = [[2|5]]; [[8|20]] = [[2|5]]; [[9|25]]. Koşulu 10, 15 ve 20 sağlar.
Adım 4: Torbada en fazla 20 top olabilir.
Sık yapılan hata: 1'i asal saymak. O zaman 25 top için [[10|25]] = [[2|5]] bulunur ve yanlış cevaba gidilir.
Cevap C.`
},
{
  id: "mat-ol-324",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir oyuncakçıdaki sürpriz makinesinde yalnızca kırmızı ve mavi kapsüller vardır. Makine, her kullanımda içindeki kapsüllerden birini rastgele verir. Satıcı, makinedeki kapsül sayılarını söylemeden iki durumu şöyle anlatmıştır:
Makineye 3 kırmızı kapsül eklenseydi, verilecek kapsülün kırmızı olma olasılığı [[1|2]] olurdu.
Makineden 2 kırmızı kapsül çıkarılsaydı, verilecek kapsülün kırmızı olma olasılığı [[1|3]] olurdu.
**Buna göre şu anda makinenin vereceği kapsülün kırmızı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[7|10]]", "[[10|17]]", "[[7|17]]", "[[1|3]]"],
  dogru: 2,
  hatalar: [
    "Kırmızı kapsül sayısını mavi kapsül sayısına böldün. Olasılıkta payda bütün kapsüllerdir: 7 + 10 = 17.",
    "Mavi kapsül olma olasılığını buldun. Soru kırmızıyı soruyor.",
    null,
    "Varsayılan durumla şu anki durumu karıştırdın. [[1|3]], makineden 2 kırmızı kapsül çıkarılsaydı geçerli olacak olasılıktır."
  ],
  aciklama: `Yalnızca iki renk varken kırmızı olma olasılığının [[1|2]] olması, kırmızı ile mavi sayısının eşit olması demektir. Olasılığın [[1|3]] olması ise mavi sayısının kırmızının 2 katı olması demektir.
Adım 1: Birinci durum: 3 kırmızı eklenince kırmızı ile mavi eşit olur. Yani mavi kapsüller, kırmızılardan 3 fazladır.
Adım 2: İkinci durum: 2 kırmızı çıkarılınca mavi, kalan kırmızının 2 katı olur.
Adım 3: Kırmızı sayısını dene: 5 kırmızı → mavi 8, ama 2 · 3 = 6 (tutmaz). 6 kırmızı → mavi 9, ama 2 · 4 = 8 (tutmaz). 7 kırmızı → mavi 10 ve 2 · 5 = 10 (tutar).
Adım 4: Makinede 7 kırmızı, 10 mavi kapsül vardır. Kırmızı olma olasılığı [[7|17]] olur.
Sağlama: 3 kırmızı eklenince 10 kırmızı, 10 mavi: [[10|20]] = [[1|2]]. 2 kırmızı çıkarılınca 5 kırmızı, 10 mavi: [[5|15]] = [[1|3]].
Cevap C.`
},
{
  id: "mat-ol-325",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Okul kermesinde her stantta, yapılan her alışveriş için bir çekiliş bileti verilmiştir. Kitap, pasta ve oyun stantlarında verilen bilet sayıları aşağıdaki tabloda gösterilmiştir; el işi standının kaydı ise kaybolmuştur. Verilen bütün biletler çekilişe katılacak ve kazanan bilet bunların arasından rastgele seçilecektir.
Kermes görevlisi, el işi standıyla ilgili yalnızca şu iki bilgiyi hatırlamaktadır:
Kazanan biletin el işi standında verilmiş olma olasılığı, kitap standında verilmiş olma olasılığından fazladır.
Kazanan biletin el işi standında verilmiş olmama olasılığı, pasta standında verilmiş olmama olasılığından fazladır.
**Buna göre kazanan biletin el işi standında verilmiş olma olasılığı aşağıdakilerden hangisi olabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Stant</th><th>Verilen bilet sayısı</th></tr><tr><td>Kitap</td><td>15</td></tr><tr><td>Pasta</td><td>24</td></tr><tr><td>Oyun</td><td>21</td></tr><tr><td>El işi</td><td>?</td></tr></table>`,
  secenekler: ["[[1|5]]", "[[1|4]]", "[[3|10]]", "[[2|5]]"],
  dogru: 1,
  hatalar: [
    "Sınırı dahil ettin. Olasılık [[1|5]] ise diğer 60 bilet 4 pay eder ve el işi standında 60 : 4 = 15 bilet verilmiş olur. Bu durumda olasılık kitap standınınkine eşit olur, fazla olmaz.",
    null,
    "Paydaya el işi standının biletlerini eklemedin; [[3|10]] · 60 = 18 diye düşündün. Oysa el işi biletleri de çekilişe katılır. Olasılık [[3|10]] ise diğer 60 bilet 7 pay eder ve 60, 7'ye tam bölünmez.",
    "Olmama olasılıklarını karşılaştırırken yönü ters çevirdin. Olmama olasılığı daha fazla olan standın bileti daha azdır; el işi biletleri 24'ten az olmalıdır. Olasılığın [[2|5]] olması için 40 bilet gerekir."
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir. Aynı çekilişteki iki olasılığı karşılaştırırken bilet sayılarını karşılaştırmak yeter; çünkü paydaları aynıdır: çekilişteki bütün biletler.
Adım 1: Tablodaki biletleri topla: 15 + 24 + 21 = 60. Çekilişteki bütün biletler, bu 60 bilet ile el işi standında verilen biletlerin toplamıdır.
Adım 2: Birinci bilgi: El işi olasılığı kitap olasılığından fazla olduğundan el işi standında 15'ten fazla bilet verilmiştir.
Adım 3: İkinci bilgi: Olmama olasılığı, 1'den olma olasılığı çıkarılarak bulunur. Bu yüzden olmama olasılığı daha fazla olan standın olma olasılığı daha azdır. Yani el işi olasılığı pasta olasılığından azdır; el işi standında 24'ten az bilet verilmiştir. El işi bilet sayısı 16 ile 23 arasındadır (16 ve 23 dahil).
Adım 4: Şıkları dene. Olasılık [[1|4]] ise el işi biletleri 1 pay, bütün biletler 4 pay olur; diğer 60 bilet 3 pay eder. 1 pay 60 : 3 = 20 bilettir. 20 sayısı 15'ten büyük, 24'ten küçüktür; [[1|4]] olabilir.
Adım 5: Diğer şıklar olamaz. [[1|5]] için diğer 60 bilet 4 pay eder ve el işi 15 bilet olur; kitapla eşittir, fazla değildir. [[3|10]] için diğer 60 bilet 7 pay eder; 60, 7'ye tam bölünmez. [[2|5]] için diğer 60 bilet 3 pay eder; 1 pay 20 bilet, el işi 2 pay = 40 bilet olur ve 24'ten fazladır.
Sağlama: El işi standında 20 bilet verildiyse çekilişte 80 bilet vardır. El işi olasılığı [[20|80]] = [[1|4]] olur ve kitap olasılığı olan [[15|80]] sayısından büyüktür. El işi olmama olasılığı [[60|80]], pasta olmama olasılığı [[56|80]] olur ve [[60|80]] > [[56|80]].
Sık yapılan hata: Paydaya bilinmeyen biletleri eklememek. Olasılık, çekilişe katılan bütün biletlere göre hesaplanır.
Cevap B.`
},
/* ===================== HAVUZ (001…015) ===================== */
{
  id: "mat-ol-001",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi bir olayın olma olasılığı __olamaz__?**`,
  gorsel: null,
  secenekler: ["0", "[[1|2]]", "1", "[[5|4]]"],
  dogru: 3,
  hatalar: [
    "İmkânsız olayı unuttun. Hiç gerçekleşmeyecek bir olayın olasılığı 0'dır; 0 bir olasılık değeridir.",
    "[[1|2]] sayısı 0 ile 1 arasındadır; bir olasılık değeri olabilir. Örneğin hilesiz bir madeni paranın yazı gelme olasılığı [[1|2]] olur.",
    "Kesin olayı unuttun. Mutlaka gerçekleşecek bir olayın olasılığı 1'dir; 1 bir olasılık değeridir.",
    null
  ],
  aciklama: `Bir olayın olasılığı, istenen durumların sayısının olası durumların sayısına bölümüdür. İstenen durumlar olası durumların içinden seçildiği için pay, paydadan büyük olamaz.
Adım 1: Olasılık değeri 0 ile 1 arasındadır; 0 ve 1 de bu aralığa dahildir. 0 imkânsız olayın, 1 kesin olayın olasılığıdır.
Adım 2: [[5|4]] kesrinin payı paydasından büyüktür; bu sayı 1'den büyüktür. Bu yüzden bir olasılık değeri olamaz.
Sık yapılan hata: 0 ve 1'i olasılık saymamak. İmkânsız ve kesin olaylar da birer olaydır.
Cevap D.`
},
{
  id: "mat-ol-002",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 1,
  soru: `Hilesiz bir oyun zarı bir kez atılıyor.
**Zarın üst yüzüne 4'ten büyük bir sayı gelme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[2|3]]", "[[1|2]]", "[[1|3]]", "[[1|6]]"],
  dogru: 2,
  hatalar: [
    "4'ten büyük olmayan sayıların (1, 2, 3, 4) gelme olasılığını buldun.",
    "4'ü de saydın. \"4'ten büyük\" ifadesi 4'ü kapsamaz; yalnızca 5 ve 6 uyar.",
    null,
    "Yalnızca bir sayıyı saydın. 4'ten büyük iki sayı vardır: 5 ve 6."
  ],
  aciklama: `Hilesiz bir zarda 6 yüzün her birinin gelme olasılığı eşittir.
Adım 1: Olası durumlar 1, 2, 3, 4, 5 ve 6'dır (6 durum).
Adım 2: 4'ten büyük sayılar 5 ve 6'dır (2 durum).
Adım 3: Olasılık [[2|6]] = [[1|3]] olur.
Sık yapılan hata: "Büyük" sözcüğünde sınırı dahil etmek. 4, 4'ten büyük değildir.
Cevap C.`
},
{
  id: "mat-ol-003",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir kutuda 4 sarı, 7 turuncu ve 3 beyaz kurdele vardır. Kutudan bakmadan bir kurdele alınıyor.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["14", "11", "3", "1"],
  dogru: 0,
  hatalar: [
    null,
    "Bir rengi atladın (4 + 7 = 11). Beyaz kurdeleler de alınabilir.",
    "Renk sayısını saydın. Kutudaki her kurdele ayrı bir olası durumdur.",
    "Tek kurdele alındığı için olası durumu 1 sandın. Olası durumlar, alınabilecek bütün kurdelelerdir."
  ],
  aciklama: `Bir olaya ait olası durumlar, o olayda ortaya çıkabilecek bütün sonuçlardır. Kutudan kurdele alınırken kutudaki kurdelelerin her biri alınabilir.
Adım 1: Kutudaki kurdeleleri say: 4 + 7 + 3 = 14.
Adım 2: Her kurdele ayrı bir sonuç olduğundan olası durumların sayısı 14'tür.
Sık yapılan hata: Renk sayısını (3) olası durum sanmak. Renklerin kurdele sayıları eşit olmadığından her kurdele ayrı sayılır.
Cevap A.`
},
{
  id: "mat-ol-004",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir doğum günü partisinde 1'den 40'a kadar numaralandırılmış 40 balon asılıdır. Bir kutudan rastgele bir numara çekilecek ve o numaralı balon patlatılacaktır.
**Patlatılacak balonun numarasının 6'nın katı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|8]]", "[[3|20]]", "[[1|6]]", "[[17|20]]"],
  dogru: 1,
  hatalar: [
    "6'nın katlarından birini atladın; 36'yı saymadın ([[5|40]] = [[1|8]]).",
    null,
    "\"Her 6 sayıdan biri 6'nın katıdır\" diye olasılığı doğrudan [[1|6]] aldın. 40, 6'nın katı olmadığından bu kısayol doğru sonuç vermez.",
    "6'nın katı olmama olasılığını buldun ([[34|40]])."
  ],
  aciklama: `Adım 1: Olası durumlar 40 numaradır.
Adım 2: 40'a kadar 6'nın katları 6, 12, 18, 24, 30 ve 36'dır. İstenen durum 6 tanedir.
Adım 3: Olasılık [[6|40]] = [[3|20]] olur.
Sağlama: 6 · 6 = 36 sayısı 40'tan küçük, 6 · 7 = 42 sayısı 40'tan büyüktür; yani 40'a kadar 6'nın 6 katı vardır.
Cevap B.`
},
{
  id: "mat-ol-005",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir sınıftaki öğrencilerin gözlük kullanma durumları aşağıdaki tabloda verilmiştir. Sınıftan rastgele bir öğrenci seçilecektir.
**Seçilen öğrencinin gözlük kullanan bir erkek öğrenci olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Kız öğrenci</th><th>Erkek öğrenci</th></tr><tr><td>Gözlük kullanıyor</td><td>4</td><td>5</td></tr><tr><td>Gözlük kullanmıyor</td><td>11</td><td>10</td></tr></table>`,
  secenekler: ["[[1|6]]", "[[3|10]]", "[[1|3]]", "[[1|2]]"],
  dogru: 0,
  hatalar: [
    null,
    "Gözlük kullanan bütün öğrencileri saydın ([[9|30]]). Soru yalnızca gözlük kullanan erkek öğrencileri soruyor.",
    "Paydaya yalnızca erkek öğrencileri (15) yazdın. Seçim bütün sınıftan yapılıyor; olası durumlar 30 öğrencidir.",
    "Erkek öğrenci olma olasılığını buldun ([[15|30]])."
  ],
  aciklama: `Adım 1: Tablodaki bütün sayıları topla: 4 + 5 + 11 + 10 = 30. Olası durumlar 30 öğrencidir.
Adım 2: Gözlük kullanan erkek öğrenciler tabloda 5 kişidir.
Adım 3: Olasılık [[5|30]] = [[1|6]] olur.
Sık yapılan hata: Paydaya yalnızca erkek öğrencileri yazmak. Seçim sınıfın tamamından yapıldığı için payda 30'dur.
Cevap A.`
},
{
  id: "mat-ol-006",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okul kütüphanesindeki kitapların türlere göre sayıları aşağıdaki tabloda verilmiştir. Kütüphaneci, ayın kitabını belirlemek için bu kitaplardan birini rastgele seçecektir.
**Buna göre aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: `<table class="tablo"><tr><th>Kitap türü</th><th>Kitap sayısı</th></tr><tr><td>Roman</td><td>120</td></tr><tr><td>Bilim</td><td>45</td></tr><tr><td>Tarih</td><td>45</td></tr><tr><td>Şiir</td><td>30</td></tr></table>`,
  secenekler: ["Seçilen kitabın roman olma olasılığı, şiir kitabı olma olasılığından fazladır.", "Seçilen kitabın bilim kitabı olma olasılığı, tarih kitabı olma olasılığına eşittir.", "Seçilen kitabın roman olma olasılığı, roman olmama olasılığına eşittir.", "Seçilen kitabın şiir kitabı olma olasılığı, bilim kitabı olma olasılığından fazladır."],
  dogru: 3,
  hatalar: [
    "Bu ifade doğrudur: 120 roman, 30 şiir kitabından fazladır. Soru yanlış olan ifadeyi soruyor.",
    "Bu ifade doğrudur: Bilim ve tarih kitaplarının sayıları eşittir (45).",
    "Roman olmayan kitapları toplamadan karar verdin. Roman olmayanlar 45 + 45 + 30 = 120 kitaptır; roman sayısına eşittir, yani bu ifade doğrudur.",
    null
  ],
  aciklama: `Aynı kitaplar arasından yapılan bir seçimde kitap sayısı fazla olan türün seçilme olasılığı da fazladır; sayıları eşit olan türlerin olasılıkları eşittir.
Adım 1: Kitap sayılarını karşılaştır: roman 120, bilim 45, tarih 45, şiir 30.
Adım 2: Roman olmayan kitaplar 45 + 45 + 30 = 120 tanedir; roman sayısına eşittir. Roman olma ve olmama olasılıkları eşittir.
Adım 3: Şiir kitapları (30) bilim kitaplarından (45) azdır. Şiir kitabı olma olasılığı, bilim kitabı olma olasılığından fazla olamaz; D yanlıştır.
Sağlama: Toplam 240 kitap vardır. Şiir [[30|240]] = [[2|16]], bilim [[45|240]] = [[3|16]] olur ve [[2|16]] < [[3|16]].
Cevap D.`
},
{
  id: "mat-ol-007",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kutuda 1'den 12'ye kadar numaralandırılmış, büyüklükleri ve renkleri aynı 12 kart vardır. Kutudan rastgele bir kart çekilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["12 numaralı kartın çekilme olasılığı, 1 numaralı kartın çekilme olasılığından fazladır.", "Kartların her birinin çekilme olasılığı [[1|12]] sayısına eşittir.", "Tek numaralı bir kartın çekilme olasılığı [[1|6]] sayısına eşittir.", "Asal numaralı bir kartın çekilme olasılığı, asal olmayan numaralı bir kartın çekilme olasılığına eşittir."],
  dogru: 1,
  hatalar: [
    "Büyük numaralı kartın daha şanslı olduğunu düşündün. Kartlar özdeş olduğundan her kartın çekilme olasılığı aynıdır.",
    null,
    "6 tek numaralı kart olduğu için [[1|6]] yazdın. Olasılık [[6|12]] = [[1|2]] olur.",
    "1'i asal saydın. Asal numaralar 2, 3, 5, 7 ve 11'dir (5 kart); asal olmayanlar 7 karttır. Olasılıklar eşit değildir."
  ],
  aciklama: `Eşit şansa sahip n tane olası durum varsa her birinin olasılığı [[1|n]] olur.
Adım 1: Kutuda birbirinin aynısı 12 kart vardır; her kartın çekilme şansı eşittir. Bu yüzden her bir kartın çekilme olasılığı [[1|12]] olur. B doğrudur.
Adım 2: Diğerlerini kontrol et: 1 ve 12 numaralı kartların olasılıkları eşittir (A yanlış). Tek numaralı 6 kart vardır: [[6|12]] = [[1|2]] (C yanlış). Asal numaralı 5, asal olmayan numaralı 7 kart vardır: [[5|12]] ile [[7|12]] eşit değildir (D yanlış).
Sık yapılan hata: 1'i asal saymak. 1'in yalnızca bir böleni vardır; asal değildir.
Cevap B.`
},
{
  id: "mat-ol-008",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Bir dikiş kutusunda aynı büyüklükte 6 mavi, 9 sarı ve 5 beyaz düğme vardır. Kutudan bakmadan bir düğme alınıyor.
**Alınan düğmenin sarı olmama olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|10]]", "[[9|20]]", "[[11|20]]", "[[9|11]]"],
  dogru: 2,
  hatalar: [
    "Sarı olmayan düğmelerden yalnızca mavileri saydın ([[6|20]] = [[3|10]]). Beyaz düğmeler de sarı değildir: 6 + 5 = 11.",
    "Sarı olma olasılığını buldun. Soru sarı olmama olasılığını soruyor.",
    null,
    "Sarı düğmelerin sayısını sarı olmayanların sayısına böldün. Payda bütün düğmeler (20) olmalıdır."
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir.
Adım 1: Kutudaki düğmeler 6 + 9 + 5 = 20 tanedir. Sarı olma olasılığı [[9|20]] olur.
Adım 2: Sarı olmama olasılığı 1 − [[9|20]] = [[11|20]] olur.
Sağlama: Sarı olmayan düğmeler 6 mavi ve 5 beyazdır: 6 + 5 = 11. Yine [[11|20]] bulunur.
Cevap C.`
},
{
  id: "mat-ol-009",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sınıftaki öğrencilerin kardeş sayılarına göre dağılımı aşağıdaki sütun grafiğinde verilmiştir. Dönem ortasında sınıfa 2 yeni öğrenci katılmıştır ve bu öğrencilerin ikisinin de 1 kardeşi vardır.
Yeni öğrenciler katıldıktan sonra sınıf başkanı, sınıftaki bütün öğrencilerin adlarının yazıldığı kâğıtlar arasından kurayla seçilecektir.
**Buna göre seçilen başkanın en az 2 kardeşi olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Sütun grafiği: kardeşi olmayan 4, 1 kardeşi olan 10, 2 kardeşi olan 7, 3 kardeşi olan 3 öğrenci."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Öğrencilerin kardeş sayıları</text><text x="8" y="54" font-size="14">Öğrenci sayısı</text><text x="56" y="283" font-size="14" text-anchor="end">0</text><line x1="64" y1="259.09" x2="544" y2="259.09" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="264.09" font-size="14" text-anchor="end">1</text><line x1="64" y1="240.18" x2="544" y2="240.18" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="245.18" font-size="14" text-anchor="end">2</text><line x1="64" y1="221.27" x2="544" y2="221.27" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="226.27" font-size="14" text-anchor="end">3</text><line x1="64" y1="202.36" x2="544" y2="202.36" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="207.36" font-size="14" text-anchor="end">4</text><line x1="64" y1="183.45" x2="544" y2="183.45" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="188.45" font-size="14" text-anchor="end">5</text><line x1="64" y1="164.55" x2="544" y2="164.55" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="169.55" font-size="14" text-anchor="end">6</text><line x1="64" y1="145.64" x2="544" y2="145.64" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="150.64" font-size="14" text-anchor="end">7</text><line x1="64" y1="126.73" x2="544" y2="126.73" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="131.73" font-size="14" text-anchor="end">8</text><line x1="64" y1="107.82" x2="544" y2="107.82" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="112.82" font-size="14" text-anchor="end">9</text><line x1="64" y1="88.91" x2="544" y2="88.91" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="93.91" font-size="14" text-anchor="end">10</text><line x1="64" y1="70" x2="544" y2="70" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="75" font-size="14" text-anchor="end">11</text><g stroke="currentColor" stroke-width="2"><line x1="64" y1="278" x2="544" y2="278"/><line x1="64" y1="278" x2="64" y2="62"/></g><text x="124" y="299" font-size="15" text-anchor="middle">0</text><rect x="96" y="202.36" width="56" height="75.64" fill="var(--vurgu2)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><text x="244" y="299" font-size="15" text-anchor="middle">1</text><rect x="216" y="88.91" width="56" height="189.09" fill="var(--vurgu2)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><text x="364" y="299" font-size="15" text-anchor="middle">2</text><rect x="336" y="145.64" width="56" height="132.36" fill="var(--vurgu2)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><text x="484" y="299" font-size="15" text-anchor="middle">3</text><rect x="456" y="221.27" width="56" height="56.73" fill="var(--vurgu2)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><text x="304" y="322" font-size="14" text-anchor="middle">Kardeş sayısı</text></svg>`,
  secenekler: ["[[8|13]]", "[[5|12]]", "[[5|13]]", "[[7|26]]"],
  dogru: 2,
  hatalar: [
    "En az 2 kardeşi olmayan bir öğrencinin seçilme olasılığını buldun ([[16|26]]).",
    "Yeni gelen 2 öğrenciyi toplam öğrenci sayısına eklemedin ([[10|24]]).",
    null,
    "Yalnızca 2 kardeşi olanları saydın. \"En az 2\" ifadesi 3 kardeşi olanları da kapsar."
  ],
  aciklama: `Adım 1: Grafikten oku: 4 öğrencinin hiç kardeşi yok; 10 öğrencinin 1, 7 öğrencinin 2, 3 öğrencinin 3 kardeşi var. Sınıfta 24 öğrenci vardır.
Adım 2: 2 yeni öğrenciyle sınıf 26 kişi olur. Yeni öğrencilerin 1'er kardeşi olduğundan en az 2 kardeşi olanların sayısı değişmez.
Adım 3: En az 2 kardeşi olanlar 7 + 3 = 10 öğrencidir.
Adım 4: Olasılık [[10|26]] = [[5|13]] olur.
Sağlama: En az 2 kardeşi olmayanlar 4 + 10 + 2 = 16 öğrencidir; 10 + 16 = 26.
Cevap C.`
},
{
  id: "mat-ol-010",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir matematik oyununda kullanılan sekiz kartın üzerinde şu sayılar yazılıdır:
√{2}, √{8}, √{12}, √{18}, √{20}, √{27}, √{32}, √{50}
Kartlar ters çevrilip karıştırılıyor ve içlerinden biri rastgele seçiliyor. Seçilen karttaki sayı a√{2} biçiminde (a bir doğal sayı) yazılabiliyorsa oyuncu puan kazanıyor.
**Buna göre oyuncunun puan kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|4]]", "[[5|8]]", "[[1|2]]", "[[3|8]]"],
  dogru: 1,
  hatalar: [
    "√{20} sayısını da a√{2} biçiminde sandın. √{20} = √{4 · 5} = 2√{5} olur.",
    null,
    "√{2} sayısını saymadın. √{2} = 1√{2} olduğundan a = 1 için bu biçimdedir.",
    "Puan kazanamama olasılığını buldun."
  ],
  aciklama: `Bir kareköklü sayıyı a√{b} biçiminde yazmak için kök içindeki sayı, biri tam kare olan iki çarpana ayrılır.
Adım 1: Kartları sırayla yaz: √{2} = 1√{2}, √{8} = 2√{2}, √{12} = 2√{3}, √{18} = 3√{2}, √{20} = 2√{5}, √{27} = 3√{3}, √{32} = 4√{2}, √{50} = 5√{2}.
Adım 2: a√{2} biçiminde olanlar √{2}, √{8}, √{18}, √{32} ve √{50}'dir; 5 kart.
Adım 3: Olasılık [[5|8]] olur.
Sık yapılan hata: √{2} kartını unutmak. a = 1 olduğunda sayı 1√{2} = √{2} olur.
Cevap B.`
},
{
  id: "mat-ol-011",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir futbol okulunda 48 öğrenci vardır ve her öğrenci yalnızca bir mevkide oynamaktadır. Antrenör, öğrencilerden birini rastgele seçerek ona kaptanlık görevi verecektir. Seçilen öğrencinin kaleci olma olasılığı [[1|8]], defans oyuncusu olma olasılığı [[5|12]] olarak hesaplanmıştır. Diğer öğrenciler orta saha ve forvet oyuncusudur; orta saha oyuncularının sayısı forvet oyuncularının sayısından 6 fazladır.
**Buna göre seçilen öğrencinin forvet oyuncusu olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[11|24]]", "[[1|3]]", "[[7|24]]", "[[1|6]]"],
  dogru: 3,
  hatalar: [
    "Orta saha ve forvet oyuncularının toplamını (22) aldın. Soru yalnızca forvet oyuncularını soruyor.",
    "22'den 6 çıkarıp 16 buldun ama ikiye bölmedin. 16, orta saha ile forvetin eşit kısımlarının toplamıdır; forvetler 8 kişidir.",
    "Orta saha oyuncusu olma olasılığını buldun ([[14|48]]).",
    null
  ],
  aciklama: `Bir olasılık kesri, gruptaki kişi sayısının toplam kişi sayısına oranıdır. Olasılık biliniyorsa kişi sayısı, toplam bu kesirle çarpılarak bulunur.
Adım 1: Kaleciler 48 · [[1|8]] = 6, defans oyuncuları 48 · [[5|12]] = 20 kişidir.
Adım 2: Orta saha ve forvet oyuncuları 48 − 6 − 20 = 22 kişidir.
Adım 3: Orta saha forvetten 6 fazla olduğundan 22 − 6 = 16 kişi iki gruba eşit bölünür: forvet 8, orta saha 8 + 6 = 14 kişidir.
Adım 4: Forvet oyuncusu olma olasılığı [[8|48]] = [[1|6]] olur.
Sağlama: 6 + 20 + 14 + 8 = 48.
Cevap D.`
},
{
  id: "mat-ol-012",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kafe, müşterilerine indirim çarkı çevirtmektedir. Çark kırmızı, mavi, sarı ve yeşil olmak üzere dört bölgeye ayrılmıştır. Çark çevrildiğinde okun kırmızı bölgede durma olasılığı [[1|4]], mavi bölgede durma olasılığı [[1|3]] olarak verilmiştir. Sarı ve yeşil bölgeler eş büyüklüktedir.
**Buna göre sarı bölgenin merkez açısı kaç derecedir?**`,
  gorsel: `<svg viewBox="0 0 560 320" role="img" aria-label="Dört bölgeli çark: kırmızı, mavi, sarı ve yeşil bölgeler."><path d="M280 172 L303.44 39.05 A135 135 0 0 1 412.95 195.44 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 172 L412.95 195.44 A135 135 0 0 1 193.22 275.42 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 172 L193.22 275.42 A135 135 0 0 1 157.65 114.95 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 172 L157.65 114.95 A135 135 0 0 1 303.44 39.05 Z" fill="var(--vurgu)" fill-opacity="0.42" stroke="currentColor" stroke-width="1.5"/><text x="348.56" y="128.99" font-size="15" text-anchor="middle" font-weight="bold">Kırmızı</text><text x="308.63" y="255.65" font-size="15" text-anchor="middle" font-weight="bold">Mavi</text><text x="198.28" y="195.12" font-size="15" text-anchor="middle" font-weight="bold">Sarı</text><text x="241.35" y="102.76" font-size="15" text-anchor="middle" font-weight="bold">Yeşil</text><polygon points="267,13 293,13 280,47" fill="currentColor"/><circle cx="280" cy="172" r="6" fill="currentColor"/></svg>`,
  secenekler: ["75", "90", "120", "150"],
  dogru: 0,
  hatalar: [
    null,
    "Dört bölgeyi eş büyüklükte sandın (360° : 4 = 90°). Bölgelerin olasılıkları farklı olduğundan açıları da farklıdır.",
    "Mavi bölgenin merkez açısını buldun. Soru sarı bölgeyi soruyor.",
    "Sarı ve yeşil bölgelerin toplam açısını buldun. İki bölge eş olduğundan 150° ikiye bölünmelidir."
  ],
  aciklama: `Bir çarkta bir bölgenin olasılığı, merkez açısının 360°'ye bölümüdür. Tersinden düşünürsek bölgenin açısı, 360° ile olasılığın çarpımıdır.
Adım 1: Kırmızı bölge 360° · [[1|4]] = 90°, mavi bölge 360° · [[1|3]] = 120°'dir.
Adım 2: Sarı ve yeşil bölgelere 360° − 90° − 120° = 150° kalır.
Adım 3: Bu iki bölge eş olduğundan sarı bölgenin açısı 150° : 2 = 75°'dir.
Sağlama: Olasılıklarla da bulunur: 1 − [[1|4]] − [[1|3]] = [[5|12]]; sarının olasılığı bunun yarısı, [[5|24]] olur ve 360° · [[5|24]] = 75°.
Cevap A.`
},
{
  id: "mat-ol-013",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kitap fuarındaki yayınevi standında kullanılacak çarkın bölgeleri aşağıda gösterilmiştir. Kırmızı bölgenin merkez açısı 120°, mavi bölgenin 80°, sarı bölgenin 160°'dir.
Stant görevlileri bu çarkı, her dilim tek renkte kalacak biçimde, mümkün olan en az sayıda eş dilime ayıracaktır. Daha sonra mavi dilimlerden yalnızca biri yeşile boyanacak ve bu dilime "Büyük ödül" yazılacaktır.
**Buna göre çark bir kez çevrildiğinde okun "Büyük ödül" yazan dilimde durma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 320" role="img" aria-label="Üç bölgeli çark: kırmızı 120 derece, mavi 80 derece, sarı 160 derece."><path d="M280 172 L303.44 39.05 A135 135 0 0 1 383.42 258.78 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 172 L383.42 258.78 A135 135 0 0 1 212.5 288.91 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 172 L212.5 288.91 A135 135 0 0 1 303.44 39.05 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="356.12" y="140.3" font-size="15" text-anchor="middle" font-weight="bold">Kırmızı</text><text x="356.12" y="158.3" font-size="14" text-anchor="middle">120°</text><text x="294.07" y="247.77" font-size="15" text-anchor="middle" font-weight="bold">Mavi</text><text x="294.07" y="265.77" font-size="14" text-anchor="middle">80°</text><text x="203.88" y="140.3" font-size="15" text-anchor="middle" font-weight="bold">Sarı</text><text x="203.88" y="158.3" font-size="14" text-anchor="middle">160°</text><polygon points="267,13 293,13 280,47" fill="currentColor"/><circle cx="280" cy="172" r="6" fill="currentColor"/></svg>`,
  secenekler: ["[[1|4]]", "[[2|9]]", "[[1|9]]", "[[1|18]]"],
  dogru: 2,
  hatalar: [
    "Boyamadan sonra dört renk olduğu için renkleri eşit şanslı saydın. Renklerin kapladığı açılar farklıdır.",
    "Mavi bölgenin tamamını yeşil sandın ([[80|360]]). Yalnızca bir mavi dilim boyanıyor.",
    null,
    "Dilim açısını 20° aldın. En az sayıda dilim için açıların en büyük ortak böleni (40°) seçilmelidir."
  ],
  aciklama: `Adım 1: Dilimler eş olacak ve her dilim tek renkte kalacaksa dilim açısı 120, 80 ve 160'ın ortak böleni olmalıdır. En az dilim için en büyük ortak bölen seçilir: EBOB(120, 80, 160) = 40. Dilim açısı 40°'dir.
Adım 2: Dilim sayılarını bul: kırmızı 120 : 40 = 3, mavi 80 : 40 = 2, sarı 160 : 40 = 4. Çarkta 9 eş dilim vardır.
Adım 3: Eş dilimli bir çarkta her dilimin olasılığı eşittir. "Büyük ödül" tek bir dilim olduğundan olasılık [[1|9]] olur.
Sağlama: Açıyla da bulunur: [[40|360]] = [[1|9]].
Sık yapılan hata: EBOB yerine daha küçük bir ortak bölen (20°, 10°) almak. Bu da çarkı eş dilimlere ayırır ama dilim sayısı en az olmaz.
Cevap C.`
},
{
  id: "mat-ol-014",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir bisiklet kiralama istasyonunda 10 gün boyunca her gün kiralanan bisiklet sayıları aşağıdaki çizgi grafiğinde gösterilmiştir. Grafikte her noktanın üstünde o gün kiralanan bisiklet sayısı yazılıdır.
İstasyon yöneticisi, talebin hangi günlerde arttığını anlamak istemektedir. Bunun için 2. günden 10. güne kadar olan 9 günden birini rastgele seçip o günün kayıtlarını inceleyecektir.
**Buna göre seçilen günde kiralanan bisiklet sayısının bir önceki güne göre artmış olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Çizgi grafiği: 1. günden 10. güne kiralanan bisiklet sayıları 40, 45, 45, 38, 50, 55, 52, 60, 60, 58."><text x="280" y="22" font-size="16" font-weight="bold" text-anchor="middle">Grafik: Günlere göre kiralanan bisiklet sayısı</text><text x="8" y="46" font-size="14">Bisiklet sayısı</text><text x="56" y="283" font-size="14" text-anchor="end">30</text><line x1="64" y1="246.86" x2="544" y2="246.86" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="251.86" font-size="14" text-anchor="end">35</text><line x1="64" y1="215.71" x2="544" y2="215.71" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="220.71" font-size="14" text-anchor="end">40</text><line x1="64" y1="184.57" x2="544" y2="184.57" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="189.57" font-size="14" text-anchor="end">45</text><line x1="64" y1="153.43" x2="544" y2="153.43" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="158.43" font-size="14" text-anchor="end">50</text><line x1="64" y1="122.29" x2="544" y2="122.29" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="127.29" font-size="14" text-anchor="end">55</text><line x1="64" y1="91.14" x2="544" y2="91.14" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="96.14" font-size="14" text-anchor="end">60</text><line x1="64" y1="60" x2="544" y2="60" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 4"/><text x="56" y="65" font-size="14" text-anchor="end">65</text><g stroke="currentColor" stroke-width="2"><line x1="64" y1="278" x2="544" y2="278"/><line x1="64" y1="278" x2="64" y2="52"/></g><path d="M57 266 l14 -5 M57 272 l14 -5" stroke="currentColor" stroke-width="2"/><line x1="88" y1="278" x2="88" y2="283" stroke="currentColor" stroke-width="2"/><text x="88" y="300" font-size="15" text-anchor="middle">1</text><line x1="136" y1="278" x2="136" y2="283" stroke="currentColor" stroke-width="2"/><text x="136" y="300" font-size="15" text-anchor="middle">2</text><line x1="184" y1="278" x2="184" y2="283" stroke="currentColor" stroke-width="2"/><text x="184" y="300" font-size="15" text-anchor="middle">3</text><line x1="232" y1="278" x2="232" y2="283" stroke="currentColor" stroke-width="2"/><text x="232" y="300" font-size="15" text-anchor="middle">4</text><line x1="280" y1="278" x2="280" y2="283" stroke="currentColor" stroke-width="2"/><text x="280" y="300" font-size="15" text-anchor="middle">5</text><line x1="328" y1="278" x2="328" y2="283" stroke="currentColor" stroke-width="2"/><text x="328" y="300" font-size="15" text-anchor="middle">6</text><line x1="376" y1="278" x2="376" y2="283" stroke="currentColor" stroke-width="2"/><text x="376" y="300" font-size="15" text-anchor="middle">7</text><line x1="424" y1="278" x2="424" y2="283" stroke="currentColor" stroke-width="2"/><text x="424" y="300" font-size="15" text-anchor="middle">8</text><line x1="472" y1="278" x2="472" y2="283" stroke="currentColor" stroke-width="2"/><text x="472" y="300" font-size="15" text-anchor="middle">9</text><line x1="520" y1="278" x2="520" y2="283" stroke="currentColor" stroke-width="2"/><text x="520" y="300" font-size="15" text-anchor="middle">10</text><polyline points="88,215.71 136,184.57 184,184.57 232,228.17 280,153.43 328,122.29 376,140.97 424,91.14 472,91.14 520,103.6" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="88" cy="215.71" r="5.5" fill="var(--vurgu)"/><text x="88" y="203.71" font-size="14" text-anchor="middle" font-weight="bold">40</text><circle cx="136" cy="184.57" r="5.5" fill="var(--vurgu)"/><text x="136" y="172.57" font-size="14" text-anchor="middle" font-weight="bold">45</text><circle cx="184" cy="184.57" r="5.5" fill="var(--vurgu)"/><text x="184" y="172.57" font-size="14" text-anchor="middle" font-weight="bold">45</text><circle cx="232" cy="228.17" r="5.5" fill="var(--vurgu)"/><text x="232" y="216.17" font-size="14" text-anchor="middle" font-weight="bold">38</text><circle cx="280" cy="153.43" r="5.5" fill="var(--vurgu)"/><text x="280" y="141.43" font-size="14" text-anchor="middle" font-weight="bold">50</text><circle cx="328" cy="122.29" r="5.5" fill="var(--vurgu)"/><text x="328" y="110.29" font-size="14" text-anchor="middle" font-weight="bold">55</text><circle cx="376" cy="140.97" r="5.5" fill="var(--vurgu)"/><text x="376" y="128.97" font-size="14" text-anchor="middle" font-weight="bold">52</text><circle cx="424" cy="91.14" r="5.5" fill="var(--vurgu)"/><text x="424" y="79.14" font-size="14" text-anchor="middle" font-weight="bold">60</text><circle cx="472" cy="91.14" r="5.5" fill="var(--vurgu)"/><text x="472" y="79.14" font-size="14" text-anchor="middle" font-weight="bold">60</text><circle cx="520" cy="103.6" r="5.5" fill="var(--vurgu)"/><text x="520" y="91.6" font-size="14" text-anchor="middle" font-weight="bold">58</text><text x="304" y="324" font-size="14" text-anchor="middle">Gün</text></svg>`,
  secenekler: ["[[2|3]]", "[[4|9]]", "[[2|5]]", "[[1|3]]"],
  dogru: 1,
  hatalar: [
    "Bir önceki günle aynı kalan günleri (3. ve 9. gün) de artmış saydın. Değişmeyen sayı artış değildir.",
    null,
    "Paydaya 10 gün yazdın. Seçim 2. ile 10. gün arasındaki 9 günden yapılıyor.",
    "Azalan günleri saydın (4., 7. ve 10. gün)."
  ],
  aciklama: `Çizgi grafiğinde iki nokta arasındaki çizgi yukarı çıkıyorsa artış, aşağı iniyorsa azalış, yataysa değişmeme vardır.
Adım 1: Grafikten oku: 40, 45, 45, 38, 50, 55, 52, 60, 60, 58.
Adım 2: Her günü bir önceki günle karşılaştır: 2. gün artış, 3. gün aynı, 4. gün azalış, 5. gün artış, 6. gün artış, 7. gün azalış, 8. gün artış, 9. gün aynı, 10. gün azalış.
Adım 3: Artış olan günler 2., 5., 6. ve 8. günlerdir; 4 gün.
Adım 4: Olasılık [[4|9]] olur.
Sağlama: 4 artış + 2 aynı + 3 azalış = 9 gün.
Cevap B.`
},
{
  id: "mat-ol-015",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir okul kantinindeki buzdolabında 8 elmalı, 12 portakallı ve 4 vişneli meyve suyu vardır. Kantin görevlisi buzdolabına bir miktar elmalı ve portakallı meyve suyu eklemiş, vişneli meyve suyu eklememiştir. Nöbetçi öğrenci, buzdolabından bakmadan bir meyve suyu alıp öğretmenler odasına götürecektir.
Ekleme yapıldıktan sonra öğrencinin alacağı meyve suyunun elmalı olma olasılığı değişmemiş, vişneli olma olasılığı ise yarıya inmiştir.
**Buna göre buzdolabına kaç portakallı meyve suyu eklenmiştir?**`,
  gorsel: null,
  secenekler: ["16", "20", "24", "28"],
  dogru: 0,
  hatalar: [
    null,
    "Vişneli meyve sularını unuttun: 48 − 16 = 32 meyve suyunun hepsini portakallı sayıp 32 − 12 = 20 buldun. Bunların 4'ü vişnelidir; portakallı 28, eklenen 16'dır.",
    "Eklenen meyve sularının toplamını buldun (48 − 24 = 24). Bunların 8'i elmalıdır.",
    "Buzdolabındaki portakallı meyve suyu sayısını buldun (12 + 16 = 28). Soru eklenen sayıyı soruyor."
  ],
  aciklama: `Adım 1: Başlangıçta 8 + 12 + 4 = 24 meyve suyu vardır. Vişneli olma olasılığı [[4|24]] = [[1|6]], elmalı olma olasılığı [[8|24]] = [[1|3]] olur.
Adım 2: Vişneli meyve suyu eklenmediği için sayısı yine 4'tür. Olasılık yarıya inip [[1|12]] olduğuna göre 4 meyve suyu toplamın on ikide biridir: Toplam 4 · 12 = 48.
Adım 3: Elmalı olma olasılığı yine [[1|3]] olduğundan elmalı meyve suyu 48 · [[1|3]] = 16 tanedir.
Adım 4: Portakallı meyve suyu 48 − 16 − 4 = 28 olur. Başta 12 tane olduğundan 28 − 12 = 16 portakallı meyve suyu eklenmiştir.
Sağlama: Eklenenler 16 − 8 = 8 elmalı ve 16 portakallıdır; 24 + 8 + 16 = 48.
Sık yapılan hata: Portakallı olma olasılığının da değişmediğini sanmak. Soruda yalnızca elmalının olasılığının korunduğu söyleniyor; portakallının olasılığı [[12|24]] = [[1|2]] iken [[28|48]] = [[7|12]] olmuştur.
Cevap A.`
}
);
