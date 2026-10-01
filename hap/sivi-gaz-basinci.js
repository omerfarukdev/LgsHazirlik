window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["sivi-gaz-basinci"] = {
  kazanimlar: ["F.8.3.1.2", "F.8.3.1.3"],
  giris: "Sıvılar ve gazlar da basınç uygular. Sınavda hesap yapmazsın; sıvı basıncını **neyin değiştirip neyin değiştirmediğini** bilmen, bunu deneyle sınaman ve bileşik kapları, açık hava basıncını, hidrolik sistemleri açıklaman istenir. Bu özetten sonra bir düzenekteki basınçları karşılaştırabileceksin.",
  bolumler: [
    {
      baslik: "Sıvı basıncı neye bağlıdır?",
      maddeler: [
        "**Sıvı basıncı**, sıvının ağırlığından doğar. **Basınç**, birim yüzeye dik etki eden kuvvettir.",
        "Sıvı basıncı iki değişkene bağlıdır: **derinlik** ve **sıvının cinsi**. Derinlik, sıvının açık yüzeyinden noktaya kadar **aşağı doğru** ölçülür; derinlik arttıkça basınç artar.",
        "**Yoğunluk**, bir maddenin birim hacminin kütlesidir. Aynı derinlikte yoğun sıvının basıncı büyüktür. Zeytinyağı, ayçiçek yağı ve alkol sudan daha az yoğun; tuzlu su ve gliserin sudan daha yoğundur.",
        "**Çözümlü örnek:** 1. sıvı 2. sıvıdan yoğundur, ama ne kadar yoğun olduğu bilinmiyor. A noktası 2. sıvıda 16 cm; B ve C 1. sıvıda 16 cm ve 8 cm derinliktedir. Adım 1: A ile B aynı derinlikte, B'nin sıvısı yoğun; B'nin basıncı büyüktür. Adım 2: B ile C aynı sıvıda, B daha derin; B'nin basıncı büyüktür. Adım 3: A ile C'de etkenler ters yönde (A daha derin, C'nin sıvısı daha yoğun); hangisinin büyük olduğu **kesin söylenemez**. Etkenler aynı yönde olsaydı sonuç kesin olurdu."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Değişken</th><th>Sıvı basıncını değiştirir mi?</th></tr><tr><td>Derinlik</td><td><strong>Evet</strong>: artarsa basınç artar</td></tr><tr><td>Sıvının cinsi (yoğunluk)</td><td><strong>Evet</strong>: aynı derinlikte yoğun sıvıda büyüktür</td></tr><tr><td>Kabın şekli, genişliği, taban alanı</td><td>Hayır</td></tr><tr><td>Sıvının miktarı (hacmi)</td><td>Hayır</td></tr><tr><td>Yön, yatay konum, süre</td><td>Hayır</td></tr></table>",
      dikkat: [
        "**Derinliği tabandan ölçme.** Aynı kapta tabandan daha yüksekte duran nokta yüzeye daha yakındır, basıncı daha küçüktür.",
        "**Derinliği noktanın tam üstündeki sıvıya göre ölçme.** Derinlik, sıvının açık yüzeyinin hizasından ölçülür. Kapalı bir tavanın altında kalan noktada da basınç sıfır olmaz. Aynı sıvıda aynı yatay düzeydeki noktaların basınçları, üstlerindeki sıvı ne kadar olursa olsun eşittir.",
        "**“Çok su, çok basınç” yanlıştır.** Eşit miktarda su dar kapta yükseğe çıkar, geniş kapta alçakta kalır; eşit miktar, eşit derinlik demek değildir."
      ]
    },
    {
      baslik: "Sıvı basıncı her yöne etki eder",
      maddeler: [
        "Sıvılar akışkandır; kabın **tabanına**, **yan yüzeylerine**, kapalı bir kabın **tavanına** ve içindeki cisimlere her yönden basınç uygular. Aynı derinlikte basınç **her yönde eşittir**.",
        "**Delikli kap:** Su en derindeki delikten en güçlü fışkırır. Aynı derinlikteki deliklerden, farklı yüzlerde olsalar bile, su aynı güçte çıkar. Kap boşaldıkça deliklerin derinliği azalır, fışkırma zayıflar.",
        "Baraj duvarının tabanda kalın, derine inen dalış araçlarının gövdesinin sağlam yapılması ve dalgıcın derinde kulaklarında baskı hissetmesi, basıncın derinlikle artmasındandır."
      ],
      dikkat: [
        "**Su yan yüzdeki delikten fışkırıyor diye en büyük basıncın orada olduğunu sanma.** Yan yüzdeki hiçbir nokta tabandan derin değildir. Tabanda delik olmaması, tabana basınç etki etmediğini göstermez.",
        "**Yatay hareket ve süre basıncı değiştirmez.** Aynı sıvıda yer değiştirirken basınç yalnızca derinlik değişince değişir."
      ]
    },
    {
      baslik: "Tahminini deneyle test et",
      maddeler: [
        "**Basıncı görmek:** Zarlı huniye bağlı U borusundaki düzey farkı, ucu zarlı borudaki zarın çökmesi ve basınç ölçerin gösterdiği değer, basınç arttıkça büyür. İki sıvıyı ayıran esnek zar, basıncı **küçük** olan tarafa doğru şişer.",
        "**Bağımsız değişken** senin değiştirdiğin, **bağımlı değişken** ölçtüğün, **kontrol değişkenleri** sabit tuttuğun koşullardır. Yalnızca sınadığın değişkeni değiştirirsin. Kabın biçimini sınarken sıvının miktarını değil, **yüksekliğini** eşit tutarsın.",
        "**Veri okumak:** Tabloda yalnızca bir koşulu farklı olan iki satırı karşılaştır. Derinlik–basınç grafiğinde aynı derinlikte daha büyük basınç gösteren çizgi daha yoğun sıvıya aittir. Farklı derinliklerde aynı basınç ölçülmüşse daha sığdaki sıvı daha yoğundur. Taban basıncı, kaba eklenen suya değil, o andaki su yüksekliğine bağlıdır.",
        "**Hipotez**, test edilebilir bir tahmindir; sonuç ona uyarsa desteklenir, uymazsa desteklenmez. Hatalı kurulan bir deney bir bilgiyi çürütmez, yalnızca kanıtlayamaz."
      ],
      dikkat: [
        "**İki değişkeni birden değiştirme.** Biri suda ve derinde, öbürü yağda ve sığda yapılan iki ölçümün farkı ikisinden de gelebilir; sonuç çıkmaz.",
        "**Su eklemek derinliği de artırır.** Kaba su eklenince yerinden oynamayan bir noktada basınç artıyorsa nedeni miktar değil, derinliktir."
      ]
    },
    {
      baslik: "Bileşik kaplar",
      maddeler: [
        "**Bileşik kaplar**, alttan birbirine bağlı, ağızları açık kaplardır. İçlerindeki aynı sıvı durulunca bütün kollarda yüzeyler **aynı yatay hizada** olur. Kolların şekli, genişliği, eğikliği ve içlerindeki sıvı miktarı bunu değiştirmez; kap eğilse ya da bir kola sıvı eklense de yüzeyler yeniden aynı hizaya gelir.",
        "Aralarında kapalı bir musluk bulunan iki kapta yüzeyler farklı olabilir. Musluk açılınca sıvı, yüzeyi yüksek olan taraftan alçak olana akar. Buluşma hizası tam ortada olmak zorunda değildir: geniş kabın yüzeyi az, dar kabınki çok yer değiştirir.",
        "Sıvı en alçak ağzın hizasını geçemez, oradan taşar. Emzikli bir sulama kabı ancak emziğinin ağzına kadar dolar.",
        "**Su deposu:** Bir musluk, depodaki su yüzeyinin hizasından ne kadar aşağıdaysa su o kadar güçlü akar. Yatay uzaklık, borunun uzunluğu ya da depodaki su miktarı bunu belirlemez. Bu hizanın üstüne pompasız su çıkmaz; depolar bu yüzden yükseğe kurulur. Ustaların su dolu şeffaf hortumla iki noktayı aynı yüksekliğe getirmesi de bileşik kap uygulamasıdır."
      ],
      dikkat: [
        "**Aynı hizadaki yüzeyler, her noktada eşit basınç demek değildir.** Alttaki bağlantı daha derinde olduğu için orada basınç büyüktür. Farklı kollarda **aynı yatay düzeydeki** noktaların basınçları ise eşittir."
      ]
    },
    {
      baslik: "Gazlar ve açık hava basıncı",
      maddeler: [
        "Gazlar da akışkandır; bulundukları kabın bütün iç yüzeylerine her yönde basınç uygular. Şişirilen top her yanından gerilir; durgun hava da basınç uygular.",
        "**Açık hava basıncı**, Dünya'yı saran hava tabakasının ağırlığından doğan ve her yöne etki eden basınçtır. Barometreyle ölçülür; birimi olarak hektopaskal (hPa) da kullanılır.",
        "**Yükseldikçe azalır**, çünkü üstte kalan hava tabakası incelir ve hava seyrekleşir. Bu yüzden deniz kıyısındaki açık hava basıncı, yüksek bir dağın tepesindekinden büyüktür. Birkaç on santimetrelik yükselme ise açık hava basıncını fark edilir biçimde değiştirmez.",
        "Ağzı sıkıca kapalı esnek bir kap yükseğe çıkınca kabarır, alçağa inince büzülür (uçakta folyo kapaklı yoğurt kabının kapağı kabarır). İçine hava girip çıkmaz; değişen, dışarıdaki basınçtır. Hızla yükselip alçalırken kulakların da bu yüzden tıkanır.",
        "**Pipet, vantuz, damlalık:** İçerideki hava azaltılır, böylece içerideki basınç dışarıdakinden küçük olur. Sıvıyı pipete ya da damlalığa iten, vantuzu yüzeye bastıran dışarıdaki açık hava basıncıdır. Ucu parmakla kapatılan pipetteki suyu da açık hava basıncı aşağıdan yukarı iterek tutar. Kapalı bir kaba delik açılıp içeri hava girince içerideki basınç yeniden dışarıdakine yaklaşır.",
        "Su yüzeyindeki açık hava basıncı suyun içine de iletilir. Su altındaki bir noktaya etki eden toplam basınç, açık hava basıncı ile suyun basıncının toplamıdır."
      ],
      dikkat: [
        "**Boşluk çekmez.** Sıvıyı ya da kapağı hareket ettiren, basıncı büyük olan taraftaki havanın itmesidir. “İçerideki mi büyük, dışarıdaki mi?” diye sor.",
        "**İlgisiz neden uydurma.** Yükseklerde basıncın azalmasının nedeni soğuk ya da Güneş'e yakınlık değildir."
      ]
    },
    {
      baslik: "Pascal prensibi ve hidrolik sistemler",
      maddeler: [
        "**Pascal prensibi:** Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve **her yöne aynen** (azalmadan, artmadan) iletilir. Katılar ise kuvveti, uygulandığı doğrultuda iletir.",
        "Sıvılar neredeyse hiç sıkıştırılamaz, gazlar kolayca sıkışır. Hidrolik bir sisteme hava karışırsa itme önce havayı sıkıştırır ve sistem zayıf çalışır. Bu yüzden sıvı (çoğunlukla yağ) kullanılır.",
        "**Dar ve geniş piston:** Aynı yükseklikteki iki pistonun altındaki basınç **eşittir**; geniş pistonun yüzeyi büyük olduğu için onu iten **kuvvet büyüktür**. Küçük kuvvetle ağır yük böyle kaldırılır. Yüzeyler eşit olsaydı kuvvetler de eşit olurdu.",
        "Dar pistona daha büyük kuvvet uygularsan iletilen basınç da artar. Geniş pistonun büyüklüğü iletilen basıncı değiştirmez, yalnızca geniş pistonu iten kuvveti değiştirir. Borunun uzunluğu ya da yönü de basıncı değiştirmez. Pistonlar aynı yükseklikte dengedeyse en büyük yük en geniş pistonun üstündedir.",
        "**Uygulamalar:** hidrolik kriko ve lift, berber koltuğu, hidrolik fren, damperli kamyon, iş makineleri, hidrolik pres.",
        "**İlke (prensip)**, birçok deneyle doğrulanmış bilimsel bir genellemedir; Pascal prensibi bir ilkedir. Henüz test edilmemiş tahmin ise **hipotezdir**. Bilimsel bilgi yeni kanıtlarla gözden geçirilebilir."
      ],
      dikkat: [
        "**Basınç ile kuvveti karıştırma.** Sıvı kuvveti değil basıncı aynen iletir. Geniş pistonda basınç ne artar ne azalır; kuvvet büyür.",
        "**Basınç yalnızca itilen yöne ya da yakın noktaya gitmez.** Yukarıya, yana, aşağıya ve uzağa eşit ulaşır.",
        "**Eşit artış, eşit basınç demek değildir.** Pistonla eklenen basınç her noktada aynıdır, ama derindeki nokta yine daha büyük basınç taşır."
      ]
    },
    {
      baslik: "Hangi olayı hangi bilgi açıklar?",
      maddeler: [
        "Önce düzeneğe bak: Katı mı bastırıyor, ağzı açık sıvı mı var, kapalı sıvı mı itiliyor, yoksa hava mı itiyor?",
        "Katı bir cisim aynı ağırlıkla daha küçük yüzeye bastığında daha büyük basınç uygular; sıvı basıncında ise ölçüt temas alanı değil, derinliktir. İkisi aynı soruda birlikte sorulabilir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Düzenek</th><th>Açıklayan bilgi</th></tr><tr><td>Sivri uç, kar ayakkabısı, palet</td><td>Katı basıncı (temas alanı)</td></tr><tr><td>Baraj duvarı, delikli kap, dalış aracı</td><td>Sıvı basıncı derinlikle artar</td></tr><tr><td>Su deposu ve musluk, hortumla hiza, emzikli kap</td><td>Bileşik kaplar</td></tr><tr><td>Pipet, vantuz, damlalık</td><td>Açık hava basıncı</td></tr><tr><td>Kriko, fren, berber koltuğu</td><td>Pascal prensibi</td></tr></table>",
      dikkat: [
        "**Sıvı varsa Pascal prensibi var sanma.** Bunun için sıvı kapalı bir kapta olmalı ve ona piston ya da pedalla dışarıdan basınç uygulanmalıdır. Ağzı açık hortum ya da depo bileşik kaptır."
      ]
    }
  ],
  lgs: [
    "Öncüllü (I, II, III) sorularda bir yargı çoğu zaman “daha çok su olduğu için”, “tabanı geniş olduğu için” gibi yanlış bir gerekçe taşır. Sonucu doğru, gerekçesi yanlış olan yargı yanlış sayılır.",
    "Deney düzeneği ya da ölçüm tablosu verilir: Hangi iki kap karşılaştırılmalı, öğretmen sonucu neden yetersiz buldu? Sınanan değişkeni bul, gerisinin aynı olup olmadığına bak.",
    "Bir düzeneğin hangi bilgiye dayandığı sorulur. Tuzaklar: basınç ile kuvveti karıştırmak, bileşik kapları Pascal prensibiyle açıklamak, “boşluk çeker” demek, verilmeyen sıvı miktarından “kesin” sonuç çıkarmak."
  ],
  yokla: [
    { soru: "İnce bir deney tüpünde ve büyük bir su tankında, suyun 5 cm derinliğindeki noktaların basınçlarını karşılaştır.", cevap: "Eşittir. Sıvı da derinlik de aynıdır; kabın büyüklüğü ve sıvının miktarı basıncı değiştirmez." },
    { soru: "Ağzı açık, biri ince biri geniş iki kolu alttan bağlı bir kaba su döktün. Su durulunca hangi kolda yüzey daha yüksektir?", cevap: "Hiçbirinde. Bileşik kaplarda durgun sıvının yüzeyi bütün kollarda aynı hizadadır." },
    { soru: "Hidrolik bir sistemde dar pistona kuvvet uyguladın. Geniş pistonda basınç mı büyür, kuvvet mi?", cevap: "Kuvvet büyür. Basınç aynen iletildiği için iki pistonda eşittir; geniş yüzeye etki ettiği için oradaki kuvvet büyüktür." },
    { soru: "Sıvı basıncının sıvının cinsine bağlı olup olmadığını sınarken neyi değiştirir, neyi ölçer, neyi sabit tutarsın?", cevap: "Sıvının cinsini değiştirirsin (bağımsız), basıncı ölçersin (bağımlı); derinliği, kabın biçimini ve genişliğini aynı tutarsın (kontrol)." }
  ]
};
