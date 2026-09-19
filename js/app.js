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
  // Tekrar testlerinin kademesi 0'dır; KADEMELER'de karşılığı yoktur.
  function kademeAdi(k) { return KADEMELER[k] ? KADEMELER[k].ad : "Tekrar"; }
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
    istek: function (govde, url) {
      return fetch(url || Bulut.url(), {
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
        // Kayıt YALNIZCA başarıda kuyruktan düşer. Deneme sayısı yalnızca ana sayfadaki
        // uyarı için sayılır; sessizce atılmaz, yoksa çözülen test hiç ulaşmadan kaybolur.
        if (basarili) k.splice(i, 1); else k[i].deneme++;
        break;
      }
      Store.set("kuyruk", k);
      Bulut.mesgul = false;
      if (!basarili) return; // bağlantı sorunu: sonraki test bitiminde ya da açılışta yeniden denenir
      if (k.length) Bulut.bosalt();
      else {
        var kopya = Bulut.kopya();
        if (Object.keys(kopya.veri).length) Bulut.istek({ tip: "yedek", veri: kopya }).catch(function () {});
      }
    },
    // Gönderilemeyen kayıt sayısı (ana sayfada uyarı için)
    bekleyen: function () { return Store.get("kuyruk", []).length; }
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
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
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
  var soruMap = null, soruKonuMap = null;
  function soruKonusu(id) {
    if (!soruKonuMap) {
      soruKonuMap = {};
      Object.keys(window.LGS_BANK || {}).forEach(function (konuId) {
        window.LGS_BANK[konuId].forEach(function (q) { soruKonuMap[q.id] = konuId; });
      });
    }
    return soruKonuMap[id] || null;
  }
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
  // Ders ikonları (24×24, çizgi). Emoji yerine her yerde bunlar kullanılır.
  var IKON = {
    matematik: '<path d="M4.5 7h5M7 4.5v5M14.5 7h5M5.2 15.2l3.6 3.6M8.8 15.2l-3.6 3.6M14.5 17h5"/><circle cx="17" cy="14.4" r=".7" fill="currentColor" stroke="none"/><circle cx="17" cy="19.6" r=".7" fill="currentColor" stroke="none"/>',
    fen: '<path d="M9 3h6M10 3v6l-5.2 9a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9V3M7.6 15h8.8"/>',
    turkce: '<path d="M12 6.2C10 4.7 7 4.2 4 4.2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2v-14c-3 0-6 .5-8 2zM12 6.2v14"/>',
    inkilap: '<path d="M6 21V4M6 5h11.5L15 9l2.5 4H6"/>',
    din: '<path d="M19.5 14.6A8.3 8.3 0 1 1 9.4 4.5a6.4 6.4 0 0 0 10.1 10.1z"/><path d="M17.2 4.6l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7z" fill="currentColor" stroke="none"/>',
    ingilizce: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>'
  };
  function ikon(dersId) {
    return '<svg class="ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IKON[dersId] || "") + '</svg>';
  }
  var GUNUN_SOZU = [
    "Ufuk, yürüdükçe genişler.",
    "Bugünün on sorusu, haziranın bir neti.",
    "Yanlışın, bir sonraki doğrunun adresidir.",
    "Her gün biraz, arada bir çoktan iyidir.",
    "Anlamadığın yer, büyüdüğün yerdir.",
    "Hız sonradan gelir; önce doğru adım.",
    "Dün çözemediğini bugün çözmek: ilerleme budur.",
    "Küçük adımlar uzun yolları bitirir.",
    "Zor soru, henüz tanışmadığın kolay sorudur.",
    "Merak ettiğin sürece öğrenirsin."
  ];
  function selam() {
    var s = new Date().getHours();
    var m = s >= 5 && s < 12 ? "Günaydın" : s >= 12 && s < 18 ? "İyi günler" : s >= 18 && s < 23 ? "İyi akşamlar" : "İyi geceler";
    return m + (AYAR.ogrenciAdi ? ", " + esc(AYAR.ogrenciAdi) : "");
  }
  // Sayaç: bankadaki toplam soru, çözülen soru ve toplam net.
  // Yıl boyu birikerek büyür; sınav gününe kadar ne kadar yol alındığını gösterir.
  function bankaToplam() {
    var n = 0;
    Object.keys(window.LGS_BANK || {}).forEach(function (k) { n += window.LGS_BANK[k].length; });
    return n;
  }
  function sayacHTML(gecmis) {
    var d = 0, y = 0;
    gecmis.forEach(function (g) { d += g.d; y += g.y; });
    var cozulen = d + y;
    var net = d - y / 3;
    return '<div class="sayac">' +
      '<div class="sayac-satir"><span class="sy-deger">' + bankaToplam().toLocaleString("tr-TR") + '</span>' +
      '<span class="sy-etiket">soru bankada</span></div>' +
      '<div class="sayac-satir"><span class="sy-deger">' + cozulen.toLocaleString("tr-TR") + '</span>' +
      '<span class="sy-etiket">soru çözüldü</span></div>' +
      '<div class="sayac-satir"><span class="sy-deger">' + fmtNet(net) + '</span>' +
      '<span class="sy-etiket">net <span class="sy-dy">' + d + ' D · ' + y + ' Y</span></span></div></div>';
  }
  function genelIlerleme() {
    var t = 0, g = 0;
    DERSLER.forEach(function (d) { var il = dersIlerleme(d); t += il.toplam; g += il.gecilen; });
    return { toplam: t, gecilen: g, oran: t ? g / t : 0 };
  }
  // Şafak manzarası: geçilen kademe oranı arttıkça güneş yükselir.
  function ufukSVG(oran) {
    var cy = Math.round(318 - 120 * oran);
    var yildiz = [[90, 40, 1.4], [210, 95, 1], [330, 30, 1.2], [470, 70, 1], [610, 28, 1.5], [720, 110, 1], [1010, 48, 1.3], [1120, 120, 1], [1160, 30, 1.1], [540, 140, .9]]
      .map(function (y) { return '<circle cx="' + y[0] + '" cy="' + y[1] + '" r="' + y[2] + '"/>'; }).join("");
    return '<svg class="ufuk-svg" viewBox="0 0 1200 400" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">' +
      '<defs><linearGradient id="gok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1430"/><stop offset=".5" stop-color="#1c3361"/><stop offset=".8" stop-color="#c9774f"/><stop offset="1" stop-color="#ffc47a"/></linearGradient>' +
      '<radialGradient id="hale"><stop offset="0" stop-color="#ffd58a" stop-opacity=".85"/><stop offset=".45" stop-color="#ff9d4d" stop-opacity=".3"/><stop offset="1" stop-color="#ff9d4d" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="1200" height="400" fill="url(#gok)"/><g fill="#fff" opacity=".7">' + yildiz + '</g>' +
      '<circle cx="880" cy="' + cy + '" r="190" fill="url(#hale)"/><circle cx="880" cy="' + cy + '" r="44" fill="#ffd9a0"/>' +
      '<path d="M0 306C150 262 300 282 450 294S750 246 900 284s200-24 300-4v124H0z" fill="#3c568c"/>' +
      '<path d="M0 336c200-40 380-10 560-20s320-30 640 8v76H0z" fill="#24396a"/>' +
      '<path d="M0 366c250-30 500 5 760-15s290-10 440 6v43H0z" fill="#121d3a"/>' +
      '<path d="M690 400c50-22 100-30 134-50s38-30 48-46" fill="none" stroke="#ffe2b0" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 15" opacity=".9"/><path d="M872 303v-24" stroke="#ffe2b0" stroke-width="2.5" stroke-linecap="round"/><path d="M873 279l17 5.5-17 5.5z" fill="#ffb14a"/></svg>';
  }
  function anaSayfa() {
    var gecmis = Store.get("gecmis", []);
    var aktif = Store.get("aktif", null);
    var gun = kalanGun();
    var genel = genelIlerleme(); // güneşin yüksekliği geçilen kademe oranına bağlı
    var soz = GUNUN_SOZU[Math.floor(Date.now() / 86400000) % GUNUN_SOZU.length];

    // Kahraman alan: selam, günün sözü, sıradaki adım
    var html = '<section class="ufuk">' + ufukSVG(genel.oran) + '<div class="ufuk-ic">' +
      '<div class="ufuk-ust"><span class="ufuk-marka">LGS Hazırlık</span>' +
      '<div class="ufuk-sag"><span class="ufuk-sayac">' +
      (gun === null ? "Hedef · " + esc(AYAR.sinavTahmini || "") : "<strong>" + gun + "</strong> gün kaldı") + '</span>' +
      sayacHTML(gecmis) + '</div></div>' +
      '<p class="ufuk-selam">' + selam() + '</p><h1 class="ufuk-soz">' + esc(soz) + '</h1>';

    var tekrarIds = aktif ? [] : tekrarSorulari(10);
    var yanlisSay = bekleyenYanlislar().length;
    var sira = aktif ? null : siradakiTest();
    if (aktif) {
      var ak = KONU[aktif.konu];
      html += '<div class="ufuk-adim"><div><span class="ua-ust">Yarım kalan testin</span><span class="ua-ad">' +
        (ak ? esc(ak.konu.ad) : (aktif.tur === "paragraf" ? "Günün paragrafı" : "Tekrar testi")) + '</span>' +
        '<span class="ua-alt">' + kademeAdi(aktif.kademe) + " · " + Object.keys(aktif.cevap).length + "/" + aktif.sorular.length + ' soru işaretli</span></div>' +
        '<button class="btn gunes" onclick="App.git(\'#/test\')">Devam et →</button></div>';
    } else if (sira) {
      html += '<div class="ufuk-adim"><div><span class="ua-ust">Sıradaki adımın</span><span class="ua-ad">' + esc(sira.konu.ad) + '</span>' +
        '<span class="ua-alt">' + esc(sira.ders.ad) + " · " + sira.k + ". kademe · " + KADEMELER[sira.k].ad + '</span></div>' +
        '<button class="btn gunes" onclick="App.git(\'#/hazir/' + sira.konu.id + "/" + sira.k + '\')">Başla →</button></div>';
    }
    html += '</div></section>';

    // Günlük paragraf rutini: her gün açık, konu testlerinden bağımsız, hedefe kadar tur tur
    var pIds = aktif ? [] : paragrafSorulari(paragrafSet());
    if (pIds.length) {
      var pBugun = paragrafBugun(), pHedef = paragrafHedef(), pSeri = paragrafSeri(), pTaze = paragrafTaze();
      var bitti = pBugun >= pHedef;
      var pct = Math.min(100, Math.round(pBugun / pHedef * 100));
      html += '<section class="kart paragraf-kart"><div class="tk-ic">' +
        '<div class="tk-yazi"><span class="tk-ust">Günün paragrafı' +
        (pSeri > 1 ? ' · ' + pSeri + ' gündür aralıksız' : "") + '</span>' +
        '<h2>' + (bitti ? "Bugünün hedefi tamam ✓" : "Bugün " + pBugun + " / " + pHedef + " paragraf") + '</h2>' +
        '<div class="p-cubuk"><span style="width:' + pct + '%"></span></div>' +
        '<p class="soluk">' + (bitti
          ? "Hedefi tutturdun. İstersen devam edebilirsin; paragrafta fazlası hep iyidir."
          : paragrafSet() + " soruluk turlar hâlinde, her tur yaklaşık " + Math.round(paragrafSet() * 1.5) + " dakika. " +
            "Türkçe'nin en çok soru gelen kısmı burası, üstelik Fen ve Matematiğin uzun sorularını da hızlandırır.") +
        (pTaze < pHedef ? ' <span class="kotu">Havuzda ' + pTaze + ' taze soru kaldı; sonrasında eski sorular döner.</span>' : "") +
        '</p></div><button class="btn ' + (bitti ? "" : "gunes") + '" onclick="App.paragrafBaslat()">' +
        (bitti ? "Devam et" : pBugun ? "Sonraki tur →" : "Başla →") + '</button></div></section>';
    }

    // Tekrar testi: uygulama kendisi hazırlar, zamanı gelince burada belirir
    if (tekrarIds.length >= 5) {
      html += '<section class="kart tekrar-kart"><div class="tk-ic">' +
        '<div class="tk-yazi"><span class="tk-ust">Bugünün tekrarı</span>' +
        '<h2>' + (yanlisSay ? "Yanlışlarını tekrar et" : "Eski konuları tazele") + '</h2>' +
        '<p class="soluk">' + tekrarIds.length + ' soru · ' + Math.round(onerilenSure(tekrarIds.map(soruBul)) / 60) + ' dk · ' +
        (yanlisSay ? "tekrar zamanı gelen " + yanlisSay + " yanlışın ve benzer sorular" : "daha önce işlediğin konulardan karışık sorular") +
        '</p></div><button class="btn birincil buyuk" onclick="App.tekrarBaslat()">Tekrara başla →</button></div></section>';
    }

    html += '<h2 class="bolum">Dersler</h2><div class="ders-grid">';
    DERSLER.forEach(function (d) {
      var il = dersIlerleme(d);
      var pct = il.toplam ? yuzde(il.gecilen / il.toplam) : 0;
      html += '<button class="ders-kart ders-' + d.id + (il.hazirKonu ? "" : " bekliyor") + '" onclick="App.git(\'#/ders/' + d.id + '\')">' +
        '<span class="ders-ust"><span class="ders-ikon">' + ikon(d.id) + '</span><span class="ders-bilgi">' + d.soru + " soru · katsayı " + d.katsayi + '</span></span>' +
        '<span class="ders-ad">' + esc(d.ad) + '</span>' +
        '<span class="ders-alt">' + (il.hazirKonu ? il.hazirKonu + " konu hazır · " + il.gecilen + "/" + il.toplam + " kademe" : "Sorular hazırlanıyor") + '</span>' +
        '<span class="cubuk"><span style="width:' + pct + '%"></span></span></button>';
    });
    html += '</div>';

    if (gecmis.length) {
      html += '<h2 class="bolum">Son testler</h2><div class="liste">';
      gecmis.slice(-6).reverse().forEach(function (g) {
        var kb = KONU[g.konu];
        html += '<button class="liste-satir" onclick="App.git(\'#/sonuc/' + g.ts + '\')">' +
          '<span class="rozet ' + oranSinif(g.oran) + '">%' + yuzde(g.oran) + '</span>' +
          '<span class="ls-ad">' + (kb ? esc(kb.konu.ad) : (g.tur === "paragraf" ? "Günün paragrafı" : "Tekrar testi")) +
          ' <span class="soluk">· ' + (g.tur === "paragraf" ? "Günlük rutin" : kademeAdi(g.kademe)) + '</span></span>' +
          '<span class="soluk kucuk">' + g.d + "D " + g.y + "Y " + g.b + "B · " + fmtTarih(g.ts) + '</span></button>';
      });
      html += '</div>';
    }

    // Buluta ulaşamayan kayıtlar birikiyorsa sessiz kalma
    if (Bulut.url() && Bulut.bekleyen() >= 2) {
      html += '<p class="kucuk orta" style="color:var(--orta);margin-top:18px">' + Bulut.bekleyen() +
        ' kayıt panele gönderilemedi. İnternete bağlanınca kendiliğinden gidecek.</p>';
    }

    html += '<footer class="alt"><button class="btn-yazi" onclick="App.raporAyar()">' + (Bulut.url() ? "Panele bağlı ✓" : "Panel bağlantısı") + '</button>' +
      '<button class="btn-yazi" onclick="App.yedekAl()">Yedek al</button>' +
      '<label class="btn-yazi">Yedek yükle<input type="file" accept=".json" hidden onchange="App.yedekYukle(this)"></label></footer>';
    render(html);
  }

  // ================= Haftalık takvim =================
  // Okulun bu hafta hangi konuda olduğunu js/takvim.js'ten okur. Takvim MEB yıllık
  // planından çıkarıldı ve ikincil kaynaktır: okuldan okula 1-3 hafta kayabilir.
  function buHafta() {
    var t = window.LGS_TAKVIM || [], simdi = Date.now();
    for (var i = 0; i < t.length; i++) {
      if (new Date(t[i].bit + "T23:59:59").getTime() >= simdi) return t[i];
    }
    return null;
  }
  // Bir dersin bu haftadan itibaren sırayla işleyeceği konular (tekrarsız)
  function takvimSirasi(dersId) {
    var h = buHafta();
    if (!h) return [];
    var sira = [], gorulen = {};
    (window.LGS_TAKVIM || []).forEach(function (x) {
      if (x.no < h.no || x.tatil) return;
      var k = x.konu && x.konu[dersId];
      if (k && !gorulen[k]) { gorulen[k] = 1; sira.push(k); }
    });
    return sira;
  }
  function okuldaBuHafta(dersId) {
    var h = buHafta();
    return (h && h.konu && h.konu[dersId]) || null;
  }

  // Soruları hazır konular arasında, açık olup henüz geçilmemiş ilk kademe
  function siradakiTest() {
    for (var i = 0; i < DERSLER.length; i++) {
      var d = DERSLER[i];
      for (var j = 0; j < d.uniteler.length; j++) {
        var konular = d.uniteler[j].konular;
        for (var m = 0; m < konular.length; m++) {
          if (konular[m].rutin) continue; // rutin konu "sıradaki adım" olarak önerilmez
          var durum = konuDurum(konular[m].id);
          for (var k = 1; k <= 3; k++) {
            if (!kademeSorulari(konular[m].id, k).length) continue;
            var gecti = durum.k[k] && durum.k[k].enIyi >= AYAR.gecmeEsigi;
            if (!gecti && kademeAcik(konular[m].id, k)) return { ders: d, konu: konular[m], k: k };
          }
        }
      }
    }
    return null;
  }
  function ozetKutu(deger, etiket) {
    return '<div class="ozet-kutu"><span class="ok-deger">' + deger + '</span><span class="ok-etiket">' + etiket + '</span></div>';
  }

  // ================= Ders ekranı =================
  function dersEkrani(dersId) {
    var d = dersBul(dersId);
    var html = ustCubuk('<span class="baslik-ikon ders-' + d.id + '">' + ikon(d.id) + '</span>' + esc(d.ad), "#/");
    html += '<p class="soluk aciklama-yazi">Konuyu okulda bitirip kâğıt testlerini çözdükten sonra buradaki testlere geç. ' +
      'Her konuda üç kademe var; bir kademeyi en az %' + yuzde(AYAR.gecmeEsigi) + ' ile bitirince sonraki açılır. ' +
      '<strong>Paragraf</strong> ise kademeye bölünmez: bitirilen bir konu değil, her gün beslenen bir beceridir.</p>';
    d.uniteler.forEach(function (u) {
      html += '<h3 class="unite-baslik">' + esc(u.ad) + '</h3><div class="konu-liste">';
      u.konular.forEach(function (konu) {
        var durum = konuDurum(konu.id);
        var hazir = bank(konu.id).length > 0;
        var simdiki = okuldaBuHafta(d.id) === konu.id;
        html += '<div class="konu-kart' + (hazir ? "" : " pasif") + (simdiki ? " simdiki" : "") + '">' +
          (simdiki ? '<div class="simdiki-etiket">Okulda bu hafta</div>' : "") +
          '<div class="konu-ust"><span class="konu-ad">' + esc(konu.ad) + '</span><span class="cipler">' +
          (konu.lgs ? '<span class="cip lgs-cip" title="Bu konudan LGS\'de yıllara göre gelen soru sayısı">LGS\'de ' + esc(konu.lgs) + ' soru</span>' : "") +
          '<span class="cip">' + esc(konu.ay) + '</span></span></div>';
        if (!hazir) {
          html += '<div class="soluk kucuk">Sorular hazırlanıyor</div>';
        } else if (konu.rutin) {
          // Rutin konu: kademe yok, günlük havuza yönlendirir
          var tazeSay = konu.id === PARAGRAF_KONU ? paragrafTaze() : 0;
          html += '<div class="rutin-satir"><div><span class="soluk kucuk">Günlük rutin · havuzda ' +
            bank(konu.id).length + ' soru' + (tazeSay ? ", " + tazeSay + " tanesi taze" : "") + '</span><br>' +
            '<span class="soluk kucuk">Kademe yok; her gün ana sayfadan çözülür. Ne kadar çok, o kadar iyi.</span></div>' +
            '<button class="btn birincil" onclick="App.paragrafBaslat()">' + paragrafSet() + ' soruluk tur →</button></div>';
        } else {
          html += '<div class="kademeler">';
          [1, 2, 3].forEach(function (k) {
            var adet = kademeSorulari(konu.id, k).length;
            if (!adet) return;
            var acik = kademeAcik(konu.id, k), kd = durum.k[k];
            var sinif = "kademe-btn" + (!acik ? " kilitli" : kd ? " " + oranSinif(kd.enIyi) : "");
            html += '<button class="' + sinif + '"' + (acik ? ' onclick="App.git(\'#/hazir/' + konu.id + "/" + k + '\')"' : " disabled") + '>' +
              '<span class="kb-ust">' + (acik ? "" : '<svg class="kilit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>') + k + ". " + KADEMELER[k].ad + '</span>' +
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
      '<div class="buyuk-ikon ders-' + kb.ders.id + '">' + ikon(kb.ders.id) + '</div>' +
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
  // ================= Tekrar motoru =================
  // Yanlış defteri: yanlış yapılan soru 3, 10 ve 30 gün sonra geri gelir. Art arda iki kez
  // doğru yapılınca defterden düşer. Konular da 7, 30 ve 90 gün sonra tekrara girer.
  var YANLIS_ARA = [3, 10, 30];
  var KONU_ARA = [7, 30, 90];
  var GUN = 86400000;

  // Zamanı gelmiş yanlışlar (en gecikmişi başta)
  function bekleyenYanlislar() {
    var yanlis = Store.get("yanlis", {}), simdi = Date.now(), liste = [];
    Object.keys(yanlis).forEach(function (id) {
      var y = yanlis[id];
      if (!soruBul(id)) return;
      var ara = YANLIS_ARA[Math.min(y.seri || 0, YANLIS_ARA.length - 1)] * GUN;
      if (simdi - y.ts >= ara) liste.push({ id: id, gecikme: simdi - y.ts - ara });
    });
    return liste.sort(function (a, b) { return b.gecikme - a.gecikme; });
  }
  // Tekrar zamanı gelmiş konular
  function bekleyenKonular() {
    var tum = Store.get("konuDurum", {}), simdi = Date.now(), liste = [];
    Object.keys(tum).forEach(function (konuId) {
      if (!KONU[konuId] || !bank(konuId).length) return;
      var kd = tum[konuId], n = kd.tekrar || 0;
      if (n >= KONU_ARA.length) return;
      var son = kd.sonTekrar || kd.islendi || 0;
      if (simdi - son >= KONU_ARA[n] * GUN) liste.push(konuId);
    });
    return liste;
  }
  // Bir kazanımdan, öğrencinin hiç görmediği sorular
  function benzerSorular(konuId, kazanim, haric) {
    var gorulen = Store.get("gorulen", {});
    return bank(konuId).filter(function (q) {
      return q.kazanim === kazanim && !gorulen[q.id] && haric.indexOf(q.id) === -1;
    });
  }
  // Tekrar testini kurar: yanlışlar + benzerleri + zamanı gelen konulardan taze sorular
  function tekrarSorulari(hedef) {
    hedef = hedef || 10;
    var secilen = [], eklendi = {};
    function ekle(id) { if (id && !eklendi[id] && soruBul(id)) { eklendi[id] = 1; secilen.push(id); } }

    // 1) Zamanı gelmiş yanlışlar (en çok yarısı) ve her birine bir benzer
    var yanlislar = bekleyenYanlislar();
    var yanlisKota = Math.max(1, Math.ceil(hedef / 2));
    yanlislar.slice(0, yanlisKota).forEach(function (y) {
      ekle(y.id);
      var q = soruBul(y.id), kb = q && KONU[Store.get("yanlis", {})[y.id].konu];
      if (!q || !kb) return;
      var benzer = benzerSorular(Store.get("yanlis", {})[y.id].konu, q.kazanim, secilen);
      if (benzer.length) ekle(benzer[Math.floor(Math.random() * benzer.length)].id);
    });

    // 2) Tekrar zamanı gelen konulardan görülmemiş sorular
    shuffle(bekleyenKonular()).forEach(function (konuId) {
      if (secilen.length >= hedef) return;
      var gorulen = Store.get("gorulen", {});
      var havuz = shuffle(bank(konuId).filter(function (q) { return !gorulen[q.id] && !eklendi[q.id]; }));
      havuz.slice(0, 3).forEach(function (q) { if (secilen.length < hedef) ekle(q.id); });
    });

    // 3) Yer kalırsa: işlenmiş konulardan görülmemiş havuz soruları
    if (secilen.length < hedef) {
      var tum = Store.get("konuDurum", {}), gor = Store.get("gorulen", {}), aday = [];
      Object.keys(tum).forEach(function (konuId) {
        bank(konuId).forEach(function (q) { if (q.kademe === 0 && !gor[q.id] && !eklendi[q.id]) aday.push(q.id); });
      });
      shuffle(aday).slice(0, hedef - secilen.length).forEach(ekle);
    }
    return secilen;
  }
  // ================= Günlük paragraf =================
  // Paragraf, bitirilen bir konu değil süreklilik isteyen bir beceridir: LGS Türkçe'nin
  // 6-8 sorusu doğrudan buradan gelir, üstelik Fen ve Matematik'in uzun metinli soruları da
  // aynı okuma hızına bağlıdır. Bu yüzden konu testlerinden ayrı, her gün açık bir rutindir.
  var PARAGRAF_KONU = "paragrafta-anlam";
  function paragrafHedef() { return AYAR.paragrafHedefi || 20; }
  function paragrafSet() { return AYAR.paragrafSetBoyutu || 10; }

  function paragrafSorulari(adet) {
    var havuz = bank(PARAGRAF_KONU).filter(function (q) { return q.kademe === 0; });
    if (!havuz.length) return [];
    var gorulen = Store.get("gorulen", {});
    var taze = shuffle(havuz.filter(function (q) { return !gorulen[q.id]; }));
    if (taze.length >= adet) return taze.slice(0, adet).map(function (q) { return q.id; });
    // Havuz tükendiyse en eski görülenlerden tamamla (rutin hiç durmasın)
    var eski = havuz.filter(function (q) { return gorulen[q.id]; })
      .sort(function (a, b) { return gorulen[a.id] - gorulen[b.id]; });
    return taze.concat(eski).slice(0, adet).map(function (q) { return q.id; });
  }
  // Bugün çözülen paragraf SORUSU sayısı (tur sayısı değil)
  function paragrafBugun() {
    var bugun = tarihKey(new Date()), say = 0;
    Store.get("gecmis", []).forEach(function (g) {
      if (g.tur === "paragraf" && tarihKey(new Date(g.ts)) === bugun) say += g.sorular.length;
    });
    return say;
  }
  // Havuzda öğrencinin hiç görmediği kaç paragraf sorusu kaldı
  function paragrafTaze() {
    var gorulen = Store.get("gorulen", {});
    return bank(PARAGRAF_KONU).filter(function (q) { return q.kademe === 0 && !gorulen[q.id]; }).length;
  }
  function paragrafSeri() {
    var gunler = {};
    Store.get("gecmis", []).forEach(function (g) {
      if (g.tur === "paragraf") gunler[tarihKey(new Date(g.ts))] = true;
    });
    var d = new Date(), seri = 0;
    if (!gunler[tarihKey(d)]) d.setDate(d.getDate() - 1);
    while (gunler[tarihKey(d)]) { seri++; d.setDate(d.getDate() - 1); }
    return seri;
  }
  function paragrafBaslat() {
    var ids = paragrafSorulari(paragrafSet());
    if (!ids.length) return;
    S = {
      tur: "paragraf", ders: "turkce", konu: null, kademe: 0,
      sorular: ids, cevap: {}, isaret: {}, sureSoru: {}, idx: 0, gecen: 0,
      oneri: onerilenSure(ids.map(soruBul)), basla: Date.now()
    };
    Store.set("aktif", S);
    git("#/test");
  }

  function tekrarBaslat() {
    var ids = tekrarSorulari(10);
    if (!ids.length) return;
    var sorular = ids.map(soruBul);
    S = {
      tur: "tekrar", ders: null, konu: null, kademe: 0,
      sorular: ids, cevap: {}, isaret: {}, sureSoru: {}, idx: 0, gecen: 0,
      oneri: onerilenSure(sorular), basla: Date.now()
    };
    Store.set("aktif", S);
    git("#/test");
  }
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
        var et = $("#sure-etiket");
        if (et) et.textContent = sureEtiketi();
      }
      if (S.gecen % 5 === 0) Store.set("aktif", S);
      if (AYAR.sureSiniri && S.gecen >= S.oneri && !S.sureDoldu) {
        S.sureDoldu = true;
        // Süre bitti: ya testi kes (gerçek sınav gibi) ya da aşıma geçip devam et.
        // Aşım süresi kaydedilir ve sonuçta gösterilir; amaç öğrenciyi kesmeden
        // tempoyu görünür kılmak.
        if (AYAR.sureBitinceKes) return bitirOnay();
        testCiz(); // başlık "Aşım" moduna geçsin
      }
    }, 1000);
  }
  function sureAsim() { return Math.max(0, S.gecen - S.oneri); }
  function sureYazi() {
    if (!AYAR.sureSiniri) return fmtSure(S.gecen);
    var kalan = S.oneri - S.gecen;
    return kalan >= 0 ? fmtSure(kalan) : "+" + fmtSure(-kalan);
  }
  function sureSinif() {
    var kalan = S.oneri - S.gecen;
    if (!AYAR.sureSiniri) return "sure";
    if (kalan < 0) return "sure asim";
    return "sure" + (kalan <= (AYAR.sureUyari || 120) ? " az" : "");
  }
  function sureEtiketi() {
    if (!AYAR.sureSiniri) return "Süre";
    return S.gecen >= S.oneri ? "Süreyi aştın" : "Kalan süre";
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
    // Bankadan kalkmış soru varsa testi çökertme; temizleyip devam et
    if (S.sorular.some(function (id) { return !soruBul(id); })) {
      S.sorular = S.sorular.filter(function (id) { return !!soruBul(id); });
      if (!S.sorular.length) { S = null; Store.set("aktif", null); return git("#/"); }
      S.idx = Math.min(S.idx, S.sorular.length - 1);
      Store.set("aktif", S);
    }
    var q = soruBul(S.sorular[S.idx]);
    var kb = KONU[S.konu], n = S.sorular.length;
    var secili = S.cevap[q.id];
    var html = '<header class="test-ust">' +
      '<div class="tu-sol"><strong>' + (kb ? esc(kb.konu.ad) : (S.tur === "paragraf" ? "Günün paragrafı" : "Tekrar testi")) + '</strong>' +
      (kb ? '<span class="soluk"> · ' + KADEMELER[S.kademe].ad + '</span>'
          : '<span class="soluk"> · ' + (S.tur === "paragraf" ? "günlük rutin" : "karışık sorular") + '</span>') + '</div>' +
      '<div class="tu-sag"><span id="sure-etiket" class="soluk kucuk">' + sureEtiketi() + '</span>' +
      '<span id="sure" class="' + sureSinif() + '">' + sureYazi() + '</span>' +
      '<button class="btn" onclick="App.git(\'#/\')" title="Süre durur, ana sayfadan devam edebilirsin">❙❙ Ara ver</button>' +
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
      '</div><p class="soluk kucuk orta test-ipucu">Klavye: A-D şık seçer, ← → sorular arasında gezinir. Seçili şıkka tekrar tıklarsan soru boş kalır.</p>';

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
    // Soru bankadan kalkmışsa (dosya yeniden adlandırılmış vb.) testi düşürmeden atla
    S.sorular = S.sorular.filter(function (id) { return !!soruBul(id); });
    S.sorular.forEach(function (id) {
      var q = soruBul(id), c = S.cevap[id];
      if (c === undefined) { b++; return; }
      if (c === q.dogru) {
        d++;
        if (yanlis[id]) {
          yanlis[id].seri++;
          yanlis[id].ts = Date.now();
          if (yanlis[id].seri >= 2) delete yanlis[id];
        }
      } else {
        y++;
        var eski = yanlis[id];
        yanlis[id] = { ts: Date.now(), ders: S.ders || (eski && eski.ders) || null, konu: soruKonusu(id),
          seri: 0, tekrar: eski ? eski.tekrar + 1 : 0 };
      }
    });
    var n = S.sorular.length;
    var kayit = {
      ts: Date.now(), tur: S.tur, ders: S.ders, konu: S.konu, kademe: S.kademe,
      d: d, y: y, b: b, net: d - y / 3, oran: d / n, sure: S.gecen, sureDoldu: !!S.sureDoldu, asim: Math.max(0, S.gecen - S.oneri), hedefSure: S.oneri,
      sorular: S.sorular, cevap: S.cevap, sureSoru: S.sureSoru, neden: {}
    };
    var gecmis = Store.get("gecmis", []);
    gecmis.push(kayit);
    Store.set("gecmis", gecmis);
    Store.set("yanlis", yanlis);

    // Görülen sorular (tekrar testi aynı soruyu iki kez sormasın diye)
    var gorulen = Store.get("gorulen", {});
    S.sorular.forEach(function (id) { gorulen[id] = kayit.ts; });
    Store.set("gorulen", gorulen);

    var tum = Store.get("konuDurum", {});
    if (S.tur === "konu") {
      var kd = tum[S.konu] || { k: {} };
      if (!kd.islendi) kd.islendi = kayit.ts;
      var onceki = kd.k[S.kademe] || { enIyi: 0, deneme: 0 };
      kd.k[S.kademe] = { enIyi: Math.max(onceki.enIyi, kayit.oran), son: kayit.oran, deneme: onceki.deneme + 1, ts: kayit.ts };
      tum[S.konu] = kd;
    } else {
      // Tekrar testi: içinde geçen konuların tekrar sayacı ilerler
      var gecen = {};
      S.sorular.forEach(function (id) { var k = soruKonusu(id); if (k) gecen[k] = 1; });
      Object.keys(gecen).forEach(function (k) {
        if (!tum[k]) return;
        tum[k].tekrar = (tum[k].tekrar || 0) + 1;
        tum[k].sonTekrar = kayit.ts;
      });
    }
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
      dersAd: kb ? kb.ders.ad : (kayit.tur === "paragraf" ? "Türkçe" : "Karışık"),
      konuAd: kb ? kb.konu.ad : (kayit.tur === "paragraf" ? "Günün paragrafı" : "Yanlışlarını tekrar"),
      kademeAd: KADEMELER[kayit.kademe] ? KADEMELER[kayit.kademe].ad : (kayit.tur === "paragraf" ? "Günlük rutin" : "Tekrar"),
      d: d, y: y, b: b, net: kayit.net, oran: kayit.oran, sure: kayit.sure, sureDoldu: kayit.sureDoldu, asim: kayit.asim, hedefSure: kayit.hedefSure,
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
    if (kayit.tur === "tekrar" || kayit.tur === "paragraf") return tekrarSonucu(kayit, n);
    var sinif = oranSinif(kayit.oran);
    var gecti = kayit.oran >= AYAR.gecmeEsigi;
    var sonrakiVar = kayit.kademe < 3 && kademeSorulari(kayit.konu, kayit.kademe + 1).length > 0;
    var mesaj = sinif === "iyi" ? "Harika! Bu kademe sağlam."
      : gecti ? "Geçtin. Yanlışlarının çözümünü inceledikten sonra devam et."
      : "Bu kademeyi tekrar çözmelisin. Önce aşağıdaki çözümleri dikkatle incele.";
    if (kayit.sureDoldu) {
      mesaj = (kayit.asim
        ? "Hedef süreyi " + fmtSureYazi(kayit.asim) + " aştın. Sorun değil, tempo zamanla oturur. "
        : "Süre doldu, test kendiliğinden bitti. ") + mesaj;
    }

    var html = ustCubuk(esc(kb.konu.ad) + ' <span class="soluk">· ' + KADEMELER[kayit.kademe].ad + '</span>', "#/ders/" + kb.ders.id);
    html += '<div class="kart sonuc-kart">' + halka(kayit.oran, sinif) +
      '<div class="sonuc-sag"><p class="sonuc-mesaj">' + mesaj + '</p><div class="ozet">' +
      ozetKutu(kayit.d, "doğru") + ozetKutu(kayit.y, "yanlış") + ozetKutu(kayit.b, "boş") +
      ozetKutu(fmtNet(kayit.net), "net") + ozetKutu(fmtSureYazi(kayit.sure), "süre") + asimKutusu(kayit) + '</div>' +
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
  // Tekrar testinin sonucu: konu/kademe yoktur, sorular karışık gelir
  function tekrarSonucu(kayit, n) {
    var pg = kayit.tur === "paragraf";
    var sinif = oranSinif(kayit.oran);
    var mesaj = pg
      ? (sinif === "iyi" ? "Okuduğunu iyi çözümlüyorsun. Bu rutini her gün sürdür."
        : sinif === "orta" ? "Fena değil. Yanlışlarını okurken metnin neresini atladığına dikkat et."
        : "Acele etmiş olabilirsin. Çözümleri okurken metne geri dön ve cevabın hangi cümlede saklı olduğunu bul.")
      : (sinif === "iyi" ? "Eski konular akılda kalmış. Böyle devam."
        : sinif === "orta" ? "Fena değil. Yanlışlarının çözümünü incele, bunlar birkaç gün sonra yine karşına çıkacak."
        : "Unutmaya başladığın konular var. Aşağıdaki çözümleri dikkatle oku; bu sorular yeniden gelecek.");
    if (kayit.sureDoldu) {
      mesaj = (kayit.asim
        ? "Hedef süreyi " + fmtSureYazi(kayit.asim) + " aştın. Sorun değil, tempo zamanla oturur. "
        : "Süre doldu, test kendiliğinden bitti. ") + mesaj;
    }

    var html = ustCubuk(pg ? "Günün paragrafı" : "Tekrar testi", "#/");
    html += '<div class="kart sonuc-kart">' + halka(kayit.oran, sinif) +
      '<div class="sonuc-sag"><p class="sonuc-mesaj">' + mesaj + '</p><div class="ozet">' +
      ozetKutu(kayit.d, "doğru") + ozetKutu(kayit.y, "yanlış") + ozetKutu(kayit.b, "boş") +
      ozetKutu(fmtSureYazi(kayit.sure), "süre") + asimKutusu(kayit) + '</div>' +
      '<div class="sonuc-btn">' + (pg ? '<button class="btn" onclick="App.paragrafBaslat()">Bir tur daha</button>' : "") +
      '<button class="btn birincil" onclick="App.git(\'#/\')">Ana sayfaya dön</button></div></div></div>';

    html += '<div class="filtre">' + filtreBtn("hepsi", "Hepsi (" + n + ")", kayit.ts) +
      filtreBtn("yanlis", "Yanlışlar (" + kayit.y + ")", kayit.ts) +
      filtreBtn("bos", "Boşlar (" + kayit.b + ")", kayit.ts) + '</div>';
    html += '<div id="inceleme">' + incelemeHTML(kayit) + '</div>';
    render(html);
  }
  // Hedef süre aşıldıysa ne kadar aşıldığını gösterir; aşım yoksa hiç görünmez.
  function asimKutusu(kayit) {
    if (!kayit.asim) return "";
    return '<div class="ozet-kutu asim-kutu"><span class="ok-deger">+' + fmtSureYazi(kayit.asim) +
      '</span><span class="ok-etiket">süre aşımı</span></div>';
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
      // Kurtarma düğmesi her zaman görünür: veri silinmiş bir bilgisayarda kayıtlı adres
      // olmaz, ama kullanıcı adresi kutuya yapıştırıp doğrudan buradan geri yükleyebilmeli.
      '<button class="btn" onclick="App.bulutYedekYukle()">Buluttaki yedeği yükle</button>' +
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
  // Kutudaki adresi okur ve doğrular; geçersizse durum satırına yazıp "" döndürür.
  function girilenUrl() {
    var url = (($("#rapor-url") || {}).value || "").trim().replace(/[?#].*$/, "");
    if (!url) return "";
    if (!/^https:\/\/script\.google\.com\/[^\s]*\/exec$/.test(url)) {
      raporDurum("Adres https://script.google.com/… ile başlamalı ve /exec ile bitmeli.", "kotu");
      return "";
    }
    return url;
  }
  function raporKaydet() {
    var ham = (($("#rapor-url") || {}).value || "").trim();
    if (!ham) {
      Store.set("raporUrl", "");
      return raporDurum("Adres silindi. Veriler yalnızca bu bilgisayarda kalacak.");
    }
    var url = girilenUrl();
    if (!url) return;
    raporDurum("Bağlantı deneniyor…");
    // Adres, bağlantı DOĞRULANDIKTAN sonra kaydedilir; yoksa ana sayfa çalışmayan bir
    // bağlantı için "Panele bağlı" der.
    Bulut.istek({ tip: "ping" }, url).then(function () {
      Store.set("raporUrl", url);
      raporDurum("✓ Bağlantı çalışıyor. Bekleyen kayıtlar gönderiliyor.", "iyi-yazi");
      panelAdresGoster();
      if (Store.get("kuyruk", []).length) return Bulut.bosalt();
      // Boş bir kopya buluttaki yedeğin üstüne yazılmamalı; sunucu da reddeder ama
      // gereksiz isteği hiç göndermiyoruz.
      var k = Bulut.kopya();
      if (Object.keys(k.veri).length) Bulut.istek({ tip: "yedek", veri: k }).catch(function () {});
    }, function (e) {
      var m = String((e && e.message) || "");
      raporDurum(m.indexOf("Kurulum tamamlanmamış") === 0
        ? "✗ " + m
        : "✗ Bağlanılamadı. Adresi, internet bağlantısını ve dağıtımda “Erişimi olanlar: Herkes” seçildiğini kontrol et.", "kotu");
    });
  }
  function bulutYedekYukle() {
    // Kutuya yeni yapıştırılmış adres de kabul edilir: veri silinmiş bir bilgisayarda
    // kayıtlı adres yoktur ve kurtarmanın ilk adımı bu olmalıdır.
    var url = girilenUrl() || Bulut.url();
    if (!url) return raporDurum("Önce Apps Script adresini yapıştır.", "kotu");
    raporDurum("Buluttaki yedek okunuyor…");
    fetch(url + "?islem=yedek").then(function (r) { return r.json(); }).then(function (c) {
      var y = c && c.yedek;
      if (!c.ok || !y || !y.veri || !Object.keys(y.veri).length) throw new Error("yok");
      var yerel = Bulut.kopya();
      var say = function (v) { try { return (JSON.parse(v.lgs_gecmis) || []).length; } catch (h) { return 0; } };
      var bulutSay = say(y.veri), yerelSay = say(yerel.veri);
      var uyari = yerelSay > bulutSay
        ? '<p class="kotu"><strong>Dikkat:</strong> bu bilgisayarda ' + yerelSay + ' test kayıtlı, buluttaki yedekte ' + bulutSay +
          ' test var. Yüklersen aradaki ' + (yerelSay - bulutSay) + ' test kaybolur.</p>'
        : "";
      modal('<h3>Buluttaki yedek yüklensin mi?</h3><p>' + fmtTarih(y.ts) + ' tarihli, ' + bulutSay + ' testlik yedek bulundu. ' +
        '<strong>Bu bilgisayardaki ilerleme bunun üzerine yazılır.</strong></p>' + uyari +
        '<div class="modal-btn"><button class="btn" onclick="App.modalKapat()">Vazgeç</button><button class="btn birincil" id="yedek-onay">Yükle</button></div>');
      $("#yedek-onay").onclick = function () {
        Object.keys(y.veri).forEach(function (k) { if (k.indexOf("lgs_") === 0 && !YEDEK_DISI[k]) localStorage.setItem(k, y.veri[k]); });
        Store.set("raporUrl", url);
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
    tekrarBaslat: tekrarBaslat, paragrafBaslat: paragrafBaslat, raporAyar: raporAyar, raporKaydet: raporKaydet, bulutYedekYukle: bulutYedekYukle,
    bicim: bicim, ikon: ikon
  };
})();
