// Doğrulayıcı ajan için cevap anahtarı içermeyen ("kör") soru dosyası üretir.
// Kullanım: node otomasyon/kor.js sorular/<dosya>.js <cikti>.json
"use strict";
var fs = require("fs"), path = require("path");
global.window = {};
var dosya = process.argv[2], cikti = process.argv[3];
if (!dosya || !cikti) { console.log("Kullanım: node otomasyon/kor.js <soru dosyası> <çıktı.json>"); process.exit(1); }
require(path.resolve(dosya));
var out = [];
Object.keys(window.LGS_BANK).forEach(function (k) {
  window.LGS_BANK[k].forEach(function (q) {
    out.push({
      id: q.id, kazanim: q.kazanim, zorluk: q.zorluk, soru: q.soru, gorsel: q.gorsel,
      secenekler: { A: q.secenekler[0], B: q.secenekler[1], C: q.secenekler[2], D: q.secenekler[3] }
    });
  });
});
fs.writeFileSync(cikti, JSON.stringify(out, null, 2), "utf8");
console.log(out.length + " soru yazıldı → " + cikti);
