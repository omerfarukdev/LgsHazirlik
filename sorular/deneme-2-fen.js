// Deneme 2 (Aylık deneme, 14 Eylül - 13 Kasım 2026 kapsamı) — Fen Bilimleri 4 yeni soru (kalan sorular bankadan gelir)
// DNA + Mutasyon 1 (F.8.2.3.1), Kalıtım 1 (F.8.2.2.2), Adaptasyon 1 (F.8.2.4.1), İklim + Mevsim 1 (F.8.1.2.1)
window.LGS_DENEME = window.LGS_DENEME || {};
(window.LGS_DENEME["deneme-2"] = window.LGS_DENEME["deneme-2"] || []).push(
{
  id: "dn2-fen-01",
  ders: "fen",
  konu: "mutasyon-modifikasyon",
  kazanim: "F.8.2.3.1",
  zorluk: 3,
  soru: `Bir hücre bölünmeye hazırlanırken DNA'sı kendini eşlemektedir. Aşağıdaki tabloda DNA'nın bir bölgesinde ana ipliğin ilk altı bazı ile bunlara karşılık gelen yeni ipliğin bazları sıra sıra verilmiştir. A, T, G ve C harfleri organik bazları göstermektedir.
I. Kurala uymayan baz çifti onarılırsa bile hücrede kalıcı bir mutasyon olarak kabul edilir.
II. Tabloda kurala uymayan yalnızca bir baz çifti vardır; bu hata onarılmadan hücre bölünürse değişiklik yeni hücrelere geçebilir.
III. Aynı hata, üreme hücresi oluşturan bir hücrede onarılmadan kalırsa değişiklik bir sonraki kuşağa aktarılabilir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sıra</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>Ana iplik</td><td>A</td><td>T</td><td>G</td><td>C</td><td>C</td><td>A</td></tr><tr><td>Yeni iplik</td><td>T</td><td>A</td><td>C</td><td>G</td><td>A</td><td>T</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Üreme hücresindeki kalıcı değişikliği unutma: onarılmayan hata, gamet oluşturan hücrede ise yavruya aktarılabilir; III de doğrudur.",
    "Onarılan hatayı da mutasyon sayma: hata onarılırsa DNA eski hâline döner ve kalıcı değişiklik oluşmaz; I yanlıştır. Üstelik tabloyu kontrol edersen II'nin de doğru olduğunu görürsün.",
    null,
    "Onarılan hatayı da mutasyon sayma: mutasyon, DNA'da kalıcı değişikliktir. Hata onarılırsa mutasyon oluşmaz; I yanlıştır."
  ],
  aciklama: `DNA'da bazlar belli bir kurala göre eşleşir: A her zaman T ile, G her zaman C ile. Mutasyon ise DNA'da oluşan ve kalıcı olan değişikliktir. Hücrede DNA'daki hataların bir bölümü onarılır; onarılan hata kalıcı olmadığı için mutasyon sayılmaz.
Adım 1: Tabloda her sıradaki baz çiftini kurala göre kontrol et. 1. sıra A–T, 2. sıra T–A, 3. sıra G–C, 4. sıra C–G, 6. sıra A–T olduğu için kurala uyar. 5. sırada ana iplikte C var; karşısında G olması gerekirken A gelmiştir. Altı çiftten yalnızca biri kurala uymaz.
Adım 2: I yanlıştır. Hata onarılırsa DNA eski hâline döner, kalıcı değişiklik kalmaz, yani mutasyon olmaz.
Adım 3: II doğrudur. Kurala uymayan tek çift 5. sıradadır. Hata onarılmadan hücre bölünürse kurala uymayan iplik de kopyalanır ve yeni hücrelerden en az birinin DNA'sına bu değişiklik geçer.
Adım 4: III doğrudur. Onarılmayan değişiklik üreme hücresi oluşturan bir hücrede ise bu hücre yavruya aktarılan gen bilgisine karışır.
Sağlama: Kalıcı olan değişiklik mutasyondur; I'de "onarılsa bile kalıcı" denmesi bu tanıma ters düşer.
Sık yapılan hata: "DNA'da her hata mutasyondur" sanmak. Önemli olan hatanın onarılıp onarılmadığıdır.
Cevap C.`
},
{
  id: "dn2-fen-02",
  ders: "fen",
  konu: "kalitim",
  kazanim: "F.8.2.2.2",
  zorluk: 3,
  soru: `Bir tohum üreticisi, genotipleri bilinmeyen bezelye bitkileriyle üç çaprazlama yapmış (K, L ve M), tohumlardan çıkan yavru bitkilerin çiçek renklerini saymış ve sonuçları grafikte göstermiştir. Bezelyede mor çiçek geni baskın, beyaz çiçek geni çekiniktir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="K, L ve M çaprazlamalarında mor ve beyaz çiçekli yavru sayıları">
<rect x="70" y="6" width="14" height="14" fill="var(--vurgu)"/><text x="90" y="19" font-size="14" fill="currentColor">Mor çiçekli yavru</text>
<rect x="270" y="6" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="19" font-size="14" fill="currentColor">Beyaz çiçekli yavru</text>
<g stroke="currentColor" stroke-opacity="0.2"><line x1="60" y1="50" x2="540" y2="50"/><line x1="60" y1="97.5" x2="540" y2="97.5"/><line x1="60" y1="145" x2="540" y2="145"/><line x1="60" y1="192.5" x2="540" y2="192.5"/></g>
<g font-size="14" fill="currentColor" text-anchor="end"><text x="54" y="245">0</text><text x="54" y="197.5">25</text><text x="54" y="150">50</text><text x="54" y="102.5">75</text><text x="54" y="55">100</text></g>
<text x="16" y="145" font-size="14" fill="currentColor" text-anchor="middle" transform="rotate(-90 16 145)">Yavru sayısı</text>
<rect x="95" y="141.2" width="50" height="98.8" fill="var(--vurgu)"/><rect x="155" y="146.9" width="50" height="93.1" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="245" y="97.5" width="50" height="142.5" fill="var(--vurgu)"/><rect x="305" y="190.6" width="50" height="49.4" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="395" y="50" width="50" height="190" fill="var(--vurgu)"/>
<g font-size="14" fill="currentColor" text-anchor="middle"><text x="120" y="135">52</text><text x="180" y="141">49</text><text x="270" y="91">75</text><text x="330" y="184">26</text><text x="420" y="44">100</text><text x="480" y="234">0</text></g>
<line x1="60" y1="240" x2="540" y2="240" stroke="currentColor" stroke-width="2"/><line x1="60" y1="50" x2="60" y2="240" stroke="currentColor" stroke-width="2"/>
<g font-size="14" fill="currentColor" text-anchor="middle"><text x="150" y="261" font-weight="bold">K çaprazlaması</text><text x="150" y="281">Mor × Beyaz</text><text x="300" y="261" font-weight="bold">L çaprazlaması</text><text x="300" y="281">Mor × Mor</text><text x="450" y="261" font-weight="bold">M çaprazlaması</text><text x="450" y="281">Mor × Mor</text></g>
</svg>`,
  secenekler: [
    "K çaprazlamasındaki mor çiçekli ata bitki melez döldür.",
    "L çaprazlamasındaki ata bitkilerden biri saf döldür.",
    "M çaprazlamasındaki ata bitkilerin ikisi de saf döldür.",
    "K ve L çaprazlamalarındaki mor ata bitkilerin genotipleri farklıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Beyaz yavruyu atalara bağlamama: iki mor atadan beyaz yavru çıkabilmesi için ikisinin de çekinik gen (m) taşıması gerekir. Atalardan biri saf döl (MM) olsaydı hiç beyaz yavru çıkmazdı; ikisi de melezdir.",
    "Hepsi mor yavruyu iki saf ata sanma: yavruların tamamının mor olması ataların biri melez (Mm) olsa bile mümkündür (MM × Mm). İkisinin de saf döl olması kesin değildir.",
    "Aynı görünümü farklı genotip sanma: K'deki mor ata beyaz yavru verdiği için Mm, L'deki iki mor ata da beyaz yavru verdiği için Mm'dir. Genotipleri aynıdır."
  ],
  aciklama: `Baskın genli bir bireyin saf döl (MM) mü, melez döl (Mm) mü olduğu, çaprazlamadan çıkan yavrulara bakılarak anlaşılır. Çekinik özellik (beyaz çiçek) ancak mm genotipinde görülür; bir yavruda çekinik özellik varsa iki atadan da birer çekinik gen (m) gelmiş demektir.
Adım 1: K çaprazlamasında beyaz ata mm'dir ve yavruların yaklaşık yarısı beyaz çıkmıştır (52 mor, 49 beyaz). Beyaz yavruların m genlerinden biri mor atadan gelmiştir. Mor ata hem M hem m taşır, yani melez döldür (Mm). A doğrudur.
Adım 2: L çaprazlamasında iki mor atadan beyaz yavrular çıkmıştır (75 mor, 26 beyaz; yaklaşık 3 : 1). İki ata da m taşımalıdır; mor oldukları için ikisi de Mm'dir. Atalardan biri saf döl değildir, B yanlıştır.
Adım 3: M çaprazlamasında yavruların hepsi mor çıkmıştır. Bu sonuç MM × MM ya da MM × Mm ile de elde edilir. Ataların ikisinin de saf döl olması kesin değildir, C yanlıştır.
Adım 4: K'deki mor ata Mm, L'deki iki mor ata da Mm'dir. Genotipleri aynı olduğundan D yanlıştır.
Sağlama: Mm × Mm çaprazlamasında yavruların dörtte biri mm olur; L'deki 26 beyaz yavru 101 yavrunun yaklaşık dörtte biridir.
Sık yapılan hata: Yavruların hepsi baskın özellikte diye atalar için kesin hüküm vermek.
Cevap A.`
},
{
  id: "dn2-fen-03",
  ders: "fen",
  konu: "adaptasyon",
  kazanim: "F.8.2.4.1",
  zorluk: 4,
  soru: `Bir laboratuvarda aynı ana kültürden eşit sayıda bakteri alınarak 8 kap hazırlanmıştır. Kaplardaki bakteriler önce antibiyotiksiz besi yerinde bir gün çoğaltılmış, sonra her kaba aynı antibiyotik eklenmiştir. Dayanıklılığın genlerle belirlendiği bilinmektedir. Yapılan işlemler ve sonuçlar tabloda verilmiştir.
I. Dayanıklılık özelliği, bakteriler antibiyotikle karşılaşmadan önce de bazı bireylerde bulunuyordu.
II. Antibiyotik, bakterilerin DNA'sını değiştirerek dayanıklılık özelliğini oluşturmuştur.
III. Dayanıklılık, bakterilerin antibiyotikli ortamda yaşarken kazandığı ve yavrulara geçmeyen bir modifikasyondur.
**Buna göre numaralanmış ifadelerden hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Aşama</th><th>İşlem</th><th>Sonuç</th></tr><tr><td>1</td><td>8 kapta bakteriler antibiyotiksiz ortamda çoğaltıldı.</td><td>Her kapta yaklaşık 50 000 bakteri oluştu.</td></tr><tr><td>2</td><td>8 kabın hepsine aynı antibiyotik eklendi.</td><td>6 kapta bakterilerin tümü öldü; 2 kapta 5'er bakteri sağ kaldı.</td></tr><tr><td>3</td><td>Sağ kalan bakteriler antibiyotiksiz ortamda çoğaltılıp yeniden antibiyotikli ortama aktarıldı.</td><td>Bakterilerin tamamı yaşamaya devam etti.</td></tr></table>`,
  secenekler: ["I ve II", "Yalnız I", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Antibiyotiği özelliği oluşturan etken sanma: 6 kapta bakterilerin tümü ölmüştür; antibiyotik dayanıklılığı oluşturmuş olsaydı 8 kabın hepsinde dayanıklı bakteri kalırdı. I doğru, II yanlıştır.",
    null,
    "Kalıtsal özelliği modifikasyonla karıştırma: 3. aşamada dayanıklılık antibiyotiksiz ortamda çoğalan yavru bakterilere de geçmiştir. Modifikasyon yavruya aktarılmaz; III yanlıştır. I ise doğrudur.",
    "Hem etkeni ters yorumlama hem kalıtsal özelliği modifikasyon sanma: antibiyotik dayanıklılık oluşturmaz, var olanı seçer (II yanlış); dayanıklılık yavruya geçtiği için modifikasyon değildir (III yanlış). Doğru olan I'i de dışarıda bırakmışsın."
  ],
  aciklama: `Bir canlı topluluğunda bireyler arasında kalıtsal farklar bulunur. Çevre koşulu (burada antibiyotik) bu farklardan birine avantaj sağlıyorsa o bireyler hayatta kalıp yavru bırakır. Modifikasyon ise genleri değiştirmeyen, yavruya aktarılmayan çevre etkisidir.
Adım 1: 8 kabın hepsi aynı ana kültürden alınmış, aynı koşulda çoğaltılmış ve aynı antibiyotiğe maruz bırakılmıştır. Antibiyotik dayanıklılık oluşturan etken olsaydı 8 kapta da benzer sonuç alınırdı. Oysa 6 kapta bütün bakteriler ölmüş, yalnızca 2 kapta bazı bakteriler sağ kalmıştır. Bu, dayanıklı bakterilerin antibiyotik eklenmeden önce de kaplarda (bazı kaplarda) bulunduğunu gösterir. I doğrudur.
Adım 2: Antibiyotik bakterilerin DNA'sını değiştirmemiştir; yalnızca dayanıklı olmayanları öldürüp dayanıklıları sağ bırakmıştır. II yanlıştır.
Adım 3: 3. aşamada sağ kalan bakterilerin yavruları antibiyotiksiz ortamda çoğalmış ve yeniden antibiyotiğe konunca hepsi yaşamıştır. Özellik yavruya geçtiğine göre kalıtsaldır, modifikasyon değildir. III yanlıştır.
Sağlama: Dayanıklılık kalıtsaldır ve antibiyotikten önce vardır; antibiyotik yeni özellik oluşturmaz, var olan özelliği taşıyan bireyleri seçer.
Sık yapılan hata: "Canlı ortama uyum sağlamak için kendi özelliğini değiştirir" düşüncesi. Bireyler isteyerek genlerini değiştirmez.
Cevap B.`
},
{
  id: "dn2-fen-04",
  ders: "fen",
  konu: "iklim-hava-hareketleri",
  kazanim: "F.8.1.2.1",
  zorluk: 4,
  soru: `K, orta enlemde bulunan bir şehirdir. Şehirdeki meteoroloji istasyonunun çalışanları, 1 metre boyundaki dikey bir çubuğun öğle vakti gölgesini iki farklı günde ölçmüş; temmuz ayına ait ortalama sıcaklık verilerini de uzun yıllar ortalaması ve 2024 yılı için tabloya yazmıştır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Değer</th></tr><tr><td>21 Haziran öğle gölgesi (1 m'lik çubuk)</td><td>2,5 m</td></tr><tr><td>21 Aralık öğle gölgesi (1 m'lik çubuk)</td><td>0,4 m</td></tr><tr><td>Temmuz ayı ortalama sıcaklığı (1991-2020)</td><td>6,5 °C</td></tr><tr><td>Temmuz ayı ortalama sıcaklığı (2024)</td><td>3,8 °C</td></tr></table>`,
  secenekler: [
    "K, Kuzey Yarım Küre'dedir ve 2024 temmuzu K'nin ikliminin soğuduğunu gösterir.",
    "K, Kuzey Yarım Küre'dedir ve 2024 temmuzu tek başına K'nin iklimi hakkında karar vermeye yetmez.",
    "K, Güney Yarım Küre'dedir ve 2024 temmuzu K'nin ikliminin soğuduğunu gösterir.",
    "K, Güney Yarım Küre'dedir ve 2024 temmuzu tek başına K'nin iklimi hakkında karar vermeye yetmez."
  ],
  dogru: 3,
  hatalar: [
    "Gölgeyi ters okuma ve tek yılı iklim sanma: haziranda gölge uzunsa ışınlar eğik gelir, yani K'de haziran kış mevsimidir; K Güney Yarım Küre'dedir. Üstelik tek yılın ölçümü iklim değişikliği kanıtı sayılmaz.",
    "Gölgeyi ters okuma: Kuzey Yarım Küre'de ışınlar haziranda en dik gelir ve gölge en kısadır. Burada haziran gölgesi uzun olduğu için K Güney Yarım Küre'dedir. Tek yılın iklimle ilişkisini doğru kurmuşsun.",
    "Tek yılı iklim sanma: iklim uzun yıllar ortalamasıdır; 2024 temmuzunun soğuk geçmesi o yılın hava durumudur. Yarım küreyi doğru bulmuşsun.",
    null
  ],
  aciklama: `İki ayrı bilgiyi birlikte kullanacaksın. Işınlar yüzeye ne kadar dik gelirse gölge o kadar kısa olur. İklim ise bir yerde uzun yıllar boyunca görülen hava olaylarının ortalamasıdır; tek bir yılın ölçümü iklimi belirlemez.
Adım 1: K'de 21 Haziran gölgesi 2,5 m, 21 Aralık gölgesi 0,4 m'dir. Gölge aralıkta daha kısa olduğu için Güneş ışınları K'ye aralıkta daha dik gelir. Işınların haziranda en dik geldiği yer Kuzey Yarım Küre, aralıkta en dik geldiği yer Güney Yarım Küre'dir. K orta enlemde olduğuna göre Güney Yarım Küre'dedir. Seçenekleri bu bilgiyle ikiye ayır: C ve D kalır.
Adım 2: K'de temmuz ayında kış yaşanır. 2024 temmuzunun ortalaması (3,8 °C) uzun yıllar ortalamasından (6,5 °C) düşüktür, ancak tek bir yılın değeridir. İklim hakkında karar vermek için uzun yıllara ait ölçümler gerekir. Bu yüzden "iklimi soğudu" demek doğru olmaz; bu değer o yıl yaşanan bir hava durumu farkıdır.
Sağlama: Güney Yarım Küre'de haziran-temmuz kıştır; temmuz ortalamasının düşük olması da bu mevsimle uyumludur.
Sık yapılan hata: Bir yılın sıcaklığına bakıp "iklim değişti" demek.
Cevap D.`
}
);
