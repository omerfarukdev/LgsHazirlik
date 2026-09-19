"use strict";

var App = (function () {

  // ================= Sabitler =================
  var AYAR = window.LGS_AYAR || {};
  var DERSLER = window.LGS_KONULAR || [];
  var HARFLER = ["A", "B", "C", "D"];
  var KADEMELER = {
    1: { ad: "Kavrama", alt: "Temel sorular" },
    2: { ad: "Pekiştirme", alt: "Orta düzey" },
    3: { ad: "LGS Ayarı", alt: "Yeni nesil sorular" }
  };
  var NEDENLER = [
    { k: "bilgi", ad: "Bilmiyordum" },
    { k: "okuma", ad: "Yanlış okudum" },
    { k: "islem", ad: "İşlem hatası" },
    { k: "sure", ad: "Aceleye geldi" },
    { k: "tahmin", ad: "Tahmin ettim" }
  ];

  // ================= Depolama =================
  var Store = {
    get: function (k, def) {
      try {
        var v = localStorage.getItem("lgs_" + k);
        return v === null ? def : JSON.parse(v);
      } catch (e) { return def; }
    },
    set: function (k, v) {
      try { localStorage.setItem("lgs_" + k, JSON.stringify(v)); } catch (e) {}
    }
  };

  // Rapor altyapısı (rapor/Kod.gs). Kayıtlar önce kuyruğa girer; bağlantı yoksa ya da adres henüz
  // girilmemişse bekler, sonraki fırsatta gönderilir. Her gönderimin ardından ilerlemenin tam kopyası da
  // yollanır: ilerleme paneli (panel.html) ve yedekten geri yükleme bu kopyayı kullanır.
  var YEDEK_DISI = { lgs_kuyruk: 1, lgs_raporUrl: 1, lgs_aktif: 1 };
  var Bulut = {
    mesgul: false,
    url: function () { return Store.get("raporUrl", "") || AYAR.raporUrl || ""; },
    kopya: function () {
      var veri = {};
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k.indexOf("lgs_") === 0 && !YEDEK_DISI[k]) veri[k] = localStorage.getItem(k);
      }
      return { surum: 1, ts: Date.now(), veri: veri };
    },
    gonder: function (tip, veri, kimlik) {
      var k = Store.get("kuyruk", []);
      k.push({ kimlik: kimlik || tip + "-" + Date.now() + "-" + Math.floor(Math.random() * 1e6), tip: tip, veri: veri, deneme: 0 });
      Store.set("kuyruk", k.slice(-500));
      Bulut.bosalt();
    },
    istek: function (govde) {
      return fetch(Bulut.url(), {
        method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(govde)
      }).then(function (r) { return r.json(); }).then(function (c) {
        if (!c || !c.ok) throw new Error((c && c.hata) || "ret");
        return c;
      });
    },
    bosalt: function () {
      if (!Bulut.url() || Bulut.mesgul || !window.fetch) return;
      var k = Store.get("kuyruk", []);
      if (!k.length) return;
      Bulut.mesgul = true;
      var oge = k[0];
      Bulut.istek(oge).then(function () { Bulut.cikar(oge.kimlik, true); }, function () { Bulut.cikar(oge.kimlik, false); });
    },
    cikar: function (kimlik, basarili) {
      var k = Store.get("kuyruk", []);
      for (var i = 0; i < k.length; i++) {
        if (k[i].kimlik !== kimlik) continue;
        if (basarili || ++k[i].deneme >= 8) k.splice(i, 1);
        break;
      }
      Store.set("kuyruk", k);
      Bulut.mesgul = false;
      if (!basarili) return; // bağlantı sorunu: sonraki test bitiminde ya da açılışta yeniden denenir
      if (k.length) Bulut.bosalt();
      else Bulut.istek({ tip: "yedek", veri: Bulut.kopya() }).catch(function () {});
    }
  };

  // ================= Yardımcılar =================
  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // Soru metni biçimlendirme: **kalın**, __altı çizili__, 2^{5}, H_{2}O, √{48}, [[pay|payda]]
  function bicim(s) {
    if (s === null || s === undefined) return "";
    var h = esc(s);
    h = h.replace(/\^\{([^{}]*)\}/g, "<sup>$1</sup>").replace(/_\{([^{}]*)\}/g, "<sub>$1</sub>");
    h = h.replace(/√\{([^{}]*)\}/g, '<span class="kok">√<span class="kok-ic">$1</span></span>');
    h = h.replace(/\[\[([^\[\]|]*)\|([^\[\]|]*)\]\]/g, '<span class="kesir"><span>$1</span><span>$2</span></span>');
    h = h.replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>").replace(/__([\s\S]+?)__/g, "<u>$1</u>");
    return h.replace(/\n/g, "<br>");
  }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function fmtSure(sn) {
    sn = Math.max(0, Math.round(sn));
    var h = Math.floor(sn / 3600), m = Math.floor((sn % 3600) / 60), s = sn % 60;
    return h > 0 ? h + ":" + pad2(m) + ":" + pad2(s) : pad2(m) + ":" + pad2(s);
  }
  function fmtSureYazi(sn) {
    sn = Math.round(sn);
    if (sn < 60) return sn + " sn";
    var m = Math.floor(sn / 60), s = sn % 60;
    return m + " dk" + (s ? " " + s + " sn" : "");
  }
  function fmtTarih(ts) {
    return new Date(ts).toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
  }
  function tarihKey(d) {
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }
  function yuzde(oran) { return Math.round(oran * 100); }
  function fmtNet(n) { return (Math.round(n * 100) / 100).toLocaleString("tr-TR"); }
  function render(html) {
    $("#app").innerHTML = html;
    window.scrollTo(0, 0);
  }

  // ================= Konu ve soru erişimi =================
  var KONU = {};   // konuId → { konu, ders, unite }
  DERSLER.forEach(function (d) {
    d.uniteler.forEach(function (u) {
      u.konular.forEach(function (k) { KONU[k.id] = { konu: k, ders: d, unite: u }; });
    });
  });
  function dersBul(id) {
    for (var i = 0; i < DERSLER.length; i++) if (DERSLER[i].id === id) return DERSLER[i];
    return null;
  }
  function bank(konuId) {
    return (window.LGS_BANK && window.LGS_BANK[konuId]) || [];
  }
  function kademeSorulari(konuId, k) {
    return bank(konuId).filter(function (q) { return q.kademe === k; });
  }
  var soruMap = null;
  function soruBul(id) {
    if (!soruMap) {
      soruMap = {};
      Object.keys(window.LGS_BANK || {}).forEach(function (konuId) {
        window.LGS_BANK[konuId].forEach(function (q) { soruMap[q.id] = q; });
      });
    }
    return soruMap[id] || null;
  }

  // ================= İlerleme durumu =================
  // konuDurum: { konuId: { islendi: ts, k: { "1": { enIyi, son, deneme, ts } } } }
  function konuDurum(konuId) {
    return Store.get("konuDurum", {})[konuId] || { k: {} };
  }
  function kademeAcik(konuId, k) {
    if (k === 1) return true;
    var onceki = konuDurum(konuId).k[k - 1];
    return !!onceki && onceki.enIyi >= AYAR.gecmeEsigi;
  }
  function oranSinif(oran) {
    if (oran >= AYAR.saglamEsigi) return "iyi";
    if (oran >= AYAR.gecmeEsigi) return "orta";
    return "zayif";
  }
  function dersIlerleme(ders) {
    var toplam = 0, gecilen = 0, hazirKonu = 0;
    ders.uniteler.forEach(function (u) {
      u.konular.forEach(function (konu) {
        var var_ = false, durum = konuDurum(konu.id);
        [1, 2, 3].forEach(function (k) {
          if (!kademeSorulari(konu.id, k).length) return;
          var_ = true; toplam++;
          if (durum.k[k] && durum.k[k].enIyi >= AYAR.gecmeEsigi) gecilen++;
        });
        if (var_) hazirKonu++;
      });
    });
    return { toplam: toplam, gecilen: gecilen, hazirKonu: hazirKonu };
  }
  function kalanGun() {
    if (!AYAR.sinavTarihi) return null;
    var hedef = new Date(AYAR.sinavTarihi + "T09:30:00");
    return Math.max(0, Math.ceil((hedef - Date.now()) / 86400000));
  }
  function seriHesapla(gecmis) {
    var gunler = {};
    gecmis.forEach(function (g) { gunler[tarihKey(new Date(g.ts))] = true; });
    var d = new Date(), seri = 0;
    if (!gunler[tarihKey(d)]) d.setDate(d.getDate() - 1); // bugün henüz çözmediyse seri bozulmaz
    while (gunler[tarihKey(d)]) { seri++; d.setDate(d.getDate() - 1); }
    return seri;
  }

  // ================= Durum =================
  var S = null;            // aktif test
  var sayac = null;        // setInterval kimliği
  var incFiltre = "hepsi"; // sonuç ekranı filtresi

  // ================= Ana sayfa =================
  function anaSayfa() {
    var gecmis = Store.get("gecmis", []);
    var aktif = Store.get("aktif", null);
    var gun = kalanGun();
    var topD = 0, topSoru = 0;
    gecmis.forEach(function (g) { topD += g.d; topSoru += g.d + g.y; });
    var seri = seriHesapla(gecmis);

    var html = '<header class="ust">' +
      '<div><h1>LGS Hazırlık</h1><p class="soluk">' +
      (AYAR.ogrenciAdi ? "Merhaba " + esc(AYAR.ogrenciAdi) + "! " : "") + 'Bugün hangi konuyu sağlamlaştırıyoruz?</p></div>' +
      '<div class="geri-sayim"><span class="gs-sayi">' + (gun === null ? "🎯" : gun) + '</span>' +
      '<span class="gs-yazi">' + (gun === null ? "LGS: " + esc(AYAR.sinavTahmini || "") : "gün kaldı") + '</span></div>' +
      '</header>';

    if (aktif) {
      var ak = KONU[aktif.konu];
      html += '<div class="bant">' +
        '<div><strong>Yarım kalan testin var</strong><br><span class="soluk">' + esc(ak ? ak.konu.ad : "") + " · " +
        KADEMELER[aktif.kademe].ad + " · " + Object.keys(aktif.cevap).length + "/" + aktif.sorular.length + ' soru işaretli</span></div>' +
        '<button class="btn birincil" onclick="App.git(\'#/test\')">Devam et</button></div>';
    }

    html += '<div class="ozet">' +
      ozetKutu(topSoru, "çözülen soru") +
      ozetKutu(topSoru ? "%" + yuzde(topD / topSoru) : "–", "doğruluk") +
      ozetKutu(gecmis.length, "test") +
      ozetKutu(seri + " gün", "çalışma serisi") + '</div>';

    html += '<h2>Dersler</h2><div class="ders-grid">';
    DERSLER.forEach(function (d) {
      var il = dersIlerleme(d);
      var pct = il.toplam ? yuzde(il.gecilen / il.toplam) : 0;
      html += '<button class="ders-kart ders-' + d.id + '" onclick="App.git(\'#/ders/' + d.id + '\')">' +
        '<span class="ders-ikon">' + d.ikon + '</span>' +
        '<span class="ders-ad">' + esc(d.ad) + '</span>' +
        '<span class="ders-alt">' + (il.hazirKonu ? il.hazirKonu + " konu hazır · " + il.gecilen + "/" + il.toplam + " test geçildi" : "Sorular yakında") + '</span>' +
        '<span class="cubuk"><span style="width:' + pct + '%"></span></span>' +
        '</button>';
    });
    html += '</div>';

    if (gecmis.length) {
      html += '<h2>Son testler</h2><div class="liste">';
      gecmis.slice(-6).reverse().forEach(function (g) {
        var kb = KONU[g.konu];
        html += '<button class="liste-satir" onclick="App.git(\'#/sonuc/' + g.ts + '\')">' +
          '<span class="rozet ' + oranSinif(g.oran) + '">%' + yuzde(g.oran) + '</span>' +
          '<span class="ls-ad">' + esc(kb ? kb.konu.ad : g.konu) + ' <span class="soluk">· ' + KADEMELER[g.kademe].ad + '</span></span>' +
          '<span class="soluk">' + g.d + "D " + g.y + "Y " + g.b + "B · " + fmtTarih(g.ts) + '</span></button>';
      });
      html += '</div>';
    }

    html += '<footer class="alt"><button class="btn-yazi" onclick="App.raporAyar()">' + (Bulut.url() ? "☁ Panele bağlı" : "Panel bağlantısı") + '</button>' +
      '<button class="btn-yazi" onclick="App.yedekAl()">Yedek al</button>' +
      '<label class="btn-yazi">Yedek yükle<input type="file" accept=".json" hidden onchange="App.yedekYukle(this)"></label></footer>';
    render(html);
  }
  function ozetKutu(deger, etiket) {
    return '<div class="ozet-kutu"><span class="ok-deger">' + deger + '</span><span class="ok-etiket">' + etiket + '</span></div>';
  }

  // ================= Ders ekranı =================
  function dersEkrani(dersId) {
    var d = dersBul(dersId);
    var html = ustCubuk(d.ikon + " " + d.ad, "#/");
    html += '<p class="soluk aciklama-yazi">Konuyu okulda bitirip kâğıt testlerini çözdükten sonra buradaki testlere geç. ' +
      'Her konuda üç kademe var; bir kademeyi en az %' + yuzde(AYAR.gecmeEsigi) + ' ile bitirince sonraki açılır.</p>';
    d.uniteler.forEach(function (u) {
      html += '<h3 class="unite-baslik">' + esc(u.ad) + '</h3><div class="konu-liste">';
      u.konular.forEach(function (konu) {
        var durum = konuDurum(konu.id);
        var hazir = bank(konu.id).length > 0;
        html += '<div class="konu-kart' + (hazir ? "" : " pasif") + '">' +
          '<div class="konu-ust"><span class="konu-ad">' + esc(konu.ad) + '</span><span class="cip">' + esc(konu.ay) + '</span></div>';
        if (!hazir) {
          html += '<div class="soluk kucuk">Sorular hazırlanıyor</div>';
        } else {
          html += '<div class="kademeler">';
          [1, 2, 3].forEach(function (k) {
            var adet = kademeSorulari(konu.id, k).length;
            if (!adet) return;
            var acik = kademeAcik(konu.id, k), kd = durum.k[k];
            var sinif = "kademe-btn" + (!acik ? " kilitli" : kd ? " " + oranSinif(kd.enIyi) : "");
            html += '<button class="' + sinif + '"' + (acik ? ' onclick="App.git(\'#/hazir/' + konu.id + "/" + k + '\')"' : " disabled") + '>' +
              '<span class="kb-ust">' + (acik ? "" : "🔒 ") + k + ". " + KADEMELER[k].ad + '</span>' +
              '<span class="kb-alt">' + (kd ? "En iyi %" + yuzde(kd.enIyi) : acik ? adet + " soru" : "Önceki kademeyi geç") + '</span></button>';
          });
          html += '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    });
    render(html);
  }
  function ustCubuk(baslik, geriHash) {
    return '<header class="ust-cubuk"><button class="btn-geri" onclick="App.git(\'' + geriHash + '\')">← Geri</button>' +
      '<h1>' + baslik + '</h1></header>';
  }

  // ================= Test öncesi ekranı =================
  function onerilenSure(sorular) {
    var t = 0;
    sorular.forEach(function (q) { t += (AYAR.sureSoruBasi || {})[q.zorluk] || 90; });
    return t;
  }
  function hazirEkrani(konuId, k) {
    var kb = KONU[konuId], sorular = kademeSorulari(konuId, k);
    if (!sorular.length || !kademeAcik(konuId, k)) return git("#/ders/" + kb.ders.id);
    var kd = konuDurum(konuId).k[k];
    var html = ustCubuk(esc(kb.konu.ad), "#/ders/" + kb.ders.id) +
      '<div class="kart orta-kart">' +
      '<div class="buyuk-ikon">' + kb.ders.ikon + '</div>' +
      '<h2>' + k + ". Kademe · " + KADEMELER[k].ad + '</h2><p class="soluk">' + KADEMELER[k].alt + '</p>' +
      '<div class="ozet">' + ozetKutu(sorular.length, "soru") +
      ozetKutu(Math.round(onerilenSure(sorular) / 60) + " dk", AYAR.sureSiniri ? "süre" : "önerilen süre") +
      (kd ? ozetKutu("%" + yuzde(kd.enIyi), "en iyi sonucun") : "") + '</div>' +
      '<ul class="ipucu"><li>Kâğıt kalem hazırla, işlemleri kâğıtta yap.</li>' +
      (AYAR.sureSiniri ? '<li>Süre geri sayar ve dolunca test kendiliğinden biter; tıpkı gerçek sınavdaki gibi. Mecbur kalırsan “Ara ver” ile çıkabilirsin; süre durur, kaldığın yerden devam edersin.</li>' : "") +
      '<li>Emin olmadığın soruyu boş bırakabilirsin; 3 yanlış 1 doğruyu götürür.</li>' +
      '<li>Test bitince her sorunun adım adım çözümünü göreceksin.</li></ul>' +
      '<button class="btn birincil buyuk" onclick="App.testBaslat(\'' + konuId + "'," + k + ')">Teste başla</button></div>';
    render(html);
  }

  // ================= Test =================
  function testBaslat(konuId, k) {
    var sorular = kademeSorulari(konuId, k);
    if (!sorular.length) return;
    S = {
      tur: "konu", ders: KONU[konuId].ders.id, konu: konuId, kademe: k,
      sorular: sorular.map(function (q) { return q.id; }),
      cevap: {}, isaret: {}, sureSoru: {}, idx: 0, gecen: 0,
      oneri: onerilenSure(sorular), basla: Date.now()
    };
    Store.set("aktif", S);
    git("#/test");
  }
  function zamanlayiciBaslat() {
    zamanlayiciDurdur();
    sayac = setInterval(function () {
      if (!S) return;
      S.gecen++;
      var qid = S.sorular[S.idx];
      S.sureSoru[qid] = (S.sureSoru[qid] || 0) + 1;
      var el = $("#sure");
      if (el) {
        el.textContent = sureYazi();
        el.className = sureSinif();
      }
      if (S.gecen % 5 === 0) Store.set("aktif", S);
      if (AYAR.sureSiniri && S.gecen >= S.oneri) {
        S.sureDoldu = true;
        bitirOnay();
      }
    }, 1000);
  }
  function sureYazi() {
    return fmtSure(AYAR.sureSiniri ? S.oneri - S.gecen : S.gecen);
  }
  function sureSinif() {
    var kalan = S.oneri - S.gecen;
    if (!AYAR.sureSiniri) return "sure" + (kalan < 0 ? " asildi" : "");
    return "sure" + (kalan <= (AYAR.sureUyari || 120) ? " az" : "");
  }
  function zamanlayiciDurdur() {
    if (sayac) { clearInterval(sayac); sayac = null; }
    if (S) Store.set("aktif", S);
  }
  function testEkrani() {
    testCiz();
    zamanlayiciBaslat();
  }
  function testCiz() {
    var q = soruBul(S.sorular[S.idx]);
    var kb = KONU[S.konu], n = S.sorular.length;
    var secili = S.cevap[q.id];
    var html = '<header class="test-ust">' +
      '<div class="tu-sol"><strong>' + esc(kb.konu.ad) + '</strong><span class="soluk"> · ' + KADEMELER[S.kademe].ad + '</span></div>' +
      '<div class="tu-sag"><span class="soluk kucuk">' + (AYAR.sureSiniri ? "Kalan süre" : "Süre") + '</span>' +
      '<span id="sure" class="' + sureSinif() + '">' + sureYazi() + '</span>' +
      '<button class="btn" onclick="App.git(\'#/\')" title="Süre durur, ana sayfadan devam edebilirsin">⏸ Ara ver</button>' +
      '<button class="btn" onclick="App.bitir()">Testi bitir</button></div></header>';

    html += '<div class="palet">';
    S.sorular.forEach(function (id, i) {
      var c = "p" + (i === S.idx ? " simdi" : "") + (S.cevap[id] !== undefined ? " dolu" : "") + (S.isaret[id] ? " isaretli" : "");
      html += '<button class="' + c + '" onclick="App.gitNo(' + i + ')">' + (i + 1) + '</button>';
    });
    html += '</div>';

    html += '<div class="kart soru-kart"><div class="soru-no">Soru ' + (S.idx + 1) + ' / ' + n + '</div>' +
      '<div class="soru-metin">' + bicim(q.soru) + '</div>' +
      (q.gorsel ? '<div class="gorsel">' + q.gorsel + '</div>' : "") +
      '<div class="secenekler">';
    q.secenekler.forEach(function (s, i) {
      html += '<button class="secenek' + (secili === i ? " secili" : "") + '" onclick="App.sec(' + i + ')">' +
        '<span class="harf">' + HARFLER[i] + '</span><span class="sec-metin">' + bicim(s) + '</span></button>';
    });
    html += '</div></div>';

    html += '<div class="test-alt">' +
      '<button class="btn" onclick="App.ileri(-1)"' + (S.idx === 0 ? " disabled" : "") + '>← Önceki</button>' +
      '<button class="btn' + (S.isaret[q.id] ? " aktif" : "") + '" onclick="App.isaretle()">' + (S.isaret[q.id] ? "★ İşaretli" : "☆ Sonra bak") + '</button>' +
      (S.idx === n - 1
        ? '<button class="btn birincil" onclick="App.bitir()">Testi bitir</button>'
        : '<button class="btn birincil" onclick="App.ileri(1)">Sonraki →</button>') +
      '</div><p class="soluk kucuk orta">Klavye: A-D şık seçer, ← → sorular arasında gezinir. Seçili şıkka tekrar tıklarsan soru boş kalır.</p>';

    $("#app").innerHTML = html;
  }
  function sec(i) {
    var qid = S.sorular[S.idx];
    if (S.cevap[qid] === i) delete S.cevap[qid]; else S.cevap[qid] = i;
    Store.set("aktif", S);
    testCiz();
  }
  function ileri(delta) { gitNo(S.idx + delta); }
  function gitNo(i) {
    if (i < 0 || i >= S.sorular.length) return;
    S.idx = i;
    Store.set("aktif", S);
    testCiz();
    window.scrollTo(0, 0);
  }
  function isaretle() {
    var qid = S.sorular[S.idx];
    if (S.isaret[qid]) delete S.isaret[qid]; else S.isaret[qid] = true;
    Store.set("aktif", S);
    testCiz();
  }
  function bitir() {
    var bos = S.sorular.length - Object.keys(S.cevap).length;
    var isaretli = Object.keys(S.isaret).length;
    var mesaj = bos
      ? "<strong>" + bos + " soru boş.</strong> Boş bırakmak yanlış yapmaktan iyidir, ama önce bir daha bakmak ister misin?"
      : "Bütün soruları işaretledin.";
    if (isaretli) mesaj += "<br>“Sonra bak” dediğin " + isaretli + " soru var.";
    modal('<h3>Test bitirilsin mi?</h3><p>' + mesaj + '</p><div class="modal-btn">' +
      '<button class="btn" onclick="App.modalKapat()">Teste dön</button>' +
      '<button class="btn birincil" onclick="App.bitirOnay()">Bitir ve sonucu gör</button></div>');
  }
  function bitirOnay() {
    modalKapat();
    zamanlayiciDurdur();
    var d = 0, y = 0, b = 0;
    var yanlis = Store.get("yanlis", {});
    S.sorular.forEach(function (id) {
      var q = soruBul(id), c = S.cevap[id];
      if (c === undefined) { b++; return; }
      if (c === q.dogru) {
        d++;
        if (yanlis[id]) { yanlis[id].seri++; if (yanlis[id].seri >= 2) delete yanlis[id]; }
      } else {
        y++;
        yanlis[id] = { ts: Date.now(), ders: S.ders, konu: S.konu, seri: 0, tekrar: yanlis[id] ? yanlis[id].tekrar + 1 : 0 };
      }
    });
    var n = S.sorular.length;
    var kayit = {
      ts: Date.now(), tur: S.tur, ders: S.ders, konu: S.konu, kademe: S.kademe,
      d: d, y: y, b: b, net: d - y / 3, oran: d / n, sure: S.gecen, sureDoldu: !!S.sureDoldu,
      sorular: S.sorular, cevap: S.cevap, sureSoru: S.sureSoru, neden: {}
    };
    var gecmis = Store.get("gecmis", []);
    gecmis.push(kayit);
    Store.set("gecmis", gecmis);
    Store.set("yanlis", yanlis);

    var tum = Store.get("konuDurum", {});
    var kd = tum[S.konu] || { k: {} };
    if (!kd.islendi) kd.islendi = kayit.ts;
    var onceki = kd.k[S.kademe] || { enIyi: 0, deneme: 0 };
    kd.k[S.kademe] = { enIyi: Math.max(onceki.enIyi, kayit.oran), son: kayit.oran, deneme: onceki.deneme + 1, ts: kayit.ts };
    tum[S.konu] = kd;
    Store.set("konuDurum", tum);

    S = null;
    Store.set("aktif", null);
    var kb = KONU[kayit.konu], yanlislar = [];
    kayit.sorular.forEach(function (id) {
      var q = soruBul(id), c = kayit.cevap[id];
      if (c !== undefined && c !== q.dogru) yanlislar.push({ soru: id, kazanim: q.kazanim, secilen: HARFLER[c], hata: (q.hatalar || [])[c] || "" });
    });
    Bulut.gonder("test", {
      ts: kayit.ts, tur: kayit.tur, ders: kayit.ders, konu: kayit.konu, kademe: kayit.kademe,
      dersAd: kb.ders.ad, konuAd: kb.konu.ad, kademeAd: KADEMELER[kayit.kademe].ad,
      d: d, y: y, b: b, net: kayit.net, oran: kayit.oran, sure: kayit.sure, sureDoldu: kayit.sureDoldu,
      sureSoru: kayit.sureSoru, yanlislar: yanlislar
    }, "test-" + kayit.ts);
    incFiltre = "hepsi";
    location.replace("#/sonuc/" + kayit.ts);
  }

  // ================= Sonuç ve inceleme =================
  function kayitBul(ts) {
    var gecmis = Store.get("gecmis", []);
    for (var i = gecmis.length - 1; i >= 0; i--) if (gecmis[i].ts === ts) return gecmis[i];
    return null;
  }
  function sonucEkrani(kayit) {
    var kb = KONU[kayit.konu], n = kayit.sorular.length;
    var sinif = oranSinif(kayit.oran);
    var gecti = kayit.oran >= AYAR.gecmeEsigi;
    var sonrakiVar = kayit.kademe < 3 && kademeSorulari(kayit.konu, kayit.kademe + 1).length > 0;
    var mesaj = sinif === "iyi" ? "Harika! Bu kademe sağlam. 💪"
      : gecti ? "Geçtin. Yanlışlarının çözümünü inceledikten sonra devam et."
      : "Bu kademeyi tekrar çözmelisin. Önce aşağıdaki çözümleri dikkatle incele.";
    if (kayit.sureDoldu) mesaj = "⏰ Süre doldu, test kendiliğinden bitti. " + mesaj;

    var html = ustCubuk(esc(kb.konu.ad) + ' <span class="soluk">· ' + KADEMELER[kayit.kademe].ad + '</span>', "#/ders/" + kb.ders.id);
    html += '<div class="kart sonuc-kart">' + halka(kayit.oran, sinif) +
      '<div class="sonuc-sag"><p class="sonuc-mesaj">' + mesaj + '</p><div class="ozet">' +
      ozetKutu(kayit.d, "doğru") + ozetKutu(kayit.y, "yanlış") + ozetKutu(kayit.b, "boş") +
      ozetKutu(fmtNet(kayit.net), "net") + ozetKutu(fmtSureYazi(kayit.sure), "süre") + '</div>' +
      '<div class="sonuc-btn">' +
      (gecti && sonrakiVar ? '<button class="btn birincil" onclick="App.git(\'#/hazir/' + kayit.konu + "/" + (kayit.kademe + 1) + '\')">Sonraki kademe →</button>' : "") +
      '<button class="btn' + (gecti ? "" : " birincil") + '" onclick="App.git(\'#/hazir/' + kayit.konu + "/" + kayit.kademe + '\')">Tekrar çöz</button>' +
      '<button class="btn" onclick="App.git(\'#/ders/' + kb.ders.id + '\')">Konulara dön</button></div></div></div>';

    html += '<div class="filtre">' +
      filtreBtn("hepsi", "Hepsi (" + n + ")", kayit.ts) +
      filtreBtn("yanlis", "Yanlışlar (" + kayit.y + ")", kayit.ts) +
      filtreBtn("bos", "Boşlar (" + kayit.b + ")", kayit.ts) + '</div>';

    html += '<div id="inceleme">' + incelemeHTML(kayit) + '</div>';
    render(html);
  }
  function halka(oran, sinif) {
    var r = 52, c = 2 * Math.PI * r;
    return '<svg class="halka ' + sinif + '" viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="' + r + '" class="halka-zemin"/>' +
      '<circle cx="60" cy="60" r="' + r + '" class="halka-dolu" stroke-dasharray="' + (c * oran).toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="68" text-anchor="middle" class="halka-yazi">%' + yuzde(oran) + '</text></svg>';
  }
  function filtreBtn(f, ad, ts) {
    return '<button class="cip-btn' + (incFiltre === f ? " aktif" : "") + '" onclick="App.filtrele(\'' + f + "'," + ts + ')">' + ad + '</button>';
  }
  function filtrele(f, ts) {
    incFiltre = f;
    var kayit = kayitBul(ts);
    if (!kayit) return;
    var y = window.scrollY;
    sonucEkrani(kayit);
    window.scrollTo(0, y);
  }
  function incelemeHTML(kayit) {
    var html = "";
    kayit.sorular.forEach(function (id, i) {
      var q = soruBul(id);
      if (!q) return;
      var c = kayit.cevap[id];
      var durum = c === undefined ? "bos" : c === q.dogru ? "dogru" : "yanlis";
      if (incFiltre !== "hepsi" && incFiltre !== durum) return;
      var etiket = durum === "dogru" ? "✓ Doğru" : durum === "yanlis" ? "✗ Yanlış" : "○ Boş";
      var sure = kayit.sureSoru && kayit.sureSoru[id];

      html += '<div class="kart soru-kart inceleme ' + durum + '">' +
        '<div class="soru-no">Soru ' + (i + 1) + ' <span class="durum-etiket ' + durum + '">' + etiket + '</span>' +
        (sure ? '<span class="soluk kucuk"> · ' + fmtSureYazi(sure) + '</span>' : "") + '</div>' +
        '<div class="soru-metin">' + bicim(q.soru) + '</div>' +
        (q.gorsel ? '<div class="gorsel">' + q.gorsel + '</div>' : "") + '<div class="secenekler">';
      q.secenekler.forEach(function (s, j) {
        var sc = "secenek sabit" + (j === q.dogru ? " dogru-sik" : "") + (j === c && c !== q.dogru ? " yanlis-sik" : "");
        html += '<div class="' + sc + '"><span class="harf">' + HARFLER[j] + '</span><span class="sec-metin">' + bicim(s) + '</span>' +
          (j === c ? '<span class="senin">senin cevabın</span>' : "") + '</div>';
      });
      html += '</div>';

      if (durum === "yanlis" && q.hatalar && q.hatalar[c]) {
        html += '<div class="hata-kutu"><strong>Bu şıkka götüren olası hata:</strong> ' + bicim(q.hatalar[c]) + '</div>';
      }
      if (durum === "yanlis") {
        html += '<div class="neden" id="neden-' + id + '">' + nedenHTML(kayit, id) + '</div>';
      }
      html += '<details class="cozum"' + (durum === "dogru" ? "" : " open") + '><summary>Adım adım çözüm</summary>' +
        '<div class="cozum-ic">' + bicim(q.aciklama) + '</div></details>' +
        '<button class="btn-yazi kucuk" onclick="App.hataBildir(\'' + id + '\')">Bu soruda bir hata mı var?</button></div>';
    });
    return html || '<p class="soluk orta">Bu filtrede gösterilecek soru yok.</p>';
  }
  function nedenHTML(kayit, id) {
    var secili = (kayit.neden || {})[id];
    var html = '<span class="neden-soru">Neden yanlış yaptın?</span>';
    NEDENLER.forEach(function (nd) {
      html += '<button class="cip-btn' + (secili === nd.k ? " aktif" : "") + '" onclick="App.nedenSec(' + kayit.ts + ",'" + id + "','" + nd.k + '\')">' + nd.ad + '</button>';
    });
    return html;
  }
  function nedenSec(ts, id, k) {
    var gecmis = Store.get("gecmis", []);
    for (var i = gecmis.length - 1; i >= 0; i--) {
      if (gecmis[i].ts !== ts) continue;
      gecmis[i].neden = gecmis[i].neden || {};
      gecmis[i].neden[id] = k;
      Store.set("gecmis", gecmis);
      Bulut.gonder("neden", { ts: ts, soru: id, neden: k });
      var el = document.getElementById("neden-" + id);
      if (el) el.innerHTML = nedenHTML(gecmis[i], id);
      return;
    }
  }
  function hataBildir(id) {
    modal('<h3>Soruda hata bildir</h3><p class="soluk">Soru: ' + esc(id) + '. Sorunun neresinde hata olduğunu kısaca yaz; abine iletilecek.</p>' +
      '<textarea id="bildirim-not" rows="3" placeholder="Örn. cevap C olmalı, şıklarda doğru cevap yok, şekil metinle uyuşmuyor…"></textarea>' +
      '<div class="modal-btn"><button class="btn" onclick="App.modalKapat()">Vazgeç</button>' +
      '<button class="btn birincil" onclick="App.hataGonder(\'' + id + '\')">Gönder</button></div>');
  }
  function hataGonder(id) {
    var not = ($("#bildirim-not") || {}).value || "";
    var liste = Store.get("bildirim", []);
    var b = { ts: Date.now(), soru: id, not: not };
    liste.push(b);
    Store.set("bildirim", liste);
    Bulut.gonder("bildirim", b);
    modal('<h3>Teşekkürler!</h3><p>Bildirimin kaydedildi.</p><div class="modal-btn"><button class="btn birincil" onclick="App.modalKapat()">Tamam</button></div>');
  }

  // ================= Modal =================
  function modal(html) {
    modalKapat();
    var el = document.createElement("div");
    el.id = "modal";
    el.innerHTML = '<div class="modal-ic">' + html + '</div>';
    el.addEventListener("click", function (e) { if (e.target === el) modalKapat(); });
    document.body.appendChild(el);
  }
  function modalKapat() {
    var el = document.getElementById("modal");
    if (el) el.parentNode.removeChild(el);
  }

  // ================= Yedek =================
  function yedekAl() {
    var veri = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k.indexOf("lgs_") === 0) veri[k] = localStorage.getItem(k);
    }
    var blob = new Blob([JSON.stringify({ surum: 1, ts: Date.now(), veri: veri })], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "lgs-yedek-" + tarihKey(new Date()) + ".json";
    a.click();
  }
  function yedekYukle(input) {
    var f = input.files && input.files[0];
    if (!f) return;
    var okuyucu = new FileReader();
    okuyucu.onload = function () {
      try {
        var y = JSON.parse(okuyucu.result);
        if (!y || !y.veri) throw new Error("biçim");
        modal('<h3>Yedek yüklensin mi?</h3><p>' + fmtTarih(y.ts) + ' tarihli yedek yüklenecek. <strong>Şu anki ilerleme bunun üzerine yazılır.</strong></p>' +
          '<div class="modal-btn"><button class="btn" onclick="App.modalKapat()">Vazgeç</button>' +
          '<button class="btn birincil" id="yedek-onay">Yükle</button></div>');
        $("#yedek-onay").onclick = function () {
          Object.keys(y.veri).forEach(function (k) { if (k.indexOf("lgs_") === 0) localStorage.setItem(k, y.veri[k]); });
          location.hash = "#/";
          location.reload();
        };
      } catch (e) {
        modal('<h3>Yedek okunamadı</h3><p>Seçtiğin dosya geçerli bir LGS yedeği değil.</p><div class="modal-btn"><button class="btn birincil" onclick="App.modalKapat()">Tamam</button></div>');
      }
    };
    okuyucu.readAsText(f);
    input.value = "";
  }

  // ================= İlerleme paneli bağlantısı =================
  function panelAdresi() {
    var url = Bulut.url();
    if (!url) return "";
    try { return new URL("panel.html?u=" + encodeURIComponent(url), location.href).href.replace(/#.*$/, ""); }
    catch (e) { return ""; }
  }
  function raporAyar() {
    var url = Bulut.url(), bekleyen = Store.get("kuyruk", []).length;
    modal('<h3>İlerleme paneli bağlantısı</h3>' +
      '<p class="soluk kucuk">Google Apps Script web uygulamasının adresini buraya yapıştır (kurulum: rapor/KURULUM.md). ' +
      'Bağlantı kurulunca çözülen her test abinin paneline düşer ve ilerlemenin yedeği bulutta tutulur.</p>' +
      '<input id="rapor-url" type="url" value="' + esc(url) + '" placeholder="https://script.google.com/macros/s/…/exec">' +
      '<p id="rapor-durum" class="kucuk soluk">' + (url ? "Kayıtlı bir adres var." : "Henüz adres girilmedi.") +
      (bekleyen ? " Gönderilmeyi bekleyen kayıt: " + bekleyen + "." : "") + '</p>' +
      '<div id="panel-adres"></div>' +
      '<div class="modal-btn"><button class="btn" onclick="App.modalKapat()">Kapat</button>' +
      (url ? '<button class="btn" onclick="App.bulutYedekYukle()">Buluttaki yedeği yükle</button>' : "") +
      '<button class="btn birincil" onclick="App.raporKaydet()">Kaydet ve dene</button></div>');
    if (url) panelAdresGoster();
  }
  function raporDurum(mesaj, sinif) {
    var el = $("#rapor-durum");
    if (el) { el.textContent = mesaj; el.className = "kucuk " + (sinif || "soluk"); }
  }
  function panelAdresGoster() {
    var el = $("#panel-adres"), adres = panelAdresi();
    if (!el || !adres) return;
    el.innerHTML = '<p class="kucuk" style="margin:10px 0 4px"><strong>Panel adresi</strong> (abinin telefonunda açıp yer imlerine ekleyeceği adres):</p>' +
      '<input type="text" readonly value="' + esc(adres) + '" onclick="this.select()">' +
      (location.protocol === "file:" ? '<p class="kucuk soluk" style="margin-top:6px">Not: Uygulama şu an bu bilgisayardaki dosyadan açık. Panelin telefonda açılabilmesi için sitenin internette yayımlanmış olması gerekir.</p>' : "");
  }
  function raporKaydet() {
    var url = (($("#rapor-url") || {}).value || "").trim();
    if (url && !/^https:\/\/script\.google\.com\/.+\/exec$/.test(url)) {
      return raporDurum("Adres https://script.google.com/… ile başlamalı ve /exec ile bitmeli.", "kotu");
    }
    Store.set("raporUrl", url);
    if (!url) return raporDurum("Adres silindi. Veriler yalnızca bu bilgisayarda kalacak.");
    raporDurum("Bağlantı deneniyor…");
    Bulut.istek({ tip: "ping" }).then(function () {
      raporDurum("✓ Bağlantı çalışıyor. Bekleyen kayıtlar gönderiliyor.", "iyi-yazi");
      panelAdresGoster();
      if (Store.get("kuyruk", []).length) Bulut.bosalt();
      else Bulut.istek({ tip: "yedek", veri: Bulut.kopya() }).catch(function () {});
    }, function () {
      raporDurum("✗ Bağlanılamadı. Adresi, internet bağlantısını ve dağıtımda “Erişimi olanlar: Herkes” seçildiğini kontrol et.", "kotu");
    });
  }
  function bulutYedekYukle() {
    raporDurum("Buluttaki yedek okunuyor…");
    fetch(Bulut.url() + "?islem=yedek").then(function (r) { return r.json(); }).then(function (c) {
      if (!c.ok || !c.yedek || !c.yedek.veri) throw new Error("yok");
      var y = c.yedek;
      modal('<h3>Buluttaki yedek yüklensin mi?</h3><p>' + fmtTarih(y.ts) + ' tarihli yedek bulundu. <strong>Bu bilgisayardaki ilerleme bunun üzerine yazılır.</strong></p>' +
        '<div class="modal-btn"><button class="btn" onclick="App.modalKapat()">Vazgeç</button><button class="btn birincil" id="yedek-onay">Yükle</button></div>');
      $("#yedek-onay").onclick = function () {
        Object.keys(y.veri).forEach(function (k) { if (k.indexOf("lgs_") === 0 && !YEDEK_DISI[k]) localStorage.setItem(k, y.veri[k]); });
        location.hash = "#/";
        location.reload();
      };
    }).catch(function () { raporDurum("✗ Bulutta yedek bulunamadı ya da bağlanılamadı.", "kotu"); });
  }

  // ================= Yönlendirme =================
  function git(hash) {
    if (location.hash === hash) yonlendir(); else location.hash = hash;
  }
  function yonlendir() {
    var p = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    zamanlayiciDurdur();
    modalKapat();
    if (p[0] === "ders" && dersBul(p[1])) return dersEkrani(p[1]);
    if (p[0] === "hazir" && KONU[p[1]]) return hazirEkrani(p[1], +p[2]);
    if (p[0] === "test") {
      S = S || Store.get("aktif", null);
      if (S && soruBul(S.sorular[S.idx])) return testEkrani();
    }
    if (p[0] === "sonuc") {
      var kayit = kayitBul(+p[1]);
      if (kayit) return sonucEkrani(kayit);
    }
    anaSayfa();
  }
  function klavye(e) {
    if (!S || !sayac || document.getElementById("modal")) return;
    var t = e.key.toLowerCase();
    var i = ["a", "b", "c", "d"].indexOf(t);
    if (i === -1) i = ["1", "2", "3", "4"].indexOf(t);
    if (i !== -1) return sec(i);
    if (e.key === "ArrowRight") ileri(1);
    if (e.key === "ArrowLeft") ileri(-1);
  }
  function init() {
    window.addEventListener("hashchange", yonlendir);
    document.addEventListener("keydown", klavye);
    window.addEventListener("beforeunload", zamanlayiciDurdur);
    yonlendir();
    Bulut.bosalt();
  }

  return {
    init: init, git: git, testBaslat: testBaslat, sec: sec, ileri: ileri, gitNo: gitNo,
    isaretle: isaretle, bitir: bitir, bitirOnay: bitirOnay, filtrele: filtrele,
    nedenSec: nedenSec, hataBildir: hataBildir, hataGonder: hataGonder,
    modalKapat: modalKapat, yedekAl: yedekAl, yedekYukle: yedekYukle,
    raporAyar: raporAyar, raporKaydet: raporKaydet, bulutYedekYukle: bulutYedekYukle,
    bicim: bicim
  };
})();
