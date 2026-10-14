// İngilizce — Unit 8: Chores · Kademe 3 (LGS Ayarı) ve Havuz
// Bağlam aileleri: buzdolabı notu, yapılacaklar listesi, kamp ve sınıf kuralları, grup mesajı, günlük, ev işi çizelgesi, anket, e-posta
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["ing-8-chores"] = window.LGS_BANK["ing-8-chores"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "ing-u8-301",
  kazanim: "E8.8.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Mert is asking Deniz about family dinners. Her answers to a school survey are in the table.

Mert: Is there anything you don't like about family dinners?
Deniz: - - - -
Mert: I see. Thanks for telling me.

**Which one completes the dialogue best?**`,
  gorsel: `<table class="tablo"><tr><th>Family dinners</th><th>Deniz</th></tr><tr><td>I like it when ...</td><td>my grandfather tells stories at the table</td></tr><tr><td>I don't like it when ...</td><td>the TV is on during dinner</td></tr></table>`,
  secenekler: [
    `I like it when the TV is on and my grandfather tells stories.`,
    `I don't like it when my grandfather tells stories at the table.`,
    `I don't like it when the TV is on during dinner.`,
    `I like it when my grandfather turns the TV on during dinner.`
  ],
  dogru: 2,
  hatalar: [
    `Sevme ve sevmeme ifadesini karıştırma: Mert "hoşlanmadığın bir şey var mı?" diye soruyor; "I like it when..." ile cevap vermek soruya uymaz.`,
    `Yanlış durumu seçme: tabloya göre Deniz büyükbabasının hikâye anlatmasını seviyor; hoşlanmadığı şey yemekte açık olan televizyon.`,
    null,
    `Soruya ters cevap verme: "I like it when..." sevilen durumu anlatır. Mert hoşlanmadığı şeyi soruyor; ayrıca tabloda Deniz'in televizyon konusunda hoşlanmadığı yazıyor.`
  ],
  aciklama: `"I like it when ..." sevdiğin durumu, "I don't like it when ..." hoşlanmadığın durumu anlatır. Önce soruyu, sonra tablodaki bilgiyi kontrol et.
Adım 1: Mert "Is there anything you don't like...?" (Hoşlanmadığın bir şey var mı?) diye soruyor. Cevap "I don't like it when ..." ile başlamalı. A ve D elenir.
Adım 2: Tabloda "I don't like it when ..." satırı: the TV is on during dinner (yemek sırasında televizyon açıkken). Büyükbabasının hikâye anlatması ise "I like it when ..." satırında. B bu yüzden elenir.
Adım 3: Geriye C kalır; hem soruya hem tabloya uyuyor.
Sık yapılan hata: Sevilen ve sevilmeyen satırı birbirine karıştırmak. Tablodaki iki satırın başlığını işaretle.
Cevap C.`
},
{
  id: "ing-u8-302",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the note on the fridge.

Kids, I'm at work until eight tonight. Aylin, please take out the garbage before six. Kerem, you have to load the dishwasher after dinner. Don't forget Max, the dog! Feeding him is Aylin's job this week. Mom

**Which one is true according to the note?**`,
  gorsel: null,
  secenekler: [
    `Kerem has to load the dishwasher after dinner.`,
    `Aylin must load the dishwasher after dinner.`,
    `Mom will take out the garbage before six.`,
    `Kerem is in charge of feeding Max this week.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Kişileri karıştırma: bulaşık makinesini doldurma işi Kerem'e verilmiş; Aylin'in işleri çöpü çıkarmak ve köpeği beslemek.`,
    `Not'u yazanı iş yapan sanma: çöpü çıkarması istenen kişi Aylin; anne akşam sekize kadar işte.`,
    `Hafta bilgisini yanlış kişiye bağlama: "Feeding him is Aylin's job this week" cümlesi köpeği beslemenin Aylin'in işi olduğunu söyler.`
  ],
  aciklama: `Not okuma sorularında her cümleyi, kimin hangi işten sorumlu olduğunu bulmak için isimlerle eşleştirirsin. "Have to" bir zorunluluğu, "job" bir sorumluluğu anlatır.
Adım 1: Aylin: çöpü çıkarmak (take out the garbage) ve köpeği beslemek (feeding Max).
Adım 2: Kerem: akşam yemeğinden sonra bulaşık makinesini doldurmak (load the dishwasher).
Adım 3: Anne işte, yani iş yapmaları istenen çocuklar. A, nottaki bilgiyle birebir uyuşur. B, C ve D'de iş ya da kişi yanlış verilmiş.
Sık yapılan hata: Notta iki çocuğun adını görüp işleri birbirine karıştırmak.
Cevap A.`
},
{
  id: "ing-u8-303",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `This is Selin's to-do list for Saturday.

**It is 5.00 p.m. now. Which chore is Selin late for?**`,
  gorsel: `<table class="tablo"><tr><th>Chore</th><th>Time</th><th>Done?</th></tr><tr><td>Make the bed</td><td>7.30 a.m.</td><td>Yes</td></tr><tr><td>Return the books</td><td>4.00 p.m.</td><td>No</td></tr><tr><td>Do the laundry</td><td>6.00 p.m.</td><td>No</td></tr><tr><td>Iron the shirt</td><td>8.00 p.m.</td><td>No</td></tr></table>`,
  secenekler: [
    `Making her bed`,
    `Ironing the shirt`,
    `Doing the laundry`,
    `Returning the books`
  ],
  dogru: 3,
  hatalar: [
    `Yapılmış işi geç kalınan iş sanma: yatağını 7.30'da toplamış ("Done? Yes").`,
    `Saati kontrol etmeme: ütü saati 8.00 p.m.; saat 5.00 olduğundan zamanı henüz gelmemiş.`,
    `Yapılmamış olmayı geç kalmak sanma: çamaşır 6.00 p.m.'de yapılacak; saat 5.00 olduğundan henüz geç kalınmadı.`,
    null
  ],
  aciklama: `"Late for" (…için geç kalmış) demek, işin saati geçtiği hâlde iş yapılmamış demektir. Bunun için hem saate hem de "Done?" sütununa bakarsın.
Adım 1: Şu an saat 17.00 (5.00 p.m.). Saati 17.00'den önce olan işler: yatağı toplamak (7.30 a.m.) ve kitapları iade etmek (4.00 p.m.).
Adım 2: Yatak toplanmış ("Yes"), kitaplar ise iade edilmemiş ("No").
Adım 3: Çamaşır (6.00 p.m.) ve ütü (8.00 p.m.) saatleri henüz gelmediği için bunlarda geç kalma yok.
Sık yapılan hata: Yalnızca "No" yazan satırlara bakıp saati unutmak. Üç işin yanında "No" yazıyor ama yalnızca birinin saati geçmiş.
Cevap D.`
},
{
  id: "ing-u8-304",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `At the Aksoy house, every person has a task. Mr. Aksoy says this to a neighbour.

"Kerem is in charge of the garbage, and my wife is in charge of the laundry."

**Which sentence means the same?**`,
  gorsel: null,
  secenekler: [
    `Kerem is responsible for the laundry, and Mrs. Aksoy is responsible for the garbage.`,
    `Kerem is responsible for the garbage, and Mrs. Aksoy is responsible for the laundry.`,
    `Kerem is responsible for the garbage, and Mrs. Aksoy likes doing the laundry.`,
    `Kerem and Mrs. Aksoy are responsible for both the garbage and the laundry.`
  ],
  dogru: 1,
  hatalar: [
    `İşleri ters eşleme: çöpten Kerem, çamaşırdan Bayan Aksoy sorumlu; bu cümlede iki iş de yanlış kişiye verilmiş.`,
    null,
    `Sorumluluğu sevgiyle karıştırma: "in charge of" bir işin sorumlusu olmaktır; Bayan Aksoy'un çamaşırı sevdiği söylenmiyor.`,
    `Ortak sorumluluk yükleme: Aksoy ailesinde her kişinin ayrı bir görevi var; iki iş de iki kişiye birden verilmemiş.`
  ],
  aciklama: `"Be in charge of" ve "be responsible for", ikisi de "…den sorumlu olmak" anlamına gelir. Bu kalıplar bir kişinin hangi işi üstlendiğini anlatır. Cümleyi yeniden yazarken kişi ve işi aynı eşleşmeyle korumalısın.
Adım 1: Aksoy Bey'in cümlesinde eşleşmeler: Kerem – çöp (garbage), eşi – çamaşır (laundry).
Adım 2: "In charge of" yerine "responsible for" yazılırsa anlam değişmez. Eşleşmeler aynı kalmalı: Kerem – çöp, Bayan Aksoy – çamaşır.
Adım 3: A eşleşmeleri ters çeviriyor, C ikinci kısmı "likes" ile değiştiriyor, D iki işi de iki kişiye birden veriyor. Yalnızca B aynı anlamı verir.
Sık yapılan hata: "Responsible for" kalıbını görünce kişi–iş eşleşmesini kontrol etmeden seçmek (A).
Cevap B.`
},
{
  id: "ing-u8-305",
  kazanim: "E8.8.SI2",
  kademe: 3,
  zorluk: 3,
  soru: `In Ece's house, Ece cooks dinner and her brother Can washes the dishes. Her father is asking about the chores.

Dad: Who is responsible for the dishes in our house?
Ece: - - - -
Dad: Great. Then I'll ask Can to do them tonight.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I'm responsible for washing the dishes, and Can cooks dinner.`,
    `Can is in charge of washing the dishes, and I cook dinner.`,
    `Can is in charge of cooking dinner, and I wash the dishes.`,
    `I'm in charge of cooking dinner, and Can sets the table.`
  ],
  dogru: 1,
  hatalar: [
    `Rolleri ters kurma: bulaşığı yıkayan Can, yemeği yapan Ece. Bu cümlede iki iş de yanlış kişiye verilmiş.`,
    null,
    `Rolleri ters kurma: yemek yapan kişi Ece; bu cümlede Can yemekten, Ece bulaşıktan sorumlu gösteriliyor.`,
    `Soruyu cevaplamama: Baba bulaşıktan kimin sorumlu olduğunu soruyor. Bu cevap bulaşıktan söz etmiyor, Can'ın sofra kurduğunu söylüyor.`
  ],
  aciklama: `Sorumluluk diyaloglarında önce soruyu bul, sonra verilen bilgiyi kişilerle eşle. "Responsible for" ve "in charge of" aynı anlamdadır: …den sorumlu.
Adım 1: Baba "Who is responsible for the dishes?" (Bulaşıktan kim sorumlu?) diye soruyor. Bilgiye göre Can bulaşığı yıkıyor, Ece yemek yapıyor.
Adım 2: Cevap Can'ın bulaşıktan, Ece'nin yemekten sorumlu olduğunu söylemeli. Bu yalnızca B'de var.
Adım 3: Babanın sonraki cümlesi ("I'll ask Can to do them") de Can'ın bulaşığı yapacağını gösterir.
Sık yapılan hata: Cümlelerin yapısı benzediği için kişileri tek tek eşlememek.
Cevap B.`
},
{
  id: "ing-u8-306",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the poster at a summer camp.

**Which one is a rule at the camp?**`,
  gorsel: `<table class="tablo"><tr><th>SUMMER CAMP RULES</th></tr><tr><td>Arrive on time for breakfast (8.00 a.m.).</td></tr><tr><td>Make your bed every morning.</td></tr><tr><td>Keep quiet after 10.00 p.m.</td></tr><tr><td>Don't take food to the tents.</td></tr><tr><td>Return the games after you play.</td></tr></table>`,
  secenekler: [
    `Campers have to take their snacks to the tents.`,
    `Campers have to keep quiet only before 10.00 p.m.`,
    `Campers have to eat breakfast at 10.00 a.m.`,
    `Campers have to make their beds every morning.`
  ],
  dogru: 3,
  hatalar: [
    `Yasağı kural sanma: afişte "Don't take food to the tents" yazıyor; yani yiyecek çadıra götürülmez.`,
    `Saati ters yorumlama: sessiz olma kuralı saat 10.00 p.m.'den SONRA geçerli; "before" değil "after".`,
    `Saatleri karıştırma: kahvaltıya 8.00 a.m.'de zamanında gelinmesi isteniyor; 10.00 p.m. sessizlik saatidir.`,
    null
  ],
  aciklama: `Kural afişleri "yap" ya da "yapma" biçiminde emirler içerir. "Have to" zorunluluğu anlatır. Seçeneği afişteki cümleyle tek tek karşılaştır.
Adım 1: Afişte "Make your bed every morning" (Her sabah yatağını topla) yazıyor.
Adım 2: A'da yasak olan şey zorunluluk gibi verilmiş. B'de "after" yerine "before" kullanılmış. C'de kahvaltı saati yanlış.
Adım 3: Yalnızca D afişteki kuralı doğru aktarır.
Sık yapılan hata: Afişte geçen sözcükleri (tents, 10.00) görüp cümlenin anlamını kontrol etmemek.
Cevap D.`
},
{
  id: "ing-u8-307",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read Zeynep's blog.

On Saturdays my mom works, so we share the housework. I'm in charge of the laundry. My brother Tolga is responsible for the dishes. He hates it, but he does it. Dad cooks lunch. I don't like doing the laundry, but I like it when everyone helps and the house is clean by noon.

**Which one is true?**`,
  gorsel: null,
  secenekler: [
    `Zeynep doesn't like the laundry, but she likes a clean house at noon.`,
    `Zeynep is responsible for the dishes, and she loves doing them a lot.`,
    `Zeynep's dad is in charge of the laundry because he is at home all day.`,
    `Tolga loves washing the dishes, so he does them every single day.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Kişi ve iş karıştırma: bulaşıktan sorumlu olan Tolga; Zeynep çamaşırdan sorumlu ve onu sevmediğini söylüyor.`,
    `Metinde olmayan bilgi: baba öğle yemeğini pişiriyor; çamaşır işi Zeynep'te.`,
    `Duyguyu ters çevirme: Tolga bulaşıktan "hates it" diyor, yani nefret ediyor; ayrıca "her gün" bilgisi de yok.`
  ],
  aciklama: `Blog okurken her kişinin işini ve duygusunu ayrı ayrı not et. "I don't like doing..." hoşlanmadığını, "I like it when..." hoşlandığın durumu gösterir.
Adım 1: Zeynep çamaşırdan sorumlu ve bunu sevmiyor. Tolga bulaşığı yıkıyor ve nefret ediyor. Baba öğle yemeğini pişiriyor.
Adım 2: Zeynep, evin öğlene kadar temiz olduğu ve herkesin yardım ettiği durumu seviyor.
Adım 3: Yalnızca A bu bilgilerin hepsiyle uyumlu. B'de iş, C'de kişi, D'de duygu yanlış.
Sık yapılan hata: İlk gördüğün isme bakıp işi o kişiye bağlamak.
Cevap A.`
},
{
  id: "ing-u8-308",
  kazanim: "E8.8.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Cem has only two chores: he sets the table every evening and takes out the garbage on weekends. Mina is asking him about housework.

Mina: Do you have to help your parents in housework?
Cem: - - - -
Mina: That's a lot! I only make my bed.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `No, I don't. My parents always do all the housework by themselves.`,
    `Yes, I do. I must wash the dishes every evening and iron my shirts.`,
    `Yes, I do. I must set the table every evening and take out the garbage.`,
    `No, I don't. I only set the table once a month, nothing else at all.`
  ],
  dogru: 2,
  hatalar: [
    `Olumsuz cevap verme: Mina "That's a lot!" diyor, yani Cem'in işleri çok. Oysa Cem'in iki işi var ve ev işlerine yardım ediyor; "always do all" ailenin her şeyi yaptığını söylüyor.`,
    `Başka işleri sayma: Cem'in işleri bulaşık ve ütü değil; akşam sofra kurmak ve hafta sonu çöpü çıkarmak.`,
    null,
    `Sıklığı yanlış verme: Cem sofrayı ayda bir değil, her akşam kuruyor; "No, I don't" cevabı da "That's a lot!" ile uyumsuz.`
  ],
  aciklama: `"Do you have to ...?" (…yapman gerekiyor mu?) sorusuna "Yes, I do" ya da "No, I don't" ile başlayıp işleri sayarak cevap verirsin. Cevabın hem bilgiyle hem de sonraki cümleyle uyuşması gerekir.
Adım 1: Cem'in işleri: her akşam sofra kurmak (sets the table every evening) ve hafta sonu çöpü çıkarmak (takes out the garbage on weekends).
Adım 2: Mina "That's a lot!" dediğine göre Cem çok iş yapıyor. "No, I don't" ile başlayan A ve D elenir.
Adım 3: B'deki bulaşık ve ütü Cem'in işi değil. C bilgiyi eksiksiz verir.
Sık yapılan hata: Sonraki satırı okumadan "Yes/No" seçmek.
Cevap C.`
},
{
  id: "ing-u8-309",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the story.

Berk told his mother, "I will empty the dishwasher before dinner." But he played video games and forgot. When his mother came home, the clean dishes were still in the dishwasher. She said, "Berk, you broke your promise."

**Why did Berk's mother say "you broke your promise"?**`,
  gorsel: null,
  secenekler: [
    `Because Berk dropped and broke a plate.`,
    `Because Berk didn't wash the dishes by hand.`,
    `Because Berk didn't do what he said he would do.`,
    `Because Berk emptied the dishwasher too early.`
  ],
  dogru: 2,
  hatalar: [
    `Sözcüğü kelime kelime çevirme: "break a promise" sözünü tutmamak demektir; metinde bir tabağın kırıldığı yok.`,
    `Metinde olmayan bilgi: Berk'ten bulaşığı elde yıkaması istenmemiş; bulaşık makinesini boşaltacaktı.`,
    null,
    `Ters yönde düşünme: Berk makineyi erken değil, hiç boşaltmamış; bulaşıklar hâlâ makinedeydi.`
  ],
  aciklama: `"Keep a promise" sözünü tutmak, "break a promise" sözünü tutmamak demektir. Bir ifadenin anlamını, olayın sonucuna bakarak bulursun.
Adım 1: Berk "I will empty the dishwasher before dinner" diyerek söz vermiş (bulaşık makinesini akşam yemeğinden önce boşaltacağım).
Adım 2: Ama oyun oynamış, unutmuş ve bulaşıklar makinede kalmış.
Adım 3: Söylediğini yapmadığı için annesi "sözünü tutmadın" diyor. Doğru ifade: "he didn't do what he said he would do".
Sık yapılan hata: "Broke" sözcüğüne takılıp "kırmak" anlamını seçmek (A).
Cevap C.`
},
{
  id: "ing-u8-310",
  kazanim: "E8.8.SI2",
  kademe: 3,
  zorluk: 3,
  soru: `Dinner is over, but the dirty plates are still on the table. Ali's mother is talking to him.

Mom: Dinner is over, Ali, and the dirty plates are still on the table.
Ali: - - - -
Mom: Thank you. Don't forget to put the clean ones on the shelf.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I'm sorry, Mom. I set the table an hour ago.`,
    `OK, Mom. I'll wash them now and put them away.`,
    `OK, Mom. I'll take the garbage out after dinner.`,
    `Don't worry, Mom. I made my bed this morning.`
  ],
  dogru: 1,
  hatalar: [
    `Zamanı karıştırma: masa yemekten önce kurulur; şimdi yemek bitti ve kirli tabaklar toplanacak.`,
    null,
    `Konu dışı iş seçme: anne tabaklardan söz ediyor, çöpten değil; ayrıca "temiz olanları rafa koy" sözü çöple uyuşmaz.`,
    `Konudan sapma: yatağın toplanması tabaklarla ilgili değil; anne kirli tabaklar için uyarıyor.`
  ],
  aciklama: `Diyalog tamamlamada boşluğun hem öncesine hem sonrasına bakarsın. Önceki cümle bir işin yapılmadığını söylüyor, sonraki cümle de işin sonucunu gösteriyor.
Adım 1: Anne "dirty plates are still on the table" (kirli tabaklar hâlâ masada) diyor. Ali'den beklenen, bu tabakları halletmek.
Adım 2: Annenin sonraki sözü "put the clean ones on the shelf" (temiz olanları rafa koy). Demek ki Ali tabakları yıkayacak.
Adım 3: Bunu söyleyen cümle, "I'll wash them now and put them away" cümlesi.
Sık yapılan hata: Her seçeneği ev işi içerdiği için doğru sanmak. Cümle hem soruya hem sonraki satıra uymalı.
Cevap B.`
},
{
  id: "ing-u8-311",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the ad on the school board.

**Which one is true according to the ad?**`,
  gorsel: `<table class="tablo"><tr><th>SCHOOL CLEAN-UP DAY</th></tr><tr><td>Saturday, 9.00 a.m. Meet in the garden. Please arrive on time.</td></tr><tr><td>Bring your gloves. We will tidy up the playground and paint the benches.</td></tr><tr><td>Every student who joins gets a free sandwich. We need 20 students!</td></tr></table>`,
  secenekler: [
    `Students have to pay for their sandwiches.`,
    `Students have to bring their own paint.`,
    `The school needs only ten students.`,
    `Students have to be in the garden at 9.00 a.m.`
  ],
  dogru: 3,
  hatalar: [
    `Ters bilgi: reklamda katılan her öğrencinin ücretsiz sandviç alacağı yazıyor, para ödeme yok.`,
    `Metinde olmayan bilgi: öğrenciler eldivenlerini getirecek; boya getirmeleri istenmiyor.`,
    `Sayıyı yanlış okuma: okul 20 öğrenciye ihtiyaç duyuyor, 10'a değil.`,
    null
  ],
  aciklama: `İlan okuma sorularında seçenekteki her bilgiyi ilandaki cümleyle karşılaştırırsın. "Arrive on time" zamanında gelmek demektir.
Adım 1: İlanda buluşma yeri bahçe (garden), saat 9.00 a.m. ve "Please arrive on time" (Lütfen zamanında gel) yazıyor.
Adım 2: Sandviç ücretsiz (free), getirilecek şey eldiven (gloves), gereken öğrenci sayısı 20.
Adım 3: A, B ve C ilanla çelişiyor ya da bilgi uydurmuş. D, saat ve yeri doğru söylüyor.
Sık yapılan hata: "Zamanında gel" ifadesini görüp saat bilgisine bakmamak.
Cevap D.`
},
{
  id: "ing-u8-312",
  kazanim: "E8.8.W1",
  kademe: 3,
  zorluk: 3,
  soru: `Murat is writing a paragraph about the responsibilities in his family.

(1) Everyone in our house has a responsibility. (2) My sister likes watching cartoons in the evening. (3) My father is in charge of cooking dinner. (4) My mother is responsible for the laundry. (5) I set the table and wash the dishes.

**Which sentence does __NOT__ fit the paragraph?**`,
  gorsel: null,
  secenekler: [
    `Sentence 2`,
    `Sentence 3`,
    `Sentence 4`,
    `Sentence 5`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Uygun cümleyi dışarıda bırakma: 3. cümle babanın yemek sorumluluğunu anlatır, paragrafın konusuna uyar.`,
    `Uygun cümleyi dışarıda bırakma: 4. cümle annenin çamaşır sorumluluğunu anlatır, paragrafın konusuna uyar.`,
    `Uygun cümleyi dışarıda bırakma: 5. cümle yazarın kendi ev işlerini söyler, paragrafın konusuna uyar.`
  ],
  aciklama: `Bir paragrafta her cümle ana fikre hizmet etmelidir. Önce paragrafın konusunu bul, sonra bu konuya girmeyen cümleyi işaretle.
Adım 1: 1. cümle konuyu verir: "Everyone in our house has a responsibility" (Evimizde herkesin bir sorumluluğu var).
Adım 2: 3., 4. ve 5. cümleler baba, anne ve yazarın sorumluluklarını anlatır.
Adım 3: 2. cümle ise kız kardeşin çizgi film izlemeyi sevdiğini söyler. Bu bir sorumluluk değil, paragrafın konusuyla ilgisiz.
Sık yapılan hata: Kız kardeşten söz eden cümleyi "ailedeki kişileri anlatıyor" diye uygun saymak. Cümle sorumluluk anlatmıyor.
Cevap A.`
},
{
  id: "ing-u8-313",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Thirty students were asked, "Which chore do you dislike most?" This is the result.

**Which sentence is true according to the survey?**`,
  gorsel: `<table class="tablo"><tr><th>Chore</th><th>Number of students</th></tr><tr><td>Taking out the garbage</td><td>12</td></tr><tr><td>Tidying up the room</td><td>9</td></tr><tr><td>Washing the dishes</td><td>6</td></tr><tr><td>Ironing</td><td>3</td></tr></table>`,
  secenekler: [
    `Twice as many students dislike taking out the garbage as washing the dishes.`,
    `Most of the students say that ironing is the chore they dislike most.`,
    `More students dislike tidying up the room than taking out the garbage.`,
    `The same number of students dislike ironing and washing the dishes.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Sayıyı yanlış yorumlama: ütüden en az öğrenci (3) hoşlanmıyor; bu, öğrencilerin çoğu demek değildir.`,
    `Sıralamayı ters okuma: çöpü çıkarmaktan hoşlanmayan 12, odayı toplamaktan hoşlanmayan 9 öğrenci var; çöp daha çok sevilmeyen iş.`,
    `İki satırı eşit sanma: ütü 3, bulaşık yıkamak 6 öğrencidir; sayılar farklıdır.`
  ],
  aciklama: `Anket tablosunda sayıları karşılaştırırsın. "Twice as many" iki katı demektir. "Most" ise çoğunluk, yani toplamın yarısından fazla anlamına gelir.
Adım 1: Çöp 12, oda 9, bulaşık 6, ütü 3 öğrenci. Toplam 12 + 9 + 6 + 3 = 30.
Adım 2: Çöp (12) bulaşığın (6) iki katıdır. A doğrudur.
Adım 3: Ütüyü sevmeyenler 3 kişi; 30 öğrencinin çoğu değil (B yanlış). Çöp (12) odadan (9) daha çok sevilmiyor (C yanlış). Ütü (3) ile bulaşık (6) sayıları eşit değil (D yanlış).
Sağlama: 6 × 2 = 12, tabloyla uyuşuyor.
Cevap A.`
},
{
  id: "ing-u8-314",
  kazanim: "E8.8.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Kaan's room is a mess. His father wants him to tidy it up before the cinema.

Dad: Your room is a mess, Kaan. Don't you think it is necessary to tidy up your room?
Kaan: - - - -
Dad: Good. Finish it first, and then you can go to the cinema.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `No, I don't. I like it when my room is messy.`,
    `Yes, I do. But I'll do it next weekend.`,
    `Yes, I do. I'll tidy it up now and then go out.`,
    `I don't think so. My sister is in charge of my room.`
  ],
  dogru: 2,
  hatalar: [
    `Olumsuz cevap verme: baba "Good." diyerek cevabı onaylıyor; Kaan'ın odasını toplamayı kabul etmesi gerekir.`,
    `Zamanı yanlış verme: baba "Finish it first" diyor; Kaan işi hemen yapacak, gelecek hafta sonuna bırakmayacak.`,
    null,
    `Sorumluluğu başkasına verme: Kaan odasını toplamayı reddediyor; babanın "Good" demesiyle uyuşmaz.`
  ],
  aciklama: `"Don't you think it is necessary to ...?" (…yapmanın gerekli olduğunu düşünmüyor musun?) sorusuna kabul ya da ret cevabı verilir. Babanın sonraki cümlesi cevabın yönünü gösterir.
Adım 1: Baba "Good." diyor. Yani Kaan'ın cevabı olumlu: "Yes, I do." A ve D elenir.
Adım 2: Baba "Finish it first, and then you can go to the cinema" diyor. Kaan'ın işi önce, hemen yapması gerekir.
Adım 3: B odayı gelecek hafta toplayacağını söylüyor ve babanın cümlesiyle çelişiyor. C ise "now" ile işi hemen yapacağını söylüyor.
Cevap C.`
},
{
  id: "ing-u8-315",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the messages in the football team's group chat.

**What can we understand from the messages?**`,
  gorsel: `<table class="tablo"><tr><th>Name</th><th>Message</th></tr><tr><td>Sinan</td><td>I can't come to football practice this Saturday. I must stay with my little sister while Mom works.</td></tr><tr><td>Ayşe</td><td>No problem! Do you have to do it every Saturday?</td></tr><tr><td>Sinan</td><td>No, just this one. Next Saturday Dad will be home, so I'll be at practice!</td></tr></table>`,
  secenekler: [
    `Sinan's dad is at home every Saturday.`,
    `Sinan has to stay with his sister every Saturday.`,
    `Sinan doesn't want to go to football practice.`,
    `Sinan will be able to go to practice next Saturday.`
  ],
  dogru: 3,
  hatalar: [
    `Genelleme yapma: baba yalnızca gelecek cumartesi evde olacak; her cumartesi evde olduğu söylenmiyor.`,
    `Soruya verilen cevabı ters okuma: Ayşe "Her cumartesi mi?" diye soruyor; Sinan "No, just this one" diyor, yani sadece bu cumartesi.`,
    `Neden ile istek karıştırma: Sinan gelmek istiyor ama kız kardeşinin yanında kalması gerekiyor.`,
    null
  ],
  aciklama: `Mesaj sorularında kişilerin ne söylediğini sırayla izlersin. "Must" ve "have to" zorunluluk anlatır; zorunluluk istek anlamına gelmez.
Adım 1: Sinan bu cumartesi antrenmana gelemiyor, çünkü annesi işteyken kız kardeşinin yanında kalması gerekiyor.
Adım 2: Ayşe "Do you have to do it every Saturday?" diye soruyor. Sinan "No, just this one" cevabını veriyor.
Adım 3: Gelecek cumartesi babası evde olacak ve Sinan antrenmanda olacak. Demek ki D doğru. A ve B "her cumartesi" diyerek yanlış genelleme yapıyor.
Cevap D.`
},
{
  id: "ing-u8-316",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `The Güneş family has a chore chart on the kitchen wall.

**Which one is __NOT__ true according to the chart?**`,
  gorsel: `<table class="tablo"><tr><th>Chore</th><th>In charge</th><th>Days</th></tr><tr><td>Cooking dinner</td><td>Mom</td><td>Mon, Wed, Fri</td></tr><tr><td>Cooking dinner</td><td>Dad</td><td>Tue, Thu</td></tr><tr><td>Washing the dishes</td><td>Aylin</td><td>Every day except Sunday</td></tr><tr><td>Washing the dishes</td><td>Barış</td><td>Sunday</td></tr><tr><td>Taking out the garbage</td><td>Barış</td><td>Tue, Fri</td></tr><tr><td>Ironing</td><td>Mom</td><td>Sunday</td></tr></table>`,
  secenekler: [
    `Dad is in charge of cooking dinner on two days of the week.`,
    `Barış is in charge of two chores and does both on Tuesday.`,
    `Aylin is responsible for the dishes on six days a week.`,
    `Mom is in charge of a chore on Sunday and on weekdays.`
  ],
  dogru: 1,
  hatalar: [
    `Doğru cümleyi yanlış sanma: baba salı ve perşembe, yani iki gün yemek pişiriyor; A tabloyla uyuşur.`,
    null,
    `Doğru cümleyi yanlış sanma: Aylin pazar dışındaki altı gün bulaşık yıkıyor; C tabloyla uyuşur.`,
    `Doğru cümleyi yanlış sanma: annenin pazar günü ütü işi var; hafta içi de yemek yapıyor. D tabloyla uyuşur.`
  ],
  aciklama: `"__NOT__ true" kökünde üç cümle tabloya uyar, bir cümle uymaz. Her cümleyi tabloda tek tek ara. "Every day except Sunday" pazar dışındaki her gün demektir.
Adım 1: A: Baba salı ve perşembe yemek pişiriyor, yani iki gün. Doğru.
Adım 2: C: Aylin pazar dışı her gün bulaşık yıkıyor. Haftada 7 − 1 = 6 gün. Doğru.
Adım 3: D: Anne pazartesi, çarşamba, cuma yemek yapıyor, pazar günü ütü yapıyor. Doğru.
Adım 4: B: Barış'ın iki işi var (bulaşık, çöp). Ama bulaşığı pazar günü, çöpü salı ve cuma günü yapıyor. İkisini salı günü yapmıyor. B yanlıştır.
Sık yapılan hata: Barış'ın iki işi olduğunu görüp cümlenin devamını tabloda kontrol etmemek.
Cevap B.`
},
{
  id: "ing-u8-317",
  kazanim: "E8.8.SI2",
  kademe: 3,
  zorluk: 4,
  soru: `Two friends are talking about tidying up their rooms.

Hasan: I must tidy up my room. It's so messy that I can't find my books.
Ali: I have to tidy up my room. Mom says I can't go out until it is clean.

**Which one is true?**`,
  gorsel: null,
  secenekler: [
    `Both boys are tidying up because their mothers asked them to.`,
    `Hasan's mother wants him to do it, but Ali decided it himself.`,
    `Both boys want to go out, so they are tidying up quickly.`,
    `Hasan decided it himself, but Ali's mother wants him to do it.`
  ],
  dogru: 3,
  hatalar: [
    `Genelleme yapma: Hasan'ın sebebi annesi değil; odası dağınık olduğu için kitaplarını bulamıyor.`,
    `Kişileri ters eşleme: annesinin istediği Ali, kendi kararını veren Hasan.`,
    `Metinde olmayan bilgi: Hasan dışarı çıkmaktan söz etmiyor; yalnızca Ali'nin dışarı çıkabilmesi için odayı toplaması gerekiyor.`,
    null
  ],
  aciklama: `Bir zorunluluğun nedeni içeriden (kendi ihtiyacın) ya da dışarıdan (başkasının isteği) gelebilir. Kişilerin verdiği nedene bakarak karar verirsin.
Adım 1: Hasan'ın nedeni: odası çok dağınık ve kitaplarını bulamıyor. Bu, kendi ihtiyacından doğan bir karar.
Adım 2: Ali'nin nedeni: "Mom says I can't go out until it is clean" (Annem oda temiz olmadan çıkamayacağımı söylüyor). Bu, annesinin isteği.
Adım 3: Doğru eşleme yalnızca D'de var. A, ikisini de anne isteği sayıyor. B kişileri ters eşliyor. C metinde olmayan bilgi veriyor.
Cevap D.`
},
{
  id: "ing-u8-318",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Derya's mother left a chore list for Saturday afternoon.

**Derya starts at 4.00 p.m. and does all the chores marked "Yes" without a break. What time does she finish?**`,
  gorsel: `<table class="tablo"><tr><th>Chore</th><th>Time needed</th><th>Must do today?</th></tr><tr><td>Tidy up the room</td><td>30 minutes</td><td>Yes</td></tr><tr><td>Iron the shirts</td><td>20 minutes</td><td>Yes</td></tr><tr><td>Wash the dishes</td><td>15 minutes</td><td>Yes</td></tr><tr><td>Take out the garbage</td><td>5 minutes</td><td>No</td></tr></table>`,
  secenekler: [
    `4.50 p.m.`,
    `5.00 p.m.`,
    `5.05 p.m.`,
    `5.10 p.m.`
  ],
  dogru: 2,
  hatalar: [
    `Bir işi atlama: 30 + 20 = 50 dakika sadece oda ve ütüyü sayar; bulaşık (15 dakika) da "Yes" olduğu için unutulmuş.`,
    `Toplama hatası: 30 + 20 + 15 = 65 dakikadır, 60 değil.`,
    null,
    `"No" yazan işi de ekleme: çöp "Must do today? No" olduğu için hesaba katılmaz; 70 dakika yanlış olur.`
  ],
  aciklama: `Önce hangi işlerin yapılacağını belirle, sonra sürelerini topla. Tabloda "Must do today?" sütunu "Yes" olanlar yapılacak, "No" olanlar yapılmayacak.
Adım 1: "Yes" yazan işler: oda (30 dk), ütü (20 dk), bulaşık (15 dk). Çöp "No" olduğu için dışarıda.
Adım 2: Toplam süre 30 + 20 + 15 = 65 dakika, yani 1 saat 5 dakika.
Adım 3: Derya 4.00 p.m.'de başlıyor; 4.00 + 1 saat 5 dakika = 5.05 p.m.
Sağlama: 5.05 − 4.00 = 65 dakika.
Cevap C.`
},
{
  id: "ing-u8-319",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read Nehir's diary.

Dear Diary,
Today was a busy day. I like it when my aunt visits us because she always brings sweets, but I don't like it when she asks me about school! Mom was in charge of cooking lunch, and Dad is responsible for the dishes. I had to set the table and tidy up the living room before she arrived. My little brother Efe has no chores yet because he is only five, but he put the spoons on the table. Mom said, "Efe is a good helper."

**Which one is __NOT__ true?**`,
  gorsel: null,
  secenekler: [
    `Nehir doesn't like her aunt's visits because her aunt always brings sweets.`,
    `Efe helped with the table although he has no chores.`,
    `Nehir set the table and tidied up the living room.`,
    `Nehir's mother cooked lunch and her father is responsible for the dishes.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Doğru cümleyi yanlış sanma: Efe'nin görevi yok ama kaşıkları masaya koymuş; B metinle uyuşur.`,
    `Doğru cümleyi yanlış sanma: Nehir sofrayı kurmuş ve oturma odasını toplamış; C metinle uyuşur.`,
    `Doğru cümleyi yanlış sanma: annenin yemek, babanın bulaşık sorumluluğu metinde geçiyor; D metinle uyuşur.`
  ],
  aciklama: `"__NOT__ true" sorularında doğru üç cümleyi metinde bulup eler, kalanı seçersin. Sebep-sonuç içeren cümlelerde sebep ve duygu yönünü dikkatle kontrol et.
Adım 1: B: Efe'nin görevi yok ("has no chores") ama kaşıkları koymuş. Doğru. C: Nehir sofrayı kurmuş ve oturma odasını toplamış. Doğru. D: Anne yemekten, baba bulaşıktan sorumlu. Doğru.
Adım 2: A: Nehir halasının ziyaretlerini seviyor ("I like it when my aunt visits us"), çünkü tatlı getiriyor. Sevmediği şey, halasının okul hakkında soru sormasıdır.
Adım 3: A, Nehir'in ziyaretleri sevmediğini söylüyor. Metne ters, yani yanlış olan cümle budur.
Sık yapılan hata: "Always brings sweets" gibi doğru bir ayrıntıyı görüp cümlenin kalanını kontrol etmemek.
Cevap A.`
},
{
  id: "ing-u8-320",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read the poster in class 8-C.

**Which one is __NOT__ a rule in this class?**`,
  gorsel: `<table class="tablo"><tr><th>CLASS 8-C RULES</th></tr><tr><td>1. Arrive on time. If you are late, tell the teacher why.</td></tr><tr><td>2. Keep quiet during lessons. You can talk in the break.</td></tr><tr><td>3. Return the library books within two weeks.</td></tr><tr><td>4. Tidy up the classroom before you go home. Two students are in charge each day.</td></tr><tr><td>5. If you break a rule, you must clean the board.</td></tr></table>`,
  secenekler: [
    `Students who are late have to explain why.`,
    `Students can talk loudly during the lessons.`,
    `Students must return the library books in two weeks.`,
    `Two students are responsible for tidying up each day.`
  ],
  dogru: 1,
  hatalar: [
    `Kuralı kural olmayan sanma: 1. madde geç kalanın nedenini öğretmene söylemesini ister; A bir kuraldır.`,
    null,
    `Kuralı kural olmayan sanma: 3. madde kitapların iki hafta içinde iade edilmesini ister; C bir kuraldır.`,
    `Kuralı kural olmayan sanma: 4. madde her gün iki öğrencinin sınıfı toplamaktan sorumlu olduğunu söyler; D bir kuraldır.`
  ],
  aciklama: `"__NOT__ a rule" (kural değil) sorusunda afişteki maddeleri seçeneklerle eşleştirirsin. Afişte olan cümleler kuraldır; afişle çelişen cümle aranan cevaptır.
Adım 1: A, 1. maddedir (geç kalan nedenini söyler). C, 3. maddedir (kitaplar iki hafta içinde iade edilir). D, 4. maddedir (iki öğrenci her gün sınıfı toplar).
Adım 2: 2. madde "Keep quiet during lessons" (Ders sırasında sessiz ol) diyor ve konuşmak için teneffüsü gösteriyor.
Adım 3: B, ders sırasında yüksek sesle konuşabileceklerini söylüyor. Bu kurala ters, yani sınıfın kuralı değil.
Cevap B.`
},
{
  id: "ing-u8-321",
  kazanim: "E8.8.SI1",
  kademe: 3,
  zorluk: 4,
  soru: `Gül is asking Tuna about the chores in his house. Tuna's information is in the table.

Gül: Which chore do you like doing most?
Tuna: - - - -

**Which one completes the dialogue best?**`,
  gorsel: `<table class="tablo"><tr><th>Chore</th><th>Who does it?</th><th>Tuna's feeling</th></tr><tr><td>Washing the dishes</td><td>Tuna</td><td>Boring</td></tr><tr><td>Ironing</td><td>Mom</td><td>Not difficult, but too hot</td></tr><tr><td>Taking out the garbage</td><td>Dad</td><td>Terrible smell, he hates it</td></tr><tr><td>Setting the table</td><td>Tuna</td><td>Likes it when the family sits together</td></tr></table>`,
  secenekler: [
    `I like washing the dishes because it is exciting.`,
    `I like taking out the garbage because it is easy.`,
    `I like ironing because I am in charge of it.`,
    `I like setting the table because we all sit together.`
  ],
  dogru: 3,
  hatalar: [
    `Duyguyu ters okuma: Tuna bulaşık yıkamayı "boring" (sıkıcı) buluyor, heyecanlı bulmuyor.`,
    `Başkasının işini ve duygusunu karıştırma: çöpü baba çıkarıyor ve Tuna kokusundan nefret ediyor.`,
    `Başkasının işini Tuna'nın sanma: ütüyü anne yapıyor; Tuna'nın sorumluluğunda değil.`,
    null
  ],
  aciklama: `Tablo ile diyalog sorularında hem işi kimin yaptığına hem de Tuna'nın duygusuna bakarsın. "I like ... because ..." kalıbında neden de tabloyla uyuşmalıdır.
Adım 1: Tuna'nın en çok sevdiği işi bulmak için duygu sütununa bak. Olumlu olan tek duygu, sofra kurma satırındadır: "Likes it when the family sits together".
Adım 2: Bulaşık "boring" (A elenir). Çöpten nefret ediyor ve onu baba çıkarıyor (B elenir). Ütüyü anne yapıyor (C elenir).
Adım 3: D hem işi hem nedeni doğru söylüyor: "we all sit together" (hep birlikte oturuyoruz).
Cevap D.`
},
{
  id: "ing-u8-322",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read the e-mail.

Hi Lena,
Welcome to Turkey! I'm happy that you'll stay with us for two weeks. In our house, everybody helps. I am in charge of the garden, and my sister Sude is responsible for feeding the cat. Dad cooks on weekends. You are our guest, so you don't have to do any chores, but you can help us set the table in the evenings if you want. We eat at seven o'clock, so please arrive on time. Can't wait to meet you!
Zeynep

**What can we understand from the e-mail?**`,
  gorsel: null,
  secenekler: [
    `Lena must be in charge of the garden while she stays there.`,
    `Lena has to cook dinner with Zeynep's dad every weekend.`,
    `Lena doesn't have to do any chores, but she can help if she wants.`,
    `Lena must set the table at seven o'clock every evening.`
  ],
  dogru: 2,
  hatalar: [
    `Kişileri karıştırma: bahçeden sorumlu olan Zeynep'in kendisi; Lena'ya böyle bir iş verilmiyor.`,
    `Kişileri karıştırma: hafta sonu yemeği babası pişiriyor; Lena'dan yemek yapması istenmiyor.`,
    null,
    `İsteğe bağlı yardımı zorunluluk sanma: Zeynep "you can help us set the table ... if you want" diyor, yani yardım etmek Lena'nın isteğine bırakılmış; "must" ile zorunluluk yok.`
  ],
  aciklama: `E-postada "don't have to" zorunlu olmadığını, "you can help ... if you want" ise isteğe bağlı yardımı anlatır. İkisini birlikte okuyunca yazarın asıl isteğini anlarsın.
Adım 1: Lena misafir olduğu için "you don't have to do any chores" (hiçbir iş yapmak zorunda değilsin) deniyor.
Adım 2: Hemen ardından "you can help us set the table ... if you want" (istersen sofra kurmamıza yardım edebilirsin) diyor. Bu bir seçenek, zorunluluk değil.
Adım 3: Bahçe Zeynep'te, hafta sonu yemeği baba yapıyor. A ve B yanlış. D zorunluluk gibi verdiği için yanlış. C doğru.
Cevap C.`
},
{
  id: "ing-u8-323",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read the rules of a school workshop.

WORKSHOP RULES
Wear your glasses. Don't touch the machines without an adult. Keep quiet while the teacher is talking. Tidy up your table before you leave.

**Which student is __NOT__ obeying the workshop rules?**`,
  gorsel: null,
  secenekler: [
    `Berna leaves her table messy and goes home.`,
    `Tuğçe keeps quiet while the teacher is talking.`,
    `Orhan asks an adult before he uses the machine.`,
    `Kaan wears his glasses when he works.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Kurala uyanı uymayan sanma: Tuğçe öğretmen konuşurken sessiz kalıyor; bu kurala uygun.`,
    `Kurala uyanı uymayan sanma: Orhan makineyi kullanmadan önce bir yetişkine soruyor; bu kurala uygun.`,
    `Kurala uyanı uymayan sanma: Kaan çalışırken gözlüğünü takıyor; bu kurala uygun.`
  ],
  aciklama: `"Obey the rules" kurallara uymak demektir. Soruda uymayanı bulman gerekiyor, bu yüzden her öğrencinin davranışını kurallarla tek tek karşılaştır.
Adım 1: Tuğçe öğretmen konuşurken sessiz (keep quiet) kalıyor. Kurala uyuyor.
Adım 2: Orhan makineyi kullanmadan önce yetişkine soruyor (don't touch without an adult). Kurala uyuyor.
Adım 3: Kaan çalışırken gözlüğünü takıyor (wear your glasses). Kurala uyuyor.
Adım 4: Berna masasını dağınık bırakıp gidiyor. Kural ise "Tidy up your table before you leave" (Ayrılmadan masanı topla). Berna kurala uymuyor.
Cevap A.`
},
{
  id: "ing-u8-324",
  kazanim: "E8.8.SI2",
  kademe: 3,
  zorluk: 4,
  soru: `Duygu cooks dinner on Tuesdays, irons her father's shirts and does the laundry at weekends. Her teacher is asking about her responsibilities.

Teacher: Do you have to help at home, Duygu?
Duygu: - - - -
Teacher: So your parents give you a lot of responsibility.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Not really. I only set the table on Sundays, and that is all.`,
    `Yes. I cook every Tuesday, and I also iron and do the laundry.`,
    `Yes. I'm responsible for the garbage, but I have no other chores.`,
    `Not at all. My brother does everything, so I don't have to help.`
  ],
  dogru: 1,
  hatalar: [
    `Çok az iş söyleme: öğretmen "a lot of responsibility" diyor; Duygu'nun sofra kurmaktan başka çok işi var.`,
    null,
    `Başka işi söyleme: Duygu'nun işi çöp değil; salı yemek, ütü ve hafta sonu çamaşır.`,
    `Yardım etmediğini söyleme: Duygu'nun üç işi var; "I don't have to help" öğretmenin son cümlesiyle çelişir.`
  ],
  aciklama: `"Do you have to ...?" sorusuna cevap verirken hem kabul/ret hem de işleri doğru söylemelisin. Öğretmenin son cümlesi cevabın hangi yönde olduğunu verir.
Adım 1: Öğretmen "So your parents give you a lot of responsibility" (Demek ki ailen sana çok sorumluluk veriyor) diyor. Duygu'nun çok işi olduğunu söylemeli. A ve D elenir.
Adım 2: Duygu'nun işleri: salı akşam yemeği, babasının gömleklerini ütülemek, hafta sonu çamaşır. C başka bir iş (çöp) söylüyor ve tüm işleri saymıyor.
Adım 3: B üç işi de doğru sayıyor: "cook every Tuesday", "iron", "do the laundry".
Cevap B.`
},
{
  id: "ing-u8-325",
  kazanim: "E8.8.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read the two messages.

**According to the two messages, which one is Deniz going to do later?**`,
  gorsel: `<table class="tablo"><tr><th>Mom's note</th></tr><tr><td>Deniz, I'm at work until six. You must do your homework first. Then you can play. Please empty the dishwasher and set the table for four. Dad will bring the pizza. Love, Mom</td></tr><tr><th>Deniz's reply</th></tr><tr><td>OK, Mom! I did my homework and emptied the dishwasher. I'll set the table when Dad arrives.</td></tr></table>`,
  secenekler: [
    `doing his homework`,
    `emptying the dishwasher`,
    `setting the table`,
    `bringing the pizza`
  ],
  dogru: 2,
  hatalar: [
    `Geçmiş işi gelecek sanma: Deniz "I did my homework" diyor, yani ödevi bitirmiş.`,
    `Geçmiş işi gelecek sanma: Deniz "emptied the dishwasher" diyor, yani makineyi boşaltmış.`,
    null,
    `İşi yanlış kişiye verme: pizzayı baba getirecek; Deniz'in işi değil.`
  ],
  aciklama: `İki metni birlikte okurken annenin istediklerini Deniz'in cevabıyla karşılaştırırsın. Geçmiş zamanlı cümle (did, emptied) işin bittiğini, "I'll" ise sonra yapılacağını gösterir.
Adım 1: Annenin istekleri: ödev, bulaşık makinesini boşaltmak, sofrayı kurmak. Pizzayı babası getirecek.
Adım 2: Deniz'in cevabı: "I did my homework and emptied the dishwasher." Bu iki iş bitmiş.
Adım 3: "I'll set the table when Dad arrives." Sofra babası gelince kurulacak, yani sonra yapılacak iş bu.
Cevap C.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "ing-u8-001",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 1,
  soru: `You put plates and forks on the table before dinner.

**What is this chore?**`,
  gorsel: null,
  secenekler: [
    `emptying the dishwasher`,
    `setting the table`,
    `ironing the shirts`,
    `tidying up the room`
  ],
  dogru: 1,
  hatalar: [
    `Benzer işi karıştırma: bulaşık makinesini boşaltmak yemekten sonraki bir iştir; tabak ve çatalı masaya koymak değildir.`,
    null,
    `Alakasız işi seçme: ütülemek giysilerle ilgilidir, masayla ilgili değil.`,
    `Alakasız işi seçme: odayı toplamak eşyaları yerine koymaktır, sofra hazırlamak değil.`
  ],
  aciklama: `"Set the table" sofrayı kurmak demektir: yemekten önce masaya tabak, çatal ve bardak koyarsın.
Adım 1: Cümle yemekten önce masaya tabak ve çatal koymayı anlatıyor.
Adım 2: Bu iş "setting the table". Diğer seçenekler masa hazırlamayla ilgili değil.
Cevap B.`
},
{
  id: "ing-u8-002",
  kazanim: "E8.8.SI1",
  kademe: 0,
  zorluk: 1,
  soru: `Okan and Yağmur are talking.

Yağmur: Do you have to help your parents at home?
Okan: - - - -
Yağmur: Great! I make my bed and tidy up my room.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I love it when my mom cooks dinner.`,
    `Yes, she has. My brother is at school.`,
    `It is time to do the laundry.`,
    `Yes, I do. I set the table every evening.`
  ],
  dogru: 3,
  hatalar: [
    `Soruya cevap vermeme: Yağmur yardım edip etmediğini soruyor; bu cümle annenin yemek yapmasını sevdiğini söylüyor.`,
    `Yanlış kısa cevap: "Do you have to ...?" sorusuna "Yes, I do." / "No, I don't." diye cevap verilir. "she has" yanlış kişidir.`,
    `Soruya cevap vermeme: çamaşır zamanının geldiğini söylemek yardım edip etmediğini cevaplamaz.`,
    null
  ],
  aciklama: `"Do you have to ...?" sorusuna "Yes, I do." ya da "No, I don't." ile başlayan bir cevap verilir.
Adım 1: Yağmur "Do you have to help your parents at home?" (Evde ailene yardım etmen gerekiyor mu?) diye soruyor.
Adım 2: Doğru cevap "Yes, I do." ile başlamalı ve bir iş söylemeli: "I set the table every evening."
Adım 3: Yağmur'un "Great!" cevabı da olumlu bir cevapla uyuşur.
Cevap D.`
},
{
  id: "ing-u8-003",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 1,
  soru: `"I like it when my parents give me some pocket money."

**What does the speaker think?**`,
  gorsel: null,
  secenekler: [
    `The speaker is happy to get pocket money.`,
    `The speaker doesn't get any pocket money.`,
    `The speaker gives pocket money to his parents.`,
    `The speaker is angry about pocket money.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Ters anlam: konuşan harçlık aldığını söylüyor; harçlık almadığı anlamı çıkmaz.`,
    `Yön karıştırma: harçlığı ailesi veriyor, konuşan vermiyor.`,
    `Duyguyu ters çevirme: "I like it when ..." hoşlandığını anlatır, kızgınlığı değil.`
  ],
  aciklama: `"I like it when ..." (…olduğunda hoşlanırım) bir durumdan memnun olduğunu gösterir.
Adım 1: "Parents give me some pocket money" (Ailem bana biraz harçlık veriyor) durumu anlatılıyor.
Adım 2: Konuşan bu duruma "like" diyor, yani memnun. Doğru seçenek "happy".
Cevap A.`
},
{
  id: "ing-u8-004",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 2,
  soru: `Read the note from Sena's mother.

Sena, please take out the garbage first. Then buy some bread from the market. I'll be home at seven. Mom

**What does Sena's mother want her to do first?**`,
  gorsel: null,
  secenekler: [
    `buy some bread`,
    `do the laundry`,
    `take out the garbage`,
    `tidy up her room`
  ],
  dogru: 2,
  hatalar: [
    `Sırayı karıştırma: ekmek almak "then" ile sonraya bırakılmış.`,
    `Metinde olmayan iş: nottaki işler çöp ve ekmek; çamaşır geçmiyor.`,
    null,
    `Metinde olmayan iş: odayı toplamaktan söz edilmiyor.`
  ],
  aciklama: `Sıra bildiren sözcükler ("first", "then") hangi işin önce yapılacağını gösterir.
Adım 1: Annenin notunda "take out the garbage first" (önce çöpü çıkar) yazıyor.
Adım 2: "Then buy some bread" (sonra ekmek al) ikinci iş.
Cevap C.`
},
{
  id: "ing-u8-005",
  kazanim: "E8.8.SI2",
  kademe: 0,
  zorluk: 2,
  soru: `A teacher is asking about the class plants.

Teacher: Who is in charge of the plants this week?
Student: - - - -
Teacher: Good. Please remind him to water them on Friday.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I'm responsible for the board.`,
    `We have to water them every day.`,
    `Emre is in charge of them.`,
    `It is time to water the plants.`
  ],
  dogru: 2,
  hatalar: [
    `Yanlış iş: öğrenci tahtadan söz ediyor, bitkilerden değil; öğretmenin "him" demesi de bir başkasını gösterir.`,
    `Soruya cevap vermeme: öğretmen kimin sorumlu olduğunu soruyor; bu cümle bir kişi söylemiyor.`,
    null,
    `Soruya cevap vermeme: sulama zamanının geldiğini söylemek sorumlu kişiyi belirtmez.`
  ],
  aciklama: `"Who is in charge of ...?" (…den kim sorumlu?) sorusuna bir kişi adı vererek cevap verirsin.
Adım 1: Öğretmen bitkilerden kimin sorumlu olduğunu soruyor.
Adım 2: Sonraki cümlede "remind him" (ona hatırlat) geçiyor; yani cevapta bir erkek adı olmalı.
Adım 3: "Emre is in charge of them." hem soruyu cevaplar hem de "him" ile uyuşur.
Cevap C.`
},
{
  id: "ing-u8-006",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 2,
  soru: `This is Mert's chore chart for the week.

**How many times a week does Mert wash the dishes?**`,
  gorsel: `<table class="tablo"><tr><th>Day</th><th>Chore</th></tr><tr><td>Monday</td><td>Wash the dishes</td></tr><tr><td>Tuesday</td><td>Take out the garbage</td></tr><tr><td>Wednesday</td><td>Do the laundry</td></tr><tr><td>Thursday</td><td>Wash the dishes</td></tr><tr><td>Friday</td><td>Iron the shirts</td></tr></table>`,
  secenekler: [
    `twice`,
    `once`,
    `three times`,
    `every day`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Eksik sayma: bulaşık yalnızca bir kez değil, pazartesi ve perşembe olmak üzere iki kez yıkanıyor.`,
    `Fazla sayma: tabloda bulaşık yalnızca iki satırda geçiyor; üç satırda değil.`,
    `Genelleme yapma: Mert her gün bulaşık yıkamıyor; diğer günlerde başka işleri var.`
  ],
  aciklama: `Tabloda sorulan işi içeren satırları say.
Adım 1: "Wash the dishes" pazartesi ve perşembe günü yazıyor.
Adım 2: Demek ki Mert haftada iki kez, yani "twice" bulaşık yıkıyor.
Sağlama: Diğer günlerde çöp, çamaşır ve ütü var.
Cevap A.`
},
{
  id: "ing-u8-007",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 2,
  soru: `"Keeping a promise" means doing what you said you would do.

**Which person is keeping a promise?**`,
  gorsel: null,
  secenekler: [
    `Ali tells his sister he will help her, but he goes out to play.`,
    `Ela says she will arrive at five, but she comes at seven.`,
    `Can says he will tidy up the kitchen, but he forgets it.`,
    `Selim says he will return the book on Friday, and he does.`
  ],
  dogru: 3,
  hatalar: [
    `Sözünü tutmayanı seçme: Ali yardım edeceğini söylüyor ama oyuna gidiyor; bu sözü bozmaktır.`,
    `Sözünü tutmayanı seçme: Ela beşte geleceğini söylüyor ama yedide geliyor; zamanında gelmemiş.`,
    `Sözünü tutmayanı seçme: Can mutfağı toplayacağını söylüyor ama unutuyor; sözünü yerine getirmemiş.`,
    null
  ],
  aciklama: `"Keep a promise" söz verdiğin şeyi yapmaktır. Söylenen ile yapılan şeyin aynı olması gerekir.
Adım 1: Ali, Ela ve Can söylediklerinin tersini yapıyor ya da unutuyor.
Adım 2: Selim kitabı cuma günü iade edeceğini söylüyor ve gerçekten iade ediyor.
Adım 3: Söylenen ile yapılan aynı olduğu için sözünü tutan Selim.
Cevap D.`
},
{
  id: "ing-u8-008",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 2,
  soru: `Read Jenny's e-mail.

Hi Jenny, tomorrow is Saturday and I have a long to-do list. First I have to make my bed and tidy up my room. Then I'm going to the market. I don't like doing the laundry, but I'll do it in the evening.

**What will the writer do in the evening?**`,
  gorsel: null,
  secenekler: [
    `tidy up the room`,
    `do the laundry`,
    `go to the market`,
    `make the bed`
  ],
  dogru: 1,
  hatalar: [
    `Sırayı karıştırma: oda toplama sabahki ilk işlerden; akşam için söylenen iş değil.`,
    null,
    `Sırayı karıştırma: markete "then" ile sonra gidilecek; akşam yapılacak iş çamaşır.`,
    `Sırayı karıştırma: yatağı toplamak ilk iş; akşama bırakılan iş değil.`
  ],
  aciklama: `Yapılacaklar listesi sorularında zaman ifadelerini (first, then, in the evening) işlerle eşleştirirsin.
Adım 1: İlk işler: yatağı toplamak ve odayı toplamak. Sonra market.
Adım 2: "I don't like doing the laundry, but I'll do it in the evening." Çamaşırı akşam yapacak.
Cevap B.`
},
{
  id: "ing-u8-009",
  kazanim: "E8.8.SI1",
  kademe: 0,
  zorluk: 3,
  soru: `It is nine o'clock in the evening, and Cenk's room is a mess. His mother is talking to him.

Mom: Cenk, it is nine o'clock. - - - -
Cenk: OK, Mom. I'll tidy up quickly and go to sleep.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Do you have to wash the dishes tonight?`,
    `Don't you think it is necessary to tidy up before bed?`,
    `I like it when you play games before bedtime.`,
    `Don't you think it is time to have dinner now?`
  ],
  dogru: 1,
  hatalar: [
    `Konudan sapma: anne bulaşıktan değil, Cenk'in odasından söz ediyor; Cenk de odayı toplayacağını söylüyor.`,
    null,
    `Yanlış duygu: anne oyun oynamaktan hoşlandığını söylerse Cenk'in "tidy up" cevabı anlamsız kalır.`,
    `Zamanı karıştırma: saat dokuz; yemek zamanı değil, uyku zamanı. Cenk'in cevabıyla da uyuşmaz.`
  ],
  aciklama: `Diyalog tamamlamada boşluğa uyan cümle, sonraki cevapla da bağ kurmalıdır. Cenk "I'll tidy up quickly and go to sleep" diyor, yani annesi ona odasını toplamasını hatırlatmış.
Adım 1: Odası dağınık ve saat dokuz; annenin odayı toplamayı hatırlatması beklenir.
Adım 2: "Don't you think it is necessary to tidy up before bed?" (Yatmadan önce toplamak gerekli değil mi?) hem durumu hem cevabı karşılar.
Adım 3: A bulaşıktan, C oyundan, D yemekten söz ediyor; Cenk'in cevabıyla uyuşmuyor.
Cevap B.`
},
{
  id: "ing-u8-010",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 3,
  soru: `Read the library rules.

SCHOOL LIBRARY
Open: 8.30 a.m. – 4.30 p.m. Keep quiet.
You can take three books. Return them on time.
If you are late, you must pay 5 TL for each day.

Bora has to return his book by 10 March. He returns it on 14 March.

**How much must he pay?**`,
  gorsel: null,
  secenekler: [
    `4 TL`,
    `5 TL`,
    `15 TL`,
    `20 TL`
  ],
  dogru: 3,
  hatalar: [
    `Çarpmayı unutma: 4 gün gecikmiş ama ücret her gün için 5 TL; 4 sadece gün sayısıdır.`,
    `Tek günün ücretini alma: ücret her gecikme günü için ödenir; Bora 1 gün değil 4 gün geç getirmiş.`,
    `Gün sayma hatası: 14 − 10 = 4 gün. 3 gün saymak 3 × 5 = 15 TL'ye götürür.`,
    null
  ],
  aciklama: `Önce kaç gün gecikme olduğunu bul, sonra günlük ücretle çarp. Son iade günü olan 10 Mart'a kadar ücret yoktur.
Adım 1: Son iade günü 10 Mart. Bora kitabı 14 Mart'ta getirmiş.
Adım 2: Gecikme: 14 − 10 = 4 gün (11, 12, 13 ve 14 Mart).
Adım 3: Her gecikme günü için 5 TL (5 TL for each day). 4 × 5 = 20 TL.
Sağlama: 20 ÷ 5 = 4 gün.
Cevap D.`
},
{
  id: "ing-u8-011",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 3,
  soru: `Read the text.

My brother Kaan has a long to-do list every Saturday. He tidies up his room, irons shirts and returns library books. He doesn't like ironing, so he does it first. He likes returning library books, so he does that last.

**Why does Kaan iron first?**`,
  gorsel: null,
  secenekler: [
    `Because he likes ironing the most.`,
    `Because the library opens too late.`,
    `Because he doesn't like doing it.`,
    `Because his mother asked him to.`
  ],
  dogru: 2,
  hatalar: [
    `Ters yön: metinde Kaan'ın ütüyü sevmediği yazıyor; sevdiği iş kitap iadesi.`,
    `Metinde olmayan bilgi: kütüphanenin açılış saatinden söz edilmiyor; kitap iadesi zaten en sona bırakılıyor.`,
    null,
    `Metinde olmayan bilgi: annesinin böyle bir isteği yok; ütüyü kendisi ilk yapıyor.`
  ],
  aciklama: `Bir kişinin neden öyle davrandığını bulmak için hoşlanma ve hoşlanmama ifadelerine bakarsın.
Adım 1: "He doesn't like ironing" (Ütüden hoşlanmıyor).
Adım 2: "so he does it first" (bu yüzden onu ilk yapıyor). "So" (bu yüzden) sözcüğü nedeni gösterir.
Adım 3: Neden, ütüden hoşlanmaması. Kitap iadesini sevdiği için onu en sona bırakıyor; bu, ütüyü ilk yapma nedeni değil.
Cevap C.`
},
{
  id: "ing-u8-012",
  kazanim: "E8.8.SI1",
  kademe: 0,
  zorluk: 3,
  soru: `Furkan's father has a shop. His aunt is asking him about it.

Aunt: Do you have to help in the shop, Furkan?
Furkan: - - - -
Aunt: Then you don't have much free time.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Yes, I must help my dad every afternoon after school.`,
    `No, I don't. I spend all my afternoons at home.`,
    `I like it when customers say hello to me.`,
    `It is time to close the shop.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Olumsuz cevap verme: teyze "Then you don't have much free time" diyor, yani Furkan çok yardım ediyor.`,
    `Soruya cevap vermeme: teyze yardım etmesi gerekip gerekmediğini soruyor; müşterilerin selam vermesinden hoşlanmak cevap değil.`,
    `Soruya cevap vermeme: dükkânı kapatma zamanı, teyzenin sorusunu cevaplamaz ve sonraki cümleye bağlanmaz.`
  ],
  aciklama: `"Do you have to help?" sorusunun cevabı "Yes, I must/have to ..." ya da "No, I don't." olur. Sonraki cümle cevabın yönünü belirler.
Adım 1: Teyze "Then you don't have much free time" (O zaman çok boş zamanın yok) diyor. Furkan çok yardım ediyor demektir.
Adım 2: Bunu "Yes, I must help my dad every afternoon after school." cümlesi karşılar.
Adım 3: B tersini söylüyor. C ve D soruyu cevaplamıyor.
Cevap A.`
},
{
  id: "ing-u8-013",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 4,
  soru: `The students of 8-B take turns to clean the classroom. This is the duty chart.

**Which one is __NOT__ true according to the chart?**`,
  gorsel: `<table class="tablo"><tr><th>Day</th><th>Board</th><th>Plants</th><th>Garbage</th></tr><tr><td>Monday</td><td>Elif</td><td>Ozan</td><td>Mina</td></tr><tr><td>Tuesday</td><td>Ozan</td><td>Mina</td><td>Elif</td></tr><tr><td>Wednesday</td><td>Mina</td><td>Elif</td><td>Ozan</td></tr></table>`,
  secenekler: [
    `Elif is in charge of the board on Monday.`,
    `Mina is responsible for the plants on Wednesday.`,
    `Ozan takes out the garbage on Wednesday.`,
    `Every student does all three duties during the three days.`
  ],
  dogru: 1,
  hatalar: [
    `Doğru cümleyi yanlış sanma: pazartesi tahtadan sorumlu olan Elif; A tabloyla uyuşur.`,
    null,
    `Doğru cümleyi yanlış sanma: çarşamba çöpü Ozan çıkarıyor; C tabloyla uyuşur.`,
    `Doğru cümleyi yanlış sanma: Elif tahta, bitki ve çöp işlerini; Ozan ve Mina da kendi üç işini sırayla yapıyor. D tabloyla uyuşur.`
  ],
  aciklama: `"__NOT__ true" kökünde tabloya uymayan tek cümleyi bulursun. Her cümleyi gün ve iş sütunlarında ara.
Adım 1: A: Pazartesi tahta Elif'te. Doğru. C: Çarşamba çöp Ozan'da. Doğru.
Adım 2: D: Elif tahtayı pazartesi, çöpü salı, bitkiyi çarşamba yapıyor; Ozan ve Mina da üç farklı işi yapıyor. Doğru.
Adım 3: B: Çarşamba bitkilerden sorumlu olan Mina değil Elif; Mina bitkileri salı günü yapıyor. B yanlıştır.
Cevap B.`
},
{
  id: "ing-u8-014",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 4,
  soru: `Read the messages between Berkay and his mother.

**What must Berkay do to get his pocket money on Friday evening?**`,
  gorsel: `<table class="tablo"><tr><th>Mom (Monday)</th></tr><tr><td>Berkay, if you empty the dishwasher every day from Monday to Friday, I will give you some pocket money on Friday evening.</td></tr><tr><th>Berkay (Thursday)</th></tr><tr><td>Mom, I emptied it on Monday, Tuesday and Wednesday. I did it today, too!</td></tr></table>`,
  secenekler: [
    `He must empty the dishwasher again tomorrow.`,
    `He must tidy up his room tomorrow.`,
    `He doesn't have to do anything else.`,
    `He has to wash the dishes at the weekend.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Şartı değiştirme: annenin şartı oda toplamak değil, bulaşık makinesini boşaltmak.`,
    `Şartı eksik değerlendirme: pazartesiden cumaya her gün gerekiyor; Berkay perşembeye kadar yaptı, cuma günü kaldı.`,
    `Zaman aralığını yanlış okuma: şart Monday–Friday; hafta sonu yok ve iş bulaşık makinesini boşaltmak.`
  ],
  aciklama: `İki mesajı birleştirerek şartın ne kadarının yerine getirildiğine bakarsın. "Every day from Monday to Friday" pazartesiden cumaya her gün demektir.
Adım 1: Anne, pazartesi–cuma her gün bulaşık makinesini boşaltırsa cuma akşamı harçlık vereceğini söylüyor.
Adım 2: Berkay pazartesi, salı, çarşamba ve perşembe boşaltmış. Beş günün dördü tamam.
Adım 3: Cuma günü eksik. Yani yarın yine makineyi boşaltmalı.
Sağlama: 5 gün − 4 gün = 1 gün kalıyor.
Cevap A.`
},
{
  id: "ing-u8-015",
  kazanim: "E8.8.R1",
  kademe: 0,
  zorluk: 4,
  soru: `Read the table about two siblings.

**Which one is true according to the table?**`,
  gorsel: `<table class="tablo"><tr><th>Name</th><th>Likes it when ...</th><th>Doesn't like it when ...</th></tr><tr><td>Defne</td><td>her brother helps in the kitchen</td><td>the table is not set</td></tr><tr><td>Poyraz</td><td>the garbage is taken out early</td><td>his sister uses his things</td></tr></table>`,
  secenekler: [
    `Defne gets upset when her brother helps in the kitchen.`,
    `Poyraz gets upset when the garbage is taken out early.`,
    `Defne gets upset when the table is set on time.`,
    `Poyraz gets upset when his sister uses his things.`
  ],
  dogru: 3,
  hatalar: [
    `Sevilen durumu sevilmeyen sanma: Defne, kardeşi mutfakta yardım edince hoşlanıyor.`,
    `Sevilen durumu sevilmeyen sanma: Poyraz çöpün erken çıkarılmasından hoşlanıyor.`,
    `Sevilmeyen durumu ters çevirme: Defne'nin hoşlanmadığı şey sofranın KURULMAMASI; zamanında kurulması onu üzmez.`,
    null
  ],
  aciklama: `"Likes it when ..." hoşlandığın durumu, "doesn't like it when ..." hoşlanmadığın durumu gösterir. Tabloda doğru sütunu ve doğru kişiyi eşleştirirsin.
Adım 1: Defne hoşlanır: kardeşi mutfakta yardım edince. Hoşlanmaz: sofra kurulmayınca.
Adım 2: Poyraz hoşlanır: çöp erken çıkarılınca. Hoşlanmaz: kız kardeşi eşyalarını kullanınca.
Adım 3: "Gets upset" (üzülür) hoşlanılmayan durumdur. Bu yüzden yalnızca D tabloyla uyuşur.
Cevap D.`
}
);
