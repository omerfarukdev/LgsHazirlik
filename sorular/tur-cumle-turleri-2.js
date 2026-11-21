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
  soru: `Baraj gölündeki kürek kulübüne bu yaz yazıldım. Dört kürekçi ve bir dümenciden oluşan teknemizle her sabah göle açılıyoruz. İlk hafta bu sporun kol gücüyle yapıldığını sanıyordum; antrenörümüz, asıl gücün bacaklardan ve ekip uyumundan geldiğini söyledi. Antrenman günlüğüme yazdıklarımdan beş cümle şöyle:

(I) Tekneyi iskeleden suya dördümüz indiririz, dümenci kıyıda bizi bekler. (II) Suyun en durgun olduğu saat, sabahın altısıdır. (III) Dümenci komut verince kürekler suya aynı anda girer. (IV) Tek bir hata teknenin hızını keser ama kıyıdaki seyirci bunu fark etmez. (V) Dört kişinin tek bir beden gibi çekmesi hiç kolay değildir bu teknede.

Bu cümleleri Türkçe dersinde yüklemin türü, yüklemin yeri ve yapı bakımından inceleyen üç öğrenci şunları söylemiştir:

Aras: “II ile V, yüklemlerinin türü bakımından aynıdır ama yüklemin yeri bakımından birbirinden ayrılır.”
Bade: “I ile IV'te ikişer yargı vardır, bu yüzden ikisi de sıralı cümledir.”
Cem: “II, III ve V yapıca birleşiktir ama bunlardan yalnızca III fiil cümlesidir.”

**Buna göre hangi öğrencilerin söyledikleri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız Aras", "Yalnız Cem", "Aras ve Cem", "Bade ve Cem"],
  dogru: 2,
  hatalar: ["Fiilimsiyi gözden kaçırma: II'deki “olduğu” ve V'teki “çekmesi” yan yargı kurar. Bu cümleleri basit sayınca Cem'in doğru tespitini yanlış sanırsın.", "Yüklemin yerini denetlememe: V'te “kolay değildir” yükleminden sonra “bu teknede” gelir, cümle devriktir; II ise kurallıdır. Aras'ın söylediği de doğrudur.", null, "Sıralı ile bağlıyı karıştırma: IV'te iki yargıyı “ama” bağlacı bağlar, cümle bağlıdır; Bade yanılıyor. Aras'ın tespiti ise doğrudur."],
  aciklama: `Her cümlede önce yüklemi bul, sonra üç soruyu ayrı ayrı sor: Yüklem isim mi fiil mi? Sonda mı? Kaç yargı var ve bunlar nasıl bağlanmış?
Adım 1: I → yüklemler “indiririz” ve “bekler”. İki bağımsız yargı bağlaçsız, virgülle dizilmiş: sıralı cümle.
Adım 2: II → yüklem “sabahın altısıdır” (isim soylu) ve sonda: kurallı. “olduğu” sıfat-fiili yan yargı kurar: birleşik.
Adım 3: III → yüklem “girer” (fiil) ve sonda. “verince” zarf-fiili yan yargı kurar: birleşik.
Adım 4: IV → yüklemler “keser” ve “fark etmez”. İki yargı “ama” bağlacıyla bağlanmış: bağlı cümle. Sıralı değil.
Adım 5: V → yüklem “kolay değildir” (isim soylu); ardından “bu teknede” geldiği için devrik. “çekmesi” isim-fiili yan yargı kurar: birleşik.
Adım 6: Aras doğru söylüyor: II ve V isim cümlesi; II kurallı, V devrik. Bade yanılıyor: I sıralı ama IV bağlı. Cem doğru söylüyor: II, III ve V birleşik; üçünden yalnızca III'ün yüklemi fiil.
Sık yapılan hata: İki yargılı her cümleyi sıralı saymak. Yargılar virgülle dizilmişse cümle sıralı, “ama, ve, çünkü” gibi bir bağlaçla bağlanmışsa bağlıdır. Bir de kısa isim cümlesini hemen basit sanma; II'deki “olduğu” gibi bir fiilimsi cümleyi birleşik yapar.
Cevap C.`
},
{
  id: "tur-ct-317",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Antarktika'yı örten buz tabakasının kalınlığı yer yer dört kilometreyi aşar. Her yıl yağan kar bir öncekinin üstüne biner, zamanla sıkışıp buza dönüşür; kar taneleri arasındaki hava da küçük kabarcıklar hâlinde buzun içinde hapsolur. Bu kabarcıklar, karın yağdığı dönemin havasından alınmış küçük birer örnek gibidir. En alttaki katmanlar en eski karlardan oluştuğu için matkap derine indikçe zamanda geriye gidilmiş olur. Bilim insanları bu buzu özel matkaplarla delerek “buz çekirdeği” denen uzun silindirler çıkarır ve bunları soğutmalı kaplarda laboratuvara gönderir. - - - - Tüplerdeki bu hava örneklerinde karbondioksit oranı ölçülür; böylece yüz binlerce yıl önceki atmosferin nasıl olduğu, o günlerden kalan havanın kendisine bakılarak öğrenilir.

Bu metni okul dergisi için yazan Zeynep, boş bırakılan yere düşüncenin akışına uyan bir cümle ekleyecektir. Türkçe öğretmeni, eklenecek cümlenin dil bilgisi bakımından şu üç özelliği de taşımasını istemiştir:
· Yüklemi çekimli bir fiil olacak.
· Yüklem cümlenin sonunda bulunmayacak.
· Cümle yapıca birleşik olacak.

**Buna göre boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["Kampa uçaklarla taşınır sondajda kullanılan ağır matkaplar.", "Tüplerin içindedir artık ezilen buzdan çıkan o eski hava.", "Uzmanlar, kabarcıklarda saklanan havayı ince tüplere aktarır.", "Ezilen buzdan çıkan havayı tüplerde toplar araştırmacılar."],
  dogru: 3,
  hatalar: ["Yalnızca dil bilgisine bakıp akışı unutma: cümle üç özelliği de taşır ama matkapların taşınmasını anlatır. Sonraki cümledeki “tüplerdeki bu hava örnekleri” sözü karşılıksız kalır.", "Yüklemin türünü denetlememe: cümle akışa uyar, devriktir ve fiilimsi taşır; ama yüklemi “içindedir” isim soyludur, çekimli fiil değildir.", "Yüklemin yerini denetlememe: cümle akışa uyar, yüklemi “aktarır” çekimli fiildir ve “saklanan” fiilimsisiyle birleşiktir; ama yüklem cümlenin sonundadır.", null],
  aciklama: `Boşluğa gelecek cümle iki sınavdan geçmeli: metnin akışına uymalı ve üç dil bilgisi özelliğini birlikte taşımalı.
Adım 1: Akışa bak. Boşluktan sonraki cümle “Tüplerdeki bu hava örnekleri” diye başlıyor. Demek ki boşluktaki cümle, havanın buzdan çıkarılıp tüplere alındığını anlatmalı.
Adım 2: A → yüklem “taşınır” (fiil) ve sonda değil; “kullanılan” sıfat-fiili var. Üç özellik tamam. Ama cümle matkapların kampa taşınmasını anlatıyor; tüplerden de havadan da söz etmiyor. Üstelik metin çekirdeklerin laboratuvara gönderilmesine kadar gelmişken geriye dönüyor. Akışa uymaz.
Adım 3: B → akışa uyar; “ezilen” ve “çıkan” fiilimsileri var, yüklemden sonra söz geliyor. Ama yüklem “içindedir”: isim soylu. Birinci özellik yok.
Adım 4: C → akışa uyar; yüklem “aktarır” çekimli fiil, “saklanan” sıfat-fiili de yan yargı kurar. Ama yüklemden sonra hiçbir söz gelmiyor; yüklem cümlenin sonunda. İkinci özellik yok.
Adım 5: D → akışa uyar. Yüklem “toplar” çekimli fiil; ardından “araştırmacılar” geliyor, yüklem sonda değil. “Ezilen” ve “çıkan” sıfat-fiilleri yan yargı kurar, cümle birleşik. Hepsi tamam.
Sık yapılan hata: Özelliklerden ikisini bulunca durmak. B ile C akışa uyar ve ikişer özelliği taşır; ama B'nin yüklemi isim soyludur, C'nin yüklemi sondadır. Üç özelliği tek tek işaretle. Bir de yalnızca dil bilgisine bakıp akışı unutma; A üç özelliği taşıdığı hâlde metne oturmaz.
Cevap D.`
},
{
  id: "tur-ct-318",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Mahalle kütüphanesinin atölyesine bir 3B yazıcı alındı. Bu makine, makaradaki plastik teli eritir ve erittiği plastiği incecik katmanlar hâlinde üst üste dizer; ekranda çizilen model böylece elle tutulur bir nesneye dönüşür. Atölyeye katılan Defne, fen projesi için küçük bir köprü maketi bastırdı ve o gün gördüklerini defterine yazdı:

(I) Tabla ısınınca makine kısa bir ses çıkardı, ince uç sola kaydı. (II) Kütüphanedeki yazıcı; anahtarlıkları, vidaları ve küçük dişlileri birkaç saatte üretiyor. (III) İlk baskıda köprünün ayakları biraz eğriydi. (IV) Katman katman yükseldi tablanın üstündeki minik köprü. (V) Epeyce pürüzlüydü köprünün yan yüzeyleri.

Defne, bu cümleleri türlerine göre ayırmak için bir oyun kurdu. Her cümleye aşağıdaki tabloda yer alan soruları 1. adımdan başlayarak sırayla soruyor ve cümleyi ulaştığı kutuya atıyor.

**Buna göre beş cümle de kutulara atıldığında hangi kutu boş kalır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Adım</th><th>Soru</th><th>Cevap “evet” ise</th><th>Cevap “hayır” ise</th></tr><tr><td>1</td><td>Cümlede fiilimsi var mı?</td><td>Mavi kutuya at.</td><td>2. adıma geç.</td></tr><tr><td>2</td><td>Cümlede birden fazla çekimli yüklem var mı?</td><td>Sarı kutuya at.</td><td>3. adıma geç.</td></tr><tr><td>3</td><td>Cümlenin yüklemi isim soylu mu?</td><td>Yeşil kutuya at.</td><td>4. adıma geç.</td></tr><tr><td>4</td><td>Yüklemden sonra başka bir söz geliyor mu?</td><td>Kırmızı kutuya at.</td><td>Beyaz kutuya at.</td></tr></table>",
  secenekler: ["Mavi kutu", "Sarı kutu", "Yeşil kutu", "Kırmızı kutu"],
  dogru: 1,
  hatalar: ["Sırayı atlama: I. cümlede iki çekimli yüklemi görüp cümleyi Sarı kutuya attın. İlk soru fiilimsiyi sorar; “ısınınca” yüzünden I. cümle Mavi kutuya gider, Mavi boş kalmaz.", null, "Ek fiil almış sıfatı fiil sanma: “eğriydi” ve “pürüzlüydü” çekimli fiil değil, isim soylu yüklemdir. III ve V. cümleler Yeşil kutuya gider, Yeşil boş kalmaz.", "-ki ekini fiilimsi sanma: IV. cümledeki “üstündeki” sözü yan yargı kurmaz. Cümle 4. adıma kadar gelir ve yüklemden sonra söz bulunduğu için Kırmızı kutuya gider."],
  aciklama: `Bu oyunda sıra önemlidir: bir cümle “evet” cevabını aldığı ilk adımda kutusuna gider, sonraki sorular ona sorulmaz.
Adım 1: I → “ısınınca” bir zarf-fiildir, yani fiilimsidir. 1. adımda “evet”: Mavi kutu. İki çekimli yüklemi (“çıkardı”, “kaydı”) olsa da 2. adıma hiç gelmez.
Adım 2: II → fiilimsi yok (“kütüphanedeki” sözündeki -ki eki fiilimsi eki değildir). Virgüller ve “ve”, art arda sayılan adları ayırıyor; tek çekimli yüklem var: “üretiyor”. Yüklem fiil ve sonda: Beyaz kutu.
Adım 3: III → fiilimsi yok, tek yüklem var: “eğriydi”. “Eğri” bir sıfattır, ek fiil almıştır; yüklem isim soylu: Yeşil kutu.
Adım 4: IV → fiilimsi yok (“üstündeki” -ki eklidir), tek yüklem “yükseldi” fiil; ardından “tablanın üstündeki minik köprü” geliyor: Kırmızı kutu.
Adım 5: V → fiilimsi yok, tek yüklem “pürüzlüydü”. Bu da ek fiil almış bir sıfattır, isim soylu yüklemdir. Yüklemden sonra söz gelse de cümle 4. adıma inmez; 3. adımda “evet” cevabını alır: Yeşil kutu.
Adım 6: Mavi'de I, Yeşil'de III ile V, Kırmızı'da IV, Beyaz'da II var. Sarı kutuya hiçbir cümle düşmedi.
Sık yapılan hata: I. cümlede iki çekimli yüklemi görüp cümleyi hemen Sarı kutuya atmak. İlk soru fiilimsiyi soruyor ve “ısınınca” cümleyi 1. adımda Mavi kutuya gönderiyor. II. cümledeki virgüller de seni yanıltmasın; onlar yargıları değil, art arda sayılan adları ayırıyor.
Cevap B.`
},
{
  id: "tur-ct-319",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Tuz Gölü, flamingoların Türkiye'deki en önemli üreme alanlarından biridir. Elif, gölde yuva yapan bu kuşları anlatan bir yazı hazırlayıp okul dergisine gönderdi. Derginin yayın kurulu, yazıdaki dört cümleyi küçük değişikliklerle yeniden kurdu. Elif, cümlelerin ilk ve son hâllerini aşağıdaki tabloda yan yana yazdı. Sonra her satırda iki şeye baktı:
· Cümlenin yapısı (basit, birleşik, sıralı, bağlı) değişmiş mi?
· Yüklemin türü (isim, fiil) değişmiş mi?

**Buna göre numaralanmış satırların hangisinde yapılan değişiklik, cümlenin hem yapısını hem de yükleminin türünü değiştirmiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Elif'in yazdığı cümle</th><th>Dergide yayımlanan cümle</th></tr><tr><td>I</td><td>Yavrular yumurtadan gri tüylerle çıkar ama birkaç yıl içinde pembeleşir.</td><td>Yavrular yumurtadan gri tüylerle çıkar, birkaç yıl içinde pembeleşir.</td></tr><tr><td>II</td><td>Flamingoların pembe rengi, beslendikleri küçük canlılardan gelir.</td><td>Flamingoların pembe renginin kaynağı, beslendikleri küçük canlılardır.</td></tr><tr><td>III</td><td>Göl yazın çekilir, kıyıda bembeyaz bir tuz kabuğu kalır.</td><td>Göl yazın çekilince kıyıda kalan şey bembeyaz bir tuz kabuğudur.</td></tr><tr><td>IV</td><td>Göl erken kurursa kuşlar o yıl yuva yapmaz.</td><td>Göl erken kuruyunca kuşlar o yıl yuva yapmaz.</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: ["Yalnızca yapıdaki değişikliği görme: “ama” kalkınca bağlı cümle sıralıya döner, ama iki hâlde de yüklemler fiildir; yüklemin türü değişmemiştir.", "Fiilimsiyi gözden kaçırma: yüklem “gelir”den “canlılardır”a dönüp isim soylu olur, ama “beslendikleri” iki hâlde de yan yargı kurar; yapı birleşik kalır.", null, "Şart ekiyle fiilimsiyi ayrı yapı sanma: “kurursa” da “kuruyunca” da yan yargı kurar; cümle iki hâlde de birleşiktir, yüklem de aynı fiildir."],
  aciklama: `Her satırda iki hâli ayrı ayrı çözümle: önce yüklemi bul (isim mi, fiil mi), sonra yargıları say (yapı).
Adım 1: I → ilk hâlde “çıkar” ve “pembeleşir” yüklemleri “ama” ile bağlanmış: bağlı cümle, fiil cümlesi. Son hâlde aynı yargılar virgülle dizilmiş: sıralı cümle, fiil cümlesi. Yapı değişti, yüklemin türü değişmedi.
Adım 2: II → ilk hâlde yüklem “gelir” (fiil); “beslendikleri” sıfat-fiili var: birleşik. Son hâlde yüklem “canlılardır” (isim soylu); “beslendikleri” yine cümlede: birleşik. Yüklemin türü değişti, yapı değişmedi.
Adım 3: III → ilk hâlde “çekilir” ve “kalır” yüklemleri virgülle dizilmiş: sıralı cümle, fiil cümlesi. Son hâlde tek yüklem var, “tuz kabuğudur” (isim soylu); “çekilince” ve “kalan” fiilimsileri yan yargı kurar: birleşik. Hem yapı hem yüklemin türü değişti.
Adım 4: IV → ilk hâlde “kurursa” şart ekiyle yan yargı kurar: birleşik; yüklem “yapmaz” fiil. Son hâlde “kuruyunca” zarf-fiili yan yargı kurar: yine birleşik; yüklem yine “yapmaz”. İkisi de değişmedi.
Sık yapılan hata: II. satırda cümle baştan kurulduğu için yapının da değiştiğini sanmak. “Beslendikleri” fiilimsisi iki hâlde de durur; cümle iki hâlde de birleşiktir. Yapıya karar verirken sözcüklerin yer değiştirmesine değil, yan yargının kalıp kalmadığına bak.
Cevap C.`
},
{
  id: "tur-ct-320",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Şehrin en işlek caddesi, iki yıl süren çalışmaların ardından araçlara kapatıldı ve ortasına tramvay rayları döşendi. Dükkân sahiplerinin bir bölümü, müşteri kaybedeceğini düşünerek başlangıçta bu karara karşı çıkmıştı. Belediyenin sayımına göre caddeden geçen yaya sayısı bir yılda iki katına çıktı. Bugün aynı esnaf, dükkânının önünden geçen kalabalıktan memnun görünüyor. Eskiden korna sesiyle ve egzoz dumanıyla anılan cadde, şimdi şehrin buluşma yeri oldu. Caddedeki değişimi bir yıl sonra anlatan gazete yazısından alınan bölümde cümleler numaralandırılmıştır:

(I) Tramvay hattı açılınca caddeden otomobiller çekildi. (II) Eskisi kadar gürültülü değil cadde artık. (III) Yayalar yolun ortasından yürüyor ve tramvayın zili onları uzaktan uyarıyor. (IV) Hat sahile uzatılırsa cadde hafta sonları daha da kalabalıklaşacak. (V) Esnaf, kaldırıma masa koymanın ve vitrinini yenilemenin yollarını arıyor. (VI) Akşamları gitar sesleri yükselir caddenin iki ucundan.

Türkçe dersinde bu cümleler yüklemin türü, yüklemin yeri, anlam ve yapı bakımından incelenmiş; cümlelerle ilgili dört ifade tahtaya yazılmıştır.

**Buna göre numaralanmış cümlelerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["III ile V. cümlelerde “ve” aynı görevdedir; ikisi de yapıca bağlı cümledir.", "I ile IV. cümleler birleşiktir; birinde fiilimsi, ötekinde şart eki vardır.", "II ile VI. cümleler devriktir; bunlardan yalnızca II olumsuz bir isim cümlesidir.", "I, III, IV ve V. cümleler olumlu fiil cümlesidir; hiçbiri devrik değildir."],
  dogru: 0,
  hatalar: [null, "Şart ekini yan yargı saymama: IV'teki “uzatılırsa” sözü de I'deki “açılınca” gibi yan yargı kurar. İfade doğrudur, söylenebilir.", "“Değil”li yüklemi gözden kaçırma: II'de yüklem “gürültülü değil” isim soylu ve olumsuzdur, VI'da yüklem “yükselir” olumlu bir fiildir; ikisinde de yüklemden sonra söz gelir. İfade doğrudur, söylenebilir.", "Genelleme içeren ifadeyi peşinen yanlış sayma: I, III, IV ve V'in yüklemleri olumsuzluk eki almamış çekimli fiillerdir ve dördünde de yüklem sondadır. “Hiçbiri” sözü burada doğrudur; ifade söylenebilir."],
  aciklama: `Olumsuz köklü soruda dört ifadeyi de sınaman gerekir; yanlış olan tek ifade cevaptır.
Adım 1: Yüklemleri bul. I “çekildi”, II “gürültülü değil”, III “yürüyor” ve “uyarıyor”, IV “kalabalıklaşacak”, V “arıyor”, VI “yükselir”.
Adım 2: B'yi sına. I'de “açılınca” zarf-fiili, IV'te “uzatılırsa” sözündeki şart eki yan yargı kurar. İkisi de birleşik: B söylenebilir.
Adım 3: C'yi sına. II'de yüklemden sonra “cadde artık”, VI'da “caddenin iki ucundan” geliyor: ikisi de devrik. II'nin yüklemi “gürültülü değil” isim soyludur ve “değil” cümleyi olumsuz yapar; VI'nın yüklemi “yükselir” olumlu bir fiildir. Olumsuz isim cümlesi yalnızca II: C söylenebilir.
Adım 4: D'yi sına. I, III, IV ve V'in yüklemleri çekimli fiildir; hiçbirinde -ma/-me eki yoktur, dördü de olumludur. Dördünde de yüklem sondadır: D söylenebilir.
Adım 5: A'yı sına. III'te “ve” iki yargıyı bağlar (yürüyor, uyarıyor): bağlı cümle. V'te ise tek çekimli yüklem vardır: “arıyor”. Buradaki “ve”, “masa koymanın” ile “vitrinini yenilemenin” sözlerini, yani iki isim-fiil öbeğini bağlar. V bağlı değil, fiilimsiyle kurulmuş birleşik bir cümledir. A söylenemez.
Sık yapılan hata: “ve” gördüğün her cümleyi bağlı saymak. Bağlı cümlede bağlacın iki yanında birer çekimli yüklem bulunur. “ve” sözcükleri ya da fiilimsi öbeklerini bağlıyorsa cümle bağlı olmaz.
Cevap A.`
},
{
  id: "tur-ct-321",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `On iki yıl oturduğumuz evden geçen cumartesi taşındık. Yeni evimiz daha geniş, okuluma da daha yakın; yine de o sabah içimde tuhaf bir burukluk vardı. Kardeşim ise yeni odasını düşünüp seviniyordu. Hepimiz erkenden kalkmıştık; nakliye kamyonu saat yedide sokağın başında göründü. O günü unutmamak için akşam defterime bir şeyler yazdım. Ertesi hafta Türkçe çalışırken bu yazıdan altı cümle seçip numaralandırdım:

(I) Kamyon kapıya yanaşınca babam kolileri tek tek saydı. (II) Bir veda gibiydi boşalan odaların sessizliği. (III) Asansöre sığmadı salondaki büyük koltuk. (IV) Annem perdeleri katladı, ben kitapları kolilere yerleştirdim. (V) Bizim değildi artık anahtarını teslim ettiğimiz bu ev. (VI) Balkondan son kez baktım büyüdüğüm sokağa.

Her cümleyi üç ölçüte göre inceledim: yüklemin türü (isim cümlesi, fiil cümlesi), yüklemin yeri (kurallı, devrik) ve yapı (basit, birleşik, sıralı, bağlı). İnceleyince altı cümleden yalnızca ikisinin üç ölçütte de aynı sonucu verdiğini gördüm.

**Buna göre üç ölçütte de aynı sonucu veren cümleler aşağıdakilerin hangisinde birlikte verilmiştir?**`,
  gorsel: null,
  secenekler: ["I ve IV", "II ve V", "III ve VI", "V ve VI"],
  dogru: 1,
  hatalar: ["Sıralı ile birleşiği karıştırma: ikisi de kurallı fiil cümlesidir ama I'de “yanaşınca” yan yargı kurar (birleşik), IV'te iki bağımsız yargı virgülle dizilmiştir (sıralı).", null, "Fiilimsiyi gözden kaçırma: ikisi de devrik fiil cümlesidir ama VI'da “büyüdüğüm” sıfat-fiili vardır (birleşik); III'te fiilimsi yoktur, “salondaki” -ki eklidir (basit).", "“Değil”li yüklemi fiil sanma: ikisi de devrik ve birleşiktir ama V'in yüklemi “bizim değildi” isim soylu, VI'nın yüklemi “baktım” fiildir."],
  aciklama: `Altı cümleyi üç ölçüte göre tek tek etiketle, sonra etiketleri karşılaştır.
Adım 1: I → yüklem “saydı” (fiil) ve sonda (kurallı); “yanaşınca” zarf-fiili var (birleşik).
Adım 2: II → yüklem “bir veda gibiydi” (“gibi” edatı ek fiil almış, isim soylu); ardından söz geliyor (devrik); “boşalan” sıfat-fiili var (birleşik).
Adım 3: III → yüklem “sığmadı” (fiil); ardından “salondaki büyük koltuk” geliyor (devrik); fiilimsi yok, “salondaki” -ki eklidir (basit).
Adım 4: IV → yüklemler “katladı” ve “yerleştirdim” (fiil), sonda (kurallı); iki yargı virgülle dizilmiş (sıralı).
Adım 5: V → yüklem “bizim değildi” (isim soylu); ardından söz geliyor (devrik); “ettiğimiz” sıfat-fiili var (birleşik).
Adım 6: VI → yüklem “baktım” (fiil); ardından “büyüdüğüm sokağa” geliyor (devrik); “büyüdüğüm” sıfat-fiili var (birleşik).
Adım 7: Üç etiketi de aynı olan tek çift II ile V'tir: isim cümlesi, devrik, birleşik. Öteki seçeneklerdeki çiftler iki ölçütte uyuşur, üçüncüde ayrılır.
Sık yapılan hata: “değildi” ya da “gibiydi” sözünü fiil sanmak. “Değil” de ek fiil almış “gibi” de isim soylu yüklem kurar; II ile V birer isim cümlesidir. Bu yüzden V, VI ile değil II ile eşleşir.
Cevap B.`
},
{
  id: "tur-ct-322",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Ebru, yoğunlaştırılmış suyun yüzeyine serpilen boyalarla yapılan geleneksel bir kâğıt süsleme sanatıdır. Suya, kitre adı verilen bitkisel bir zamk katılarak kıvam verilir. Boyalar suya batmaz, yüzeyde yayılır; sanatçı bu boyalara biçim verir ve ortaya çıkan deseni kâğıda aktarır. Bir ebru atölyesini tanıtan yazıdan alınan bölümde cümleler numaralandırılmıştır:

(1) Sanatçı, at kılından fırçayı boyaya batırıp teknenin üstünde hafifçe silkeler. (2) Suyun yüzeyinde açılan her damla, renkli bir halkadır. (3) Sanatçı ince bir telle halkaları çeker ve yüzeyde lale biçiminde bir desen belirir. (4) Aynı değildir hiçbir ebru bir öncekiyle. (5) Kâğıt suyun üstüne yatırılır, desen birkaç saniyede kâğıda geçer.

Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlede virgülle ayrılmış iki yargı vardır; cümle sıralıdır.
II. (2) ve (4). cümlelerin yüklemi isim soyludur; bu iki cümleden yalnızca biri devriktir.
III. (3). cümledeki bağlaç çıkarılıp yerine virgül konursa (3) ile (5). cümleler yapıca aynı türden olur.

**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: ["Zarf-fiili yüklem sanma: “batırıp” çekimli değildir; (1). cümlenin tek yüklemi “silkeler”dir ve cümle birleşiktir. I yanlıştır; II ile III ise doğrudur.", "İsim cümlesinde yüklemin yerine bakmama: (4)'ün yüklemi “aynı değildir” isim soyludur ve sonda değildir; (2) ise kurallıdır. III gibi II de doğrudur.", "Zarf-fiili yüklem sanma ve dönüşümü kaçırma: (1) birleşiktir, I yanlıştır. (3)'te “ve” yerine virgül gelince cümle (5) gibi sıralı olur; III doğrudur.", null],
  aciklama: `Sıralı cümlede bağımsız yargılar virgülle dizilir, bağlı cümlede bağlaçla bağlanır; fiilimsi ise çekimli yüklem değildir, yan yargı kurar ve cümleyi birleşik yapar.
Adım 1: I. yargı → (1). cümlede tek çekimli yüklem var: “silkeler”. “batırıp” bir zarf-fiildir, yan yargı kurar; virgül de yalnızca özneyi ayırır. Cümle sıralı değil, birleşiktir. I yanlış.
Adım 2: II. yargı → (2). cümlenin yüklemi “renkli bir halkadır”, (4). cümlenin yüklemi “aynı değildir”; ikisi de isim soylu. (2)'de yüklem sonda (kurallı), (4)'te yüklemden sonra “hiçbir ebru bir öncekiyle” geliyor (devrik). Yalnızca biri devrik. II doğru.
Adım 3: III. yargı → (3). cümlede “çeker” ve “belirir” yüklemleri “ve” ile bağlanmış: bağlı cümle. Bağlaç çıkıp yerine virgül gelince yargılar bağlaçsız dizilir: cümle sıralı olur.
Adım 4: (5). cümlede “yatırılır” ve “geçer” yüklemleri virgülle dizilmiş: sıralı cümle. Demek ki değişiklikten sonra (3) ile (5) aynı türden olur. III doğru.
Adım 5: Doğru yargılar II ve III'tür.
Sık yapılan hata: “batırıp silkeler” gibi art arda gelen iki işi iki ayrı yüklem saymak. -ıp eki zarf-fiil ekidir; “batırıp” çekimli değildir, yüklem olamaz. Sıralı cümle için en az iki çekimli yüklem gerekir.
Cevap D.`
},
{
  id: "tur-ct-323",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Yabancı filmlerdeki ve çizgi filmlerdeki karakterleri Türkçe konuşturan kişilere seslendirme sanatçısı denir. Sanatçı, kulaklığından özgün sesi dinlerken gözünü ekrandan ayırmaz; sözlerini karakterin dudak hareketlerine denk getirmeye çalışır. Bu yüzden aynı söz bazen onlarca kez yeniden kaydedilir; tek bir bölümün seslendirilmesi saatler sürebilir. İyi bir seslendirmede izleyici, karakterin aslında başka bir dilde konuştuğunu unutur. Kayıtlar, dışarıdan ses sızdırmayan özel odalarda yapılır. Bir seslendirme stüdyosunu gezen öğrencinin notlarından altı cümle aşağıda numaralandırılmıştır:

(I) Mikrofonun önündeki ince perde, patlayan sesleri tutan bir filtredir. (II) Karakter konuşmaya başlayınca susar stüdyodaki herkes. (III) Bu meslekte kostüm provası yoktur. (IV) Sanatçı metni önceden okur ve zor sözcüklerin altını çizer. (V) Daracık bir yerdir bu kayıt odası. (VI) Yönetmen camın arkasından el sallayınca kayıt başlar.

Öğrenci bu cümleleri yüklemin türü, yüklemin yeri, anlam ve yapı bakımından incelemiş; aşağıdaki özellik gruplarından üçüne birer örnek bulmuş, birine ise örnek bulamamıştır.

**Buna göre aşağıdakilerden hangisinin örneği numaralanmış cümleler arasında __yoktur__?**`,
  gorsel: null,
  secenekler: ["Yüklemi isim soylu olan devrik, birleşik cümle", "Yüklemi çekimli fiil olan kurallı, birleşik cümle", "Yüklemi isim soylu olan olumsuz, basit cümle", "Yüklemi çekimli fiil olan kurallı, bağlı cümle"],
  dogru: 0,
  hatalar: [null, "Fiilimsiyi gözden kaçırma: VI. cümlede yüklem “başlar” fiildir ve sondadır; “sallayınca” zarf-fiili cümleyi birleşik yapar. Bu özelliklerin örneği vardır.", "“Yok” yüklemini tanımama: III. cümlede “yoktur” isim soylu ve olumsuz bir yüklemdir; cümlede fiilimsi de ikinci bir yargı da bulunmaz, cümle basittir. Örneği vardır.", "“ve”nin görevine bakmama: IV. cümlede “ve” iki yargıyı (okur, çizer) bağlar; yüklemler fiildir ve sondadır. Bu özelliklerin örneği vardır."],
  aciklama: `Önce altı cümleyi etiketle, sonra her seçeneği bu etiketlerle karşılaştır.
Adım 1: I → yüklem “bir filtredir” (isim soylu) ve sonda (kurallı); “patlayan” ve “tutan” sıfat-fiilleri var (birleşik).
Adım 2: II → yüklem “susar” (fiil); ardından “stüdyodaki herkes” geliyor (devrik); “konuşmaya” ve “başlayınca” fiilimsileri var (birleşik).
Adım 3: III → yüklem “yoktur” (isim soylu, olumsuz); tek yargı var, fiilimsi yok (basit). C'nin örneği.
Adım 4: IV → yüklemler “okur” ve “çizer” (fiil), sonda (kurallı); iki yargı “ve” ile bağlanmış (bağlı). D'nin örneği.
Adım 5: V → yüklem “daracık bir yerdir” (isim soylu); ardından “bu kayıt odası” geliyor (devrik); fiilimsi yok (basit).
Adım 6: VI → yüklem “başlar” (fiil) ve sonda (kurallı); “sallayınca” zarf-fiili var (birleşik). B'nin örneği.
Adım 7: A için isim soylu yüklem, devriklik ve birleşik yapı aynı cümlede olmalı. I isim cümlesi ve birleşik ama kurallı; V isim cümlesi ve devrik ama basit; II devrik ve birleşik ama fiil cümlesi. Üçünü birden taşıyan cümle yok.
Sık yapılan hata: Üç özellikten ikisini bulunca durmak. I, II ve V'in her biri A'daki özelliklerden ikisini taşır; bu yüzden A'nın örneği varmış gibi görünür. Özellikleri ayrı cümlelerden toplayamazsın; üçü de aynı cümlede olmalı.
Cevap A.`
},
{
  id: "tur-ct-324",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Toroslar'da bazı Yörük aileleri, baharın sonunda sürülerini sahildeki kışlaklardan serin yaylalara götürür. Günlerce süren bu göç yürüyerek yapılır; çadırlar ve ev eşyaları develere yüklenir, çocuklar da sürünün ardından yürür. Yüzlerce keçiden oluşan sürü acele ettirilmez; hayvanlar yol boyunca otlayarak ilerler. Kafile gündüz yol alır, akşam olunca bir su kıyısında konaklar. Bu göçün yolları kuşaktan kuşağa aktarılır; aileler her yıl aşağı yukarı aynı geçitleri ve aynı su başlarını kullanır. Göçe eşlik eden bir belgesel yönetmeninin notlarından dört cümle aşağıda numaralandırılmıştır:

(I) Kolay değildir günlerce süren bu yürüyüş. (II) Yolu hiç şaşırmadan bulur kafilenin önündeki yaşlı keçi. (III) Yokuş dikleşince hızlanamaz yük taşıyan develer. (IV) Aileler, akşam çökmeden kurmaz çadırlarını bir su başına.

Bu notları Türkçe dersinde öğrencileriyle inceleyen öğretmen, dört cümlenin birbirine çok benzediğini ama cümlelerden yalnızca birinin şu üç özelliği birlikte taşıdığını söylemiştir:
· Yüklemi çekimli bir fiildir.
· Öznesi yüklemden sonra gelmiştir.
· Anlamca olumsuzdur.

**Buna göre öğretmenin sözünü ettiği cümle aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: ["“Değil”li yüklemi fiil sanma: özne sonda ve cümle olumsuz, ama yüklem “kolay değildir” isim soyludur; cümle isim cümlesidir.", "Olumsuzluğu yüklemin dışında arama: yüklem fiil ve özne sonda, ama -madan eki “şaşırmadan” zarf-fiilindedir; yüklem “bulur” olumludur.", null, "Yüklemden sonraki sözü özne sanma: cümle olumsuz bir fiil cümlesidir, ama öznesi baştaki “aileler”dir; yüklemden sonra gelen sözler özne değildir."],
  aciklama: `Üç özelliğin üçü de aynı cümlede olmalı; her cümlede üçünü ayrı ayrı işaretle.
Adım 1: I → yüklem “kolay değildir”. “Değil” isim soylu yüklem kurar ve cümleyi olumsuz yapar. Ne kolay değildir? “Günlerce süren bu yürüyüş”; özne yüklemden sonra. İkinci ve üçüncü özellik var, ama yüklem çekimli fiil değil; birinci özellik yok.
Adım 2: II → yüklem “bulur” (fiil). Kim bulur? “Kafilenin önündeki yaşlı keçi”; özne yüklemden sonra. Olumsuzluk yüklemde aranır: “şaşırmadan” sözündeki -madan eki bir zarf-fiil ekidir, yüklemin eki değildir. “Bulur” olumludur; üçüncü özellik yok.
Adım 3: III → yüklem “hızlanamaz” (fiil). Kim hızlanamaz? “Yük taşıyan develer”; özne yüklemden sonra. Yüklem olumsuzluk eki almış: cümle olumsuz. Üç özellik de var.
Adım 4: IV → yüklem “kurmaz” (fiil, olumsuz). Kim kurmaz? “Aileler”; özne cümlenin başında. Yüklemden sonra gelen “çadırlarını bir su başına” sözleri özne değildir; “neyi, nereye” sorularının cevabıdır. İkinci özellik yok.
Sık yapılan hata: Olumsuzluğu cümlenin herhangi bir yerinde aramak. II. cümlede “hiç” ve “şaşırmadan” sözleri olumsuzluk duygusu verir ama yüklem “bulur” olumludur; cümlenin olumlu ya da olumsuz olduğuna yükleme bakarak karar ver. Bir de devrik cümlede yüklemden sonra gelen her sözü özne sayma; özneyi bulmak için yükleme “kim, ne” diye sor.
Cevap C.`
},
{
  id: "tur-ct-325",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Okulumuzun doğa kulübü, geçen ay bir cumartesi günü ilçe sahilinde kıyı temizliği düzenledi. Kulüp üyeleri, denize ulaşan plastiğin yıllarca yok olmadığını ve küçük parçalara ayrılarak balıkların midesine girdiğini fen dersinde öğrenmişti. Etkinliğe öğrencilerin yanı sıra veliler ve mahalle sakinleri de katıldı; toplanan atıklar türlerine göre ayrılıp tartıldı. Çalışma üç saat sürdü; kumsaldan pet şişeler, poşetler, misina parçaları ve binlerce izmarit çıktı.

Kulübün internet sayfasında yayımlanan haberi okuyan Kerem, haberden dört cümle seçmiş ve bu cümleleri yüklemin türü, yüklemin yeri, anlam ve yapı bakımından inceleyip aşağıdaki tabloyu doldurmuştur. Tabloyu denetleyen Türkçe öğretmeni, Kerem'in üç cümlede birer özelliği yanlış yazdığını, yalnızca bir cümlenin dört özelliğini de doğru belirlediğini söylemiştir.

**Buna göre Kerem, numaralanmış cümlelerden hangisinin dört özelliğini de doğru belirlemiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yüklemin türü</th><th>Yüklemin yeri</th><th>Anlamı</th><th>Yapısı</th></tr><tr><td>I</td><td>Çuvalları tartan görevli, sonucu kimin açıklayacağını sordu.</td><td>fiil</td><td>kurallı</td><td>soru</td><td>birleşik</td></tr><tr><td>II</td><td>En zoru, kumun arasına karışmış izmaritleri ayıklamaktı.</td><td>fiil</td><td>kurallı</td><td>olumlu</td><td>birleşik</td></tr><tr><td>III</td><td>Kimse izmaritlerin bu kadar çok olduğunu tahmin etmemişti.</td><td>fiil</td><td>kurallı</td><td>olumsuz</td><td>basit</td></tr><tr><td>IV</td><td>Akşama doğru çöpsüz kaldı gönüllülerin temizlediği kumsal.</td><td>fiil</td><td>devrik</td><td>olumlu</td><td>birleşik</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: ["Soru sözcüklü bildirme cümlesini soru sanma: I. cümle “kimin” sözünü taşır ama cevap beklemez, bir soruyu aktarır. Anlamı “soru” değil, “olumlu” olmalıydı.", "Ek fiil almış fiilimsiyi çekimli fiil sanma: II. cümlenin yüklemi “ayıklamaktı” ek fiil almış bir isim-fiildir; böyle bir yüklem isim soyludur. Yüklemin türü “fiil” değil, “isim” olmalıydı.", "Fiilimsiyi gözden kaçırma: III. cümlede tek çekimli yüklem vardır ama “olduğunu” sözü yan yargı kurar. Yapısı “basit” değil, “birleşik” olmalıydı.", null],
  aciklama: `Her satırda önce yüklemi bul, sonra Kerem'in yazdığı dört özelliği tek tek sına. Bir satırın doğru sayılması için dört özelliğin dördü de tutmalı.
Adım 1: I → yüklem “sordu” (fiil) ve sonda (kurallı); “tartan” ve “açıklayacağını” fiilimsileri var (birleşik). Buraya kadar doğru. Cümlede “kimin” soru sözcüğü geçiyor ama cümle cevap beklemiyor; görevlinin ne sorduğunu bildiriyor ve nokta ile bitiyor. Bu bir bildirme cümlesidir, anlamı olumludur. Kerem “soru” yazmış: yanlış.
Adım 2: II → yüklem “ayıklamaktı”. “Ayıklamak” bir isim-fiildir; ek fiil alarak yüklem olmuştur. Fiilimsi çekimli fiil sayılmaz; böyle bir yüklem isim soyludur. Kerem “fiil” yazmış: yanlış. Öteki üç özellik doğru: yüklem sonda, cümle olumlu, “karışmış” sıfat-fiili yüzünden birleşik.
Adım 3: III → yüklem “tahmin etmemişti” (fiil), sonda (kurallı), olumsuzluk eki almış (olumsuz). Buraya kadar doğru. Ama “olduğunu” sözü bir fiilimsidir ve yan yargı kurar; cümle birleşiktir. Kerem “basit” yazmış: yanlış.
Adım 4: IV → yüklem “kaldı” (fiil); ardından “gönüllülerin temizlediği kumsal” geliyor (devrik); “temizlediği” sıfat-fiili var (birleşik). “Çöpsüz” sözündeki -süz eki yüklemi olumsuz yapmaz; olumsuzluk yüklemde aranır ve “kaldı” olumludur. Dört özellik de doğru.
Sık yapılan hata: IV. satırda “çöpsüz” sözüne bakıp cümleyi olumsuz saymak ve doğru satırı elemek. Olumsuzluğu yüklemde ara: -ma/-me eki, “değil” ya da “yok” yoksa cümle olumludur. Bir de I. cümledeki gibi soru sözcüğü taşıyan her cümleyi soru cümlesi sanma; cevap vermeyi dene, veremiyorsan bildirme cümlesidir.
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
