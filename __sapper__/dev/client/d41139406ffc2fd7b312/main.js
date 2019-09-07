/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "d41139406ffc2fd7b312" + "/" + ({"about":"about","blog~index":"blog~index","blog":"blog","index":"index"}[chunkId]||chunkId) + "." + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "client/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../static/pxplus_ibm_vga8-webfont.woff2 */ "./static/pxplus_ibm_vga8-webfont.woff2"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../static/pxplus_ibm_vga8-webfont.woff */ "./static/pxplus_ibm_vga8-webfont.woff"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../static/avatar_pixelated.jpg */ "./static/avatar_pixelated.jpg"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../static/avatar.png */ "./static/avatar.png"));
// Module
exports.push([module.i, "/**\n *  SETTINGS\n */\n/**\n *  COMPONENTS\n */\n/**\n * Reset\n */\nhtml, body, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, hgroup, menu, nav, section, time, mark, audio, video {\n  background: transparent;\n  border: 0;\n  font-size: 100%;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nmain,\nnav,\nsection {\n  display: block; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\n/**\n *  MAIN RULES\n */\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  outline: none; }\n\nbody {\n  background-color: #fff;\n  min-height: 100%;\n  overflow-x: hidden;\n  position: relative; }\n\np {\n  font-weight: normal;\n  margin-bottom: 1.5em; }\n\nimg {\n  max-width: 100%; }\n\nstrong {\n  font-weight: 600; }\n\nul {\n  margin-bottom: 1em; }\n\nli {\n  list-style: none;\n  margin-bottom: 0.5em; }\n\n/**\n *  BACKGROUND\n */\n.bg-primary {\n  background-color: #03a9f4; }\n\n.bg-dark {\n  background-color: #18232f; }\n\n.bg-secondary {\n  background-color: #e91e63; }\n\n.bg-white {\n  background-color: #fff; }\n\n.bg-success {\n  background-color: #4caf50; }\n\n.bg-info {\n  background-color: #5bc0de; }\n\n.bg-warning {\n  background-color: #f0ad4e; }\n\n.bg-error {\n  background-color: #e74c3c; }\n\n.bg-gray {\n  background-color: #969da6; }\n\n.bg-gray-light {\n  background-color: #eceff1; }\n\n/**\n *  BORDER\n */\n.border {\n  border: 1px solid #d5d9db; }\n\n.border-bottom {\n  border-bottom: 1px solid #d5d9db; }\n\n.border-left {\n  border-left: 1px solid #d5d9db; }\n\n.border-right {\n  border-right: 1px solid #d5d9db; }\n\n.border-top {\n  border-top: 1px solid #d5d9db; }\n\n/**\n *  ALIGNERS\n */\n.aligner {\n  display: flex; }\n  .aligner--spaceBetween {\n    justify-content: space-between;\n    width: 100%; }\n  .aligner--spaceAround {\n    justify-content: space-around;\n    width: 100%; }\n  .aligner--centerVertical {\n    align-items: center; }\n  .aligner--centerHoritzontal {\n    justify-content: center; }\n  .aligner--contentStart {\n    justify-content: flex-start; }\n  .aligner--contentEnd {\n    justify-content: flex-end; }\n\n.aligner--itemTop {\n  align-self: flex-start; }\n\n.aligner--itemBottom {\n  align-self: flex-end; }\n\n.flex-grow,\n.aligner--grow {\n  flex-grow: 1; }\n\n/**\n *  FLOATS\n */\n.fleft {\n  float: left; }\n\n.fright {\n  float: right; }\n\n.clearfix ::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\n *  MARGINS\n */\n.m-xsmall {\n  margin: 4px; }\n\n.mb-xsmall {\n  margin-bottom: 4px; }\n\n.m-small {\n  margin: 8px; }\n\n.mb-small {\n  margin-bottom: 8px; }\n\n.m-medium {\n  margin: 16px; }\n\n.mb-medium {\n  margin-bottom: 16px; }\n\n.m-big {\n  margin: 36px; }\n\n.mb-big {\n  margin-bottom: 36px; }\n\n.m-huge {\n  margin: 48px; }\n\n.mb-huge {\n  margin-bottom: 48px; }\n\n.m-none {\n  margin: 0 !important; }\n\n/**\n *  PADDINGS\n */\n.p-small {\n  padding: 4px; }\n\n.pb-small {\n  padding-bottom: 4px; }\n\n.p-medium {\n  padding: 8px; }\n\n.pb-medium {\n  padding-bottom: 8px; }\n\n.p-big {\n  padding: 16px; }\n\n.pb-big {\n  padding-bottom: 16px; }\n\n.p-huge {\n  padding: 36px; }\n\n.pb-huge {\n  padding-bottom: 36px; }\n\n/**\n *  OTHERS\n */\n.no-wrap {\n  white-space: nowrap; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.opacity-low {\n  opacity: .5; }\n\n.rounded-corners {\n  border-radius: 5px; }\n\n.rounded {\n  border-radius: 100%; }\n\n/**\n * LAYOUT\n */\n.section {\n  padding-bottom: 36px;\n  padding-top: 36px; }\n  @media (min-width: 768px) {\n    .section {\n      padding-bottom: 72px;\n      padding-top: 72px; } }\n  .section + .section {\n    padding-top: 0; }\n\n.container {\n  background-color: transparent;\n  margin: 0 auto;\n  max-width: 1380px;\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .container {\n      padding-left: 24px;\n      padding-right: 24px; } }\n\n.container-medium {\n  margin: 0 auto;\n  max-width: 944px;\n  padding-left: 12px;\n  padding-right: 12px; }\n  @media (min-width: 768px) {\n    .container-medium {\n      padding-left: 24px;\n      padding-right: 24px; } }\n\n.container-small {\n  margin: 0 auto;\n  max-width: 400px;\n  padding-left: 12px;\n  padding-right: 12px; }\n  @media (min-width: 768px) {\n    .container-small {\n      padding-left: 24px;\n      padding-right: 24px; } }\n\n/**\n *  TYPOGRAPHY\n */\nbody {\n  color: #272727;\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5em; }\n\na {\n  color: #03a9f4;\n  text-decoration: none; }\n  a:hover {\n    color: rgba(3, 169, 244, 0.8); }\n  a:focus {\n    color: #03a9f4; }\n\n.text-huge, .text-big, .text-medium {\n  margin-bottom: 1em; }\n\n.text-huge {\n  font-size: 36px;\n  line-height: 1.3em; }\n\n.text-big {\n  font-size: 24px;\n  line-height: 1.3em; }\n\n.text-medium {\n  font-size: 16px;\n  line-height: 1.5em; }\n\n.text-small {\n  font-size: 12px;\n  line-height: 1.3em; }\n\n.text-body {\n  font-size: 16px;\n  line-height: 1.5em; }\n\n.text-primary {\n  color: #03a9f4; }\n\n.text-dark {\n  color: #18232f; }\n\n.text-secondary {\n  color: #e91e63; }\n\n.text-white {\n  color: #fff; }\n\n.text-success {\n  color: #4caf50; }\n\n.text-info {\n  color: #5bc0de; }\n\n.text-warning {\n  color: #f0ad4e; }\n\n.text-error {\n  color: #e74c3c; }\n\n.text-gray {\n  color: #969da6; }\n\n.text-gray-light {\n  color: #eceff1; }\n\n.text-light {\n  font-weight: 300; }\n\n.text-normal {\n  font-weight: 400; }\n\n.text-lineThrough {\n  text-decoration: line-through; }\n\n.text-italic {\n  font-style: italic; }\n\n.text-underline {\n  text-decoration: underline; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-withSubtitle {\n  margin-bottom: 0 !important; }\n  .text-withSubtitle + .text-huge,\n  .text-withSubtitle + .text-big,\n  .text-withSubtitle + .text-medium,\n  .text-withSubtitle + .text-small {\n    margin-top: .5em; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: 300; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.text-left {\n  text-align: left; }\n\n/**\n *  BADGE\n *\n *  Markup:\n *  -------\n *\n *  <ul>\n *    <li class=\"badge badge--primary\">Badge 1</li>\n *    <li class=\"badge badge--secondary badge--big\">Badge 1</li>\n *  </ul>\n *\n */\n.badge {\n  background-color: #eceff1;\n  border-radius: 3px;\n  color: #272727;\n  display: inline-block;\n  line-height: 1.2em;\n  padding: 8px 16px; }\n  .badge--big {\n    font-size: 1.3em; }\n  .badge--small {\n    font-size: 0.7em; }\n  .badge--primary {\n    background-color: #03a9f4;\n    color: #fff; }\n  .badge--secondary {\n    background-color: #e91e63;\n    color: #fff; }\n  .badge--dark {\n    background-color: #18232f;\n    color: #fff; }\n  .badge--light {\n    background-color: #969da6;\n    color: #fff; }\n  .badge--success {\n    background-color: #4caf50;\n    color: #fff; }\n  .badge--error {\n    background-color: #e74c3c;\n    color: #fff; }\n  .badge--warning {\n    background-color: #f0ad4e;\n    color: #fff; }\n\n/**\n *  BUTTON\n *\n *  Markup:\n *  -------\n *\n *  <button class=\"button\">Default</button>\n *  <button class=\"button button--big\">Button big</button>\n *  <button class=\"button button--secondary\">Button secondary</button>\n *\n */\nbutton {\n  background-color: transparent;\n  cursor: pointer; }\n\n.button {\n  background-color: #03a9f4;\n  border: 0;\n  border-radius: 200px;\n  color: #fff;\n  display: inline-block;\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5em;\n  margin: 0 8px 16px 8px;\n  padding: 8px 16px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: opacity .2s ease-in-out;\n  white-space: nowrap; }\n  .button:focus, .button:hover, .button:active {\n    color: #fff; }\n  .button:hover {\n    background-color: rgba(3, 169, 244, 0.8);\n    color: #fff;\n    cursor: pointer;\n    text-decoration: none; }\n  .button:active {\n    opacity: 1; }\n  .button:first-child {\n    margin-left: 0; }\n  .button:last-child {\n    margin-right: 0; }\n  .button--big {\n    font-size: 24px;\n    padding: 16px 36px; }\n  .button--small {\n    font-size: 12px;\n    padding: 4px 16px; }\n  @media (max-width: 991px) {\n    .button--mobileFull {\n      margin-left: 0;\n      margin-right: 0;\n      width: 100%; } }\n  .button--secondary {\n    background-color: #e91e63;\n    color: #fff; }\n    .button--secondary:hover {\n      background-color: rgba(233, 30, 99, 0.8);\n      color: #fff; }\n  .button--white {\n    background-color: #fff;\n    color: #03a9f4; }\n    .button--white:hover {\n      background-color: rgba(255, 255, 255, 0.8);\n      color: rgba(3, 169, 244, 0.8); }\n  .button--green {\n    background-color: #4caf50;\n    color: #fff; }\n    .button--green:hover {\n      background-color: rgba(76, 175, 80, 0.8);\n      color: #fff; }\n  .button--red {\n    background-color: #e74c3c;\n    color: #fff; }\n    .button--red:hover {\n      background-color: rgba(231, 76, 60, 0.8);\n      color: #fff; }\n  .button--transparent {\n    background-color: transparent;\n    color: #03a9f4; }\n    .button--transparent:active, .button--transparent:hover, .button--transparent:focus {\n      background-color: transparent;\n      color: rgba(3, 169, 244, 0.8);\n      opacity: .8; }\n  .button--outlined {\n    background-color: transparent;\n    border: 1px solid #d5d9db;\n    color: #03a9f4; }\n    .button--outlined:active, .button--outlined:hover, .button--outlined:focus {\n      background-color: transparent;\n      color: rgba(3, 169, 244, 0.8);\n      opacity: .8; }\n\n/**\n *  FORMS\n *\n *  Markup:\n *  ---------\n *  <div class=\"input input-fullWidth\">\n *    <input id=\"#\" placeholder=\"#\" type=\"text\">\n *  </div>\n *\n *  <div class=\"select select-fullWidth\">\n *    <select name=\"#\" id=\"#\">\n *      <option>Option 1</option>\n *      <option>Option 2</option>\n *    </select>\n *  </div>\n *\n *  <div class=\"textarea\">\n *    <textarea id=\"#\"></textarea>\n *  </div>\n *\n *  <div class=\"radio\">\n *    <input id=\"#\" name=\"#\" type=\"radio\" value=\"\">\n *    <label for=\"#\">Radio button</label>\n *  </div>\n *\n *  <div class=\"checkbox\">\n *    <input id=\"#\" name=\"#\" type=\"checkbox\" value=\"\">\n *    <label for=\"#\">Checkbox</label>\n *  </div>\n */\ninput,\ntextarea {\n  appearance: none; }\n\nlabel {\n  display: block;\n  font-weight: normal; }\n\ninput:-webkit-autofill {\n  box-shadow: 0 0 0 1000px #eceff1 inset; }\n\n.textarea,\n.input,\n.select {\n  border: 1px solid #d5d9db;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-block;\n  font-weight: normal;\n  margin-bottom: 20px;\n  overflow: hidden; }\n  .textarea :focus,\n  .input :focus,\n  .select :focus {\n    outline: none; }\n  .textarea.has-error,\n  .input.has-error,\n  .select.has-error {\n    background: #eceff1;\n    border: 1px solid #e74c3c;\n    margin-bottom: 0; }\n\n.select {\n  background-color: #eceff1;\n  display: inline-block;\n  margin-right: 16px;\n  position: relative; }\n  .select:last-child {\n    margin-right: 0; }\n  .select-fullWidth {\n    display: block;\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%; }\n  .select select {\n    appearance: none;\n    background-color: transparent;\n    border: 0;\n    border-radius: 0;\n    color: #272727;\n    display: block;\n    font-size: 16px;\n    line-height: 1.5em;\n    margin: 0;\n    padding: 8px 16px;\n    padding-right: 30px;\n    transition: background-color 0.2s ease-in-out;\n    width: 100%; }\n    .select select:active, .select select:focus {\n      background-color: #fbfbfc;\n      border: 0;\n      outline: none; }\n    .select select::-ms-expand {\n      display: none; }\n  .select::after, .select::before {\n    background: #03a9f4;\n    content: '';\n    display: block;\n    height: 2px;\n    margin-top: 2px;\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    transform-origin: 1px;\n    width: 10px; }\n  .select::after {\n    transform: rotate(-135deg); }\n  .select::before {\n    transform: rotate(-45deg); }\n\n.textarea {\n  background-color: #eceff1;\n  padding: 0; }\n  .textarea-fullWidth {\n    display: block;\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%; }\n  .textarea textarea {\n    background: transparent;\n    border: 0;\n    color: #272727;\n    display: block;\n    font-family: \"Lato\", sans-serif;\n    font-size: 16px;\n    line-height: 1.5em;\n    margin: 0;\n    min-height: 120px;\n    padding: 8px 16px;\n    transition: background-color 0.2s ease-in-out;\n    width: 100%; }\n    .textarea textarea::placeholder {\n      color: #969da6; }\n    .textarea textarea:focus, .textarea textarea:active {\n      background-color: #fbfbfc;\n      border: 0;\n      outline: none; }\n\n.checkbox {\n  margin-bottom: 8px;\n  position: relative; }\n  .checkbox input[type='checkbox'] {\n    display: none; }\n    .checkbox input[type='checkbox']:checked + label::after {\n      animation: checkboxAndRadioAnimation .25s;\n      content: '';\n      transform: scale(1) rotate(45deg); }\n    .checkbox input[type='checkbox'] + label {\n      display: block;\n      overflow: hidden;\n      padding-left: 30px;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n      .checkbox input[type='checkbox'] + label::before {\n        background-color: #eceff1;\n        border: 1px solid #d5d9db;\n        border-radius: 3px;\n        content: '';\n        display: inline-block;\n        height: 20px;\n        left: 0;\n        margin-top: -10px;\n        position: absolute;\n        top: 50%;\n        width: 20px; }\n      .checkbox input[type='checkbox'] + label::after {\n        border-bottom: 3px solid #03a9f4;\n        border-right: 3px solid #03a9f4;\n        display: block;\n        height: 12px;\n        left: 11px;\n        margin-left: -4px;\n        margin-top: -7px;\n        position: absolute;\n        top: 50%;\n        width: 7px;\n        z-index: 1; }\n\n.radio {\n  margin-bottom: 8px;\n  position: relative; }\n  .radio input[type='radio'] {\n    display: none; }\n    .radio input[type='radio']:checked + label::after {\n      animation: checkboxAndRadioAnimation .25s;\n      content: '';\n      transform: scale(1) rotate(45deg); }\n    .radio input[type='radio'] + label {\n      display: block;\n      overflow: hidden;\n      padding-left: 30px;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n      .radio input[type='radio'] + label::before {\n        background-color: #eceff1;\n        border: 1px solid #d5d9db;\n        border-radius: 20px;\n        content: '';\n        display: inline-block;\n        height: 20px;\n        left: 0;\n        margin-top: -10px;\n        position: absolute;\n        top: 50%;\n        width: 20px; }\n      .radio input[type='radio'] + label::after {\n        background-color: #03a9f4;\n        border-radius: 20px;\n        display: block;\n        height: 10px;\n        left: 11px;\n        margin-left: -6px;\n        margin-top: -6px;\n        position: absolute;\n        top: 13px;\n        width: 10px;\n        z-index: 1; }\n\n@keyframes checkboxAndRadioAnimation {\n  0% {\n    transform: scale(0) rotate(45deg); }\n  50% {\n    transform: scale(1.5) rotate(45deg); }\n  100% {\n    transform: scale(1) rotate(45deg); } }\n\n.input {\n  background-color: #eceff1;\n  margin-right: 10px;\n  padding: 0;\n  position: relative; }\n  .input :focus,\n  .input :active {\n    background-color: #fbfbfc;\n    border-radius: 3px; }\n  .input input {\n    background: transparent;\n    border: 0;\n    box-shadow: none;\n    color: #272727;\n    font-size: 16px;\n    line-height: 1.5em;\n    margin: 0;\n    outline: none;\n    padding: 8px 16px;\n    width: 100%; }\n    .input input::placeholder {\n      color: #969da6; }\n  .input-withIcon input {\n    padding-right: 32px; }\n  .input-icon {\n    fill: #969da6;\n    height: 16px;\n    margin-top: -8px;\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    width: 16px; }\n  .input-fullWidth {\n    display: block;\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%; }\n\n/**\n *  FORM COLLAPSED (items in row without gap between them)\n *\n *  Markup:\n *  -------\n *\n *  <div class=\"formCollapsed\">\n *    <div class=\"input formCollapsed-item formCollapsed-itemPrimary\">\n *      <input id=\"name\" placeholder=\"Klingon search\" type=\"text\" />\n *    </div>\n *    <div class=\"select formCollapsed-item\">\n *      <select name=\"country-code\" id=\"country-code\">\n *        <option value=\"AO\"> Angola</option>\n *      </select>\n *    </div>\n *    <button class=\"formCollapsed-item button button-primary\">\n *      Search\n *    </button>\n *  </div>\n **/\n.formCollapsed {\n  display: flex;\n  margin-bottom: 20px; }\n  .formCollapsed-item {\n    border-radius: 0 !important;\n    margin: 0 !important; }\n    .formCollapsed-item:first-child {\n      border-bottom-left-radius: 3px !important;\n      border-top-left-radius: 3px !important; }\n    .formCollapsed-item:last-child {\n      border-bottom-right-radius: 3px !important;\n      border-top-right-radius: 3px !important; }\n    .formCollapsed-item:not(:last-child) {\n      border-right: 0; }\n    .formCollapsed-itemPrimary {\n      flex: 1; }\n\n/**\n *  LOADING BAR\n *\n *  Markup:\n *  ---------\n *  <div class=\"loadingBar\"></div>\n *\n */\n.loadingBar {\n  height: 6px;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 1000; }\n  .loadingBar::before {\n    animation: loading 2s linear infinite;\n    background-color: #03a9f4;\n    content: '';\n    display: block;\n    height: 6px;\n    left: -300px;\n    position: absolute;\n    width: 300px; }\n\n@keyframes loading {\n  from {\n    left: -300px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n/**\n *  LOADING SPINNER\n *\n *  Markup:\n *  ---------\n *  <div class='loadingSpinner'>\n *    <span class='loadingSpinner-inner'></span>\n *    <span class='loadingSpinner-inner'></span>\n *    <span class='loadingSpinner-inner'></span>\n *    <span class='loadingSpinner-inner'></span>\n *  </div>\n *\n */\n.loadingSpinner {\n  animation: rotateLoader 4s infinite;\n  animation-timing-function: ease-in-out;\n  display: block;\n  height: 30px;\n  left: 50%;\n  margin-left: -15px;\n  margin-top: -15px;\n  position: fixed;\n  top: 50%;\n  width: 30px;\n  z-index: 1000; }\n  .loadingSpinner-inner {\n    animation-timing-function: ease-in-out;\n    background-color: #e91e63;\n    border-radius: 100%;\n    display: block;\n    height: 9px;\n    position: absolute;\n    width: 9px; }\n    .loadingSpinner-inner:nth-child(1) {\n      animation: translateBall1 1s infinite;\n      left: 0;\n      top: 0;\n      transform: translate3d(4.5px, 4.5px, 0); }\n    .loadingSpinner-inner:nth-child(2) {\n      animation: translateBall2 1s infinite;\n      right: 0;\n      top: 0; }\n    .loadingSpinner-inner:nth-child(3) {\n      animation: translateBall3 1s infinite;\n      bottom: 0;\n      right: 0; }\n    .loadingSpinner-inner:nth-child(4) {\n      animation: translateBall4 1s infinite;\n      bottom: 0;\n      left: 0; }\n\n@keyframes rotateLoader {\n  0% {\n    transform: rotate(0); }\n  25% {\n    transform: rotate(90deg); }\n  50% {\n    transform: rotate(180deg); }\n  75% {\n    transform: rotate(270deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes translateBall1 {\n  0% {\n    transform: translate3d(0, 0, 0); }\n  50% {\n    transform: translate3d(4.5px, 4.5px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes translateBall2 {\n  0% {\n    transform: translate3d(0, 0, 0); }\n  50% {\n    transform: translate3d(-4.5px, 4.5px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes translateBall3 {\n  0% {\n    transform: translate3d(0, 0, 0); }\n  50% {\n    transform: translate3d(-4.5px, -4.5px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes translateBall4 {\n  0% {\n    transform: translate3d(0, 0, 0); }\n  50% {\n    transform: translate3d(4.5px, -4.5px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\n/**\n *  NOTIFICATION\n *\n *  Markup:\n *  -------\n *\n *  <div class=\"notification notification--sucess\">Success notification</div>\n *  <div class=\"notification notification--info\">Success info</div>\n *  <div class=\"notification notification--error\">Success error</div>\n *  <div class=\"notification notification--warning\">Success warning</div>\n *\n */\n.notification {\n  border-radius: 3px;\n  color: #fff;\n  margin-bottom: 36px;\n  padding: 16px; }\n  .notification p:last-child {\n    margin-bottom: 0; }\n  .notification--primary {\n    background-color: #03a9f4; }\n  .notification--dark {\n    background-color: #18232f; }\n  .notification--secondary {\n    background-color: #e91e63; }\n  .notification--white {\n    background-color: #fff; }\n  .notification--success {\n    background-color: #4caf50; }\n  .notification--info {\n    background-color: #5bc0de; }\n  .notification--warning {\n    background-color: #f0ad4e; }\n  .notification--error {\n    background-color: #e74c3c; }\n  .notification--gray {\n    background-color: #969da6; }\n  .notification--gray-light {\n    background-color: #eceff1; }\n\n/**\n *  PAGINATOR\n *\n *  Markup:\n *  -------\n *\n *  <ul class=\"paginator\">\n *    <li class=\"paginator-item\">\n *      <a href=\"#\" class=\"paginator-itemLink\">< Prev</a>\n *    </li>\n *    <li class=\"paginator-item\">\n *      <a href=\"#\" class=\"paginator-itemLink\">1</a>\n *    </li>\n *    <li class=\"paginator-item\">\n *      <a href=\"#\" class=\"paginator-itemLink is-active\">2</a>\n *    </li>\n *    <li class=\"paginator-item\">\n *      <a href=\"#\" class=\"paginator-itemLink\">3</a>\n *    </li>\n *    <li class=\"paginator-item\">\n *      <a href=\"#\" class=\"paginator-itemLink\">Next ></a>\n *    </li>\n *  </ul>\n */\n.paginator-item {\n  display: inline-block;\n  margin-right: 4px; }\n  .paginator-itemLink {\n    background-color: #eceff1;\n    border-radius: 3px;\n    display: block;\n    padding: 8px 16px; }\n    .paginator-itemLink.is-active {\n      background-color: #03a9f4;\n      color: #fff;\n      cursor: default; }\n\n/**\n *  TABLE\n *\n *  Markup:\n *  -------\n *\n *  <table class=\"table\">\n *    <tr>\n *      <th>First column</th>\n *      <th>Second column</th>\n *      <th>Third column</th>\n *    </tr>\n *    <tr>\n *      <td=\"First column\">Blue</td>\n *      <td=\"Second column\">One</td>\n *      <td=\"Third column\">My life fades</td>\n *    </tr>\n *  </table>\n *\n */\n.table {\n  background-color: #eceff1;\n  border: 1px solid #d5d9db;\n  border-collapse: collapse;\n  color: #272727;\n  max-width: 100%;\n  width: 100%; }\n  .table th,\n  .table td {\n    border-bottom: 1px solid #d5d9db;\n    padding: 8px;\n    position: relative; }\n  .table thead {\n    border-bottom: 1px solid #d5d9db; }\n  .table th {\n    background-color: #fff;\n    color: #969da6;\n    font-size: 12px;\n    font-weight: normal;\n    padding: 8px;\n    white-space: nowrap; }\n\n/**\n *  TABLE RESPONSIVE\n *\n *  Markup:\n *  -------\n *\n *  <table class=\"table table--responsive\">\n *    <tr>\n *      <th>First column</th>\n *      <th>Second column</th>\n *      <th>Third column</th>\n *    </tr>\n *    <tr>\n *      <td data-th=\"First column\">Blue</td>\n *      <td data-th=\"Second column\">One</td>\n *      <td data-th=\"Third column\">My life fades</td>\n *    </tr>\n *    <tr>\n *      <td data-th=\"First column\">Green</td>\n *      <td data-th=\"Second column\">Two</td>\n *      <td data-th=\"Third column\">\n *        when the world was powered by the black fuel... and the desert\n *        sprouted great cities of pipe and steel.\n *      </td>\n *    </tr>\n *    <tr>\n *      <td data-th=\"First column\">Yellow</td>\n *      <td data-th=\"Second column\">Three</td>\n *      <td data-th=\"Third column\">\n *        A whirlwind of looting, a firestorm of fear.\n *      </td>\n *    </tr>\n *  </table>\n *\n */\n.table--responsive th {\n  display: none; }\n\n.table--responsive td {\n  display: block; }\n  @media (max-width: 767px) {\n    .table--responsive td {\n      border: 0; } }\n  .table--responsive td::before {\n    color: #969da6;\n    content: attr(data-th) \": \";\n    display: block;\n    font-weight: normal; }\n    @media (min-width: 576px) {\n      .table--responsive td::before {\n        display: none; } }\n  .table--responsive td:first-child {\n    border-top: 1px solid #d5d9db; }\n\n.table--responsive th,\n.table--responsive td {\n  text-align: left; }\n  @media (min-width: 576px) {\n    .table--responsive th,\n    .table--responsive td {\n      border-top: 1px solid #d5d9db;\n      display: table-cell; } }\n\n/**\n *  TABS\n *\n *  Markup:\n *  -------\n *\n *  <div class=\"tabs\">\n *    <a href=\"#\" title=\"#\" class=\"tabs-item\">[...]</a>\n *    <a href=\"#\" title=\"#\" class=\"tabs-item is-selected\">[...]</a>\n *  </div>\n *\n */\n.tabs {\n  border-bottom: 1px solid #d5d9db;\n  text-align: center; }\n  .tabs-item {\n    border-bottom: 3px solid transparent;\n    color: #969da6;\n    display: inline-block;\n    margin: 0 16px 0 0;\n    min-width: 70px;\n    padding: 16px;\n    position: relative; }\n    .tabs-item:hover {\n      color: #03a9f4;\n      text-decoration: none; }\n    .tabs-item.is-selected {\n      border-bottom: 3px solid #03a9f4;\n      color: #03a9f4; }\n\n/**\n *  TAG\n *\n *  Markup:\n *  -------\n *\n *  <ul>\n *    <li class=\"tag\">Fantasy</li>\n *    <li class=\"tag\">Fiction</li>\n *    <li class=\"tag\">Contemporary</li>\n *  </ul>\n *\n *  <ul>\n *    <li class=\"tag\">\n *      <a href=\"#\">Fantasy</a>\n *    </li>\n *    <li class=\"tag\">\n *      <a href=\"#\">Fiction</a>\n *    </li>\n *    <li class=\"tag\">\n *       <a href=\"#\">Contemporary</a>\n *    </li>\n *  </ul>\n *\n */\n.tag {\n  background-color: #eceff1;\n  border-radius: 3px 0 0 3px;\n  color: #272727;\n  display: inline-block;\n  line-height: 16px;\n  margin: 0 16px 16px 0;\n  padding: 8px;\n  position: relative; }\n  .tag::before {\n    border-bottom: 16px solid transparent;\n    border-left: 8px solid #eceff1;\n    border-top: 16px solid transparent;\n    content: '';\n    height: 0;\n    position: absolute;\n    right: -8px;\n    top: 0;\n    width: 0; }\n  .tag::after {\n    background: #fff;\n    border-radius: 100%;\n    content: '';\n    height: 5px;\n    margin-top: -2.5px;\n    position: absolute;\n    right: -2.5px;\n    top: 50%;\n    width: 5px; }\n\n.container {\n  width: 100%;\n  padding-right: 12px;\n  padding-left: 12px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 12px;\n  padding-left: 12px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -12px;\n  margin-left: -12px; }\n\n.no-gutters {\n  margin-left: 0;\n  margin-right: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*='col-'] {\n    padding-left: 0;\n    padding-right: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n@font-face {\n  font-family: 'pxplus_ibm_vga8regular';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nhtml {\n  --theme-style: 'retro';\n  --apple_retro_green: #61bb46;\n  --apple_retro_yellow: #fdb827;\n  --apple_retro_orange: #f5821f;\n  --apple_retro_red: #e03a3e;\n  --apple_retro_purple: #963d97;\n  --apple_blue: rgb(64, 156, 255);\n  --apple_gray: rgb(152, 152, 157);\n  --apple_green: rgb(48, 219, 91);\n  --apple_indigo: rgb(125, 122, 255);\n  --apple_orange: rgb(255, 179, 64);\n  --apple_pink: rgb(255, 100, 130);\n  --apple_purple: rgb(218, 143, 255);\n  --apple_red: rgb(255, 105, 97);\n  --apple_teal: rgb(112, 215, 255);\n  --apple_yellow: rgb(255, 212, 38);\n  --c_blue: #247BA0;\n  --c_white: #FAF1D8;\n  --c_pink: #DD7373;\n  --c_black: #3E4E50;\n  --c_warm_black: #02394A;\n  --c_black_olive: #393D3F;\n  --c_orange: #F79D65;\n  --c_turq: #69D1C5;\n  --c_almond: #EED7C5;\n  --c_cadedblue: #5C9EAD;\n  --c_carib_green: #02C39A;\n  --storage: var(--c_cadedblue);\n  --literal: var(--c_carib_green);\n  --comment: var(--c_orange);\n  --keyword: rgb(255, 100, 130);\n  --compile_time_resolved: var(--apple_indigo);\n  --text-base: 62, 78, 80;\n  --text: rgba(var(--text-base), 1);\n  --background-base: 248, 240, 218;\n  --background: rgba(var(--background-base), 1);\n  --font: 'pxplus_ibm_vga8regular';\n  --avatar: url(" + ___CSS_LOADER_URL___2___ + "); }\n  html[theme-style='retro'] {\n    --theme-style: 'retro';\n    --font: 'pxplus_ibm_vga8regular';\n    --avatar: url(" + ___CSS_LOADER_URL___2___ + "); }\n  html[theme-style='modern'] {\n    --theme-style: 'modern';\n    --avatar: url(" + ___CSS_LOADER_URL___3___ + ");\n    --font: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif; }\n    html[theme-style='modern'] .landing-page--hero {\n      border-radius: 50px; }\n\nhtml[theme=\"light\"] {\n  --text-color--normal: var(--text);\n  --text-color--light: var(--c_black);\n  --text-color--richer: var(--c_black);\n  --text-color--highlight: var(--keyword);\n  --text-color--comment: var(--comment);\n  --background--content: rgb(255, 255, 255);\n  --background-base: 248, 240, 218;\n  --background-color--selection: yellow; }\n  html[theme=\"light\"][theme-style='modern'] {\n    --text-base: 0,0,0;\n    --background-base: 255,255,255;\n    --background--content: white; }\n\nhtml[theme='dark'] {\n  --text-base: 248, 240, 218;\n  --text-color--normal: var(--c_white);\n  --text-color--light: var(--c_white);\n  --text-color--richer: var(--c_white);\n  --text-color--highlight: var(--apple_pink);\n  --text-color--comment: var(--comment);\n  --background--content: rgb(30, 30, 30);\n  --background-base: 14,23,32;\n  --background-color--selection: var(--apple_pink); }\n  html[theme='dark'][theme-style='modern'] {\n    --text-base: 255,255,255;\n    --background-base: 0,0,0;\n    --background--content: black;\n    --text-color--normal: var(--text);\n    --text-color--light: var(--text);\n    --text-color--richer: var(--text); }\n\n.content {\n  border-radius: 5px;\n  padding: 20px;\n  margin: 20px; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody, p, b, button {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 1em;\n  font-family: var(--font);\n  color: var(--text);\n  background: var(--background); }\n\n::selection {\n  color: var(--text-color--selection);\n  background-color: var(--background-color--selection); }\n\nbutton {\n  border: none;\n  color: rgba(var(--text-base), 0.6); }\n  button:hover {\n    color: rgba(var(--text-base), 1); }\n  button:focus {\n    outline: 0; }\n\n#p2d {\n  cursor: none; }\n\n.comment {\n  border-radius: 5px;\n  position: relative;\n  padding: 10px;\n  margin: 10px;\n  font-size: 0.75em;\n  border: 1px solid;\n  border-left: 1em solid; }\n  .comment.advice {\n    border-color: #02C39A; }\n    .comment.advice p {\n      color: #208975; }\n  .comment.warning {\n    border-color: #F79D65; }\n    .comment.warning p {\n      color: #9b765b; }\n  .comment.info {\n    border-color: #5C9EAD; }\n    .comment.info p {\n      color: #4d767f; }\n\n.underline {\n  height: 0.1em;\n  background: rgba(0, 0, 0, 0.05); }\n\n.emphasis {\n  font-weight: 100;\n  font-size: 2em; }\n\nbutton#burger {\n  color: var(--text);\n  background: none;\n  display: block;\n  padding: 1vw;\n  margin: 20px;\n  font-size: 3vh;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: fixed;\n  top: 0;\n  right: 0; }\n  @media only screen and (min-width: 600px) {\n    button#burger {\n      display: none; } }\n\nbutton {\n  padding: 5px;\n  margin: 5px; }\n\nimg {\n  max-width: 200px;\n  border-radius: 50px; }\n\n.landing-page--hero {\n  display: inline;\n  width: 30%; }\n\n.swapOnHover img:last-child {\n  display: none; }\n\n.swapOnHover:hover img:first-child {\n  display: none; }\n\n.swapOnHover:hover img:last-child {\n  display: inline; }\n\n.landing-page--subtitle {\n  display: block;\n  text-align: center; }\n\n.landing-page--title {\n  display: block;\n  font-size: 30px;\n  font-weight: 900;\n  text-align: center; }\n\n.entity {\n  display: inline-block;\n  padding: 1px;\n  color: #F79D65;\n  background: rgba(247, 157, 101, 0.1);\n  font-style: italic; }\n\n.keyword {\n  display: inline-block;\n  padding: 1px;\n  color: #ff6482;\n  background: rgba(255, 100, 130, 0.1);\n  font-style: normal; }\n\n.faint {\n  color: rgba(var(--text-base), 0.4); }\n\na {\n  text-decoration: none;\n  color: rgba(var(--text-base), 0.6); }\n  a:hover {\n    color: rgba(var(--text-base), 1); }\n\nhr {\n  border-color: rgba(var(--text-base), 0.1);\n  border-width: 0.5px;\n  margin: 20px auto;\n  width: 60%; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, assign, attr, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_element, claim_text, clear_loops, component_subscribe, createEventDispatcher, create_animation, create_bidirectional_transition, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, debug, destroy_block, destroy_component, destroy_each, detach, dirty_components, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_update, get_store_value, globals, group_outros, handle_promise, identity, init, insert, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, loop, measure, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_input_type, set_input_value, set_now, set_raf, set_style, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, callback) {
    const unsub = store.subscribe(callback);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
        : ctx.$$scope.ctx;
}
function get_slot_changes(definition, ctx, changed, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
        : ctx.$$scope.changed || {};
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
let running = false;
function run_tasks() {
    tasks.forEach(task => {
        if (!task[0](now())) {
            tasks.delete(task);
            task[1]();
        }
    });
    running = tasks.size > 0;
    if (running)
        raf(run_tasks);
}
function clear_loops() {
    // for testing...
    tasks.forEach(task => tasks.delete(task));
    running = false;
}
function loop(fn) {
    let task;
    if (!running) {
        running = true;
        raf(run_tasks);
    }
    return {
        promise: new Promise(fulfil => {
            tasks.add(task = [fn, fulfil]);
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const target = {};
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    for (const key in attributes) {
        if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key in node) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            for (let j = 0; j < node.attributes.length; j += 1) {
                const attribute = node.attributes[j];
                if (!attributes[attribute.name])
                    node.removeAttribute(attribute.name);
            }
            return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    if (value != null || input.value) {
        input.value = value;
    }
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
class HtmlTag {
    constructor(html, anchor = null) {
        this.e = element('div');
        this.a = anchor;
        this.u(html);
    }
    m(target, anchor = null) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(target, this.n[i], anchor);
        }
        this.t = target;
    }
    u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = current_component;
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment) {
        $$.update($$.dirty);
        run_all($$.before_update);
        $$.fragment.p($$.dirty, $$.ctx);
        $$.dirty = null;
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = key && { [key]: value };
        const child_ctx = assign(assign({}, info.ctx), info.resolved);
        const block = type && (info.current = type)(child_ctx);
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            flush();
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = { [info.value]: promise };
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(changed, child_ctx);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function measure(blocks) {
    const rects = {};
    let i = blocks.length;
    while (i--)
        rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
    return rects;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args) {
    const attributes = Object.assign({}, ...args);
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === undefined)
            return;
        if (value === true)
            str += " " + name;
        const escaped = String(value)
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;');
        str += " " + name + "=" + JSON.stringify(escaped);
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    if (component.$$.props.indexOf(name) === -1)
        return;
    component.$$.bound[name] = callback;
    callback(component.$$.ctx[name]);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    if (component.$$.fragment) {
        run_all(component.$$.on_destroy);
        component.$$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        component.$$.on_destroy = component.$$.fragment = null;
        component.$$.ctx = {};
    }
}
function make_dirty(component, key) {
    if (!component.$$.dirty) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty = blank_object();
    }
    component.$$.dirty[key] = true;
}
function init(component, options, instance, create_fragment, not_equal, prop_names) {
    const parent_component = current_component;
    set_current_component(component);
    const props = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: prop_names,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: null
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, props, (key, value) => {
            if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty(component, key);
            }
        })
        : props;
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment($$.ctx);
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement !== 'undefined') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}




/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/*! exports provided: get, derived, readable, writable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["get_store_value"]; });




const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (Object(_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"])(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = Object(_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(result) ? result : _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(unsubscribers);
            cleanup();
        };
    });
}




/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.sass */ "./src/main.sass");
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sapper_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sapper/app */ "./src/node_modules/@sapper/app.mjs");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);





const updateGlobalColorVariables = () => {
    const setStyle = (e, p, v) => e.style.setProperty(p, v)
    const getStyleAsRGB = (e, p) =>
        color__WEBPACK_IMPORTED_MODULE_2___default()(
            getComputedStyle(e)
                .getPropertyValue(p)
                .trim()
        ).object()
    window.color = {
        textNormal: getStyleAsRGB(
            document.documentElement,
            '--text-color--normal'
        ),
        textRicher: getStyleAsRGB(
            document.documentElement,
            '--text-color--richer'
        ),
        textHighlight: getStyleAsRGB(
            document.documentElement,
            '--text-color--highlight'
        ),
        background: getStyleAsRGB(document.documentElement, '--background'),
        backgroundContent: getStyleAsRGB(
            document.documentElement,
            '--background--content'
        ),
    }
    console.log('theme changed')
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type == 'attributes') {
            console.log('attributes changed')
            updateGlobalColorVariables()
        }
    })
})

observer.observe(document.documentElement, {
    attributes: true, //configure it to listen to attribute changes
})

window
    .matchMedia('(prefers-color-scheme: light)')
    .addListener(updateGlobalColorVariables)

updateGlobalColorVariables()

window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
    document.documentElement.setAttribute(
        'theme',
        window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
    )
})

document.documentElement.setAttribute(
    'theme',
    window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
)

_sapper_app__WEBPACK_IMPORTED_MODULE_1__["start"]({
        target: document.querySelector('#sapper'),
    })
    .then(() => {
        console.log('client-side app has started')
    })


/***/ }),

/***/ "./src/components/Footer.svelte":
/*!**************************************!*\
  !*** ./src/components/Footer.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/components/Footer.svelte generated by Svelte v3.9.2 */

const { document: document_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];


const file = "src/components/Footer.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1w8nztm-style';
	style.textContent = "footer.svelte-1w8nztm{text-align:center;background:none;font-size:0.75em}.icon-list.svelte-1w8nztm{display:flex;justify-content:center}.icon-list.svelte-1w8nztm a.svelte-1w8nztm{font-size:2em;margin:5px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiRm9vdGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG5cbm9uTW91bnQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJylcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhlbWVFbC5pbm5lclRleHQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzXG4gICAgICAgICAgICA/ICdsaWdodCdcbiAgICAgICAgICAgIDogJ2RhcmsnXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhlbWVFbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlbWUgPVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUnKSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpXG4gICAgICAgICAgICB0aGVtZUVsLmlubmVyVGV4dCA9IHRoZW1lXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2Rlcm5pemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZXJuaXplJylcbiAgICAgICAgbW9kZXJuaXplLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVtZSA9XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScpID09PSAncmV0cm8nID8gJ21vZGVybicgOiAncmV0cm8nXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScsIHRoZW1lKVxuICAgICAgICAgICAgbW9kZXJuaXplLmlubmVyVGV4dCA9IHRoZW1lXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmltZSB0aGVtIGJvdGhcbiAgICAgICAgdGhlbWVFbC5pbm5lclRleHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZScpXG4gICAgICAgIG1vZGVybml6ZS5pbm5lclRleHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScpXG4gICAgfSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG5cbi5pY29uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuaWNvbi1saXN0IGEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogNXB4OyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPUZvb3Rlci5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxmb290ZXI+PGhyPjxkaXYgY2xhc3M9XCJmYWludFwiPkJ1aWx0IHVzaW5nXG48Yj48YSBocmVmPVwiaHR0cHM6Ly9zYXBwZXIuc3ZlbHRlLmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlNhcHBlcjwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly9zdmVsdGUuZGV2L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+U3ZlbHRlPC9hPjwvYj5cbiZcbjxiPjxhIGhyZWY9XCJodHRwczovL3dlYnBhY2suanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5XZWJwYWNrPC9hPjwvYj5cbiZcbjxiPjxhIGhyZWY9XCJodHRwczovL3Nhc3MtbGFuZy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlNhc3M8L2E+PC9iPlxuJlxuPGI+PGEgaHJlZj1cImh0dHBzOi8vcHVnanMub3JnL2FwaS9nZXR0aW5nLXN0YXJ0ZWQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+UHVnPC9hPjwvYj48L2Rpdj48ZGl2IGNsYXNzPVwiZmFpbnRcIj5Gb250OiA8Yj48YSBocmVmPVwiaHR0cHM6Ly9pbnQxMGgub3JnL29sZHNjaG9vbC1wYy1mb250cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlB4UGx1cyBJQk0gVkdBODwvYT48L2I+PC9kaXY+PGRpdiBjbGFzcz1cImZhaW50XCI+SG9zdDogPGI+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5ldGxpZnkuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+TmV0bGlmeTwvYT48L2I+PC9kaXY+PGJyPjxidXR0b24gY2xhc3M9XCJidG4gc21hbGxcIiBpZD1cIm1vZGVybml6ZVwiPjwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJidG4gc21hbGxcIiBpZD1cInRoZW1lXCI+PC9idXR0b24+PGRpdiBjbGFzcz1cImZhaW50XCI+Q29udGFjdDogPHA+bWF0aGlhc3Nlbm1hcmN1c0BnbWFpbC5jb208L3A+PC9kaXY+PGRpdiBjbGFzcz1cImljb24tbGlzdFwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWFyY3VzTWF0aGlhc3NlblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT48YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1o3RmJRNEJ2aTNHa1YwazVFTm9YWVFcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPjxpIGNsYXNzPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+PC9hPjwvZGl2PjwvZm9vdGVyPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDbUIsTUFBTSxlQUFDLENBQUMsQUFDekIsVUFBVSxDQUFFLE1BQU0sQ0FDbEIsVUFBVSxDQUFFLElBQUksQ0FDaEIsU0FBUyxDQUFFLE1BQU0sQUFBRSxDQUFDLEFBRXRCLFVBQVUsZUFBQyxDQUFDLEFBQ1YsT0FBTyxDQUFFLElBQUksQ0FDYixlQUFlLENBQUUsTUFBTSxBQUFFLENBQUMsQUFDMUIseUJBQVUsQ0FBQyxDQUFDLGVBQUMsQ0FBQyxBQUNaLFNBQVMsQ0FBRSxHQUFHLENBQ2QsTUFBTSxDQUFFLEdBQUcsQUFBRSxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document_1.head, style);
}

function create_fragment(ctx) {
	var footer, hr, div0, t0, b0, a0, t1, t2, b1, a1, t3, t4, b2, a2, t5, t6, b3, a3, t7, t8, b4, a4, t9, div1, t10, b5, a5, t11, div2, t12, b6, a6, t13, br, button0, button1, div3, t14, p, t15, div4, a7, i0, a8, i1;

	return {
		c: function create() {
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("footer");
			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("hr");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Built using\n");
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Sapper");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n&\n");
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Svelte");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n&\n");
			b2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Webpack");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n&\n");
			b3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Sass");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n&\n");
			b4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Pug");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Font: ");
			b5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("PxPlus IBM VGA8");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Host: ");
			b6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Netlify");
			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("br");
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Contact: ");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("mathiassenmarcus@gmail.com");
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			a8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			this.h()
		},

		l: function claim(nodes) {
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "FOOTER", { class: true }, false);
			var footer_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(footer);

			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "HR", {}, false);
			var hr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(hr);

			hr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "Built using\n");

			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b0);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b0_nodes, "A", { href: true, target: true, rel: true }, false);
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "Sapper");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b1);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b1_nodes, "A", { href: true, target: true, rel: true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "Svelte");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b2_nodes, "A", { href: true, target: true, rel: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "Webpack");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b3);

			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b3_nodes, "A", { href: true, target: true, rel: true }, false);
			var a3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a3);

			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a3_nodes, "Sass");
			a3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b4);

			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b4_nodes, "A", { href: true, target: true, rel: true }, false);
			var a4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a4);

			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a4_nodes, "Pug");
			a4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "Font: ");

			b5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "B", {}, false);
			var b5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b5);

			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b5_nodes, "A", { href: true, target: true, rel: true }, false);
			var a5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a5);

			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a5_nodes, "PxPlus IBM VGA8");
			a5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);

			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "Host: ");

			b6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "B", {}, false);
			var b6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b6);

			a6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b6_nodes, "A", { href: true, target: true, rel: true }, false);
			var a6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a6);

			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a6_nodes, "Netlify");
			a6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "BR", {}, false);
			var br_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(br);

			br_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "BUTTON", { class: true, id: true }, false);
			var button0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button0);

			button0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "BUTTON", { class: true, id: true }, false);
			var button1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button1);

			button1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);

			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "Contact: ");

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", {}, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "mathiassenmarcus@gmail.com");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);

			a7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "A", { href: true, target: true, rel: true, class: true }, false);
			var a7_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a7);

			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a7_nodes, "I", { class: true }, false);
			var i0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i0);

			i0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a7_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			a8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "A", { href: true, target: true, rel: true, class: true }, false);
			var a8_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a8);

			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a8_nodes, "I", { class: true }, false);
			var i1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i1);

			i1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a8_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			footer_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(hr, file, 46, 8, 1432);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "href", "https://sapper.svelte.dev/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 47, 3, 1470);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b0, file, 47, 0, 1467);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "href", "https://svelte.dev/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 49, 3, 1558);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b1, file, 49, 0, 1555);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "href", "https://webpack.js.org");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 51, 3, 1639);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b2, file, 51, 0, 1636);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "href", "https://sass-lang.com");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a3, file, 53, 3, 1724);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b3, file, 53, 0, 1721);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "href", "https://pugjs.org/api/getting-started.html");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a4, file, 55, 3, 1805);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b4, file, 55, 0, 1802);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 46, 12, 1436);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "href", "https://int10h.org/oldschool-pc-fonts/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a5, file, 55, 132, 1934);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b5, file, 55, 129, 1931);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 55, 104, 1906);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a6, "href", "https://www.netlify.com/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a6, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a6, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a6, file, 55, 269, 2071);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b6, file, 55, 266, 2068);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 55, 241, 2043);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 55, 356, 2158);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "class", "btn small");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "id", "modernize");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 55, 360, 2162);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "class", "btn small");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "id", "theme");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 55, 410, 2212);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 55, 484, 2286);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 55, 456, 2258);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i0, "class", "fab fa-github");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i0, file, 55, 623, 2425);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a7, "href", "https://github.com/MarcusMathiassen");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a7, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a7, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a7, "class", "svelte-1w8nztm");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a7, file, 55, 546, 2348);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i1, "class", "fab fa-youtube");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i1, file, 55, 754, 2556);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a8, "href", "https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a8, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a8, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a8, "class", "svelte-1w8nztm");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a8, file, 55, 656, 2458);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "icon-list svelte-1w8nztm");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 55, 523, 2325);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(footer, "class", "svelte-1w8nztm");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(footer, file, 46, 0, 1424);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, footer, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, hr);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, b0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, b1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, b2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, b3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b3, a3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, b4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b4, a4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a4, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, b5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b5, a5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a5, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, b6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b6, a6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a6, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, br);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, button1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, a7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a7, i0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, a8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a8, i1);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(footer);
			}
		}
	};
}

function instance($$self) {
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
        const themeEl = document.getElementById('theme')
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            themeEl.innerText = window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
        })

        themeEl.onclick = () => {
            const theme =
            document.documentElement.getAttribute('theme') === 'light' ? 'dark' : 'light'
            document.documentElement.setAttribute('theme', theme)
            themeEl.innerText = theme
        }

        const modernize = document.getElementById('modernize')
        modernize.onclick = () => {
            const theme =
            document.documentElement.getAttribute('theme-style') === 'retro' ? 'modern' : 'retro'
            document.documentElement.setAttribute('theme-style', theme)
            modernize.innerText = theme
        }

        // Prime them both
        themeEl.innerText = document.documentElement.getAttribute('theme')
        modernize.innerText = document.documentElement.getAttribute('theme-style')
    })

	return {};
}

class Footer extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document_1.getElementById("svelte-1w8nztm-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Nav.svelte":
/*!***********************************!*\
  !*** ./src/components/Nav.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/Nav.svelte generated by Svelte v3.9.2 */


const file = "src/components/Nav.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1rhn09y-style';
	style.textContent = "nav.svelte-1rhn09y{font-weight:600;padding:0 1em}ul.svelte-1rhn09y{margin:0;padding:0}ul.svelte-1rhn09y::after{content:'';display:block;clear:both}li.svelte-1rhn09y{display:block;float:left}.selected.svelte-1rhn09y{color:var(--text);position:relative;display:inline-block}.selected.svelte-1rhn09y::after{position:absolute;content:'';width:calc(100% - 1em);display:block}a.svelte-1rhn09y{text-decoration:none;margin-top:20px;padding:0em 2em;display:block}ul.svelte-1rhn09y{display:flex;justify-content:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LnN2ZWx0ZSIsInNvdXJjZXMiOlsiTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc2VnbWVudFxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBuYXYge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAvKiBjbGVhcmZpeCAqL1xuICAgIHVsOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBlbSAyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuPC9zdHlsZT5cblxuPG5hdj5cbiAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzPXtzZWdtZW50ID09PSB1bmRlZmluZWQgPyAnc2VsZWN0ZWQnIDogJyd9IGhyZWY9XCIuXCI+aG9tZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3M9e3NlZ21lbnQgPT09ICdhYm91dCcgPyAnc2VsZWN0ZWQnIDogJyd9IGhyZWY9XCJhYm91dFwiPlxuICAgICAgICAgICAgICAgIGFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDwhLS0gZm9yIHRoZSBibG9nIGxpbmssIHdlJ3JlIHVzaW5nIHJlbD1wcmVmZXRjaCBzbyB0aGF0IFNhcHBlciBwcmVmZXRjaGVzXG5cdFx0ICAgICB0aGUgYmxvZyBkYXRhIHdoZW4gd2UgaG92ZXIgb3ZlciB0aGUgbGluayBvciB0YXAgaXQgb24gYSB0b3VjaHNjcmVlbiAtLT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVmZXRjaFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9e3NlZ21lbnQgPT09ICdibG9nJyA/ICdzZWxlY3RlZCcgOiAnJ31cbiAgICAgICAgICAgICAgICBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgIGJsb2dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9uYXY+XG48aHI+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0ksR0FBRyxlQUFDLENBQUMsQUFDRCxXQUFXLENBQUUsR0FBRyxDQUNoQixPQUFPLENBQUUsQ0FBQyxDQUFDLEdBQUcsQUFDbEIsQ0FBQyxBQUVELEVBQUUsZUFBQyxDQUFDLEFBQ0EsTUFBTSxDQUFFLENBQUMsQ0FDVCxPQUFPLENBQUUsQ0FBQyxBQUNkLENBQUMsQUFHRCxpQkFBRSxPQUFPLEFBQUMsQ0FBQyxBQUNQLE9BQU8sQ0FBRSxFQUFFLENBQ1gsT0FBTyxDQUFFLEtBQUssQ0FDZCxLQUFLLENBQUUsSUFBSSxBQUNmLENBQUMsQUFFRCxFQUFFLGVBQUMsQ0FBQyxBQUNBLE9BQU8sQ0FBRSxLQUFLLENBQ2QsS0FBSyxDQUFFLElBQUksQUFDZixDQUFDLEFBRUQsU0FBUyxlQUFDLENBQUMsQUFDUCxLQUFLLENBQUUsSUFBSSxNQUFNLENBQUMsQ0FDbEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLFlBQVksQUFDekIsQ0FBQyxBQUVELHdCQUFTLE9BQU8sQUFBQyxDQUFDLEFBQ2QsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLEVBQUUsQ0FDWCxLQUFLLENBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUN2QixPQUFPLENBQUUsS0FBSyxBQUNsQixDQUFDLEFBRUQsQ0FBQyxlQUFDLENBQUMsQUFDQyxlQUFlLENBQUUsSUFBSSxDQUNyQixVQUFVLENBQUUsSUFBSSxDQUNoQixPQUFPLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FDaEIsT0FBTyxDQUFFLEtBQUssQUFDbEIsQ0FBQyxBQUVELEVBQUUsZUFBQyxDQUFDLEFBQ0EsT0FBTyxDQUFFLElBQUksQ0FDYixlQUFlLENBQUUsTUFBTSxBQUMzQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var nav, ul, li0, a0, t0, a0_class_value, t1, li1, a1, t2, a1_class_value, t3, li2, a2, t4, a2_class_value, t5, hr;

	return {
		c: function create() {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("nav");
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("home");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("about");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("blog");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("hr");
			this.h()
		},

		l: function claim(nodes) {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "NAV", { class: true }, false);
			var nav_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(nav);

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nav_nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true }, false);
			var li0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li0);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li0_nodes, "A", { class: true, href: true }, false);
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "home");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n        ");

			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true }, false);
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "A", { class: true, href: true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "about");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n        \n        ");

			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true }, false);
			var li2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li2_nodes, "A", { rel: true, class: true, href: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "blog");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			nav_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "HR", {}, false);
			var hr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(hr);

			hr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "class", a0_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === undefined ? 'selected' : '')) + " svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "href", ".");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 56, 12, 831);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li0, "class", "svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 55, 8, 814);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "class", a1_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'about' ? 'selected' : '')) + " svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "href", "about");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 59, 12, 939);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li1, "class", "svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 58, 8, 922);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "class", a2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'blog' ? 'selected' : '')) + " svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "href", "blog");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 66, 12, 1243);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li2, "class", "svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li2, file, 65, 8, 1226);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 54, 4, 801);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(nav, "class", "svelte-1rhn09y");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 53, 0, 791);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(hr, file, 75, 0, 1436);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, nav, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(nav, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, hr, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.segment) && a0_class_value !== (a0_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === undefined ? 'selected' : '')) + " svelte-1rhn09y")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "class", a0_class_value);
			}

			if ((changed.segment) && a1_class_value !== (a1_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'about' ? 'selected' : '')) + " svelte-1rhn09y")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "class", a1_class_value);
			}

			if ((changed.segment) && a2_class_value !== (a2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'blog' ? 'selected' : '')) + " svelte-1rhn09y")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "class", a2_class_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(nav);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(hr);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { segment } = $$props;

	const writable_props = ['segment'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Nav> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment };
}

class Nav extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1rhn09y-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Nav> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/node_modules/@sapper/app.mjs":
/*!******************************************!*\
  !*** ./src/node_modules/@sapper/app.mjs ***!
  \******************************************/
/*! exports provided: goto, prefetch, prefetchRoutes, start, stores */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goto", function() { return goto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetch", function() { return prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchRoutes", function() { return prefetchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stores", function() { return stores$1; });
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _internal_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/App.svelte */ "./src/node_modules/@sapper/internal/App.svelte");
/* harmony import */ var _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/manifest-client */ "./src/node_modules/@sapper/internal/manifest-client.mjs");






function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';

const stores = {
	page: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])({}),
	preloading: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(null),
	session: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ignore"].some(pattern => pattern.test(path))) return;

	for (let i = 0; i < _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"].length; i += 1) {
		const route = _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"][i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { host: location.host, path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function handle_error(url) {
	const { host, pathname, search } = location;
	const { session, preloaded, status, error } = initial_data;

	if (!root_preloaded) {
		root_preloaded = preloaded && preloaded[0];
	}

	const props = {
		error,
		status,
		session,
		level0: {
			props: root_preloaded
		},
		level1: {
			props: {
				status,
				error
			},
			component: _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
		},
		segments: preloaded

	};
	const query = extract_query(search);
	render(null, [], props, { host, path: pathname, query, params: {} });
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	current_query = JSON.stringify(page.query);
	ready = true;
	session_dirty = false;
}

function part_changed(i, segment, match, stringified_query) {
	// TODO only check query string changes for preload functions
	// that do in fact depend on it (using static analysis or
	// runtime instrumentation)
	if (stringified_query !== current_query) return true;

	const previous = current_branch[i];

	if (!previous) return false;
	if (segment !== previous.segment) return true;
	if (previous.match) {
		if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
			return true;
		}
	}
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["root_preload"].call(preload_context, {
			host: page.host,
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const stringified_query = JSON.stringify(page.query);
		const match = route.pattern.exec(page.path);

		let segment_dirty = false;

		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						host: page.host,
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		const url = new URL(location.href);

		if (initial_data.error) return handle_error();

		const target = select_target(url);
		if (target) return navigate(target, uid, true, hash);
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

function prefetchRoutes(pathnames) {
	return _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"]
		.filter(pathnames
			? route => pathnames.some(pathname => route.pattern.test(pathname))
			: () => true
		)
		.reduce((promise, route) => promise.then(() => {
			return Promise.all(route.parts.map(part => part && load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i])));
		}), Promise.resolve());
}

const stores$1 = () => Object(svelte__WEBPACK_IMPORTED_MODULE_0__["getContext"])(_internal_shared__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_KEY"]);




/***/ }),

/***/ "./src/node_modules/@sapper/internal/App.svelte":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/App.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.9.2 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];





const file = "src/node_modules/@sapper/internal/App.svelte";

// (21:1) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.level1.props
	];

	var switch_value = ctx.level1.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if (switch_instance) switch_instance.$$.fragment.l(nodes);
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = (changed.level1) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
									ctx.level1.props
								]) : {};

			if (switch_value !== (switch_value = ctx.level1.component)) {
				if (switch_instance) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					const old_component = switch_instance;
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(old_component.$$.fragment, 1, 0, () => {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(old_component, 1);
					});
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, 1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(switch_instance.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(switch_instance_anchor);
			}

			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(switch_instance, detaching);
		}
	};
}

// (19:1) {#if error}
function create_if_block(ctx) {
	var current;

	var error_1 = new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	return {
		c: function create() {
			error_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			error_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(error_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var error_1_changes = {};
			if (changed.error) error_1_changes.error = ctx.error;
			if (changed.status) error_1_changes.status = ctx.status;
			error_1.$set(error_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(error_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(error_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(error_1, detaching);
		}
	};
}

// (18:0) <Layout segment="{segments[0]}" {...level0.props}>
function create_default_slot(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(changed, ctx) {
		if (ctx.error) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(null, ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(changed, ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var layout_spread_levels = [
		{ segment: ctx.segments[0] },
		ctx.level0.props
	];

	let layout_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(layout_props, layout_spread_levels[i]);
	}
	var layout = new _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: layout_props, $$inline: true });

	return {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = (changed.segments || changed.level0) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(layout_spread_levels, [
									(changed.segments) && { segment: ctx.segments[0] },
			(changed.level0) && ctx.level0.props
								]) : {};
			if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(layout.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(layout.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(layout, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["setContext"])(_shared__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_KEY"], stores);

	const writable_props = ['stores', 'error', 'status', 'segments', 'level0', 'level1'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<App> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	return {
		stores,
		error,
		status,
		segments,
		level0,
		level1
	};
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["stores", "error", "status", "segments", "level0", "level1"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.stores === undefined && !('stores' in props)) {
			console.warn("<App> was created without expected prop 'stores'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}
		if (ctx.segments === undefined && !('segments' in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}
		if (ctx.level0 === undefined && !('level0' in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
	}

	get stores() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stores(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/node_modules/@sapper/internal/manifest-client.mjs":
/*!***************************************************************!*\
  !*** ./src/node_modules/@sapper/internal/manifest-client.mjs ***!
  \***************************************************************/
/*! exports provided: Root, root_preload, ErrorComponent, ignore, components, routes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root_preload", function() { return _shared__WEBPACK_IMPORTED_MODULE_1__["preload"]; });

/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// This file is generated by Sapper — do not edit it!




const ignore = [];

const components = [
	{
		js: () => Promise.all(/*! import() | index */[__webpack_require__.e("blog~index"), __webpack_require__.e("index")]).then(__webpack_require__.bind(null, /*! ../../../routes/index.svelte */ "./src/routes/index.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(null, /*! ../../../routes/about.svelte */ "./src/routes/about.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => Promise.all(/*! import() | blog */[__webpack_require__.e("blog~index"), __webpack_require__.e("blog")]).then(__webpack_require__.bind(null, /*! ../../../routes/blog.svelte */ "./src/routes/blog.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:blog.svelte__"
	}
];

const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// blog.svelte
		pattern: /^\/blog\/?$/,
		parts: [
			{ i: 2 }
		]
	}
];

if (typeof window !== 'undefined') {
	__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/sapper/sapper-dev-client.js */ "./node_modules/sapper/sapper-dev-client.js")).then(client => {
		client.connect(10000);
	});
}

/***/ }),

/***/ "./src/node_modules/@sapper/internal/shared.mjs":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/shared.mjs ***!
  \******************************************************/
/*! exports provided: CONTEXT_KEY, preload */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_KEY", function() { return CONTEXT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const CONTEXT_KEY = {};

const preload = () => ({});

/***/ }),

/***/ "./src/routes/_error.svelte":
/*!**********************************!*\
  !*** ./src/routes/_error.svelte ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/_error.svelte generated by Svelte v3.9.2 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/_error.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-3zgnov-style';
	style.textContent = "h1.svelte-3zgnov,p.svelte-3zgnov{margin:0 auto}h1.svelte-3zgnov{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-3zgnov{margin:1em auto}@media(min-width: 480px){h1.svelte-3zgnov{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vycm9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsiX2Vycm9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdHVzXG4gICAgZXhwb3J0IGxldCBlcnJvclxuXG4gICAgY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaDEsXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XG4gICAgPHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG57L2lmfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJLGdCQUFFLENBQ0YsQ0FBQyxjQUFDLENBQUMsQUFDQyxNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDbEIsQ0FBQyxBQUVELEVBQUUsY0FBQyxDQUFDLEFBQ0EsU0FBUyxDQUFFLEtBQUssQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQUFDdkIsQ0FBQyxBQUVELENBQUMsY0FBQyxDQUFDLEFBQ0MsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLEFBQ3BCLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQ3ZCLEVBQUUsY0FBQyxDQUFDLEFBQ0EsU0FBUyxDQUFFLEdBQUcsQUFDbEIsQ0FBQyxBQUNMLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

// (39:0) {#if dev && error.stack}
function create_if_block(ctx) {
	var pre, t_value = ctx.error.stack + "", t;

	return {
		c: function create() {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("pre");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "PRE", {}, false);
			var pre_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(pre);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(pre_nodes, t_value);
			pre_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(pre, file, 39, 4, 541);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, pre, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(pre);
			}
		}
	};
}

function create_fragment(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message + "", t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.status);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t3_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h1, "class", "svelte-3zgnov");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 34, 0, 469);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p, "class", "svelte-3zgnov");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 36, 0, 488);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
			}

			if (ctx.dev && ctx.error.stack) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { status, error } = $$props;

    const dev = "development" === 'development'

	const writable_props = ['status', 'error'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Error> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { status, error, dev };
}

class Error extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-3zgnov-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["status", "error"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}
	}

	get status() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/routes/_layout.svelte":
/*!***********************************!*\
  !*** ./src/routes/_layout.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Footer_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer.svelte */ "./src/components/Footer.svelte");
/* harmony import */ var _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav.svelte */ "./src/components/Nav.svelte");
/* src/routes/_layout.svelte generated by Svelte v3.9.2 */




const file = "src/routes/_layout.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1gcv5py-style';
	style.textContent = "main.svelte-1gcv5py{position:relative;max-width:56em;padding:2em;margin:0 auto;box-sizing:border-box}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5zdmVsdGUiLCJzb3VyY2VzIjpbIl9sYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5zdmVsdGUnXG4gICAgaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBzZWdtZW50XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIG1haW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogNTZlbTtcbiAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG48L3N0eWxlPlxuXG48TmF2IHtzZWdtZW50fSAvPlxuPG1haW4+XG4gICAgPHNsb3QgLz5cbjwvbWFpbj5cbjxGb290ZXIgLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSxJQUFJLGVBQUMsQ0FBQyxBQUNGLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLFNBQVMsQ0FBRSxJQUFJLENBQ2YsT0FBTyxDQUFFLEdBQUcsQ0FDWixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FDZCxVQUFVLENBQUUsVUFBVSxBQUMxQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, main, t1, current;

	var nav = new _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
		props: { segment: ctx.segment },
		$$inline: true
	});

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	var footer = new _components_Footer_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	return {
		c: function create() {
			nav.$$.fragment.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");

			if (default_slot) default_slot.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			footer.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			nav.$$.fragment.l(nodes);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", { class: true }, false);
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");
			footer.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "class", "svelte-1gcv5py");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 17, 0, 327);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(nav, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(footer, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var nav_changes = {};
			if (changed.segment) nav_changes.segment = ctx.segment;
			nav.$set(nav_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(nav.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(footer.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(nav.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(footer.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(nav, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			}

			if (default_slot) default_slot.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(footer, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	
    let { segment } = $$props;

	const writable_props = ['segment'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Layout> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { segment, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1gcv5py-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Layout> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./static/avatar.png":
/*!***************************!*\
  !*** ./static/avatar.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar.png";

/***/ }),

/***/ "./static/avatar_pixelated.jpg":
/*!*************************************!*\
  !*** ./static/avatar_pixelated.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar_pixelated.jpg";

/***/ }),

/***/ "./static/pxplus_ibm_vga8-webfont.woff":
/*!*********************************************!*\
  !*** ./static/pxplus_ibm_vga8-webfont.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resources/pxplus_ibm_vga8-webfont.1212fc0a68b70402b6c989ea88850067.woff";

/***/ }),

/***/ "./static/pxplus_ibm_vga8-webfont.woff2":
/*!**********************************************!*\
  !*** ./static/pxplus_ibm_vga8-webfont.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resources/pxplus_ibm_vga8-webfont.d44be7ec8dedd096488f92a0da6546d0.woff2";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNhc3M/YzYyMCIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvQXBwLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvbWFuaWZlc3QtY2xpZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvc2hhcmVkLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL19lcnJvci5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXZhdGFyX3BpeGVsYXRlZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B4cGx1c19pYm1fdmdhOC13ZWJmb250LndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B4cGx1c19pYm1fdmdhOC13ZWJmb250LndvZmYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0Esd0VBQXdFLHdFQUF3RTtRQUNoSjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDLHFDQUFxQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1C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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFpRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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REFFUCxLQUFLLENBQUMsT0FBTzs7OztXQUVaLEdBQUcsUUFBSSxLQUFLLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBckNaLE1BQUksTUFBTSxFQUNOLGtCQUFLOztJQUVoQixNQUFNLEdBQUcsR0FBRyxhQUFvQixLQUFLLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDWWhELE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFQLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FkaUM7SUFDbkMsTUFBSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h0QixpQkFBaUIscUJBQXVCLHVCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDZFOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDhFIiwiZmlsZSI6ImQ0MTEzOTQwNmZmYzJmZDdiMzEyL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgXCJkNDExMzk0MDZmZmMyZmQ3YjMxMlwiICsgXCIvXCIgKyAoe1wiYWJvdXRcIjpcImFib3V0XCIsXCJibG9nfmluZGV4XCI6XCJibG9nfmluZGV4XCIsXCJibG9nXCI6XCJibG9nXCIsXCJpbmRleFwiOlwiaW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyBjaHVua0lkICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiY2xpZW50L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jbGllbnQuanNcIik7XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJkaWY7XG5cdHZhciBnZGlmO1xuXHR2YXIgYmRpZjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSBzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xudmFyIHN3aXp6bGUgPSByZXF1aXJlKCdzaW1wbGUtc3dpenpsZScpO1xuXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG5cdGlmIChjb2xvck5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0cmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcblx0fVxufVxuXG52YXIgY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0dG86IHt9LFxuXHRnZXQ6IHt9XG59O1xuXG5jcy5nZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBwcmVmaXggPSBzdHJpbmcuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB2YWw7XG5cdHZhciBtb2RlbDtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdoc2wnOlxuXHRcdFx0dmFsID0gY3MuZ2V0LmhzbChzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHNsJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2h3Yic6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdod2InO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhbCA9IGNzLmdldC5yZ2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ3JnYic7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4ge21vZGVsOiBtb2RlbCwgdmFsdWU6IHZhbH07XG59O1xuXG5jcy5nZXQucmdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGFiYnIgPSAvXiMoW2EtZjAtOV17Myw0fSkkL2k7XG5cdHZhciBoZXggPSAvXiMoW2EtZjAtOV17Nn0pKFthLWYwLTldezJ9KT8kL2k7XG5cdHZhciByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIGtleXdvcmQgPSAvKFxcRCspLztcblxuXHR2YXIgcmdiID0gWzAsIDAsIDAsIDFdO1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBpO1xuXHR2YXIgaGV4QWxwaGE7XG5cblx0aWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzJdO1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vc2xpY2UtdnMtc3Vic3RyLXZzLXN1YnN0cmluZy1tZXRob2RzLWxvbmctc3RyaW5nLzE5XG5cdFx0XHR2YXIgaTIgPSBpICogMjtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkyLCBpMiArIDIpLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpKSB7XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzNdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEgKyBoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdLCAwKTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuXHRcdGlmIChtYXRjaFsxXSA9PT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdFx0cmV0dXJuIFswLCAwLCAwLCAwXTtcblx0XHR9XG5cblx0XHRyZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcblxuXHRcdGlmICghcmdiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZ2JbM10gPSAxO1xuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRyZ2JbaV0gPSBjbGFtcChyZ2JbaV0sIDAsIDI1NSk7XG5cdH1cblx0cmdiWzNdID0gY2xhbXAocmdiWzNdLCAwLCAxKTtcblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY3MuZ2V0LmhzbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dPyg/OlxcZCpcXC4pP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9IChwYXJzZUZsb2F0KG1hdGNoWzFdKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHMgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgbCA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblxuXHRcdHJldHVybiBbaCwgcywgbCwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLmdldC5od2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKltcXC5dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9ICgocGFyc2VGbG9hdChtYXRjaFsxXSkgJSAzNjApICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgdyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBiID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXHRcdHJldHVybiBbaCwgdywgYiwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLnRvLmhleCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIChcblx0XHQnIycgK1xuXHRcdGhleERvdWJsZShyZ2JhWzBdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMV0pICtcblx0XHRoZXhEb3VibGUocmdiYVsyXSkgK1xuXHRcdChyZ2JhWzNdIDwgMVxuXHRcdFx0PyAoaGV4RG91YmxlKE1hdGgucm91bmQocmdiYVszXSAqIDI1NSkpKVxuXHRcdFx0OiAnJylcblx0KTtcbn07XG5cbmNzLnRvLnJnYiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcpJ1xuXHRcdDogJ3JnYmEoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJywgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5yZ2IucGVyY2VudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0gLyAyNTUgKiAxMDApO1xuXHR2YXIgZyA9IE1hdGgucm91bmQocmdiYVsxXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBiID0gTWF0aC5yb3VuZChyZ2JhWzJdIC8gMjU1ICogMTAwKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSknXG5cdFx0OiAncmdiYSgnICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLmhzbCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGhzbGEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cdHJldHVybiBoc2xhLmxlbmd0aCA8IDQgfHwgaHNsYVszXSA9PT0gMVxuXHRcdD8gJ2hzbCgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUpJ1xuXHRcdDogJ2hzbGEoJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclLCAnICsgaHNsYVszXSArICcpJztcbn07XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5jcy50by5od2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBod2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciBhID0gJyc7XG5cdGlmIChod2JhLmxlbmd0aCA+PSA0ICYmIGh3YmFbM10gIT09IDEpIHtcblx0XHRhID0gJywgJyArIGh3YmFbM107XG5cdH1cblxuXHRyZXR1cm4gJ2h3YignICsgaHdiYVswXSArICcsICcgKyBod2JhWzFdICsgJyUsICcgKyBod2JhWzJdICsgJyUnICsgYSArICcpJztcbn07XG5cbmNzLnRvLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn07XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuXHR2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmIChvYmogPT0gbnVsbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG9iai5tb2RlbDtcblx0XHR0aGlzLmNvbG9yID0gb2JqLmNvbG9yLnNsaWNlKCk7XG5cdFx0dGhpcy52YWxwaGEgPSBvYmoudmFscGhhO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmopO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iai5sZW5ndGgpIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBuZXdBcnIgPSBfc2xpY2UuY2FsbChvYmosIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FyciwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9ialtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHQvLyB0aGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdG9iaiAmPSAweEZGRkZGRjtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFtcblx0XHRcdChvYmogPj4gMTYpICYgMHhGRixcblx0XHRcdChvYmogPj4gOCkgJiAweEZGLFxuXHRcdFx0b2JqICYgMHhGRlxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRpZiAoJ2FscGhhJyBpbiBvYmopIHtcblx0XHRcdGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZignYWxwaGEnKSwgMSk7XG5cdFx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmouYWxwaGEgPT09ICdudW1iZXInID8gb2JqLmFscGhhIDogMDtcblx0XHR9XG5cblx0XHR2YXIgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXHRcdHZhciBjb2xvciA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbG9yLnB1c2gob2JqW2xhYmVsc1tpXV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkoY29sb3IpO1xuXHR9XG5cblx0Ly8gcGVyZm9ybSBsaW1pdGF0aW9ucyAoY2xhbXBpbmcsIGV0Yy4pXG5cdGlmIChsaW1pdGVyc1t0aGlzLm1vZGVsXSkge1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0dmFyIGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzW3RoaXMubW9kZWxdKCk7XG5cdH0sXG5cblx0c3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IHRoaXMuY29sb3Iuc2xpY2UoKSA6IHRoaXMuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0fSxcblxuXHRvYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZDogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHBsYWNlcyA9IE1hdGgubWF4KHBsYWNlcyB8fCAwLCAwKTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKS5jb25jYXQodGhpcy52YWxwaGEpLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IuY29uY2F0KE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbCkpKSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIHJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiAoKHZhbCAlIDM2MCkgKyAzNjApICUgMzYwOyB9KSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBicmFjZS1zdHlsZVxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oMTAwKSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udmVydFt0aGlzLm1vZGVsXS5rZXl3b3JkKHRoaXMuY29sb3IpO1xuXHR9LFxuXG5cdGhleDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0aXNEYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2IuY29sb3JbaV0gPSAyNTUgLSByZ2IuY29sb3JbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHRyZXR1cm4gQ29sb3IucmdiKHZhbCwgdmFsLCB2YWwpO1xuXHR9LFxuXG5cdGZhZGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdHZhciBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0Ly8gcG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdFx0aWYgKCFtaXhpbkNvbG9yIHx8ICFtaXhpbkNvbG9yLnJnYikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCB0byBcIm1peFwiIHdhcyBub3QgYSBDb2xvciBpbnN0YW5jZSwgYnV0IHJhdGhlciBhbiBpbnN0YW5jZSBvZiAnICsgdHlwZW9mIG1peGluQ29sb3IpO1xuXHRcdH1cblx0XHR2YXIgY29sb3IxID0gbWl4aW5Db2xvci5yZ2IoKTtcblx0XHR2YXIgY29sb3IyID0gdGhpcy5yZ2IoKTtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIENvbG9yLnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKSxcblx0XHRcdFx0Y29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fVxufTtcblxuLy8gbW9kZWwgY29udmVyc2lvbiBtZXRob2RzIGFuZCBzdGF0aWMgY29uc3RydWN0b3JzXG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRpZiAoc2tpcHBlZE1vZGVscy5pbmRleE9mKG1vZGVsKSAhPT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblxuXHQvLyBjb252ZXJzaW9uIG1ldGhvZHNcblx0Q29sb3IucHJvdG90eXBlW21vZGVsXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gbW9kZWwpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoYXJndW1lbnRzLCBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0FscGhhID0gdHlwZW9mIGFyZ3VtZW50c1tjaGFubmVsc10gPT09ICdudW1iZXInID8gY2hhbm5lbHMgOiB0aGlzLnZhbHBoYTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKGFzc2VydEFycmF5KGNvbnZlcnRbdGhpcy5tb2RlbF1bbW9kZWxdLnJhdyh0aGlzLmNvbG9yKSkuY29uY2F0KG5ld0FscGhhKSwgbW9kZWwpO1xuXHR9O1xuXG5cdC8vICdzdGF0aWMnIGNvbnN0cnVjdGlvbiBtZXRob2RzXG5cdENvbG9yW21vZGVsXSA9IGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb2xvciA9IHplcm9BcnJheShfc2xpY2UuY2FsbChhcmd1bWVudHMpLCBjaGFubmVscyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQ29sb3IoY29sb3IsIG1vZGVsKTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiByb3VuZFRvKG51bSwgcGxhY2VzKSB7XG5cdHJldHVybiBOdW1iZXIobnVtLnRvRml4ZWQocGxhY2VzKSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZShwbGFjZXMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChudW0pIHtcblx0XHRyZXR1cm4gcm91bmRUbyhudW0sIHBsYWNlcyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldHNldChtb2RlbCwgY2hhbm5lbCwgbW9kaWZpZXIpIHtcblx0bW9kZWwgPSBBcnJheS5pc0FycmF5KG1vZGVsKSA/IG1vZGVsIDogW21vZGVsXTtcblxuXHRtb2RlbC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG5cdFx0KGxpbWl0ZXJzW21dIHx8IChsaW1pdGVyc1ttXSA9IFtdKSlbY2hhbm5lbF0gPSBtb2RpZmllcjtcblx0fSk7XG5cblx0bW9kZWwgPSBtb2RlbFswXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciByZXN1bHQ7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRcdHZhbCA9IG1vZGlmaWVyKHZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCk7XG5cdFx0XHRyZXN1bHQuY29sb3JbY2hhbm5lbF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCkuY29sb3JbY2hhbm5lbF07XG5cdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRyZXN1bHQgPSBtb2RpZmllcihyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1heGZuKG1heCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4LCB2KSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFycmF5KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5cbmZ1bmN0aW9uIHplcm9BcnJheShhcnIsIGxlbmd0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBhcnJbaV0gIT09ICdudW1iZXInKSB7XG5cdFx0XHRhcnJbaV0gPSAwO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9zdGF0aWMvcHhwbHVzX2libV92Z2E4LXdlYmZvbnQud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vc3RhdGljL3B4cGx1c19pYm1fdmdhOC13ZWJmb250LndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vc3RhdGljL2F2YXRhcl9waXhlbGF0ZWQuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3N0YXRpYy9hdmF0YXIucG5nXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogIFNFVFRJTkdTXFxuICovXFxuLyoqXFxuICogIENPTVBPTkVOVFNcXG4gKi9cXG4vKipcXG4gKiBSZXNldFxcbiAqL1xcbmh0bWwsIGJvZHksIGJvZHksIGRpdiwgc3Bhbiwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYWJiciwgYWRkcmVzcywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbnMsIGtiZCwgcSwgc2FtcCwgc21hbGwsIHN0cm9uZywgc3ViLCBzdXAsIHZhciwgYiwgaSwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qKlxcbiAqICBNQUlOIFJVTEVTXFxuICovXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxucCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG5cXG51bCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07IH1cXG5cXG4vKipcXG4gKiAgQkFDS0dST1VORFxcbiAqL1xcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7IH1cXG5cXG4uYmctZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMzJmOyB9XFxuXFxuLmJnLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzOyB9XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyB9XFxuXFxuLmJnLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTsgfVxcblxcbi5iZy13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7IH1cXG5cXG4uYmctZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYzsgfVxcblxcbi5iZy1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NjlkYTY7IH1cXG5cXG4uYmctZ3JheS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxOyB9XFxuXFxuLyoqXFxuICogIEJPUkRFUlxcbiAqL1xcbi5ib3JkZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkYjsgfVxcblxcbi5ib3JkZXItYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkOWRiOyB9XFxuXFxuLmJvcmRlci1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q1ZDlkYjsgfVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1ZDlkYjsgfVxcblxcbi5ib3JkZXItdG9wIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkOWRiOyB9XFxuXFxuLyoqXFxuICogIEFMSUdORVJTXFxuICovXFxuLmFsaWduZXIge1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmFsaWduZXItLXNwYWNlQmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5hbGlnbmVyLS1zcGFjZUFyb3VuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmFsaWduZXItLWNlbnRlclZlcnRpY2FsIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmFsaWduZXItLWNlbnRlckhvcml0em9udGFsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5hbGlnbmVyLS1jb250ZW50U3RhcnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG4gIC5hbGlnbmVyLS1jb250ZW50RW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi5hbGlnbmVyLS1pdGVtVG9wIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uYWxpZ25lci0taXRlbUJvdHRvbSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblxcbi5mbGV4LWdyb3csXFxuLmFsaWduZXItLWdyb3cge1xcbiAgZmxleC1ncm93OiAxOyB9XFxuXFxuLyoqXFxuICogIEZMT0FUU1xcbiAqL1xcbi5mbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5mcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLmNsZWFyZml4IDo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuXFxuLyoqXFxuICogIE1BUkdJTlNcXG4gKi9cXG4ubS14c21hbGwge1xcbiAgbWFyZ2luOiA0cHg7IH1cXG5cXG4ubWIteHNtYWxsIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDsgfVxcblxcbi5tLXNtYWxsIHtcXG4gIG1hcmdpbjogOHB4OyB9XFxuXFxuLm1iLXNtYWxsIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbi5tLW1lZGl1bSB7XFxuICBtYXJnaW46IDE2cHg7IH1cXG5cXG4ubWItbWVkaXVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG5cXG4ubS1iaWcge1xcbiAgbWFyZ2luOiAzNnB4OyB9XFxuXFxuLm1iLWJpZyB7XFxuICBtYXJnaW4tYm90dG9tOiAzNnB4OyB9XFxuXFxuLm0taHVnZSB7XFxuICBtYXJnaW46IDQ4cHg7IH1cXG5cXG4ubWItaHVnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4OyB9XFxuXFxuLm0tbm9uZSB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxcblxcbi8qKlxcbiAqICBQQURESU5HU1xcbiAqL1xcbi5wLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDRweDsgfVxcblxcbi5wYi1zbWFsbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4OyB9XFxuXFxuLnAtbWVkaXVtIHtcXG4gIHBhZGRpbmc6IDhweDsgfVxcblxcbi5wYi1tZWRpdW0ge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDsgfVxcblxcbi5wLWJpZyB7XFxuICBwYWRkaW5nOiAxNnB4OyB9XFxuXFxuLnBiLWJpZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDsgfVxcblxcbi5wLWh1Z2Uge1xcbiAgcGFkZGluZzogMzZweDsgfVxcblxcbi5wYi1odWdlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzNnB4OyB9XFxuXFxuLyoqXFxuICogIE9USEVSU1xcbiAqL1xcbi5uby13cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ub3BhY2l0eS1sb3cge1xcbiAgb3BhY2l0eTogLjU7IH1cXG5cXG4ucm91bmRlZC1jb3JuZXJzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cXG5cXG4vKipcXG4gKiBMQVlPVVRcXG4gKi9cXG4uc2VjdGlvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzZweDtcXG4gIHBhZGRpbmctdG9wOiAzNnB4OyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNlY3Rpb24ge1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xcbiAgICAgIHBhZGRpbmctdG9wOiA3MnB4OyB9IH1cXG4gIC5zZWN0aW9uICsgLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTM4MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7IH0gfVxcblxcbi5jb250YWluZXItbWVkaXVtIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5NDRweDtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY29udGFpbmVyLW1lZGl1bSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7IH0gfVxcblxcbi5jb250YWluZXItc21hbGwge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250YWluZXItc21hbGwge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyB9IH1cXG5cXG4vKipcXG4gKiAgVFlQT0dSQVBIWVxcbiAqL1xcbmJvZHkge1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfVxcblxcbmEge1xcbiAgY29sb3I6ICMwM2E5ZjQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIGE6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgzLCAxNjksIDI0NCwgMC44KTsgfVxcbiAgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDNhOWY0OyB9XFxuXFxuLnRleHQtaHVnZSwgLnRleHQtYmlnLCAudGV4dC1tZWRpdW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLnRleHQtaHVnZSB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMS4zZW07IH1cXG5cXG4udGV4dC1iaWcge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM2VtOyB9XFxuXFxuLnRleHQtbWVkaXVtIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfVxcblxcbi50ZXh0LXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTsgfVxcblxcbi50ZXh0LWJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzAzYTlmNDsgfVxcblxcbi50ZXh0LWRhcmsge1xcbiAgY29sb3I6ICMxODIzMmY7IH1cXG5cXG4udGV4dC1zZWNvbmRhcnkge1xcbiAgY29sb3I6ICNlOTFlNjM7IH1cXG5cXG4udGV4dC13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi50ZXh0LXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICM0Y2FmNTA7IH1cXG5cXG4udGV4dC1pbmZvIHtcXG4gIGNvbG9yOiAjNWJjMGRlOyB9XFxuXFxuLnRleHQtd2FybmluZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTsgfVxcblxcbi50ZXh0LWVycm9yIHtcXG4gIGNvbG9yOiAjZTc0YzNjOyB9XFxuXFxuLnRleHQtZ3JheSB7XFxuICBjb2xvcjogIzk2OWRhNjsgfVxcblxcbi50ZXh0LWdyYXktbGlnaHQge1xcbiAgY29sb3I6ICNlY2VmZjE7IH1cXG5cXG4udGV4dC1saWdodCB7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLnRleHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4udGV4dC1saW5lVGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcblxcbi50ZXh0LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4udGV4dC11bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LXdpdGhTdWJ0aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cXG4gIC50ZXh0LXdpdGhTdWJ0aXRsZSArIC50ZXh0LWh1Z2UsXFxuICAudGV4dC13aXRoU3VidGl0bGUgKyAudGV4dC1iaWcsXFxuICAudGV4dC13aXRoU3VidGl0bGUgKyAudGV4dC1tZWRpdW0sXFxuICAudGV4dC13aXRoU3VidGl0bGUgKyAudGV4dC1zbWFsbCB7XFxuICAgIG1hcmdpbi10b3A6IC41ZW07IH1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLyoqXFxuICogIEJBREdFXFxuICpcXG4gKiAgTWFya3VwOlxcbiAqICAtLS0tLS0tXFxuICpcXG4gKiAgPHVsPlxcbiAqICAgIDxsaSBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcXFwiPkJhZGdlIDE8L2xpPlxcbiAqICAgIDxsaSBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtLXNlY29uZGFyeSBiYWRnZS0tYmlnXFxcIj5CYWRnZSAxPC9saT5cXG4gKiAgPC91bD5cXG4gKlxcbiAqL1xcbi5iYWRnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxuICBwYWRkaW5nOiA4cHggMTZweDsgfVxcbiAgLmJhZGdlLS1iaWcge1xcbiAgICBmb250LXNpemU6IDEuM2VtOyB9XFxuICAuYmFkZ2UtLXNtYWxsIHtcXG4gICAgZm9udC1zaXplOiAwLjdlbTsgfVxcbiAgLmJhZGdlLS1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gIC5iYWRnZS0tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gIC5iYWRnZS0tZGFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODIzMmY7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAuYmFkZ2UtLWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2OWRhNjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gIC5iYWRnZS0tc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAuYmFkZ2UtLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gIC5iYWRnZS0td2FybmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLyoqXFxuICogIEJVVFRPTlxcbiAqXFxuICogIE1hcmt1cDpcXG4gKiAgLS0tLS0tLVxcbiAqXFxuICogIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCI+RGVmYXVsdDwvYnV0dG9uPlxcbiAqICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLS1iaWdcXFwiPkJ1dHRvbiBiaWc8L2J1dHRvbj5cXG4gKiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kYXJ5XFxcIj5CdXR0b24gc2Vjb25kYXJ5PC9idXR0b24+XFxuICpcXG4gKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBtYXJnaW46IDAgOHB4IDE2cHggOHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuYnV0dG9uOmZvY3VzLCAuYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNjksIDI0NCwgMC44KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5idXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcbiAgLmJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAuYnV0dG9uLS1iaWcge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMzZweDsgfVxcbiAgLmJ1dHRvbi0tc21hbGwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgLmJ1dHRvbi0tbW9iaWxlRnVsbCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG4gIC5idXR0b24tLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5idXR0b24tLXNlY29uZGFyeTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDMwLCA5OSwgMC44KTtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ1dHRvbi0td2hpdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAzYTlmNDsgfVxcbiAgICAuYnV0dG9uLS13aGl0ZTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAgIGNvbG9yOiByZ2JhKDMsIDE2OSwgMjQ0LCAwLjgpOyB9XFxuICAuYnV0dG9uLS1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5idXR0b24tLWdyZWVuOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjgpO1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAuYnV0dG9uLS1yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuYnV0dG9uLS1yZWQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOCk7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG4gIC5idXR0b24tLXRyYW5zcGFyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjMDNhOWY0OyB9XFxuICAgIC5idXR0b24tLXRyYW5zcGFyZW50OmFjdGl2ZSwgLmJ1dHRvbi0tdHJhbnNwYXJlbnQ6aG92ZXIsIC5idXR0b24tLXRyYW5zcGFyZW50OmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjb2xvcjogcmdiYSgzLCAxNjksIDI0NCwgMC44KTtcXG4gICAgICBvcGFjaXR5OiAuODsgfVxcbiAgLmJ1dHRvbi0tb3V0bGluZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkYjtcXG4gICAgY29sb3I6ICMwM2E5ZjQ7IH1cXG4gICAgLmJ1dHRvbi0tb3V0bGluZWQ6YWN0aXZlLCAuYnV0dG9uLS1vdXRsaW5lZDpob3ZlciwgLmJ1dHRvbi0tb3V0bGluZWQ6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiByZ2JhKDMsIDE2OSwgMjQ0LCAwLjgpO1xcbiAgICAgIG9wYWNpdHk6IC44OyB9XFxuXFxuLyoqXFxuICogIEZPUk1TXFxuICpcXG4gKiAgTWFya3VwOlxcbiAqICAtLS0tLS0tLS1cXG4gKiAgPGRpdiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtZnVsbFdpZHRoXFxcIj5cXG4gKiAgICA8aW5wdXQgaWQ9XFxcIiNcXFwiIHBsYWNlaG9sZGVyPVxcXCIjXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXG4gKiAgPC9kaXY+XFxuICpcXG4gKiAgPGRpdiBjbGFzcz1cXFwic2VsZWN0IHNlbGVjdC1mdWxsV2lkdGhcXFwiPlxcbiAqICAgIDxzZWxlY3QgbmFtZT1cXFwiI1xcXCIgaWQ9XFxcIiNcXFwiPlxcbiAqICAgICAgPG9wdGlvbj5PcHRpb24gMTwvb3B0aW9uPlxcbiAqICAgICAgPG9wdGlvbj5PcHRpb24gMjwvb3B0aW9uPlxcbiAqICAgIDwvc2VsZWN0PlxcbiAqICA8L2Rpdj5cXG4gKlxcbiAqICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0YXJlYVxcXCI+XFxuICogICAgPHRleHRhcmVhIGlkPVxcXCIjXFxcIj48L3RleHRhcmVhPlxcbiAqICA8L2Rpdj5cXG4gKlxcbiAqICA8ZGl2IGNsYXNzPVxcXCJyYWRpb1xcXCI+XFxuICogICAgPGlucHV0IGlkPVxcXCIjXFxcIiBuYW1lPVxcXCIjXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgdmFsdWU9XFxcIlxcXCI+XFxuICogICAgPGxhYmVsIGZvcj1cXFwiI1xcXCI+UmFkaW8gYnV0dG9uPC9sYWJlbD5cXG4gKiAgPC9kaXY+XFxuICpcXG4gKiAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcbiAqICAgIDxpbnB1dCBpZD1cXFwiI1xcXCIgbmFtZT1cXFwiI1xcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHZhbHVlPVxcXCJcXFwiPlxcbiAqICAgIDxsYWJlbCBmb3I9XFxcIiNcXFwiPkNoZWNrYm94PC9sYWJlbD5cXG4gKiAgPC9kaXY+XFxuICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4ICNlY2VmZjEgaW5zZXQ7IH1cXG5cXG4udGV4dGFyZWEsXFxuLmlucHV0LFxcbi5zZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkYjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC50ZXh0YXJlYSA6Zm9jdXMsXFxuICAuaW5wdXQgOmZvY3VzLFxcbiAgLnNlbGVjdCA6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAudGV4dGFyZWEuaGFzLWVycm9yLFxcbiAgLmlucHV0Lmhhcy1lcnJvcixcXG4gIC5zZWxlY3QuaGFzLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZDogI2VjZWZmMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3NGMzYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnNlbGVjdDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAuc2VsZWN0LWZ1bGxXaWR0aCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnNlbGVjdCBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBjb2xvcjogIzI3MjcyNztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZSwgLnNlbGVjdCBzZWxlY3Q6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmM7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLnNlbGVjdCBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5zZWxlY3Q6OmFmdGVyLCAuc2VsZWN0OjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDNhOWY0O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwcHg7IH1cXG4gIC5zZWxlY3Q6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7IH1cXG4gIC5zZWxlY3Q6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cXG4udGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC50ZXh0YXJlYS1mdWxsV2lkdGgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50ZXh0YXJlYSB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiAjMjcyNzI3O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC50ZXh0YXJlYSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjOTY5ZGE2OyB9XFxuICAgIC50ZXh0YXJlYSB0ZXh0YXJlYTpmb2N1cywgLnRleHRhcmVhIHRleHRhcmVhOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYztcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAuY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgICBhbmltYXRpb246IGNoZWNrYm94QW5kUmFkaW9BbmltYXRpb24gLjI1cztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10gKyBsYWJlbCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgICAgIC5jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddICsgbGFiZWw6OmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkYjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB3aWR0aDogMjBweDsgfVxcbiAgICAgIC5jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDNhOWY0O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAzYTlmNDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGVmdDogMTFweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgd2lkdGg6IDdweDtcXG4gICAgICAgIHotaW5kZXg6IDE7IH1cXG5cXG4ucmFkaW8ge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAucmFkaW8gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLnJhZGlvIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uOiBjaGVja2JveEFuZFJhZGlvQW5pbWF0aW9uIC4yNXM7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5yYWRpbyBpbnB1dFt0eXBlPSdyYWRpbyddICsgbGFiZWwge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gICAgICAucmFkaW8gaW5wdXRbdHlwZT0ncmFkaW8nXSArIGxhYmVsOjpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ5ZGI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHdpZHRoOiAyMHB4OyB9XFxuICAgICAgLnJhZGlvIGlucHV0W3R5cGU9J3JhZGlvJ10gKyBsYWJlbDo6YWZ0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIGxlZnQ6IDExcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEzcHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIHotaW5kZXg6IDE7IH1cXG5cXG5Aa2V5ZnJhbWVzIGNoZWNrYm94QW5kUmFkaW9BbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KSByb3RhdGUoNDVkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpOyB9IH1cXG5cXG4uaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbnB1dCA6Zm9jdXMsXFxuICAuaW5wdXQgOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLmlucHV0IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6ICMyNzI3Mjc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAuaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzk2OWRhNjsgfVxcbiAgLmlucHV0LXdpdGhJY29uIGlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDsgfVxcbiAgLmlucHV0LWljb24ge1xcbiAgICBmaWxsOiAjOTY5ZGE2O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB3aWR0aDogMTZweDsgfVxcbiAgLmlucHV0LWZ1bGxXaWR0aCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbi8qKlxcbiAqICBGT1JNIENPTExBUFNFRCAoaXRlbXMgaW4gcm93IHdpdGhvdXQgZ2FwIGJldHdlZW4gdGhlbSlcXG4gKlxcbiAqICBNYXJrdXA6XFxuICogIC0tLS0tLS1cXG4gKlxcbiAqICA8ZGl2IGNsYXNzPVxcXCJmb3JtQ29sbGFwc2VkXFxcIj5cXG4gKiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dCBmb3JtQ29sbGFwc2VkLWl0ZW0gZm9ybUNvbGxhcHNlZC1pdGVtUHJpbWFyeVxcXCI+XFxuICogICAgICA8aW5wdXQgaWQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJLbGluZ29uIHNlYXJjaFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXG4gKiAgICA8L2Rpdj5cXG4gKiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3QgZm9ybUNvbGxhcHNlZC1pdGVtXFxcIj5cXG4gKiAgICAgIDxzZWxlY3QgbmFtZT1cXFwiY291bnRyeS1jb2RlXFxcIiBpZD1cXFwiY291bnRyeS1jb2RlXFxcIj5cXG4gKiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQU9cXFwiPiBBbmdvbGE8L29wdGlvbj5cXG4gKiAgICAgIDwvc2VsZWN0PlxcbiAqICAgIDwvZGl2PlxcbiAqICAgIDxidXR0b24gY2xhc3M9XFxcImZvcm1Db2xsYXBzZWQtaXRlbSBidXR0b24gYnV0dG9uLXByaW1hcnlcXFwiPlxcbiAqICAgICAgU2VhcmNoXFxuICogICAgPC9idXR0b24+XFxuICogIDwvZGl2PlxcbiAqKi9cXG4uZm9ybUNvbGxhcHNlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgLmZvcm1Db2xsYXBzZWQtaXRlbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cXG4gICAgLmZvcm1Db2xsYXBzZWQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7IH1cXG4gICAgLmZvcm1Db2xsYXBzZWQtaXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweCAhaW1wb3J0YW50OyB9XFxuICAgIC5mb3JtQ29sbGFwc2VkLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAwOyB9XFxuICAgIC5mb3JtQ29sbGFwc2VkLWl0ZW1QcmltYXJ5IHtcXG4gICAgICBmbGV4OiAxOyB9XFxuXFxuLyoqXFxuICogIExPQURJTkcgQkFSXFxuICpcXG4gKiAgTWFya3VwOlxcbiAqICAtLS0tLS0tLS1cXG4gKiAgPGRpdiBjbGFzcz1cXFwibG9hZGluZ0JhclxcXCI+PC9kaXY+XFxuICpcXG4gKi9cXG4ubG9hZGluZ0JhciB7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5sb2FkaW5nQmFyOjpiZWZvcmUge1xcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBsZWZ0OiAtMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMHB4OyB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIGZyb20ge1xcbiAgICBsZWZ0OiAtMzAwcHg7XFxuICAgIHdpZHRoOiAzMCU7IH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAzMCU7IH1cXG4gIDcwJSB7XFxuICAgIHdpZHRoOiA3MCU7IH1cXG4gIDgwJSB7XFxuICAgIGxlZnQ6IDUwJTsgfVxcbiAgOTUlIHtcXG4gICAgbGVmdDogMTIwJTsgfVxcbiAgdG8ge1xcbiAgICBsZWZ0OiAxMDAlOyB9IH1cXG5cXG4vKipcXG4gKiAgTE9BRElORyBTUElOTkVSXFxuICpcXG4gKiAgTWFya3VwOlxcbiAqICAtLS0tLS0tLS1cXG4gKiAgPGRpdiBjbGFzcz0nbG9hZGluZ1NwaW5uZXInPlxcbiAqICAgIDxzcGFuIGNsYXNzPSdsb2FkaW5nU3Bpbm5lci1pbm5lcic+PC9zcGFuPlxcbiAqICAgIDxzcGFuIGNsYXNzPSdsb2FkaW5nU3Bpbm5lci1pbm5lcic+PC9zcGFuPlxcbiAqICAgIDxzcGFuIGNsYXNzPSdsb2FkaW5nU3Bpbm5lci1pbm5lcic+PC9zcGFuPlxcbiAqICAgIDxzcGFuIGNsYXNzPSdsb2FkaW5nU3Bpbm5lci1pbm5lcic+PC9zcGFuPlxcbiAqICA8L2Rpdj5cXG4gKlxcbiAqL1xcbi5sb2FkaW5nU3Bpbm5lciB7XFxuICBhbmltYXRpb246IHJvdGF0ZUxvYWRlciA0cyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAubG9hZGluZ1NwaW5uZXItaW5uZXIge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogOXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA5cHg7IH1cXG4gICAgLmxvYWRpbmdTcGlubmVyLWlubmVyOm50aC1jaGlsZCgxKSB7XFxuICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVCYWxsMSAxcyBpbmZpbml0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQuNXB4LCA0LjVweCwgMCk7IH1cXG4gICAgLmxvYWRpbmdTcGlubmVyLWlubmVyOm50aC1jaGlsZCgyKSB7XFxuICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVCYWxsMiAxcyBpbmZpbml0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmxvYWRpbmdTcGlubmVyLWlubmVyOm50aC1jaGlsZCgzKSB7XFxuICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVCYWxsMyAxcyBpbmZpbml0ZTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgcmlnaHQ6IDA7IH1cXG4gICAgLmxvYWRpbmdTcGlubmVyLWlubmVyOm50aC1jaGlsZCg0KSB7XFxuICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVCYWxsNCAxcyBpbmZpbml0ZTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlTG9hZGVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgdHJhbnNsYXRlQmFsbDEge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQuNXB4LCA0LjVweCwgMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHRyYW5zbGF0ZUJhbGwyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNC41cHgsIDQuNXB4LCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgdHJhbnNsYXRlQmFsbDMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00LjVweCwgLTQuNXB4LCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgdHJhbnNsYXRlQmFsbDQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQuNXB4LCAtNC41cHgsIDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XFxuXFxuLyoqXFxuICogIE5PVElGSUNBVElPTlxcbiAqXFxuICogIE1hcmt1cDpcXG4gKiAgLS0tLS0tLVxcbiAqXFxuICogIDxkaXYgY2xhc3M9XFxcIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLXN1Y2Vzc1xcXCI+U3VjY2VzcyBub3RpZmljYXRpb248L2Rpdj5cXG4gKiAgPGRpdiBjbGFzcz1cXFwibm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0taW5mb1xcXCI+U3VjY2VzcyBpbmZvPC9kaXY+XFxuICogIDxkaXYgY2xhc3M9XFxcIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yXFxcIj5TdWNjZXNzIGVycm9yPC9kaXY+XFxuICogIDxkaXYgY2xhc3M9XFxcIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLXdhcm5pbmdcXFwiPlN1Y2Nlc3Mgd2FybmluZzwvZGl2PlxcbiAqXFxuICovXFxuLm5vdGlmaWNhdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxuICBwYWRkaW5nOiAxNnB4OyB9XFxuICAubm90aWZpY2F0aW9uIHA6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gIC5ub3RpZmljYXRpb24tLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0OyB9XFxuICAubm90aWZpY2F0aW9uLS1kYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjMyZjsgfVxcbiAgLm5vdGlmaWNhdGlvbi0tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MzsgfVxcbiAgLm5vdGlmaWNhdGlvbi0td2hpdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAubm90aWZpY2F0aW9uLS1zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgfVxcbiAgLm5vdGlmaWNhdGlvbi0taW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7IH1cXG4gIC5ub3RpZmljYXRpb24tLXdhcm5pbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOyB9XFxuICAubm90aWZpY2F0aW9uLS1lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7IH1cXG4gIC5ub3RpZmljYXRpb24tLWdyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5ZGE2OyB9XFxuICAubm90aWZpY2F0aW9uLS1ncmF5LWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTsgfVxcblxcbi8qKlxcbiAqICBQQUdJTkFUT1JcXG4gKlxcbiAqICBNYXJrdXA6XFxuICogIC0tLS0tLS1cXG4gKlxcbiAqICA8dWwgY2xhc3M9XFxcInBhZ2luYXRvclxcXCI+XFxuICogICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0b3ItaXRlbVxcXCI+XFxuICogICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwicGFnaW5hdG9yLWl0ZW1MaW5rXFxcIj48IFByZXY8L2E+XFxuICogICAgPC9saT5cXG4gKiAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRvci1pdGVtXFxcIj5cXG4gKiAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJwYWdpbmF0b3ItaXRlbUxpbmtcXFwiPjE8L2E+XFxuICogICAgPC9saT5cXG4gKiAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRvci1pdGVtXFxcIj5cXG4gKiAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJwYWdpbmF0b3ItaXRlbUxpbmsgaXMtYWN0aXZlXFxcIj4yPC9hPlxcbiAqICAgIDwvbGk+XFxuICogICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0b3ItaXRlbVxcXCI+XFxuICogICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwicGFnaW5hdG9yLWl0ZW1MaW5rXFxcIj4zPC9hPlxcbiAqICAgIDwvbGk+XFxuICogICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0b3ItaXRlbVxcXCI+XFxuICogICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwicGFnaW5hdG9yLWl0ZW1MaW5rXFxcIj5OZXh0ID48L2E+XFxuICogICAgPC9saT5cXG4gKiAgPC91bD5cXG4gKi9cXG4ucGFnaW5hdG9yLWl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gIC5wYWdpbmF0b3ItaXRlbUxpbmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDsgfVxcbiAgICAucGFnaW5hdG9yLWl0ZW1MaW5rLmlzLWFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4vKipcXG4gKiAgVEFCTEVcXG4gKlxcbiAqICBNYXJrdXA6XFxuICogIC0tLS0tLS1cXG4gKlxcbiAqICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXG4gKiAgICA8dHI+XFxuICogICAgICA8dGg+Rmlyc3QgY29sdW1uPC90aD5cXG4gKiAgICAgIDx0aD5TZWNvbmQgY29sdW1uPC90aD5cXG4gKiAgICAgIDx0aD5UaGlyZCBjb2x1bW48L3RoPlxcbiAqICAgIDwvdHI+XFxuICogICAgPHRyPlxcbiAqICAgICAgPHRkPVxcXCJGaXJzdCBjb2x1bW5cXFwiPkJsdWU8L3RkPlxcbiAqICAgICAgPHRkPVxcXCJTZWNvbmQgY29sdW1uXFxcIj5PbmU8L3RkPlxcbiAqICAgICAgPHRkPVxcXCJUaGlyZCBjb2x1bW5cXFwiPk15IGxpZmUgZmFkZXM8L3RkPlxcbiAqICAgIDwvdHI+XFxuICogIDwvdGFibGU+XFxuICpcXG4gKi9cXG4udGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ5ZGI7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRhYmxlIHRoLFxcbiAgLnRhYmxlIHRkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ5ZGI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAudGFibGUgdGhlYWQge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDlkYjsgfVxcbiAgLnRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICM5NjlkYTY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLyoqXFxuICogIFRBQkxFIFJFU1BPTlNJVkVcXG4gKlxcbiAqICBNYXJrdXA6XFxuICogIC0tLS0tLS1cXG4gKlxcbiAqICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLS1yZXNwb25zaXZlXFxcIj5cXG4gKiAgICA8dHI+XFxuICogICAgICA8dGg+Rmlyc3QgY29sdW1uPC90aD5cXG4gKiAgICAgIDx0aD5TZWNvbmQgY29sdW1uPC90aD5cXG4gKiAgICAgIDx0aD5UaGlyZCBjb2x1bW48L3RoPlxcbiAqICAgIDwvdHI+XFxuICogICAgPHRyPlxcbiAqICAgICAgPHRkIGRhdGEtdGg9XFxcIkZpcnN0IGNvbHVtblxcXCI+Qmx1ZTwvdGQ+XFxuICogICAgICA8dGQgZGF0YS10aD1cXFwiU2Vjb25kIGNvbHVtblxcXCI+T25lPC90ZD5cXG4gKiAgICAgIDx0ZCBkYXRhLXRoPVxcXCJUaGlyZCBjb2x1bW5cXFwiPk15IGxpZmUgZmFkZXM8L3RkPlxcbiAqICAgIDwvdHI+XFxuICogICAgPHRyPlxcbiAqICAgICAgPHRkIGRhdGEtdGg9XFxcIkZpcnN0IGNvbHVtblxcXCI+R3JlZW48L3RkPlxcbiAqICAgICAgPHRkIGRhdGEtdGg9XFxcIlNlY29uZCBjb2x1bW5cXFwiPlR3bzwvdGQ+XFxuICogICAgICA8dGQgZGF0YS10aD1cXFwiVGhpcmQgY29sdW1uXFxcIj5cXG4gKiAgICAgICAgd2hlbiB0aGUgd29ybGQgd2FzIHBvd2VyZWQgYnkgdGhlIGJsYWNrIGZ1ZWwuLi4gYW5kIHRoZSBkZXNlcnRcXG4gKiAgICAgICAgc3Byb3V0ZWQgZ3JlYXQgY2l0aWVzIG9mIHBpcGUgYW5kIHN0ZWVsLlxcbiAqICAgICAgPC90ZD5cXG4gKiAgICA8L3RyPlxcbiAqICAgIDx0cj5cXG4gKiAgICAgIDx0ZCBkYXRhLXRoPVxcXCJGaXJzdCBjb2x1bW5cXFwiPlllbGxvdzwvdGQ+XFxuICogICAgICA8dGQgZGF0YS10aD1cXFwiU2Vjb25kIGNvbHVtblxcXCI+VGhyZWU8L3RkPlxcbiAqICAgICAgPHRkIGRhdGEtdGg9XFxcIlRoaXJkIGNvbHVtblxcXCI+XFxuICogICAgICAgIEEgd2hpcmx3aW5kIG9mIGxvb3RpbmcsIGEgZmlyZXN0b3JtIG9mIGZlYXIuXFxuICogICAgICA8L3RkPlxcbiAqICAgIDwvdHI+XFxuICogIDwvdGFibGU+XFxuICpcXG4gKi9cXG4udGFibGUtLXJlc3BvbnNpdmUgdGgge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi50YWJsZS0tcmVzcG9uc2l2ZSB0ZCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC50YWJsZS0tcmVzcG9uc2l2ZSB0ZCB7XFxuICAgICAgYm9yZGVyOiAwOyB9IH1cXG4gIC50YWJsZS0tcmVzcG9uc2l2ZSB0ZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM5NjlkYTY7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aCkgXFxcIjogXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgICAgLnRhYmxlLS1yZXNwb25zaXZlIHRkOjpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuICAudGFibGUtLXJlc3BvbnNpdmUgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDlkYjsgfVxcblxcbi50YWJsZS0tcmVzcG9uc2l2ZSB0aCxcXG4udGFibGUtLXJlc3BvbnNpdmUgdGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgIC50YWJsZS0tcmVzcG9uc2l2ZSB0aCxcXG4gICAgLnRhYmxlLS1yZXNwb25zaXZlIHRkIHtcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDlkYjtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9IH1cXG5cXG4vKipcXG4gKiAgVEFCU1xcbiAqXFxuICogIE1hcmt1cDpcXG4gKiAgLS0tLS0tLVxcbiAqXFxuICogIDxkaXYgY2xhc3M9XFxcInRhYnNcXFwiPlxcbiAqICAgIDxhIGhyZWY9XFxcIiNcXFwiIHRpdGxlPVxcXCIjXFxcIiBjbGFzcz1cXFwidGFicy1pdGVtXFxcIj5bLi4uXTwvYT5cXG4gKiAgICA8YSBocmVmPVxcXCIjXFxcIiB0aXRsZT1cXFwiI1xcXCIgY2xhc3M9XFxcInRhYnMtaXRlbSBpcy1zZWxlY3RlZFxcXCI+Wy4uLl08L2E+XFxuICogIDwvZGl2PlxcbiAqXFxuICovXFxuLnRhYnMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ5ZGI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC50YWJzLWl0ZW0ge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjOTY5ZGE2O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLnRhYnMtaXRlbTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMwM2E5ZjQ7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC50YWJzLWl0ZW0uaXMtc2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDNhOWY0O1xcbiAgICAgIGNvbG9yOiAjMDNhOWY0OyB9XFxuXFxuLyoqXFxuICogIFRBR1xcbiAqXFxuICogIE1hcmt1cDpcXG4gKiAgLS0tLS0tLVxcbiAqXFxuICogIDx1bD5cXG4gKiAgICA8bGkgY2xhc3M9XFxcInRhZ1xcXCI+RmFudGFzeTwvbGk+XFxuICogICAgPGxpIGNsYXNzPVxcXCJ0YWdcXFwiPkZpY3Rpb248L2xpPlxcbiAqICAgIDxsaSBjbGFzcz1cXFwidGFnXFxcIj5Db250ZW1wb3Jhcnk8L2xpPlxcbiAqICA8L3VsPlxcbiAqXFxuICogIDx1bD5cXG4gKiAgICA8bGkgY2xhc3M9XFxcInRhZ1xcXCI+XFxuICogICAgICA8YSBocmVmPVxcXCIjXFxcIj5GYW50YXN5PC9hPlxcbiAqICAgIDwvbGk+XFxuICogICAgPGxpIGNsYXNzPVxcXCJ0YWdcXFwiPlxcbiAqICAgICAgPGEgaHJlZj1cXFwiI1xcXCI+RmljdGlvbjwvYT5cXG4gKiAgICA8L2xpPlxcbiAqICAgIDxsaSBjbGFzcz1cXFwidGFnXFxcIj5cXG4gKiAgICAgICA8YSBocmVmPVxcXCIjXFxcIj5Db250ZW1wb3Jhcnk8L2E+XFxuICogICAgPC9saT5cXG4gKiAgPC91bD5cXG4gKlxcbiAqL1xcbi50YWcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMCAxNnB4IDE2cHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnRhZzo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZWNlZmYxO1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtOHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAwOyB9XFxuICAudGFnOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogLTIuNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMi41cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB3aWR0aDogNXB4OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTQwcHg7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNzIwcHg7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogOTYwcHg7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDExNDBweDsgfSB9XFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7IH1cXG5cXG4ubm8tZ3V0dGVycyB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgLm5vLWd1dHRlcnMgPiAuY29sLFxcbiAgLm5vLWd1dHRlcnMgPiBbY2xhc3MqPSdjb2wtJ10ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLFxcbi5jb2wtYXV0bywgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbSxcXG4uY29sLXNtLWF1dG8sIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQsXFxuLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLFxcbi5jb2wtbGctYXV0bywgLmNvbC14bC0xLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bCxcXG4uY29sLXhsLWF1dG8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4OyB9XFxuXFxuLmNvbCB7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvbC1hdXRvIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IG5vbmU7IH1cXG5cXG4uY29sLTEge1xcbiAgZmxleDogMCAwIDguMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcblxcbi5jb2wtMiB7XFxuICBmbGV4OiAwIDAgMTYuNjY2NjclO1xcbiAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG5cXG4uY29sLTMge1xcbiAgZmxleDogMCAwIDI1JTtcXG4gIG1heC13aWR0aDogMjUlOyB9XFxuXFxuLmNvbC00IHtcXG4gIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcblxcbi5jb2wtNSB7XFxuICBmbGV4OiAwIDAgNDEuNjY2NjclO1xcbiAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG5cXG4uY29sLTYge1xcbiAgZmxleDogMCAwIDUwJTtcXG4gIG1heC13aWR0aDogNTAlOyB9XFxuXFxuLmNvbC03IHtcXG4gIGZsZXg6IDAgMCA1OC4zMzMzMyU7XFxuICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcblxcbi5jb2wtOCB7XFxuICBmbGV4OiAwIDAgNjYuNjY2NjclO1xcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG5cXG4uY29sLTkge1xcbiAgZmxleDogMCAwIDc1JTtcXG4gIG1heC13aWR0aDogNzUlOyB9XFxuXFxuLmNvbC0xMCB7XFxuICBmbGV4OiAwIDAgODMuMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG5cXG4uY29sLTExIHtcXG4gIGZsZXg6IDAgMCA5MS42NjY2NyU7XFxuICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcblxcbi5jb2wtMTIge1xcbiAgZmxleDogMCAwIDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4ub3JkZXItZmlyc3Qge1xcbiAgb3JkZXI6IC0xOyB9XFxuXFxuLm9yZGVyLTEge1xcbiAgb3JkZXI6IDE7IH1cXG5cXG4ub3JkZXItMiB7XFxuICBvcmRlcjogMjsgfVxcblxcbi5vcmRlci0zIHtcXG4gIG9yZGVyOiAzOyB9XFxuXFxuLm9yZGVyLTQge1xcbiAgb3JkZXI6IDQ7IH1cXG5cXG4ub3JkZXItNSB7XFxuICBvcmRlcjogNTsgfVxcblxcbi5vcmRlci02IHtcXG4gIG9yZGVyOiA2OyB9XFxuXFxuLm9yZGVyLTcge1xcbiAgb3JkZXI6IDc7IH1cXG5cXG4ub3JkZXItOCB7XFxuICBvcmRlcjogODsgfVxcblxcbi5vcmRlci05IHtcXG4gIG9yZGVyOiA5OyB9XFxuXFxuLm9yZGVyLTEwIHtcXG4gIG9yZGVyOiAxMDsgfVxcblxcbi5vcmRlci0xMSB7XFxuICBvcmRlcjogMTE7IH1cXG5cXG4ub3JkZXItMTIge1xcbiAgb3JkZXI6IDEyOyB9XFxuXFxuLm9mZnNldC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcblxcbi5vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclOyB9XFxuXFxuLm9mZnNldC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7IH1cXG5cXG4ub2Zmc2V0LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxcblxcbi5vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclOyB9XFxuXFxuLm9mZnNldC02IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7IH1cXG5cXG4ub2Zmc2V0LTcge1xcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxcblxcbi5vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclOyB9XFxuXFxuLm9mZnNldC05IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7IH1cXG5cXG4ub2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cXG5cXG4ub2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5jb2wtc20ge1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLmNvbC1zbS1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jb2wtc20tMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLmNvbC1zbS0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5jb2wtc20tMyB7XFxuICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuY29sLXNtLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLmNvbC1zbS01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5jb2wtc20tNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuY29sLXNtLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmNvbC1zbS04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5jb2wtc20tOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuY29sLXNtLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5jb2wtc20tMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLmNvbC1zbS0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5vcmRlci1zbS1maXJzdCB7XFxuICAgIG9yZGVyOiAtMTsgfVxcbiAgLm9yZGVyLXNtLTEge1xcbiAgICBvcmRlcjogMTsgfVxcbiAgLm9yZGVyLXNtLTIge1xcbiAgICBvcmRlcjogMjsgfVxcbiAgLm9yZGVyLXNtLTMge1xcbiAgICBvcmRlcjogMzsgfVxcbiAgLm9yZGVyLXNtLTQge1xcbiAgICBvcmRlcjogNDsgfVxcbiAgLm9yZGVyLXNtLTUge1xcbiAgICBvcmRlcjogNTsgfVxcbiAgLm9yZGVyLXNtLTYge1xcbiAgICBvcmRlcjogNjsgfVxcbiAgLm9yZGVyLXNtLTcge1xcbiAgICBvcmRlcjogNzsgfVxcbiAgLm9yZGVyLXNtLTgge1xcbiAgICBvcmRlcjogODsgfVxcbiAgLm9yZGVyLXNtLTkge1xcbiAgICBvcmRlcjogOTsgfVxcbiAgLm9yZGVyLXNtLTEwIHtcXG4gICAgb3JkZXI6IDEwOyB9XFxuICAub3JkZXItc20tMTEge1xcbiAgICBvcmRlcjogMTE7IH1cXG4gIC5vcmRlci1zbS0xMiB7XFxuICAgIG9yZGVyOiAxMjsgfVxcbiAgLm9mZnNldC1zbS0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5vZmZzZXQtc20tMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1zbS0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1zbS0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxcbiAgLm9mZnNldC1zbS00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxcbiAgLm9mZnNldC1zbS01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLm9mZnNldC1zbS02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxcbiAgLm9mZnNldC1zbS03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1zbS04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1zbS05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxcbiAgLm9mZnNldC1zbS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cXG4gIC5vZmZzZXQtc20tMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wtbWQge1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLmNvbC1tZC1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jb2wtbWQtMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLmNvbC1tZC0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5jb2wtbWQtMyB7XFxuICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuY29sLW1kLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLmNvbC1tZC01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5jb2wtbWQtNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuY29sLW1kLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmNvbC1tZC04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5jb2wtbWQtOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuY29sLW1kLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5jb2wtbWQtMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLmNvbC1tZC0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5vcmRlci1tZC1maXJzdCB7XFxuICAgIG9yZGVyOiAtMTsgfVxcbiAgLm9yZGVyLW1kLTEge1xcbiAgICBvcmRlcjogMTsgfVxcbiAgLm9yZGVyLW1kLTIge1xcbiAgICBvcmRlcjogMjsgfVxcbiAgLm9yZGVyLW1kLTMge1xcbiAgICBvcmRlcjogMzsgfVxcbiAgLm9yZGVyLW1kLTQge1xcbiAgICBvcmRlcjogNDsgfVxcbiAgLm9yZGVyLW1kLTUge1xcbiAgICBvcmRlcjogNTsgfVxcbiAgLm9yZGVyLW1kLTYge1xcbiAgICBvcmRlcjogNjsgfVxcbiAgLm9yZGVyLW1kLTcge1xcbiAgICBvcmRlcjogNzsgfVxcbiAgLm9yZGVyLW1kLTgge1xcbiAgICBvcmRlcjogODsgfVxcbiAgLm9yZGVyLW1kLTkge1xcbiAgICBvcmRlcjogOTsgfVxcbiAgLm9yZGVyLW1kLTEwIHtcXG4gICAgb3JkZXI6IDEwOyB9XFxuICAub3JkZXItbWQtMTEge1xcbiAgICBvcmRlcjogMTE7IH1cXG4gIC5vcmRlci1tZC0xMiB7XFxuICAgIG9yZGVyOiAxMjsgfVxcbiAgLm9mZnNldC1tZC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5vZmZzZXQtbWQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1tZC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1tZC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxcbiAgLm9mZnNldC1tZC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxcbiAgLm9mZnNldC1tZC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLm9mZnNldC1tZC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxcbiAgLm9mZnNldC1tZC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1tZC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1tZC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxcbiAgLm9mZnNldC1tZC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cXG4gIC5vZmZzZXQtbWQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb2wtbGcge1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLmNvbC1sZy1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jb2wtbGctMSB7XFxuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxcbiAgLmNvbC1sZy0yIHtcXG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cXG4gIC5jb2wtbGctMyB7XFxuICAgIGZsZXg6IDAgMCAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuY29sLWxnLTQge1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLmNvbC1sZy01IHtcXG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5jb2wtbGctNiB7XFxuICAgIGZsZXg6IDAgMCA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlOyB9XFxuICAuY29sLWxnLTcge1xcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmNvbC1sZy04IHtcXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5jb2wtbGctOSB7XFxuICAgIGZsZXg6IDAgMCA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlOyB9XFxuICAuY29sLWxnLTEwIHtcXG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5jb2wtbGctMTEge1xcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5vcmRlci1sZy1maXJzdCB7XFxuICAgIG9yZGVyOiAtMTsgfVxcbiAgLm9yZGVyLWxnLTEge1xcbiAgICBvcmRlcjogMTsgfVxcbiAgLm9yZGVyLWxnLTIge1xcbiAgICBvcmRlcjogMjsgfVxcbiAgLm9yZGVyLWxnLTMge1xcbiAgICBvcmRlcjogMzsgfVxcbiAgLm9yZGVyLWxnLTQge1xcbiAgICBvcmRlcjogNDsgfVxcbiAgLm9yZGVyLWxnLTUge1xcbiAgICBvcmRlcjogNTsgfVxcbiAgLm9yZGVyLWxnLTYge1xcbiAgICBvcmRlcjogNjsgfVxcbiAgLm9yZGVyLWxnLTcge1xcbiAgICBvcmRlcjogNzsgfVxcbiAgLm9yZGVyLWxnLTgge1xcbiAgICBvcmRlcjogODsgfVxcbiAgLm9yZGVyLWxnLTkge1xcbiAgICBvcmRlcjogOTsgfVxcbiAgLm9yZGVyLWxnLTEwIHtcXG4gICAgb3JkZXI6IDEwOyB9XFxuICAub3JkZXItbGctMTEge1xcbiAgICBvcmRlcjogMTE7IH1cXG4gIC5vcmRlci1sZy0xMiB7XFxuICAgIG9yZGVyOiAxMjsgfVxcbiAgLm9mZnNldC1sZy0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5vZmZzZXQtbGctMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1sZy0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1sZy0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxcbiAgLm9mZnNldC1sZy00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxcbiAgLm9mZnNldC1sZy01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLm9mZnNldC1sZy02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxcbiAgLm9mZnNldC1sZy03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxcbiAgLm9mZnNldC1sZy04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxcbiAgLm9mZnNldC1sZy05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxcbiAgLm9mZnNldC1sZy0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cXG4gIC5vZmZzZXQtbGctMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuY29sLXhsIHtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5jb2wteGwtYXV0byB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY29sLXhsLTEge1xcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5jb2wteGwtMiB7XFxuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjclOyB9XFxuICAuY29sLXhsLTMge1xcbiAgICBmbGV4OiAwIDAgMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTsgfVxcbiAgLmNvbC14bC00IHtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7IH1cXG4gIC5jb2wteGwtNSB7XFxuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjclOyB9XFxuICAuY29sLXhsLTYge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTsgfVxcbiAgLmNvbC14bC03IHtcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7IH1cXG4gIC5jb2wteGwtOCB7XFxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjclOyB9XFxuICAuY29sLXhsLTkge1xcbiAgICBmbGV4OiAwIDAgNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTsgfVxcbiAgLmNvbC14bC0xMCB7XFxuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMlOyB9XFxuICAuY29sLXhsLTExIHtcXG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NyU7IH1cXG4gIC5jb2wteGwtMTIge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAub3JkZXIteGwtZmlyc3Qge1xcbiAgICBvcmRlcjogLTE7IH1cXG4gIC5vcmRlci14bC0xIHtcXG4gICAgb3JkZXI6IDE7IH1cXG4gIC5vcmRlci14bC0yIHtcXG4gICAgb3JkZXI6IDI7IH1cXG4gIC5vcmRlci14bC0zIHtcXG4gICAgb3JkZXI6IDM7IH1cXG4gIC5vcmRlci14bC00IHtcXG4gICAgb3JkZXI6IDQ7IH1cXG4gIC5vcmRlci14bC01IHtcXG4gICAgb3JkZXI6IDU7IH1cXG4gIC5vcmRlci14bC02IHtcXG4gICAgb3JkZXI6IDY7IH1cXG4gIC5vcmRlci14bC03IHtcXG4gICAgb3JkZXI6IDc7IH1cXG4gIC5vcmRlci14bC04IHtcXG4gICAgb3JkZXI6IDg7IH1cXG4gIC5vcmRlci14bC05IHtcXG4gICAgb3JkZXI6IDk7IH1cXG4gIC5vcmRlci14bC0xMCB7XFxuICAgIG9yZGVyOiAxMDsgfVxcbiAgLm9yZGVyLXhsLTExIHtcXG4gICAgb3JkZXI6IDExOyB9XFxuICAub3JkZXIteGwtMTIge1xcbiAgICBvcmRlcjogMTI7IH1cXG4gIC5vZmZzZXQteGwtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuICAub2Zmc2V0LXhsLTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7IH1cXG4gIC5vZmZzZXQteGwtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7IH1cXG4gIC5vZmZzZXQteGwtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cXG4gIC5vZmZzZXQteGwtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7IH1cXG4gIC5vZmZzZXQteGwtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7IH1cXG4gIC5vZmZzZXQteGwtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cXG4gIC5vZmZzZXQteGwtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7IH1cXG4gIC5vZmZzZXQteGwtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7IH1cXG4gIC5vZmZzZXQteGwtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7IH1cXG4gIC5vZmZzZXQteGwtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlOyB9XFxuICAub2Zmc2V0LXhsLTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTsgfSB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3B4cGx1c19pYm1fdmdhOHJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuaHRtbCB7XFxuICAtLXRoZW1lLXN0eWxlOiAncmV0cm8nO1xcbiAgLS1hcHBsZV9yZXRyb19ncmVlbjogIzYxYmI0NjtcXG4gIC0tYXBwbGVfcmV0cm9feWVsbG93OiAjZmRiODI3O1xcbiAgLS1hcHBsZV9yZXRyb19vcmFuZ2U6ICNmNTgyMWY7XFxuICAtLWFwcGxlX3JldHJvX3JlZDogI2UwM2EzZTtcXG4gIC0tYXBwbGVfcmV0cm9fcHVycGxlOiAjOTYzZDk3O1xcbiAgLS1hcHBsZV9ibHVlOiByZ2IoNjQsIDE1NiwgMjU1KTtcXG4gIC0tYXBwbGVfZ3JheTogcmdiKDE1MiwgMTUyLCAxNTcpO1xcbiAgLS1hcHBsZV9ncmVlbjogcmdiKDQ4LCAyMTksIDkxKTtcXG4gIC0tYXBwbGVfaW5kaWdvOiByZ2IoMTI1LCAxMjIsIDI1NSk7XFxuICAtLWFwcGxlX29yYW5nZTogcmdiKDI1NSwgMTc5LCA2NCk7XFxuICAtLWFwcGxlX3Bpbms6IHJnYigyNTUsIDEwMCwgMTMwKTtcXG4gIC0tYXBwbGVfcHVycGxlOiByZ2IoMjE4LCAxNDMsIDI1NSk7XFxuICAtLWFwcGxlX3JlZDogcmdiKDI1NSwgMTA1LCA5Nyk7XFxuICAtLWFwcGxlX3RlYWw6IHJnYigxMTIsIDIxNSwgMjU1KTtcXG4gIC0tYXBwbGVfeWVsbG93OiByZ2IoMjU1LCAyMTIsIDM4KTtcXG4gIC0tY19ibHVlOiAjMjQ3QkEwO1xcbiAgLS1jX3doaXRlOiAjRkFGMUQ4O1xcbiAgLS1jX3Bpbms6ICNERDczNzM7XFxuICAtLWNfYmxhY2s6ICMzRTRFNTA7XFxuICAtLWNfd2FybV9ibGFjazogIzAyMzk0QTtcXG4gIC0tY19ibGFja19vbGl2ZTogIzM5M0QzRjtcXG4gIC0tY19vcmFuZ2U6ICNGNzlENjU7XFxuICAtLWNfdHVycTogIzY5RDFDNTtcXG4gIC0tY19hbG1vbmQ6ICNFRUQ3QzU7XFxuICAtLWNfY2FkZWRibHVlOiAjNUM5RUFEO1xcbiAgLS1jX2NhcmliX2dyZWVuOiAjMDJDMzlBO1xcbiAgLS1zdG9yYWdlOiB2YXIoLS1jX2NhZGVkYmx1ZSk7XFxuICAtLWxpdGVyYWw6IHZhcigtLWNfY2FyaWJfZ3JlZW4pO1xcbiAgLS1jb21tZW50OiB2YXIoLS1jX29yYW5nZSk7XFxuICAtLWtleXdvcmQ6IHJnYigyNTUsIDEwMCwgMTMwKTtcXG4gIC0tY29tcGlsZV90aW1lX3Jlc29sdmVkOiB2YXIoLS1hcHBsZV9pbmRpZ28pO1xcbiAgLS10ZXh0LWJhc2U6IDYyLCA3OCwgODA7XFxuICAtLXRleHQ6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMSk7XFxuICAtLWJhY2tncm91bmQtYmFzZTogMjQ4LCAyNDAsIDIxODtcXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpLCAxKTtcXG4gIC0tZm9udDogJ3B4cGx1c19pYm1fdmdhOHJlZ3VsYXInO1xcbiAgLS1hdmF0YXI6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKTsgfVxcbiAgaHRtbFt0aGVtZS1zdHlsZT0ncmV0cm8nXSB7XFxuICAgIC0tdGhlbWUtc3R5bGU6ICdyZXRybyc7XFxuICAgIC0tZm9udDogJ3B4cGx1c19pYm1fdmdhOHJlZ3VsYXInO1xcbiAgICAtLWF2YXRhcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpOyB9XFxuICBodG1sW3RoZW1lLXN0eWxlPSdtb2Rlcm4nXSB7XFxuICAgIC0tdGhlbWUtc3R5bGU6ICdtb2Rlcm4nO1xcbiAgICAtLWF2YXRhcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpO1xcbiAgICAtLWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLCBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgaHRtbFt0aGVtZS1zdHlsZT0nbW9kZXJuJ10gLmxhbmRpbmctcGFnZS0taGVybyB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbmh0bWxbdGhlbWU9XFxcImxpZ2h0XFxcIl0ge1xcbiAgLS10ZXh0LWNvbG9yLS1ub3JtYWw6IHZhcigtLXRleHQpO1xcbiAgLS10ZXh0LWNvbG9yLS1saWdodDogdmFyKC0tY19ibGFjayk7XFxuICAtLXRleHQtY29sb3ItLXJpY2hlcjogdmFyKC0tY19ibGFjayk7XFxuICAtLXRleHQtY29sb3ItLWhpZ2hsaWdodDogdmFyKC0ta2V5d29yZCk7XFxuICAtLXRleHQtY29sb3ItLWNvbW1lbnQ6IHZhcigtLWNvbW1lbnQpO1xcbiAgLS1iYWNrZ3JvdW5kLS1jb250ZW50OiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLWJhY2tncm91bmQtYmFzZTogMjQ4LCAyNDAsIDIxODtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiB5ZWxsb3c7IH1cXG4gIGh0bWxbdGhlbWU9XFxcImxpZ2h0XFxcIl1bdGhlbWUtc3R5bGU9J21vZGVybiddIHtcXG4gICAgLS10ZXh0LWJhc2U6IDAsMCwwO1xcbiAgICAtLWJhY2tncm91bmQtYmFzZTogMjU1LDI1NSwyNTU7XFxuICAgIC0tYmFja2dyb3VuZC0tY29udGVudDogd2hpdGU7IH1cXG5cXG5odG1sW3RoZW1lPSdkYXJrJ10ge1xcbiAgLS10ZXh0LWJhc2U6IDI0OCwgMjQwLCAyMTg7XFxuICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tY193aGl0ZSk7XFxuICAtLXRleHQtY29sb3ItLWxpZ2h0OiB2YXIoLS1jX3doaXRlKTtcXG4gIC0tdGV4dC1jb2xvci0tcmljaGVyOiB2YXIoLS1jX3doaXRlKTtcXG4gIC0tdGV4dC1jb2xvci0taGlnaGxpZ2h0OiB2YXIoLS1hcHBsZV9waW5rKTtcXG4gIC0tdGV4dC1jb2xvci0tY29tbWVudDogdmFyKC0tY29tbWVudCk7XFxuICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IHJnYigzMCwgMzAsIDMwKTtcXG4gIC0tYmFja2dyb3VuZC1iYXNlOiAxNCwyMywzMjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiB2YXIoLS1hcHBsZV9waW5rKTsgfVxcbiAgaHRtbFt0aGVtZT0nZGFyayddW3RoZW1lLXN0eWxlPSdtb2Rlcm4nXSB7XFxuICAgIC0tdGV4dC1iYXNlOiAyNTUsMjU1LDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLWJhc2U6IDAsMCwwO1xcbiAgICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IGJsYWNrO1xcbiAgICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tdGV4dCk7XFxuICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLXRleHQpO1xcbiAgICAtLXRleHQtY29sb3ItLXJpY2hlcjogdmFyKC0tdGV4dCk7IH1cXG5cXG4uY29udGVudCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4OyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHksIHAsIGIsIGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgfVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLS1zZWxlY3Rpb24pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uKTsgfVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0LWJhc2UpLCAwLjYpOyB9XFxuICBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0LWJhc2UpLCAxKTsgfVxcbiAgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDsgfVxcblxcbiNwMmQge1xcbiAgY3Vyc29yOiBub25lOyB9XFxuXFxuLmNvbW1lbnQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItbGVmdDogMWVtIHNvbGlkOyB9XFxuICAuY29tbWVudC5hZHZpY2Uge1xcbiAgICBib3JkZXItY29sb3I6ICMwMkMzOUE7IH1cXG4gICAgLmNvbW1lbnQuYWR2aWNlIHAge1xcbiAgICAgIGNvbG9yOiAjMjA4OTc1OyB9XFxuICAuY29tbWVudC53YXJuaW5nIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRjc5RDY1OyB9XFxuICAgIC5jb21tZW50Lndhcm5pbmcgcCB7XFxuICAgICAgY29sb3I6ICM5Yjc2NWI7IH1cXG4gIC5jb21tZW50LmluZm8ge1xcbiAgICBib3JkZXItY29sb3I6ICM1QzlFQUQ7IH1cXG4gICAgLmNvbW1lbnQuaW5mbyBwIHtcXG4gICAgICBjb2xvcjogIzRkNzY3ZjsgfVxcblxcbi51bmRlcmxpbmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cXG5cXG4uZW1waGFzaXMge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuYnV0dG9uI2J1cmdlciB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICBidXR0b24jYnVyZ2VyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHg7IH1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4ubGFuZGluZy1wYWdlLS1oZXJvIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG4uc3dhcE9uSG92ZXIgaW1nOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zd2FwT25Ib3Zlcjpob3ZlciBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zd2FwT25Ib3Zlcjpob3ZlciBpbWc6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IH1cXG5cXG4ubGFuZGluZy1wYWdlLS1zdWJ0aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sYW5kaW5nLXBhZ2UtLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5lbnRpdHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgY29sb3I6ICNGNzlENjU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTU3LCAxMDEsIDAuMSk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4ua2V5d29yZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBjb2xvcjogI2ZmNjQ4MjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDAsIDEzMCwgMC4xKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbi5mYWludCB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0LWJhc2UpLCAwLjQpOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0LWJhc2UpLCAwLjYpOyB9XFxuICBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMSk7IH1cXG5cXG5ociB7XFxuICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC4xKTtcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiA2MCU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXlpc2ggPSByZXF1aXJlKCdpcy1hcnJheWlzaCcpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiZXhwb3J0IHsgYWZ0ZXJVcGRhdGUsIGJlZm9yZVVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBnZXRDb250ZXh0LCBvbkRlc3Ryb3ksIG9uTW91bnQsIHNldENvbnRleHQsIHRpY2sgfSBmcm9tICcuL2ludGVybmFsJztcbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmICghc3RvcmUgfHwgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV1cbiAgICAgICAgPyBhc3NpZ24oe30sIGFzc2lnbihjdHguJCRzY29wZS5jdHgsIGRlZmluaXRpb25bMV0oZm4gPyBmbihjdHgpIDoge30pKSlcbiAgICAgICAgOiBjdHguJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sIGN0eCwgY2hhbmdlZCwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXVxuICAgICAgICA/IGFzc2lnbih7fSwgYXNzaWduKGN0eC4kJHNjb3BlLmNoYW5nZWQgfHwge30sIGRlZmluaXRpb25bMV0oZm4gPyBmbihjaGFuZ2VkKSA6IHt9KSkpXG4gICAgICAgIDogY3R4LiQkc2NvcGUuY2hhbmdlZCB8fCB7fTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKCkge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFza1swXShub3coKSkpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tbMV0oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJ1bm5pbmcgPSB0YXNrcy5zaXplID4gMDtcbiAgICBpZiAocnVubmluZylcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICAvLyBmb3IgdGVzdGluZy4uLlxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrcy5kZWxldGUodGFzaykpO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGxvb3AoZm4pIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSBbZm4sIGZ1bGZpbF0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW9iamVjdC1saXRlcmFsLXR5cGUtYXNzZXJ0aW9uXG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2VcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChncm91cFtpXS5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07IC8vIFRPRE8gc3RyaXAgdW53YW50ZWQgYXR0cmlidXRlc1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdmcgPyBzdmdfZWxlbWVudChuYW1lKSA6IGVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dChkYXRhKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgfHwgaW5wdXQudmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcbiAgICBvYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgICBvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgIG9iamVjdC50YWJJbmRleCA9IC0xO1xuICAgIGxldCB3aW47XG4gICAgb2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgd2luID0gb2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcbiAgICB9O1xuICAgIGlmICgvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG4gICAgICAgIG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgIHdpbiAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoaHRtbCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnUoaHRtbCk7XG4gICAgfVxuICAgIG0odGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGFyZ2V0LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIH1cbiAgICB1KGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMudShodG1sKTtcbiAgICAgICAgdGhpcy5tKHRoaXMudCwgdGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5cbmxldCBzdHlsZXNoZWV0O1xubGV0IGFjdGl2ZSA9IDA7XG5sZXQgY3VycmVudF9ydWxlcyA9IHt9O1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgIGlmICghc3R5bGVzaGVldCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudF9ydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgIClcbiAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgaWYgKG5hbWUgJiYgIS0tYWN0aXZlKVxuICAgICAgICBjbGVhcl9ydWxlcygpO1xufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgY3VycmVudF9ydWxlcyA9IHt9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uYCk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbihldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50KSB7XG4gICAgICAgICQkLnVwZGF0ZSgkJC5kaXJ0eSk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgICQkLmZyYWdtZW50LnAoJCQuZGlydHksICQkLmN0eCk7XG4gICAgICAgICQkLmRpcnR5ID0gbnVsbDtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gcHJvZ3JhbS5iIC0gdDtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBrZXkgJiYgeyBba2V5XTogdmFsdWUgfTtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gYXNzaWduKGFzc2lnbih7fSwgaW5mby5jdHgpLCBpbmZvLnJlc29sdmVkKTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHsgW2luZm8udmFsdWVdOiBwcm9taXNlIH07XG4gICAgfVxufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGNoYW5nZWQsIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGFuZ2VkLCBjaGlsZF9jdHgpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiBtZWFzdXJlKGJsb2Nrcykge1xuICAgIGNvbnN0IHJlY3RzID0ge307XG4gICAgbGV0IGkgPSBibG9ja3MubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHJlY3RzW2Jsb2Nrc1tpXS5rZXldID0gYmxvY2tzW2ldLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgY29uc3QgZXNjYXBlZCA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG4gICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KGVzY2FwZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBlc2NhcGVkID0ge1xuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlID8gJycgOiBgPSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGVzY2FwZSh2YWx1ZSkpIDogYFwiJHt2YWx1ZX1cImB9YH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiBgYDtcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5wcm9wcy5pbmRleE9mKG5hbWUpID09PSAtMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbXBvbmVudC4kJC5ib3VuZFtuYW1lXSA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbbmFtZV0pO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICB9KTtcbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5mcmFnbWVudCkge1xuICAgICAgICBydW5fYWxsKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KTtcbiAgICAgICAgY29tcG9uZW50LiQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgY29tcG9uZW50LiQkLmN0eCA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBrZXkpIHtcbiAgICBpZiAoIWNvbXBvbmVudC4kJC5kaXJ0eSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eSA9IGJsYW5rX29iamVjdCgpO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlba2V5XSA9IHRydWU7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wX25hbWVzKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0IHByb3BzID0gb3B0aW9ucy5wcm9wcyB8fCB7fTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHM6IHByb3BfbmFtZXMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHk6IG51bGxcbiAgICB9O1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBwcm9wcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtrZXldLCAkJC5jdHhba2V5XSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICgkJC5ib3VuZFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtrZXldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICA6IHByb3BzO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCk7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudC5sKGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCkge1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgICAgIH1cbiAgICB9O1xufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgfVxufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvbmApO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUVsZW1lbnQsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXNzaWduLCBhdHRyLCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkaXJ0eV9jb21wb25lbnRzLCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZXNjYXBlLCBlc2NhcGVkLCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldENvbnRleHQsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHQsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbG9vcCwgbWVhc3VyZSwgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3R5bGUsIHNwYWNlLCBzcHJlYWQsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHVwZGF0ZV9rZXllZF9lYWNoLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCJpbXBvcnQgeyBzYWZlX25vdF9lcXVhbCwgbm9vcCwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICogQHBhcmFtIHtTdG9yZXN9IHN0b3JlcyBpbnB1dCBzdG9yZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oU3RvcmVzPSwgZnVuY3Rpb24oKik9KToqfWZuIGZ1bmN0aW9uIGNhbGxiYWNrIHRoYXQgYWdncmVnYXRlcyB0aGUgdmFsdWVzXG4gKiBAcGFyYW0geyo9fWluaXRpYWxfdmFsdWUgd2hlbiB1c2VkIGFzeW5jaHJvbm91c2x5XG4gKi9cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3RvcmUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiaW1wb3J0ICcuL21haW4uc2FzcydcbmltcG9ydCAqIGFzIHNhcHBlciBmcm9tICdAc2FwcGVyL2FwcCdcblxuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJ1xuXG5jb25zdCB1cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzZXRTdHlsZSA9IChlLCBwLCB2KSA9PiBlLnN0eWxlLnNldFByb3BlcnR5KHAsIHYpXG4gICAgY29uc3QgZ2V0U3R5bGVBc1JHQiA9IChlLCBwKSA9PlxuICAgICAgICBDb2xvcihcbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUoZSlcbiAgICAgICAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZShwKVxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgKS5vYmplY3QoKVxuICAgIHdpbmRvdy5jb2xvciA9IHtcbiAgICAgICAgdGV4dE5vcm1hbDogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLW5vcm1hbCdcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dFJpY2hlcjogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLXJpY2hlcidcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dEhpZ2hsaWdodDogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLWhpZ2hsaWdodCdcbiAgICAgICAgKSxcbiAgICAgICAgYmFja2dyb3VuZDogZ2V0U3R5bGVBc1JHQihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICctLWJhY2tncm91bmQnKSxcbiAgICAgICAgYmFja2dyb3VuZENvbnRlbnQ6IGdldFN0eWxlQXNSR0IoXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAnLS1iYWNrZ3JvdW5kLS1jb250ZW50J1xuICAgICAgICApLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhlbWUgY2hhbmdlZCcpXG59XG5cbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHJpYnV0ZXMgY2hhbmdlZCcpXG4gICAgICAgICAgICB1cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcygpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLCAvL2NvbmZpZ3VyZSBpdCB0byBsaXN0ZW4gdG8gYXR0cmlidXRlIGNoYW5nZXNcbn0pXG5cbndpbmRvd1xuICAgIC5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpXG4gICAgLmFkZExpc3RlbmVyKHVwZGF0ZUdsb2JhbENvbG9yVmFyaWFibGVzKVxuXG51cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcygpXG5cbndpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAndGhlbWUnLFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzXG4gICAgICAgICAgICA/ICdsaWdodCdcbiAgICAgICAgICAgIDogJ2RhcmsnXG4gICAgKVxufSlcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAndGhlbWUnLFxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXNcbiAgICAgICAgPyAnbGlnaHQnXG4gICAgICAgIDogJ2RhcmsnXG4pXG5cbnNhcHBlclxuICAgIC5zdGFydCh7XG4gICAgICAgIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlcicpLFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50LXNpZGUgYXBwIGhhcyBzdGFydGVkJylcbiAgICB9KVxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG5vbk1vdW50KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZScpXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRoZW1lRWwuaW5uZXJUZXh0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlc1xuICAgICAgICAgICAgPyAnbGlnaHQnXG4gICAgICAgICAgICA6ICdkYXJrJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoZW1lRWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID1cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lJykgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKVxuICAgICAgICAgICAgdGhlbWVFbC5pbm5lclRleHQgPSB0aGVtZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kZXJuaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVybml6ZScpXG4gICAgICAgIG1vZGVybml6ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlbWUgPVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKSA9PT0gJ3JldHJvJyA/ICdtb2Rlcm4nIDogJ3JldHJvJ1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnLCB0aGVtZSlcbiAgICAgICAgICAgIG1vZGVybml6ZS5pbm5lclRleHQgPSB0aGVtZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpbWUgdGhlbSBib3RoXG4gICAgICAgIHRoZW1lRWwuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUnKVxuICAgICAgICBtb2Rlcm5pemUuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKVxuICAgIH0pXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+Zm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDAuNzVlbTsgfVxuXG4uaWNvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmljb24tbGlzdCBhIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IDVweDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1Gb290ZXIuc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48Zm9vdGVyPjxocj48ZGl2IGNsYXNzPVwiZmFpbnRcIj5CdWlsdCB1c2luZ1xuPGI+PGEgaHJlZj1cImh0dHBzOi8vc2FwcGVyLnN2ZWx0ZS5kZXYvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TYXBwZXI8L2E+PC9iPlxuJlxuPGI+PGEgaHJlZj1cImh0dHBzOi8vc3ZlbHRlLmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlN2ZWx0ZTwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+V2VicGFjazwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly9zYXNzLWxhbmcuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TYXNzPC9hPjwvYj5cbiZcbjxiPjxhIGhyZWY9XCJodHRwczovL3B1Z2pzLm9yZy9hcGkvZ2V0dGluZy1zdGFydGVkLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlB1ZzwvYT48L2I+PC9kaXY+PGRpdiBjbGFzcz1cImZhaW50XCI+Rm9udDogPGI+PGEgaHJlZj1cImh0dHBzOi8vaW50MTBoLm9yZy9vbGRzY2hvb2wtcGMtZm9udHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5QeFBsdXMgSUJNIFZHQTg8L2E+PC9iPjwvZGl2PjxkaXYgY2xhc3M9XCJmYWludFwiPkhvc3Q6IDxiPjxhIGhyZWY9XCJodHRwczovL3d3dy5uZXRsaWZ5LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPk5ldGxpZnk8L2E+PC9iPjwvZGl2Pjxicj48YnV0dG9uIGNsYXNzPVwiYnRuIHNtYWxsXCIgaWQ9XCJtb2Rlcm5pemVcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiYnRuIHNtYWxsXCIgaWQ9XCJ0aGVtZVwiPjwvYnV0dG9uPjxkaXYgY2xhc3M9XCJmYWludFwiPkNvbnRhY3Q6IDxwPm1hdGhpYXNzZW5tYXJjdXNAZ21haWwuY29tPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJpY29uLWxpc3RcIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01hcmN1c01hdGhpYXNzZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNaN0ZiUTRCdmkzR2tWMGs1RU5vWFlRXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj48aSBjbGFzcz1cImZhYiBmYS15b3V0dWJlXCI+PC9pPjwvYT48L2Rpdj48L2Zvb3Rlcj5cbiIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBzZWdtZW50XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIG5hdiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC8qIGNsZWFyZml4ICovXG4gICAgdWw6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuXG48bmF2PlxuICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3M9e3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cIi5cIj5ob21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzcz17c2VnbWVudCA9PT0gJ2Fib3V0JyA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgYWJvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPCEtLSBmb3IgdGhlIGJsb2cgbGluaywgd2UncmUgdXNpbmcgcmVsPXByZWZldGNoIHNvIHRoYXQgU2FwcGVyIHByZWZldGNoZXNcblx0XHQgICAgIHRoZSBibG9nIGRhdGEgd2hlbiB3ZSBob3ZlciBvdmVyIHRoZSBsaW5rIG9yIHRhcCBpdCBvbiBhIHRvdWNoc2NyZWVuIC0tPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHJlbD1cInByZWZldGNoXCJcbiAgICAgICAgICAgICAgICBjbGFzcz17c2VnbWVudCA9PT0gJ2Jsb2cnID8gJ3NlbGVjdGVkJyA6ICcnfVxuICAgICAgICAgICAgICAgIGhyZWY9XCJibG9nXCI+XG4gICAgICAgICAgICAgICAgYmxvZ1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25hdj5cbjxocj5cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zYXNzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL2ludGVybmFsL3NoYXJlZCc7XG5pbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW50ZXJuYWwvQXBwLnN2ZWx0ZSc7XG5pbXBvcnQgeyBpZ25vcmUsIHJvdXRlcywgcm9vdF9wcmVsb2FkLCBjb21wb25lbnRzLCBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwvbWFuaWZlc3QtY2xpZW50JztcblxuZnVuY3Rpb24gZ290byhocmVmLCBvcHRzID0geyByZXBsYWNlU3RhdGU6IGZhbHNlIH0pIHtcblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldChuZXcgVVJMKGhyZWYsIGRvY3VtZW50LmJhc2VVUkkpKTtcblxuXHRpZiAodGFyZ2V0KSB7XG5cdFx0X2hpc3Rvcnlbb3B0cy5yZXBsYWNlU3RhdGUgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSh7IGlkOiBjaWQgfSwgJycsIGhyZWYpO1xuXHRcdHJldHVybiBuYXZpZ2F0ZSh0YXJnZXQsIG51bGwpLnRoZW4oKCkgPT4ge30pO1xuXHR9XG5cblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmID0+IHt9KTsgLy8gbmV2ZXIgcmVzb2x2ZXNcbn1cblxuY29uc3QgaW5pdGlhbF9kYXRhID0gdHlwZW9mIF9fU0FQUEVSX18gIT09ICd1bmRlZmluZWQnICYmIF9fU0FQUEVSX187XG5cbmxldCByZWFkeSA9IGZhbHNlO1xubGV0IHJvb3RfY29tcG9uZW50O1xubGV0IGN1cnJlbnRfdG9rZW47XG5sZXQgcm9vdF9wcmVsb2FkZWQ7XG5sZXQgY3VycmVudF9icmFuY2ggPSBbXTtcbmxldCBjdXJyZW50X3F1ZXJ5ID0gJ3t9JztcblxuY29uc3Qgc3RvcmVzID0ge1xuXHRwYWdlOiB3cml0YWJsZSh7fSksXG5cdHByZWxvYWRpbmc6IHdyaXRhYmxlKG51bGwpLFxuXHRzZXNzaW9uOiB3cml0YWJsZShpbml0aWFsX2RhdGEgJiYgaW5pdGlhbF9kYXRhLnNlc3Npb24pXG59O1xuXG5sZXQgJHNlc3Npb247XG5sZXQgc2Vzc2lvbl9kaXJ0eTtcblxuc3RvcmVzLnNlc3Npb24uc3Vic2NyaWJlKGFzeW5jIHZhbHVlID0+IHtcblx0JHNlc3Npb24gPSB2YWx1ZTtcblxuXHRpZiAoIXJlYWR5KSByZXR1cm47XG5cdHNlc3Npb25fZGlydHkgPSB0cnVlO1xuXG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChsb2NhdGlvbi5ocmVmKSk7XG5cblx0Y29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG5cdGNvbnN0IHsgcmVkaXJlY3QsIHByb3BzLCBicmFuY2ggfSA9IGF3YWl0IGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCk7XG5cdGlmICh0b2tlbiAhPT0gY3VycmVudF90b2tlbikgcmV0dXJuOyAvLyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGhhcHBlbmVkIHdoaWxlIHdlIHdlcmUgbG9hZGluZ1xuXG5cdGF3YWl0IHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgdGFyZ2V0LnBhZ2UpO1xufSk7XG5cbmxldCBwcmVmZXRjaGluZ1xuXG5cbiA9IG51bGw7XG5mdW5jdGlvbiBzZXRfcHJlZmV0Y2hpbmcoaHJlZiwgcHJvbWlzZSkge1xuXHRwcmVmZXRjaGluZyA9IHsgaHJlZiwgcHJvbWlzZSB9O1xufVxuXG5sZXQgdGFyZ2V0O1xuZnVuY3Rpb24gc2V0X3RhcmdldChlbGVtZW50KSB7XG5cdHRhcmdldCA9IGVsZW1lbnQ7XG59XG5cbmxldCB1aWQgPSAxO1xuZnVuY3Rpb24gc2V0X3VpZChuKSB7XG5cdHVpZCA9IG47XG59XG5cbmxldCBjaWQ7XG5mdW5jdGlvbiBzZXRfY2lkKG4pIHtcblx0Y2lkID0gbjtcbn1cblxuY29uc3QgX2hpc3RvcnkgPSB0eXBlb2YgaGlzdG9yeSAhPT0gJ3VuZGVmaW5lZCcgPyBoaXN0b3J5IDoge1xuXHRwdXNoU3RhdGU6IChzdGF0ZSwgdGl0bGUsIGhyZWYpID0+IHt9LFxuXHRyZXBsYWNlU3RhdGU6IChzdGF0ZSwgdGl0bGUsIGhyZWYpID0+IHt9LFxuXHRzY3JvbGxSZXN0b3JhdGlvbjogJydcbn07XG5cbmNvbnN0IHNjcm9sbF9oaXN0b3J5ID0ge307XG5cbmZ1bmN0aW9uIGV4dHJhY3RfcXVlcnkoc2VhcmNoKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0aWYgKHNlYXJjaC5sZW5ndGggPiAwKSB7XG5cdFx0c2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykuZm9yRWFjaChzZWFyY2hQYXJhbSA9PiB7XG5cdFx0XHRsZXQgWywga2V5LCB2YWx1ZSA9ICcnXSA9IC8oW149XSopKD86PSguKikpPy8uZXhlYyhkZWNvZGVVUklDb21wb25lbnQoc2VhcmNoUGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykpKTtcblx0XHRcdGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3N0cmluZycpIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XV07XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICdvYmplY3QnKSAocXVlcnlba2V5XSApLnB1c2godmFsdWUpO1xuXHRcdFx0ZWxzZSBxdWVyeVtrZXldID0gdmFsdWU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHF1ZXJ5O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RfdGFyZ2V0KHVybCkge1xuXHRpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSByZXR1cm4gbnVsbDtcblx0aWYgKCF1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChpbml0aWFsX2RhdGEuYmFzZVVybCkpIHJldHVybiBudWxsO1xuXG5cdGxldCBwYXRoID0gdXJsLnBhdGhuYW1lLnNsaWNlKGluaXRpYWxfZGF0YS5iYXNlVXJsLmxlbmd0aCk7XG5cblx0aWYgKHBhdGggPT09ICcnKSB7XG5cdFx0cGF0aCA9ICcvJztcblx0fVxuXG5cdC8vIGF2b2lkIGFjY2lkZW50YWwgY2xhc2hlcyBiZXR3ZWVuIHNlcnZlciByb3V0ZXMgYW5kIHBhZ2Ugcm91dGVzXG5cdGlmIChpZ25vcmUuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChwYXRoKSkpIHJldHVybjtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xuXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5wYXR0ZXJuLmV4ZWMocGF0aCk7XG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdF9xdWVyeSh1cmwuc2VhcmNoKTtcblx0XHRcdGNvbnN0IHBhcnQgPSByb3V0ZS5wYXJ0c1tyb3V0ZS5wYXJ0cy5sZW5ndGggLSAxXTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXMobWF0Y2gpIDoge307XG5cblx0XHRcdGNvbnN0IHBhZ2UgPSB7IGhvc3Q6IGxvY2F0aW9uLmhvc3QsIHBhdGgsIHF1ZXJ5LCBwYXJhbXMgfTtcblxuXHRcdFx0cmV0dXJuIHsgaHJlZjogdXJsLmhyZWYsIHJvdXRlLCBtYXRjaCwgcGFnZSB9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVfZXJyb3IodXJsKSB7XG5cdGNvbnN0IHsgaG9zdCwgcGF0aG5hbWUsIHNlYXJjaCB9ID0gbG9jYXRpb247XG5cdGNvbnN0IHsgc2Vzc2lvbiwgcHJlbG9hZGVkLCBzdGF0dXMsIGVycm9yIH0gPSBpbml0aWFsX2RhdGE7XG5cblx0aWYgKCFyb290X3ByZWxvYWRlZCkge1xuXHRcdHJvb3RfcHJlbG9hZGVkID0gcHJlbG9hZGVkICYmIHByZWxvYWRlZFswXTtcblx0fVxuXG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdGVycm9yLFxuXHRcdHN0YXR1cyxcblx0XHRzZXNzaW9uLFxuXHRcdGxldmVsMDoge1xuXHRcdFx0cHJvcHM6IHJvb3RfcHJlbG9hZGVkXG5cdFx0fSxcblx0XHRsZXZlbDE6IHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdHN0YXR1cyxcblx0XHRcdFx0ZXJyb3Jcblx0XHRcdH0sXG5cdFx0XHRjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50XG5cdFx0fSxcblx0XHRzZWdtZW50czogcHJlbG9hZGVkXG5cblx0fTtcblx0Y29uc3QgcXVlcnkgPSBleHRyYWN0X3F1ZXJ5KHNlYXJjaCk7XG5cdHJlbmRlcihudWxsLCBbXSwgcHJvcHMsIHsgaG9zdCwgcGF0aDogcGF0aG5hbWUsIHF1ZXJ5LCBwYXJhbXM6IHt9IH0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxfc3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0eDogcGFnZVhPZmZzZXQsXG5cdFx0eTogcGFnZVlPZmZzZXRcblx0fTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGUodGFyZ2V0LCBpZCwgbm9zY3JvbGwsIGhhc2gpIHtcblx0aWYgKGlkKSB7XG5cdFx0Ly8gcG9wc3RhdGUgb3IgaW5pdGlhbCBuYXZpZ2F0aW9uXG5cdFx0Y2lkID0gaWQ7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY3VycmVudF9zY3JvbGwgPSBzY3JvbGxfc3RhdGUoKTtcblxuXHRcdC8vIGNsaWNrZWQgb24gYSBsaW5rLiBwcmVzZXJ2ZSBzY3JvbGwgc3RhdGVcblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gY3VycmVudF9zY3JvbGw7XG5cblx0XHRpZCA9IGNpZCA9ICsrdWlkO1xuXHRcdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBub3Njcm9sbCA/IGN1cnJlbnRfc2Nyb2xsIDogeyB4OiAwLCB5OiAwIH07XG5cdH1cblxuXHRjaWQgPSBpZDtcblxuXHRpZiAocm9vdF9jb21wb25lbnQpIHN0b3Jlcy5wcmVsb2FkaW5nLnNldCh0cnVlKTtcblxuXHRjb25zdCBsb2FkZWQgPSBwcmVmZXRjaGluZyAmJiBwcmVmZXRjaGluZy5ocmVmID09PSB0YXJnZXQuaHJlZiA/XG5cdFx0cHJlZmV0Y2hpbmcucHJvbWlzZSA6XG5cdFx0aHlkcmF0ZV90YXJnZXQodGFyZ2V0KTtcblxuXHRwcmVmZXRjaGluZyA9IG51bGw7XG5cblx0Y29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG5cdGNvbnN0IHsgcmVkaXJlY3QsIHByb3BzLCBicmFuY2ggfSA9IGF3YWl0IGxvYWRlZDtcblx0aWYgKHRva2VuICE9PSBjdXJyZW50X3Rva2VuKSByZXR1cm47IC8vIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb24gaGFwcGVuZWQgd2hpbGUgd2Ugd2VyZSBsb2FkaW5nXG5cblx0YXdhaXQgcmVuZGVyKHJlZGlyZWN0LCBicmFuY2gsIHByb3BzLCB0YXJnZXQucGFnZSk7XG5cdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuXHRpZiAoIW5vc2Nyb2xsKSB7XG5cdFx0bGV0IHNjcm9sbCA9IHNjcm9sbF9oaXN0b3J5W2lkXTtcblxuXHRcdGlmIChoYXNoKSB7XG5cdFx0XHQvLyBzY3JvbGwgaXMgYW4gZWxlbWVudCBpZCAoZnJvbSBhIGhhc2gpLCB3ZSBuZWVkIHRvIGNvbXB1dGUgeS5cblx0XHRcdGNvbnN0IGRlZXBfbGlua2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaC5zbGljZSgxKSk7XG5cblx0XHRcdGlmIChkZWVwX2xpbmtlZCkge1xuXHRcdFx0XHRzY3JvbGwgPSB7XG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiBkZWVwX2xpbmtlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Bcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gc2Nyb2xsO1xuXHRcdGlmIChzY3JvbGwpIHNjcm9sbFRvKHNjcm9sbC54LCBzY3JvbGwueSk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHJlZGlyZWN0LCBicmFuY2gsIHByb3BzLCBwYWdlKSB7XG5cdGlmIChyZWRpcmVjdCkgcmV0dXJuIGdvdG8ocmVkaXJlY3QubG9jYXRpb24sIHsgcmVwbGFjZVN0YXRlOiB0cnVlIH0pO1xuXG5cdHN0b3Jlcy5wYWdlLnNldChwYWdlKTtcblx0c3RvcmVzLnByZWxvYWRpbmcuc2V0KGZhbHNlKTtcblxuXHRpZiAocm9vdF9jb21wb25lbnQpIHtcblx0XHRyb290X2NvbXBvbmVudC4kc2V0KHByb3BzKTtcblx0fSBlbHNlIHtcblx0XHRwcm9wcy5zdG9yZXMgPSB7XG5cdFx0XHRwYWdlOiB7IHN1YnNjcmliZTogc3RvcmVzLnBhZ2Uuc3Vic2NyaWJlIH0sXG5cdFx0XHRwcmVsb2FkaW5nOiB7IHN1YnNjcmliZTogc3RvcmVzLnByZWxvYWRpbmcuc3Vic2NyaWJlIH0sXG5cdFx0XHRzZXNzaW9uOiBzdG9yZXMuc2Vzc2lvblxuXHRcdH07XG5cdFx0cHJvcHMubGV2ZWwwID0ge1xuXHRcdFx0cHJvcHM6IGF3YWl0IHJvb3RfcHJlbG9hZGVkXG5cdFx0fTtcblxuXHRcdC8vIGZpcnN0IGxvYWQg4oCUIHJlbW92ZSBTU1InZCA8aGVhZD4gY29udGVudHNcblx0XHRjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXItaGVhZC1zdGFydCcpO1xuXHRcdGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXItaGVhZC1lbmQnKTtcblxuXHRcdGlmIChzdGFydCAmJiBlbmQpIHtcblx0XHRcdHdoaWxlIChzdGFydC5uZXh0U2libGluZyAhPT0gZW5kKSBkZXRhY2goc3RhcnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0ZGV0YWNoKHN0YXJ0KTtcblx0XHRcdGRldGFjaChlbmQpO1xuXHRcdH1cblxuXHRcdHJvb3RfY29tcG9uZW50ID0gbmV3IEFwcCh7XG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRwcm9wcyxcblx0XHRcdGh5ZHJhdGU6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdGN1cnJlbnRfYnJhbmNoID0gYnJhbmNoO1xuXHRjdXJyZW50X3F1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkocGFnZS5xdWVyeSk7XG5cdHJlYWR5ID0gdHJ1ZTtcblx0c2Vzc2lvbl9kaXJ0eSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJ0X2NoYW5nZWQoaSwgc2VnbWVudCwgbWF0Y2gsIHN0cmluZ2lmaWVkX3F1ZXJ5KSB7XG5cdC8vIFRPRE8gb25seSBjaGVjayBxdWVyeSBzdHJpbmcgY2hhbmdlcyBmb3IgcHJlbG9hZCBmdW5jdGlvbnNcblx0Ly8gdGhhdCBkbyBpbiBmYWN0IGRlcGVuZCBvbiBpdCAodXNpbmcgc3RhdGljIGFuYWx5c2lzIG9yXG5cdC8vIHJ1bnRpbWUgaW5zdHJ1bWVudGF0aW9uKVxuXHRpZiAoc3RyaW5naWZpZWRfcXVlcnkgIT09IGN1cnJlbnRfcXVlcnkpIHJldHVybiB0cnVlO1xuXG5cdGNvbnN0IHByZXZpb3VzID0gY3VycmVudF9icmFuY2hbaV07XG5cblx0aWYgKCFwcmV2aW91cykgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2VnbWVudCAhPT0gcHJldmlvdXMuc2VnbWVudCkgcmV0dXJuIHRydWU7XG5cdGlmIChwcmV2aW91cy5tYXRjaCkge1xuXHRcdGlmIChKU09OLnN0cmluZ2lmeShwcmV2aW91cy5tYXRjaC5zbGljZSgxLCBpICsgMikpICE9PSBKU09OLnN0cmluZ2lmeShtYXRjaC5zbGljZSgxLCBpICsgMikpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaHlkcmF0ZV90YXJnZXQodGFyZ2V0KVxuXG5cblxuIHtcblx0Y29uc3QgeyByb3V0ZSwgcGFnZSB9ID0gdGFyZ2V0O1xuXHRjb25zdCBzZWdtZW50cyA9IHBhZ2UucGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcblxuXHRsZXQgcmVkaXJlY3QgPSBudWxsO1xuXG5cdGNvbnN0IHByb3BzID0geyBlcnJvcjogbnVsbCwgc3RhdHVzOiAyMDAsIHNlZ21lbnRzOiBbc2VnbWVudHNbMF1dIH07XG5cblx0Y29uc3QgcHJlbG9hZF9jb250ZXh0ID0ge1xuXHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiBmZXRjaCh1cmwsIG9wdHMpLFxuXHRcdHJlZGlyZWN0OiAoc3RhdHVzQ29kZSwgbG9jYXRpb24pID0+IHtcblx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29uZmxpY3RpbmcgcmVkaXJlY3RzYCk7XG5cdFx0XHR9XG5cdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHR9LFxuXHRcdGVycm9yOiAoc3RhdHVzLCBlcnJvcikgPT4ge1xuXHRcdFx0cHJvcHMuZXJyb3IgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gbmV3IEVycm9yKGVycm9yKSA6IGVycm9yO1xuXHRcdFx0cHJvcHMuc3RhdHVzID0gc3RhdHVzO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoIXJvb3RfcHJlbG9hZGVkKSB7XG5cdFx0cm9vdF9wcmVsb2FkZWQgPSBpbml0aWFsX2RhdGEucHJlbG9hZGVkWzBdIHx8IHJvb3RfcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0aG9zdDogcGFnZS5ob3N0LFxuXHRcdFx0cGF0aDogcGFnZS5wYXRoLFxuXHRcdFx0cXVlcnk6IHBhZ2UucXVlcnksXG5cdFx0XHRwYXJhbXM6IHt9XG5cdFx0fSwgJHNlc3Npb24pO1xuXHR9XG5cblx0bGV0IGJyYW5jaDtcblx0bGV0IGwgPSAxO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgc3RyaW5naWZpZWRfcXVlcnkgPSBKU09OLnN0cmluZ2lmeShwYWdlLnF1ZXJ5KTtcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLnBhdHRlcm4uZXhlYyhwYWdlLnBhdGgpO1xuXG5cdFx0bGV0IHNlZ21lbnRfZGlydHkgPSBmYWxzZTtcblxuXHRcdGJyYW5jaCA9IGF3YWl0IFByb21pc2UuYWxsKHJvdXRlLnBhcnRzLm1hcChhc3luYyAocGFydCwgaSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuXG5cdFx0XHRpZiAocGFydF9jaGFuZ2VkKGksIHNlZ21lbnQsIG1hdGNoLCBzdHJpbmdpZmllZF9xdWVyeSkpIHNlZ21lbnRfZGlydHkgPSB0cnVlO1xuXG5cdFx0XHRwcm9wcy5zZWdtZW50c1tsXSA9IHNlZ21lbnRzW2kgKyAxXTsgLy8gVE9ETyBtYWtlIHRoaXMgbGVzcyBjb25mdXNpbmdcblx0XHRcdGlmICghcGFydCkgcmV0dXJuIHsgc2VnbWVudCB9O1xuXG5cdFx0XHRjb25zdCBqID0gbCsrO1xuXG5cdFx0XHRpZiAoIXNlc3Npb25fZGlydHkgJiYgIXNlZ21lbnRfZGlydHkgJiYgY3VycmVudF9icmFuY2hbaV0gJiYgY3VycmVudF9icmFuY2hbaV0ucGFydCA9PT0gcGFydC5pKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50X2JyYW5jaFtpXTtcblx0XHRcdH1cblxuXHRcdFx0c2VnbWVudF9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRjb25zdCB7IGRlZmF1bHQ6IGNvbXBvbmVudCwgcHJlbG9hZCB9ID0gYXdhaXQgbG9hZF9jb21wb25lbnQoY29tcG9uZW50c1twYXJ0LmldKTtcblxuXHRcdFx0bGV0IHByZWxvYWRlZDtcblx0XHRcdGlmIChyZWFkeSB8fCAhaW5pdGlhbF9kYXRhLnByZWxvYWRlZFtpICsgMV0pIHtcblx0XHRcdFx0cHJlbG9hZGVkID0gcHJlbG9hZFxuXHRcdFx0XHRcdD8gYXdhaXQgcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0XHRcdFx0aG9zdDogcGFnZS5ob3N0LFxuXHRcdFx0XHRcdFx0cGF0aDogcGFnZS5wYXRoLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHBhZ2UucXVlcnksXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXModGFyZ2V0Lm1hdGNoKSA6IHt9XG5cdFx0XHRcdFx0fSwgJHNlc3Npb24pXG5cdFx0XHRcdFx0OiB7fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZWxvYWRlZCA9IGluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKHByb3BzW2BsZXZlbCR7an1gXSA9IHsgY29tcG9uZW50LCBwcm9wczogcHJlbG9hZGVkLCBzZWdtZW50LCBtYXRjaCwgcGFydDogcGFydC5pIH0pO1xuXHRcdH0pKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRwcm9wcy5lcnJvciA9IGVycm9yO1xuXHRcdHByb3BzLnN0YXR1cyA9IDUwMDtcblx0XHRicmFuY2ggPSBbXTtcblx0fVxuXG5cdHJldHVybiB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRfY3NzKGNodW5rKSB7XG5cdGNvbnN0IGhyZWYgPSBgY2xpZW50LyR7Y2h1bmt9YDtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbaHJlZj1cIiR7aHJlZn1cIl1gKSkgcmV0dXJuO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsLCByZWplY3QpID0+IHtcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXHRcdGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuXHRcdGxpbmsuaHJlZiA9IGhyZWY7XG5cblx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IGZ1bGZpbCgpO1xuXHRcdGxpbmsub25lcnJvciA9IHJlamVjdDtcblxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkX2NvbXBvbmVudChjb21wb25lbnQpXG5cblxuIHtcblx0Ly8gVE9ETyB0aGlzIGlzIHRlbXBvcmFyeSDigJQgb25jZSBwbGFjZWhvbGRlcnMgYXJlXG5cdC8vIGFsd2F5cyByZXdyaXR0ZW4sIHNjcmF0Y2ggdGhlIHRlcm5hcnlcblx0Y29uc3QgcHJvbWlzZXMgPSAodHlwZW9mIGNvbXBvbmVudC5jc3MgPT09ICdzdHJpbmcnID8gW10gOiBjb21wb25lbnQuY3NzLm1hcChsb2FkX2NzcykpO1xuXHRwcm9taXNlcy51bnNoaWZ0KGNvbXBvbmVudC5qcygpKTtcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHZhbHVlcyA9PiB2YWx1ZXNbMF0pO1xufVxuXG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKGhyZWYpIHtcblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldChuZXcgVVJMKGhyZWYsIGRvY3VtZW50LmJhc2VVUkkpKTtcblxuXHRpZiAodGFyZ2V0KSB7XG5cdFx0aWYgKCFwcmVmZXRjaGluZyB8fCBocmVmICE9PSBwcmVmZXRjaGluZy5ocmVmKSB7XG5cdFx0XHRzZXRfcHJlZmV0Y2hpbmcoaHJlZiwgaHlkcmF0ZV90YXJnZXQodGFyZ2V0KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByZWZldGNoaW5nLnByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3RhcnQob3B0c1xuXG4pIHtcblx0aWYgKCdzY3JvbGxSZXN0b3JhdGlvbicgaW4gX2hpc3RvcnkpIHtcblx0XHRfaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXHR9XG5cblx0c2V0X3RhcmdldChvcHRzLnRhcmdldCk7XG5cblx0YWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVfY2xpY2spO1xuXHRhZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGhhbmRsZV9wb3BzdGF0ZSk7XG5cblx0Ly8gcHJlZmV0Y2hcblx0YWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRyaWdnZXJfcHJlZmV0Y2gpO1xuXHRhZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVfbW91c2Vtb3ZlKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0Y29uc3QgeyBoYXNoLCBocmVmIH0gPSBsb2NhdGlvbjtcblxuXHRcdF9oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGlkOiB1aWQgfSwgJycsIGhyZWYpO1xuXG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcblxuXHRcdGlmIChpbml0aWFsX2RhdGEuZXJyb3IpIHJldHVybiBoYW5kbGVfZXJyb3IoKTtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0XHRpZiAodGFyZ2V0KSByZXR1cm4gbmF2aWdhdGUodGFyZ2V0LCB1aWQsIHRydWUsIGhhc2gpO1xuXHR9KTtcbn1cblxubGV0IG1vdXNlbW92ZV90aW1lb3V0O1xuXG5mdW5jdGlvbiBoYW5kbGVfbW91c2Vtb3ZlKGV2ZW50KSB7XG5cdGNsZWFyVGltZW91dChtb3VzZW1vdmVfdGltZW91dCk7XG5cdG1vdXNlbW92ZV90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0dHJpZ2dlcl9wcmVmZXRjaChldmVudCk7XG5cdH0sIDIwKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlcl9wcmVmZXRjaChldmVudCkge1xuXHRjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcblx0aWYgKCFhIHx8IGEucmVsICE9PSAncHJlZmV0Y2gnKSByZXR1cm47XG5cblx0cHJlZmV0Y2goYS5ocmVmKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX2NsaWNrKGV2ZW50KSB7XG5cdC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvcGFnZS5qc1xuXHQvLyBNSVQgbGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvcGFnZS5qcyNsaWNlbnNlXG5cdGlmICh3aGljaChldmVudCkgIT09IDEpIHJldHVybjtcblx0aWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSkgcmV0dXJuO1xuXHRpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuXG5cdGNvbnN0IGEgPSBmaW5kX2FuY2hvcihldmVudC50YXJnZXQpO1xuXHRpZiAoIWEpIHJldHVybjtcblxuXHRpZiAoIWEuaHJlZikgcmV0dXJuO1xuXG5cdC8vIGNoZWNrIGlmIGxpbmsgaXMgaW5zaWRlIGFuIHN2Z1xuXHQvLyBpbiB0aGlzIGNhc2UsIGJvdGggaHJlZiBhbmQgdGFyZ2V0IGFyZSBhbHdheXMgaW5zaWRlIGFuIG9iamVjdFxuXHRjb25zdCBzdmcgPSB0eXBlb2YgYS5ocmVmID09PSAnb2JqZWN0JyAmJiBhLmhyZWYuY29uc3RydWN0b3IubmFtZSA9PT0gJ1NWR0FuaW1hdGVkU3RyaW5nJztcblx0Y29uc3QgaHJlZiA9IFN0cmluZyhzdmcgPyAoYSkuaHJlZi5iYXNlVmFsIDogYS5ocmVmKTtcblxuXHRpZiAoaHJlZiA9PT0gbG9jYXRpb24uaHJlZikge1xuXHRcdGlmICghbG9jYXRpb24uaGFzaCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJZ25vcmUgaWYgdGFnIGhhc1xuXHQvLyAxLiAnZG93bmxvYWQnIGF0dHJpYnV0ZVxuXHQvLyAyLiByZWw9J2V4dGVybmFsJyBhdHRyaWJ1dGVcblx0aWYgKGEuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpIHx8IGEuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ2V4dGVybmFsJykgcmV0dXJuO1xuXG5cdC8vIElnbm9yZSBpZiA8YT4gaGFzIGEgdGFyZ2V0XG5cdGlmIChzdmcgPyAoYSkudGFyZ2V0LmJhc2VWYWwgOiBhLnRhcmdldCkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZik7XG5cblx0Ly8gRG9uJ3QgaGFuZGxlIGhhc2ggY2hhbmdlc1xuXHRpZiAodXJsLnBhdGhuYW1lID09PSBsb2NhdGlvbi5wYXRobmFtZSAmJiB1cmwuc2VhcmNoID09PSBsb2NhdGlvbi5zZWFyY2gpIHJldHVybjtcblxuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdGlmICh0YXJnZXQpIHtcblx0XHRjb25zdCBub3Njcm9sbCA9IGEuaGFzQXR0cmlidXRlKCdzYXBwZXItbm9zY3JvbGwnKTtcblx0XHRuYXZpZ2F0ZSh0YXJnZXQsIG51bGwsIG5vc2Nyb2xsLCB1cmwuaGFzaCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRfaGlzdG9yeS5wdXNoU3RhdGUoeyBpZDogY2lkIH0sICcnLCB1cmwuaHJlZik7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2hpY2goZXZlbnQpIHtcblx0cmV0dXJuIGV2ZW50LndoaWNoID09PSBudWxsID8gZXZlbnQuYnV0dG9uIDogZXZlbnQud2hpY2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRfYW5jaG9yKG5vZGUpIHtcblx0d2hpbGUgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnQScpIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7IC8vIFNWRyA8YT4gZWxlbWVudHMgaGF2ZSBhIGxvd2VyY2FzZSBuYW1lXG5cdHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcG9wc3RhdGUoZXZlbnQpIHtcblx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbF9zdGF0ZSgpO1xuXG5cdGlmIChldmVudC5zdGF0ZSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldCh1cmwpO1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdG5hdmlnYXRlKHRhcmdldCwgZXZlbnQuc3RhdGUuaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaGFzaGNoYW5nZVxuXHRcdHNldF91aWQodWlkICsgMSk7XG5cdFx0c2V0X2NpZCh1aWQpO1xuXHRcdF9oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGlkOiBjaWQgfSwgJycsIGxvY2F0aW9uLmhyZWYpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoUm91dGVzKHBhdGhuYW1lcykge1xuXHRyZXR1cm4gcm91dGVzXG5cdFx0LmZpbHRlcihwYXRobmFtZXNcblx0XHRcdD8gcm91dGUgPT4gcGF0aG5hbWVzLnNvbWUocGF0aG5hbWUgPT4gcm91dGUucGF0dGVybi50ZXN0KHBhdGhuYW1lKSlcblx0XHRcdDogKCkgPT4gdHJ1ZVxuXHRcdClcblx0XHQucmVkdWNlKChwcm9taXNlLCByb3V0ZSkgPT4gcHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChyb3V0ZS5wYXJ0cy5tYXAocGFydCA9PiBwYXJ0ICYmIGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSkpKTtcblx0XHR9KSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xufVxuXG5jb25zdCBzdG9yZXMkMSA9ICgpID0+IGdldENvbnRleHQoQ09OVEVYVF9LRVkpO1xuXG5leHBvcnQgeyBnb3RvLCBwcmVmZXRjaCwgcHJlZmV0Y2hSb3V0ZXMsIHN0YXJ0LCBzdG9yZXMkMSBhcyBzdG9yZXMgfTtcbiIsIjwhLS0gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0ISAtLT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBDT05URVhUX0tFWSB9IGZyb20gJy4vc2hhcmVkJztcblx0aW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGUnO1xuXHRpbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc3RvcmVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBzZWdtZW50cztcblx0ZXhwb3J0IGxldCBsZXZlbDA7XG5cdGV4cG9ydCBsZXQgbGV2ZWwxID0gbnVsbDtcblxuXHRzZXRDb250ZXh0KENPTlRFWFRfS0VZLCBzdG9yZXMpO1xuPC9zY3JpcHQ+XG5cbjxMYXlvdXQgc2VnbWVudD1cIntzZWdtZW50c1swXX1cIiB7Li4ubGV2ZWwwLnByb3BzfT5cblx0eyNpZiBlcnJvcn1cblx0XHQ8RXJyb3Ige2Vycm9yfSB7c3RhdHVzfS8+XG5cdHs6ZWxzZX1cblx0XHQ8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPVwie2xldmVsMS5jb21wb25lbnR9XCIgey4uLmxldmVsMS5wcm9wc30vPlxuXHR7L2lmfVxuPC9MYXlvdXQ+IiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0IVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb290IH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcbmV4cG9ydCB7IHByZWxvYWQgYXMgcm9vdF9wcmVsb2FkIH0gZnJvbSAnLi9zaGFyZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuZXhwb3J0IGNvbnN0IGlnbm9yZSA9IFtdO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleFwiICovIFwiLi4vLi4vLi4vcm91dGVzL2luZGV4LnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmluZGV4LnN2ZWx0ZV9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhYm91dFwiICovIFwiLi4vLi4vLi4vcm91dGVzL2Fib3V0LnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmFib3V0LnN2ZWx0ZV9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJibG9nXCIgKi8gXCIuLi8uLi8uLi9yb3V0ZXMvYmxvZy5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpibG9nLnN2ZWx0ZV9fXCJcblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdC8vIGluZGV4LnN2ZWx0ZVxuXHRcdHBhdHRlcm46IC9eXFwvJC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogMCB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBhYm91dC5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDEgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYmxvZy5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogMiB9XG5cdFx0XVxuXHR9XG5dO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0aW1wb3J0KFwiL1VzZXJzL21hcmN1c21hdGhpYXNzZW4vZGV2L2hvbWVwYWdlL25vZGVfbW9kdWxlcy9zYXBwZXIvc2FwcGVyLWRldi1jbGllbnQuanNcIikudGhlbihjbGllbnQgPT4ge1xuXHRcdGNsaWVudC5jb25uZWN0KDEwMDAwKTtcblx0fSk7XG59IiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9LRVkgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHByZWxvYWQgPSAoKSA9PiAoe30pOyIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBzdGF0dXNcbiAgICBleHBvcnQgbGV0IGVycm9yXG5cbiAgICBjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBoMSxcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDIuOGVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+e3N0YXR1c308L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPntzdGF0dXN9PC9oMT5cblxuPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXG57I2lmIGRldiAmJiBlcnJvci5zdGFja31cbiAgICA8cHJlPntlcnJvci5zdGFja308L3ByZT5cbnsvaWZ9XG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuc3ZlbHRlJ1xuICAgIGltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgc2VnbWVudFxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBtYWluIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDU2ZW07XG4gICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuPC9zdHlsZT5cblxuPE5hdiB7c2VnbWVudH0gLz5cbjxtYWluPlxuICAgIDxzbG90IC8+XG48L21haW4+XG48Rm9vdGVyIC8+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYXZhdGFyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hdmF0YXJfcGl4ZWxhdGVkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlcy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC4xMjEyZmMwYTY4YjcwNDAyYjZjOTg5ZWE4ODg1MDA2Ny53b2ZmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmVzb3VyY2VzL3B4cGx1c19pYm1fdmdhOC13ZWJmb250LmQ0NGJlN2VjOGRlZGQwOTY0ODhmOTJhMGRhNjU0NmQwLndvZmYyXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==