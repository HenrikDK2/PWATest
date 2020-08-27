import { registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute([
  { url: "/offline.html", revision: null },
  { url: "/", revision: null },
]);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({ cacheName: "Assets" })
);
registerRoute(/\.(?:html)$/, new StaleWhileRevalidate({ cacheName: "Markup" }));
registerRoute(/\.(?:js)$/, new StaleWhileRevalidate({ cacheName: "Javascript" }));
registerRoute(
  ({ request }) => request.destination === "json" || request.destination === "empty",
  new StaleWhileRevalidate({ cacheName: "Data" })
);
