// Öğrencinin ilerlemesini buluttaki yedekten okur ve özetler.
// Kullanım: node otomasyon/veri-oku.js
//
// Apps Script adresi rapor/adres.txt dosyasından okunur. O dosya .gitignore'da;
// adres bir anahtardır ve depoya asla girmez.
//
// Bu araç YALNIZCA OKUR (GET ?islem=yedek). Buluta hiçbir şey yazmaz.
// Öğrencinin kişisel verisini diske YAZMAZ; yalnızca ekrana özet basar.
"use strict";

var fs = require("fs");
var path = require("path");
var https = require("https");

var KOK = path.join(__dirname, "..");
var ADRES_DOSYASI = path.join(KOK, "rapor", "adres.txt");

if (!fs.existsSync(ADRES_DOSYASI)) {
  console.log("rapor/adres.txt yok. Apps Script /exec adresini bu dosyaya tek satır olarak yaz.");
  process.exit(1);
}
var adres = fs.readFileSync(ADRES_DOSYASI, "utf8").trim().replace(/[?#].*$/, "");
if (!/^https:\/\/script\.google\.com\/.+\/exec$/.test(adres)) {
  console.log("rapor/adres.txt geçerli bir /exec adresi içermiyor.");
  process.exit(1);
}

// Apps Script /exec önce 302 ile googleusercontent.com'a yönlendirir.
function getir(url, kalan, bitti) {
  https.get(url, function (yanit) {
    if (yanit.statusCode >= 300 && yanit.statusCode < 400 && yanit.headers.location && kalan > 0) {
      yanit.resume();
      return getir(yanit.headers.location, kalan - 1, bitti);
    }
    var govde = "";
    yanit.setEncoding("utf8");
    yanit.on("data", function (p) { govde += p; });
    yanit.on("end", function () { bitti(null, yanit.statusCode, govde); });
  }).on("error", function (e) { bitti(e); });
}

// Soru bankasını yükle (soru → konu, zorluk, doğru cevap, hata etiketleri)
global.window = {};
require(path.join(KOK, "js", "konular.js"));
var manifest = JSON.parse(fs.readFileSync(path.join(KOK, "sorular", "manifest.js"), "utf8")
  .replace(/^[\s\S]*?\[/, "[").replace(/\];[\s\S]*$/, "]"));
manifest.forEach(function (f) { try { require(path.join(KOK, "sorular", f)); } catch (e) {} });
var SORU = {}, KONU_AD = {};
Object.keys(window.LGS_BANK || {}).forEach(function (k) {
  window.LGS_BANK[k].forEach(function (q) { SORU[q.id] = Object.assign({ konu: k }, q); });
});
window.LGS_KONULAR.forEach(function (d) {
  d.uniteler.forEach(function (u) { u.konular.forEach(function (k) { KONU_AD[k.id] = d.ad + " · " + k.ad; }); });
});

function al(veri, anahtar, varsayilan) {
  try { return JSON.parse(veri["lgs_" + anahtar]) || varsayilan; } catch (e) { return varsayilan; }
}
function tarih(ts) {
  return new Date(ts).toLocaleString("tr-TR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function yuzde(a, b) { return b ? Math.round(100 * a / b) + "%" : "–"; }

getir(adres + "?islem=yedek", 5, function (hata, durum, govde) {
  if (hata) { console.log("Bağlanılamadı: " + hata.message); process.exit(1); }
  var c;
  try { c = JSON.parse(govde); } catch (e) {
    console.log("Beklenmeyen cevap (HTTP " + durum + "). Adres yanlış olabilir ya da dağıtım 'Herkes' erişimli değil.");
    process.exit(1);
  }
  if (!c.ok || !c.yedek) {
    console.log(c.hata === "Yedek yok"
      ? "Bağlantı çalışıyor ama henüz hiç kayıt gelmemiş. Öğrenci en az bir test çözmüş olmalı."
      : "Sunucu hatası: " + (c.hata || "bilinmiyor"));
    process.exit(0);
  }

  var v = c.yedek.veri || {};
  var gecmis = al(v, "gecmis", []).slice().sort(function (a, b) { return a.ts - b.ts; });
  var yanlis = al(v, "yanlis", {});
  var bildirim = al(v, "bildirim", []);

  console.log("=== GENEL ===");
  console.log("Yedek tarihi      : " + tarih(c.yedek.ts));
  console.log("Çözülen test      : " + gecmis.length);
  if (!gecmis.length) return;
  var D = 0, Y = 0, B = 0, sure = 0, asim = 0, gunler = {};
  gecmis.forEach(function (g) {
    D += g.d; Y += g.y; B += g.b; sure += g.sure || 0; asim += g.asim || 0;
    gunler[new Date(g.ts).toISOString().slice(0, 10)] = 1;
  });
  console.log("Soru (D/Y/B)      : " + D + " / " + Y + " / " + B + "   doğruluk " + yuzde(D, D + Y + B) + "   net " + (D - Y / 3).toFixed(2));
  console.log("Çalışılan gün     : " + Object.keys(gunler).length + "   (ilk: " + tarih(gecmis[0].ts) + ", son: " + tarih(gecmis[gecmis.length - 1].ts) + ")");
  console.log("Toplam süre       : " + Math.round(sure / 60) + " dk" + (asim ? "   (hedef süre aşımı toplamı: " + Math.round(asim / 60) + " dk)" : ""));
  console.log("Yanlış defteri    : " + Object.keys(yanlis).length + " soru");

  console.log("\n=== TEST TÜRÜ VE KONU BAZINDA ===");
  var grup = {};
  gecmis.forEach(function (g) {
    var k = g.tur === "paragraf" ? "Günün paragrafı" : g.tur === "tekrar" ? "Tekrar testi" :
      (KONU_AD[g.konu] || g.konu) + " · kademe " + g.kademe;
    var x = grup[k] = grup[k] || { n: 0, d: 0, y: 0, b: 0 };
    x.n++; x.d += g.d; x.y += g.y; x.b += g.b;
  });
  Object.keys(grup).forEach(function (k) {
    var x = grup[k];
    console.log("  " + k.padEnd(56) + String(x.n).padStart(3) + " test   " +
      (x.d + "/" + x.y + "/" + x.b).padEnd(12) + yuzde(x.d, x.d + x.y + x.b));
  });

  // Soru bazında istatistik: kalibrasyon için (AJAN.md Kural 4)
  var ist = {};
  gecmis.forEach(function (g) {
    (g.sorular || []).forEach(function (id) {
      var q = SORU[id]; if (!q) return;
      var s = ist[id] = ist[id] || { gorulme: 0, dogru: 0, secim: [0, 0, 0, 0], sure: 0 };
      s.gorulme++;
      var c = (g.cevap || {})[id];
      if (c === q.dogru) s.dogru++;
      if (c !== undefined) s.secim[c]++;
      s.sure += (g.sureSoru || {})[id] || 0;
    });
  });

  console.log("\n=== ZORLUK KALİBRASYONU (etiket vs gerçek) ===");
  var z = {};
  Object.keys(ist).forEach(function (id) {
    var q = SORU[id], s = ist[id], k = z[q.zorluk] = z[q.zorluk] || { g: 0, d: 0, sure: 0 };
    k.g += s.gorulme; k.d += s.dogru; k.sure += s.sure;
  });
  [1, 2, 3, 4].forEach(function (d) {
    var k = z[d]; if (!k) return;
    console.log("  Düzey " + d + ": " + String(k.g).padStart(4) + " kez görüldü   doğru " + yuzde(k.d, k.g) +
      "   soru başı ort. " + Math.round(k.sure / k.g) + " sn");
  });

  console.log("\n=== EN ÇOK DÜŞÜLEN HATA YOLLARI ===");
  var hata = {};
  Object.keys(ist).forEach(function (id) {
    var q = SORU[id], s = ist[id];
    s.secim.forEach(function (n, i) {
      if (!n || i === q.dogru || !q.hatalar || !q.hatalar[i]) return;
      // Etiketler yazarlara göre farklı yazılmış ("**Ters yön**", "ters yön", "Neden–sonuç yönünü ters çevirme"); birleştir.
      var etiket = q.hatalar[i].split(":")[0].replace(/\*\*/g, "").trim().toLocaleLowerCase("tr-TR").slice(0, 70);
      if (/ters|yön/.test(etiket)) etiket = "ters yön (neden-sonuç / karşılaştırma yönü çevrilmiş)";
      hata[etiket] = (hata[etiket] || 0) + n;
    });
  });
  Object.keys(hata).sort(function (a, b) { return hata[b] - hata[a]; }).slice(0, 10)
    .forEach(function (h) { console.log("  " + String(hata[h]).padStart(3) + " × " + h); });

  var nedenler = {};
  gecmis.forEach(function (g) { Object.keys(g.neden || {}).forEach(function (id) { nedenler[g.neden[id]] = (nedenler[g.neden[id]] || 0) + 1; }); });
  if (Object.keys(nedenler).length) {
    console.log("\n=== KENDİ SÖYLEDİĞİ YANLIŞ SEBEPLERİ ===");
    Object.keys(nedenler).forEach(function (n) { console.log("  " + n.padEnd(10) + nedenler[n]); });
  }

  var tekrar = Object.keys(yanlis).filter(function (id) { return (yanlis[id].tekrar || 0) >= 1; });
  if (tekrar.length) {
    console.log("\n=== AYNI SORUYU TEKRAR YANLIŞ YAPTIKLARI ===");
    tekrar.forEach(function (id) {
      var q = SORU[id];
      console.log("  " + id.padEnd(14) + ((yanlis[id].tekrar || 0) + 1) + ". kez   " + (q ? (KONU_AD[q.konu] || q.konu) + " · " + q.kazanim : ""));
    });
  }

  if (bildirim.length) {
    console.log("\n=== SORU HATA BİLDİRİMLERİ ===");
    bildirim.forEach(function (b) { console.log("  " + b.soru + ": " + (b.not || "(not yok)")); });
  }
});
