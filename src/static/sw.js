const cacheName = "shell-content3";
const filesToCache = [
  "index.html",
  "/",
  "350x350",
  "posts",
  "App.js",
  "favicon.png",
  "offline.html",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      cacheNames.map((e) => {
        if (e !== cacheName) caches.delete(e);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return (
            response ||
            fetch(event.request).then(function (response) {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      })

      .catch(function () {
        return caches.match("/offline.html");
      })
  );
});
