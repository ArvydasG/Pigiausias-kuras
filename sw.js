const CACHE_NAME = 'kuro-kainos-v12'; // Versija atnaujinama, kad priverstų SW persikrauti
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './icon-192.png',
  './icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Instaliavimo metu iškart perimame kontrolę
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktyvavimo metu išvalome senas talpyklas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Ištrinama sena talpykla:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Tinklo pirmumo (Network First) strategija
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Jei gavome sėkmingą atsakymą, atnaujiname talpyklą
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Jei tinklo nėra, bandome grąžinti iš talpyklos
        return caches.match(event.request);
      })
  );
});
