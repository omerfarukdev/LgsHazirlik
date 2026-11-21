// Türkçe — Sözel Mantık: Kademe 3 (LGS Ayarı, 25 soru) ve havuz (kademe 0, 15 soru)
// Sözel mantık programda ayrı bir kazanım değil; LGS kılavuzundaki "yorumlama, sonuç çıkarma, analiz" tanımına dayanan bir soru tipidir.
// Kazanım etiketleri: T.8.3.25 Okudukları ile ilgili çıkarımlarda bulunur. · T.8.3.32 Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.
// Her sorunun bütün olası durumları kaba kuvvetle sayılarak doğrulanmıştır: cevap, verilen bilgilerle tektir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sozel-mantik"] = window.LGS_BANK["sozel-mantik"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-sm-301",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul kermesinde kitap standına Arda, Belis, Cem, Defne ve Emir birer saat nöbet tutacaktır. Belis'in nöbet saati çizelgeye yazılmıştır. Diğer nöbetler şu kurallara göre yerleştirilecektir:
• Defne, Cem'den hemen sonraki saatte nöbet tutar.
• Arda ya ilk ya da son nöbeti tutar.
• Emir, Arda'dan daha önceki bir saatte nöbet tutar.
**Buna göre Belis'ten hemen sonra nöbet tutan öğrenci kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>Nöbetçi</th></tr><tr><td>10.00-11.00</td><td>?</td></tr><tr><td>11.00-12.00</td><td>?</td></tr><tr><td>12.00-13.00</td><td>Belis</td></tr><tr><td>13.00-14.00</td><td>?</td></tr><tr><td>14.00-15.00</td><td>?</td></tr></table>`,
  secenekler: ["Arda", "Emir", "Cem", "Defne"],
  dogru: 1,
  hatalar: [
    "\"Hemen sonra\" ile \"en son\"u karıştırma: Arda son nöbeti tutar, Belis'in hemen ardından gelen kişi değildir.",
    null,
    "Cem-Defne ikilisini son iki saate koyma: O zaman Arda ilk saate geçer ve Emir'e Arda'dan önce yer kalmaz; üçüncü kural çiğnenir.",
    "İkilinin sırasını ters kurma: Defne, Cem'den önce değil sonra gelir; ayrıca bu ikili son iki saate sığmaz."
  ],
  aciklama: `Sözel mantık sorularında önce kesin bilgiyi yerleştir, sonra birlikte hareket eden ikilileri dene.
Adım 1: Belis 12.00-13.00'te, yani 3. saattedir. Boş saatler 1, 2, 4 ve 5. saatlerdir.
Adım 2: Cem ile Defne art arda iki saate yerleşmelidir. Boş saatlerde art arda olan yerler 1-2 ve 4-5'tir.
Adım 3: İkiliyi 4-5'e koyarsan Arda ile Emir'e 1 ve 2. saatler kalır. Arda ilk ya da son olmalı; son saat dolu olduğu için Arda ilk saate geçer. Bu durumda Emir, Arda'dan önce olamaz. Demek ki ikili 1-2'dedir: Cem 10.00, Defne 11.00.
Adım 4: 4 ve 5. saatler Arda ile Emir'e kalır. Arda son saati (14.00-15.00) alır, Emir 13.00-14.00'e yerleşir.
Sıralama: Cem, Defne, Belis, Emir, Arda.
Sağlama: Defne Cem'den hemen sonra, Arda sonda, Emir Arda'dan önce; bütün kurallar sağlanıyor.
Cevap B.`
},
{
  id: "tur-sm-302",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Nehir, Onur, Pelin ve Sarp; okulun satranç, fotoğraf, tiyatro ve robotik kulüplerinden birer tanesine yazılmıştır. Her kulübe bu dört öğrenciden yalnızca biri gitmektedir. Aşağıdaki çizelgede öğrencilerin gitmediği kulüpler ✗ ile işaretlenmiştir. Boş kutular hakkında bir bilgi verilmemiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Satranç</th><th>Fotoğraf</th><th>Tiyatro</th><th>Robotik</th></tr><tr><th>Nehir</th><td>✗</td><td>✗</td><td></td><td></td></tr><tr><th>Onur</th><td>✗</td><td>✗</td><td></td><td></td></tr><tr><th>Pelin</th><td>✗</td><td></td><td></td><td>✗</td></tr><tr><th>Sarp</th><td></td><td></td><td></td><td></td></tr></table>`,
  secenekler: ["Onur tiyatro kulübündedir.", "Sarp robotik kulübündedir.", "Nehir robotik kulübündedir.", "Pelin fotoğraf kulübündedir."],
  dogru: 3,
  hatalar: [
    "Olası olanı kesin sanma: Onur tiyatroda da robotikte de olabilir; çizelge bu ikisini birbirinden ayırmaz.",
    "Boş satırı her kulübe açık sanma: Tiyatro ile robotik Nehir ve Onur'a, fotoğraf Pelin'e kalınca Sarp'a satranç kalır.",
    "Nehir ile Onur'dan birini keyfî seçme: İkisi de tiyatro ya da robotik kulübünde olabilir; hangisinin nerede olduğu bilinemez.",
    null
  ],
  aciklama: `"Kesinlikle doğru" olan ifade, bilgilere uyan bütün yerleşimlerde doğru kalan ifadedir.
Adım 1: Nehir'in ve Onur'un satırında satranç ile fotoğraf işaretli. Demek ki ikisi de tiyatro ya da robotik kulübündedir. Bu iki kulüp onlarla dolar.
Adım 2: Pelin satranç ve robotikte değil. Tiyatro da Nehir-Onur ikilisine gittiği için Pelin'e fotoğraf kalır.
Adım 3: Geriye satranç kalır; Sarp satranç kulübündedir.
Adım 4: Nehir tiyatroda, Onur robotikte olabilir; tersi de olabilir. İki durum da bütün bilgilere uyar.
Sık yapılan hata: "Olabilir" ile "kesin"i karıştırmak. Nehir ve Onur için verilen şıklar olasıdır ama kesin değildir.
Cevap D.`
},
{
  id: "tur-sm-303",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kayak merkezinde yüksek hat, alçak hat ve çocuklar için teleski olmak üzere üç taşıma hattı vardır. Kayakçıların güvenliği için bu hatların rüzgâr hızına göre çalışıp çalışmayacağı Tablo 1'de, merkezde bir gün boyunca ölçülen rüzgâr hızları Tablo 2'de verilmiştir.
**Buna göre aşağıdakilerin hangisinde, verilen saatte hatların durumu kurallara uygundur?**`,
  gorsel: `<table class="tablo"><tr><th colspan="4">Tablo 1</th></tr><tr><th>Rüzgâr hızı (km/sa)</th><th>Yüksek hat</th><th>Alçak hat</th><th>Teleski</th></tr><tr><td>0-20</td><td>Çalışır</td><td>Çalışır</td><td>Çalışır</td></tr><tr><td>21-35</td><td>Durur</td><td>Çalışır</td><td>Çalışır</td></tr><tr><td>36-50</td><td>Durur</td><td>Çalışır</td><td>Durur</td></tr><tr><td>51 ve üstü</td><td>Durur</td><td>Durur</td><td>Durur</td></tr></table><br><table class="tablo"><tr><th colspan="2">Tablo 2</th></tr><tr><th>Saat</th><th>Rüzgâr hızı (km/sa)</th></tr><tr><td>09.00</td><td>26</td></tr><tr><td>11.00</td><td>38</td></tr><tr><td>13.00</td><td>53</td></tr><tr><td>15.00</td><td>17</td></tr></table>`,
  secenekler: [
    "09.00: Yüksek hat durur, alçak hat çalışır, teleski çalışır.",
    "11.00: Yüksek hat durur, alçak hat çalışır, teleski çalışır.",
    "13.00: Yüksek hat durur, alçak hat çalışır, teleski durur.",
    "15.00: Yüksek hat çalışır, alçak hat çalışır, teleski durur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aralık sınırını kaçırma: 38 km/sa, 36-50 aralığındadır; bu aralıkta teleski de durur.",
    "Satır kaydırma: 53 km/sa, 51 ve üstü aralığındadır; bu hızda alçak hat da durur, üç hat birden kapanır.",
    "Satırları karıştırma: 17 km/sa, 0-20 aralığındadır; bu hızda teleski de çalışır, üç hat birden açıktır."
  ],
  aciklama: `Kural tablosu sorularında her şıkta önce saati, sonra o saatin rüzgâr hızını, en son da bu hızın düştüğü aralığı bul.
Adım 1: 09.00'da hız 26 km/sa. Bu değer 21-35 aralığındadır: Yüksek hat durur, alçak hat ve teleski çalışır. A şıkkı bununla aynıdır.
Adım 2: 11.00'de hız 38 km/sa, aralık 36-50: Teleski durmalıdır. B şıkkında teleski çalışıyor, yanlış.
Adım 3: 13.00'te hız 53 km/sa, aralık 51 ve üstü: Üç hat da durmalıdır. C şıkkında alçak hat çalışıyor, yanlış.
Adım 4: 15.00'te hız 17 km/sa, aralık 0-20: Üç hat da çalışmalıdır. D şıkkında teleski duruyor, yanlış.
Sık yapılan hata: Aralıkların sınırlarını (35-36, 50-51) dikkatsiz okumak. Sayıyı mutlaka iki sınırla karşılaştır.
Cevap A.`
},
{
  id: "tur-sm-304",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Ela, oyuncak dolabının rafına kırmızı, mavi, yeşil, sarı ve mor renkli beş kutuyu yan yana dizecektir. Mor kutuyu görseldeki gibi yerine koymuştur. Diğer kutuları dizerken şu kurallara uyacaktır:
• Sarı kutu, mavi kutunun hemen solunda olacak.
• Kırmızı kutu, rafın uçlarından birinde olacak.
• Yeşil kutu ile mor kutu yan yana olmayacak.
**Buna göre sağdan ikinci sıradaki kutu hangi renktir?**`,
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Beş kutuluk raf; soldan ikinci kutu mor, diğerleri bilinmiyor">
<text x="14" y="22" font-size="15" fill="currentColor">Sol</text>
<text x="476" y="22" font-size="15" fill="currentColor">Sağ</text>
<rect x="22" y="34" width="80" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="117" y="34" width="80" height="70" rx="4" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/>
<rect x="212" y="34" width="80" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="307" y="34" width="80" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="402" y="34" width="80" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="62" y="75" font-size="18" text-anchor="middle" fill="currentColor">?</text>
<text x="157" y="75" font-size="17" text-anchor="middle" fill="currentColor" font-weight="700">Mor</text>
<text x="252" y="75" font-size="18" text-anchor="middle" fill="currentColor">?</text>
<text x="347" y="75" font-size="18" text-anchor="middle" fill="currentColor">?</text>
<text x="442" y="75" font-size="18" text-anchor="middle" fill="currentColor">?</text>
<line x1="10" y1="106" x2="510" y2="106" stroke="currentColor" stroke-width="5"/>
<text x="62" y="132" font-size="15" text-anchor="middle" fill="currentColor">1</text>
<text x="157" y="132" font-size="15" text-anchor="middle" fill="currentColor">2</text>
<text x="252" y="132" font-size="15" text-anchor="middle" fill="currentColor">3</text>
<text x="347" y="132" font-size="15" text-anchor="middle" fill="currentColor">4</text>
<text x="442" y="132" font-size="15" text-anchor="middle" fill="currentColor">5</text>
</svg>`,
  secenekler: ["Mor", "Mavi", "Sarı", "Yeşil"],
  dogru: 1,
  hatalar: [
    "Sağ ile solu karıştırma: Mor kutu soldan ikincidir, sağdan ikinci değil.",
    null,
    "Bir sıra kaydırma: Sarı kutu ortadadır (3. sıra); sağdan ikinci kutu onun hemen sağındaki mavidir.",
    "Sağdan birinci ile sağdan ikinciyi karıştırma: Yeşil kutu en sağdadır."
  ],
  aciklama: `Adım 1: Mor kutu 2. sıradadır. Yeşil kutu morun yanına konamayacağı için 1. ve 3. sıraya giremez.
Adım 2: Kırmızı kutu uçlardadır: 1. ya da 5. sıra. İki durumu da dene.
Adım 3: Kırmızı 5. sırada olursa boş yerler 1, 3 ve 4 olur. Yeşil 1'e ve 3'e giremez, 4'e yerleşir. Sarı ile mavi için 1 ve 3 kalır; bunlar yan yana değildir. Bu durum olmaz.
Adım 4: Kırmızı 1. sıradadır. Boş yerler 3, 4 ve 5. Yeşil 3'e giremez. Sarı-mavi ikilisi yan yana iki yer ister: 3-4. Yeşil de 5'e yerleşir.
Sıralama (soldan): kırmızı, mor, sarı, mavi, yeşil. Sağdan ikinci kutu 4. sıradaki mavidir.
Sık yapılan hata: Soru "sağdan" diye sorarken soldan saymak.
Cevap B.`
},
{
  id: "tur-sm-305",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ortaokulda düzenlenen kulüp haftasında pazartesiden cumaya kadar her gün bir etkinlik yapılacaktır. Etkinlikler resim, satranç, voleybol, koro ve dramadır. Drama gününe çizelgede yer verilmiştir. Program hazırlanırken şunlara dikkat edilmiştir:
• Voleybol, korodan önceki günlerin birinde yapılacak.
• Koro cuma günü yapılmayacak.
• Resim ve satranç art arda iki günde yapılmayacak.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th><th>Cuma</th></tr><tr><td>?</td><td>?</td><td>Drama</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["Voleybol pazartesi günü yapılır.", "Resim cuma günü yapılır.", "Satranç salı günü yapılır.", "Koro perşembe günü yapılır."],
  dogru: 3,
  hatalar: [
    "Olası bir durumu kesin sanma: Resim pazartesi yapılırsa voleybol salıya kayar; bu da bütün kurallara uyar.",
    "Resim ile satrancın yerlerinin değişebileceğini gözden kaçırma: Cuma günü satranç da yapılabilir.",
    "Tek bir yerleşimi deneyip bırakma: Satranç salı günü olabilir ama pazartesi ya da cuma da olabilir.",
    null
  ],
  aciklama: `Adım 1: Drama çarşambadır. Boş günler pazartesi, salı, perşembe ve cumadır. Bu günlerde art arda gelen çiftler pazartesi-salı ve perşembe-cumadır.
Adım 2: Resim ile satranç art arda olamaz. O hâlde biri ilk iki günde, öteki son iki gündedir. Böylece voleybol ile koro da biri ilk iki güne, öteki son iki güne düşer.
Adım 3: Voleybol korodan önce olmalı. Voleybol ilk iki günde, koro son iki gündedir. Koro cuma olamayacağına göre koro perşembedir.
Adım 4: Cuma günü resim ya da satranç yapılır; voleybol pazartesi ya da salı olabilir. Bu ayrıntılar kesin değildir.
Sağlama: Pazartesi voleybol, salı resim, çarşamba drama, perşembe koro, cuma satranç yerleşimi bütün kurallara uyar; voleybol ile resmin yerini değiştirince de kurallar bozulmaz. İki durumda da koro perşembededir.
Cevap D.`
},
{
  id: "tur-sm-306",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kutu oyununda piyon "Başla" karesinden yola çıkar. Oyuncu her turda bir kart açar: Kırmızı kart piyonu 2 kare ileri, yeşil kart 3 kare ileri götürür; mavi kart ise 1 kare geri getirir. Oyunun iki özel kuralı vardır:
• Piyon ★ işaretli bir kareye gelirse, ileri ya da geri giderek gelmiş olsun, hemen 2 kare daha ilerler.
• Piyon kuyu karesine gelirse oyuncu sıradaki kartını oynamaz; o kart boşa gider.
Ela'nın sırasıyla açtığı kartlar: kırmızı, yeşil, mavi, kırmızı, yeşil.
**Buna göre Ela'nın piyonu oyunun sonunda kaçıncı karededir?**`,
  gorsel: `<svg viewBox="0 0 500 110" role="img" aria-label="Oyun tahtası: Başla karesinden 12. kareye kadar; 4 ve 10. karelerde yıldız, 6. karede kuyu var">
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="6" y="20" width="48" height="64"/><rect x="54" y="20" width="36" height="64"/><rect x="90" y="20" width="36" height="64"/><rect x="126" y="20" width="36" height="64"/>
<rect x="162" y="20" width="36" height="64"/><rect x="198" y="20" width="36" height="64"/><rect x="234" y="20" width="36" height="64"/><rect x="270" y="20" width="36" height="64"/>
<rect x="306" y="20" width="36" height="64"/><rect x="342" y="20" width="36" height="64"/><rect x="378" y="20" width="36" height="64"/><rect x="414" y="20" width="36" height="64"/><rect x="450" y="20" width="36" height="64"/>
</g>
<circle cx="252" cy="64" r="12" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/>
<g font-size="14" text-anchor="middle" fill="currentColor">
<text x="30" y="47">Başla</text><text x="72" y="42">1</text><text x="108" y="42">2</text><text x="144" y="42">3</text><text x="180" y="42">4</text><text x="216" y="42">5</text><text x="252" y="42">6</text>
<text x="288" y="42">7</text><text x="324" y="42">8</text><text x="360" y="42">9</text><text x="396" y="42">10</text><text x="432" y="42">11</text><text x="468" y="42">12</text>
</g>
<text x="180" y="70" font-size="20" text-anchor="middle" fill="var(--vurgu)">★</text>
<text x="396" y="70" font-size="20" text-anchor="middle" fill="var(--vurgu)">★</text>
<text x="252" y="104" font-size="14" text-anchor="middle" fill="currentColor">kuyu</text>
</svg>`,
  secenekler: ["6", "8", "9", "11"],
  dogru: 2,
  hatalar: [
    "Geri gelişte yıldız kuralını uygulamama: Piyon 4'te kalırsa kırmızıyla 6'ya (kuyuya) gelir ve son yeşil kart boşa gider.",
    "Boşa giden kartı karıştırma: Kuyudan sonra sıradaki kart kırmızıdır; son yeşil kartı atlarsan 8'de kalırsın.",
    null,
    "Kuyu kuralını atlama: 6'dan kırmızıyla 8'e, yeşille 11'e gidilir; oysa kırmızı kart boşa gitmelidir."
  ],
  aciklama: `Kural uygulama sorularında hamleleri tek tek, bir çizelge tutarak yürüt.
Adım 1: Kırmızı: Başla'dan 2 kare ileri, piyon 2. karede.
Adım 2: Yeşil: 3 kare ileri, piyon 5. karede.
Adım 3: Mavi: 1 kare geri, piyon 4. karede. 4. karede ★ var; kural "geri giderek gelse de" geçerli olduğu için piyon 2 kare daha ilerler ve 6. kareye gelir. 6. kare kuyudur.
Adım 4: Kuyu yüzünden sıradaki kart, yani kırmızı, boşa gider. Piyon 6'da bekler.
Adım 5: Son kart yeşil: 3 kare ileri, piyon 9. karede. 9. karede özel işaret yoktur.
Sağlama: Kartları say: kırmızı, yeşil, mavi, (kırmızı boşa), yeşil; beş kartın hepsi hesaba katıldı.
Cevap C.`
},
{
  id: "tur-sm-307",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Tuna, Umay ve Yiğit'in birer evcil hayvanı vardır: Biri kedi, biri muhabbet kuşu, biri de balık beslemektedir. Üçü okula farklı renkte çanta getirmektedir: Çantalardan biri yeşil, biri turuncu, biri lacivert. Şunlar bilinmektedir:
• Kedi besleyen kişinin çantası turuncudur.
• Umay balık beslemez ve çantası lacivert değildir.
• Yiğit'in çantası yeşildir.
• Tuna muhabbet kuşu beslemez.
**Buna göre balık besleyen kişi ve çantasının rengi aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Tuna – lacivert", "Tuna – turuncu", "Yiğit – yeşil", "Umay – turuncu"],
  dogru: 0,
  hatalar: [
    null,
    "Renkleri kaydırma: Turuncu çanta Umay'ındır; Tuna'ya lacivert kalır.",
    "Son bilgiyi atlama: Tuna kuş beslemediği için balık Tuna'nındır; Yiğit muhabbet kuşu besler.",
    "Kedi ile balığı karıştırma: Turuncu çantalı Umay kedi besler; ikinci bilgiye göre Umay balık beslemez."
  ],
  aciklama: `Adım 1: Yiğit'in çantası yeşildir. Umay'ın çantası lacivert değilse Umay'a turuncu kalır, Tuna'ya da lacivert.
Adım 2: Kedi besleyenin çantası turuncudur. Turuncu çanta Umay'da olduğuna göre kedi Umay'ındır.
Adım 3: Kuş ve balık Tuna ile Yiğit arasında paylaşılır. Tuna kuş beslemediği için balık Tuna'nın, kuş Yiğit'indir.
Sonuç: Tuna – balık – lacivert; Umay – kedi – turuncu; Yiğit – muhabbet kuşu – yeşil.
Sağlama: Dört bilginin hepsi bu eşleştirmeyle uyumlu.
Cevap A.`
},
{
  id: "tur-sm-308",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir otobüs hattında Çarşı, Hastane, Kütüphane, Park ve Stadyum olmak üzere beş durak vardır. Görselde durakların sırası numaralandırılmış, yalnızca Kütüphane durağının yeri yazılmıştır. Durakların sırasıyla ilgili şunlar bilinmektedir:
• Otobüs Park'a Hastane'den önce uğrar ama Park, Hastane'den hemen önceki durak değildir.
• Hastane son durak değildir.
• Stadyum ilk durak değildir.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: `<svg viewBox="0 0 540 120" role="img" aria-label="Beş duraklı otobüs hattı; 3. durak Kütüphane">
<line x1="40" y1="50" x2="500" y2="50" stroke="currentColor" stroke-width="4"/>
<polygon points="512,50 496,42 496,58" fill="currentColor"/>
<g fill="var(--dolgu)" stroke="currentColor" stroke-width="2">
<circle cx="60" cy="50" r="16"/><circle cx="160" cy="50" r="16"/><circle cx="260" cy="50" r="16"/><circle cx="360" cy="50" r="16"/><circle cx="460" cy="50" r="16"/>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="60" y="55">1</text><text x="160" y="55">2</text><text x="260" y="55">3</text><text x="360" y="55">4</text><text x="460" y="55">5</text>
<text x="60" y="92">?</text><text x="160" y="92">?</text><text x="360" y="92">?</text><text x="460" y="92">?</text>
</g>
<text x="260" y="92" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="700">Kütüphane</text>
<text x="270" y="20" font-size="14" text-anchor="middle" fill="currentColor">Otobüsün gidiş yönü →</text>
</svg>`,
  secenekler: ["Çarşı birinci duraktır.", "Park ikinci duraktır.", "Stadyum dördüncü duraktır.", "Çarşı beşinci duraktır."],
  dogru: 2,
  hatalar: [
    "Olabilir olanı olamaz sanma: Çarşı, Park, Kütüphane, Hastane, Stadyum sıralaması bütün bilgilere uyar.",
    "Olabilir olanı olamaz sanma: Park 2. durakken Çarşı 1., Hastane 4., Stadyum 5. durak olabilir.",
    null,
    "Olabilir olanı olamaz sanma: Park, Stadyum, Kütüphane, Hastane, Çarşı sıralaması bütün bilgilere uyar."
  ],
  aciklama: `"Olamaz" sorusunda bilgilere uyan bütün sıralamalarda yanlış kalan ifadeyi ararsın.
Adım 1: Kütüphane 3. duraktır. Boş yerler 1, 2, 4 ve 5.
Adım 2: Park, Hastane'den önce ve aralarında en az bir durak var. 1-2 ya da 4-5 gibi bitişik çiftler olmaz. Bu yüzden Park 1 ya da 2'de, Hastane 4 ya da 5'tedir.
Adım 3: Hastane son durak olmadığına göre Hastane 4. duraktır. Demek ki 4. durağa başka hiçbir durak gelemez.
Adım 4: Bilgilere uyan üç sıralama vardır: Park-Stadyum-Kütüphane-Hastane-Çarşı; Park-Çarşı-Kütüphane-Hastane-Stadyum; Çarşı-Park-Kütüphane-Hastane-Stadyum. A, B ve D bunlardan birinde gerçekleşir.
Sık yapılan hata: "Hemen önce değil" bilgisini "önce değil" diye okumak.
Cevap C.`
},
{
  id: "tur-sm-309",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir halk kütüphanesinin ödünç verme kuralları şunlardır:
1. Bir okurun elinde aynı anda en fazla üç kitap bulunabilir.
2. İade süresi geçmiş kitabı olan okur, o kitabı getirmeden yeni kitap alamaz.
3. Sözlük ve atlas gibi başvuru kitapları ödünç verilmez, kütüphanede okunur.
Tabloda dört okurun durumu ve istediği kitaplar gösterilmiştir.
**Buna göre hangi okurun isteğinin tamamı karşılanabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Okur</th><th>Elindeki kitap sayısı</th><th>Süresi geçmiş kitabı</th><th>İstediği kitap</th></tr><tr><td>Aslı</td><td>2</td><td>Yok</td><td>İki roman</td></tr><tr><td>Baran</td><td>1</td><td>Var</td><td>Bir öykü kitabı</td></tr><tr><td>Doruk</td><td>1</td><td>Yok</td><td>Bir atlas ve bir roman</td></tr><tr><td>Cansu</td><td>2</td><td>Yok</td><td>Bir şiir kitabı</td></tr></table>`,
  secenekler: ["Aslı", "Baran", "Doruk", "Cansu"],
  dogru: 3,
  hatalar: [
    "Toplamı hesaba katmama: Elindeki 2 kitaba 2 roman eklenince 4 kitap olur; sınır üçtür.",
    "İkinci kuralı atlama: Süresi geçmiş kitabı olan Baran, onu getirmeden yeni kitap alamaz.",
    "Başvuru kitabı kuralını atlama: Atlas ödünç verilmez; Doruk'un isteğinin yalnızca bir bölümü karşılanır.",
    null
  ],
  aciklama: `Adım 1: Her okur için üç kuralı sırayla dene: kitap sayısı, süresi geçmiş kitap, başvuru kitabı.
Adım 2: Aslı: 2 + 2 = 4 kitap olur. Birinci kurala aykırı.
Adım 3: Baran: Süresi geçmiş kitabı var. İkinci kurala aykırı.
Adım 4: Doruk: Atlas bir başvuru kitabıdır, ödünç verilmez. Roman verilebilir ama isteğin tamamı karşılanamaz.
Adım 5: Cansu: 2 + 1 = 3 kitap olur. "En fazla üç" sınırı üçü de kapsar. Süresi geçmiş kitabı yok, şiir kitabı başvuru kitabı değil. Üç kural da sağlanıyor.
Sık yapılan hata: "En fazla üç" ifadesinde üçü dışarıda saymak. "En fazla" sınırın kendisini de içine alır.
Cevap D.`
},
{
  id: "tur-sm-310",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Beden eğitimi öğretmeni Ece, Kaan, Mert, Selin ve Tolga'yı boy sırasına dizmek istiyor. Öğrencilerin boyları birbirinden farklıdır. Öğretmenin not ettiği bilgiler şunlardır:
• Ece, Kaan'dan uzundur.
• Mert, Ece'den kısa ama Kaan'dan uzundur.
• Selin, Mert'ten kısadır.
• Tolga en uzun öğrenci değildir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Tolga, Mert'ten kısadır.", "Ece en uzun öğrencidir.", "Kaan, Selin'den uzundur.", "Selin en kısa öğrencidir."],
  dogru: 1,
  hatalar: [
    "Verilmeyen karşılaştırmayı varsayma: Tolga'nın yalnızca en uzun olmadığı bilinir; Mert'ten uzun da olabilir, kısa da.",
    null,
    "Karşılaştırılmayan iki kişiyi sıralama: Kaan ile Selin'in ikisi de Mert'ten kısadır ama birbirleriyle karşılaştırılmamıştır.",
    "Aşırı genelleme: Selin'in Mert'ten kısa olması onu en kısa yapmaz; Kaan ya da Tolga ondan kısa olabilir."
  ],
  aciklama: `Adım 1: Mert, Ece'den kısadır; Kaan Mert'ten, Selin de Mert'ten kısadır. Demek ki Mert, Kaan ve Selin'in üçü de Ece'den kısadır.
Adım 2: Tolga en uzun değildir. Geriye en uzun olabilecek tek kişi kalır: Ece.
Adım 3: Diğer ifadeleri dene. Ece, Mert, Tolga, Kaan, Selin sıralaması bütün bilgilere uyar: Burada Tolga Mert'ten kısadır, Kaan Selin'den uzundur, Selin en kısadır.
Adım 4: Ece, Tolga, Mert, Selin, Kaan sıralaması da bütün bilgilere uyar: Burada Tolga Mert'ten uzun, Kaan Selin'den kısa, Selin en kısa değildir. Yani A, C ve D kesin değildir.
Sık yapılan hata: Birbiriyle hiç karşılaştırılmamış iki kişi (Kaan ile Selin) hakkında hüküm vermek.
Cevap B.`
},
{
  id: "tur-sm-311",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun çevrim içi ödev sistemine üye olan öğrenciler, kayıt ekranında gösterilen kurallara uygun bir şifre belirlemek zorundadır. Kurallardan biri bile sağlanmazsa sistem şifreyi kabul etmemektedir. Dört öğrenci aşağıdaki şifreleri denemiştir.
**Buna göre sistem aşağıdaki şifrelerden hangisini kabul eder?**`,
  gorsel: `<table class="tablo"><tr><th>Şifre kuralları</th></tr><tr><td>1. Şifre 8 karakterden oluşmalıdır.</td></tr><tr><td>2. Şifrenin ilk karakteri bir harf olmalıdır.</td></tr><tr><td>3. Şifrede en az iki rakam bulunmalı ama iki rakam yan yana gelmemelidir.</td></tr><tr><td>4. Aynı harf şifrede birden fazla kullanılmamalıdır.</td></tr></table>`,
  secenekler: ["Deniz5k8", "Kuzey49t", "3Balık7m", "Serçe2e7"],
  dogru: 0,
  hatalar: [
    null,
    "Üçüncü kuralın ikinci yarısını atlama: 4 ile 9 yan yana gelmiştir.",
    "İkinci kuralı atlama: Şifre bir rakamla (3) başlamaktadır.",
    "Dördüncü kuralı atlama: \"e\" harfi şifrede üç kez geçmektedir."
  ],
  aciklama: `Adım 1: Dört şifrenin hepsi 8 karakterlidir; birinci kural hiçbirini elemez. Bu yüzden diğer kurallara bak.
Adım 2: Kuzey49t: 4 ve 9 yan yana. Üçüncü kurala aykırı.
Adım 3: 3Balık7m: İlk karakter rakam. İkinci kurala aykırı.
Adım 4: Serçe2e7: "e" harfi üç kez geçiyor. Dördüncü kurala aykırı.
Adım 5: Deniz5k8: Harfle başlıyor; iki rakamı (5 ve 8) var ve aralarında "k" harfi bulunuyor; D, e, n, i, z, k harflerinin hiçbiri tekrar etmiyor. Dört kural da sağlanıyor.
Sık yapılan hata: Bir kuralın iki parçası olduğunda (iki rakam olsun ama yan yana olmasın) yalnızca birine bakmak.
Cevap A.`
},
{
  id: "tur-sm-312",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Beş katlı bir apartmanın her katında bir aile oturmaktadır: Aksoy, Bulut, Çelik, Doğan ve Erdem aileleri. Katlar görseldeki gibi aşağıdan yukarıya 1'den 5'e kadar numaralandırılmıştır. Aileler hakkında şunlar bilinmektedir:
• Bulut ailesi, Çelik ailesinin hemen bir üst katında oturur.
• Erdem ailesi, Doğan ailesinden iki kat yukarıda oturur.
• Aksoy ailesi en üst katta da en alt katta da oturmaz.
• Çelik ailesi 1. katta oturmaz.
**Buna göre 3. katta hangi aile oturur?**`,
  gorsel: `<svg viewBox="0 0 300 260" role="img" aria-label="Beş katlı apartman; katlar aşağıdan yukarıya 1'den 5'e numaralı">
<polygon points="60,40 150,8 240,40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="60" y="40" width="180" height="42"/><rect x="60" y="82" width="180" height="42"/><rect x="60" y="124" width="180" height="42"/><rect x="60" y="166" width="180" height="42"/><rect x="60" y="208" width="180" height="42"/>
</g>
<g font-size="15" fill="currentColor">
<text x="8" y="66">5. kat</text><text x="8" y="108">4. kat</text><text x="8" y="150">3. kat</text><text x="8" y="192">2. kat</text><text x="8" y="234">1. kat</text>
</g>
<g font-size="17" text-anchor="middle" fill="currentColor">
<text x="150" y="67">?</text><text x="150" y="109">?</text><text x="150" y="151">?</text><text x="150" y="193">?</text><text x="150" y="235">?</text>
</g>
</svg>`,
  secenekler: ["Aksoy", "Çelik", "Erdem", "Doğan"],
  dogru: 2,
  hatalar: [
    "Ortadaki katı Aksoy'a verip denemeyi bırakma: Aksoy 3. kata konursa Doğan ile Erdem arasında iki kat bırakılamaz; Aksoy 2. kattadır.",
    "Çelik-Bulut ikilisini 3-4. katlara yerleştirme: O zaman boş kalan 1, 2 ve 5. katlarda Erdem'i Doğan'ın iki kat üstüne koymak mümkün olmaz.",
    null,
    "İlişkiyi ters kurma: Erdem, Doğan'ın iki kat üstündedir; Doğan en alttaki 1. kattadır."
  ],
  aciklama: `Adım 1: Çelik 1. katta değil ve Bulut hemen üstünde. Çelik-Bulut ikilisi 2-3, 3-4 ya da 4-5. katlarda olabilir.
Adım 2: Erdem, Doğan'ın iki kat üstündedir: Doğan-Erdem ikilisi 1-3, 2-4 ya da 3-5. katlarda olabilir. Aksoy ise 2, 3 ya da 4. kattadır.
Adım 3: Çelik-Bulut 2-3'te olursa boş katlar 1, 4, 5 olur; Aksoy 4'e gider, Doğan ile Erdem'e 1 ve 5 kalır. Aralarında iki kat yok, olmaz.
Adım 4: Çelik-Bulut 3-4'te olursa boş katlar 1, 2, 5 olur; Aksoy 2'ye gider, 1 ve 5 yine uymaz, olmaz.
Adım 5: Çelik-Bulut 4-5'tedir. Boş katlar 1, 2, 3. Doğan 1, Erdem 3 olursa Aksoy 2'ye yerleşir ve bütün kurallar sağlanır.
Sıralama (aşağıdan yukarı): Doğan, Aksoy, Erdem, Çelik, Bulut.
Sağlama: Erdem (3) Doğan'ın (1) iki kat üstünde, Bulut (5) Çelik'in (4) hemen üstünde; Aksoy 2. katta.
Cevap C.`
},
{
  id: "tur-sm-313",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hayvan barınağında pazartesiden perşembeye kadar her gün bir gönüllü çalışacaktır. Gizem, Hakan, İpek ve Kerem'in her biri bu dört günden yalnızca birinde gelecek ve her güne bir kişi düşecektir. Aşağıdaki çizelgede gönüllülerin gelebileceği günler ✓ ile, gelemeyecekleri günler – ile gösterilmiştir.
**Buna göre perşembe günü barınakta hangi gönüllü çalışır?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th></tr><tr><th>Gizem</th><td>✓</td><td>✓</td><td>–</td><td>✓</td></tr><tr><th>Hakan</th><td>–</td><td>✓</td><td>–</td><td>–</td></tr><tr><th>İpek</th><td>✓</td><td>–</td><td>–</td><td>–</td></tr><tr><th>Kerem</th><td>–</td><td>✓</td><td>✓</td><td>✓</td></tr></table>`,
  secenekler: ["Gizem", "Hakan", "İpek", "Kerem"],
  dogru: 0,
  hatalar: [
    null,
    "Satır kaydırma: Hakan'ın satırında yalnızca salı günü işaretlidir; Hakan perşembe gelemez.",
    "Sütunları karıştırma: İpek'in gelebileceği tek gün pazartesidir.",
    "Yalnızca perşembe sütununa bakma: Kerem perşembe gelebilir ama çarşambaya gelebilecek tek kişi odur, bu yüzden çarşamba günü çalışır."
  ],
  aciklama: `Çizelge sorularında seçeneği en az olan kişiden ya da günden başla.
Adım 1: İpek'in yalnızca pazartesisi var: İpek pazartesi.
Adım 2: Hakan'ın yalnızca salısı var: Hakan salı.
Adım 3: Çarşamba sütununda yalnızca Kerem işaretli: Kerem çarşamba.
Adım 4: Geriye perşembe ve Gizem kalır. Gizem'in perşembe kutusu işaretli, uyuyor.
Sağlama: Her gün bir kişi, her kişi bir gün; hiçbir kişi işaretsiz bir güne yerleşmedi.
Sık yapılan hata: Yalnızca sorulan günün sütununa bakıp orada işareti olan ilk kişiyi seçmek. Perşembe sütununda iki kişi vardır; karar diğer günlerden gelir.
Cevap A.`
},
{
  id: "tur-sm-314",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Okullar arası bilgi yarışmasında dört takım 10'ar soru cevaplamıştır. Yarışmanın puanlama kuralları şunlardır:
• Her doğru cevap 2 puan kazandırır.
• Her yanlış cevap 1 puan kaybettirir.
• Boş bırakılan soru puanı değiştirmez.
• Puanları eşit olan takımlardan yanlış sayısı az olan üst sırada yer alır.
Takımların sonuçları tabloda verilmiştir.
**Buna göre sıralamada ikinci olan takım hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Takım</th><th>Doğru</th><th>Yanlış</th><th>Boş</th></tr><tr><td>Atmaca</td><td>7</td><td>1</td><td>2</td></tr><tr><td>Kırlangıç</td><td>7</td><td>2</td><td>1</td></tr><tr><td>Serçe</td><td>5</td><td>0</td><td>5</td></tr><tr><td>Martı</td><td>6</td><td>0</td><td>4</td></tr></table>`,
  secenekler: ["Atmaca", "Kırlangıç", "Martı", "Serçe"],
  dogru: 2,
  hatalar: [
    "Birinciyi ikinci sanma: Atmaca 13 puanla birincidir.",
    "Eşitlik kuralını ters uygulama: Kırlangıç ile Martı 12'şer puanla eşittir; eşitlikte doğru sayısına değil yanlış sayısına bakılır ve Martı'nın yanlışı daha azdır.",
    null,
    "Yanlışı olmayan takımı üst sırada sanma: Yanlış sayısı yalnızca puanlar eşitken işe yarar; Serçe 10 puanla sonuncudur."
  ],
  aciklama: `Adım 1: Her takımın puanını bul: doğru sayısının 2 katından yanlış sayısını çıkar.
Atmaca: 14 − 1 = 13. Kırlangıç: 14 − 2 = 12. Serçe: 10 − 0 = 10. Martı: 12 − 0 = 12.
Adım 2: En yüksek puan Atmaca'nındır; Atmaca birinci.
Adım 3: Kırlangıç ile Martı 12'şer puanla eşittir. Dördüncü kurala göre yanlışı az olan üstte yer alır: Martı'nın 0, Kırlangıç'ın 2 yanlışı var. Martı ikinci, Kırlangıç üçüncü olur.
Adım 4: Serçe 10 puanla dördüncüdür.
Sık yapılan hata: Eşitlik kuralını, puanlar eşit değilken de kullanmak ya da eşitlikte doğru sayısına bakmak.
Cevap C.`
},
{
  id: "tur-sm-315",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul servisinin arka bölümünde iki sıra hâlinde altı koltuk vardır. Ön sıradaki her koltuğun hemen arkasında, arka sıradan bir koltuk bulunur. Alp, Buse, Cenk, Duru ve Eren bu koltuklara oturmuş, bir koltuk boş kalmıştır. Şunlar bilinmektedir:
• Alp ön sırada, pencere kenarındaki koltuklardan birinde oturur.
• Buse, Alp'in hemen arkasında oturur.
• Cenk ön sıranın ortasındaki koltukta oturur.
• Duru, Eren'in hemen önündeki koltukta oturur.
**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: `<svg viewBox="0 0 440 250" role="img" aria-label="Servisin arka bölümü: iki sıra, her sırada üç koltuk; iki yanda pencere">
<text x="220" y="20" font-size="15" text-anchor="middle" fill="currentColor">Aracın ön tarafı ↑</text>
<line x1="60" y1="34" x2="60" y2="236" stroke="var(--vurgu)" stroke-width="5"/>
<line x1="380" y1="34" x2="380" y2="236" stroke="var(--vurgu)" stroke-width="5"/>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="85" y="50" width="80" height="70" rx="8"/><rect x="180" y="50" width="80" height="70" rx="8"/><rect x="275" y="50" width="80" height="70" rx="8"/>
<rect x="85" y="150" width="80" height="70" rx="8"/><rect x="180" y="150" width="80" height="70" rx="8"/><rect x="275" y="150" width="80" height="70" rx="8"/>
</g>
<g font-size="14" fill="currentColor">
<text x="6" y="90">Pencere</text><text x="386" y="90">Pencere</text>
<text x="6" y="190">Pencere</text><text x="386" y="190">Pencere</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="220" y="90">Ön sıra</text><text x="220" y="190">Arka sıra</text>
<text x="125" y="246">Sol</text><text x="315" y="246">Sağ</text>
</g>
</svg>`,
  secenekler: [
    "Boş koltuğun arka sıranın ortasında olduğu",
    "Eren'in arka sırada pencere kenarında oturduğu",
    "Duru'nun ön sırada pencere kenarında oturduğu",
    "Alp'in sol taraftaki pencere kenarında oturduğu"
  ],
  dogru: 3,
  hatalar: [
    "Kesin olanı bilinemez sanma: Ön sıra Alp, Cenk ve Duru ile dolar; arkada Buse ve Eren pencere kenarlarına oturunca ortadaki koltuk boş kalır.",
    "Kesin olanı bilinemez sanma: Eren, pencere kenarındaki Duru'nun hemen arkasındadır; yani arka sırada pencere kenarındadır.",
    "Kesin olanı bilinemez sanma: Arkasında Eren bulunan Duru ön sıradadır; ortada Cenk olduğu için Duru pencere kenarındadır.",
    null
  ],
  aciklama: `"Kesin olarak bilinemez" sorusunda, bilgilere uyan iki farklı yerleşimde değişen ayrıntıyı ararsın.
Adım 1: Duru'nun hemen arkasında Eren var; demek ki Duru ön sıradadır. Ön sırada Alp (pencere), Cenk (orta) ve Duru oturur. Duru'ya öteki pencere kalır.
Adım 2: Arka sırada Buse Alp'in, Eren Duru'nun arkasındadır. İkisi de pencere tarafındadır; ortadaki arka koltuk boştur.
Adım 3: Alp solda, Duru sağda oturabilir; ya da tam tersi. İki yerleşim de bütün bilgilere uyar. Bu yüzden Alp'in hangi taraftaki pencerede oturduğu bilinemez.
Sağlama: A, B ve C şıklarındaki bilgiler iki yerleşimde de aynı kalıyor.
Cevap D.`
},
{
  id: "tur-sm-316",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kıyı kasabasındaki gezi teknesi, günübirlik turunda altı koya birer kez uğramaktadır: Çamlık, Fener, İncirli, Kayalı, Martı ve Zeytinli. Tekne sabah limandan ayrılmakta, yolcular her koyda bir süre karaya çıkabilmektedir. Teknenin kaptanı, yeni sezonun durak sırasını belirlerken defterine şu notları yazmıştır:

"Öğle yemeğini her yıl olduğu gibi Zeytinli Koyu'nda vereceğiz; bu yüzden Zeytinli ya üçüncü ya da dördüncü durağımız olmalı. Fener Koyu'ndaki iskele öğleden sonra balıkçılara bırakıldığı için oraya Zeytinli'deki yemek molasından önce uğramak zorundayız. İncirli'de tekneye binecek dalış ekibini Çamlık'ta indireceğimizden İncirli'den ayrılınca doğruca Çamlık'a gideceğiz; araya başka bir koy girmeyecek. Kayalı ile Martı'da yüzme molası veriyoruz. Yolcular üst üste iki kez denize girip yorulmasın diye bu iki koya art arda uğramayacağız; aralarında en az bir başka koy olacak. Martı Koyu akşama doğru sert rüzgâr aldığından turu orada bitirmeyeceğiz, son durağımız başka bir koy olacak."

Bu notların hepsine uyan birden çok durak sırası vardır.

**Buna göre, notlara uyan bütün durak sıraları düşünüldüğünde aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Fener Koyu, teknenin uğradığı ilk duraktır.", "İncirli Koyu'na Zeytinli'den sonra uğranır.", "Çamlık Koyu, teknenin uğradığı son duraktır.", "Kayalı Koyu'na Martı Koyu'ndan sonra uğranır."],
  dogru: 1,
  hatalar: ["Olası olanı kesin sanma: Fener'in Zeytinli'den önce olması, ilk durak olmasını gerektirmez. Kayalı, Fener, Zeytinli, Martı, İncirli, Çamlık sırası bütün notlara uyar ve Fener ikinci duraktır.", null, "Çoğu sırada doğru olanı kesin sanma: Çamlık çoğu sırada son duraktır ama Fener, Martı, Zeytinli, İncirli, Çamlık, Kayalı sırası da notlara uyar; burada tur Kayalı'da biter.", "Yasağı sıralama sanma: Notlar Kayalı ile Martı'nın art arda olmasını yasaklar, hangisinin önce geleceğini söylemez. Kayalı, Fener, Zeytinli, Martı, İncirli, Çamlık sırasında Kayalı öndedir."],
  aciklama: `"Kesinlikle doğru" olan ifade, notlara uyan bütün sıralarda doğru kalan ifadedir. Tek bir uygun sırada bile bozuluyorsa kesin değildir.
Adım 1: Notları kısa koşullara çevir. Zeytinli 3. ya da 4. durak. Fener, Zeytinli'den önce. İncirli'nin hemen ardından Çamlık gelir; bu ikisini "İncirli-Çamlık ikilisi" diye düşün. Kayalı ile Martı art arda değil. Martı son durak değil.
Adım 2: En çok yer kaplayan parçadan başla: İkili Zeytinli'den önce olabilir mi? Zeytinli 3. duraksa önünde yalnızca iki yer vardır. İkili bu iki yeri doldurur ve Fener'e Zeytinli'den önce yer kalmaz. Olmaz.
Adım 3: Zeytinli 4. duraksa önünde üç yer vardır; ikili ile Fener bu üç yeri doldurur. Geriye 5. ve 6. duraklar kalır ve bunlar Kayalı ile Martı'ya düşer. Oysa bu iki koya art arda uğranamaz. Bu da olmaz.
Adım 4: Demek ki İncirli-Çamlık ikilisi her durumda Zeytinli'den sonradır. B şıkkı bütün sıralarda doğrudur.
Adım 5: Öteki şıkları birer karşı örnekle ele. Kayalı, Fener, Zeytinli, Martı, İncirli, Çamlık sırası bütün notlara uyar; burada Fener ilk durak değildir (A) ve Kayalı'ya Martı'dan önce uğranır (D). Fener, Martı, Zeytinli, İncirli, Çamlık, Kayalı sırası da notlara uyar; burada son durak Çamlık değildir (C).
Sık yapılan hata: Bulduğun ilk uygun sırada doğru çıkan ifadeyi "kesin" saymak. Bir ifadenin kesin olmadığını göstermek için tek karşı örnek yeter; kesin olduğunu göstermek için ise tersinin hiçbir biçimde kurulamadığını göstermelisin.
Cevap B.`
},
{
  id: "tur-sm-317",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir seramik atölyesinde Asel, Baran, Ceylin, Demir ve Elçin'in yaptığı birer eser fırınlanacaktır. Eserler bir vazo, bir kâse, bir kupa, bir tabak ve bir saksıdır; her öğrenci bunlardan farklı birini yapmıştır. Fırının alttan üste doğru 1'den 5'e kadar numaralanmış beş rafı vardır ve her rafa tek eser konacaktır. Eserinin hangi rafta pişeceğini merak eden öğrencilere atölye öğretmeni şunları söylemiştir:

"Yerleşimin tamamına yarın karar vereceğim ama bazı şeyler şimdiden belli. Vazo öteki eserlerden uzun olduğu için yalnızca en üstteki rafa sığıyor. Kâseyi Asel yaptı; en alttaki raf çok ısındığından ince kenarlı kâseyi oraya koymayacağım. Kupa ile tabağın sırları birbirine bulaşmasın diye bu ikisini alt alta gelen iki rafa yerleştirmeyeceğim. Baran ile Ceylin eserlerini aynı çamurdan yaptığı için onları birbirinden uzaklaştırmak istemiyorum: Baran'ın eseri, Ceylin'inkinin hemen bir üstündeki rafta duracak. Elçin'in eserini Demir'inkinden daha alttaki raflardan birine koyacağım. Demir'e gelince, saksıyı yapan o değil."

**Öğretmenin söylediklerine uyan yerleşimler düşünüldüğünde aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["Demir'in eseri kupadır.", "Elçin'in eseri saksıdır.", "Baran'ın eseri üçüncü raftadır.", "Elçin'in eseri ikinci raftadır."],
  dogru: 3,
  hatalar: ["Ender durumu olamaz sanma: Demir çoğu yerleşimde vazonun sahibidir ama bu zorunlu değildir. Alttan üste Elçin tabak, Asel kâse, Demir kupa, Ceylin saksı, Baran vazo yerleşimi bütün koşullara uyar.", "Verilmeyen bir yasağı ekleme: Saksı için tek bilgi, onu Demir'in yapmadığıdır. Alttan üste Elçin saksı, Demir kupa, Asel kâse, Ceylin tabak, Baran vazo yerleşimi bütün koşullara uyar.", "Eksik deneme: Baran 3. rafta olunca Ceylin 2. rafa iner; 1. rafa Elçin, üstteki raflara Asel ile Demir yerleşir. Alttan üste Elçin kupa, Ceylin saksı, Baran tabak, Asel kâse, Demir vazo yerleşimi koşullara uyar.", null],
  aciklama: `"Olamaz" sorusunda her şıkkı bir varsayım gibi dene. Bütün koşullara uyan tek bir yerleşim bile kurabiliyorsan o şık olabilir demektir.
Adım 1: Anlatılanları kısa koşullara çevir. Vazo 5. rafta. Kâse Asel'in ve 1. rafta değil. Kupa ile tabak komşu raflarda değil. Baran, Ceylin'in hemen üstünde. Elçin, Demir'den aşağıda. Demir'in eseri saksı değil.
Adım 2: En alttaki rafa kim gelebilir, onu bul. Asel gelemez (kâse en alta konmaz). Baran gelemez (hemen altında Ceylin olmalı). Demir gelemez (altında Elçin olmalı). Demek ki 1. rafta ya Ceylin ya da Elçin vardır.
Adım 3: D şıkkını dene: Elçin 2. rafta olsun. O zaman 1. raf Ceylin'e kalır. Ceylin 1. raftaysa Baran onun hemen üstünde, yani 2. rafta olmalıdır. Ama 2. raf Elçin'indir. Çelişki çıktı: Elçin'in eseri 2. rafta olamaz.
Adım 4: Öteki şıklar için alttan üste birer yerleşim kur. A için: Elçin tabak, Asel kâse, Demir kupa, Ceylin saksı, Baran vazo. B için: Elçin saksı, Demir kupa, Asel kâse, Ceylin tabak, Baran vazo. C için: Elçin kupa, Ceylin saksı, Baran tabak, Asel kâse, Demir vazo. Üçünde de vazo en üstte, kâse en altta değil, kupa ile tabak komşu değil, Baran Ceylin'in hemen üstünde, Elçin Demir'den aşağıda ve saksı Demir'in değil.
Sık yapılan hata: Bir şık aklına ilk gelen yerleşimde tutmayınca hemen "olamaz" demek. Bir şıkkın olamayacağını söylemek için hiçbir yerleşimin kurulamadığını, Adım 3'teki gibi bir çelişkiyle göstermelisin.
Cevap D.`
},
{
  id: "tur-sm-318",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ortaokulun bilim şenliğinde cuma, cumartesi ve pazar günleri, sabah ve öğleden sonra birer oturum olmak üzere toplam altı oturum düzenlenecektir. Altı atölyenin her biri bir kez yapılacak, her oturuma tek atölye konacak ve her atölyeyi tek bir öğretmen yürütecektir. Atölyelerin yürütücüleri ile yapılacakları yerler Tablo 1'de, şenlik çizelgesinin şimdiye kadar doldurulan bölümü Tablo 2'de verilmiştir. Çizelgenin kalanı şu kurallara göre doldurulacaktır:
• Bir öğretmen aynı gün içinde iki atölye yürütmeyecektir.
• Bahçe öğleden sonraları başka etkinliklere ayrıldığı için bahçede yapılan atölyeler sabah oturumuna konacaktır.
• Harita atölyesinde, Mıknatıs atölyesinde yapılan pusulalar kullanılacağından Harita atölyesi Mıknatıs atölyesinden sonraki günlerin birinde yapılacaktır.

**Buna göre çizelgenin tamamlanmış hâliyle ilgili aşağıdakilerden hangisi doğru olabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th colspan=\"3\">Tablo 1</th></tr><tr><th>Atölye</th><th>Yürütücü</th><th>Yer</th></tr><tr><td>Drone</td><td>Nevin Öğretmen</td><td>Bahçe</td></tr><tr><td>Fosil</td><td>Tarık Öğretmen</td><td>Laboratuvar</td></tr><tr><td>Harita</td><td>Nevin Öğretmen</td><td>Kütüphane</td></tr><tr><td>Mıknatıs</td><td>Sevgi Öğretmen</td><td>Laboratuvar</td></tr><tr><td>Roket</td><td>Tarık Öğretmen</td><td>Bahçe</td></tr><tr><td>Sabun</td><td>Sevgi Öğretmen</td><td>Laboratuvar</td></tr></table><br><table class=\"tablo\"><tr><th colspan=\"4\">Tablo 2</th></tr><tr><th>Oturum</th><th>Cuma</th><th>Cumartesi</th><th>Pazar</th></tr><tr><th>Sabah</th><td>?</td><td>?</td><td>?</td></tr><tr><th>Öğleden sonra</th><td>?</td><td>Sabun</td><td>?</td></tr></table>",
  secenekler: ["Harita atölyesi cumartesi, Roket atölyesi cuma günü yapılır.", "Harita atölyesi cumartesi, Drone atölyesi cuma günü yapılır.", "Fosil atölyesi cuma, Roket atölyesi cumartesi günü yapılır.", "Fosil atölyesi cuma, Mıknatıs atölyesi cumartesi günü yapılır."],
  dogru: 0,
  hatalar: [null, "Kalan atölyeleri denetlememe: Harita cumartesi, Drone cuma olunca cumaya Mıknatıs da girer ve pazara Roket ile Fosil kalır. İkisini de Tarık Öğretmen yürüttüğü için aynı güne konamazlar.", "Kalan atölyeleri denetlememe: Fosil cuma, Roket cumartesi olunca cuma Mıknatıs'la, cumartesi Sabun'la dolar ve pazara Drone ile Harita kalır. İkisini de Nevin Öğretmen yürüttüğü için aynı güne konamazlar.", "İki tabloyu birleştirmeme: Tablo 2'ye göre Sabun cumartesi günüdür, Tablo 1'e göre Mıknatıs'ı da Sabun'u da Sevgi Öğretmen yürütür. Mıknatıs cumartesiye konursa aynı öğretmen bir günde iki atölye yürütmüş olur."],
  aciklama: `"Doğru olabilir" sorusunda şıkkı doğru kabul et, çizelgenin kalanını doldur. Bütün kurallara uyan tek bir çizelge kurabiliyorsan o şık olabilir.
Adım 1: Tablo 1'den öğretmen çiftlerini çıkar: Drone ile Harita (Nevin Öğretmen), Fosil ile Roket (Tarık Öğretmen), Mıknatıs ile Sabun (Sevgi Öğretmen). Aynı çiftin iki atölyesi aynı güne konamaz.
Adım 2: Bahçede yapılan Drone ile Roket yalnızca sabah oturumuna girer. Bir günde tek sabah oturumu olduğundan bu ikisi de aynı güne konamaz.
Adım 3: Mıknatıs'ın gününü bul. Tablo 2'ye göre Sabun cumartesi günüdür; Mıknatıs aynı öğretmenin olduğu için cumartesiye konamaz. Harita'dan önceki bir günde yapılacağı için pazara da konamaz. Mıknatıs cuma günüdür. Bu, D şıkkını eler.
Adım 4: A şıkkını dene: Roket cuma sabah, Mıknatıs cuma öğleden sonra, Harita cumartesi sabah. Pazara Drone (sabah) ile Fosil (öğleden sonra) kalır. Cuma günü Tarık ve Sevgi, cumartesi günü Nevin ve Sevgi, pazar günü Nevin ve Tarık Öğretmen görevlidir; hiçbir öğretmen bir günde iki atölye yürütmez. Bahçe atölyeleri sabahtadır, Harita Mıknatıs'tan sonraki gündedir. A olabilir.
Adım 5: B şıkkında cuma Drone ile Mıknatıs'a, cumartesi Harita ile Sabun'a gider; pazara Roket ile Fosil kalır, ikisi de Tarık Öğretmen'indir. C şıkkında cuma Fosil ile Mıknatıs'a, cumartesi Roket ile Sabun'a gider; pazara Drone ile Harita kalır, ikisi de Nevin Öğretmen'indir. İkisi de olamaz.
Sık yapılan hata: Şıkta adı geçen iki atölyeyi kurallarla karşılaştırıp sorun görmeyince "olabilir" demek. B ile C'de sorun, şıkta adı geçmeyen atölyeler yerleştirilirken ortaya çıkar; çizelgeyi sonuna kadar doldurmalısın.
Cevap A.`
},
{
  id: "tur-sm-319",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sahil kentinde belediyenin bisiklet kiralama sisteminde Gar, Meydan ve Sahil adlı üç istasyon vardır. Sistemin mart-haziran dönemini değerlendiren raporda şu bilgilere yer verilmiştir:

"Mart ayında en çok bisiklet Gar istasyonundan kiralanmış, Meydan ile Sahil istasyonlarındaki kiralama sayıları ise birbirine eşit çıkmıştır. Sahil istasyonu nisanda Meydan'ı geride bırakmış, mayısta ise onun gerisine düşmüştür. Üç istasyondan yalnızca birinde kiralama sayısı nisan, mayıs ve haziran aylarının her birinde bir önceki aya göre artmıştır. Gar istasyonu bu dönemdeki en yüksek kiralama sayısına mayıs ayında ulaşmıştır. Havaların ısınmasıyla Sahil istasyonunun haziran ayındaki kiralama sayısı, aynı istasyonun mart ayındaki sayısının iki katını aşmıştır."

**Bu bilgilere göre üç istasyonun aylara göre kiralama sayılarını gösteren tablo aşağıdakilerden hangisi olabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th colspan=\"5\">Tablo 1</th></tr><tr><th>İstasyon</th><th>Mart</th><th>Nisan</th><th>Mayıs</th><th>Haziran</th></tr><tr><td>Gar</td><td>50</td><td>60</td><td>80</td><td>85</td></tr><tr><td>Meydan</td><td>30</td><td>45</td><td>60</td><td>55</td></tr><tr><td>Sahil</td><td>30</td><td>50</td><td>45</td><td>70</td></tr></table><br><table class=\"tablo\"><tr><th colspan=\"5\">Tablo 2</th></tr><tr><th>İstasyon</th><th>Mart</th><th>Nisan</th><th>Mayıs</th><th>Haziran</th></tr><tr><td>Gar</td><td>65</td><td>75</td><td>95</td><td>85</td></tr><tr><td>Meydan</td><td>45</td><td>55</td><td>80</td><td>75</td></tr><tr><td>Sahil</td><td>45</td><td>60</td><td>70</td><td>90</td></tr></table><br><table class=\"tablo\"><tr><th colspan=\"5\">Tablo 3</th></tr><tr><th>İstasyon</th><th>Mart</th><th>Nisan</th><th>Mayıs</th><th>Haziran</th></tr><tr><td>Gar</td><td>55</td><td>70</td><td>90</td><td>85</td></tr><tr><td>Meydan</td><td>35</td><td>50</td><td>65</td><td>80</td></tr><tr><td>Sahil</td><td>35</td><td>60</td><td>55</td><td>75</td></tr></table><br><table class=\"tablo\"><tr><th colspan=\"5\">Tablo 4</th></tr><tr><th>İstasyon</th><th>Mart</th><th>Nisan</th><th>Mayıs</th><th>Haziran</th></tr><tr><td>Gar</td><td>60</td><td>75</td><td>95</td><td>80</td></tr><tr><td>Meydan</td><td>40</td><td>60</td><td>85</td><td>70</td></tr><tr><td>Sahil</td><td>40</td><td>70</td><td>70</td><td>100</td></tr></table>",
  secenekler: ["Tablo 1", "Tablo 2", "Tablo 3", "Tablo 4"],
  dogru: 2,
  hatalar: ["Artışı en yüksek değer sanma: Tablo 1'de Gar'ın sayısı mayısta 60'tan 80'e sıçramıştır ama haziranda 85'e çıkmıştır. Gar en yüksek sayısına mayısta değil haziranda ulaşmıştır.", "Sınır değeri dâhil etme: Tablo 2'de Sahil martta 45, haziranda 90'dır. 90, 45'in tam iki katıdır; rapor ise iki katın aşıldığını söyler.", null, "Aynı kalanı artmış sayma: Tablo 4'te Sahil'in sayısı nisanda da mayısta da 70'tir, yani mayısta artmamıştır. Gar ile Meydan da haziranda gerilediği için bu tabloda her ay artan bir istasyon yoktur."],
  aciklama: `Metinden tabloya geçilen sorularda önce metindeki her bilgiyi kısa bir koşula çevir, sonra her tabloyu bu koşulların hepsiyle tek tek karşılaştır. Tek bir koşula uymayan tablo elenir.
Adım 1: Koşulları çıkar. (1) Martta en büyük sayı Gar'da, Meydan ile Sahil eşit. (2) Nisanda Sahil, Meydan'dan büyük; mayısta küçük. (3) Her ay artan istasyon sayısı tam bir. (4) Gar'ın en büyük sayısı mayısta. (5) Sahil'in haziran sayısı, mart sayısının iki katından büyük.
Adım 2: (1) ve (2) dört tabloda da sağlanır; örneğin Tablo 3'te martta 55, 35, 35; nisanda Sahil 60, Meydan 50; mayısta Sahil 55, Meydan 65. Ayırt edici olan son üç koşuldur.
Adım 3: (3) numaralı koşul için her istasyonun üç geçişine de bak. Tablo 1'de yalnızca Gar (50, 60, 80, 85), Tablo 2'de yalnızca Sahil (45, 60, 70, 90), Tablo 3'te yalnızca Meydan (35, 50, 65, 80) her ay artmıştır. Tablo 4'te Gar ile Meydan haziranda gerilemiştir; Sahil ise 40, 70, 70, 100 diye gider. Nisandan mayısa sayı aynı kaldığı için bu bir artış değildir. Tablo 4'te her ay artan istasyon yoktur; Tablo 4 elenir.
Adım 4: (4) numaralı koşul: Tablo 1'de Gar'ın en büyük sayısı hazirandaki 85'tir; Tablo 1 elenir. Tablo 2'de (95) ve Tablo 3'te (90) en büyük sayı mayıstadır.
Adım 5: (5) numaralı koşul: Tablo 2'de 45'in iki katı 90'dır ve haziran sayısı tam 90'dır; "aşmıştır" koşulu sağlanmaz, Tablo 2 elenir. Tablo 3'te 35'in iki katı 70, haziran sayısı 75'tir; koşul sağlanır.
Sağlama: Tablo 3'te Gar 55, 70, 90, 85 (en büyük mayısta); Meydan 35, 50, 65, 80 (her ay artan tek istasyon); Sahil 35, 60, 55, 75 (mayısta düşmüş, haziranda 70'i aşmış).
Sık yapılan hata: Sözcüklerin çizdiği sınırı gevşek okumak. "Artmıştır" denmişse aynı kalan sayı artış sayılmaz; "aşmıştır" denmişse tam iki kat yetmez; "en yüksek" denmişse o aydan sonra daha büyük bir sayı gelmemelidir. Tabloyu bu sözcüklere göre denetle.
Cevap C.`
},
{
  id: "tur-sm-320",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun bahçesinde akasya, ceviz, çınar, dut, erik ve kestane olmak üzere altı ağaç vardır. Her biri farklı bir yılda dikilen bu ağaçlar dikiliş zamanına göre sıralandığında ilk dikilen 1., son dikilen 6. sırada yer almaktadır. Bu sırayı merak eden öğrenciler, okulun emekli bahçıvanını ziyaret etmiş ve ondan şunları dinlemiştir:

"Hangi ağacı hangi yıl diktiğimi artık çıkaramıyorum ama sıraları dün gibi aklımda. Bahçeye ilk fidanı okulun açıldığı yıl, sonuncusunu da emekli olmadan hemen önce diktim. Dutu diktiğimde çınar da kestane de çoktan bahçedeydi. Kestaneyle eriği art arda diktim, ikisinin arasında başka ağaç dikmedim; yalnız hangisinin önce olduğunu bana sormayın. Kestaneyle ceviz art arda dikilmedi: Birini diktikten sonra araya tek bir ağaç girdi, ardından ötekini diktim. Çınarla akasya için de durum aynıydı, onların arasında da tek bir ağaç var."

Öğrenciler daha sonra okul arşivindeki eski bir fotoğrafı incelemiş; bu fotoğrafta çınarın dikili olduğunu, kestanenin yerinin ise henüz boş durduğunu görmüştür.

**Bütün bu bilgilere göre aşağıdaki ağaçlardan hangisinin kaçıncı sırada dikildiği kesin olarak __belirlenemez__?**`,
  gorsel: null,
  secenekler: ["Ceviz", "Çınar", "Dut", "Erik"],
  dogru: 1,
  hatalar: ["Yarım bırakılan deneme: Bahçıvan kestaneyle cevizden hangisinin önce dikildiğini söylemez ama kestane 4. sıraya oturunca ceviz için 2 ve 6 kalır; 6. sıra duta ayrıldığından ceviz kesin olarak 2. sıradadır.", null, "Dolaylı kesinleşmeyi görmeme: Dut için yalnızca çınardan ve kestaneden sonra dikildiği söylenir; ama kestane 4., erik 5. sıraya oturunca dut kesin olarak 6. sıradadır.", "Bahçıvanın belirsizliğini sonuca taşıma: Bahçıvan kestaneyle erikten hangisinin önce olduğunu hatırlamaz. Oysa fotoğraftan gelen bilgiyle kestane 4. sıraya oturur, 3. sıra dolu olduğundan erik kesin olarak 5. sıradadır."],
  aciklama: `Bu soruda bütün sıra tek biçimde belirlenmiyor; senden hangi ağacın yerinin açıkta kaldığı isteniyor. Bunun için bilgilere uyan bütün sıraları bulmalısın.
Adım 1: Bilgileri kısa koşullara çevir. Dut, çınardan ve kestaneden sonra. Kestane ile erik art arda. Kestane ile ceviz arasında tam bir ağaç var. Çınar ile akasya arasında tam bir ağaç var. Fotoğrafta çınar var, kestane yok; demek ki çınar, kestaneden önce dikilmiş.
Adım 2: En çok koşulda geçen ağaçtan, kestaneden başla. Kestaneden önce çınar, sonra dut olduğu için kestane 1. ya da 6. olamaz.
Adım 3: Kestane 2. olsa çınar 1., akasya 3. olur; eriğe kestanenin yanında yer kalmaz. Kestane 3. olsa çınar 1. ya da 2. olur. Çınar 1. ise akasya 3. sıraya, yani kestanenin yerine düşer. Çınar 2. ise akasya 4. olur ve eriğe kestanenin yanında yine yer kalmaz. Kestane 5. olsa dut 6., ceviz 3., erik 4. olur; çınarla akasyaya 1 ve 2 kalır, aralarına ağaç giremez. Bu üç durum da olmaz.
Adım 4: Demek ki kestane 4. sıradadır. Dut 5. ya da 6., ceviz 2. ya da 6., erik 3. ya da 5. olabilir. Çınar 2. olamaz (akasya 4. sıraya düşerdi). Çınar 1. ise akasya 3. olur; erik 5., dut 6., ceviz 2. sıraya yerleşir. Çınar 3. ise akasya 1. olmak zorundadır (5. olsa eriğe yer kalmazdı); erik 5., dut 6., ceviz 2. olur.
Adım 5: İki sıra çıktı: çınar, ceviz, akasya, kestane, erik, dut ve akasya, ceviz, çınar, kestane, erik, dut. Ceviz (2.), kestane (4.), erik (5.) ve dut (6.) iki sırada da aynı yerdedir. Çınar ise birinde 1., ötekinde 3. sıradadır.
Sık yapılan hata: Bahçıvanın "hangisi önce, sormayın" dediği ağaçları belirsiz saymak. Tek başına belirsiz görünen bir bilgi, öteki koşullarla birleşince kesinleşebilir; kararı bütün sıraları çıkardıktan sonra ver.
Cevap B.`
},
{
  id: "tur-sm-321",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gençlik kampının dağ evinde, koridor boyunca yan yana dizilmiş ve 1'den 6'ya kadar numaralanmış altı oda vardır. Kampa katılan altı izci takımı kendilerine birer kuş adı seçmiştir: Atmaca, Kırlangıç, Leylek, Puhu, Saka ve Turna. Odaların hepsi aynı büyüklüktedir ve her odada tek bir takım kalmaktadır. Kamp sorumlusu odaları dağıtırken takımların alışkanlıklarını göz önünde bulundurmuş ve şunlara dikkat etmiştir:
• Sabahları en geç kalkan Leylek takımına, kapıları çok kullanılan koridorun iki ucundaki odaları vermemiştir.
• Kamp ateşi gösterisine birlikte hazırlanan Saka ile Turna takımlarını birbirinden uzağa düşürmemiş, ancak yan yana kalınca geç saatlere kadar konuştukları için bu iki takımın odaları arasında tam bir oda bırakmıştır.
• Malzemeleri ortak olan Puhu ve Kırlangıç takımlarını yan yana yerleştirmiş, Kırlangıç'a Puhu'nun odasından hemen sonra gelen numarayı vermiştir.
• Saka takımına hem Kırlangıç'ın hem de Atmaca'nın odasından daha küçük numaralı bir oda vermiştir.
Bu bilgiler, altı takımın oda numaralarını tek tek bulmaya yetmemektedir; birbirinden farklı birkaç yerleşim bu bilgilerin hepsine uymaktadır.

**Bu bilgilere ek olarak aşağıdakilerden hangisi bilinirse bütün takımların oda numaraları kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: ["Atmaca takımının 4 numaralı odada kaldığı", "Kırlangıç takımının 5 numaralı odada kaldığı", "Saka takımının 3 numaralı odada kaldığı", "Leylek takımının 4 numaralı odada kaldığı"],
  dogru: 3,
  hatalar: ["Yer değiştirebilen ikiliyi gözden kaçırma: Atmaca 4'teyken Puhu 5'e, Kırlangıç 6'ya, Leylek 2'ye yerleşir; ama Saka ile Turna 1 ve 3 numaralı odaları iki biçimde paylaşabilir.", "Yer değiştirebilen ikiliyi gözden kaçırma: Kırlangıç 5'teyken Puhu 4'e, Atmaca 6'ya, Leylek 2'ye yerleşir; ama Saka ile Turna 1 ve 3 numaralı odaları iki biçimde paylaşabilir.", "Birkaç odayı bulmayı yeterli sanma: Saka 3'teyken Turna 1'e, Leylek 2'ye yerleşir; ama kalan odalar ya Atmaca 4, Puhu 5, Kırlangıç 6 ya da Puhu 4, Kırlangıç 5, Atmaca 6 biçiminde dolabilir.", null],
  aciklama: `"Hangisi bilinirse kesinleşir" sorusunda önce bilgilere uyan bütün yerleşimleri çıkar, sonra her şıkkın bu yerleşimlerden kaçını bıraktığına bak. Tek yerleşim bırakan şık doğrudur.
Adım 1: Koşulları yaz. Leylek 1 ve 6 numarada değil. Saka ile Turna arasında tam bir oda var. Kırlangıç, Puhu'dan hemen sonraki numarada. Saka'nın numarası Kırlangıç'ınkinden ve Atmaca'nınkinden küçük.
Adım 2: Saka'yı yerleştir. Kırlangıç Saka'dan büyük numaradadır; Puhu Kırlangıç'ın hemen önünde olduğu için o da Saka'dan büyük numarada kalır. Atmaca da öyle. Saka'nın sağında en az üç oda olmalıdır; Saka 1, 2 ya da 3 numaradadır. Saka'dan küçük numaralı odalara yalnızca Leylek ile Turna girebilir.
Adım 3: Saka 2'de olsa 1 numaraya Leylek ya da Turna girmeli. Leylek uçta olamaz; Turna 1'de olsa Saka'yla arasında oda kalmaz. Saka 2'de olamaz.
Adım 4: Saka 1'deyse Turna 3'tedir. Puhu-Kırlangıç ikilisi 4-5'e girerse Leylek 2, Atmaca 6 olur. İkili 5-6'ya girerse Leylek ile Atmaca 2 ve 4'ü iki biçimde paylaşır. Buradan üç yerleşim çıkar: Saka, Leylek, Turna, Puhu, Kırlangıç, Atmaca; Saka, Leylek, Turna, Atmaca, Puhu, Kırlangıç; Saka, Atmaca, Turna, Leylek, Puhu, Kırlangıç.
Adım 5: Saka 3'teyse 1 ve 2 numaralar Turna ile Leylek'indir; Leylek uçta olamayacağından Turna 1, Leylek 2'dir. Kalan odalar iki biçimde dolar: Turna, Leylek, Saka, Puhu, Kırlangıç, Atmaca; Turna, Leylek, Saka, Atmaca, Puhu, Kırlangıç. Toplam beş yerleşim vardır.
Adım 6: Şıkları say. Atmaca 4'te: iki yerleşim. Kırlangıç 5'te: iki yerleşim. Saka 3'te: iki yerleşim. Leylek 4'te: yalnızca Saka, Atmaca, Turna, Leylek, Puhu, Kırlangıç.
Sık yapılan hata: Ek bilgiyle birkaç takımın odasını bulunca yerleşimin tamamını belirlenmiş saymak. Soruda bütün takımların odası isteniyor; kalan takımların tek biçimde yerleşip yerleşmediğini de denetle.
Cevap D.`
},
{
  id: "tur-sm-322",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun kutu oyunu kulübünde Azra, Bora, Derin, Güneş, Kerem ve Tuna yuvarlak bir masanın çevresinde oyun oynamaktadır. Masanın çevresine eşit aralıklarla altı sandalye dizilmiş, sandalyeler saat yönünde 1'den 6'ya kadar numaralanmıştır. Bu düzende 6 numaralı sandalye 1 numaralı sandalyeyle yan yanadır; 1 ile 4, 2 ile 5, 3 ile 6 numaralı sandalyeler ise karşı karşıyadır. Kulübün danışman öğretmeni o günkü oturma düzenini defterine şöyle not etmiştir:

"Kuralları yüksek sesle okuyacak olan Kerem, kapıya en yakın sandalyeye, yani 1 numaraya oturdu. Güneş kural kitapçığını onunla birlikte izleyeceği için Kerem'in yanındaki sandalyelerden birine geçti. Azra ile Bora bu oyunda rakip; birbirlerinin hamlelerini rahat görsünler diye karşı karşıya oturdular. Tuna oyunu ilk kez oynuyor; ona yardım edecek olan Azra'nın yanındaki sandalyelerden birinde. Derin ile Kerem yan yana gelince sohbete dalıp oyunu aksatıyor; bu yüzden Derin, Kerem'in yanındaki iki sandalyeye de oturmadı."

Bu notlar oturma düzenini tek biçimde belirlememektedir.

**Buna göre notlara uyan oturma düzenlerinde Derin'in tam karşısındaki sandalyede kaç farklı kişi oturuyor olabilir?**`,
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: ["İlk bulunan düzende durma: Sandalye sırasıyla Kerem, Azra, Tuna, Derin, Bora, Güneş düzeninde Derin'in karşısında Kerem oturur. Ama Kerem, Bora, Derin, Tuna, Azra, Güneş düzeni de notlara uyar ve burada Derin'in karşısında Güneş vardır.", null, "Bir notu hesaba katmama: Güneş'in Kerem'in yanında oturduğu unutulursa Kerem, Bora, Derin, Güneş, Azra, Tuna düzeni de uygun görünür ve Derin'in karşısına Tuna gelir. Oysa bu düzende Güneş 4 numaradadır, Kerem'in yanında değildir.", "Düzen sayısını kişi sayısı sanma: Notlara uyan dört oturma düzeni vardır; ama bunların ikisinde Derin'in karşısında Kerem, ikisinde Güneş oturur. Sorulan düzen sayısı değil, farklı kişi sayısıdır."],
  aciklama: `Yuvarlak masa sorularında önce yeri kesin olan kişiyi bul, sonra en kısıtlayıcı nottan başlayıp durumlara ayır. Karşı karşıya olan sandalyeler 1 ile 4, 2 ile 5, 3 ile 6'dır; 1 numaranın yanındaki sandalyeler 2 ve 6'dır.
Adım 1: Notları kısa koşullara çevir. Kerem 1 numarada. Güneş, Kerem'in yanında; yani 2 ya da 6 numarada. Azra ile Bora karşı karşıya. Tuna, Azra'nın yanında. Derin 2 ve 6 numarada değil; yani 3, 4 ya da 5 numarada.
Adım 2: Azra ile Bora'nın sandalyelerini bul. 1 numarada Kerem oturduğu için ikisi 1 ile 4'te olamaz; ya 2 ile 5'te ya da 3 ile 6'dadır.
Adım 3: İkisi 2 ile 5'teyse Güneş'e 6 numara kalır; boş kalan 3 ve 4 numaraları Tuna ile Derin paylaşır. Azra 2'deyse Tuna onun yanındaki 3'e, Derin 4'e oturur; Derin'in karşısı 1 numara, yani Kerem'dir. Azra 5'teyse Tuna 4'e, Derin 3'e oturur; Derin'in karşısı 6 numara, yani Güneş'tir.
Adım 4: İkisi 3 ile 6'daysa Güneş'e 2 numara kalır; boş kalan 4 ve 5 numaraları Tuna ile Derin paylaşır. Azra 3'teyse Tuna 4'e, Derin 5'e oturur; Derin'in karşısı 2 numara, yani Güneş'tir. Azra 6'daysa Tuna 5'e, Derin 4'e oturur; Derin'in karşısı yine Kerem'dir.
Adım 5: Dört oturma düzeni çıktı. Derin'in karşısında ikisinde Kerem, ikisinde Güneş oturuyor; Azra, Bora ve Tuna hiçbir düzende Derin'in karşısına gelmiyor. Farklı kişi sayısı 2'dir.
Sık yapılan hata: Bulduğun düzenleri saymak. "Kaç farklı kişi" diye sorulduğunda bütün düzenleri çıkarırsın ama aynı kişiyi yalnızca bir kez sayarsın.
Cevap B.`
},
{
  id: "tur-sm-323",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Ilgın, Koray, Melis ve Rüzgâr bisikletlerini bakım için aynı tamirciye bırakmıştır. Her çocuğun bisikleti farklı renktedir: Bisikletlerden biri kırmızı, biri mavi, biri sarı, biri yeşildir. Tamirci pazartesi, salı, çarşamba ve perşembe günleri, her gün bir bisiklet olmak üzere bisikletleri sahiplerine teslim edecektir. Tamircinin çırağı teslim günleriyle ilgili şunları not etmiştir:
• Yalnızca fren ayarı yapılacak olan mavi bisiklet salı günü teslim edilecek.
• Sarı bisiklet ile Melis'in bisikleti aynı yedek parçayı bekliyor. Parça gelince önce sarı bisiklet, ondan tam bir gün sonra da Melis'in bisikleti teslim edilecek.
• Ilgın bisikletini Rüzgâr'dan sonraki günlerin birinde alacak.
• Koray perşembe günü şehir dışında olacağından onun bisikleti o güne bırakılmayacak.
• Kırmızı bisiklet Koray'ın, yeşil bisiklet Rüzgâr'ın değil.
Bu notları okuyan bir müşteri şu yargılara varmıştır:
I. Koray'ın bisikleti Melis'inkinden önce teslim edilir.
II. Yeşil bisiklet perşembe günü teslim edilir.
III. Melis bisikletini ya salı ya da perşembe günü alır.
**Çırağın notlarına göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "I, II ve III"],
  dogru: 1,
  hatalar: ["Çoğu durumda doğru olanı kesin sanma: I. yargı çoğu dağılımda tutar ama Rüzgâr sarı (pazartesi), Melis mavi (salı), Koray yeşil (çarşamba), Ilgın kırmızı (perşembe) dağılımı notlara uyar ve Koray Melis'ten sonradır. Ayrıca kesin olan III bu şıkta yoktur.", null, "Kısmen doğru: III kesindir ama I değildir. Rüzgâr sarı (pazartesi), Melis mavi (salı), Koray yeşil (çarşamba), Ilgın kırmızı (perşembe) dağılımı notlara uyar; burada Koray'ın bisikleti Melis'inkinden sonra teslim edilir.", "Olası olanı kesin sanma: Yalnızca III kesindir. Rüzgâr sarı (pazartesi), Melis mavi (salı), Koray yeşil (çarşamba), Ilgın kırmızı (perşembe) dağılımı notlara uyar; burada Koray Melis'ten sonradır ve yeşil bisiklet çarşamba günü teslim edilir."],
  aciklama: `Öncüllü "kesinlikle doğrudur" sorusunda her yargıyı ayrı ayrı sına: Notlara uyan tek bir dağılımda bile bozuluyorsa o yargı kesin değildir.
Adım 1: III. yargıdan başla, çünkü doğrudan notlardan çıkıyor. Sarı bisiklet Melis'inkinden bir gün önce teslim edildiğine göre Melis pazartesi günü olamaz (öncesinde gün yok). Melis çarşamba olsa sarı bisiklet salı günü teslim edilirdi; ama salı günü mavi bisikletindir. Melis'e yalnızca salı ile perşembe kalır. III kesinlikle doğrudur.
Adım 2: I ve II için karşı örnek ara. Melis'i salıya koy: Melis'in bisikleti mavi olur, sarı bisiklet pazartesi günündedir.
Adım 3: Pazartesi günü kim olabilir? Ilgın olamaz (Rüzgâr'dan sonra almalı). Koray ya da Rüzgâr olabilir. Rüzgâr'ı seç: Rüzgâr sarı, pazartesi. Çarşamba ile perşembe Koray ve Ilgın'a kalır; Koray perşembe olamayacağından Koray çarşamba, Ilgın perşembe günüdür.
Adım 4: Kalan renkler kırmızı ile yeşil. Kırmızı Koray'ın olamaz; Koray yeşil, Ilgın kırmızı olur. Dağılım: Rüzgâr sarı (pazartesi), Melis mavi (salı), Koray yeşil (çarşamba), Ilgın kırmızı (perşembe). Beş notun hepsi sağlanıyor.
Adım 5: Bu dağılımda Koray'ın bisikleti Melis'inkinden sonra teslim ediliyor; I kesin değil. Yeşil bisiklet çarşamba günü teslim ediliyor; II de kesin değil.
Sık yapılan hata: Yargıyı yalnızca aklına ilk gelen dağılımla sınamak. Örneğin Melis'i perşembeye koyarak kurduğun dağılımların çoğunda I de II de doğru çıkar; ama "kesinlikle" sözü bütün dağılımları kapsar, Melis'in salı olduğu durumu da denemelisin.
Cevap B.`
},
{
  id: "tur-sm-324",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun fotoğraf kulübü, yıl sonu sergisi için koridordaki panoya altı fotoğraf asacaktır: Çayır, Deniz, İskele, Köprü, Orman ve Pazar. Panoda biri üstte, biri altta olmak üzere iki sıra, her sırada da solda, ortada ve sağda birer yer vardır; üst sıradaki her yerin hemen altında alt sıradan bir yer bulunmaktadır. Kulüp öğretmeni dizilişte şu kurallara uyulmasını istemiştir:
• İskele ile Pazar fotoğrafları aynı sabah çekilmiştir; birlikte görülsünler diye Pazar, İskele'nin hemen altındaki yere asılacak.
• Orman ile İskele fotoğrafları ormandan iskeleye inen aynı yürüyüşü anlattığı için bu ikisi aynı sırada yer alacak.
• Deniz ile Köprü fotoğraflarının ikisinde de mavi ağır bastığından bu ikisi ne yan yana ne de alt alta gelecek.
• Çayır ile Deniz fotoğraflarını aynı öğrenci çektiği için bu ikisi aynı sırada olmayacak.
Öğrencilerin hazırladığı ilk diziliş tabloda verilmiştir. Bu dizilişi inceleyen öğretmen bazı kuralların çiğnendiğini görmüş, yalnızca iki fotoğrafın yeri birbiriyle değiştirilerek bütün kurallara uyulabileceğini söylemiştir.

**Buna göre yeri değiştirilecek iki fotoğraftan biri aşağıdakilerden hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th></th><th>Sol</th><th>Orta</th><th>Sağ</th></tr><tr><th>Üst sıra</th><td>İskele</td><td>Deniz</td><td>Çayır</td></tr><tr><th>Alt sıra</th><td>Pazar</td><td>Orman</td><td>Köprü</td></tr></table>",
  secenekler: ["Çayır", "Deniz", "İskele", "Köprü"],
  dogru: 0,
  hatalar: [null, "Düzeltirken başka kuralı bozma: Deniz ile Orman yer değiştirirse Orman üst sıraya çıkar, Deniz de Çayır'ın sırasından ayrılır; çiğnenen iki kural düzelir. Ama Deniz alt sırada Köprü'nün yanına düşer, üçüncü kural bozulur.", "Bağlı fotoğrafı yerinden oynatma: İkinci kuralı düzeltmek için İskele'yi alt sıraya indirmek akla gelir. Ama İskele hangi fotoğrafla yer değiştirirse değiştirsin Pazar artık onun hemen altında olmaz, birinci kural bozulur.", "Çiğnenen kuralla ilgisi olmayan fotoğrafı seçme: Köprü'nün adının geçtiği tek kural ilk dizilişte zaten sağlanıyor. Köprü; Orman, Çayır ya da Deniz'le yer değiştirirse Orman yine alt sırada kalır; İskele ya da Pazar'la yer değiştirirse Pazar, İskele'nin altından ayrılır."],
  aciklama: `Bu tür sorularda önce verilen dizilişte hangi kuralların çiğnendiğini bul, sonra tek bir yer değiştirmenin bunların hepsini birden nasıl düzeltebileceğini düşün. Yeni dizilişi kuralların hepsiyle baştan denetlemeyi de unutma.
Adım 1: İlk dizilişi dört kuralla karşılaştır. Pazar, İskele'nin hemen altında: birinci kural tamam. Orman alt sırada, İskele üst sırada: ikinci kural çiğnenmiş. Deniz üst sırada ortada, Köprü alt sırada sağda; çapraz duruyorlar, ne yan yana ne alt altalar: üçüncü kural tamam. Çayır ile Deniz üst sırada: dördüncü kural çiğnenmiş.
Adım 2: İkinci kuralı düşün. Orman ile İskele'nin aynı sıraya gelmesi için biri sıra değiştirmeli. İskele yerinden oynarsa Pazar'ın üstünden ayrılır ve birinci kural bozulur. Demek ki Orman üst sıraya çıkmalı.
Adım 3: Dördüncü kuralı düşün. Çayır ile Deniz'den biri üst sıradan inmeli.
Adım 4: Tek bir yer değiştirme hakkı var. Orman üst sıraya çıkarken onun yerine, alt sıranın ortasına Çayır ya da Deniz inmeli. Öteki yer değiştirmeler iki sorunu birden gideremez.
Adım 5: İki olasılığı dene. Deniz inerse alt sıra Pazar, Deniz, Köprü olur; Deniz ile Köprü yan yana gelir, üçüncü kural bozulur. Çayır inerse üst sıra İskele, Deniz, Orman; alt sıra Pazar, Çayır, Köprü olur. Pazar, İskele'nin hemen altında; Orman ile İskele üst sırada; Deniz ile Köprü çapraz; Çayır alt, Deniz üst sırada. Dört kural da sağlanıyor. Yer değiştirecek fotoğraflar Çayır ile Orman'dır; şıklarda bunlardan Çayır var.
Sık yapılan hata: Çiğnenen kuralları düzelten ilk değişikliği doğru saymak. Deniz ile Orman'ın yer değiştirmesi de baştaki iki sorunu giderir ama önceden sağlanan bir kuralı bozar. Değişiklikten sonra kuralların hepsini yeniden denetle.
Cevap A.`
},
{
  id: "tur-sm-325",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun çevre kulübü, sınıflardan toplanan atıkları ayırmak için kâğıt, cam ve metal ekipleri kuracaktır. Alper, Bengü, Cemre, Doruk, Esma ve Fuat adlı altı öğrenci bu üç ekibe ikişer kişi olarak dağıtılacak, her öğrenci yalnızca bir ekipte görev alacaktır. Ekipler hafta boyunca okul bahçesindeki ayırma masalarında çalışacaktır. Kulüp başkanı, dağılımı yapacak olan öğretmene arkadaşlarının isteklerini şöyle iletmiştir:

"Alper ile Bengü geçen dönem hep birlikte çalıştı; bu kez ayrı ekiplerde olsunlar. Doruk ile Esma'yı ise ayırmayalım, ikisi aynı ekipte görev alsın. Cemre'nin elinde küçük bir kesik var, onu cam ekibine yazmayalım. Bengü metal kutuları ezerken çıkan sesten rahatsız oluyor, bu yüzden metal ekibinde çalışmak istemiyor. Bir de şuna dikkat edelim: Bengü cam ekibine yazılırsa Alper'in metal ekibinde olması gerekiyor, çünkü cam ile metal ekipleri aynı masayı paylaşacak; böylece ikisi birbirine yardım edebilir. Fuat'ın ise özel bir isteği yok, hangi ekipte gerekirse orada çalışır."

**Bu isteklerin hepsine uyan bütün dağılımlar düşünüldüğünde aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Bengü kâğıt ekibinde görev alır.", "Alper metal ekibinde görev alır.", "Alper kâğıt ekibinde görev almaz.", "Doruk ile Esma metal ekibinde görev almaz."],
  dogru: 2,
  hatalar: ["Çoğu dağılımda doğru olanı kesin sanma: Bengü çoğu dağılımda kâğıt ekibindedir ama kâğıt: Doruk-Esma, cam: Bengü-Fuat, metal: Alper-Cemre dağılımı da bütün isteklere uyar.", "Koşulu kesin bilgi sanma: Alper'in metal ekibinde olması yalnızca Bengü cam ekibine yazılırsa gerekir. Kâğıt: Bengü-Cemre, cam: Alper-Fuat, metal: Doruk-Esma dağılımı bütün isteklere uyar; burada Alper cam ekibindedir.", null, "Eksik deneme: Doruk ile Esma'nın hangi ekipte olacağıyla ilgili bir istek yoktur. Kâğıt: Bengü-Cemre, cam: Alper-Fuat, metal: Doruk-Esma dağılımı bütün isteklere uyar; burada ikisi metal ekibindedir."],
  aciklama: `"Kesinlikle doğru" olan ifade, isteklere uyan bütün dağılımlarda doğru kalır. Bir ifadenin kesin olduğunu göstermenin yolu, tersini varsayıp çelişki bulmaktır.
Adım 1: İstekleri kısa koşullara çevir. Alper ile Bengü ayrı ekipte. Doruk ile Esma aynı ekipte. Cemre cam ekibinde değil. Bengü metal ekibinde değil. Bengü cam ekibindeyse Alper metal ekibinde.
Adım 2: C şıkkının tersini varsay: Alper kâğıt ekibinde olsun. Bengü onunla aynı ekipte olamayacağı için kâğıt ekibine giremez; metal ekibini de istemiyor. Bengü'ye yalnızca cam ekibi kalır.
Adım 3: Bengü cam ekibine yazılınca son istek devreye girer: Alper metal ekibinde olmalıdır. Oysa Alper'i kâğıt ekibine koymuştuk. Çelişki çıktı; demek ki Alper hiçbir dağılımda kâğıt ekibinde olamaz. C kesinlikle doğrudur.
Adım 4: Öteki şıklar için karşı örnek kur. Doruk ile Esma'yı kâğıt ekibine koy; ekipler ikişer kişilik olduğu için kâğıt ekibi dolar. Bengü metal ekibini istemediğinden cam ekibine, Alper de metal ekibine gider. Cemre cam ekibine giremediği için Alper'in, Fuat da Bengü'nün yanına geçer. Kâğıt: Doruk-Esma, cam: Bengü-Fuat, metal: Alper-Cemre dağılımı bütün isteklere uyar; burada Bengü kâğıt ekibinde değildir (A).
Adım 5: Doruk ile Esma'yı bu kez metal ekibine koy. Bengü cam ekibine girerse Alper'in metal ekibinde olması gerekir ama orada yer kalmamıştır; bu yüzden Bengü kâğıt, Alper cam ekibindedir. Cemre kâğıt, Fuat cam ekibine geçer. Kâğıt: Bengü-Cemre, cam: Alper-Fuat, metal: Doruk-Esma dağılımı da isteklere uyar; burada Alper metal ekibinde değildir (B), Doruk ile Esma ise metal ekibindedir (D).
Sık yapılan hata: "Bengü cam ekibine yazılırsa Alper metal ekibinde olur" cümlesini "Alper metal ekibindedir" diye okumak. Koşul cümlesi yalnızca "-se/-sa" ile verilen durum gerçekleştiğinde bağlayıcıdır; Bengü kâğıt ekibindeyken Alper cam ekibinde de çalışabilir.
Cevap C.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "tur-sm-001",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Sabah okula Zeki, Irmak'tan önce; Irmak, Oya'dan önce; Oya da Selim'den önce gelmiştir.
**Buna göre okula en son kim gelmiştir?**`,
  gorsel: null,
  secenekler: ["Irmak", "Oya", "Selim", "Zeki"],
  dogru: 2,
  hatalar: [
    "Zinciri yarıda bırakma: Irmak'tan sonra Oya ve Selim de gelmiştir.",
    "Son halkayı atlama: Oya'dan sonra Selim gelmiştir.",
    null,
    "\"Önce\" ile \"sonra\"yı karıştırma: Zeki okula ilk gelen kişidir."
  ],
  aciklama: `Adım 1: Bilgileri tek bir zincire diz: Zeki → Irmak → Oya → Selim (ok, "önce gelen"den "sonra gelen"e gider).
Adım 2: Zincirin sonunda Selim vardır; ondan sonra gelen kimse yoktur.
Sağlama: Selim, Oya'dan sonra; Oya, Irmak'tan sonra; Irmak da Zeki'den sonra gelmiştir.
Cevap C.`
},
{
  id: "tur-sm-002",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Bir oyun parkındaki kaydırağın girişinde şu kural yazılıdır: "Boyu 120 cm'den kısa olan çocuk, yanında bir yetişkin olmadan kaydırağa binemez."
**Tablodaki çocuklardan hangisi bu kurala göre kaydırağa __binemez__?**`,
  gorsel: `<table class="tablo"><tr><th>Çocuk</th><th>Boyu</th><th>Yanında yetişkin</th></tr><tr><td>Ozan</td><td>115 cm</td><td>Yok</td></tr><tr><td>Efe</td><td>118 cm</td><td>Var</td></tr><tr><td>Nil</td><td>125 cm</td><td>Yok</td></tr><tr><td>Pera</td><td>130 cm</td><td>Var</td></tr></table>`,
  secenekler: ["Ozan", "Efe", "Nil", "Pera"],
  dogru: 0,
  hatalar: [
    null,
    "Yetişkin koşulunu atlama: Efe'nin boyu 120 cm'den kısadır ama yanında bir yetişkin vardır.",
    "Yetişkini herkes için şart sanma: Nil'in boyu 120 cm'den uzun olduğu için yalnız binebilir.",
    "Kuralı ters okuma: Pera hem uzundur hem de yanında yetişkin vardır; kural ona engel olmaz."
  ],
  aciklama: `Adım 1: Kural iki koşulun birlikte olduğu durumu yasaklar: boyun 120 cm'den kısa olması ve yanında yetişkin bulunmaması.
Adım 2: Tabloda iki koşulu birlikte taşıyan tek çocuk Ozan'dır: 115 cm ve yanında yetişkin yok.
Sık yapılan hata: Koşullardan yalnızca birine bakmak.
Cevap A.`
},
{
  id: "tur-sm-003",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Kitap kulübü bu hafta bir kez toplanacaktır. Toplantı pazartesiden sonra, çarşambadan önceki bir gün yapılacaktır.
**Buna göre kulüp hangi gün toplanacaktır?**`,
  gorsel: null,
  secenekler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
  dogru: 1,
  hatalar: [
    "Sınırı dahil etme: \"Pazartesiden sonra\" ifadesi pazartesiyi dışarıda bırakır.",
    null,
    "Sınırı dahil etme: \"Çarşambadan önce\" ifadesi çarşambayı dışarıda bırakır.",
    "Sınırın dışına çıkma: Perşembe, çarşambadan sonra gelir."
  ],
  aciklama: `Adım 1: Pazartesiden sonra ve çarşambadan önce olan günler arasında kalan gün yalnızca salıdır.
Sık yapılan hata: "Önce" ve "sonra" sözcükleriyle verilen sınır günleri de hesaba katmak.
Cevap B.`
},
{
  id: "tur-sm-004",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Dört arkadaş sınıf fotoğrafı için yan yana dizilmiştir. Cemre en soldadır. Deniz, Bade'nin hemen sağında durmaktadır. Egemen ise en sağda değildir.
**Buna göre soldan ikinci sırada kim durmaktadır?**`,
  gorsel: `<svg viewBox="0 0 440 130" role="img" aria-label="Yan yana dört yer, soldan sağa 1'den 4'e">
<text x="10" y="22" font-size="15" fill="currentColor">Sol</text><text x="400" y="22" font-size="15" fill="currentColor">Sağ</text>
<g fill="none" stroke="currentColor" stroke-width="2">
<circle cx="70" cy="56" r="20"/><circle cx="170" cy="56" r="20"/><circle cx="270" cy="56" r="20"/><circle cx="370" cy="56" r="20"/>
<line x1="70" y1="76" x2="70" y2="96"/><line x1="170" y1="76" x2="170" y2="96"/><line x1="270" y1="76" x2="270" y2="96"/><line x1="370" y1="76" x2="370" y2="96"/>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="70" y="61">?</text><text x="170" y="61">?</text><text x="270" y="61">?</text><text x="370" y="61">?</text>
<text x="70" y="120">1</text><text x="170" y="120">2</text><text x="270" y="120">3</text><text x="370" y="120">4</text>
</g>
</svg>`,
  secenekler: ["Bade", "Cemre", "Deniz", "Egemen"],
  dogru: 3,
  hatalar: [
    "Bade-Deniz ikilisini Cemre'nin hemen yanına koyma: O zaman Egemen en sağa düşer; bu da son bilgiye aykırıdır.",
    "Soldan birinci ile soldan ikinciyi karıştırma: Cemre en soldadır.",
    "Yönü ters okuma: Deniz, Bade'nin sağındadır; Bade 3., Deniz 4. sıradadır.",
    null
  ],
  aciklama: `Adım 1: Cemre 1. sıradadır. Boş yerler 2, 3 ve 4.
Adım 2: Bade-Deniz ikilisi yan yana iki yer ister: 2-3 ya da 3-4. İkili 2-3'te olursa Egemen 4'e, yani en sağa düşer; bu yasaktır.
Adım 3: İkili 3-4'tedir: Bade 3, Deniz 4. Egemen 2. sıraya yerleşir.
Sıralama (soldan): Cemre, Egemen, Bade, Deniz.
Sağlama: Cemre en solda, Deniz Bade'nin hemen sağında, Egemen en sağda değil.
Cevap D.`
},
{
  id: "tur-sm-005",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Ozan, Pınar ve Rana'nın her biri elma, armut ve kirazdan farklı birini en çok sevmektedir. Pınar'ın en sevdiği meyve ne armut ne de kirazdır. Rana'nın en sevdiği meyve ise kiraz değildir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Ozan en çok armudu sever.", "Ozan en çok elmayı sever.", "Rana en çok armudu sever.", "Rana en çok elmayı sever."],
  dogru: 2,
  hatalar: [
    "İkinci bilgiyi atlama: Rana kirazı sevmediği ve elma Pınar'ın olduğu için armut Rana'nındır; Ozan'a kiraz kalır.",
    "İlk bilgiyi eksik okuma: Pınar armut ve kiraz sevmediğine göre elma Pınar'ın en sevdiği meyvedir.",
    null,
    "Bir meyveyi iki kişiye verme: Elma, Pınar'ın en sevdiği meyvedir."
  ],
  aciklama: `Adım 1: Pınar'ın meyvesi armut ve kiraz değilse elmadır.
Adım 2: Rana'ya armut ya da kiraz kalır; kiraz olamayacağına göre Rana armudu sever.
Adım 3: Ozan'a kiraz kalır.
Sağlama: Pınar elma, Rana armut, Ozan kiraz; iki bilgi de sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-006",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir bilim müzesinin bilet kuralları şunlardır:
• Hafta içi günlerde öğrenci kartı olan ziyaretçiler indirimli bilet alır.
• Hafta sonu indirim yapılmaz.
• 7 yaşından küçükler her gün ücretsiz girer.
**Tablodaki ziyaretçilerden hangisi indirimli bilet alır?**`,
  gorsel: `<table class="tablo"><tr><th>Ziyaretçi</th><th>Yaşı</th><th>Öğrenci kartı</th><th>Ziyaret günü</th></tr><tr><td>Arda</td><td>13</td><td>Var</td><td>Cumartesi</td></tr><tr><td>Buket</td><td>6</td><td>Yok</td><td>Pazar</td></tr><tr><td>Cihan</td><td>15</td><td>Var</td><td>Salı</td></tr><tr><td>Duygu</td><td>40</td><td>Yok</td><td>Çarşamba</td></tr></table>`,
  secenekler: ["Arda", "Buket", "Cihan", "Duygu"],
  dogru: 2,
  hatalar: [
    "Hafta sonu kuralını atlama: Arda'nın öğrenci kartı var ama cumartesi günü indirim yapılmaz.",
    "Ücretsiz ile indirimliyi karıştırma: 6 yaşındaki Buket hiç ücret ödemez, indirimli bilet almaz.",
    null,
    "Kart koşulunu atlama: Hafta içi indirim, öğrenci kartı olanlara uygulanır; Duygu'nun kartı yok."
  ],
  aciklama: `Adım 1: İndirim için iki koşul birlikte gerekir: öğrenci kartı olması ve ziyaretin hafta içi yapılması.
Adım 2: Arda'nın kartı var ama cumartesi gelmiştir. Duygu hafta içi gelmiştir ama kartı yoktur. Buket 7 yaşından küçük olduğu için ücretsiz girer.
Adım 3: Kartı olan ve salı günü gelen Cihan indirimli bilet alır.
Sık yapılan hata: "Ücretsiz" ile "indirimli"yi aynı şey sanmak.
Cevap C.`
},
{
  id: "tur-sm-007",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Lale, Mina, Nazlı ve Tarık okul koşusunda yarışmıştır; bitiş çizgisine aynı anda varan olmamıştır. Mina, Nazlı'dan önce; Nazlı da Lale'den önce yarışı bitirmiştir. Tarık ise birinci olamamıştır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Tarık ikinci olmuştur.", "Lale dördüncü olmuştur.", "Nazlı üçüncü olmuştur.", "Mina birinci olmuştur."],
  dogru: 3,
  hatalar: [
    "Olası olanı kesin sanma: Tarık üçüncü ya da dördüncü de olabilir.",
    "Olası olanı kesin sanma: Tarık dördüncü olursa Lale üçüncü olur.",
    "Olası olanı kesin sanma: Tarık üçüncü ya da dördüncü olursa Nazlı ikinci olur.",
    null
  ],
  aciklama: `Adım 1: Nazlı ve Lale, Mina'dan sonra gelmiştir; ikisi birinci olamaz. Tarık da birinci olmamıştır.
Adım 2: Birinci olabilecek tek kişi Mina'dır.
Adım 3: Tarık 2., 3. ya da 4. olabilir; Nazlı ile Lale'nin yeri de buna göre değişir. Bu yüzden A, B ve C kesin değildir.
Sağlama: Mina, Tarık, Nazlı, Lale ve Mina, Nazlı, Lale, Tarık sıralamalarının ikisi de bilgilere uyar; ikisinde de Mina birincidir.
Cevap D.`
},
{
  id: "tur-sm-008",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Aras, Beril, Çınar, Damla ve Eylül, sınıftaki çiçekleri pazartesiden cumaya kadar her gün biri olmak üzere sulayacaktır. Her öğrenci haftada bir gün sulama yapacaktır. Çizelgeye iki öğrencinin günü yazılmıştır. Ayrıca Aras'ın, Damla'dan bir gün sonra sulama yapacağı bilinmektedir.
**Buna göre salı günü çiçekleri kim sulayacaktır?**`,
  gorsel: `<table class="tablo"><tr><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th><th>Cuma</th></tr><tr><td>Beril</td><td>?</td><td>Eylül</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["Aras", "Çınar", "Damla", "Eylül"],
  dogru: 1,
  hatalar: [
    "Pazartesiyi boş sanma: Aras salı sularsa Damla pazartesi sulamalıdır; ama pazartesi Beril'indir.",
    null,
    "Çarşambayı boş sanma: Damla salı sularsa Aras çarşamba sulamalıdır; ama çarşamba Eylül'ündür.",
    "Sütunları karıştırma: Eylül çarşamba günü sular."
  ],
  aciklama: `Adım 1: Boş günler salı, perşembe ve cumadır. Damla ile Aras art arda iki güne yerleşmelidir; önce Damla, sonra Aras.
Adım 2: Boş günlerde art arda gelen tek çift perşembe-cumadır. Damla perşembe, Aras cuma sular.
Adım 3: Salı günü Çınar'a kalır.
Sağlama: Beril, Çınar, Eylül, Damla, Aras; her gün bir kişi ve Aras, Damla'dan bir gün sonra.
Cevap B.`
},
{
  id: "tur-sm-009",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sokakta yan yana beş dükkân vardır: fırın, eczane, kırtasiye, manav ve çiçekçi. Görselde dükkânların yerleri soldan sağa numaralandırılmıştır. Dükkânlarla ilgili şunlar bilinmektedir:
• Eczane ile fırın arasında tam iki dükkân vardır.
• Eczane, fırının solundadır.
• Kırtasiye, manavın hemen solundadır.
• Çiçekçi en solda değildir.
**Buna göre soldan üçüncü dükkân hangisidir?**`,
  gorsel: `<svg viewBox="0 0 540 140" role="img" aria-label="Sokakta yan yana beş dükkân, soldan sağa 1'den 5'e">
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="14" y="40" width="92" height="66"/><rect x="118" y="40" width="92" height="66"/><rect x="222" y="40" width="92" height="66"/><rect x="326" y="40" width="92" height="66"/><rect x="430" y="40" width="92" height="66"/>
</g>
<g fill="var(--dolgu)" stroke="currentColor" stroke-width="2">
<polygon points="8,40 112,40 102,22 18,22"/><polygon points="112,40 216,40 206,22 122,22"/><polygon points="216,40 320,40 310,22 226,22"/><polygon points="320,40 424,40 414,22 330,22"/><polygon points="424,40 528,40 518,22 434,22"/>
</g>
<g font-size="18" text-anchor="middle" fill="currentColor">
<text x="60" y="80">?</text><text x="164" y="80">?</text><text x="268" y="80">?</text><text x="372" y="80">?</text><text x="476" y="80">?</text>
</g>
<line x1="4" y1="112" x2="536" y2="112" stroke="currentColor" stroke-width="3"/>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="60" y="134">1</text><text x="164" y="134">2</text><text x="268" y="134">3</text><text x="372" y="134">4</text><text x="476" y="134">5</text>
</g>
</svg>`,
  secenekler: ["Fırın", "Kırtasiye", "Manav", "Çiçekçi"],
  dogru: 2,
  hatalar: [
    "Aradaki dükkânları yanlış sayma: Eczane 1., fırın 4. sıradadır; aralarında 2. ve 3. dükkânlar vardır.",
    "Eczane-fırın ikilisini 2. ve 5. sıraya koyma: O zaman kırtasiye 3. sıraya düşer ama çiçekçi en sola kalır; son bilgiye aykırıdır.",
    null,
    "Uçtaki dükkânla karıştırma: Çiçekçi en sağdadır, yani 5. sıradadır."
  ],
  aciklama: `Adım 1: Eczane ile fırın arasında iki dükkân varsa bu ikili 1-4 ya da 2-5 yerlerindedir; eczane soldadır.
Adım 2: Eczane 2, fırın 5 olursa boş yerler 1, 3, 4 olur. Kırtasiye-manav ikilisi yan yana iki yer ister: 3-4. Çiçekçi 1'e, yani en sola düşer; bu yasaktır.
Adım 3: Eczane 1, fırın 4'tür. Boş yerler 2, 3, 5. Kırtasiye-manav 2-3'e yerleşir, çiçekçi 5'e gider.
Sıralama (soldan): eczane, kırtasiye, manav, fırın, çiçekçi. Soldan üçüncü dükkân manavdır.
Sağlama: Eczane (1) ile fırın (4) arasında kırtasiye ve manav var; çiçekçi en sağda.
Cevap C.`
},
{
  id: "tur-sm-010",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir havayolu şirketi, kabine alınacak çantalar için şu kuralları uygulamaktadır:
• Çantanın ağırlığı en fazla 8 kg olmalıdır.
• Çantanın boyu 55 cm'yi geçmemelidir.
• Çantadaki her sıvı kabı en fazla 100 ml olmalıdır.
Kurallardan birine uymayan çanta kabine alınmaz, bagaja verilir. Dört yolcunun çantalarıyla ilgili bilgiler tabloda verilmiştir.
**Buna göre hangi yolcunun çantası kabine alınır?**`,
  gorsel: `<table class="tablo"><tr><th>Yolcu</th><th>Ağırlık (kg)</th><th>Boy (cm)</th><th>En büyük sıvı kabı (ml)</th></tr><tr><td>Aylin</td><td>7</td><td>55</td><td>100</td></tr><tr><td>Bülent</td><td>8</td><td>56</td><td>50</td></tr><tr><td>Canan</td><td>9</td><td>50</td><td>80</td></tr><tr><td>Deniz</td><td>6</td><td>52</td><td>150</td></tr></table>`,
  secenekler: ["Aylin", "Bülent", "Canan", "Deniz"],
  dogru: 0,
  hatalar: [
    null,
    "Sınırı yanlış okuma: Bülent'in 8 kg'lık çantası uygundur ama 56 cm, 55 cm'yi geçmektedir.",
    "Ağırlık kuralını atlama: 9 kg, 8 kg sınırını aşar.",
    "Sıvı kuralını atlama: 150 ml'lik kap, 100 ml sınırını aşar."
  ],
  aciklama: `Adım 1: Her çantayı üç kurala göre denetle. "En fazla 8 kg", "55 cm'yi geçmemeli" ve "en fazla 100 ml" ifadeleri sınır değerin kendisini de kabul eder.
Adım 2: Aylin: 7 kg, 55 cm, 100 ml. Boy ve sıvı tam sınırda; üç kural da sağlanıyor.
Adım 3: Bülent: Boy 56 cm, sınırı aşıyor. Canan: 9 kg, sınırı aşıyor. Deniz: 150 ml, sınırı aşıyor.
Sık yapılan hata: Sınıra eşit değerleri (55 cm, 100 ml) kurala aykırı saymak.
Cevap A.`
},
{
  id: "tur-sm-011",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Kaya, Lina, Mete ve Nur okul orkestrasında flüt, gitar, keman ve davuldan farklı birini çalmaktadır. Orkestra öğretmeninin not defterinde şu bilgiler yazılıdır:
• Lina ya gitar ya da keman çalar.
• Mete ne davul ne de flüt çalar.
• Kaya keman çalmaz.
• Nur flüt çalmaz.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Lina gitar çalar.", "Mete keman çalar.", "Kaya flüt çalar.", "Nur gitar çalar."],
  dogru: 2,
  hatalar: [
    "Olası olanı kesin sanma: Lina keman da çalabilir; o zaman Mete gitar çalar.",
    "Olası olanı kesin sanma: Mete gitar da çalabilir; o zaman Lina keman çalar.",
    null,
    "Paylaşılmış çalgıyı üçüncü kişiye verme: Gitar ile keman Lina ve Mete'ye ayrılır; Nur'a davul kalır."
  ],
  aciklama: `Adım 1: Mete davul ve flüt çalmıyorsa gitar ya da keman çalar. Lina da gitar ya da keman çalar. Bu iki çalgı Lina ile Mete'ye ayrılır.
Adım 2: Kaya ile Nur'a flüt ve davul kalır. Nur flüt çalmadığına göre Nur davul, Kaya flüt çalar.
Adım 3: Lina ile Mete'nin hangisinin gitar, hangisinin keman çaldığı belli değildir.
Sağlama: Kaya flüt, Lina gitar, Mete keman, Nur davul dağılımı da Lina keman, Mete gitar dağılımı da bilgilere uyar; ikisinde de Kaya flüt çalar.
Cevap C.`
},
{
  id: "tur-sm-012",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Oya, Pars, Rüya, Sıla ve Toprak sinemada yan yana beş koltuğa oturmuştur. Koltuklar soldan sağa 1'den 5'e kadar numaralıdır ve Sıla'nın koltuğu görselde gösterilmiştir. Şunlar bilinmektedir:
• Oya ile Pars yan yana oturmaktadır.
• Toprak uçtaki koltuklardan birinde oturmamaktadır.
• Rüya, Oya'nın solundaki koltuklardan birinde oturmaktadır.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: `<svg viewBox="0 0 500 140" role="img" aria-label="Sinema: perde ve yan yana beş koltuk; 3. koltukta Sıla">
<rect x="60" y="8" width="380" height="16" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/>
<text x="250" y="21" font-size="14" text-anchor="middle" fill="currentColor">Perde</text>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="30" y="60" width="72" height="50" rx="8"/><rect x="124" y="60" width="72" height="50" rx="8"/><rect x="312" y="60" width="72" height="50" rx="8"/><rect x="406" y="60" width="72" height="50" rx="8"/>
</g>
<rect x="218" y="60" width="72" height="50" rx="8" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="66" y="91">?</text><text x="160" y="91">?</text><text x="254" y="90" font-size="15" font-weight="700">Sıla</text><text x="348" y="91">?</text><text x="442" y="91">?</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="66" y="132">1</text><text x="160" y="132">2</text><text x="254" y="132">3</text><text x="348" y="132">4</text><text x="442" y="132">5</text>
</g>
</svg>`,
  secenekler: ["Oya dördüncü koltukta oturur.", "Pars beşinci koltukta oturur.", "Toprak ikinci koltukta oturur.", "Pars ikinci koltukta oturur."],
  dogru: 3,
  hatalar: [
    "Olabilir olanı olamaz sanma: Rüya, Toprak, Sıla, Oya, Pars dizilişi bütün bilgilere uyar.",
    "Olabilir olanı olamaz sanma: Rüya, Toprak, Sıla, Oya, Pars dizilişinde Pars beşinci koltuktadır.",
    "Kesin olanı olamaz sanma: Toprak her durumda ikinci koltuktadır.",
    null
  ],
  aciklama: `Adım 1: Sıla 3. koltuktadır. Toprak uçlarda olmadığına göre 2 ya da 4'tedir.
Adım 2: Oya-Pars ikilisi yan yana iki koltuk ister: 1-2 ya da 4-5.
Adım 3: İkili 1-2'de olursa Oya 1 ya da 2'de olur; Rüya'nın Oya'nın solunda oturması gerekir ama 1'in solunda koltuk yoktur, 2'nin solundaki 1 ise Pars'ındır. Bu durum olmaz.
Adım 4: İkili 4-5'tedir. Toprak 2'ye, Rüya 1'e yerleşir. Oya ile Pars 4 ve 5'i iki biçimde paylaşır.
Adım 5: Pars 4 ya da 5'tedir; 2. koltukta oturamaz.
Sağlama: Rüya, Toprak, Sıla, Oya, Pars ve Rüya, Toprak, Sıla, Pars, Oya dizilişleri bütün bilgilere uyar; ikisinde de 2. koltukta Toprak vardır.
Cevap D.`
},
{
  id: "tur-sm-013",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Okulun 5 × 100 metre bayrak yarışı takımında Atlas, Bera, Ceyda, Doğa ve Ekin koşacaktır. Her koşucu bir kez koşacak; bayrağı 1. koşucu başlatacak, 5. koşucu bitirecektir. Beden eğitimi öğretmeni koşu sırasını belirlerken şu kurallara uyacaktır:
• Atlas, Ekin'den tam iki sıra sonra koşacak; yani ikisinin arasında bir koşucu olacak.
• Bera, Ceyda'dan sonraki sıralardan birinde koşacak.
• Bera ile Ceyda art arda koşmayacak; bayrağı birbirine vermeyecek.
• Doğa üçüncü koşucu olmayacak.
Koşucuların sırası değiştiğinde farklı bir koşu sırası oluşmuş sayılır.
**Buna göre öğretmen koşu sırasını kaç farklı biçimde belirleyebilir?**`,
  gorsel: null,
  secenekler: ["6", "7", "8", "12"],
  dogru: 0,
  hatalar: [
    null,
    "Doğa kuralını atlama: Doğa'nın üçüncü koşamayacağı unutulunca Doğa'nın 3. olduğu bir sıra daha sayılır.",
    "Art arda koşmama kuralını atlama: Bera'nın bayrağı Ceyda'dan doğrudan aldığı iki sıra da sayılır.",
    "Sıra kuralını atlama: Bera'nın Ceyda'dan sonra koşması gerektiği unutulunca her sıranın Ceyda ile Bera'nın yer değiştirdiği bir eşi de sayılır; sayı iki katına çıkar."
  ],
  aciklama: `Kaç farklı sıralama sorusunda en çok bağlayan kuralla başla, olasılıkları durumlara ayır ve her durumu ayrı say.
Adım 1: Atlas, Ekin'den tam iki sıra sonra koşar. Ekin 1. olursa Atlas 3., Ekin 2. olursa Atlas 4., Ekin 3. olursa Atlas 5. olur. Üç durum vardır.
Adım 2: Ekin 1, Atlas 3: Boş yerler 2, 4 ve 5. Ceyda, Bera'dan önce olmalı ve ikisi yan yana olmamalı. 4-5 yan yana olduğu için Ceyda 2. sıraya geçer; Bera 4 ya da 5, Doğa kalan yere. 2 sıra.
Adım 3: Ekin 2, Atlas 4: Boş yerler 1, 3 ve 5; hiçbiri yan yana değildir. Doğa 3 olamaz, 1 ya da 5'tedir. Kalan iki yere önce Ceyda, sonra Bera girer. 2 sıra.
Adım 4: Ekin 3, Atlas 5: Boş yerler 1, 2 ve 4. 1-2 yan yana olduğu için Bera 4. sıradadır; Ceyda ile Doğa 1 ve 2'yi iki biçimde paylaşır. 2 sıra.
Adım 5: Toplam 2 + 2 + 2 = 6 farklı sıra.
Sağlama: Ekin-Ceyda-Atlas-Bera-Doğa; Ekin-Ceyda-Atlas-Doğa-Bera; Doğa-Ekin-Ceyda-Atlas-Bera; Ceyda-Ekin-Bera-Atlas-Doğa; Ceyda-Doğa-Ekin-Bera-Atlas; Doğa-Ceyda-Ekin-Bera-Atlas. Altısında da bütün kurallar sağlanıyor.
Sık yapılan hata: "Tam iki sıra sonra" ifadesini "iki sıra ya da daha sonra" diye okumak.
Cevap A.`
},
{
  id: "tur-sm-014",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Ayla, Berk, Cem ve Dilan bir doğa kampında kırmızı, mavi, yeşil ve sarı renkli dört çadırın her birinde ayrı ayrı kalmaktadır. Her birinin kampta farklı bir görevi vardır: odun toplamak, su taşımak, yemek yapmak ve temizlik yapmak. Şunlar bilinmektedir:
• Kırmızı çadırda kalan kişi yemek yapar.
• Ayla'nın çadırı ya mavi ya da yeşildir; Ayla temizlik yapmaz.
• Berk kırmızı çadırda kalmaz ve su taşımaz.
• Cem ya odun toplar ya da su taşır.
• Sarı çadırda kalan kişi temizlik yapmaz; Dilan da sarı çadırda kalmaz.
Bu bilgilerle dağılım tek biçimde belirlenememektedir. Daha sonra kamp sorumlusu, mavi çadırda kalan kişinin odun topladığını söylemiştir.
**Buna göre yeşil çadırda kalan kişi ve görevi aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Berk – temizlik yapmak", "Ayla – odun toplamak", "Ayla – su taşımak", "Cem – su taşımak"],
  dogru: 0,
  hatalar: [
    null,
    "Ek bilgiyi yanlış yere koyma: Odun toplayan kişi mavi çadırdadır, yeşil çadırda değil.",
    "Ek bilgiyi dikkate almama: Ek bilgiden önce Ayla yeşil çadırda su taşıyor olabilirdi; ek bilgiyle Ayla mavi çadıra yerleşir.",
    "Kesin bilgiyi gözden kaçırma: Cem her durumda sarı çadırda kalır."
  ],
  aciklama: `Adım 1: Kırmızı çadırda kalan kişi yemek yapar. Ayla kırmızıda değildir (mavi ya da yeşil), Berk kırmızıda kalmaz, Cem yemek yapmaz (odun ya da su). Kırmızı çadırda Dilan kalır ve yemek yapar.
Adım 2: Temizliği kim yapar? Ayla yapmaz, Cem yapmaz, Dilan yemek yapar. Temizliği Berk yapar.
Adım 3: Sarı çadırdaki kişi temizlik yapmaz; demek ki Berk sarıda değildir. Ayla da sarıda değildir. Sarı çadırda Cem kalır. Ayla ile Berk mavi ve yeşil çadırları paylaşır; Ayla ile Cem de odun ve su görevlerini paylaşır. Ek bilgiden önce dört farklı dağılım vardır.
Adım 4: Ek bilgi: Mavi çadırdaki kişi odun toplar. Berk temizlik yaptığı için mavide olamaz. Mavide Ayla kalır ve odun toplar; Cem'e su kalır.
Adım 5: Yeşil çadırda Berk kalır ve temizlik yapar.
Sonuç: Ayla – mavi – odun; Berk – yeşil – temizlik; Cem – sarı – su; Dilan – kırmızı – yemek.
Sağlama: Beş bilgi ve ek bilgi bu dağılımla uyumlu.
Cevap A.`
},
{
  id: "tur-sm-015",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Eda, Fatih, Gonca ve Harun bir proje gününde uzay, deniz, orman ve çöl konularından farklı birini sunacaktır. Sunumlar art arda yapılacak ve 1'den 4'e kadar sıralanacaktır. Şunlar bilinmektedir:
• Uzay sunumu, deniz sunumundan hemen sonra yapılacak.
• Eda ilk sunumu yapmayacak ve çöl konusunu seçmeyecek.
• Fatih, Gonca'dan iki sıra sonra sunacak.
• Harun ya orman ya da çöl konusunu sunacak; ilk sunumu da yapmayacak.
• Orman sunumu son sırada olmayacak.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Eda uzay konusunu sunar.", "Harun çöl konusunu sunar.", "Deniz konusunu Fatih sunar.", "Gonca ilk sunumu yapar."],
  dogru: 3,
  hatalar: [
    "Olası olanı kesin sanma: Eda deniz konusunu da sunabilir (ör. Gonca orman, Eda deniz, Fatih uzay, Harun çöl).",
    "Olası olanı kesin sanma: Harun orman konusunu da sunabilir (ör. Gonca çöl, Harun orman, Fatih deniz, Eda uzay).",
    "Olası olanı kesin sanma: Deniz konusunu Eda ya da Gonca da sunabilir.",
    null
  ],
  aciklama: `Adım 1: İlk sunumu kim yapabilir? Eda ve Harun yapmayacak. Fatih, Gonca'dan iki sıra sonra sunacağı için en erken 3. sırada olabilir. Geriye Gonca kalır: Gonca 1., Fatih 3. sıradadır.
Adım 2: Eda ile Harun 2. ve 4. sıraları paylaşır. Konular için "deniz-uzay art arda", "orman son değil", Eda'nın çöl seçmemesi ve Harun'un orman ya da çöl sunması kurallarını uygula.
Adım 3: Bu kurallara uyan dört farklı dağılım vardır. Örneğin Gonca orman, Harun çöl, Fatih deniz, Eda uzay; ya da Gonca orman, Eda deniz, Fatih uzay, Harun çöl.
Adım 4: Bu dağılımlarda Eda'nın, Harun'un ve Fatih'in konuları değişebilmektedir; değişmeyen bilgi Gonca'nın ilk sunumu yapmasıdır.
Sık yapılan hata: Bir tek dağılım bulup o dağılımdaki her bilgiyi kesin sanmak.
Cevap D.`
}
);
