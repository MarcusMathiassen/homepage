!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["client/3a1f8b0f50c83a92ec1e/about.1.js","client/3a1f8b0f50c83a92ec1e/blog.2.js","client/3a1f8b0f50c83a92ec1e/blog_$slug.3.js","client/3a1f8b0f50c83a92ec1e/index.4.js","client/3a1f8b0f50c83a92ec1e/index~projects.0.js","client/3a1f8b0f50c83a92ec1e/main.js","client/3a1f8b0f50c83a92ec1e/projects.6.js","client/images/avatar.png","client/images/avatar_pixelated.jpg","client/resources/pxplus_ibm_vga8-webfont.1212fc0a68b70402b6c989ea88850067.woff","client/resources/pxplus_ibm_vga8-webfont.d44be7ec8dedd096488f92a0da6546d0.woff2"].concat(["service-worker-index.html","avatar.png","avatar_pixelated.jpg","favicon.ico","manifest.json","pxplus_ibm_vga8-webfont.woff","pxplus_ibm_vga8-webfont.woff2"]),c=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1567788244044").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1567788244044"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1567788244044").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const a=await t.match(e.request);if(a)return a;throw n}}))))})}]);