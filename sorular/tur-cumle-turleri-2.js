// Türkçe — Cümle Türleri: Kademe 3 (LGS Ayarı, tur-ct-301…325) + Havuz (tur-ct-001…015)
// Kazanım: T.8.4.19 Cümle türlerini tanır.
// Kapsam: yüklemin türü, yüklemin yeri, anlam, yapı (basit, birleşik, sıralı, bağlı).
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cumle-turleri"] = window.LGS_BANK["cumle-turleri"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-ct-301",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Mahalle kütüphanesinde gönüllü çalışan öğrenciler okuma salonunu yeniden düzenledi. Bu çalışmayla ilgili dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem de yüklemin yerine göre devrik bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Gönüllüler cam kenarına rahat bir koltuk yerleştirdi.</td></tr><tr><td>II</td><td>Sakindi kütüphanenin cam kenarı.</td></tr><tr><td>III</td><td>Kütüphanenin en sakin köşesi cam kenarıdır.</td></tr><tr><td>IV</td><td>Çocuklar kitapları getirdi hafta sonunda.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "I'in yüklemi 'yerleştirdi' çekimli bir fiildir; cümle fiil cümlesidir. Yüklem sonda olduğu için kurallıdır. İki ölçütü de sağlamıyor.",
    null,
    "III'ün yüklemi 'cam kenarıdır' isim soyludur; cümle isim cümlesidir. Ama yüklem cümlenin sonundadır, cümle kurallıdır; devrik değildir.",
    "IV devriktir ('getirdi' yüklemi sonda değil), ama yüklem çekimli bir fiildir; cümle fiil cümlesidir, isim cümlesi değildir."
  ],
  aciklama: `Yüklemi ad, sıfat, zamir gibi isim soylu bir sözcük olan (çoğunlukla ek fiil almış) cümleye isim cümlesi, yüklemi çekimli fiil olan cümleye fiil cümlesi denir. Yüklemi sonda olan cümle kurallı, sonda olmayan cümle devriktir. İki ölçüt ayrı ayrı denetlenir.
Adım 1: I → yüklem 'yerleştirdi' fiil: fiil cümlesi; yüklem sonda: kurallı. İki ölçüt de tutmuyor.
Adım 2: III → yüklem 'cam kenarıdır' isim soylu: isim cümlesi; ama yüklem sonda: kurallı. Devrik ölçütü tutmuyor.
Adım 3: IV → yüklem 'getirdi' fiil: fiil cümlesi. Yüklemden sonra 'hafta sonunda' gelir: devrik. İsim cümlesi ölçütü tutmuyor.
Adım 4: II → yüklem 'sakindi'dir. 'Sakin' bir sıfattır ve 'idi' ek fiilinin kısaltılmış hâli olan '-di' ekini almıştır; yüklem isim soylu, cümle isim cümlesidir. Yüklemden sonra 'kütüphanenin cam kenarı' gelir: devrik. İki ölçüt de tutuyor.
Sık yapılan hata: Cümlede çok sayıda ad görünce isim cümlesi demek ya da yalnızca bir ölçütü denetlemek. Önce yüklemi bul; sonra türüne ve yerine ayrı ayrı bak.
Cevap B.`
},
{
  id: "tur-ct-302",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gezisine katılan öğrenciler, gezi günlüklerinden seçtikleri dört cümleyi sınıf panosuna astı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yüklemin yerine göre devriktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Gezi sabahı sınıfımız okulun önünde heyecanla toplandı.</td></tr><tr><td>II</td><td>Öğretmenimiz yol boyunca bize ilginç hikâyeler anlattı.</td></tr><tr><td>III</td><td>Müzedeki rehber eski aletleri tek tek tanıttı.</td></tr><tr><td>IV</td><td>Eve döndük akşamüstü kalabalık bir otobüsle.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Cümlenin 'Gezi sabahı' gibi bir zarf tamlayıcısıyla başlamasına bakıp devrik sandın. Devriklik başa değil yüklemin yerine bakılarak anlaşılır; yüklem 'toplandı' en sondadır, cümle kurallıdır.",
    "'Yol boyunca bize' gibi öğeler yüklemden önce gelmiş; yüklem 'anlattı' en sonda. Cümleyi uzun diye devrik sanma, cümle kurallıdır.",
    "'Eski aletleri tek tek' öbeklerinin yüklemin önünde olması cümleyi devrik yapmaz. Yüklem 'tanıttı' sondadır, cümle kurallıdır.",
    null
  ],
  aciklama: `Yüklemi en sonda olan cümle kurallı, yüklemi sonda olmayan cümle devriktir. Devrik cümlede yüklemden sonra bir ya da birkaç öge (örneğin zarf tamlayıcısı) gelir.
Adım 1: I → yüklem 'toplandı', cümlenin en sonunda. Kurallı.
Adım 2: II → yüklem 'anlattı', en sonda. Kurallı.
Adım 3: III → yüklem 'tanıttı', en sonda. Kurallı.
Adım 4: IV → yüklem 'döndük'tür; ardından 'akşamüstü' ve 'kalabalık bir otobüsle' zarf tamlayıcıları gelmiştir. Yüklem sonda olmadığı için cümle devriktir.
Sık yapılan hata: Cümlenin başındaki sözcüğe bakıp karar vermek. Önce yüklemi bul, sonra yüklemden sonra söz kalıp kalmadığına bak.
Cevap D.`
},
{
  id: "tur-ct-303",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Semt pazarında alışveriş yapanların konuşmalarını dinleyen bir öğrenci, duyduğu dört cümleyi defterine yazıp numaralandırdı. Cümleleri anlam bakımından sınıflandıracak.
**Bu cümlelerin hangisi anlamca olumsuzdur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Pazarcı teyze domatesin fiyatını bu hafta artırmadı.</td></tr><tr><td>II</td><td>Bu pazarda bulunmayan sebze yoktur.</td></tr><tr><td>III</td><td>Kasadaki görevli sabırsız müşteriye nazikçe yardım etti.</td></tr><tr><td>IV</td><td>Sebze tezgâhının önünde uzun bir kuyruk oluştu.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "II'de 'bulunmayan' ve 'yoktur' olumsuz görünür; ama iki olumsuzluk birbirini götürür. 'Bulunmayan sebze yok' demek 'her sebze var' demektir. Biçimce olumsuz, anlamca olumludur.",
    "'Sabırsız' sözcüğündeki '-sız' ekine bakıp cümleyi olumsuz sandın. Olumsuzluk yüklemde aranır; 'yardım etti' olumludur, cümle olumludur.",
    "'Oluştu' yüklemi olumlu bir işi bildirir. 'Kuyruk' sözünün uzunluğu cümleyi olumsuz yapmaz."
  ],
  aciklama: `Anlamına göre olumlu cümlede iş gerçekleşir; olumsuz cümlede iş gerçekleşmez ya da gerçekleşmediği bildirilir. Olumsuzluk, yüklemin aldığı '-ma, -me' ekinde ya da 'değil, yok' gibi sözcüklerde aranır; ama iki olumsuzluk üst üste gelirse anlam olumlu olur.
Adım 1: IV → 'oluştu' yüklemi olumlu bir işi bildirir. Olumlu.
Adım 2: III → 'sabırsız' sıfatı '-sız' eki taşır; ama yüklem 'yardım etti' olumludur. Cümle olumludur.
Adım 3: II → 'bulunmayan' ve 'yoktur' sözleri olumsuz biçimlidir; ama cümle 'pazarda her sebze bulunur' anlamına gelir. İki olumsuzluk anlamı olumlu yapar. Cümle anlamca olumludur.
Adım 4: I → yüklem 'artırmadı'; '-ma' eki işin yapılmadığını bildirir ve başka bir olumsuzluk yoktur. Anlamca olumsuz.
Sık yapılan hata: Cümlede '-sız' ekli bir sözcük ya da 'yok' sözü görünce cümleyi olumsuz saymak. Olumluluğa yüklem ve olumsuzlukların toplam etkisi karar verir.
Cevap A.`
},
{
  id: "tur-ct-304",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, gün boyunca duyduğu dört cümleyi defterine yazıp numaralandırdı. Cümlelerin hepsinde soru eki ya da soru sözcüğü var; ama hepsi soru cümlesi değil.
**Bu cümlelerin hangisi, soru eki ya da soru sözcüğü taşımasına rağmen soru cümlesi __değildir__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Defteri okulda sen mi unuttun?</td></tr><tr><td>II</td><td>Hangi sınıf bu hafta nöbetçi?</td></tr><tr><td>III</td><td>Annem kapıyı kimin açtığını merak etti.</td></tr><tr><td>IV</td><td>Yarın akşam bizimle sinemaya gelir misin?</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "I'de 'mi' eki cümleye soru anlamı katmıştır ve cümle bir yanıt beklemektedir; bu bir soru cümlesidir. Soru olmayan cümleyi aramalıydın.",
    "II'de 'hangi' soru sözcüğü gerçekten bir soru sormak için kullanılmıştır; cümle soru cümlesidir.",
    null,
    "IV'te 'misin' soru eki yanıt beklenen bir soru kurmuştur; bu bir soru cümlesidir."
  ],
  aciklama: `Soru cümlesi, yanıt beklenen bir soruyu bildirir; soru eki (mi) ya da soru sözcüğü (kim, ne, hangi, nasıl…) taşır. Ama bu sözcükler başka bir cümlenin içinde yer alıyorsa ve yanıt beklenmiyorsa cümle bildirme cümlesi olur.
Adım 1: I → 'sen mi unuttun?' yanıt bekleyen bir soru. Soru cümlesi.
Adım 2: II → 'Hangi sınıf nöbetçi?' yanıt bekleyen soru. Soru cümlesi.
Adım 3: IV → 'gelir misin?' yanıt bekleyen soru. Soru cümlesi.
Adım 4: III → 'kimin' sözcüğü var; ama annenin merak ettiğini bildiren bir haber veriliyor, okuyandan yanıt beklenmiyor. Cümle bildirme anlamındadır, soru değildir.
Sık yapılan hata: Soru sözcüğünü görünce soru cümlesi demek. Cümlenin sonunda soru işareti ve yanıt beklentisi olup olmadığına da bak.
Cevap C.`
},
{
  id: "tur-ct-305",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Doğa kampına katılan öğrenciler, kampın ilk iki gününü anlatan notlar tuttu. Notlardan alınan bölümde cümleler numaralandırılmıştır.
(1) Çadırı kurduk, ateşi yaktık. (2) Hava kararınca herkes çadırına çekildi. (3) Ertesi sabah erkenden kalktık ve vadiye yürüdük.
Bu bölümdeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle sıralı cümledir.
II. (2). cümle bağlı cümledir.
III. (3). cümle bağlı cümledir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","I ve III","II ve III","I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü de doğru bulmalıydın: (3). cümlede 'kalktık' ve 'yürüdük' bağımsız yüklemleri 've' bağlacıyla bağlanmıştır; cümle bağlıdır. Yalnız I demek eksik kalır.",
    null,
    "II yanlıştır: (2). cümlede 'kararınca' fiilimsisi yan yargı kurar; cümle birleşiktir, bağlı değildir. Ayrıca I de doğrudur.",
    "II yanlıştır: (2). cümle bağlaçla kurulmamıştır; 'kararınca' fiilimsisi nedeniyle birleşiktir. Üç yargıyı birden doğru saymak için II'nin de doğru olması gerekirdi."
  ],
  aciklama: `Sıralı cümlede bağımsız yargılar bağlaçsız, virgülle sıralanır; bağlı cümlede 've, ama, fakat, çünkü' gibi bir bağlaçla bağlanır; birleşik cümlede ise bir yargı fiilimsi, şart eki, 'ki' ya da alıntıyla kurulmuş yan yargıya bağlanır.
Adım 1: I → (1). cümlede 'kurduk' ve 'yaktık' bağımsız iki yüklemdir; aralarında bağlaç yok, virgül var. Sıralı cümle; yargı doğru.
Adım 2: II → (2). cümlede 'kararınca' sözcüğü '-ınca' ekiyle kurulmuş bir fiilimsidir (zarf-fiil) ve yan yargı oluşturur. Cümle birleşiktir, bağlı değildir; yargı yanlış.
Adım 3: III → (3). cümlede 'kalktık' ve 'yürüdük' bağımsız iki yüklem; 've' bağlacıyla bağlanmış, fiilimsi yok. Bağlı cümle; yargı doğru.
Adım 4: Doğru yargılar I ve III.
Sık yapılan hata: İki yüklemi olan her cümleye aynı adı vermek ya da yan yargı kuran fiilimsiyi fark etmemek. Önce fiilimsi ve şart eki var mı diye bak; yoksa bağlaç olup olmadığına bak.
Cevap B.`
},
{
  id: "tur-ct-306",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Nöbetçi öğrenciler, günün sonunda yaptıkları işleri nöbet defterine yazdı. Defterden alınan bölümde cümleler numaralandırılmıştır.
(1) Okula erken gelen öğrenciler bahçede top oynadı. (2) Önce sınıfı havalandırdık, sonra tahtayı sildik, en son sıraları düzenledik. (3) Kitabı aldı ve masaya oturdu.
Bu bölümdeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle birleşik cümledir.
II. (2). cümle sıralı cümledir.
III. (3). cümle sıralı cümledir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız II","I ve III","I ve II"],
  dogru: 3,
  hatalar: [
    "II'yi de doğru bulmalıydın: (2). cümlede üç bağımsız yüklem bağlaçsız, virgülle sıralanmıştır; cümle sıralıdır. Yalnız I demek eksik kalır.",
    "I'i de doğru bulmalıydın: (1). cümledeki 'gelen' sözcüğü bir fiilimsidir (sıfat-fiil); cümle birleşiktir. Yalnız II demek eksik kalır.",
    "III yanlıştır: (3). cümlede iki yargı 've' bağlacıyla bağlanmıştır; cümle bağlıdır, sıralı değildir. Sıralı cümlede yargılar bağlaçsız sıralanır. II ise doğrudur.",
    null
  ],
  aciklama: `Sıralı cümle, birbirinden bağımsız yargıların bağlaç olmadan, virgül ya da noktalı virgülle art arda sıralanmasıyla oluşur. Bağlaçla bağlanan bağımsız yargılar bağlı cümle kurar; fiilimsi içeren cümle birleşiktir.
Adım 1: I → (1). cümlede 'gelen' sözcüğü bir fiilimsidir (sıfat-fiil) ve 'öğrenciler' sözcüğünü niteleyen bir yan yargı kurar. Cümle birleşiktir; yargı doğru.
Adım 2: II → (2). cümlede 'havalandırdık', 'sildik', 'düzenledik' üç bağımsız yüklemdir; aralarında bağlaç yok, virgül var. Sıralı cümle; yargı doğru.
Adım 3: III → (3). cümlede 'aldı' ve 'oturdu' 've' bağlacıyla bağlanmıştır. Bu bağlı cümledir, sıralı değildir; yargı yanlış.
Adım 4: Doğru yargılar I ve II.
Sık yapılan hata: Birden çok yüklemli her cümleye aynı ad vermek. Aradaki bağlaca ve yan yargı olup olmadığına bak.
Cevap D.`
},
{
  id: "tur-ct-307",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, eski fotoğraf albümünü inceledikten sonra o akşamı anlatan dört cümleyi defterine yazdı. Cümlelerin bir kısmı basit ya da sıralı, bir kısmı birleşiktir.
**Bu cümlelerin hangisi yapısına göre 'ki' ile kurulmuş birleşik, anlamına göre olumsuz bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Dolaptaki eski fotoğrafları annem dün akşam inceledi.</td></tr><tr><td>II</td><td>Öyle yorgundum ki hemen uyuyakaldım.</td></tr><tr><td>III</td><td>Öyle yorgundum ki gözlerimi açamadım.</td></tr><tr><td>IV</td><td>Dün akşam eski fotoğraflara baktım, uykum gelmedi.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "I'deki 'Dolaptaki' sözcüğünde bulunan '-ki' bir ilgi ekidir; bağlaç değildir. Cümle tek yüklemli, basit ve olumludur.",
    "II 'ki' ile kurulmuş birleşik cümledir, ama 'uyuyakaldım' yüklemi olumludur; iş gerçekleşmiştir. İki ölçütten yalnızca birini sağlıyor.",
    null,
    "IV anlamca olumsuzdur ('uykum gelmedi'), ama 'ki' yoktur; iki yargı virgülle sıralanmıştır. Cümle sıralıdır, birleşik değildir."
  ],
  aciklama: `'Ki' bağlacı ayrı yazılır ve iki yargıyı birbirine bağlar; bu yapıyla kurulan cümle birleşik cümledir. Sözcüğe bitişik yazılan '-ki' ise ilgi ekidir (evdeki, dünkü) ve cümleyi birleşik yapmaz. Olumsuzluk ise yüklemde ('-ma, -me' eki) aranır. İki ölçüt ayrı ayrı denetlenir.
Adım 1: I → 'Dolaptaki' sözcüğündeki '-ki' bitişik yazılmıştır, ilgi ekidir. Cümle basit ve olumlu; iki ölçüt de tutmuyor.
Adım 2: IV → 'baktım' ve 'gelmedi' virgülle sıralanmış: sıralı. 'ki' yok; birleşik ölçütü tutmuyor.
Adım 3: II → ayrı yazılan 'ki' iki yargıyı bağlıyor: birleşik. Ama 'uyuyakaldım' olumlu. Olumsuz ölçütü tutmuyor.
Adım 4: III → 'ki' ayrı yazılmış ve iki yargıyı bağlıyor: birleşik. Yüklem 'açamadım' olumsuzluk eki taşır; gözler açılamamıştır, iş gerçekleşmemiştir: olumsuz. İki ölçüt de tutuyor.
Sık yapılan hata: Yalnızca bir ölçütü denetlemek. 'Ki' ayrı yazılıyorsa bağlaç, bitişikse ek olabilir; ayrıca yüklemin olumlu mu olumsuz mu olduğuna ayrıca bak.
Cevap C.`
},
{
  id: "tur-ct-308",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kargo şirketinde çalışan kuryenin gün sonunda tuttuğu notlardan dört cümle aşağıda numaralandırılmıştır. Cümleler benzer sözcüklerle kurulsa da yapıları ve anlamları birbirinden farklıdır.
**Bu cümlelerin hangisi yapısına göre birleşik, anlamına göre olumsuz bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kurye paketi teslim edince dinlenmedi.</td></tr><tr><td>II</td><td>Kurye paketi teslim etmedi, dinlenmedi.</td></tr><tr><td>III</td><td>Kurye paketi teslim edince yola çıktı.</td></tr><tr><td>IV</td><td>Kurye paketi teslim etmedi.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "II anlamca olumsuzdur ('etmedi', 'dinlenmedi'), ama fiilimsi yoktur; iki bağımsız yüklem virgülle sıralanmıştır. Cümle sıralıdır, birleşik değildir.",
    "III birleşiktir ('edince' fiilimsisi), ama 'çıktı' yüklemi olumludur; iş gerçekleşmiştir. Cümle anlamca olumludur.",
    "IV anlamca olumsuzdur ('etmedi'), ama tek yüklemli ve fiilimsisizdir; cümle basittir, birleşik değildir."
  ],
  aciklama: `Fiilimsi, fiil kökünden türeyen ama çekimli fiil gibi iş bildirmeyen sözcüktür (-ma/-me, -an/-en, -ıp/-ip, -ınca/-ince, -madan/-meden…). Fiilimsi içeren cümle yan yargı taşır ve birleşiktir. Anlam bakımından olumsuzluk ise yüklemdeki '-ma, -me' ekinde aranır. İki ölçüt ayrı ayrı denetlenir.
Adım 1: IV → tek yüklem ('etmedi'), fiilimsi yok: basit. Olumsuz, ama birleşik değil.
Adım 2: II → 'etmedi' ve 'dinlenmedi' bağımsız iki yüklem, virgülle sıralı: sıralı. Olumsuz, ama birleşik değil.
Adım 3: III → 'edince' fiilimsisi (zarf-fiil) yan yargı kurar: birleşik. Ama yüklem 'çıktı' olumlu; olumsuz değil.
Adım 4: I → 'edince' fiilimsisi: birleşik. Yüklem 'dinlenmedi' '-me' eki taşır, iş gerçekleşmemiştir: olumsuz. İki ölçüt de tutuyor.
Sağlama: Yalnızca I'de hem fiilimsi hem olumsuz yüklem birlikte bulunur.
Cevap A.`
},
{
  id: "tur-ct-309",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Sınıf panosuna asılan karışık notlardan dört cümle yapılarına göre incelenmek üzere numaralandırılmıştır. Notların yalnızca birinde tek bir yargı vardır.
**Bu cümlelerin hangisi birleşik cümle __değildir__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bu yıl yağmur yağarsa barajlar dolar.</td></tr><tr><td>II</td><td>Sınavdan çıkınca arkadaşlarımla buluştum.</td></tr><tr><td>III</td><td>Öğretmen ödevin yarın teslim edileceğini söyledi.</td></tr><tr><td>IV</td><td>Barajdaki su seviyesi ocak ayına göre arttı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "I'de 'yağarsa' şart ekiyle kurulmuş bir yan yargıdır; cümle birleşiktir. Birleşik olmayan cümleyi aramalıydın.",
    "II'de 'çıkınca' bir fiilimsidir ve yan yargı oluşturur; cümle birleşiktir.",
    "III'te 'teslim edileceğini' fiilimsi (sıfat-fiil) ile kurulmuş bir yan yargıdır; cümle birleşiktir.",
    null
  ],
  aciklama: `Tek yargıdan oluşan, fiilimsi, şart eki, 'ki' ya da alıntı barındırmayan cümleye basit cümle denir. Basit cümle birleşik olmayan cümledir.
Adım 1: I → 'yağarsa' şart ekli yan yargı. Birleşik.
Adım 2: II → 'çıkınca' zarf-fiil. Birleşik.
Adım 3: III → 'edileceğini' fiilimsi (sıfat-fiil), 'söyledi' yüklemine bağlı. Birleşik.
Adım 4: IV → 'Barajdaki' sözcüğündeki '-ki' bir ilgi ekidir, fiilimsi değildir. Tek yüklem ('arttı') var; cümle basittir, yani birleşik değildir.
Sık yapılan hata: Cümlede 'ki' ya da '-ken' benzeri bir parça görünce birleşik demek. '-deki, -ki' ekleri yargı kurmaz.
Cevap D.`
},
{
  id: "tur-ct-310",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hava durumu uzmanı, karların erimesini dört farklı cümleyle anlattı. Cümlelerde bazen bağlaç bazen ek kullanıldı, bazen de hiçbiri kullanılmadı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yapısına göre bağlı cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Hava ısındı, karlar eridi.</td></tr><tr><td>II</td><td>Hava ısındı ama karlar erimedi.</td></tr><tr><td>III</td><td>Hava ısınınca karlar eridi.</td></tr><tr><td>IV</td><td>Hava ısınsa karlar erirdi.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "I'de iki bağımsız yüklem bağlaçsız, virgülle sıralanmıştır; bu bir sıralı cümledir.",
    null,
    "III'te 'ısınınca' bir fiilimsidir; cümle birleşiktir, bağlı değildir.",
    "IV'te 'ısınsa' şart ekiyle kurulmuş yan yargıdır; cümle birleşiktir."
  ],
  aciklama: `Bağlı cümle, birbirinden bağımsız yargıların 've, ama, fakat, ancak, çünkü, oysa, ya da' gibi bağlaçlarla bağlanmasıyla oluşur.
Adım 1: I → 'ısındı' ve 'eridi' bağlaç olmadan, virgülle sıralanmış. Sıralı.
Adım 2: III → 'ısınınca' fiilimsisi yan yargı kurar. Birleşik.
Adım 3: IV → 'ısınsa' şart ekli yan yargı. Birleşik.
Adım 4: II → 'ısındı' ve 'erimedi' bağımsız iki yüklemdir ve 'ama' bağlacıyla bağlanmıştır. Bağlı cümle.
Sık yapılan hata: Bağlacı fark etmeyip virgüllü cümleyi bağlı sanmak. Bağlaç varsa bağlı, yoksa sıralıdır.
Cevap B.`
},
{
  id: "tur-ct-311",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, yaz tatilinde ziyaret ettiği adayı anlatan kısa bir yazı hazırladı. Yazıdan alınan aşağıdaki bölümde cümleler numaralandırılmıştır.
(1) Yıllarca ışık vermedi adanın ucundaki eski fener. (2) Geçen yaz gönüllü bir grup onu onarmaya karar verdi. (3) Ustalar camları değiştirdi, işçiler merdivenleri yeniledi. (4) Şimdi gemiler gece yolunu fenerin ışığıyla buluyor. (5) Ben de her akşam kıyıya inip ışığı izliyorum.
**Bu bölümdeki numaralı cümlelerden hangisi yüklemin yerine göre devriktir?**`,
  gorsel: null,
  secenekler: ["(1)","(2)","(4)","(5)"],
  dogru: 0,
  hatalar: [
    null,
    "(2). cümle 'Geçen yaz' ile başlıyor, ama yüklem 'karar verdi' en sonda; cümle kurallıdır.",
    "(4). cümlede 'Şimdi' ile başlayan sözler yüklemden önce gelmiştir; yüklem 'buluyor' sondadır. Cümle kurallıdır.",
    "(5). cümlede yüklem 'izliyorum' en sondadır; cümle kurallıdır."
  ],
  aciklama: `Devrik cümlede yüklem en sonda değildir; yüklemden sonra bir ya da daha fazla öge gelir. Kurallı cümlede ise yüklem cümlenin sonundadır.
Adım 1: (2) → yüklem 'karar verdi' sonda. Kurallı.
Adım 2: (4) → yüklem 'buluyor' sonda. Kurallı.
Adım 3: (5) → yüklem 'izliyorum' sonda. Kurallı.
Adım 4: (1) → yüklem 'vermedi'dir; ardından 'adanın ucundaki eski fener' (özne) gelmiştir. Yüklem sonda olmadığı için cümle devriktir.
Sık yapılan hata: Özneyi cümlenin başında aramak. Özne yüklemden sonra gelebilir; önce yüklemi bul, sonra yüklemden sonra söz var mı diye bak.
Cevap A.`
},
{
  id: "tur-ct-312",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir arkadaş grubu, hafta sonu planlarını konuşurken söylediği cümleleri bir ödev için not aldı. Notlardan dört cümle aşağıda numaralandırılmıştır. Cümlelerin bir kısmı olumsuz, bir kısmı isim cümlesidir.
**Bu cümlelerin hangisi yüklemi isim soylu olan olumsuz cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Dün akşam çok güzel bir film izlemedik.</td></tr><tr><td>II</td><td>Yeni müdürümüz çok anlayışlı bir insandır.</td></tr><tr><td>III</td><td>Bu sınav ilk bakışta göründüğü gibi zor değil.</td></tr><tr><td>IV</td><td>Bu yolda artık hiç araba geçmiyor.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "I olumsuzdur ama yüklem 'izlemedik' bir fiildir; cümle fiil cümlesidir. İsim soylu yüklem arıyordun.",
    "II'nin yüklemi isim soyludur ('insandır') ama cümle olumludur.",
    null,
    "IV olumsuzdur ama yüklem 'geçmiyor' bir fiildir; cümle fiil cümlesidir."
  ],
  aciklama: `Yüklemi isim soylu olan cümle isim cümlesidir. 'Değil' sözcüğü bir isim cümlesini olumsuz yapar; 'değil' ile kurulan cümle olumsuz isim cümlesidir.
Adım 1: Önce olumsuz olanları ayır: I ('izlemedik'), III ('zor değil') ve IV ('geçmiyor') olumsuzdur; II olumludur.
Adım 2: Olumsuz olanların yüklemine bak: 'izlemedik' ve 'geçmiyor' fiildir.
Adım 3: III'ün yüklemi 'zor değil'dir. 'Zor' bir sıfattır, 'değil' ise olumsuzluk bildirir. Yüklem isim soyludur.
Sık yapılan hata: Olumsuz cümleye bakıp yüklemi fiil saymak. '-ma, -me' eki fiilleri olumsuz yapar; 'değil' ise isimleri olumsuz yapar.
Cevap C.`
},
{
  id: "tur-ct-313",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir arkadaş grubunun gün boyu yaptığı konuşmalardan dört cümle aşağıda numaralandırılmıştır. Bu cümlelerde olumsuzluk, biçim ve anlam bakımından her zaman aynı yönde değildir.
**Bu cümlelerin hangisi biçimce olumsuz olduğu hâlde anlamca olumludur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bu yaz tatile gitmedik.</td></tr><tr><td>II</td><td>Bu güzel teklifi kabul etmeyecek değilim.</td></tr><tr><td>III</td><td>Bu akşam maça gidemeyeceğiz.</td></tr><tr><td>IV</td><td>Bahçeye çıkan çocuklar kar topu oynadı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "I biçimce de anlamca da olumsuzdur: tatile gitme işi gerçekleşmemiştir.",
    null,
    "III biçimce olumsuzdur ve anlamı da olumsuzdur: maça gitme işi gerçekleşmeyecektir.",
    "IV biçimce de anlamca da olumludur: çocukların oynadığı bildirilir."
  ],
  aciklama: `Bir cümle, yüklemindeki olumsuzluk ekiyle biçimce olumsuz görünür; ama anlamı bunun tersini söylüyorsa anlamca olumlu olur. İki olumsuzluğun üst üste gelmesi anlamı olumlu yapabilir.
Adım 1: I → 'gitmedik' olumsuz biçimli; anlamı da olumsuz, tatile gidilmemiştir. Biçimce ve anlamca olumsuz.
Adım 2: III → 'gidemeyeceğiz' olumsuz biçimli; anlamı da olumsuz.
Adım 3: IV → olumlu biçimli ve olumlu anlamlı.
Adım 4: II → 'kabul etmeyecek değilim' iki olumsuzluk taşır ('-me' eki ve 'değil'); ama söylenmek istenen 'teklifi kabul edeceğim' demektir. Biçimce olumsuz, anlamca olumlu.
Sağlama: Yalnızca II'de cümle, söylediğinin tersini anlatıyor.
Cevap B.`
},
{
  id: "tur-ct-314",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, ailesinin evinin bahçesindeki yaşlı ceviz ağacı hakkında küçük bir yazı hazırladı. Yazıda geçen dört cümle aşağıda numaralandırılmıştır. Cümlelerin bir kısmında yüklem fiildir.
**Bu cümlelerin hangisi isim cümlesidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bahçedeki koca ceviz ağacı tam yüz yaşındadır.</td></tr><tr><td>II</td><td>Çocuklar ağacın gölgesinde saatlerce oyun oynuyor.</td></tr><tr><td>III</td><td>Babaannem sonbaharda dallardan cevizleri düşürür.</td></tr><tr><td>IV</td><td>Komşular ağacın altında çay içmeyi seviyor.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "II'de yüklem 'oynuyor' çekimli bir fiildir. 'Gölgesinde' gibi yer bildiren sözlerin bulunması cümleyi isim cümlesi yapmaz.",
    "III'ün yüklemi 'düşürür' fiildir; cümle fiil cümlesidir.",
    "IV'ün yüklemi 'seviyor' fiildir; 'çay içmeyi' sözü fiilimsi içerse de yüklem fiildir."
  ],
  aciklama: `İsim cümlesinin yüklemi ad, sıfat ya da zamir gibi isim soylu bir sözcük ya da söz öbeğidir (çoğunlukla ek fiil almıştır). Fiil cümlesinin yüklemi çekimli fiildir.
Adım 1: II → 'oynuyor' çekimli fiil. Fiil cümlesi.
Adım 2: III → 'düşürür' çekimli fiil. Fiil cümlesi.
Adım 3: IV → 'seviyor' çekimli fiil; 'içmeyi' fiilimsi olsa da yüklem değildir. Fiil cümlesi.
Adım 4: I → yüklem 'yüz yaşındadır'dır. 'Yüz yaşında' isim soylu bir sözdür ve '-dır' ek fiil ekini almıştır; çekimli fiil yoktur. Cümle isim cümlesidir.
Sık yapılan hata: Cümlede yer ve zaman bildiren çok sayıda söz görünce türü yanlış belirlemek. Yer, zaman ve araç bildiren sözler yüklem değildir; önce yüklemi bul, türünü yüklem belirler.
Cevap A.`
},
{
  id: "tur-ct-315",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, okul müsameresinin sahne gerisinden notlar aldı ve cümlelerini numaralandırdı.
(1) Sahne ışıkları yanınca salon sessizliğe gömüldü. (2) Oyuncular rollerini bir kez daha okudu ve yerlerine geçti. (3) Perde açıldı, alkışlar yükseldi. (4) Işık teknisyeni düğmeye bastı. (5) Sahneye çıkan çocuk derin bir nefes aldı.
**Bu metindeki hangi iki cümle yapılarına göre aynı türdedir?**`,
  gorsel: null,
  secenekler: ["(2) ve (3)","(3) ve (4)","(2) ve (5)","(1) ve (5)"],
  dogru: 3,
  hatalar: [
    "(2) 've' ile bağlandığı için bağlı, (3) virgülle sıralandığı için sıralı cümledir. İkisinde de iki yüklem olması aynı tür olduklarını göstermez.",
    "(3) sıralı, (4) ise tek yüklemli basit cümledir; türleri farklıdır.",
    "(2) bağlı cümledir; (5) ise 'çıkan' fiilimsisi nedeniyle birleşiktir. Türleri farklıdır.",
    null
  ],
  aciklama: `Her cümleyi yapısına göre ayrı ayrı incele, sonra aynı türde olan çifti bul.
Adım 1: (1) → 'yanınca' fiilimsi içerir. Birleşik.
Adım 2: (2) → 'okudu' ve 'geçti' yüklemleri 've' ile bağlanmış. Bağlı.
Adım 3: (3) → 'açıldı' ve 'yükseldi' virgülle sıralanmış. Sıralı.
Adım 4: (4) → tek yüklem, fiilimsi yok. Basit.
Adım 5: (5) → 'çıkan' fiilimsisi (sıfat-fiil) yan yargı kurar. Birleşik.
Adım 6: Birleşik olanlar (1) ve (5)'tir; diğer tüm cümlelerin türü birbirinden farklıdır.
Sık yapılan hata: İki yüklemli cümleleri birbirine benzetmek. Bağlaçla bağlanan bağlıdır, virgüllü olan sıralıdır; ikisi aynı değildir.
Cevap D.`
},
{
  id: "tur-ct-316",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Türkçe öğretmeni, cümle türlerini pekiştirmek için çamaşırların toplanmasını anlatan aynı olayı dört farklı cümleyle yazıp tahtaya numaralandırarak astı. Cümleler farklı sözcük dizilişlerine ve farklı yapılara sahiptir. Öğrencilerden bu cümleleri hem yapılarına hem de yüklemin yerine göre incelemeleri istendi.
**Bu cümlelerin hangisi yapısına göre birleşik, yüklemin yerine göre devrik bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yağmur başlamadan annem çamaşırları topladı.</td></tr><tr><td>II</td><td>Topladı çamaşırları annem yağmurdan önce.</td></tr><tr><td>III</td><td>Yağmur başlamadan toplamıştı çamaşırları annem.</td></tr><tr><td>IV</td><td>Annem çamaşırları topladı ve içeri taşıdı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "I birleşiktir ('başlamadan' fiilimsisi), ama yüklem 'topladı' en sondadır; cümle kurallıdır. İki ölçütten yalnızca birini sağlıyor.",
    "II devriktir, ama tek yüklemlidir ve fiilimsi yoktur; cümle basittir. İki ölçütten yalnızca birini sağlıyor.",
    null,
    "IV bağlı cümledir ('ve' bağlacı) ve yüklem en sondadır; cümle kurallıdır. İki ölçütü de sağlamıyor."
  ],
  aciklama: `Bir cümleyi iki ayrı ölçüte göre sınıflandırırken her ölçüt ayrı ayrı denetlenir. Yapıya göre: basit, birleşik (fiilimsi, şart, ki, alıntı), sıralı, bağlı. Yüklemin yerine göre: kurallı (yüklem sonda), devrik (yüklem sonda değil).
Adım 1: I → 'başlamadan' fiilimsi, yan yargı kurar: birleşik. Yüklem 'topladı' sonda: kurallı. Ölçütlerden biri tutmuyor.
Adım 2: II → fiilimsi yok, tek yüklem: basit. Yüklem 'topladı' sonda değil: devrik. Birleşik ölçütü tutmuyor.
Adım 3: IV → 've' bağlaçlı: bağlı. Yüklem sonda: kurallı. İki ölçüt de tutmuyor.
Adım 4: III → 'başlamadan' fiilimsisi: birleşik. Yüklem 'toplamıştı' ardından 'çamaşırları annem' geliyor: devrik. İki ölçüt de tutuyor.
Sağlama: III'te 'toplamıştı' yüklemi sonda değildir ve cümlede fiilimsi vardır.
Cevap C.`
},
{
  id: "tur-ct-317",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun ilk günü yaşananları anlatan bir yazıdan dört cümle alınarak aşağıda numaralandırılmıştır. Cümlelerin bazılarında yer tamlayıcısı (dolaylı tümleç) bulunmakta, bazılarında ise yapı bakımından birleşik cümle özelliği görülmektedir. Öğrencilerden iki özelliği birlikte taşıyan cümleyi bulmaları isteniyor.
**Bu cümlelerin hangisi hem yer tamlayıcısı (dolaylı tümleç) bulunduran hem de birleşik olan bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Zil çalınca herkes sustu.</td></tr><tr><td>II</td><td>Çocuklar parkta salıncakta sallandı.</td></tr><tr><td>III</td><td>Çocuklar bahçeye çıktı ve top oynadı.</td></tr><tr><td>IV</td><td>Öğretmen sınıfa girince öğrenciler ayağa kalktı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "I birleşiktir ('çalınca'), ama yüklemi 'sustu' olan ana yargıda yer tamlayıcısı yoktur; iki özelliği birlikte taşımıyor.",
    "II'de 'parkta' ve 'salıncakta' yer tamlayıcılarıdır, ama cümle tek yüklemlidir ve fiilimsi yoktur; basittir.",
    "III'te 'bahçeye' yer tamlayıcısıdır, ama cümle 've' ile bağlı iki yargıdan oluşur; birleşik değil bağlıdır.",
    null
  ],
  aciklama: `Yer tamlayıcısı, yükleme 'nereye, nerede, nereden' sorularıyla bulunan ve '-e, -de, -den' eki alan ögedir. Birleşik cümle ise fiilimsi, şart eki, 'ki' ya da alıntıyla kurulur.
Adım 1: I → 'çalınca' fiilimsisi var: birleşik. Yer tamlayıcısı yok. İki özellik birlikte değil.
Adım 2: II → 'parkta, salıncakta' yer tamlayıcısı var; ama cümle tek yüklemli, basit. İki özellik birlikte değil.
Adım 3: III → 'bahçeye' yer tamlayıcısı var; ama cümle 've' ile bağlı. Birleşik değil.
Adım 4: IV → 'girince' fiilimsisi yan yargı kurar: birleşik. 'Sınıfa girince' 'Nereye girince?' sorusunun yanıtıdır; ayrıca 'ayağa' da yer tamlayıcısıdır. İki özellik birlikte.
Sık yapılan hata: Yalnızca bir özelliği arayıp ikincisini denetlememek. Önce ikisini ayrı ayrı sorgula.
Cevap D.`
},
{
  id: "tur-ct-318",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, yaz tatilinde dedesinin köyünde geçirdiği günleri anlatan bir yazı yazdı. Yazıdan alınan bölümde cümleler numaralandırılmıştır.
(1) Dedemin köyüne her yaz otobüsle giderdik. (2) Sabahları horozlar öterdi, biz yataklarımızdan fırlardık. (3) Öğleden sonra ırmağa inip taşlarla köprü kurardık. (4) Güneş batınca evlere dönerdik.
Bu bölümdeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle birleşik cümledir.
II. (2). cümle sıralı cümledir.
III. (3). cümle fiil cümlesi olup birleşiktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","II ve III","I ve III","I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü de doğru bulmalıydın: (3). cümlenin yüklemi 'kurardık' fiildir ve 'inip' fiilimsisi cümleyi birleşik yapar. Yalnız II demek eksik kalır.",
    null,
    "I yanlıştır: (1). cümlede tek yüklem ('giderdik') var ve fiilimsi, şart, ki ya da alıntı yoktur; cümle basittir. II ise doğrudur.",
    "I yanlıştır; (1). cümle birleşik değil basittir. Üç yargıyı birden doğru saymak için I'in de doğru olması gerekirdi."
  ],
  aciklama: `Basit cümle tek yargıdan oluşur; birleşik cümlede fiilimsi, şart eki, 'ki' ya da alıntıyla kurulmuş bir yan yargı bulunur; sıralı cümlede bağımsız yargılar bağlaçsız, virgülle sıralanır.
Adım 1: I → (1). cümlede tek yüklem ('giderdik') var, fiilimsi yok. Cümle basittir; yargı yanlış.
Adım 2: II → (2). cümlede 'öterdi' ve 'fırlardık' bağımsız iki yüklem; aralarında bağlaç yok, virgül var. Cümle sıralıdır; yargı doğru.
Adım 3: III → (3). cümlede 'inip' fiilimsisi (zarf-fiil) var, yüklem 'kurardık' çekimli fiil. Cümle hem fiil cümlesi hem birleşiktir; yargı doğru.
Adım 4: Doğru yargılar II ve III.
Sık yapılan hata: 'Her yaz otobüsle' gibi zaman ve araç bildiren sözlere bakıp cümleyi birleşik sanmak. Yan yargı kuran bir yapı yoksa cümle basittir.
Cevap B.`
},
{
  id: "tur-ct-319",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye çalışanı, kış hazırlıklarıyla ilgili hazırladığı raporda yolların durumunu dört cümleyle özetledi. Cümleler aşağıda numaralandırılmıştır. Cümlelerin bir kısmında yüklem fiil, bir kısmında isim soyludur; yapıları da birbirinden farklıdır.
**Bu cümlelerin hangisi yüklemi isim soylu olan birleşik cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yağmur yağınca yollar kayganlaştı.</td></tr><tr><td>II</td><td>Yollar kaygandı, sokaklar ıssızdı.</td></tr><tr><td>III</td><td>Yağmur yağarsa yollar kaygandır.</td></tr><tr><td>IV</td><td>Yağmur dinince yolları temizledik.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "I birleşiktir ('yağınca'), ama yüklem 'kayganlaştı' bir fiildir; isim cümlesi değildir.",
    "II'nin yüklemleri isim soyludur ('kaygandı', 'ıssızdı'), ama iki bağımsız yargı virgülle sıralanmıştır; cümle sıralıdır, birleşik değildir.",
    null,
    "IV birleşiktir ('dinince'), ama yüklem 'temizledik' bir fiildir; isim cümlesi değildir."
  ],
  aciklama: `İki ölçüt vardır: yüklem isim soylu mu (isim cümlesi), yapı birleşik mi? İkisi de sağlanmalıdır.
Adım 1: I → 'yağınca' ile birleşik; yüklem 'kayganlaştı' fiil. İsim cümlesi değil.
Adım 2: IV → 'dinince' ile birleşik; yüklem 'temizledik' fiil. İsim cümlesi değil.
Adım 3: II → yüklemler 'kaygandı' ve 'ıssızdı' isim soylu; ama yargılar bağımsız ve virgülle sıralanmış: sıralı. Birleşik değil.
Adım 4: III → 'yağarsa' şart ekiyle yan yargı kurar: birleşik. Yüklem 'kaygandır' isim soylu ('kaygan' sıfat + ek fiil). İki ölçüt de sağlanıyor.
Sık yapılan hata: Yüklemin türünü ve cümlenin yapısını karıştırmak. Biri yüklem sözcüğünün türüne, diğeri yargıların bağlanış biçimine bakar.
Cevap C.`
},
{
  id: "tur-ct-320",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sinema kulübünün üyeleri, kulüp günlüğüne yazdıkları cümleleri iki ayrı ölçüte göre sınıflandırıyor: anlamına göre (olumlu, olumsuz, soru) ve yüklemin yerine göre (kurallı, devrik). Günlükten alınan dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesi hem de devrik cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Geldin mi dün akşam sinemaya?</td></tr><tr><td>II</td><td>Dün akşam sinemaya kimlerle gittin?</td></tr><tr><td>III</td><td>Gitmedi sinemaya dün akşam kimse.</td></tr><tr><td>IV</td><td>Sinemadan çıkınca doğruca eve döndük.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "II soru cümlesidir ('kimlerle'), ama yüklem 'gittin' en sondadır; cümle kurallıdır, devrik değildir.",
    "III devriktir (yüklem 'gitmedi' sonda değil), ama anlamca olumsuzdur; soru cümlesi değildir.",
    "IV ne soru cümlesidir ne de devriktir; yüklem 'döndük' en sondadır ve cümle bildirir."
  ],
  aciklama: `Soru cümlesi yanıt bekler; devrik cümlede yüklem sonda değildir. Aranan cümlede iki özellik birlikte bulunmalı.
Adım 1: II → 'kimlerle gittin' soru; yüklem 'gittin' sonda. Kurallı. Devrik değil.
Adım 2: III → yüklem 'gitmedi' sonda değil: devrik. Ama bildirme (olumsuz) cümlesi, soru değil.
Adım 3: IV → yüklem 'döndük' sonda: kurallı; soru değil, bildirme.
Adım 4: I → 'Geldin mi' soru eki taşıyor ve yanıt bekliyor: soru. Yüklem 'geldin' ardından 'dün akşam sinemaya' sözleri geliyor: devrik. İki özellik de var.
Sık yapılan hata: Soru cümlelerini hep yüklemi sonda sanmak. Soru eki yüklemin hemen arkasına gelir ama cümlenin başka ögeleri yüklemden sonra gelebilir.
Cevap A.`
},
{
  id: "tur-ct-321",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, bir telefon konuşmasını anlatırken aynı olayı dört farklı biçimde yazdı. Cümleler anlam ve yapı bakımından birbirinden ayrılıyor. Öğretmeni, öğrenciden bu cümleleri anlamına göre ve yapısına göre incelemesini istedi.
**Bu cümlelerin hangisi anlamca olumsuz, yapıca sıralı bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Telefon çaldı, hemen açtım.</td></tr><tr><td>II</td><td>Telefon çalmadı, mesaj gelmedi.</td></tr><tr><td>III</td><td>Telefon çalmadan mesajı gönderdi.</td></tr><tr><td>IV</td><td>Telefon çaldı ama açmadım.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "I sıralıdır ama olumlu bir cümledir: 'çaldı' ve 'açtım' işlerin gerçekleştiğini bildirir.",
    null,
    "III olumsuz biçimli bir fiilimsi ('çalmadan') taşır; cümle birleşiktir, sıralı değildir ve yüklemi olumludur.",
    "IV bağlı cümledir ('ama' bağlacı); sıralı değildir."
  ],
  aciklama: `Sıralı cümle bağlaçsızdır; olumsuz cümlenin yüklemleri '-ma, -me' ya da 'değil' ile olumsuzlanır. İki ölçüt birlikte aranır.
Adım 1: III → 'çalmadan' fiilimsisi var: birleşik. Yüklem 'gönderdi' olumlu. İki ölçüt de tutmuyor.
Adım 2: IV → 'ama' bağlacı var: bağlı. Sıralı değil.
Adım 3: I → iki yüklem virgülle sıralanmış: sıralı. Yüklemler 'çaldı' ve 'açtım' olumlu. Olumsuz değil.
Adım 4: II → 'çalmadı' ve 'gelmedi' bağımsız iki yüklem, virgülle sıralanmış: sıralı. İkisi de '-ma/-me' eklidir: olumsuz.
Sık yapılan hata: Cümlenin yapısına bakıp anlamı denetlememek. Önce yapıyı, sonra yüklemin olumlu mu olumsuz mu olduğunu ayrı ayrı sorgula.
Cevap B.`
},
{
  id: "tur-ct-322",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun robotik kulübü, yıl sonunda kulübün gazetesinde bir yazı yayımladı. Yazıdan alınan bölümde cümleler numaralandırılmıştır.
(1) Kulübün kurulduğu ilk günden beri her cumartesi toplanırız. (2) Kulüp başkanımız Elif'tir. (3) Geçen ay yarışmaya katıldık. (4) Birinci olamadık ama çok şey öğrendik. (5) Seneye de katılacağız yarışmaya.
Bu bölümdeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle basit cümledir.
II. (2). cümle isim cümlesidir.
III. (5). cümle yüklemin yerine göre kurallıdır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","I ve III","II ve III","Yalnız II"],
  dogru: 3,
  hatalar: [
    "I yanlıştır: (1). cümlede 'kurulduğu' bir fiilimsidir (sıfat-fiil); cümle birleşiktir, basit değildir.",
    "I ve III yanlıştır: (1). cümle 'kurulduğu' fiilimsisiyle birleşiktir; (5). cümlede yüklem 'katılacağız' sonda değildir, cümle devriktir.",
    "II doğrudur, ama III yanlıştır: (5). cümlede yüklem 'katılacağız' ardından 'yarışmaya' gelir; cümle devriktir.",
    null
  ],
  aciklama: `Basit cümle tek yargılıdır ve fiilimsi içermez; isim cümlesinin yüklemi isim soyludur; kurallı cümlede yüklem sondadır.
Adım 1: I → (1). cümlede 'kurulduğu' bir sıfat-fiildir ve 'gün' sözcüğünü niteler; cümle birleşiktir. Yargı yanlış.
Adım 2: II → (2). cümlenin yüklemi 'Elif'tir'. 'Elif' özel addır ve '-tir' ek fiil ekini almıştır. Yüklem isim soylu, cümle isim cümlesi. Yargı doğru.
Adım 3: III → (5). cümlenin yüklemi 'katılacağız'dır; ondan sonra 'yarışmaya' yer tamlayıcısı gelmiştir. Yüklem sonda değil, cümle devrik. Yargı yanlış.
Adım 4: Doğru olan yalnız II'dir.
Sık yapılan hata: Cümlenin kısa görünmesine bakıp basit saymak. Fiilimsi olup olmadığına bakarak karar ver.
Cevap D.`
},
{
  id: "tur-ct-323",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, ablasıyla yaptığı konuşmayı farklı dizilişlerle dört cümle hâlinde yazdı. Cümlelerden bazıları tırnak içinde aktarılan bir söz içeriyor; bazıları ise yüklemin yeri bakımından birbirinden ayrılıyor. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi tırnak içinde aktarılan bir söz bulunduran (alıntı) birleşik cümle olup aynı zamanda devrik bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>“Bu akşam erken döneceğim.” dedi ablam.</td></tr><tr><td>II</td><td>Ablam “Bu akşam erken döneceğim.” dedi.</td></tr><tr><td>III</td><td>Erken döndü ablam akşam.</td></tr><tr><td>IV</td><td>Ablam erken dönünce yemeği hazırladı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "II alıntılı birleşik cümledir, ama yüklem 'dedi' en sondadır; cümle kurallıdır.",
    "III devriktir ('döndü' sonda değil), ama tek yargılıdır ve alıntı yoktur; basit cümledir.",
    "IV birleşiktir ('dönünce'), ama alıntı içermez ve yüklem 'hazırladı' sondadır; kurallıdır."
  ],
  aciklama: `Tırnak içinde aktarılan bir söz ile kurulan cümle, iç içe (alıntı) birleşik cümledir. Devrik cümlede yüklem sonda değildir.
Adım 1: III → alıntı yok, tek yargı: basit. Yüklem 'döndü' sonda değil: devrik. Birleşik ölçütü tutmuyor.
Adım 2: IV → 'dönünce' ile birleşik; alıntı yok; yüklem 'hazırladı' sonda: kurallı.
Adım 3: II → alıntılı birleşik cümle; yüklem 'dedi' en sonda: kurallı.
Adım 4: I → tırnak içinde aktarılan söz var: alıntılı birleşik. Yüklem 'dedi' sonda değil, ardından 'ablam' (özne) geliyor: devrik. İki özellik birlikte.
Sağlama: I ile II aynı sözlerden kuruludur; yalnızca yüklemin yeri değişmiştir. Devriklik farkını yaratan budur.
Cevap A.`
},
{
  id: "tur-ct-324",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, okul hayatından aldığı beş cümleyi hem yüklemin türüne hem de yapısına göre inceleyecek. Cümleler aşağıda numaralandırılmıştır. Bazıları isim cümlesi, bazıları fiil cümlesidir; bazıları basit, bazıları birleşiktir.
**Bu cümlelerden kaç tanesi hem isim cümlesi hem basit cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Sınıfımızın en sessiz öğrencisi Mert'tir.</td></tr><tr><td>II</td><td>Çantamdaki kitaplar çok ağırdı.</td></tr><tr><td>III</td><td>Kantinin önündeki kuyruk gittikçe uzuyordu.</td></tr><tr><td>IV</td><td>Bu kitabı okuyunca sen de beğeneceksin.</td></tr><tr><td>V</td><td>Okulun kapısı sabah yedide açıktır.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir cümleyi saymışsın. I, II ve V'in üçünün de yüklemi isim soyludur ve üçü de tek yargılıdır.",
    "Bir cümleyi atlamışsın. Üç cümlenin ('Mert'tir', 'ağırdı', 'açıktır') yüklemi isim soyludur ve basittir.",
    null,
    "III'ü de saymışsın: 'uzuyordu' bir fiildir, cümle fiil cümlesidir; IV ise birleşiktir."
  ],
  aciklama: `İsim cümlesi: yüklem isim soylu. Basit cümle: tek yargı, fiilimsi yok. İki ölçüt birlikte aranır.
Adım 1: I → yüklem 'Mert'tir' (özel ad + ek fiil): isim cümlesi; tek yargı: basit. Sayılır.
Adım 2: II → yüklem 'ağırdı' (sıfat + ek fiil): isim cümlesi; 'Çantamdaki' sözündeki '-ki' fiilimsi değildir: basit. Sayılır.
Adım 3: III → yüklem 'uzuyordu' fiil: fiil cümlesi. Sayılmaz.
Adım 4: IV → 'okuyunca' fiilimsisi: birleşik; ayrıca yüklem 'beğeneceksin' fiil. Sayılmaz.
Adım 5: V → yüklem 'açıktır' (sıfat + ek fiil): isim cümlesi; tek yargı: basit. Sayılır.
Adım 6: Sayılanlar I, II, V; yani 3 cümle.
Sık yapılan hata: '-ki' ekini fiilimsi sanıp II'yi atlamak ya da III'ü yüklemi 'önündeki' gibi bir sözcük sanarak saymak.
Cevap C.`
},
{
  id: "tur-ct-325",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir müzede açılan sergiyi gezen öğrencilerin anlattıklarından derlenen metinde cümleler numaralandırılmıştır.
(1) Sergiyi gezmeye gelen çocuklar rehberi merakla dinledi. (2) Salonun ortasındaki maket çok görkemliydi. (3) Hayran kaldılar maketteki ayrıntılara. (4) Rehber her bölümde kısa bir açıklama yaptı.
Bu metindeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle sıralı cümledir.
II. (2). cümle isim cümlesi olup birleşik yapılıdır.
III. (3). cümle fiil cümlesi olup yüklemin yerine göre devriktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","I ve III","II ve III","Yalnız III"],
  dogru: 3,
  hatalar: [
    "II yanlıştır: (2). cümlenin yüklemi 'görkemliydi' isim soyludur, ama cümle tek yargılıdır; 'ortasındaki' sözündeki '-ki' fiilimsi değildir, cümle basittir. III ise doğrudur.",
    "I yanlıştır: (1). cümlede 'gezmeye' ve 'gelen' fiilimsileri bulunur; cümle birleşiktir, bağlaçsız sıralanmış bağımsız yargılardan oluşmaz.",
    "II yanlıştır: (2). cümle isim cümlesidir ama basittir. Yalnızca III doğrudur.",
    null
  ],
  aciklama: `Sıralı cümle bağımsız yargıların virgülle sıralanmasıdır; birleşik cümlede fiilimsi, şart eki, 'ki' ya da alıntı vardır.
Adım 1: I → (1). cümlede 'gezmeye' (isim-fiil) ve 'gelen' (sıfat-fiil) var; bağımsız yargılar virgülle sıralanmamış. Cümle birleşiktir, sıralı değildir. Yargı yanlış.
Adım 2: II → (2). cümlenin yüklemi 'görkemliydi' isim soylu; isim cümlesi. Ama tek yüklemlidir, 'ortasındaki' sözündeki '-ki' bir ilgi ekidir: cümle basittir. 'Birleşik yapılı' demek yanlış. Yargı yanlış.
Adım 3: III → (3). cümlenin yüklemi 'hayran kaldılar' çekimli bir fiildir: fiil cümlesi. Yüklemden sonra 'maketteki ayrıntılara' gelir: devrik. Yargı doğru.
Adım 4: Doğru olan yalnız III'tür.
Sık yapılan hata: Uzun cümleyi birleşik, kısa cümleyi basit saymak. Uzunluk değil, fiilimsi ve yan yargı olup olmadığı önemlidir.
Cevap D.`
},
/* ===================== HAVUZ ===================== */
{
  id: "tur-ct-001",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerden hangisi isim cümlesidir?**`,
  gorsel: null,
  secenekler: ["Öğrenciler müzeyi gezdi.","Kardeşim sabah erkenden uyandı.","Bu çorba çok lezzetliydi.","Ali bahçedeki çiçekleri suladı."],
  dogru: 2,
  hatalar: [
    "Yüklem 'gezdi' çekimli bir fiildir; cümle fiil cümlesidir.",
    "Yüklem 'uyandı' fiildir; cümle fiil cümlesidir.",
    null,
    "Yüklem 'suladı' fiildir; 'çiçekleri' gibi ad soylu sözler yüklem olmadığı için cümleyi isim cümlesi yapmaz."
  ],
  aciklama: `İsim cümlesinin yüklemi ad, sıfat ya da zamir gibi isim soylu bir sözcüktür; fiil cümlesinin yüklemi çekimli fiildir.
Adım 1: Seçeneklerin yüklemlerini bul: 'gezdi', 'uyandı', 'suladı' fiildir.
Adım 2: 'Bu çorba çok lezzetliydi.' cümlesinde yüklem 'lezzetliydi'dir; 'lezzetli' bir sıfattır ve ek fiil almıştır. Yüklem isim soyludur.
Sık yapılan hata: Yükleme değil cümledeki adlara bakmak.
Cevap C.`
},
{
  id: "tur-ct-002",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerden hangisi yüklemin yerine göre devrik bir cümledir?**`,
  gorsel: null,
  secenekler: ["Bozuldu saatimiz dün akşam.","Küçük kardeşim erkenden uyudu.","Bu yıl bahçemizde çok elma var.","Annem akşam yemeğini hazırladı."],
  dogru: 0,
  hatalar: [
    null,
    "Yüklem 'uyudu' en sondadır; cümle kurallıdır.",
    "Yüklem 'var' en sondadır; cümle kurallıdır.",
    "Yüklem 'hazırladı' en sondadır; cümle kurallıdır."
  ],
  aciklama: `Devrik cümlede yüklem sonda değildir, kurallı cümlede yüklem sondadır.
Adım 1: B, C ve D'de yüklem ('uyudu', 'var', 'hazırladı') cümlenin sonundadır. Kurallı.
Adım 2: A'da yüklem 'bozuldu'dur; ardından 'saatimiz dün akşam' sözleri gelmiştir. Yüklem sonda değil: devrik.
Cevap A.`
},
{
  id: "tur-ct-003",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi olumsuz cümledir?**`,
  gorsel: null,
  secenekler: ["Çocuklar bahçede oynuyor.","Öğretmen tahtayı sildi.","Kitabı masaya bıraktık.","Telefonum bugün çalışmıyor."],
  dogru: 3,
  hatalar: [
    "'Oynuyor' yüklemi olumludur; iş gerçekleşiyor.",
    "'Sildi' yüklemi olumludur; iş gerçekleşmiştir.",
    "'Bıraktık' yüklemi olumludur; iş gerçekleşmiştir.",
    null
  ],
  aciklama: `Olumsuz cümlede yüklem '-ma, -me' eki alır ya da 'değil, yok' sözcüğü kullanılır; iş gerçekleşmez.
Adım 1: A, B ve C'nin yüklemlerinde ('oynuyor', 'sildi', 'bıraktık') olumsuzluk eki yok.
Adım 2: D'de 'çalışmıyor' yüklemi '-ma' ekini ('çalış-mı-yor') almıştır. İş gerçekleşmiyor: olumsuz.
Cevap D.`
},
{
  id: "tur-ct-004",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi yapısına göre basit cümledir?**`,
  gorsel: null,
  secenekler: ["Sınavı geçmek için çok çalıştı.","Bahçedeki kediyi komşumuz besliyor.","Okula gelince beni ara.","Kapıyı açtı, içeri girdi."],
  dogru: 1,
  hatalar: [
    "'Geçmek' bir fiilimsidir (isim-fiil); cümle birleşiktir.",
    null,
    "'Gelince' bir fiilimsidir (zarf-fiil); cümle birleşiktir.",
    "İki bağımsız yüklem virgülle sıralanmıştır; cümle sıralıdır."
  ],
  aciklama: `Basit cümle tek yargıdan oluşur; fiilimsi, şart eki, 'ki' ya da alıntı içermez.
Adım 1: A'da 'geçmek' (-mek), C'de 'gelince' (-ince) fiilimsidir: birleşik.
Adım 2: D'de 'açtı' ve 'girdi' virgülle sıralanmıştır: sıralı.
Adım 3: B'de tek yüklem ('besliyor') var; 'Bahçedeki' sözündeki '-ki' bir ilgi ekidir, yargı kurmaz. Cümle basit.
Cevap B.`
},
{
  id: "tur-ct-005",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi yapısına göre bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["Gelince bana haber ver.","Evden çıktım, yağmur başladı.","Hava güzelse yürüyüşe çıkarız.","Evden çıktım ama yağmur başladı."],
  dogru: 3,
  hatalar: [
    "'Gelince' bir fiilimsidir; cümle birleşiktir.",
    "İki yüklem bağlaçsız, virgülle sıralanmıştır; cümle sıralıdır.",
    "'Güzelse' şart ekidir; cümle birleşiktir.",
    null
  ],
  aciklama: `Bağlı cümle, bağımsız yargıların 've, ama, fakat, çünkü' gibi bağlaçlarla bağlanmasıyla kurulur.
Adım 1: A'da 'gelince' fiilimsi, C'de 'güzelse' şart eki: birleşik.
Adım 2: B'de bağlaç yok, virgül var: sıralı.
Adım 3: D'de 'çıktım' ve 'başladı' 'ama' bağlacıyla bağlanmış: bağlı.
Cevap D.`
},
{
  id: "tur-ct-006",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi isim cümlesidir?**`,
  gorsel: null,
  secenekler: ["Bu ceket benim değil.","Bu ceketi dün aldım.","Bu ceket dolapta duruyor.","Bu ceketi kardeşime verdim."],
  dogru: 0,
  hatalar: [
    null,
    "Yüklem 'aldım' fiildir; fiil cümlesi.",
    "Yüklem 'duruyor' fiildir; fiil cümlesi.",
    "Yüklem 'verdim' fiildir; fiil cümlesi."
  ],
  aciklama: `Yüklemi fiil olan cümle fiil cümlesidir. 'Değil' sözcüğü bir ismi olumsuz yapar; yüklemi 'değil' olan cümle olumsuz isim cümlesidir.
Adım 1: B, C, D'nin yüklemleri 'aldım', 'duruyor', 'verdim' çekimli fiildir.
Adım 2: A'da yüklem 'benim değil'dir; 'benim' isim soylu, 'değil' olumsuzluk bildirir. Yüklem isim soylu: isim cümlesi.
Cevap A.`
},
{
  id: "tur-ct-007",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi anlamca olumsuz, yapıca basit bir cümledir?**`,
  gorsel: null,
  secenekler: ["Kapıyı çalmadan içeri girdi.","Sınav kolaydı, çabuk bitirdik.","Bu akşam sinemaya gitmeyeceğiz.","Yarın erken kalkıp yola çıkacağız."],
  dogru: 2,
  hatalar: [
    "Yüklem 'girdi' olumludur; 'çalmadan' fiilimsisi cümleyi birleşik yapar. İki ölçüt de tutmuyor.",
    "İki yüklem virgülle sıralanmış ve ikisi de olumlu; cümle sıralıdır.",
    null,
    "'Kalkıp' fiilimsisi cümleyi birleşik yapar ve yüklem olumludur."
  ],
  aciklama: `Anlamca olumsuz: yüklem '-ma, -me' ya da 'değil' taşır. Yapıca basit: tek yargı, fiilimsi yok.
Adım 1: A → 'çalmadan' fiilimsi: birleşik; yüklem 'girdi' olumlu.
Adım 2: B → iki yüklem virgülle sıralı; ikisi de olumlu.
Adım 3: D → 'kalkıp' fiilimsi: birleşik; yüklem olumlu.
Adım 4: C → tek yüklem 'gitmeyeceğiz', '-me' eki taşır: olumsuz; fiilimsi yok: basit.
Cevap C.`
},
{
  id: "tur-ct-008",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdakilerden hangisi şart ekiyle kurulmuş birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["Kitabı okudu, filmi izledi.","Erken çıkarsak otobüse yetişiriz.","Otobüse yetişmek için koştuk.","Otobüs kalktı ve biz kaldık."],
  dogru: 1,
  hatalar: [
    "İki bağımsız yargı virgülle sıralanmış; cümle sıralıdır.",
    null,
    "'Yetişmek' bir fiilimsidir (isim-fiil); cümle birleşiktir ama şart eki yoktur.",
    "İki bağımsız yargı 've' ile bağlanmış; cümle bağlıdır."
  ],
  aciklama: `Şart eki '-sa, -se'dir ve bir yargıyı koşula bağlar; şartlı cümle birleşiktir.
Adım 1: A sıralı, D bağlı; ikisi de birleşik değil.
Adım 2: C birleşiktir ama 'yetişmek' fiilimsisiyle kurulmuş; şart eki yok.
Adım 3: B'de 'çıkarsak' sözcüğü '-sa' şart ekini taşıyor; 'yetişiriz' yargısı bu koşula bağlı.
Cevap B.`
},
{
  id: "tur-ct-009",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Deniz'in bir akşam ders çalışırken yaşadıklarını anlatan aşağıdaki metinde cümleler numaralandırılmıştır.
(1) Deniz masasının başına oturdu ama ödevine bir türlü başlayamadı. (2) Telefonu eline alınca ekrana baktı. (3) Önce odasını topladı, sonra ödevine döndü. (4) Pencereden gelen ses onu yine dalgınlaştırdı.
**Bu metindeki numaralı cümlelerden hangisi yapısına göre bağlı cümledir?**`,
  gorsel: null,
  secenekler: ["(1)","(2)","(3)","(4)"],
  dogru: 0,
  hatalar: [
    null,
    "(2). cümlede 'alınca' fiilimsisi vardır; cümle birleşiktir.",
    "(3). cümlede iki yüklem bağlaçsız, virgülle sıralanmıştır; cümle sıralıdır.",
    "(4). cümlede 'gelen' fiilimsisi vardır; cümle birleşiktir."
  ],
  aciklama: `Bağlı cümlede bağımsız yargılar 've, ama, fakat…' gibi bir bağlaçla bağlanır.
Adım 1: (2) → 'alınca' fiilimsisi: birleşik.
Adım 2: (3) → 'topladı' ve 'döndü' bağlaçsız, virgülle: sıralı.
Adım 3: (4) → 'gelen' fiilimsisi: birleşik.
Adım 4: (1) → 'oturdu' ve 'başlayamadı' yüklemleri 'ama' bağlacıyla bağlanmış, fiilimsi yok: bağlı.
Cevap A.`
},
{
  id: "tur-ct-010",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okulun bahçesine kurulan kütüphaneyi anlatan yazıdan alınan metinde cümleler numaralandırılmıştır.
(1) Okulun bahçesine yeni bir kütüphane kurmaya karar verdik. (2) Kitapları ayırınca öğrenciler çok eğlendi. (3) Öğretmenlerimiz de bu çalışmaya ilk günden destek verdi.
Bu metindeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle basit cümledir.
II. (2). cümle birleşik cümledir.
III. (3). cümle basit cümledir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","I ve II","I ve III","II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü de doğru bulmalıydın: (3). cümlede tek yüklem ('verdi') vardır ve fiilimsi yoktur; cümle basittir. Ayrıca I yanlıştır.",
    "I yanlıştır: (1). cümlede 'kurmaya' bir fiilimsidir (isim-fiil); cümle birleşiktir, basit değildir. III ise doğrudur.",
    "I yanlıştır: (1). cümledeki 'kurmaya' fiilimsisi cümleyi birleşik yapar. II de doğrudur: 'ayırınca' fiilimsisi yan yargı kurar.",
    null
  ],
  aciklama: `Basit cümle tek yargılıdır ve fiilimsi, şart eki, 'ki' ya da alıntı içermez; fiilimsi içeren cümle birleşiktir.
Adım 1: I → (1). cümlede 'kurmaya' sözcüğü '-ma' ekiyle kurulmuş bir isim-fiildir; 'karar verdik' yüklemine bağlı yan yargı oluşturur. Cümle birleşiktir, basit değildir. Yargı yanlış.
Adım 2: II → (2). cümlede 'ayırınca' zarf-fiildir, yan yargı kurar: birleşik. Yargı doğru.
Adım 3: III → (3). cümlede tek yüklem ('verdi') var, fiilimsi yok: basit. Yargı doğru.
Adım 4: Doğru olanlar II ve III.
Sık yapılan hata: Cümlenin kısa ya da sade görünmesine bakıp basit saymak. '-ma, -mak' gibi ekler de fiilimsi kurar.
Cevap D.`
},
{
  id: "tur-ct-011",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdakilerden hangisi yüklemi fiil olan birleşik cümledir?**`,
  gorsel: null,
  secenekler: ["Yağmur dinerse sokaklar kalabalıktır.","Çocuklar yağmurda sokakta oynadı.","Çocuklar yağmur dinince sokağa fırladı.","Çocuklar sokağa çıktı, yağmur yağdı."],
  dogru: 2,
  hatalar: [
    "Birleşiktir ('dinerse'), ama yüklem 'kalabalıktır' isim soyludur; isim cümlesidir.",
    "Yüklem fiildir ('oynadı') ama cümle tek yargılı, basittir.",
    null,
    "Yüklemler fiildir, ama iki bağımsız yargı virgülle sıralanmıştır; cümle sıralıdır."
  ],
  aciklama: `İki ölçüt: yüklem fiil, yapı birleşik.
Adım 1: A → 'dinerse' şart eki: birleşik; ama yüklem 'kalabalıktır' isim soylu.
Adım 2: B → yüklem 'oynadı' fiil; ama basit.
Adım 3: D → 'çıktı' ve 'yağdı' fiildir; ama virgülle sıralı.
Adım 4: C → 'dinince' fiilimsisi: birleşik; yüklem 'fırladı' fiil. İkisi de tutuyor.
Cevap C.`
},
{
  id: "tur-ct-012",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerden hangisi anlamca olumsuz, yüklemin yerine göre devrik bir cümledir?**`,
  gorsel: null,
  secenekler: ["Gelmedi okula bugün Elif.","Okula bugün Elif gelmedi.","Geldi okula bugün Elif.","Elif bugün okula gelmiş."],
  dogru: 0,
  hatalar: [
    null,
    "Olumsuzdur, ama yüklem 'gelmedi' en sondadır; kurallıdır.",
    "Devriktir, ama yüklem 'geldi' olumludur.",
    "Hem kurallıdır hem olumludur."
  ],
  aciklama: `Olumsuz: yüklem '-ma, -me' eki taşır. Devrik: yüklem sonda değil.
Adım 1: B → 'gelmedi' olumsuz; yüklem sonda: kurallı.
Adım 2: C → 'geldi' olumlu; yüklem sonda değil: devrik.
Adım 3: D → olumlu ve kurallı.
Adım 4: A → 'gelmedi' olumsuz; ardından 'okula bugün Elif' geliyor: devrik. İki ölçüt de tutuyor.
Cevap A.`
},
{
  id: "tur-ct-013",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, sınav gününü anlatan bir yazı yazarken cümlelerin dizilişini değiştirerek aynı olayı farklı biçimlerde ifade etmeye çalıştı. Ortaya çıkan cümlelerde anlam, yapı ve yüklemin yeri birbirinden farklı özellikler gösteriyor.
**Aşağıdakilerden hangisi anlamca olumsuz, yapıca birleşik ve yüklemin yerine göre devrik bir cümledir?**`,
  gorsel: null,
  secenekler: ["Sınav bitince salondan kimse çıkmadı.","Sınav bitince çıkmadı salondan kimse.","Çıkmadı salondan kimse sınav boyunca.","Sınav bitince çıktı salondan herkes."],
  dogru: 1,
  hatalar: [
    "Olumsuz ve birleşiktir ('bitince'), ama yüklem 'çıkmadı' en sondadır; kurallıdır.",
    null,
    "Olumsuz ve devriktir, ama fiilimsi yoktur; cümle basittir.",
    "Birleşik ve devriktir, ama yüklem 'çıktı' olumludur."
  ],
  aciklama: `Üç ölçüt birlikte aranır: olumsuz (yüklemde '-ma, -me'), birleşik (fiilimsi vb.), devrik (yüklem sonda değil).
Adım 1: A → 'bitince' birleşik; 'çıkmadı' olumsuz; yüklem sonda: kurallı. Devrik ölçütü tutmuyor.
Adım 2: C → 'çıkmadı' olumsuz; yüklem sonda değil: devrik; ama fiilimsi yok: basit.
Adım 3: D → 'bitince' birleşik; yüklem sonda değil: devrik; ama 'çıktı' olumlu.
Adım 4: B → 'bitince' birleşik; 'çıkmadı' olumsuz; ardından 'salondan kimse' geliyor: devrik. Üç ölçüt de tutuyor.
Cevap B.`
},
{
  id: "tur-ct-014",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrencinin okul gazetesi için yazdığı yazıdan alınan metinde cümleler numaralandırılmıştır.
(1) Okulumuzun bahçesindeki ağaçlar geçen yıl budanmadı. (2) Gövdeleri kalındı, dalları gürdü. (3) Öğrenciler ağaçların gölgesine oturup kitap okudu.
Bu metindeki cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümle fiil cümlesi olup anlamca olumsuzdur.
II. (2). cümle birleşik cümledir.
III. (3). cümle bağlı cümledir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","I ve III","II ve III","Yalnız I"],
  dogru: 3,
  hatalar: [
    "II yanlıştır: (2). cümlede iki bağımsız yargı virgülle sıralanmıştır; cümle sıralıdır. Ayrıca I doğrudur.",
    "III yanlıştır: (3). cümlede 'oturup' fiilimsisi bulunur; cümle birleşiktir, bağlı değildir.",
    "II ve III yanlıştır: (2). cümle sıralı, (3). cümle birleşiktir.",
    null
  ],
  aciklama: `Fiil cümlesinde yüklem fiildir; olumsuz cümlede yüklem '-ma, -me' alır. Sıralı cümle virgülle sıralanan bağımsız yargılardır; fiilimsi içeren cümle birleşiktir; bağlı cümle bağlaçla kurulur.
Adım 1: I → (1). cümlenin yüklemi 'budanmadı' fiildir ve '-ma' eki taşır: fiil cümlesi, olumsuz. Doğru.
Adım 2: II → (2). cümlede 'kalındı' ve 'gürdü' bağımsız iki yüklemdir, virgülle sıralanmıştır: sıralı. Birleşik değil. Yanlış.
Adım 3: III → (3). cümlede 'oturup' fiilimsisi var, bağlaç yok: birleşik. Bağlı değil. Yanlış.
Adım 4: Doğru olan yalnız I.
Cevap D.`
},
{
  id: "tur-ct-015",
  kazanim: "T.8.4.19",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, cümlelerin yapısını ve yüklemin yerini birlikte inceleyen bir çalışma yaptı. Aşağıdaki beş cümle numaralandırılmıştır. Cümlelerden bazıları birleşik, bazıları sıralı ya da basittir; bazılarında yüklem sondadır, bazılarında değildir.
**Bu cümlelerden kaç tanesi hem birleşik hem devrik cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okula varınca karşıladı bizi müdür.</td></tr><tr><td>II</td><td>Yağmur dinince çıktık yola.</td></tr><tr><td>III</td><td>Bitti sınav, dağıldı herkes.</td></tr><tr><td>IV</td><td>Sabah uyanınca bakındı etrafına kedi.</td></tr><tr><td>V</td><td>Kapıyı açınca misafirler içeri girdi.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir cümleyi saymışsın. I, II ve IV hem fiilimsi taşır hem de yüklemleri sonda değildir.",
    "Bir cümleyi atlamışsın. Üç cümlede ('varınca', 'dinince', 'uyanınca') hem fiilimsi hem devriklik vardır.",
    null,
    "III'ü de saymışsın: III devriktir ama sıralı bir cümledir (fiilimsi yok). V ise birleşiktir ama kurallıdır."
  ],
  aciklama: `Birleşik: fiilimsi, şart eki, 'ki' ya da alıntıyla kurulan yan yargı. Devrik: yüklem sonda değil. İkisi birlikte aranır.
Adım 1: I → 'varınca' fiilimsi: birleşik; yüklem 'karşıladı' sonda değil: devrik. Sayılır.
Adım 2: II → 'dinince' fiilimsi: birleşik; yüklem 'çıktık' sonda değil: devrik. Sayılır.
Adım 3: III → 'Bitti' ve 'dağıldı' bağımsız iki yüklem, virgülle sıralı: sıralı; birleşik değil. Sayılmaz.
Adım 4: IV → 'uyanınca' fiilimsi: birleşik; yüklem 'bakındı' sonda değil: devrik. Sayılır.
Adım 5: V → 'açınca' fiilimsi: birleşik; ama yüklem 'girdi' sonda: kurallı. Sayılmaz.
Adım 6: Sayılanlar I, II, IV; yani 3 cümle.
Cevap C.`
}
);
