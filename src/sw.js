importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

/**
 * Service worker using Workbox to help set rules for caching.
 * Workbox helps make it easy to store our website's file locally, on our users' devices.
 * Workbox can (1) make our site work offline and (2) improve load performance on repeat visits.
 * It can help to store and serve common files locally, rather from the network.
 * */

const workboxSW = new self.WorkboxSW({
  skipWaiting: true,
  clientsClaim: true,
});

workboxSW.precache([]);

// cache Google fonts
workboxSW.router.registerRoute(
  'https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20,
    },
    cacheableResponse: { statuses: [0, 200] },
  }),
);

// cache app images
// We want no more than 50 images in the cache. We check using a cache first strategy
workboxSW.router.registerRoute(
  /\.(?:png|gif|jpg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50,
    },
  }),
);

// cache index.html (main app page)
workboxSW.router.registerRoute(/index.html/, workboxSW.strategies.staleWhileRevalidate());
