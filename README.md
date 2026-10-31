# LAUCHAT

Chat orang asing ala Omegle/OmeTV — satu file HTML, P2P tanpa server aplikasi.

Live: **https://akmalseptain.github.io/lauchat/**

Ketemu orang asing acak, ngobrol lewat teks atau video, main game bareng, atau bikin room privat buat ngajak teman. Semua koneksi langsung antar perangkat (P2P) — tidak ada server yang menyimpan percakapan.

## Pratinjau UI

Gambar di bawah adalah mockup buatan (bukan screenshot runtime), dibuat sesuai tampilan aplikasi.

| Beranda | Layar boot |
| --- | --- |
| <img src="docs/img/beranda.svg" alt="Beranda LAUCHAT" width="320"> | <img src="docs/img/boot.svg" alt="Layar boot terminal" width="320"> |

| Chat public | Room privat — Kuis 1001 |
| --- | --- |
| <img src="docs/img/chat-public.svg" alt="Chat public dengan video atas-bawah (default) dan chip lokasi" width="320"> | <img src="docs/img/room-quiz.svg" alt="Room privat dengan panel Kuis 1001" width="320"> |

| Mode spotlight | Panel game |
| --- | --- |
| <img src="docs/img/room-spotlight.svg" alt="Mode spotlight room privat" width="320"> | <img src="docs/img/games.svg" alt="Panel tic-tac-toe dan tebak angka" width="320"> |

## Fitur

### Matchmaking acak

- Bertemu orang asing acak yang sedang online, tanpa akun.
- Filter gender dua arah: pilih identitasmu dan yang kamu cari, sistem menyaring dua-duanya sebelum nyambung.
- Prioritas bahasa: pencocokan lebih suka lawan dengan bahasa yang sama, badge `EN ⇄ ID` menandai pasangan bilingual.
- Tags minat (mis. `mobil, kode, musik`) biar obrolan langsung nyambung.
- AI skip: wajah yang tidak terdeteksi bisa otomatis di-skip (opsional, pakai face-api di browser).

### Chat teks & video 1-on-1

- Tata letak video default atas-bawah ala OmeTV/Umingle: lawan di atas, kamu di bawah, keduanya sama besar; tombol siklus ke berdampingan (split) atau lawan besar + PiP.
- Gerbang konfirmasi 18+ saat pertama kali membuka situs.
- Tombol "Ajak teman": bagikan link via share sheet / tersalin otomatis.
- Bunyi saat ketemu lawan (bisa dimatikan).
- Blokir permanen: lawan yang diblokir tidak akan dipasangkan lagi.
- Suit batu-gunting-kertas bareng lawan — skor berjalan tiap ronde.
- Nonton bareng YouTube: tempel link, play/pause/posisi sinkron dua arah.
- Ejak suara persona: pidato partai, trailer Hollywood, anchor berita, sinden, robot, balita — pitch shift + reverb + vibrato + ring mod.
- Share layar: tampilkan layarmu ke lawan chat.
- Kirim gambar lewat chat, langsung P2P tanpa server.
- Terjemahan pesan sekali klik (MyMemory).
- Chip lokasi lawan: nama kota + jarak ±1 km, dengan kode negara.
- Typing indicator, tema gelap/terang, ikon lucide.

### Room privat

- Buat room dengan kode 4–8 karakter, share kodenya ke teman.
- Chat grup + video mesh: semua peserta saling terlihat.
- Tata letak video: default spotlight — satu video besar + thumbnail (klik thumbnail untuk tukar), bisa diganti ke mode grid.
- Kamera tiap orang bisa on/off sendiri.

### Games

Main bareng lawan chat atau di room privat:

- **Tebak Angka** — angka rahasia 1–100, saling menebak, petunjuk "besar, turun" / "kecil, naik".
- **Tic-tac-toe** — X/O sinkron dua sisi, giliran otomatis.
- **Kuis 1001** — 8 soal pilihan ganda, timer 16 detik per soal, skor real-time semua peserta. Jalan di room privat dan di chat public 1-on-1.

### Lain-lain

- **Layar boot terminal** — logo ASCII + urutan boot ala terminal, tap untuk skip.
- **Service worker anti-stale** — halaman selalu versi terbaru, tidak kena cache lama.
- **Penanda versi** — footer beranda menunjukkan versi build (mis. `v13`), gampang cek versi yang jalan di device.
- 18+, tanpa iklan, tanpa pelacakan.

## Teknis

- **Trystero** (topic nostr) untuk signaling P2P — tidak ada server aplikasi; relay publik hanya untuk salaman koneksi.
- **WebRTC** untuk video/audio/share layar; **TURN via Cloudflare Worker** sebagai fallback kandidat.
- Kirim gambar/gem state pakai chunk biner Trystero.
- Single-file `index.html` (semua UI + logika), plus `sw.js` untuk service worker.
- Ikon lucide, font Geist + Geist Mono, tema gelap default hitam pekat `#000000` (VT323 di layar boot & bendera pixel). UI tanpa kotak: input garis bawah, panel transparan. Ketiga font tertanam base64 di dalam file — tanpa dependensi Google Fonts, tetap tampil benar walau jaringan memblokir font CDN; VT323 versi penuh (karakter blok boot/bendera tidak ada di subset Google).

## Cara pakai

1. Buka https://akmalseptain.github.io/lauchat/
2. Isi nick, pilih gender/kriteria/bahasa, tulis tags (opsional).
3. Klik **Chat teks** atau **Chat video** — tunggu sampai ketemu orang asing.
4. Untuk room privat: tulis kode room, klik **Masuk** (atau **Buat** untuk bikin baru), share kode ke teman.
5. Saat chat: tombol **Kuis** untuk main kuis, **Layar** untuk share screen, ikon klip kirim gambar.

## Struktur repo

```
index.html   — seluruh aplikasi (UI + logika P2P + games)
sw.js        — service worker (anti-stale cache)
docs/img/    — mockup UI untuk dokumentasi
```

## Changelog

- **v7** — penanda versi build di footer (`APP_BUILD`).
- **v8** — bendera negara pixel 5x6 di chip lokasi (flagcdn, render ke blok berwarna).
- **v9** — toggle tata letak video chat 1-on-1: split ⇄ PiP.
- **v10** — room privat (kode, grup chat, video mesh) + game tebak angka, tic-tac-toe.
- **v11** — Kuis 1001 + share layar + kirim gambar.
- **v12** — Kuis 1001 bisa dimainkan di chat public; refactor state game.
- **v13** — perbaikan bug game (guard dua sisi, timer 16 detik, panel bisa dibuka ulang) + tata letak video room: grid ⇄ spotlight.
- **v14** — simplifikasi UI modern ala v0: Geist + Geist Mono di seluruh UI, input & kartu berbingkai radius, bubble pesan asimetris; tema inti zinc + hijau tetap, VT323 hanya boot & bendera pixel.
- **v15** — background gelap jadi hitam pekat #000000 (tanpa tone abu), bubble lawan #1c1c1f.
- **v16** — surface gelap transparan: kartu, panel game, area pesan, dan input nyatu ke background hitam, hanya border 1px; light theme tetap kartu putih.
- **v17** — tanpa grid: input/kartu/panel borderless (garis bawah saja), tombol ghost jadi teks, video room default spotlight, opsi kuis pakai tint; papan tic-tac-toe tetap karena papan permainan.
- **v18** — bendera pixel 5x6 dikembalikan di chip lokasi.
- **v19** — font tertanam base64 (Geist, Geist Mono, VT323 penuh) — tanpa dependensi jaringan; memperbaiki boot logo/bendera yang bocor ke font fallback.
- **v20** — VT323 ke seluruh UI ala terminal (wordmark, hero, label, tombol, status, game, toast, footer); isi bubble chat & kolom ketik tetap Geist.
- **v21** — tata letak kamera atas-bawah (lawan atas, self bawah) ala Umingle/OmeTV jadi default; tombol siklus 3 mode: atas-bawah, berdampingan, PiP.
- **v22** — tata letak atas-bawah disamakan besar (1:1, ala Umingle asli) — bukan lawan dominan.
- **v23** — reset pilihan tata letak lama (sekali) — pengguna awal yang tersimpan mode split/PiP otomatis dapat default atas-bawah.
- **v24** — mode atas-bawah memakai proporsi 3/4 maks 400px di semua layar — kamera tidak terpotong di desktop.
- **v25** — gerbang 18+, tombol ajak teman (share), bunyi saat ketemu lawan (toggle), blokir permanen.
- **v26** — game suit batu-gunting-kertas 1-on-1 (skor berjalan).
- **v27** — nonton bareng YouTube (sinkronisasi dua arah, koreksi drift otomatis).
- **v28** — ejak suara persona (voice changer, AudioWorklet granular pitch shift).
- **v29** — perbaikan: kontrol bawah wrap anti tumpang tindih + pitch shifter 4-tap Hann (suara tidak kresek) + label preset pendek.

## Catatan

- 18+. Konten dari orang asing tidak dimoderasi — skip atau stop kapan saja.
- Tidak ada server yang menyimpan pesan/gambar/video; semuanya langsung antar perangkat. Relay nostr hanya untuk signaling, TURN hanya meneruskan media terenkripsi.
- Lokasi hanya selevel kota + jarak ±1 km, tidak pernah koordinat persis.
