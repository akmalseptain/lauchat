// LAUCHAT service worker — navigasi selalu diambil versi terbaru dari jaringan,
// jadi pengunjung tidak pernah dapat halaman basi. Offline: pakai cache terakhir.
const CACHE = 'lauchat-v1'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return
  e.respondWith(
    fetch(e.request, {cache: 'no-store'}).then(r => {
      const copy = r.clone()
      caches.open(CACHE).then(c => c.put(e.request, copy))
      return r
    }).catch(() => caches.match(e.request))
  )
})
