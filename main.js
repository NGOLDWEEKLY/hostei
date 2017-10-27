 <script>
 self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("Hello world!"));
});
  
  self.addEventListener('install', function(event) {
  event.waitUntil(
    fetchStuffAndInitDatabases()
  );
});

self.addEventListener('activate', function(event) {
  // You're good to go!
});
</script>
