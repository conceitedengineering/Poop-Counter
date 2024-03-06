self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('pooptracker').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/PWAScript/manifest.json',
        // Add other files you want to cache
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pooptracker').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/script.js',
      // Add other files you want to cache
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
  