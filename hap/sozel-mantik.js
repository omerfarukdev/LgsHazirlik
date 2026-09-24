window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["sozel-mantik"] = {
  kazanimlar: ["T.8.3.25", "T.8.3.32"],
  giris: "Sözel mantık sorularında sana birkaç kural verilir ve bu kurallardan bir sonuç çıkarman istenir: kim hangi gün, hangi sırada, hangi işi yapıyor; bir oyunun sonunda kim kazanıyor. Ezberlenecek bilgi yoktur, **yöntem** vardır. Bu özeti okuyunca bilgileri tabloya dökmeyi, kesin olanla olası olanı ayırmayı ve en sık yapılan hatalardan kaçınmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Karşına çıkacak soru tipleri",
      maddeler: [
        "Sözel mantık bir **düşünme biçimidir**: verilen bilgilerin dışına çıkmadan sonuç çıkarırsın. Dışarıdan bilgi de “bence böyledir” tahmini de yoktur.",
        "İyi kurulmuş bir soruda cevap, verilen bilgilerle **tek** biçimde bulunur. Bir şıkkı ancak bilgiler onu zorunlu kılıyorsa işaretlersin."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Tip</th><th>Ne verilir?</th><th>Ne sorulur?</th></tr><tr><td><strong>Sıralama</strong></td><td>Kişiler, günler ya da yerler ve “önce, hemen sağında, arasında” gibi kurallar</td><td>Belli bir yerde kim var, en sonda kim var</td></tr><tr><td><strong>Eşleştirme</strong></td><td>Kişiler ve iki-üç özellik (hobi, renk, gün)</td><td>Kim hangi özelliğe sahip</td></tr><tr><td><strong>Kural uygulama</strong></td><td>Bir oyunun, puanlamanın ya da bir sistemin kuralları</td><td>Kurallara uyan ya da uymayan durum, oyunun sonucu</td></tr><tr><td><strong>Kesinlik soruları</strong></td><td>Birden çok çözüme izin veren bilgiler</td><td>Hangisi kesinlikle doğrudur, hangisi olamaz, kaç farklı biçimde olur</td></tr><tr><td><strong>Eksik bilgi</strong></td><td>Çözümü tek yapmaya yetmeyen bilgiler</td><td>Hangi bilgi eklenirse durum kesin olarak belirlenir</td></tr></table>"
    },
    {
      baslik: "Dört adımda çözüm",
      maddeler: [
        "**1. Tabloya dök.** Sıralamada yan yana kutular (1, 2, 3, 4…), eşleştirmede satırlarda kişiler, sütunlarda özellikler olan bir çizelge çiz. Üç özellik varsa (kişi, spor, gün) “Tenis oynayan salı gelir.” gibi bağlayıcı bilgiler iki çizelgeyi birleştirir.",
        "**2. Kesin bilgiden başla.** “Ceren 2. sıradadır.” gibi bir yeri doğrudan veren bilgiyi hemen yerleştir. Sonra buna bağlanan bilgiyi (“Ali, Ceren'in hemen solundadır.”) kullan. Bilgileri verildiği sırayla değil, **en çok şeyi kesinleştiren** sırayla kullan.",
        "**3. Olumsuz bilgileri ✗ ile işaretle.** “Selin camla çalışmamıştır.” bilgisi bir hücreyi kapatır. Bir satırda ya da sütunda tek boş hücre kalırsa orası kesinleşir (✓).",
        "**4. Olasılıkları yaz, ele.** Bilgiler bitti ama yerler hâlâ kesinleşmediyse bütün olası dizilişleri alt alta yaz ve her kuralı tek tek dene. Kuralı bozan diziliş elenir; kalanlar cevabın malzemesidir.",
        "Sonunda bulduğun çözümü **bütün kurallarla bir kez daha** sına. En çok puan, bir kuralı unutarak bulunan “neredeyse doğru” çözümde kaybedilir."
      ],
      ornekler: [
        "**Çözümlü örnek (eşleştirme):** Selin, Tamer, Ufuk ve Yeşim bir atölyede ahşap, seramik, cam ve kumaştan farklı birer malzemeyle çalışmıştır. Selin ne camla ne de kumaşla çalışmıştır. Tamer seramikle çalışmıştır. Yeşim camla çalışmamıştır. Kim hangi malzemeyle çalışmıştır?\nAdım 1: Kesin bilgiden başla. Tamer'in satırına seramik ✓ koy; seramik sütununun geri kalanını ve Tamer'in satırının geri kalanını ✗ yap.\nAdım 2: Selin'in cam ve kumaş hücrelerine ✗ koy. Seramik de kapalı olduğu için Selin'e yalnızca ahşap kalır.\nAdım 3: Yeşim camla çalışmadığına göre ona kumaş kalır, Ufuk'a da cam.\nSağlama: Dört kişi, dört farklı malzeme; verilen üç bilginin üçü de sağlanıyor. Sonuç aşağıdaki tabloda."
      ],
      tablo: "<table class=\"tablo\"><tr><th></th><th>Ahşap</th><th>Seramik</th><th>Cam</th><th>Kumaş</th></tr><tr><td><strong>Selin</strong></td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr><tr><td><strong>Tamer</strong></td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr><tr><td><strong>Ufuk</strong></td><td>✗</td><td>✗</td><td>✓</td><td>✗</td></tr><tr><td><strong>Yeşim</strong></td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr></table>"
    },
    {
      baslik: "Kural sözcüklerini doğru oku",
      maddeler: [
        "**“Hemen sağında”** bitişik demektir: arada kimse yoktur. **“Sağında”** ise sağ taraftaki herhangi bir yer demektir; arada başkaları olabilir.",
        "**“A, B'den önce”** yalnızca sırayı söyler, bitişikliği söylemez. **“A, B'den hemen önce”** ikisini art arda koyar.",
        "**“Aralarında bir kişi vardır”** tam olarak bir yer bırakır; **“yan yana değildir”** ise aradaki kişi sayısını belirtmez. **“İki sıra sonra”** arada bir yer, **“aralarında tam iki kişi var”** iki yer bırakır; kutuları say.",
        "**Karşılaştırma zinciri:** A, B'den uzun; B, C'den uzunsa A, C'den de uzundur. Ama ikisi de yalnızca B ile karşılaştırılmış iki kişinin kendi arasındaki sıra **bilinemez**.",
        "**İki sıralı düzen** (raf, koltuk): “tam altında”, “hemen arkasında” aynı sütunu gösterir; hem satırı hem sütunu işaretle.",
        "Sağ-sol, ön-arka, alt-üst hangi yönden sayılıyor? Soru “soldan sağa numaralı” ya da “aşağıdan yukarıya 1'den 5'e” diyorsa çizelgeni de o yönde çiz.",
        "**Sınır sözcükleri:** “en az 3” üçü içerir, “3'ten fazla” içermez; “40 kg'dan ağır” 40 kg'ı dışarıda bırakır. Sınır değerdeki durumu her zaman ayrıca kontrol et.",
        "**“ve” ile “ya da”:** “Kimlik kartını göstermeli **ve** ücreti ödemeli” diyen kural iki koşulu birlikte ister; biri eksikse kural sağlanmaz. “ya da” diyen kural ise koşullardan birini yeterli sayar."
      ],
      dikkat: [
        "**“Hemen” sözünü atlama ya da büyütme.** “Kerem, Nil'in hemen arkasındadır.” bilgisi Kerem'i en arkaya koymaz; Nil'in bir arkasına koyar.",
        "**Olumsuz bilgiyi gözden kaçırma.** “Ne kırmızı ne de mavi” iki hücreyi birden kapatır. Olumsuz cümleleri okurken çizelgene hemen ✗ koy.",
        "**Yönü ters çevirme.** “Sevda, Harun'dan önce uyandı.” cümlesinde önce uyanan Sevda'dır. Her kuralı çizelgede okla göster ve yönünü bir kez daha kontrol et."
      ]
    },
    {
      baslik: "Kesinlikle mi, olabilir mi?",
      maddeler: [
        "Bilgiler birkaç dizilişe izin veriyorsa kökteki söz ne yapacağını söyler:",
        "**Kesinlikle doğrudur:** Bütün olası durumlarda doğru olan şık. Tek bir durumda bile yanlışsa elenir.",
        "**Olabilir:** En az bir olası durumda doğru olan şık.",
        "**Olamaz:** Hiçbir olası durumda gerçekleşmeyen şık.",
        "**Kesin olarak bilinemez:** Bazı durumlarda doğru, bazılarında yanlış olan şık.",
        "**Kaç farklı biçimde:** Kurallara uyan dizilişlerin sayısı. Hepsini düzenli bir sırayla yaz (1. yere gelebilecekleri tek tek dene), hiçbirini atlama, aynısını iki kez sayma. Yan yana duracak ikiliyi tek kutu gibi yerleştir, sonra ×2 yap (ikili kendi arasında yer değiştirir)."
      ],
      ornekler: [
        "**Çözümlü örnek (sıralama):** Burak, Ceyda, Ferhat ve Gizem bir yarışmaya kısa filmlerini farklı zamanlarda göndermiştir. Ceyda, Burak'tan önce göndermiştir. Gizem, Ferhat'tan önce göndermiştir. Ferhat en son gönderen değildir.\nOlası dizilişler (1'den 4'e): Ceyda-Gizem-Ferhat-Burak · Gizem-Ceyda-Ferhat-Burak · Gizem-Ferhat-Ceyda-Burak. Başka her diziliş kurallardan birini bozar.\n“Burak en son göndermiştir.” → üç durumda da doğru: **kesinlikle doğru**.\n“Ceyda birinci göndermiştir.” → yalnız bir durumda doğru: **olabilir**, ama **kesin olarak bilinemez**.\n“Ferhat birinci göndermiştir.” → hiçbir durumda yok: **olamaz**.\n“Filmler kaç farklı sırayla gönderilmiş olabilir?” → **3**."
      ],
      dikkat: [
        "**Bir durumu doğru bulunca durmak** en sık hatadır. Kurallara uyan tek dizilişe bakıp “kesinlikle” şıkkını işaretleme; önce bütün durumları yaz.",
        "**Olası olanı olamaz sanma.** İlk denediğin dizilişte bir şık gerçekleşmedi diye “olamaz” deme; o şıkkı sağlayan bir diziliş kurmayı ayrıca dene.",
        "**Kesin olanı bilinemez sanma.** Bir bilgi soruda doğrudan yazmıyor diye bilinemez değildir; kuralları birleştirince ortaya çıkıyorsa kesindir."
      ]
    },
    {
      baslik: "Kural uygulama soruları",
      maddeler: [
        "Bu sorularda bir oyunun, puanlamanın, şifre sisteminin ya da bir makinenin kuralları verilir. Başarı, kuralları **sırasıyla ve eksiksiz** uygulamaktan gelir.",
        "Kuralları numaralandır ve her durumu bu numaralarla tek tek sına. Bir satırda bütün kuralları bitirmeden sonrakine geçme; satırı parmağınla izle ki komşu satıra kaymayasın.",
        "Kurallar birbirine bağlıysa zinciri sonuna kadar izle. Örnek: Bir apartmanda kâğıt atıklar çarşamba toplanır; toplama günü tatile denk gelirse ertesi güne kayar; kaydığı gün cam toplama günüyse (perşembe) bir gün daha kayar. Çarşamba tatilse kâğıt atıklar perşembe değil, **cuma** toplanır.",
        "Bir istisna kuralı (“ancak…”, “… ise bu kural uygulanmaz”) genel kuralı değiştirir. Genel kuralı uyguladıktan sonra istisnanın o durumu kapsayıp kapsamadığına mutlaka bak.",
        "**Kim doğru söylüyor?** tipindeki sorularda (ör. “dört kişiden yalnızca birinin sözü doğrudur”) her adayı sırayla “işi bu yaptıysa” diye varsay, her varsayımda doğru olan sözleri say. Sayının koşula uyduğu **tek** varsayım cevaptır.",
        "**“Hangisi eklenirse kesin belirlenir?”** sorusunda her şıkkı ayrı ayrı bilgilere ekle ve olası durumları yeniden say. Tek duruma indiren şık doğrudur; durumları yalnızca azaltan şık yetmez; bilgilerden zaten çıkan şık da yeni bir şey söylemez.",
        "**Aralık tabloları ve puanlama:** “0–15, 16–30, 31 ve üzeri” gibi satırlarda önce değerin satırını bul (30 ikinci, 31 üçüncü satırdadır). Birden çok saat soruluyorsa her birini ayrı sına. Eşitlik kuralı (aralarındaki maç, yanlış sayısı) yalnızca puanlar eşitse devreye girer.",
        "**Hareket soruları:** “Sağa dön” komutu robotun baktığı yöne göredir, senin sağına göre değil. Özel bir kareye gelince kuralın yeni karede yeniden uygulanıp uygulanmadığını sorudan oku; her adımdan sonra konumu ve yönü not et."
      ],
      dikkat: [
        "**İkinci kuralı atlama.** Bir durumun ilk kurala uyduğunu görünce “uygun” deme; sistemin kurallarının hepsi aynı anda sağlanmalıdır.",
        "**Bir kişiyi kesinleştirmek herkesi kesinleştirmez.** Eklenen bilgi bir kişinin yerini belirliyor diye bütün tablo belirlenmiş olmaz; geri kalanları da yerleştirerek sına.",
        "**Olumsuz köke dikkat.** Kök “kurala __uymamıştır__”, “__uygun değildir__” diyorsa üç şık kurallara uyar; sen uymayanı arıyorsun."
      ]
    }
  ],
  lgs: [
    "LGS'de sözel mantık soruları çoğunlukla bir tablo, çizelge ya da kurallar kutusuyla gelir; Türkçe testinde paragraf sorularıyla aynı “okuduğundan sonuç çıkarma” becerisini ölçer.",
    "En sık kökler “kesinlikle doğrudur”, “__olamaz__”, “kesin olarak __bilinemez__” ve “kaç farklı”dır. Çeldiricilerin çoğu, olası bir durumu kesin sanan öğrenci için yazılır.",
    "Bir sistemin kurallarını (puanlama, ödünç verme gibi) verip bir durumun bunlara uyup uymadığını soran uzun metinli sorular da sık gelir; hesap azdır, dikkatli okuma çoktur.",
    "Bir sözel mantık sorusu 2-3 dakika sürebilir. Çizelgeyi kurmadan şıklara bakmak süreyi kısaltmaz, uzatır."
  ],
  yokla: [
    { soru: "“Deniz, Ali'nin sağındadır.” ile “Deniz, Ali'nin hemen sağındadır.” arasındaki fark nedir?", cevap: "İlkinde aralarında başka kişiler olabilir; ikincisinde Deniz, Ali'nin bir sağındaki yerdedir, arada kimse yoktur." },
    { soru: "Kurallara uyan üç diziliş buldun. Bir şık bunların ikisinde doğru, birinde yanlış. Bu şık için ne dersin?", cevap: "Olabilir ama kesin olarak bilinemez. “Kesinlikle doğru” olması için üç dizilişin üçünde de doğru olması gerekirdi." },
    { soru: "Eşleştirme sorusunda bir kişinin satırında dört hücreden üçü ✗ oldu. Ne yaparsın?", cevap: "Kalan tek hücreye ✓ koyarım ve o özelliğin sütunundaki diğer hücreleri ✗ yaparım; bu yeni bir kesin bilgi verir." },
    { soru: "Bir kural “Takımda en fazla 6 oyuncu olabilir.” diyor. 6 oyunculu takım kurala uyar mı?", cevap: "Uyar. “En fazla 6” sınır değeri içerir; “6'dan az oyuncu” deseydi uymazdı." },
    { soru: "A, B ve C yan yana dizilecek; A ile B yan yana duracak. Kaç farklı diziliş vardır?", cevap: "4: A-B-C, B-A-C, C-A-B, C-B-A. A ile B'nin kendi aralarında yer değiştirebildiğini unutma." }
  ]
};
