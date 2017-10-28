var cacheName = 'v2';
var cacheFiles = [
'./',
'./index.html'
]

self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("FETCHED"));
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
  event.respondWith(new Response("ACTIVATED"));
});

window.onload = function{
notifyMe();
  location.reload();
}
function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('EI Chatroom', {
      icon: 'https://www.hostei.com/img/favicon.png',
      body: "你得到了一个新消息。",
        sound: "alert.mp3"
    });
    notification.onclick = function () {
      window.open("http://www.hostei.com/v/chatroom");      
    };
    
  }
}
