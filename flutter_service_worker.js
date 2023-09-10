'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b116b57625bb80f4dd80ba5d20fdbb19",
"splash/img/light-2x.png": "02d54a54a5fbb52ac4c22455afe23e8a",
"splash/img/dark-4x.png": "3ba3f28a5a0d8f54e43912d106ec08f4",
"splash/img/light-3x.png": "59cf82161e65df40c215041bd3f59515",
"splash/img/dark-3x.png": "c49e0b73c85de1c84c3a7121495e8117",
"splash/img/light-4x.png": "9b10ac6b48600dbb134d7fae899bdc9b",
"splash/img/dark-2x.png": "717c4eb749b31e606693898caf1821f7",
"splash/img/dark-1x.png": "0093b06038caccc83639c774837a35cc",
"splash/img/light-1x.png": "51de83ba156c9afe8457b5b12b574468",
"index.html": "c723f9a8ae663f50acc05986bc7a3929",
"/": "c723f9a8ae663f50acc05986bc7a3929",
"auth.html": "3e468e13518e03d7412aefcda6c0dcf0",
"CNAME": "eb04aee5613e9748c7344bf9a3b30ed8",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "282ae0fcc1aa623374d15764f9460958",
".well-known/assetlinks.json": "cf61715db40bd9a4cb6d304e30fde110",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"cors.json": "434eb804728f2a72969effd13fc48333",
"favicon.png": "b82113e3a4be6050416975a68534d5b6",
"_config.yml": "dc8fe32f8ea298553d3e80fa2759af45",
"icons/Icon-192.png": "398c16524a636abeb97ebc98bee6455e",
"icons/Icon-maskable-192.png": "398c16524a636abeb97ebc98bee6455e",
"icons/Icon-maskable-512.png": "a00952fc8973a750155bba558cfd35fc",
"icons/Icon-512.png": "a00952fc8973a750155bba558cfd35fc",
"manifest.json": "80c2027b9995e96173e28f9d73ddd8d1",
"termsofservice.html": "5015b4827ef10eed54d6d74921ac10e9",
"assets/AssetManifest.json": "09db81015016fab3ba768c8dd979b679",
"assets/NOTICES": "160c7ddc613a472400cb02331c989909",
"assets/FontManifest.json": "7d00b44267f319554bf0dd9ec41c82e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/social_login_buttons/lib/assets/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/2.0x/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/2.0x/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/packages/social_login_buttons/lib/assets/3.0x/microsoft-logo.png": "d00462accd7b9bc230de54830c4b47a1",
"assets/packages/social_login_buttons/lib/assets/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-black-logo.png": "fd557bc349d7b0ac2dc09bdf89903362",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-logo.png": "f3482792f84398f4879483d8d3159d54",
"assets/packages/social_login_buttons/lib/assets/3.0x/twitter-logo.png": "27294190740a30f2b76ee5257f39ad74",
"assets/packages/social_login_buttons/lib/assets/3.0x/github-logo.png": "93f12731517d2d6ad022935490d84e88",
"assets/packages/social_login_buttons/lib/assets/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "b4cbed2ecc20a7860b3167f196ad11b9",
"assets/fonts/MaterialIcons-Regular.otf": "93322752cceef5ab9e0232783cf43620",
"assets/assets/jsons/myGameExample.json": "9bfd1407ee0fb227e1c07805cd09b794",
"assets/assets/images/screw_hole.png": "325fe873dd1c95f3d081d066b1a75f7e",
"assets/assets/images/screw.png": "b14d29df49ab550ce81bba61192b1f34",
"assets/assets/images/crea_bgMove.png.jpg": "d745d682fa67b1ed300aa1af2569547b",
"assets/assets/images/banquise_logoWht.png": "9e48a3c07eef560bbce06511dd425271",
"assets/assets/images/logo_white_mask_transp.png": "5744aa35c1da8605e8ee1c2269d30c09",
"assets/assets/images/bqz-logo-full.png": "24123ec9d7759b0faee2d0f23cbcc3ec",
"assets/assets/images/black_back.png": "841452a9d76342357a406fc04b2e8fbf",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/BanquiseIcons.ttf": "a1ae4a27ea6f2e16a18e179f74e7cf1e",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/data/playerdt.json": "d861fb4c238ade074d8f75031062be28",
"assets/assets/animations/home_scroll_horizontal.json": "8fc68b4d95443cde7ed2b19aad914c8a",
"assets/assets/animations/liquidload.riv": "bdefa550c69a77cf222cb666d0b44e1b",
"assets/assets/animations/explosion_bg.riv": "7a29e1252947dd8629517336b126e69d",
"assets/assets/animations/new_file.riv": "1eb6b2a44e45e9bee6c249daa2c83c60",
"assets/assets/animations/banquiseloadtest1z.riv": "8a6102be7c78d5832f002792542ee03b",
"assets/assets/animations/simplecutload.riv": "41da914a4d62b6901c07fffaf4aa7905",
"assets/assets/animations/home_scroll_vertical.json": "a73cc2965fba033eb851ce2e808fd64e",
"assets/assets/animations/loading_animation.json": "f85944baf8ea4ebc888fa8b4cc600d08",
"privacy.html": "e6f35885186231061435216bdc782dd7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
