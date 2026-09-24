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
  soru: `Sınıf panosuna bilim, doğa, kitap, müzik, spor ve tarih konulu altı afiş, soldan sağa 1'den 6'ya kadar numaralandırılmış yerlere birer tane asılacaktır. Sınıf başkanı spor afişini görseldeki gibi 4 numaralı yere asmıştır. Diğer afişler asılırken şu kurallara uyulacaktır:
• Bilim ve doğa afişleri yan yana olacak.
• Kitap afişi, müzik afişinin solundaki yerlerden birinde olacak.
• Tarih afişi panonun uçlarından birinde olacak.
• Müzik afişi 5 numaralı yere asılmayacak.
Afişlerin yerleri değiştirildiğinde pano farklı bir biçimde asılmış sayılmaktadır.
**Buna göre afişler bu kurallara uygun olarak kaç farklı biçimde asılabilir?**`,
  gorsel: `<svg viewBox="0 0 540 120" role="img" aria-label="Altı yerli pano; 4 numaralı yerde spor afişi">
<rect x="6" y="10" width="528" height="84" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="20" y="22" width="72" height="60"/><rect x="106" y="22" width="72" height="60"/><rect x="192" y="22" width="72" height="60"/>
<rect x="364" y="22" width="72" height="60"/><rect x="450" y="22" width="72" height="60"/>
</g>
<rect x="278" y="22" width="72" height="60" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/>
<text x="314" y="58" font-size="16" text-anchor="middle" fill="currentColor" font-weight="700">Spor</text>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="56" y="112">1</text><text x="142" y="112">2</text><text x="228" y="112">3</text><text x="314" y="112">4</text><text x="400" y="112">5</text><text x="486" y="112">6</text>
</g>
</svg>`,
  secenekler: ["2", "4", "8", "10"],
  dogru: 1,
  hatalar: [
    "İkilinin iç düzenini unutma: Bilim ile doğa yan yana iken kendi aralarında yer değiştirebilir; her yerleşim iki farklı asılış verir.",
    null,
    "Son kuralı atlama: Müzik afişi 5 numaraya asılamaz; bu kural unutulunca tarih afişinin sağ uca asıldığı yerleşimler de sayılır.",
    "İkinci kuralı atlama: Kitap afişinin müziğin solunda olması gerekir; bu kural unutulunca kitap ile müziğin yer değiştirdiği düzenler de sayılır."
  ],
  aciklama: `Sayma sorularında önce kesin yerleri bul, sonra kalan seçenekleri tek tek yaz.
Adım 1: Spor 4'tedir. Tarih uçlardadır: 1 ya da 6.
Adım 2: Tarih 6'da olsun. Boş yerler 1, 2, 3 ve 5. Bilim-doğa ikilisi yan yana iki yer ister: 1-2 ya da 2-3. İkili 1-2'deyse kitap ile müziğe 3 ve 5 kalır; kitap solda olacağı için müzik 5'e düşer, bu yasak. İkili 2-3'teyse 1 ve 5 kalır; müzik yine 5'e düşer. Demek ki tarih 6'da olamaz.
Adım 3: Tarih 1'dedir. Boş yerler 2, 3, 5 ve 6. Yan yana çiftler 2-3 ve 5-6.
• İkili 2-3'te: Kitap 5, müzik 6. Kurallar sağlanıyor.
• İkili 5-6'da: Kitap 2, müzik 3. Kurallar sağlanıyor.
Adım 4: Her durumda bilim ile doğa kendi aralarında yer değiştirebilir: 2 × 2 = 4 farklı asılış.
Sağlama: Tarih, Bilim, Doğa, Spor, Kitap, Müzik; Tarih, Doğa, Bilim, Spor, Kitap, Müzik; Tarih, Kitap, Müzik, Spor, Bilim, Doğa; Tarih, Kitap, Müzik, Spor, Doğa, Bilim.
Cevap B.`
},
{
  id: "tur-sm-317",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun yıl sonu gösterisinde koro, keman, piyano, drama ve halk oyunları gösterileri birer kez sahnelenecektir. Sunucu, gösterilerin sırasını şu kurallara göre belirlemiştir:
• Koro ya ilk ya da son gösteri olacak.
• Keman gösterisi, piyano gösterisinden önceki sıralardan birinde yer alacak.
• Drama ile halk oyunları art arda sahnelenmeyecek.
• Piyano gösterisi üçüncü sırada olmayacak.
Bu kurallara uyan birden çok sıralama vardır. Prova sırasında halk oyunları ekibinin kostüm değiştirmesi gerektiği anlaşılınca sunucu, bu ekibin dördüncü sırada sahneye çıkmasına karar vermiştir.
**Bu son karar da dikkate alındığında ikinci sırada hangi gösteri sahnelenir?**`,
  gorsel: null,
  secenekler: ["Keman", "Piyano", "Halk oyunları", "Drama"],
  dogru: 3,
  hatalar: [
    "Kemanı en erken yere koyup denemeyi bırakma: Keman ikinci olursa drama ile piyanoya 3 ve 5 kalır; piyano 3'e giremez, drama da 3'te halk oyunlarının yanına düşer.",
    "Keman-piyano kuralını atlama: Piyano ikinci olsaydı keman birinci olmalıydı; o zaman koro sona gider, drama da 3. sırada halk oyunlarının yanına düşer.",
    "Son kararı dikkate almama: Karardan önce halk oyunları ikinci sırada olabiliyordu; ama artık dördüncü sıradadır.",
    null
  ],
  aciklama: `Adım 1: Halk oyunları 4. sıradadır. Drama onunla art arda olamayacağı için 3. ve 5. sıraya giremez; drama 1 ya da 2'dedir.
Adım 2: Koro 1 ya da 5'tedir. Koro 5'te olursa 1, 2 ve 3. sıralar drama, keman ve piyanoya kalır. Piyano 3 olamaz; keman piyanodan önce olmalı. O zaman piyano 2, keman 1 olur ve drama 3'e düşer. Drama 3'te halk oyunlarının yanındadır, olmaz.
Adım 3: Koro 1'dedir. 2, 3 ve 5. sıralar drama, keman ve piyanoya kalır. Drama 2'de olmak zorundadır (3 ve 5 yasak). Piyano 3 olamaz, 5'e gider; keman 3'e yerleşir.
Sıralama: Koro, Drama, Keman, Halk oyunları, Piyano.
Sağlama: Koro ilk, keman piyanodan önce, drama ile halk oyunları art arda değil, piyano 3. değil.
Sık yapılan hata: Ek bilgiyi hesaba katmadan, karardan önceki olası sıralamalardan birine bakarak cevap vermek.
Cevap D.`
},
{
  id: "tur-sm-318",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Arın, Bora, Cansu ve Dila; yüzme, tenis, basketbol ve voleybol sporlarından farklı birini yapmaktadır. Her biri pazartesiden perşembeye kadarki günlerden farklı birinde antrenmana gitmektedir. Çizelgeye iki bilgi yazılmıştır. Ayrıca şunlar bilinmektedir:
• Bora yüzmeye gitmez.
• Cansu voleybol oynamaz.
• Dila'nın antrenmanı, basketbol oynayan kişinin antrenmanından sonraki günlerin birindedir.
• Arın tenis oynamaz ve antrenmanı Cansu'nunkinden sonraki günlerin birindedir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th></tr><tr><th>Kişi</th><td>Bora</td><td>?</td><td>?</td><td>?</td></tr><tr><th>Spor</th><td>?</td><td>?</td><td>Tenis</td><td>?</td></tr></table>`,
  secenekler: ["Arın perşembe günü antrenman yapar.", "Bora pazartesi günü basketbol oynar.", "Cansu çarşamba günü tenis oynar.", "Dila salı günü antrenman yapar."],
  dogru: 0,
  hatalar: [
    null,
    "Olası olanı kesin sanma: Bora voleybol da oynayabilir; örneğin Bora voleybol, Cansu basketbol (salı), Dila tenis, Arın yüzme (perşembe) dağılımı bütün bilgilere uyar.",
    "Olası olanı kesin sanma: Çarşambanın sporu tenistir ama çarşamba günü Cansu yerine Dila da antrenman yapabilir.",
    "Olası olanı kesin sanma: Dila salı günü de çarşamba günü de antrenman yapabilir."
  ],
  aciklama: `Adım 1: Pazartesi Bora'nındır. Salı, çarşamba ve perşembe Arın, Cansu ve Dila'ya kalır.
Adım 2: Arın, Cansu'dan sonraki bir günde antrenman yapar; demek ki Arın salıda olamaz.
Adım 3: Arın çarşambada olursa çarşambanın sporu tenistir; ama Arın tenis oynamaz. Bu yüzden Arın perşembededir.
Adım 4: Cansu ile Dila salı ve çarşambayı paylaşır; çarşambadaki kişi tenis oynar. Dila'nın basketbolcudan sonra gelmesi, Bora'nın yüzmemesi ve Cansu'nun voleybol oynamaması kurallarına uyan dört farklı dağılım vardır.
Adım 5: Bu dağılımlarda Bora basketbol ya da voleybol, Cansu tenis ya da başka bir spor, Dila salı ya da çarşamba olabilir. Değişmeyen tek bilgi, Arın'ın perşembe günü antrenman yapmasıdır.
Sağlama: Arın yüzme (perşembe), Bora basketbol, Cansu tenis (çarşamba), Dila voleybol (salı) dağılımı ile Arın voleybol (perşembe), Bora basketbol, Cansu yüzme (salı), Dila tenis (çarşamba) dağılımının ikisi de kurallara uyar; ikisinde de Arın perşembededir.
Cevap A.`
},
{
  id: "tur-sm-319",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul serasında çatı penceresi, sisleme sistemi ve fan, sıcaklık ile nem ölçümlerine göre kendiliğinden çalışmaktadır. Sistemin kuralları Tablo 1'de, gün içinde yapılan ölçümler Tablo 2'de verilmiştir. Tablo 1'deki kurallara ek olarak şu kural da geçerlidir: Sıcaklık 27 °C ve üstündeyken nem ne olursa olsun fan çalışır.
**Buna göre aşağıdakilerin hangisinde, verilen saatte sera sisteminin durumu kurallara __uygun değildir__?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">Tablo 1</th></tr><tr><th>Sıcaklık (°C)</th><th>Çatı penceresi</th></tr><tr><td>18 ve altı</td><td>Kapalı</td></tr><tr><td>19-26</td><td>Yarım açık</td></tr><tr><td>27 ve üstü</td><td>Tam açık</td></tr></table><br><table class="tablo"><tr><th>Nem (%)</th><th>Sisleme</th><th>Fan</th></tr><tr><td>60 ve altı</td><td>Çalışır</td><td>Durur</td></tr><tr><td>61-80</td><td>Durur</td><td>Durur</td></tr><tr><td>81 ve üstü</td><td>Durur</td><td>Çalışır</td></tr></table><br><table class="tablo"><tr><th colspan="3">Tablo 2</th></tr><tr><th>Saat</th><th>Sıcaklık (°C)</th><th>Nem (%)</th></tr><tr><td>08.00</td><td>17</td><td>85</td></tr><tr><td>11.00</td><td>24</td><td>58</td></tr><tr><td>14.00</td><td>29</td><td>66</td></tr><tr><td>17.00</td><td>22</td><td>74</td></tr></table>`,
  secenekler: [
    "08.00: Pencere kapalı, sisleme durur, fan çalışır.",
    "11.00: Pencere yarım açık, sisleme çalışır, fan durur.",
    "14.00: Pencere tam açık, sisleme durur, fan durur.",
    "17.00: Pencere yarım açık, sisleme durur, fan durur."
  ],
  dogru: 2,
  hatalar: [
    "Uygun olanı aykırı sanma: %85 nem 81 ve üstü aralığındadır; sisleme durur, fan çalışır. 17 °C'de pencere kapalıdır.",
    "Uygun olanı aykırı sanma: %58 nem 60 ve altı aralığındadır; sisleme çalışır, fan durur. 24 °C'de pencere yarım açıktır.",
    null,
    "Uygun olanı aykırı sanma: %74 nem 61-80 aralığındadır; sisleme de fan da durur. 22 °C'de pencere yarım açıktır."
  ],
  aciklama: `İki tablo ve bir ek kuralın birlikte uygulandığı sorularda her saat için üç parçayı ayrı ayrı denetle: pencere (sıcaklığa göre), sisleme ve fan (nem ile ek kurala göre).
Adım 1: 08.00: 17 °C → pencere kapalı. %85 → sisleme durur, fan çalışır. A şıkkı uygun.
Adım 2: 11.00: 24 °C → yarım açık. %58 → sisleme çalışır, fan durur. Sıcaklık 27'nin altında olduğu için ek kural devreye girmez. B şıkkı uygun.
Adım 3: 14.00: 29 °C → tam açık. %66 → sisleme durur; tabloya göre fan durur. Ama sıcaklık 27 °C'nin üstünde olduğu için ek kural gereği fan çalışmalıdır. C şıkkında fan duruyor; kurala uygun değil.
Adım 4: 17.00: 22 °C → yarım açık. %74 → sisleme ve fan durur. D şıkkı uygun.
Sık yapılan hata: Yalnızca tabloya bakıp metindeki ek kuralı gözden kaçırmak.
Cevap C.`
},
{
  id: "tur-sm-320",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Teneffüste kantin önünde Ada, Berk, Can, Dora, Efe ve Fulya tek sıra hâlinde kuyruğa girmiştir. Kuyruğun en önündeki kişi 1., en arkasındaki kişi 6. sıradadır. Berk'in yeri görselde gösterilmiştir. Kuyrukla ilgili şunlar bilinmektedir:
• Can, Ada'nın hemen arkasındadır.
• Efe ne en öndedir ne de en arkadadır.
• Dora, Fulya'dan daha öndedir.
• Fulya, Efe'nin hemen önünde değildir.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: `<svg viewBox="0 0 540 120" role="img" aria-label="Kantin kuyruğu: altı yer; 5. sırada Berk">
<rect x="6" y="20" width="70" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/>
<text x="41" y="57" font-size="15" text-anchor="middle" fill="currentColor">Kantin</text>
<g fill="none" stroke="currentColor" stroke-width="2">
<circle cx="116" cy="52" r="26"/><circle cx="186" cy="52" r="26"/><circle cx="256" cy="52" r="26"/><circle cx="326" cy="52" r="26"/><circle cx="466" cy="52" r="26"/>
</g>
<circle cx="396" cy="52" r="26" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="116" y="58">?</text><text x="186" y="58">?</text><text x="256" y="58">?</text><text x="326" y="58">?</text><text x="396" y="57" font-size="15" font-weight="700">Berk</text><text x="466" y="58">?</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="116" y="110">1.</text><text x="186" y="110">2.</text><text x="256" y="110">3.</text><text x="326" y="110">4.</text><text x="396" y="110">5.</text><text x="466" y="110">6.</text>
</g>
</svg>`,
  secenekler: ["Ada üçüncü sıradadır.", "Dora ikinci sıradadır.", "Efe dördüncü sıradadır.", "Can dördüncü sıradadır."],
  dogru: 1,
  hatalar: [
    "Olabilir olanı olamaz sanma: Dora, Efe, Ada, Can, Berk, Fulya sıralaması bütün bilgilere uyar.",
    null,
    "Olabilir olanı olamaz sanma: Ada, Can, Dora, Efe, Berk, Fulya sıralaması bütün bilgilere uyar.",
    "Olabilir olanı olamaz sanma: Dora, Efe, Ada, Can, Berk, Fulya sıralamasında Can dördüncüdür ve bütün bilgiler sağlanır."
  ],
  aciklama: `"Olamaz" sorusunda her şıkkı bir varsayım olarak dene; bütün kurallara uyan bir sıralama kurabiliyorsan o şık olabilir demektir.
Adım 1: Berk 5. sıradadır. Ada-Can ikilisi art arda iki boş yer ister: 1-2, 2-3 ya da 3-4.
Adım 2: B şıkkını dene: Dora 2. olsun. O zaman boş yerler 1, 3, 4 ve 6'dır. Art arda olan tek boş çift 3-4'tür; Ada 3'e, Can 4'e gider.
Adım 3: Efe ile Fulya'ya 1 ve 6 kalır. Oysa Efe ne en önde ne en arkada olabilir. Hiçbir yerleşim kurulamaz; demek ki Dora 2. sırada olamaz.
Adım 4: Diğer şıklar için birer örnek: Dora, Efe, Ada, Can, Berk, Fulya (Ada 3., Can 4.); Ada, Can, Dora, Efe, Berk, Fulya (Efe 4.). İkisi de bütün kurallara uyar.
Sık yapılan hata: Bir şıkkı denerken yalnızca bir iki kurala bakıp "olur" demek. Kurduğun sıralamayı bütün kurallarla tek tek karşılaştır.
Cevap B.`
},
{
  id: "tur-sm-321",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yaz kampında pazartesiden cumartesiye kadar her gün bir etkinlik yapılacaktır. Etkinlikler kano, tırmanış, okçuluk, bisiklet, yüzme ve doğa yürüyüşüdür. Okçuluk günü çizelgeye yazılmıştır. Kamp sorumlusu programı şu kurallara göre hazırlamıştır:
• Yüzme ile kano art arda iki günde yapılacak.
• Tırmanış, bisikletten sonraki günlerin birinde yapılacak.
• Bisiklet pazartesi günü yapılmayacak.
• Doğa yürüyüşü ne pazartesi ne de cumartesi günü yapılacak.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th><th>Cuma</th><th>Cumartesi</th></tr><tr><td>?</td><td>?</td><td>?</td><td>?</td><td>Okçuluk</td><td>?</td></tr></table>`,
  secenekler: ["Kano pazartesi günü yapılır.", "Bisiklet perşembe günü yapılır.", "Doğa yürüyüşü çarşamba günü yapılır.", "Tırmanış cumartesi günü yapılır."],
  dogru: 3,
  hatalar: [
    "İkilinin iç düzenini unutma: Yüzme ile kano pazartesi-salı günlerindedir ama hangisinin önce yapılacağı belli değildir.",
    "Olası olanı kesin sanma: Bisiklet çarşamba da olabilir, perşembe de; doğa yürüyüşü öteki güne yerleşir.",
    "Olası olanı kesin sanma: Doğa yürüyüşü çarşamba da olabilir, perşembe de.",
    null
  ],
  aciklama: `"Kesinlikle doğru" olan ifade, kurallara uyan bütün programlarda doğru kalan ifadedir.
Adım 1: Okçuluk cuma günüdür. Pazartesi günü hangi etkinlik olabilir? Bisiklet olamaz (kural), tırmanış olamaz (bisikletten sonra gelmeli), doğa yürüyüşü olamaz (kural). Geriye yüzme ya da kano kalır.
Adım 2: Yüzme ile kano art arda olduğuna göre bu ikili pazartesi-salı günlerindedir.
Adım 3: Çarşamba, perşembe ve cumartesi; tırmanış, bisiklet ve doğa yürüyüşüne kalır. Doğa yürüyüşü cumartesi olamaz. Tırmanış bisikletten sonra olmalı; tırmanış çarşamba olamaz.
Adım 4: Tırmanış perşembe olursa bisiklet çarşamba olur ve doğa yürüyüşü cumartesiye düşer; bu yasaktır. O hâlde tırmanış cumartesidir.
Adım 5: Bisiklet ile doğa yürüyüşü çarşamba-perşembe günlerini herhangi bir sırayla paylaşır; kano ile yüzme de pazartesi-salıyı. Toplam dört program vardır ve hepsinde tırmanış cumartesidir.
Sağlama: Kano, yüzme, bisiklet, doğa yürüyüşü, okçuluk, tırmanış programı bütün kurallara uyar.
Cevap D.`
},
{
  id: "tur-sm-322",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sınıfta Ege, Figen, Gökay, Hira ve Ilgaz'a birer sınıf görevi verilecektir. Görevler kitaplığı düzenlemek, panoyu düzenlemek, bitkileri sulamak, tahtayı silmek ve ışıkları kapatmaktır. Her öğrenci bir görev alacak, her görev bir öğrenciye verilecektir. Öğretmen dağılımla ilgili şunları söylemiştir:
• Ege ya panoyu düzenleyecek ya da bitkileri sulayacak.
• Figen'e kitaplık ve ışık görevleri verilmeyecek.
• Gökay'a tahta, pano ve kitaplık görevleri verilmeyecek.
• Hira ya kitaplığı düzenleyecek ya da tahtayı silecek.
Bu bilgilerle görev dağılımı tek biçimde belirlenememektedir.
**Bu bilgilere ek olarak aşağıdakilerden hangisi bilinirse her öğrencinin görevi kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: ["Ege'nin bitkileri suladığı", "Gökay'ın bitkileri suladığı", "Hira'nın tahtayı sildiği", "Figen'in panoyu düzenlediği"],
  dogru: 1,
  hatalar: [
    "Tek kişinin görevini bulmayı yeterli sanma: Ege bitkileri sularsa Gökay'a ışıklar kalır ama Figen, Hira ve Ilgaz için üç farklı dağılım mümkündür.",
    null,
    "Eksik deneme: Hira tahtayı silerse Ilgaz'a kitaplık, Gökay'a ışıklar kalır; ama Ege ile Figen pano ve bitkileri iki biçimde paylaşabilir.",
    "Eksik deneme: Figen panoyu düzenlerse Ege bitkilere, Gökay ışıklara gider; ama Hira ile Ilgaz kitaplık ve tahtayı iki biçimde paylaşabilir."
  ],
  aciklama: `"Hangisi bilinirse kesinleşir" sorusunda her şıkkı ek bilgi olarak ekle ve kalan dağılımları say. Tek dağılım bırakan şık doğrudur.
Adım 1: Gökay tahta, pano ve kitaplık alamaz; Gökay'a ya bitkiler ya da ışıklar kalır.
Adım 2: B şıkkını dene: Gökay bitkileri sular. Ege'ye pano kalır (bitkiler dolu). Figen kitaplık, ışık ve pano alamaz; Figen tahtayı siler. Hira'ya kitaplık kalır (tahta dolu). Ilgaz ışıkları kapatır. Tek dağılım çıktı.
Adım 3: A şıkkı: Ege bitkiler, Gökay ışıklar. Figen pano ya da tahta, Hira kitaplık ya da tahta; üç farklı dağılım çıkar.
Adım 4: C şıkkı: Hira tahta, Ilgaz kitaplık, Gökay ışıklar; Ege ile Figen pano ve bitkileri iki biçimde paylaşır.
Adım 5: D şıkkı: Figen pano, Ege bitkiler, Gökay ışıklar; Hira ile Ilgaz kitaplık ve tahtayı iki biçimde paylaşır.
Sağlama: B şıkkıyla kurulan dağılım (Ege pano, Figen tahta, Gökay bitkiler, Hira kitaplık, Ilgaz ışıklar) dört bilginin hepsine uyar.
Cevap B.`
},
{
  id: "tur-sm-323",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Resim öğretmeni sınıf dolabına boya, kil, makas, kâğıt, yapıştırıcı ve ip kutularını yerleştirecektir. Dolapta görseldeki gibi üst ve alt olmak üzere iki raf, her rafta üç bölme vardır; alt raftaki her bölme, üst raftaki bir bölmenin tam altındadır. Her bölmeye bir kutu konacaktır. Öğretmen şu kurallara uyacaktır:
• Makas kutusu, küçük öğrencilerin ulaşamaması için üst rafta olacak.
• Kil kutusu, boya kutusunun tam altında olacak.
• Kâğıt ile yapıştırıcı kutuları aynı rafta ve yan yana olacak.
• İp kutusu alt rafın sol ucundaki bölmeye konmayacak.
• Yapıştırıcı kutusu, makas kutusunun tam altına konmayacak.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 400 230" role="img" aria-label="İki raflı, her rafta üç bölmeli dolap">
<rect x="70" y="14" width="300" height="196" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="70" y1="112" x2="370" y2="112" stroke="currentColor" stroke-width="3"/>
<line x1="170" y1="14" x2="170" y2="210" stroke="currentColor" stroke-width="2"/>
<line x1="270" y1="14" x2="270" y2="210" stroke="currentColor" stroke-width="2"/>
<g font-size="15" fill="currentColor">
<text x="4" y="68">Üst raf</text><text x="4" y="166">Alt raf</text>
</g>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="120" y="68">?</text><text x="220" y="68">?</text><text x="320" y="68">?</text>
<text x="120" y="166">?</text><text x="220" y="166">?</text><text x="320" y="166">?</text>
</g>
<g font-size="14" text-anchor="middle" fill="currentColor">
<text x="120" y="228">Sol</text><text x="220" y="228">Orta</text><text x="320" y="228">Sağ</text>
</g>
</svg>`,
  secenekler: ["Kil kutusu alt rafın sol ucundadır.", "İp kutusu makas kutusuyla aynı raftadır.", "Makas kutusu üst rafın ortasındadır.", "Kâğıt kutusu yapıştırıcının solundadır."],
  dogru: 1,
  hatalar: [
    "Olası olanı kesin sanma: Kil kutusu alt rafın sağ ucunda da olabilir (ör. üst raf: makas, ip, boya; alt raf: kâğıt, yapıştırıcı, kil).",
    null,
    "Olası olanı kesin sanma: Makas üst rafın solunda ya da sağında da olabilir.",
    "İkilinin iç düzenini sabit sanma: Kâğıt ile yapıştırıcı yan yanadır ama hangisinin solda olduğu yerleşime göre değişir."
  ],
  aciklama: `Adım 1: Boya-kil ikilisi bir sütunu kaplar: Boya üstte, kil altta. Kâğıt-yapıştırıcı ikilisi aynı rafta yan yana iki bölme ister.
Adım 2: Kâğıt ile yapıştırıcı üst rafa konsun. Üst rafta boya da olduğuna göre üst raf boya, kâğıt ve yapıştırıcıyla dolar; makasa yer kalmaz. Oysa makas üst rafta olmalı. Bu durum olmaz.
Adım 3: Demek ki kâğıt ile yapıştırıcı alt raftadır. Alt raf kil, kâğıt ve yapıştırıcıyla dolar. Üst rafa boya, makas ve ip kalır.
Adım 4: Böylece ip kutusu her durumda üst rafta, yani makasla aynı raftadır. Kalan kurallar (ip alt rafın solunda değil, yapıştırıcı makasın altında değil) yalnızca bölmelerin yerini sınırlar; dört farklı yerleşim kalır.
Sağlama: Üst raf boya, makas, ip; alt raf kil, kâğıt, yapıştırıcı yerleşimi beş kuralın hepsine uyar. Bu yerleşimde makas ortada, kil solda; başka yerleşimlerde bunlar değişir.
Cevap B.`
},
{
  id: "tur-sm-324",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okulda yapılacak bir yazar söyleşisi için beş iş yapılacaktır: afişi tasarlamak, afişi bastırmak, salonu ayırtmak, davetiyeleri göndermek ve sandalyeleri dizmek. Her gün bir iş yapılacak ve işler beş günde bitirilecektir. İşlerin sırasıyla ilgili şunlar bilinmektedir:
• İlk gün afiş tasarlanacaktır.
• Afiş, tasarlanmadan bastırılamaz.
• Davetiyelerde hem afişin baskısı hem de salon bilgisi yer alacağı için davetiyeler, afiş basıldıktan ve salon ayırtıldıktan sonra gönderilecektir.
• Sandalyeler, salon ayırtıldıktan sonra dizilecektir.
Görseldeki oklar, hangi işin hangisinden önce yapılması gerektiğini göstermektedir.
**Buna göre bu beş iş kaç farklı sırayla yapılabilir?**`,
  gorsel: `<svg viewBox="0 0 540 200" role="img" aria-label="İş sırası şeması: afiş tasarımı, afiş baskısından önce; afiş baskısı ve salon ayırtma, davetiyeden önce; salon ayırtma, sandalye dizmeden önce">
<g fill="var(--dolgu)" stroke="currentColor" stroke-width="2">
<rect x="10" y="30" width="130" height="46" rx="8"/><rect x="200" y="30" width="130" height="46" rx="8"/><rect x="200" y="124" width="130" height="46" rx="8"/>
<rect x="400" y="30" width="130" height="46" rx="8"/><rect x="400" y="124" width="130" height="46" rx="8"/>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="75" y="58">Afiş tasarımı</text><text x="265" y="58">Afiş baskısı</text><text x="265" y="152">Salon ayırtma</text>
<text x="465" y="58">Davetiye</text><text x="465" y="152">Sandalye dizme</text>
<text x="75" y="100" fill="var(--vurgu)">1. gün</text>
</g>
<g stroke="currentColor" stroke-width="2">
<line x1="140" y1="53" x2="190" y2="53"/><line x1="330" y1="53" x2="390" y2="53"/><line x1="330" y1="140" x2="392" y2="80"/><line x1="330" y1="147" x2="390" y2="147"/>
</g>
<g fill="currentColor">
<polygon points="200,53 188,47 188,59"/><polygon points="400,53 388,47 388,59"/><polygon points="399,73 386,77 395,86"/><polygon points="400,147 388,141 388,153"/>
</g>
</svg>`,
  secenekler: ["5", "6", "8", "9"],
  dogru: 0,
  hatalar: [
    null,
    "Bir koşulu atlama: Salon ayırtılmadan davetiye gönderilemez; bu unutulunca salonun davetiyeden sonra ayırtıldığı bir sıra daha sayılır.",
    "Bir koşulu atlama: Davetiyenin afiş baskısından sonra gelmesi ya da sandalyelerin salondan sonra dizilmesi koşulu unutulunca fazladan sıralar sayılır.",
    "İlk gün kuralını atlama: Salon ilk gün ayırtılabilir sanılırsa afiş tasarımının ikinci ya da üçüncü güne kaydığı dört sıra daha eklenir."
  ],
  aciklama: `Adım 1: İlk gün afiş tasarımıdır. Kalan dört iş (baskı, salon, davetiye, sandalye) 2-5. günlere yerleşir.
Adım 2: Davetiye hem baskıdan hem salondan sonra gelir; sandalye salondan sonra gelir. Baskı ile salon arasında bir sıra koşulu yoktur.
Adım 3: 2. gün baskı olursa: 3. gün salon olmak zorundadır (davetiye ve sandalye salondan önce yapılamaz). Kalan davetiye ile sandalye 4-5. günlere iki biçimde yerleşir: 2 sıra.
Adım 4: 2. gün salon olursa: Kalan baskı, davetiye, sandalye 3-5. günlere yerleşir; davetiye baskıdan sonra gelmeli. Baskı-davetiye-sandalye, baskı-sandalye-davetiye, sandalye-baskı-davetiye: 3 sıra.
Adım 5: Toplam 2 + 3 = 5 farklı sıra.
Sağlama: Sıralar şunlardır: T-B-S-D-Sa, T-B-S-Sa-D, T-S-B-D-Sa, T-S-B-Sa-D, T-S-Sa-B-D (T: tasarım, B: baskı, S: salon, D: davetiye, Sa: sandalye).
Cevap A.`
},
{
  id: "tur-sm-325",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Robotik kulübünde, 4 × 4 karelik bir zeminde hareket eden bir robot programlanmaktadır. Robot başlangıçta A1 karesinde, görseldeki gibi yukarı doğru bakmaktadır. Robot şu komutlarla hareket eder:
• İ: Baktığı yönde bir kare ilerler.
• S: Olduğu yerde sağa döner. L: Olduğu yerde sola döner.
Programın iki özel kuralı vardır:
• İlerleyeceği kare engelliyse ya da zeminin dışındaysa robot o İ komutunu uygulamaz, yerinde kalır.
• Robot dönüş karesine girdiği anda yüzünü tam ters yöne çevirir.
Robota sırasıyla şu komutlar verilmiştir: İ, İ, İ, S, İ, İ, İ, L, İ, İ
**Buna göre bütün komutlar uygulandığında robot hangi karede bulunur?**`,
  gorsel: `<svg viewBox="0 0 470 300" role="img" aria-label="4x4 zemin: sütunlar A-D, satırlar 1-4; B3 ve D2 engelli, C4 dönüş karesi; robot A1'de yukarı bakıyor">
<g fill="none" stroke="currentColor" stroke-width="2">
<rect x="50" y="20" width="240" height="240"/>
<line x1="110" y1="20" x2="110" y2="260"/><line x1="170" y1="20" x2="170" y2="260"/><line x1="230" y1="20" x2="230" y2="260"/>
<line x1="50" y1="80" x2="290" y2="80"/><line x1="50" y1="140" x2="290" y2="140"/><line x1="50" y1="200" x2="290" y2="200"/>
</g>
<rect x="111" y="81" width="58" height="58" fill="currentColor" opacity="0.35"/>
<rect x="231" y="141" width="58" height="58" fill="currentColor" opacity="0.35"/>
<rect x="171" y="21" width="58" height="58" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="3"/>
<text x="200" y="56" font-size="14" text-anchor="middle" fill="currentColor">Dönüş</text>
<polygon points="80,212 66,246 94,246" fill="var(--vurgu)"/>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="80" y="282">A</text><text x="140" y="282">B</text><text x="200" y="282">C</text><text x="260" y="282">D</text>
<text x="32" y="55">4</text><text x="32" y="115">3</text><text x="32" y="175">2</text><text x="32" y="235">1</text>
</g>
<rect x="310" y="40" width="26" height="26" fill="currentColor" opacity="0.35"/>
<text x="344" y="59" font-size="14" fill="currentColor">Engel</text>
<rect x="310" y="84" width="26" height="26" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="3"/>
<text x="344" y="103" font-size="14" fill="currentColor">Dönüş karesi</text>
<polygon points="323,130 312,154 334,154" fill="var(--vurgu)"/>
<text x="344" y="148" font-size="14" fill="currentColor">Robot</text>
</svg>`,
  secenekler: ["A2", "B2", "B4", "D4"],
  dogru: 2,
  hatalar: [
    "Sağ ile solu karıştırma: A4'te sağa değil sola dönülürse robot zeminin dışına bakar, üç İ komutunda yerinde kalır; sonra aşağı dönüp A2'ye iner.",
    "Engel kuralını atlama: B4'ten aşağı inerken B3 engellidir; robot bu kareye giremez ve B4'te kalır.",
    null,
    "Dönüş karesi kuralını atlama: Robot C4'e girince ters yöne dönmelidir; dönmezse D4'e gider ve orada kalır."
  ],
  aciklama: `Kural uygulama sorularında robotun hem yerini hem baktığı yönü her adımda yaz.
Adım 1: İ, İ, İ: Robot yukarı bakarak A2, A3, A4'e çıkar.
Adım 2: S: Sağa döner, artık sağa (D sütununa doğru) bakar.
Adım 3: İ: B4. İ: C4. C4 dönüş karesidir; robot hemen ters yöne, yani sola (A sütununa doğru) döner. İ: B4.
Adım 4: L: Sola bakarken sola dönen robot aşağı bakar.
Adım 5: İ: Aşağıdaki kare B3 engellidir; robot yerinde kalır. Son İ için de aynı durum geçerlidir. Robot B4'te kalır.
Sağlama: On komutun hepsi sayıldı: 3 İ + S + 3 İ + L + 2 İ.
Sık yapılan hata: Dönüş karesinde robotun yalnızca yön değiştirdiğini, durmadığını unutmak ya da engelin önünde robotu bir sonraki kareye atlatmak.
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
