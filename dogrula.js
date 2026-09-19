// Soru bankası doğrulama aracı.
// Kullanım: proje klasöründe  node dogrula.js
// Kontroller: sözdizimi, şema, id çakışması, manifest eksiği, biçimlendirme, şık dengesi, kopya/benzer soru.
"use strict";

var fs = require("fs");
var path = require("path");

global.window = {};
var dir = path.join(__dirname, "sorular");
var hata = 0, uyari = 0;
var HARFLER = ["A", "B", "C", "D"];

function sorun(mesaj) { console.log("  ❌ " + mesaj); hata++; }
function dikkat(mesaj) { console.log("  ⚠️  " + mesaj); uyari++; }

// 1) Konu ağacı ve manifest
try {
  require(path.join(__dirname, "js", "konular.js"));
  require(path.join(dir, "manifest.js"));
} catch (e) {
  console.log("❌ konular.js ya da manifest.js yüklenemedi: " + e.message);
  process.exit(1);
}
var KONU = {}, RUTIN = {}; // konuId → ders · rutin konularda kademeli test yoktur
(window.LGS_KONULAR || []).forEach(function (d) {
  d.uniteler.forEach(function (u) {
    u.konular.forEach(function (k) {
      if (KONU[k.id]) sorun("konular.js: konu id TEKRAR ediyor: " + k.id);
      KONU[k.id] = d;
      if (k.rutin) RUTIN[k.id] = true;
    });
  });
});
var manifest = window.LGS_MANIFEST || [];
console.log("Manifest'te " + manifest.length + " dosya kayıtlı.\n");

// 2) Dosyaları yükle; her sorunun hangi dosyadan geldiğini izle
var dosyaSorulari = {}; // dosya → [soru]
manifest.forEach(function (f) {
  var p = path.join(dir, f);
  if (!fs.existsSync(p)) { sorun("Manifest'te var ama dosya yok: " + f); return; }
  var once = {};
  Object.keys(window.LGS_BANK || {}).forEach(function (k) { once[k] = window.LGS_BANK[k].length; });
  try { require(p); } catch (e) { sorun(f + " yüklenemedi (sözdizimi hatası olabilir): " + e.message); return; }
  dosyaSorulari[f] = [];
  Object.keys(window.LGS_BANK || {}).forEach(function (k) {
    dosyaSorulari[f] = dosyaSorulari[f].concat(window.LGS_BANK[k].slice(once[k] || 0));
  });
});
fs.readdirSync(dir).forEach(function (f) {
  if (f.slice(-3) === ".js" && f !== "manifest.js" && manifest.indexOf(f) === -1) {
    dikkat(f + " klasörde var ama manifest.js listesine eklenmemiş (program bu dosyayı görmez).");
  }
});

// 3) Şema
var ids = {}, toplam = 0;
var konular = Object.keys(window.LGS_BANK || {});
if (konular.length === 0) sorun("Hiç soru yüklenemedi.");

function bicimKontrol(kimlik, alan, s) {
  if (typeof s !== "string") return;
  var kalan = s.replace(/\^\{[^{}]*\}/g, "").replace(/_\{[^{}]*\}/g, "").replace(/√\{[^{}]*\}/g, "");
  if (/[{}]/.test(kalan)) sorun(kimlik + ": " + alan + " alanında kapanmamış ya da iç içe { } var");
  kalan = s.replace(/\[\[[^\[\]|]*\|[^\[\]|]*\]\]/g, "");
  if (/\[\[|\]\]/.test(kalan)) sorun(kimlik + ": " + alan + " alanında hatalı kesir yazımı ([[pay|payda]] olmalı)");
  if ((s.match(/\*\*/g) || []).length % 2) sorun(kimlik + ": " + alan + " alanında kapanmamış ** var");
  if ((s.match(/__/g) || []).length % 2) sorun(kimlik + ": " + alan + " alanında kapanmamış __ var");
}

konular.forEach(function (konuId) {
  var ders = KONU[konuId];
  if (!ders) sorun('"' + konuId + '" js/konular.js içinde tanımlı bir konu id\'si değil');
  var a = window.LGS_BANK[konuId];
  toplam += a.length;
  var kademeSay = { 0: 0, 1: 0, 2: 0, 3: 0 };

  a.forEach(function (q, i) {
    var kimlik = konuId + "[" + i + "]" + (q && q.id ? " (" + q.id + ")" : "");
    if (!q || typeof q !== "object") { sorun(kimlik + ": kayıt nesne değil"); return; }
    if (!q.id || typeof q.id !== "string") sorun(kimlik + ": id eksik");
    else if (ids[q.id]) sorun(q.id + ": id TEKRAR ediyor");
    else {
      ids[q.id] = konuId;
      if (ders && q.id.indexOf(ders.onek + "-") !== 0) sorun(kimlik + ': id "' + ders.onek + '-" önekiyle başlamalı');
    }
    if (!q.kazanim || typeof q.kazanim !== "string") sorun(kimlik + ": kazanim eksik");
    if ([0, 1, 2, 3].indexOf(q.kademe) === -1) sorun(kimlik + ": kademe 0-3 arası sayı olmalı");
    else {
      kademeSay[q.kademe]++;
      // Rutin konularda her soru havuzdadır; eski kimlikler korunduğu için basamak uyuşmaz.
      if (!RUTIN[konuId] && q.id && /-\d{3}$/.test(q.id) && +q.id.slice(-3, -2) !== q.kademe) {
        dikkat(kimlik + ": id'nin yüzler basamağı kademeyle uyuşmuyor");
      }
    }
    if ([1, 2, 3, 4].indexOf(q.zorluk) === -1) sorun(kimlik + ": zorluk 1-4 arası sayı olmalı");
    if (!q.soru) sorun(kimlik + ": soru metni eksik");
    else if (q.soru.indexOf("**") === -1) dikkat(kimlik + ": soru kökü **kalın** yazılmamış");
    if (!Array.isArray(q.secenekler) || q.secenekler.length !== 4) sorun(kimlik + ": tam 4 şık olmalı");
    else {
      if (q.secenekler.some(function (s) { return !s || typeof s !== "string"; })) sorun(kimlik + ": boş ya da metin olmayan şık var");
      var gor = {};
      q.secenekler.forEach(function (s) {
        var n = String(s).replace(/\s+/g, " ").trim();
        if (gor[n]) sorun(kimlik + ": aynı şık iki kez geçiyor (" + n + ")");
        gor[n] = true;
      });
    }
    if (typeof q.dogru !== "number" || q.dogru < 0 || q.dogru > 3) sorun(kimlik + ": dogru 0-3 arası sayı olmalı (0=A … 3=D)");
    if (!Array.isArray(q.hatalar) || q.hatalar.length !== 4) sorun(kimlik + ": hatalar 4 elemanlı dizi olmalı");
    else q.hatalar.forEach(function (h, j) {
      if (j === q.dogru) { if (h !== null) sorun(kimlik + ": hatalar[" + j + "] doğru şık için null olmalı"); }
      else if (!h || typeof h !== "string") sorun(kimlik + ": hatalar[" + j + "] boş — her yanlış şıkkın hata açıklaması olmalı");
    });
    if (!q.aciklama) sorun(kimlik + ": aciklama eksik");
    else {
      var m = String(q.aciklama).trim().match(/Cevap ([A-D])\.?\s*$/);
      if (!m) dikkat(kimlik + ': aciklama "Cevap X." ile bitmiyor');
      else if (typeof q.dogru === "number" && m[1] !== HARFLER[q.dogru]) sorun(kimlik + ": aciklama \"Cevap " + m[1] + "\" diyor ama dogru alanı " + HARFLER[q.dogru] + " şıkkını gösteriyor");
    }
    if (q.gorsel !== null && q.gorsel !== undefined) {
      if (typeof q.gorsel !== "string") sorun(kimlik + ": gorsel null ya da HTML metni olmalı");
      else {
        if (/<script|onload=|onerror=|href=|<image|<img/i.test(q.gorsel)) sorun(kimlik + ": gorsel içinde script, dış kaynak ya da resim bağlantısı olamaz");
        if (/<svg/i.test(q.gorsel) && !/viewBox=/.test(q.gorsel)) sorun(kimlik + ": SVG'de viewBox eksik");
        if (/<svg[^>]*\s(width|height)=/i.test(q.gorsel)) dikkat(kimlik + ": SVG etiketinde width/height yazılmış (CSS ölçekler, kaldır)");
      }
    }
    ["soru", "aciklama"].forEach(function (alan) { bicimKontrol(kimlik, alan, q[alan]); });
    (q.secenekler || []).forEach(function (s, j) { bicimKontrol(kimlik, "secenekler[" + j + "]", s); });
    (q.hatalar || []).forEach(function (h, j) { bicimKontrol(kimlik, "hatalar[" + j + "]", h); });
  });

  console.log("  📚 " + konuId + ": " + a.length + " soru  (kademe 1/2/3: " +
    kademeSay[1] + "/" + kademeSay[2] + "/" + kademeSay[3] + ", havuz: " + kademeSay[0] + ")");
});

// 4) Doğru cevap konumu dengesi (dosya bazında)
console.log("\nŞık dengesi kontrolü yapılıyor…");
Object.keys(dosyaSorulari).forEach(function (f) {
  var a = dosyaSorulari[f];
  if (a.length < 8) return;
  var say = [0, 0, 0, 0], ardisik = 1;
  a.forEach(function (q, i) {
    if (typeof q.dogru === "number") say[q.dogru]++;
    if (i > 0 && q.dogru === a[i - 1].dogru) {
      ardisik++;
      if (ardisik === 4) dikkat(f + ": " + q.id + " civarında art arda 4 kez aynı doğru şık (" + HARFLER[q.dogru] + ")");
    } else ardisik = 1;
  });
  say.forEach(function (n, j) {
    var oran = n / a.length;
    if (oran > 0.4 || oran < 0.1) dikkat(f + ": doğru cevapların %" + Math.round(oran * 100) + "'i " + HARFLER[j] + " şıkkında (dengesiz)");
  });
  console.log("  " + f + ": A=" + say[0] + " B=" + say[1] + " C=" + say[2] + " D=" + say[3]);
});

// 5) Kopya / benzer soru tespiti (konu içinde)
console.log("\nKopya kontrolü yapılıyor…");
function normallestir(s) {
  return String(s).toLowerCase()
    .replace(/<[^>]*>/g, " ")
    .replace(/[^a-zçğıöşü0-9 ]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function kelimeSeti(s) {
  var set = {}, say = 0;
  normallestir(s).split(" ").forEach(function (w) {
    if ((w.length > 2 || /[0-9]/.test(w)) && !set[w]) { set[w] = true; say++; }
  });
  return { set: set, boyut: say };
}
function benzerlik(a, b) {
  var ortak = 0;
  for (var w in a.set) if (b.set[w]) ortak++;
  var birlesim = a.boyut + b.boyut - ortak;
  return birlesim === 0 ? 0 : ortak / birlesim;
}
var kopyaBulundu = false;
konular.forEach(function (konuId) {
  var kayitlar = window.LGS_BANK[konuId].map(function (q) {
    // Görsel de karşılaştırmaya girer: numaralı cümleli sorularda asıl metin orada durur,
    // soru kökü ise ("hangisi akışı bozmaktadır?") sorudan soruya aynıdır.
    var tamMetin = (q.soru || "") + " " + (q.gorsel || "") + " " +
      (Array.isArray(q.secenekler) ? q.secenekler.join(" ") : "");
    return { id: q.id, norm: normallestir(tamMetin), set: kelimeSeti(tamMetin) };
  });
  for (var i = 0; i < kayitlar.length; i++) {
    for (var j = i + 1; j < kayitlar.length; j++) {
      var A = kayitlar[i], B = kayitlar[j];
      if (A.norm && A.norm === B.norm) {
        sorun("KOPYA soru: " + A.id + " ile " + B.id + " birebir aynı içeriğe sahip.");
        kopyaBulundu = true;
      } else if (A.set.boyut >= 6 && B.set.boyut >= 6 && benzerlik(A.set, B.set) >= 0.8) {
        dikkat("Çok benzer sorular: " + A.id + " ile " + B.id + " (%" + Math.round(benzerlik(A.set, B.set) * 100) + " kelime örtüşmesi)");
        kopyaBulundu = true;
      }
    }
  }
});
if (!kopyaBulundu) console.log("  ✅ Kopya veya aşırı benzer soru bulunamadı.");

// 6) Endeks üretimi — yazar ajanlar tüm soru dosyalarını okumak yerine bu kompakt
// envanteri okur ve daha önce ne yazıldığını görür. Banka büyüdükçe kavramsal
// tekrarın önündeki tek pratik engel budur.
if (hata === 0) {
  var endeksDir = path.join(dir, "endeks");
  if (!fs.existsSync(endeksDir)) fs.mkdirSync(endeksDir);
  var kirp = function (s, n) {
    s = String(s).replace(/<[^>]*>/g, " ").replace(/\*\*|__/g, "").replace(/\s+/g, " ").trim();
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  };
  konular.forEach(function (konuId) {
    var satirlar = window.LGS_BANK[konuId].map(function (q) {
      return [q.id, q.kazanim, "z" + q.zorluk, "k" + q.kademe, kirp(q.soru, 130),
        "✓" + kirp(q.secenekler[q.dogru], 45)].join(" | ");
    });
    fs.writeFileSync(path.join(endeksDir, konuId + ".txt"), satirlar.join("\n") + "\n", "utf8");
  });
  console.log("🗂️  Endeks güncellendi: sorular/endeks/ (" + konular.length + " konu dosyası)");
}

console.log("");
if (hata > 0) {
  console.log("❌ " + hata + " hata" + (uyari > 0 ? ", " + uyari + " uyarı" : "") + " bulundu. Düzeltmeden yayımlama!");
  process.exit(1);
} else if (uyari > 0) {
  console.log("⚠️  Hata yok ama " + uyari + " uyarı var — TOPLAM " + toplam + " soru yüklendi. Uyarıları gözden geçir.");
} else {
  console.log("🎉 TOPLAM " + toplam + " soru — her şey geçerli.");
}
