window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["carpanlar-katlar"] = {
  kazanimlar: ["M.8.1.1.1", "M.8.1.1.2", "M.8.1.1.3"],
  giris: "Bu konu, bir sayıyı oluşturan asal yapı taşlarını bulmayı ve iki sayının ortak bölenleriyle ortak katlarını kullanmayı öğretir. Sorular günlük bir durum anlatır; önce **EBOB mu, EKOK mu** olduğuna karar verir, sonra son adımı atlamadan hesaplarsın.",
  bolumler: [
    {
      baslik: "Çarpan, kat ve asal sayı",
      maddeler: [
        "**Çarpan (bölen):** Bir sayıyı kalansız bölen pozitif tam sayıdır: 18'in çarpanları 1, 2, 3, 6, 9, 18. **Kat:** Bir sayının 1, 2, 3, … ile çarpımıdır: 7'nin katları 7, 14, 21, …",
        "**Çarpanları çiftler hâlinde bul:** Çarpımı sayıyı veren ikilileri 1'den başlayarak yaz, ikililer tekrar edince dur. 50 → 1 · 50, 2 · 25, 5 · 10; çarpanlar 1, 2, 5, 10, 25, 50. Eş ikilide (7 · 7) 7 bir kez sayılır.",
        "**Asal sayı:** 1'den büyük olup yalnızca 1'e ve kendisine bölünen sayıdır: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … 100'den küçük bir sayının asal olup olmadığını anlamak için onu 2, 3, 5 ve 7'ye bölmeyi dene; hiçbirine bölünmüyorsa asaldır (sayının kendisi 2, 3, 5 ya da 7 ise zaten asaldır).",
        "Bölünebilme ipucu: son rakamı çiftse 2'ye, rakamları toplamı 3'ün katıysa 3'e, sonu 0 ya da 5 ise 5'e bölünür."
      ],
      dikkat: [
        "**1 asal değildir** (tek böleni vardır). **2, tek çift asal sayıdır.** Her tek sayı da asal değildir: 9, 15, 49, 57 gibi.",
        "**1'i ve sayının kendisini unutma.** 50'nin çarpanlarını 2, 5, 10, 25 diye yazarsan 4 bulursun; doğrusu 6'dır.",
        "**Koşulu en sonda uygula.** Önce çarpan çiftlerini yaz, sonra uymayanları ele. “En fazla 10” 10'u kapsar, “10'dan az” kapsamaz."
      ]
    },
    {
      baslik: "Asal çarpanlara ayırma",
      maddeler: [
        "1'den büyük her doğal sayı asal sayıların çarpımı olarak tek bir biçimde yazılır; buna **asal çarpanlarına ayırma** denir.",
        "**Bölen merdiveni:** Sayıyı en küçük asaldan başlayarak bölebildiğin kadar böl, bölünmeyince sıradaki asala geç, 1 kalınca dur. Sağ sütunun çarpımı sayıyı verir.",
        "**Çarpan ağacı:** Sayıyı iki çarpana ayır, asal olmayan dalları ayırmayı sürdür. Her sayı altındaki ikilinin **çarpımıdır**; hangi ikiliyle başlarsan başla uçlarda aynı asallar çıkar.",
        "Tekrarlanan asalları **üslü** yaz: 2 · 2 · 3 · 3 · 3 · 5 = 2^{2} · 3^{3} · 5.",
        "**Farklı asal çarpanlar** tekrarlar sayılmadan yazılır: 2^{2} · 3^{3} · 5 sayısının farklı asal çarpanları 2, 3 ve 5'tir. Her çarpanı da bu asallardan, üslerini aşmadan kurulur: 2 · 3^{2} = 18 çarpandır, 7 çarpanı olamaz.",
        "**Çarpan sayısı için üsleri birer artırıp çarp:** 2^{2} · 3^{3} · 5 sayısının (2 + 1) · (3 + 1) · (1 + 1) = 24 pozitif tam sayı çarpanı vardır. Çarpan çiftleri bunu doğrulamak için kullanılır."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Sayı</th><th>Asal bölen</th></tr><tr><td>540</td><td>2</td></tr><tr><td>270</td><td>2</td></tr><tr><td>135</td><td>3</td></tr><tr><td>45</td><td>3</td></tr><tr><td>15</td><td>3</td></tr><tr><td>5</td><td>5</td></tr><tr><td>1</td><td>–</td></tr></table>",
      ornekler: [
        "Merdivene göre 540 = 2 · 2 · 3 · 3 · 3 · 5 = 2^{2} · 3^{3} · 5."
      ],
      dikkat: [
        "**Ayırmayı yarım bırakma.** 198 = 2 · 9 · 11 yazılışında 9 asal değildir; doğrusu 2 · 3^{2} · 11'dir.",
        "**Sağlama yap.** Bulduğun çarpımı hesapla: 2 · 3 · 11 = 66 eder, 198 etmez. Üsler yer değiştirirse de değer bozulur: 2^{3} · 3 = 24 ama 2 · 3^{3} = 54."
      ]
    },
    {
      baslik: "EBOB ve EKOK nasıl bulunur?",
      maddeler: [
        "**EBOB (en büyük ortak bölen):** İki sayıyı da kalansız bölen sayıların en büyüğüdür. **EKOK (en küçük ortak kat):** İki sayının da katı olan pozitif sayıların en küçüğüdür.",
        "Asal çarpanlarla: **EBOB** için yalnızca **ortak** asalları **küçük** üsleriyle çarp. **EKOK** için **bütün** asalları **büyük** üsleriyle çarp.",
        "EBOB küçük sayıdan büyük, EKOK büyük sayıdan küçük olamaz. Bir sayı ötekini bölüyorsa EBOB küçük sayı, EKOK büyük sayıdır: EBOB(9, 45) = 9 ve EKOK = 45.",
        "Ortak bölenler EBOB'un bölenleri, ortak katlar EKOK'un katlarıdır: “kaç ortak böleni var?” sorusunda EBOB'un çarpanlarını say.",
        "İki sayının çarpımı, EBOB'ları ile EKOK'larının çarpımına eşittir: a · b = EBOB · EKOK.",
        "Sayılar EBOB'un katı, EKOK'un çarpanıdır; EKOK'ta olup bir sayıda bulunmayan asal, öteki sayıdan gelir."
      ],
      ornekler: [
        "**Çözümlü örnek:** 45 = 3^{2} · 5 ve 75 = 3 · 5^{2}. EBOB = 3 · 5 = 15 (küçük üsler), EKOK = 3^{2} · 5^{2} = 225 (büyük üsler). Sağlama: 45 · 75 = 15 · 225."
      ],
      dikkat: [
        "**Çarpım her zaman EKOK değildir.** 14 · 21 = 294 bir ortak kattır ama EKOK(14, 21) = 42'dir. Çarpım, ancak sayılar aralarında asalsa EKOK olur."
      ]
    },
    {
      baslik: "Problem EBOB mu, EKOK mu?",
      maddeler: [
        "Karar veren, sorudaki **eylemdir**: eşit parçalara **bölüyorsan** EBOB, tekrar eden olaylar için buluşma anı arıyorsan EKOK.",
        "EBOB çoğu zaman **bir parçanın büyüklüğüdür**; soru parça ya da kişi sayısı istiyorsa bir adım daha at: toplam ÷ EBOB. EKOK ise **ilk buluşmaya kadar geçen süredir**; soru saati ya da gün sayısını istiyorsa çevirmeyi yap.",
        "**İki olay aynı anda başlıyorsa** bir süre içinde kaç kez birlikte olunduğunu bulmak için süreyi EKOK'a böl; başlangıç anı da sayılıyorsa **1 ekle**.",
        "**Aynı anda başlamıyorlarsa** önce ilk ortak anı bul; sonraki ortak anlar onun üstüne EKOK eklenerek gelir. 4. günden başlayıp 6 günde bir, 6. günden başlayıp 8 günde bir yapılan iki görev ilk kez 22. günde çakışır; sonrakiler 46 ve 70'tir. Sayma aralığı ortak bir anla başlamıyorsa anları listele, körü körüne bölme.",
        "**En az birinde olanları sayma:** Bir aralıkta a'nın ya da b'nin katı olanları sayarken ikisine birden uyanları bir kez say: (a'nın katları) + (b'nin katları) − (EKOK'un katları). 1-60 arasında 4'ün ya da 6'nın katı olan 15 + 10 − 5 = 20 sayı vardır.",
        "Gün sorularında gün sayısını 7'ye böl, kalana bak; 7 gün sonra yine aynı gündür.",
        "**Kesim ve dikim:** Düz bir ipten n parça çıkarmak için n − 1 kesim yeter. İki ucuna da direk dikilen açık yolda direk sayısı aralık sayısından 1 fazla, kapalı bir hatta ise aralık sayısına eşittir.",
        "**Kalanlı sorular:** 10'a da 15'e de bölününce 4 artan sayı, “30'un katının 4 fazlası”dır: 34, 64, 94, … Kalanlar farklı ama tam bölünmeye eksik aynıysa (10'a 7, 15'e 12 kalan) sayı “30'un katının 3 eksiği”dir: 27, 57, 87, …"
      ],
      tablo: "<table class=\"tablo\"><tr><th></th><th>EBOB</th><th>EKOK</th></tr><tr><td>Eylem</td><td>Bölüyorsun</td><td>Buluşturuyorsun</td></tr><tr><td>Tipik kök</td><td>“en uzun parça”, “en çok grup”</td><td>“ilk kez birlikte”, “en az kaç tane”</td></tr><tr><td>Sonuç</td><td>Sayılardan büyük değil</td><td>Sayılardan küçük değil</td></tr><tr><td>Durum</td><td>Kesme, eşit gruplar</td><td>Servisler, ışıklar</td></tr></table>",
      ornekler: [
        "**Çözümlü örnek:** Artmadan eşit ve en uzun parçalara bölmede parça boyu EBOB'tur: EBOB(54, 72) = 18. Sonra bölmeyi sürdür: 54 ÷ 18 = 3, 72 ÷ 18 = 4; toplam 7 parça.",
        "EKOK(40, 50) = 200 olduğundan 40 ve 50 saniyelik iki döngü, 200 saniyede yani 3 dakika 20 saniyede bir çakışır. Sorulan birime çevirmeyi unutma."
      ],
      dikkat: [
        "**Ara sonucu cevap sanma.** EBOB ya da EKOK bulunca durma; kökü bir daha oku: “kaç parça”, “kaç kişi”, “saat kaçta”?",
        "**Başlangıcı soruya göre say.** Birlikte başlayan ve 12 dakikada bir çakışan iki döngü bir saatte 60 ÷ 12 = 5 kez daha çakışır; başlangıç da sayılırsa 6 kez."
      ]
    },
    {
      baslik: "Aralarında asal sayılar",
      maddeler: [
        "İki sayının 1'den başka ortak böleni yoksa, yani EBOB'ları 1 ise bu sayılar **aralarında asaldır**. Denetlemek için ikisini asal çarpanlarına ayır; ortak asal yoksa aralarında asaldırlar.",
        "Sayıların asal olması **gerekmez**: 8 ile 27 asal değildir ama aralarında asaldır. Birinin asal olması da yetmez: 5 ile 35'in ikisi de 5'e bölünür.",
        "1, her sayıyla aralarında asaldır. Ardışık iki sayı (ör. 35 ve 36) her zaman aralarında asaldır.",
        "Aralarında asal iki sayının EBOB'u 1, EKOK'u çarpımlarıdır: EKOK(7, 10) = 70.",
        "İki sayı EBOB'larına bölünürse bölümler aralarında asal olur: EBOB(36, 48) = 12'dir; 3 ile 4 aralarında asaldır.",
        "Bir kesir, payı ile paydası aralarında asalsa **en sade** hâldedir: [[14|25]] sadeleşmez."
      ],
      dikkat: [
        "**“Aralarında asal” ile “asal”ı karıştırma.** En sık hata budur: 25 ile 36 aralarında asaldır, 2 ile 6 ise değildir.",
        "**Yalnızca 2'ye bakıp durma.** Biri tek biri çift diye karar verme: 14 ile 49'un ikisi de 7'ye bölünür. İki tek sayı da ortak bölen taşır: 15 ile 33 için bu bölen 3'tür."
      ]
    }
  ],
  lgs: [
    "Günlük hayat senaryosu verilir (kesme, gruplama, ışıklar, servisler); önce EBOB mu EKOK mu gerektiğini seçer, sonra bir adım daha atıp parça sayısını ya da saati bulursun. Çeldiriciler **ara sonuçtur**.",
    "Koşullu sayma sorularında bir sayının kaç farklı biçimde eşit gruplara ayrılabileceği sorulur: çarpan çiftlerini yaz, koşulları uygula.",
    "Bilinmeyen bir sayı ipuçlarıyla aranır: asal çarpanları, çarpan sayısı, bir aralıkta bulunması. Şıkları ipuçlarıyla ele.",
    "“Kaç farklı değer alabilir”, “en az”, “en çok” kökleri sıktır; listenin uçlarını denetle."
  ],
  yokla: [
    { soru: "45'in kaç pozitif çarpanı vardır?", cevap: "6 tane. 45 = 3^{2} · 5 olduğundan (2 + 1) · (1 + 1) = 6; çarpanlar 1, 3, 5, 9, 15, 45." },
    { soru: "İki yazıcı 8 ve 14 dakikada bir rapor çıkarıyor; ikisi 13.00'te birlikte çıkardı. Bir sonraki ortak çıktı saat kaçtadır?", cevap: "13.56. Buluşma sorusudur: EKOK(8, 14) = 56 dakika." },
    { soru: "EBOB'u 6, EKOK'u 90 olan iki sayının çarpımı kaçtır?", cevap: "540. İki sayının çarpımı EBOB · EKOK'a eşittir: 6 · 90 = 540." },
    { soru: "16 ile 45 aralarında asal mıdır?", cevap: "Evet. 16 = 2^{4} ve 45 = 3^{2} · 5; ortak asal çarpanları yok. İkisinin de asal olmaması sonucu değiştirmez." }
  ]
};
