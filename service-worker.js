/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["https://andyrichardson.github.io/cards/fonts/roboto-latin-100.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-100.woff2","987b84570ea69ee660455b8d5e91f5f1"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-100italic.woff","d704bb3d579b7d5e40880c75705c8a71"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-100italic.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-300.woff","a1471d1d6431c893582a5f6a250db3f9"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-300.woff2","55536c8e9e9a532651e3cf374f290ea3"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-300italic.woff","210a7c781f5a354a0e4985656ab456d9"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-300italic.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-400.woff","bafb105baeb22d965c70fe52ba6b49d9"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-400.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-400italic.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-400italic.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-500.woff","de8b7431b74642e830af4d4f4b513ec9"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-500.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-500italic.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-500italic.woff2","510dec37fa69fba39593e01a469ee018"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-700.woff","cf6613d1adf490972c557a8e318e0868"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-700.woff2","037d830416495def72b7881024c14b7b"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-700italic.woff","846d1890aee87fde5d8ced8eba360c3a"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-700italic.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-900.woff","8c2ade503b34e31430d6c98aa29a52a3"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-900.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-900italic.woff","bc833e725c137257c2c42a789845d82f"],["https://andyrichardson.github.io/cards/fonts/roboto-latin-900italic.woff2","7b770d6c53423deb1a8e49d3c9175184"],["https://andyrichardson.github.io/cards/images/club.svg","40a623e4446a5d6833cb01e84e218233"],["https://andyrichardson.github.io/cards/images/deck.svg","a8ea1bd17b7c83b6fcf4875cef06f211"],["https://andyrichardson.github.io/cards/images/diamond.svg","d3865baf96b2e4072398bd5f3166b233"],["https://andyrichardson.github.io/cards/images/heart.svg","777f755aaf7b30858b92a253f448a105"],["https://andyrichardson.github.io/cards/images/reset.svg","16c931a4912d1219ff04db4ffe5620c0"],["https://andyrichardson.github.io/cards/images/shuffle.svg","1042d866e12bad987df169bfd8624dd1"],["https://andyrichardson.github.io/cards/images/sort.svg","9237b85ef8356bea0ff58ea411dde2a3"],["https://andyrichardson.github.io/cards/images/spade.svg","dfcd03320529813566d2d25d79ccbc08"],["https://andyrichardson.github.io/cards/index.html","dc8665b0077b322d88722bb7324132c3"],["https://andyrichardson.github.io/cards/index.js","f24e1af574ae5d14b8877a20931e5f23"]];
var cacheName = 'sw-precache-v3-swcache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'https://andyrichardson.github.io/cards/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







