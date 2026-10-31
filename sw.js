// Saturday Smash: lets phones install the site as an app. Pages always come fresh from the network (never an old copy).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request.url, {cache: "no-store"}));
  else e.respondWith(fetch(e.request));
});
