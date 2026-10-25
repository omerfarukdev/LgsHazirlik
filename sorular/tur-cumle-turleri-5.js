// Türkçe — Cümle Türleri: Kademe 3 (LGS Ayarı) yedeği, tur-ct-326…375
// Kazanım: T.8.4.19 Cümle türlerini tanır.
// Kapsam: yüklemin türü, yüklemin yeri, anlam, yapı (basit, birleşik, sıralı, bağlı).
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cumle-turleri"] = window.LGS_BANK["cumle-turleri"] || []).push(
{
  id: "tur-ct-326",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yaz kampına katılan öğrenciler, kamp defterlerine yazdıkları dört cümleyi sınıfta okudu. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem fiil cümlesi hem de yapıca birleşik bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kamp alanı gölün hemen kıyısındaydı.</td></tr><tr><td>II</td><td>Çadırlarımızı kurduk, yemek hazırlığına başladık.</td></tr><tr><td>III</td><td>Akşam hava soğuyunca herkes montunu giydi.</td></tr><tr><td>IV</td><td>Öğle yemeği her zamankinden lezzetliydi.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "'kıyısındaydı' isim soylu bir yüklemdir; cümle isim cümlesidir ve fiilimsi, şart eki ya da 'ki' olmadığı için basittir. İki ölçüt de tutmuyor.",
    "Cümle fiil cümlesidir ama 'kurduk' ve 'başladık' bağımsız yargılardır ve virgülle dizilmiştir; cümle sıralıdır, birleşik değildir.",
    null,
    "'lezzetliydi' isim soylu bir yüklemdir; cümle isim cümlesidir. 'zamankinden' sözündeki -ki eki yan yargı kurmaz, cümle basittir."
  ],
  aciklama: `Fiil cümlesi, yüklemi çekimli fiil olan cümledir. Birleşik cümle, fiilimsi, şart eki ya da ayrı yazılan 'ki' ile kurulmuş bir yan yargı taşır. İki ölçüt ayrı ayrı denetlenir.
Adım 1: I → yüklem 'kıyısındaydı' isim soylu: isim cümlesi. Fiil cümlesi ölçütü tutmuyor.
Adım 2: IV → yüklem 'lezzetliydi' isim soylu: isim cümlesi. Tutmuyor.
Adım 3: II → yüklemler 'kurduk' ve 'başladık' fiil; ama iki bağımsız yargı virgülle dizilmiş: sıralı. Birleşik ölçütü tutmuyor.
Adım 4: III → yüklem 'giydi' fiil: fiil cümlesi. 'soğuyunca' zarf-fiil olduğu için yan yargı kurar: birleşik. İki ölçüt de tutuyor.
Sık yapılan hata: Tek yüklemli cümleyi basit saymak. Fiilimsi yan yargı kurar, bu yüzden 'soğuyunca' cümleyi birleşik yapar.
Cevap C.`
},
{
  id: "tur-ct-327",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir köy muhtarı, kışın köy yoluyla ilgili hazırladığı bilgi notuna dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yüklemin yerine göre devrik, anlamca olumsuz bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kapanmadı köy yolu bütün kış.</td></tr><tr><td>II</td><td>Yolun bu bölümü kışın kapanmaz.</td></tr><tr><td>III</td><td>Servis bugün kaçta kalkıyor?</td></tr><tr><td>IV</td><td>Kar yağınca kapandı yol.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Olumsuzdur ('kapanmaz'), ama yüklem sondadır; cümle kurallıdır, devrik değildir.",
    "Yüklem sondadır, cümle kurallıdır; ayrıca anlamca soru cümlesidir, olumsuz değildir.",
    "Devriktir ('kapandı'dan sonra 'yol' gelir), ama olumsuzluk eki yoktur; cümle olumludur."
  ],
  aciklama: `Olumsuzluk yüklemdeki -ma/-me/-maz/-mez ekinde ya da 'değil, yok' sözcüklerinde aranır. Devriklik için yüklemden sonra söz gelmiş olmalıdır.
Adım 1: II → 'kapanmaz' olumsuz; ama yüklem sonda: kurallı. Devrik ölçütü tutmuyor.
Adım 2: III → soru cümlesi; yüklem 'kalkıyor' sonda: kurallı.
Adım 3: IV → yüklem 'kapandı', ardından 'yol' geliyor: devrik. Ama yüklemde olumsuzluk eki yok: olumlu.
Adım 4: I → yüklem 'kapanmadı' (-ma ile olumsuz); ardından 'köy yolu bütün kış' geliyor: devrik. İki ölçüt de tutuyor.
Sağlama: I'i 'Köy yolu bütün kış kapanmadı.' diye kurarsan yüklem sona gelir; yani asıl cümle devrik kurulmuştur.
Cevap A.`
},
{
  id: "tur-ct-328",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir balıkçı kasabasında geçen kısa bir yazıdan dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerden hangisi yapısı bakımından diğerlerinden farklıdır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Balıkçılar denize açılınca martılar peşlerine takıldı.</td></tr><tr><td>II</td><td>Ağlarını toplayan yaşlı kaptan limana yöneldi.</td></tr><tr><td>III</td><td>Hava bozarsa tekneler erken döner.</td></tr><tr><td>IV</td><td>Dalgalar yükseldi, rüzgâr sertleşti.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "'açılınca' zarf-fiili yan yargı kurar; cümle birleşiktir. II ve III ile aynı gruptadır, farklı olan değildir.",
    "'toplayan' sıfat-fiili yan yargı kurar; cümle birleşiktir. I ve III ile aynı gruptadır.",
    "'bozarsa' şart ekiyle yan yargı kurar; cümle birleşiktir. I ve II ile aynı gruptadır.",
    null
  ],
  aciklama: `Yapıya göre dört tür vardır: basit, birleşik, sıralı, bağlı. Önce her cümlede yargıları say, sonra yargıların nasıl kurulduğuna bak.
Adım 1: I → yüklem 'takıldı'; 'açılınca' fiilimsi yan yargı kurar: birleşik.
Adım 2: II → yüklem 'yöneldi'; 'toplayan' sıfat-fiil yan yargı kurar: birleşik.
Adım 3: III → 'bozarsa' şart ekiyle yan yargı kurar: birleşik.
Adım 4: IV → 'yükseldi' ve 'sertleşti' iki bağımsız yargıdır, bağlaçsız virgülle dizilmiştir: sıralı. Üçü birleşik, biri sıralı.
Sık yapılan hata: Her cümlede tek 'asıl' yüklem arayıp fiilimsileri saymamak.
Cevap D.`
},
{
  id: "tur-ct-329",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıda bir kasabayla ilgili kısa bir metin verilmiştir.

(1) Akşama doğru gökyüzü kızıllaştı. (2) Meydandaki çınar kasabanın en yaşlı tanığıydı. (3) Çocuklar gölgesinde oynarken hiç sıkılmadı.

I. 1. cümle isim cümlesidir.
II. 2. cümle hem isim cümlesi hem de basit cümledir.
III. 3. cümle yüklemin yerine göre devriktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız II","I ve III","II ve III"],
  dogru: 1,
  hatalar: [
    "I yanlıştır: 'kızıllaştı' çekimli fiildir, 1. cümle fiil cümlesidir. Yalnız I diyen, 'gökyüzü' ve 'akşam' gibi adlara bakarak karar vermiştir.",
    null,
    "I ve III yanlıştır. 3. cümlede yüklem 'sıkılmadı' sondadır; cümle kurallıdır. 'oynarken' fiilimsi olduğu için yüklem sanılmamalıdır.",
    "III yanlıştır: 3. cümlede yüklem 'sıkılmadı' cümlenin sonundadır, cümle kurallıdır. 'oynarken' ortada kalan bir fiilimsidir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle; yargılar birbirini etkilemez.
Adım 1: I → 1. cümlenin yüklemi 'kızıllaştı' çekimli fiildir. Fiil cümlesidir. I yanlış.
Adım 2: II → 2. cümlenin yüklemi 'tanığıydı' isim soyludur (isim + ek fiil). 'Meydandaki' sözündeki -ki sıfat yapan ektir, yan yargı kurmaz; tek yargı var: basit. II doğru.
Adım 3: III → 3. cümlede yüklem 'sıkılmadı' sondadır; 'oynarken' zarf-fiildir ve yüklem olamaz. Cümle kurallıdır. III yanlış.
Sağlama: Doğru olan yalnız II'dir.
Sık yapılan hata: Cümle ortasındaki fiilimsiyi yüklem sanıp devrik demek.
Cevap B.`
},
{
  id: "tur-ct-330",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bisiklet turuna katılan arkadaşlar, tur sonunda gün boyu başlarından geçenlerle ilgili dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yapıca bağlı bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bisikletlerimizi kenara çektik, nehre baktık.</td></tr><tr><td>II</td><td>Sepetteki su bitti fakat kimse yakınmadı.</td></tr><tr><td>III</td><td>Yolumuz uzundu, hava serindi.</td></tr><tr><td>IV</td><td>Rotamızı yeniden çizdik.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "İki bağımsız yargı vardır ama aralarında bağlaç yok, virgül var; cümle sıralıdır.",
    null,
    "Yargılar ('uzundu', 'serindi') bağlaçsız, virgülle dizilmiştir; cümle sıralıdır.",
    "Tek yüklem ('çizdik') ve tek yargı vardır; cümle basittir."
  ],
  aciklama: `Bağımsız yargıları 've, ama, fakat, ancak, çünkü' gibi bir bağlaç bağlıyorsa cümle bağlıdır; bağlaç yoksa ve yargılar virgülle dizilmişse sıralıdır.
Adım 1: I → 'çektik' ve 'baktık' iki yargıdır; aralarında yalnızca virgül var: sıralı.
Adım 2: III → 'uzundu' ve 'serindi' yine virgülle dizilmiş: sıralı.
Adım 3: IV → tek yargı: basit.
Adım 4: II → 'bitti' ve 'yakınmadı' iki yargıdır; 'fakat' bağlacı bunları bağlar: bağlı. 'Sepetteki' sözündeki -ki yargı kurmaz.
Sağlama: II'de 'fakat' yerine virgül koyarsan cümle sıralıya döner.
Cevap B.`
},
{
  id: "tur-ct-331",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müze gezisi sırasında duyulan dört cümle not defterine yazılmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yüklemin yerine göre devriktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kitabı yarın okuyacak mısın?</td></tr><tr><td>II</td><td>Müzeye bu hafta gidiyoruz!</td></tr><tr><td>III</td><td>Müzede ne kadar kalacağız?</td></tr><tr><td>IV</td><td>Bilet aldın mı müze için?</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Sondaki 'mısın' soru eki yüklemin parçasıdır; yüklem 'okuyacak mısın' ile bitiyor. Cümle kurallıdır.",
    "Sondaki ünlem işareti yüklemin yerini değiştirmez; yüklem 'gidiyoruz' sondadır. Cümle kurallıdır.",
    "Soru sözcüğü ('ne kadar') ortadadır ama yüklem 'kalacağız' sondadır. Cümle kurallıdır.",
    null
  ],
  aciklama: `Devrik cümlede yüklemden sonra söz gelir. Soru eki (mi, mı, mu, mü) yüklemle birlikte düşünülür; ünlem ve soru işareti de yüklemin yerini değiştirmez.
Adım 1: I → yüklem 'okuyacak' (soru eki 'mısın' yüklemin devamıdır); ardından söz yok: kurallı.
Adım 2: II → yüklem 'gidiyoruz' sonda; ünlem işareti yeri etkilemez: kurallı.
Adım 3: III → yüklem 'kalacağız' sonda: kurallı. 'ne kadar' soru sözcüğüdür, yüklem değildir.
Adım 4: IV → yüklem 'aldın' (ardından 'mı' gelir); sonra 'müze için' geliyor. Yüklemden sonra söz var: devrik.
Sık yapılan hata: Soru işaretini ya da soru ekini görüp cümleyi devrik saymak.
Cevap D.`
},
{
  id: "tur-ct-332",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun öğrencileri, okul bahçesiyle ilgili gözlemlerini dört cümleyle sınıf panosuna yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yüklemin türüne göre diğerlerinden farklıdır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kapıdaki tabelayı müdür yardımcısı değiştirdi.</td></tr><tr><td>II</td><td>Sınıfımızın panosu bu ay çok renkli.</td></tr><tr><td>III</td><td>Nöbetçi öğretmenimiz teneffüste hiç yalnız değil.</td></tr><tr><td>IV</td><td>Okulun yeni bahçesi öğrencilerin en sevdiği yerdir.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Yüklem 'renkli' isim soyludur (ek fiil söylenmemiş); cümle isim cümlesidir. III ve IV ile aynı gruptadır.",
    "Yüklem 'değil' isim soyludur; cümle isim cümlesidir. II ve IV ile aynı gruptadır.",
    "Yüklem 'yerdir' isim soyludur; 'sevdiği' fiilimsidir ve yüklem olmaz. Cümle isim cümlesidir, II ve III ile aynı gruptadır."
  ],
  aciklama: `Yüklemi çekimli fiil olan cümle fiil cümlesi, yüklemi isim soylu olan cümle isim cümlesidir. Ek fiil söylenmese bile yüklem vardır.
Adım 1: II → yüklem 'renkli' (sıfat, ek fiil düşmüş): isim cümlesi.
Adım 2: III → yüklem 'değil': isim soylu, isim cümlesi.
Adım 3: IV → yüklem 'yerdir'; 'sevdiği' fiilimsi olduğu için yüklem değil: isim cümlesi.
Adım 4: I → yüklem 'değiştirdi' çekimli fiil: fiil cümlesi. Üçü isim cümlesi, biri fiil cümlesi.
Sık yapılan hata: IV'teki 'sevdiği' fiilimsisine bakıp cümleyi fiil cümlesi saymak.
Cevap A.`
},
{
  id: "tur-ct-333",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul gazetesinin köşe yazısından dört cümle seçilmiştir. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi anlamca olumludur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kütüphanede aradığımız kitap yok.</td></tr><tr><td>II</td><td>Bu pasta pek tatlı değil.</td></tr><tr><td>III</td><td>Bu zorluğun üstesinden gelemeyecek değilsin.</td></tr><tr><td>IV</td><td>Bahçedeki kuşlar sabahtan beri ötmüyor.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "'yok' sözcüğü varlığın olmadığını bildirir; cümle anlamca olumsuzdur.",
    "'değil' yüklemi olumsuz yapar; pasta tatlı olmadığı için cümle olumsuzdur.",
    null,
    "'ötmüyor' sözündeki -me eki yargıyı olumsuz yapar; cümle olumsuzdur."
  ],
  aciklama: `Olumsuzluk yüklemde aranır: -ma/-me eki ya da 'değil', 'yok' sözcükleri. İki olumsuzluk üst üste gelirse anlam olumluya döner.
Adım 1: I → 'yok' var: olumsuz.
Adım 2: II → 'değil' var: olumsuz.
Adım 3: IV → 'ötmüyor' -me ekiyle olumsuz.
Adım 4: III → 'gelemeyecek' -me ekiyle ve 'değilsin' ile iki kez olumsuzlanmıştır. İki olumsuzluk birbirini götürür; cümle 'üstesinden geleceksin' demek ister: anlamca olumludur.
Sık yapılan hata: Cümlede -me ve 'değil' görünce olumsuz demek.
Cevap C.`
},
{
  id: "tur-ct-334",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir pazar yerinde geçen bir yazıdan dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yapıca __birleşik değildir__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Pazara gelen satıcılar tezgâhları kurdu.</td></tr><tr><td>II</td><td>Domatesler o kadar tazeydi ki hepsi bir saatte tükendi.</td></tr><tr><td>III</td><td>Köşedeki bakkal sabahtan beri açık.</td></tr><tr><td>IV</td><td>Fiyatlar düşerse müşteriler çoğalır.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "'gelen' sıfat-fiili yan yargı kurar; cümle birleşiktir.",
    "Ayrı yazılan 'ki' bağlacı yan yargı kurar; cümle birleşiktir.",
    null,
    "'düşerse' şart ekiyle yan yargı kurar; cümle birleşiktir."
  ],
  aciklama: `Birleşik cümlede asıl yargıya bağlı bir yan yargı bulunur: fiilimsi, şart eki ya da ayrı yazılan 'ki' ile kurulur.
Adım 1: I → 'gelen' sıfat-fiil: birleşik.
Adım 2: II → 'ki' bağlacı: birleşik.
Adım 3: IV → 'düşerse' şart eki: birleşik.
Adım 4: III → 'Köşedeki' sözündeki -ki eki bitişik yazılır ve sıfat yapar; yan yargı kurmaz. Başka fiilimsi, şart eki ya da 'ki' yok; yüklem 'açık' tektir. Cümle basittir (aynı zamanda isim cümlesidir).
Sık yapılan hata: Bitişik yazılan -ki ekini ayrı yazılan 'ki' bağlacı sanmak.
Cevap C.`
},
{
  id: "tur-ct-335",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, yaz tatilinde duyduğu cümleleri çözümleyip aşağıdaki tabloya yazdı.
**Bu tabloda hangi satırdaki iki bilgi de doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yüklemin türü</th><th>Yüklemin yeri</th></tr><tr><td>I</td><td>Ayrılmıştı ön sıralar bize.</td><td>Fiil cümlesi</td><td>Devrik</td></tr><tr><td>II</td><td>Bu sabah hava çok soğuktu.</td><td>Fiil cümlesi</td><td>Kurallı</td></tr><tr><td>III</td><td>Yağmur yağmadı hiç.</td><td>Fiil cümlesi</td><td>Kurallı</td></tr><tr><td>IV</td><td>Yarışmanın kazananı Elif'ti.</td><td>İsim cümlesi</td><td>Devrik</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Yüklem yeri doğru ('soğuktu' sonda, kurallı) ama tür yanlış: 'soğuktu' isim soyludur, cümle isim cümlesidir.",
    "Tür doğru (fiil cümlesi) ama yer yanlış: 'yağmadı'dan sonra 'hiç' geldiği için cümle devriktir.",
    "Tür doğru (isim cümlesi) ama yer yanlış: yüklem 'Elif'ti' sondadır, cümle kurallıdır."
  ],
  aciklama: `Her satırda iki bilgiyi ayrı ayrı denetle; ikisi de doğruysa satır doğrudur.
Adım 1: II → 'soğuktu' sıfat + ek fiildir; isim cümlesi. Tabloda 'fiil cümlesi' yazıyor: yanlış.
Adım 2: III → 'yağmadı' fiil, doğru; ama ardından 'hiç' geliyor: devrik. Tabloda 'kurallı': yanlış.
Adım 3: IV → 'Elif'ti' yüklemi sonda: kurallı. Tabloda 'devrik': yanlış.
Adım 4: I → 'ayrılmıştı' çekimli fiil: fiil cümlesi; ardından 'ön sıralar bize' geliyor: devrik. İkisi de doğru.
Sık yapılan hata: Tek bilgiyi doğru bulup satırı doğru saymak.
Cevap A.`
},
{
  id: "tur-ct-336",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sinema salonunda yan yana oturan arkadaşların konuşmalarından dört cümle seçilmiştir. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesi hem de bağlı cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bu yolu kim yaptı?</td></tr><tr><td>II</td><td>Hava kararıyor ama kimse eve dönmüyor.</td></tr><tr><td>III</td><td>Servis gelmedi, kimi bekliyoruz?</td></tr><tr><td>IV</td><td>Biletleri aldık fakat sinemaya kimle gideceğiz?</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Soru cümlesidir ('kim') ama tek yargı vardır; cümle basittir, bağlı değildir.",
    "Bağlıdır ('ama'), ama cevap beklemez, bir bilgi verir; soru cümlesi değildir.",
    "Soru cümlesidir ama iki yargı bağlaçsız, virgülle dizilmiştir; cümle sıralıdır, bağlı değildir.",
    null
  ],
  aciklama: `Soru cümlesi cevap bekler (soru eki ya da soru sözcüğü taşır). Bağlı cümle, bağımsız yargıların 've, ama, fakat, ancak, çünkü' gibi bağlaçlarla bağlanmasıyla kurulur.
Adım 1: I → soru, ama tek yargı: basit.
Adım 2: II → 'ama' ile bağlı; fakat cevap beklemiyor: bildirme.
Adım 3: III → soru; ama yargılar bağlaçsız virgülle dizilmiş: sıralı.
Adım 4: IV → 'aldık' ve 'gideceğiz' iki yargıdır, 'fakat' bağlar: bağlı. 'kimle' soru sözcüğü, cümle cevap bekler: soru. İki ölçüt de tutuyor.
Cevap D.`
},
{
  id: "tur-ct-337",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sporcu, kamp günlüğüne dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerden kaç tanesinin yüklemi isim soyludur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Koşu yolunun iki yanı çınar ağaçlarıyla doluydu.</td></tr><tr><td>II</td><td>Sabah koşusuna çıkan komşumuz bizi selamladı.</td></tr><tr><td>III</td><td>Sporcuların hepsi yarışmaya hazır.</td></tr><tr><td>IV</td><td>Kırmızı bayrağı gören gönüllüler yolu kapattı.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "Tek yüklem bulunmuş: ek fiili söylenmeyen 'hazır' ya da 'doluydu' gözden kaçmıştır. İki cümlenin yüklemi isim soyludur.",
    null,
    "Üç saymak için fiilimsili bir cümle de isim cümlesi sayılmış olmalı; 'çıkan' ve 'gören' fiilimsidir, yüklemler 'selamladı' ve 'kapattı' çekimli fiildir.",
    "Dört cümlenin hepsini isim cümlesi saymak, çok sayıda ada bakıp yüklemi aramamaktır; II ve IV'ün yüklemi fiildir."
  ],
  aciklama: `Yüklemi bulmak için çekimli fiil ara. Fiilimsi yüklem olmaz; çekimli fiil yoksa yüklem isim soyludur.
Adım 1: I → yüklem 'doluydu' (sıfat + ek fiil): isim soylu.
Adım 2: II → 'çıkan' fiilimsidir; yüklem 'selamladı' çekimli fiil: fiil cümlesi.
Adım 3: III → çekimli fiil yok; yüklem 'hazır' (ek fiil düşmüş): isim soylu.
Adım 4: IV → 'gören' fiilimsi; yüklem 'kapattı' fiil: fiil cümlesi.
Sağlama: İsim soylu yüklem I ve III'te var; sayı 2.
Cevap B.`
},
{
  id: "tur-ct-338",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sınıfta öğrenciler, grup çalışmasıyla ilgili bir metin yazdı. Metindeki üç cümle şöyledir.

(1) Proje sunumunun hazırlığı sabaha kadar sürdü. (2) Grubumuzun sorumluluğu kolay değildi ama herkes görevini üstlendi. (3) Sunum başlamadan sınıfa girmişti bile öğretmenimiz.

I. 2. cümle yapıca bağlıdır.
II. 3. cümle yapıca basittir.
III. 1. cümle yüklemin yerine göre devriktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız II","I ve III","II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II yanlıştır: 'başlamadan' zarf-fiili yan yargı kurduğu için 3. cümle birleşiktir. Cümle devrik olduğu için basit sanılmış olabilir; ama devriklik yapıyı belirlemez.",
    "III yanlıştır: 1. cümlede yüklem 'sürdü' sondadır, cümle kurallıdır.",
    "II ve III yanlıştır; 3. cümle birleşiktir, 1. cümle kurallıdır."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → 2. cümlede 'değildi' ve 'üstlendi' iki yargıdır; 'ama' bağlar: bağlı. I doğru.
Adım 2: II → 3. cümlede yüklem 'girmişti'dir; 'başlamadan' zarf-fiil yan yargı kurar: birleşik. 'Basit' demek yanlıştır. II yanlış.
Adım 3: III → 1. cümlede yüklem 'sürdü' sondadır: kurallı. III yanlış.
Sağlama: Doğru yargı yalnız I'dir.
Sık yapılan hata: Devrik cümleyi basit saymak. Yüklemin yeri ile yargı sayısı birbirinden bağımsızdır.
Cevap A.`
},
{
  id: "tur-ct-339",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor müsabakasını izleyen bir gazeteci, notlarına dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yüklemin yerine göre diğerlerinden farklıdır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Maç başlamadan dolmuştu tribünler.</td></tr><tr><td>II</td><td>Çok heyecanlıydı bu akşamki seyirciler.</td></tr><tr><td>III</td><td>Kazandı son dakikada ev sahibi takım.</td></tr><tr><td>IV</td><td>Seyirciler maç boyunca coşkuyla tezahürat yaptı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Yüklem 'dolmuştu'dur ve ardından 'tribünler' gelir; cümle devriktir. II ve III ile aynı gruptadır.",
    "Yüklem 'heyecanlıydı'dır ve ardından söz gelir; cümle devriktir. I ve III ile aynı gruptadır.",
    "Yüklem 'kazandı'dır ve ardından söz gelir; cümle devriktir. I ve II ile aynı gruptadır.",
    null
  ],
  aciklama: `Kurallı cümlede yüklem sondadır; devrik cümlede yüklemden sonra söz gelir.
Adım 1: I → yüklem 'dolmuştu', ardından 'tribünler' var: devrik. 'başlamadan' fiilimsidir, yüklem değildir.
Adım 2: II → yüklem 'heyecanlıydı' (isim soylu), ardından 'bu akşamki seyirciler' var: devrik.
Adım 3: III → yüklem 'kazandı', ardından 'son dakikada ev sahibi takım' var: devrik.
Adım 4: IV → yüklem 'yaptı' sondadır: kurallı. Üçü devrik, biri kurallı.
Cevap D.`
},
{
  id: "tur-ct-340",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun bahçe düzenleme çalışmasını anlatan yazıdan dört cümle seçilmiştir. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yapıca basit bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Fidanları dikti, hepsini suladı.</td></tr><tr><td>II</td><td>Suyu verince toprak canlandı.</td></tr><tr><td>III</td><td>Bahçenin uzak köşesindeki fidanlar bile yeşerdi.</td></tr><tr><td>IV</td><td>Çiçekler açtı ve arılar bahçeye doluştu.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "'dikti' ve 'suladı' iki yargıdır; bağlaçsız virgülle dizilmiştir. Cümle sıralıdır.",
    "'verince' zarf-fiili yan yargı kurar; cümle birleşiktir.",
    null,
    "'açtı' ve 'doluştu' iki yargıdır; 've' yargıları bağlar. Cümle bağlıdır."
  ],
  aciklama: `Basit cümlede tek yargı vardır; fiilimsi, şart eki, ayrı yazılan 'ki' ve yargıları bağlayan bir bağlaç bulunmaz.
Adım 1: I → iki çekimli fiil, virgülle: sıralı.
Adım 2: II → 'verince' zarf-fiil: birleşik.
Adım 3: IV → iki yargıyı 've' bağlıyor: bağlı.
Adım 4: III → yüklem 'yeşerdi' tektir. 'köşesindeki' sözündeki -ki sıfat yapan ektir, yan yargı kurmaz; 'bile' yargı bağlamaz. Cümle basittir.
Sık yapılan hata: Uzun cümleyi birleşik saymak. Uzunluk değil, yargı sayısı belirleyicidir.
Cevap C.`
},
{
  id: "tur-ct-341",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir deniz kenarı kasabasında yaşanan olayla ilgili dört cümle yazılmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem de anlamca olumsuz bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Hiçbir uyarıyı dinlemedi yolcular.</td></tr><tr><td>II</td><td>Hava kararırken kimse sahilde değildi.</td></tr><tr><td>III</td><td>Dalgalar giderek yükseliyordu.</td></tr><tr><td>IV</td><td>Bu kıyıda yüzmek güvenlidir.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "Olumsuzdur ('dinlemedi'), ama yüklem çekimli fiildir; fiil cümlesidir.",
    null,
    "Yüklem 'yükseliyordu' çekimli fiildir ve cümle olumludur. İki ölçüt de tutmuyor.",
    "İsim cümlesidir ('güvenlidir'), ama yüklemde olumsuzluk eki ya da sözcüğü yok; cümle olumludur."
  ],
  aciklama: `İsim cümlesinde yüklem isim soyludur; olumsuz cümlede yüklemde -ma/-me ya da 'değil, yok' bulunur.
Adım 1: I → 'dinlemedi' -me ile olumsuz ama yüklem fiil: fiil cümlesi.
Adım 2: III → 'yükseliyordu' fiil, olumlu. İkisi de tutmuyor.
Adım 3: IV → 'güvenlidir' isim soylu: isim cümlesi; ama yüklemde olumsuzluk eki yok, cümle olumlu.
Adım 4: II → yüklem 'değildi': hem isim soylu (isim cümlesi) hem olumsuzluk bildirir. 'kararırken' yan yargı kurar ama sorulan ölçütlerle ilgisi yok. İki ölçüt de tutuyor.
Cevap B.`
},
{
  id: "tur-ct-342",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tren yolculuğunu anlatan metinden üç cümle alınmıştır.

(1) Tren istasyondan hareket edince yolcular yerlerine oturdu. (2) Kompartımandaki yaşlı amca hiçbir şey söylemedi. (3) Çok kalabalıktı vagonlar.

I. 1. cümle yapıca basittir.
II. 2. cümle anlamca olumsuzdur.
III. 3. cümle isim cümlesidir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II","II ve III","I ve III","I, II ve III"],
  dogru: 1,
  hatalar: [
    "I yanlıştır: 'edince' zarf-fiili yan yargı kurar, 1. cümle birleşiktir. III de doğru olduğu için bu seçenek eksiktir.",
    null,
    "I yanlıştır: 1. cümle 'edince' ile birleşiktir. II doğru olduğu halde bu seçenekte yok.",
    "I yanlıştır: 1. cümle birleşiktir, basit değildir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → 1. cümlede 'edince' zarf-fiildir; 'oturdu' asıl yargıdır. İki yargı var: birleşik. I yanlış.
Adım 2: II → 'söylemedi' -me ile olumsuzdur: II doğru.
Adım 3: III → yüklem 'kalabalıktı' isim soyludur (cümle devrik, ama tür isim): III doğru.
Sağlama: II ve III doğru, I yanlış.
Sık yapılan hata: Yüklemi başa gelen devrik cümlede 'kalabalıktı'yı fiil sanmak.
Cevap B.`
},
{
  id: "tur-ct-343",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kitap kulübünde üyeler, okudukları öykülerden dört cümle seçti. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi sıralı cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kapı gıcırdadı, ışık yandı, içeri biri girdi.</td></tr><tr><td>II</td><td>Işık sönünce oda karanlığa gömüldü.</td></tr><tr><td>III</td><td>Işık yandı ve oda aydınlandı.</td></tr><tr><td>IV</td><td>Odanın tek penceresi bahçeye bakıyordu.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "'sönünce' zarf-fiili yan yargı kurar; cümle birleşiktir.",
    "İki yargıyı 've' bağlar; cümle bağlıdır.",
    "Tek yargı vardır; cümle basittir."
  ],
  aciklama: `Sıralı cümle, birbirinden bağımsız yargıların bağlaçsız, virgül ya da noktalı virgülle dizilmesiyle kurulur.
Adım 1: II → 'sönünce' fiilimsi yan yargı: birleşik.
Adım 2: III → 'yandı' ve 'aydınlandı' arasında 've' bağlacı var: bağlı.
Adım 3: IV → tek yargı: basit.
Adım 4: I → 'gıcırdadı', 'yandı', 'girdi' üç bağımsız yargı; aralarında bağlaç yok, virgül var: sıralı.
Sağlama: III'te 've' yerine virgül koyarsan o da sıralıya döner.
Cevap A.`
},
{
  id: "tur-ct-344",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, ders çalışırken karşılaştığı dört cümleyi not defterine yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi __soru cümlesi değildir__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bu bilgiyi hangi kaynaktan öğrendin?</td></tr><tr><td>II</td><td>Ödevi bitirmeden uyudun mu?</td></tr><tr><td>III</td><td>Okula kimin erken geleceğini yarın göreceğiz.</td></tr><tr><td>IV</td><td>Kaç kişi bu yarışmaya katılacak?</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "'hangi' soru sözcüğüdür; cümle cevap bekler. Soru cümlesidir.",
    "'mu' soru ekidir; cümle cevap bekler. Soru cümlesidir.",
    null,
    "'kaç' soru sözcüğüdür; cümle cevap bekler. Soru cümlesidir."
  ],
  aciklama: `Soru cümlesi cevap bekler. Soru sözcüğü (kim, ne, kaç, hangi) taşıyan her cümle soru olmaz; cümle bir bilgi veriyorsa bildirme cümlesidir.
Adım 1: I → 'hangi' ile soru: cevap bekler.
Adım 2: II → 'mu' eki ile soru.
Adım 3: IV → 'kaç' ile soru.
Adım 4: III → 'kimin' sözü olsa da cümle 'yarın göreceğiz' diyerek bir bilgi verir; cevap beklemez. 'Evet' ya da 'hayır' diyemezsin. Soru cümlesi değildir.
Sık yapılan hata: Soru sözcüğü görünce soru demek.
Cevap C.`
},
{
  id: "tur-ct-345",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir havuz kuralları panosundaki dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin kaç tanesi yapıca birleşiktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Havuza girmeden önce duş almak zorunludur.</td></tr><tr><td>II</td><td>Yüzme bilmiyorsan kenardan ayrılma.</td></tr><tr><td>III</td><td>Suyun o kadar soğuk olduğunu kimse tahmin etmemişti.</td></tr><tr><td>IV</td><td>Havuz o kadar kalabalıktı ki kimse kulaç atamadı.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 3,
  hatalar: [
    "Yalnız bir cümleyi birleşik saymak; oysa dört cümlede de birer yan yargı vardır.",
    "İki cümleyi saymak, fiilimsili ya da 'ki'li cümlelerden ikisini gözden kaçırmaktır.",
    "Üç saymak, bir cümleyi basit sanmaktır; bütün cümlelerde yan yargı vardır.",
    null
  ],
  aciklama: `Birleşik cümleyi dört yol kurar: fiilimsi, şart eki, ayrı yazılan 'ki', alıntı. Her cümlede bu yollardan birini ara.
Adım 1: I → 'girmeden' (zarf-fiil) ve 'almak' (isim-fiil): birleşik.
Adım 2: II → 'bilmiyorsan' şart eki: birleşik.
Adım 3: III → 'olduğunu' (isim-fiil): birleşik.
Adım 4: IV → ayrı yazılan 'ki': birleşik.
Sağlama: Dört cümlenin dördü de birleşik.
Sık yapılan hata: Tek çekimli yüklem görüp cümleyi basit saymak.
Cevap D.`
},
{
  id: "tur-ct-346",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıda tek bir cümle verilmiştir.

Yağmur başlayınca dağıldı pazar yerindeki kalabalık.

**Bu cümlenin yüklemin türü, yüklemin yeri, anlam ve yapı bakımından çözümlemesi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Fiil cümlesi, kurallı, olumlu, birleşik","Fiil cümlesi, devrik, olumlu, basit","İsim cümlesi, devrik, olumlu, birleşik","Fiil cümlesi, devrik, olumlu, birleşik"],
  dogru: 3,
  hatalar: [
    "Yüklem 'dağıldı'dan sonra 'pazar yerindeki kalabalık' geldiği için cümle devriktir, kurallı değildir.",
    "'başlayınca' zarf-fiili yan yargı kurduğu için cümle birleşiktir, basit değildir.",
    "'dağıldı' çekimli fiildir; cümle fiil cümlesidir. 'kalabalık' özne olduğu için isim cümlesi sanılmıştır.",
    null
  ],
  aciklama: `Çözümleme sırası: yüklem → tür → yer → anlam → yapı.
Adım 1: Yüklem 'dağıldı' çekimli fiil: fiil cümlesi. 'kalabalık' sözü öznedir, yüklem değil.
Adım 2: Yüklemden sonra 'pazar yerindeki kalabalık' geliyor: devrik. 'pazar yerindeki' sözündeki -ki sıfat yapan ektir.
Adım 3: Olumsuzluk eki ya da sözcüğü yok, soru eki yok: olumlu.
Adım 4: 'başlayınca' zarf-fiildir, yan yargı kurar: birleşik.
Sık yapılan hata: Çözümlemeyi bir ölçütte bırakmak. Dört sınıflama birbirinden bağımsızdır.
Cevap D.`
},
{
  id: "tur-ct-347",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, sınavdan önce çözümleme yaptığı cümleleri sıraya dizdi. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerden kaç tanesi yüklemin yerine göre devriktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Sınıfa girdi öğretmen elinde kâğıtlarla.</td></tr><tr><td>II</td><td>Elinde kâğıtlarla sınıfa giren öğretmen gülümsüyordu.</td></tr><tr><td>III</td><td>Öğrenciler soruları dikkatle okuyor mu?</td></tr><tr><td>IV</td><td>Sınavın süresi kırk dakikaydı.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 0,
  hatalar: [
    null,
    "İki saymak, II'deki 'giren' fiilimsisini yüklem sanmaktır; yüklem 'gülümsüyordu' sondadır.",
    "Üç saymak, III'teki soru ekini ve IV'ü de devrik sanmaktır; her ikisinde yüklem sondadır.",
    "Dört saymak, yüklemin yerine bakmadan yalnızca fiilimsiye ya da soru ekine bakmaktır."
  ],
  aciklama: `Devrik cümlede yüklemden sonra söz gelir. Önce yüklemi bul, sonra ondan sonra söz kalıp kalmadığına bak.
Adım 1: I → yüklem 'girdi'; ardından 'öğretmen elinde kâğıtlarla' geliyor: devrik.
Adım 2: II → 'giren' fiilimsidir; yüklem 'gülümsüyordu' sondadır: kurallı.
Adım 3: III → yüklem 'okuyor' (soru eki 'mu' yüklemle birlikte): sonda, kurallı.
Adım 4: IV → yüklem 'kırk dakikaydı' sondadır: kurallı.
Sağlama: Devrik olan yalnız I; sayı 1.
Cevap A.`
},
{
  id: "tur-ct-348",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir deniz tatilinden dönen öğrenciler, yaşadıklarını dört cümleyle anlattı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem yapıca birleşik hem de anlamca olumsuzdur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Hava açınca denize girdik.</td></tr><tr><td>II</td><td>Deniz soğuktu, kimse suya girmedi.</td></tr><tr><td>III</td><td>Suya girmeden önce ısınma hareketleri yapmadık.</td></tr><tr><td>IV</td><td>Salı günü havuza gidemedik.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "Birleşiktir ('açınca'), ama yüklemde olumsuzluk eki yok; cümle olumludur.",
    "Olumsuzdur ('girmedi'), ama iki bağımsız yargı virgülle dizilmiştir; cümle sıralıdır, birleşik değildir.",
    null,
    "Olumsuzdur ('gidemedik'), ama tek yargı vardır; cümle basittir."
  ],
  aciklama: `Birleşik: yan yargı (fiilimsi, şart, 'ki'). Olumsuz: yüklemde -ma/-me, 'değil' ya da 'yok'. İki ölçüt ayrı denetlenir.
Adım 1: I → 'açınca' birleşik; yüklem 'girdik' olumlu.
Adım 2: II → 'girmedi' olumsuz; ama 'soğuktu' ve 'girmedi' virgülle dizilmiş iki bağımsız yargı: sıralı.
Adım 3: IV → 'gidemedik' olumsuz; yargı tek: basit.
Adım 4: III → 'girmeden' zarf-fiil yan yargı kurar: birleşik; yüklem 'yapmadık' -ma ile olumsuz. İki ölçüt de tutuyor.
Sık yapılan hata: -madan ekini yüklem sanmak. 'girmeden' yüklem değil, fiilimsidir.
Cevap C.`
},
{
  id: "tur-ct-349",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzeyi gezen öğrencilerin notlarından üç cümle alınmıştır.

(1) Müzenin giriş katında eski sikkeler sergileniyor. (2) Salonun diğer ucunda neler var? (3) Rehber sergiyi gezdirirken çocuklar hiç soru sormadı.

I. 1. cümle isim cümlesidir.
II. 2. cümle soru cümlesidir ve yüklemi fiildir.
III. 3. cümle hem birleşik hem olumsuzdur.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","Yalnız III","I ve II","I ve III"],
  dogru: 1,
  hatalar: [
    "II yanlıştır: 'var' isim soylu bir yüklemdir, 2. cümlenin türü isim cümlesidir. III doğru olduğu için bu seçenek eksiktir.",
    null,
    "I ve II yanlıştır; 1. cümle fiil cümlesidir ('sergileniyor'), 2. cümlenin yüklemi isim soyludur.",
    "I yanlıştır: 1. cümlenin yüklemi 'sergileniyor' çekimli fiildir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → yüklem 'sergileniyor' çekimli fiil: fiil cümlesi. I yanlış.
Adım 2: II → 'neler' soru sözcüğü: soru cümlesi. Ama yüklem 'var' isim soyludur (var ve yok isim soylu yüklem kurar). II yanlış.
Adım 3: III → 'gezdirirken' zarf-fiil: birleşik; 'sormadı' -me ile olumsuz. III doğru.
Sağlama: Doğru yargı yalnız III'tür.
Sık yapılan hata: Soru cümlesinin yüklemini fiil sanmak.
Cevap B.`
},
{
  id: "tur-ct-350",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir göl kenarındaki çay bahçesini anlatan yazıdan dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem de yapıca basit bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Gölün kenarındaki çay bahçesi çok sakin.</td></tr><tr><td>II</td><td>Çay bahçesi sakin olduğu için akşamları orada oturuyoruz.</td></tr><tr><td>III</td><td>Sakin köşeyi kardeşim seçti.</td></tr><tr><td>IV</td><td>Göl sessiz olunca akşam yürüyüşleri güzeldir.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Birleşiktir ('olduğu için'), yüklem 'oturuyoruz' fiildir; iki ölçüt de tutmuyor.",
    "Basittir ama yüklem 'seçti' fiildir; fiil cümlesidir.",
    "İsim cümlesidir ('güzeldir'), ama 'olunca' zarf-fiili yan yargı kurduğu için birleşiktir; basit değildir."
  ],
  aciklama: `İsim cümlesi: yüklem isim soylu. Basit cümle: tek yargı, yan yargı yok.
Adım 1: II → yüklem 'oturuyoruz' fiil. Tutmuyor.
Adım 2: III → yüklem 'seçti' fiil. Tutmuyor.
Adım 3: IV → yüklem 'güzeldir' isim soylu; ama 'olunca' yan yargı kurar: birleşik. Basit ölçütü tutmuyor.
Adım 4: I → yüklem 'sakin' (ek fiil düşmüş), isim soylu. 'kenarındaki' sözündeki -ki yan yargı kurmaz; cümle basittir. İki ölçüt de tutuyor.
Sık yapılan hata: Ek fiil söylenmeyince yüklem yok sanmak.
Cevap A.`
},
{
  id: "tur-ct-351",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, ertesi günkü yürüyüş hazırlığını anlatan dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi yapıca bağlı bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yarın erken kalkacağım, sabaha hazırlıklı olmalıyım.</td></tr><tr><td>II</td><td>Çalar saati kurdum, çantamı hazırladım.</td></tr><tr><td>III</td><td>Bu akşam erken yatarsam yarın dinç olurum.</td></tr><tr><td>IV</td><td>Yarın uzun bir yürüyüş var çünkü yarışma sabah başlayacak.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "İki bağımsız yargı vardır ama aralarında bağlaç yok, virgül var; cümle sıralıdır.",
    "'kurdum' ve 'hazırladım' bağlaçsız, virgülle dizilmiştir; cümle sıralıdır.",
    "'yatarsam' şart ekiyle yan yargı kurar; cümle birleşiktir.",
    null
  ],
  aciklama: `Bağımsız yargılar 've, ama, fakat, ancak, çünkü' gibi bir bağlaçla bağlanıyorsa cümle bağlıdır. Bağlaç yoksa ve yargılar virgülle dizilmişse cümle sıralıdır.
Adım 1: I → 'kalkacağım' ve 'olmalıyım' arasında yalnızca virgül var: sıralı.
Adım 2: II → 'kurdum' ve 'hazırladım' arasında yalnızca virgül var: sıralı.
Adım 3: III → 'yatarsam' şart eki yan yargı kurar: birleşik.
Adım 4: IV → 'var' ve 'başlayacak' iki bağımsız yargıdır; 'çünkü' bağlacı bunları bağlar: bağlı. Yargıların türünün farklı olması (biri isim, biri fiil) bağlı olmaya engel değildir.
Sık yapılan hata: Virgüllü her cümleyi sıralı saymak. Bağlaç varsa cümle bağlıdır.
Cevap D.`
},
{
  id: "tur-ct-352",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıda tek bir cümle verilmiştir.

Kim açtı bu kapıyı gece yarısı?

**Bu cümlenin yüklemin türü, yüklemin yeri, anlam ve yapı bakımından çözümlemesi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Fiil cümlesi, kurallı, soru, basit","Fiil cümlesi, devrik, soru, basit","İsim cümlesi, devrik, soru, basit","Fiil cümlesi, devrik, soru, birleşik"],
  dogru: 1,
  hatalar: [
    "Yüklem 'açtı'dan sonra 'bu kapıyı gece yarısı' geldiği için cümle devriktir; soru işaretine bakıp yüklemi sonda sanmak yanlıştır.",
    null,
    "'açtı' çekimli fiildir; cümle fiil cümlesidir. 'Kim' soru sözcüğüdür, yüklem değildir.",
    "Cümlede fiilimsi, şart eki ya da 'ki' yok; tek yargı vardır. Cümle basittir."
  ],
  aciklama: `Çözümleme sırası: yüklem → tür → yer → anlam → yapı.
Adım 1: Yüklem 'açtı' çekimli fiil: fiil cümlesi.
Adım 2: Yüklemden sonra 'bu kapıyı gece yarısı' geliyor: devrik.
Adım 3: 'Kim' soru sözcüğüdür, cümle cevap bekler: soru cümlesi.
Adım 4: Tek yargı var, yan yargı yok: basit.
Sık yapılan hata: Soru cümlelerinde yüklemi sonda aramak. Yüklem 'açtı'dır ve cümle devriktir.
Cevap B.`
},
{
  id: "tur-ct-353",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir akşam yemeğine ilişkin yazılan dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesi hem de anlamca olumsuz bir cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kimler bu akşam yemeğe gelecek?</td></tr><tr><td>II</td><td>Hiçbir misafir yemeğe gelmedi.</td></tr><tr><td>III</td><td>Salonda boş koltuk kalmadı mı?</td></tr><tr><td>IV</td><td>Misafirler yemekten sonra sofrayı topladı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "Soru cümlesidir ('kimler') ama yüklemde olumsuzluk yok; cümle olumludur.",
    "Olumsuzdur ('gelmedi') ama cevap beklemez, bilgi verir; soru cümlesi değildir.",
    null,
    "Ne soru ne olumsuzluk vardır; cümle olumlu bir bildirmedir."
  ],
  aciklama: `Soru ile olumsuzluk ayrı ölçütlerdir. Soru eki ya da soru sözcüğü cümleyi soru yapar; -ma/-me, 'değil', 'yok' yüklemi olumsuz yapar. Bir cümlede ikisi birlikte bulunabilir.
Adım 1: I → 'kimler' ile soru; yüklem 'gelecek' olumlu.
Adım 2: II → 'gelmedi' olumsuz; soru işareti ya da soru eki yok.
Adım 3: IV → soru da olumsuzluk da yok.
Adım 4: III → 'kalmadı' -ma ile olumsuz ve 'mı' soru ekiyle cevap bekliyor: hem soru hem olumsuz.
Cevap C.`
},
{
  id: "tur-ct-354",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir evde yapılan temizlik işlerini anlatan dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisinde 've' bağlacı iki yargıyı bağlamıştır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kardeşim kitaplığı topladı ve odasını süpürdü.</td></tr><tr><td>II</td><td>Ece ve Mert kapıyı birlikte açtı.</td></tr><tr><td>III</td><td>Elma ve armut meyve tabağında duruyordu.</td></tr><tr><td>IV</td><td>Sınıfımızın en uzun ve en çalışkan öğrencisi ödül aldı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "'ve' yalnızca iki özneyi (Ece, Mert) bağlar; tek yüklem ('açtı') vardır, cümle basittir.",
    "'ve' iki özneyi (elma, armut) bağlar; tek yüklem ('duruyordu') vardır, cümle basittir.",
    "'ve' iki sıfatı (uzun, çalışkan) bağlar; tek yüklem ('aldı') vardır, cümle basittir."
  ],
  aciklama: `'Ve' sözcükleri bağlıyorsa cümle basit kalır; yargıları (yüklemleri) bağlıyorsa cümle bağlı olur. Önce yüklemleri say.
Adım 1: II → tek yüklem 'açtı'; 've' iki özneyi bağlıyor.
Adım 2: III → tek yüklem 'duruyordu'; 've' iki özneyi bağlıyor.
Adım 3: IV → tek yüklem 'aldı'; 've' iki sıfatı bağlıyor.
Adım 4: I → 'topladı' ve 'süpürdü' iki yüklemdir; 've' bu iki yargıyı bağlar: bağlı cümle.
Sağlama: 've'den sonra yeni bir yüklem varsa yargılar bağlanmıştır.
Cevap A.`
},
{
  id: "tur-ct-355",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul serasını anlatan metinden üç cümle alınmıştır.

(1) Serada kızarmaya başladı domatesler. (2) Bu sezon seranın verimi çok yüksek. (3) Bahçıvan kapıyı açtı ama içeri girmedi.

I. 1. cümle hem devrik hem birleşiktir.
II. 2. cümle fiil cümlesidir.
III. 3. cümle bağlı cümledir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız III","I ve III","I, II ve III"],
  dogru: 2,
  hatalar: [
    "III de doğru olduğu için bu seçenek eksiktir: 3. cümlede 'açtı' ve 'girmedi' yargılarını 'ama' bağlar.",
    "I de doğru olduğu için bu seçenek eksiktir: 1. cümlede 'kızarmaya' isim-fiili yan yargı kurar, yüklem 'başladı'dan sonra 'domatesler' gelir.",
    null,
    "II yanlıştır: 2. cümlenin yüklemi 'yüksek' isim soyludur, cümle isim cümlesidir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → yüklem 'başladı'; ardından 'domatesler' geliyor: devrik. 'kızarmaya' isim-fiildir, yan yargı kurar: birleşik. I doğru.
Adım 2: II → yüklem 'yüksek' (ek fiil düşmüş), isim soylu: isim cümlesi. 'Fiil cümlesidir' demek yanlıştır. II yanlış.
Adım 3: III → 'açtı' ve 'girmedi' iki yargıdır; 'ama' bağlar: bağlı. III doğru.
Sağlama: I ve III doğru, II yanlış.
Sık yapılan hata: Ek fiilsiz yüklemi görmeyip cümleye fiil cümlesi demek.
Cevap C.`
},
{
  id: "tur-ct-356",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir konser çıkışında dinleyicilerin sözlerinden dört cümle derlenmiştir. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem yapıca birleşik hem de yüklemin yerine göre devriktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Işıklar sönünce sessizliğe gömüldü salon.</td></tr><tr><td>II</td><td>Hava soğuk olduğu için boştu bahçe.</td></tr><tr><td>III</td><td>Konser biter bitmez herkes dışarı çıktı.</td></tr><tr><td>IV</td><td>Salonun kapısı açıktı, pencereler kapalıydı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "Birleşik ('sönünce') ve devriktir, ama yüklem 'gömüldü' çekimli fiildir; isim cümlesi değildir.",
    null,
    "Birleşiktir ('biter bitmez') ama yüklem 'çıktı' fiildir ve sondadır; isim cümlesi de devrik de değildir.",
    "İsim cümlesidir ('açıktı', 'kapalıydı') ama iki yargı bağlaçsız dizilmiştir; sıralıdır, birleşik değildir. Yüklem de sondadır."
  ],
  aciklama: `Üç ölçüt var: yüklem isim soylu, yapı birleşik, yüklem sonda değil. Her seçeneği üçüyle ayrı ayrı sına.
Adım 1: I → yüklem 'gömüldü' fiil. İsim cümlesi ölçütü tutmuyor.
Adım 2: III → yüklem 'çıktı' fiil ve sonda. Tutmuyor.
Adım 3: IV → yüklemler isim soylu; ama virgülle dizilmiş iki bağımsız yargı var: sıralı, birleşik değil.
Adım 4: II → 'olduğu için' fiilimsisi yan yargı kurar: birleşik. Yüklem 'boştu' isim soylu: isim cümlesi. Ardından 'bahçe' geliyor: devrik. Üç ölçüt de tutuyor.
Sık yapılan hata: İki ölçütü sağlayanı bulunca durmak. Üçüncü ölçütü de sına.
Cevap B.`
},
{
  id: "tur-ct-357",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir havaalanında yazılan dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesi hem yüklemin yerine göre devrik hem de yapıca birleşiktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kim karşıladı seni havaalanında?</td></tr><tr><td>II</td><td>Tatile çıkınca kimi arayacaksın?</td></tr><tr><td>III</td><td>Bilet alacak mısın bu akşam?</td></tr><tr><td>IV</td><td>Eve dönünce uyudu mu kardeşin?</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Soru ve devriktir ('karşıladı'dan sonra söz var) ama yan yargı yoktur; cümle basittir.",
    "Soru ve birleşiktir ('çıkınca') ama yüklem 'arayacaksın' sondadır; cümle kurallıdır.",
    "Soru ve devriktir ('alacak mısın'dan sonra 'bu akşam' var) ama fiilimsi, şart ya da 'ki' yok; cümle basittir.",
    null
  ],
  aciklama: `Üç ölçüt var: soru, devrik, birleşik. Her seçeneği üçüyle ayrı ayrı sına.
Adım 1: I → 'kim' ile soru; devrik; ama tek yargı: basit. Birleşik değil.
Adım 2: III → soru eki 'mısın'; yüklemden sonra 'bu akşam' var: devrik; ama yan yargı yok: basit.
Adım 3: II → soru; 'çıkınca' ile birleşik; ama yüklem 'arayacaksın' sonda: kurallı.
Adım 4: IV → 'mu' ile soru; 'dönünce' zarf-fiili ile birleşik; yüklem 'uyudu'dan sonra 'kardeşin' geliyor: devrik. Üç ölçüt de tutuyor.
Cevap D.`
},
{
  id: "tur-ct-358",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, seçtiği cümlelerin yapısını aşağıdaki tabloda belirtti.
**Bu tabloda hangi satırdaki bilgi __yanlıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yapısı</th></tr><tr><td>I</td><td>Yağmur dinince yola koyulduk.</td><td>Birleşik</td></tr><tr><td>II</td><td>Havuzun suyu temizdi ama çok soğuktu.</td><td>Bağlı</td></tr><tr><td>III</td><td>Bilet fiyatları bu yaz oldukça yüksek.</td><td>Basit</td></tr><tr><td>IV</td><td>Mektubu yazdı, zarfa koydu.</td><td>Bağlı</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Bilgi doğrudur: 'dinince' zarf-fiili yan yargı kurar, cümle birleşiktir.",
    "Bilgi doğrudur: 'temizdi' ve 'soğuktu' yargılarını 'ama' bağlar, cümle bağlıdır.",
    "Bilgi doğrudur: tek yargı vardır, cümle basittir.",
    null
  ],
  aciklama: `Her satırdaki yapı bilgisini cümleyle karşılaştır.
Adım 1: I → 'dinince' fiilimsi yan yargı kurar: birleşik. Tablo doğru.
Adım 2: II → 'temizdi' ve 'soğuktu' iki yargıdır, 'ama' bağlar: bağlı. Tablo doğru.
Adım 3: III → tek yargı ('yüksek'), yan yargı yok: basit. Tablo doğru.
Adım 4: IV → 'yazdı' ve 'koydu' iki yargıdır; aralarında bağlaç yok, virgül var: sıralı. Tabloda 'bağlı' yazıyor: yanlış.
Sık yapılan hata: Birden fazla yüklemli her cümleyi bağlı saymak. Bağlı olması için bağlaç gerekir.
Cevap D.`
},
{
  id: "tur-ct-359",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir havalimanı görevlisi, yolcu not defterinden dört cümleyi çözümleyip tabloya yazdı.
**Bu tabloda hangi satırdaki bilgi __yanlıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Anlamı</th><th>Yüklemin yeri</th></tr><tr><td>I</td><td>Hiçbir yolcu bagajını yalnız bırakmadı.</td><td>Olumsuz</td><td>Devrik</td></tr><tr><td>II</td><td>Duymadın mı alarmın sesini?</td><td>Soru</td><td>Devrik</td></tr><tr><td>III</td><td>Bu bavul benim değil.</td><td>Olumsuz</td><td>Kurallı</td></tr><tr><td>IV</td><td>Kayboldu çantam terminalde.</td><td>Olumlu</td><td>Devrik</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Bilgiler doğrudur: 'mı' soru eki cümleyi soru yapar; 'duymadın'dan sonra 'alarmın sesini' geldiği için cümle devriktir.",
    "Bilgiler doğrudur: 'değil' cümleyi olumsuz yapar; yüklem sondadır, cümle kurallıdır.",
    "Bilgiler doğrudur: yüklemde olumsuzluk yoktur; 'kayboldu'dan sonra söz geldiği için cümle devriktir."
  ],
  aciklama: `Her satırdaki iki bilgiyi ayrı ayrı denetle.
Adım 1: II → soru eki 'mı' var: soru. 'duymadın'dan sonra 'alarmın sesini' geliyor: devrik. Doğru.
Adım 2: III → 'değil' olumsuz; yüklem sonda: kurallı. Doğru.
Adım 3: IV → olumsuzluk yok: olumlu; 'kayboldu'dan sonra söz var: devrik. Doğru.
Adım 4: I → 'bırakmadı' -ma ile olumsuz: bu doğru; ama yüklem cümlenin sonundadır, cümle kurallıdır. Tabloda 'devrik' yazıyor: yanlış.
Sık yapılan hata: Olumsuz cümleyi devrik sanmak. Anlam ile yüklemin yeri ayrı ölçütlerdir.
Cevap A.`
},
{
  id: "tur-ct-360",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir köy yoluyla ilgili metinden üç cümle alınmıştır.

(1) Kış bastırınca köy yolları günlerce kapalı kalır. (2) Muhtar her sabah yolların durumunu telefonla öğreniyor. (3) Köyün fırınında bu kış un yok.

I. 1. cümle yapıca birleşiktir.
II. 2. cümle yapıca basittir.
III. 3. cümle isim cümlesidir ve anlamca olumludur.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız III","I ve II","II ve III"],
  dogru: 2,
  hatalar: [
    "II de doğrudur: 2. cümlede tek yargı vardır, cümle basittir.",
    "III yanlıştır: 'yok' olumsuzluk bildirir, cümle anlamca olumsuzdur. I ve II doğru olduğu halde bu seçenekte yoktur.",
    null,
    "III yanlıştır: 3. cümle isim cümlesidir ama 'yok' yüzünden anlamca olumsuzdur."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → 'bastırınca' zarf-fiil yan yargı kurar: birleşik. I doğru.
Adım 2: II → yüklem 'öğreniyor' tek; fiilimsi, şart eki, 'ki' yok: basit. II doğru.
Adım 3: III → yüklem 'yok' isim soylu: isim cümlesi; ama 'yok' varlığın olmadığını bildirir: anlamca olumsuz. 'Olumlu' demek yanlıştır. III yanlış.
Sağlama: Doğru olanlar I ve II.
Sık yapılan hata: İsim cümlesini olumlu saymak. Anlam yüklemin biçimine ve sözcüğüne bağlıdır.
Cevap C.`
},
{
  id: "tur-ct-361",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrencinin ödev defterinden dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerden kaç tanesi hem isim cümlesi hem de yapıca birleşiktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Hava soğuk olunca sokaklar tenhadır.</td></tr><tr><td>II</td><td>Tek dileği mezun olup öğretmen olmaktı.</td></tr><tr><td>III</td><td>Dedem bahçeyi sulamaya çıktı.</td></tr><tr><td>IV</td><td>Bütün bilet fiyatları çok yüksek.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "Bir saymak, II'yi gözden kaçırmaktır: 'olmaktı' isim-fiil + ek fiil olduğu için yüklem isim soyludur, ayrıca 'mezun olup' yan yargı kurar.",
    null,
    "Üç saymak, III'ü de saymaktır: 'sulamaya' birleşik yapar ama yüklem 'çıktı' çekimli fiildir.",
    "Dört saymak, III'ü ve IV'ü de saymaktır: III fiil cümlesi, IV basit cümledir."
  ],
  aciklama: `İki ölçüt: yüklem isim soylu mu, cümle birleşik mi? Her cümlede ayrı ayrı bak.
Adım 1: I → yüklem 'tenhadır' isim soylu; 'olunca' zarf-fiil yan yargı kurar: ikisi de tutuyor.
Adım 2: II → yüklem 'olmaktı' (isim-fiil + ek fiil): isim soylu; 'olup' zarf-fiil yan yargı kurar: birleşik. İkisi de tutuyor.
Adım 3: III → 'sulamaya' ile birleşik; yüklem 'çıktı' fiil: isim cümlesi değil.
Adım 4: IV → yüklem 'yüksek' isim soylu; ama yan yargı yok: basit.
Sağlama: Tutan cümleler I ve II; sayı 2.
Cevap B.`
},
{
  id: "tur-ct-362",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ders çalışma kitapçığındaki dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem sıralı hem de anlamca olumsuzdur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Konu zor değil, örnekler uzun değil.</td></tr><tr><td>II</td><td>Konu zordu ama örnekler uzun değildi.</td></tr><tr><td>III</td><td>Konuyu anlamadık, örnekleri çözemedik.</td></tr><tr><td>IV</td><td>Konu zor değilse örnekler uzun değildir.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "İsim cümlesi ve olumsuzdur ama yargıları 'ama' bağlar; cümle bağlıdır, sıralı değildir.",
    "Sıralı ve olumsuzdur ama yüklemler 'anlamadık' ve 'çözemedik' çekimli fiildir; isim cümlesi değildir.",
    "İsim cümlesi ve olumsuzdur ama 'değilse' şart ekiyle yan yargı kurar; cümle birleşiktir."
  ],
  aciklama: `Üç ölçüt: yüklem isim soylu, yargılar bağlaçsız dizilmiş (sıralı), yüklemde olumsuzluk. Her seçeneği üçüyle sına.
Adım 1: II → 'ama' bağlacı var: bağlı. Sıralı değil.
Adım 2: III → yüklemler fiil. İsim cümlesi değil.
Adım 3: IV → 'değilse' şart eki yan yargı kurar: birleşik.
Adım 4: I → yüklemler 'değil' sözcükleri: isim soylu ve olumsuz; iki yargı bağlaçsız, virgülle dizilmiş: sıralı. Üç ölçüt de tutuyor.
Cevap A.`
},
{
  id: "tur-ct-363",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir feribot seferinin aksamasını anlatan metinden dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerden hangisi yapı bakımından diğerlerinden farklıdır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Rüzgâr dindi ve dalgalar yatıştı.</td></tr><tr><td>II</td><td>Feribot hazırdı fakat kimse güverteye çıkmadı.</td></tr><tr><td>III</td><td>Kaptan ve limandaki tayfa saatlerce feribotu bekledi.</td></tr><tr><td>IV</td><td>Hava düzeldi ancak sefer akşama ertelendi.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 2,
  hatalar: [
    "İki yargıyı ('dindi', 'yatıştı') 've' bağlar; cümle bağlıdır. II ve IV ile aynı gruptadır.",
    "İki yargıyı ('hazırdı', 'çıkmadı') 'fakat' bağlar; cümle bağlıdır. I ve IV ile aynı gruptadır.",
    null,
    "İki yargıyı ('düzeldi', 'ertelendi') 'ancak' bağlar; cümle bağlıdır. I ve II ile aynı gruptadır."
  ],
  aciklama: `Bir bağlacın cümleyi bağlı yapması için bağımsız yargıları bağlaması gerekir; yalnız sözcükleri bağlıyorsa cümle basit kalır.
Adım 1: I → 've' iki yargıyı bağlar: bağlı.
Adım 2: II → 'fakat' iki yargıyı bağlar: bağlı.
Adım 3: IV → 'ancak' iki yargıyı bağlar: bağlı.
Adım 4: III → 've' 'kaptan' ile 'tayfa' sözcüklerini (iki özneyi) bağlar; yüklem 'bekledi' tektir. 'limandaki' sözündeki -ki yan yargı kurmaz. Cümle basittir.
Sık yapılan hata: 've' görünce cümleyi bağlı saymak.
Cevap C.`
},
{
  id: "tur-ct-364",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir grup, kaybolduğu yürüyüş yolunu anlatan dört cümle yazdı. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem yapıca bağlı hem de anlamca olumsuzdur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Haritayı okuduk ve yolu bulduk.</td></tr><tr><td>II</td><td>Haritayı okuyamadık, yolu bulamadık.</td></tr><tr><td>III</td><td>Haritayı okuyamayınca yolu bulamadık.</td></tr><tr><td>IV</td><td>Haritayı okuyamadık ve yolu bulamadık.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Bağlıdır ('ve') ama iki yargı da olumludur; cümle olumludur.",
    "Olumsuzdur ama yargılar bağlaçsız virgülle dizilmiştir; cümle sıralıdır.",
    "Olumsuzdur ama 'okuyamayınca' zarf-fiili yan yargı kurar; cümle birleşiktir.",
    null
  ],
  aciklama: `Dört seçenekte de aynı sözcükler vardır; fark yapıda ve olumsuzluktadır.
Adım 1: I → 've' ile bağlı; 'okuduk', 'bulduk' olumlu. Olumsuz değil.
Adım 2: II → olumsuz; bağlaç yok, virgül var: sıralı.
Adım 3: III → olumsuz; 'okuyamayınca' fiilimsi yan yargı kurar: birleşik.
Adım 4: IV → 'okuyamadık' ve 'bulamadık' -ma/-me ile olumsuz; 've' iki yargıyı bağlar: bağlı. İki ölçüt de tutuyor.
Sağlama: IV'te 've'yi virgülle değiştirirsen II'ye dönüşür.
Cevap D.`
},
{
  id: "tur-ct-365",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şirketin tanıtım broşüründen dört cümle alınmıştır. Cümleler aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi hem isim cümlesi hem de yüklemin yerine göre devriktir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Fuar alanına ilk gelen ziyaretçiler bilet kuyruğuna girdi.</td></tr><tr><td>II</td><td>Yerli üretimi yaygınlaştırmaktır şirketin amacı.</td></tr><tr><td>III</td><td>Ağırlandı törende yarışmada ödül kazanan öğrenciler.</td></tr><tr><td>IV</td><td>Sergiyi gezen herkes çok memnundu.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "'gelen' fiilimsidir; yüklem 'girdi' çekimli fiildir ve sondadır. Cümle hem fiil cümlesi hem kurallıdır; iki ölçüt de tutmuyor.",
    null,
    "Devriktir ('ağırlandı'dan sonra söz gelir), ama 'kazanan' fiilimsidir; yüklem 'ağırlandı' çekimli fiildir. Cümle fiil cümlesidir.",
    "İsim cümlesidir ('memnundu'), ama yüklem sondadır; cümle kurallıdır. 'gezen' fiilimsidir, yüklem olmaz."
  ],
  aciklama: `Fiilimsi (-an, -ken, -mak gibi) yan yargı kurar ama çekimli yüklem sayılmaz. Önce yüklemi bul: çekimli fiil mi, ek fiilli isim soylu sözcük mü? Sonra yüklemden sonra söz gelip gelmediğine bak.
Adım 1: I → 'gelen' fiilimsi; yüklem 'girdi' çekimli fiil ve sonda: fiil cümlesi, kurallı. İki ölçüt de tutmuyor.
Adım 2: III → 'kazanan' fiilimsi; yüklem 'ağırlandı' çekimli fiil: fiil cümlesi. Devrik ama isim cümlesi değil.
Adım 3: IV → 'gezen' fiilimsi; yüklem 'memnundu' isim soylu: isim cümlesi. Ama yüklem sonda: kurallı.
Adım 4: II → çekimli fiil yok. 'yaygınlaştırmak' isim-fiildir ve 'tır' ek fiilini almıştır; yüklem 'yaygınlaştırmaktır' isim soyludur: isim cümlesi. Yüklemden sonra 'şirketin amacı' geliyor: devrik. İki ölçüt de tutuyor.
Sık yapılan hata: Fiil kökü görünen her sözcüğü çekimli fiil saymak.
Cevap B.`
},
{
  id: "tur-ct-366",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yüzme havuzu bildirisinden üç cümle alınmıştır.

(1) Gelmedi mi servis hâlâ? (2) Yol açılınca yürüyüş başlayacak. (3) Havuz bugün çok kalabalık.

**Bu cümlelerle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["1. cümle yüklemin yerine göre kurallı, anlamca soru cümlesidir.","2. cümle yüklemin türüne göre fiil, yapıca birleşik cümledir.","3. cümle yüklemin türüne göre isim, yerine göre devrik cümledir.","1. cümle anlamca olumlu, yapıca basit cümledir."],
  dogru: 1,
  hatalar: [
    "1. cümlede yüklem 'gelmedi'dir ve ardından 'servis hâlâ' gelir; cümle devriktir, kurallı değildir.",
    null,
    "3. cümle isim cümlesidir ama yüklem 'kalabalık' sondadır; cümle kurallıdır, devrik değildir.",
    "1. cümle 'gelmedi' ve 'mi' ile hem olumsuz hem sorudur; anlamca olumlu değildir."
  ],
  aciklama: `Her seçeneği cümlelerle karşılaştır.
Adım 1: 1. cümle → yüklem 'gelmedi' fiil; ardından 'servis hâlâ' var: devrik; -me ve 'mi' var: olumsuz soru. A ve D yanlış.
Adım 2: 3. cümle → yüklem 'kalabalık' (ek fiil düşmüş), sonda: kurallı. C yanlış.
Adım 3: 2. cümle → yüklem 'başlayacak' fiil; 'açılınca' zarf-fiil yan yargı kurar: fiil cümlesi, birleşik. B doğru.
Sık yapılan hata: Soru cümlelerini otomatik olarak kurallı ya da olumlu saymak.
Cevap B.`
},
{
  id: "tur-ct-367",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulda yapılan deprem tatbikatını anlatan metinden üç cümle alınmıştır.

(1) Tatbikat başlar başlamaz öğrenciler sıraların altına girdi. (2) Kimse koridorda koşmadı. (3) Tatbikat sonunda okul bahçesi öğrencilerle doluydu.

I. 1. cümle hem birleşik hem devriktir.
II. 2. cümle anlamca olumlu, yapıca basittir.
III. 3. cümle hem isim cümlesi hem basittir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız III","Yalnız II","I ve II","I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II yanlıştır: 'koşmadı' -ma ile olumsuzdur, cümle olumlu değildir. Doğru olan III bu seçenekte yer almıyor.",
    "I ve II yanlıştır: 1. cümlede yüklem 'girdi' sondadır, kurallıdır; 2. cümle olumsuzdur.",
    "I yanlıştır: 1. cümle birleşiktir ama yüklem 'girdi' sondadır; cümle kurallıdır."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle; iki özellik içeren yargıda ikisi de doğru olmalıdır.
Adım 1: I → 'başlar başlamaz' yan yargı kurar: birleşik; ama yüklem 'girdi' sondadır: kurallı. 'Devrik' kısmı yanlış, I yanlış.
Adım 2: II → 'koşmadı' -ma ile olumsuz. 'Olumlu' demek yanlış, II yanlış.
Adım 3: III → yüklem 'doluydu' isim soylu: isim cümlesi; tek yargı: basit. III doğru.
Sağlama: Doğru yargı yalnız III'tür.
Sık yapılan hata: İki özellikten birini doğru bulunca yargının tamamını doğru saymak.
Cevap A.`
},
{
  id: "tur-ct-368",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, cümlelerin yüklemlerini bulup aşağıdaki tabloya yazdı.
**Bu tabloda hangi cümlenin yüklemi __yanlış__ gösterilmiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yüklem</th></tr><tr><td>I</td><td>Eve gelen misafirleri kapıda karşıladık.</td><td>karşıladık</td></tr><tr><td>II</td><td>Yağmur yağınca bahçe çok güzelleşti.</td><td>güzelleşti</td></tr><tr><td>III</td><td>Bu çanta benim değil.</td><td>değil</td></tr><tr><td>IV</td><td>Uzaktan görünen dağın zirvesi karlıydı.</td><td>görünen</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Yüklem doğrudur: 'gelen' fiilimsidir, çekimli fiil 'karşıladık'tır.",
    "Yüklem doğrudur: 'yağınca' fiilimsidir, çekimli fiil 'güzelleşti'dir.",
    "Yüklem doğrudur: 'değil' isim soylu yüklem kurar.",
    null
  ],
  aciklama: `Yüklem, cümlenin yargısını bildiren sözcüktür; fiilimsiler yüklem olamaz.
Adım 1: I → 'gelen' fiilimsi; yüklem 'karşıladık'. Doğru.
Adım 2: II → 'yağınca' fiilimsi; yüklem 'güzelleşti'. Doğru.
Adım 3: III → çekimli fiil yok; yargıyı 'değil' bildirir. Doğru.
Adım 4: IV → 'görünen' sıfat-fiildir, dağı niteler; yargıyı bildiren sözcük 'karlıydı'dır. Tabloda 'görünen' yazıyor: yanlış.
Sık yapılan hata: Fiil görünümlü ilk sözcüğü yüklem saymak.
Cevap D.`
},
{
  id: "tur-ct-369",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıda tek bir cümle verilmiştir.

Sabahları erken kalkmak sağlıklı bir alışkanlıktır.

**Bu cümlenin yüklemin türü, yüklemin yeri, anlam ve yapı bakımından çözümlemesi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["İsim cümlesi, kurallı, olumlu, basit","Fiil cümlesi, kurallı, olumlu, birleşik","İsim cümlesi, kurallı, olumlu, birleşik","İsim cümlesi, devrik, olumlu, birleşik"],
  dogru: 2,
  hatalar: [
    "'kalkmak' isim-fiildir; yargı bildirmese de yan yargı kurar. Cümle birleşiktir, basit değildir.",
    "'kalkmak' fiilimsidir ve yüklem olamaz; yüklem 'alışkanlıktır' isim soyludur. Cümle isim cümlesidir.",
    null,
    "Yüklem 'alışkanlıktır' cümlenin sonundadır; cümle kurallıdır, devrik değildir."
  ],
  aciklama: `Çözümleme sırası: yüklem → tür → yer → anlam → yapı.
Adım 1: Yüklem 'alışkanlıktır'; 'kalkmak' isim-fiildir, yüklem değil. Yüklem isim soylu: isim cümlesi.
Adım 2: Yüklem sonda: kurallı.
Adım 3: Olumsuzluk eki, soru eki yok: olumlu.
Adım 4: 'kalkmak' fiilimsisi yan yargı kurar: birleşik.
Sık yapılan hata: Fiilimsiyi görüp cümleyi fiil cümlesi saymak.
Cevap C.`
},
{
  id: "tur-ct-370",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, çalıştığı cümleleri aşağıdaki gibi sıraladı. Cümleler numaralandırılmıştır.
**Bu cümlelerden kaç tanesi hem yüklemin yerine göre devrik hem de anlamca olumsuzdur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Dönmedi gezi grubu akşama kadar.</td></tr><tr><td>II</td><td>Açamadı kapıyı kimse.</td></tr><tr><td>III</td><td>Okumadım ben o kitabı.</td></tr><tr><td>IV</td><td>Kitabı aldım ben kütüphaneden.</td></tr></table>",
  secenekler: ["1","2","3","4"],
  dogru: 2,
  hatalar: [
    "Bir saymak, üç cümleyi gözden kaçırmaktır; I, II ve III'te yüklem hem olumsuz hem sonda değildir.",
    "İki saymak, bir cümleyi gözden kaçırmaktır; I, II ve III'ün üçü de devrik ve olumsuzdur.",
    null,
    "Dört saymak, IV'ü de saymaktır; IV devriktir ama yüklem 'aldım' olumludur."
  ],
  aciklama: `İki ölçüt: yüklemden sonra söz geliyor mu, yüklemde olumsuzluk var mı? Her cümlede ikisine ayrı bak.
Adım 1: I → yüklem 'dönmedi' (-me olumsuz); ardından 'gezi grubu akşama kadar': devrik. Tutuyor.
Adım 2: II → yüklem 'açamadı' (-ma olumsuz); ardından 'kapıyı kimse': devrik. Tutuyor.
Adım 3: III → yüklem 'okumadım' (olumsuz); ardından 'ben o kitabı': devrik. Tutuyor.
Adım 4: IV → devrik ('aldım'dan sonra 'ben kütüphaneden' geliyor); ama yüklem 'aldım' olumludur, olumsuzluk eki yok. Tutmuyor.
Sağlama: Tutan cümleler I, II, III; sayı 3.
Cevap C.`
},
{
  id: "tur-ct-371",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir spor salonunu anlatan metinden üç cümle alınmıştır.

(1) Salonun kapısı açılınca içeri serin bir hava doldu. (2) Soyunma odaları bu akşam çok kalabalık. (3) Başlamadı mı idman henüz?

I. 1. cümle hem fiil cümlesi hem birleşiktir.
II. 2. cümle hem isim cümlesi hem basittir.
III. 3. cümle hem soru cümlesi hem devriktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I, II ve III","I ve II","I ve III","II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "III de doğrudur: 'mı' soru ekidir ve yüklem 'başlamadı'dan sonra 'idman henüz' geldiği için cümle devriktir.",
    "II de doğrudur: yüklem 'kalabalık' isim soyludur ve tek yargı vardır, cümle basittir.",
    "I de doğrudur: yüklem 'doldu' fiildir ve 'açılınca' zarf-fiili yan yargı kurar, cümle birleşiktir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle.
Adım 1: I → yüklem 'doldu' çekimli fiil: fiil cümlesi; 'açılınca' yan yargı kurar: birleşik. I doğru.
Adım 2: II → yüklem 'kalabalık' (ek fiil düşmüş): isim cümlesi; tek yargı: basit. II doğru.
Adım 3: III → 'mı' soru eki: soru cümlesi; 'başlamadı'dan sonra 'idman henüz' geliyor: devrik. III doğru.
Sağlama: Üç yargı da doğru.
Sık yapılan hata: Üç yargının üçünün de doğru olabileceğini düşünmeyip birini mutlaka yanlış aramak.
Cevap A.`
},
{
  id: "tur-ct-372",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir uzun yolculuğu anlatan dört cümle aşağıda numaralandırılmıştır.
**Bu cümlelerin hangisi, yüklemlerinin ikisi de isim soylu olan bağlı cümledir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yol çok uzundu ama kimse yorulmadı.</td></tr><tr><td>II</td><td>Yol çok uzundu, manzara harikaydı.</td></tr><tr><td>III</td><td>Yol çok uzun olduğu için sık mola verdik.</td></tr><tr><td>IV</td><td>Yol çok uzundu fakat manzara harikaydı.</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 3,
  hatalar: [
    "Bağlıdır ('ama') ama yüklemlerden biri ('yorulmadı') çekimli fiildir; ikisi de isim soylu değildir.",
    "Yüklemlerin ikisi de isim soyludur ama yargılar bağlaçsız dizilmiştir; cümle sıralıdır.",
    "Birleşiktir ('olduğu için'); yüklem 'verdik' fiildir. Bağlı cümle değildir.",
    null
  ],
  aciklama: `İki ölçüt: cümle bağlı mı, her iki yüklem de isim soylu mu?
Adım 1: I → 'ama' ile bağlı; yüklemler 'uzundu' (isim) ve 'yorulmadı' (fiil). Biri fiil: tutmuyor.
Adım 2: II → yüklemler 'uzundu', 'harikaydı' (ikisi isim); ama bağlaç yok, virgül var: sıralı.
Adım 3: III → 'olduğu için' fiilimsi yan yargı kurar: birleşik; yüklem 'verdik' fiil.
Adım 4: IV → 'fakat' bağlacı iki yargıyı bağlar: bağlı; 'uzundu' ve 'harikaydı' ikisi de isim soylu. İki ölçüt de tutuyor.
Sağlama: IV'te 'fakat' yerine virgül koyarsan II'ye dönüşür.
Cevap D.`
},
{
  id: "tur-ct-373",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, seçtiği cümlelerin yapısını aşağıdaki tabloda belirtti.
**Bu tabloda hangi satırdaki bilgi __yanlıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yapısı</th></tr><tr><td>I</td><td>Kar o kadar yağdı ki yollar kapandı.</td><td>Birleşik</td></tr><tr><td>II</td><td>Okulun önündeki kavşakta uzun bir kuyruk vardı.</td><td>Birleşik</td></tr><tr><td>III</td><td>Bavullar hazırlandı, bilet alındı.</td><td>Sıralı</td></tr><tr><td>IV</td><td>Defterimi unuttum çünkü sabah çok acelem vardı.</td><td>Bağlı</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 1,
  hatalar: [
    "Bilgi doğrudur: ayrı yazılan 'ki' yan yargı kurar, cümle birleşiktir.",
    null,
    "Bilgi doğrudur: 'hazırlandı' ve 'alındı' yargıları bağlaçsız, virgülle dizilmiştir; cümle sıralıdır.",
    "Bilgi doğrudur: 'unuttum' ve 'vardı' yargılarını 'çünkü' bağlar; cümle bağlıdır."
  ],
  aciklama: `Her satırdaki yapı bilgisini cümleyle karşılaştır.
Adım 1: I → ayrı yazılan 'ki' yan yargı kurar: birleşik. Doğru.
Adım 2: III → iki yargı bağlaçsız, virgülle: sıralı. Doğru.
Adım 3: IV → 'çünkü' iki yargıyı bağlar: bağlı. Doğru.
Adım 4: II → 'önündeki' sözündeki -ki eki bitişiktir ve sıfat yapar; yan yargı kurmaz. Cümlede tek yargı ('vardı') var: basit. Tabloda 'birleşik' yazıyor: yanlış.
Sık yapılan hata: -ki ekini ayrı yazılan 'ki' bağlacıyla karıştırmak.
Cevap B.`
},
{
  id: "tur-ct-374",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir hava durumu raporundan üç cümle alınmıştır.

(1) Yağışlı değildi bu haftaki hava. (2) Bu haftaki hava hiç yağışlı değildi. (3) Yağmur yağmadı bu hafta.

I. 1. cümle hem isim cümlesi hem devriktir.
II. 2. cümle hem isim cümlesi hem devriktir.
III. 3. cümle hem anlamca olumsuz hem devriktir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II","I ve II","I ve III","II ve III"],
  dogru: 2,
  hatalar: [
    "II yanlıştır: 2. cümlede yüklem 'değildi' sondadır, cümle kurallıdır. I ve III doğru olduğu için bu seçenek doğruları dışarıda bırakıyor.",
    "II yanlıştır: 2. cümle kurallıdır, yüklem 'değildi' sondadır. III ise doğrudur: 'yağmadı' -ma ile olumsuzdur ve 'bu hafta' yüklemden sonra gelir.",
    null,
    "II yanlıştır: 2. cümlede yüklem sondadır, cümle kurallıdır. I ise doğrudur: 'değildi' isim soyludur ve ardından 'bu haftaki hava' gelir."
  ],
  aciklama: `Her yargıyı ayrı ayrı denetle; her birinde iki ölçüt vardır.
Adım 1: I → 1. cümlede yüklem 'değildi' isim soylu: isim cümlesi; ardından 'bu haftaki hava' geliyor: devrik. 'haftaki' sözündeki -ki yan yargı kurmaz. I doğru.
Adım 2: II → 2. cümlede yüklem yine 'değildi' isim soylu; ama cümlenin sonunda: kurallı. Devrik ölçütü tutmuyor. II yanlış.
Adım 3: III → 3. cümlede yüklem 'yağmadı' -ma ile olumsuz; ardından 'bu hafta' geliyor: devrik. III doğru.
Sağlama: Doğru yargılar I ve III.
Sık yapılan hata: Aynı yüklemi içeren iki cümlenin ikisi için de aynı yargıyı vermek. Sözcükler aynı olsa da dizilişleri yüklemin yerini değiştirir.
Cevap C.`
},
{
  id: "tur-ct-375",
  kazanim: "T.8.4.19",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul servisini bekleyen öğrenciler, duydukları cümleleri dört ölçüte göre çözümleyip aşağıdaki tabloya yazdı.
**Bu tabloda hangi satırdaki dört bilgi de doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Cümle</th><th>Yüklemin türü</th><th>Yüklemin yeri</th><th>Anlam</th><th>Yapı</th></tr><tr><td>I</td><td>Hazır değildi servis aracı öğrenciler gelince.</td><td>İsim cümlesi</td><td>Devrik</td><td>Olumsuz</td><td>Birleşik</td></tr><tr><td>II</td><td>Öğrenciler gelince kalkmadı servis aracı.</td><td>Fiil cümlesi</td><td>Devrik</td><td>Olumsuz</td><td>Basit</td></tr><tr><td>III</td><td>Servis aracı öğrenciler gelince hazır değildi.</td><td>İsim cümlesi</td><td>Devrik</td><td>Olumsuz</td><td>Birleşik</td></tr><tr><td>IV</td><td>Şoför kapıyı açınca öğrenciler servise bindi.</td><td>Fiil cümlesi</td><td>Kurallı</td><td>Olumsuz</td><td>Birleşik</td></tr></table>",
  secenekler: ["I","II","III","IV"],
  dogru: 0,
  hatalar: [
    null,
    "Tür, yer ve anlam doğrudur ama yapı yanlıştır: 'gelince' zarf-fiili yan yargı kurduğu için cümle birleşiktir, basit değildir.",
    "Tür, anlam ve yapı doğrudur ama yer yanlıştır: yüklem 'değildi' cümlenin sonundadır; cümle kurallıdır.",
    "Tür, yer ve yapı doğrudur ama anlam yanlıştır: yüklem 'bindi' olumludur, olumsuzluk eki ya da sözcüğü yok."
  ],
  aciklama: `Her satırda dört bilgiyi ayrı ayrı denetle; satır ancak dördü de doğruysa doğrudur.
Adım 1: II → 'kalkmadı' fiil, devrik ('servis aracı' sonra geliyor), olumsuz; ama 'gelince' zarf-fiil yan yargı kurar: cümle birleşiktir. Tabloda 'Basit': yanlış.
Adım 2: III → 'değildi' isim soylu ve olumsuz; 'gelince' ile birleşik; ama yüklem sondadır: kurallı. Tabloda 'Devrik': yanlış.
Adım 3: IV → 'bindi' fiil, sonda (kurallı), 'açınca' ile birleşik; ama olumsuzluk yok: olumlu. Tabloda 'Olumsuz': yanlış.
Adım 4: I → 'değildi' isim soylu: isim cümlesi; ardından 'servis aracı öğrenciler gelince' geliyor: devrik; 'değildi' olumsuz; 'gelince' yan yargı kurar: birleşik. Dört bilgi de doğru.
Sık yapılan hata: Bir satırda üç bilgiyi doğru bulup dördüncüyü denetlememek.
Cevap A.`
}
);
