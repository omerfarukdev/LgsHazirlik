// Türkçe — Sözel Mantık: Kademe 3 (LGS Ayarı) yedeği, 50 soru (sıra 26-75)
// Kademe yedeği: ana testin eksilen yerlerine tek tek karışır; her soru kendi başına anlaşılır, birbirinin cevabını vermez.
// Kazanım etiketleri: T.8.3.25 Okudukları ile ilgili çıkarımlarda bulunur. · T.8.3.32 Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.
// Her sorunun bütün olası durumları kaba kuvvetle sayılarak doğrulanmıştır: cevap, verilen bilgilerle tektir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sozel-mantik"] = window.LGS_BANK["sozel-mantik"] || []).push(
{
  id: "tur-sm-326",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Kütüphanenin okuma salonunda Arda, Beril, Can ve Dilara, soldan sağa 1'den 4'e kadar numaralanmış yan yana dört koltuğa birer kişi olacak biçimde oturmuştur. Oturma düzeniyle ilgili bilinenler:
• Beril, Can'ın hemen solundaki koltukta oturmaktadır.
• Arda, 1 numaralı koltukta oturmamaktadır.
• Dilara, Arda'nın sağındaki koltuklardan birinde oturmaktadır.
**Buna göre 2 numaralı koltukta kim oturmaktadır?**`,
  gorsel: null,
  secenekler: ["Arda","Beril","Can","Dilara"],
  dogru: 2,
  hatalar: ["Arda 2. koltukta olursa Beril-Can ikilisi 3-4'e kalır, Dilara 1'de kalır ve \"Dilara, Arda'nın sağındadır\" kuralı bozulur.","Beril 2'de olursa Can 3'te olur; Arda 1'de oturamayacağı için 4'e geçer ve Dilara'ya Arda'nın sağında yer kalmaz.",null,"Dilara 2'de olursa Arda'nın onun solunda, yani 1'de olması gerekir; ama Arda 1'de oturmamaktadır."],
  aciklama: `Adım 1: Beril ile Can bitişik ve Beril solda olduğundan bu ikili 1-2, 2-3 ya da 3-4. koltuklara oturabilir.
Adım 2: İkili 2-3'teyse Arda ile Dilara 1 ve 4'e kalır. Arda 1'de oturamayacağı için 4'e geçer; Dilara 1'de kalır ve Arda'nın sağında olamaz. Bu durum elenir.
Adım 3: İkili 3-4'teyse Arda ile Dilara 1 ve 2'ye kalır. Arda 2, Dilara 1 olur; yine Dilara Arda'nın sağında değildir. Bu durum da elenir.
Adım 4: İkili 1-2'deyse Arda ile Dilara 3 ve 4'e oturur; Dilara'nın Arda'nın sağında olması için Arda 3, Dilara 4'tür.
Sıralama: Beril, Can, Arda, Dilara.
Sağlama: Beril, Can'ın hemen solunda; Arda 1'de değil; Dilara Arda'nın sağında. Üç kural da sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-327",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir pazar tezgâhında satılan ürünlerin türleri Tablo 1'de, dört müşterinin tezgâhtan aldığı ürünler Tablo 2'de verilmiştir. Tezgâhın kampanya kuralları şunlardır:
• Hem meyve hem sebze alan müşteriye hediye poşet verilir.
• Aldığı meyve çeşidi sayısı, aldığı sebze çeşidi sayısının en az iki katı olan müşteriye hediye bal verilir.
**Buna göre hangi müşteri iki hediyeyi de kazanmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Tablo 1</th><th>Ürünler</th></tr><tr><td>Meyve</td><td>elma, armut, kiraz, nar, üzüm</td></tr><tr><td>Sebze</td><td>domates, biber, salatalık</td></tr></table><br><table class="tablo"><tr><th>Tablo 2: Müşteri</th><th>Aldığı ürünler</th></tr><tr><td>Ela</td><td>elma, armut, kiraz, nar, üzüm</td></tr><tr><td>Fuat</td><td>domates, biber, salatalık</td></tr><tr><td>Halil</td><td>kiraz, domates, biber</td></tr><tr><td>Gül</td><td>elma, armut, domates</td></tr></table>`,
  secenekler: ["Ela","Fuat","Halil","Gül"],
  dogru: 3,
  hatalar: ["Yalnızca bal kuralına bakma: Ela 5 meyve aldığı için bal kazanır ama hiç sebze almadığı için poşet kazanmaz.","Hiçbir kuralı sağlamayan müşteriyi seçme: Fuat yalnızca sebze almıştır; ne poşet ne bal kazanır.","Karşılaştırmayı ters yöne okuma: Halil hem meyve hem sebze aldığı için poşet kazanır, ama 1 meyve çeşidi, 2 sebze çeşidinin iki katı olan 4'e ulaşmaz.",null],
  aciklama: `Adım 1: Tablo 1'e göre ürünleri meyve ya da sebze diye ayır. Sonra her müşteriye iki kuralı ayrı ayrı uygula: poşet için hem meyve hem sebze alınmış olmalı; bal için meyve çeşidi sayısı, sebze çeşidi sayısının en az iki katı olmalı.
Adım 2: Ela yalnızca meyve almış (5 meyve, 0 sebze): poşet yok. Bal için 0 sebzenin iki katı olan 0'a ulaşmak yeter: bal var. Yalnızca bir hediye.
Adım 3: Fuat yalnızca sebze almış (0 meyve, 3 sebze): poşet yok. Bal için en az 2 × 3 = 6 meyve çeşidi gerekir: bal yok. Hediye yok.
Adım 4: Halil kiraz (meyve) ile domates, biber (sebze) almış: poşet var. 1 meyve, 2 sebze: bal için en az 2 × 2 = 4 meyve çeşidi gerekir, 1 yetmez: bal yok. Yalnızca bir hediye.
Adım 5: Gül elma, armut (meyve) ile domates (sebze) almış: poşet var. 2 meyve, 1 sebze: bal için en az 2 × 1 = 2 meyve çeşidi gerekir ve tam 2 var. "En az" ifadesi eşitliği içerir: bal var. İki hediye de Gül'ün.
Sık yapılan hata: "En az iki katı" ifadesinde eşitliği dışarıda bırakmak ya da bir kuralı sağlayan müşteriyi diğer kuralı denemeden seçmek.
Cevap D.`
},
{
  id: "tur-sm-328",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul satranç turnuvasını Ali, Bora, Cem, Deniz ve Ece tamamlamıştır. Berabere kalan olmamış, her öğrenci 1'den 5'e kadar farklı bir sırada bitirmiştir. Sıralamayla ilgili bilinenler:
• Bora, Cem'den daha önde bitirmiştir.
• Deniz, 3. ya da 4. sırada bitirmiştir.
• Ece, Ali'nin hemen önünde bitirmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Son sırada Ali ya da Cem vardır.","Birinci sırada Bora ya da Deniz vardır.","İkinci sırada Ece ya da Ali vardır.","Üçüncü sırada Deniz ya da Bora vardır."],
  dogru: 0,
  hatalar: [null,"Olası olanı kesin sanma: Bora birinci olabilir, ama Ece'nin birinci olduğu dizilişler de vardır.","Tek bir dizilişe bakıp karar verme: Ali ikinci olabilir, ama Cem'in ya da Bora'nın ikinci olduğu dizilişler de kurallara uyar.","Tek bir dizilişe bakıp karar verme: Deniz 3. sıradayken doğrudur, ama Ece-Ali ikilisi 2-3. sıralara girince 3. sırada Ali bulunur ve bu şık bozulur."],
  aciklama: `"Kesinlikle doğru", kurallara uyan bütün dizilişlerde doğru olan ifadedir. Önce bütün dizilişleri bul.
Adım 1: Ece-Ali bir blok (Ece önde). Deniz 3. ya da 4. sıradadır.
Adım 2: Deniz 3. ise boş yerler 1, 2, 4, 5'tir. Blok 1-2'ye girerse Bora 4, Cem 5 olur: Ece, Ali, Deniz, Bora, Cem. Blok 4-5'e girerse Bora 1, Cem 2 olur: Bora, Cem, Deniz, Ece, Ali.
Adım 3: Deniz 4. ise boş yerler 1, 2, 3, 5'tir. Blok 1-2'de Bora 3, Cem 5: Ece, Ali, Bora, Deniz, Cem. Blok 2-3'te Bora 1, Cem 5: Bora, Ece, Ali, Deniz, Cem.
Adım 4: Dört dizilişte son sırada sırasıyla Cem, Ali, Cem, Cem vardır. "Son sırada Ali ya da Cem" her durumda doğrudur. Diğer şıklar en az bir dizilişte bozulur.
Sık yapılan hata: "Ya da" içeren şıkkı tek bir dizilişe bakarak onaylamak.
Cevap A.`
},
{
  id: "tur-sm-329",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun robotik atölyesine giriş kuralları şunlardır:
• Atölyeye kayıtlı öğrenciler girebilir.
• Kayıtlı olmayan bir öğrenci, yalnızca öğretmeninden izin belgesi getirirse girebilir.
• Disiplin cezası olan öğrenci, kayıtlı olsa ya da izin belgesi getirse bile giremez; ancak velisi yazılı onay vermişse cezası yok sayılır ve yukarıdaki kurallar uygulanır.
**Buna göre tablodaki öğrencilerden hangisi atölyeye girebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Kayıt</th><th>İzin belgesi</th><th>Disiplin cezası</th><th>Veli onayı</th></tr><tr><td>Sevgi</td><td>Var</td><td>Yok</td><td>Var</td><td>Yok</td></tr><tr><td>Vildan</td><td>Yok</td><td>Var</td><td>Var</td><td>Var</td></tr><tr><td>Tarık</td><td>Yok</td><td>Yok</td><td>Var</td><td>Var</td></tr><tr><td>Ulaş</td><td>Yok</td><td>Var</td><td>Var</td><td>Yok</td></tr></table>`,
  secenekler: ["Sevgi","Vildan","Tarık","Ulaş"],
  dogru: 1,
  hatalar: ["Ceza kuralını atlama: Sevgi kayıtlıdır ama disiplin cezası vardır ve velisi onay vermemiştir; giremez.",null,"Veli onayını giriş koşulu sanma: onay yalnızca cezayı yok sayar; Tarık'ın ne kaydı ne de izin belgesi vardır.","İzin belgesini cezanın önüne koyma: Ulaş belgelidir ama cezalıdır ve velisi onay vermemiştir; giremez."],
  aciklama: `Adım 1: Her öğrenciye önce disiplin cezası kuralını (istisna), sonra giriş kurallarını uygula. Veli onayı yalnızca cezayı yok sayar; tek başına giriş hakkı vermez.
Adım 2: Sevgi: kayıtlı ama cezası var ve velisi onay vermemiş → giremez.
Adım 3: Vildan: cezası var ama veli onayı da var; ceza yok sayılır. Kayıtlı değil, fakat izin belgesi var → girer.
Adım 4: Tarık: veli onayı sayesinde cezası yok sayılır, ancak ne kaydı ne de izin belgesi var → giremez.
Adım 5: Ulaş: izin belgesi var ama cezalı ve veli onayı yok → giremez.
Sağlama: Dört öğrenciden yalnızca Vildan hem cezasını yok saydırmış hem de bir giriş koşulunu sağlamıştır.
Sık yapılan hata: Veli onayını giriş koşulu sanmak ya da cezayı hiç hesaba katmamak.
Cevap B.`
},
{
  id: "tur-sm-330",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul, pazartesiden cumaya kadar her gün farklı bir yere olacak biçimde müze, hayvanat bahçesi, tiyatro, kale ve botanik bahçesi gezilerini düzenleyecektir. Takvimle ilgili kararlar:
• Hayvanat bahçesi gezisi, botanik bahçesi gezisinden hemen sonraki günde yapılacaktır.
• Müze gezisi tiyatro gezisinden, tiyatro gezisi de hayvanat bahçesi gezisinden önce yapılacaktır.
• Kale gezisi cuma günü yapılmayacaktır.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Tiyatro gezisi salı günü yapılır.","Kale gezisi salı günü yapılır.","Kale gezisi pazartesi günü yapılır.","Müze gezisi çarşamba günü yapılır."],
  dogru: 3,
  hatalar: ["Olası olanı olamaz sanma: müze pazartesi, tiyatro salı, kale çarşamba dizilişi bütün kurallara uyar.","Olası olanı olamaz sanma: müze pazartesi, kale salı, tiyatro çarşamba dizilişi kurallara uyar.","Olası olanı olamaz sanma: kale pazartesi, müze salı, tiyatro çarşamba dizilişi kurallara uyar.",null],
  aciklama: `"Olamaz", hiçbir geçerli takvimde gerçekleşmeyen durumdur. Önce geçerli takvimleri bul.
Adım 1: Müze < tiyatro < hayvanat bahçesi olduğundan hayvanat bahçesinden önce en az iki gün (müze ve tiyatro) ve botanik bahçesi için bir gün gerekir.
Adım 2: Hayvanat bahçesi çarşambaysa botanik salıdır; müze ile tiyatro için yalnızca pazartesi kalır, olmaz. Hayvanat bahçesi perşembeyse botanik çarşamba, müze-tiyatro pazartesi-salı olur ve kaleye cuma kalır; kale cuma olamaz. Demek ki hayvanat bahçesi cumadır, botanik bahçesi perşembedir.
Adım 3: Pazartesi, salı, çarşamba günlerine müze, tiyatro, kale yerleşir ve müze tiyatrodan öncedir: kale-müze-tiyatro, müze-kale-tiyatro, müze-tiyatro-kale.
Adım 4: Müze her takvimde pazartesi ya da salıdır; çarşamba olamaz. Diğer üç şık bu üç takvimden birinde gerçekleşir.
Sık yapılan hata: İlk denenen takvimde gerçekleşmeyen şıkkı hemen "olamaz" saymak.
Cevap D.`
},
{
  id: "tur-sm-331",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Gökçe, Hasan, İrem ve Jale, büyüyünce pilot, doktor, mimar ve öğretmen olmak isteyen dört arkadaştır. Her meslek yalnızca bir kişi tarafından istenmektedir. Bilinenler:
• Gökçe, pilot ya da doktor olmak istemektedir.
• Hasan, mimar olmak istememektedir.
• İrem, ne pilot ne de doktor olmak istemektedir.
• Jale, öğretmen olmak istememektedir.
**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: ["Mimar olmak isteyen kişi Jale ya da İrem'dir.","Jale, mimar olmak istemektedir.","Öğretmen olmak isteyen kişi Hasan ya da İrem'dir.","Gökçe, öğretmen olmak istemektedir."],
  dogru: 1,
  hatalar: ["Kesin olanı bilinemez sanma: Gökçe ve Hasan mimar olamayacağı için mimarlık mutlaka Jale ya da İrem'dedir.",null,"Kesin olanı bilinemez sanma: Gökçe ve Jale öğretmen olamayacağı için öğretmenlik mutlaka Hasan ya da İrem'dedir.","Hiçbir durumda gerçekleşmeyen şıkkı \"bilinemez\" sanma: Gökçe yalnızca pilot ya da doktor olabilir, bu şık kesinlikle yanlıştır."],
  aciklama: `Soru, bazı durumlarda doğru bazılarında yanlış olan şıkkı soruyor.
Adım 1: Gökçe pilot ya da doktor; yani mimar ve öğretmen değildir. Mimar Hasan da değil. Mimar ancak İrem ya da Jale olabilir. Öğretmen Gökçe ve Jale olmadığı için Hasan ya da İrem olabilir.
Adım 2: İrem mimarsa öğretmen Hasan, Gökçe ile Jale pilot-doktordur. İrem öğretmense mimar Jale, Gökçe ile Hasan pilot-doktordur.
Adım 3: Birinci durumda Jale mimar değil, ikincisinde mimardır; "Jale mimardır" şıkkı kesin olarak bilinemez.
Adım 4: Mimarın Jale ya da İrem, öğretmenin Hasan ya da İrem olması her iki durumda doğrudur; "Gökçe öğretmendir" ise iki durumda da yanlıştır. Bunlar kesin bilinir.
Sık yapılan hata: Kesin yanlış olan bir ifadeyi de "bilinemez" saymak. Kesin yanlış da kesin bilinir.
Cevap B.`
},
{
  id: "tur-sm-332",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Fen laboratuvarında Kerem, Lale, Mert ve Nil; mikroskop, terazi, büyüteç ve pusuladan birer tanesini kullanmaktadır. Her alet yalnızca bir kişi tarafından kullanılmaktadır. Aşağıdaki çizelgede kişilerin kullanmadığı aletler ✗ ile işaretlenmiştir; boş kutular hakkında bilgi verilmemiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Mikroskop</th><th>Terazi</th><th>Büyüteç</th><th>Pusula</th></tr><tr><th>Kerem</th><td></td><td>✗</td><td></td><td>✗</td></tr><tr><th>Lale</th><td>✗</td><td></td><td>✗</td><td></td></tr><tr><th>Mert</th><td>✗</td><td></td><td>✗</td><td></td></tr><tr><th>Nil</th><td>✗</td><td></td><td></td><td></td></tr></table>`,
  secenekler: ["Pusula, Lale ya da Mert'tedir.","Terazi, Lale'de bulunmaktadır.","Büyüteç, Kerem'de bulunmaktadır.","Pusula, Mert'te bulunmaktadır."],
  dogru: 0,
  hatalar: [null,"Olası olanı kesin sanma: terazi Lale'de de Mert'te de olabilir; çizelge bu ikisini ayırmaz.","Çizelgeyi eksik okuma: büyüteç Lale ve Mert için ✗ olduğundan Nil'e kalır; Kerem mikroskopla eşleşir.","Olası olanı kesin sanma: pusula Mert'te olabilir, ama Lale'de olduğu durum da çizelgeye uyar."],
  aciklama: `Çizelgede ✗ olan kutular kapalıdır; kalan aletlerden kesin olanları bulmak için satır ve sütunlara tek tek bak.
Adım 1: Kerem'in satırında terazi ve pusula ✗: Kerem mikroskop ya da büyüteç kullanır.
Adım 2: Lale ve Mert'in satırlarında mikroskop ve büyüteç ✗: ikisi de terazi ya da pusula kullanır. Bu iki alet onlarla dolar.
Adım 3: Nil'e terazi ya da pusula kalmaz; Nil mikroskop kullanmadığına göre büyüteç kullanır, Kerem de mikroskopu kullanır.
Adım 4: Lale ile Mert terazi ve pusulayı iki biçimde paylaşabilir. Bu yüzden terazinin ya da pusulanın kime ait olduğu kesin değildir; ama pusula ikisinden birindedir.
Sağlama: Pusula her iki durumda da Lale ya da Mert'tedir.
Sık yapılan hata: Bir kutuyu doldurmak için ✗ olmayan kutuları "boştur, o hâlde ✓" diye okumak.
Cevap A.`
},
{
  id: "tur-sm-333",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim fuarında Efe, Gaye, Hülya ve Ilgaz; pazartesiden perşembeye kadar farklı günlerde, volkan, mıknatıs, ses ve bitki konularından birer tanesini sunmuştur. Her konu bir kez sunulmuştur. Fuarla ilgili bilinenler:
• Ses sunumu pazartesi günü yapılmıştır.
• Hülya, Efe'den bir gün sonra sunum yapmıştır.
• Ilgaz perşembe günü sunum yapmıştır.
• Volkan sunumunu Efe yapmıştır.
• Mıknatıs sunumunu Ilgaz yapmamıştır.
**Buna göre mıknatıs sunumu hangi gün yapılmıştır?**`,
  gorsel: null,
  secenekler: ["Pazartesi","Salı","Çarşamba","Perşembe"],
  dogru: 2,
  hatalar: ["Günleri karıştırma: pazartesi yapılan sunum ses sunumudur (Gaye), mıknatıs değil.","Efe'nin gününü mıknatıs sanma: Efe volkanı anlattığına göre salı günkü sunum volkan sunumudur.",null,"Ilgaz'ın gününü mıknatıs sanma: Ilgaz perşembe sunum yapmıştır ama konusu mıknatıs olamaz, bitkidir."],
  aciklama: `Bu soruda iki bilgiyi birlikte eşleştiriyoruz: kişi-gün ve kişi-konu.
Adım 1: Ilgaz perşembe günüdür. Efe, Gaye ve Hülya pazartesi, salı, çarşamba günlerine yerleşir ve Hülya, Efe'nin bir gün sonrasıdır: ya Efe pazartesi-Hülya salı-Gaye çarşamba ya da Gaye pazartesi-Efe salı-Hülya çarşamba.
Adım 2: Ses sunumu pazartesi yapıldı ve Efe volkanı anlattı. Efe pazartesi olsaydı pazartesi sunumu ses olamazdı; öyleyse pazartesi Gaye'dir ve Gaye sesi anlatmıştır.
Adım 3: Efe salı, Hülya çarşamba günüdür. Geriye mıknatıs ve bitki kaldı; Ilgaz mıknatısı anlatmadığı için Ilgaz bitkiyi, Hülya mıknatısı anlatmıştır.
Sağlama: Mıknatıs sunumu Hülya'nındır ve çarşamba günüdür; bütün bilgiler sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-334",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Dört oyuncu bir hazine toplama oyunu oynamıştır. Oyunun puanlama kuralları ve oyuncuların topladıkları nesneler aşağıda verilmiştir. Toplam puanı en yüksek olan oyuncu oyunu kazanır.
• Her yıldız 2 puandır.
• Her elmas 5 puandır.
• Her bomba toplam puandan 3 puan eksiltir.
• En az 2 elmas toplayan oyuncunun toplam puanına 4 bonus puan eklenir.
**Buna göre oyunu kim kazanmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Oyuncu</th><th>Yıldız</th><th>Elmas</th><th>Bomba</th></tr><tr><td>Ayça</td><td>10</td><td>0</td><td>2</td></tr><tr><td>Bora</td><td>3</td><td>2</td><td>0</td></tr><tr><td>Ceren</td><td>6</td><td>2</td><td>3</td></tr><tr><td>Doruk</td><td>7</td><td>1</td><td>0</td></tr></table>`,
  secenekler: ["Bora","Ayça","Ceren","Doruk"],
  dogru: 0,
  hatalar: [null,"Puana değil nesne sayısına bakma: Ayça 12 nesneyle en çok nesneyi toplamıştır ama puanı 14'te kalır.","Bombaların puan eksilttiğini unutma: bombaları saymazsan Ceren 26 puana çıkar; gerçekte 17 puandır.","Bonus kuralını unutma: Doruk 19 puandır, ama Bora 2 elmasla bonus alarak 20'ye çıkar."],
  aciklama: `Adım 1: Her oyuncunun puanını kuralları sırayla uygulayarak hesapla.
Adım 2: Ayça: 10 yıldız 20, 0 elmas 0, 2 bomba −6 → 14. Elması 2'den az, bonus yok.
Adım 3: Bora: 3 yıldız 6, 2 elmas 10 → 16. Elması 2 olduğu için +4 bonus → 20.
Adım 4: Ceren: 6 yıldız 12, 2 elmas 10, 3 bomba −9 → 13. Elması 2 olduğu için +4 bonus → 17.
Adım 5: Doruk: 7 yıldız 14, 1 elmas 5 → 19. Bonus yok.
Sıralama: Bora 20, Doruk 19, Ceren 17, Ayça 14.
Sık yapılan hata: Bonus kuralını atlamak ya da bomba eksilişini toplama eklemek.
Cevap A.`
},
{
  id: "tur-sm-335",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul servisi Emel, Ahmet, Derya, Bahar ve Cemil'i evlerinin önünde birer birer indirecektir. Her öğrenci ayrı bir durakta iner ve iniş sırası 1'den 5'e kadar numaralandırılmıştır. İniş sırasıyla ilgili bilinenler:
• Ahmet ile Derya'nın arasında tam iki kişi iner.
• Bahar, ilk inen öğrenci değildir.
• Cemil, Emel'den sonra iner.
• Derya, Ahmet'ten önce iner.
**Buna göre öğrenciler kaç farklı sırayla inebilir?**`,
  gorsel: null,
  secenekler: ["3","5","6","10"],
  dogru: 1,
  hatalar: ["Bir durumu atlama: Derya'nın 1., Ahmet'in 4. olduğu durumu sayıp Derya 2., Ahmet 5. durumunu eklememek.",null,"Bahar'ın ilk inmeme kuralını atlama: Derya 2., Ahmet 5. durumda Bahar'ı 1. sıraya koyduğun bir diziliş de saymış olursun.","Son kuralı (Derya, Ahmet'ten önce) uygulamama: Ahmet ile Derya'yı ters yerleştirdiğin dizilişleri de saymış olursun."],
  aciklama: `Adım 1: Aralarında tam iki kişi olan Ahmet-Derya ikilisi, Derya önde olduğundan şu yerlerde olabilir: Derya 1., Ahmet 4. ya da Derya 2., Ahmet 5.
Adım 2: Derya 1., Ahmet 4. ise boş yerler 2, 3, 5'tir. Bahar, Cemil ve Emel buraya Emel'in Cemil'den önce olması koşuluyla girer. Bahar 2'de: Emel 3, Cemil 5. Bahar 3'te: Emel 2, Cemil 5. Bahar 5'te: Emel 2, Cemil 3. Üç diziliş.
Adım 3: Derya 2., Ahmet 5. ise boş yerler 1, 3, 4'tür. Bahar 1. olamaz. Bahar 3'te: Emel 1, Cemil 4. Bahar 4'te: Emel 1, Cemil 3. İki diziliş.
Toplam: 3 + 2 = 5.
Sağlama: Her dizilişte dört kural da sağlanıyor.
Sık yapılan hata: Bir yerleşim durumunu atlamak ya da bir kuralı uygulamayı unutmak.
Cevap B.`
},
{
  id: "tur-sm-336",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul yüzme yarışmasının finalinde Ali, Berk ve Cem; 1., 2. ve 3. olmuştur. Duru, Efe ve Gül sonuçları önceden şöyle tahmin etmiştir. Sonuçlar açıklandığında her tahminin cümlelerinden tam olarak birinin doğru, birinin yanlış olduğu görülmüştür.
• Duru: "Ali birinci, Cem ikinci olacak."
• Efe: "Berk ikinci, Ali üçüncü olacak."
• Gül: "Cem üçüncü, Ali ikinci olacak."
**Buna göre dereceye girenlerin sıralaması (1., 2., 3.) aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Berk, Cem, Ali","Ali, Cem, Berk","Cem, Berk, Ali","Ali, Berk, Cem"],
  dogru: 3,
  hatalar: ["Gül'ün tahminini denemeden bırakma: bu sıralamada Gül'ün iki cümlesi de yanlıştır.","Duru'nun cümlelerini birlikte sınamama: bu sıralamada Duru'nun iki cümlesi de doğrudur; oysa yalnızca biri doğru çıkmıştır.","Duru'nun cümlelerini sınamama: bu sıralamada Duru'nun iki cümlesi de yanlıştır; oysa birinin doğru olması gerekir.",null],
  aciklama: `Her tahminde iki cümle var ve tam olarak biri doğru. Altı olası sıralamanın hepsini bu kurala göre elemek yerine, şıkları tek tek sına.
Adım 1: Ali-Berk-Cem: Duru'da "Ali birinci" doğru, "Cem ikinci" yanlış; Efe'de "Berk ikinci" doğru, "Ali üçüncü" yanlış; Gül'de "Cem üçüncü" doğru, "Ali ikinci" yanlış. Her tahminde tam bir doğru var: uygun.
Adım 2: Berk-Cem-Ali: Gül'de "Cem üçüncü" yanlış, "Ali ikinci" yanlış. İki yanlış: elenir.
Adım 3: Ali-Cem-Berk: Duru'da iki cümle de doğru: elenir.
Adım 4: Cem-Berk-Ali: Duru'da iki cümle de yanlış: elenir.
Sağlama: Altı sıralamanın tamamı denendiğinde yalnızca Ali-Berk-Cem bütün tahminlere uyar.
Sık yapılan hata: "Tam olarak bir doğru" koşuluna uymayan, ikisi doğru ya da ikisi yanlış çıkan tahmini kabul etmek.
Cevap D.`
},
{
  id: "tur-sm-337",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okul kütüphanesinden bir hafta boyunca 8. sınıfların ödünç aldığı roman ve öykü kitaplarının sayısı aşağıdaki çizelgede verilmiştir. Çizelgede bazı sayılar bilinmemektedir (?). Her satırda roman ve öykü sayılarının toplamı, o satırın "Toplam" değerine eşittir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>Roman</th><th>Öykü</th><th>Toplam</th></tr><tr><td>8-A</td><td>12</td><td>?</td><td>20</td></tr><tr><td>8-B</td><td>?</td><td>7</td><td>15</td></tr><tr><td>8-C</td><td>9</td><td>9</td><td>?</td></tr><tr><td>8-D</td><td>10</td><td>?</td><td>16</td></tr></table>`,
  secenekler: ["Öykü sayısı en çok olan sınıf 8-A'dır.","Roman sayısı en az olan sınıf 8-B'dir.","Toplam kitap sayısı en az olan sınıf 8-D'dir.","En çok kitap ödünç alan sınıf 8-C'dir."],
  dogru: 1,
  hatalar: ["Eksik kutuyu hesaplamadan karar verme: 8-A'nın öyküsü 8'dir, ama 8-C'nin öyküsü 9'dur.",null,"Toplamı bilinen sınıflarla karşılaştırmama: 8-D 16 kitap almıştır; 8-B ise 15 kitapla daha azdır.","8-C'nin toplamını yanlış hesaplama: 9 + 9 = 18'dir, 8-A'nın toplamı olan 20'den azdır."],
  aciklama: `Adım 1: Boş kutuları doldur. 8-A: öykü = 20 − 12 = 8. 8-B: roman = 15 − 7 = 8. 8-C: toplam = 9 + 9 = 18. 8-D: öykü = 16 − 10 = 6.
Adım 2: Roman sayıları 12, 8, 9, 10: en az olan 8-B.
Adım 3: Öykü sayıları 8, 7, 9, 6: en çok olan 8-C. Toplamlar 20, 15, 18, 16: en az olan 8-B, en çok olan 8-A.
Adım 4: Şıkları bu değerlerle karşılaştır: yalnızca "roman sayısı en az olan sınıf 8-B'dir" doğrudur.
Sağlama: 8 + 7 = 15 ve 12 + 8 = 20 olduğundan hesaplamalar tablodaki toplamlarla uyuşuyor.
Sık yapılan hata: Boş kutuyu hesaplamadan, yalnızca görünen sayılara bakarak karşılaştırma yapmak.
Cevap B.`
},
{
  id: "tur-sm-338",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun spor şenliğinde hız, bulmaca, hafıza ve denge yarışmaları birbiri ardına, her biri bir kez olacak biçimde yapılacaktır. Yarışmaların sırasıyla ilgili kararlar:
• Bulmaca ve hafıza yarışmaları art arda yapılacaktır.
• Denge yarışması, hız yarışmasından önce yapılacaktır.
**Buna göre dört yarışma kaç farklı sırayla yapılabilir?**`,
  gorsel: null,
  secenekler: ["3","6","12","24"],
  dogru: 1,
  hatalar: ["Art arda duracak ikilinin kendi içinde yer değiştirebildiğini unutma: bulmaca-hafıza ve hafıza-bulmaca ayrı sıralardır.",null,"Denge yarışmasının hız yarışmasından önce olması kuralını uygulamama: kural yokken denge-hız ve hız-denge sıraları ayrı ayrı sayılır ve sayı iki katına (12) çıkar.","Hiçbir kuralı uygulamadan dört yarışmayı rastgele sıralamak (4 × 3 × 2 × 1)."],
  aciklama: `Adım 1: Bulmaca ile hafıza art arda olacağından onları tek bir kutu gibi düşün. Üç parça olur: [bulmaca-hafıza], denge, hız.
Adım 2: Denge, hızdan önce olmalı. Üç parçanın sırası: kutu-denge-hız, denge-kutu-hız, denge-hız-kutu. Üç sıra.
Adım 3: Kutunun içinde bulmaca-hafıza ya da hafıza-bulmaca olabilir. Üç sırayı 2 ile çarp: 3 × 2 = 6.
Sağlama: Altı sıranın hepsinde bulmaca-hafıza yan yanadır ve denge hızdan önce gelir.
Sık yapılan hata: Art arda duran ikilinin kendi içindeki iki sırayı saymamak.
Cevap B.`
},
{
  id: "tur-sm-339",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Fotoğraf stüdyosunda Ali, Berna, Cem ve Derya birer kez fotoğraf çektirecektir. Çekim sırasıyla ilgili bilinenler:
• Ali, Berna'dan önce çektirecektir.
• Derya, Cem'den hemen sonra çektirecektir.
**Buna göre aşağıdakilerden hangisi bilinirse dört kişinin çekim sırası kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: ["Ali ilk sırada çektirecektir.","Berna son sırada çektirecektir.","Derya, Berna'dan önce çektirecektir.","Cem ilk sırada çektirecektir."],
  dogru: 3,
  hatalar: ["Bir kişiyi kesinleştirmek herkesi kesinleştirmez: Ali ilk olunca Cem-Derya ikilisi ile Berna iki biçimde dizilebilir.","Durumları yalnızca azaltan bilgi yetmez: Berna son olunca Ali-Cem-Derya sırası iki biçimde kurulabilir.","Üç olası sıradan yalnızca birini eleyen bilgi yetmez; iki sıra hâlâ geçerlidir.",null],
  aciklama: `Önce ek bilgi olmadan geçerli sıraları bul. Cem-Derya art arda ve Cem önde olduğundan onları tek kutu say: [Cem-Derya], Ali, Berna. Ali, Berna'dan önce olmalı.
Adım 1: Üç sıra çıkar: Cem, Derya, Ali, Berna · Ali, Cem, Derya, Berna · Ali, Berna, Cem, Derya.
Adım 2: "Cem ilk": yalnızca birinci sıra kalır. Kesinleşir.
Adım 3: "Ali ilk": ikinci ve üçüncü sıra kalır. Hâlâ iki durum var.
Adım 4: "Berna son": birinci ve ikinci sıra kalır. İki durum var.
Adım 5: "Derya, Berna'dan önce": birinci ve ikinci sıra kalır (üçüncüde Derya, Berna'dan sonradır). İki durum var.
Sağlama: Yalnızca "Cem ilk" bilgisi sırayı tek duruma indirir.
Sık yapılan hata: Bir kişinin yerini belirleyen bilginin bütün sırayı belirlediğini sanmak.
Cevap D.`
},
{
  id: "tur-sm-340",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun okuma kampanyasında dört sınıfın bir ayda okuduğu kitap sayısı grafikte, sınıfların öğrenci sayıları ise tabloda verilmiştir. Kampanyanın ödül kuralı şudur:
• Okunan kitap sayısı, sınıfın öğrenci sayısının en az iki katı olan sınıf ödül alır.
**Buna göre hangi sınıf ödül alır?**`,
  gorsel: `<svg viewBox="0 0 560 270" role="img"><text x="8" y="22" font-size="14" fill="currentColor">Okunan kitap sayısı</text><line x1="40" y1="230" x2="545" y2="230" stroke="currentColor" stroke-width="2"/><rect x="70" y="68" width="70" height="162" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="105" y="61" text-anchor="middle" font-size="16" fill="currentColor">36</text><text x="105" y="252" text-anchor="middle" font-size="16" fill="currentColor">8-A</text><rect x="190" y="104" width="70" height="126" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="225" y="97" text-anchor="middle" font-size="16" fill="currentColor">28</text><text x="225" y="252" text-anchor="middle" font-size="16" fill="currentColor">8-B</text><rect x="310" y="50" width="70" height="180" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="345" y="43" text-anchor="middle" font-size="16" fill="currentColor">40</text><text x="345" y="252" text-anchor="middle" font-size="16" fill="currentColor">8-C</text><rect x="430" y="122" width="70" height="108" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="465" y="115" text-anchor="middle" font-size="16" fill="currentColor">24</text><text x="465" y="252" text-anchor="middle" font-size="16" fill="currentColor">8-D</text></svg><br><table class="tablo"><tr><th>Sınıf</th><th>8-A</th><th>8-B</th><th>8-C</th><th>8-D</th></tr><tr><td>Öğrenci sayısı</td><td>20</td><td>14</td><td>25</td><td>13</td></tr></table>`,
  secenekler: ["8-B","8-A","8-C","8-D"],
  dogru: 0,
  hatalar: [null,"Sınırın altında kalanı kabul etme: 8-A'nın 36 kitabı, 20 öğrencinin iki katı olan 40'a ulaşmaz.","En çok kitap okuyan sınıfı ödüllü sanma: 8-C'nin 40 kitabı, 25 öğrencinin iki katı olan 50'ye ulaşmaz.","Küçük sınıfı kayırma: 8-D'nin 24 kitabı, 13 öğrencinin iki katı olan 26'dan azdır."],
  aciklama: `Adım 1: Her sınıf için öğrenci sayısının iki katını bul ve grafikteki kitap sayısıyla karşılaştır.
Adım 2: 8-A: 2 × 20 = 40; okunan 36 → yetmez.
Adım 3: 8-B: 2 × 14 = 28; okunan 28 → "en az iki katı" eşitliği içerir, yeter.
Adım 4: 8-C: 2 × 25 = 50; okunan 40 → yetmez. 8-D: 2 × 13 = 26; okunan 24 → yetmez.
Sağlama: Dört sınıftan yalnızca 8-B sınır değerde de olsa kurala uyuyor.
Sık yapılan hata: "En az" ifadesinde eşitliği dışarıda bırakmak ya da en yüksek çubuğu seçmek.
Cevap A.`
},
{
  id: "tur-sm-341",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Sınıf pikniğine Deniz, Ela, Fırat ve Gül'ün katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Deniz katılırsa Ela da katılır.
• Ela katılırsa Fırat katılmaz.
• Gül katılmazsa Deniz katılır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Ela ile Gül birlikte katılır.","Deniz ile Gül'den en az biri katılmaz.","Deniz ile Fırat'tan en az biri katılmaz.","Fırat ile Gül birlikte katılır."],
  dogru: 2,
  hatalar: ["Olası olanı kesin sanma: yalnızca Gül'ün katıldığı durum da kurallara uyar; orada Ela katılmaz.","Olası olanı kesin sanma: Deniz, Ela ve Gül'ün katılıp Fırat'ın katılmadığı durum bütün kurallara uyar.",null,"Tek bir duruma bakma: Fırat katılırsa Gül de katılır; ama Fırat'ın hiç katılmadığı durumlarda bu şık doğru olmaz."],
  aciklama: `Koşullu cümleleri zincirleyerek başla.
Adım 1: "Deniz katılırsa Ela katılır" ve "Ela katılırsa Fırat katılmaz" kuralları birleşir: Deniz katılırsa Fırat katılmaz. Yani Deniz ile Fırat'tan en az biri katılmaz.
Adım 2: Şimdi geçerli durumlara bak. Durum 1: yalnızca Gül katılır (kurallar sağlanır). Durum 2: Deniz, Ela ve Gül katılır, Fırat katılmaz. Durum 3: Fırat ve Gül katılır, Deniz ile Ela katılmaz.
Adım 3: "Ela ile Gül birlikte katılır" Durum 1'de yanlış. "Deniz ile Gül'den en az biri katılmaz" Durum 2'de yanlış. "Fırat ile Gül birlikte katılır" Durum 1'de yanlış.
Adım 4: "Deniz ile Fırat'tan en az biri katılmaz" ise bütün geçerli durumlarda doğrudur; Adım 1'deki zincir bunu garanti eder.
Sık yapılan hata: Bir koşullu cümleyi tersine çevirip ("Fırat katılmazsa Ela katılır" gibi) yeni bir kural uydurmak.
Cevap C.`
},
{
  id: "tur-sm-342",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun bilgi yarışması takımı için Kutay, Leyla, Metin ve Nesrin'in seçilip seçilmediği konusunda şunlar bilinmektedir. (Her öğrenci ya seçilir ya seçilmez.)
• Kutay seçilirse Leyla seçilmez.
• Metin seçilmezse Leyla seçilir.
• Nesrin seçilirse Metin de seçilir.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Kutay seçilmiştir, Metin seçilmemiştir.","Leyla seçilmiştir, Nesrin seçilmemiştir.","Kutay seçilmemiştir, Metin seçilmemiştir.","Nesrin seçilmiştir, Leyla seçilmemiştir."],
  dogru: 0,
  hatalar: [null,"Olası olanı olamaz sanma: yalnızca Leyla'nın seçildiği durum bütün kurallara uyar.","Olası olanı olamaz sanma: Metin seçilmezse Leyla seçilir; Kutay da Nesrin de seçilmeden bu durum kurulabilir.","Olası olanı olamaz sanma: Nesrin seçilirse Metin de seçilir; Leyla seçilmezse kurallar yine sağlanır (Metin ile Nesrin takıma girer)."],
  aciklama: `"Olamaz", hiçbir geçerli durumda gerçekleşmeyen durumdur.
Adım 1: Kutay seçilirse Leyla seçilmez. Metin seçilmezse Leyla seçilir.
Adım 2: Kutay seçilmiş, Metin seçilmemiş olsun. Birinci kural Leyla'nın seçilmediğini, ikinci kural Leyla'nın seçildiğini söyler. Bu çelişkidir; durum hiçbir zaman gerçekleşmez.
Adım 3: Diğer üç şık için birer geçerli durum kur: yalnızca Leyla seçilir (Leyla var, Nesrin yok); Leyla seçilir ve Kutay ile Metin seçilmez; Metin ile Nesrin seçilir, Kutay ile Leyla seçilmez.
Sağlama: Son üç şık en az bir durumda gerçekleşiyor, ilki hiçbirinde gerçekleşmiyor.
Sık yapılan hata: Şıkkın içindeki iki bilgiyi ayrı ayrı doğru bulup birlikte de gerçekleşir sanmak.
Cevap A.`
},
{
  id: "tur-sm-343",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun bilgisayar sınıfı için rezervasyon taleplerinde aşağıdaki kurallar uygulanmaktadır. Dört öğrencinin talebi tabloda verilmiştir.
• Rezervasyon yalnızca salı, çarşamba ya da perşembe günleri için yapılabilir.
• Rezervasyon süresi en fazla 2 saat olabilir.
• Amacı oyun olan rezervasyon kabul edilmez.
• Amacı proje olan rezervasyon için öğretmen onayı gerekir; ödev için gerekmez.
**Buna göre hangi öğrencinin talebi kabul edilir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Gün</th><th>Süre</th><th>Amaç</th><th>Öğretmen onayı</th></tr><tr><td>Ahu</td><td>Pazartesi</td><td>2 saat</td><td>ödev</td><td>Yok</td></tr><tr><td>Berke</td><td>Salı</td><td>3 saat</td><td>proje</td><td>Var</td></tr><tr><td>Cenk</td><td>Çarşamba</td><td>2 saat</td><td>proje</td><td>Yok</td></tr><tr><td>Dilek</td><td>Perşembe</td><td>2 saat</td><td>proje</td><td>Var</td></tr></table>`,
  secenekler: ["Ahu","Berke","Cenk","Dilek"],
  dogru: 3,
  hatalar: ["Gün kuralını atlama: Ahu'nun talebi pazartesi içindir, oysa yalnızca salı, çarşamba ve perşembe günleri uygundur.","Süre sınırını gözden kaçırma: Berke 3 saat istemiştir, oysa en fazla 2 saat olabilir.","Onay kuralını ödev ile karıştırma: Cenk'in amacı proje olduğu için öğretmen onayı gerekir, ama onayı yoktur.",null],
  aciklama: `Adım 1: Her talebe dört kuralı sırayla uygula; bir kural bile sağlanmıyorsa talep kabul edilmez.
Adım 2: Ahu: pazartesi günü listede yok → reddedilir.
Adım 3: Berke: 3 saat, "en fazla 2 saat" sınırını aşıyor → reddedilir.
Adım 4: Cenk: gün ve süre uygun, amaç proje ama onay yok → reddedilir.
Adım 5: Dilek: perşembe (uygun), tam 2 saat ("en fazla 2" sınırı içerir), amaç proje ve onay var → kabul edilir.
Sağlama: Dört talepten yalnızca Dilek'inki dört kuralın dördüne de uyuyor.
Sık yapılan hata: Bir kuralı sağlayan talebi "uygun" sayıp sonraki kuralları denememek.
Cevap D.`
},
{
  id: "tur-sm-344",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Mina, Naz, Onur ve Pınar okul lokantasında birer yemek (çorba, pilav, makarna, salata) ve birer içecek (ayran, su, limonata, çay) ısmarlamıştır. Hiçbir yemek ya da içecek iki kişi tarafından ısmarlanmamıştır. Siparişlerle ilgili bilinenler:
• Çorba ısmarlayan kişi ayran da ısmarlamıştır.
• Salata ısmarlayan kişi limonata da ısmarlamıştır.
• Onur, makarna ve çay ısmarlamıştır.
• Mina, çorba ısmarlamamıştır.
• Pınar ne çorba ne de pilav ısmarlamıştır.
**Buna göre Mina'nın ısmarladığı yemek ve içecek aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Çorba ve çay","Pilav ve su","Pilav ve ayran","Salata ve su"],
  dogru: 1,
  hatalar: ["Mina çorba ısmarlamamıştır; ayrıca çorba ısmarlayan ayran da ısmarlar, çay ise Onur'dadır.",null,"Yemek doğru olsa da ayran, çorba ısmarlayan Naz'a gider; Mina'ya ayran kalmaz.","Salata, Pınar'a kalır (Pınar ne çorba ne pilav ısmarlamış, makarna da Onur'dadır); salata ısmarlayan limonata da ısmarlar."],
  aciklama: `Bu soruda iki çizelgeyi (kişi-yemek, kişi-içecek) birlikte doldur.
Adım 1: Onur makarna ve çay ısmarlamıştır. Bu iki satır kapanır.
Adım 2: Pınar çorba ve pilav ısmarlamadığına göre ve makarna da Onur'da olduğuna göre salata Pınar'a kalır. Salata ısmarlayan limonata da ısmarlamıştır; Pınar'ın içeceği limonatadır.
Adım 3: Çorba ve pilav, Mina ile Naz arasında kalır. Mina çorba ısmarlamadığına göre Mina pilav, Naz çorba ısmarlamıştır. Çorba ile ayran aynı kişide olduğundan Naz ayran içmiştir.
Adım 4: İçeceklerden su kaldı; su Mina'nındır.
Sağlama: Mina pilav-su, Naz çorba-ayran, Onur makarna-çay, Pınar salata-limonata; bütün bilgiler sağlanıyor.
Cevap B.`
},
{
  id: "tur-sm-345",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun dört öğretmeni Ayten, Burhan, Cavit ve Dilek, pazartesiden perşembeye kadar bahçe ve kapı nöbetlerini aşağıdaki çizelgeye göre paylaşmıştır. Çizelgedeki "?" işaretli yerler henüz belirlenmemiştir. Nöbet düzeninin kuralları:
• Her gün bahçede de kapıda da birer öğretmen nöbet tutar; her öğretmen bahçe nöbetini bir gün, kapı nöbetini de bir gün tutar.
• Bir öğretmen aynı gün hem bahçede hem kapıda nöbet tutmaz.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Bahçe nöbeti</th><th>Kapı nöbeti</th></tr><tr><td>Pazartesi</td><td>Ayten</td><td>?</td></tr><tr><td>Salı</td><td>?</td><td>Burhan</td></tr><tr><td>Çarşamba</td><td>Cavit</td><td>?</td></tr><tr><td>Perşembe</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["Perşembe günü kapı nöbetini Ayten tutar.","Çarşamba günü kapı nöbetini Ayten tutar.","Salı günü bahçe nöbetini Dilek tutar.","Pazartesi günü kapı nöbetini Dilek tutar."],
  dogru: 2,
  hatalar: ["Olası olanı kesin sanma: Ayten'in perşembe kapıda olduğu düzen geçerlidir, ama Dilek'in perşembe kapıda olduğu düzenler de vardır.","Olası olanı kesin sanma: Ayten çarşamba kapıda olabilir, ama Dilek'in çarşamba kapıda olduğu düzen de kurallara uyar.",null,"Olası olanı kesin sanma: Dilek pazartesi kapıda olabilir, ama Cavit'in pazartesi kapıda olduğu düzenler de vardır."],
  aciklama: `Adım 1: Salı günü kapıda Burhan var. Burhan aynı gün bahçede olamaz; salı bahçesi için Burhan'dan başka aday Dilek'tir (Ayten ve Cavit bahçe nöbetlerini pazartesi ve çarşamba tutuyor).
Adım 2: Dilek salı bahçeyi tutunca perşembe bahçesi Burhan'a kalır.
Adım 3: Kapı nöbetleri için Ayten, Cavit ve Dilek pazartesi, çarşamba ve perşembeye yerleşir. Ayten pazartesi bahçede, Cavit çarşamba bahçede olduğundan Ayten pazartesi, Cavit çarşamba kapıda olamaz. Geriye üç düzen kalır: Cavit-Ayten-Dilek, Cavit-Dilek-Ayten, Dilek-Ayten-Cavit (pazartesi-çarşamba-perşembe sırasıyla).
Adım 4: Diğer üç şık bu düzenlerin bir kısmında doğru, bir kısmında yanlış; salı bahçesi ise hepsinde Dilek'tir.
Sık yapılan hata: Kapı nöbetlerinin tek bir düzeninden söz edildiğini sanmak.
Cevap C.`
},
{
  id: "tur-sm-346",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul bahçesindeki çiçek tarhına Berk, Cansu, Doğa ve Emre; lale, sümbül, nergis ve papatyadan birer tür dikmiştir. Her kişi bir tür, her tür de bir kişi tarafından dikilmiştir. Bilinenler:
• Berk, ne nergis ne de papatya dikmiştir.
• Cansu, ne sümbül ne de nergis dikmiştir.
• Doğa, sümbül dikmemiştir.
• Emre, ne lale ne de papatya dikmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Laleyi Doğa ya da Emre dikmiştir.","Papatyayı Berk ya da Doğa dikmiştir.","Sümbülü Berk ya da Emre dikmiştir.","Nergisi Berk ya da Doğa dikmiştir."],
  dogru: 2,
  hatalar: ["Olası olanı kesin sanma: Doğa'nın lale diktiği düzende bu şık doğrudur, ama Berk'in lale diktiği düzende bozulur.","Olası olanı kesin sanma: Doğa'nın papatya diktiği düzende bu şık doğrudur, ama Cansu'nun papatya diktiği düzenlerde bozulur.",null,"Olası olanı kesin sanma: Doğa'nın nergis diktiği düzende bu şık doğrudur, ama Emre'nin nergis diktiği düzenlerde bozulur."],
  aciklama: `"Kesinlikle doğru", kurallara uyan bütün durumlarda doğru olan ifadedir. Önce her kişinin dikebileceği türleri bul.
Adım 1: Berk lale ya da sümbül dikmiştir. Cansu lale ya da papatya dikmiştir. Doğa lale, nergis ya da papatya dikmiştir. Emre nergis ya da sümbül dikmiştir.
Adım 2: Kurallara uyan üç durum vardır:
1) Berk lale, Cansu papatya, Doğa nergis, Emre sümbül
2) Berk sümbül, Cansu lale, Doğa papatya, Emre nergis
3) Berk sümbül, Cansu papatya, Doğa lale, Emre nergis
Adım 3: Sümbülü ne Cansu ne de Doğa dikebilir; sümbül Berk'te ya da Emre'dedir. Üç durumda da böyledir.
Adım 4: Diğer şıklar yalnızca tek bir durumda doğrudur: "Laleyi Doğa ya da Emre" yalnız 3. durumda, "Papatyayı Berk ya da Doğa" yalnız 2. durumda, "Nergisi Berk ya da Doğa" yalnız 1. durumda.
Sık yapılan hata: Tek bir durum kurup o durumda doğru çıkan şıkkı kesin sanmak. Kesin olan, her durumda doğru kalandır.
Cevap C.`
},
{
  id: "tur-sm-347",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Ayşe, Bora, Ceren, Deniz ve Emir'in çantalarının ağırlıkları birbirinden farklıdır. Çantalar karşılaştırılmış ve şunlar görülmüştür:
• Ayşe'nin çantası Bora'nınkinden ağırdır.
• Ceren'in çantası Bora'nınkinden ağırdır.
• Deniz'in çantası Bora'nınkinden hafiftir.
• Emir'in çantası Deniz'inkinden hafiftir.
**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: ["Ayşe'nin çantası Ceren'inkinden ağırdır.","Emir'in çantası en hafif çantadır.","Deniz'in çantası Ceren'inkinden hafiftir.","Bora'nın çantası Emir'inkinden hafiftir."],
  dogru: 0,
  hatalar: [null,"Kesin olanı bilinemez sanma: Emir, Deniz'den; Deniz de Bora'dan hafiftir. Emir diğer dört çantadan da hafiftir.","Kesin olanı bilinemez sanma: Deniz Bora'dan, Bora da Ceren'den hafif olduğu için Deniz, Ceren'den de hafiftir.","Kesin yanlış olanı bilinemez sanma: Emir, Deniz'den, Deniz Bora'dan hafif olduğu için Bora'nın çantası Emir'inkinden ağırdır; bu şık kesin yanlıştır."],
  aciklama: `Karşılaştırmaları hafiften ağıra bir zincire diz.
Adım 1: Emir < Deniz < Bora olur (Emir en hafif, sonra Deniz, sonra Bora).
Adım 2: Ayşe de Ceren de Bora'dan ağırdır; yani ikisi de zincirin sonunda, Bora'nın sağındadır.
Adım 3: Ayşe ile Ceren arasında bir karşılaştırma verilmemiştir. İki sıra mümkündür: Emir, Deniz, Bora, Ayşe, Ceren ya da Emir, Deniz, Bora, Ceren, Ayşe.
Adım 4: "Ayşe, Ceren'den ağırdır" birinci sırada yanlış, ikincisinde doğrudur; kesin olarak bilinemez. Diğer üç şık bütün sıralarda aynı sonucu verir.
Sık yapılan hata: Hiç karşılaştırılmamış iki kişiyi (Ayşe-Ceren) bir yöne yerleştirmek.
Cevap A.`
},
{
  id: "tur-sm-348",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir doğa parkındaki teleferik biletleri için indirim kuralları ve dört grubun ziyaret günleriyle yaşları aşağıda verilmiştir.
• 12 yaş ve altındaki çocuklar ile 65 yaş ve üstündeki kişiler indirimli bilet alır.
• Cuma günleri yalnızca 12 yaş ve altındaki çocuklar indirimli bilet alır; 65 yaş ve üstü için indirim uygulanmaz.
**Buna göre hangi grup en çok indirimli bilet almıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Grup</th><th>Gün</th><th>Kişilerin yaşları</th></tr><tr><td>Mavi grup</td><td>Salı</td><td>8, 14, 65, 70</td></tr><tr><td>Kırmızı grup</td><td>Cuma</td><td>12, 9, 66, 71</td></tr><tr><td>Yeşil grup</td><td>Çarşamba</td><td>13, 12, 64, 65</td></tr><tr><td>Sarı grup</td><td>Cuma</td><td>5, 12, 13, 40</td></tr></table>`,
  secenekler: ["Kırmızı grup","Mavi grup","Yeşil grup","Sarı grup"],
  dogru: 1,
  hatalar: ["Cuma istisnasını atlama: 66 ve 71 yaşındakileri de indirimli sayıp 4 bulma. Cuma günü bu iki kişi indirim alamaz, grup 2'de kalır.",null,"Sınır yaşlarını yanlış sayma: 13 yaşındaki çocuk ve 64 yaşındaki kişi indirim almaz; indirimli yalnızca 12 ve 65 yaşındakiler olduğundan grup 2'de kalır.","13 yaşını da çocuk sayma: indirim 12 yaş ve altı içindir; Sarı grupta yalnızca 5 ve 12 yaşındakiler indirim alır, grup 2'de kalır."],
  aciklama: `Adım 1: Önce her grubun gününe bak; cuma ise 65 yaş ve üstü indirimden çıkar.
Adım 2: Mavi (salı): 8, 65 ve 70 yaşındakiler indirimli → 3 kişi.
Adım 3: Kırmızı (cuma): yalnızca 12 ve 9 yaşındakiler → 2 kişi (66 ve 71 yaşındakiler cuma günü indirim alamaz).
Adım 4: Yeşil (çarşamba): 12 ve 65 yaşındakiler → 2 kişi (13 ve 64 sınırın dışında). Sarı (cuma): 5 ve 12 yaşındakiler → 2 kişi.
Sağlama: Sayılar 3, 2, 2, 2; en çok indirimli bilet Mavi grupta.
Sık yapılan hata: Cuma istisnasını unutmak ya da "12 yaş ve altı"nı 13'ü içerecek biçimde okumak.
Cevap B.`
},
{
  id: "tur-sm-349",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kitap standında iki raf vardır: üst rafta ve alt rafta soldan sağa 1., 2. ve 3. yerler bulunur. Atlas, Bilmece, Çizgi roman, Destan, Efsane ve Fabl kitapları, her yerde bir kitap olacak biçimde yerleştirilmiştir. Yerleşimle ilgili bilinenler:
• Atlas üst rafta, Bilmece ise Atlas'ın tam altındadır.
• Destan, üst rafın en sağındadır.
• Çizgi roman, Efsane'nin hemen solundadır (aynı rafta, yan yana).
**Buna göre Fabl'ın tam altındaki kitap hangisidir?**`,
  gorsel: null,
  secenekler: ["Bilmece","Destan","Efsane","Çizgi roman"],
  dogru: 3,
  hatalar: ["Bilmece, Atlas'ın tam altındadır; Fabl'ın değil. Fabl üst rafın ortasında, Atlas solundadır.","Destan üst raftadır (en sağda); Fabl'ın altında alt raf kitabı bulunur.","Efsane alt rafın en sağındadır, tam üstünde Destan bulunur; Fabl'ın altında değildir.",null],
  aciklama: `Hem satırı hem sütunu işaretleyerek çöz.
Adım 1: Destan üst rafın en sağında (üst-3). Atlas üst rafta, Bilmece tam altında; Atlas üst-1 ya da üst-2 olabilir.
Adım 2: Çizgi roman-Efsane ikilisi aynı rafta yan yana olmalı. Üst rafta Destan ve Atlas var; ikili üst rafa sığsaydı Atlas dışarıda kalırdı. O hâlde ikili alt raftadır: alt-1/alt-2 ya da alt-2/alt-3.
Adım 3: Bilmece de alt raftadır. İkili alt-1/alt-2'deyse Bilmece alt-3'e düşer ve Atlas üst-3'te (Destan'ın yerinde) olurdu; olmaz. İkili alt-2/alt-3'tedir: Çizgi roman alt-2, Efsane alt-3, Bilmece alt-1; Atlas üst-1.
Adım 4: Üst rafta kalan yer üst-2 Fabl'ındır. Tam altı alt-2: Çizgi roman.
Sağlama: Üst raf: Atlas, Fabl, Destan; alt raf: Bilmece, Çizgi roman, Efsane. Üç bilgi de sağlanıyor.
Sık yapılan hata: "Hemen solunda" bilgisini yalnızca yan yana değil, aynı rafta da olarak okumamak.
Cevap D.`
},
{
  id: "tur-sm-350",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul orkestrasında Alp, Betül, Cihan ve Duygu; keman, flüt, davul ve gitardan birer tanesini çalmaktadır. Her kişi bir enstrüman, her enstrüman da bir kişi tarafından çalınmaktadır. Bilinenler:
• Alp, ne keman ne de gitar çalmaktadır.
• Betül, davul çalmamaktadır.
• Cihan, keman ya da flüt çalmaktadır.
• Duygu, flüt çalmamaktadır.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Kemanı Alp ya da Duygu çalmaktadır.","Flütü Alp ya da Betül çalmaktadır.","Davulu Alp ya da Betül çalmaktadır.","Gitarı Alp ya da Cihan çalmaktadır."],
  dogru: 3,
  hatalar: ["Olası olanı olamaz sanma: Alp davul, Betül gitar, Cihan flüt, Duygu keman düzeni bütün kurallara uyar; kemanı Duygu çalar.","Olası olanı olamaz sanma: Alp flüt, Betül gitar, Cihan keman, Duygu davul düzeni bütün kurallara uyar; flütü Alp çalar.","Olası olanı olamaz sanma: Alp davul, Betül keman, Cihan flüt, Duygu gitar düzeni bütün kurallara uyar; davulu Alp çalar.",null],
  aciklama: `"Olamaz", hiçbir geçerli durumda gerçekleşmeyen durumdur. Önce her kişinin çalabileceği enstrümanları bul.
Adım 1: Alp flüt ya da davul çalar. Betül keman, flüt ya da gitar çalar. Cihan keman ya da flüt çalar. Duygu keman, davul ya da gitar çalar.
Adım 2: Kurallara uyan dört durum vardır:
1) Alp flüt, Betül gitar, Cihan keman, Duygu davul
2) Alp davul, Betül keman, Cihan flüt, Duygu gitar
3) Alp davul, Betül flüt, Cihan keman, Duygu gitar
4) Alp davul, Betül gitar, Cihan flüt, Duygu keman
Adım 3: Gitarı ne Alp (kural 1) ne de Cihan (keman ya da flüt çalar) çalabilir. Gitar her durumda Betül'de ya da Duygu'dadır; "Gitarı Alp ya da Cihan çalmaktadır" hiçbir durumda gerçekleşmez.
Adım 4: Diğer üç şık en az bir durumda gerçekleşir: kemanı Duygu 4. durumda, flütü Alp 1. durumda, davulu Alp 2. durumda çalar.
Sık yapılan hata: İlk denediğin durumda gerçekleşmeyen şıkkı hemen "olamaz" saymak. Şıkkı sağlayan bir durum kurmayı ayrıca dene.
Cevap D.`
},
{
  id: "tur-sm-351",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yaz kampında üç gün boyunca kano, tırmanış ve yüzme etkinlikleri yapılmıştır. Tablodaki "?" işaretli kutular bilinmemektedir; her günün toplam katılımcı sayısı ise tabloda yazılıdır. Hiçbir katılımcı aynı gün birden fazla etkinliğe katılmamıştır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Kano</th><th>Tırmanış</th><th>Yüzme</th><th>Günün toplamı</th></tr><tr><td>Cuma</td><td>8</td><td>?</td><td>5</td><td>21</td></tr><tr><td>Cumartesi</td><td>?</td><td>9</td><td>7</td><td>24</td></tr><tr><td>Pazar</td><td>6</td><td>4</td><td>?</td><td>17</td></tr></table>`,
  secenekler: ["Tırmanışa en çok katılım pazar gününe aittir.","Üç günde en az katılımcı yüzme etkinliğine gelmiştir.","Üç günde en çok katılımcı tırmanış etkinliğine gelmiştir.","Cumartesi günü yüzmeye katılanlar, cuma günü yüzmeye katılanlardan azdır."],
  dogru: 1,
  hatalar: ["Pazar günkü tırmanış katılımı 4'tür; cumartesi 9, cuma 8'dir. En çok katılım cumartesi günündedir.",null,"Toplamları hesaplamadan karar verme: kano 8 + 8 + 6 = 22, tırmanış 8 + 9 + 4 = 21; en çok katılım kanodadır.","Cumartesi 7, cuma 5 kişi yüzmeye katılmıştır; cumartesi daha çoktur."],
  aciklama: `Adım 1: Bilinmeyen kutuları günün toplamından çıkararak bul. Cuma: 21 − 8 − 5 = 8 tırmanış. Cumartesi: 24 − 9 − 7 = 8 kano. Pazar: 17 − 6 − 4 = 7 yüzme.
Adım 2: Etkinlik toplamlarını yaz. Kano: 8 + 8 + 6 = 22. Tırmanış: 8 + 9 + 4 = 21. Yüzme: 5 + 7 + 7 = 19.
Adım 3: En az katılım 19 ile yüzmededir. Tırmanışın en çok günü cumartesidir (9). Cumartesi yüzme 7, cuma yüzme 5'tir.
Sağlama: Kontrol toplamı: 22 + 21 + 19 = 62 ve 21 + 24 + 17 = 62; hesaplar tutuyor.
Sık yapılan hata: Bilinmeyen kutuyu hesaplamadan, yalnızca görünen sayılara bakarak karar vermek.
Cevap B.`
},
{
  id: "tur-sm-352",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Hakan, İpek, Ela, Gül ve Fırat proje ödevlerini öğretmene birer kez, farklı sıralarda teslim edecektir. Sıra 1'den 5'e kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Teslim düzeniyle ilgili bilinenler:
• Fırat, Ela'dan önce ödevini teslim edecektir.
• Fırat ile Gül art arda ödevini teslim etmeyecektir.
• İpek, 1. sırada ödevini teslim etmeyecektir.
• Fırat, 2. ya da 3. sırada ödevini teslim edecektir.
**Buna göre ödevler kaç farklı sırayla teslim edilebilir?**`,
  gorsel: null,
  secenekler: ["4","5","9","14"],
  dogru: 2,
  hatalar: ["\"Fırat, 2. ya da 3. sırada ödevini teslim edecektir\" kuralında yalnızca 2. sırayı sayma: Fırat 2. sıradayken 4 sıra bulunur, 3. sıradayken 5 sıra daha vardır; toplam 9'dur.","\"Fırat, 2. ya da 3. sırada ödevini teslim edecektir\" kuralında yalnızca 3. sırayı sayma: Fırat 3. sıradayken 5 sıra bulunur, 2. sıradayken 4 sıra daha vardır; toplam 9'dur.",null,"\"İpek, 1. sırada ödevini teslim etmeyecektir\" kuralını uygulamadan sayma: o kural olmadan 14 sıra bulunur, kural varken ise 9 sıra kalır."],
  aciklama: `Adım 1: Kuralları birlikte uygula; her kural olası sıraların bir kısmını eler.
Adım 2: Bütün kurallara uyan sıraları düzenli yaz (önce 1. sıraya gelebilecekleri tek tek dene):
1) Hakan – Fırat – Ela – Gül – İpek
2) Hakan – Fırat – Ela – İpek – Gül
3) Hakan – Fırat – İpek – Ela – Gül
4) Gül – Hakan – Fırat – Ela – İpek
5) Gül – İpek – Fırat – Ela – Hakan
6) Hakan – İpek – Fırat – Ela – Gül
7) Hakan – Fırat – İpek – Gül – Ela
8) Gül – Hakan – Fırat – İpek – Ela
9) Gül – İpek – Fırat – Hakan – Ela
Adım 3: Fırat 2. sırada olan 4 sıra (1, 2, 3, 7), Fırat 3. sırada olan 5 sıra (4, 5, 6, 8, 9) vardır: 4 + 5 = 9.
Sağlama: Yazdığın her sıra kuralların hepsini sağlıyor ve aynı sıra iki kez yazılmadı.
Cevap C.`
},
{
  id: "tur-sm-353",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gösterisinin gişesinde Oya, Murat, Kadir, Nuray ve Lamia birer kez, tek sıra hâlinde bilet alacaktır. Sıra 1'den 5'e kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Sıralamayla ilgili bilinenler:
• Lamia, 2. ya da 5. sırada bilet alacaktır.
• Kadir ile Murat art arda bilet almayacaktır.
• Lamia ile Nuray arasında tam bir kişi bilet alacaktır.
• Kadir, Oya'dan önce bilet alacaktır.
**Buna göre aşağıdakilerden hangisi bilinirse sıralama kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: ["1. sırada Kadir ya da Oya bilet alacaktır.","3. sırada Murat ya da Oya bilet alacaktır.","5. sırada Kadir ya da Murat bilet alacaktır.","5. sırada Kadir ya da Oya bilet alacaktır."],
  dogru: 2,
  hatalar: ["Bu bilgi sırayı tek duruma indirmez: hâlâ 3 sıra kalır (örneğin Kadir – Lamia – Murat – Nuray – Oya ve Kadir – Lamia – Oya – Nuray – Murat).","Bu bilgi sırayı tek duruma indirmez: hâlâ 2 sıra kalır (örneğin Kadir – Lamia – Murat – Nuray – Oya ve Kadir – Lamia – Oya – Nuray – Murat).",null,"Bu bilgi sırayı tek duruma indirmez: hâlâ 2 sıra kalır (örneğin Kadir – Lamia – Murat – Nuray – Oya ve Murat – Lamia – Kadir – Nuray – Oya)."],
  aciklama: `Ek bilgi, geçerli sıraları tek bire indirmelidir.
Adım 1: 4 kuralı birlikte uygula; her kural geçerli sıralardan bir kısmını eler.
Adım 2: Bütün kurallara uyan 4 sıra vardır:
1) Kadir – Lamia – Murat – Nuray – Oya
2) Kadir – Lamia – Oya – Nuray – Murat
3) Kadir – Oya – Nuray – Murat – Lamia
4) Murat – Lamia – Kadir – Nuray – Oya
Adım 3: Şıkları bu sıralarla sına:
- "5. sırada Kadir ya da Murat bilet alacaktır." → 1 sıra kalır.
- "1. sırada Kadir ya da Oya bilet alacaktır." → 3 sıra kalır.
- "3. sırada Murat ya da Oya bilet alacaktır." → 2 sıra kalır.
- "5. sırada Kadir ya da Oya bilet alacaktır." → 2 sıra kalır.
Sık yapılan hata: Sıra sayısını yalnızca azaltan bilgiyi yeterli saymak. Kesinleşme için tek sıra kalmalıdır.
Cevap C.`
},
{
  id: "tur-sm-354",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okul kantininde öğrenciler bir ana yemek, bir içecek ve bir tatlıdan oluşan tepsi hazırlar. Ürünlerin fiyatları (TL) Tablo 1'de, dört öğrencinin tepsisi Tablo 2'de verilmiştir. Tepsi kuralları şunlardır:
• Tepsinin toplam fiyatı en fazla 55 TL olmalıdır.
• Sütlaç ile ayran aynı tepside bulunamaz.
• Köfte ile limonata aynı tepside bulunamaz.
**Buna göre hangi öğrencinin tepsisi kurallara uygundur?**`,
  gorsel: `<table class="tablo"><tr><th>Tablo 1</th><th>Ürün (fiyat)</th></tr><tr><td>Ana yemek</td><td>Tavuk (30), Makarna (20), Köfte (32)</td></tr><tr><td>İçecek</td><td>Ayran (5), Meyve suyu (10), Limonata (12)</td></tr><tr><td>Tatlı</td><td>Sütlaç (15), Kek (10)</td></tr></table><br><table class="tablo"><tr><th>Tablo 2: Öğrenci</th><th>Ana yemek</th><th>İçecek</th><th>Tatlı</th></tr><tr><td>Ada</td><td>Tavuk</td><td>Meyve suyu</td><td>Sütlaç</td></tr><tr><td>Bora</td><td>Köfte</td><td>Ayran</td><td>Sütlaç</td></tr><tr><td>Cem</td><td>Köfte</td><td>Limonata</td><td>Kek</td></tr><tr><td>Deniz</td><td>Tavuk</td><td>Limonata</td><td>Sütlaç</td></tr></table>`,
  secenekler: ["Bora","Cem","Deniz","Ada"],
  dogru: 3,
  hatalar: ["İkili yasağı atlama: Bora'nın tepsisinde sütlaç ve ayran birlikte var (toplam 52 TL olsa da bu yasak bozulur).","Yalnızca fiyata bakma: Cem'in tepsisi 54 TL ile sınırı aşmaz, ama köfte ile limonata birlikte olamaz.","Toplamı yanlış hesaplama: Deniz'in tepsisi 30 + 12 + 15 = 57 TL'dir ve 55 TL sınırını aşar.",null],
  aciklama: `Adım 1: Her tepsinin önce toplam fiyatını, sonra iki yasaklı ikiliyi kontrol et.
Adım 2: Ada: 30 + 10 + 15 = 55 TL (sınır içerir). Sütlaç var ama ayran yok; köfte yok. Uygun.
Adım 3: Bora: 32 + 5 + 15 = 52 TL, ama sütlaç ile ayran birlikte → uygun değil.
Adım 4: Cem: 32 + 12 + 10 = 54 TL, ama köfte ile limonata birlikte → uygun değil.
Adım 5: Deniz: 30 + 12 + 15 = 57 TL > 55 TL → uygun değil.
Sağlama: Dört tepsiden yalnızca Ada'nınki üç kuralın üçüne de uyuyor.
Sık yapılan hata: "En fazla 55" sınırında 55'in kabul edildiğini unutmak ya da yalnızca fiyata bakıp yasaklı ikilileri denemeden bırakmak.
Cevap D.`
},
{
  id: "tur-sm-355",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gazetesinin yazı kurulundaki Meral, Nuri, Orhan ve Pelin'in bu haftaki toplantıya katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Meral katılırsa Nuri katılmaz.
• Nuri katılmazsa Orhan katılır.
• Orhan katılırsa Pelin katılmaz.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Meral ile Orhan'dan en az biri katılmaz.","Nuri ile Orhan'dan en az biri katılmaz.","Nuri ile Pelin'den en az biri katılmaz.","Meral ile Pelin'den en az biri katılmaz."],
  dogru: 3,
  hatalar: ["Olası olanı kesin sanma: yalnızca Meral ile Orhan'ın katıldığı durum bütün kurallara uyar; bu durumda ikisi de katılmıştır ve şık bozulur.","Olası olanı kesin sanma: yalnızca Nuri ile Orhan'ın katıldığı durum bütün kurallara uyar; bu durumda ikisi de katılmıştır ve şık bozulur.","Olası olanı kesin sanma: yalnızca Nuri ile Pelin'in katıldığı durum bütün kurallara uyar; bu durumda ikisi de katılmıştır ve şık bozulur.",null],
  aciklama: `"Kesinlikle doğru", kurallara uyan bütün durumlarda doğru olan ifadedir. Önce koşulları zincirle.
Adım 1: Meral katılırsa Nuri katılmaz. Nuri katılmazsa Orhan katılır. Orhan katılırsa Pelin katılmaz. Zincir şöyle ilerler: Meral katılırsa Pelin katılmaz.
Adım 2: Yani Meral ile Pelin birlikte katılamaz; ikisinden en az biri her durumda katılmaz.
Adım 3: Kurallara uyan bütün durumlar: yalnızca Nuri; yalnızca Orhan; Meral ile Orhan; Nuri ile Orhan; Nuri ile Pelin. Diğer şıklar bu durumların birinde bozulur: ilki Meral ile Orhan'ın, ikincisi Nuri ile Orhan'ın, üçüncüsü Nuri ile Pelin'in birlikte katıldığı durumda.
Sık yapılan hata: Koşullu cümleyi tersine çevirip ("Pelin katılırsa Orhan katılmaz" gibi) kuralda olmayan bir sonuç çıkarmak.
Cevap D.`
},
{
  id: "tur-sm-356",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul tiyatrosunun kostüm provasına Feray, Arda, Dila, Can, Eren ve Bade birer kez, tek sıra hâlinde girecektir. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Prova düzeniyle ilgili bilinenler:
• Dila ile Eren art arda provaya girecektir.
• Bade, Dila'dan önce provaya girecektir.
• Feray, Bade'den önce provaya girecektir.
• Eren ile Feray arasında tam iki kişi provaya girecektir.
• Can ile Feray arasında tam bir kişi provaya girecektir.
• Arda, Can'ın hemen ardından provaya girecektir.
**Buna göre 2. sırada kim provaya girecektir?**`,
  gorsel: null,
  secenekler: ["Dila","Arda","Bade","Can"],
  dogru: 1,
  hatalar: ["Dila bu sıraya konursa (yerine geçen kişi de yer değiştirir) şu kural bozulur: \"Dila ile Eren art arda provaya girecektir\".",null,"Bade bu sıraya konursa (yerine geçen kişi de yer değiştirir) şu kural bozulur: \"Feray, Bade'den önce provaya girecektir\".","Can bu sıraya konursa (yerine geçen kişi de yer değiştirir) şu kural bozulur: \"Can ile Feray arasında tam bir kişi provaya girecektir\"."],
  aciklama: `Adım 1: Kuralları sırayla uygula. 6 kuralın hepsi birlikte düşünülünce yalnızca tek bir sıra kalır.
Adım 2: Kuralları tek tek yerleştirerek (önce yeri en çok kısıtlayan kuralı kullanarak) şu sıraya ulaşılır: Can – Arda – Feray – Bade – Dila – Eren.
Adım 3: 2. sırada Arda bulunur.
Sağlama: Bulunan sıra 6 kuralın hepsini sağlıyor; başka bir yerleşim en az bir kuralı bozuyor.
Cevap B.`
},
{
  id: "tur-sm-357",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bilim kulübünün kamp gezisine Barış, Duru, Efe, Sinan ve Tolga'nın katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Efe katılırsa Duru katılır.
• Barış katılırsa Tolga katılır.
• Efe katılmazsa Sinan katılır.
• Sinan katılırsa Duru katılmaz.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Tolga katılırsa Barış katılır.","Sinan katılırsa Tolga katılır.","Duru katılırsa Efe katılır.","Efe katılırsa Barış katılır."],
  dogru: 2,
  hatalar: ["Koşullu cümleyi tersine çevirme: \"Barış katılırsa Tolga katılır\" kuralı var, ama Duru, Efe ve Tolga'nın katıldığı durumda Tolga katılır, Barış katılmaz.","Olası olanı kesin sanma: Sinan'ın Tolga ile katıldığı durum geçerlidir, ama Sinan'ın tek başına katıldığı durumda Tolga katılmaz.",null,"Olası olanı kesin sanma: Efe'nin katıldığı bazı durumlarda Barış katılmaz; örneğin yalnızca Duru ile Efe katılırsa kurallar sağlanır, Barış katılmaz."],
  aciklama: `"Kesinlikle doğru", kurallara uyan bütün durumlarda doğru olan ifadedir. Önce koşullu cümleleri ters çevirmeyi hatırla: "A ise B" doğruysa "B değilse A değil" de doğrudur.
Adım 1: "Sinan katılırsa Duru katılmaz" kuralından: Duru katılırsa Sinan katılmaz.
Adım 2: "Efe katılmazsa Sinan katılır" kuralından: Sinan katılmazsa Efe katılır.
Adım 3: İki sonuç birleşir: Duru katılırsa Sinan katılmaz, Sinan katılmazsa Efe katılır; yani Duru katılırsa Efe katılır. Bu her durumda doğrudur.
Adım 4: Kurallara uyan bütün durumlar: Duru ile Efe; yalnızca Sinan; Duru, Efe ve Tolga; Barış, Duru, Efe ve Tolga; Sinan ile Tolga; Barış, Sinan ve Tolga. Diğer şıklar bu durumların birinde bozulur: ilki Duru, Efe ve Tolga'nın; ikincisi yalnızca Sinan'ın; üçüncüsü Duru ile Efe'nin katıldığı durumda.
Sık yapılan hata: Koşullu cümleyi tersine çevirip ("Tolga katılırsa Barış katılır" gibi) kuralda olmayan bir sonuç çıkarmak.
Cevap C.`
},
{
  id: "tur-sm-358",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilgisayar oyununda oyuncular, seviyelerine ve görev sayılarına göre ödül sandıkları açabilir. Sandık kuralları ve beş oyuncunun durumu aşağıda verilmiştir.
• Seviyesi en az 10 olan oyuncu altın sandığı açabilir.
• Seviyesi 10'dan düşük olan oyuncu, en az 3 görev tamamlamışsa gümüş sandığı açabilir.
• Altın sandığı açabilen oyuncu gümüş sandığı da açabilir.
• Son 24 saatte 2 ya da daha fazla uyarı alan oyuncu hiçbir sandığı açamaz.
**Buna göre kaç oyuncu hem altın hem gümüş sandığı açabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Oyuncu</th><th>Seviye</th><th>Tamamlanan görev</th><th>Son 24 saatteki uyarı</th></tr><tr><td>Ada</td><td>12</td><td>4</td><td>1</td></tr><tr><td>Bora</td><td>9</td><td>5</td><td>0</td></tr><tr><td>Cem</td><td>14</td><td>2</td><td>2</td></tr><tr><td>Dila</td><td>10</td><td>0</td><td>1</td></tr><tr><td>Emre</td><td>8</td><td>2</td><td>0</td></tr></table>`,
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: ["Sınır değeri dışarıda bırakma: seviyesi tam 10 olan Dila da altın sandığı açar; \"en az 10\" ifadesi 10'u içerir.",null,"\"Altın\" ile \"altın ve gümüş\"ü karıştırma: Bora gümüş sandığı açabilir ama altın sandığı açamaz; ikisini birlikte açanları saymalısın.","Uyarı kuralını atlama: Cem'in seviyesi yüksektir ama son 24 saatte 2 uyarı aldığı için hiçbir sandığı açamaz."],
  aciklama: `Adım 1: Önce uyarı kuralına bak: 2 ya da daha fazla uyarı alan oyuncu hiçbir sandığı açamaz. Cem (2 uyarı) elenir.
Adım 2: Kalan oyunculara altın sandık kuralını uygula: Ada (seviye 12) ve Dila (seviye 10) altın sandığı açar. Bora (9) ve Emre (8) açamaz.
Adım 3: Altın sandığı açan oyuncu gümüş sandığı da açar; Ada ve Dila ikisini birden açar.
Adım 4: Bora seviyesi 10'dan düşük ve 5 görev yapmış: yalnızca gümüş sandığı açar. Emre'nin seviyesi 8 ama 2 görev yapmış: hiçbirini açamaz.
Sağlama: İkisini birden açanlar Ada ve Dila → 2 oyuncu.
Sık yapılan hata: Sınır değerli seviyeyi (10) dışarıda bırakmak ya da istisna kuralını (uyarı) en sona bırakıp unutmak.
Cevap B.`
},
{
  id: "tur-sm-359",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul spor odasında Gökhan, Hande, Aslı, Fırat, Ceren ve Deniz birer kez, tek sıra hâlinde malzeme ödünç alacaktır. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Ödünç alma düzeniyle ilgili bilinenler:
• Gökhan, Ceren'den önce malzeme ödünç alacaktır.
• Fırat ile Gökhan art arda malzeme ödünç alacaktır.
• Aslı, Fırat'tan önce malzeme ödünç alacaktır.
• Deniz ile Fırat art arda malzeme ödünç almayacaktır.
• Gökhan, 2. ya da 5. sırada malzeme ödünç alacaktır.
**Buna göre öğrenciler kaç farklı sırayla malzeme ödünç alabilir?**`,
  gorsel: null,
  secenekler: ["8","12","32","42"],
  dogru: 0,
  hatalar: [null,"\"Deniz ile Fırat art arda malzeme ödünç almayacaktır\" kuralını uygulamadan sayma: o kural olmadan 12 sıra bulunur, kural varken ise 8 sıra kalır.","\"Gökhan, 2. ya da 5. sırada malzeme ödünç alacaktır\" kuralını uygulamadan sayma: o kural olmadan 32 sıra bulunur, kural varken ise 8 sıra kalır.","\"Aslı, Fırat'tan önce malzeme ödünç alacaktır\" kuralını uygulamadan sayma: o kural olmadan 42 sıra bulunur, kural varken ise 8 sıra kalır."],
  aciklama: `Adım 1: Kuralları birlikte uygula; her kural olası sıraların bir kısmını eler.
Adım 2: Bütün kurallara uyan sıraları düzenli yaz (önce 1. sıraya gelebilecekleri tek tek dene):
1) Aslı – Gökhan – Fırat – Ceren – Deniz – Hande
2) Aslı – Gökhan – Fırat – Ceren – Hande – Deniz
3) Aslı – Gökhan – Fırat – Hande – Ceren – Deniz
4) Aslı – Deniz – Hande – Fırat – Gökhan – Ceren
5) Aslı – Gökhan – Fırat – Hande – Deniz – Ceren
6) Deniz – Aslı – Hande – Fırat – Gökhan – Ceren
7) Deniz – Hande – Aslı – Fırat – Gökhan – Ceren
8) Hande – Deniz – Aslı – Fırat – Gökhan – Ceren
Adım 3: Saydığın sıra sayısı 8'dir.
Sağlama: Yazdığın her sıra kuralların hepsini sağlıyor ve aynı sıra iki kez yazılmadı.
Cevap A.`
},
{
  id: "tur-sm-360",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Rehberlik servisinde Sinan, Mina, Tuğba, Orhan, Rüya ve Pınar birer kez, tek sıra hâlinde görüşmeye girecektir. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Görüşme düzeniyle ilgili bilinenler:
• Rüya, Mina'nın hemen ardından görüşmeye girecektir.
• Pınar ile Tuğba art arda görüşmeye girmeyecektir.
• Sinan, Orhan'dan önce görüşmeye girecektir.
• Sinan ile Tuğba art arda görüşmeye girmeyecektir.
• Pınar, Sinan'ın hemen ardından görüşmeye girecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Orhan 6. sıradaysa 3. sırada Mina ya da Tuğba bulunur.","Sinan 1. sıradaysa 5. sırada Mina ya da Rüya bulunur.","Rüya 4. sıradaysa 6. sırada Orhan ya da Tuğba bulunur.","Pınar 2. sıradaysa Tuğba 6. sıradadır."],
  dogru: 2,
  hatalar: ["Birinci bilgiyle de birden çok sıra kalır: Sinan – Pınar – Mina – Rüya – Tuğba – Orhan sırasında ikinci cümle doğrudur, Tuğba – Mina – Rüya – Sinan – Pınar – Orhan sırasında bozulur; bu yüzden kesin değildir.","Birinci bilgiyle de birden çok sıra kalır: Sinan – Pınar – Orhan – Mina – Rüya – Tuğba sırasında ikinci cümle doğrudur, Sinan – Pınar – Mina – Rüya – Orhan – Tuğba sırasında bozulur; bu yüzden kesin değildir.",null,"Birinci bilgiyle de birden çok sıra kalır: Sinan – Pınar – Mina – Rüya – Orhan – Tuğba sırasında ikinci cümle doğrudur, Sinan – Pınar – Mina – Rüya – Tuğba – Orhan sırasında bozulur; bu yüzden kesin değildir."],
  aciklama: `Koşullu cümle, koşul sağlandığında kalan bütün sıralarda doğru olmalıdır.
Adım 1: 5 kuralı birlikte uygula; her kural geçerli sıralardan bir kısmını eler.
Adım 2: Bütün kurallara uyan 6 sıra vardır:
1) Mina – Rüya – Sinan – Pınar – Orhan – Tuğba
2) Tuğba – Mina – Rüya – Sinan – Pınar – Orhan
3) Sinan – Pınar – Mina – Rüya – Orhan – Tuğba
4) Sinan – Pınar – Mina – Rüya – Tuğba – Orhan
5) Sinan – Pınar – Orhan – Mina – Rüya – Tuğba
6) Sinan – Pınar – Orhan – Tuğba – Mina – Rüya
Adım 3: Şıkları bu sıralarla sına:
- "Rüya 4. sıradaysa 6. sırada Orhan ya da Tuğba bulunur." → birinci bilgiyle 2 sıra kalır; ikinci cümle bunların 2 tanesinde doğrudur.
- "Orhan 6. sıradaysa 3. sırada Mina ya da Tuğba bulunur." → birinci bilgiyle 2 sıra kalır; ikinci cümle bunların 1 tanesinde doğrudur.
- "Sinan 1. sıradaysa 5. sırada Mina ya da Rüya bulunur." → birinci bilgiyle 4 sıra kalır; ikinci cümle bunların 2 tanesinde doğrudur.
- "Pınar 2. sıradaysa Tuğba 6. sıradadır." → birinci bilgiyle 4 sıra kalır; ikinci cümle bunların 2 tanesinde doğrudur.
Sık yapılan hata: Koşulu sağlayan tek bir sıraya bakıp cümleyi onaylamak. Koşuldan sonra kalan bütün sıralara bakmak gerekir.
Cevap C.`
},
{
  id: "tur-sm-361",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul balosuna Ayşe, Burak, Cem, Dilek ve Ertan'ın katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Ayşe katılırsa Burak katılmaz.
• Burak katılmazsa Cem katılır.
• Dilek katılırsa Cem katılmaz.
• Ertan katılırsa Ayşe katılır.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Ayşe katılır, Cem katılmaz.","Burak katılır, Cem katılmaz.","Cem katılır, Ertan katılmaz.","Dilek katılır, Ayşe katılmaz."],
  dogru: 0,
  hatalar: [null,"Olası olanı olamaz sanma: yalnızca Burak'ın katıldığı durum bütün kurallara uyar; orada Burak katılır, Cem katılmaz.","Olası olanı olamaz sanma: yalnızca Cem'in katıldığı durum bütün kurallara uyar; orada Cem katılır, Ertan katılmaz.","Olası olanı olamaz sanma: yalnızca Burak ile Dilek'in katıldığı durum bütün kurallara uyar; orada Dilek katılır, Ayşe katılmaz."],
  aciklama: `"Olamaz", hiçbir geçerli durumda gerçekleşmeyen durumdur. Önce kuralları zincirle.
Adım 1: Ayşe katılırsa Burak katılmaz. Burak katılmazsa Cem katılır. Demek ki Ayşe katılırsa Cem de katılır.
Adım 2: Kurallara uyan bütün durumlar: yalnızca Burak; yalnızca Cem; Ayşe ile Cem; Burak ile Cem; Burak ile Dilek; Ayşe, Cem ve Ertan.
Adım 3: "Ayşe katılır, Cem katılmaz" bu durumların hiçbirinde yoktur. Diğer şıklar için birer durum var: Burak katılır, Cem katılmaz (yalnızca Burak); Cem katılır, Ertan katılmaz (yalnızca Cem); Dilek katılır, Ayşe katılmaz (Burak ile Dilek).
Sık yapılan hata: İlk denediğin durumda gerçekleşmeyen şıkkı hemen "olamaz" saymak. Şıkkı sağlayan bir durum kurmayı ayrıca dene.
Cevap A.`
},
{
  id: "tur-sm-362",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun voleybol şenliğinde Kırmızı, Mavi, Yeşil ve Sarı takımlar tek salonda birer maç yapacaktır. Maçlar 09.00, 10.00, 11.00 ve 12.00'de başlayacak ve her saatte yalnızca bir takım oynayacaktır. Çizelgede takımların oynayamayacağı saatler ✗ ile gösterilmiştir; boş kutular hakkında bilgi verilmemiştir. Ayrıca şu kurallar vardır:
• Mavi takım, Yeşil takımdan önce oynayacaktır.
• Kırmızı ve Sarı takımlar art arda oynamayacaktır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>09.00</th><th>10.00</th><th>11.00</th><th>12.00</th></tr><tr><th>Kırmızı</th><td>✗</td><td></td><td></td><td></td></tr><tr><th>Mavi</th><td></td><td></td><td></td><td></td></tr><tr><th>Yeşil</th><td></td><td></td><td></td><td>✗</td></tr><tr><th>Sarı</th><td></td><td></td><td>✗</td><td>✗</td></tr></table>`,
  secenekler: ["Mavi takım 09.00'da oynar.","Yeşil takım 11.00'de oynar.","Sarı takım 10.00'da oynar.","Mavi takım, Sarı takımdan önce oynar."],
  dogru: 1,
  hatalar: ["Olası olanı kesin sanma: Mavi 09.00'da oynayabilir, ama Sarı'nın 09.00'da, Mavi'nin 10.00'da oynadığı düzen de kurallara uyar.",null,"Olası olanı kesin sanma: Sarı 10.00'da oynayabilir, ama 09.00'da oynadığı düzen de geçerlidir.","Olası olanı kesin sanma: Mavi, Sarı'dan önce oynayabilir; Sarı 09.00'da, Mavi 10.00'da oynayınca bu şık bozulur."],
  aciklama: `Çizelgedeki ✗ işaretleri ve iki kuralı birlikte kullan.
Adım 1: Sarı 11.00 ve 12.00'de oynayamaz; yalnızca 09.00 ya da 10.00'da oynar. Kırmızı 09.00'da, Yeşil 12.00'de oynayamaz.
Adım 2: 12.00'de kim oynayabilir? Sarı ve Yeşil olamaz; Mavi ya da Kırmızı kalır. Mavi, Yeşil'den önce oynadığı için en son saatte oynayamaz. Demek ki Kırmızı 12.00'de oynar.
Adım 3: 11.00'de Mavi ya da Yeşil oynayabilir (Sarı olamaz). Mavi 11.00'de olsaydı Yeşil'e 12.00 kalırdı, ama Yeşil 12.00'de oynayamaz. Demek ki Yeşil 11.00'de oynar.
Adım 4: Mavi ile Sarı 09.00 ve 10.00 saatlerini iki biçimde paylaşabilir. Sarı 09.00 ya da 10.00'da, Kırmızı 12.00'de olduğundan "Kırmızı ve Sarı art arda değil" kuralı da sağlanır.
Sağlama: Geçerli düzenler Mavi-Sarı-Yeşil-Kırmızı ve Sarı-Mavi-Yeşil-Kırmızı'dır; ikisinde de Yeşil 11.00'dedir. Diğer şıklar yalnızca birinde doğrudur.
Sık yapılan hata: Mavi ile Sarı'nın yer değiştirebildiğini görmeyip tek düzene bakmak.
Cevap B.`
},
{
  id: "tur-sm-363",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul şiir dinletisine Naz, Oğuz, Pınar, Rıza ve Sude'nin katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Oğuz katılırsa Pınar katılmaz.
• Rıza katılmazsa Naz katılır.
• Naz katılırsa Sude katılır.
• Sude katılırsa Rıza katılmaz.
**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: ["Sude katılmazsa Rıza katılır.","Naz katılırsa Rıza katılmaz.","Sude katılırsa Naz katılır.","Pınar katılırsa Rıza katılır."],
  dogru: 3,
  hatalar: ["Kesin olanı bilinemez sanma: Sude katılmazsa Naz da katılmaz (Naz katılırsa Sude katılır); Rıza da katılmazsa Naz katılması gerekirdi. Demek ki Rıza katılır.","Kesin olanı bilinemez sanma: Naz katılırsa Sude katılır, Sude katılırsa Rıza katılmaz; zincir her durumda Rıza'nın katılmamasını getirir.","Kesin olanı bilinemez sanma: Sude katılırsa Rıza katılmaz, Rıza katılmazsa Naz katılır; Sude'nin katıldığı her durumda Naz da katılır.",null],
  aciklama: `"Kesin olarak bilinemez", bazı geçerli durumlarda doğru, bazılarında yanlış olan ifadedir. Koşullu cümleleri çevirmeyi hatırla: "A ise B" doğruysa "B değilse A değil" de doğrudur.
Adım 1: Naz katılırsa Sude katılır; Sude katılırsa Rıza katılmaz. Demek ki Naz katılırsa Rıza katılmaz. Sude katılmazsa Naz da katılmaz; Naz katılmazsa Rıza katılır.
Adım 2: Kurallara uyan bütün durumlar: yalnızca Rıza; Oğuz ile Rıza; Pınar ile Rıza; Naz ile Sude; Naz, Oğuz ve Sude; Naz, Pınar ve Sude.
Adım 3: İlk üç şık bu durumların hepsinde doğrudur. "Pınar katılırsa Rıza katılır" ise Pınar ile Rıza'nın katıldığı durumda doğru, Naz, Pınar ve Sude'nin katıldığı durumda yanlıştır; kesin olarak bilinemez.
Sık yapılan hata: Kesin doğru olan bir koşullu cümleyi "bilinemez" saymak. Bilinemeyen, bazı durumlarda bozulandır.
Cevap D.`
},
{
  id: "tur-sm-364",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Ece, Fırat, Gizem, Hakan ve İlkay; resim, müzik, satranç, yüzme ve tiyatro kurslarından birer tanesine yazılmıştır. Her kurs haftada yalnızca bir gün, pazartesiden cumaya kadar farklı günlerde yapılır ve her öğrenci farklı bir kursa gider. Kurslarla ilgili bilinenler:
• Resim kursu, müzik kursundan bir gün önce yapılır.
• Satranç kursu pazartesi, yüzme kursu cuma günü yapılır.
• Fırat tiyatro kursuna, Gizem müzik kursuna, İlkay yüzme kursuna gider.
• Ece, pazartesi günü kursa gitmez.
• Fırat, perşembe günü kursa gitmez.
**Buna göre Ece'nin gittiği kurs ve kursun yapıldığı gün aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Resim – çarşamba","Müzik – perşembe","Satranç – pazartesi","Tiyatro – salı"],
  dogru: 0,
  hatalar: [null,"Müzik kursu Gizem'indir (bilinen kural); perşembe günkü müzik kursuna Gizem gider, Ece değil.","Ece pazartesi günü kursa gitmez; satranç kursu pazartesi yapıldığı için Ece satranca gidemez.","Tiyatro kursu Fırat'ındır; salı günkü tiyatro kursuna Fırat gider, Ece değil."],
  aciklama: `Bu soruda iki bilgiyi birlikte çöz: kişi-kurs ve kurs-gün.
Adım 1: Fırat tiyatroya, Gizem müziğe, İlkay yüzmeye gider. Geriye resim ve satranç kalır; bunlar Ece ile Hakan'ındır.
Adım 2: Satranç pazartesi yapılır ve Ece pazartesi kursa gitmez. Demek ki satranç Hakan'ın, resim Ece'nindir.
Adım 3: Günlere bak: satranç pazartesi, yüzme cuma. Resim, müzik, tiyatro salı, çarşamba, perşembe günlerine yerleşir ve resim müzikten bir gün öncedir: ya resim salı-müzik çarşamba-tiyatro perşembe ya da resim çarşamba-müzik perşembe-tiyatro salı.
Adım 4: Fırat (tiyatro) perşembe kursa gitmediğinden ikinci düzen geçerlidir: tiyatro salı, resim çarşamba, müzik perşembe.
Sağlama: Ece resim (çarşamba), Hakan satranç (pazartesi), Fırat tiyatro (salı), Gizem müzik (perşembe), İlkay yüzme (cuma). Bütün bilgiler sağlanıyor.
Sık yapılan hata: Kişi-kurs ve kurs-gün tablolarını ayrı ayrı çözüp birleştirmemek.
Cevap A.`
},
{
  id: "tur-sm-365",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yaz kampının kayıt kuralları ve altı çocuğun bilgileri aşağıda verilmiştir. Çocukların yaşı, kampın yapıldığı 2026 yılından doğum yılı çıkarılarak bulunur.
• Kampa yaşı 10 ile 14 arasında (10 ve 14 dâhil) olan çocuklar katılabilir.
• Veli izni olmayan çocuk kampa katılamaz; ancak 13 yaş ve üzeri çocuklar için veli izni aranmaz.
• Kampın ikinci haftasına yalnızca 12 yaş ve üzeri çocuklar katılabilir.
• Göl etkinliğine yalnızca yüzme bilenler ya da yüzme kursunu bitirenler katılabilir.
**Buna göre kampın ikinci haftasında göl etkinliğine kaç çocuk katılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Çocuk</th><th>Doğum yılı</th><th>Veli izni</th><th>Yüzme durumu</th></tr><tr><td>Ela</td><td>2012</td><td>Yok</td><td>Biliyor</td></tr><tr><td>Fırat</td><td>2011</td><td>Var</td><td>Biliyor</td></tr><tr><td>Gül</td><td>2014</td><td>Yok</td><td>Biliyor</td></tr><tr><td>Hakan</td><td>2013</td><td>Yok</td><td>Kursu bitirdi</td></tr><tr><td>İrem</td><td>2016</td><td>Var</td><td>Biliyor</td></tr><tr><td>Kaan</td><td>2014</td><td>Var</td><td>Kursa devam ediyor</td></tr></table>`,
  secenekler: ["0","1","2","3"],
  dogru: 2,
  hatalar: ["Veli izni istisnasını atlama: izni olmayanları eleyince Ela ile Hakan da elenir ve 0 bulunur; oysa 13 yaş ve üzeri çocuklar için izin aranmaz.","\"10 ile 14 arasında (14 dâhil)\" ifadesinde 14'ü dışarıda bırakıp Ela'yı elemek (ya da kursu bitirmeyi saymayıp Hakan'ı elemek) 1 sonucuna götürür.",null,"İzin istisnasını her yaşa yayma: 12 yaşındaki Gül'ü de sayarsan 3 bulursun; oysa izin aranmaması yalnızca 13 yaş ve üzeri içindir."],
  aciklama: `Adım 1: Önce yaşları bul: yaş = 2026 − doğum yılı. Ela 14, Fırat 15, Gül 12, Hakan 13, İrem 10, Kaan 12.
Adım 2: Fırat 15 yaşında: "10 ile 14 arası"nın dışında, kampa katılamaz. İrem 10 yaşında: kampa katılır ama ikinci hafta için 12 yaş şartını sağlamaz.
Adım 3: Gül 12 yaşında, izni yok ve 13 yaşın altında olduğu için izin gerekir → kampa katılamaz.
Adım 4: Kalanlar Ela, Hakan ve Kaan. Ela ile Hakan 13 yaş ve üzeri olduğu için izin aranmaz; Kaan'ın izni var. Üçü de ikinci haftaya katılabilir.
Adım 5: Göl etkinliği: Ela yüzme biliyor, Hakan kursu bitirmiş → katılabilirler. Kaan kursa hâlâ devam ediyor, yani bitirmemiş → katılamaz.
Sonuç: Ela ve Hakan göl etkinliğine katılabilir → 2 çocuk.
Sık yapılan hata: "14 dâhil" sınırını dışarıda bırakmak, izin istisnasını her yaşa yaymak ya da "kursa devam ediyor"u "kursu bitirdi" saymak.
Cevap C.`
},
{
  id: "tur-sm-366",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun doğa gezisine Ayla, Berk, Can, Dilan ve Ekin'in katılıp katılmayacağı konusunda şunlar bilinmektedir. (Her öğrenci ya katılır ya katılmaz.)
• Ayla katılırsa Berk katılmaz.
• Berk katılmazsa Can katılır.
• Can katılırsa Dilan da katılır.
• Dilan katılırsa Ekin katılmaz.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Berk ile Can birlikte katılır.","Berk ile Ekin'den en az biri katılmaz.","Dilan ile Berk birlikte katılır.","Ayla ile Ekin'den en az biri katılmaz."],
  dogru: 3,
  hatalar: ["Olası olanı kesin sanma: Berk ile Can birlikte katılabilir, ama yalnızca Berk'in katıldığı durumlar da vardır.","Olası olanı kesin sanma: Berk ve Ekin'in ikisinin de katıldığı, diğerlerinin katılmadığı durum bütün kurallara uyar.","Olası olanı kesin sanma: Dilan ve Berk birlikte katılabilir, ama Dilan'ın katılmadığı durumlarda bu şık bozulur.",null],
  aciklama: `Koşullu cümleleri bir zincir gibi bağla.
Adım 1: Ayla katılırsa Berk katılmaz. Berk katılmazsa Can katılır. Can katılırsa Dilan katılır. Dilan katılırsa Ekin katılmaz.
Adım 2: Zinciri baştan sona izle: Ayla katılırsa Ekin katılmaz. Yani Ayla ile Ekin'den en az biri katılmaz; bu her durumda doğrudur.
Adım 3: Diğer şıklar için ayrı durumlar kur. Yalnızca Berk katılırsa (Ayla, Can, Dilan, Ekin katılmaz) kurallar sağlanır; bu durumda "Berk ile Can birlikte katılır" ve "Dilan ile Berk birlikte katılır" yanlış olur. Berk ile Ekin'in ikisinin katıldığı durumda "Berk ile Ekin'den en az biri katılmaz" yanlış olur.
Sağlama: İlk şık bütün durumlarda doğru; diğer üçü en az bir durumda yanlış.
Sık yapılan hata: Zincirin yalnızca ilk iki halkasına bakıp sonucu kesin sanmak ya da koşullu cümleyi tersine çevirmek.
Cevap D.`
},
{
  id: "tur-sm-367",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Matematik dersinde Vedat, Rana, Nehir, Selim, Onur ve Tülay birer kez, tek sıra hâlinde tahtaya kalkacaktır. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Kalkış düzeniyle ilgili bilinenler:
• Vedat, ilk ya da son sırada tahtaya kalkacaktır.
• Nehir, Tülay'dan önce tahtaya kalkacaktır.
• Tülay, Onur'dan önce tahtaya kalkacaktır.
• Nehir, ilk ya da son sırada tahtaya kalkmayacaktır.
• Selim, Rana'dan önce tahtaya kalkacaktır.
**Buna göre altı öğrenci kaç farklı sırayla tahtaya kalkabilir?**`,
  gorsel: null,
  secenekler: ["4","10","14","28"],
  dogru: 2,
  hatalar: ["\"Vedat, ilk ya da son sırada tahtaya kalkacaktır\" kuralında yalnızca son sırayı sayma: Vedat son sıradayken 4 sıra bulunur, ilk sıradayken 10 sıra daha vardır; toplam 14'tür.","\"Vedat, ilk ya da son sırada tahtaya kalkacaktır\" kuralında yalnızca ilk sırayı sayma: Vedat ilk sıradayken 10 sıra bulunur, son sıradayken 4 sıra daha vardır; toplam 14'tür.",null,"\"Selim, Rana'dan önce tahtaya kalkacaktır\" kuralını uygulamadan sayma: o kural olmadan 28 sıra bulunur, kural varken ise 14 sıra kalır."],
  aciklama: `Adım 1: Kuralları birlikte uygula; her kural olası sıraların bir kısmını eler.
Adım 2: Bütün kurallara uyan sıraları düzenli yaz (önce 1. sıraya gelebilecekleri tek tek dene):
1) Selim – Nehir – Tülay – Onur – Rana – Vedat
2) Vedat – Nehir – Tülay – Onur – Selim – Rana
3) Selim – Nehir – Rana – Tülay – Onur – Vedat
4) Selim – Nehir – Tülay – Rana – Onur – Vedat
5) Vedat – Nehir – Selim – Tülay – Onur – Rana
6) Vedat – Nehir – Tülay – Selim – Onur – Rana
7) Vedat – Nehir – Selim – Rana – Tülay – Onur
8) Vedat – Nehir – Selim – Tülay – Rana – Onur
9) Vedat – Nehir – Tülay – Selim – Rana – Onur
10) Selim – Rana – Nehir – Tülay – Onur – Vedat
11) Vedat – Selim – Nehir – Tülay – Onur – Rana
12) Vedat – Selim – Nehir – Rana – Tülay – Onur
13) Vedat – Selim – Nehir – Tülay – Rana – Onur
14) Vedat – Selim – Rana – Nehir – Tülay – Onur
Adım 3: Vedat ilk sırada olan 10 sıra (2, 5, 6, 7, 8, 9, 11, 12, 13, 14), son sırada olan 4 sıra (1, 3, 4, 10) vardır: 10 + 4 = 14.
Sağlama: Yazdığın her sıra kuralların hepsini sağlıyor ve aynı sıra iki kez yazılmadı.
Cevap C.`
},
{
  id: "tur-sm-368",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul müdürünün odasının camı kırılmıştır. Camı Ada, Bora, Ceren ve Deniz'den yalnızca biri kırmıştır. Dört öğrenci şunları söylemiştir:
• Ada: "Camı Bora kırdı."
• Bora: "Camı Ada kırdı."
• Ceren: "Camı Ada kırmadı."
• Deniz: "Camı Bora ya da Ceren kırdı."
• Bu söylenenlerden tam olarak ikisi doğrudur.
**Buna göre camı kim kırmıştır?**`,
  gorsel: null,
  secenekler: ["Ada","Bora","Ceren","Deniz"],
  dogru: 2,
  hatalar: ["Camı Ada kırmış olsaydı yalnızca Bora'nın sözü doğru olurdu; \"tam olarak iki söz doğru\" şartı sağlanmazdı.","Camı Bora kırmış olsaydı Ada, Ceren ve Deniz'in sözleri doğru olurdu; üç doğru söz çıkardı.",null,"Camı Deniz kırmış olsaydı yalnızca Ceren'in sözü doğru olurdu; iki doğru söz çıkmazdı."],
  aciklama: `Her adayı "camı bu kırdı" diye varsay ve doğru söyleyenleri say.
Adım 1: Ada kırdıysa: Ada'nın sözü yanlış, Bora'nın sözü doğru, Ceren'in sözü yanlış, Deniz'in sözü yanlış → 1 doğru.
Adım 2: Bora kırdıysa: Ada doğru, Bora yanlış, Ceren doğru, Deniz doğru → 3 doğru.
Adım 3: Ceren kırdıysa: Ada yanlış, Bora yanlış, Ceren doğru ("Ada kırmadı"), Deniz doğru ("Bora ya da Ceren") → 2 doğru.
Adım 4: Deniz kırdıysa: yalnızca Ceren doğru → 1 doğru.
Sağlama: "Tam olarak iki doğru" yalnızca Ceren varsayımında sağlanıyor.
Sık yapılan hata: "Tam olarak iki" şartını "en az iki" diye okuyup üç doğru çıkan varsayımı da kabul etmek.
Cevap C.`
},
{
  id: "tur-sm-369",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Dört öğrencinin katıldığı bir bilgi yarışmasında dört tur yapılmıştır. Her turdaki sıralamalar tabloda, puanlama kuralları aşağıda verilmiştir:
• Her turda 1. olana 5, 2. olana 3, 3. olana 1 puan verilir; 4. olan puan alamaz.
• Üst üste iki turda 1. olan öğrencinin toplam puanına 2 bonus puan eklenir (bonus bir kez verilir).
• Toplam puanlar eşitse birincilik sayısı fazla olan öğrenci üstün sayılır.
**Buna göre genel sıralamada birinci olan öğrenci kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>1. tur</th><th>2. tur</th><th>3. tur</th><th>4. tur</th></tr><tr><td>Ada</td><td>1.</td><td>1.</td><td>3.</td><td>3.</td></tr><tr><td>Berk</td><td>2.</td><td>2.</td><td>1.</td><td>2.</td></tr><tr><td>Ceyda</td><td>3.</td><td>3.</td><td>2.</td><td>1.</td></tr><tr><td>Deniz</td><td>4.</td><td>4.</td><td>4.</td><td>4.</td></tr></table>`,
  secenekler: ["Berk","Ada","Ceyda","Deniz"],
  dogru: 1,
  hatalar: ["Bonus kuralını unutma: bonussuz hesapla Berk 14, Ada 12 puandır. Ada'nın 1. ve 2. turdaki birinciliği 2 bonus getirir ve puanlar 14-14 eşitlenir.",null,"Son turun galibini genel birinci sanma: Ceyda son turu kazanmıştır ama toplamı yalnızca 10 puandır.","Sıra numarasını puan sanma: dört turda da 4. olmak 4 + 4 + 4 + 4 = 16 \"puan\" ediyormuş gibi düşünülür; oysa 4. olan puan alamaz."],
  aciklama: `Adım 1: Her turun puanlarını kurala göre hesapla (1.→5, 2.→3, 3.→1, 4.→0).
Adım 2: Ada: 5 + 5 + 1 + 1 = 12. Birinci olduğu 1. ve 2. turlar üst üste olduğu için +2 bonus → 14.
Adım 3: Berk: 3 + 3 + 5 + 3 = 14. Birinciliği yalnızca 3. turdadır, bonus yok → 14.
Adım 4: Ceyda: 1 + 1 + 3 + 5 = 10. Deniz: hep 4. olduğu için 0.
Adım 5: Ada ile Berk 14'te eşit. Eşitlik kuralına göre birincilik sayısı fazla olan üstündür: Ada'nın iki, Berk'in bir birinciliği var → Ada birinci.
Sağlama: Sıralama Ada 14, Berk 14 (birincilik sayısı az), Ceyda 10, Deniz 0.
Sık yapılan hata: Bonus ya da eşitlik kuralını uygulamayı unutmak; sıra numarasını puan gibi toplamak.
Cevap B.`
},
{
  id: "tur-sm-370",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul bisiklet turunun bitiş çizgisini Umay, Yağmur, Zeki, Asya, Berkay ve Ceylin farklı sıralarda geçecektir; aynı anda geçen olmayacaktır. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Bitiş düzeniyle ilgili bilinenler:
• Yağmur ile Berkay arasında tam bir kişi bitiş çizgisini geçecektir.
• Umay, 3. sırada bitiş çizgisini geçmeyecektir.
• Berkay, 1. ya da 4. sırada bitiş çizgisini geçecektir.
• Umay, Yağmur'dan önce bitiş çizgisini geçecektir.
• Zeki, Ceylin'in hemen ardından bitiş çizgisini geçecektir.
**Buna göre aşağıdakilerden hangisi bilinirse sıralama kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: ["4. sırada Umay ya da Berkay bitiş çizgisini geçecektir.","1. sırada Umay ya da Berkay bitiş çizgisini geçecektir.","6. sırada Zeki ya da Berkay bitiş çizgisini geçecektir.","6. sırada Asya ya da Ceylin bitiş çizgisini geçecektir."],
  dogru: 3,
  hatalar: ["Bu bilgi sırayı tek duruma indirmez: hâlâ 4 sıra kalır (örneğin Umay – Yağmur – Asya – Berkay – Ceylin – Zeki ve Umay – Ceylin – Zeki – Berkay – Asya – Yağmur).","Bu bilgi sırayı tek duruma indirmez: hâlâ 4 sıra kalır (örneğin Umay – Yağmur – Asya – Berkay – Ceylin – Zeki ve Umay – Ceylin – Zeki – Berkay – Asya – Yağmur).","Bu bilgi sırayı tek duruma indirmez: hâlâ 2 sıra kalır (örneğin Umay – Yağmur – Asya – Berkay – Ceylin – Zeki ve Berkay – Umay – Yağmur – Asya – Ceylin – Zeki).",null],
  aciklama: `Ek bilgi, geçerli sıraları tek bire indirmelidir.
Adım 1: 5 kuralı birlikte uygula; her kural geçerli sıralardan bir kısmını eler.
Adım 2: Bütün kurallara uyan 6 sıra vardır:
1) Umay – Yağmur – Asya – Berkay – Ceylin – Zeki
2) Umay – Ceylin – Zeki – Berkay – Asya – Yağmur
3) Berkay – Umay – Yağmur – Ceylin – Zeki – Asya
4) Berkay – Umay – Yağmur – Asya – Ceylin – Zeki
5) Ceylin – Zeki – Asya – Berkay – Umay – Yağmur
6) Asya – Ceylin – Zeki – Berkay – Umay – Yağmur
Adım 3: Şıkları bu sıralarla sına:
- "6. sırada Asya ya da Ceylin bitiş çizgisini geçecektir." → 1 sıra kalır.
- "4. sırada Umay ya da Berkay bitiş çizgisini geçecektir." → 4 sıra kalır.
- "1. sırada Umay ya da Berkay bitiş çizgisini geçecektir." → 4 sıra kalır.
- "6. sırada Zeki ya da Berkay bitiş çizgisini geçecektir." → 2 sıra kalır.
Sık yapılan hata: Sıra sayısını yalnızca azaltan bilgiyi yeterli saymak. Kesinleşme için tek sıra kalmalıdır.
Cevap D.`
},
{
  id: "tur-sm-371",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul koro seçmelerinde Selin, Taner, Umut, Volkan ve Yusuf'un seçilip seçilmeyeceği konusunda şunlar bilinmektedir. (Her öğrenci ya seçilir ya seçilmez.)
• Selin seçilirse Taner seçilir.
• Taner seçilirse Umut seçilmez.
• Umut seçilmezse Yusuf seçilir.
• Volkan seçilirse Selin seçilir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Selin seçilirse Umut seçilmez.","Taner seçilirse Selin seçilir.","Yusuf seçilirse Taner seçilir.","Umut seçilmezse Selin seçilir."],
  dogru: 0,
  hatalar: [null,"Koşullu cümleyi tersine çevirme: \"Selin seçilirse Taner seçilir\" kuralı var, ama Taner ile Yusuf'un seçildiği durumda Taner seçilir, Selin seçilmez.","Olası olanı kesin sanma: Yusuf'un tek başına seçildiği durum bütün kurallara uyar; orada Yusuf seçilir, Taner seçilmez.","Olası olanı kesin sanma: Yusuf'un tek başına seçildiği durum bütün kurallara uyar; orada Umut seçilmez, Selin de seçilmez."],
  aciklama: `"Kesinlikle doğru", kurallara uyan bütün durumlarda doğru olan ifadedir. Koşullu cümleleri zincirleyerek başla.
Adım 1: "Selin seçilirse Taner seçilir" ve "Taner seçilirse Umut seçilmez" kuralları birleşir: Selin seçilirse Umut seçilmez. Bu her durumda doğrudur.
Adım 2: Kurallara uyan bütün durumlar: yalnızca Umut; yalnızca Yusuf; Taner ile Yusuf; Selin, Taner ve Yusuf; Umut ile Yusuf; Selin, Taner, Volkan ve Yusuf.
Adım 3: Diğer şıklar bu durumların birinde bozulur: "Taner seçilirse Selin seçilir" Taner ile Yusuf'un seçildiği durumda; "Yusuf seçilirse Taner seçilir" ve "Umut seçilmezse Selin seçilir" yalnızca Yusuf'un seçildiği durumda.
Sık yapılan hata: Koşullu cümleyi tersine çevirip ("Taner seçilirse Selin seçilir" gibi) kuralda olmayan bir sonuç çıkarmak.
Cevap A.`
},
{
  id: "tur-sm-372",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Okul spor salonunda dört takım hafta içi pazartesiden perşembeye antrenman yapmaktadır. Aşağıdaki çizelgede takımların antrenman yaptığı günler ✓, yapmadığı günler ✗ ile gösterilmiştir; boş kutular henüz belli değildir. Çizelgenin kuralları:
• Her takım haftada tam iki gün antrenman yapar.
• Salon her gün tam iki takıma ayrılır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th></tr><tr><th>Voleybol</th><td>✗</td><td></td><td></td><td></td></tr><tr><th>Basketbol</th><td>✗</td><td></td><td></td><td>✓</td></tr><tr><th>Hentbol</th><td></td><td></td><td>✓</td><td></td></tr><tr><th>Futbol</th><td></td><td></td><td></td><td>✗</td></tr></table>`,
  secenekler: ["Voleybol takımı salı günü antrenman yapar.","Hentbol takımı pazartesi günü antrenman yapar.","Basketbol takımı çarşamba günü antrenman yapar.","Futbol takımı salı günü antrenman yapar."],
  dogru: 1,
  hatalar: ["Olası olanı kesin sanma: Voleybol salı günü antrenman yapabilir, ama çarşamba yaptığı düzen de çizelgeye uyar.",null,"Olası olanı kesin sanma: Basketbol çarşamba antrenman yapabilir, ama salı yaptığı düzenler de vardır.","Olası olanı kesin sanma: Futbol salı antrenman yapabilir, ama çarşamba yaptığı düzen de geçerlidir."],
  aciklama: `Çizelgeyi satır ve sütun toplamlarıyla doldur: her satırda ve her sütunda tam iki ✓ olmalı.
Adım 1: Pazartesi sütununda Voleybol ve Basketbol ✗. İki ✓ yerleşecek takım Hentbol ile Futbol'dur; ikisi de pazartesi antrenman yapar.
Adım 2: Hentbol'un çarşamba ✓ ve pazartesi ✓ olmak üzere iki günü doldu; salı ve perşembe ✗. Perşembe sütununda Basketbol ✓, Futbol ✗, Hentbol ✗ olduğundan ikinci ✓ Voleybol'dur.
Adım 3: Kalan kutular (Voleybol-Basketbol-Futbol'un salı ve çarşamba günleri) birkaç biçimde doldurulabilir; üç farklı çizelge kurulur.
Adım 4: Bu üç çizelgede yalnızca Hentbol-pazartesi (ve Futbol-pazartesi, Voleybol-perşembe) hep ✓'dir. Diğer şıklar bazılarında ✗ olur.
Sık yapılan hata: Boş kutuyu "belli değil" diye bırakıp satır-sütun toplamlarıyla kesinleşen kutuları yakalayamamak.
Cevap B.`
},
{
  id: "tur-sm-373",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul tiyatro oyununun kadrosuna Fatih, Gamze, Hakan, İlayda ve Jale'nin seçilip seçilmeyeceği konusunda şunlar bilinmektedir. (Her öğrenci ya seçilir ya seçilmez.)
• Fatih ile Gamze'den en az biri seçilir.
• Gamze seçilirse Hakan seçilmez.
• Hakan seçilmezse İlayda seçilir.
• Jale seçilirse Fatih seçilmez.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Fatih de Gamze de seçilir.","Gamze de İlayda da seçilir.","Hakan da Jale de seçilir.","Hakan da İlayda da seçilir."],
  dogru: 2,
  hatalar: ["Olası olanı olamaz sanma: Fatih, Gamze ve İlayda'nın seçildiği, Hakan ile Jale'nin seçilmediği durum bütün kurallara uyar.","Olası olanı olamaz sanma: yalnızca Gamze ile İlayda'nın seçildiği durum bütün kurallara uyar.",null,"Olası olanı olamaz sanma: Fatih, Hakan ve İlayda'nın seçildiği, Gamze ile Jale'nin seçilmediği durum bütün kurallara uyar."],
  aciklama: `"Olamaz", hiçbir geçerli durumda gerçekleşmeyen durumdur. Önce kuralları zincirle.
Adım 1: Jale seçilirse Fatih seçilmez. Fatih seçilmezse Gamze seçilmek zorundadır (ikisinden en az biri seçilir). Gamze seçilirse Hakan seçilmez. Demek ki Jale seçilirse Hakan seçilmez.
Adım 2: Kurallara uyan bütün durumlar: Fatih ile Hakan; Fatih ile İlayda; Gamze ile İlayda; Fatih, Gamze ve İlayda; Fatih, Hakan ve İlayda; Gamze, İlayda ve Jale.
Adım 3: "Hakan da Jale de seçilir" bu durumların hiçbirinde yoktur. Diğer üç şık en az bir durumda gerçekleşir.
Sık yapılan hata: İlk denediğin durumda gerçekleşmeyen şıkkı hemen "olamaz" saymak. Şıkkı sağlayan bir durum kurmayı ayrıca dene.
Cevap C.`
},
{
  id: "tur-sm-374",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Hafıza oyununa Ufuk, Pars, Yaren, Sarp, Reyhan ve Tuba birer kez, tek sıra hâlinde katılacaktır. Sıra 1'den 6'ya kadar numaralandırılmıştır. "Art arda" ifadesi, aralarında başka kimse olmadan peş peşe anlamına gelir. Katılım düzeniyle ilgili bilinenler:
• Sarp ile Tuba art arda oyuna katılacaktır.
• Pars ile Sarp arasında tam bir kişi oyuna katılacaktır.
• Tuba, 5. sırada oyuna katılmayacaktır.
• Ufuk, 3. ya da 4. sırada oyuna katılacaktır.
• Reyhan, 2. sırada oyuna katılmayacaktır.
**Buna göre altı arkadaş kaç farklı sırayla oyuna katılabilir?**`,
  gorsel: null,
  secenekler: ["9","10","28","56"],
  dogru: 0,
  hatalar: [null,"\"Reyhan, 2. sırada oyuna katılmayacaktır\" kuralını uygulamadan sayma: o kural olmadan 10 sıra bulunur, kural varken ise 9 sıra kalır.","\"Sarp ile Tuba art arda oyuna katılacaktır\" kuralını uygulamadan sayma: o kural olmadan 28 sıra bulunur, kural varken ise 9 sıra kalır.","\"Ufuk, 3. ya da 4. sırada oyuna katılacaktır\" kuralını uygulamadan sayma: o kural olmadan 56 sıra bulunur, kural varken ise 9 sıra kalır."],
  aciklama: `Adım 1: Kuralları birlikte uygula; her kural olası sıraların bir kısmını eler.
Adım 2: Bütün kurallara uyan sıraları düzenli yaz (önce 1. sıraya gelebilecekleri tek tek dene):
1) Pars – Tuba – Sarp – Ufuk – Reyhan – Yaren
2) Pars – Tuba – Sarp – Ufuk – Yaren – Reyhan
3) Reyhan – Yaren – Pars – Ufuk – Sarp – Tuba
4) Sarp – Tuba – Pars – Ufuk – Reyhan – Yaren
5) Sarp – Tuba – Pars – Ufuk – Yaren – Reyhan
6) Tuba – Sarp – Ufuk – Pars – Reyhan – Yaren
7) Tuba – Sarp – Ufuk – Pars – Yaren – Reyhan
8) Reyhan – Tuba – Sarp – Ufuk – Pars – Yaren
9) Yaren – Tuba – Sarp – Ufuk – Pars – Reyhan
Adım 3: Saydığın sıra sayısı 9'dir.
Sağlama: Yazdığın her sıra kuralların hepsini sağlıyor ve aynı sıra iki kez yazılmadı.
Cevap A.`
},
{
  id: "tur-sm-375",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bilgi yarışmasında Kırmızı, Mavi, Yeşil ve Sarı takımlar üç tur yarışmıştır. Her turda 0, 1, 2 ve 3 puanın her biri farklı bir takıma verilmiştir. Çizelgede bilinmeyen puanlar "?" ile gösterilmiş, takımların üç turdaki toplam puanları son sütunda verilmiştir.
**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: `<table class="tablo"><tr><th>Takım</th><th>1. tur</th><th>2. tur</th><th>3. tur</th><th>Toplam</th></tr><tr><td>Kırmızı</td><td>2</td><td>?</td><td>1</td><td>5</td></tr><tr><td>Mavi</td><td>?</td><td>3</td><td>?</td><td>6</td></tr><tr><td>Yeşil</td><td>?</td><td>0</td><td>3</td><td>3</td></tr><tr><td>Sarı</td><td>?</td><td>1</td><td>?</td><td>4</td></tr></table>`,
  secenekler: ["Mavi takım 1. turda 3 puan almıştır.","Kırmızı takım 2. turda 2 puan almıştır.","Yeşil takım 1. turda 1 puan almıştır.","Mavi ve Sarı takımlar 1. turda toplam 4 puan almıştır."],
  dogru: 0,
  hatalar: [null,"Kesin olanı bilinemez sanma: 2. turda 3, 0 ve 1 puan Mavi, Yeşil ve Sarı'ya verilmiştir; kalan 2 puan Kırmızı'nındır. Kırmızı'nın toplamı 2 + 2 + 1 = 5 ile de uyuşur.","Kesin yanlış olanı bilinemez sanma: Yeşil'in toplamı 3 olduğuna göre 1. turdaki puanı 3 − 0 − 3 = 0'dır; \"1 puan\" ifadesi kesin olarak yanlıştır ve yanlış olduğu bellidir.","Kesin olanı bilinemez sanma: 1. turda 2 puan Kırmızı'da, 0 puan Yeşil'dedir; Mavi ile Sarı'ya 1 ve 3 kalır. Toplamları her durumda 4'tür."],
  aciklama: `"Kesin olarak bilinemez", bazı durumlarda doğru, bazılarında yanlış olan ifadedir. Çizelgeyi iki kuralla doldur: her turda 0, 1, 2, 3 birer kez kullanılır ve satır toplamları verilen toplamlara eşittir.
Adım 1: 2. turda 3, 0 ve 1 puan Mavi, Yeşil ve Sarı'ya verilmiş; kalan 2 puan Kırmızı'nındır (2 + 2 + 1 = 5 ile uyuşur).
Adım 2: Yeşil'in toplamı 3: 3. turda 3, 2. turda 0 aldığına göre 1. turda 0 almıştır.
Adım 3: 1. turda 2 (Kırmızı) ve 0 (Yeşil) kullanıldı; Mavi ile Sarı'ya 1 ve 3 kalır. 3. turda 1 (Kırmızı) ve 3 (Yeşil) kullanıldı; Mavi ile Sarı'ya 0 ve 2 kalır.
Adım 4: İki durum çizelgeye uyar. Durum 1: Mavi 1. turda 1, 3. turda 2 alır (1 + 3 + 2 = 6), Sarı 3 ve 0 alır (3 + 1 + 0 = 4). Durum 2: Mavi 1. turda 3, 3. turda 0 alır (3 + 3 + 0 = 6), Sarı 1 ve 2 alır (1 + 1 + 2 = 4).
Adım 5: Mavi'nin 1. turdaki puanı Durum 1'de 1, Durum 2'de 3'tür; kesin olarak bilinemez. Diğer üç şık iki durumda da aynı sonucu verir.
Sık yapılan hata: Her "?" kutusunun belirlenemeyeceğini sanmak. Toplamlar ve "her turda 0, 1, 2, 3 bir kez" kuralı birçok kutuyu kesinleştirir.
Cevap A.`
}
);
