'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eac096ee15b95c89f5ce185d2bc16cf4",
"assets/assets/data/playerdt.json": "243b4a2be5cd920b86535c6883e16e74",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/images/add_circle.png": "0978be43c41aea9d1ac2e709b4ee7fa5",
"assets/assets/images/anim1/Scan0015.png": "01fa6bdc43dd72ca8adb8b7b6db0ed69",
"assets/assets/images/anim1/Scan0016.png": "25cd20fc3fad778e7caec68838c273f8",
"assets/assets/images/anim1/Scan0017.png": "2aa7a267e78e5fec6a1e9ca0722100c9",
"assets/assets/images/anim1/Scan0018.png": "e6da2cc0996e659cfd9674fbe57e0d8e",
"assets/assets/images/anim1/Scan0019.png": "5bfdb2a263ed2b1c7759e6453a04ca26",
"assets/assets/images/anim1/Scan0023.png": "d08fc50356b3d2f7bfa15483bb1b7798",
"assets/assets/images/anim1/Scan0024.png": "65fd90b50f6bd3470dea7a9e7a9ce9ab",
"assets/assets/images/anim1/Scan0025.png": "9c24c75b9b7b70f8308f5f33d27bc1af",
"assets/assets/images/anim1/Scan0026.png": "9333eec96db74612c8c791d9658a4b6a",
"assets/assets/images/anim1/Scan0027.png": "1e1c36b1f7c3eb0ff19389bf9370688f",
"assets/assets/images/anim1/Scan0028.png": "779d92d62cedd327889cc7cbb761a654",
"assets/assets/images/anim1/Scan0029.png": "8f6a9eacd79d3c45dc0a4b063f4004f5",
"assets/assets/images/anim1/Scan0030.png": "eb568a03feb4bac53d860d286661b1be",
"assets/assets/images/anim1/Scan0031.png": "36d450fb1affb06d37f661826634e9fa",
"assets/assets/images/anim1/Scan0032.png": "f70795586079956937f7b9776766835e",
"assets/assets/images/crea_bgMove.png.jpg": "d745d682fa67b1ed300aa1af2569547b",
"assets/assets/images/giraffe.jpg": "912b1cb8adb377843cda171e1e1293ab",
"assets/assets/images/hand-up-solid-24.png": "767e2296149cee6a8e6246cc6406d74c",
"assets/assets/images/login_image.png": "78b6046eaf013c0554016e28ef7912e9",
"assets/assets/images/panda.jpg": "a0b5436f2a2d739064f0c4094163d15a",
"assets/assets/images/panda.png": "94ea01abb7c815278131f5901e6efb57",
"assets/assets/images/pingouins.jpg": "125ff36093f84f605169b911436473da",
"assets/assets/images/REPLAYBUTTON.png": "38d3444c7c34aeea153574a5ea2d2efe",
"assets/assets/images/REPLAYFASTBUTTON.png": "74e62a72ebafc2ea0c196aa7a423a7ed",
"assets/assets/images/STARTBUTTON.png": "09e2ae228db462de31d5886909abf1bb",
"assets/assets/jsons/myGameExample.json": "6d47e31abc3455da455aaabd208c632d",
"assets/FontManifest.json": "de57a752d20567b010b7553e36a86fe9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6007dd24febb98f9d3c0d2a35b6c28fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0a90c33f6761ec211f8f728ec8ffd906",
"auth.html": "641eb099d07632db2937e4e1546cf161",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"cors.json": "72a0a758a5a9fee3897ea1d62a003055",
"favicon.png": "08c506220ec3e959f6ab2654dc88c103",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "77dc973da07daf154b55799eca58cdb2",
"icons/Icon-512.png": "cfc3104246e23cdf459e8ced2affc215",
"index.html": "3b43b0fbd72da1e1aa1a04d263491264",
"/": "3b43b0fbd72da1e1aa1a04d263491264",
"main.dart.js": "3ec86d262de36fc9c73ed89822aab687",
"manifest.json": "10f3211f9d18c33283830c339fb43627",
"splash/img/dark-1x.png": "251d7e3b558f84f477b577ecbdc072a5",
"splash/img/dark-2x.png": "65a349114e3bcbb4a864a746c29b7fff",
"splash/img/dark-3x.png": "689e0d7728a37932ce84b896a3308b29",
"splash/img/dark-4x.png": "c46bd4c0b627559919a86a7224bff87e",
"splash/img/light-1x.png": "251d7e3b558f84f477b577ecbdc072a5",
"splash/img/light-2x.png": "65a349114e3bcbb4a864a746c29b7fff",
"splash/img/light-3x.png": "689e0d7728a37932ce84b896a3308b29",
"splash/img/light-4x.png": "c46bd4c0b627559919a86a7224bff87e",
"splash/style.css": "b9e6289c47aa52959e85b1f56d758da1",
"version.json": "178a22739fa2f171af925bde64189371"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
