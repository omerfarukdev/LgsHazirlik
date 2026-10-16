// Fen Bilimleri — Kalıtım: Kademe 3 (LGS Ayarı) yedeği, fen-kl-326 … fen-kl-375
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kalitim"] = window.LGS_BANK["kalitim"] || []).push(
{
  id: "fen-kl-326",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede mor çiçek rengi baskın, beyaz çiçek rengi çekiniktir. Mor çiçek geni M, beyaz çiçek geni m harfiyle gösterilmektedir. Bir öğrenci, saf döl mor çiçekli bir bezelye bitkisini beyaz çiçekli bir bitkiyle çaprazlayarak birinci kuşak bitkileri elde etmiştir. Öğrenci, birinci kuşak bitkilerin çiçek rengini (fenotip) ve gen çiftini (genotip) bir karta yazacaktır.
**Aşağıdaki kartlardan hangisi birinci kuşak bitkiler için doğru hazırlanmıştır?**`,
  gorsel: null,
  secenekler: ["Mor çiçekli, saf döl (MM)", "Beyaz çiçekli, melez döl (Mm)", "Mor çiçekli, melez döl (Mm)", "Beyaz çiçekli, saf döl (mm)"],
  dogru: 2,
  hatalar: ["Birinci kuşağı saf döl sanma: yavru anneden ve babadan farklı birer gen aldığı için melezdir (Mm); MM saf döl mor ebeveynin genotipidir.",
    "Melez bireyin fenotipini çekinik sanma: Mm genotipinde baskın M geni etkisini gösterir, çiçek mor olur.",
    null,
    "Birinci kuşağı beyaz ebeveyne benzetme: mm beyaz çiçekli ebeveynin genotipidir; yavru ondan m, diğer ebeveynden M alır."],
  aciklama: `Fenotip, gözlenen özelliktir; genotip, bir karakter için taşınan gen çiftidir. Saf döl bireyin iki geni aynı, melez döl bireyin iki geni farklıdır.
Adım 1: Saf döl mor çiçekli bitki MM, beyaz çiçekli bitki mm'dir. MM yalnızca M, mm yalnızca m verir.
Adım 2: Birinci kuşaktaki her bitki bir M ve bir m alır; genotip Mm olur. İki gen farklı olduğu için bitki melez döldür.
Adım 3: Mm genotipinde baskın M geni etkisini gösterir; bitki mor çiçek açar. Doğru kart "mor çiçekli, melez döl (Mm)" olan karttır.
Sağlama: Yavruda hem M hem m vardır; M baskın olduğu için bitki mor çiçeklidir.
Sık yapılan hata: Melez bireyin fenotipini çekinik gene göre belirlemek.
Cevap C.`
},
{
  id: "fen-kl-327",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir öğrenci, tohum şekli bakımından genotipi Yy olan bir bezelye bitkisini inceleyerek defterine bazı yargılar yazmıştır.
Buna göre;
I. Bitkinin tohumları yuvarlaktır.
II. Bitkinin ürettiği bütün üreme hücreleri hem Y hem y geni taşır.
III. Bitkinin kök hücresinde de Y ve y genlerinin ikisi birlikte bulunur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: ["Geni yalnız özelliğin görüldüğü organda sanma: kök hücresi de Y ve y genlerini taşır.",
    "Melez bireyin fenotipini çekinik sanma: Yy bitkisi baskın Y geni sayesinde yuvarlak tohumludur.",
    "Üreme hücresine iki gen yazma: her üreme hücresi gen çiftinden yalnızca birini taşır.",
    null],
  aciklama: `Genotip, bir karakter için taşınan gen çiftidir; fenotip ise gözlenen özelliktir.
Adım 1 (I): Yy genotipinde baskın Y geni vardır; tohumlar yuvarlak görünür. I doğrudur.
Adım 2 (II): Üreme hücreleri oluşurken gen çifti ayrılır; her üreme hücresine Y ya da y geçer, ikisi birden geçmez. II yanlıştır.
Adım 3 (III): Bütün vücut hücreleri tek hücrenin bölünmesiyle oluştuğu için kök hücresi de Yy genotipini taşır. III doğrudur.
Sağlama: Üreme hücreleri 1 gen, vücut hücreleri 2 gen taşır.
Sık yapılan hata: "Gen yalnızca özelliğin görüldüğü yerde bulunur." Oysa genler her vücut hücresindedir.
Cevap D.`
},
{
  id: "fen-kl-328",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `İnsanda bir kişinin cinsiyeti eşey kromozomlarıyla belirlenir. Bir biyoloji laboratuvarında, aşağıda adı verilen hücreler mikroskopta incelenecek ve her hücrenin kromozom sayısı ile eşey kromozomları belirlenecektir.
**Aşağıdaki hücrelerden hangisinde 46 kromozom bulunduğu hâlde Y kromozomu bulunması __olanaksızdır__?**`,
  gorsel: null,
  secenekler: ["Bir kız bebeğin döllenmiş yumurta hücresi", "Bir erkeğin üreme organındaki sperm hücresi", "Bir kadının yumurtalığındaki yumurta hücresi", "Bir erkeğin kolundaki deri hücresi"],
  dogru: 0,
  hatalar: [null,
    "Sperm hücresini 46 kromozomlu sanma: spermde 23 kromozom bulunur; ayrıca yaklaşık yarısı Y taşır.",
    "Yumurta hücresini 46 kromozomlu sanma: yumurtada Y yoktur ama kromozom sayısı 23'tür, 46 değil.",
    "Vücut hücrelerinde Y olmadığını sanma: erkeğin her vücut hücresi 46 kromozom ve XY taşır."],
  aciklama: `Kadında eşey kromozomları XX, erkekte XY'dir. Vücut hücreleri 46 kromozom taşır; üreme hücreleri (yumurta ve sperm) ise 23 kromozom taşır. Döllenmiş yumurta (zigot) yeniden 46 kromozomludur.
Adım 1: Önce 46 kromozomlu hücreleri bul: kız bebeğin döllenmiş yumurtası ve erkeğin deri hücresi. Sperm ve yumurta hücreleri 23 kromozomludur, elenir.
Adım 2: Erkeğin deri hücresi XY taşır; Y vardır, elenir.
Adım 3: Kız bebeğin döllenmiş yumurtası XX'tir. Anneden X, babadan da X almıştır; Y taşıması olanaksızdır.
Sağlama: Y kromozomu yalnızca babadan gelir; babadan X alan zigot kız olur ve Y'si olmaz.
Sık yapılan hata: Üreme hücrelerinin de 46 kromozom taşıdığını sanmak.
Cevap A.`
},
{
  id: "fen-kl-329",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftin doğan bebeği erkektir. Bebeğin vücut hücrelerinde 46 kromozom bulunmaktadır. Bebek, kromozomlarının yarısını annesinden, yarısını babasından almıştır; bu kromozomlar anne ve babanın üreme hücreleri aracılığıyla bebeğe geçmiştir.
**Buna göre bebeğin anne ve babasından aldığı kromozomlar aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Anneden: 22 + X, babadan: 22 + X", "Anneden: 22 + Y, babadan: 22 + X", "Anneden: 44 + X, babadan: 44 + Y", "Anneden: 22 + X, babadan: 22 + Y"],
  dogru: 3,
  hatalar: ["Erkeğin Y'sini unutma: iki X alan bebek kız olur.",
    "Y'yi anneden gelen sanma: kadında Y kromozomu yoktur.",
    "Her ebeveynden bütün vücut kromozomlarının geldiğini sanma: bebek her ebeveynden 22 vücut kromozomu alır, 44'ünü değil.",
    null],
  aciklama: `İnsan vücut hücresinde 46 kromozom vardır: 44'ü vücut kromozomu, 2'si eşey kromozomudur. Üreme hücrelerinde bu sayı yarıya iner.
Adım 1: Bebeğin 46 kromozomunun 23'ü anneden, 23'ü babadan gelir. Her üreme hücresi 22 vücut kromozomu ve 1 eşey kromozomu taşır.
Adım 2: Anne XX olduğu için yumurtası daima X verir.
Adım 3: Bebek erkek (XY) olduğuna göre Y kromozomu babadan gelmiştir. Baba 22 + Y taşıyan spermi vermiştir.
Adım 4: Anneden 22 + X, babadan 22 + Y gelmiştir.
Sağlama: 22 + X + 22 + Y = 44 vücut + XY = 46 kromozom.
Sık yapılan hata: Her ebeveynden vücut kromozomlarının tamamının (44) geldiğini sanmak.
Cevap D.`
},
{
  id: "fen-kl-330",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede uzun boy geni T, kısa boy geni t ile gösterilir ve uzun boy baskındır. Bir fen kulübü öğrencisi, elindeki TT, Tt ve tt genotipli bitkilerden ikisini seçerek yapılabilecek bütün çaprazlamaları (aynı genotipli iki bitkiyi çaprazlamak dâhil) şöyle listelemiştir: TT × TT, TT × Tt, TT × tt, Tt × Tt, Tt × tt, tt × tt. Öğrenci, yavrular arasında kısa boylu bitki arayacaktır.
**Buna göre listedeki çaprazlamaların kaçında yavrular arasında kısa boylu bitki görülebilir?**`,
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 2,
  hatalar: ["Yalnızca melez × melez çaprazlamasını sayma: Tt × tt ve tt × tt çaprazlamalarında da kısa boylu yavru çıkar.",
    "tt × tt çaprazlamasını atlama: iki kısa boylu ebeveyn yavrulara yalnızca t verir, yavruların hepsi kısa boylu olur.",
    null,
    "TT × tt çaprazlamasını da sayma: yavrulara T da gelir, hepsi Tt olur; kısa boylu yavru çıkmaz."],
  aciklama: `Kısa boy çekiniktir; kısa boylu yavru tt genotiplidir ve her ebeveynden bir t almıştır. Yani iki ebeveynin de t geni taşıması gerekir.
Adım 1: TT içeren çaprazlamalarda (TT × TT, TT × Tt, TT × tt) TT ebeveyni yalnızca T verir; yavrular en az bir T alır, kısa boylu olmaz.
Adım 2: Tt × Tt → 1 TT : 2 Tt : 1 tt. Kısa boylu yavru görülür.
Adım 3: Tt × tt → 1 Tt : 1 tt. Kısa boylu yavru görülür.
Adım 4: tt × tt → hepsi tt. Kısa boylu yavru görülür.
Sağlama: İki ebeveynin de t geni taşıdığı çaprazlamalar Tt × Tt, Tt × tt ve tt × tt'dir; toplam 3.
Sık yapılan hata: Yalnızca melez × melez çaprazlamasında kısa boylu yavru çıktığını sanmak.
Cevap C.`
},
{
  id: "fen-kl-331",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, bezelyede mor çiçek rengi baskın, beyaz çiçek rengi çekinik olduğu için "Baskın gen, bir toplulukta en çok bulunan gendir; çekinik genler zamanla yok olur." yargısını ileri sürmüştür. Öğretmeni, bu yargının baskınlık kavramıyla ilgili bir yanlış anlama içerdiğini söylemiştir.
**Buna göre öğrencinin yargısını düzelten açıklama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Baskın gen, çekinik geni hücreden uzaklaştırarak sayısını artırır.", "Çekinik gen, yalnızca saf döl bireylerde bulunur ve melez bireylere aktarılmaz.", "Baskınlık, sayıca çokluk değil; farklı genle birlikteyken etkisini gösterme demektir.", "Baskın gen, bir sonraki kuşakta çekinik gene dönüşerek yavrulara aktarılır."],
  dogru: 2,
  hatalar: ["Baskınlığı genin diğerini yok etmesi sanma: baskın gen çekinik geni hücreden atmaz.",
    "Çekinik genin melezde bulunmadığını sanma: Mm bireyi m geni taşır ve yavrusuna aktarabilir.",
    null,
    "Genlerin birbirine dönüştüğünü sanma: baskın gen baskın, çekinik gen çekinik olarak aktarılır."],
  aciklama: `Baskın gen, yanında farklı bir gen olsa bile etkisini gösteren gendir. Çekinik gen, etkisini yalnızca iki tanesi bir araya gelince gösterir.
Adım 1: Baskınlık, bir genin ne kadar yaygın olduğunu değil, melez bireyde fenotipi belirleme gücünü anlatır.
Adım 2: Çekinik gen melezde de bulunur (Mm) ve yavrulara aktarılabilir; bu yüzden zamanla yok olmaz.
Adım 3: Bu iki bilgiyi birlikte veren seçenek, baskınlığı "yanında farklı gen varken etkisini gösterme" olarak tanımlayan seçenektir.
Sağlama: Mm × Mm çaprazlamasında beyaz (mm) yavru yeniden ortaya çıkar; çekinik gen kaybolmamıştır.
Sık yapılan hata: Baskın geni "daha çok bulunan gen" sanmak.
Cevap C.`
},
{
  id: "fen-kl-332",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bezelye bitkisinin çiçek rengini belirleyen gen çiftiyle ilgili bir öğrenci aşağıdaki yargıları yazmıştır.
Buna göre;
I. Gen çiftinin genlerinden biri polenden, diğeri yumurta hücresinden gelen kromozom üzerindedir.
II. Gen çiftinin iki geni, aynı kromozomun üzerinde yan yana bulunur.
III. Kromozom, DNA'nın proteinlerle paketlenmiş hâlidir ve genler kromozom üzerinde yer alır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: ["Kromozomun yapısını bilmeme: III de doğrudur, kromozom DNA'nın proteinlerle paketlenmiş hâlidir.",
    null,
    "Gen çiftini tek kromozomda sanma: iki gen, iki ayrı kromozomun aynı hizasında bulunur.",
    "Gen çiftini tek kromozomda sanma: II yanlış olduğu için üçü birden doğru olamaz."],
  aciklama: `Gen çiftinin iki geni, bir kromozom çiftinin aynı hizasındaki bölgelerde bulunur. Kromozom çiftinin biri anneden (yumurta), biri babadan (polen) gelir.
Adım 1 (I): Bir gen yumurta hücresinden gelen kromozomda, diğeri polenden gelen kromozomdadır. I doğrudur.
Adım 2 (II): İki gen aynı kromozomda değil, birbirinin eşi olan iki ayrı kromozomdadır. II yanlıştır.
Adım 3 (III): Kromozom, DNA'nın proteinlerle paketlenmiş hâlidir ve genler onun üzerindedir. III doğrudur.
Sağlama: Kromozom sayısı çift olduğu için genler de çift hâlinde bulunur.
Sık yapılan hata: Gen çiftini aynı kromozom üzerinde yan yana sanmak.
Cevap B.`
},
{
  id: "fen-kl-333",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum rengi, yeşil tohum rengine baskındır. Sarı tohumlu ve melez döl olan bir bitki kendi kendine tozlaştırılmış ve yalnızca 4 tohum elde edilmiştir. Bu tohumları sayan öğrenci, "Yeşil tohum oranı dörtte bir olduğuna göre bu 4 tohumdan tam olarak 1 tanesi yeşil olmalı." demiştir.
**Buna göre öğrencinin yargısıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: ["Sarı tohumlu bir bitkinin hiçbir tohumu yeşil olamayacağı için yargı yanlıştır.", "Dörtte bir oranı, az sayıdaki tohumda tam olarak gerçekleşmek zorunda değildir.", "Yeşil tohum oranı dörtte bir değil, yarıdır; bu nedenle 2 tohum yeşil olmalıdır.", "Tohum sayısı kaç olursa olsun yeşil tohum sayısı tam olarak dörtte bir çıkar."],
  dogru: 1,
  hatalar: ["Melez bitkinin çekinik geni taşıdığını unutma: Ss bitkisinin tohumları ss olabilir.",
    null,
    "Melez × melez oranını yanlış hatırlama: Ss × Ss'de yeşil tohum oranı dörtte birdir.",
    "Oranı kesin sonuç sanma: oranlar yalnızca çok sayıda tohumda yaklaşık olarak görülür."],
  aciklama: `Olasılık, bir olayın gerçekleşme şansıdır; az sayıda denemede sonuç şansa göre sapabilir.
Adım 1: Ss × Ss çaprazlamasında her tohumun yeşil (ss) olma olasılığı dörtte birdir.
Adım 2: Dörtte bir, her tohumun şansını gösterir. 4 tohumda hiç yeşil çıkmayabilir, 2 ya da daha fazlası da yeşil çıkabilir.
Adım 3: Oran, ancak çok sayıda tohum sayıldığında yaklaşık olarak gerçekleşir. Öğrencinin "tam olarak 1" beklentisi gereksizdir.
Sağlama: Bir paranın 4 atışında tam 2 yazı gelmesini garanti sayamayız; burada da durum aynıdır.
Sık yapılan hata: Olasılığı kesinlik sanmak.
Cevap B.`
},
{
  id: "fen-kl-334",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Mor çiçekli bir bezelye bitkisi kendi kendine tozlaştırılmış ve elde edilen 6 tohum ekilmiştir. Çiçek açan 6 bitkinin hepsi mor çiçekli olmuştur. Bunu gören araştırmacı, bitkinin genotipi hakkında yorum yapmak istemektedir. Mor çiçek rengi baskın, beyaz çiçek rengi çekiniktir.
**Buna göre bu sonuç için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yavruların hiçbiri mm genotipli değildir; çünkü hepsi mor çiçeklidir.", "Bitki saf döldür; çünkü melez bitkinin altı yavrusundan en az biri beyaz olur.", "Bitki melezdir; çünkü mor çiçekli bitkilerin hepsi melez döl olarak bulunur.", "Melez bitkinin yavrularının hepsinin mor olması, beyaz çiçek geninin yok olduğunu gösterir."],
  dogru: 0,
  hatalar: [null,
    "Az sayıdaki sonucu saf döllük kanıtı sanma: melez bir bitkinin 6 yavrusunun hepsinin mor olması şansla mümkündür; en az bir beyaz olması zorunlu değildir.",
    "Baskın fenotipi hep melez sanma: mor çiçekli bitki saf döl (MM) de olabilir.",
    "Genin yok olduğunu sanma: Mm bitkisinde m geni vardır, yalnızca M'nin yanında etkisini göstermez; yavruların hepsinin mor çıkması bu geni silmez."],
  aciklama: `Mor çiçekli bitki MM (saf döl) ya da Mm (melez) olabilir. Beyaz çiçek yalnızca mm genotipinde görülür.
Adım 1: Altı yavrunun hepsi mor çiçeklidir; mor çiçekli bir bitki mm olamaz. Yani yavruların hiçbiri mm değildir. Bu ifade kesindir.
Adım 2: Bitki MM ise yavruların hepsi mor olur. Bitki Mm ise her yavrunun beyaz olma şansı dörtte birdir; 6 yavrunun hiçbirinin beyaz olması olasılığı küçüktür ama imkânsız değildir. Bu yüzden bitkinin saf döl olduğu kesin söylenemez.
Adım 3: Melez bitkide m geni vardır; yavruların hepsinin mor çıkması bu geni yok etmez.
Sağlama: Kesin sonuç için bitki beyaz çiçekli bitkiyle çaprazlanır; beyaz yavru çıkarsa bitki melezdir.
Sık yapılan hata: Az sayıda yavrudan kesin genotip çıkarmak.
Cevap A.`
},
{
  id: "fen-kl-335",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ıslah merkezindeki araştırmacı, bakla rengi bakımından melez döl olan yeşil baklalı bir bezelye bitkisine sahiptir. Yeşil bakla geni A, sarı bakla geni a ile gösterilir ve yeşil bakla baskındır. Araştırmacı, bu bitkiyi başka bir bitkiyle çaprazlayarak yavruların yaklaşık %50'sinin sarı baklalı olmasını istemektedir.
**Buna göre melez bitki aşağıdakilerden hangisiyle çaprazlanmalıdır?**`,
  gorsel: null,
  secenekler: ["Saf döl yeşil baklalı bir bitkiyle", "Sarı baklalı bir bitkiyle", "Melez döl yeşil baklalı bir bitkiyle", "Kendi kendine tozlaştırılarak"],
  dogru: 1,
  hatalar: ["Saf baskın ataya hiç sarı çıkmayacağını görmeme: Aa × AA çaprazlamasında yavruların hepsi yeşildir.",
    null,
    "Melez × melez oranını yarım sanma: Aa × Aa çaprazlamasında sarı oranı %25'tir.",
    "Kendi kendine tozlaşmayı yarım oran sanma: Aa'nın kendi kendine tozlaşmasında sarı oranı %25'tir."],
  aciklama: `Sarı bakla çekiniktir; yalnızca aa genotipinde görülür. Aranan çaprazlama, yavruların yarısının aa olmasını sağlamalıdır.
Adım 1: Aa × aa çaprazlamasında yavrular Aa ve aa olur, oranları 1 : 1'dir. Yani %50'si sarıdır.
Adım 2: Aa × AA çaprazlamasında yavruların hepsi yeşil olur (Aa ve AA).
Adım 3: Aa × Aa çaprazlamasında 1 AA : 2 Aa : 1 aa çıkar; sarı oranı %25'tir. Kendi kendine tozlaşma da aynı sonucu verir.
Adım 4: %50 sarı için yalnız sarı baklalı (aa) bitkiyle çaprazlama uygundur.
Sağlama: Sarı yavrunun iki a geni vardır; melez bitki bir a verir, ikinci a'yı verebilecek tek bitki aa'dır.
Cevap B.`
},
{
  id: "fen-kl-336",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bitki yetiştiricisi, çiçek rengi bakımından farklı genotiplere sahip bezelye bitkileriyle dört ayrı çaprazlama planlamıştır. Mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Yetiştirici, bu çaprazlamalardan birinde yavrular arasında beyaz çiçekli bitki çıkmasını istememektedir.
**Buna göre aşağıdaki çaprazlamalardan hangisinde beyaz çiçekli yavru çıkması __olanaksızdır__?**`,
  gorsel: null,
  secenekler: ["MM × Mm", "Mm × mm", "mm × mm", "Mm × Mm"],
  dogru: 0,
  hatalar: [null,
    "Melez × çekinik çaprazlamasında yavruların yarısının beyaz olacağını görmeme.",
    "Çekinik × çekinik çaprazlamasında yavruların hepsinin beyaz olacağını görmeme: iki ebeveyn de yalnızca m verir.",
    "Melez × melez çaprazlamasında mm yavrunun çıkacağını görmeme: yavruların dörtte biri beyazdır."],
  aciklama: `Beyaz çiçekli yavru mm genotipindedir; yani yavrunun hem anneden hem babadan m geni alması gerekir.
Adım 1: Mm × Mm → 1 MM : 2 Mm : 1 mm. Beyaz yavru çıkar.
Adım 2: Mm × mm → 1 Mm : 1 mm. Beyaz yavru çıkar.
Adım 3: mm × mm → hepsi mm. Beyaz yavru çıkar.
Adım 4: MM × Mm → MM ve Mm. MM ebeveyni yalnızca M verir; yavrular en az bir M alır, hiçbiri mm olamaz.
Sağlama: Ebeveynlerden biri MM ise yavrunun hiçbir zaman iki m geni olamaz.
Sık yapılan hata: Baskın fenotipli iki ebeveynin beyaz yavru veremeyeceğini sanmak.
Cevap A.`
},
{
  id: "fen-kl-337",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum geni S, yeşil tohum geni s ile gösterilir ve sarı tohum baskındır. Bir tohum üreticisi, ebeveynlerden biri yeşil tohumlu olacak biçimde bir çaprazlama planlamaktadır. Üretici, elde edeceği yavruların hepsinin hem sarı tohumlu hem de melez döl olmasını istemektedir.
**Buna göre üreticinin yapması gereken çaprazlama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["SS × ss", "SS × Ss", "Ss × Ss", "Ss × ss"],
  dogru: 0,
  hatalar: [null,
    "Ebeveynin yeşil olması koşulunu atlama: SS × Ss çaprazlamasında hiçbir ebeveyn yeşil tohumlu değildir.",
    "Melez × melez çaprazlamasında üç farklı genotip çıktığını görmeme: yavruların hepsi melez olmaz.",
    "Melez × çekinik çaprazlamasında yavruların yarısının yeşil olacağını görmeme: yavruların hepsi sarı olmaz."],
  aciklama: `İki koşul var: ebeveynlerden biri yeşil (ss), yavruların hepsi sarı melez (Ss) olmalı.
Adım 1: Yeşil ebeveyn ss olduğu için yalnızca s verir. Yavruların hepsi Ss olacaksa diğer ebeveyn yalnızca S vermelidir. Bu ebeveyn SS'dir.
Adım 2: SS × ss → hepsi Ss. Her iki koşul da sağlanır.
Adım 3: Ss × ss → Ss ve ss; yavruların yarısı yeşil çıkar. SS × Ss ve Ss × Ss çaprazlamalarında ise ebeveynlerden hiçbiri ya da yalnız biri koşulu sağlar; yavrular da karışık genotiptedir.
Sağlama: S geni yalnız SS ebeveyninden, s geni yalnız ss ebeveyninden gelir; her yavru birer tane alır.
Cevap A.`
},
{
  id: "fen-kl-338",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede yeşil bakla geni G, sarı bakla geni g ile gösterilir ve yeşil bakla baskındır. Bir ıslahçı, yavrularının yarısının saf döl yeşil baklalı, yarısının melez döl yeşil baklalı olmasını istemektedir. Elinde GG, Gg ve gg genotipli bitkiler vardır.
**Buna göre ıslahçının yapması gereken çaprazlama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["GG × GG", "Gg × Gg", "GG × Gg", "Gg × gg"],
  dogru: 2,
  hatalar: ["Saf × saf çaprazlamasında melez yavru çıkacağını sanma: GG × GG'nin yavrularının hepsi GG'dir.",
    "Melez × melez oranını yarı yarıya sanma: Gg × Gg'de 1 GG : 2 Gg : 1 gg çıkar.",
    null,
    "Sarı yavrunun baskın olmadığını görmeme: Gg × gg'de yavrunun yarısı gg yani sarıdır."],
  aciklama: `Aranan yavru oranı: yarısı GG, yarısı Gg ve hiç gg yok.
Adım 1: Yavruda gg çıkmaması için ebeveynlerden en az biri GG olmalıdır.
Adım 2: Diğer ebeveyn melezse (Gg) yavrular yarı yarıya G ya da g alır: yarısı GG, yarısı Gg olur.
Adım 3: GG × GG → hepsi GG; Gg × Gg → 1 GG : 2 Gg : 1 gg; Gg × gg → 1 Gg : 1 gg. Hiçbiri istenen sonucu vermez.
Sağlama: GG × Gg → GG, GG, Gg, Gg yani yarısı saf döl, yarısı melezdir ve yavruların hepsi yeşil baklalıdır.
Sık yapılan hata: Melezle saf baskın çaprazlamasının yavrularını hep melez sanmak.
Cevap C.`
},
{
  id: "fen-kl-339",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede çiçeklerin gövdenin yanında bulunması (K), gövdenin ucunda bulunmasına (k) baskındır. Bir araştırmacı, gövdenin yanında çiçek açan X bitkisini, gövdenin ucunda çiçek açan bir bitkiyle çaprazlamış ve 100 yavru elde etmiştir. Yavruların 49'unda çiçekler gövdenin yanında, 51'inde ucunda bulunmuştur.
**Buna göre yavrulardan çiçekleri gövdenin yanında olanların genotipi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Yalnızca KK", "Yalnızca Kk", "KK ve Kk", "Yalnızca kk"],
  dogru: 1,
  hatalar: ["Baskın fenotipi saf döl sanma: yavrular uçta çiçekli ebeveynden k aldığı için KK olamaz.",
    null,
    "Baskın fenotipte iki genotip olabileceği bilgisini her duruma uygulama: burada ebeveynlerden biri kk olduğu için seçenek daralır.",
    "Çekinik genotiple karıştırma: kk genotipi gövdenin ucunda çiçek açar."],
  aciklama: `Gövdenin ucunda çiçek açma çekinik bir özelliktir; bu ebeveyn kk genotiplidir ve yavrulara yalnızca k verir.
Adım 1: Yavruların yaklaşık yarısı uçta çiçekli (kk) çıktığına göre X bitkisi de k vermiştir; X bitkisi Kk'dır.
Adım 2: Kk × kk çaprazlamasında yavrular 1 Kk : 1 kk olur.
Adım 3: Yan çiçekli yavrular kk ebeveynden k, Kk ebeveynden K almıştır; hepsi Kk'dır.
Sağlama: 49 : 51 oranı yaklaşık 1 : 1'dir, Kk × kk sonucuyla uyumludur.
Sık yapılan hata: Yan çiçekli bütün yavruların KK olduğunu düşünmek. Çekinik bir ebeveyn varsa baskın yavrular melezdir.
Cevap B.`
},
{
  id: "fen-kl-340",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, çiçek rengi bakımından saf döl mor çiçekli bir bezelyeyle beyaz çiçekli bir bezelyeyi iki farklı biçimde çaprazlamıştır. Birinci çaprazlamada mor çiçekli bitkinin poleni ile beyaz çiçekli bitkinin yumurta hücresi, ikinci çaprazlamada ise beyaz çiçekli bitkinin poleni ile mor çiçekli bitkinin yumurta hücresi birleştirilmiştir. Mor çiçek rengi baskındır.
**Buna göre iki çaprazlamada elde edilen bitkilerin çiçek rengiyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: ["Birinci çaprazlamadaki bitkilerin hepsi mor, ikincideki bitkilerin hepsi beyaz çiçekli olur.", "İki çaprazlamada da bitkilerin dörtte biri beyaz çiçekli olur.", "Birinci çaprazlamadaki bitkilerin yarısı mor, yarısı beyaz çiçekli olur.", "İki çaprazlamadaki bitkilerin hepsi de mor çiçekli olur."],
  dogru: 3,
  hatalar: ["Yumurta hücresini veren ebeveynin etkisini fazla sanma: çiçek rengini polenin ya da yumurtanın kaynağı değil, gen çifti belirler.",
    "Melez × melez çaprazlamasının sonucunu uygulama: yavrular melez × melez değil, saf × saf çaprazlamasından oluşmuştur.",
    "Melez bir ebeveyn olduğunu sanma: iki ebeveyn de saf döldür, yavrular Mm olur.",
    null],
  aciklama: `Çiçek rengi, yavrunun taşıdığı gen çiftiyle belirlenir; genin polenden mi yumurtadan mı geldiği fenotipi değiştirmez.
Adım 1: Mor ebeveyn MM, beyaz ebeveyn mm'dir. MM yalnızca M, mm yalnızca m verir.
Adım 2: Birinci çaprazlamada polen M, yumurta m taşır; yavrular Mm olur ve mor çiçek açar.
Adım 3: İkinci çaprazlamada polen m, yumurta M taşır; yavrular yine Mm olur ve mor çiçek açar.
Sağlama: İki çaprazlamada da yavruların hepsi aynı genotiptedir (Mm); roller değişse de sonuç değişmez.
Sık yapılan hata: Anne bitkinin fenotipine göre yavruların renk alacağını sanmak.
Cevap D.`
},
{
  id: "fen-kl-341",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede uzun boy geni T, kısa boy geni t ile gösterilir ve uzun boy baskındır. Bir araştırmacı, uzun boylu P ve R bitkilerini ayrı ayrı kendi kendine tozlaştırmıştır. P bitkisinin 200 yavrusunun hepsi uzun boylu, R bitkisinin 200 yavrusunun 148'i uzun, 52'si kısa boylu olmuştur. Araştırmacı daha sonra P ve R bitkilerini birbiriyle çaprazlayacaktır.
**Buna göre P × R çaprazlamasının yavrularıyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Yavruların hepsi uzun boylu olur, yarısı melez döldür.", "Yavruların dörtte biri kısa boylu olur.", "Yavruların hepsi uzun boylu ve saf döl olur.", "Yavruların yarısı kısa boylu olur."],
  dogru: 0,
  hatalar: [null,
    "P'yi de melez sanma: Tt × Tt çaprazlamasında yavruların dörtte biri kısa olurdu; oysa P'nin yavrularında kısa bitki yoktur.",
    "R'nin melez olduğunu unutma: R hem T hem t verir; yavrulardan yarısı Tt olur.",
    "Melez × çekinik oranını uygulama: bu oran yalnızca ebeveynlerden biri kısa boylu (tt) olsaydı geçerli olurdu."],
  aciklama: `Kendi kendine tozlaşmada hiç kısa yavru vermeyen uzun bitki saf döldür; kısa yavru veren uzun bitki melezdir.
Adım 1: P bitkisinin 200 yavrusunun hepsi uzun olduğundan P, TT'dir.
Adım 2: R bitkisinin yavrularında yaklaşık 3 uzun : 1 kısa görüldüğünden R, Tt'dir.
Adım 3: TT × Tt çaprazlamasında P yalnızca T verir; R, T ya da t verir. Yavrular 1 TT : 1 Tt olur.
Adım 4: Yavruların hepsi en az bir T aldığı için uzundur. Yarısı TT (saf), yarısı Tt (melez) döldür.
Sağlama: 148 : 52 yaklaşık 3 : 1'dir ve melez bitkinin kendi kendine tozlaşma sonucudur.
Sık yapılan hata: Bir uzun bitkinin kısa yavru vermesini görüp çaprazlamada kısa yavru bekleyen yargıyı seçmek.
Cevap A.`
},
{
  id: "fen-kl-342",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim fuarında görevli, boy bakımından melez döl olan iki uzun boylu bezelye bitkisini çaprazlayarak 1200 tohum elde etmiştir. Uzun boy geni T, kısa boy geni t ile gösterilir ve uzun boy baskındır. Tohumların hepsi ekilmiş ve gelişmiştir.
**Buna göre bu bitkiler arasında uzun boylu ve saf döl olanların sayısı yaklaşık kaçtır?**`,
  gorsel: null,
  secenekler: ["300", "600", "900", "1200"],
  dogru: 0,
  hatalar: [null,
    "Melez bitkileri de saf sayma: 600, uzun boylu melez (Tt) bitkilerin sayısıdır.",
    "Uzun fenotipin tamamını saf sanma: 900, uzun boylu bitkilerin toplamıdır; içinde melezler de vardır.",
    "Toplam tohum sayısını cevap sanma: 1200 tohumun hepsi uzun ve saf döl olamaz."],
  aciklama: `Tt × Tt çaprazlamasında genotip oranı 1 TT : 2 Tt : 1 tt olur.
Adım 1: 1200 tohumun dörtte biri TT: 1200 ÷ 4 = 300.
Adım 2: Yarısı Tt: 600. Dörtte biri tt (kısa): 300.
Adım 3: Uzun boylu bitkiler TT ve Tt olanlardır: 300 + 600 = 900. Bunlardan yalnızca TT olanlar saf döldür.
Sağlama: 300 + 600 + 300 = 1200.
Sık yapılan hata: Uzun boylu bitkilerin tamamını (900) saf döl saymak.
Cevap A.`
},
{
  id: "fen-kl-343",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ıslah istasyonunda bakla şekli bakımından iki çaprazlama yapılmıştır. Şişkin bakla geni B, boğumlu bakla geni b ile gösterilir ve şişkin bakla baskındır.
1. çaprazlamada melez döl şişkin baklalı bir bitki, boğumlu baklalı bir bitkiyle çaprazlanmış ve 600 tohum elde edilmiştir.
2. çaprazlamada iki melez döl şişkin baklalı bitki çaprazlanmış ve 800 tohum elde edilmiştir.
**Buna göre iki çaprazlamada elde edilen tohumlardan boğumlu baklalı bitki verecek olanların toplamı yaklaşık kaçtır?**`,
  gorsel: null,
  secenekler: ["200", "300", "400", "500"],
  dogru: 3,
  hatalar: ["Yalnız ikinci çaprazlamayı sayma: 200, Bb × Bb çaprazlamasındaki boğumlu bitkilerin sayısıdır.",
    "Yalnız birinci çaprazlamayı sayma: 300, Bb × bb çaprazlamasındaki boğumlu bitkilerin sayısıdır.",
    "İkinci çaprazlamayı yarı yarıya sanma: 400, 800 tohumun yarısıdır; Bb × Bb'de boğumlu oranı dörtte birdir.",
    null],
  aciklama: `Boğumlu bakla çekiniktir ve yalnızca bb genotipinde görülür.
Adım 1: 1. çaprazlama Bb × bb'dir. Yavrular 1 Bb : 1 bb olur; boğumlu oranı yarıdır: 600 ÷ 2 = 300.
Adım 2: 2. çaprazlama Bb × Bb'dir. Yavrular 1 BB : 2 Bb : 1 bb olur; boğumlu oranı dörtte birdir: 800 ÷ 4 = 200.
Adım 3: Toplam boğumlu bitki: 300 + 200 = 500.
Sağlama: Her çaprazlamada boğumlu oranı ayrı hesaplanır, tohum sayıları toplanmadan önce birleştirilmez.
Sık yapılan hata: Her iki çaprazlamaya da aynı oranı uygulamak.
Cevap D.`
},
{
  id: "fen-kl-344",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede çiçeklerin gövdenin yanında olması (K), ucunda olmasına (k) baskındır. Çiçekleri gövdenin yanında olan melez döl iki bezelye bitkisi çaprazlanmış ve 1200 tohum elde edilmiştir. Tohumların hepsi gelişmiş, çiçekleri gövdenin yanında açan bitkiler ayrılmış ve ayrılan bu bitkilerin her biri kendi kendine tozlaştırılmıştır.
**Buna göre ayrılan bitkilerden kaç tanesinin yavruları arasında çiçekleri gövdenin ucunda olanlar görülür?**`,
  gorsel: null,
  secenekler: ["1200", "900", "600", "300"],
  dogru: 2,
  hatalar: ["Bütün tohumları sayma: 1200 tohumun hepsi yan çiçekli değildir.",
    "Yan çiçekli bitkilerin hepsini yavruda çekinik verecek sanma: 900 bitkinin bir kısmı KK'dır.",
    null,
    "Saf döl bitkilerin sayısını alma: 300, KK olan bitkilerdir; bunlar uçta çiçekli yavru vermez."],
  aciklama: `Uçta çiçekli (kk) yavru verebilmesi için bitkinin k geni taşıması gerekir.
Adım 1: Kk × Kk çaprazlamasında 1200 tohumun dörtte üçü yan çiçekli olur: 1200 × 3 ÷ 4 = 900 bitki ayrılır.
Adım 2: Ayrılan 900 bitkinin 300'ü KK, 600'ü Kk'dır (1 : 2).
Adım 3: KK bitkiler kendi kendine tozlaşınca yalnızca KK yavru verir. Kk bitkiler ise yavrularının dörtte birini kk yapar.
Adım 4: Uçta çiçekli yavru görülen bitkiler Kk olanlardır: 600 bitki.
Sağlama: 300 KK + 600 Kk = 900 ayrılan bitki.
Sık yapılan hata: Baskın fenotipli bütün bitkilerin çekinik gen taşıdığını düşünmek.
Cevap C.`
},
{
  id: "fen-kl-345",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ailenin iki kız ve bir erkek çocuğu vardır. Fen dersinde öğrenciler bu ailenin eşey kromozomlarıyla ilgili yargılar yazmıştır.
Buna göre;
I. Erkek çocuğun Y kromozomu annesinden gelmiştir.
II. Kız çocukların her biri X kromozomlarından birini babasından almıştır.
III. Ailenin dördüncü çocuğunun kız olma olasılığı [[1|2]]'dir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve III"],
  dogru: 2,
  hatalar: ["Önceki doğumlara bakıp olasılığı değiştirme: her döllenme ayrı bir olaydır, III de doğrudur.",
    "Kızın X'lerinden birini babadan aldığını bilmeme: kız çocuk babadan X alarak XX olur.",
    null,
    "Y'yi anneden gelen sanma: kadında Y kromozomu bulunmaz."],
  aciklama: `Anne XX, baba XY'dir. Anne her çocuğa X verir; baba X ya da Y verir.
Adım 1 (I): Y kromozomu yalnızca babada bulunur. Erkek çocuk Y'yi babasından almıştır. I yanlıştır.
Adım 2 (II): Kız çocuk XX'tir; X'lerden biri annesinden, biri babasından gelir. II doğrudur.
Adım 3 (III): Her döllenmede babanın X ya da Y vermesi eşit olasılıklıdır. Önceki çocukların cinsiyeti sonraki çocuğu etkilemez; kız olma olasılığı [[1|2]]'dir. III doğrudur.
Sağlama: Anne her zaman X verir, bu yüzden cinsiyeti belirleyen babadan gelen eşey kromozomudur.
Sık yapılan hata: "İki kızdan sonra erkek gelir" gibi geçmişe bakarak olasılığı değiştirmek.
Cevap C.`
},
{
  id: "fen-kl-346",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum rengi baskın, yeşil tohum rengi çekiniktir. Bir araştırmacı, sarı tohumlu X bitkisini yeşil tohumlu Z bitkisiyle çaprazlamış ve elde ettiği 100 tohumdan 52'sinin sarı, 48'inin yeşil olduğunu görmüştür.
Buna göre;
I. X bitkisi saf döldür.
II. Yeşil tohumlu yavruların genotipi Z bitkisininkiyle aynıdır.
III. Sarı tohumlu yavruların hepsi melez döldür.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "II ve III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: ["Sarı yavruları saf sanma: sarı yavrular X'ten S, Z'den s aldığı için melezdir (III de doğru).",
    null,
    "X'i saf sanma: yavruların yarısı yeşil çıktığına göre X, s geni taşır ve melezdir.",
    "X'i saf sanma: X saf döl olsaydı hiç yeşil yavru çıkmazdı."],
  aciklama: `Yeşil tohum çekiniktir; Z bitkisi ss genotiplidir ve yavrulara yalnızca s verir.
Adım 1 (I): Yavruların yaklaşık yarısı yeşil (ss) olduğuna göre X bitkisi de s vermiştir. X, Ss yani melezdir. I yanlıştır.
Adım 2 (II): Yeşil yavrular iki ebeveynden de s almıştır; genotipleri ss'dir, Z ile aynıdır. II doğrudur.
Adım 3 (III): Sarı yavrular Z'den s, X'ten S almıştır; hepsi Ss yani melezdir. III doğrudur.
Sağlama: Ss × ss → 1 Ss : 1 ss; 52 : 48 yaklaşık 1 : 1'dir.
Sık yapılan hata: Baskın fenotipli ebeveyn için "yavruların yarısı yeşil çıktı, öyleyse saf" demek.
Cevap B.`
},
{
  id: "fen-kl-347",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede çiçeklerin gövdenin yanında olması (K), ucunda olmasına (k) baskındır. Bir öğrenci, genotipi Kk olan bir bitkiyi genotipi kk olan bir bitkiyle çaprazlayacaktır.
Buna göre;
I. Yavruların hepsi gövdenin yanında çiçek açar.
II. Yavrulardan hiçbiri melez döl olmaz.
III. Yavrulardaki genotip çeşidi sayısı, fenotip çeşidi sayısına eşittir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"],
  dogru: 2,
  hatalar: ["Baskın ebeveynin varlığını yeterli sanma: kk ebeveyni k verdiği için yavruların yarısı kk olur.",
    "Melez bireyi görememe: Kk ebeveyni K, kk ebeveyni k verdiğinde yavrular Kk (melez) olur.",
    null,
    "Melez yavrunun var olduğunu unutma: II yanlıştır, yavrularda Kk melezleri vardır."],
  aciklama: `Kk × kk çaprazlamasında Kk bitkisi K ya da k, kk bitkisi yalnızca k verir.
Adım 1: Yavrular 1 Kk : 1 kk olur.
Adım 2 (I): Kk yavrular gövdenin yanında, kk yavrular ucunda çiçek açar. Hepsi yanda değildir. I yanlıştır.
Adım 3 (II): Kk genotipli yavrular melez döldür. II yanlıştır.
Adım 4 (III): Genotip çeşidi Kk ve kk olmak üzere 2, fenotip çeşidi yan ve uç olmak üzere 2'dir. Sayılar eşittir. III doğrudur.
Sağlama: Melez × melez çaprazlamasında 3 genotip, 2 fenotip olurdu; burada ikisi de 2'dir.
Sık yapılan hata: Genotip çeşidi sayısıyla fenotip çeşidi sayısını aynı sanmak.
Cevap C.`
},
{
  id: "fen-kl-348",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede şişkin bakla geni B, boğumlu bakla geni b ile gösterilir ve şişkin bakla baskındır. Bir öğrenci, genotipi Bb olan iki bezelye bitkisini çaprazlayarak elde edeceği yavrular için tahminde bulunmaktadır.
Buna göre;
I. Yavrularda 3 farklı fenotip görülür.
II. Yavrularda 3 farklı genotip görülür.
III. Yavruların %75'i saf döl olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [null,
    "Saf döl oranını yanlış hesaplama: saf döller BB ve bb'dir ve toplam %50'dir.",
    "Fenotip çeşidini genotip çeşidiyle karıştırma: fenotip yalnızca şişkin ve boğumlu olmak üzere 2'dir.",
    "Fenotip çeşidini 3 sanma ve saf döl oranını yanlış hesaplama."],
  aciklama: `Bb × Bb çaprazlamasında yavrular 1 BB : 2 Bb : 1 bb olur.
Adım 1 (I): Fenotip yalnızca şişkin (BB, Bb) ve boğumlu (bb) olmak üzere 2 çeşittir. I yanlıştır.
Adım 2 (II): Genotip BB, Bb ve bb olmak üzere 3 çeşittir. II doğrudur.
Adım 3 (III): Saf dölleri BB ve bb oluşturur; oranları dörtte bir ile dörtte birin toplamı, yani yarıdır (%50). %75 değildir. III yanlıştır.
Sağlama: Saf döl (2 pay) + melez (2 pay) = 4 pay; saf döl oranı 2 ÷ 4 = %50.
Sık yapılan hata: Şişkin baklalı yavruların hepsini (%75) saf döl saymak.
Cevap A.`
},
{
  id: "fen-kl-349",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir öğrenci, iki bezelye bitkisinin çaprazlanmasını aşağıdaki tabloyla göstermiştir. Tablonun üst satırında bir ebeveynin, sol sütununda diğer ebeveynin üreme hücrelerindeki genler; kutularda ise yavruların genotipleri yazılıdır.
Buna göre;
I. Soldaki ebeveyn melez döldür.
II. Üstteki ebeveyn yuvarlak tohumludur.
III. Yavruların yarısı buruşuk tohumludur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Üreme hücreleri</th><th>Y</th><th>y</th></tr><tr><th>y</th><td>Yy</td><td>yy</td></tr><tr><th>y</th><td>Yy</td><td>yy</td></tr></table>`,
  secenekler: ["Yalnız II", "II ve III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: ["Yavru oranını okuyamama: dört kutunun ikisi yy olduğundan III de doğrudur.",
    null,
    "Soldaki iki y'yi farklı gen sanma: sol sütunda iki kez aynı gen (y) yazılıdır, ebeveyn yy saf dölüdür.",
    "Üstteki ebeveynin fenotipini bozma: üstte Y ve y varsa ebeveyn Yy'dir ve baskın Y sayesinde yuvarlak tohumludur."],
  aciklama: `Tabloda üst satırdaki genler bir ebeveynin, sol sütundaki genler diğer ebeveynin üreme hücrelerini gösterir.
Adım 1 (I): Sol sütunda iki hücre de y taşır; bu ebeveyn yalnızca y verir, genotipi yy'dir (saf döl, buruşuk). I yanlıştır.
Adım 2 (II): Üst satırda Y ve y vardır; bu ebeveyn Yy'dir ve baskın Y geni nedeniyle yuvarlak tohumludur. II doğrudur.
Adım 3 (III): Kutular Yy, yy, Yy, yy'dir. İkisi yy (buruşuk) olduğundan yavruların yarısı buruşuktur. III doğrudur.
Sağlama: Yy × yy çaprazlamasında yavrular 1 Yy : 1 yy olur ve tablo bu sonuçla uyumludur.
Sık yapılan hata: Sol sütundaki tekrar eden y'leri iki farklı gen sanıp ebeveyni melez saymak.
Cevap B.`
},
{
  id: "fen-kl-350",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir seracı, bezelyelerde boy karakterini incelemektedir. Uzun boy baskın, kısa boy çekiniktir. Seracı, defterine kısa boylu bitkilerle ilgili şu yargıları yazmıştır.
Buna göre;
I. Kısa boylu bir bitki melez döl olabilir.
II. Uzun boylu bir bitki, kısa boylu yavru verebilir.
III. İki kısa boylu bitki çaprazlanırsa yavruların hepsi kesinlikle kısa boylu olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve III"],
  dogru: 2,
  hatalar: ["Çekinik çaprazlamanın sonucunu unutma: iki kısa boylu bitki yalnızca t verir, III de doğrudur.",
    "Uzun boylu melezin kısa yavru verebileceğini unutma: Tt × Tt ya da Tt × tt çaprazlamasında kısa yavru çıkar, II de doğrudur.",
    null,
    "Çekinik fenotipi melez sanma: kısa boylu bitki her zaman tt'dir, melez olamaz."],
  aciklama: `Kısa boy çekiniktir; kısa boylu her bitki tt genotiplidir.
Adım 1 (I): Kısa boylu bitki hep tt'dir, yani saf dölüdür. Melez olamaz. I yanlıştır.
Adım 2 (II): Uzun boylu bitki Tt ise t genini taşır ve başka bir t ile birleşirse kısa boylu yavru verir. II doğrudur.
Adım 3 (III): tt × tt çaprazlamasında her iki ebeveyn yalnızca t verir; yavruların hepsi tt, yani kısa boyludur. III doğrudur.
Sağlama: Çekinik fenotip her zaman saf döl olduğu için kendi aralarında çaprazlandığında farklı bir sonuç vermez.
Sık yapılan hata: Kısa boylu bir bitkinin içinde saklı bir uzun gen taşıyabileceğini düşünmek.
Cevap C.`
},
{
  id: "fen-kl-351",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Bir öğrenci, genotipi Mm olan bir bezelye bitkisinin poleniyle ilgili aşağıdaki yargıları yazmıştır.
Buna göre;
I. Bu bitkinin polen taneleri yalnızca M geni taşıyabilir.
II. Bu bitkinin poleni, beyaz çiçekli bir bitkinin yumurta hücresiyle birleşerek beyaz çiçekli yavru oluşturabilir.
III. Bu bitkinin poleniyle oluşan yavruların hepsi, yumurta hücresini veren bitki ne olursa olsun mor çiçekli olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: ["Melezin yalnızca baskın geni aktardığını sanma: Mm bitkisinin polen taneleri M de m de taşıyabilir.",
    null,
    "Melezin yalnızca M aktardığını sanıp yavru rengini poleni veren bitkiye bağlama: yumurta hücresinden gelen gen de rengi belirler.",
    "Yavru rengini yalnız polenin taşıdığı gene bağlama: polen m taşıdığında ve yumurta hücresi de m verdiğinde yavru beyaz olur, III yanlıştır."],
  aciklama: `Mm genotipli bitkide gen çifti, üreme hücreleri oluşurken ayrılır; polen taneleri M ya da m taşır. Yavrunun rengini, polenden ve yumurta hücresinden gelen genlerin oluşturduğu çift belirler.
Adım 1 (I): Polen taneleri hem M hem m taşıyabilir. "Yalnızca M" demek yanlıştır. I yanlıştır.
Adım 2 (II): m taşıyan polen, beyaz çiçekli (mm) bitkinin m taşıyan yumurta hücresiyle birleşirse yavru mm olur ve beyaz çiçek açar. II doğrudur.
Adım 3 (III): Yumurta hücresini veren bitki beyaz ya da melez ise, m taşıyan polenle birleşen yavru beyaz çıkabilir. Yavruların hepsinin mor olması garanti değildir. III yanlıştır.
Sağlama: Mm × mm çaprazlamasında yavrular 1 Mm : 1 mm olur; beyaz yavru çıkar.
Sık yapılan hata: Melez bitkinin yalnızca baskın geni aktardığını düşünmek.
Cevap B.`
},
{
  id: "fen-kl-352",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 3,
  soru: `Çekinik bir genle aktarılan kalıtsal bir hastalık, ikisi de sağlıklı olan kuzenlerin çocuğunda ortaya çıkmıştır. Bir genetik danışman aileye bilgi vermektedir.
Buna göre;
I. Anne ve babanın ikisi de hastalık genini taşıyordur.
II. Çocuk, hastalık geninden ikisini birden almıştır.
III. Ailenin sonraki her çocuğu kesinlikle hasta doğacaktır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: ["Çocuğun gen çiftini unutma: çekinik hastalığın görülmesi için hastalık geninin ikisini birden alması gerekir, II de doğrudur.",
    "Ebeveynlerin taşıyıcı olduğunu görmeme: çocuğa gen veren anne ve baba hastalık genini taşıyor olmalıdır, I de doğrudur.",
    null,
    "Olasılığı kesinlik sanma: iki taşıyıcının her çocuğu hasta olmaz, hasta olma olasılığı düşüktür."],
  aciklama: `Çekinik hastalık, yalnızca hastalık geninin iki kopyası bir arada bulunduğunda ortaya çıkar. Tek kopya taşıyan kişi sağlıklıdır ama taşıyıcıdır.
Adım 1 (I): Çocuk hasta olduğuna göre geninin birini anneden, birini babadan almıştır. İkisi de sağlıklı olduğundan taşıyıcıdır. I doğrudur.
Adım 2 (II): Çocukta hastalık görüldüğü için hastalık geninden iki tane taşır. II doğrudur.
Adım 3 (III): Taşıyıcı çiftin her çocuğu, geni iki kez alırsa hasta olur; ama bu kesin değildir, bazıları sağlıklı ya da taşıyıcı olur. III yanlıştır.
Sağlama: Kuzenlerin ortak atalarından aynı geni almış olması, çocukta iki genin buluşma olasılığını artırır.
Sık yapılan hata: Olasılığı kesinlik sanmak.
Cevap C.`
},
{
  id: "fen-kl-353",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırmacı, tohum şekli bakımından dört farklı çaprazlama yapmış ve sonuçları tabloda göstermiştir. Yuvarlak tohum baskın, buruşuk tohum çekiniktir.
**Buna göre hangi çaprazlamada her iki ebeveynin de melez döl olduğu kesin olarak söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ebeveynler</th><th>Yuvarlak tohum</th><th>Buruşuk tohum</th></tr><tr><td>1.</td><td>Buruşuk × Buruşuk</td><td>0</td><td>160</td></tr><tr><td>2.</td><td>Yuvarlak × Yuvarlak</td><td>160</td><td>0</td></tr><tr><td>3.</td><td>Yuvarlak × Buruşuk</td><td>82</td><td>78</td></tr><tr><td>4.</td><td>Yuvarlak × Yuvarlak</td><td>121</td><td>39</td></tr></table>`,
  secenekler: ["1. çaprazlamada", "2. çaprazlamada", "3. çaprazlamada", "4. çaprazlamada"],
  dogru: 3,
  hatalar: ["Çekinik fenotipi melez sanma: buruşuk tohumlu ebeveynler yy'dir, saf dölüdür.",
    "Hepsi yuvarlak çıkan sonucu melez sanma: bu sonuç en az bir ebeveynin YY olduğunu gösterir.",
    "1 : 1 sonucunu iki melezin sonucu sanma: yaklaşık 1 : 1 oranı, bir ebeveynin melez, diğerinin buruşuk (yy) olduğunu gösterir.",
    null],
  aciklama: `Yuvarlak tohumlu iki ebeveynden buruşuk yavru çıkıyorsa iki ebeveyn de y geni taşır; yani ikisi de melezdir.
Adım 1: 1. çaprazlamada ebeveynler buruşuk olduğu için yy'dir; ikisi de saf dölüdür.
Adım 2: 2. çaprazlamada yavruların hepsi yuvarlaktır; bu sonuç YY × YY, YY × Yy gibi birkaç çaprazlamadan çıkabilir, kesin söylenemez.
Adım 3: 3. çaprazlamada oran yaklaşık 1 : 1'dir. Yuvarlak ebeveyn melez (Yy), buruşuk ebeveyn yy'dir.
Adım 4: 4. çaprazlamada 121 : 39 yaklaşık 3 : 1'dir ve iki yuvarlak ebeveynden buruşuk yavru çıkmıştır. İki ebeveyn de Yy'dir.
Sağlama: Yy × Yy → 1 YY : 2 Yy : 1 yy; fenotip oranı 3 : 1.
Sık yapılan hata: 3 : 1 oranını gördüğünde ebeveynlerin birinin saf olduğunu düşünmek.
Cevap D.`
},
{
  id: "fen-kl-354",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 3,
  soru: `Birbirinin kuzeni olan bir çiftin ikisi de sağlıklıdır. Yapılan genetik testte ikisinin de çekinik bir genle aktarılan bir kalıtsal hastalığın genini taşıdığı belirlenmiştir. Çiftin ilk çocuğu sağlıklı doğmuştur. Çift, ikinci çocukları için neler söylenebileceğini genetik danışmana sormuştur.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: ["İlk çocuğun sağlıklı doğması, çiftin taşıyıcılığını ortadan kaldırmıştır.", "Çiftin ikisi de, çocuklarının durumundan bağımsız olarak her zaman taşıyıcıdır.", "İlk çocuk sağlıklı doğduğu için ikinci çocuğun hasta doğma olasılığı bir miktar artmıştır.", "İlk çocuk sağlıklı doğduğu için ikinci çocuğun sağlıklı doğma olasılığı bir miktar artmıştır."],
  dogru: 1,
  hatalar: ["Genin kaybolduğunu sanma: sağlıklı çocuğun doğması ebeveynlerdeki geni değiştirmez, ikisi hâlâ taşıyıcıdır.",
    null,
    "Önceki olayın sonrakini etkilediğini sanma: ikinci çocuğun durumu birincisinden bağımsızdır, hasta doğma olasılığı artmaz.",
    "Önceki olayın sonrakini etkilediğini sanma: ilk çocuğun sağlıklı olması ikinci çocuğun sağlıklı olma olasılığını artırmaz."],
  aciklama: `Taşıyıcı, hastalık geninden yalnızca bir tane taşıyan ve hasta olmayan kişidir. Doğumlar birbirinden bağımsız olaylardır.
Adım 1: Çiftin genleri çocukların doğmasıyla değişmez; ikisi de taşıyıcı olmaya devam eder.
Adım 2: Her döllenme ayrı bir olaydır; ilk çocuğun sağlıklı doğması ikinci çocuğun hasta ya da sağlıklı doğma olasılığını değiştirmez.
Adım 3: Bu nedenle ikinci çocuk için olasılık, ilk çocuktan önceki olasılıkla aynıdır; ne artar ne azalır.
Sağlama: Bir madeni parayı atarken art arda yazı gelmesi, sonraki atışın yazı olma olasılığını değiştirmez.
Sık yapılan hata: Bir çocuğun sağlıklı doğmasını, sonraki çocukların durumunu etkileyen bir veri saymak.
Cevap B.`
},
{
  id: "fen-kl-355",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 3,
  soru: `Çekinik bir genle aktarılan bir kalıtsal hastalık için dört çift genetik danışmanlığa başvurmuştur. Çiftlerin hiçbirinde hastalık görülmemektedir. Çiftlerle ilgili bilgiler aşağıda verilmiştir.
**Buna göre hangi çiftin çocuğunda bu hastalığın ortaya çıkma olasılığı diğerlerinden daha yüksektir?**`,
  gorsel: null,
  secenekler: ["Birbiriyle akraba olmayan ve ailelerinde hastalık hiç görülmemiş çift", "Birbiriyle akraba olmayan ve yalnızca birinin ailesinde hastalık görülmüş çift", "Ortak atası olmayan ve ikisinin ailesinde de hastalık görülmemiş çift", "Ortak büyükanne ve büyükbabalarında hastalık görülmüş kuzenler"],
  dogru: 3,
  hatalar: ["Akrabalığın etkisini görmeme: ortak atası olmayan çiftte aynı çekinik geni taşıma olasılığı daha düşüktür.",
    "Tek ebeveynin taşımasını yeterli sanma: çocuğun hasta olması için iki ebeveynin de geni taşıması gerekir.",
    "Aile öyküsü olmamasını risk olmaması sanma: yine de akraba olmayan çiftin ortak gen taşıma olasılığı kuzenlerden düşüktür.",
    null],
  aciklama: `Çekinik hastalığın çocukta görülmesi için hem anne hem baba hastalık genini taşımalı ve çocuk ikisinden de genleri almalıdır.
Adım 1: Akraba evliliği yapan çiftlerin genleri ortak atalardan geldiği için aynı çekinik geni taşıma olasılıkları, akraba olmayanlara göre yüksektir.
Adım 2: Ortak büyükanne ve büyükbabalarında hastalık görülmüş kuzenlerin her ikisinin de bu geni taşıması çok daha olasıdır.
Adım 3: Yalnızca bir ailede görülmüş olması, öbür tarafın taşıma olasılığını artırmaz; çocuk hasta doğmaz ya da olasılık çok düşük kalır.
Sağlama: En yüksek risk, iki tarafın da aynı atadan geni alma ihtimalinin en yüksek olduğu çifttedir.
Sık yapılan hata: Akrabalık olmadan da riskin aynı olduğunu düşünmek.
Cevap D.`
},
{
  id: "fen-kl-356",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Mendel'in deneyini yeniden yapan bir öğrenci, saf döl sarı tohumlu bir bezelye ile saf döl yeşil tohumlu bir bezelyeyi çaprazlamış ve birinci kuşakta bütün tohumların sarı olduğunu görmüştür. Birinci kuşak bitkileri kendi kendine tozlaştırdığında ikinci kuşakta yeşil tohumların yeniden ortaya çıktığını fark eden öğrenci, "Yeşil renk geni birinci kuşakta yok olmuş, ikinci kuşakta yeniden oluşmuştur." demiştir. Öğretmeni bu yorumu düzeltmiştir.
**Buna göre öğretmenin yaptığı doğru açıklama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Birinci kuşak bitkilerde yeşil renk geni bulunmaz; ikinci kuşakta bu gen kendiliğinden yeniden oluşur.", "Birinci kuşak bitkiler yeşil renk genini taşır; ikinci kuşakta bu genin iki tanesi bir araya gelen tohumlar yeşil olur.", "Birinci kuşak bitkiler yeşil renk genini taşır; ikinci kuşakta bu gen baskın hâle geçerek tohumların yeşil olmasını sağlar.", "Birinci kuşak bitkiler yeşil renk genini taşımaz; yeşil tohumlar yalnızca yeşil tohumlu ebeveynden aktarılan genlerle oluşur."],
  dogru: 1,
  hatalar: ["Baskın geni, çekinik geni yok eden gen sanma: melez bitkide çekinik gen vardır, yalnızca etkisini göstermez.",
    null,
    "Genin baskınlık durumunun değiştiğini sanma: çekinik gen ikinci kuşakta da çekiniktir; yalnızca iki tane bir araya geldiği için görülür.",
    "Ebeveyn bitkinin doğrudan yeşil tohum verdiğini sanma: ikinci kuşaktaki yeşil tohumlar birinci kuşak bitkilerin taşıdığı çekinik genlerden oluşur."],
  aciklama: `Çekinik gen, melez bireyde bulunur ama etkisini göstermez; iki tanesi bir araya gelince fenotipte görülür.
Adım 1: Saf döl sarı (SS) ve saf döl yeşil (ss) bitkiler çaprazlanınca birinci kuşağın hepsi Ss olur. Hepsi sarı görünür ama s geni vardır.
Adım 2: Birinci kuşak bitkiler Ss × Ss çaprazlanır. Üreme hücrelerinin yarısı S, yarısı s taşır.
Adım 3: İki s birleşirse ss oluşur ve yeşil tohum görülür. Bu olasılık dörtte birdir.
Adım 4: Yeşil gen hiçbir zaman yok olmamış, yeniden de oluşmamıştır; yalnızca birinci kuşakta baskın S geninin yanında gizli kalmıştır.
Sağlama: İkinci kuşakta yaklaşık 3 sarı : 1 yeşil beklenir.
Sık yapılan hata: Çekinik genin melezde bulunmadığını düşünmek.
Cevap B.`
},
{
  id: "fen-kl-357",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede şişkin bakla geni R, boğumlu bakla geni r ile gösterilir ve şişkin bakla baskındır. Bir öğrenci, elindeki genotipleri bilinen bitkilerle dört çaprazlamadan birini seçecektir. Seçilen çaprazlamada yavrular iki farklı genotipte olmalıdır; ancak yavrularda yalnızca tek bir fenotip görülmelidir.
**Buna göre öğrencinin seçmesi gereken çaprazlama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Rr × Rr", "Rr × rr", "RR × Rr", "RR × rr"],
  dogru: 2,
  hatalar: ["Üç genotip olduğunu görmeme: Rr × Rr'de yavrular RR, Rr, rr olur ve iki farklı fenotip görülür.",
    "Genotip ve fenotip çeşitlerini karıştırma: Rr × rr'de iki genotip (Rr, rr) ve iki fenotip (şişkin, boğumlu) vardır.",
    null,
    "Yavruların tek genotipli olduğunu görmeme: RR × rr'de yavruların hepsi Rr'dir, yalnızca bir genotip vardır."],
  aciklama: `Genotip, gen çiftidir; fenotip, görünen özelliktir. Aranan çaprazlamada 2 genotip, 1 fenotip olmalıdır.
Adım 1: Rr × Rr → RR, Rr, Rr, rr. 3 genotip, 2 fenotip. Uymaz.
Adım 2: Rr × rr → Rr, rr. 2 genotip, 2 fenotip (şişkin, boğumlu). Uymaz.
Adım 3: RR × Rr → RR, Rr. 2 genotip, ama ikisi de baskın R taşıdığı için yalnızca şişkin fenotip. Uyar.
Adım 4: RR × rr → hepsi Rr. 1 genotip, 1 fenotip. Uymaz.
Sağlama: Tek fenotip için yavruların hiçbiri rr olmamalıdır; ebeveynlerden biri RR olduğunda bu sağlanır.
Sık yapılan hata: Farklı genotipin farklı fenotip demek olduğunu düşünmek.
Cevap C.`
},
{
  id: "fen-kl-358",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ailenin ilk üç çocuğu erkektir. Aile, dördüncü çocuğu beklerken bir fen öğretmenine eşey kromozomlarını sormuştur. Anne XX, baba XY eşey kromozomlarına sahiptir. Öğretmen, annenin ve babanın üreme hücrelerinin nasıl oluştuğunu hatırlatmıştır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Annenin yumurta hücrelerinin yarısı X, yarısı Y kromozomu taşımaktadır.", "Dördüncü çocuğun kız olma olasılığı, ilk üç çocuk erkek olduğu için yarıdan fazladır.", "Babanın sperm hücrelerinin tamamı Y kromozomu taşımaktadır.", "Üç çocuğun da Y kromozomu babadan, X kromozomu anneden gelmiştir."],
  dogru: 3,
  hatalar: ["Anneyi de babaya benzetme: anne XX olduğu için yumurtalarının hepsi X taşır; Y kromozomu yalnızca babada bulunur.",
    "Geçmiş doğumların olasılığı değiştirdiğini sanma: her döllenme ayrı bir olaydır ve olasılık yarıdır.",
    "Babanın yalnız Y verdiğini sanma: babanın sperm hücrelerinin yaklaşık yarısı X, yarısı Y taşır.",
    null],
  aciklama: `Anne XX olduğu için her yumurtası X taşır. Baba XY olduğu için spermlerinin yarısı X, yarısı Y taşır.
Adım 1: Erkek çocuk XY'dir. Y kromozomunu yalnızca babadan, X kromozomunu anneden alabilir. Üç erkek çocuk için de bu geçerlidir.
Adım 2: Dördüncü çocuğun kız olma olasılığı yine yarıdır; önceki çocukların cinsiyeti olasılığı değiştirmez.
Adım 3: Babanın spermlerinin hepsi Y taşımaz; yarısı X taşır.
Adım 4: Anne XX'tir; yumurtalarının hiçbiri Y taşımaz. Y kromozomu yalnızca babada bulunur.
Sağlama: Erkek çocukta bir X ve bir Y vardır; Y baba, X anne kaynaklıdır.
Sık yapılan hata: Ardışık çocukların cinsiyetini birbirine bağlamak.
Cevap D.`
},
{
  id: "fen-kl-359",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede çiçeklerin gövdenin yanında olması (K), ucunda olmasına (k) baskındır. Etiketleri karışan A, B ve C bitkilerinin üçü de çiçeklerini gövdenin yanında açmaktadır. Bir araştırmacı bu bitkilerle yaptığı işlemlerin sonuçlarını tabloda göstermiştir.
**Buna göre aşağıdaki işlemlerden hangisinden, çiçekleri gövdenin ucunda açan yavrular elde edilebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Bitki</th><th>Yapılan işlem</th><th>Yan çiçekli</th><th>Uç çiçekli</th></tr><tr><td>A</td><td>Kendi kendine tozlaştırıldı</td><td>80</td><td>0</td></tr><tr><td>B</td><td>Kendi kendine tozlaştırıldı</td><td>59</td><td>21</td></tr><tr><td>C</td><td>Uçta çiçekli bir bitkiyle çaprazlandı</td><td>70</td><td>0</td></tr></table>`,
  secenekler: ["A ile B bitkilerinin çaprazlanması", "A ile C bitkilerinin çaprazlanması", "B bitkisinin kendi kendine tozlaşması", "B ile C bitkilerinin çaprazlanması"],
  dogru: 2,
  hatalar: ["A'yı melez sanma: A saf döldür (KK), bu nedenle B melez olsa da yavruların hepsi en az bir K alır.",
    "İki saf bitkiyi melez sanma: A ve C'nin ikisi de KK'dır, yavruların hepsi KK olur.",
    null,
    "C'yi melez sanma: C bitkisi uçta çiçekli bitkiyle çaprazlanınca uçta yavru vermediğine göre KK'dır; yavrular en az bir K alır."],
  aciklama: `Uçta çiçekli yavru kk genotipindedir; iki ebeveynin de k geni vermesi gerekir.
Adım 1: A bitkisi kendi kendine tozlaşınca hiç uç çiçekli yavru vermemiştir. A, KK'dır.
Adım 2: B bitkisinin yavrularında yaklaşık 3 : 1 oranı vardır. B, Kk'dır.
Adım 3: C bitkisi, kk bitkiyle çaprazlanınca hiç uç çiçekli yavru vermemiştir. C de KK'dır.
Adım 4: A ve C yalnızca K verir. B ile bu bitkilerden biri çaprazlanırsa yavrular K alır. Yalnızca B'nin kendi kendine tozlaşmasında iki k birleşebilir.
Sağlama: Kk × Kk → 1 KK : 2 Kk : 1 kk; kk yavru bu çaprazlamada çıkar.
Sık yapılan hata: Melez bir bitkiyi saf bir bitkiyle çaprazlayınca çekinik yavru çıkacağını sanmak.
Cevap C.`
},
{
  id: "fen-kl-360",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacının elinde yalnızca yeşil tohumlu bezelye bitkileri bulunmaktadır. Bezelyede sarı tohum geni S, yeşil tohum geni s ile gösterilir ve sarı tohum baskındır. Araştırmacı, bu bitkileri kendi arasında çaprazlayarak ya da kendi kendine tozlaştırarak elde ettiği yavrularla çalışmaktadır. Dışarıdan başka bitki ya da gen eklenmediği kabul edilmektedir.
**Buna göre araştırmacının bu bitkilerden yola çıkarak aşağıdakilerden hangisine ulaşması kesinlikle olanaksızdır?**`,
  gorsel: null,
  secenekler: ["Genotipi ss olan bir bitkiye", "Kendi kendine tozlaşınca yalnız yeşil tohum veren bir bitkiye", "Yeşil tohumlu saf döl bir bitkiye", "Sarı tohumlu bir bitkiye"],
  dogru: 3,
  hatalar: ["Elindeki bitkilerin genotipini unutma: bütün bitkiler zaten ss'dir.",
    "Çekinik bitkinin yavrusunu unutma: ss bitki kendi kendine tozlaşınca yalnızca ss yavru verir.",
    "Yeşil tohumlu bitkinin saf döl olduğunu unutma: yeşil tohum çekiniktir ve her yeşil bitki saf döldür.",
    null],
  aciklama: `Yeşil tohum çekiniktir; yeşil tohumlu her bitki ss genotiplidir ve saf dölüdür.
Adım 1: ss bitkiler yalnızca s geni verir. ss × ss ya da kendi kendine tozlaşmada yavruların hepsi ss olur.
Adım 2: ss genotipli bitki elde edilebilir; zaten elde vardır. Kendi kendine tozlaşınca yalnız yeşil tohum veren bitki de ss'dir.
Adım 3: Yeşil tohumlu saf döl bitkiler (ss) de zaten bulunmaktadır.
Adım 4: Sarı tohum için en az bir S geni gerekir. Dışarıdan gen eklenmediği için S geni hiçbir yavruda oluşamaz.
Sağlama: Bütün yavrular yalnızca s alır; sarı tohumlu (Ss ya da SS) bitki çıkmaz.
Sık yapılan hata: Çekinik bitkilerin kendi aralarında çaprazlanınca baskın özellik verebileceğini düşünmek.
Cevap D.`
},
{
  id: "fen-kl-361",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir araştırmacı, genotipi bilinmeyen yuvarlak tohumlu bir bitkiyi buruşuk tohumlu bir bitkiyle çaprazlamış ve elde ettiği 10 tohumun hepsinin yuvarlak olduğunu görmüştür.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yuvarlak tohumlu ebeveyn saf döldür.", "Elde edilen tohumlar kendi aralarında çaprazlanırsa yavruların hepsi yuvarlak olur.", "Yuvarlak tohumlu ebeveyn melez döldür.", "Elde edilen tohumların hepsi melez döldür."],
  dogru: 3,
  hatalar: ["Az sayıdaki sonucu kesin sanma: ebeveyn melezse de 10 tohumun hepsinin yuvarlak olması olasıdır, saf olduğu kesin değildir.",
    "Melez × melez sonucunu atlama: Yy × Yy çaprazlamasında yavruların dörtte biri buruşuk olur.",
    "Sonucu melezlik kanıtı sanma: hepsinin yuvarlak çıkması ebeveynin melez olduğunu göstermez; saf döl de olabilir.",
    null],
  aciklama: `Buruşuk tohumlu ebeveyn çekiniktir; yy genotipindedir ve yavrulara yalnızca y verir.
Adım 1: Yavrular yuvarlak olduğuna göre en az bir Y almışlardır. Y geni, yuvarlak ebeveynden gelmiştir.
Adım 2: Her yavru, buruşuk ebeveynden y almıştır. Yani yavruların genotipi kesinlikle Yy'dir; hepsi melezdir.
Adım 3: Yuvarlak ebeveynin YY mi Yy mi olduğu bu 10 tohumdan kesin çıkmaz; Yy olsa da hepsinin yuvarlak çıkma şansı vardır.
Adım 4: Yy × Yy çaprazlamasında yy yavru çıkabilir; tohumların hepsi yuvarlak olmaz.
Sağlama: Yavrunun yuvarlak olması + buruşuk ebeveynden y alması = Yy.
Sık yapılan hata: Yuvarlak yavrulara bakıp yuvarlak ebeveynin genotipini kesin söylemek.
Cevap D.`
},
{
  id: "fen-kl-362",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir çiftin ilk çocuğu kızdır. Çift, sonraki iki çocuğunun ikisinin de erkek olmasını istemektedir. İnsanda her doğumda kız ya da erkek olma olasılığı eşittir ve doğumlar birbirinden bağımsızdır.
**Buna göre çiftin sonraki iki çocuğunun ikisinin de erkek olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|8]]", "[[1|4]]", "[[1|3]]", "[[1|2]]"],
  dogru: 1,
  hatalar: ["İlk çocuğu da hesaba katma: ilk çocuk doğmuştur; olasılığa yalnızca sonraki iki çocuk girer.",
    null,
    "Üç durumdan biri sanma: ikisi kız, biri erkek biri kız, ikisi erkek olasılıkları eşit değildir.",
    "Tek çocuk için olasılığı alma: bir çocuğun erkek olma olasılığı yarıdır, iki çocuk için çarpılır."],
  aciklama: `Bağımsız iki olayın birlikte gerçekleşme olasılığı, olasılıklarının çarpımıdır.
Adım 1: Doğum sırasındaki her çocuğun erkek olma olasılığı [[1|2]]'dir. İlk çocuğun kız olması sonrakini etkilemez.
Adım 2: İkinci çocuğun erkek olma olasılığı [[1|2]], üçüncü çocuğunki de [[1|2]]'dir.
Adım 3: İkisinin birden erkek olma olasılığı [[1|2]] × [[1|2]] = [[1|4]] olur.
Sağlama: İki çocuğun olası cinsiyetleri KK, KE, EK, EE biçiminde dört eşit olasılıklı durumdur; yalnızca EE istenen durumdur.
Sık yapılan hata: İlk çocuğun cinsiyetini de olasılığa katarak [[1|8]] bulmak.
Cevap B.`
},
{
  id: "fen-kl-363",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, saf döl uzun boylu bir bezelye bitkisini saf döl kısa boylu bir bitkiyle çaprazlayarak birinci kuşak bitkileri elde etmiştir. Daha sonra birinci kuşak bitkilerden bazılarını kısa boylu bitkilerle çaprazlamış ve 600 tohum elde etmiştir. Bezelyede uzun boy baskındır.
**Buna göre bu 600 tohumdan yaklaşık kaçı uzun boylu ve melez döl bitki verir?**`,
  gorsel: null,
  secenekler: ["150", "300", "450", "600"],
  dogru: 1,
  hatalar: ["Melez × melez oranını uygulama: dörtte biri, Tt × Tt çaprazlamasındaki saf döl uzun bitkilerin payıdır.",
    null,
    "Uzun fenotipin üçte dörtünü alma: 450, Tt × Tt çaprazlamasındaki uzun bitkilerin sayısıdır.",
    "Hepsini uzun ve melez sanma: 600 tohumun yarısı kısa boylu (tt) olur."],
  aciklama: `Saf döl uzun (TT) × saf döl kısa (tt) çaprazlamasında birinci kuşak bitkilerin hepsi Tt'dir.
Adım 1: Birinci kuşak (Tt), kısa boylu (tt) bitkiyle çaprazlanır: Tt × tt.
Adım 2: Yavrular 1 Tt : 1 tt olur. Tt uzun ve melez, tt kısa boyludur.
Adım 3: Uzun boylu ve melez olanlar yavruların yarısıdır: 600 ÷ 2 = 300.
Sağlama: 300 Tt (uzun, melez) + 300 tt (kısa) = 600.
Sık yapılan hata: Uzun boylu bütün bitkilerin saf döl ya da hepsinin melez olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-kl-364",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Mor çiçekli bir bezelye bitkisi, beyaz çiçekli bir bitkiyle çaprazlanmış; elde edilen 120 bitkiden 61'i mor, 59'u beyaz çiçekli olmuştur. Ardından mor çiçekli yavrulardan ikisi seçilerek birbiriyle çaprazlanmış ve 800 tohum elde edilmiştir. Mor çiçek rengi baskın, beyaz çiçek rengi çekiniktir.
**Buna göre bu 800 tohumdan yaklaşık kaçı beyaz çiçekli bitki verir?**`,
  gorsel: null,
  secenekler: ["800", "400", "200", "100"],
  dogru: 2,
  hatalar: ["Bütün tohumları beyaz sanma: 800 tohumun hepsi beyaz olamaz.",
    "Melez × çekinik oranını uygulama: iki mor bitki de melezdir ve çekinik çaprazlamadan farklı olarak yavruların dörtte biri beyazdır.",
    null,
    "Oranı yarıya indirme: 100, dörtte birin yarısıdır."],
  aciklama: `Mor çiçekli ve beyaz çiçekli bitkilerin çaprazlanmasında yavruların yaklaşık yarısı beyaz çıktığına göre mor ebeveyn Mm'dir.
Adım 1: Mm × mm → 1 Mm : 1 mm. Mor çiçekli yavruların hepsi Mm'dir.
Adım 2: Seçilen iki mor yavru Mm × Mm olarak çaprazlanır. Genotip oranı 1 MM : 2 Mm : 1 mm'dir.
Adım 3: Beyaz çiçekli (mm) bitkiler dörtte bir oranındadır: 800 ÷ 4 = 200.
Sağlama: 200 MM + 400 Mm + 200 mm = 800 tohum.
Sık yapılan hata: İkinci çaprazlamayı da ilk çaprazlamadaki gibi yarı yarıya sanmak.
Cevap C.`
},
{
  id: "fen-kl-365",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir araştırmacı, yuvarlak tohumlu P bitkisini buruşuk tohumlu bir bitkiyle çaprazlamış ve 1000 tohum elde etmiştir. Bu tohumların yaklaşık yarısı yuvarlak, yaklaşık yarısı buruşuk çıkmıştır. Yuvarlak olan tohumlar ekilmiş, gelişen bitkilerin her biri kendi kendine tozlaşarak 4 tohum üretmiştir.
**Buna göre son elde edilen tohumların yaklaşık kaçı buruşuktur?**`,
  gorsel: null,
  secenekler: ["1500", "750", "500", "250"],
  dogru: 2,
  hatalar: ["Yuvarlak tohum sayısını alma: 1500, son tohumların yaklaşık üç dörtte biri olan yuvarlak tohumlardır.",
    "Sayıyı yanlış hesaplama: 1000 tohumun üç dörtte biri 750'dir; ikinci aşamadaki bitki ve tohum sayısı hesaba katılmamıştır.",
    null,
    "İlk çaprazlamadaki tohum sayısına dörtte bir uygulama: 250, 1000 tohumun dörtte biridir; ikinci aşamada yuvarlak bitki sayısı ve her bitkinin tohum sayısı hesaba katılmalıdır."],
  aciklama: `P bitkisinin genotipi, yavruların oranından bulunur. Buruşuk tohumlu bitki yy'dir ve yavrulara yalnızca y verir.
Adım 1: Yavruların yaklaşık yarısı buruşuk (yy) olduğuna göre P bitkisi y geni vermiştir; P, Yy'dir. Yy × yy → 1 Yy : 1 yy.
Adım 2: 1000 tohumun yarısı, yani 500'ü yuvarlaktır (Yy).
Adım 3: 500 yuvarlak tohum ekilir; 500 bitki gelişir. Her biri Yy'dir ve kendi kendine tozlaşır. Her bitki 4 tohum üretirse toplam 500 × 4 = 2000 tohum olur.
Adım 4: Yy × Yy ürününün dörtte biri buruşuktur: 2000 ÷ 4 = 500.
Sağlama: 500 buruşuk + 1500 yuvarlak = 2000 tohum.
Sık yapılan hata: İkinci aşamada tohum sayısını hesaba katmadan ilk sayıya oran uygulamak.
Cevap C.`
},
{
  id: "fen-kl-366",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede yeşil bakla geni G, sarı bakla geni g ile gösterilir ve yeşil bakla baskındır. İki yeşil baklalı bitki çaprazlanmış ve çok sayıda yavru elde edilmiştir; yavruların bir kısmı sarı baklalı çıkmıştır. Yeşil baklalı yavrulardan rastgele 300 tanesi seçilmiş ve her biri sarı baklalı bir bitkiyle ayrı ayrı çaprazlanmıştır.
**Buna göre bu 300 çaprazlamanın yaklaşık kaçında elde edilen yavruların hepsi yeşil baklalı olur?**`,
  gorsel: null,
  secenekler: ["100", "150", "200", "300"],
  dogru: 0,
  hatalar: [null,
    "Yeşil baklalıları yarı yarıya saf ve melez sanma: iki melezin yeşil baklalı yavrularında saf döl ile melez oranı 1 : 2'dir.",
    "Melez bitkilerin sayısını alma: 200, Gg olan bitkilerin sayısıdır; Gg × gg çaprazlamasında sarı baklalı yavru da çıkar.",
    "Yeşil baklalıların hepsini saf sanma: 300 bitkinin bir kısmı Gg'dir ve sarı baklalı yavru da verir."],
  aciklama: `İki yeşil baklalı bitkiden sarı baklalı (gg) yavru çıktığına göre ebeveynler Gg × Gg'dir. Bu çaprazlamada yavrular 1 GG : 2 Gg : 1 gg olur.
Adım 1: Yeşil baklalı yavrular GG ve Gg olanlardır; oranları 1 : 2'dir. 300 bitkinin üçte biri GG (100), üçte ikisi Gg (200) olur.
Adım 2: GG × gg çaprazlamasında yavruların hepsi Gg olur; hepsi yeşil baklalıdır.
Adım 3: Gg × gg çaprazlamasında yavrular 1 Gg : 1 gg olur; sarı baklalı yavru çıkar.
Adım 4: Yavruların hepsinin yeşil olduğu çaprazlamalar GG bitkilerle yapılanlardır: yaklaşık 100.
Sağlama: 100 GG + 200 Gg = 300 yeşil baklalı bitki.
Sık yapılan hata: Baskın fenotipli bütün bitkileri saf döl saymak.
Cevap A.`
},
{
  id: "fen-kl-367",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede uzun boy baskın, kısa boy çekiniktir. Bir araştırmacı, uzun boylu X ve Z bitkilerini kısa boylu Y bitkisiyle ayrı ayrı çaprazlamış ve sonuçları tabloda göstermiştir. Daha sonra X ve Z bitkilerini birbiriyle çaprazlamış ve 800 tohum elde etmiştir.
**Buna göre bu 800 tohumdan yaklaşık kaçı kısa boylu bitki verir?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Uzun boylu yavru</th><th>Kısa boylu yavru</th></tr><tr><td>X × Y</td><td>60</td><td>58</td></tr><tr><td>Z × Y</td><td>118</td><td>0</td></tr></table>`,
  secenekler: ["0", "200", "400", "800"],
  dogru: 0,
  hatalar: [null,
    "X × Z'yi melez × melez sanma: Z saf döl uzun olduğu için dörtte birlik bir oran oluşmaz.",
    "X'in melez olmasını yavruların yarısının kısa olması sanma: Z yalnızca T verir, kısa yavru çıkmaz.",
    "Kısa boy sayısını toplam tohum sanma: 800 tohumun hiçbiri tt değildir."],
  aciklama: `Kısa boylu Y bitkisi tt'dir ve yavrulara yalnızca t verir.
Adım 1: X × Y çaprazlamasında yavruların yaklaşık yarısı kısa olduğundan X, Tt'dir.
Adım 2: Z × Y çaprazlamasında kısa yavru çıkmadığından Z, TT'dir.
Adım 3: X × Z, yani Tt × TT çaprazlamasında Z yalnızca T verir. Yavrular TT ve Tt olur ve hepsi uzun boyludur.
Adım 4: Kısa boylu (tt) yavru çıkmaz; sayısı 0'dır.
Sağlama: Kısa boylu yavru için iki t gerekir; Z hiç t vermediği için olanaksızdır.
Sık yapılan hata: Melez bir bitkinin her çaprazlamada kısa yavru vereceğini düşünmek.
Cevap A.`
},
{
  id: "fen-kl-368",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. İki mor çiçekli bitki çaprazlanmış ve yavruların yaklaşık 3 mor : 1 beyaz çiçekli olduğu görülmüştür. Mor çiçekli yavrulardan biri rastgele seçilmiş ve beyaz çiçekli bir bitkiyle çaprazlanmıştır.
**Buna göre oluşacak yavrulardan birinin beyaz çiçekli olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|6]]", "[[1|4]]", "[[1|3]]", "[[1|2]]"],
  dogru: 2,
  hatalar: ["Beyaz olasılığını dörtte birle çarpma: 1/6, mor yavrunun kendi kendine tozlaşmasından çıkan sonuçtur.",
    "Seçimi dikkate almama: 1/4, iki melezin çaprazlamasındaki beyaz oranıdır.",
    null,
    "Seçilen bitkiyi kesin melez sanma: 1/2 yalnızca bitki Mm ise geçerlidir; mor yavruların üçte biri MM'dir."],
  aciklama: `İki mor ebeveynden beyaz yavru çıktığına göre ebeveynler Mm × Mm'dir. Mor yavrular 1 MM : 2 Mm oranındadır.
Adım 1: Seçilen mor yavrunun MM olma olasılığı [[1|3]], Mm olma olasılığı [[2|3]]'dir.
Adım 2: Bitki MM ise beyaz bitkiyle çaprazlanınca (MM × mm) yavrular hep Mm olur; beyaz yavru olasılığı 0'dır.
Adım 3: Bitki Mm ise (Mm × mm) beyaz yavru olasılığı [[1|2]]'dir.
Adım 4: Toplam olasılık: [[2|3]] × [[1|2]] = [[1|3]].
Sağlama: Seçilen bitkinin MM ya da Mm olması olasılıkla gelir; yalnızca Mm olan durumda beyaz yavru çıkabilir.
Sık yapılan hata: Mor yavruların hepsini melez saymak.
Cevap C.`
},
{
  id: "fen-kl-369",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede şişkin bakla geni B, boğumlu bakla geni b ile gösterilir ve şişkin bakla baskındır. Saf döl şişkin baklalı bir bitki ile boğumlu baklalı bir bitki çaprazlanmış, birinci kuşak bitkiler kendi arasında çaprazlanarak ikinci kuşak elde edilmiştir. İkinci kuşaktaki boğumlu baklalı bitkiler ayıklanmış, kalan bitkilerin her biri kendi kendine tozlaşarak eşit sayıda tohum üretmiştir.
**Buna göre bu son tohumların hangi kesri, genotipi saf döl (BB ya da bb) olan bitki verir?**`,
  gorsel: null,
  secenekler: ["[[1|6]]", "[[1|3]]", "[[1|2]]", "[[2|3]]"],
  dogru: 3,
  hatalar: ["Yalnızca boğumlu tohumları sayma: 1/6, bb olanların kesridir; BB tohumlar da saf dölüdür.",
    "Melezlerin kesrini alma: 1/3, Bb olan tohumların kesridir.",
    "Yalnızca BB olanları sayma: 1/2 yalnız BB tohumların kesridir; bb tohumlar da saf dölüdür.",
    null],
  aciklama: `Saf döl, bir karakter için iki geni de aynı olan (BB ya da bb) bireydir. Birinci kuşak bitkilerin hepsi Bb'dir. Bb × Bb ile ikinci kuşak 1 BB : 2 Bb : 1 bb olur.
Adım 1: Boğumlu (bb) bitkiler ayıklanınca kalan şişkin bitkilerde 1 BB : 2 Bb oranı vardır; BB'nin payı [[1|3]], Bb'nin payı [[2|3]]'tür.
Adım 2: BB bitkiler kendi kendine tozlaşınca tohumların hepsi BB olur. Payı [[1|3]].
Adım 3: Bb bitkiler kendi kendine tozlaşınca tohumları 1 BB : 2 Bb : 1 bb olur. Bu tohumların yarısı saf döldür (BB ve bb). Payı [[2|3]] × [[1|2]] = [[1|3]].
Adım 4: Saf döl tohumların toplamı [[1|3]] + [[1|3]] = [[2|3]] olur.
Sağlama: Melez tohum payı [[2|3]] × [[1|2]] = [[1|3]]; saf döl [[2|3]] + melez [[1|3]] = 1.
Sık yapılan hata: Saf dölü yalnızca baskın homozigot sanmak. Çekinik bb bitkiler de saf dölüdür.
Cevap D.`
},
{
  id: "fen-kl-370",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede yeşil bakla baskın, sarı bakla çekiniktir. Bir ıslahçı, ebeveynleri tabloda verilen dört çaprazlama yapmış ve her birinden belirtilen sayıda tohum elde etmiştir. Tohumların hepsi ekilmiş ve gelişmiştir.
**Buna göre gelişen bitkiler arasında sarı baklalı olanların sayısı yaklaşık kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ebeveynler</th><th>Elde edilen tohum sayısı</th></tr><tr><td>1.</td><td>Saf döl yeşil baklalı × sarı baklalı</td><td>600</td></tr><tr><td>2.</td><td>Melez döl yeşil baklalı × sarı baklalı</td><td>400</td></tr><tr><td>3.</td><td>Melez döl yeşil baklalı × melez döl yeşil baklalı</td><td>800</td></tr><tr><td>4.</td><td>Sarı baklalı × sarı baklalı</td><td>200</td></tr></table>`,
  secenekler: ["600", "500", "400", "200"],
  dogru: 0,
  hatalar: [null,
    "Bütün çaprazlamalara aynı oranı uygulama: toplam 2000 tohumun dörtte biri 500'dür; oysa her çaprazlamanın sarı oranı farklıdır.",
    "Sarı × sarı çaprazlamasını atlama: iki çekinik ebeveynin bütün yavruları sarıdır; bu 200 tohum da sayılmalıdır.",
    "Yalnızca melez × melez çaprazlamasını sayma (800 ÷ 4 = 200): ikinci ve dördüncü çaprazlamalarda da sarı baklalı bitki çıkar."],
  aciklama: `Sarı bakla çekiniktir; sarı baklalı her bitki aa genotiplidir ve yalnızca a verir. Yeşil baklalı bitki AA ya da Aa olabilir.
Adım 1: 1. çaprazlama AA × aa → hepsi Aa; sarı yavru yok (0).
Adım 2: 2. çaprazlama Aa × aa → 1 Aa : 1 aa; sarı oranı yarıdır: 400 ÷ 2 = 200.
Adım 3: 3. çaprazlama Aa × Aa → 1 AA : 2 Aa : 1 aa; sarı oranı dörtte birdir: 800 ÷ 4 = 200.
Adım 4: 4. çaprazlama aa × aa → hepsi aa; hepsi sarıdır: 200.
Adım 5: Toplam sarı baklalı bitki: 0 + 200 + 200 + 200 = 600.
Sağlama: Toplam tohum 600 + 400 + 800 + 200 = 2000'dir; sarı baklalı bitkiler bunun %30'udur.
Sık yapılan hata: Bütün çaprazlamalara tek bir oran uygulamak.
Cevap A.`
},
{
  id: "fen-kl-371",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede çiçeklerin gövdenin yanında olması (K), ucunda olmasına (k) baskındır. Bir araştırmacı, P ve R bitkileri ile gövdenin ucunda çiçek açan V bitkisini kullanarak üç çaprazlama yapmış ve sonuçları tabloda göstermiştir. P ve R bitkilerinin ikisi de çiçeklerini gövdenin yanında açmaktadır.
Buna göre;
I. P bitkisi melez döldür.
II. R bitkisi saf döldür.
III. R bitkisi kendi kendine tozlaştırılırsa yavruların bir kısmı çiçeklerini gövdenin ucunda açar.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Çiçeği gövdenin yanında olan yavru</th><th>Çiçeği gövdenin ucunda olan yavru</th></tr><tr><td>P × V</td><td>81</td><td>79</td></tr><tr><td>R × V</td><td>158</td><td>0</td></tr><tr><td>P × R</td><td>160</td><td>0</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve III", "I ve II"],
  dogru: 3,
  hatalar: ["P'nin melezliğini görmeme: P × V çaprazlamasındaki yaklaşık 1 : 1 oranı P'nin Kk olduğunu gösterir, I de doğrudur.",
    "R'nin saf olduğunu görüp kendi tozlaşmada uç çiçekli yavru bekleme: KK bitki yalnızca K verir, III yanlıştır.",
    "R'yi melez sanma: R × V çaprazlamasında hiç uç çiçekli yavru çıkmaması R'nin KK olduğunu gösterir.",
    null],
  aciklama: `V bitkisi gövdenin ucunda çiçek açtığı için kk'dır ve yavrulara yalnızca k verir.
Adım 1 (I): P × V çaprazlamasında yavruların yaklaşık yarısı uçta çiçekli (kk) çıkmıştır. Yani P, k geni vermiştir; P bitkisi Kk'dır, melezdir. I doğrudur.
Adım 2 (II): R × V çaprazlamasında 158 yavrunun hiçbiri uçta çiçekli değildir. R yalnızca K veriyor; R, KK'dır, saf dölüdür. II doğrudur.
Adım 3 (III): KK olan R kendi kendine tozlaşırsa yavrular KK olur; hepsi gövdenin yanında çiçek açar. III yanlıştır.
Sağlama: P × R, yani Kk × KK çaprazlamasında yavruların hepsi yan çiçekli çıkar; tablodaki 160 : 0 sonucu bununla uyumludur.
Sık yapılan hata: Hepsi yan çıkan bir bitkiyi melez saymak.
Cevap D.`
},
{
  id: "fen-kl-372",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede sarı tohum geni S, yeşil tohum geni s ile gösterilir ve sarı tohum baskındır. Bir öğrenci, saf döl sarı tohumlu bitki ile yeşil tohumlu bitkiyi çaprazlayarak 1. kuşağı elde etmiştir. 1. kuşak bitkileri kendi arasında çaprazlayarak 2. kuşağı oluşturmuştur. Daha sonra 2. kuşaktan yeşil tohumlu bir R bitkisi ile sarı tohumlu rastgele seçilmiş bir T bitkisini çaprazlamıştır.
Buna göre;
I. 2. kuşaktaki yeşil tohumlu bitkiler saf döldür.
II. R × T çaprazlamasında yavruların hepsi sarı tohumlu olur.
III. T bitkisi melez döl ise R × T çaprazlamasında yavruların yarısı yeşil tohumlu olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: ["Melez T'nin sonucunu görmeme: T melez (Ss) ise Ss × ss çaprazlamasında yavruların yarısı yeşildir, III de doğrudur.",
    "Yeşil bitkinin saflığını unutma: yeşil tohum çekiniktir, yeşil bitkiler ss'dir ve saf dölüdür, I de doğrudur.",
    "T'nin saf olduğunu varsayma: sarı bitki rastgele seçildiği için SS ya da Ss olabilir; II yanlıştır.",
    null],
  aciklama: `Saf döl sarı (SS) ile yeşil (ss) çaprazlanınca 1. kuşakta hepsi Ss olur. Ss × Ss çaprazlamasıyla 2. kuşak 1 SS : 2 Ss : 1 ss oranında oluşur.
Adım 1 (I): 2. kuşakta yeşil tohumlu bitkiler ss'dir; iki gen de aynı olduğu için saf dölüdür. I doğrudur.
Adım 2 (II): R, ss'dir. T sarıdır ama SS ya da Ss olabilir. T, Ss ise R × T çaprazlamasında yeşil (ss) yavru da çıkar. Yavruların hepsinin sarı olması kesin değildir. II yanlıştır.
Adım 3 (III): T melez (Ss) ise Ss × ss çaprazlamasında yavrular 1 Ss : 1 ss olur; yarısı yeşildir. III doğrudur.
Sağlama: T bitkisi SS olsaydı yavruların hepsi sarı olurdu; bu iki durum T'nin genotipine bağlıdır.
Sık yapılan hata: Rastgele seçilen sarı bitkiyi saf döl varsaymak.
Cevap D.`
},
{
  id: "fen-kl-373",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 4,
  soru: `Çekinik bir genle aktarılan kalıtsal bir hastalığın, akraba evliliği yapan ailelerde daha sık görüldüğü bir köyde çalışan sağlık görevlisi, nedenini köylülere anlatmaktadır. Görevli, hasta çocuğu olan ailelerin çoğunda anne ve babanın ortak bir büyükbabadan geldiğini belirtmiştir.
Buna göre;
I. Akraba evliliği, çocukta daha önce hiç bulunmayan yeni bir hastalık geni oluşturur.
II. Ortak atadan gelen aynı çekinik geni anne ve babanın birlikte taşıma olasılığı artar.
III. Akraba evliliği yapan ailelerin çocuklarının kromozom sayısı 46'dan farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [null,
    "Kromozom sayısını etkilenmiş sanma: akraba evliliği kromozom sayısını değiştirmez, çocuklar 46 kromozom taşır.",
    "Genin yeni oluştuğunu sanma: akraba evliliği yeni gen üretmez; var olan aynı çekinik genin buluşma olasılığını artırır.",
    "Akrabalığın genleri değiştirdiğini sanma: ne yeni gen oluşur ne de kromozom sayısı değişir."],
  aciklama: `Akrabaların genleri ortak atalardan geldiği için birbirine benzer. Aynı çekinik hastalık genini taşıma olasılıkları, akraba olmayanlara göre yüksektir.
Adım 1 (I): Akraba evliliği yeni bir gen üretmez; yalnızca var olan geni iki ebeveynin birlikte taşıma olasılığını artırır. I yanlıştır.
Adım 2 (II): Ortak atadan gelen çekinik gen, hem anne hem babada bulunabilir. Çocuğun bu genden ikisini alması olasılığı artar. II doğrudur.
Adım 3 (III): Çocuklar yine 46 kromozom taşır; kromozom sayısı akrabalıkla değişmez. III yanlıştır.
Sağlama: Akraba evliliği genleri değiştirmez; yalnızca aynı genin çocukta çift olma ihtimalini yükseltir.
Sık yapılan hata: Akraba evliliğinin kromozom sayısını ya da genleri değiştirdiğini düşünmek.
Cevap A.`
},
{
  id: "fen-kl-374",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Ayşe ile Murat'ın iki çocuğu vardır: kız çocukları Zeynep ve erkek çocukları Mert. Murat'ın annesi, yani Zeynep ve Mert'in babaannesi de ailenin kromozom incelemesinde yer almıştır. Fen dersinde öğrenciler, bu ailedeki eşey kromozomlarının kimden geldiğini tartışmıştır.
Buna göre;
I. Mert'in Y kromozomu babaannesinden gelmiştir.
II. Zeynep'in babasından aldığı X kromozomu, babaannesinden gelmiştir.
III. Zeynep ile Mert'in annelerinden aldıkları X kromozomları birbirinden farklı olabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["II ve III", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 0,
  hatalar: [null,
    "Annenin iki X'ini hesaba katmama: Ayşe XX'tir ve çocuklarına rastgele birini verir; III de doğrudur.",
    "Babanın X'inin kaynağını unutma: Murat X kromozomunu annesinden aldığı için II de doğrudur.",
    "Y'yi babaanneden gelen sanma: kadında Y yoktur, Mert'in Y'si Murat'tan, onunki de Murat'ın babasından gelmiştir."],
  aciklama: `Erkekte XY'nin X'i annesinden, Y'si babasından gelir. Kadında iki X vardır ve her yumurta bunlardan birini taşır.
Adım 1 (I): Mert'in Y'si babasından, yani Murat'tan gelmiştir. Murat'ın Y'si de kendi babasından gelmiştir. Babaanne Y taşımaz. I yanlıştır.
Adım 2 (II): Murat XY'dir ve X'ini annesinden almıştır. Zeynep, babasından bu X'i almıştır; yani babaannesinden gelen X'tir. II doğrudur.
Adım 3 (III): Ayşe'nin iki X'inden hangisinin yumurtaya gireceği rastgeledir. İki çocuğa farklı X'ler geçmiş olabilir. III doğrudur.
Sağlama: Zeynep'in iki X'inden biri babaanneden (babası aracılığıyla), biri anneden gelir.
Sık yapılan hata: Kadından çocuğa Y kromozomu geçebileceğini düşünmek.
Cevap A.`
},
{
  id: "fen-kl-375",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `İnsanda bir erkek bebeğin vücut hücrelerinde 46 kromozom bulunmaktadır. Bebek, kromozomlarının yarısını annesinden, yarısını babasından almıştır.
Buna göre;
I. Annesinden aldığı 23 kromozomun hepsi vücut kromozomudur.
II. Babasından aldığı 23 kromozomdan biri Y kromozomudur.
III. Vücut hücrelerindeki 46 kromozomun 44'ü vücut kromozomudur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "II ve III", "I ve II", "I, II ve III"],
  dogru: 1,
  hatalar: ["Anneden gelen eşey kromozomunu unutma: anneden gelen 23 kromozomun biri X'tir.",
    null,
    "Eşey kromozomlarının varlığını atlama: I yanlıştır, III ise doğrudur; çünkü 46 kromozomun 44'ü vücut kromozomudur.",
    "Annenin eşey kromozomunu yok sayma: anneden gelen kromozomların biri X olduğu için I yanlıştır."],
  aciklama: `İnsanda 46 kromozomun 44'ü vücut kromozomu, 2'si eşey kromozomudur. Anne ve babadan gelen her üreme hücresi 22 vücut kromozomu ve 1 eşey kromozomu taşır.
Adım 1 (I): Anneden gelen 23 kromozomun 22'si vücut kromozomu, 1'i X'tir. Hepsi vücut kromozomu değildir. I yanlıştır.
Adım 2 (II): Bebek erkek (XY) olduğuna göre Y kromozomu babadan gelmiştir. Babadan gelen 23 kromozomdan biri Y'dir. II doğrudur.
Adım 3 (III): Anneden 22 + babadan 22 = 44 vücut kromozomu bulunur; geriye XY eşey kromozomları kalır. III doğrudur.
Sağlama: 44 vücut + 2 eşey kromozomu = 46.
Sık yapılan hata: Üreme hücresindeki 23 kromozomun hepsini vücut kromozomu saymak.
Cevap B.`
}
);
