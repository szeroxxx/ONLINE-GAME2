let CACHE_NAME = "codePwa";

var urlCache = [
  "/",
  //   "/my",
  //   "/recharge",
  //   "/invite",
  //   "/dashboard",
  //   "/assets/ballot.png",
  //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
  //   "static/js/bundle.js",
  //   "https://fonts.googleapis.com/css?family=Roboto:400,500",
  //   "https://cdn.syncfusion.com/ej2/material.css",
  //   "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  //   "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
  //   "https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap",
  //   "/assets/download.jpeg",
  //   "/assets/follow.png`",
  //   "/static/js/bundle.js",
  //   "/static/js/vendors~main.chunk.js",
  //   "/static/js/main.chunk.js",
  //   "/manifest.json",
  //   "/logo192.png",
  //   "/",
  //   "/static/media/logo.6ce24c58.svg",
  //   "/home",
  //   "article",
];

/// install service worker
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlCache);
    })
  );
});

// fetch cache data

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    console.log("offline");
    if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      event.waitUntil(
        this.registration.showNotification("modeNet", {
          body: "Offline",
          icon: "http://localhost:3000/logo192.png",
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        let fUrl = event.request.clone();
        fetch(fUrl);
      })
    );
  }
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheNames) {
            //
          })
          .map(function (cacheNames) {
            return caches.delete(cacheNames);
          })
      );
    })
  );
});
