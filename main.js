var cacheName = 'v2';
var cacheFiles = [
'./',
'./index.html'
]

self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("Hello world!"));
});
  
  self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
    console.log("[ServiceWorker] Caching cacheFiles");
     return cache.addAll(cacheFiles);
    
    })
  );
});

self.addEventListener('activate', function(event) {
  // You're good to go!
});
