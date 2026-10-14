// İngilizce — Unit 4: On the Phone · Kademe 3 (LGS Ayarı) ve Havuz
// Bağlam aileleri: telefon notu (memo), diyalog tamamlama, diyalog sıralama, dahili hat listesi, çağrı kaydı, kural afişi, mesajlaşma
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["ing-4-phone"] = window.LGS_BANK["ing-4-phone"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "ing-u4-301",
  kazanim: "E8.4.L2",
  kademe: 3,
  zorluk: 3,
  soru: `Ali calls his friend Tom's house. Tom's mother answers the phone.

Ali: Hello! This is Ali calling. Is Tom in?
Mrs. Brown: - - - -
Ali: Yes, please. Tell him to call me back.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Hang on a minute. I'll get him from the garden.`,
    `I'm afraid he is out. Would you like to leave a message?`,
    `Yes, speaking. I am Tom. What can I do for you?`,
    `Sorry, you have the wrong number. This is a bakery.`
  ],
  dogru: 1,
  hatalar: [
    `Cevabın devamını okumama: Ali "Tell him to call me back" (ona beni geri aramasını söyle) diyor. Tom çağrılsaydı mesaj bırakmaya gerek kalmazdı.`,
    null,
    `Konuşan kişiyi karıştırma: "Yes, speaking" ancak aranan kişi telefona çıkınca söylenir. Telefona çıkan Tom'un annesidir.`,
    `Akışı bozma: Yanlış numara olsaydı Ali "Yes, please" diye cevap vermezdi; Ali, Tom'un annesiyle konuşuyor.`
  ],
  aciklama: `Telefonda aranan kişi yoksa karşıdaki kişi önce durumu söyler ("I'm afraid he is out" = Korkarım dışarıda), sonra mesaj bırakmayı önerir ("Would you like to leave a message?" = Mesaj bırakmak ister misiniz?).
Adım 1: Ali, Tom'un evini arıyor ve Tom'un annesiyle konuşuyor.
Adım 2: Ali'nin cevabı "Yes, please. Tell him to call me back." Bu cevap bir soruya "evet" demektir; soru da mesaj bırakmakla ilgili olmalıdır.
Adım 3: Tom evde olsaydı Ali'den "geri arasın" diye rica etmesi gerekmezdi. Demek ki Tom evde yok ve anne mesaj öneriyor: B.
Adım 4: A Tom'u çağırır (mesaj gereksiz kalır), C Tom'un kendisinin konuşmasıdır, D yanlış numara cevabıdır; hiçbiri "Yes, please" ile uyuşmaz.
Sık yapılan hata: Sadece ilk cümledeki "Is Tom in?" sorusuna bakıp "Hang on a minute" seçmek. Boşluktan sonraki cevabı da oku.
Cevap B.`
},
{
  id: "ing-u4-302",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Mr. Demir finds this memo on his desk after lunch.

**What should Mr. Demir do?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Mr. Demir</td></tr><tr><td>Caller</td><td>Ms. Green</td></tr><tr><td>Time</td><td>10.15</td></tr><tr><td>Message</td><td>Please call me back after lunch. My extension is 24.</td></tr></table>`,
  secenekler: [
    `Wait for Ms. Green's call after lunch.`,
    `Call Ms. Green back before lunch.`,
    `Put Ms. Green through to extension 24.`,
    `Contact Ms. Green after lunch.`
  ],
  dogru: 3,
  hatalar: [
    `Yönü ters anlama: Memo'da "call me back" (beni geri ara) yazıyor. Arayacak kişi Ms. Green değil, Mr. Demir'dir.`,
    `Zamanı karıştırma: Mesaj "after lunch" (öğle yemeğinden sonra) diyor. "Before lunch" öğle yemeğinden önce demektir.`,
    `Dahili hattı yanlış kullanma: 24 numarası, Mr. Demir'in aracağı dahili hattır; "put through" ise santral görevlisinin yaptığı bağlama işidir.`,
    null
  ],
  aciklama: `Telefon notu (memo), sen yokken arayan kişinin mesajını bildirir. "Call me back" arayan kişinin, kendisini geri aramanı istediği anlamına gelir. "Extension" bir binadaki dahili hat numarasıdır.
Adım 1: Memo'ya bak: Arayan Ms. Green, mesaj alacak kişi Mr. Demir.
Adım 2: Mesaj: "Please call me back after lunch." Yani Mr. Demir öğle yemeğinden sonra Ms. Green'i arayacak. Dahili hat 24'tür.
Adım 3: "Contact Ms. Green after lunch" ifadesi "Ms. Green ile öğle yemeğinden sonra iletişime geç" demektir; bu da onu geri aramayı anlatır: D.
Adım 4: A bekleme, B yanlış zaman, C ise santral işidir. Hiçbiri memo ile uyuşmaz.
Sık yapılan hata: "Call me back" ifadesindeki "me"yi unutup bekleyen kişinin kendisi olduğunu sanmak.
Cevap D.`
},
{
  id: "ing-u4-303",
  kazanim: "E8.4.SP1",
  kademe: 3,
  zorluk: 3,
  soru: `Burak calls his friend Defne at three o'clock. Defne is at her piano lesson. Her lesson finishes at five.

Burak: Can we talk about the science project now?
Defne: Sorry, I'm in my lesson. - - - -

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I'll get back to you at five.`,
    `I'll connect you at five.`,
    `I'll put you through at five.`,
    `I'll hold the line at five.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Santral fiilini yanlış yere koyma: "connect" iki telefonu birbirine bağlamak demektir; Defne arkadaşını başkasına bağlamıyor, kendisi geri arayacak.`,
    `"Put someone through" santral görevlisinin yaptığı işi anlatır; Defne bir operatör değil, ders çıkışı kendisi konuşacak.`,
    `"Hold the line" hatta beklemek demektir. Defne ders bitene kadar hatta bekleyemez; bu karar anlamsızdır.`
  ],
  aciklama: `"I'll get back to you" (Sana geri döneceğim / Seni geri arayacağım), o anda verilen bir kararı bildirir. Konuşma anında karar verirken "I'll + fiil" kullanılır.
Adım 1: Defne şu anda ders yapıyor ve konuşamıyor. Ders saat beşte bitiyor.
Adım 2: Defne'nin vereceği karar: dersten sonra arkadaşını aramak.
Adım 3: Bu karar "I'll get back to you at five." cümlesiyle söylenir: A.
Adım 4: B ve C, bir operatörün başkasını bağlamasını anlatır. D ise hatta beklemektir; konuşmanın anlamına uymaz.
Sık yapılan hata: Telefon sözcüklerinden "connect" veya "put through" gibi tanıdık olanı seçmek. Kimin kimi aradığını düşün.
Cevap A.`
},
{
  id: "ing-u4-304",
  kazanim: "E8.4.L2",
  kademe: 3,
  zorluk: 3,
  soru: `Emre calls his uncle's company at 2.10 pm.

Emre: Hello! This is Emre calling. May I speak to Mr. Aksoy, please?
Secretary: I'm afraid he is on another line. He will be free at 2.30.
Emre: OK. I'll call back in twenty minutes, then.

**What time will Emre call Mr. Aksoy again?**`,
  gorsel: null,
  secenekler: [
    `2.10`,
    `2.20`,
    `2.30`,
    `2.50`
  ],
  dogru: 2,
  hatalar: [
    `Şimdiki saati cevap sanma: 2.10, Emre'nin aradığı andır; tekrar arama bunun yirmi dakika sonrasıdır.`,
    `Dakikayı yanlış ekleme: 2.10'a 10 dakika eklenirse 2.20 olur. Emre "twenty minutes" (yirmi dakika) diyor.`,
    null,
    `Yanlış saatten başlama: 2.50, 2.30'a yirmi dakika eklemektir. Emre yirmi dakikayı şimdiki saatten (2.10) sayar.`
  ],
  aciklama: `"In twenty minutes" (yirmi dakika sonra), konuşma anından itibaren sayılır. "Be on another line" ise başka bir hatta konuşuyor demektir.
Adım 1: Emre 2.10'da arıyor. Mr. Aksoy başka bir hatta konuşuyor, 2.30'da boş olacak.
Adım 2: Emre "I'll call back in twenty minutes" diyor. 2.10 + 20 dakika = 2.30.
Adım 3: Bu, sekreterin söylediği "free at 2.30" saatiyle de uyuşuyor. Emre Mr. Aksoy'u 2.30'da arayacak.
Sağlama: Sekreterin verdiği saat ile Emre'nin hesabı aynı sonucu veriyor.
Cevap C.`
},
{
  id: "ing-u4-305",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Kerem finds this note from his mother on the table.

Dear Kerem,
Uncle Ali called at four o'clock from the airport. He couldn't talk for long because his phone battery is low. He will call again at seven from the hotel phone. Don't call his mobile phone, OK? Mum

**Why should Kerem not call Uncle Ali's mobile phone?**`,
  gorsel: null,
  secenekler: [
    `Its line is always engaged.`,
    `Its battery is nearly empty.`,
    `Its number has just changed.`,
    `Its owner has lost it.`
  ],
  dogru: 1,
  hatalar: [
    `Sebebi uydurma: Notta hattın hep meşgul olduğundan söz edilmez. Amcanın telefonu şarj sorunu yüzünden konuşamıyor.`,
    null,
    `Notta olmayan bilgi ekleme: Numaranın değiştiği hiçbir yerde yazmıyor; amca aynı telefondan az önce aramış.`,
    `Yanlış çıkarım: Amca telefonla arayabildiğine göre telefonunu kaybetmemiştir. Sorun şarjdır.`
  ],
  aciklama: `Notta nedeni veren cümle "because" (çünkü) ile başlar. Nedeni bulmak için "because" sözcüğünden sonrasına bak.
Adım 1: Annenin notunda: "He couldn't talk for long because his phone battery is low." (Telefonunun şarjı az olduğu için uzun konuşamadı.)
Adım 2: Not şunu da diyor: "Don't call his mobile phone." Yani Kerem amcanın cep telefonunu aramamalı; çünkü şarj az.
Adım 3: "Battery is low" ifadesi "Its battery is nearly empty" (şarjı neredeyse bitti) anlamına gelir: B.
Adım 4: A, C ve D notta olmayan nedenlerdir.
Sık yapılan hata: Notta geçmeyen ama mantıklı görünen bir nedeni seçmek. Cevabı metinde bir cümleyle bulabilmelisin.
Cevap B.`
},
{
  id: "ing-u4-306",
  kazanim: "E8.4.SP1",
  kademe: 3,
  zorluk: 3,
  soru: `At the school office, the phone rings. Ms. Tuna is already talking to a parent on the other line.

Ms. Tuna: The phone is ringing again, but my line is engaged with a parent.
Mr. Aydın: Don't worry. - - - -

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `I'll hang up the call.`,
    `I'll dial the number.`,
    `I'll put the phone down.`,
    `I'll talk to the caller.`
  ],
  dogru: 3,
  hatalar: [
    `Çağrıyı kesme: "Hang up" telefonu kapatmaktır. Çalan telefona cevap vermek yerine kapatmak yardım etmez.`,
    `Yanlış yön: "Dial" numarayı çevirip birini aramaktır. Burada biri zaten arıyor.`,
    `Hiçbir şey çözmeme: Telefonu yere bırakmak, çalan telefona kimsenin bakmaması demektir.`,
    null
  ],
  aciklama: `Konuşma anında verilen karar "I'll + fiil" ile söylenir. Karar, karşıdaki sorunu çözmelidir. "Line is engaged" (hat meşgul) ifadesi, Ms. Tuna'nın başka biriyle konuştuğunu gösterir.
Adım 1: Sorun: Ms. Tuna meşgul, ama telefon çalıyor.
Adım 2: Mr. Aydın yardım etmek istiyor. Çözüm, çalan telefona onun bakması ve arayanla konuşmasıdır.
Adım 3: Bu karar "I'll talk to the caller." (Arayanla ben konuşurum) cümlesidir: D.
Adım 4: "Hang up" kapatmak, "dial" numara çevirmek, "put down" yere bırakmaktır. Bunlar çalan telefonu cevaplamaz.
Sık yapılan hata: Telefon sözcüklerinden birini görünce seçmek. Seçeneğin sorunu çözüp çözmediğine bak.
Cevap D.`
},
{
  id: "ing-u4-307",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Mr. Oz calls a computer shop. The operator will put him through to the right extension.

Mr. Oz: My new tablet doesn't turn on. Who can help me?
Operator: Can you hold on a moment, please? I'll put you through.

**Which extension will the operator dial?**`,
  gorsel: `<table class="tablo"><tr><th>Department</th><th>Extension</th></tr><tr><td>Sales</td><td>12</td></tr><tr><td>Accounts</td><td>24</td></tr><tr><td>Manager</td><td>31</td></tr><tr><td>Technical Support</td><td>40</td></tr></table>`,
  secenekler: [
    `Extension 12`,
    `Extension 24`,
    `Extension 31`,
    `Extension 40`
  ],
  dogru: 3,
  hatalar: [
    `Satış servisini seçme: 12, yeni ürün satan bölümdür. Mr. Oz'un tableti zaten alınmış ve çalışmıyor.`,
    `Hesap bölümünü seçme: 24 fatura ve ödeme işlerine bakar. Sorun bir ödeme değil, cihazın açılmamasıdır.`,
    `Yöneticiyi seçme: Bu tür arıza sorunu önce teknik destek bölümüne gider; müdür bağlamak gerekmez.`,
    null
  ],
  aciklama: `"Extension" bir şirketin içindeki dahili hat numarasıdır. "Put someone through" ise arayan kişiyi doğru hatta bağlamaktır.
Adım 1: Mr. Oz'un sorunu: Yeni tableti açılmıyor (doesn't turn on). Bu bir arızadır.
Adım 2: Tabloya bak: Arızaya bakan bölüm "Technical Support" (teknik destek).
Adım 3: Teknik destek bölümünün dahili hat numarası 40'tır.
Adım 4: Sales satışa, Accounts ödemeye, Manager yönetime bakar.
Sağlama: Operatör Mr. Oz'u "put through" ile 40 numaralı hatta bağlar.
Cevap D.`
},
{
  id: "ing-u4-308",
  kazanim: "E8.4.W1",
  kademe: 3,
  zorluk: 3,
  soru: `Cem calls Elif's house. These sentences are from their phone conversation, but they are mixed.

I. Thank you very much.
II. Hello! This is Cem calling. Is Elif in?
III. Hello, Kara family.
IV. Yes, she is. Hang on a minute, I'll get her.

**Which one shows the correct order of the conversation?**`,
  gorsel: null,
  secenekler: [
    `III – II – IV – I`,
    `II – III – IV – I`,
    `III – IV – II – I`,
    `IV – III – II – I`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Telefonu açanı unutma: Önce telefonu açan kişi "Hello, Kara family" der; arayan ondan sonra kendini tanıtır.`,
    `Cevabı sorudan önce koyma: "Yes, she is. Hang on..." cümlesi "Is Elif in?" sorusunun cevabıdır; soru önce gelmelidir.`,
    `Konuşmaya cevapla başlama: "Yes, she is" bir soruya cevaptır ve konuşmanın ilk cümlesi olamaz.`
  ],
  aciklama: `Telefon konuşması bir düzen izler: telefon açılır, arayan kendini tanıtıp biriyle konuşmak ister, karşıdaki cevap verir, en sonda teşekkür edilir.
Adım 1: Telefonu açan kişi ilk söyler: III "Hello, Kara family."
Adım 2: Arayan kendini tanıtır ve sorar: II "This is Cem calling. Is Elif in?"
Adım 3: Cevap gelir: IV "Yes, she is. Hang on a minute, I'll get her." (Evet, burada. Bir dakika bekle, onu çağıracağım.)
Adım 4: Teşekkür en sonda gelir: I. Sıra III – II – IV – I olur.
Sık yapılan hata: Teşekkürü sona koymak kolaydır, ama cevabı sorunun önüne almak sıralamayı bozar. Soru–cevap çiftlerini bul.
Cevap A.`
},
{
  id: "ing-u4-309",
  kazanim: "E8.4.L1",
  kademe: 3,
  zorluk: 3,
  soru: `A customer calls a company.

Customer: Hello. I want to speak to the manager, please.
Secretary: Just a moment, please. I'll put you through.

**What does "put you through" mean?**`,
  gorsel: null,
  secenekler: [
    `finish your phone call now`,
    `ask you to write a memo`,
    `connect you to the manager`,
    `tell you the manager's number`
  ],
  dogru: 2,
  hatalar: [
    `Bağlama ile kapatmayı karıştırma: Kapatmak "hang up" sözcüğüyle söylenir; sekreter görüşmeyi bitirmiyor.`,
    `Memo ile mesajı karıştırma: Memo yazılı bir nottur. Sekreter müşteriden not yazmasını istemiyor.`,
    null,
    `Numarayı vermek ile bağlamayı karıştırma: Müşteri numara çevirmeyecek; sekreter hattı kendisi bağlayacak.`
  ],
  aciklama: `"Put someone through" bir arayanı konuşmak istediği kişiye bağlamak demektir. Santraller ve sekreterler bu kalıbı sık kullanır.
Adım 1: Müşteri "I want to speak to the manager" diyor, yani müdürle konuşmak istiyor.
Adım 2: Sekreter "Just a moment" (bir an) diyip "I'll put you through" diyor. Bu, onu müdürün hattına aktaracağı anlamına gelir.
Adım 3: Aynı anlamdaki sözcük "connect" (bağlamak) olur: "connect you to the manager".
Sık yapılan hata: "Through" sözcüğünden "geçmek, bitirmek" anlamı çıkarıp "finish" seçmek. Kalıbı bağlamdan çöz.
Cevap C.`
},
{
  id: "ing-u4-310",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Selin wants to call the Star Call Centre on Saturday at 3 pm.

**What will happen when Selin calls?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">STAR CALL CENTRE · Opening hours</th></tr><tr><td>Monday – Friday</td><td>09.00 – 18.00</td></tr><tr><td>Saturday</td><td>10.00 – 14.00</td></tr><tr><td>Sunday</td><td>Closed</td></tr></table>`,
  secenekler: [
    `Someone will always put her through to the manager.`,
    `Nobody will pick up the phone until Monday.`,
    `She will talk to an operator for an hour.`,
    `She will leave a memo on the manager's desk.`
  ],
  dogru: 1,
  hatalar: [
    `Saati okumama: Cumartesi 14.00'te kapanıyor. Saat 15.00'te kimse yöneticiye bağlamaz.`,
    null,
    `Tabloyu tersine okuma: Cumartesi çağrı merkezi 10.00 – 14.00 arası açık. Saat 15.00 kapanıştan sonradır.`,
    `Konuşmaya çevirme: Memo, telefona bakamayan kişiye yazılan nottur; Selin çağrı merkezine not bırakamaz.`
  ],
  aciklama: `Çalışma saati tablolarında ilk iş günü ve saati eşleştirmektir. Sonra aramanın bu aralığa düşüp düşmediğine bak.
Adım 1: Selin cumartesi saat 15.00'te (3 pm) arıyor.
Adım 2: Tabloya göre cumartesi 10.00 – 14.00 arasında açık. 15.00 bu aralığın dışındadır, yani kapalı.
Adım 3: Pazar günü de kapalı. İlk açılış Pazartesi 09.00'dur. Bu yüzden pazartesiye kadar telefonu kimse açmaz: B.
Adım 4: A ve C açık olduğunu varsayar; D ise memo ile çağrı merkezini karıştırır.
Sık yapılan hata: Cumartesi günü açık olduğunu görüp saati kontrol etmemek.
Cevap B.`
},
{
  id: "ing-u4-311",
  kazanim: "E8.4.SI1",
  kademe: 3,
  zorluk: 3,
  soru: `Mr. Smith calls a hotel to speak to a guest.

Receptionist: Good morning, Blue Hotel.
Mr. Smith: Hello. Could I speak to Mrs. Lee in Room 305, please?
Receptionist: Just a moment... I'm afraid nobody is answering. - - - -
Mr. Smith: Yes, please. Tell her that Mr. Smith called.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Would you like to leave a message for her?`,
    `Would you like me to connect you to the lobby?`,
    `Would you like to hold on for another hour?`,
    `Would you like to dial the extension again?`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Cevaba uymayan teklif: Mr. Smith "Tell her that..." (ona söyle) diyor. Lobiye bağlanmak istese "Yes, please connect me" derdi.`,
    `Mantıksız teklif: Bir saat hatta beklemek gerçekçi değil, ayrıca Mr. Smith'in cevabı mesaj bırakmaya işaret ediyor.`,
    `Cevapla uyuşmama: Hattı yeniden çevirmesi istenseydi cevap "I'll try again" gibi olurdu, mesaj bırakma değil.`
  ],
  aciklama: `Aranan kişi cevap vermiyorsa, görevli mesaj bırakmayı önerir: "Would you like to leave a message?" Müşterinin cevabı çoğu zaman bu önerinin devamıdır.
Adım 1: Resepsiyonist Mrs. Lee'yi bulamadı: "nobody is answering" (kimse açmıyor).
Adım 2: Mr. Smith'in cevabı: "Yes, please. Tell her that Mr. Smith called." Yani mesaj bırakıyor.
Adım 3: "Yes, please" cevabı bir teklife karşılıktır. Bu teklif, "Would you like to leave a message for her?" olmalıdır: A.
Adım 4: B, C ve D'ye verilecek cevap "tell her" olamaz.
Sık yapılan hata: Her "Would you like...?" sorusunu aynı sanmak. Cevaptaki "Tell her" sözlerine bak.
Cevap A.`
},
{
  id: "ing-u4-312",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Sinan works in the school office and he is reading this poster. Mr. Yurt is not available and a parent is calling him.

**According to the poster, what should Sinan do?**`,
  gorsel: `<table class="tablo"><tr><th>SCHOOL OFFICE · PHONE MANNERS</th></tr><tr><td>1. Pick up the phone before the fourth ring.</td></tr><tr><td>2. Say "Good morning" and your name.</td></tr><tr><td>3. Speak politely and slowly.</td></tr><tr><td>4. Always write a memo if the person is not available.</td></tr><tr><td>5. Never hang up before the caller does.</td></tr></table>`,
  secenekler: [
    `Hang up and wait for another call.`,
    `Tell the parent to call again tomorrow.`,
    `Always write a memo for Mr. Yurt.`,
    `Say Mr. Yurt has gone out and hang up.`
  ],
  dogru: 2,
  hatalar: [
    `Kurala ters hareket: Afişin 5. maddesi aramayı kapatan kişinin arayan olmasını ister; önce kapatmak nezaketsizlik sayılır.`,
    `Afişte olmayan bilgiyi ekleme: Afişte "yarın tekrar ara" denmiyor; ilgili madde not yazmayı söylüyor.`,
    null,
    `İki hata birden: Kişinin dışarıda olduğunu söylemek tek başına yeterli değil, hemen kapatmak da 5. maddeye aykırıdır.`
  ],
  aciklama: `Afiş sorularında soruyu afişteki maddeyle eşleştirirsin. "Memo", kişi yokken ona yazılan kısa nottur. "Hang up" telefonu kapatmak demektir.
Adım 1: Durum: Mr. Yurt "not available" (müsait değil).
Adım 2: Afişte buna uyan madde 4: "Always write a memo if the person is not available." (Kişi müsait değilse her zaman bir not yaz.)
Adım 3: Sinan memo yazmalı: C. Telefonu önce kapatmamalı çünkü madde 5 "Never hang up before the caller does" diyor.
Adım 4: A ve D önce kapatmayı söylüyor; B afişte yok.
Sık yapılan hata: Mantıklı gelen bir davranışı seçmek. Cevap afişte yazan maddede olmalı.
Cevap C.`
},
{
  id: "ing-u4-313",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 3,
  soru: `Hana is at her grandmother's house. Her leg hurts, so she can't go to basketball training at six. She looks at her missed calls.

**Whom should Hana call to tell about her problem?**`,
  gorsel: `<table class="tablo"><tr><th>Caller</th><th>Time</th><th>Message</th></tr><tr><td>Aunt Nur</td><td>16.10</td><td>Call me back this evening.</td></tr><tr><td>Kerem</td><td>16.45</td><td>I'll get back to you tomorrow.</td></tr><tr><td>Mum</td><td>17.20</td><td>I'll pick you up at seven.</td></tr><tr><td>Coach Ece</td><td>17.35</td><td>Training is at six today. Call me if you can't come.</td></tr></table>`,
  secenekler: [
    `Aunt Nur`,
    `Kerem`,
    `Mum`,
    `Coach Ece`
  ],
  dogru: 3,
  hatalar: [
    `İsteği yanlış kişiyle eşleştirme: Aunt Nur "akşam geri ara" demiş, ama antrenmanla ilgisi yok.`,
    `Mesajı karıştırma: Kerem kendisi geri arayacağını söylüyor; Hana'nın onu araması gerekmez.`,
    `Kişi karıştırma: Anne Hana'yı yedide almaya gelecek. Antrenmanı bilen kişi koçtur.`,
    null
  ],
  aciklama: `Çağrı kaydı tablosunda her satır bir kişi, saat ve mesajdır. Soruyu çözmek için Hana'nın sorununu mesajlarla eşleştirirsin.
Adım 1: Hana'nın sorunu: Bacağı ağrıyor ve saat altıdaki antrenmana gidemeyecek.
Adım 2: Tabloda antrenmandan söz eden mesaj Coach Ece'ye ait: "Training is at six today. Call me if you can't come." (Antrenman bugün altıda. Gelemezsen beni ara.)
Adım 3: Hana gelemiyor, o hâlde koçu aramalı: D.
Adım 4: Aunt Nur başka bir konuda geri aranmak istiyor, Kerem kendisi arayacak, annesi ise Hana'yı alacak.
Sık yapılan hata: İlk satırdaki "Call me back" ifadesini görünce yanıt vermek. Önce sorunun konusunu bul.
Cevap D.`
},
{
  id: "ing-u4-314",
  kazanim: "E8.4.L2",
  kademe: 3,
  zorluk: 3,
  soru: `Sude and Efe are talking on the phone.

Sude: Are you free on Sunday? Let's go to the cinema.
Efe: I have a football match in the morning, but I'm free in the afternoon.
Sude: Great. The film starts at three.
Efe: OK. I'll see you in front of the cinema at half past two, then.

**What will Efe do on Sunday?**`,
  gorsel: null,
  secenekler: [
    `He will meet Sude at three and then play football.`,
    `He will play football in the morning and meet Sude at 2.30.`,
    `He will watch a film in the morning and play football at three.`,
    `He will only watch the match at home.`
  ],
  dogru: 1,
  hatalar: [
    `Sırayı ters çevirme: Maç sabahtır, buluşma öğleden sonradır. Futbol maçı sinemadan sonra değil, önce yapılır.`,
    null,
    `İki etkinliği karıştırma: Film saat üçte başlıyor; maç sabah. Efe sabah film izlemeyecek.`,
    `Maç türünü karıştırma: Efe maçı izlemiyor, oynuyor ("I have a football match" = futbol maçım var). Ayrıca sinemaya da gidecek.`
  ],
  aciklama: `Planlarını telefonda konuşanların cümlelerinden bir sıra çıkarırsın. "Half past two" saat 2.30 demektir. "I'll see you ..., then" kalıbı konuşma sırasında verilen karardır.
Adım 1: Efe'nin sabahı: "I have a football match in the morning." Sabah maç oynayacak.
Adım 2: Öğleden sonra boş: Film saat üçte başlıyor. Efe, Sude ile sinema önünde 2.30'da buluşacak.
Adım 3: Sıra: sabah futbol, 2.30'da buluşma, 3.00'te film. Bu B'de yazılı.
Adım 4: A sırayı ters çevirir, C sabaha film koyar, D ise maçı izlemekten söz eder ve sinemayı unutur.
Cevap B.`
},
{
  id: "ing-u4-315",
  kazanim: "E8.4.SP1",
  kademe: 3,
  zorluk: 3,
  soru: `Barış and Tuna plan to meet at the cafe at four o'clock today. At two o'clock, Tuna phones Barış.

Tuna: Sorry, Barış. I can't come today because I have a swimming lesson. Can we meet there tomorrow at the same time?
Barış: - - - -
Tuna: Great! See you tomorrow, then.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `No problem. I'll see you at the cafe tomorrow at four, then.`,
    `Sorry, I can't come tomorrow. Let's meet next Saturday instead.`,
    `That's fine. I'll be at the cafe at four o'clock today, then.`,
    `Oh, I see. I'll join your swimming lesson this afternoon, then.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Sonraki satırla çelişme: Barış yarını reddetseydi Tuna "See you tomorrow" (yarın görüşürüz) demezdi.`,
    `Günü karıştırma: Tuna bugün gelemeyeceğini söylüyor; "today" (bugün) buluşma artık yapılamaz.`,
    `Metinde var ama ilgisiz: Yüzme dersi Tuna'nın gelememe nedenidir; Barış'ı derse çağıran kimse yok.`
  ],
  aciklama: `Konuşma anında verilen kararlar "I'll ..., then." kalıbıyla söylenir. Böyle bir cevap, karşıdaki kişinin önerdiği plana uymalıdır.
Adım 1: İlk plan: bugün saat dörtte cafe'de buluşmak.
Adım 2: Tuna bugün gelemiyor ve "tomorrow at the same time" (yarın aynı saatte) buluşmayı öneriyor. Aynı saat, ilk plandaki saat yani dörttür.
Adım 3: Barış öneriyi kabul eder: "No problem. I'll see you at the cafe tomorrow at four, then." (Sorun değil. O hâlde yarın saat dörtte cafe'de görüşürüz.)
Adım 4: Boşluktan sonraki satıra bak: Tuna "Great! See you tomorrow, then." diyor; yani Barış yarını kabul etmiş olmalı. B yarını reddeder, C bugünü söyler, D ise kimsenin önermediği yüzme dersine katılmaktan söz eder.
Sık yapılan hata: Boşluğu yalnızca önceki satıra göre doldurup sonraki satırı okumamak.
Cevap A.`
},
{
  id: "ing-u4-316",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 4,
  soru: `On Monday afternoon, Mr. Bora reads this memo and calls Mr. Hall.

Mr. Bora: Hello! This is Bora calling. May I speak to Mr. Hall, please?
Secretary: Can you hold on a moment, please? ... I'm afraid his line is engaged. Would you like to leave a message?
Mr. Bora: Yes. Please tell him Thursday at 10.00 is fine. I'll see him there, then.

**Which one is __NOT__ true?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Mr. Bora</td></tr><tr><td>Caller</td><td>Mr. Hall (ABC Company)</td></tr><tr><td>Time</td><td>Monday, 9.40</td></tr><tr><td>Message</td><td>The meeting has moved to Thursday at 10.00. Please confirm.</td></tr></table>`,
  secenekler: [
    `Mr. Hall called Mr. Bora before Mr. Bora called him.`,
    `The meeting was moved to Thursday at 10.00.`,
    `Mr. Bora talked to Mr. Hall on the phone.`,
    `Mr. Bora confirmed the meeting through the secretary.`
  ],
  dogru: 2,
  hatalar: [
    `Doğru bilgiyi yanlış sanma: Memo pazartesi 9.40'ta Mr. Hall'un aradığını söylüyor; Bora öğleden sonra aradı. A doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Memo toplantının perşembe günü 10.00'a alındığını yazıyor. B doğrudur.`,
    null,
    `Doğru bilgiyi yanlış sanma: Mr. Bora, sekretere "Thursday at 10.00 is fine" diyerek toplantıyı onaylıyor. D doğrudur.`
  ],
  aciklama: `"Which one is NOT true?" kökü, diğer üç seçenek doğru olduğu için tek yanlış cümleyi arar. Her seçeneği memo ve diyalogla tek tek sına.
Adım 1: A: Memo'ya göre Mr. Hall pazartesi 9.40'ta aramış; Bora öğleden sonra aradı. Doğru.
Adım 2: B: Memo'da "The meeting has moved to Thursday at 10.00." Doğru.
Adım 3: D: Bora mesaj bırakıyor: "Thursday at 10.00 is fine." Bu, toplantıyı sekreter aracılığıyla onaylamaktır. Doğru.
Adım 4: C: Mr. Hall'un hattı meşgul ("engaged"); Bora ile konuşamadı, sadece mesaj bıraktı. C yanlıştır.
Sık yapılan hata: Telefon açıldı diye konuşmanın gerçekleştiğini sanmak. Hat meşgulse görüşme olmaz.
Cevap C.`
},
{
  id: "ing-u4-317",
  kazanim: "E8.4.W1",
  kademe: 3,
  zorluk: 4,
  soru: `Selma calls a bookshop. These sentences are from her phone conversation, but they are mixed.

I. Yes, please. Tell her that Selma called and I'll call her back at six.
II. Hello! This is Selma calling. May I speak to Mrs. Orhan?
III. Of course. I'll give her your message. Goodbye.
IV. Good afternoon, Orhan Bookshop.
V. I'm afraid she is not available at the moment. Would you like to leave a message?

**Which one shows the correct order of the conversation?**`,
  gorsel: null,
  secenekler: [
    `IV – V – II – I – III`,
    `IV – II – V – I – III`,
    `II – IV – V – I – III`,
    `IV – II – I – V – III`
  ],
  dogru: 1,
  hatalar: [
    `Teklifi isteğin önüne koyma: "I'm afraid she is not available" ancak Selma Mrs. Orhan'ı sorduktan sonra söylenir.`,
    null,
    `Telefonu açanı unutma: Kitapçının "Good afternoon, Orhan Bookshop" cümlesi telefonu açınca ilk söylenir.`,
    `Mesajı teklif edilmeden verme: Selma "Yes, please..." ile önce mesaj bırakıyor; bu cevap, teklifin ardından gelmelidir.`
  ],
  aciklama: `Uzun bir telefon konuşmasında sıra: karşılama, arayanın isteği, durum bildirme ve mesaj teklifi, cevap, kapanış. Soru–cevap çiftlerini eşleştir.
Adım 1: İlk söz telefonu açanındır: IV "Good afternoon, Orhan Bookshop."
Adım 2: Selma kendini tanıtıp Mrs. Orhan'ı ister: II.
Adım 3: Görevli Mrs. Orhan'ın olmadığını söyleyip mesaj önerir: V.
Adım 4: Selma "Yes, please..." diye mesajını verir: I. En sonda görevli mesajı ileteceğini söyleyip vedalaşır: III.
Sağlama: I ("Yes, please") bir teklife cevaptır; teklif yoksa cevap havada kalır.
Cevap B.`
},
{
  id: "ing-u4-318",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Ms. Kaya is waiting for new desks for her classroom. The front desk wrote this memo for her.

**What time will the driver arrive?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Ms. Kaya</td></tr><tr><td>Caller</td><td>The driver (new desks)</td></tr><tr><td>Time</td><td>10.30</td></tr><tr><td>Message</td><td>I'm still in Ankara. I'll get back to you in two hours. After that call, I need 30 more minutes to arrive.</td></tr></table>`,
  secenekler: [
    `11.00`,
    `12.00`,
    `12.30`,
    `13.00`
  ],
  dogru: 3,
  hatalar: [
    `Yalnızca son adımı ekleme: 10.30 + 30 dakika = 11.00. Şoför önce iki saat sonra arayacak.`,
    `Süreyi eksik toplama: 12.00, iki saatten sonraki 30 dakikayı çıkarınca ya da yanlış saymakla bulunur.`,
    `Ara sonucu cevap sanma: 12.30 şoförün arayacağı saattir (10.30 + 2 saat). Varışı için 30 dakika daha vardır.`,
    null
  ],
  aciklama: `"Get back to you in two hours" (iki saat sonra sana döneceğim), şoförün iki saat sonra yeniden arayacağını söyler. Memo'daki iki süre ardışıktır, birbirine eklenir.
Adım 1: Memo saati 10.30. Şoför "in two hours" diyor: 10.30 + 2 saat = 12.30 (ikinci arama).
Adım 2: "After that call, I need 30 more minutes to arrive": ikinci aramadan sonra 30 dakika daha gerekiyor.
Adım 3: 12.30 + 30 dakika = 13.00.
Sağlama: Toplam bekleme 2 saat 30 dakika; 10.30'a eklenince 13.00 olur.
Sık yapılan hata: Ara sonuç olan 12.30'u (arama saati) varış saati sanmak.
Cevap D.`
},
{
  id: "ing-u4-319",
  kazanim: "E8.4.L2",
  kademe: 3,
  zorluk: 4,
  soru: `Leyla has a question about her bill. She doesn't want to order or repair anything. She calls the company and reads the phone menu.

**What should Leyla do?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">PHONE MENU</th></tr><tr><td>Press 1</td><td>New orders</td></tr><tr><td>Press 2</td><td>Repairs</td></tr><tr><td>Press 3</td><td>Speak to an operator</td></tr><tr><td colspan="2">If all operators are engaged, please stay on the line. Never hang up, or you will lose your place.</td></tr></table>`,
  secenekler: [
    `Press 3 and never hang up.`,
    `Press 1 and then hang up.`,
    `Hang up and call after one minute.`,
    `Press 2 and wait for repairs.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Yanlış düğme: 1 numara yeni sipariş içindir; Leyla sipariş vermek istemiyor, ayrıca kapatmak sıranı kaybettirir.`,
    `Kurala ters hareket: Menüde "Never hang up, or you will lose your place" yazıyor. Kapatıp yeniden aramak sıranı kaybettirir.`,
    `Yanlış düğme: 2 numara tamir içindir. Leyla bir faturayı soruyor, tamir istemiyor.`
  ],
  aciklama: `Telefon menüsünde sorununa uyan düğmeyi bulursun. "Operator" santral görevlisidir, "engaged" ise meşgul demektir.
Adım 1: Leyla'nın isteği: fatura sorusu. Bu ne sipariş ne de tamirdir; bir görevliyle konuşması gerekir.
Adım 2: Menüde görevliyle konuşmak için "Press 3 – Speak to an operator" yazıyor.
Adım 3: Tüm görevliler meşgulse "stay on the line" (hatta kal) ve "Never hang up" (asla kapatma) deniyor. Bu yüzden Leyla beklemeli: A.
Adım 4: B ve D yanlış düğmedir; C ise kapatarak sırasını kaybettirir.
Cevap A.`
},
{
  id: "ing-u4-320",
  kazanim: "E8.4.SP1",
  kademe: 3,
  zorluk: 4,
  soru: `Baran is cooking and his sister Mira is doing her homework. The phone rings.

Baran: The phone is ringing and my hands are dirty!
Mira: (1) - - - -
(Mira picks up the phone and then comes back.)
Mira: It's Aunt Selin. She wants Mum, but Mum is out.
Baran: (2) - - - -

**Which pair completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `(1) I'll take that. (2) Tell her Mum will get back to her.`,
    `(1) I'll take that. (2) Tell her to hold on for an hour.`,
    `(1) I'll hang up. (2) Tell her Mum will get back to her.`,
    `(1) I'll hang up. (2) Tell her to hold on for an hour.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `İkinci boşluk hatası: Anne evde olmadığı için teyzeden bir saat hatta beklemesi istenmez; geri arama sözü verilir.`,
    `Birinci boşluk hatası: "I'll hang up" telefonu kapatmaktır; Mira ise telefona bakıyor ("picks up the phone").`,
    `İki boşlukta da hata: Hem kapatmak hem bir saat beklemek bu duruma uymaz.`
  ],
  aciklama: `Konuşma anında verilen kararlar "I'll ..." ile söylenir. İki boşluğu ayrı ayrı çöz, sonra birleştir.
Adım 1: Boşluk (1): Baran'ın elleri kirli ve telefon çalıyor. Mira sonra telefonu açıyor ("picks up the phone"). Bu yüzden karar "I'll take that." (Ben bakarım): "hang up" olamaz.
Adım 2: Boşluk (2): Teyze anneyi istiyor ama anne dışarıda. Uygun cevap geri arama sözüdür: "Tell her Mum will get back to her." (Ona annemin geri arayacağını söyle.)
Adım 3: Bir saat hatta beklemek gerçekçi değildir.
Adım 4: İki doğru parça A'dadır.
Cevap A.`
},
{
  id: "ing-u4-321",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Read Kaan's e-mail to his father.

Hi Dad,
I called you twice this morning, but your line was engaged. Mum said you were talking to Grandpa. Then I tried your office, but the secretary said you had gone out for lunch. I'll try again at three. I'll be at the library until five. Please don't call me there because phones are not allowed. Call my mobile after five.
Kaan

**Which one is __NOT__ true?**`,
  gorsel: null,
  secenekler: [
    `Kaan called his father more than once.`,
    `Kaan's father was talking to Grandpa.`,
    `Kaan's father will call him at the library.`,
    `Kaan will call his father again at three.`
  ],
  dogru: 2,
  hatalar: [
    `Doğru bilgiyi yanlış sanma: Kaan "I called you twice" (seni iki kez aradım) diyor. A doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Anne, babanın dedeyle konuştuğunu söylüyor ("Mum said..."). B doğrudur.`,
    null,
    `Doğru bilgiyi yanlış sanma: Kaan "I'll try again at three" diyor. D doğrudur.`
  ],
  aciklama: `"NOT true" sorularında dört seçeneği e-postayla tek tek karşılaştır. Üçü metinle uyuşur, biri uyuşmaz.
Adım 1: A: "I called you twice" = en az iki kez aradı. Doğru.
Adım 2: B: "Mum said you were talking to Grandpa." Hat bu yüzden meşgulmüş. Doğru.
Adım 3: D: "I'll try again at three." Doğru.
Adım 4: C: Kaan kütüphanede olacak ve "Please don't call me there because phones are not allowed." diyor. Babası onu orada aramayacak, saat beşten sonra cep telefonunu arayacak. C yanlıştır.
Sık yapılan hata: "Call my mobile after five" cümlesini görünce "kütüphane" ayrıntısını gözden kaçırmak.
Cevap C.`
},
{
  id: "ing-u4-322",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Deniz checks the calls on her phone for this week.

**Whom did Deniz talk to for the longest time in total?**`,
  gorsel: `<table class="tablo"><tr><th>Day</th><th>Person</th><th>Minutes</th></tr><tr><td>Monday</td><td>Mum</td><td>12</td></tr><tr><td>Monday</td><td>Tolga</td><td>18</td></tr><tr><td>Tuesday</td><td>Grandma</td><td>20</td></tr><tr><td>Tuesday</td><td>Mum</td><td>8</td></tr><tr><td>Wednesday</td><td>Tolga</td><td>12</td></tr><tr><td>Wednesday</td><td>Aunt Hale</td><td>25</td></tr><tr><td>Thursday</td><td>Grandma</td><td>22</td></tr><tr><td>Thursday</td><td>Mum</td><td>15</td></tr></table>`,
  secenekler: [
    `Aunt Hale`,
    `Tolga`,
    `Mum`,
    `Grandma`
  ],
  dogru: 3,
  hatalar: [
    `Tek uzun aramayı toplam sanma: Aunt Hale ile tek arama var (25 dakika) ve bu en uzun tek aramadır; ama toplam 25 dakikadır.`,
    `Eksik toplama: Tolga ile 18 + 12 = 30 dakika konuşuldu. Grandma ile 42 dakika.`,
    `Arama sayısını süre sanma: Mum ile en çok arama (3) var, toplam 12 + 8 + 15 = 35 dakika; ama Grandma ile 42 dakika.`,
    null
  ],
  aciklama: `"In total" (toplam olarak) ifadesi, aynı kişiyle yapılan bütün görüşmeleri toplaman gerektiğini söyler. Önce kişiye göre grupla, sonra topla.
Adım 1: Mum: 12 + 8 + 15 = 35 dakika.
Adım 2: Tolga: 18 + 12 = 30 dakika.
Adım 3: Grandma: 20 + 22 = 42 dakika. Aunt Hale: tek arama, 25 dakika.
Adım 4: En büyük toplam 42, yani Grandma.
Sık yapılan hata: En uzun tek aramaya (25 dakika, Aunt Hale) ya da en çok yapılan aramaya (Mum, 3 kez) bakmak. Toplamı sor.
Cevap D.`
},
{
  id: "ing-u4-323",
  kazanim: "E8.4.SI1",
  kademe: 3,
  zorluk: 4,
  soru: `Aylin calls a travel agency to change her flight.

Mr. Kent: Hello, Sun Travel. How can I help you?
Aylin: Hello! This is Aylin Demir calling. I booked a flight for Friday, but I want to change it.
Mr. Kent: I'm sorry, I can't change flights. Ms. Yağız can. She works in the next office. - - - -
Aylin: Thank you. I'll wait.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Please hang up now and call again tomorrow.`,
    `Can you hold on, please? I'll put you through to her.`,
    `Would you like to dial her number yourself?`,
    `I'm afraid she is out. Would you like to leave a message?`
  ],
  dogru: 1,
  hatalar: [
    `Cevapla uyuşmama: Aylin "I'll wait" (bekleyeceğim) diyor; kapatıp yarın aramasını isteyen birine böyle cevap vermez.`,
    null,
    `Cevapla uyuşmama: Aylin'in "I'll wait" demesi, bir numara çevirmeyeceğini, beklemeye hazır olduğunu gösterir.`,
    `Tutarsız teklif: Mr. Kent'in cevabı mesaj bırakmaya yönelik olurdu; Aylin ise "I'll wait" diyor.`
  ],
  aciklama: `Boşluktan sonraki cümle, boşluğa konacak cümlenin ipucudur. Aylin'in "I'll wait." (Bekleyeceğim.) sözü, kendisinden beklemesinin istendiğini gösterir.
Adım 1: Mr. Kent uçuşu değiştiremiyor, ama yan ofiste çalışan Ms. Yağız değiştirebilir.
Adım 2: Aylin'in cevabı "Thank you. I'll wait." Yani ondan beklemesi istenmiş.
Adım 3: Beklemesini isteyen ve onu Ms. Yağız'a bağlayan cümle B'dir: "Can you hold on, please? I'll put you through to her."
Adım 4: A kapatmayı, C kendi numaranı çevirmeyi, D mesaj bırakmayı anlatır; hiçbiri "I'll wait" ile uyuşmaz.
Cevap B.`
},
{
  id: "ing-u4-324",
  kazanim: "E8.4.R1",
  kademe: 3,
  zorluk: 4,
  soru: `Mr. Tan, a teacher, reads this memo. It is 4.20 pm when he calls Mrs. Işık.

Mr. Tan: Hello! This is Mr. Tan calling. May I speak to Mrs. Işık, please?
Mrs. Işık: Speaking.
Mr. Tan: I got your message. How is Arda?
Mrs. Işık: He still has a temperature. I'll take him to the doctor tomorrow morning.
Mr. Tan: I'm sorry to hear that. I'll call you again on Thursday, then.

**Which one is true?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Mr. Tan</td></tr><tr><td>From</td><td>School secretary</td></tr><tr><td>Time</td><td>11.05</td></tr><tr><td>Message</td><td>Mrs. Işık called. Her son Arda is ill and can't come to school today. She will bring the doctor's note on Friday. Please call her back after 4 pm because she is at work until then.</td></tr></table>`,
  secenekler: [
    `Arda is better and he will come to school tomorrow.`,
    `Mr. Tan called Mrs. Işık before she finished work.`,
    `Mrs. Işık will take Arda to the doctor tomorrow.`,
    `Mrs. Işık called the school at 4.00 pm.`
  ],
  dogru: 2,
  hatalar: [
    `Diyalogu yanlış anlama: Anne "He still has a temperature" (hâlâ ateşi var) diyor; Arda iyileşmedi.`,
    `Saati karşılaştırmama: Memo "after 4 pm" arayın diyor ve Mr. Tan 4.20'de arıyor; yani annenin işi bitmiş olmalı.`,
    null,
    `Saati karıştırma: Memoya göre Mrs. Işık okulu 11.05'te aramış; 4.00 geri aranması istenen saattir.`
  ],
  aciklama: `Hem memoyu hem diyaloğu okuyup her seçeneği ikisiyle de sınamak gerekir. "Call back" geri aramaktır; "a doctor's note" doktor raporudur.
Adım 1: A: Anne "He still has a temperature" diyor, yani Arda iyileşmedi. Yanlış.
Adım 2: B: Memo "call her back after 4 pm" diyor. Mr. Tan 4.20'de arıyor, yani 4'ten sonra. Yanlış.
Adım 3: D: Anne okulu 11.05'te aramış (memo saati). 4.00 geri arama saatidir. Yanlış.
Adım 4: C: "I'll take him to the doctor tomorrow morning." Bu cümle diyalogda var. Doğru.
Cevap C.`
},
{
  id: "ing-u4-325",
  kazanim: "E8.4.L2",
  kademe: 3,
  zorluk: 4,
  soru: `It is 4.00 pm. Tuna and Ece are texting each other.

**Which one is __NOT__ true?**`,
  gorsel: `<table class="tablo"><tr><th>Who</th><th>Message</th></tr><tr><td>Tuna</td><td>Are you at home? I called you, but your line was engaged.</td></tr><tr><td>Ece</td><td>Yes. I was talking to Nil. Hang on, I'll call you back in five minutes.</td></tr><tr><td>Tuna</td><td>OK. I'm at the bus stop. My bus comes at 4.10.</td></tr><tr><td>Ece</td><td>I'll call at 4.05, then. We can talk until your bus comes.</td></tr></table>`,
  secenekler: [
    `Tuna will be on the bus when Ece calls.`,
    `Ece was talking to Nil.`,
    `Ece will call Tuna in five minutes.`,
    `Ece's line was engaged when Tuna called.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Doğru bilgiyi yanlış sanma: Ece "I was talking to Nil" diyor. B doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Saat 4.00 ve Ece 4.05'te arayacak; bu "in five minutes" demektir. C doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Tuna aradığında Ece'nin hattı meşguldü ("your line was engaged"). D doğrudur.`
  ],
  aciklama: `"Line is engaged" (hat meşgul), arayan kişinin ulaşmak istediği kişinin başka biriyle konuşması demektir. Metindeki saatleri sırayla yaz.
Adım 1: Saat şimdi 4.00. Tuna'nın otobüsü 4.10'da gelecek.
Adım 2: Ece 4.05'te arayacak ve "We can talk until your bus comes" diyor. 4.05'te Tuna hâlâ durakta, otobüse binmemiş olacak.
Adım 3: B, C ve D metinle uyuşur: Ece Nil ile konuşuyordu, 5 dakika sonra arayacak, hattı meşguldü.
Adım 4: A yanlıştır: Ece aradığında (4.05) otobüs henüz gelmemiş (4.10).
Cevap A.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "ing-u4-001",
  kazanim: "E8.4.L2",
  kademe: 0,
  zorluk: 1,
  soru: `Tina phones her friend's house.

Tina: Hello! This is Tina calling. Is Jack in?
Jack's mum: - - - -

**Which one completes the dialogue?**`,
  gorsel: null,
  secenekler: [
    `Yes, he is a good friend.`,
    `I'm sorry to hear that.`,
    `Hang on a minute. I'll get him.`,
    `No, I don't have a phone.`
  ],
  dogru: 2,
  hatalar: [
    `Soruyu yanlış anlama: Tina Jack'in evde olup olmadığını soruyor, Jack'in nasıl biri olduğunu değil.`,
    `Yanlış kalıp: "I'm sorry to hear that" kötü bir haber duyunca söylenir. Tina kötü bir şey söylemedi.`,
    null,
    `Mantıksız cevap: Telefonla konuşan birinin telefonu olmadığını söylemesi çelişkilidir.`
  ],
  aciklama: `"Is Jack in?" (Jack evde mi?) sorusuna cevap, ya Jack'i çağırmak ya da evde olmadığını söylemektir.
Adım 1: Tina Jack'in evde olup olmadığını soruyor.
Adım 2: Jack evdeyse anne "Hang on a minute. I'll get him." (Bir dakika bekle, onu çağırayım.) der.
Adım 3: Diğer seçenekler soruya cevap vermez.
Cevap C.`
},
{
  id: "ing-u4-002",
  kazanim: "E8.4.L1",
  kademe: 0,
  zorluk: 1,
  soru: `**Which phrase means "to end a phone call"?**`,
  gorsel: null,
  secenekler: [
    `hang up`,
    `pick up`,
    `dial`,
    `hold`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Zıt anlam: "Pick up" telefonu açmaktır; görüşmeyi bitirmek değil.`,
    `Yanlış eylem: "Dial" numara çevirmektir; görüşmenin başındaki eylemdir.`,
    `Yanlış eylem: "Hold" hatta beklemektir; görüşme bitmez.`
  ],
  aciklama: `Telefon fiilleri görüşmenin aşamalarını anlatır: önce "dial" (numarayı çevir), karşıdaki "pick up" (telefonu açar), sonra konuşulur; bitince "hang up" (kapatılır).
Adım 1: Görüşmeyi bitiren eylem telefonu kapatmaktır.
Adım 2: Telefonu kapatmak İngilizce'de "hang up" demektir.
Adım 3: "Hold" ise "hang on" gibi beklemek anlamındadır.
Cevap A.`
},
{
  id: "ing-u4-003",
  kazanim: "E8.4.SP1",
  kademe: 0,
  zorluk: 1,
  soru: `Mum: Oh, the phone is ringing and I'm busy!
Ali: - - - -

**Which one completes the dialogue?**`,
  gorsel: null,
  secenekler: [
    `I'm afraid he is not available.`,
    `Can you hold on a moment?`,
    `Would you like to leave a message?`,
    `I'll take that.`
  ],
  dogru: 3,
  hatalar: [
    `Yanlış kişiye ait cümle: Bu cümle telefonu açıp aranan kişi yokken söylenir; Ali daha telefona bakmadı.`,
    `Yanlış zaman: "Can you hold on" arayana söylenir; Ali henüz arayanla konuşmuyor.`,
    `Yanlış zaman: Mesaj teklifi, telefon açıldıktan sonra yapılır.`,
    null
  ],
  aciklama: `Konuşma anında verilen bir karar "I'll + fiil" ile söylenir. Telefon çalarken "I will take that." (Ben bakarım.) demek bu kalıbın örneğidir.
Adım 1: Annenin işi var ve telefon çalıyor.
Adım 2: Ali yardım edip telefonu açmaya karar veriyor: "I'll take that."
Adım 3: Diğer üç cümle telefon açıldıktan sonra arayana söylenir.
Cevap D.`
},
{
  id: "ing-u4-004",
  kazanim: "E8.4.R1",
  kademe: 0,
  zorluk: 2,
  soru: `Read the message on the fridge.

Buse, Dad called at four. He is at the dentist. He'll get back to you at six. Mum

**When will Dad call Buse again?**`,
  gorsel: null,
  secenekler: [
    `at four`,
    `at six`,
    `at seven`,
    `at eight`
  ],
  dogru: 1,
  hatalar: [
    `Aramanın saatini cevap sanma: Saat dörtte baba aradı; tekrar arama saati başkadır.`,
    null,
    `Notta olmayan saat: Notta yedi saati yoktur.`,
    `Notta olmayan saat: Notta sekiz saati yoktur.`
  ],
  aciklama: `"Get back to you" (sana geri dönmek, seni geri aramak), tekrar arayacak demektir. Saat bilgisi "at ..." ile verilir.
Adım 1: Baba dörtte aramış, ama konuşamamış (dişçide).
Adım 2: "He'll get back to you at six." Yani altıda tekrar arayacak.
Cevap B.`
},
{
  id: "ing-u4-005",
  kazanim: "E8.4.L2",
  kademe: 0,
  zorluk: 2,
  soru: `Selin: Hello! This is Selin calling. May I speak to Mrs. Güler, please?
Secretary: I'm afraid she is not available at the moment. She has gone out.

**Where is Mrs. Güler now?**`,
  gorsel: null,
  secenekler: [
    `She is on another line.`,
    `She is not in the office.`,
    `She is in a meeting.`,
    `She is at her desk.`
  ],
  dogru: 1,
  hatalar: [
    `Benzer anlam karıştırma: Başka hatta konuşuyor olsa sekreter "her line is engaged" derdi. Burada "gone out" (dışarı çıktı) deniyor.`,
    null,
    `Uydurma sebep: Toplantıdan söz edilmiyor. Sekreter dışarı çıktığını söylüyor.`,
    `Çelişki: Masasında olsaydı "not available" denmezdi.`
  ],
  aciklama: `"Not available" müsait değil demektir ve sebep ikinci cümlede verilir. "Has gone out" dışarı çıkmış demektir.
Adım 1: Sekreter Mrs. Güler'in müsait olmadığını söylüyor.
Adım 2: Nedeni: "She has gone out." Yani ofiste değil.
Cevap B.`
},
{
  id: "ing-u4-006",
  kazanim: "E8.4.SI1",
  kademe: 0,
  zorluk: 2,
  soru: `Ben calls a company and Ayşe answers.

Ben: Hello! This is Ben calling. May I speak to Mr. Ural?
Ayşe: Can you hold on a moment, please?
Ben: - - - -

**Which one completes the dialogue?**`,
  gorsel: null,
  secenekler: [
    `No, I'll get him.`,
    `I'm afraid he has gone out.`,
    `Hello! This is Ben calling.`,
    `Sure, I'll hold on.`
  ],
  dogru: 3,
  hatalar: [
    `Rolleri karıştırma: "I'll get him" cümlesini telefona çıkan kişi söyler; Ben arayan kişidir.`,
    `Rolleri karıştırma: "He has gone out" cümlesini cevap veren kişi söyler; Ben'in sözü olamaz.`,
    `Tekrar etme: Ben kendini zaten tanıttı; Ayşe'nin isteğine cevap vermiyor.`,
    null
  ],
  aciklama: `"Can you hold on a moment, please?" = Bir an bekler misiniz? Bu rica kabul edilir: "Sure, I'll hold on." (Tabii, bekliyorum.)
Adım 1: Ayşe Ben'den beklemesini istiyor.
Adım 2: Ben arayan kişi. Doğal cevabı beklemeyi kabul etmektir.
Adım 3: A ve B cevap veren kişinin cümlesi, C ise tekrardır.
Cevap D.`
},
{
  id: "ing-u4-007",
  kazanim: "E8.4.L1",
  kademe: 0,
  zorluk: 2,
  soru: `The receptionist says, "Please dial extension 25 for the library."

**What does "extension" mean?**`,
  gorsel: null,
  secenekler: [
    `an inside number in a big building`,
    `a long call made at night`,
    `a note left on someone's desk`,
    `a phone with a low battery`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Sözcüğü "extend" (uzatmak) gibi düşünme: Burada uzun görüşme değil, bir numaradan söz ediliyor.`,
    `Memo ile karıştırma: Masaya bırakılan nota "memo" denir; burada çevrilecek bir numara var.`,
    `Alakasız yanıt: Şarj sorunu bu cümleyle ilgili değil; "dial" numara çevirmek demektir.`
  ],
  aciklama: `"Extension", büyük bir binada ya da şirkette ana numaradan sonra çevrilen dahili hat numarasıdır.
Adım 1: Cümle "dial extension 25" (25 numaralı dahiliyi çevir) diyor. Çevrilecek bir numaradan söz ediliyor.
Adım 2: Bu numara kütüphane gibi bir bölüme ulaştırır, yani binanın içindeki bir hattır.
Cevap A.`
},
{
  id: "ing-u4-008",
  kazanim: "E8.4.SP1",
  kademe: 0,
  zorluk: 2,
  soru: `Your friend phones you and says: "I'm ill, so I can't come to the cinema today."

**Which one is the best answer?**`,
  gorsel: null,
  secenekler: [
    `Great! I'll see you at the cinema, then.`,
    `Hang on a minute. I'll get him, then.`,
    `I'm sorry to hear that. We'll go next week, then.`,
    `I'm afraid he is not available, then.`
  ],
  dogru: 2,
  hatalar: [
    `Duruma uymayan tepki: Arkadaşın hasta olduğunu duyunca "Great!" denmez ve o gün sinemada buluşulamaz.`,
    `Yanlış kalıp: "I'll get him" birini telefona çağırırken söylenir. Arkadaşın kendisi telefonda.`,
    null,
    `Yanlış kalıp: Bu cümleyi telefona çıkan kişi aranan yokken söyler.`
  ],
  aciklama: `Kötü bir haber duyunca önce üzüntü belirtilir: "I'm sorry to hear that." Sonra yeni bir plan kararı söylenir: "We'll go next week, then."
Adım 1: Arkadaş hasta olduğu için sinemaya gelemiyor.
Adım 2: Üzüntü belirtip yeni bir tarih seçmek en doğal cevaptır.
Cevap C.`
},
{
  id: "ing-u4-009",
  kazanim: "E8.4.R1",
  kademe: 0,
  zorluk: 3,
  soru: `Ms. Arslan finds this memo on her desk at 1.15 pm.

**What time is the meeting now?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Ms. Arslan</td></tr><tr><td>Caller</td><td>Mr. Kılıç</td></tr><tr><td>Time</td><td>1.15 pm</td></tr><tr><td>Message</td><td>The meeting is not at 4.00 any more. It is two hours earlier. It is in room 12 now.</td></tr></table>`,
  secenekler: [
    `2.00`,
    `3.00`,
    `4.00`,
    `6.00`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Süreyi eksik çıkarma: 4.00 - 1 saat = 3.00 olur; ama memo "two hours" diyor.`,
    `Eski saati cevap sanma: 4.00 eski saattir; memo değiştiğini söylüyor.`,
    `Yönü ters alma: "Earlier" daha erken demektir. 6.00 daha geç bir saattir.`
  ],
  aciklama: `"Earlier" daha erken, "later" daha geç demektir. Saat farkı eskiden çıkarılarak ya da eklenerek hesaplanır.
Adım 1: Eski saat 4.00. Yeni toplantı iki saat daha erken.
Adım 2: 4.00 - 2 saat = 2.00.
Sağlama: Memo 1.15'te geldi, toplantı 2.00'de; toplantıya zaman var.
Cevap A.`
},
{
  id: "ing-u4-010",
  kazanim: "E8.4.SI1",
  kademe: 0,
  zorluk: 3,
  soru: `A mother phones a doctor's office.

Receptionist: Dr. Naz's office, good morning.
Mother: Good morning. I'd like an appointment for my daughter.
Receptionist: Hang on a minute. I'll check the calendar. ... Dr. Naz is free on Monday at four.
Mother: I can't come on Monday.
Receptionist: - - - -
Mother: Great. I'll see you on Wednesday, then.

**Which one completes the dialogue best?**`,
  gorsel: null,
  secenekler: [
    `Would you like to leave a message for her?`,
    `Sorry, the line is engaged.`,
    `Hang on a minute. I'll connect you to Dr. Naz.`,
    `Then how about Wednesday at four?`
  ],
  dogru: 3,
  hatalar: [
    `Cevapla uyuşmama: Anne "Great. I'll see you on Wednesday" diyor; mesaj bırakmaya değil, bir gün kabul etmeye karşılık veriyor.`,
    `Duruma uymayan cevap: Konuşma kesintisiz sürüyor, hat meşgul değil.`,
    `Yanlış hedef: Randevu için doktora bağlanmak gerekmez; resepsiyonist takvime bakıyor.`,
    null
  ],
  aciklama: `Randevu konuşmalarında bir gün uygun değilse yeni bir gün önerilir. Boşluktan sonraki cevap ipucudur.
Adım 1: Anne pazartesi gelemiyor: "I can't come on Monday."
Adım 2: Sonra anne "Great. I'll see you on Wednesday, then." diyor. Çarşamba gününü kabul ediyor.
Adım 3: Bu yüzden boşlukta çarşamba günü önerilmiş olmalı: "Then how about Wednesday at four?"
Cevap D.`
},
{
  id: "ing-u4-011",
  kazanim: "E8.4.R1",
  kademe: 0,
  zorluk: 3,
  soru: `Ceyda wants to phone her mother during break. She reads the school poster.

**Where can she make the call?**`,
  gorsel: `<table class="tablo"><tr><th>PHONE RULES</th></tr><tr><td>1. Phones are off in class.</td></tr><tr><td>2. You can use your phone in the garden at break time.</td></tr><tr><td>3. Never use your phone in the canteen.</td></tr><tr><td>4. Call parents from the office only in an emergency.</td></tr></table>`,
  secenekler: [
    `In the canteen.`,
    `In the classroom.`,
    `In the garden.`,
    `In the exam room.`
  ],
  dogru: 2,
  hatalar: [
    `Kurala ters hareket: 3. madde kantinde telefon kullanmayı yasaklıyor.`,
    `Kurala ters hareket: 1. madde derste telefonların kapalı olduğunu söylüyor.`,
    null,
    `Afişte olmayan yer: Sınav odası afişte yok; telefon kapalı olurdu.`
  ],
  aciklama: `Afiş sorularında seçenekleri maddelerle tek tek eşleştir. "Break time" teneffüs demektir.
Adım 1: Ceyda teneffüste telefon etmek istiyor.
Adım 2: 2. madde: "You can use your phone in the garden at break time." Bahçede kullanabilir.
Adım 3: Kantin ve sınıf yasak. Sınav odası afişte hiç geçmiyor.
Cevap C.`
},
{
  id: "ing-u4-012",
  kazanim: "E8.4.L1",
  kademe: 0,
  zorluk: 3,
  soru: `Ben called Gül's mobile three times, but the line was engaged every time. Gül was talking to her cousin for an hour.

**What does "engaged" mean here?**`,
  gorsel: null,
  secenekler: [
    `closed for the day`,
    `being used by someone else`,
    `ready for a new call`,
    `too far to be heard`
  ],
  dogru: 1,
  hatalar: [
    `Bağlamı okumama: Hat kapalı değil, çünkü Gül başka biriyle konuşuyor.`,
    null,
    `Zıt anlam: Hat yeni aramaya hazır olsaydı Ben ulaşabilirdi.`,
    `Alakasız yanıt: Mesafe değil, başka bir görüşme söz konusu.`
  ],
  aciklama: `Telefon hattı "engaged" ise hat başka bir görüşmeyle meşgul demektir (Amerikan İngilizcesinde "busy").
Adım 1: Ben üç kez aramış ama her seferinde hat "engaged".
Adım 2: Sebep ikinci cümlede: Gül bir saat boyunca kuzeniyle konuşuyordu.
Adım 3: Hat bu yüzden başkası tarafından kullanılıyor.
Cevap B.`
},
{
  id: "ing-u4-013",
  kazanim: "E8.4.R1",
  kademe: 0,
  zorluk: 4,
  soru: `Ms. Sevgi, a school director, reads this memo and calls Mr. Tan.

Ms. Sevgi: Hello! This is Sevgi Aras calling. May I speak to Mr. Tan, please?
Secretary: Can you hold on a moment, please? ... I'm afraid he is not available at the moment. Would you like to leave a message?
Ms. Sevgi: Yes. Friday is fine. Tell him I'll be at school all day.

**What message does Ms. Sevgi leave?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">TELEPHONE MEMO</th></tr><tr><td>For</td><td>Ms. Sevgi</td></tr><tr><td>Caller</td><td>Mr. Tan (Tan Furniture)</td></tr><tr><td>Time</td><td>10.20</td></tr><tr><td>Message</td><td>The new desks will arrive on Friday. Please call me back before noon and say if Friday is OK.</td></tr></table>`,
  secenekler: [
    `She wants to change the delivery to Monday.`,
    `She will call back before noon.`,
    `She cannot receive the desks on Friday.`,
    `She will be at school when the desks arrive.`
  ],
  dogru: 3,
  hatalar: [
    `Metne ters düşme: Ms. Sevgi "Friday is fine" diyor; teslimatı değiştirmek istemiyor.`,
    `Mesajı karıştırma: Geri arama memodaki istektir. Ms. Sevgi şimdi arayıp mesaj bırakıyor.`,
    `Çelişki: Cuma gününün uygun olduğunu söylüyor.`,
    null
  ],
  aciklama: `Memo, Mr. Tan'ın isteğini; diyalog ise Ms. Sevgi'nin cevabını verir. Soru, Ms. Sevgi'nin bıraktığı mesajı istiyor.
Adım 1: Memo: Masalar cuma günü gelecek ve Mr. Tan cuma günü uygun mu diye soruyor.
Adım 2: Ms. Sevgi mesajı: "Friday is fine. Tell him I'll be at school all day."
Adım 3: Yani cuma günü uygun ve gün boyu okulda olacak. Masalar geldiğinde okulda olacak: D.
Adım 4: Diğer seçenekler mesajla çelişir ya da memodaki isteği mesaj sanır.
Cevap D.`
},
{
  id: "ing-u4-014",
  kazanim: "E8.4.R1",
  kademe: 0,
  zorluk: 4,
  soru: `The school secretary wrote these memos on Monday.

**Which one is __NOT__ true according to the memos?**`,
  gorsel: `<table class="tablo"><tr><th>Time</th><th>Caller</th><th>For</th><th>Message</th></tr><tr><td>9.10</td><td>Mr. Aksoy</td><td>Ms. Bal</td><td>Call me back after 2 pm.</td></tr><tr><td>10.30</td><td>Mrs. Yıldız</td><td>Mr. Cin</td><td>The meeting is on Monday, not Tuesday.</td></tr><tr><td>11.45</td><td>Mr. Aksoy</td><td>Mr. Cin</td><td>I'll call again at 3 pm.</td></tr></table>`,
  secenekler: [
    `Mr. Aksoy called Ms. Bal and Mr. Cin at the same time.`,
    `Mr. Cin will hear from Mr. Aksoy in the afternoon.`,
    `Ms. Bal should call Mr. Aksoy after two o'clock.`,
    `The meeting is not on Tuesday.`
  ],
  dogru: 0,
  hatalar: [
    null,
    `Doğru bilgiyi yanlış sanma: Mr. Aksoy Mr. Cin'i saat 3'te tekrar arayacak, yani öğleden sonra. B doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Ms. Bal'ın notunda "after 2 pm" yazıyor. C doğrudur.`,
    `Doğru bilgiyi yanlış sanma: Mrs. Yıldız toplantının pazartesi olduğunu, salı olmadığını söylüyor. D doğrudur.`
  ],
  aciklama: `Notlar tablosunda her satır ayrı bir arama. "NOT true" sorusunda üç doğru cümleyi eleyip yanlışı bulursun.
Adım 1: B: Mr. Aksoy, Mr. Cin'e "I'll call again at 3 pm" dedi. Öğleden sonra. Doğru.
Adım 2: C: Ms. Bal'a "Call me back after 2 pm" denmiş. Doğru.
Adım 3: D: "The meeting is on Monday, not Tuesday." Doğru.
Adım 4: A: Mr. Aksoy, Ms. Bal'ı 9.10'da, Mr. Cin'i 11.45'te aradı. Aynı anda değil. A yanlıştır.
Cevap A.`
},
{
  id: "ing-u4-015",
  kazanim: "E8.4.L2",
  kademe: 0,
  zorluk: 4,
  soru: `It is 4.20 pm. Hasan calls his friend Burcu's house.

Hasan: Hello! This is Hasan calling. Is Burcu in?
Mrs. Er: She is at her piano lesson. She'll be back in forty minutes.
Hasan: I'm leaving home at 5.30. Can she call me before that?
Mrs. Er: Of course. I'll ask her to call you five minutes after she gets home.

**What time will Burcu call Hasan?**`,
  gorsel: null,
  secenekler: [
    `4.20`,
    `5.00`,
    `5.05`,
    `5.30`
  ],
  dogru: 2,
  hatalar: [
    `Şimdiki saati cevap sanma: 4.20 Hasan'ın aradığı andır.`,
    `Ara sonucu cevap sanma: 5.00 Burcu'nun eve döneceği saattir (4.20 + 40 dakika). Arama bundan 5 dakika sonra.`,
    null,
    `Soru karıştırma: 5.30 Hasan'ın evden çıkacağı saattir; Burcu bundan önce arayacak.`
  ],
  aciklama: `Bu soruda iki süre art arda eklenir: eve dönüş süresi ve eve dönüşten sonra arama süresi.
Adım 1: Saat 4.20. Burcu 40 dakika sonra dönecek: 4.20 + 40 dakika = 5.00.
Adım 2: Annesi "five minutes after she gets home" diyor. Burcu eve geldikten 5 dakika sonra arayacak: 5.00 + 5 = 5.05.
Sağlama: 5.05, Hasan'ın evden çıkış saati 5.30'dan önce. Rica yerine getirilir.
Cevap C.`
}
);
