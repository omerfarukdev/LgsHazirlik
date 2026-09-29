window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["veri-analizi"] = {
  kazanimlar: ["M.8.4.1.1", "M.8.4.1.2"],
  giris: "Veri analizi, grafiklerden bilgi çıkarmak ve veriyi uygun grafikle göstermektir. Sınavda en fazla üç veri grubunu gösteren sütun ve çizgi grafiklerini yorumlaman, gösterimler arasında dönüşüm yapman ve veriye uygun grafiği seçmen istenir. Bu özetten sonra ekseni doğru okuyacak, daire grafiğinde açı, yüzde ve sayı arasında rahatça geçiş yapacaksın.",
  bolumler: [
    {
      baslik: "Grafik okumanın dört adımı",
      maddeler: [
        "**1. Eksenler:** Her eksende ne var, birimi ne (kişi, kg, bin adım)?",
        "**2. Ölçek:** Ardışık iki çizgi arası kaç birim? Her çizgide sayı yazmayabilir; **etiketsiz ara çizgilerin** değerini ölçekten bul: 100 ile 200 arasında tek ara çizgi varsa o 150'dir.",
        "**3. Lejant (açıklama, gösterge):** Hangi renk ya da çizginin hangi veri grubuna ait olduğunu bul. Sınavdaki grafiklerde en fazla üç veri grubu olur.",
        "**4. Kök:** Tek değer mi, fark mı, toplam mı, oran (kaç katı) mı isteniyor? Ara sonuçta durma."
      ],
      dikkat: [
        "**Ara çizgiyi en yakın etikete yuvarlama.** Önce ölçeğin kaçar kaçar arttığını bul.",
        "**En uzun sütun, istenen sütun olmayabilir.** Önce lejanttan grubu, sonra kategoriyi bul.",
        "**“Kaç katı” ile “kaç fazla” farklıdır.** 30, 15'in 2 katıdır; 17, 15'ten 2 fazladır."
      ]
    },
    {
      baslik: "Sütun ve çizgi grafiğini yorumlama",
      maddeler: [
        "**Sütun grafiği** ayrı kategorileri karşılaştırır. Toplam verildiyse silinmiş sütunu bulursun: eksik değer = toplam − görünen sütunların toplamı.",
        "**Çizgi grafiği** zamanla değişimi gösterir. Yükselen parça artış, alçalan parça azalış, **yatay parça değişmeme** demektir. Bir parçanın süresi, iki ucundaki zamanların farkıdır; nokta sayısı değildir.",
        "Aralıklar eşitse değişimin büyüklüğünü parçanın **dikliği** gösterir; kesin değer için iki noktanın farkını al. −2'den 3'e değişim 3 − (−2) = 5'tir. Saatlik ortalama değişim = toplam değişim ÷ süre.",
        "İki çizgi bir ölçüm noktasında **kesişiyorsa** o anda iki değer eşittir. Çizgiler kesişip yer değiştirirse önde olan grup da değişir.",
        "**Birikimli grafik** o ana kadarki toplamı gösterir, hiç alçalmaz. Bir haftada eklenen, o haftanın noktası ile öncekinin farkıdır: kumbarada 40 TL'den 70 TL'ye çıkan haftada 30 TL atılmıştır. Başlangıçta hiçbir şey yoksa ilk haftada eklenen, ilk noktanın kendi değeridir. Günlük değerlerden o güne kadarki toplamı sen de hesaplayabilirsin.",
        "Arada ekleme de yapıldıysa (cüzdana para eklenmesi gibi) ve ekleme yapılan aralıkta harcama olmadıysa harcanan miktar, ilk ve son değerin farkı değil, **azalışların toplamıdır**.",
        "Her adımda aynı artış varsa gidişi sürdür: her ay 50 artıp 300 olan sayı iki ay sonra 400'dür."
      ],
      dikkat: [
        "**Noktanın yüksekte olması artış demek değildir.** Her noktayı bir öncekiyle karşılaştır.",
        "**Büyük değişim artış olmak zorunda değildir.** En dik parça bir düşüş olabilir.",
        "**Birikimli grafikte en yüksek nokta, en çok eklenen günü göstermez.** Her günün eklenenini bul: en dik çıkan parça en çok ekleneni gösterir; ilk günün değerini de karşılaştırmaya kat."
      ]
    },
    {
      baslik: "İki ya da üç veri grubunu karşılaştırma",
      maddeler: [
        "Kök ya **aynı kategoride gruplar arası** farkı (bir günde A ile B) ya da **bir grubun zaman içindeki** değişimini ister; hangisi olduğunu belirle.",
        "Toplam istenirse her kategoride **bütün grupları** topla; bir grubun en büyük değeri toplamın en büyük olduğunu göstermez.",
        "Farkları toplarken yönü gözet: B'nin önde olduğu günlerin farkları A'nın lehine eklenmez, çıkarılır.",
        "**Pay** için bütünü doğru kur: “evet” ve “hayır” diyenler ayrı sütundaysa bütün, ikisinin toplamıdır. Sayısı en çok olan grubun payı en büyük olmak zorunda değildir.",
        "Bir grafik miktarı, öteki fiyatı gösteriyorsa **gelir = miktar · fiyat**; en çok satılan hafta en çok gelir getiren hafta olmayabilir."
      ],
      dikkat: [
        "**Eşitlik “fazla” değildir.** Eşit olan günü “fazla” sorusunda sayma.",
        "**Tek örnekten genelleme yapma.** “Her ayda” diyen yargıyı her kategoride denetle."
      ]
    },
    {
      baslik: "Hangi grafik ne zaman uygun?",
      maddeler: [
        "**Daire grafiği** için parçalar toplanınca anlamlı bir bütün etmeli, her birim tek bir parçada olmalıdır. Parça sayım (kişi) da ölçüm (alan, para) da olabilir.",
        "Dört dağın yükseklikleri toplanınca anlamlı bir bütün etmez; daire grafiğine değil sütun grafiğine uygundur.",
        "Zaman sözcüğü tek başına çizgi grafiği gerektirmez: bir yılda doğan kuzuların mevsimlere göre sayıları bir bütünün parçasıdır, daireye uygundur.",
        "Sırası olmayan kategoriler (meslekler, müzik türleri) çizgi grafiğiyle gösterilmez; çizgi, aralarında bir gidiş varmış izlenimi verir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Gösterim</th><th>Üstün yönü</th><th>Zayıf yönü</th></tr><tr><td>Sütun grafiği</td><td>Kategorileri karşılaştırır; yakın değerlerden hangisinin büyük olduğunu açıkça gösterir.</td><td>Payı ve toplamı doğrudan göstermez; eksen 0'dan başlamazsa farkları olduğundan büyük gösterir.</td></tr><tr><td>Çizgi grafiği</td><td>Zamanla değişimi ve gidişi tek bakışta gösterir.</td><td>Sırasız kategorilerde anlamsızdır; payı göstermez.</td></tr><tr><td>Daire grafiği</td><td>Parçaların bütündeki payını ve birbirine oranını gösterir.</td><td>Toplam yazılmazsa sayıyı vermez; yakın dilimler zor ayırt edilir; zamanla değişimi göstermez.</td></tr><tr><td>Tablo</td><td>Kesin değerleri verir.</td><td>Gidişi ve payı tek bakışta göstermez.</td></tr></table>",
      dikkat: [
        "**Ne toplam ne de dilimlerle ilgili bir sayı (bir dilimin sayısı, iki dilimin toplamı ya da farkı) verilmişse daire grafiğinden kişi sayısı çıkmaz;** yalnızca pay ve oran bulunur: 120°'lik dilim 60°'lik dilimin 2 katı kişidir."
      ]
    },
    {
      baslik: "Daire grafiği: yüzde, açı ve sayı",
      maddeler: [
        "Tam daire 360°'dir ve bütünü gösterir. **Merkez açı = [[parça|bütün]] · 360°.** Bir birime düşen açı 360° ÷ toplam, 1°'ye düşen birim sayısı ise toplam ÷ 360'tır; ikisini karıştırma.",
        "**Yüzdeden açıya:** %1 = 3,6°, %10 = 36°, %25 = 90°. **Eksik dilim:** 360° − bilinen açılar (yüzdeyle verildiyse %100 − bilinen yüzdeler).",
        "Toplam yerine bir dilimin sayısı ya da iki dilimin toplamı veya farkı verilirse orantı kur: o dilimin açısı ya da iki açının toplamı veya farkı o sayıya karşılık gelir. Bilgi dolaylı da olabilir (dilimlerden elde edilen toplam gelir gibi); yine önce 1°'ye kaç birim düştüğünü bul.",
        "**Çözümlü örnek:** Bir mandırada satılan peynirin %30'u beyaz, %45'i kaşar, gerisi tulumdur; kaşar beyazdan 45 kg fazladır. Adım 1: Tulum %100 − (%30 + %45) = %25'tir. Adım 2: Fark %15 = 45 kg, yani %1 = 3 kg. Adım 3: Toplam 300 kg, tulum 25 · 3 = **75 kg**.",
        "**Toplam kaç olabilir?** Dilimlerdeki sayılar doğal sayıysa bir kişiye düşen açı bütün açıları tam böler. Açılar 60°, 100°, 200° ise bu açı en fazla EBOB = 20°'dir; en az 360 ÷ 20 = 18 kişi vardır, toplam 18'in katıdır.",
        "Toplamları farklı iki daire grafiğinde açılar doğrudan karşılaştırılmaz: 90°'lik dilim 200 kişilik okulda 50, 400 kişilik okulda 100 kişidir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Merkez açı</th><th>Dairenin kaçta kaçı</th><th>Yüzde</th></tr><tr><td>180°</td><td>1/2</td><td>%50</td></tr><tr><td>120°</td><td>1/3</td><td>yaklaşık %33,3</td></tr><tr><td>90°</td><td>1/4</td><td>%25</td></tr><tr><td>72°</td><td>1/5</td><td>%20</td></tr><tr><td>60°</td><td>1/6</td><td>yaklaşık %16,7</td></tr><tr><td>45°</td><td>1/8</td><td>%12,5</td></tr><tr><td>36°</td><td>1/10</td><td>%10</td></tr><tr><td>30°</td><td>1/12</td><td>yaklaşık %8,3</td></tr></table>",
      dikkat: [
        "**Açı, kişi sayısı değildir.** 90°'lik dilim 90 kişi değil, toplamın dörtte biridir.",
        "**360°'yi toplama böl, dilime değil.** 30 kişilik grupta bir kişi 12°'dir; 5 kişilik dilim 60° eder.",
        "**Toplam 100 değilse sayıyı yüzde sanma.** 80 kişinin 20'si %25'tir.",
        "**Pay ile sayı farklıdır.** Toplam büyürse bir dilimin payı küçülürken sayısı artabilir; bir grubun sayısı 2 katına çıkınca açısı 2 katına çıkmayabilir."
      ]
    },
    {
      baslik: "Gösterimler arası dönüşüm",
      maddeler: [
        "**Sütun → daire:** Bütün sütunları topla, 360°'yi toplama böl, her sütunu bu açıyla çarp. Sağlama: açılar toplamı 360°.",
        "**Daire → sütun:** Her dilimi sayıya çevir; sütun boyu yüzde ya da açı değil, sayıdır. Eksende bir aralık 15 birimse 60 birimlik sütun 4 aralıktır.",
        "**Grafik ↔ tablo:** Değerleri eksenden tek tek oku, sırayı koru. Doğru grafikte hem kategorilerin yeri hem ölçek doğrudur; sütunların biçimi doğru ama eksendeki sayılar yanlışsa grafik yanlıştır.",
        "İki gösterim aynı veriyi veriyorsa değeri ve açısı bilinen bir kategori, bir birimin kaç derece olduğunu söyler; eksik ya da yanlış sütunu böyle bulursun.",
        "Daire grafiği yalnızca bir alt grubu (örneğin yalnızca sabah gelen müşterileri) gösterebilir; bütün, o alt grubun toplamıdır.",
        "**Yanıltıcı grafik:** Dikey eksen 30'dan başlarsa 40 ve 60 değerli sütunlar 3 kat farklı görünür; gerçek oran 60 ÷ 40 = 1,5'tir. Oranı sütun boyundan değil, eksendeki sayılardan hesapla."
      ],
      dikkat: [
        "**Bir dilime ekleme yapınca toplam da artar.** Öteki dilimler 90 kişiyse ve hedef dilim 90° olacaksa ötekiler bütünün dörtte üçüdür; hedef dilim 90 ÷ 3 = 30 kişi olmalıdır."
      ]
    },
    {
      baslik: "Ortalama, ortanca, tepe değer, açıklık, yüzde değişim",
      maddeler: [
        "**Aritmetik ortalama** = toplam ÷ veri sayısı. Eksik değer = ortalama · veri sayısı − bilinenlerin toplamı.",
        "Ortalamayla ilgili koşulu toplama çevir: dört değerin ortalaması en az 15 olacaksa toplam en az 4 · 15 = 60 olmalıdır. Veri sayıları eşitse ortalamaları karşılaştırmak yerine toplamları karşılaştırabilirsin.",
        "**Ortanca:** sıralanmış verinin ortasındaki değer (veri sayısı çiftse ortadaki ikisinin ortalaması). **Tepe değer:** en çok tekrar eden değer. **Açıklık:** en büyük − en küçük; dalgalanmayı gösterir.",
        "**Sıklık grafiği:** Yatay eksen değeri, dikey eksen o değeri kaç kişinin verdiğini gösterir. 0 kitap okuyan 4, 1 kitap 6, 2 kitap 3, 3 kitap 2 öğrenci varsa tepe değer 1'dir (6 değil); 15 öğrencinin 8.'si ortancadır, o da 1'dir. Toplam kitap 0 · 4 + 1 · 6 + 2 · 3 + 3 · 2 = 18.",
        "**Yüzde değişim** = [[değişim|eski değer]] · 100. 60'tan 75'e çıkış %25, 8'den 12'ye çıkış %50'dir; miktarca büyük artış yüzdece büyük olmayabilir."
      ],
      dikkat: [
        "**Değişimi yeni değere bölme.** 30'dan 24'e düşüş [[6|24]] = %25 değil, [[6|30]] = %20'dir.",
        "**Eksik değer ortalamaya eşit olmak zorunda değildir.** Ortalamadan büyük de küçük de olabilir; onu toplamdan bul.",
        "**Sınırı kontrol et.** “Fazla”, “az”, “altında”, “üstünde” sınırı kapsamaz; “arasında” da sınırların dâhil olduğu yazılmadıkça kapsamaz. “En az”, “en fazla”, “ya da daha fazla” kapsar. “Azalmadı”, “arttı” demek değildir; sayı aynı kalmış olabilir."
      ]
    }
  ],
  lgs: [
    "Sütun ya da çizgi grafiğinde fark, toplam veya “kaç gün fazladır” sorulur; çeldiriciler ara sonuçtan, ters okunan lejanttan ve eşit günden gelir.",
    "Daire grafiğiyle toplam, bir dilimin sayısı ya da iki dilimin farkı verilir, başka bir dilim istenir. Tuzak, açıyı sayı ya da farkı dilimin kendisi sanmaktır.",
    "Aynı veri iki gösterimle verilir; yanlış çizilen sütun, eksik dilim ya da uygun grafik sorulur. Zor sorulara ortalama ya da yüzde koşulu eklenir; sınırın dâhil olup olmadığı cevabı değiştirir."
  ],
  yokla: [
    { soru: "Dikey eksende yalnızca 0, 30, 60 ve 90 yazıyor; her iki etiket arasında iki ara çizgi var. 60'ın üstündeki ilk ara çizgi hangi değeri gösterir?", cevap: "70. 30 birimlik aralık üç eşit parçaya bölünmüştür; her parça 10 birimdir." },
    { soru: "Bir ankete katılan 40 kişiden 8'i “evet” demiştir. Daire grafiğinde “evet” diliminin merkez açısı kaçtır?", cevap: "72°. 8, 40'ın beşte biridir; 360°'nin beşte biri 72°'dir." },
    { soru: "Bir gölün son on yıldaki su seviyesi hangi grafikle gösterilmelidir? Daire grafiği neden uygun değildir?", cevap: "Çizgi grafiğiyle; zamanla değişimi en iyi o gösterir. Yılların su seviyeleri toplanınca anlamlı bir bütün etmez." },
    { soru: "Bir daire grafiğinde A dilimi 110°, B dilimi 50°'dir ve A'daki kişiler B'dekilerden 18 fazladır. Toplam kaç kişi vardır?", cevap: "108. Aradaki 60° fark 18 kişidir; 360° bunun 6 katıdır: 6 · 18 = 108." }
  ]
};
