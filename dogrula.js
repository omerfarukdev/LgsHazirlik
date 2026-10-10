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
// Konu soruları LGS_BANK'a, aylık deneme soruları LGS_DENEME'ye yazılır; ikisi de dosya bazında izlenir.
function tablolar() { return [window.LGS_BANK || {}, window.LGS_DENEME || {}]; }
manifest.forEach(function (f) {
  var p = path.join(dir, f);
  if (!fs.existsSync(p)) { sorun("Manifest'te var ama dosya yok: " + f); return; }
  var once = tablolar().map(function (t) {
    var o = {};
    Object.keys(t).forEach(function (k) { o[k] = t[k].length; });
    return o;
  });
  try { require(p); } catch (e) { sorun(f + " yüklenemedi (sözdizimi hatası olabilir): " + e.message); return; }
  dosyaSorulari[f] = [];
  tablolar().forEach(function (t, i) {
    Object.keys(t).forEach(function (k) {
      dosyaSorulari[f] = dosyaSorulari[f].concat(t[k].slice(once[i][k] || 0));
    });
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

// Konu sorusu da deneme sorusu da aynı kurallarla denetlenir: zorluk, kök, görsel, şıklar, hatalar, açıklama, biçim
function ortakDenetim(q, kimlik) {
  if ([1, 2, 3, 4].indexOf(q.zorluk) === -1) sorun(kimlik + ": zorluk 1-4 arası sayı olmalı");
  if (!q.soru) sorun(kimlik + ": soru metni eksik");
  else if (q.soru.indexOf("**") === -1) dikkat(kimlik + ": soru kökü **kalın** yazılmamış");
  // Görsel ham HTML olarak basılır; içindeki **, __, ^{…}, √{…}, [[…|…]] işaretleri ekranda düz yazı görünür.
  // (25 Eylül 2026: bir sorunun kökü görselin içine yazılmış, öğrenci yıldızlarıyla görecekti.)
  if (q.gorsel && /\*\*|__[^_]|\^\{|√\{|\[\[/.test(String(q.gorsel).replace(/<[^>]+>/g, " "))) {
    sorun(kimlik + ": görselin içinde soru biçim işareti var (**, __, ^{}, √{}, [[ ]]); görsel ham HTML basılır, bu işaretler düz yazı görünür. Kök ve metin 'soru' alanına yazılmalı.");
  }
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
}

konular.forEach(function (konuId) {
  var ders = KONU[konuId];
  if (!ders) sorun('"' + konuId + '" js/konular.js içinde tanımlı bir konu id\'si değil');
  var a = window.LGS_BANK[konuId];
  toplam += a.length;
  var kademeSay = { 0: 0, 1: 0, 2: 0, 3: 0 }, setSay = {};

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
    // Kademe: sıra 01-25 ana test, 26-75 yedek (kademe tekrarı). Sıra 75'i geçmez.
    if (q.kademe > 0 && q.id && /-\d{3}$/.test(q.id)) {
      var sira = +q.id.slice(-2), tur = q.kademe + (sira > 25 ? ".yedek" : ".ana");
      if (sira > 75) sorun(kimlik + ": kademe sorusunun sırası 75'i geçemez");
      setSay[tur] = (setSay[tur] || 0) + 1;
    }
    ortakDenetim(q, kimlik);
  });
  [1, 2, 3].forEach(function (k) {
    if (setSay[k + ".yedek"] && (setSay[k + ".ana"] || 0) < 25) dikkat(konuId + ": kademe " + k + " ana testinde " + (setSay[k + ".ana"] || 0) + " soru var ama yedek yazılmış (önce ana 25 tamamlanır)");
  });

  console.log("  📚 " + konuId + ": " + a.length + " soru  (kademe 1/2/3: " +
    kademeSay[1] + "/" + kademeSay[2] + "/" + kademeSay[3] + ", havuz: " + kademeSay[0] + ")" + ([1, 2, 3].some(function (k) { return setSay[k + ".yedek"]; }) ? "  yedek 1/2/3: " + [1, 2, 3].map(function (k) { return setSay[k + ".yedek"] || 0; }).join("/") : ""));
});

// 3b) Aylık deneme soruları (sorular/deneme-N-*.js → LGS_DENEME, bilgi: deneme-N.js → LGS_DENEME_BILGI).
// Konu havuzlarına girmezler; aynı şema geçerlidir, ayrıca ders ve konu alanı dolu ve tutarlı olmalı.
Object.keys(window.LGS_DENEME || {}).forEach(function (dId) {
  var a = window.LGS_DENEME[dId], bilgi = (window.LGS_DENEME_BILGI || {})[dId], dersSay = {};
  if (!bilgi) sorun(dId + ": deneme bilgisi yok (sorular/" + dId + ".js manifest'te olmalı)");
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(bilgi.acilis || "")) sorun(dId + ": açılış tarihi YYYY-AA-GG biçiminde olmalı");
  a.forEach(function (q, i) {
    var kimlik = dId + "[" + i + "]" + (q && q.id ? " (" + q.id + ")" : "");
    if (!q || typeof q !== "object") { sorun(kimlik + ": kayıt nesne değil"); return; }
    if (!q.id || typeof q.id !== "string") sorun(kimlik + ": id eksik");
    else if (ids[q.id]) sorun(q.id + ": id TEKRAR ediyor");
    else ids[q.id] = dId;
    if (!q.kazanim || typeof q.kazanim !== "string") sorun(kimlik + ": kazanim eksik");
    if (!KONU[q.konu]) sorun(kimlik + ': konu "' + q.konu + '" js/konular.js içinde yok');
    else if (KONU[q.konu].id !== q.ders) sorun(kimlik + ': ders "' + q.ders + '" konunun dersiyle (' + KONU[q.konu].id + ") uyuşmuyor");
    ortakDenetim(q, kimlik);
    dersSay[q.ders] = (dersSay[q.ders] || 0) + 1;
  });
  ((bilgi && bilgi.bankadan) || []).forEach(function (id) {
    if (!ids[id] || !window.LGS_BANK[ids[id]]) sorun(dId + ": bankadan seçilen " + id + " bankada yok");
    else { var d = KONU[ids[id]].id; dersSay[d] = (dersSay[d] || 0) + 1; }
  });
  toplam += a.length;
  console.log("  📝 " + dId + ": " + a.length + " yeni soru + " + ((bilgi && bilgi.bankadan) || []).length + " bankadan  (" +
    Object.keys(dersSay).map(function (d) { return d + " " + dersSay[d]; }).join(", ") + ")");
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
// Deneme soruları "tamamen yeni" olmalı: aynı konunun bankadaki sorularından birinin kopyası öğrenciye tanıdık gelir
Object.keys(window.LGS_DENEME || {}).forEach(function (dId) {
  window.LGS_DENEME[dId].forEach(function (q) {
    var metin = function (x) { return (x.soru || "") + " " + (x.gorsel || "") + " " + (Array.isArray(x.secenekler) ? x.secenekler.join(" ") : ""); };
    var A = { norm: normallestir(metin(q)), set: kelimeSeti(metin(q)) };
    ((window.LGS_BANK || {})[q.konu] || []).forEach(function (b) {
      var B = { norm: normallestir(metin(b)), set: kelimeSeti(metin(b)) };
      if (A.norm && A.norm === B.norm) { sorun("KOPYA: deneme sorusu " + q.id + " bankadaki " + b.id + " ile birebir aynı."); kopyaBulundu = true; }
      else if (A.set.boyut >= 6 && B.set.boyut >= 6 && benzerlik(A.set, B.set) >= 0.7) {
        dikkat("Deneme sorusu " + q.id + " bankadaki " + b.id + " ile çok benzer (%" + Math.round(benzerlik(A.set, B.set) * 100) + ")");
        kopyaBulundu = true;
      }
    });
  });
});
if (!kopyaBulundu) console.log("  ✅ Kopya veya aşırı benzer soru bulunamadı.");

// 5b) Konu özetleri (hap/): liste, şema, biçimlendirme, uzunluk
console.log("\nKonu özetleri kontrol ediliyor…");
var hapDir = path.join(__dirname, "hap");
var hapListe = [];
if (fs.existsSync(path.join(hapDir, "liste.js"))) {
  try { require(path.join(hapDir, "liste.js")); hapListe = window.LGS_HAP_LISTE || []; }
  catch (e) { sorun("hap/liste.js yüklenemedi: " + e.message); }
  fs.readdirSync(hapDir).forEach(function (f) {
    if (f.slice(-3) === ".js" && f !== "liste.js" && hapListe.indexOf(f) === -1) {
      dikkat("hap/" + f + " klasörde var ama hap/liste.js listesine eklenmemiş (program bu özeti görmez).");
    }
  });
}
function hapMetin(yer, s) {
  if (typeof s !== "string" || !s.trim()) { sorun(yer + ": boş ya da metin değil"); return ""; }
  if (/___/.test(s)) sorun(yer + ": '___' kullanılmış ('__' altı çizili demektir; boşluk için '- - - -')");
  if ((s.match(/\*\*/g) || []).length % 2) sorun(yer + ": kapanmamış '**'");
  if (/<\s*[a-z]/i.test(s)) dikkat(yer + ": HTML etiketi var; metin alanlarında HTML görünmez, düz yazı olarak basılır");
  return s;
}
hapListe.forEach(function (f) {
  var p = path.join(hapDir, f);
  if (!fs.existsSync(p)) { sorun("hap/liste.js'te var ama dosya yok: " + f); return; }
  var once = Object.keys(window.LGS_HAP || {});
  try { require(p); } catch (e) { sorun("hap/" + f + " yüklenemedi: " + e.message); return; }
  var yeni = Object.keys(window.LGS_HAP || {}).filter(function (k) { return once.indexOf(k) === -1; });
  if (yeni.length !== 1) { sorun("hap/" + f + ": tam bir konu özeti tanımlamalı (" + yeni.length + " tanımlıyor)"); return; }
  var id = yeni[0], h = window.LGS_HAP[id], yer = "hap/" + f, sozcuk = [];
  if (!KONU[id]) sorun(yer + ": konu id konular.js'te yok: " + id);
  if (f !== id + ".js") dikkat(yer + ": dosya adı konu id'siyle aynı olmalı (" + id + ".js)");
  if (!Array.isArray(h.kazanimlar) || !h.kazanimlar.length) sorun(yer + ": kazanimlar boş");
  sozcuk.push(hapMetin(yer + " giris", h.giris));
  if (!Array.isArray(h.bolumler) || h.bolumler.length < 3) sorun(yer + ": en az 3 bölüm olmalı");
  (h.bolumler || []).forEach(function (b, i) {
    var by = yer + " bölüm " + (i + 1);
    hapMetin(by + " başlık", b.baslik);
    if (!Array.isArray(b.maddeler) || !b.maddeler.length) sorun(by + ": maddeler boş");
    ["maddeler", "ornekler", "dikkat"].forEach(function (alan) {
      if (b[alan] !== undefined && !Array.isArray(b[alan])) sorun(by + ": " + alan + " dizi olmalı");
      (b[alan] || []).forEach(function (m, j) { sozcuk.push(hapMetin(by + " " + alan + "[" + j + "]", m)); });
    });
    if (b.tablo !== undefined && b.tablo !== null) {
      if (!/^<table class="tablo">/.test(b.tablo)) sorun(by + ": tablo '<table class=\"tablo\">' ile başlamalı");
      if (/<script|on[a-z]+=/i.test(b.tablo)) sorun(by + ": tabloda betik ya da olay özniteliği var");
      sozcuk.push(b.tablo.replace(/<[^>]+>/g, " "));
    }
  });
  if (!Array.isArray(h.lgs) || h.lgs.length < 2) sorun(yer + ": 'lgs' (sınavda nasıl sorulur) en az 2 madde olmalı");
  (h.lgs || []).forEach(function (m, j) { sozcuk.push(hapMetin(yer + " lgs[" + j + "]", m)); });
  if (!Array.isArray(h.yokla) || h.yokla.length < 3) sorun(yer + ": 'yokla' en az 3 soru olmalı");
  (h.yokla || []).forEach(function (y, j) {
    sozcuk.push(hapMetin(yer + " yokla[" + j + "].soru", y && y.soru), hapMetin(yer + " yokla[" + j + "].cevap", y && y.cevap));
  });
  var n = sozcuk.join(" ").split(/\s+/).filter(Boolean).length;
  if (n < 400 || n > 1800) dikkat(yer + ": " + n + " sözcük (hedef 600-1400; okuma 5-10 dakika)");
  console.log("  " + yer + ": " + (h.bolumler || []).length + " bölüm, " + n + " sözcük");
});
var ozetsiz = konular.filter(function (k) { return !(window.LGS_HAP || {})[k]; });
if (ozetsiz.length) console.log("  ℹ️  Özeti olmayan konular: " + ozetsiz.join(", "));

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
