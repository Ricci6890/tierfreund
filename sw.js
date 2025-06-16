self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tierfreund-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/minispiele.html',
        '/ballonspiel.html',
        '/memory.html',
        '/zahlen.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});