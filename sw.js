self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Enkel fetch – kan utökas med cache senare
  event.respondWith(fetch(event.request));
});
