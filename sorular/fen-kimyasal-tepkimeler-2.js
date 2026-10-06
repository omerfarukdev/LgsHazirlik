// Fen Bilimleri — Kimyasal Tepkimeler: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kimyasal-tepkimeler"] = window.LGS_BANK["kimyasal-tepkimeler"] || []).push(
{
  id: "fen-kt-301",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Fen kulübünde kimyasal tepkimeler konuşulurken öğrenciler aşağıdaki yargıları tahtaya yazmıştır.
I. Tepkimede girenlerin atomları yeniden düzenlenerek ürünler oluşur.
II. Ürünlerin özellikleri, girenlerin özellikleriyle aynıdır.
III. Girenlerdeki atomların toplam sayısı, ürünlerdeki atomların toplam sayısına eşittir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Atom sayısının korunmasını atlama: atomlar yok olmaz ya da yoktan var olmaz, girenlerdeki toplam atom sayısı ürünlerdekine eşittir; III de doğrudur.",
    "Atomların yeniden düzenlendiğini atlama: tepkimede bağlar kopar, atomlar yeni biçimde birleşir; I de doğrudur.",
    null,
    "Ürünü girenle aynı sanma: ürünler yeni maddelerdir ve özellikleri girenlerinkinden farklıdır; II yanlıştır. I'i de atladın."
  ],
  aciklama: `Kimyasal tepkimede girenlerin atomları yeniden düzenlenir ve girenlerden farklı özelliklere sahip ürünler oluşur; atomların cinsi ve sayısı ise değişmez.
Adım 1 (I): Tepkimede girenlerdeki bağlar kopar, atomlar yeni biçimde birleşir. I doğrudur.
Adım 2 (II): Ürünler yeni maddelerdir; özellikleri girenlerinkinden farklıdır (sodyum ve klordan sofra tuzu oluşması gibi). II yanlıştır.
Adım 3 (III): Atomlar yok olmaz, yoktan da var olmaz; girenlerdeki toplam atom sayısı ürünlerdeki toplam atom sayısına eşittir. III doğrudur.
Sık yapılan hata: Ürünün özelliklerini girenlerin özelliklerinin karışımı sanmak.
Cevap C.`
},
{
  id: "fen-kt-302",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Sodyum, yumuşak ve gümüş renkli bir metaldir; suyla şiddetle tepkimeye girdiği için dikkatle saklanır. Klor ise zehirli, sarımsı yeşil renkli bir gazdır. Bu iki madde tepkimeye girdiğinde mutfaklarda kullandığımız beyaz, katı ve zararsız sofra tuzu oluşur.
**Bu olayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Sofra tuzu, sodyum ve klordan farklı özelliklere sahip yeni bir bileşiktir.",
    "Sofra tuzu, sodyum ile klorun karışımıdır ve ikisinin özelliklerini birlikte taşır.",
    "Sofra tuzu, yalnızca sodyumun özelliklerini taşır ve klor ona karışmıştır.",
    "Sofra tuzu, sodyumdan da klordan da daha basit bir element hâline gelmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bileşiği karışım sanma: karışımda maddeler özelliğini korur; bileşikte ise girenlerden farklı yeni özellikler ortaya çıkar.",
    "Bir girenin baskın olduğunu sanma: sofra tuzu ne sodyuma ne de klora benzer.",
    "Bileşiği element sanma: sofra tuzu iki elementin birleşmesiyle oluşan bir bileşiktir, element değildir."
  ],
  aciklama: `Bileşik, iki ya da daha fazla elementin kimyasal tepkimeyle birleşmesiyle oluşan saf maddedir; özellikleri kendisini oluşturan elementlerinkinden farklıdır.
Adım 1: Sodyum yumuşak metaldir, klor zehirli gazdır. Sofra tuzu ise beyaz, katı ve zararsızdır; yani ikisine de benzemez.
Adım 2: Özellikler tamamen değiştiğine göre tepkimede yeni bir madde (ürün) oluşmuştur. Bu ürün iki elementten oluştuğu için bir bileşiktir.
Adım 3: Karışımda maddeler özelliğini korurdu; burada böyle bir durum yoktur.
Sık yapılan hata: Bileşiğin, elementlerin özelliklerini birlikte taşıdığını düşünmek.
Cevap A.`
},
{
  id: "fen-kt-303",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki kürelerle hazırlanmış modelde, hidrojen ve oksijen gazlarının tepkimeye girerek su oluşturması gösterilmiştir.
I. Tepkime sırasında atomların toplam sayısı değişmiştir.
II. Tepkimeden sonraki molekül sayısı, tepkimeden öncekinden azdır.
III. Tepkimede girenlerde bulunmayan yeni bir tür molekül oluşmuştur.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 160" role="img" aria-label="Girenler iki hidrojen molekülü ve bir oksijen molekülüdür; ürünler iki su molekülüdür"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="82" x2="300" y2="82" stroke="currentColor" stroke-width="2.5"/><polygon points="300,75 312,82 300,89" fill="currentColor"/><circle cx="60" cy="62" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="60" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="86" cy="62" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="86" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="60" cy="112" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="60" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="86" cy="112" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="86" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="170" cy="88" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="170" y="93" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="202" cy="88" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="202" y="93" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="385" cy="72" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="385" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="363" cy="92" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="363" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="407" cy="92" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="407" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="480" cy="72" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="480" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="458" cy="92" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="458" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="502" cy="92" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="502" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><text x="280" y="152" text-anchor="middle" font-size="14" fill="currentColor">H: hidrojen atomu    O: oksijen atomu</text></svg>`,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Yeni tür molekülü atlama: su molekülü girenlerde yoktur, tepkimede oluşmuştur; III de doğrudur.",
    "Molekül sayısını saymayı atlama: girenlerde 3, üründe 2 molekül vardır; II de doğrudur.",
    "Atom sayısı değişti sanma: girenlerde 4 hidrojen ve 2 oksijen, üründe de 4 hidrojen ve 2 oksijen atomu vardır; I yanlıştır. II'yi de atladın.",
    null
  ],
  aciklama: `Tepkimede atomlar yeniden düzenlenir; atomların cinsi ve sayısı korunur, molekül sayısı ise değişebilir.
Adım 1 (I): Girenlerde 4 hidrojen + 2 oksijen = 6 atom, üründe de 4 hidrojen + 2 oksijen = 6 atom vardır. Atom sayısı değişmemiştir; I yanlıştır.
Adım 2 (II): Girenlerde 2 + 1 = 3 molekül, üründe 2 molekül vardır. Molekül sayısı azalmıştır; II doğrudur.
Adım 3 (III): Su molekülü girenlerde yoktur, tepkimede oluşmuştur. III doğrudur.
Sık yapılan hata: Atom sayısının korunmasını molekül sayısının da korunması sanmak.
Cevap D.`
},
{
  id: "fen-kt-304",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Elif, içinde su bulunan açık bir bardağı, yanındaki efervesan (köpürerek çözünen) tabletle birlikte terazinin kefesine koymuş; terazi 148 g göstermiştir. Sonra tableti suya atmıştır. Tablet suyla tepkimeye girerek köpürmüş ve gaz kabarcıkları havaya karışmıştır. Tepkime bitince bardağı yeniden tartmış ve terazi 146 g göstermiştir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kütle korunmamıştır; çünkü ürünlerin toplam kütlesi, girenlerin toplam kütlesinden 2 g azdır.",
    "Kütle korunmuştur; çünkü açığa çıkan gaz kaptan ayrılmış ve azalma o gazın kütlesidir.",
    "Kütle azalmıştır; çünkü tablet suda erirken kütlesinin bir bölümü suya geçmiş ve ayrılmıştır.",
    "Kütle korunmuştur; çünkü kap açık da olsa terazi her tepkimede aynı değeri gösterir."
  ],
  dogru: 1,
  hatalar: [
    "Açık kapta ölçülen azalmayı korunumun bozulması sanma: gaz kaptan çıkmıştır, ürünlerin toplam kütlesi yine girenlerinkine eşittir.",
    null,
    "Kütle aktarımı yanılgısı: tablet suya karışsa da madde kapta kalır; azalma yalnızca kaptan ayrılan gazdan gelir.",
    "Açık kapta terazinin değişmeyeceğini sanma: gaz çıkarsa terazi azalır; doğru sonuca yanlış gerekçeyle ulaşılmıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Kap açıksa oluşan gaz kaptan ayrılabilir; terazi yalnızca kapta kalan maddeleri gösterir.
Adım 1: Tablet suyla tepkimeye girmiş ve gaz oluşmuştur. Açık kapta bu gaz havaya karışmıştır.
Adım 2: Terazideki azalma 148 − 146 = 2 g'dır. Bu, kaptan ayrılan gazın kütlesidir; madde yok olmamıştır.
Adım 3: Girenlerin toplam kütlesi, kapta kalan maddeler ile havaya karışan gazın toplam kütlesine eşittir; kütle korunmuştur.
Sık yapılan hata: Açık kapta terazinin azalmasını "kütle yok oldu" diye yorumlamak.
Cevap B.`
},
{
  id: "fen-kt-305",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, açık bir kabın içindeki çelik yününü terazide tartıp alevle yakmıştır. Yünün kızararak yandığını, sonunda gri-siyah ve kırılgan bir ürüne dönüştüğünü gözlemlemiştir. Terazinin gösterdiği değerler tabloda verilmiştir.
I. Yünün içinde kendiliğinden madde oluşmuştur.
II. Havadaki oksijenin tamamı çelik yünüyle tepkimeye girmiştir.
III. Oluşan ürünün kütlesi, tepkimeye giren yün ile havadan alınan gazın kütleleri toplamına eşittir.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Terazinin gösterdiği (g)</th></tr><tr><td>Yakmadan önce</td><td>50</td></tr><tr><td>Yanma bittikten sonra</td><td>54</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "Yalnız III"
  ],
  dogru: 3,
  hatalar: [
    "Kütlenin yoktan var olduğunu sanma: kütle artışı, havadan alınan gazdan gelir; madde yoktan oluşmaz.",
    "Verilmeyen bilgiye dayanma: havadaki oksijenin tamamının harcandığı bilinemez, yalnızca gereken kadarı harcanır.",
    "Verilmeyen bilgiye dayalı yargıyı doğru sayma: II için veri yoktur; yalnızca III kesinlikle doğrudur.",
    null
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Açık kapta ortamdan gaz girebilir ya da gaz çıkabilir.
Adım 1 (I): Madde yoktan var olmaz. Terazideki 4 g'lık artış dışarıdan, yani havadan gelen maddeden kaynaklanır. I yanlıştır.
Adım 2 (II): Yalnızca yünle tepkimeye girecek kadar oksijen kullanılır; havadaki oksijenin tamamının harcandığı tablodan çıkarılamaz. II kesin değildir.
Adım 3 (III): Ürün, girenlerin birleşmesiyle oluştuğundan kütlesi giren yün ile giren oksijenin kütleleri toplamıdır. III doğrudur.
Sık yapılan hata: Kütle artışını "madde kendiliğinden oluştu" ya da "havadaki gazın tamamı harcandı" diye yorumlamak.
Cevap D.`
},
{
  id: "fen-kt-306",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Parlak ve kırmızımsı renkli bir bakır tel, havada ısıtılınca yüzeyi siyah bir tabakayla kaplanmıştır. Bu siyah tabakaya bakır oksit denir; tabaka katıdır, mattır ve elektriği iletmez. Bakır elektriği iyi iletir, oksijen ise renksiz ve kokusuz bir gazdır.
**Bu olayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Girenler bakır ve oksijendir; ürün olan bakır oksidin özellikleri bu iki maddeden farklıdır.",
    "Girenler bakır oksit ve oksijendir; ürün olan bakırın özellikleri girenlerinkiyle aynıdır.",
    "Girenler bakır ve oksijendir; ürün olan bakır oksidin özellikleri bakırınkiyle aynıdır.",
    "Girenler bakır ve bakır oksittir; ürün olan oksijenin özellikleri girenlerden farklıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Giren ile ürünü karıştırma: bakır oksit tepkimede oluşan üründür, tepkimeye giren madde değildir.",
    "Ürünü girenle aynı sanma: bakır oksit elektriği iletmez, siyah ve mattır; bakır ise elektriği iyi iletir, kırmızımsı ve parlaktır.",
    "Giren ile ürünü karıştırma: oksijen girendir, ürün bakır oksittir."
  ],
  aciklama: `Tepkimeye giren maddelere girenler, tepkime sonunda oluşan yeni maddelere ürünler denir.
Adım 1: Tel ısıtılınca bakır havadaki oksijenle birleşiyor; yani girenler bakır ve oksijendir.
Adım 2: Bu birleşme sonucunda bakır oksit oluşuyor; ürün, bakır oksittir.
Adım 3: Bakır oksit elektriği iletmez ve mattır; bakır ise elektriği iyi iletir ve parlaktır. Oksijen de renksiz bir gazdır. Ürünün özellikleri girenlerinkinden farklıdır.
Sık yapılan hata: Tepkime sonunda ortaya çıkan maddeyi giren sanmak.
Cevap A.`
},
{
  id: "fen-kt-307",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki kürelerle hazırlanmış modelde, azot ve hidrojen gazlarının tepkimeye girerek amonyak gazı oluşturması gösterilmiştir.
I. Tepkimede girenlerde bulunmayan yeni bir tür molekül oluşmuştur.
II. Tepkimeden önce de sonra da toplam 8 atom vardır.
III. Tepkimeden önceki molekül sayısı, tepkimeden sonraki molekül sayısına eşittir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 165" role="img" aria-label="Girenler bir azot molekülü ve üç hidrojen molekülüdür; ürünler iki amonyak molekülüdür"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="2.5"/><polygon points="300,78 312,85 300,92" fill="currentColor"/><circle cx="45" cy="82" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="45" y="87" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="77" cy="82" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="77" y="87" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="140" cy="52" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="140" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="166" cy="52" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="166" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="140" cy="87" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="140" y="92" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="166" cy="87" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="166" y="92" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="140" cy="122" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="140" y="127" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="166" cy="122" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="166" y="127" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="385" cy="85" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="385" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="358" cy="95" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="358" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="412" cy="95" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="412" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="385" cy="57" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="385" y="62" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="480" cy="85" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="480" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="453" cy="95" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="453" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="507" cy="95" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="507" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><circle cx="480" cy="57" r="13" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="480" y="62" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text><text x="280" y="157" text-anchor="middle" font-size="14" fill="currentColor">N: azot atomu    H: hidrojen atomu</text></svg>`,
  secenekler: [
    "Yalnız I",
    "II ve III",
    "I ve II",
    "I ve III"
  ],
  dogru: 2,
  hatalar: [
    "Atom sayısını saymayı atlama: girenlerde 2 + 6 = 8, ürünlerde 2 × 4 = 8 atom vardır; II de doğrudur.",
    "Molekül sayısını eşit sanma: girenlerde 4, ürünlerde 2 molekül vardır; III yanlıştır. I'i de atladın.",
    null,
    "Molekül sayısı ile atom sayısını karıştırma: atom sayısı korunur, molekül sayısının korunması gerekmez; III yanlış, II doğrudur."
  ],
  aciklama: `Tepkimede atomların cinsi ve sayısı korunur; ama atomlar yeni gruplar hâlinde birleştiği için molekül sayısı değişebilir.
Adım 1 (I): Amonyak molekülü girenlerde yoktur, tepkimede oluşmuştur. I doğrudur.
Adım 2 (II): Girenlerde 2 azot + 6 hidrojen = 8 atom, ürünlerde 2 × (1 azot + 3 hidrojen) = 8 atom vardır. II doğrudur.
Adım 3 (III): Girenlerde 1 + 3 = 4 molekül, ürünlerde 2 molekül vardır. Eşit değildir; III yanlıştır.
Sağlama: Atomlar sayıldığında 8 = 8 olduğundan I ve II doğrudur.
Cevap C.`
},
{
  id: "fen-kt-308",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Sarı renkli katı kükürt, havada ya da saf oksijende yakılınca mavimsi bir alevle yanar ve keskin kokulu bir gaz olan kükürt dioksit oluşur. Bu üç maddenin bazı özellikleri tabloda verilmiştir.
**Tablodaki bilgilere göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Madde</th><th>Özellik</th></tr><tr><td>Kükürt</td><td>Sarı renkli, katı, kokusuz</td></tr><tr><td>Oksijen</td><td>Renksiz, kokusuz gaz; yanmayı sağlar</td></tr><tr><td>Kükürt dioksit</td><td>Renksiz gaz; keskin ve boğucu kokulu</td></tr></table>`,
  secenekler: [
    "Kükürt dioksit, iki girenin özelliklerini birlikte taşır; bu yüzden hem sarıdır hem yanmayı sağlar.",
    "Kükürt dioksitin özellikleri girenlerinkinden farklıdır; bu yüzden yeni bir madde oluşmuştur.",
    "Kükürt dioksit, kükürtle aynı özelliktedir; bu yüzden tabloya göre sarı renkli ve katı hâldedir.",
    "Kükürt dioksit, oksijenle aynı özelliktedir; bu yüzden tabloya göre kokusuz ve yanmayı sağlar."
  ],
  dogru: 1,
  hatalar: [
    "Özellikleri toplama hatası: bileşiğin özellikleri girenlerin özelliklerinin toplamı değildir; ürün ne sarıdır ne de yanmayı sağlar.",
    null,
    "Ürünü kükürtle özdeş sanma: kükürt sarı ve katıdır, kükürt dioksit ise renksiz bir gazdır.",
    "Ürünü oksijenle özdeş sanma: kükürt dioksit keskin kokuludur, oksijen ise kokusuzdur."
  ],
  aciklama: `Bileşiklerin özellikleri, kendilerini oluşturan elementlerinkinden farklıdır; bu fark yeni madde oluştuğunun kanıtıdır.
Adım 1: Kükürt sarı ve katıdır; kükürt dioksit renksiz gazdır. Fark vardır.
Adım 2: Oksijen kokusuzdur ve yanmayı sağlar; kükürt dioksit ise keskin kokuludur ve tabloda yanmayı sağladığı yazmaz. Burada da fark vardır.
Adım 3: Ürün, iki girenin de özelliklerinden ayrıldığına göre yeni bir maddedir.
Sık yapılan hata: Ürünün özelliklerini girenlerden birine benzetmek ya da ikisinin özelliklerini toplamak.
Cevap B.`
},
{
  id: "fen-kt-309",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Cam bir kavanozun içine yanan bir mum yerleştirilip kavanozun kapağı sıkıca kapatılmış ve düzenek terazide tartılmıştır. Bir süre sonra mum sönmüş; kavanozun iç yüzeyinde ince bir su buharı tabakası ve is oluşmuştur.
I. Mum söndükten sonra terazinin gösterdiği değer, başlangıçtakinden azdır.
II. Mumun yanmasıyla karbondioksit ve su buharı gibi yeni maddeler oluşmuştur.
III. Kavanozun kapağı açık olsaydı da terazideki değer kesinlikle aynı kalırdı.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Kapalı kapta kütlenin azaldığını sanma: kapak kapalıyken kaptan madde çıkamaz, toplam kütle değişmez.",
    null,
    "Kapalı kapta azalma, açık kapta sabitlik yanılgısı: kapalı kapta kütle korunur; açık kapta ise gaz ürünler ayrıldığı için değer değişir.",
    "Açık kapta değişim olmayacağını sanma: gaz ürünler ortama karışır ve terazi değişir; III yanlıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Kapalı kapta madde giriş çıkışı olmadığından terazi değişmez.
Adım 1 (I): Kavanoz kapalıdır; yanma ürünleri de kavanozun içinde kalır. Terazideki değer değişmez. I yanlıştır.
Adım 2 (II): Mum yanarken oksijenle tepkimeye girer; karbondioksit ve su buharı gibi yeni maddeler oluşur. II doğrudur.
Adım 3 (III): Kapak açık olsaydı gaz ürünler ortama karışırdı; terazideki değer değişirdi. III yanlıştır.
Sık yapılan hata: Mumun yanmasında kütlenin kapalı kapta da azaldığını sanmak.
Cevap B.`
},
{
  id: "fen-kt-310",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, kapalı bir kapta karbonu oksijenle tepkimeye sokarak karbondioksit elde etmiştir. İki deneyde kullanılan madde miktarları tabloda verilmiştir. Her iki deneyde de girenlerin tamamı tepkimeye girmiş, artan madde kalmamıştır.
**Buna göre 2. deneyde oluşan karbondioksit kaç gramdır?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Karbon (g)</th><th>Oksijen (g)</th><th>Oluşan karbondioksit (g)</th></tr><tr><td>1</td><td>3</td><td>8</td><td>11</td></tr><tr><td>2</td><td>6</td><td>16</td><td>?</td></tr></table>`,
  secenekler: [
    "10",
    "11",
    "16",
    "22"
  ],
  dogru: 3,
  hatalar: [
    "Toplamak yerine çıkarma: ürünün kütlesi girenlerin toplamıdır, farkı değil (16 − 6 = 10).",
    "İlk deneyin sonucunu aynen alma: miktarlar değişince oluşan ürün de değişir.",
    "Yalnızca oksijenin kütlesini ürün sanma: ürün, girenlerin ikisinin de kütlesini taşır.",
    null
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
Adım 1: 2. deneyde girenler 6 g karbon ve 16 g oksijendir.
Adım 2: Artan madde olmadığına göre girenlerin tamamı ürüne dönüşmüştür.
Adım 3: Oluşan karbondioksit = 6 + 16 = 22 g.
Sağlama: 1. deneyde de 3 + 8 = 11 g bulunmuştu; ürün her zaman girenlerin toplamına eşittir.
Cevap D.`
},
{
  id: "fen-kt-311",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, demir tozu ile kükürt tozunu karıştırıp karışıma mıknatıs yaklaştırmış; ardından aynı karışımı deney tüpünde ısıtıp soğutmuş ve oluşan siyah katıya yeniden mıknatıs yaklaştırmıştır. Gözlemleri tabloda verilmiştir.
**Bu gözlemlere göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Mıknatıs yaklaştırılınca</th><th>Gözle bakınca</th></tr><tr><td>Isıtılmamış karışım</td><td>Gri parçacıklar çekilip ayrılır</td><td>Gri ve sarı parçacıklar ayırt edilir</td></tr><tr><td>Isıtılıp soğutulmuş siyah katı</td><td>Hiçbir parçacık çekilmez</td><td>Tek tip siyah katı; parçacıklar ayırt edilemez</td></tr></table>`,
  secenekler: [
    "Isıtılmamış örnek karışımdır, siyah katı ise karışım değildir; çünkü demir yalnızca ilkinde özelliğini korumuştur.",
    "Siyah katı da bir karışımdır; çünkü mıknatısın çekmemesi, demirin çok küçük parçacıklara ayrıldığını gösterir.",
    "Her iki örnekte de demir özelliğini korumuştur; çünkü ısıtma yalnızca kükürdün özelliklerini değiştirmiştir.",
    "Isıtılmamış örnek bir bileşiktir, siyah katı ise karışımdır; çünkü ısıtma maddeleri birbirinden ayırmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bileşiği karışım sanma: mıknatısın çekmemesi demirin küçüldüğünü değil, özelliğinin değiştiğini gösterir; karışımda demir özelliğini korur.",
    "Demirin değişmediğini sanma: mıknatıs siyah katıyı çekmediğine göre demir özelliğini kaybetmiştir; ısıtmayla yeni bir madde oluşmuştur.",
    "Karışım ile bileşiği ters yorumlama: demirin ayrılabildiği örnek karışımdır; ısıtma maddeleri ayırmaz, kimyasal tepkimeyle birleştirir."
  ],
  aciklama: `Karışımda maddeler kendi özelliklerini korur ve fiziksel yöntemlerle ayrılabilir. Bileşik ise kimyasal tepkimeyle oluşur ve girenlerden farklı özelliklere sahiptir.
Adım 1: Isıtılmamış örnekte demir parçacıkları mıknatısla çekilip ayrılıyor, gri ve sarı parçacıklar ayırt ediliyor. Demir ve kükürt özelliklerini korumuştur; bu örnek bir karışımdır.
Adım 2: Isıtılıp soğutulan siyah katıyı mıknatıs çekmiyor ve parçacıklar ayırt edilemiyor. Demirin özelliği kaybolmuştur; ısıtma sırasında demir ile kükürt tepkimeye girip yeni bir madde oluşturmuştur.
Adım 3: Özelliklerini koruyan maddelerden oluşan örnek karışımdır; özellikleri değişmiş yeni madde karışım değildir. Demirin özelliğini korumasını yalnızca ilk örnekte görürüz.
Sık yapılan hata: Mıknatısın çekmemesini, demirin yalnızca ince tozlara ayrıldığı biçiminde yorumlamak.
Cevap A.`
},
{
  id: "fen-kt-312",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kâğıt parçası, ağzı açık bir porselen kapta terazide tartılmıştır; terazi 62 g göstermiştir (kap 50 g, kâğıt 12 g). Kâğıt yakılınca alevle yanmış, geriye az miktarda gri kül kalmıştır. Yanma bitince kap ve kül yeniden tartıldığında terazi 51 g göstermiştir.
**Terazideki bu azalma aşağıdakilerden hangisiyle açıklanır?**`,
  gorsel: null,
  secenekler: [
    "Kap ısındığı için kütlesi azalmıştır; çünkü ısınan her madde kütlesinin bir bölümünü kaybeder.",
    "Kâğıdın bir bölümü küle dönüşmüştür; çünkü kül, aynı kütledeki kâğıttan daha az yer kaplar.",
    "Kâğıdın bir bölümü gaz ürünlere dönüşmüştür; çünkü açık kapta oluşan gazlar havaya karışır.",
    "Kâğıdın bir bölümü ısı enerjisine dönüşmüştür; çünkü yanmada madde enerjiye çevrilerek kaybolur."
  ],
  dogru: 2,
  hatalar: [
    "Isınmayı kütle kaybı sanma: ısınan kap kütle kaybetmez; azalma, gaz ürünlerin kaptan ayrılmasından gelir.",
    "Kütle ile hacmi karıştırma: kütle kaybı, hacim farkıyla değil gazların kaptan ayrılmasıyla açıklanır.",
    null,
    "Maddenin ısıya dönüştüğünü sanma: yanmada madde gazlara dönüşür; kaybolan kütle gaz hâlinde ortamdadır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Açık kapta oluşan gazlar kaptan ayrıldığında terazi azalır.
Adım 1: Kâğıt yanınca havadaki oksijenle tepkimeye girer; karbondioksit ve su buharı gibi gaz ürünler oluşur.
Adım 2: Kap açık olduğu için bu gazlar havaya karışır; kapta yalnızca 1 g kül kalır.
Adım 3: Kâğıdın kapta kalmayan 11 g'lık bölümü gaz ürünlerin içindedir. Terazi yalnızca kapta kalanı gösterdiği için 62 − 51 = 11 g azalma görülür; havadaki oksijen de hesaba katılırsa toplam kütle yine korunmuştur.
Sık yapılan hata: Kütlenin enerjiye dönüştüğünü ya da yok olduğunu düşünmek.
Cevap C.`
},
{
  id: "fen-kt-313",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Mert, "Bir kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir." hipotezini sınamak istiyor. Gaz çıkışıyla ilerleyen bir tepkime seçmiş ve terazisini hazırlamıştır.
**Mert'in hipotezini en güvenilir biçimde sınamak için hangi düzeneği kurması gerekir?**`,
  gorsel: null,
  secenekler: [
    "Ağzı açık kapta tepkimeyi gerçekleştirip yalnızca oluşan katı ürünü tartmak",
    "Ağzı açık kapta, tepkimeden önce ve sonra kabı içeriğiyle birlikte tartmak",
    "Ağzı sıkıca kapalı kapta, tepkimeden önce girenleri, sonra yalnızca kabın kendisini tartmak",
    "Ağzı sıkıca kapalı kapta, tepkimeden önce ve sonra kabı bütün içeriğiyle birlikte tartmak"
  ],
  dogru: 3,
  hatalar: [
    "Ürünün bir bölümünü tartma: gaz ürün hesaba katılmaz, girenlerle karşılaştırma yapılamaz.",
    "Açık kap kullanma: gaz kaptan çıkar ve ölçülen kütle değişir; korunum doğru sınanamaz.",
    "Aynı sistemi karşılaştırmama: önce girenler, sonra yalnızca boş kap tartılırsa ürünler ölçüme girmez.",
    null
  ],
  aciklama: `Kütlenin korunumunu sınamak için tepkimeye giren ve çıkan bütün maddelerin ölçüme katılması gerekir; bunun için kap kapalı olmalıdır.
Adım 1: Gaz çıkışı varsa açık kapta gaz kaptan ayrılır; ölçüm eksik kalır.
Adım 2: Kap sıkıca kapatılırsa hiçbir madde giriş çıkış yapamaz.
Adım 3: Aynı kap, tepkimeden önce ve sonra bütün içeriğiyle tartılırsa girenlerin toplam kütlesi ile ürünlerin toplam kütlesi doğru karşılaştırılır.
Sık yapılan hata: Yalnızca katı ürünü ya da yalnızca kabı tartmak.
Cevap D.`
},
{
  id: "fen-kt-314",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kapalı bir kapta magnezyum şerit ile oksijen gazı tepkimeye sokulmuş ve magnezyum oksit oluşmuştur. Kaptaki maddelerin tepkimeden önceki ve sonraki kütleleri tabloda verilmiştir.
**Tabloya göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Madde</th><th>Tepkimeden önce (g)</th><th>Tepkimeden sonra (g)</th></tr><tr><td>Magnezyum</td><td>6</td><td>0</td></tr><tr><td>Oksijen</td><td>10</td><td>6</td></tr><tr><td>Magnezyum oksit</td><td>0</td><td>10</td></tr></table>`,
  secenekler: [
    "Oksijenin tamamı harcanmıştır; çünkü tepkime sonunda kapta magnezyum oksit oluşmuştur.",
    "Toplam kütle 16 g'dan 10 g'a düşmüştür; çünkü magnezyum tükenmiş ve gaz ayrılmıştır.",
    "Tepkimeye 4 g oksijen girmiş, 6 g oksijen artmıştır; çünkü toplam kütle korunmuştur.",
    "Magnezyum artmıştır; çünkü magnezyum oksidin kütlesi girenlerin toplam kütlesinden azdır."
  ],
  dogru: 2,
  hatalar: [
    "Ürünün oluşmasını girenlerin tükendiği sanma: oksijenin 6 g'ı tepkimeye girmeden kalmıştır.",
    "Toplam kütleyi yalnızca üründen hesaplama: kapta artan oksijen de vardır; sonra 6 + 10 = 16 g olur, toplam değişmemiştir.",
    null,
    "Artan maddeyi yanlış belirleme: magnezyumun son kütlesi 0'dır, tükenmiştir; artan madde oksijendir."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Tepkimede girenlerden biri tükenir; diğerinden artan kalabilir.
Adım 1: Magnezyum 6 g'dan 0 g'a inmiştir; yani tamamı tepkimeye girmiştir.
Adım 2: Oluşan magnezyum oksit 10 g'dır. Ürün = giren magnezyum + giren oksijen olduğundan giren oksijen 10 − 6 = 4 g'dır.
Adım 3: Oksijen 10 g'dan 6 g'a inmiştir; harcanan 4 g, artan 6 g'dır.
Sağlama: Önce 6 + 10 = 16 g, sonra 0 + 6 + 10 = 16 g; toplam kütle korunmuştur.
Cevap C.`
},
{
  id: "fen-kt-315",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Nemli demir tozu ve hava dolu cam bir kavanoz, kapağı sıkıca kapatılarak terazide tartılmış ve terazi 240 g göstermiştir. Kavanoz bir hafta kenarda bırakılmış; bu sürede toz kahverengiye dönüşmüş, kavanozun kapağı hiç açılmamıştır.
**Bir hafta sonra kavanoz yeniden tartılırsa terazi kaç gram gösterir ve bunun nedeni nedir?**`,
  gorsel: null,
  secenekler: [
    "240 g; çünkü kavanoz kapalıdır ve girenlerin toplam kütlesi ürünlerinkine eşit kalır.",
    "238 g; çünkü paslanma sırasında demirin bir bölümü gaza dönüşüp kavanozdan çıkar.",
    "242 g; çünkü pas, demirden daha ağır bir madde olduğundan terazi daha büyük değer gösterir.",
    "240 g; çünkü paslanma kimyasal değişim olmadığından kütlede hiçbir değişiklik yapmaz."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Demirin gaza dönüştüğünü sanma: pas katıdır; üstelik kapalı kaptan hiçbir madde çıkamaz.",
    "Kütlenin kendiliğinden arttığını sanma: kapalı kaba madde eklenmez; artış ancak dışarıdan madde girerse görülür.",
    "Doğru sayı, yanlış gerekçe: paslanma kimyasal değişimdir; kütle, kap kapalı olduğu için değişmez."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Kapalı kapta madde giriş çıkışı olmaz.
Adım 1: Demir, kavanozdaki oksijen ve nemle tepkimeye girerek pası oluşturur; kahverengileşme bunun işaretidir.
Adım 2: Kapak hiç açılmadığı için kavanozun içindeki maddeler kaptan çıkamaz, dışarıdan da madde giremez.
Adım 3: Kap kapalı olduğundan toplam kütle değişmez; terazi yine 240 g gösterir.
Sık yapılan hata: Pasın demirden daha ağır olduğu için kütlenin arttığını düşünmek. Pasın kütlesi demirden fazladır, çünkü demire oksijen katılmıştır; ama bu oksijen kavanozdaki havadan gelmiştir ve toplam kütle aynı kalır.
Cevap A.`
},
{
  id: "fen-kt-316",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci üç ayrı kimyasal tepkimeyi terazi üzerinde gerçekleştirmiş ve kütle değişimlerini tabloya yazmıştır.
I. K'de tepkimeye havadaki bir gaz katılmıştır.
II. L'de tepkime sırasında kütle yok olmuştur.
III. M'de girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Koşul</th><th>Başlangıç (g)</th><th>Son (g)</th></tr><tr><td>K</td><td>Açık kapta bakır tel ısıtıldı</td><td>52</td><td>54</td></tr><tr><td>L</td><td>Açık kapta kibrit çöpü yakıldı</td><td>60</td><td>59</td></tr><tr><td>M</td><td>Kapalı kapta efervesan tablet suyla tepkimeye sokuldu</td><td>120</td><td>120</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Korunumun her tepkimede geçerli olduğunu atlama: M'de de girenlerin toplam kütlesi ürünlerinkine eşittir; III de doğrudur.",
    null,
    "Kütle azalmasını yok olma sanma: L'de gaz ürünler kaptan ayrılmıştır, kütle yok olmamıştır. I'i de atladın.",
    "L'deki azalmayı kütle kaybı sanma: açık kaptan ayrılan gaz kütle taşır; madde yok olmamıştır, II yanlıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Bu ilke, kap açık da olsa kapalı da olsa her tepkimede geçerlidir; yalnızca açık kapta terazi, kaptan ayrılan ya da kaba giren gazı yansıtır.
Adım 1 (K): Açık kapta kütle 52 g'dan 54 g'a çıkmıştır. Kaba dışarıdan madde girmeden kütle artmaz; bu madde havadaki gazdır (oksijen). I doğrudur.
Adım 2 (L): 1 g'lık azalma, yanma ürünü gazların kaptan ayrılmasından kaynaklanır. Kütle yok olmamıştır. II yanlıştır.
Adım 3 (M): Kap kapalıdır, terazi değişmemiştir; girenlerin toplam kütlesi ürünlerin toplam kütlesine eşittir. III doğrudur.
Sık yapılan hata: Terazideki azalmayı "kütle yok oldu" diye yorumlamak.
Cevap B.`
},
{
  id: "fen-kt-317",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, demir tozu ile kükürt tozunu farklı miktarlarda karıştırıp ısıtmış ve her deneyde oluşan demir sülfür miktarını tartmıştır. Sonuçlar tabloda verilmiştir. Deneyler kapalı kapta yapılmıştır ve tepkime sonunda kaptan ayrılan madde yoktur.
**Buna göre 2. ve 3. deneylerde tepkimeye girmeden artan maddeler hangileridir?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Demir (g)</th><th>Kükürt (g)</th><th>Oluşan demir sülfür (g)</th></tr><tr><td>1</td><td>7</td><td>4</td><td>11</td></tr><tr><td>2</td><td>14</td><td>4</td><td>11</td></tr><tr><td>3</td><td>7</td><td>8</td><td>11</td></tr></table>`,
  secenekler: [
    "2. deneyde 7 g kükürt, 3. deneyde 4 g demir artmıştır.",
    "2. deneyde 11 g demir, 3. deneyde 11 g kükürt artmıştır.",
    "2. deneyde 7 g demir, 3. deneyde 8 g kükürt artmıştır.",
    "2. deneyde 7 g demir, 3. deneyde 4 g kükürt artmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Artan maddeleri ters belirleme: 1. deneyde 7 g demir ile 4 g kükürt eksiksiz tepkimeye girmiştir; bu yüzden 2. deneyde fazla olan demirdir.",
    "Ürün kütlesini artan madde sanma: artan miktar, girenlerin toplamı ile ürünün kütlesi arasındaki farktır.",
    "Verilen miktarı artan miktar sanma: 3. deneyde 8 g kükürtün 4 g'ı tepkimeye girmiştir, artan 4 g'dır.",
    null
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Artan madde, girenlerin toplamı ile ürün arasındaki farktır.
Adım 1 (1. deney): 7 + 4 = 11 g; ürün de 11 g'dır. Artan madde yoktur; yani 7 g demir ile 4 g kükürt tam tepkimeye girer.
Adım 2 (2. deney): Girenler 14 + 4 = 18 g, ürün 11 g; artan 18 − 11 = 7 g'dır. Kükürtün 4 g'ı tamamen harcandığına göre artan madde demirdir.
Adım 3 (3. deney): Girenler 7 + 8 = 15 g, ürün 11 g; artan 15 − 11 = 4 g'dır. 7 g demir tamamen harcandığına göre artan madde kükürttür.
Sağlama: 2. deneyde 7 g demir + 4 g kükürt = 11 g ürün; 3. deneyde de aynı. Artanlar toplamdan çıkınca 11 g kalır.
Cevap D.`
},
{
  id: "fen-kt-318",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki modelde karbon atomlarının oksijen gazıyla tepkimesi ve tepkime bittiğinde ortamda kalan tanecikler gösterilmiştir.
I. Tepkimeye girmeyen bir karbon atomu ortamda kalmıştır.
II. Tepkimeye girmeyen bir oksijen molekülü ortamda kalmıştır.
III. Tepkimeden önce ortamda 8 atom varken tepkimeden sonra 6 atom vardır.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 175" role="img" aria-label="Girenler iki karbon atomu ve üç oksijen molekülüdür; sonunda iki karbondioksit molekülü ve bir oksijen molekülü bulunur"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="2.5"/><polygon points="300,78 312,85 300,92" fill="currentColor"/><circle cx="45" cy="72" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="45" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">C</text><circle cx="45" cy="112" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="45" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">C</text><circle cx="125" cy="50" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="125" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="157" cy="50" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="157" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="125" cy="90" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="125" y="95" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="157" cy="90" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="157" y="95" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="125" cy="130" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="125" y="135" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="157" cy="130" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="157" y="135" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="335" cy="62" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="335" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="367" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="367" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">C</text><circle cx="399" cy="62" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="399" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="335" cy="107" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="335" y="112" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="367" cy="107" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="367" y="112" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">C</text><circle cx="399" cy="107" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="399" y="112" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="470" cy="85" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="470" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="502" cy="85" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="502" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><text x="280" y="167" text-anchor="middle" font-size="14" fill="currentColor">C: karbon atomu    O: oksijen atomu</text></svg>`,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Artan taneciği saymayı unutma: önce 2 + 6 = 8, sonra 2 × 3 + 2 = 8 atom vardır; III yanlıştır. II'yi de atladın.",
    "Artanı yanlış belirleme: iki karbon atomu da tepkimeye girmiştir (iki karbondioksit molekülünde birer karbon vardır); artan tanecik oksijen molekülüdür.",
    "Artanı ve atom sayısını yanlış belirleme: artan karbon atomu yoktur, atom sayısı da korunmuştur (8 = 8); II'yi de atladın."
  ],
  aciklama: `Tepkimede atomlar yeniden düzenlenir; atom sayısı korunur. Tepkimeye girmeden artan tanecikler ürünle birlikte ortamda kalır.
Adım 1: Girenler 2 karbon atomu ve 3 oksijen molekülüdür (6 oksijen atomu); toplam 2 + 6 = 8 atom.
Adım 2: Üründe 2 karbondioksit molekülü vardır; her biri 1 karbon ve 2 oksijen atomudur. Böylece 2 karbon ve 4 oksijen atomu kullanılmıştır. Karbonun tamamı harcanmış, geriye 6 − 4 = 2 oksijen atomu, yani 1 oksijen molekülü kalmıştır.
Adım 3: Sonda 6 atom (2 molekül) + 2 atom (1 molekül) = 8 atom vardır. I yanlış, II doğru, III yanlıştır.
Sağlama: 8 atom önce, 8 atom sonra.
Cevap A.`
},
{
  id: "fen-kt-319",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aynı kütledeki iki magnezyum şerit, biri kapalı, diğeri açık iki kapta yakılmıştır. Şeritlerin tamamı magnezyum oksite dönüşmüştür. Kütle değişimleri tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Koşul</th><th>Başlangıç (g)</th><th>Son (g)</th></tr><tr><td>P</td><td>Kapalı kapta yakıldı</td><td>100</td><td>100</td></tr><tr><td>R</td><td>Açık kapta yakıldı</td><td>100</td><td>104</td></tr></table>`,
  secenekler: [
    "P'de tepkime olmamıştır; çünkü terazi, tepkimeden sonra da başlangıç değerini göstermektedir.",
    "R'de kütle korunmamıştır; çünkü terazi başlangıçtakinden daha fazla değer göstermektedir.",
    "R'deki artış, havadan gaz katıldığını gösterir; çünkü şeritten başka giren madde yoktur.",
    "P'de oluşan ürünün kütlesi, şeridin kütlesine eşittir; çünkü kap kapalıysa terazi sabittir."
  ],
  dogru: 2,
  hatalar: [
    "Kütle sabit kaldı diye tepkime olmadığını sanma: kapalı kapta tepkime olsa da terazi değişmez.",
    "Açık kapta artışı korunumun bozulması sanma: havadan giren gaz da hesaba katılınca toplam kütle yine korunur.",
    null,
    "Ürünü girenlerden yalnızca biriyle eşleme: ürünün kütlesi şerit ile oksijenin kütleleri toplamına eşittir."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Açık kapta terazi, kaptan ayrılan ya da kaba giren maddeleri de yansıtır.
Adım 1 (P): Kap kapalıdır; hiçbir madde girip çıkmaz, terazi değişmez. Bu, tepkimenin olmadığını göstermez; şerit yanmıştır.
Adım 2 (R): Terazi 4 g artmıştır. Kaba dışarıdan madde girmeden kütle artmaz. Şeritten başka giren olmadığına göre havadaki oksijen tepkimeye katılmıştır.
Adım 3: Ürün, şerit ve oksijenin kütleleri toplamına eşittir; yani P'de de ürünün kütlesi şeritten fazladır.
Sık yapılan hata: Terazideki artışı "kütle korunmadı" diye yorumlamak.
Cevap C.`
},
{
  id: "fen-kt-320",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Gaz çıkışıyla ilerleyen bir tepkime iki düzenekte gerçekleştiriliyor. 1. düzenekte tepkime kabının ağzına balon geçirilmiştir; çıkan gaz balonu şişirmiştir. 2. düzenekte kabın ağzı açıktır. İki düzenekte de başlangıçta terazi 250 g göstermektedir. Tepkime bitince 1. düzenekte terazi 250 g, 2. düzenekte 247 g göstermiştir.
I. Balonun şişmesi toplam kütlenin artmasına yol açmıştır.
II. 2. düzenekte azalan 3 g kütle yok olmuştur.
III. 2. düzenekte açığa çıkan gaz kaptan ayrıldığı için terazide azalma görülmüştür.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız III",
    "Yalnız I",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Balonu kütle ekleyen bir nesne sanma: gaz balonda kaldığı için toplam kütle değişmemiştir (250 g).",
    "Şişmeyi ve azalmayı yanlış yorumlama: şişme kütleyi artırmaz, azalan kütle de yok olmamış, gaz olarak ayrılmıştır.",
    "Azalmayı yok olma sanma: 3 g madde yok olmaz, gaz olarak ortama karışmıştır; II yanlıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Gaz kaptan çıkarsa terazi azalır; gaz kapta (balonda) kalırsa terazi değişmez.
Adım 1 (I): 1. düzenekte terazi 250 g'da kalmıştır. Gaz balonda toplanmıştır; toplam kütle artmamıştır. I yanlıştır.
Adım 2 (II): 2. düzenekte 3 g madde yok olmamıştır; gaz hâlinde ortama karışmıştır. II yanlıştır.
Adım 3 (III): Gaz açık kaptan ayrıldığı için terazide azalma görülmüştür. III doğrudur.
Sık yapılan hata: Şişen balonu ya da azalan kütleyi "madde oluştu/yok oldu" diye yorumlamak.
Cevap A.`
},
{
  id: "fen-kt-321",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Ağzı açık bir porselen kapta 6 g kükürt tozu terazide tartıldıktan sonra yakılmıştır. Kükürt tamamen yanmış ve kapta hiçbir madde kalmamıştır. Havadaki oksijenin 6 g'ının kükürtle tepkimeye girdiği ve oluşan kükürt dioksit gazının tamamının havaya karıştığı belirlenmiştir.
**Buna göre yanma bittiğinde terazi başlangıca göre kaç gram azalma gösterir?**`,
  gorsel: null,
  secenekler: [
    "0",
    "6",
    "12",
    "18"
  ],
  dogru: 1,
  hatalar: [
    "Kapalı kap kuralını açık kapta uygulama: gaz kaptan ayrıldığı için terazi değişir.",
    null,
    "Ürünün bütün kütlesini azalma sanma: ürünün 6 g'ı havadaki oksijenden gelmiştir, kapta hiç bulunmamıştır.",
    "Kütleleri gelişigüzel toplama: oksijen kapta değildi, ürünü de ayrıca saymak gerekmez."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Terazi yalnızca kapta bulunan maddeleri tartar.
Adım 1: Kapta 6 g kükürt vardı; yanma sonunda kapta hiçbir madde kalmamıştır.
Adım 2: Tepkimeye giren oksijen kapta değil havadaydı; oluşan 6 + 6 = 12 g kükürt dioksit gazı da havaya karışmıştır.
Adım 3: Terazideki azalma, kapta başlangıçta bulunan maddenin kütlesi kadardır: 6 g.
Sağlama: Havadan 6 g gaz girdiği ve toplam 12 g gaz çıktığı için kaptaki net değişim 12 − 6 = 6 g azalmadır.
Cevap B.`
},
{
  id: "fen-kt-322",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Sıkıca kapatılmış bir kapta 2 g hidrojen ve 20 g oksijen gazı bulunmaktadır. Kıvılcımla başlatılan tepkimede hidrojenin tamamı harcanmış ve 18 g su oluşmuştur. Kap soğuyunca iç yüzeyinde su damlacıkları görülmüştür.
I. Tepkimeye giren oksijenin kütlesi 16 g'dır.
II. Tepkime sonunda kapta 4 g oksijen artmıştır.
III. Kabın toplam kütlesi tepkimeden önce ve sonra aynıdır.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Artan maddeyi atlama: kapta 20 − 16 = 4 g oksijen artmıştır; II ve III de doğrudur.",
    "Korunumu atlama: kapalı kapta madde giriş çıkışı olmadığı için toplam kütle sabittir; III de doğrudur.",
    "Giren oksijeni hesaplayamama: ürün 18 g, hidrojen 2 g olduğundan giren oksijen 18 − 2 = 16 g'dır; I de doğrudur.",
    null
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
Adım 1 (I): Ürünün kütlesi (18 g), giren hidrojen (2 g) ile giren oksijenin toplamıdır. Giren oksijen 18 − 2 = 16 g'dır. I doğrudur.
Adım 2 (II): Kapta 20 g oksijen vardı, 16 g'ı girdi; 20 − 16 = 4 g oksijen artmıştır. II doğrudur.
Adım 3 (III): Kap sıkıca kapalıdır; madde giriş çıkışı olmaz. Toplam kütle (2 + 20 = 22 g) tepkimeden sonra da 22 g'dır (18 g su + 4 g oksijen). III doğrudur.
Sağlama: 18 + 4 = 22 = 2 + 20.
Cevap D.`
},
{
  id: "fen-kt-323",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki modelde sodyum atomlarının klor gazıyla tepkimesi ve tepkime bittiğinde ortamda kalan tanecikler gösterilmiştir. Sodyum klorür taneciği, bir sodyum ve bir klor atomunun birleşmesiyle oluşmuştur.
**Bu modele göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 165" role="img" aria-label="Girenler beş sodyum atomu ve iki klor molekülüdür; sonunda dört sodyum klorür taneciği ve bir sodyum atomu bulunur"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="2.5"/><polygon points="300,78 312,85 300,92" fill="currentColor"/><circle cx="30" cy="52" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="30" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="75" cy="52" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="75" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="30" cy="92" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="30" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="75" cy="92" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="75" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="52" cy="132" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="52" y="137" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="150" cy="62" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="150" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="182" cy="62" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="182" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="150" cy="112" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="150" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="182" cy="112" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="182" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="335" cy="52" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="335" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="367" cy="52" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="367" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="415" cy="52" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="415" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="447" cy="52" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="447" y="57" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="335" cy="97" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="335" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="367" cy="97" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="367" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="415" cy="97" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="415" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><circle cx="447" cy="97" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="447" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Cl</text><circle cx="515" cy="135" r="16" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="515" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Na</text><text x="280" y="157" text-anchor="middle" font-size="14" fill="currentColor">Na: sodyum atomu    Cl: klor atomu</text></svg>`,
  secenekler: [
    "Girenlerdeki 9 atom, üründe 8 atoma düşmüştür; çünkü atomlardan biri tepkimede yok olmuştur.",
    "Klor atomlarının sayısı değişmiştir; çünkü klor molekülleri tepkime sırasında parçalanmıştır.",
    "Tepkimede tükenen madde klordur; çünkü sonda klor atomu kalmamış, bir sodyum atomu artmıştır.",
    "Sodyum klorür taneciği sayısı 5'tir; çünkü girenler arasında 5 sodyum atomu bulunmaktadır."
  ],
  dogru: 2,
  hatalar: [
    "Artan atomu saymayı unutma: artan sodyum atomu da sayılınca önce 5 + 4 = 9, sonra 8 + 1 = 9 atom vardır; atom yok olmaz.",
    "Atomların korunmasını atlama: klor molekülleri ayrılsa da 4 klor atomu, sodyumlarla birleşerek 4 sodyum klorür taneciğinde yer alır.",
    null,
    "Tüm sodyum atomlarının tepkimeye girdiğini sanma: 4 klor atomu en çok 4 sodyum atomuyla birleşir; 1 sodyum artar."
  ],
  aciklama: `Tepkimede atomlar yok olmaz; bir tür atom bitince tepkime durur ve diğer türden atomlar artabilir.
Adım 1: Girenlerde 5 sodyum atomu ve 2 klor molekülü (4 klor atomu) vardır; toplam 9 atom.
Adım 2: Her sodyum klorür taneciği 1 sodyum ve 1 klor atomu ister. 4 klor atomu en çok 4 sodyum klorür taneciği oluşturur.
Adım 3: Sonda 4 sodyum klorür (8 atom) ve 1 sodyum atomu (1 atom) vardır; 8 + 1 = 9 atom. Artan atom sodyumdur.
Sağlama: Klor atomları bittiği için tepkime durmuştur; atom sayısı önce 9, sonra 9'dur.
Cevap C.`
},
{
  id: "fen-kt-324",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Sıkıca kapatılmış bir kapta 20 g A katısı ısıtılmış ve A katısının tamamı harcanmıştır. Tepkime sonunda kapta 12 g B katısı kalmış ve kaptan çıkamayan bir C gazı oluşmuştur. Bu sırada kaba madde girişi ya da çıkışı olmamıştır.
I. C gazının kütlesi 8 g'dır.
II. Kütle korunmadığı için A'nın 8 g'ı yok olmuştur.
III. Tepkime sonunda kaptaki bütün maddelerin toplam kütlesi 12 g'dır.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız I",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Kütlenin yok olduğunu sanma: A'nın 8 g'ı C gazına dönüşmüştür ve kapta kalmıştır; kütle korunmuştur.",
    null,
    "Katının kütlesini toplam kütle sanma: kapta B'nin yanında C gazı da vardır; toplam 20 g'dır, III yanlıştır.",
    "Yok olma ve toplam kütle yanılgıları: gaz hâlindeki madde de kütle taşır; iki yargı da yanlıştır, I'i de atladın."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Kap kapalıysa gaz kapta kalır ve toplam kütleye dâhildir.
Adım 1 (I): Girenin kütlesi 20 g, katı ürünün kütlesi 12 g; kalan 20 − 12 = 8 g, C gazının kütlesidir. I doğrudur.
Adım 2 (II): 8 g madde yok olmamış, gaz hâline geçmiştir. II yanlıştır.
Adım 3 (III): Kapta B (12 g) ve C (8 g) birlikte bulunur; toplam 20 g'dır. III yanlıştır.
Sağlama: 12 + 8 = 20 g.
Cevap B.`
},
{
  id: "fen-kt-325",
  kazanim: "F.8.4.3.1",
  kademe: 3,
  zorluk: 4,
  soru: `Kapalı bir kapta X ve Y maddeleri tepkimeye sokulmuş, tepkimede Z maddesi oluşmuştur. Tepkimeden önceki ve sonraki kütleler tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Madde</th><th>Tepkimeden önce (g)</th><th>Tepkimeden sonra (g)</th></tr><tr><td>X</td><td>12</td><td>0</td></tr><tr><td>Y</td><td>14</td><td>6</td></tr><tr><td>Z</td><td>0</td><td>20</td></tr></table>`,
  secenekler: [
    "Y'nin tamamı tepkimeye girmiştir; çünkü kapta kütle korunmuş ve Y'nin kütlesi azalmıştır.",
    "Z, girenlerden biridir; çünkü Z'nin kütlesi tepkime sonunda sıfırdan büyük olmuştur.",
    "X'in tamamı ile Y'nin 8 g'ı girmiş, 6 g'ı artmıştır; çünkü Z'nin kütlesi 20 g'dır.",
    "X'in 12 g'ı ile Y'nin 14 g'ı birleşmiştir; çünkü X ve Y'nin ikisi de kaptan eksilmiştir."
  ],
  dogru: 2,
  hatalar: [
    "Korunumu girenlerin tükenmesi sanma: toplam kütle korunsa da Y'nin 6 g'ı tepkimeye girmeden kalmıştır.",
    "Ürünü giren sanma: kütlesi artan madde üründür; kütlesi azalanlar girenlerdir.",
    null,
    "Y'nin tamamını tepkimeye giren sayma: 12 + 14 = 26 g, ürün ise 20 g'dır; 6 g Y artmıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Kütlesi azalan maddeler girenler, kütlesi artan madde üründür.
Adım 1: X 12 g'dan 0 g'a inmiş, tamamı tepkimeye girmiştir. Y 14 g'dan 6 g'a inmiştir; tepkimeye giren Y 14 − 6 = 8 g'dır.
Adım 2: Z, 0 g'dan 20 g'a çıkmıştır; ürün Z'dir. Kontrol: 12 + 8 = 20 g.
Adım 3: Y'nin 6 g'ı tepkimeye girmeden kalmıştır (artan madde Y'dir).
Sağlama: Önce 12 + 14 = 26 g, sonra 0 + 6 + 20 = 26 g.
Cevap C.`
},
{
  id: "fen-kt-001",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Bir kimyasal tepkimede tepkimeye giren maddeler ile tepkime sonunda oluşan yeni maddeler sırasıyla nasıl adlandırılır?**`,
  gorsel: null,
  secenekler: [
    "Ürünler – girenler",
    "Girenler – ürünler",
    "Çözücüler – çözünenler",
    "Karışımlar – bileşikler"
  ],
  dogru: 1,
  hatalar: [
    "Adları ters kullanma: tepkimeye giren maddeler girenler, oluşan yeni maddeler ürünlerdir.",
    null,
    "Çözelti kavramlarıyla karıştırma: çözücü ve çözünen, çözeltilerde kullanılan adlardır.",
    "Madde sınıflarıyla karıştırma: karışım ve bileşik madde türleridir, tepkimedeki rolü göstermez."
  ],
  aciklama: `Kimyasal tepkimede tepkimeye giren maddelere girenler, tepkime sonunda oluşan yeni maddelere ürünler denir.
Adım 1: Tepkime başlamadan önce var olan maddeler girenlerdir.
Adım 2: Tepkimede yeni oluşan maddeler ürünlerdir.
Sık yapılan hata: Giren ile ürünü ters yazmak. Sıra, tepkimenin akış yönüyle aynıdır: önce girenler, sonra ürünler.
Cevap B.`
},
{
  id: "fen-kt-002",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Kütlenin korunumu ilkesine göre kapalı bir kapta gerçekleşen bir kimyasal tepkimeyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Tepkimeden sonraki toplam kütle, tepkimeden öncekinden büyüktür.",
    "Tepkimeden sonraki toplam kütle, tepkimeden öncekinden küçüktür.",
    "Tepkimeden sonraki toplam kütle, ürünlerden yalnızca birinin kütlesine eşittir.",
    "Tepkimeden önceki toplam kütle, tepkimeden sonraki toplam kütleye eşittir."
  ],
  dogru: 3,
  hatalar: [
    "Ürünlerde kütlenin arttığını sanma: kapalı kapta madde eklenmez, toplam kütle artmaz.",
    "Kütlenin azaldığını sanma: kapalı kapta madde kaybolmaz, toplam kütle azalmaz.",
    "Ürünlerin yalnızca birini hesaba katma: toplam kütle, bütün ürünlerin kütlesinin toplamıdır.",
    null
  ],
  aciklama: `Kütlenin korunumu: Kapalı kapta girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
Adım 1: Kapalı kapta madde giriş çıkışı olmaz.
Adım 2: Atomlar yok olmaz ve yoktan var olmaz; bu yüzden toplam kütle sabit kalır.
Sık yapılan hata: Ürünlerden yalnızca birine bakmak. Bütün ürünlerin kütlesi toplanmalıdır.
Cevap D.`
},
{
  id: "fen-kt-003",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Hidrojen ve oksijen gazları tepkimeye girerek su oluşturur. Su için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Bir bileşiktir.",
    "Bir elementtir.",
    "Bir karışımdır.",
    "Bir tek atomdur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bileşiği element sanma: su, iki elementin tepkimesiyle oluşmuştur; element değildir.",
    "Bileşiği karışım sanma: su, hidrojen ve oksijenin özelliklerini taşımaz; yeni bir saf maddedir.",
    "Madde türlerini karıştırma: su, atomların birleşmesiyle oluşmuş bir bileşiktir."
  ],
  aciklama: `Bileşik, iki ya da daha fazla elementin kimyasal tepkimeyle birleşmesiyle oluşan saf maddedir.
Adım 1: Su, hidrojen ve oksijen elementlerinin tepkimesiyle oluşmuştur.
Adım 2: İki elementin tepkimesiyle oluşan saf madde, bileşiktir.
Sık yapılan hata: Bileşiği, elementlerin karışımı sanmak. Karışımda maddeler özelliğini korur; suyun özellikleri ise hidrojenden ve oksijenden farklıdır.
Cevap A.`
},
{
  id: "fen-kt-004",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir mangalda yakılan odun kömürü kor hâline gelirken kömürün karbonu havadaki oksijenle tepkimeye girer ve renksiz bir gaz olan karbondioksit oluşur. Mangaldan sonra geriye az miktarda kül kalır.
**Bu tepkimede girenler ile ürün hangi seçenekte doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Girenler: karbondioksit ve oksijen; ürün: karbon",
    "Girenler: karbon ve karbondioksit; ürün: oksijen",
    "Girenler: karbon ve oksijen; ürün: karbondioksit",
    "Girenler: karbon; ürün: oksijen ve karbondioksit"
  ],
  dogru: 2,
  hatalar: [
    "Giren ile ürünü ters yazma: karbondioksit tepkimede oluşan üründür.",
    "Ürünü giren sanma: oksijen girendir, karbondioksit ise üründür.",
    null,
    "Girenleri eksik yazma: oksijen havadan gelen girendir, ürün değildir."
  ],
  aciklama: `Tepkimeye giren maddelere girenler, oluşan maddelere ürünler denir.
Adım 1: Karbon (kömürden) ve oksijen (havadan) tepkimeye giriyor; bunlar girenlerdir.
Adım 2: Tepkimede oluşan yeni madde karbondioksittir; ürün odur.
Sık yapılan hata: Havadaki oksijeni gözden kaçırıp yalnızca kömürü giren saymak.
Cevap C.`
},
{
  id: "fen-kt-005",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `Kapalı bir kapta 12 g magnezyum ile 8 g oksijen gazı eksiksiz tepkimeye girerek magnezyum oksit oluşturmuştur. Tepkimede başka hiçbir madde oluşmamıştır.
**Buna göre oluşan magnezyum oksit kaç gramdır?**`,
  gorsel: null,
  secenekler: [
    "4",
    "8",
    "20",
    "40"
  ],
  dogru: 2,
  hatalar: [
    "Toplamak yerine çıkarma: ürünün kütlesi girenlerin toplamıdır (12 − 8 = 4 değil).",
    "Yalnızca oksijenin kütlesini ürün sanma: ürün, girenlerin ikisinin de kütlesini taşır.",
    null,
    "Toplamı iki kez sayma: ürünün kütlesi girenlerin toplamına eşittir, iki katına değil."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
Adım 1: Girenler 12 g magnezyum ve 8 g oksijendir.
Adım 2: Hepsi eksiksiz tepkimeye girdiğine göre ürün = 12 + 8 = 20 g.
Sağlama: Giren toplamı 20 g, ürün 20 g.
Cevap C.`
},
{
  id: "fen-kt-006",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `**Bir kimyasal tepkimede aşağıdakilerden hangisi tepkimeden önce ve sonra aynı kalır?**`,
  gorsel: null,
  secenekler: [
    "Atomların cinsi ve sayısı",
    "Moleküllerin türü ve şekli",
    "Maddelerin özellikleri ve rengi",
    "Moleküllerin toplam sayısı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Atomla molekülü karıştırma: tepkimede moleküller değişir, yeni tür moleküller oluşur.",
    "Ürünün girenle aynı özellikte olduğunu sanma: ürünler yeni özelliklere sahiptir.",
    "Molekül sayısının korunduğunu sanma: atomlar yeniden gruplandığı için molekül sayısı değişebilir."
  ],
  aciklama: `Kimyasal tepkimede bağlar kopar, atomlar yeniden birleşir; atomlar ise yok olmaz ve cinsi değişmez.
Adım 1: Moleküller değiştiği için molekül türü ve sayısı değişebilir.
Adım 2: Maddelerin özellikleri yeni ürünlerle değişir.
Adım 3: Atomların cinsi ve toplam sayısı korunur.
Sık yapılan hata: Atom sayısının korunmasını molekül sayısının da korunması sanmak.
Cevap A.`
},
{
  id: "fen-kt-007",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `Demir çivi gri renkli ve parlaktır; mıknatıs tarafından çekilir. Nemli havada uzun süre kalan çivinin yüzeyinde oluşan pas ise kırmızımsı kahverengi, mat ve kırılgandır; mıknatıs pası çekmez.
**Bu bilgilere göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Pas, demirin yalnızca rengi değişmiş hâlidir.",
    "Pas, demir ile oksijenin karışımıdır ve iki maddenin özelliklerini taşır.",
    "Pas, demirin bir türüdür ve mıknatısla çekilmeye devam eder.",
    "Pas, demirden farklı özelliklere sahip yeni bir bileşiktir."
  ],
  dogru: 3,
  hatalar: [
    "Özellik değişimini görünüm değişimi sanma: rengin yanında mıknatısla çekilme gibi özellikler de değişmiştir.",
    "Bileşiği karışım sanma: pasın özellikleri demirinkinden de oksijeninkinden de farklıdır.",
    "Verilen veriyi yok sayma: metinde mıknatısın pası çekmediği belirtilmiştir.",
    null
  ],
  aciklama: `Demir ile oksijen tepkimeye girince demirden farklı özelliklere sahip yeni bir madde, yani pas oluşur.
Adım 1: Demir gri, parlak ve mıknatısla çekilir; pas kırmızımsı kahverengi, mat ve mıknatısla çekilmez.
Adım 2: Özelliklerin bu kadar değişmesi, yeni bir madde oluştuğunu gösterir.
Adım 3: Pas, demir ve oksijen elementlerinden oluşan bir bileşiktir.
Sık yapılan hata: Pasın demirin sadece rengi değişmiş hâli olduğunu düşünmek.
Cevap D.`
},
{
  id: "fen-kt-008",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir erlenin ağzına balon geçirilmiş ve içinde gaz çıkışıyla ilerleyen bir tepkime başlatılmıştır; çıkan gaz balonu şişirmiştir. Erlen, balon ve içindekiler terazide tartılmaktadır.
**Tepkime başlamadan önce ve bittikten sonra terazide ne görülür?**`,
  gorsel: null,
  secenekler: [
    "Artar; çünkü balonda toplanan gaz sisteme kütle ekler.",
    "Değişmez; çünkü gaz sistemden ayrılmaz, kütle korunur.",
    "Azalır; çünkü gaz balondan çıkıp ortama yayılır.",
    "Önce artar sonra azalır; çünkü gaz çıkışı zamanla yavaşlar."
  ],
  dogru: 1,
  hatalar: [
    "Balonu kütle ekleyen bir nesne sanma: gaz zaten tepkimeye girenlerden oluşmuştur, dışarıdan eklenmemiştir.",
    null,
    "Gazın kaptan ayrıldığını sanma: balon gazı tutar, terazi azalmaz.",
    "Hızı kütle değişimi sanma: tepkime hızı kütleyi etkilemez, kapalı sistemde kütle sabittir."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Gaz balonda kaldığı için sistemden madde ayrılmaz.
Adım 1: Çıkan gaz balonu şişirir ama balonun içinde kalır.
Adım 2: Sistem kapalıdır; hiçbir madde giriş çıkış yapmaz.
Adım 3: Terazi tepkime öncesi ve sonrası aynı değeri gösterir.
Sık yapılan hata: Şişen balonu "kütle arttı" diye yorumlamak.
Cevap B.`
},
{
  id: "fen-kt-009",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, kapalı kapta bakır tozu ile kükürt tozunu iki farklı miktarda karıştırıp ısıtmıştır. Madde miktarları ve oluşan bakır sülfür kütleleri tabloda verilmiştir. Her iki deneyde de kaptan madde çıkışı olmamıştır; artan madde varsa bu, girenlerden yalnızca biridir.
**Buna göre 2. deneyde tepkimeye girmeden kalan madde ve miktarı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Bakır (g)</th><th>Kükürt (g)</th><th>Oluşan bakır sülfür (g)</th></tr><tr><td>1</td><td>8</td><td>4</td><td>12</td></tr><tr><td>2</td><td>8</td><td>14</td><td>12</td></tr></table>`,
  secenekler: [
    "10 g bakır",
    "2 g kükürt",
    "10 g kükürt",
    "14 g kükürt"
  ],
  dogru: 2,
  hatalar: [
    "Artan maddeyi yanlış belirleme: miktarı doğru buldun ama kapta yalnızca 8 g bakır vardı; 10 g bakır artamaz, artan madde kükürttür.",
    "Ürünü yalnızca kükürtle karşılaştırma: 14 − 12 = 2 yanlıştır; bakırın 8 g'ı da girenler arasındadır, artan 8 + 14 − 12 = 10 g'dır.",
    null,
    "Verilen miktarı artan sanma: kükürtün 4 g'ı tepkimeye girmiştir; artan 14 − 4 = 10 g'dır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Artan madde, girenlerin toplamı ile ürünün kütlesi arasındaki farktır.
Adım 1: 2. deneyde girenler 8 + 14 = 22 g, ürün 12 g; artan madde 22 − 12 = 10 g'dır.
Adım 2: Artan madde girenlerden yalnızca biri olduğuna göre bakır artmış olamaz; kapta yalnızca 8 g bakır vardı ve 10 g bakır artamaz. Artan madde kükürttür.
Adım 3: Kükürtün 14 − 10 = 4 g'ı tepkimeye girmiştir; bu, 1. deneyde 8 g bakırın 4 g kükürtle eksiksiz birleşmesiyle uyumludur.
Sağlama: 8 g bakır + 4 g kükürt = 12 g ürün; geriye 14 − 4 = 10 g kükürt kalır.
Cevap C.`
},
{
  id: "fen-kt-010",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıdaki modelde azot ve oksijen gazlarının şimşek sırasında tepkimeye girerek azot monoksit oluşturması gösterilmiştir.
**Bu modele göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 135" role="img" aria-label="Girenler bir azot molekülü ve bir oksijen molekülüdür; ürünler iki azot monoksit molekülüdür"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="70" x2="300" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="300,63 312,70 300,77" fill="currentColor"/><circle cx="55" cy="78" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="55" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="87" cy="78" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="87" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="150" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="150" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="182" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="182" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="375" cy="78" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="375" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="407" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="407" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="465" cy="78" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="465" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">N</text><circle cx="497" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="497" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><text x="280" y="127" text-anchor="middle" font-size="14" fill="currentColor">N: azot atomu    O: oksijen atomu</text></svg>`,
  secenekler: [
    "Atomların toplam sayısı 4'ten 2'ye düşmüştür; çünkü atomlar birbirine bağlanmıştır.",
    "Moleküllerin toplam sayısı 2'den 4'e çıkmıştır; çünkü atomlar birbirinden ayrılmıştır.",
    "Azot atomları oksijen atomlarına dönüşmüştür; çünkü yeni bir madde oluşmuştur.",
    "Atomların cinsi ve sayısı korunmuştur; çünkü yalnızca bağlanma düzeni değişmiştir."
  ],
  dogru: 3,
  hatalar: [
    "Molekül sayısını atom sayısı sanma: girenlerde de ürünlerde de 4 atom vardır; yalnızca düzen değişmiştir.",
    "Molekülleri yanlış sayma: girenlerde 2 molekül, ürünlerde de 2 molekül vardır.",
    "Atomların cinsinin değiştiğini sanma: tepkimede atomlar birbirine dönüşmez, yeni biçimde birleşir.",
    null
  ],
  aciklama: `Tepkimede atomlar yeniden düzenlenir; atomların cinsi ve sayısı değişmez.
Adım 1: Girenlerde 2 azot + 2 oksijen = 4 atom, 2 molekül vardır.
Adım 2: Ürünlerde 2 molekülün her biri 1 azot ve 1 oksijen atomu içerir; toplam yine 4 atom.
Adım 3: Atomlar aynı, yalnızca bağlandıkları atomlar değişmiştir.
Sık yapılan hata: Atomların birbirine dönüştüğünü ya da kaybolduğunu düşünmek.
Cevap D.`
},
{
  id: "fen-kt-011",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Fen laboratuvarında bir öğrenci, saf hidrojen ve saf oksijen gazlarını kıvılcımla tepkimeye sokmuş ve tepkime sonunda kabın iç yüzeyinde su damlacıkları görmüştür. Öğretmeni, tepkimeyle ilgili üç yargıyı tahtaya yazmıştır.
I. Hidrojen ve oksijen, bu tepkimede girenlerdir.
II. Su, hidrojen ile oksijenin karışımıdır.
III. Suyun özellikleri, hidrojenin özellikleriyle aynıdır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
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
    "Bileşiği karışım sanma: su, iki elementin tepkimesiyle oluşan yeni bir saf maddedir; I'i de atladın.",
    "Ürünün özelliğini girenle aynı sanma: su yanmaz, hidrojen ise yanıcıdır; III yanlıştır.",
    "Karışım ve özellik yanılgıları: su ne karışımdır ne de hidrojen gibidir; I'i de atladın."
  ],
  aciklama: `Bileşikler, elementlerin tepkimeyle birleşmesiyle oluşur ve özellikleri kendilerini oluşturan elementlerden farklıdır.
Adım 1 (I): Tepkimeye giren maddeler hidrojen ve oksijendir; girenlerdir. I doğrudur.
Adım 2 (II): Su, bu gazların karışımı değil, tepkimede oluşan yeni bir bileşiktir. II yanlıştır.
Adım 3 (III): Suyun özellikleri hidrojenden farklıdır (su yangın söndürür, hidrojen yanar). III yanlıştır.
Sık yapılan hata: Bileşiği, elementlerin karışımı gibi düşünmek.
Cevap A.`
},
{
  id: "fen-kt-012",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, ağzı açık bir kapta gaz çıkışıyla ilerleyen bir tepkime yapmıştır. Tepkimeden önce kap ve içindekiler terazide 80 g gelmiş, tepkime bitince terazi 77 g göstermiştir. Öğrenci aynı tepkimeyi aynı miktarlarla, bu kez kabın ağzını sıkıca kapatarak yapacaktır.
**Buna göre kapalı kapta tepkime bitince terazi kaç gram gösterir?**`,
  gorsel: null,
  secenekler: [
    "83",
    "80",
    "77",
    "3"
  ],
  dogru: 1,
  hatalar: [
    "Gazın kütlesini toplama: kapalı kapta gaz kaptan çıkmaz; kütle sabit kalır, 3 g eklenmez.",
    null,
    "Açık kaptaki sonucu aynen alma: kapalı kapta gaz kaptan ayrılamaz, azalma görülmez.",
    "Gazın kütlesini toplam kütle sanma: kapta bütün maddeler bulunur."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Açık kapta gaz kaptan ayrıldığı için 3 g azalma görülmüştür.
Adım 1: Açık kapta 80 − 77 = 3 g'lık fark, kaptan ayrılan gazın kütlesidir.
Adım 2: Kap kapalı olursa bu gaz kaptan çıkamaz; kapta kalır.
Adım 3: Girenlerin toplam kütlesi ürünlerinkine eşit kalır; terazi 80 g gösterir.
Sağlama: Kapalı kapta kütle tepkime öncesiyle aynıdır.
Cevap B.`
},
{
  id: "fen-kt-013",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Aşağıdaki modelde kükürt ile oksijen gazının tepkimesi ve tepkime bittiğinde ortamda kalan tanecikler gösterilmiştir.
**Bu modele göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 170" role="img" aria-label="Girenler üç kükürt atomu ve iki oksijen molekülüdür; sonunda iki kükürt dioksit molekülü ve bir kükürt atomu bulunur"><text x="135" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden önce</text><text x="430" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tepkimeden sonra</text><line x1="255" y1="87" x2="300" y2="87" stroke="currentColor" stroke-width="2.5"/><polygon points="300,80 312,87 300,94" fill="currentColor"/><circle cx="40" cy="55" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="40" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><circle cx="40" cy="100" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="40" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><circle cx="40" cy="145" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="40" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><circle cx="125" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="125" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="157" cy="78" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="157" y="83" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="125" cy="123" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="125" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="157" cy="123" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="157" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="400" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="400" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><circle cx="374" cy="84" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="374" y="89" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="426" cy="84" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="426" y="89" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="490" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="490" y="67" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><circle cx="464" cy="84" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="464" y="89" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="516" cy="84" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="516" y="89" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text><circle cx="445" cy="140" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="445" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S</text><text x="280" y="162" text-anchor="middle" font-size="14" fill="currentColor">S: kükürt atomu    O: oksijen atomu</text></svg>`,
  secenekler: [
    "Oksijen molekülleri tepkimede artmıştır; çünkü oksijen atomlarının hiçbiri birleşmemiştir.",
    "Kükürt atomlarının sayısı 3'ten 2'ye düşmüştür; çünkü bir atom tepkimede yok olmuştur.",
    "Atomların toplam sayısı 7'den 6'ya düşmüştür; çünkü bir atom tepkimeye girmemiştir.",
    "Ortamda 1 kükürt atomu artmıştır; çünkü 2 kükürt dioksit molekülü 2 kükürt atomu içerir."
  ],
  dogru: 3,
  hatalar: [
    "Artanı yanlış belirleme: iki oksijen molekülü de tepkimeye girmiştir; artan tanecik kükürttür.",
    "Atomun yok olduğunu sanma: artan atom da sayılınca kükürt atomu sayısı 3'tür.",
    "Artan atomu saymayı unutma: sonda 6 + 1 = 7 atom vardır.",
    null
  ],
  aciklama: `Tepkimede atomlar yok olmaz; tepkimeye girmeden artan tanecikler ürünle birlikte ortamda kalır.
Adım 1: Girenlerde 3 kükürt atomu ve 2 oksijen molekülü (4 oksijen atomu) vardır; toplam 7 atom.
Adım 2: Üründe 2 kükürt dioksit molekülü vardır; her biri 1 kükürt ve 2 oksijen atomudur. 4 oksijen atomunun tamamı 2 kükürt atomuyla birleşmiştir.
Adım 3: Geriye 1 kükürt atomu kalmıştır. Sonda 6 + 1 = 7 atom vardır.
Sağlama: 7 atom önce, 7 atom sonra.
Cevap D.`
},
{
  id: "fen-kt-014",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Kapalı bir kapta K ve L maddeleri tepkimeye girerek M maddesini oluşturmuştur. Maddelerin kütleleri tepkimeden önce ve sonra tabloda verilmiş, M'nin son kütlesi ise sorulmuştur. Kaptan madde çıkışı olmamıştır.
**Buna göre M maddesinin son kütlesi ve tepkimede artan madde aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Madde</th><th>Tepkimeden önce (g)</th><th>Tepkimeden sonra (g)</th></tr><tr><td>K</td><td>16</td><td>0</td></tr><tr><td>L</td><td>24</td><td>8</td></tr><tr><td>M</td><td>0</td><td>?</td></tr></table>`,
  secenekler: [
    "M: 32 g; artan madde: L (8 g)",
    "M: 32 g; artan madde: K (8 g)",
    "M: 40 g; artan madde yok",
    "M: 24 g; artan madde: L (24 g)"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Artan maddeyi karıştırma: K'nin son kütlesi 0'dır, tükenmiştir; artan madde L'dir.",
    "Girenlerin toplamını ürün sanma: L'nin 8 g'ı tepkimeye girmeden kalmıştır, ürüne katılmamıştır.",
    "L'nin ilk kütlesini ürün ve artan sanma: L'nin yalnızca 24 − 8 = 16 g'ı tepkimeye girmiştir."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir. Artan madde, son kütlesi sıfırdan büyük olan giren maddedir.
Adım 1: K 16 g'dan 0 g'a inmiş, tamamı harcanmıştır. L 24 g'dan 8 g'a inmiştir; tepkimeye giren L 24 − 8 = 16 g'dır. Artan madde L'dir (8 g).
Adım 2: M = tepkimeye giren K + tepkimeye giren L = 16 + 16 = 32 g.
Sağlama: Önce 16 + 24 = 40 g, sonra 0 + 8 + 32 = 40 g.
Cevap A.`
},
{
  id: "fen-kt-015",
  kazanim: "F.8.4.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Üç öğrenci kimyasal tepkimelerle ilgili aşağıdaki yorumları yapmıştır.
I. Bir tepkimede girenlerin sayısı ile ürünlerin sayısı kesinlikle eşittir.
II. Kapalı kapta gerçekleşen bir tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
III. Tepkime sonunda artan bir madde bulunması, kütlenin korunmadığını gösterir.
**Buna göre bu yorumlardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Madde sayısını eşit sanma: iki giren tek bir ürün verebilir; sayı eşit olmak zorunda değildir. II'yi de atladın.",
    "İki yargıda da hata: giren ve ürün sayısı eşit olmak zorunda değildir; artan madde korunumu bozmaz.",
    null,
    "Artan maddeyi korunumun bozulması sanma: artan madde zaten girenlerin toplam kütlesinde sayılır; III yanlıştır."
  ],
  aciklama: `Kütlenin korunumu: Kimyasal tepkimede girenlerin toplam kütlesi, ürünlerin toplam kütlesine eşittir.
Adım 1 (I): Girenlerin ve ürünlerin sayısı eşit olmak zorunda değildir; iki giren tek ürün verebilir. I yanlıştır.
Adım 2 (II): Kapalı kapta madde giriş çıkışı olmadığı için girenlerin toplam kütlesi ürünlerinkine eşittir. II doğrudur.
Adım 3 (III): Artan madde, girenlerin toplam kütlesine zaten dâhildir; toplam kütle yine korunur. III yanlıştır.
Sık yapılan hata: Artan maddeyi "kütle kayboldu" diye yorumlamak.
Cevap C.`
}
);
