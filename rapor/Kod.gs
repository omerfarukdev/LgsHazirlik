/**
 * LGS Hazırlık — rapor altyapısı (Google Apps Script)
 *
 * Bu betik bir Google E-Tablosuna bağlı çalışır:
 *   - Uygulamadan gelen test sonuçlarını tabloya yazar,
 *   - öğrencinin ilerlemesinin tam kopyasını tutar; ilerleme paneli (panel.html) bu kopyayı okur,
 *     aynı kopya öğrencinin bilgisayarında veri silinirse yedek olarak geri yüklenir,
 *   - istenirse (MAIL_RAPORU = true) haftalık ve aylık raporu ayrıca mail atar.
 * Kurulum adımları: rapor/KURULUM.md
 */

// ---------------- Ayarlar ----------------
var MAIL_RAPORU = false;          // true yapıp kurulum() işlevini yeniden çalıştırırsan Pazar 20.00 ve ayın 1'i 09.00'da mail de gelir.
var RAPOR_ADRESI = "";            // Boş bırakılırsa mail bu Google hesabının kendi adresine gider.
var OGRENCI_ADI = "";             // Raporlarda görünecek ad (boş bırakılabilir).
var SAAT_DILIMI = "Europe/Istanbul";

var SAYFALAR = {
  Testler: ["kimlik", "Tarih", "Ders", "Konu", "Tür", "Kademe", "Doğru", "Yanlış", "Boş", "Net", "Başarı %", "Süre (sn)", "Süre doldu", "zaman", "Ayrıntı (JSON)"],
  Nedenler: ["kimlik", "Tarih", "Test zamanı", "Soru", "Neden"],
  Bildirimler: ["kimlik", "Tarih", "Soru", "Not"],
  Yedek: ["Parça"]
};
var NEDEN_ADLARI = { bilgi: "Bilmiyordum", okuma: "Yanlış okudum", islem: "İşlem hatası", sure: "Aceleye geldi", tahmin: "Tahmin ettim" };

// ---------------- Kurulum (bir kez elle çalıştırılır) ----------------
function kurulum() {
  var tablo = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(SAYFALAR).forEach(function (ad) {
    var s = tablo.getSheetByName(ad) || tablo.insertSheet(ad);
    if (s.getLastRow() === 0) {
      s.appendRow(SAYFALAR[ad]);
      s.getRange(1, 1, 1, SAYFALAR[ad].length).setFontWeight("bold");
      s.setFrozenRows(1);
    }
  });
  var bos = tablo.getSheetByName("Sayfa1") || tablo.getSheetByName("Sheet1");
  if (bos && bos.getLastRow() === 0 && tablo.getSheets().length > 1) tablo.deleteSheet(bos);

  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (["haftalikRapor", "aylikRapor"].indexOf(t.getHandlerFunction()) !== -1) ScriptApp.deleteTrigger(t);
  });
  if (MAIL_RAPORU) {
    ScriptApp.newTrigger("haftalikRapor").timeBased().onWeekDay(ScriptApp.WeekDay.SUNDAY).atHour(20).inTimezone(SAAT_DILIMI).create();
    ScriptApp.newTrigger("aylikRapor").timeBased().onMonthDay(1).atHour(9).inTimezone(SAAT_DILIMI).create();
    mailGonder("LGS mail raporu açıldı ✓",
      "<p>Haftalık rapor her <b>Pazar 20.00</b>'de, aylık rapor her ayın <b>1'inde 09.00</b>'da bu adrese gelecek.</p>");
  }
}

// ---------------- Uygulamadan gelen istekler ----------------
function doPost(e) {
  var kilit = LockService.getScriptLock();
  try {
    kilit.waitLock(20000);
    var g = JSON.parse(e.postData.contents);
    if (g.tip === "ping") {
      // Bağlantı denemesi. Sayfalar yoksa kurulum() çalıştırılmamıştır; "çalışıyor" deyip
      // sonra kayıtları sessizce kaybetmemek için burada hata döndürülür.
      var tablo = SpreadsheetApp.getActiveSpreadsheet();
      var eksik = Object.keys(SAYFALAR).filter(function (ad) { return !tablo.getSheetByName(ad); });
      if (eksik.length) return cevap({ ok: false, hata: "Kurulum tamamlanmamış: " + eksik.join(", ") + " sayfası yok. Apps Script'te kurulum() işlevini çalıştır." });
    } else if (g.tip === "test") {
      testYaz(g);
    } else if (g.tip === "neden") {
      satirEkle("Nedenler", g.kimlik, [g.kimlik, tarihYaz(new Date()), g.veri.ts, g.veri.soru, g.veri.neden]);
    } else if (g.tip === "bildirim") {
      if (satirEkle("Bildirimler", g.kimlik, [g.kimlik, tarihYaz(new Date(g.veri.ts)), g.veri.soru, g.veri.not]) && MAIL_RAPORU) {
        mailGonder("LGS: soruda hata bildirimi (" + g.veri.soru + ")",
          "<p><b>Soru:</b> " + temizle(g.veri.soru) + "</p><p><b>Not:</b> " + temizle(g.veri.not || "(not yazılmadı)") + "</p>");
      }
    } else if (g.tip === "yedek") {
      var sonuc = yedekYaz(g.veri);
      if (!sonuc.ok) return cevap(sonuc);
    }
    return cevap({ ok: true });
  } catch (hata) {
    return cevap({ ok: false, hata: String(hata) });
  } finally {
    try { kilit.releaseLock(); } catch (h) {}
  }
}

function doGet(e) {
  if (e && e.parameter && e.parameter.islem === "yedek") {
    var kilit = LockService.getScriptLock();
    try {
      kilit.waitLock(20000); // yedek yazılırken okumayı önler
      var y = yedekOku();
      if (!y) return cevap({ ok: false, hata: "Yedek yok" });
      return cevap({ ok: true, yedek: y });
    } catch (hata) {
      return cevap({ ok: false, hata: String(hata) });
    } finally {
      try { kilit.releaseLock(); } catch (h) {}
    }
  }
  return cevap({ ok: true, mesaj: "LGS rapor sistemi çalışıyor." });
}

function cevap(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Aynı kayıt iki kez gelirse (bağlantı koptuğunda uygulama yeniden dener) ikinci kez yazılmaz.
function satirEkle(sayfaAdi, kimlik, satir) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sayfaAdi);
  var n = s.getLastRow() - 1;
  if (n > 0) {
    var kimlikler = s.getRange(2, 1, n, 1).getValues();
    for (var i = kimlikler.length - 1; i >= 0; i--) if (kimlikler[i][0] === kimlik) return false;
  }
  s.appendRow(satir);
  return true;
}

function testYaz(g) {
  var v = g.veri;
  satirEkle("Testler", g.kimlik, [
    g.kimlik, tarihYaz(new Date(v.ts)), v.dersAd || v.ders, v.konuAd || v.konu, v.tur, v.kademeAd || v.kademe,
    v.d, v.y, v.b, Math.round(v.net * 100) / 100, Math.round(v.oran * 100), v.sure, v.sureDoldu ? "evet" : "",
    v.ts, JSON.stringify({ yanlislar: v.yanlislar || [], sureSoru: v.sureSoru || {} })
  ]);
}

// Yedek okuma. Parçaların başındaki ' işareti, Sheets'in "=" ile başlayan bir parçayı
// formüle çevirmesini önlemek için konur; burada sökülür.
function yedekOku() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Yedek");
  var n = s ? s.getLastRow() - 1 : 0;
  if (n < 1) return null;
  var metin = s.getRange(2, 1, n, 1).getValues().map(function (r) {
    var p = String(r[0]);
    return p.charAt(0) === "'" ? p.slice(1) : p;
  }).join("");
  try { return JSON.parse(metin); } catch (h) { return null; }
}

// Yedek yazma. TEK geri yüklenebilir kopya budur; üstüne yazmadan önce korunur:
// boş bir kopya ya da mevcuttan eski bir kopya reddedilir.
function yedekYaz(yeni) {
  if (!yeni || !yeni.veri || !Object.keys(yeni.veri).length) {
    return { ok: false, hata: "Boş yedek reddedildi: buluttaki kopya korundu." };
  }
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Yedek");
  if (!s) return { ok: false, hata: "Yedek sayfası yok; kurulum() çalıştırılmamış." };

  var eski = yedekOku();
  if (eski) {
    if (Number(yeni.ts) < Number(eski.ts)) {
      return { ok: false, hata: "Daha eski yedek reddedildi: buluttaki kopya korundu." };
    }
    // Kayıt sayısı azalıyorsa (başka bir cihazdan gelen eksik kopya) üstüne yazma.
    var sayi = function (y) { try { return (JSON.parse(y.veri.lgs_gecmis) || []).length; } catch (h) { return 0; } };
    var yeniSayi = sayi(yeni), eskiSayi = sayi(eski);
    if (yeniSayi < eskiSayi) {
      return { ok: false, hata: "Daha az kayıt içeren yedek reddedildi (" + yeniSayi + " < " + eskiSayi + "): buluttaki kopya korundu." };
    }
  }

  var metin = JSON.stringify(yeni);
  var parcalar = [];
  for (var i = 0; i < metin.length; i += 40000) parcalar.push(["'" + metin.substr(i, 40000)]);
  if (s.getLastRow() > 1) s.getRange(2, 1, s.getLastRow() - 1, 1).clearContent();
  s.getRange(2, 1, parcalar.length, 1).setValues(parcalar);
  return { ok: true };
}

// ---------------- Raporlar ----------------
function haftalikRapor() {
  var bit = new Date();
  var bas = new Date(bit.getTime() - 7 * 86400000);
  var onceki = new Date(bas.getTime() - 7 * 86400000);
  raporGonder("Haftalık", bas, bit, onceki);
}

function aylikRapor() {
  var simdi = new Date();
  var bit = new Date(simdi.getFullYear(), simdi.getMonth(), 1);
  var bas = new Date(simdi.getFullYear(), simdi.getMonth() - 1, 1);
  var onceki = new Date(simdi.getFullYear(), simdi.getMonth() - 2, 1);
  raporGonder("Aylık", bas, bit, onceki);
}

function raporGonder(tur, bas, bit, oncekiBas) {
  var testler = testleriOku(bas, bit);
  var onceki = testleriOku(oncekiBas, bas);
  var aralik = Utilities.formatDate(bas, SAAT_DILIMI, "d MMM") + " – " + Utilities.formatDate(new Date(bit.getTime() - 1), SAAT_DILIMI, "d MMM yyyy");
  var baslik = "LGS " + tur + " Rapor" + (OGRENCI_ADI ? " · " + OGRENCI_ADI : "") + " · " + aralik;
  var html = "<h2 style='margin:0 0 4px'>" + baslik + "</h2>";

  if (!testler.length) {
    html += "<p style='font-size:16px'>⚠️ Bu dönemde <b>hiç test çözülmedi</b>.</p>" +
      (onceki.length ? "<p>Önceki dönemde " + onceki.length + " test çözülmüştü.</p>" : "");
    return mailGonder(baslik, html);
  }

  var o = ozetle(testler), oo = ozetle(onceki);
  html += "<table cellpadding='10' style='border-collapse:collapse;margin:12px 0'><tr>" +
    kutu(o.test, "test", oo.test, onceki.length) +
    kutu(o.soru, "çözülen soru", oo.soru, onceki.length) +
    kutu("%" + o.basari, "doğruluk", "%" + oo.basari, onceki.length) +
    kutu(o.gun, "çalışılan gün", oo.gun, onceki.length) +
    kutu(Math.round(o.sure / 60) + " dk", "toplam süre", Math.round(oo.sure / 60) + " dk", onceki.length) + "</tr></table>";

  html += "<h3>Ders ders</h3>" + tabloYap(["Ders", "Test", "Doğru", "Yanlış", "Boş", "Net", "Doğruluk"],
    grupla(testler, "ders").map(function (g) {
      return [g.ad, g.test, g.d, g.y, g.b, sayi(g.net), renkliYuzde(g.basari)];
    }));

  html += "<h3>Çözülen testler</h3>" + tabloYap(["Tarih", "Ders", "Konu", "Kademe", "D / Y / B", "Sonuç", "Süre"],
    testler.map(function (t) {
      return [Utilities.formatDate(t.tarih, SAAT_DILIMI, "d MMM HH:mm"), t.ders, t.konu, t.kademe,
        t.d + " / " + t.y + " / " + t.b, renkliYuzde(t.basari) + (t.sureDoldu ? " ⏰" : ""), Math.round(t.sure / 60) + " dk"];
    }));

  var zayif = grupla(testler, "konu").filter(function (g) { return g.basari < 70; })
    .sort(function (a, b) { return a.basari - b.basari; }).slice(0, 5);
  if (zayif.length) {
    html += "<h3>Üzerinde durulması gereken konular</h3><ul>" + zayif.map(function (g) {
      return "<li><b>" + temizle(g.ad) + "</b>: %" + g.basari + " (" + g.d + " doğru, " + g.y + " yanlış, " + g.b + " boş)</li>";
    }).join("") + "</ul>";
  }

  var hatalar = {};
  testler.forEach(function (t) {
    (t.yanlislar || []).forEach(function (y) { if (y.hata) hatalar[y.hata] = (hatalar[y.hata] || 0) + 1; });
  });
  var hataListe = Object.keys(hatalar).sort(function (a, b) { return hatalar[b] - hatalar[a]; }).slice(0, 6);
  if (hataListe.length) {
    html += "<h3>En sık düştüğü hatalar</h3><ul>" + hataListe.map(function (h) {
      return "<li>" + temizle(h) + (hatalar[h] > 1 ? " <b>(" + hatalar[h] + " kez)</b>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  var nedenler = nedenleriOku(bas, bit);
  if (nedenler.toplam) {
    html += "<h3>Kendi söylediği yanlış sebepleri</h3>" + tabloYap(["Sebep", "Adet"],
      Object.keys(nedenler.say).sort(function (a, b) { return nedenler.say[b] - nedenler.say[a]; })
        .map(function (k) { return [NEDEN_ADLARI[k] || k, nedenler.say[k]]; }));
  }

  var bildirimler = bildirimleriOku(bas, bit);
  if (bildirimler.length) {
    html += "<h3>Soru hata bildirimleri</h3><ul>" + bildirimler.map(function (b) {
      return "<li><b>" + temizle(b.soru) + "</b>: " + temizle(b.not || "(not yok)") + "</li>";
    }).join("") + "</ul>";
  }

  html += "<p style='color:#888;font-size:12px;margin-top:24px'>⏰ işareti: süre dolduğu için test kendiliğinden bitti. " +
    "Bütün ayrıntılar bu betiğin bağlı olduğu Google E-Tablosundadır.</p>";
  mailGonder(baslik, html);
}

// ---------------- Rapor yardımcıları ----------------
function testleriOku(bas, bit) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Testler");
  var n = s.getLastRow() - 1;
  if (n < 1) return [];
  return s.getRange(2, 1, n, SAYFALAR.Testler.length).getValues().map(function (r) {
    var ayrinti = {};
    try { ayrinti = JSON.parse(r[14] || "{}"); } catch (h) {}
    return {
      tarih: new Date(Number(r[13])), ders: r[2], konu: r[3], tur: r[4], kademe: r[5],
      d: Number(r[6]), y: Number(r[7]), b: Number(r[8]), net: Number(r[9]), basari: Number(r[10]),
      sure: Number(r[11]), sureDoldu: r[12] === "evet", yanlislar: ayrinti.yanlislar || []
    };
  }).filter(function (t) { return t.tarih >= bas && t.tarih < bit; })
    .sort(function (a, b) { return a.tarih - b.tarih; });
}

function nedenleriOku(bas, bit) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Nedenler");
  var n = s.getLastRow() - 1, son = {}, say = {}, toplam = 0;
  if (n < 1) return { say: say, toplam: 0 };
  s.getRange(2, 1, n, 5).getValues().forEach(function (r) {
    var t = new Date(Number(r[2]));
    if (t >= bas && t < bit) son[r[2] + "|" + r[3]] = r[4]; // aynı soru için son seçim geçerlidir
  });
  Object.keys(son).forEach(function (k) { say[son[k]] = (say[son[k]] || 0) + 1; toplam++; });
  return { say: say, toplam: toplam };
}

function bildirimleriOku(bas, bit) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bildirimler");
  var n = s.getLastRow() - 1;
  if (n < 1) return [];
  return s.getRange(2, 1, n, 4).getValues().map(function (r) {
    return { zaman: Number(String(r[0]).split("-")[1]), soru: r[2], not: r[3] };
  }).filter(function (b) { return b.zaman >= bas.getTime() && b.zaman < bit.getTime(); });
}

function ozetle(testler) {
  var o = { test: testler.length, d: 0, y: 0, b: 0, sure: 0, gun: 0, soru: 0, basari: 0 }, gunler = {};
  testler.forEach(function (t) {
    o.d += t.d; o.y += t.y; o.b += t.b; o.sure += t.sure;
    gunler[Utilities.formatDate(t.tarih, SAAT_DILIMI, "yyyy-MM-dd")] = true;
  });
  o.gun = Object.keys(gunler).length;
  o.soru = o.d + o.y;
  o.basari = (o.d + o.y + o.b) ? Math.round(100 * o.d / (o.d + o.y + o.b)) : 0;
  return o;
}

function grupla(testler, alan) {
  var g = {}, sira = [];
  testler.forEach(function (t) {
    var k = alan === "konu" ? t.ders + " · " + t.konu : t[alan];
    if (!g[k]) { g[k] = { ad: k, test: 0, d: 0, y: 0, b: 0, net: 0 }; sira.push(k); }
    g[k].test++; g[k].d += t.d; g[k].y += t.y; g[k].b += t.b; g[k].net += t.net;
  });
  return sira.map(function (k) {
    var x = g[k], top = x.d + x.y + x.b;
    x.basari = top ? Math.round(100 * x.d / top) : 0;
    return x;
  });
}

function kutu(deger, etiket, oncekiDeger, oncekiVar) {
  return "<td style='background:#f3f4fa;border-radius:10px;text-align:center;border:4px solid #fff'>" +
    "<div style='font-size:22px;font-weight:bold'>" + deger + "</div><div style='font-size:12px;color:#666'>" + etiket + "</div>" +
    (oncekiVar ? "<div style='font-size:11px;color:#999'>önceki: " + oncekiDeger + "</div>" : "") + "</td>";
}

function tabloYap(basliklar, satirlar) {
  var h = "<table cellpadding='7' style='border-collapse:collapse;font-size:14px'><tr>" + basliklar.map(function (b) {
    return "<th style='background:#4f46e5;color:#fff;text-align:left'>" + b + "</th>";
  }).join("") + "</tr>";
  satirlar.forEach(function (r, i) {
    h += "<tr style='background:" + (i % 2 ? "#f7f8fc" : "#fff") + "'>" + r.map(function (c) {
      return "<td style='border-bottom:1px solid #e5e7f0'>" + (typeof c === "string" && c.indexOf("<") === 0 ? c : temizle(c)) + "</td>";
    }).join("") + "</tr>";
  });
  return h + "</table>";
}

function renkliYuzde(p) {
  var renk = p >= 80 ? "#16a34a" : p >= 60 ? "#d97706" : "#dc2626";
  return "<b style='color:" + renk + "'>%" + p + "</b>";
}

function sayi(n) { return String(Math.round(n * 100) / 100).replace(".", ","); }
function tarihYaz(d) { return Utilities.formatDate(d, SAAT_DILIMI, "dd.MM.yyyy HH:mm"); }
function temizle(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function mailGonder(konu, html) {
  MailApp.sendEmail({
    to: RAPOR_ADRESI || Session.getEffectiveUser().getEmail(),
    subject: konu,
    htmlBody: "<div style='font-family:Segoe UI,Arial,sans-serif;color:#1c2333;max-width:720px'>" + html + "</div>"
  });
}

// Denemek için: betik düzenleyicide bu işlevi seçip "Çalıştır"a basınca son 7 günün raporu hemen gelir.
function raporuSimdiDene() { haftalikRapor(); }
