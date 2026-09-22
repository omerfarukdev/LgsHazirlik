"use strict";

// İlerleme paneli: öğrencinin ilerlemesinin buluttaki kopyasını (rapor/Kod.gs) okur ve özetler.
// Adres:  panel.html?u=<Apps Script adresi>   (adres bir kez verilince bu cihazda hatırlanır)
//         panel.html?yerel=1                  (bulut yerine bu tarayıcıdaki kaydı gösterir)
var Panel = (function () {

  var AYAR = window.LGS_AYAR || {};
  var DERSLER = window.LGS_KONULAR || [];
  var HARFLER = ["A", "B", "C", "D"];
  var KADEME_AD = { 1: "Kavrama", 2: "Pekiştirme", 3: "LGS Ayarı" };
  var NEDEN_AD = { bilgi: "Bilmiyordum", okuma: "Yanlış okudum", islem: "İşlem hatası", sure: "Aceleye geldi", tahmin: "Tahmin ettim" };
  var DONEMLER = [{ k: 7, ad: "Son 7 gün" }, { k: 30, ad: "Son 30 gün" }, { k: 0, ad: "Tümü" }];

  var veri = null;   // { ts, gecmis, konuDurum, bildirim }
  var donem = 7;

  var KONU = {}, soruMap = null;
  DERSLER.forEach(function (d) {
    d.uniteler.forEach(function (u) { u.konular.forEach(function (k) { KONU[k.id] = { konu: k, ders: d }; }); });
  });
  function soruBul(id) {
    if (!soruMap) {
      soruMap = {};
      Object.keys(window.LGS_BANK || {}).forEach(function (k) {
        window.LGS_BANK[k].forEach(function (q) { soruMap[q.id] = q; });
      });
    }
    return soruMap[id] || null;
  }

  function $(s) { return document.querySelector(s); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function bicim(s) { return window.App ? App.bicim(s) : esc(s); }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function gunKey(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function yuzde(o) { return Math.round(o * 100); }
  function sinif(o) { return o >= (AYAR.saglamEsigi || 0.8) ? "iyi" : o >= (AYAR.gecmeEsigi || 0.6) ? "orta" : "zayif"; }
  function dk(sn) { return sn < 60 ? Math.round(sn) + " sn" : Math.round(sn / 60) + " dk"; }
  function tarihSaat(ts) {
    return new Date(ts).toLocaleDateString("tr-TR", { day: "numeric", month: "short" }) + " " +
      new Date(ts).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
  }
  function once(ts) {
    var sn = (Date.now() - ts) / 1000;
    if (sn < 3600) return Math.max(1, Math.round(sn / 60)) + " dakika önce";
    if (sn < 86400) return Math.round(sn / 3600) + " saat önce";
    return Math.round(sn / 86400) + " gün önce";
  }
  function kutu(deger, etiket) {
    return '<div class="ozet-kutu"><span class="ok-deger">' + deger + '</span><span class="ok-etiket">' + etiket + '</span></div>';
  }

  // ================= Veri =================
  function adres() {
    var u = new URLSearchParams(location.search).get("u");
    if (u) {
      u = u.trim().replace(/[?#].*$/, "").replace(/\/+$/, ""); // kendi sorgusu olan adresi temizle
      try { localStorage.setItem("lgs_panelUrl", u); } catch (e) {}
      // Adres kaydedildi; adres çubuğunda durmasın (telefon geçmişine ve paylaşımlara sızmasın).
      try { history.replaceState(null, "", location.pathname); } catch (e) {}
      return u;
    }
    try { return localStorage.getItem("lgs_panelUrl") || ""; } catch (e) { return ""; }
  }
  function coz(kopya) {
    function al(k, def) { try { return JSON.parse(kopya.veri["lgs_" + k]) || def; } catch (e) { return def; } }
    return {
      ts: kopya.ts, gecmis: al("gecmis", []), konuDurum: al("konuDurum", {}), bildirim: al("bildirim", []),
      aktif: al("aktif", null), hap: al("hap", {})
    };
  }
  function yukle() {
    var yerel = new URLSearchParams(location.search).get("yerel");
    if (yerel) {
      var v = {};
      for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); v[k] = localStorage.getItem(k); }
      veri = coz({ ts: Date.now(), veri: v });
      return ciz();
    }
    var u = adres();
    if (!u) return adresSor();
    $("#app").innerHTML = '<div class="yukleniyor">İlerleme okunuyor…</div>';
    fetch(u + "?islem=yedek").then(function (r) { return r.json(); }).then(function (c) {
      if (!c.ok || !c.yedek) throw new Error(c.hata || "Yedek yok");
      veri = coz(c.yedek);
      ciz();
    }).catch(function (e) {
      $("#app").innerHTML = '<div class="kart orta-kart"><h2>Veri okunamadı</h2><p class="soluk">' +
        (String(e.message).indexOf("Yedek yok") !== -1
          ? "Bağlantı çalışıyor ama henüz hiç kayıt gelmemiş. İlk test çözülünce burada görünecek."
          : "İnternet bağlantını ve panel adresini kontrol et.") +
        '</p><button class="btn birincil" onclick="Panel.yukle()">Yeniden dene</button> ' +
        '<button class="btn" onclick="Panel.adresSor()">Adresi değiştir</button></div>';
    });
  }
  function adresSor() {
    $("#app").innerHTML = '<div class="kart orta-kart"><h2>İlerleme paneli</h2>' +
      '<p class="soluk">Apps Script web uygulaması adresini yapıştır. Bu cihazda hatırlanır.</p>' +
      '<div class="modal-ic" style="padding:0;box-shadow:none;max-width:none"><input id="u" type="url" placeholder="https://script.google.com/macros/s/…/exec"></div>' +
      '<p></p><button class="btn birincil" onclick="Panel.adresKaydet()">Paneli aç</button></div>';
  }
  function adresKaydet() {
    var u = ($("#u").value || "").trim();
    if (!u) return;
    try { localStorage.setItem("lgs_panelUrl", u); } catch (e) {}
    yukle();
  }

  // ================= Çizim =================
  function ciz() {
    var simdi = Date.now();
    var bas = donem ? simdi - donem * 86400000 : 0;
    var tum = veri.gecmis.slice().sort(function (a, b) { return a.ts - b.ts; });
    var g = tum.filter(function (t) { return t.ts >= bas; });
    var son = tum[tum.length - 1];

    var html = '<header class="ust"><div><h1>İlerleme Paneli</h1><p class="soluk">' +
      (son ? "Son test: <strong>" + once(son.ts) + "</strong>" : "Henüz test çözülmedi") +
      ' · veri: ' + tarihSaat(veri.ts) + '</p></div>' +
      '<button class="btn" onclick="Panel.yukle()">↻ Yenile</button></header>';

    html += yarimKart();

    html += '<div class="filtre">' + DONEMLER.map(function (d) {
      return '<button class="cip-btn' + (donem === d.k ? " aktif" : "") + '" onclick="Panel.donemSec(' + d.k + ')">' + d.ad + '</button>';
    }).join("") + '</div>';

    // Özet
    var o = { d: 0, y: 0, b: 0, sure: 0 }, gunler = {};
    g.forEach(function (t) { o.d += t.d; o.y += t.y; o.b += t.b; o.sure += t.sure; gunler[gunKey(new Date(t.ts))] = 1; });
    var top = o.d + o.y + o.b;
    html += '<div class="ozet">' + kutu(g.length, "test") + kutu(o.d + o.y, "çözülen soru") +
      kutu(top ? "%" + yuzde(o.d / top) : "–", "doğruluk") +
      kutu(Object.keys(gunler).length + (donem ? "/" + donem : ""), "çalışılan gün") + kutu(dk(o.sure), "toplam süre") + '</div>';

    if (!g.length) {
      html += '<div class="kart" style="margin-top:16px"><strong>Bu dönemde hiç test çözülmedi.</strong></div>';
    }

    html += '<h2>Günlük çalışma (son 14 gün)</h2><div class="kart">' + gunlukGrafik(tum) + '</div>';

    // Ders tablosu
    if (g.length) {
      // Tekrar testlerinde ders yoktur (karışık sorular); ayrı bir satırda gösterilir ki
      // tablo toplamı üstteki özet kutularıyla tutsun.
      var ders = {};
      g.forEach(function (t) {
        var anahtar = t.ders || "_tekrar";
        var x = ders[anahtar] = ders[anahtar] || { test: 0, d: 0, y: 0, b: 0, net: 0 };
        x.test++; x.d += t.d; x.y += t.y; x.b += t.b; x.net += t.net;
      });
      html += '<h2>Ders ders</h2><div class="kart tablo-sar"><table class="tablo genis"><tr><th>Ders</th><th>Test</th><th>D</th><th>Y</th><th>B</th><th>Net</th><th>Doğruluk</th></tr>';
      function dersSatiri(x, sinifAdi, etiket) {
        var or = x.d / (x.d + x.y + x.b);
        html += '<tr class="' + sinifAdi + '"><td style="text-align:left">' + etiket + '</td><td>' + x.test + '</td><td>' + x.d + '</td><td>' + x.y +
          '</td><td>' + x.b + '</td><td>' + (Math.round(x.net * 100) / 100).toLocaleString("tr-TR") +
          '</td><td><span class="rozet ' + sinif(or) + '">%' + yuzde(or) + '</span></td></tr>';
      }
      DERSLER.forEach(function (d) {
        if (ders[d.id]) dersSatiri(ders[d.id], "ders-" + d.id, App.ikon(d.id) + esc(d.ad));
      });
      if (ders._tekrar) dersSatiri(ders._tekrar, "", "Tekrar testleri <span class='soluk kucuk'>(karışık)</span>");
      html += '</table></div>';
    }

    html += hataAnalizi(g);
    html += konuHaritasi();
    html += testListesi(g);

    if (veri.bildirim.length) {
      html += '<h2>Soru hata bildirimleri</h2><div class="liste">' + veri.bildirim.slice().reverse().map(function (b) {
        return '<div class="liste-satir" style="display:block"><strong>' + esc(b.soru) + '</strong><br><span class="soluk">' + esc(b.not || "(not yok)") + " · " + tarihSaat(b.ts) + '</span></div>';
      }).join("") + '</div>';
    }
    $("#app").innerHTML = html;
  }

  // "Testi bitir"e basılmadan bırakılan test. Sonuçları henüz geçmişe (ve toplamlara) girmedi;
  // öğrenci testi bitirince ya da yeni bir teste geçince girer.
  function yarimKart() {
    var a = veri.aktif;
    if (!a || !a.sorular || !a.cevap || !Object.keys(a.cevap).length) return "";
    var d = 0, y = 0, isaretli = 0;
    a.sorular.forEach(function (id) {
      var q = soruBul(id), c = a.cevap[id];
      if (!q || c === undefined) return;
      isaretli++;
      if (c === q.dogru) d++; else y++;
    });
    var kb = KONU[a.konu];
    var ad = kb ? esc(kb.konu.ad) + " · " + (KADEME_AD[a.kademe] || "") : a.tur === "paragraf" ? "Günün paragrafı" : "Tekrar testi";
    return '<div class="kart yarim-kart"><h3>Yarım kalan test</h3>' +
      '<p><strong>' + ad + '</strong> · başladı ' + tarihSaat(a.basla) + (a.son ? " · son cevap " + once(a.son) : "") + '</p>' +
      '<div class="ozet">' + kutu(isaretli + " / " + a.sorular.length, "işaretli soru") + kutu(d, "doğru") + kutu(y, "yanlış") +
      kutu((Math.round((d - y / 3) * 100) / 100).toLocaleString("tr-TR"), "net") + kutu(dk(a.gecen || 0), "süre") + '</div>' +
      '<p class="soluk kucuk" style="margin:10px 0 0">“Testi bitir”e basılmadığı için bu sonuçlar aşağıdaki toplamlara henüz eklenmedi. ' +
      'Test bitince ya da yeni bir teste geçilince eklenir.</p></div>';
  }

  function gunlukGrafik(tum) {
    var gun = [], d = new Date(), enCok = 1, i;
    d.setHours(0, 0, 0, 0);
    for (i = 13; i >= 0; i--) {
      var x = new Date(d.getTime() - i * 86400000);
      gun.push({ k: gunKey(x), ad: x.getDate() + "." + (x.getMonth() + 1), hs: x.getDay() === 0 || x.getDay() === 6, soru: 0, d: 0 });
    }
    tum.forEach(function (t) {
      var k = gunKey(new Date(t.ts));
      gun.forEach(function (y) { if (y.k === k) { y.soru += t.d + t.y + t.b; y.d += t.d; } });
    });
    gun.forEach(function (y) { enCok = Math.max(enCok, y.soru); });
    var W = 560, H = 150, bw = W / 14, s = '<svg viewBox="0 0 ' + W + " " + (H + 40) + '" class="grafik">';
    gun.forEach(function (y, j) {
      var h = Math.round((y.soru / enCok) * H), cx = j * bw + bw / 2;
      if (y.soru) {
        s += '<rect x="' + (j * bw + 6) + '" y="' + (H - h + 16) + '" width="' + (bw - 12) + '" height="' + h + '" rx="5" class="cubuk-' + sinif(y.d / y.soru) + '"/>' +
          '<text x="' + cx + '" y="' + (H - h + 11) + '" text-anchor="middle" font-size="16">' + y.soru + '</text>';
      } else {
        s += '<rect x="' + (j * bw + 6) + '" y="' + (H + 13) + '" width="' + (bw - 12) + '" height="3" rx="1.5" class="cubuk-bos"/>';
      }
      s += '<text x="' + cx + '" y="' + (H + 34) + '" text-anchor="middle" font-size="14" class="' + (y.hs ? "hs" : "") + '">' + y.ad + '</text>';
    });
    return s + '</svg><p class="soluk kucuk orta" style="margin:6px 0 0">Çubuk: o gün ekranda gördüğü soru sayısı · renk: o günün doğruluğu</p>';
  }

  function hataAnalizi(g) {
    var hatalar = {}, neden = {}, nedenTop = 0;
    g.forEach(function (t) {
      t.sorular.forEach(function (id) {
        var q = soruBul(id), c = t.cevap[id];
        if (!q || c === undefined || c === q.dogru) return;
        var h = (q.hatalar || [])[c];
        if (h) hatalar[h] = (hatalar[h] || 0) + 1;
      });
      Object.keys(t.neden || {}).forEach(function (id) { neden[t.neden[id]] = (neden[t.neden[id]] || 0) + 1; nedenTop++; });
    });
    var liste = Object.keys(hatalar).sort(function (a, b) { return hatalar[b] - hatalar[a]; }).slice(0, 6);
    if (!liste.length && !nedenTop) return "";
    var html = '<h2>Hata analizi</h2><div class="kart">';
    if (nedenTop) {
      html += '<h3>Kendi söylediği yanlış sebepleri</h3><div class="neden-cubuklar">' +
        Object.keys(neden).sort(function (a, b) { return neden[b] - neden[a]; }).map(function (k) {
          return '<div class="nc"><span>' + (NEDEN_AD[k] || k) + '</span><span class="cubuk"><span style="width:' + yuzde(neden[k] / nedenTop) + '%"></span></span><strong>' + neden[k] + '</strong></div>';
        }).join("") + '</div>';
    }
    if (liste.length) {
      html += '<h3' + (nedenTop ? ' style="margin-top:18px"' : "") + '>Düştüğü tuzaklar</h3><ul class="duz-liste">' + liste.map(function (h) {
        return '<li>' + bicim(h) + (hatalar[h] > 1 ? ' <strong>(' + hatalar[h] + ' kez)</strong>' : "") + '</li>';
      }).join("") + '</ul>';
    }
    return html + '</div>';
  }

  function konuHaritasi() {
    var html = "";
    DERSLER.forEach(function (d) {
      var satirlar = "";
      d.uniteler.forEach(function (u) {
        u.konular.forEach(function (k) {
          var kd = veri.konuDurum[k.id], hp = veri.hap[k.id];
          if (!kd && !hp) return;
          // Konu özeti (hap bilgi) okuma kaydı: kaç kez, son okumada kaç dakika
          var ozetCip = hp ? '<span class="cip" title="Konu özetini ' + hp.kez + ' kez okudu, en son ' + tarihSaat(hp.son) + '">Özet · ' +
            (hp.sure ? dk(hp.sure) : "okundu") + (hp.kez > 1 ? " · " + hp.kez + " kez" : "") + '</span>' : "";
          satirlar += '<div class="kh-satir"><span class="kh-ad">' + esc(k.ad) + '</span><span class="kh-cipler">' + ozetCip + (kd ? [1, 2, 3].map(function (n) {
            var x = kd.k[n];
            return '<span class="rozet ' + (x ? sinif(x.enIyi) : "bos") + '" title="' + KADEME_AD[n] + (x ? " · " + x.deneme + " deneme" : "") + '">' +
              n + (x ? " · %" + yuzde(x.enIyi) : " · –") + '</span>';
          }).join("") : "") + '</span></div>';
        });
      });
      if (satirlar) html += '<h3 class="unite-baslik ders-' + d.id + '">' + App.ikon(d.id) + esc(d.ad) + '</h3><div class="kart">' + satirlar + '</div>';
    });
    return html ? '<h2>Konu haritası <span class="soluk kucuk">(her kademedeki en iyi sonuç)</span></h2>' + html : "";
  }

  function testListesi(g) {
    if (!g.length) return "";
    var html = '<h2>Çözülen testler</h2>';
    g.slice().reverse().forEach(function (t) {
      var kb = KONU[t.konu];
      html += '<details class="kart test-detay"><summary><span class="rozet ' + sinif(t.oran) + '">%' + yuzde(t.oran) + '</span>' +
        '<span class="ls-ad">' + (kb ? esc(kb.konu.ad) : t.tur === "paragraf" ? "Günün paragrafı" : "Tekrar testi") + ' <span class="soluk">· ' +
        (KADEME_AD[t.kademe] || (t.tur === "paragraf" ? "günlük rutin" : "karışık sorular")) + '</span>' +
        (t.yarim ? ' <span class="cip">yarıda bırakıldı</span>' : "") + '</span>' +
        '<span class="soluk kucuk">' + tarihSaat(t.ts) + '</span></summary>' +
        '<p class="soluk" style="margin:12px 0">' + t.d + " doğru · " + t.y + " yanlış · " + t.b + " boş · net " +
        (Math.round(t.net * 100) / 100).toLocaleString("tr-TR") + " · süre " + dk(t.sure) +
        (t.asim ? ' · <span class="kotu">' + dk(t.asim) + ' süre aşımı</span>' : t.sureDoldu ? " · süre doldu" : "") + '</p>';
      t.sorular.forEach(function (id, i) {
        var q = soruBul(id), c = t.cevap[id];
        if (!q || c === q.dogru) return;
        var bos = c === undefined;
        html += '<details class="yanlis-soru"><summary><strong>Soru ' + (i + 1) + '</strong> <span class="soluk kucuk">' + esc(q.kazanim) + " · düzey " + q.zorluk + '</span> ' +
          (bos ? '<span class="soluk">boş bıraktı</span>' : '<span class="kotu">' + HARFLER[c] + ' dedi</span>, doğrusu ' + HARFLER[q.dogru]) +
          (t.sureSoru && t.sureSoru[id] ? ' <span class="soluk kucuk">· ' + dk(t.sureSoru[id]) + '</span>' : "") +
          (t.neden && t.neden[id] ? ' <span class="cip">' + NEDEN_AD[t.neden[id]] + '</span>' : "") + '</summary>' +
          (!bos && q.hatalar && q.hatalar[c] ? '<div class="hata-kutu"><strong>Olası hata:</strong> ' + bicim(q.hatalar[c]) + '</div>' : "") +
          '<div class="soru-metin" style="margin-top:10px">' + bicim(q.soru) + '</div>' + (q.gorsel ? '<div class="gorsel">' + q.gorsel + '</div>' : "") +
          '<ol type="A" class="sik-liste">' + q.secenekler.map(function (s, j) {
            return '<li class="' + (j === q.dogru ? "iyi-yazi" : j === c ? "kotu" : "") + '">' + bicim(s) + '</li>';
          }).join("") + '</ol></details>';
      });
      html += '</details>';
    });
    return html;
  }

  function donemSec(k) { donem = k; ciz(); }

  return { yukle: yukle, donemSec: donemSec, adresSor: adresSor, adresKaydet: adresKaydet };
})();
