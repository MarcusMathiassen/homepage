/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/service-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/node_modules/@sapper/service-worker.js":
/*!****************************************************!*\
  !*** ./src/node_modules/@sapper/service-worker.js ***!
  \****************************************************/
/*! exports provided: timestamp, files, assets, shell, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestamp\", function() { return timestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"files\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shell\", function() { return shell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n// This file is generated by Sapper — do not edit it!\nconst timestamp = 1567810298049;\n\nconst files = [\n\t\"service-worker-index.html\",\n\t\"avatar.png\",\n\t\"avatar_pixelated.jpg\",\n\t\"favicon.ico\",\n\t\"manifest.json\",\n\t\"pxplus_ibm_vga8-webfont.woff\",\n\t\"pxplus_ibm_vga8-webfont.woff2\"\n];\n // legacy\n\nconst shell = [\n\t\"client/bb75862ac334c237778e/0.0.js\",\n\t\"client/bb75862ac334c237778e/about.about.js\",\n\t\"client/bb75862ac334c237778e/blog.blog.js\",\n\t\"client/bb75862ac334c237778e/blog_$slug.blog_$slug.js\",\n\t\"client/bb75862ac334c237778e/index.index.js\",\n\t\"client/bb75862ac334c237778e/index~projects.index~projects.js\",\n\t\"client/bb75862ac334c237778e/main.js\",\n\t\"client/bb75862ac334c237778e/projects.projects.js\",\n\t\"client/images/avatar.png\",\n\t\"client/images/avatar_pixelated.jpg\",\n\t\"client/resources/pxplus_ibm_vga8-webfont.1212fc0a68b70402b6c989ea88850067.woff\",\n\t\"client/resources/pxplus_ibm_vga8-webfont.d44be7ec8dedd096488f92a0da6546d0.woff2\"\n];\n\nconst routes = [\n\t{ pattern: /^\\/$/ },\n\t{ pattern: /^\\/projects\\/?$/ },\n\t{ pattern: /^\\/about\\/?$/ },\n\t{ pattern: /^\\/blog\\/?$/ },\n\t{ pattern: /^\\/blog\\/([^\\/]+?)\\/?$/ }\n];\n\n//# sourceURL=webpack:///./src/node_modules/@sapper/service-worker.js?");

/***/ }),

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/service-worker */ \"./src/node_modules/@sapper/service-worker.js\");\n\n\nconst ASSETS = `cache${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`;\n\n// `shell` is an array of all the files generated by the bundler,\n// `files` is an array of everything in the `static` directory\nconst to_cache = _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"shell\"].concat(_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"files\"]);\nconst cached = new Set(to_cache);\n\nself.addEventListener(\"install\", event => {\n  event.waitUntil(\n    caches\n      .open(ASSETS)\n      .then(cache => cache.addAll(to_cache))\n      .then(() => {\n        self.skipWaiting();\n      })\n  );\n});\n\nself.addEventListener(\"activate\", event => {\n  event.waitUntil(\n    caches.keys().then(async keys => {\n      // delete old caches\n      for (const key of keys) {\n        if (key !== ASSETS) await caches.delete(key);\n      }\n\n      self.clients.claim();\n    })\n  );\n});\n\nself.addEventListener(\"fetch\", event => {\n  if (event.request.method !== \"GET\" || event.request.headers.has(\"range\"))\n    return;\n\n  const url = new URL(event.request.url);\n\n  // don't try to handle e.g. data: URIs\n  if (!url.protocol.startsWith(\"http\")) return;\n\n  // ignore dev server requests\n  if (\n    url.hostname === self.location.hostname &&\n    url.port !== self.location.port\n  )\n    return;\n\n  // always serve static files and bundler-generated assets from cache\n  if (url.host === self.location.host && cached.has(url.pathname)) {\n    event.respondWith(caches.match(event.request));\n    return;\n  }\n\n  // for pages, you might want to serve a shell `service-worker-index.html` file,\n  // which Sapper has generated for you. It's not right for every\n  // app, but if it's right for yours then uncomment this section\n  /*\n\tif (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {\n\t\tevent.respondWith(caches.match('/service-worker-index.html'));\n\t\treturn;\n\t}\n\t*/\n\n  if (event.request.cache === \"only-if-cached\") return;\n\n  // for everything else, try the network first, falling back to\n  // cache if the user is offline. (If the pages never change, you\n  // might prefer a cache-first approach to a network-first one.)\n  event.respondWith(\n    caches.open(`offline${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`).then(async cache => {\n      try {\n        const response = await fetch(event.request);\n        cache.put(event.request, response.clone());\n        return response;\n      } catch (err) {\n        const response = await cache.match(event.request);\n        if (response) return response;\n\n        throw err;\n      }\n    })\n  );\n});\n\n\n//# sourceURL=webpack:///./src/service-worker.js?");

/***/ })

/******/ });