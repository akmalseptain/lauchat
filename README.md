# LAUCHAT

Live: **https://akmalseptain.github.io/lauchat/**

Chat teks & video acak dengan orang asing. Satu file `index.html`, tanpa backend — matchmaking & signaling WebRTC via [Trystero](https://github.com/dmotriv/trystero), media P2P terenkripsi.

## Deploy

Hosting statis apa pun (GitHub Pages, Netlify, Vercel). Untuk GitHub Pages: Settings → Pages → Source: **GitHub Actions**, lalu workflow `.github/workflows/pages.yml` otomatis deploy tiap push ke `main`.

Kamera butuh konteks aman (HTTPS / localhost).

## Pakai

Buka URL yang sama di dua perangkat → klik "Chat teks" / "Chat video" → otomatis dipasangkan. `Esc` = skip ke orang berikutnya. Topik favorit = prioritas match.

## Catatan

- 18+, konten tidak dimoderasi.
- Jangan bagikan data pribadi.
