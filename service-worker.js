"use strict";var precacheConfig=[["/acuityStudy2/index.html","5f6fa46092e2ede5b5286652e233b127"],["/acuityStudy2/static/css/main.c3c5a984.css","c3c5a9847ab111647ee7f80e84c1559a"],["/acuityStudy2/static/js/main.c28fede0.js","0cafd6f6c2b8ed12eeda88382a9d1d36"],["/acuityStudy2/static/media/SloanC.75342527.svg","75342527e04f751a0b84d2dd56a398ba"],["/acuityStudy2/static/media/SloanD.bfb5c1b7.svg","bfb5c1b7fd9f82d4f4e95b6ea1d73f30"],["/acuityStudy2/static/media/SloanE.1015b96a.svg","1015b96a63e1a96e7e4be633326d9bb2"],["/acuityStudy2/static/media/SloanH.58d5f84e.svg","58d5f84eb1238553a9f285f427cc9785"],["/acuityStudy2/static/media/SloanK.28495c85.svg","28495c85b1dd754be481eca777ba5936"],["/acuityStudy2/static/media/SloanL.fdaed715.svg","fdaed715207a5758dcb8a94a3fc282e9"],["/acuityStudy2/static/media/SloanN.de00417c.svg","de00417cf8359819a5aed2f917fc0b45"],["/acuityStudy2/static/media/SloanO.a387b9db.svg","a387b9db10a63418629bc804148970d8"],["/acuityStudy2/static/media/SloanP.ba587161.svg","ba5871616652280300f7c29311523482"],["/acuityStudy2/static/media/SloanR.b4e62fbc.svg","b4e62fbc0eb230784e9e50c73306b39a"],["/acuityStudy2/static/media/SloanS.5c07cec0.svg","5c07cec0917b44c90a4fd10d90cfcbed"],["/acuityStudy2/static/media/SloanT.50433c20.svg","50433c205dfde17a2dc3502441f34385"],["/acuityStudy2/static/media/SloanV.0a0c41a6.svg","0a0c41a623fed6e8ea8887b76444d377"],["/acuityStudy2/static/media/SloanX.29c1ccd0.svg","29c1ccd032d5409a6b0de3e5f2998b2d"],["/acuityStudy2/static/media/SloanZ.2cad66cd.svg","2cad66cd46619ee30b70acfac0bbe3be"],["/acuityStudy2/static/media/calibrationBar.09043936.svg","0904393661d2e6c2406441e5016ab5a1"],["/acuityStudy2/static/media/ding.2900bf8f.m4a","2900bf8fd32b629fbd97736eabbd4b34"],["/acuityStudy2/static/media/visionTest.631c78c7.svg","631c78c7b00105828b3b63287836ec20"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/acuityStudy2/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});