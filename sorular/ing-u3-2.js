// İngilizce — Unit 3: In the Kitchen · Kademe 3 (LGS Ayarı) ve Havuz
// Bağlam aileleri: tarif adımları ve sıralama, menü/fiyat tablosu, malzeme listesi, not ve e-posta, kural afişi
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["ing-3-kitchen"] = window.LGS_BANK["ing-3-kitchen"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "ing-u3-301",
  kazanim: "E8.3.W1",
  kademe: 3,
  zorluk: 3,
  soru: `Mert is telling his sister how to cook pasta.

Mert: First, boil the water in a big pan. Then, - - - -. After that, pour the water out. Finally, add the sauce.

**Which one completes Mert's explanation best?**`,
  gorsel: null,
  secenekler: [
    `add the sauce to the water`,
    `put the pasta into the hot water`,
    `take the pasta out of the pan`,
    `chop the pasta on a plate`
  ],
  dogru: 1,
  hatalar: [
    `Son adımı öne alma: sos "Finally" ile en sonda eklenir; suyun içine sos koymak tarifin sırasını bozar.`,
    null,
    `Pişmeden önce çıkarma: makarna henüz suya girmediği için "take out" bu noktada mantıklı değildir.`,
    `Mutfak eylemini yanlış nesneyle kullanma: makarna doğranmaz (chop); ayrıca bu adım suyun kaynaması ile suyu boşaltma arasındaki boşluğu doldurmaz.`
  ],
  aciklama: `Sıralı bir tarifte her adım bir öncekine bağlanır: önce hazırlık, sonra pişirme, en son servis. "First, then, after that, finally" sözcükleri sırayı gösterir.
Adım 1: İlk adım "First, boil the water" (suyu kaynat). Son adım "Finally, add the sauce" (sonunda sosu ekle).
Adım 2: Üçüncü adım "pour the water out" (suyu boşalt). Suyu boşaltmadan önce makarnanın suda pişmiş olması gerekir.
Adım 3: Boşluk, kaynayan suyla suyu boşaltma arasındadır. Bu yerde makarnayı kaynar suya atmalısın: "put the pasta into the hot water".
Adım 4: A son adımı öne alır, C makarnayı pişmeden çıkarır, D ise makarnayı tabakta doğramayı söyler. Hiçbiri sırayı tamamlamaz.
Sık yapılan hata: Boşluğun çevresindeki "Then" ve "After that" ipuçlarını okumadan yalnızca tanıdık mutfak sözcüğüne bakmak.
Cevap B.`
},
{
  id: "ing-u3-302",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Here is the menu of a small café.
**According to the menu, which one is __NOT__ true?**`,
  gorsel: `<table class="tablo"><tr><th>CAFÉ LEZZET</th><th>Price</th></tr><tr><td>Tomato soup</td><td>20 TL</td></tr><tr><td>Lentil soup</td><td>25 TL</td></tr><tr><td>Salad</td><td>30 TL</td></tr><tr><td>Meatballs</td><td>60 TL</td></tr><tr><td>Grilled chicken</td><td>70 TL</td></tr><tr><td>Ayran</td><td>10 TL</td></tr></table>`,
  secenekler: [
    `A salad is more expensive than a lentil soup.`,
    `Meatballs are cheaper than grilled chicken.`,
    `Tomato soup is cheaper than lentil soup.`,
    `Two ayrans cost more than a tomato soup.`
  ],
  dogru: 3,
  hatalar: [
    `Fiyatları ters okuma: salata 30 TL, mercimek çorbası 25 TL; 30 > 25 olduğundan A doğrudur ve aranan seçenek değildir.`,
    `Fiyatları ters okuma: köfte 60 TL, ızgara tavuk 70 TL; köfte daha ucuzdur, yani B doğrudur.`,
    `İki çorbayı karıştırma: domates çorbası 20 TL, mercimek çorbası 25 TL; C doğrudur.`,
    null
  ],
  aciklama: `Menü sorularında her cümleyi tabloya dönüp sayıyla sınamalısın. "__NOT__ true" kökü, tabloya uymayan tek cümleyi ister. "More than" (-den çok) ile "equal" (eşit) farklıdır.
Adım 1: Fiyatları yaz: domates çorbası 20, mercimek çorbası 25, salata 30, köfte 60, ızgara tavuk 70, ayran 10 (TL).
Adım 2: A: 30 > 25, doğru. B: 60 < 70, doğru. C: 20 < 25, doğru.
Adım 3: D: iki ayran 10 + 10 = 20 TL eder. Domates çorbası da 20 TL'dir. 20, 20'den fazla değildir, eşittir. D yanlıştır; aranan seçenek budur.
Sık yapılan hata: Sınır durumunda "eşit"i "daha fazla" saymak. Hesabı yapıp iki sayıyı karşılaştır.
Cevap D.`
},
{
  id: "ing-u3-303",
  kazanim: "E8.3.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Sinem is asking Deniz about food. Deniz's opinions are in the table.

Sinem: Do you prefer pizza or pasta?
Deniz: - - - -

**Which one completes the dialogue best?**`,
  gorsel: `<table class="tablo"><tr><th>Food</th><th>Deniz's opinion</th></tr><tr><td>Pizza</td><td>Tasty, but too salty</td></tr><tr><td>Pasta</td><td>Tasty and not salty</td></tr><tr><td>Soup</td><td>Too hot in summer</td></tr></table>`,
  secenekler: [
    `I usually prefer pasta because pizza is too salty for me.`,
    `I usually prefer pizza because pasta is too salty for me.`,
    `I usually prefer pasta because it is too spicy for me.`,
    `I usually prefer soup because it is too hot in summer.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Tercihi ve nedeni ters bağlama: tabloya göre "too salty" (fazla tuzlu) olan pizzadır, makarna değil.`,
    `Tabloda olmayan bilgi uydurma: tabloda makarna için "spicy" (acı) diye bir şey yoktur; makarna "not salty"dir.`,
    `Çelişkili gerekçe: çorba "too hot in summer" olduğu için tercih edilmez, bu bir olumsuzluktur; üstelik soru pizza ile makarna arasındadır.`
  ],
  aciklama: `"Do you prefer A or B?" sorusuna "I prefer ..." ile cevap verilir ve genellikle bir neden eklenir (because ...).
Adım 1: Soru pizza ile makarna arasındadır. Çorba bu seçimin dışındadır.
Adım 2: Tabloya bak: pizza "tasty, but too salty" (lezzetli ama fazla tuzlu), makarna "tasty and not salty" (lezzetli ve tuzlu değil).
Adım 3: Deniz makarnayı seçmelidir ve nedeni pizzanın fazla tuzlu olmasıdır. Bu, A'daki cümledir.
Adım 4: B nedeni makarnaya yükler, C tabloda olmayan bir bilgi ("spicy") ekler, D ise sorunun dışına çıkıp çorbayı seçer.
Sık yapılan hata: Nedeni doğru bulup tercihi karıştırmak. Hem tercihi hem gerekçeyi tabloyla sına.
Cevap A.`
},
{
  id: "ing-u3-304",
  kazanim: "E8.3.R2",
  kademe: 3,
  zorluk: 3,
  soru: `Read the text about Ayça's father.

My father is making soup today. He peels the potatoes and carrots first. Then he dices them. The small cubes go into the pot with hot water, and the soup is ready in twenty minutes.

**What does the word "dices" mean?**`,
  gorsel: null,
  secenekler: [
    `cooks in hot oil`,
    `mixes with a spoon`,
    `cuts into small cubes`,
    `puts into the oven`
  ],
  dogru: 2,
  hatalar: [
    `Cümlenin devamını okumama: küpler yağda değil, "hot water" içinde pişiyor; "fry" anlamı metinle uyuşmaz.`,
    `Sonraki adımla karıştırma: karıştırma (mix) çorba suya girdikten sonra yapılabilir; "dices" ise kesmeyi anlatan adımdır.`,
    null,
    `Fırın bilgisini metinden çıkarmama: metinde fırın yoktur; sebzeler tencerede suyla pişer.`
  ],
  aciklama: `Bilmediğin bir sözcüğü bağlamdan tahmin etmek için önce sözcüğün öncesine ve sonrasına bak. Sözcük bir işlemi anlatıyorsa, işlemin sonucunu veren cümle sana anlamı verir.
Adım 1: "He peels the potatoes ... Then he dices them." Soyma işleminden sonra "dices" geliyor.
Adım 2: Sonraki cümle sonucu veriyor: "The small cubes go into the pot." Yani dices uygulanan patates ve havuç "small cubes" (küçük küpler) hâline geliyor.
Adım 3: Demek ki "dices", küçük küpler hâlinde kesmek demektir: "cuts into small cubes".
Adım 4: A yağda kızartmayı, B karıştırmayı, D fırına koymayı söyler; metinde bu işlemlerin hiçbiri bu adımda yoktur.
Sık yapılan hata: Sözcüğe tek başına bakıp tanıdık bir mutfak eylemini seçmek. Sonucu anlatan cümleyi bul.
Cevap C.`
},
{
  id: "ing-u3-305",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Selin finds this note on the kitchen table.

Dear Selin,
I'm at work. Please start dinner for us. First, boil the rice. Then chop the onions and tomatoes for the salad. Don't touch the oven, it is broken. I will fry the fish when I come home at six. Love, Mum

**According to the note, which one is true?**`,
  gorsel: null,
  secenekler: [
    `Selin will fry the fish before six.`,
    `Selin will use the oven for the rice.`,
    `Selin will chop the vegetables after the rice.`,
    `Selin's mother will boil the rice at six.`
  ],
  dogru: 2,
  hatalar: [
    `Kimin yapacağını karıştırma: balığı Selin değil, annesi eve gelince kızartacak ("I will fry the fish").`,
    `Yasağı görmeme: annesi "Don't touch the oven, it is broken" demiş; ayrıca pirinç fırında değil, kaynatılır (boil).`,
    null,
    `Zamanı ve kişiyi karıştırma: pirinci Selin kaynatacak; saat altıda anne yalnızca balığı kızartacak.`
  ],
  aciklama: `Not sorularında önce kim, ne ve hangi sırayla sorusunu cevapla. "First" ve "Then" adımların sırasını verir.
Adım 1: Notta Selin'in işleri: önce pirinci kaynat (First, boil the rice), sonra soğan ve domatesi doğra (Then chop). Anne ise balığı eve gelince kızartacak.
Adım 2: A'da balığı Selin kızartıyor; yanlış, bunu anne yapacak.
Adım 3: B'de Selin fırını kullanıyor; yanlış, fırın bozuk ve pirinç kaynatılır.
Adım 4: C'de sebzeler pirinçten sonra doğranıyor; "First ... Then ..." sırası böyledir. Doğru.
Adım 5: D'de pirinci anne kaynatıyor; yanlış, bunu Selin yapacak.
Sık yapılan hata: Notta geçen eylemleri doğru bulup yapan kişiyi atlamak.
Cevap C.`
},
{
  id: "ing-u3-306",
  kazanim: "E8.3.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Ece is going to bake a cake. Dad has the recipe card below.

Ece: Dad, how many eggs and how much flour should I use for the cake?
Dad: - - - -

**Which one completes the dialogue best?**`,
  gorsel: `<table class="tablo"><tr><th>Ingredient</th><th>Amount</th></tr><tr><td>Eggs</td><td>3</td></tr><tr><td>Flour</td><td>200 grams</td></tr><tr><td>Sugar</td><td>100 grams</td></tr><tr><td>Milk</td><td>1 glass</td></tr></table>`,
  secenekler: [
    `You should use three eggs and 200 grams of flour.`,
    `You should use three eggs and 100 grams of flour.`,
    `You should use one egg and 200 grams of flour.`,
    `You should use three eggs and one glass of flour.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Malzemeleri karıştırma: 100 gram şekerin miktarıdır, un 200 gramdır.`,
    `Başka malzemenin miktarını yazma: "1" süt için (1 glass) yazılmıştır; yumurta 3 tanedir.`,
    `Birimi yanlış malzemeye bağlama: "1 glass" (1 bardak) sütün ölçüsüdür; un gram ile ölçülür ve 200 gramdır.`
  ],
  aciklama: `Malzeme sorularında "how many" (kaç tane) sayılabilir şeyler için, "how much" (ne kadar) ölçülen şeyler için kullanılır. Tabloda her malzemenin miktarı ve birimi ayrıdır.
Adım 1: Ece iki şey soruyor: yumurta sayısı (eggs) ve un miktarı (flour).
Adım 2: Tabloda eggs: 3, flour: 200 grams.
Adım 3: Doğru cevap iki bilgiyi birlikte vermelidir: "three eggs and 200 grams of flour".
Adım 4: B şekerin miktarını (100 g), C sütün sayısını (1), D sütün birimini (glass) una taşımıştır.
Sık yapılan hata: Tabloda yan yana duran satırlardaki sayıları karıştırmak. Önce malzemeyi bul, sonra yanındaki miktarı oku.
Cevap A.`
},
{
  id: "ing-u3-307",
  kazanim: "E8.3.W1",
  kademe: 3,
  zorluk: 3,
  soru: `Nehir is explaining how to make an omelette, but her sentences are mixed up.

1. Next, pour the mixture into a hot pan.
2. Finally, put the omelette on a plate.
3. First, break two eggs into a bowl.
4. Then, mix them with a fork.

**Which one shows the correct order of the process?**`,
  gorsel: null,
  secenekler: [
    `3 - 4 - 2 - 1`,
    `4 - 3 - 1 - 2`,
    `3 - 1 - 4 - 2`,
    `3 - 4 - 1 - 2`
  ],
  dogru: 3,
  hatalar: [
    `Servis ile pişirmeyi karıştırma: omlet pişmeden tabağa konmaz; "put the omelette on a plate" (2) en sondaki adımdır ve tavaya dökmeden (1) sonra gelir.`,
    `Karıştırmayı kırmadan öne alma: yumurtalar kırılıp kaseye konmadan (3) karıştırılamaz ("them" yumurtalardır); süreç "First" ile başlar.`,
    `Karışımı karışmadan dökme: "the mixture" (karışım) yumurtalar çatalla karıştırıldıktan (4) sonra oluşur; tavaya dökme (1) karıştırmadan sonra gelir.`,
    null
  ],
  aciklama: `Sıralama sorularında bağlaçlar haritadır: First (ilk olarak) → Then (sonra) → Next (sonraki adım) → Finally (en sonunda). Ayrıca her adımın bir öncekinin sonucunu kullanıp kullanmadığına bak.
Adım 1: "First" içeren cümle 3 numaralıdır: yumurtaları kaseye kır. "Finally" içeren cümle 2 numaralıdır: omleti tabağa koy.
Adım 2: Cümle 4'teki "them" yumurtalardır; yumurtalar kırılmadan (3) çatalla karıştırılamaz. Yani 3'ten sonra 4 gelir.
Adım 3: Cümle 1'deki "the mixture" (karışım) karıştırma bitince oluşur. Yani 4'ten sonra 1 gelir.
Adım 4: Sıra: 3 → 4 → 1 → 2. Yumurtaları kır, çatalla karıştır, karışımı tavaya dök, omleti tabağa koy.
Sık yapılan hata: Yalnızca bağlaçlara bakıp "them" ve "the mixture" gibi öncekini gösteren sözcükleri atlamak.
Cevap D.`
},
{
  id: "ing-u3-308",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `The 24 students of class 8/C answered this question: "Which meal do you like the most?" The results are in the table.
**According to the table, which one is true?**`,
  gorsel: `<table class="tablo"><tr><th>Meal</th><th>Students</th></tr><tr><td>Pizza</td><td>9</td></tr><tr><td>Pasta</td><td>7</td></tr><tr><td>Soup</td><td>5</td></tr><tr><td>Salad</td><td>3</td></tr></table>`,
  secenekler: [
    `Soup is more popular than pasta.`,
    `Pasta and soup together are as popular as pizza and salad.`,
    `Half of the class chose pizza.`,
    `Only four students chose salad.`
  ],
  dogru: 1,
  hatalar: [
    `Sayıları ters okuma: makarna 7, çorba 5; makarna daha popülerdir.`,
    null,
    `Yarıyı hesaplamama: sınıfta 24 öğrenci var, yarısı 12'dir; pizzayı 9 kişi seçmiştir.`,
    `Sayıyı yanlış okuma: salatayı seçen öğrenci sayısı 4 değil, 3'tür.`
  ],
  aciklama: `Anket tablosu sorularında her cümleyi tabloda sınamalısın. Toplamlar ve yarım gibi hesap isteyen seçeneklerde işlemi yaz.
Adım 1: Sayılar: pizza 9, pasta 7, çorba 5, salata 3. Toplam 9 + 7 + 5 + 3 = 24.
Adım 2: A: çorba 5, makarna 7; 5 < 7, yanlış.
Adım 3: B: pasta + soup = 7 + 5 = 12; pizza + salad = 9 + 3 = 12. İki toplam eşittir ("as popular as"). Doğru.
Adım 4: C: 24'ün yarısı 12'dir, pizza 9. Yanlış. D: salata 3 kişi, "four" yanlış.
Sık yapılan hata: "Half" (yarısı) ifadesini görünce 9'u kabul etmek. Önce toplamın yarısını hesapla.
Cevap B.`
},
{
  id: "ing-u3-309",
  kazanim: "E8.3.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Hakan and Lale are talking about cooking.

Hakan: Do you prefer baking cakes or frying potatoes?
Lale: - - - -. I love the smell of the oven.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I usually prefer baking cakes`,
    `I usually prefer frying potatoes`,
    `Yes, I prefer baking cakes`,
    `I never bake cakes or fry potatoes`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Sonraki cümleyi okumama: Lale fırının kokusunu seviyor; patates kızartmak için fırın gerekmez, kek pişirmek için gerekir.`,
    `"Or" sorusuna "Yes" ile cevap verme: "A or B?" sorusunda seçeneklerden biri söylenir, "Yes/No" denmez.`,
    `Soruyla ve sonraki cümleyle çelişme: Lale fırının kokusunu sevdiğini söylüyor; hiçbirini yapmıyor olamaz.`
  ],
  aciklama: `"Do you prefer A or B?" gibi seçmeli sorulara "Yes" ya da "No" ile cevap verilmez; seçilen şey söylenir: "I prefer A." / "I usually prefer B."
Adım 1: Soru iki seçenek sunuyor: kek pişirmek ya da patates kızartmak.
Adım 2: Boşluktan sonraki cümle ipucu verir: "I love the smell of the oven." Fırın kek pişirme (baking) ile ilgilidir.
Adım 3: Öyleyse Lale kek pişirmeyi seçmiştir: "I usually prefer baking cakes".
Adım 4: C "Yes" ile başladığı için "or" sorusuna uymaz; D ise sonraki cümleyle çelişir.
Sık yapılan hata: "Prefer" sorusuna "Yes, I do." demek. Seçeneklerden birini ver.
Cevap A.`
},
{
  id: "ing-u3-310",
  kazanim: "E8.3.R2",
  kademe: 3,
  zorluk: 3,
  soru: `Kerem's mother made a new dish for dinner.

Kerem took a big bite and his face turned red. He couldn't speak for a moment. He quickly drank two glasses of water and said, "My mouth is on fire!"

**Which word describes the dish best?**`,
  gorsel: null,
  secenekler: [
    `bitter`,
    `sour`,
    `spicy`,
    `sweet`
  ],
  dogru: 2,
  hatalar: [
    `Acı (bitter) ile baharatlı (spicy) tadı karıştırma: "bitter" kahve ya da çiğ badem gibi acı bir tadı anlatır; ağzı yakmaz.`,
    `Ekşi (sour) tadı seçme: ekşi tat limon gibi yüzü buruşturur; "ağzım yanıyor" ve kırmızı yüz baharat belirtisidir.`,
    null,
    `Sweet (tatlı) ile ilgisiz: tatlı bir yemekten sonra suya koşulmaz, ağız yanmaz.`
  ],
  aciklama: `Tat sıfatlarını bağlamdaki tepkilerden çıkarabilirsin. "Spicy" (baharatlı, acı), "sour" (ekşi), "bitter" (acı, buruk), "salty" (tuzlu), "sweet" (tatlı) farklı tatlardır.
Adım 1: Kerem'in tepkilerini listele: yüzü kırmızı oldu, konuşamadı, iki bardak su içti, "ağzım yanıyor" dedi.
Adım 2: Ağzı yakan ve yüzü kızartan tat baharattır: "spicy".
Adım 3: Ekşi (sour) yüzü buruşturur ama yakmaz; bitter acı ve buruk tattır; sweet tatlıdır. Bunlar bu belirtileri açıklamaz.
Sık yapılan hata: Türkçedeki "acı" sözcüğünü "bitter" ile eşlemek. Yakan acı İngilizcede "spicy"dir.
Cevap C.`
},
{
  id: "ing-u3-311",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read Lale's blog post.

Yesterday I baked a cake for my brother's birthday. I mixed the eggs, sugar and milk and poured the mixture into a tray. The oven was very hot. After thirty minutes, the cake was flat and wet. Later, I saw the bag of flour on the table. It was still closed.

**What can we understand from the text?**`,
  gorsel: null,
  secenekler: [
    `Lale baked the cake for too many minutes.`,
    `Lale used too much sugar in the mixture.`,
    `Lale didn't turn on the oven.`,
    `Lale left one ingredient out of the mixture.`
  ],
  dogru: 3,
  hatalar: [
    `Süreyi hatayla ilişkilendirme: 30 dakika normal bir pişirme süresidir; kek fazla pişmiş değil, ıslak kalmıştır.`,
    `Metinde olmayan bilgiyi çıkarma: şekerin fazlalığından hiç söz edilmez.`,
    `Metne ters düşme: "The oven was very hot." cümlesi fırının çalıştığını gösterir.`,
    null
  ],
  aciklama: `Metinden çıkarım yaparken söylenen cümleler arasındaki bağlantıyı bul. Yazar nedeni açıkça söylemeyebilir; ipuçlarını birleştirmen gerekir.
Adım 1: Yazar yumurta, şeker ve sütü karıştırmış. Un sayılmıyor.
Adım 2: Fırın çok sıcakmış (The oven was very hot), yani fırın ve sıcaklık sorun değil.
Adım 3: Kek yassı ve ıslak çıkmış; sonra un torbasını masada görmüş ve torba hâlâ kapalı.
Adım 4: Un hiç açılmadığına göre karışıma konmamıştır: bir malzeme eksik kalmıştır.
Sık yapılan hata: Kek bozulunca nedenin süre ya da şeker olduğunu varsaymak. Metindeki kapalı torba ipucunu gör.
Cevap D.`
},
{
  id: "ing-u3-312",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Cem has 90 TL. He wants to buy one soup, one main dish and one drink from the menu below.
**Which meal can Cem buy?**`,
  gorsel: `<table class="tablo"><tr><th>GARDEN KITCHEN</th><th>Price</th></tr><tr><td>Chicken soup</td><td>20 TL</td></tr><tr><td>Mushroom soup</td><td>25 TL</td></tr><tr><td>Pasta</td><td>55 TL</td></tr><tr><td>Pizza</td><td>60 TL</td></tr><tr><td>Lemonade</td><td>15 TL</td></tr></table>`,
  secenekler: [
    `Mushroom soup, pizza and lemonade`,
    `Chicken soup, pasta and lemonade`,
    `Chicken soup, pizza and lemonade`,
    `Mushroom soup, pasta and lemonade`
  ],
  dogru: 1,
  hatalar: [
    `Toplamı yanlış hesaplama: 25 + 60 + 15 = 100 TL, yani Cem'in parasından 10 TL fazla.`,
    null,
    `Sınırı aşma: 20 + 60 + 15 = 95 TL; Cem'in 90 TL'si yetmez.`,
    `Sınırı aşma: 25 + 55 + 15 = 95 TL; Cem'in 90 TL'si yetmez.`
  ],
  aciklama: `Bütçe sorularında her seçeneğin toplamını hesapla ve parayla karşılaştır.
Adım 1: Fiyatlar: chicken soup 20, mushroom soup 25, pasta 55, pizza 60, lemonade 15.
Adım 2: A: 25 + 60 + 15 = 100 TL, 90'dan fazla.
Adım 3: B: 20 + 55 + 15 = 90 TL, tam 90. Cem'in parası yeter.
Adım 4: C: 20 + 60 + 15 = 95 TL, yetmez. D: 25 + 55 + 15 = 95 TL, yetmez.
Sık yapılan hata: Toplam tam bütçeye eşitse "yetmez" sanmak. 90 TL'si olan 90 TL'lik yemeği alabilir.
Cevap B.`
},
{
  id: "ing-u3-313",
  kazanim: "E8.3.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Aylin wants to peel some potatoes. The list below shows the things inside the kitchen drawers.

Aylin: What can I use to peel the potatoes? Where is it?
Dad: - - - -

**Which one completes the dialogue best?**`,
  gorsel: `<table class="tablo"><tr><th>Drawer</th><th>Inside</th></tr><tr><td>1</td><td>spoons and forks</td></tr><tr><td>2</td><td>knives</td></tr><tr><td>3</td><td>plates and bowls</td></tr></table>`,
  secenekler: [
    `Use a knife. It is in the first drawer.`,
    `Use a spoon. It is in the second drawer.`,
    `Use a knife. It is in the second drawer.`,
    `Use a fork. It is in the third drawer.`
  ],
  dogru: 2,
  hatalar: [
    `Doğru araç, yanlış çekmece: bıçaklar birinci değil, ikinci çekmecededir.`,
    `Çekmeceyi doğru bulup aracı yanlış seçme: ikinci çekmecede kaşık değil, bıçak vardır; patates kaşıkla soyulmaz.`,
    null,
    `Hem aracı hem çekmeceyi yanlış seçme: çatal patates soymak için uygun değildir ve üçüncü çekmecede tabaklar ile kaseler vardır.`
  ],
  aciklama: `"What can I use to ...?" sorusu bir araç ister, "Where is it?" sorusu ise yer. İki soruya birlikte cevap vermelisin.
Adım 1: Patates soymak için kesici bir araç gerekir: bıçak (knife).
Adım 2: Tabloda bıçaklar 2. çekmecede: "knives" satırı.
Adım 3: Cevap "Use a knife. It is in the second drawer." olmalıdır.
Adım 4: A aracı doğru, yeri yanlış verir; B yeri doğru, aracı yanlış verir; D ikisini de yanlış verir.
Sık yapılan hata: Yalnızca aracı doğrulayıp tablo ile yeri kontrol etmemek.
Cevap C.`
},
{
  id: "ing-u3-314",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Look at the poster in Ümit's kitchen.
**According to the poster, which one is true?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">HOW TO MAKE TEA</th></tr><tr><td>1</td><td>First, boil some water in the big pot.</td></tr><tr><td>2</td><td>Second, put the tea leaves into the small pot.</td></tr><tr><td>3</td><td>Then pour a little hot water onto the leaves and wait.</td></tr><tr><td>4</td><td>Finally, pour the tea into a glass. Add hot water if the tea is too strong.</td></tr></table>`,
  secenekler: [
    `If the tea is too strong, you add hot water to the glass.`,
    `The tea leaves go into the big pot.`,
    `You pour the tea into a glass before waiting.`,
    `You add hot water to every glass.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Kapları karıştırma: çay yaprakları küçük demliğe konur (small pot); büyük demlikte su kaynatılır.`,
    `Sırayı ters çevirme: bekleme 3. adımdır, bardağa doldurma 4. adımdır.`,
    `Koşulu atlama: sıcak su her bardağa değil, yalnızca 4. adımda belirtildiği gibi çay fazla sert (too strong) ise eklenir.`
  ],
  aciklama: `Afiş sorularında her adımı numarasıyla oku. "If" (eğer) içeren cümleler bir koşul verir: koşul gerçekleşmezse o işlem yapılmaz.
Adım 1: Adımlar: 1 su kaynat (big pot), 2 çay yapraklarını küçük demliğe koy, 3 yaprakların üstüne biraz sıcak su dök ve bekle, 4 bardağa doldur; çay fazla sertse sıcak su ekle.
Adım 2: A'yı sına: 4. adım "Add hot water if the tea is too strong" der; yani çay fazla sertse bardağa sıcak su eklenir. A doğrudur.
Adım 3: B kapları, C sırayı, D de koşulu yok sayar.
Sık yapılan hata: "Add hot water" kısmını görüp koşulu ("if ...") atlamak ve D'yi seçmek.
Cevap A.`
},
{
  id: "ing-u3-315",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Read the e-mail from Mia to Lara.

Hi Lara,
I'm making pancakes tonight. I have milk and sugar, but I don't have any eggs or flour. Can you bring them with you? Also, please bring a pan. Ours is too small. Thanks!
Mia

**What will Lara bring to Mia's house?**`,
  gorsel: null,
  secenekler: [
    `milk, sugar and a pan`,
    `eggs, flour and milk`,
    `sugar, flour and a pan`,
    `eggs, flour and a pan`
  ],
  dogru: 3,
  hatalar: [
    `Mia'nın zaten sahip olduklarını seçme: süt ve şeker Mia'da var; Lara'dan istenenler yumurta, un ve tavadır.`,
    `Zaten olan malzemeyi ekleme: süt Mia'da var; tava ise açıkça isteniyor.`,
    `Zaten olan malzemeyi ekleme: şeker Mia'da var; yumurta ise eksiktir ve istenmiştir.`,
    null
  ],
  aciklama: `E-postalarda isteğin ne olduğunu bulmak için "I don't have" (bende yok) ve "please bring" (lütfen getir) gibi kalıplara bak.
Adım 1: Mia'da olanlar: süt ve şeker (I have milk and sugar).
Adım 2: Mia'da olmayanlar: yumurta ve un (I don't have any eggs or flour). Bunları Lara'dan istiyor.
Adım 3: Ayrıca "please bring a pan" (lütfen bir tava getir) diyor.
Adım 4: Lara'nın getireceği: yumurta, un ve tava.
Sık yapılan hata: Metinde geçen ilk iki malzemeyi (süt, şeker) alıp "olmayanlar" cümlesini atlamak.
Cevap D.`
},
{
  id: "ing-u3-316",
  kazanim: "E8.3.W1",
  kademe: 3,
  zorluk: 4,
  soru: `Deniz's grandmother wrote a recipe for a cheese pie, but step 3 is missing.
**Which one is the missing step?**`,
  gorsel: `<table class="tablo"><tr><th>Step</th><th>Grandma's cheese pie</th></tr><tr><td>1</td><td>First, mix three eggs and a glass of milk in a bowl.</td></tr><tr><td>2</td><td>Then add the flour and the cheese and mix again.</td></tr><tr><td>3</td><td>- - - -</td></tr><tr><td>4</td><td>After that, bake it in the oven for forty minutes.</td></tr><tr><td>5</td><td>Finally, take the pie out and wait until it is cool.</td></tr></table>`,
  secenekler: [
    `Fry the mixture in a pan with oil.`,
    `Boil the mixture for ten minutes.`,
    `Slice the pie and put it on a plate.`,
    `Pour the mixture into a baking tray.`
  ],
  dogru: 3,
  hatalar: [
    `Pişirme yöntemini karıştırma: 4. adımda börek fırında pişiyor; tavada yağla kızartma bu tarifin yöntemi değildir.`,
    `Yanlış yöntem: karışım önce kaynatılmaz; 4. adım "bake it" (fırında pişir) der.`,
    `Sonraki adımı öne alma: börek fırından çıkıp soğumadan dilimlenmez; bu servis aşamasıdır, 3. adımın yeri değil.`,
    null
  ],
  aciklama: `Eksik adım sorularında eksik adımın önceki ve sonraki adımla bağlantısını kur: önceki adımın çıktısı eksik adımın girdisi, eksik adımın çıktısı da sonraki adımın girdisi olmalıdır.
Adım 1: 2. adımın sonunda elinde hamur (karışım) var. 4. adımda bu karışım fırında pişiyor: "bake it".
Adım 2: Hamuru fırına koymadan önce bir kaba koymak gerekir. Bu adım "Pour the mixture into a baking tray" (karışımı bir fırın tepsisine dök).
Adım 3: A yöntemi değiştirir (tavada kızartma), B karışımı kaynatır, C börek hazır olmadan dilimlemektir; 4. ve 5. adımla uyuşmaz.
Sık yapılan hata: Yalnızca tanıdık mutfak eylemine bakmak. "It" (4. adım) hangi şeyi gösteriyor, onu bul.
Cevap D.`
},
{
  id: "ing-u3-317",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Defne wants to make cookies for 8 people. The recipe is for 4 people. The table shows the recipe and what Defne has at home.

**What does Defne need to buy?**`,
  gorsel: `<table class="tablo"><tr><th>Ingredient</th><th>Recipe (4 people)</th><th>Defne has</th></tr><tr><td>Eggs</td><td>2</td><td>5</td></tr><tr><td>Flour</td><td>300 grams</td><td>500 grams</td></tr><tr><td>Butter</td><td>100 grams</td><td>200 grams</td></tr></table>`,
  secenekler: [
    `four eggs and 100 grams of flour`,
    `only 100 grams of flour`,
    `only 600 grams of flour`,
    `100 grams of flour and 100 grams of butter`
  ],
  dogru: 1,
  hatalar: [
    `Toplam ihtiyacı alınacak miktar sanma: 8 kişi için 4 yumurta gerekir ama Defne'de 5 yumurta var; yumurta almasına gerek yok.`,
    null,
    `Toplam ihtiyacı alınacak miktar sanma: 8 kişi için 600 gram un gerekir ama Defne'de zaten 500 gram var; alacağı 600 − 500 = 100 gramdır.`,
    `Tereyağını yanlış hesaplama: 8 kişi için 100 × 2 = 200 gram tereyağı gerekir ve Defne'de 200 gram var; almasına gerek yok.`
  ],
  aciklama: `Ölçekleme sorularında önce tarifi gereken kişi sayısına göre büyüt, sonra elindekilerle karşılaştırıp eksiği bul.
Adım 1: 8 kişi, 4 kişinin iki katıdır. Her miktarı 2 ile çarp: yumurta 2 × 2 = 4, un 300 × 2 = 600 gram, tereyağı 100 × 2 = 200 gram.
Adım 2: Defne'de olanlarla karşılaştır. Yumurta: 5 ≥ 4, yeter. Tereyağı: 200 = 200, yeter. Un: 500 < 600, 600 − 500 = 100 gram eksik.
Adım 3: Defne yalnızca 100 gram un almalıdır.
Sağlama: 500 + 100 = 600 gram un, 8 kişilik tarife yeter.
Sık yapılan hata: Gerekli toplam miktarı ("600 grams") alınacak miktar sanmak. Elindekini çıkarmayı unutma.
Cevap B.`
},
{
  id: "ing-u3-318",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Dilan is cooking at home. The table shows how long each food boils.

Dilan wants to take the eggs out of the water at 18.30. She wants to take the rice out 5 minutes before the eggs.

**At what time should Dilan put the rice into the water?**`,
  gorsel: `<table class="tablo"><tr><th>Food</th><th>Boiling time</th></tr><tr><td>Eggs</td><td>10 minutes</td></tr><tr><td>Rice</td><td>15 minutes</td></tr><tr><td>Potatoes</td><td>20 minutes</td></tr></table>`,
  secenekler: [
    `18.00`,
    `18.05`,
    `18.10`,
    `18.15`
  ],
  dogru: 2,
  hatalar: [
    `Süreyi yanlış kullanma: 18.00, 30 dakika öncesidir; tablodaki pirinç süresi 15 dakikadır.`,
    `Yanlış yiyeceğin süresini kullanma: 18.25 − 20 = 18.05; 20 dakika patatesin süresidir, pirincin değil.`,
    null,
    `"5 minutes before" bilgisini atlama: 18.30 − 15 = 18.15, pirincin yumurtadan 5 dakika önce çıkacağını hesaba katmaz.`
  ],
  aciklama: `Zaman sorularında geriden git: önce işin biteceği anı bul, sonra pişme süresini çıkar.
Adım 1: Yumurtalar 18.30'da çıkacak. Pirinç yumurtadan 5 dakika önce çıkacak: 18.30 − 5 dakika = 18.25.
Adım 2: Tabloya bak: pirinç 15 dakika kaynıyor.
Adım 3: Suya konma saati: 18.25 − 15 dakika = 18.10.
Sağlama: 18.10'dan 15 dakika sonrası 18.25, yani pirinç doğru saatte çıkar.
Sık yapılan hata: "5 minutes before" ifadesini atlayıp 18.30'dan doğrudan 15 dakika çıkarmak (18.15).
Cevap C.`
},
{
  id: "ing-u3-319",
  kazanim: "E8.3.W1",
  kademe: 3,
  zorluk: 4,
  soru: `Batu is writing how to make French fries. His sentences are mixed up.

1. Finally, put them on a plate.
2. First, peel the potatoes.
3. Then, fry the slices in hot oil.
4. Next, slice them.
5. After that, take them out of the oil.

**Which one shows the correct order?**`,
  gorsel: null,
  secenekler: [
    `2 - 3 - 4 - 5 - 1`,
    `4 - 2 - 3 - 5 - 1`,
    `2 - 4 - 3 - 5 - 1`,
    `2 - 4 - 5 - 3 - 1`
  ],
  dogru: 2,
  hatalar: [
    `Kızartma ile dilimleme sırasını karıştırma: dilimler (slices) kızartılmadan önce dilimlenmiş olmalıdır; 3. cümle 4. cümleden sonra gelir.`,
    `"Next" ile başlama: "them" patatestir; patatesler soyulmadan (2) dilimlenemez ve süreç "First" ile başlar.`,
    null,
    `Yağdan çıkarma ile kızartmayı karıştırma: yağdan çıkarma (5) kızartmadan (3) sonra gelir.`
  ],
  aciklama: `Sıralama sorularında bağlaçlardan sonra "mantık" kontrolü de yap: bir adım önceki adımın sonucunu kullanıyorsa ondan sonra gelmelidir.
Adım 1: İlk adım "First, peel the potatoes" (2); son adım "Finally, put them on a plate" (1).
Adım 2: Patatesler soyulunca dilimlenir: "Next, slice them" (4). Dilimler hazır olunca kızartılır: "Then, fry the slices" (3).
Adım 3: Kızartıldıktan sonra yağdan çıkarılır: "After that, take them out of the oil" (5). Sonunda tabağa konur (1).
Adım 4: Sıra 2 → 4 → 3 → 5 → 1.
Sık yapılan hata: Yalnızca "First" ve "Finally" ile yetinip "Next" (sonra) bağlacını "Then"in önüne ya da arkasına rastgele koymak. "Slices" sözcüğü dilimlemenin kızartmadan önce olduğunu gösterir.
Cevap C.`
},
{
  id: "ing-u3-320",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Ahmet's aunt is choosing a dish for dinner. Ahmet can't eat eggs and he doesn't like spicy food. The table shows the dishes.

**Which dish should his aunt choose?**`,
  gorsel: `<table class="tablo"><tr><th>Dish</th><th>Main ingredients</th><th>Taste</th></tr><tr><td>Omelette</td><td>eggs, cheese</td><td>mild</td></tr><tr><td>Cheese pie</td><td>flour, eggs, cheese</td><td>mild</td></tr><tr><td>Chicken curry</td><td>chicken, rice</td><td>spicy</td></tr><tr><td>Lentil soup</td><td>lentils, onion, carrot</td><td>mild</td></tr></table>`,
  secenekler: [
    `Lentil soup, because it has no egg and it isn't spicy.`,
    `Cheese pie, because it isn't spicy and it has cheese.`,
    `Chicken curry, because it has no egg in it.`,
    `Omelette, because it isn't spicy and it is easy.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Yalnızca bir koşula bakma: börek acı değildir ama içinde yumurta (eggs) vardır; Ahmet yumurta yiyemez.`,
    `Yalnızca bir koşula bakma: körinin içinde yumurta yoktur ama tadı "spicy"dir; Ahmet acı yemeği sevmiyor.`,
    `Yalnızca bir koşula bakma: omlet acı değildir ama ana malzemesi yumurtadır; Ahmet yumurta yiyemez.`
  ],
  aciklama: `İki koşul varsa seçtiğin cevap ikisini birden sağlamalıdır. Önce tabloda koşullara uymayanları ele.
Adım 1: Koşullar: yumurta yok (no eggs) ve acı değil (not spicy).
Adım 2: Omlet ve peynirli börekte yumurta var, ikisi elenir.
Adım 3: Tavuk körisinde yumurta yok ama tadı "spicy" (acı), elenir.
Adım 4: Mercimek çorbasında yumurta yok ve tadı "mild" (hafif). İki koşulu da sağlar.
Sık yapılan hata: İlk koşulu sağlayan ilk yemeği seçip ikinci koşulu kontrol etmemek.
Cevap A.`
},
{
  id: "ing-u3-321",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read the text about Irmak's grandfather.

My grandfather makes bread every Sunday. First, he mixes flour, water and yeast. Then he leaves the dough for one hour. After that, he cuts it into three pieces and waits for another thirty minutes. Finally, he bakes the pieces for twenty-five minutes.

**How long does it take from the end of mixing to the end of baking?**`,
  gorsel: null,
  secenekler: [
    `85 minutes`,
    `115 minutes`,
    `145 minutes`,
    `175 minutes`
  ],
  dogru: 1,
  hatalar: [
    `Bir bekleme süresini atlama: 60 + 25 = 85 dakika; ikinci bekleme (30 dakika) hesaba katılmamış.`,
    null,
    `Bir süreyi iki kez sayma: 60 + 30 + 30 + 25 = 145 dakika; otuz dakika iki kez eklenmiş.`,
    `Bir saati iki kez sayma: 60 + 60 + 30 + 25 = 175 dakika; bir saatlik bekleme iki kez eklenmiş.`
  ],
  aciklama: `Süre sorularında metindeki her zaman bilgisini sırayla bul ve topla. Sorunun başlangıç ve bitiş noktasına dikkat et.
Adım 1: Karıştırma bittikten sonra olanlar: hamur 1 saat dinleniyor (60 dakika), üç parçaya bölünüp 30 dakika daha bekliyor, sonra 25 dakika pişiyor.
Adım 2: Toplam 60 + 30 + 25 = 115 dakika.
Sağlama: 115 dakika 1 saat 55 dakikadır.
Sık yapılan hata: "Another thirty minutes" ifadesini ilk beklemenin parçası sanıp eklememek (85).
Cevap B.`
},
{
  id: "ing-u3-322",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Hasan's parents are not at home. He wants to bake a pizza. This poster is on the kitchen wall.

**According to the poster, which one is true?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">KITCHEN RULES</th></tr><tr><td>1</td><td>Wash your hands before you cook.</td></tr><tr><td>2</td><td>Never touch a hot pan with wet hands.</td></tr><tr><td>3</td><td>Always ask an adult before you use the oven.</td></tr><tr><td>4</td><td>Put the knives back in the second drawer.</td></tr></table>`,
  secenekler: [
    `Hasan may use the oven if his hands are dry.`,
    `Hasan should leave the knife on the table.`,
    `Hasan must wash his hands after the pizza.`,
    `Hasan should never use the oven without asking an adult.`
  ],
  dogru: 3,
  hatalar: [
    `Kuralları karıştırma: kuru eller 2. kuralda sıcak tavayla ilgilidir; fırın için 3. kural bir yetişkine sormayı ister.`,
    `4. kuralı ters çevirme: bıçaklar kullanıldıktan sonra ikinci çekmeceye geri konur, masada bırakılmaz.`,
    `1. kuralı ters çevirme: eller pişirmeden önce (before) yıkanır, pizzadan sonra değil.`,
    null
  ],
  aciklama: `Kural afişi sorularında her kuralı numarasıyla bul. "Never" (asla) ve "always" (her zaman) kesin kuralları gösterir.
Adım 1: Hasan fırını kullanmak istiyor. İlgili kural 3: "Always ask an adult before you use the oven." (Fırını kullanmadan önce her zaman bir yetişkine sor.)
Adım 2: Ebeveynler evde yok, yani Hasan'ın sormadan fırını kullanmaması gerekir: "should never use the oven without asking an adult".
Adım 3: A kuru elleri izin sanır (2. kuralı karıştırır), B 4. kurala, C 1. kurala ters düşer.
Sık yapılan hata: Bir kuralı başka bir kuralın koşuluymuş gibi okumak. Hangi kural hangi eylemle ilgili, ayır.
Cevap D.`
},
{
  id: "ing-u3-323",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Nilay and Tolga describe how they make an omelette.

Nilay: First, I mix two eggs in a bowl. Then I add salt and cheese. Finally, I fry it with a little oil.

Tolga: I start with three eggs and some milk. After that, I add salt and tomatoes. Then I fry it with butter.

**According to the texts, which one is true for both Nilay and Tolga?**`,
  gorsel: null,
  secenekler: [
    `They add milk to the eggs.`,
    `They fry the omelette in oil.`,
    `They add salt before frying.`,
    `They use three eggs.`
  ],
  dogru: 2,
  hatalar: [
    `Yalnızca birinin yaptığını ikisine yükleme: süt yalnızca Tolga'nın tarifinde var; Nilay süt eklemiyor.`,
    `Yağ ile tereyağını karıştırma: Nilay yağda (oil), Tolga tereyağında (butter) kızartıyor.`,
    null,
    `Sayıyı karıştırma: Nilay iki, Tolga üç yumurta kullanıyor.`
  ],
  aciklama: `İki metni karşılaştıran sorularda her seçeneği iki metinde ayrı ayrı sına. "Both" (ikisi de) diyorsa iki kişi için de doğru olmalıdır.
Adım 1: Nilay: iki yumurta, tuz ve peynir, yağda kızartma. Tolga: üç yumurta ve süt, tuz ve domates, tereyağında kızartma.
Adım 2: A: süt yalnızca Tolga'da. B: yağ yalnızca Nilay'da, Tolga tereyağı kullanıyor. D: yumurta sayıları farklı (2 ve 3).
Adım 3: C: Nilay tuzu kızartmadan önce ekliyor ("Then I add salt ... Finally, I fry"), Tolga da öyle ("I add salt ... Then I fry"). İkisi için de doğrudur.
Sık yapılan hata: Bir kişi için doğru olan seçeneği ikisi için de doğru saymak.
Cevap C.`
},
{
  id: "ing-u3-324",
  kazanim: "E8.3.R1",
  kademe: 3,
  zorluk: 4,
  soru: `This is the schedule of a cooking class. Each activity ends when the next one starts.

**According to the schedule, which one is true?**`,
  gorsel: `<table class="tablo"><tr><th>Time</th><th>Activity</th></tr><tr><td>10.00</td><td>Peel the vegetables</td></tr><tr><td>10.20</td><td>Chop the vegetables</td></tr><tr><td>10.40</td><td>Boil the soup</td></tr><tr><td>11.00</td><td>Pour the soup into bowls</td></tr><tr><td>11.15</td><td>Eat together</td></tr></table>`,
  secenekler: [
    `Boiling the soup takes twenty minutes.`,
    `Chopping the vegetables takes half an hour.`,
    `Peeling the vegetables takes ten minutes.`,
    `The students eat before they pour the soup.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Süreyi yanlış hesaplama: doğrama 10.20'de başlayıp 10.40'ta bitiyor; bu 20 dakikadır, yarım saat değil.`,
    `Süreyi yanlış hesaplama: soyma 10.00'da başlayıp 10.20'de bitiyor; bu 20 dakikadır, 10 dakika değil.`,
    `Sırayı ters çevirme: çorba önce kaselere konur (11.00), sonra yenir (11.15).`
  ],
  aciklama: `Program sorularında bir etkinliğin süresi, başlangıç saati ile bir sonraki etkinliğin başlangıç saati arasındaki farktır.
Adım 1: Soyma 10.00 – 10.20 → 20 dakika. Doğrama 10.20 – 10.40 → 20 dakika. Kaynatma 10.40 – 11.00 → 20 dakika.
Adım 2: A: kaynatma 20 dakika sürer, doğru. B: doğrama yarım saat (30 dakika) değil, 20 dakikadır. C: soyma 10 dakika değil, 20 dakikadır.
Adım 3: D: tabloya göre çorba önce kaselere konur (11.00), yeme 11.15'te olur. Yanlış.
Sık yapılan hata: Saat farkını yanlış hesaplamak; 10.00'dan 10.20'ye 20 dakika vardır.
Cevap A.`
},
{
  id: "ing-u3-325",
  kazanim: "E8.3.SI1",
  kademe: 3,
  zorluk: 4,
  soru: `Gül and Okan are talking about boiled eggs.

Gül: Do you prefer boiling or frying eggs?
Okan: I prefer boiling. Look at my cards. They are not in order.
Card A: (I) - - - -, take the eggs out and peel them.
Card B: (II) - - - -, put the eggs into hot water.
Card C: (III) - - - -, wait for ten minutes.

**Which one completes the blanks I, II and III in order?**`,
  gorsel: null,
  secenekler: [
    `First – Then – Finally`,
    `Finally – First – Then`,
    `Then – Finally – First`,
    `Finally – Then – First`
  ],
  dogru: 1,
  hatalar: [
    `Kartları yazılış sırasıyla sıralama: kartlar karışık verilmiştir; "take the eggs out and peel them" (Card A) son adım, "put the eggs into hot water" (Card B) ilk adımdır.`,
    null,
    `Bağlaçları rastgele dağıtma: yumurtaları çıkarıp soymak son adımdır ("Finally"), suya koymak ise ilk adımdır; I numaralı boşluğa "Then" gelemez.`,
    `Ortadaki iki adımı ters çevirme: suya koymak (II) "First", beklemek (III) "Then" olmalıdır; bu şıkta ikisi yer değiştirmiş.`
  ],
  aciklama: `Sıra bağlaçları süreci kronolojik anlatır: First (ilk olarak) → Then (sonra) → Finally (en sonunda). Kartlar karışık verildiğinde bağlacı yazılış sırasına göre değil, adımın sürecin neresinde olduğuna göre seç.
Adım 1: Üç adımın gerçek sırası: önce yumurtaları sıcak suya koy (Card B), sonra on dakika bekle (Card C), en sonunda çıkarıp soy (Card A).
Adım 2: Card B ilk adımdır: (II) = First. Card C ikinci adımdır: (III) = Then. Card A sondur: (I) = Finally.
Adım 3: Boşlukları I, II, III sırasıyla oku: Finally – First – Then.
Sık yapılan hata: Boşlukları soruda göründükleri sırayla "First – Then – Finally" diye doldurmak. Önce adımların gerçek sırasını bul, sonra bağlacı eşleştir.
Cevap B.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "ing-u3-001",
  kazanim: "E8.3.R2",
  kademe: 0,
  zorluk: 1,
  soru: `**Dad wants to - - - - a cake in the oven.**`,
  gorsel: null,
  secenekler: [
    `pour`,
    `boil`,
    `bake`,
    `chop`
  ],
  dogru: 2,
  hatalar: [
    `Sıvıyla ilgili eylem: "pour" (dökmek) sıvı için kullanılır, fırında kek pişirmek için değil.`,
    `Suyla ilgili eylem: "boil" (kaynatmak) suda pişirmeyi anlatır; fırında pişirmeyi değil.`,
    null,
    `Doğrama eylemi: "chop" (doğramak) sebze için kullanılır.`
  ],
  aciklama: `Fırında pişirmek için "bake" fiili kullanılır: bake a cake (kek pişirmek), bake bread (ekmek pişirmek).
Adım 1: Cümlede "in the oven" (fırında) ipucu var.
Adım 2: Fırında pişirme fiili "bake".
Sık yapılan hata: "Boil" ile "bake"i karıştırmak. Boil sudadır, bake fırındadır.
Cevap C.`
},
{
  id: "ing-u3-002",
  kazanim: "E8.3.SI1",
  kademe: 0,
  zorluk: 1,
  soru: `Ela: Do you prefer tea or coffee?
Aziz: - - - -

**Which one completes the dialogue?**`,
  gorsel: null,
  secenekler: [
    `I usually prefer tea.`,
    `Yes, I do.`,
    `No, I don't.`,
    `Thanks, I prefer it.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `"Or" sorusuna "Yes" diyemezsin: soru iki seçenek sunuyor, bunlardan birini söylemelisin.`,
    `"Or" sorusuna "No" diyemezsin: seçeneklerden birini söylemelisin.`,
    `Seçenek belirtmeme: "it" neyi gösteriyor? Çay mı kahve mi olduğu söylenmemiş.`
  ],
  aciklama: `"Do you prefer A or B?" sorusuna "I prefer A." ya da "I prefer B." diye cevap verilir.
Adım 1: Soruda iki seçenek var: tea ve coffee.
Adım 2: Cevapta bunlardan biri söylenmeli: "I usually prefer tea." (Genellikle çayı tercih ederim.)
Sık yapılan hata: "Yes, I do." demek. Bu soru evet/hayır sorusu değildir.
Cevap A.`
},
{
  id: "ing-u3-003",
  kazanim: "E8.3.R2",
  kademe: 0,
  zorluk: 1,
  soru: `**Lemons are very - - - -. I make a face when I eat one.**`,
  gorsel: null,
  secenekler: [
    `bitter`,
    `salty`,
    `spicy`,
    `sour`
  ],
  dogru: 3,
  hatalar: [
    `Acı ile ekşiyi karıştırma: "bitter" kahve gibi acı tadı anlatır; limon ekşidir.`,
    `Tuzlu ile ekşiyi karıştırma: "salty" tuz tadıdır.`,
    `Baharatlı ile ekşiyi karıştırma: "spicy" ağzı yakan baharat tadıdır.`,
    null
  ],
  aciklama: `Limonun tadı ekşidir: "sour".
Adım 1: Yüzünü buruşturmak ekşi bir tadın belirtisidir.
Adım 2: Limon için doğru sıfat "sour".
Sık yapılan hata: Türkçede "acı" diye düşünüp bitter seçmek. Limon bitter değil sourdur.
Cevap D.`
},
{
  id: "ing-u3-004",
  kazanim: "E8.3.SI1",
  kademe: 0,
  zorluk: 2,
  soru: `The recipe says: 3 eggs and 1 glass of milk.

Ali: Do I use two or three eggs?
Mum: - - - -

**Which one completes the dialogue?**`,
  gorsel: null,
  secenekler: [
    `Yes, you do.`,
    `Use three eggs, please.`,
    `No, I don't.`,
    `Use one glass of milk.`
  ],
  dogru: 1,
  hatalar: [
    `"Two or three" sorusuna "Yes" denmez: sayı söylenmeli.`,
    null,
    `"Two or three" sorusuna "No" denmez: sayı söylenmeli.`,
    `Başka malzemeyi cevaplama: Ali yumurta sayısını soruyor; süt miktarı sorulmadı.`
  ],
  aciklama: `Ali iki sayıdan birini soruyor: two or three. Cevap sayı vermelidir.
Adım 1: Tarifte "3 eggs" yazıyor.
Adım 2: Doğru cevap "Use three eggs, please." (Üç yumurta kullan.)
Adım 3: D yumurtayı değil sütü cevaplıyor.
Sık yapılan hata: Tarifin diğer satırını (süt) okuyup soruyu unutmak.
Cevap B.`
},
{
  id: "ing-u3-005",
  kazanim: "E8.3.W1",
  kademe: 0,
  zorluk: 2,
  soru: `**First, wash the tomatoes. - - - -, cut them into pieces. Finally, put them in a bowl.**`,
  gorsel: null,
  secenekler: [
    `Because`,
    `Or`,
    `But`,
    `Then`
  ],
  dogru: 3,
  hatalar: [
    `Neden bağlacı: "because" (çünkü) sıra bildirmez.`,
    `Seçenek bağlacı: "or" (ya da) sıra bildirmez.`,
    `Karşıtlık bağlacı: "but" (ama) bir karşıtlık kurar, sıra bildirmez.`,
    null
  ],
  aciklama: `Sıralı anlatımda "First, Then, Finally" kullanılır.
Adım 1: "First" birinci, "Finally" sonuncu adımdır.
Adım 2: Ortadaki adım için "Then" (sonra) gelir.
Sık yapılan hata: But ya da because gibi bağlaçları sıra bildirir sanmak.
Cevap D.`
},
{
  id: "ing-u3-006",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 2,
  soru: `Read the note.

Dear Ali,
There is some soup in the fridge. Heat it in a pan. Don't use the oven, please.
Mum

**What should Ali do?**`,
  gorsel: null,
  secenekler: [
    `Heat the soup in a pan.`,
    `Bake the soup in the oven.`,
    `Fry the soup in oil.`,
    `Put the soup into the fridge.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Yasağı okumama: annesi "Don't use the oven" diyor.`,
    `Yanlış eylem: not kızartmadan değil, tavada ısıtmadan söz ediyor.`,
    `Zaten olan durumu yapılacak iş sanma: çorba zaten buzdolabında; Ali'den onu ısıtması isteniyor.`
  ],
  aciklama: `Notlarda emir cümleleri yapılacak işi verir: "Heat it in a pan." (Tavada ısıt.) "Don't use the oven." (Fırını kullanma.)
Adım 1: Çorba buzdolabında, tavada ısıtılacak.
Adım 2: Doğru cevap A.
Sık yapılan hata: "Don't" içeren yasak cümlesini okumayıp fırını seçmek.
Cevap A.`
},
{
  id: "ing-u3-007",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 2,
  soru: `Eda has 60 TL. She wants to eat a pizza. The price list is below.

**Which one can she buy?**`,
  gorsel: `<table class="tablo"><tr><th>Item</th><th>Price</th></tr><tr><td>Pizza</td><td>40 TL</td></tr><tr><td>Salad</td><td>25 TL</td></tr><tr><td>Soup</td><td>20 TL</td></tr><tr><td>Ayran</td><td>10 TL</td></tr></table>`,
  secenekler: [
    `a pizza and a salad`,
    `a pizza, a soup and an ayran`,
    `a pizza and an ayran`,
    `a pizza, a salad and an ayran`
  ],
  dogru: 2,
  hatalar: [
    `Toplamı aşma: 40 + 25 = 65 TL; Eda'nın parası 60 TL.`,
    `Toplamı aşma: 40 + 20 + 10 = 70 TL.`,
    null,
    `Toplamı aşma: 40 + 25 + 10 = 75 TL.`
  ],
  aciklama: `Her seçeneğin toplamını hesapla ve 60 TL ile karşılaştır.
Adım 1: A: 40 + 25 = 65. B: 40 + 20 + 10 = 70. D: 40 + 25 + 10 = 75. Hepsi 60'tan fazla.
Adım 2: C: 40 + 10 = 50 TL. Yeter.
Sık yapılan hata: Toplamı hesaplamadan en çok yiyeceği olan seçeneği seçmek.
Cevap C.`
},
{
  id: "ing-u3-008",
  kazanim: "E8.3.R2",
  kademe: 0,
  zorluk: 2,
  soru: `Read the sentences.

Mum gave me a banana. I peeled it and ate the soft fruit inside.

**What does "peeled" mean?**`,
  gorsel: null,
  secenekler: [
    `cut into pieces`,
    `took off the skin`,
    `put into water`,
    `ate quickly`
  ],
  dogru: 1,
  hatalar: [
    `Metinde olmayan işlem: muz parçalara kesilmedi.`,
    null,
    `Metinde olmayan işlem: muz suya konmadı.`,
    `Sözcük anlamını yemeğe bağlama: "peeled" yeme hızını değil, kabuğu çıkarmayı anlatır.`
  ],
  aciklama: `Bağlamdan anlam çıkar: önce "peeled", sonra "ate the soft fruit inside" (içindeki yumuşak meyveyi yedim).
Adım 1: Muzun içindeki meyveye ulaşmak için dışındaki kabuk çıkarılır.
Adım 2: "Peel" kabuğunu soymak demektir.
Sık yapılan hata: Her mutfak fiilini "kesmek" sanmak.
Cevap B.`
},
{
  id: "ing-u3-009",
  kazanim: "E8.3.SI1",
  kademe: 0,
  zorluk: 3,
  soru: `Gizem is talking to her father on the phone.

Gizem: Dad, we have tomatoes and cucumbers for the salad, but we don't have any lettuce or olives.
Dad: OK, I'm at the market now. I'll get them.

**What will Dad buy?**`,
  gorsel: null,
  secenekler: [
    `lettuce and olives`,
    `tomatoes and lettuce`,
    `cucumbers and olives`,
    `tomatoes and cucumbers`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Evde olanı alınacak sanma: domates evde var; marul ise yok.`,
    `Evde olanı alınacak sanma: salatalık evde var; zeytin ise yok.`,
    `Evde olanları seçme: domates ve salatalık zaten evde var.`
  ],
  aciklama: `Önce evde olanı, sonra olmayanı ayır. Baba, olmayanları alacak.
Adım 1: Evde olanlar: tomatoes ve cucumbers.
Adım 2: Olmayanlar: lettuce ve olives ("don't have any").
Adım 3: Baba "I'll get them" (onları alacağım) diyor; "them" olmayanlardır.
Sık yapılan hata: Cümlede önce geçen malzemeleri alınacak sanmak.
Cevap A.`
},
{
  id: "ing-u3-010",
  kazanim: "E8.3.SI1",
  kademe: 0,
  zorluk: 3,
  soru: `Bora: Do you prefer cooking alone or with friends?
Selma: I prefer cooking with friends. - - - -

**Which one completes Selma's answer best?**`,
  gorsel: null,
  secenekler: [
    `It is boring when someone helps me.`,
    `I like to chop everything alone.`,
    `I never cook with my friends.`,
    `We chop, mix and laugh together.`
  ],
  dogru: 3,
  hatalar: [
    `Tercihle çelişme: arkadaşlarıyla pişirmeyi seviyor, yardım almak onu sıkmaz.`,
    `Tercihle çelişme: "alone" (tek başına) seçilmemiş, arkadaşlarla pişirmek seçilmiş.`,
    `Tercihle çelişme: "never" (asla) ile arkadaşlarıyla pişirmediğini söylüyor.`,
    null
  ],
  aciklama: `Tercihten sonra gelen cümle tercihi destekler.
Adım 1: Selma arkadaşlarıyla pişirmeyi tercih ediyor.
Adım 2: Destekleyen cümle arkadaşlarıyla birlikte yapılan işi anlatır: "We chop, mix and laugh together." (Birlikte doğrar, karıştırır, gülerüz.)
Adım 3: A, B ve C tercihle çelişir.
Sık yapılan hata: Tercihi okumadan yalnızca mutfak eylemlerine bakmak.
Cevap D.`
},
{
  id: "ing-u3-011",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 3,
  soru: `Read the text.

Ayşe's mother made strawberry jam. First, she washed the strawberries. Then she put them into a pot with sugar and boiled them for forty minutes. After the jam became cool, she poured it into glass jars.

**When did Ayşe's mother pour the jam into the jars?**`,
  gorsel: null,
  secenekler: [
    `Before she added the sugar.`,
    `After the jam became cool.`,
    `Before the strawberries boiled.`,
    `Just after she washed the fruit.`
  ],
  dogru: 1,
  hatalar: [
    `Sırayı karıştırma: şeker ikinci adımda eklenir, kavanoza koyma en sonda yapılır.`,
    null,
    `Sırayı karıştırma: çilekler kaynadıktan ve soğuduktan sonra kavanoza konur.`,
    `Sırayı karıştırma: çilekleri yıkamak ilk adımdır; kavanoza koyma son adımdır.`
  ],
  aciklama: `Metindeki sıra bağlaçlarını izle: First (yıkadı) → Then (şekerle kaynattı) → After the jam became cool (soğuyunca) kavanoza döktü.
Adım 1: Sıra: yıkamak, şekerle kaynatmak, soğumasını beklemek, kavanoza dökmek.
Adım 2: Kavanoza koyma soğuduktan sonra yapılır.
Sık yapılan hata: "Before" ve "after" sözcüklerini karıştırmak.
Cevap B.`
},
{
  id: "ing-u3-012",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 3,
  soru: `This is a pancake recipe.
**According to the recipe, which one is __NOT__ true?**`,
  gorsel: `<table class="tablo"><tr><th>Step</th><th>Pancakes</th></tr><tr><td>1</td><td>Mix one egg, one glass of milk and one glass of flour.</td></tr><tr><td>2</td><td>Add a little salt.</td></tr><tr><td>3</td><td>Heat some oil in a pan.</td></tr><tr><td>4</td><td>Pour the mixture into the hot pan.</td></tr><tr><td>5</td><td>Fry each side for two minutes.</td></tr></table>`,
  secenekler: [
    `You heat the pan before you pour in the mixture.`,
    `You add the salt in the second step.`,
    `You fry each side for four minutes.`,
    `You need milk and flour for the mixture.`
  ],
  dogru: 2,
  hatalar: [
    `Sırayı yanlış okuma: tava 3. adımda ısınır, karışım 4. adımda dökülür; A doğrudur.`,
    `Adım numarasını yanlış okuma: tuz 2. adımda eklenir; B doğrudur.`,
    null,
    `Malzemeleri yanlış okuma: 1. adımda süt ve un vardır; D doğrudur.`
  ],
  aciklama: `"__NOT__ true" kökünde yanlış olan tek cümleyi bulursun; diğer üçü tarife uyar.
Adım 1: A: tava 3. adımda ısıtılır, 4. adımda karışım dökülür. Doğru.
Adım 2: B: 2. adım tuz ekleme. Doğru. D: 1. adımda süt ve un var. Doğru.
Adım 3: C: her yüz iki dakika kızarır; metinde "four" yanlış. Aranan seçenek budur.
Sık yapılan hata: Sayıyı kontrol etmeden cümlenin geri kalanına bakarak onaylamak.
Cevap C.`
},
{
  id: "ing-u3-013",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 4,
  soru: `Selen wants to make soup. She has 4 potatoes, 2 onions and 2 carrots at home. She doesn't have any tomatoes. The table shows two soup recipes.

**Which soup can Selen make?**`,
  gorsel: `<table class="tablo"><tr><th>Ingredient</th><th>Soup A</th><th>Soup B</th></tr><tr><td>Potatoes</td><td>3</td><td>2</td></tr><tr><td>Onions</td><td>1</td><td>2</td></tr><tr><td>Carrots</td><td>2</td><td>3</td></tr><tr><td>Tomatoes</td><td>0</td><td>1</td></tr></table>`,
  secenekler: [
    `Only Soup A`,
    `Only Soup B`,
    `Both soups`,
    `Neither soup`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Eksik malzemeyi görmeme: B için 3 havuç ve 1 domates gerekir; Selen'de 2 havuç var, domates yok.`,
    `Yalnızca ilk malzemelere bakma: B çorbası için havuç ve domates eksiktir.`,
    `Sayıları karşılaştırmama: A için 3 patates, 1 soğan, 2 havuç gerekir; Selen'de hepsi var.`
  ],
  aciklama: `Her tarif için her malzemeyi evdekiyle karşılaştır; tek bir eksik tarifi eler.
Adım 1: Selen'de 4 patates, 2 soğan, 2 havuç var; domates yok.
Adım 2: Soup A: 3 patates ≤ 4, 1 soğan ≤ 2, 2 havuç ≤ 2, domates 0. Hepsi yeter.
Adım 3: Soup B: 2 patates, 2 soğan yeter ama 3 havuç > 2 ve 1 domates > 0. Eksik.
Adım 4: Yalnızca A yapılabilir.
Sık yapılan hata: Birkaç malzemeyi kontrol edip kalanları görmemek.
Cevap A.`
},
{
  id: "ing-u3-014",
  kazanim: "E8.3.W1",
  kademe: 0,
  zorluk: 4,
  soru: `Here is a recipe for orange juice, but step 3 is missing.
**Which one is the missing step?**`,
  gorsel: `<table class="tablo"><tr><th>Step</th><th>Orange juice</th></tr><tr><td>1</td><td>First, wash the oranges.</td></tr><tr><td>2</td><td>Then cut them in half.</td></tr><tr><td>3</td><td>- - - -</td></tr><tr><td>4</td><td>Finally, pour the juice into a glass.</td></tr></table>`,
  secenekler: [
    `Peel the halves again.`,
    `Add some oil to the halves.`,
    `Slice the halves into pieces.`,
    `Squeeze the halves into a jug.`
  ],
  dogru: 3,
  hatalar: [
    `Mantık dışı adım: yarımlar zaten kesilmiş; yeniden soymak meyve suyu çıkarmaz.`,
    `Mantık dışı adım: meyve suyuna yağ eklenmez ve bu adım suyu elde etmez.`,
    `Suyu elde etmeyen adım: dilimlemek meyve suyunu çıkarmaz; 4. adımda dökülecek suyun önce sıkılarak elde edilmesi gerekir.`,
    null
  ],
  aciklama: `Eksik adım, 4. adımdaki "the juice" (meyve suyu) için gereken şeyi üretmelidir.
Adım 1: 4. adımda meyve suyu bardağa dökülüyor. Önce meyve suyunun elde edilmesi gerekir.
Adım 2: Yarım portakaldan su "squeeze" (sıkmak) ile çıkar: "Squeeze the halves into a jug."
Adım 3: Diğerleri suyu elde etmez.
Sık yapılan hata: 2. adımdaki "kes" eylemine benzeyen "slice" seçeneğini seçmek.
Cevap D.`
},
{
  id: "ing-u3-015",
  kazanim: "E8.3.R1",
  kademe: 0,
  zorluk: 4,
  soru: `Read the conversation.

Arda: Do you prefer baking or frying?
Lena: Baking. I bake bread every Sunday.
Arda: I prefer frying. I fry potatoes with a lot of salt.
Lena: Fried potatoes are tasty, but they have a lot of oil in them. So I never fry food.
Arda: I don't bake bread, but I love eating it.

**According to the conversation, which one is true?**`,
  gorsel: null,
  secenekler: [
    `Lena fries potatoes on Sundays.`,
    `Arda bakes bread at home.`,
    `Lena never fries food.`,
    `Arda doesn't like eating bread.`
  ],
  dogru: 2,
  hatalar: [
    `Pazar günü yaptığını karıştırma: Lena pazar günleri ekmek pişirir; patates kızartmaz.`,
    `Kimin yaptığını karıştırma: Arda "I don't bake bread" diyor; ekmeği Lena pişiriyor.`,
    null,
    `Metne ters düşme: Arda ekmeği pişirmez ama yemeyi sever ("I love eating it").`
  ],
  aciklama: `Konuşma sorularında her kişiyi ayrı izle: kim ne yapıyor, kim ne yapmıyor?
Adım 1: Lena: kek ya da ekmek pişirmeyi tercih ediyor, pazar günleri ekmek pişirir ve "I never fry food" der (hiç kızartma yapmaz).
Adım 2: Arda: kızartmayı tercih eder, ekmeği pişirmez ama sever.
Adım 3: A yanlış, çünkü Lena kızartmıyor. B yanlış, çünkü Arda ekmek pişirmiyor. D yanlış, çünkü Arda ekmeği seviyor.
Adım 4: C konuşmadaki "I never fry food" cümlesiyle uyuşur.
Sık yapılan hata: İki kişinin cümlelerini karıştırmak. Her cümlenin başındaki ismi izle.
Cevap C.`
}
);
