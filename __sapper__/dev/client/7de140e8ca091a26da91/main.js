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
/******/ 		return __webpack_require__.p + "" + "7de140e8ca091a26da91" + "/" + ({"about":"about","blog":"blog","index":"index"}[chunkId]||chunkId) + "." + chunkId + ".js"
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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: 'pxplus_ibm_vga8regular';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nhtml {\n  --theme-style: 'retro';\n  --chrome—color-light0: #FFFFFF;\n  --chrome—color-light1: #F4F5F7;\n  --chrome—color-light2: #E7EAED;\n  --chrome—color-dark0: #202124;\n  --chrome—color-dark1: #2D3033;\n  --chrome—color-dark2: #323639;\n  --text--color-base--light: 22, 21, 30;\n  --background--color-base--light: 246, 239, 228;\n  --text--color-base--dark: 246, 239, 228;\n  --background--color-base--dark: 22, 21, 30;\n  --primary: var(--chrome-color-dark0);\n  --secondary: var(--chrome—color-dark1);\n  --third: var(--chrome—color-dark2);\n  --apple_retro_green: #61bb46;\n  --apple_retro_yellow: #fdb827;\n  --apple_retro_orange: #f5821f;\n  --apple_retro_red: #e03a3e;\n  --apple_retro_purple: #963d97;\n  --apple_blue: rgb(64, 156, 255);\n  --apple_gray: rgb(152, 152, 157);\n  --apple_green: rgb(48, 219, 91);\n  --apple_indigo: rgb(125, 122, 255);\n  --apple_orange: rgb(255, 179, 64);\n  --apple_pink: rgb(255, 100, 130);\n  --apple_purple: rgb(218, 143, 255);\n  --apple_red: rgb(255, 105, 97);\n  --apple_teal: rgb(112, 215, 255);\n  --apple_yellow: rgb(255, 212, 38);\n  --c_blue: #247BA0;\n  --c_white: #FAF1D8;\n  --c_pink: #DD7373;\n  --c_black: #3E4E50;\n  --c_warm_black: #02394A;\n  --c_black_olive: #393D3F;\n  --c_orange: #F79D65;\n  --c_turq: #69D1C5;\n  --c_almond: #EED7C5;\n  --c_cadedblue: #5C9EAD;\n  --c_carib_green: #02C39A;\n  --systemBlueLight: rgb(0,122,255);\n  --systemBlueDark: rgb(10,132,255);\n  --systemGrayLight: rgb(142,142,147);\n  --systemGrayDark: rgb(152,152,157);\n  --systemGreenLight: rgb(52,199,89);\n  --systemGreenDark: rgb(48,209,88);\n  --systemIndigoLight: rgb(88,86,214);\n  --systemIndigoDark: rgb(94,92,230);\n  --systemOrangeLight: rgb(255,149,0);\n  --systemOrangeDark: rgb(255,159,10);\n  --systemPinkLight: rgb(255,45,85);\n  --systemPinkDark: rgb(255,55,95);\n  --systemPurpleLight: rgb(175,82,222);\n  --systemPurpleDark: rgb(191,90,242);\n  --systemRedLight: rgb(255,59,48);\n  --systemRedDark: rgb(255,69,58);\n  --systemTealLight: rgb(90,200,250);\n  --systemTealDark: rgb(100,210,255);\n  --systemYellowLight: rgb(255,204,0);\n  --systemYellowDark: rgb(255,214,10);\n  --storage: var(--c_cadedblue);\n  --literal: var(--c_carib_green);\n  --comment: var(--c_orange);\n  --keyword: rgb(255, 100, 130);\n  --compile_time_resolved: var(--apple_indigo);\n  --text-base: blue;\n  --text: rgba(var(--text-base), 1);\n  --background-base: red;\n  --background: var(--primary);\n  --font: 'pxplus_ibm_vga8regular';\n  --avatar: url(" + ___CSS_LOADER_URL___2___ + ");\n  --border-radius: 50px; }\n  html[theme-style='comic'] {\n    --theme-style: 'comic';\n    --font: 'Comic Sans MS';\n    --avatar: url(" + ___CSS_LOADER_URL___3___ + ");\n    --border-radius: 50%; }\n  html[theme-style='retro'] {\n    --theme-style: 'retro';\n    --font: 'pxplus_ibm_vga8regular';\n    --avatar: url(" + ___CSS_LOADER_URL___2___ + ");\n    --border-radius: 0px; }\n  html[theme-style='modern'] {\n    --theme-style: 'modern';\n    --border-radius: 50px;\n    --avatar: url(" + ___CSS_LOADER_URL___3___ + ");\n    --font: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif; }\n    html[theme-style='modern'] .landing-page--hero {\n      border-radius: 50px; }\n\nhtml[theme=\"light\"] {\n  --primary: var(--chrome—color-light0);\n  --secondary: var(--chrome—color-light1);\n  --third: var(--chrome—color-light2);\n  --systemBlue: var(--systemBlueLight);\n  --systemGray: var(--systemGrayLight);\n  --systemGreen: var(--systemGreenLight);\n  --systemIndigo: var(--systemIndigoLight);\n  --systemOrange: var(--systemOrangeLight);\n  --systemPink: var(--systemPinkLight);\n  --systemPurple: var(--systemPurpleLight);\n  --systemRed: var(--systemRedLight);\n  --systemTeal: var(--systemTealLight);\n  --systemYellow: var(--systemYellowLight);\n  --text-color--normal: var(--text);\n  --text-color--light: var(--c_black);\n  --text-color--richer: var(--c_black);\n  --text-color--highlight: var(--keyword);\n  --text-color--comment: var(--comment);\n  --background--content: rgb(255, 255, 255);\n  --text-base: var(--text--color-base--light);\n  --background-base: var(--background--color-base--light);\n  --background-color--selection: yellow; }\n  html[theme=\"light\"][theme-style='modern'] {\n    --text-base: 0,0,0;\n    --background-base: 255,255,255;\n    --background--content: white; }\n\nhtml[theme='dark'] {\n  --primary: var(--chrome—color-dark0);\n  --secondary: var(--chrome—color-dark1);\n  --third: var(--chrome—color-dark2);\n  --systemBlue: var(--systemBlueDark);\n  --systemGray: var(--systemGrayDark);\n  --systemGreen: var(--systemGreenDark);\n  --systemIndigo: var(--systemIndigoDark);\n  --systemOrange: var(--systemOrangeDark);\n  --systemPink: var(--systemPinkDark);\n  --systemPurple: var(--systemPurpleDark);\n  --systemRed: var(--systemRedDark);\n  --systemTeal: var(--systemTealDark);\n  --systemYellow: var(--systemYellowDark);\n  --text-color--normal: var(--c_white);\n  --text-color--light: var(--c_white);\n  --text-color--richer: var(--c_white);\n  --text-color--highlight: var(--apple_pink);\n  --text-color--comment: var(--comment);\n  --background--content: rgb(30, 30, 30);\n  --text-base: var(--text--color-base--dark);\n  --background-base: var(--background--color-base--dark);\n  --background-color--selection: var(--apple_pink); }\n  html[theme='dark'][theme-style='modern'] {\n    --text-base: 255,255,255;\n    --background-base: 0,0,0;\n    --background--content: black;\n    --text-color--normal: var(--text);\n    --text-color--light: var(--text);\n    --text-color--richer: var(--text); }\n\nhtml[theme='trueDark'] {\n  --primary: #000;\n  --secondary: #222;\n  --third: #444;\n  --text-color--normal: var(--c_white);\n  --text-color--light: var(--c_white);\n  --text-color--richer: var(--c_white);\n  --text-color--highlight: var(--apple_pink);\n  --text-color--comment: var(--comment);\n  --background--content: rgb(30, 30, 30);\n  --text-base: var(--text--color-base--dark);\n  --background-base: var(--background--color-base--dark);\n  --background-color--selection: var(--apple_pink); }\n  html[theme='trueDark'][theme-style='modern'] {\n    --text-base: 255,255,255;\n    --background-base: 0,0,0;\n    --background--content: black;\n    --text-color--normal: var(--text);\n    --text-color--light: var(--text);\n    --text-color--richer: var(--text); }\n\nbody, p, b, button {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 1em;\n  font-family: var(--font);\n  color: var(--text);\n  background: var(--background); }\n\n::selection {\n  color: var(--text-color--selection);\n  background-color: var(--background-color--selection); }\n\nbutton {\n  border: none;\n  color: rgba(var(--text-base), 0.6); }\n  button:hover {\n    color: rgba(var(--text-base), 1); }\n  button:focus {\n    outline: 0; }\n\n#p2d {\n  cursor: none; }\n\n.comment {\n  border-radius: 5px;\n  position: relative;\n  padding: 10px;\n  margin: 10px;\n  font-size: 0.75em;\n  border: 1px solid;\n  border-left: 1em solid; }\n  .comment.advice {\n    border-color: #02C39A; }\n    .comment.advice p {\n      color: #208975; }\n  .comment.warning {\n    border-color: #F79D65; }\n    .comment.warning p {\n      color: #9b765b; }\n  .comment.info {\n    border-color: #5C9EAD; }\n    .comment.info p {\n      color: #4d767f; }\n\n.emphasis {\n  font-weight: 100;\n  font-size: 2em; }\n\nbutton {\n  padding: 5px;\n  margin: 5px; }\n\nimg {\n  max-width: 200px;\n  border-radius: 50px; }\n\n.entity {\n  display: inline-block;\n  padding: 1px;\n  color: #F79D65;\n  background: rgba(247, 157, 101, 0.1);\n  font-style: italic; }\n\n.keyword {\n  display: inline-block;\n  padding: 1px;\n  color: #ff6482;\n  background: rgba(255, 100, 130, 0.1);\n  font-style: normal; }\n\n.faint {\n  color: rgba(var(--text-base), 0.5); }\n\na {\n  color: var(--text);\n  opacity: 0.8;\n  text-decoration: none;\n  font-family: var(--font); }\n  a:hover {\n    opacity: 1.0;\n    color: var(--text); }\n\nhr {\n  border-color: rgba(var(--text-base), 0.1);\n  border-width: 0.5px;\n  margin: 0 auto;\n  margin-top: 20px;\n  width: 60%; }\n\np {\n  background: none; }\n\nspan {\n  color: var(--text);\n  font-family: var(--font); }\n\nli, ul {\n  margin: 5px;\n  margin-top: 10px;\n  list-style-type: none; }\n", ""]);


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
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, append_dev, assign, attr, attr_dev, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_element, claim_space, claim_text, clear_loops, component_subscribe, createEventDispatcher, create_animation, create_bidirectional_transition, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, identity, init, insert, insert_dev, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, listen_dev, loop, measure, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
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
function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
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
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
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
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
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
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
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
        ? instance(component, props, (key, ret, value = ret) => {
            if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty(component, key);
            }
            return ret;
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

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, detail));
}
function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev("SvelteDOMSetDataset", { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data)
        return;
    dispatch_dev("SvelteDOMSetData", { node: text, data });
    text.data = data;
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
        text: getStyleAsRGB(document.documentElement, '--text'),
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
/* src/components/Footer.svelte generated by Svelte v3.12.0 */

const { document: document_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];


const file = "src/components/Footer.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-4ua3zt-style';
	style.textContent = "footer.svelte-4ua3zt{text-align:center;background:none;font-size:0.75em}button.svelte-4ua3zt{font-size:0.75em}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiRm9vdGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG5cbiAgICBsZXQgdGhlbWVcbiAgICBsZXQgdGhlbWVTdHlsZVxuXG4gICAgY29uc3QgdGhlbWVzID0gWydsaWdodCcsICdkYXJrJ10gLy8gJ3RydWVEYXJrJ1xuICAgIGNvbnN0IHRoZW1lU3R5bGVzID0gWydtb2Rlcm4nLCAncmV0cm8nXVxuXG4gICAgb25Nb3VudCgoKSA9PiB7XG5cbiAgICAgICAgLy8gTGlzdGVuIHRvIHRoZSBPUyB0aGVtZSBjaGFuZ2VzIGFuZCBtYWtlIHN1cmUgdGhlIHRleHQgaXMgdXAgdG8gZGF0ZS5cbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzXG4gICAgICAgICAgICA/ICdsaWdodCdcbiAgICAgICAgICAgIDogJ2RhcmsnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgbGFzdCB1c2VkIHRoZW1lIGZyb20gdGhlIHNlc3Npb25TdG9yYWdlLlxuICAgICAgICAvLyBUaGlzIHdpbGwgbWFpbnRhaW4gdGhlIGNob3NlbiB0aGVtZSB3aGVuIHRoZSB1c2VyIHJlbG9hZHMgdGhlIHBhZ2UuXG4gICAgICAgIGxldCBsYXN0VGhlbWVVc2VkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxuICAgICAgICBpZiAobGFzdFRoZW1lVXNlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUnLCBsYXN0VGhlbWVVc2VkKVxuICAgICAgICAgICAgdGhlbWUgPSBsYXN0VGhlbWVVc2VkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdFRoZW1lU3R5bGVVc2VkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUtc3R5bGUnKVxuICAgICAgICBpZiAobGFzdFRoZW1lU3R5bGVVc2VkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScsIGxhc3RUaGVtZVN0eWxlVXNlZClcbiAgICAgICAgICAgIHRoZW1lU3R5bGUgPSBsYXN0VGhlbWVTdHlsZVVzZWRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZScpXG4gICAgICAgIHRoZW1lU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScpXG4gICAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Rm9vdGVyLnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPGZvb3Rlcj48ZGl2IGNsYXNzPVwiZmFpbnRcIj5CdWlsdCB1c2luZ1xuPGI+PGEgaHJlZj1cImh0dHBzOi8vc2FwcGVyLnN2ZWx0ZS5kZXYvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TYXBwZXI8L2E+PC9iPlxuJlxuPGI+PGEgaHJlZj1cImh0dHBzOi8vc3ZlbHRlLmRldi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlN2ZWx0ZTwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+V2VicGFjazwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly9zYXNzLWxhbmcuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TYXNzPC9hPjwvYj5cbiZcbjxiPjxhIGhyZWY9XCJodHRwczovL3B1Z2pzLm9yZy9hcGkvZ2V0dGluZy1zdGFydGVkLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlB1ZzwvYT48L2I+PC9kaXY+PGRpdiBjbGFzcz1cImZhaW50XCI+Rm9udDogPGI+PGEgaHJlZj1cImh0dHBzOi8vaW50MTBoLm9yZy9vbGRzY2hvb2wtcGMtZm9udHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5QeFBsdXMgSUJNIFZHQTg8L2E+PC9iPjwvZGl2PjxkaXYgY2xhc3M9XCJmYWludFwiPkhvc3Q6IDxiPjxhIGhyZWY9XCJodHRwczovL3d3dy5uZXRsaWZ5LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPk5ldGxpZnk8L2E+PC9iPjwvZGl2PjwvZm9vdGVyPlxuPCEtLSB0aGVtZS1zdHlsZSAtLT5cbjxidXR0b24gb246Y2xpY2sgPSB7KCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVRoZW1lU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScpXG4gICAgY29uc3QgaSA9IHRoZW1lU3R5bGVzLmZpbmRJbmRleCh0ID0+IHQgPT09IGFjdGl2ZVRoZW1lU3R5bGUpXG4gICAgY29uc3QgbmV4dFRoZW1lU3R5bGUgPSB0aGVtZVN0eWxlc1soaSArIDEpICUgdGhlbWVTdHlsZXMubGVuZ3RoXVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lLXN0eWxlJywgbmV4dFRoZW1lU3R5bGUpXG4gICAgXG4gICAgdGhlbWVTdHlsZSA9IG5leHRUaGVtZVN0eWxlXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUtc3R5bGUnLCB0aGVtZVN0eWxlKVxuXG59fT57dGhlbWVTdHlsZX08L2J1dHRvbj5cblxuPCEtLSB0aGVtZSAtLT5cbjxidXR0b24gb246Y2xpY2sgPSB7KCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUnKVxuICAgIGNvbnN0IGkgPSB0aGVtZXMuZmluZEluZGV4KHQgPT4gdCA9PT0gYWN0aXZlVGhlbWUpXG4gICAgY29uc3QgbmV4dFRoZW1lID0gdGhlbWVzWyhpICsgMSkgJSB0aGVtZXMubGVuZ3RoXVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgbmV4dFRoZW1lKVxuXG4gICAgdGhlbWUgPSBuZXh0VGhlbWVcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKVxuXG59fT57dGhlbWV9PC9idXR0b24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NtQixNQUFNLGNBQUMsQ0FBQyxBQUN6QixVQUFVLENBQUUsTUFBTSxDQUNsQixVQUFVLENBQUUsSUFBSSxDQUNoQixTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFFdEIsTUFBTSxjQUFDLENBQUMsQUFDTixTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document_1.head, style);
}

function create_fragment(ctx) {
	var footer, div0, t0, b0, a0, t1, t2, b1, a1, t3, t4, b2, a2, t5, t6, b3, a3, t7, t8, b4, a4, t9, div1, t10, b5, a5, t11, div2, t12, b6, a6, t13, t14, button0, t15, t16, button1, t17, dispose;

	const block = {
		c: function create() {
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("footer");
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
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.themeStyle);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.theme);
			this.h()
		},

		l: function claim(nodes) {
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "FOOTER", { class: true }, false);
			var footer_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(footer);

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "Built using\n");

			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b0);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b0_nodes, "A", { href: true, target: true, rel: true }, false);
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "Sapper");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b1);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b1_nodes, "A", { href: true, target: true, rel: true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "Svelte");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b2_nodes, "A", { href: true, target: true, rel: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "Webpack");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b3);

			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b3_nodes, "A", { href: true, target: true, rel: true }, false);
			var a3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a3);

			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a3_nodes, "Sass");
			a3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n&\n");

			b4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "B", {}, false);
			var b4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b4);

			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b4_nodes, "A", { href: true, target: true, rel: true }, false);
			var a4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a4);

			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a4_nodes, "Pug");
			a4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);

			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "Font: ");

			b5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "B", {}, false);
			var b5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b5);

			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b5_nodes, "A", { href: true, target: true, rel: true }, false);
			var a5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a5);

			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a5_nodes, "PxPlus IBM VGA8");
			a5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);

			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(footer_nodes, "DIV", { class: true }, false);
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);

			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "Host: ");

			b6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "B", {}, false);
			var b6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b6);

			a6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b6_nodes, "A", { href: true, target: true, rel: true }, false);
			var a6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a6);

			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a6_nodes, "Netlify");
			a6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			b6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			footer_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { class: true }, false);
			var button0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button0);

			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button0_nodes, ctx.themeStyle);
			button0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { class: true }, false);
			var button1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button1);

			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button1_nodes, ctx.theme);
			button1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", "https://sapper.svelte.dev/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 49, 3, 1475);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b0, file, 49, 0, 1472);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", "https://svelte.dev/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 51, 3, 1563);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b1, file, 51, 0, 1560);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "href", "https://webpack.js.org");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 53, 3, 1644);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b2, file, 53, 0, 1641);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a3, "href", "https://sass-lang.com");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a3, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a3, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a3, file, 55, 3, 1729);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b3, file, 55, 0, 1726);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a4, "href", "https://pugjs.org/api/getting-started.html");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a4, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a4, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a4, file, 57, 3, 1810);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b4, file, 57, 0, 1807);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 48, 8, 1441);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a5, "href", "https://int10h.org/oldschool-pc-fonts/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a5, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a5, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a5, file, 57, 132, 1939);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b5, file, 57, 129, 1936);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 57, 104, 1911);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a6, "href", "https://www.netlify.com/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a6, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a6, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a6, file, 57, 269, 2076);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b6, file, 57, 266, 2073);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 57, 241, 2048);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(footer, "class", "svelte-4ua3zt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(footer, file, 48, 0, 1433);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "class", "svelte-4ua3zt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 59, 0, 2194);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "class", "svelte-4ua3zt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 71, 0, 2644);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button0, "click", ctx.click_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button1, "click", ctx.click_handler_1)
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, footer, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(footer, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, b0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, b1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, b2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, b3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b3, a3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, b4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b4, a4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a4, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(footer, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, b5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b5, a5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a5, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(footer, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, b6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b6, a6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a6, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t14, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button0, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t16, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button1, t17);
		},

		p: function update(changed, ctx) {
			if (changed.themeStyle) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t15, ctx.themeStyle);
			}

			if (changed.theme) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t17, ctx.theme);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(footer);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t14);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t16);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let theme
    let themeStyle

    const themes = ['light', 'dark'] // 'trueDark'
    const themeStyles = ['modern', 'retro']

    Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {

        // Listen to the OS theme changes and make sure the text is up to date.
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            $$invalidate('theme', theme = window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark')
        })

        // Restore the last used theme from the sessionStorage.
        // This will maintain the chosen theme when the user reloads the page.
        let lastThemeUsed = sessionStorage.getItem('theme')
        if (lastThemeUsed) {
            document.documentElement.setAttribute('theme', lastThemeUsed)
            $$invalidate('theme', theme = lastThemeUsed)
        }

        let lastThemeStyleUsed = sessionStorage.getItem('theme-style')
        if (lastThemeStyleUsed) {
            document.documentElement.setAttribute('theme-style', lastThemeStyleUsed)
            $$invalidate('themeStyle', themeStyle = lastThemeStyleUsed)
        }
        
        $$invalidate('theme', theme = document.documentElement.getAttribute('theme'))
        $$invalidate('themeStyle', themeStyle = document.documentElement.getAttribute('theme-style'))
    })

	const click_handler = () => {
	    const activeThemeStyle = document.documentElement.getAttribute('theme-style')
	    const i = themeStyles.findIndex(t => t === activeThemeStyle)
	    const nextThemeStyle = themeStyles[(i + 1) % themeStyles.length]
	    document.documentElement.setAttribute('theme-style', nextThemeStyle)
	    
	    $$invalidate('themeStyle', themeStyle = nextThemeStyle)
	    sessionStorage.setItem('theme-style', themeStyle)

	};

	const click_handler_1 = () => {
	    const activeTheme = document.documentElement.getAttribute('theme')
	    const i = themes.findIndex(t => t === activeTheme)
	    const nextTheme = themes[(i + 1) % themes.length]
	    document.documentElement.setAttribute('theme', nextTheme)

	    $$invalidate('theme', theme = nextTheme)
	    sessionStorage.setItem('theme', theme)

	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ('theme' in $$props) $$invalidate('theme', theme = $$props.theme);
		if ('themeStyle' in $$props) $$invalidate('themeStyle', themeStyle = $$props.themeStyle);
	};

	return {
		theme,
		themeStyle,
		themes,
		themeStyles,
		sessionStorage,
		document,
		click_handler,
		click_handler_1
	};
}

class Footer extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document_1.getElementById("svelte-4ua3zt-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Footer", options, id: create_fragment.name });
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
/* src/components/Nav.svelte generated by Svelte v3.12.0 */


const file = "src/components/Nav.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1g5mz88-style';
	style.textContent = "nav.svelte-1g5mz88{font-weight:600;padding:0 1em}ul.svelte-1g5mz88{margin:0;padding:0}ul.svelte-1g5mz88::after{content:'';display:block;clear:both}li.svelte-1g5mz88{display:block;float:left}.selected.svelte-1g5mz88{color:var(--text);position:relative;display:inline-block}.selected.svelte-1g5mz88::after{position:absolute;content:'';width:calc(100% - 1em);display:block}a.svelte-1g5mz88{color:rgba(var(--text-base), 0.5);margin-top:10px;padding:0em 1em;display:block}ul.svelte-1g5mz88{display:flex;justify-content:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LnN2ZWx0ZSIsInNvdXJjZXMiOlsiTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc2VnbWVudFxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBuYXYge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAvKiBjbGVhcmZpeCAqL1xuICAgIHVsOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0LWJhc2UpLCAwLjUpO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwZW0gMWVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxuYXY+XG4gICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzcz17c2VnbWVudCA9PT0gdW5kZWZpbmVkID8gJ3NlbGVjdGVkJyA6ICcnfSBocmVmPVwiLlwiPmhvbWU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzPXtzZWdtZW50ID09PSAnYWJvdXQnID8gJ3NlbGVjdGVkJyA6ICcnfSBocmVmPVwiYWJvdXRcIj5hYm91dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3M9e3NlZ21lbnQgPT09ICdibG9nJyA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cImJsb2dcIj5ibG9nPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25hdj5cbjxocj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSSxHQUFHLGVBQUMsQ0FBQyxBQUNELFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE9BQU8sQ0FBRSxDQUFDLENBQUMsR0FBRyxBQUNsQixDQUFDLEFBRUQsRUFBRSxlQUFDLENBQUMsQUFDQSxNQUFNLENBQUUsQ0FBQyxDQUNULE9BQU8sQ0FBRSxDQUFDLEFBQ2QsQ0FBQyxBQUdELGlCQUFFLE9BQU8sQUFBQyxDQUFDLEFBQ1AsT0FBTyxDQUFFLEVBQUUsQ0FDWCxPQUFPLENBQUUsS0FBSyxDQUNkLEtBQUssQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUVELEVBQUUsZUFBQyxDQUFDLEFBQ0EsT0FBTyxDQUFFLEtBQUssQ0FDZCxLQUFLLENBQUUsSUFBSSxBQUNmLENBQUMsQUFFRCxTQUFTLGVBQUMsQ0FBQyxBQUNQLEtBQUssQ0FBRSxJQUFJLE1BQU0sQ0FBQyxDQUNsQixRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsWUFBWSxBQUN6QixDQUFDLEFBRUQsd0JBQVMsT0FBTyxBQUFDLENBQUMsQUFDZCxRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsRUFBRSxDQUNYLEtBQUssQ0FBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3ZCLE9BQU8sQ0FBRSxLQUFLLEFBQ2xCLENBQUMsQUFFRCxDQUFDLGVBQUMsQ0FBQyxBQUNDLEtBQUssQ0FBRSxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDbEMsVUFBVSxDQUFFLElBQUksQ0FDaEIsT0FBTyxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQ2hCLE9BQU8sQ0FBRSxLQUFLLEFBQ2xCLENBQUMsQUFFRCxFQUFFLGVBQUMsQ0FBQyxBQUNBLE9BQU8sQ0FBRSxJQUFJLENBQ2IsZUFBZSxDQUFFLE1BQU0sQUFDM0IsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	var nav, ul, li0, a0, t0, a0_class_value, t1, li1, a1, t2, a1_class_value, t3, li2, a2, t4, a2_class_value, t5, hr;

	const block = {
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
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);

			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true }, false);
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "A", { class: true, href: true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "about");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);

			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true }, false);
			var li2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li2_nodes, "A", { class: true, href: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "blog");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			nav_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "HR", {}, false);
			var hr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(hr);

			hr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", a0_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === undefined ? 'selected' : '')) + " svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", ".");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 56, 12, 844);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li0, "class", "svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 55, 8, 827);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", a1_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'about' ? 'selected' : '')) + " svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", "about");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 59, 12, 952);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li1, "class", "svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 58, 8, 935);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "class", a2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'blog' ? 'selected' : '')) + " svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "href", "blog");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 62, 12, 1063);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li2, "class", "svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li2, file, 61, 8, 1046);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(ul, "class", "svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 54, 4, 814);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(nav, "class", "svelte-1g5mz88");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 53, 0, 804);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(hr, file, 66, 0, 1163);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, nav, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(nav, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, hr, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.segment) && a0_class_value !== (a0_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === undefined ? 'selected' : '')) + " svelte-1g5mz88")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", a0_class_value);
			}

			if ((changed.segment) && a1_class_value !== (a1_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'about' ? 'selected' : '')) + " svelte-1g5mz88")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", a1_class_value);
			}

			if ((changed.segment) && a2_class_value !== (a2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === 'blog' ? 'selected' : '')) + " svelte-1g5mz88")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a2, "class", a2_class_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(nav);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t5);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(hr);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
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

	$$self.$capture_state = () => {
		return { segment };
	};

	$$self.$inject_state = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment };
}

class Nav extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1g5mz88-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Nav", options, id: create_fragment.name });

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

/***/ "./src/components/moving-background.svelte":
/*!*************************************************!*\
  !*** ./src/components/moving-background.svelte ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/math */ "./src/components/utils/math.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utility */ "./src/components/utils/utility.js");
/* src/components/moving-background.svelte generated by Svelte v3.12.0 */

const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];




const file = "src/components/moving-background.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1y3jfnj-style';
	style.textContent = "canvas.svelte-1y3jfnj{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-999}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aW5nLWJhY2tncm91bmQuc3ZlbHRlIiwic291cmNlcyI6WyJtb3ZpbmctYmFja2dyb3VuZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuY2FudmFzIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB6LWluZGV4OiAtOTk5O1xufVxuPC9zdHlsZT5cblxuPGNhbnZhc1xuICAgIGJpbmQ6dGhpcz17Y2FudmFzfVxuPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcblxuICAgIGltcG9ydCB7IHYyLCBtYXQ0IH0gZnJvbSAnLi91dGlscy9tYXRoJ1xuICAgIGltcG9ydCB7IHJhbmRGbG9hdCB9IGZyb20gJy4vdXRpbHMvdXRpbGl0eSdcblxuICAgIGV4cG9ydCBsZXQgbW92aW5nQmFja2dyb3VuZE9wdGlvbnNcblxuICAgIGxldCBzdGFydFRpbWUgPSAwXG4gICAgbGV0IHRleHRDb2xvclxuICAgIGxldCBiYWNrQ29sb3JcblxuICAgIGxldCBnbFxuICAgIGxldCB2YW9cbiAgICBsZXQgdmJvID0gbmV3IE1hcCgpXG4gICAgbGV0IHByb2dyYW1cblxuICAgIGxldCBnQXR0cmliTG9jYXRpb25WaWV3cG9ydFNpemUgPSA0XG5cbiAgICBsZXQgdmVydGljZXNBdHRyaWJMb2NhdGlvbiA9IDBcbiAgICBsZXQgcG9zaXRpb25zQXR0cmliTG9jYXRpb24gPSAxXG4gICAgbGV0IGNvbG9yc0F0dHJpYkxvY2F0aW9uID0gMlxuICAgIGxldCBzaXplc0F0dHJpYkxvY2F0aW9uID0gM1xuXG4gICAgbGV0IGNhbnZhc1xuICAgIGxldCBjYW52YXNXaWR0aCA9IDMwMFxuICAgIGxldCBjYW52YXNIZWlnaHQgPSAzMDBcblxuICAgIGxldCBiaW5kVG8gPSAnbW92aW5nLWJhY2tncm91bmQnXG4gICAgbGV0IG51bVZlcnRpY2VzUGVyQ2lyY2xlID0gbW92aW5nQmFja2dyb3VuZE9wdGlvbnMudmVydGljZXNQZXJQYXJ0aWNsZVxuICAgIGxldCBkZXNpcmVkUHJpbWl0aXZlQ291bnQgPSBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9ucy5wYXJ0aWNsZUNvdW50XG4gICAgbGV0IHBhcnRpY2xlU2l6ZSA9IG1vdmluZ0JhY2tncm91bmRPcHRpb25zLnBhcnRpY2xlU2l6ZVxuXG4gICAgbGV0IGxhc3RQcmltaXRpdmVDb3VudCA9IDBcbiAgICBsZXQgcHJpbWl0aXZlQ291bnQgPSAwXG5cbiAgICBsZXQgbGFzdEluZm8gPSB7XG4gICAgICAgIHZlcnRpY2VzTGVuZ3RoOiAwLFxuICAgICAgICBwb3NpdGlvbnNMZW5ndGg6IDAsXG4gICAgICAgIGNvbG9yc0xlbmd0aDogMCxcbiAgICAgICAgc2l6ZXNMZW5ndGg6IDAsXG4gICAgfVxuXG4gICAgbGV0IHZlcnRpY2VzID0gW11cbiAgICBsZXQgcG9zaXRpb25zID0gW11cbiAgICBsZXQgY29sb3JzID0gW11cbiAgICBsZXQgc2l6ZXMgPSBbXVxuXG4gICAgbGV0IEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlID0ge1xuICAgICAgICB2ZXJ0aWNlczogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uczogZmFsc2UsXG4gICAgICAgIGNvbG9yczogZmFsc2UsXG4gICAgICAgIHNpemVzOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCB2ZWxvY2l0aWVzID0gW11cbiAgICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIDEwMDBcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlR1BVQnVmZmVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLnZlcnRpY2VzKSB7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVWZXJ0aWNlcygpXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgndmVydGljZXMnKSlcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoXG4gICAgICAgICAgICBpZiAodmVydGljZXNMZW5ndGggPj0gbGFzdEluZm8udmVydGljZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgICAgICAgICBsYXN0SW5mby52ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzTGVuZ3RoXG4gICAgICAgICAgICB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCAwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLnBvc2l0aW9ucykge1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlUG9zaXRpb25zKClcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2Ym8uZ2V0KCdwb3NpdGlvbnMnKSlcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uc0xlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbnNMZW5ndGggPj0gbGFzdEluZm8ucG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSwgZ2wuRFlOQU1JQ19EUkFXKVxuICAgICAgICAgICAgICAgIGxhc3RJbmZvLnBvc2l0aW9uc0xlbmd0aCA9IHBvc2l0aW9uc0xlbmd0aFxuICAgICAgICAgICAgfSBlbHNlIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksIDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUuY29sb3JzKSB7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVDb2xvcnMoKVxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ2NvbG9ycycpKVxuICAgICAgICAgICAgY29uc3QgY29sb3JzTGVuZ3RoID0gY29sb3JzLmxlbmd0aFxuICAgICAgICAgICAgaWYgKGNvbG9yc0xlbmd0aCA+PSBsYXN0SW5mby5jb2xvcnNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgICAgICAgICAgbGFzdEluZm8uY29sb3JzTGVuZ3RoID0gY29sb3JzTGVuZ3RoXG4gICAgICAgICAgICB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSwgMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS5zaXplcykge1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlU2l6ZXMoKVxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ3NpemVzJykpXG4gICAgICAgICAgICBjb25zdCBzaXplc0xlbmd0aCA9IHNpemVzLmxlbmd0aFxuICAgICAgICAgICAgaWYgKHNpemVzTGVuZ3RoID49IGxhc3RJbmZvLnNpemVzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoc2l6ZXMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgICAgICAgICAgbGFzdEluZm8uc2l6ZXNMZW5ndGggPSBzaXplc0xlbmd0aFxuICAgICAgICAgICAgfSBlbHNlIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCBuZXcgRmxvYXQzMkFycmF5KHNpemVzKSwgMCwgMClcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlKSBwcm9wID0gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemUgPSByZ2JhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHJnYmEuciAvIDI1NSxcbiAgICAgICAgICAgIGc6IHJnYmEuZyAvIDI1NSxcbiAgICAgICAgICAgIGI6IHJnYmEuYiAvIDI1NSxcbiAgICAgICAgICAgIGE6IHJnYmEuYSB8fCByZ2JhLmEgLyAyNTUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWZXJ0aWNlcygpIHtcbiAgICAgICAgbnVtVmVydGljZXNQZXJDaXJjbGUgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGguc2luKGdldFRpbWUoKSkqMTIpKzMpXG4gICAgICAgIC8vIEFkZCB2ZXJ0aWNlc1xuICAgICAgICB2ZXJ0aWNlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXNQZXJDaXJjbGU7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY29udCA9IGkgKiBNYXRoLlBJICogMiAvIG51bVZlcnRpY2VzUGVyQ2lyY2xlXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKE1hdGguY29zKGNvbnQpLCBNYXRoLnNpbihjb250KSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKCkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICAgIHZhciBkZXNpcmVkQ1NTV2lkdGggPSBjYW52YXNXaWR0aFxuICAgICAgICB2YXIgZGVzaXJlZENTU0hlaWdodCA9IGNhbnZhc0hlaWdodFxuICAgICAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRlc2lyZWRDU1NXaWR0aCAqIGRldmljZVBpeGVsUmF0aW9cbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRlc2lyZWRDU1NIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvXG5cbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICsgJ3B4J1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCArICdweCdcblxuICAgICAgICBjYW52YXNXaWR0aCAqPSBkZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgIGNhbnZhc0hlaWdodCAqPSBkZXZpY2VQaXhlbFJhdGlvXG5cbiAgICAgICAgdGV4dENvbG9yID0gbm9ybWFsaXplKHdpbmRvdy5jb2xvci50ZXh0KVxuICAgICAgICB0ZXh0Q29sb3IuYSA9IDAuMlxuXG4gICAgICAgIGJhY2tDb2xvciA9IG5vcm1hbGl6ZSh3aW5kb3cuY29sb3IuYmFja2dyb3VuZClcbiAgICAgICAgYmFja0NvbG9yLmEgPSAxLjBcblxuICAgICAgICAvLyBHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS5jb2xvcnMgPSB0cnVlXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW1pdGl2ZUNvdW50ICogMjsgaSArPSAyKSB7XG4gICAgICAgICAgICBsZXQgcG9zeCA9IHBvc2l0aW9uc1tpXVxuICAgICAgICAgICAgbGV0IHBvc3kgPSBwb3NpdGlvbnNbaSsxXVxuXG4gICAgICAgICAgICBsZXQgdmVseCA9IHZlbG9jaXRpZXNbaV1cbiAgICAgICAgICAgIGxldCB2ZWx5ID0gdmVsb2NpdGllc1tpKzFdXG5cbiAgICAgICAgICAgIGxldCBzaXplID0gc2l6ZXNbaSAvIDIgLSAxXVxuXG4gICAgICAgICAgICBpZiAocG9zeCA+PSBjYW52YXNXaWR0aCAtIHNpemUpIHtcbiAgICAgICAgICAgICAgICBwb3N4ID0gY2FudmFzV2lkdGggLSBzaXplXG4gICAgICAgICAgICAgICAgdmVseCA9IC12ZWx4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zeCA8PSBzaXplKSB7XG4gICAgICAgICAgICAgICAgcG9zeCA9IHNpemVcbiAgICAgICAgICAgICAgICB2ZWx4ID0gLXZlbHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3N5ID49IGNhbnZhc0hlaWdodCAtIHNpemUpIHtcbiAgICAgICAgICAgICAgICBwb3N5ID0gY2FudmFzSGVpZ2h0IC0gc2l6ZVxuICAgICAgICAgICAgICAgIHZlbHkgPSAtdmVseVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc3kgPD0gc2l6ZSkge1xuICAgICAgICAgICAgICAgIHBvc3kgPSBzaXplXG4gICAgICAgICAgICAgICAgdmVseSA9IC12ZWx5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvc3ggKz0gdmVseCAqIDAuMDVcbiAgICAgICAgICAgIHBvc3kgKz0gdmVseSAqIDAuMDVcblxuICAgICAgICAgICAgcG9zaXRpb25zW2ldID0gcG9zeFxuICAgICAgICAgICAgcG9zaXRpb25zW2krMV0gPSBwb3N5XG5cbiAgICAgICAgICAgIHZlbG9jaXRpZXNbaV0gPSB2ZWx4XG4gICAgICAgICAgICB2ZWxvY2l0aWVzW2krMV0gPSB2ZWx5XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ29sb3JzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW1pdGl2ZUNvdW50KjQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgY29sb3JzW2ldICAgPSB0ZXh0Q29sb3IuclxuICAgICAgICAgICAgY29sb3JzW2krMV0gPSB0ZXh0Q29sb3IuZ1xuICAgICAgICAgICAgY29sb3JzW2krMl0gPSB0ZXh0Q29sb3IuYlxuICAgICAgICAgICAgY29sb3JzW2krM10gPSB0ZXh0Q29sb3IuYVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNpemVzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW1pdGl2ZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHNpemVzW2ldID0gTWF0aC5hYnMoTWF0aC5zaW4oZ2V0VGltZSgpKSAqIDEpICsgMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgdXBkYXRlVmFsdWVzKClcblxuICAgICAgICAvLyBHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS52ZXJ0aWNlcyA9IHRydWVcbiAgICAgICAgR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUucG9zaXRpb25zID0gdHJ1ZVxuICAgICAgICAvLyBHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS5zaXplcyA9IHRydWVcblxuICAgICAgICBnbC5jbGVhckNvbG9yKGJhY2tDb2xvci5yLGJhY2tDb2xvci5nLGJhY2tDb2xvci5iLCBiYWNrQ29sb3IuYSlcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVClcblxuICAgICAgICAvLyBTZXR1cCB2aWV3cG9ydCwgb3J0aG9ncmFwaGljIHByb2plY3Rpb24gbWF0cml4XG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpXG5cbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKVxuICAgICAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxuICAgICAgICBnbC51bmlmb3JtMmYoZ0F0dHJpYkxvY2F0aW9uVmlld3BvcnRTaXplLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnbC5UUklBTkdMRV9GQU5cbiAgICAgICAgY29uc3QgZmlyc3QgPSAwXG4gICAgICAgIGNvbnN0IGNvdW50ID0gbnVtVmVydGljZXNQZXJDaXJjbGVcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlX2NvdW50ID0gcHJpbWl0aXZlQ291bnRcblxuICAgICAgICBhd2FpdCB1cGRhdGVHUFVCdWZmZXJzKClcbiAgICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0eXBlLCBmaXJzdCwgY291bnQsIHByaW1pdGl2ZV9jb3VudClcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF3YWl0IGRyYXcpXG5cbiAgICAgICAgbGFzdFByaW1pdGl2ZUNvdW50ID0gcHJpbWl0aXZlQ291bnRcbiAgICB9XG5cbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcblxuICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpXG5cbiAgICAgICAgaWYgKCFnbCkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyB3ZWJnbDIgY29udGV4dCBmb3VuZC4gc3RvcHBpbmcuXCIpXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cblxuICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpXG4gICAgICAgIGdsLmJsZW5kRXF1YXRpb24oZ2wuRlVOQ19BREQpXG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpXG5cbiAgICAgICAgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICBsZXQgdnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUilcbiAgICAgICAgbGV0IGZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUilcblxuICAgICAgICBsZXQgdnNfc3JjID0gYCN2ZXJzaW9uIDMwMCBlc1xuICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICAgaW4gdmVjMiAgICAgdmVydGljZXM7XG4gICAgICAgIGluIHZlYzIgICAgIHBvc2l0aW9uO1xuICAgICAgICBpbiB2ZWM0ICAgICBjb2xvcjtcbiAgICAgICAgaW4gZmxvYXQgICAgc2l6ZTtcblxuICAgICAgICB1bmlmb3JtIHZlYzIgdmlld3BvcnRfc2l6ZTtcblxuICAgICAgICBvdXQgdmVjNCBjb2xvcjA7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgdmVjMiBwb3MgPSAoKChzaXplICogdmVydGljZXMgKyBwb3NpdGlvbikgLyB2aWV3cG9ydF9zaXplKSAqIDIuMCkgLSAxLjA7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zLCAwLjAsIDEuMCk7XG4gICAgICAgICAgICBjb2xvcjAgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBgXG5cbiAgICAgICAgbGV0IGZzX3NyYyA9IGAjdmVyc2lvbiAzMDAgZXNcbiAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuICAgICAgICBpbiB2ZWM0IGNvbG9yMDtcbiAgICAgICAgb3V0IHZlYzQgZnJhZztcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZnJhZyA9IGNvbG9yMDtcbiAgICAgICAgfWBcblxuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodnMsIHZzX3NyYylcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKGZzLCBmc19zcmMpXG5cbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcih2cylcbiAgICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAnRVJST1IgY29tcGlsaW5nIHZlcnRleCBzaGFkZXIhJyxcbiAgICAgICAgICAgICAgICBnbC5nZXRTaGFkZXJJbmZvTG9nKHZzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBnbC5jb21waWxlU2hhZGVyKGZzKVxuICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICdFUlJPUiBjb21waWxpbmcgZnJhZ21lbnQgc2hhZGVyIScsXG4gICAgICAgICAgICAgICAgZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKVxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpXG5cbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHZlcnRpY2VzQXR0cmliTG9jYXRpb24sICd2ZXJ0aWNlcycpXG4gICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbnNBdHRyaWJMb2NhdGlvbiwgJ3Bvc2l0aW9uJylcbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGNvbG9yc0F0dHJpYkxvY2F0aW9uLCAnY29sb3InKVxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgc2l6ZXNBdHRyaWJMb2NhdGlvbiwgJ3NpemUnKVxuXG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gICAgICAgIGdsLnZhbGlkYXRlUHJvZ3JhbShwcm9ncmFtKVxuXG4gICAgICAgIGdBdHRyaWJMb2NhdGlvblZpZXdwb3J0U2l6ZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndmlld3BvcnRfc2l6ZScpXG5cbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZzKVxuICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnMpXG5cbiAgICAgICAgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKVxuICAgICAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxuXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZlcnRpY2VzQXR0cmliTG9jYXRpb24pXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uKVxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjb2xvcnNBdHRyaWJMb2NhdGlvbilcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2l6ZXNBdHRyaWJMb2NhdGlvbilcblxuICAgICAgICAvLyBBZGQgdmVydGljZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlc1BlckNpcmNsZTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ID0gaSAqIE1hdGguUEkgKiAyIC8gbnVtVmVydGljZXNQZXJDaXJjbGVcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goTWF0aC5jb3MoY29udCksIE1hdGguc2luKGNvbnQpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3Bhd25QYXJ0aWNsZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHJhbmRGbG9hdCgwLCBjYW52YXNXaWR0aCksIHJhbmRGbG9hdCgwLCBjYW52YXNIZWlnaHQpKVxuICAgICAgICAgICAgY29sb3JzLnB1c2gocmFuZEZsb2F0KDAsMSkscmFuZEZsb2F0KDAsMSkscmFuZEZsb2F0KDAsMSkscmFuZEZsb2F0KDAuNSwxKSlcbiAgICAgICAgICAgIC8vIGNvbG9ycy5wdXNoKHRleHRDb2xvci5yLHRleHRDb2xvci5nLHRleHRDb2xvci5iLHRleHRDb2xvci5hKVxuICAgICAgICAgICAgc2l6ZXMucHVzaChwYXJ0aWNsZVNpemUpXG4gICAgICAgICAgICB2ZWxvY2l0aWVzLnB1c2gocmFuZEZsb2F0KC0xMCwgMTApLCByYW5kRmxvYXQoLTEwLCAxMCkpXG4gICAgICAgICAgICBwcmltaXRpdmVDb3VudCArPSAxXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVWYWx1ZXMoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc2lyZWRQcmltaXRpdmVDb3VudDsgKytpKVxuICAgICAgICAgICAgc3Bhd25QYXJ0aWNsZSgpXG5cbiAgICAgICAgY29uc3QgY3JlYXRlQXJyYXlCdWZmZXIgPSAobG9jLCBkYXRhLCBkYXRhX21lbWJlcnMsIHRhcmdldCwgdXNhZ2UsIGRpdmlzb3IgPSAwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2Ym8gPSBnbC5jcmVhdGVCdWZmZXIoKVxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHZibylcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEodGFyZ2V0LCBkYXRhLCB1c2FnZSlcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jLCBkYXRhX21lbWJlcnMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMClcbiAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvYylcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2MsIGRpdmlzb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmJvXG4gICAgICAgIH1cblxuICAgICAgICB2Ym8uc2V0KCd2ZXJ0aWNlcycsIGNyZWF0ZUFycmF5QnVmZmVyKFxuICAgICAgICAgICAgdmVydGljZXNBdHRyaWJMb2NhdGlvbixcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgICAgIGdsLkRZTkFNSUNfRFJBV1xuICAgICAgICApKVxuICAgICAgICB2Ym8uc2V0KCdwb3NpdGlvbnMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgICAgIHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uLFxuICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgICAgIGdsLkRZTkFNSUNfRFJBVyxcbiAgICAgICAgICAgIDFcbiAgICAgICAgKSlcbiAgICAgICAgdmJvLnNldCgnY29sb3JzJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgICAgICBjb2xvcnNBdHRyaWJMb2NhdGlvbixcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgICAgICBnbC5EWU5BTUlDX0RSQVcsXG4gICAgICAgICAgICAxXG4gICAgICAgICkpXG4gICAgICAgIHZiby5zZXQoJ3NpemVzJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgICAgICBzaXplc0F0dHJpYkxvY2F0aW9uLFxuICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShzaXplcyksXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgICAgICAgZ2wuRFlOQU1JQ19EUkFXLFxuICAgICAgICAgICAgMVxuICAgICAgICApKVxuXG4gICAgICAgIGF3YWl0IGRyYXcoKVxuICAgIH0pXG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sZUFBQyxDQUFDLEFBQ0osU0FBUyxRQUFRLENBQ2pCLElBQUksQ0FBQyxDQUNMLEtBQUssQ0FBQyxDQUNOLE1BQU0sSUFBSSxDQUNWLE9BQU8sSUFBSSxDQUNYLE9BQU8sQ0FBRSxJQUFJLEFBQ2pCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	var canvas_1;

	const block = {
		c: function create() {
			canvas_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("canvas");
			this.h()
		},

		l: function claim(nodes) {
			canvas_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "CANVAS", { class: true }, false);
			var canvas_1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(canvas_1);

			canvas_1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(canvas_1, "class", "svelte-1y3jfnj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(canvas_1, file, 11, 0, 127);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, canvas_1, anchor);
			ctx.canvas_1_binding(canvas_1);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(canvas_1);
			}

			ctx.canvas_1_binding(null);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

let startTime = 0

let verticesAttribLocation = 0

let positionsAttribLocation = 1

let colorsAttribLocation = 2

let sizesAttribLocation = 3

let bindTo = 'moving-background'

function instance($$self, $$props, $$invalidate) {
	

    let { movingBackgroundOptions } = $$props;
    let textColor
    let backColor

    let gl
    let vao
    let vbo = new Map()
    let program

    let gAttribLocationViewportSize = 4

    let canvas
    let canvasWidth = 300
    let canvasHeight = 300
    let numVerticesPerCircle = movingBackgroundOptions.verticesPerParticle
    let desiredPrimitiveCount = movingBackgroundOptions.particleCount
    let particleSize = movingBackgroundOptions.particleSize

    let lastPrimitiveCount = 0
    let primitiveCount = 0

    let lastInfo = {
        verticesLength: 0,
        positionsLength: 0,
        colorsLength: 0,
        sizesLength: 0,
    }

    let vertices = []
    let positions = []
    let colors = []
    let sizes = []

    let GPUBuffersNeedingUpdate = {
        vertices: false,
        positions: false,
        colors: false,
        sizes: false
    }

    let velocities = []
    const getTime = () => {
        return (new Date().getTime() - startTime) / 1000
    }
    const updateGPUBuffers = async () => {
        if (GPUBuffersNeedingUpdate.vertices) {
            await updateVertices()
            gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('vertices'))
            const verticesLength = vertices.length
            if (verticesLength >= lastInfo.verticesLength) {
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW)
                lastInfo.verticesLength = verticesLength
            } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices), 0, 0)
        }

        if (GPUBuffersNeedingUpdate.positions) {
            await updatePositions()
            gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('positions'))
            const positionsLength = positions.length
            if (positionsLength >= lastInfo.positionsLength) {
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
                lastInfo.positionsLength = positionsLength
            } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(positions), 0, 0)
        }

        if (GPUBuffersNeedingUpdate.colors) {
            await updateColors()
            gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('colors'))
            const colorsLength = colors.length
            if (colorsLength >= lastInfo.colorsLength) {
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW)
                lastInfo.colorsLength = colorsLength
            } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(colors), 0, 0)
        }

        if (GPUBuffersNeedingUpdate.sizes) {
            await updateSizes()
            gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('sizes'))
            const sizesLength = sizes.length
            if (sizesLength >= lastInfo.sizesLength) {
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.DYNAMIC_DRAW)
                lastInfo.sizesLength = sizesLength
            } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(sizes), 0, 0)
        }
        for (let prop in GPUBuffersNeedingUpdate) prop = false
    }

    const normalize = rgba => {
        return {
            r: rgba.r / 255,
            g: rgba.g / 255,
            b: rgba.b / 255,
            a: rgba.a || rgba.a / 255,
        }
    }

    function updateVertices() {
        numVerticesPerCircle = Math.floor(Math.abs(Math.sin(getTime())*12)+3)
        // Add vertices
        vertices = []
        for (let i = 0; i < numVerticesPerCircle; ++i) {
            const cont = i * Math.PI * 2 / numVerticesPerCircle
            vertices.push(Math.cos(cont), Math.sin(cont))
        }
    }
    function updateValues () {
        canvasWidth = window.innerWidth
        canvasHeight = window.innerHeight

        var desiredCSSWidth = canvasWidth
        var desiredCSSHeight = canvasHeight
        devicePixelRatio = window.devicePixelRatio || 1

        $$invalidate('canvas', canvas.width = desiredCSSWidth * devicePixelRatio, canvas)
        $$invalidate('canvas', canvas.height = desiredCSSHeight * devicePixelRatio, canvas)

        $$invalidate('canvas', canvas.style.width = desiredCSSWidth + 'px', canvas)
        $$invalidate('canvas', canvas.style.height = desiredCSSHeight + 'px', canvas)

        canvasWidth *= devicePixelRatio
        canvasHeight *= devicePixelRatio

        textColor = normalize(window.color.text)
        textColor.a = 0.2

        backColor = normalize(window.color.background)
        backColor.a = 1.0

        // GPUBuffersNeedingUpdate.colors = true
    }

    async function updatePositions() {
        for (let i = 0; i < primitiveCount * 2; i += 2) {
            let posx = positions[i]
            let posy = positions[i+1]

            let velx = velocities[i]
            let vely = velocities[i+1]

            let size = sizes[i / 2 - 1]

            if (posx >= canvasWidth - size) {
                posx = canvasWidth - size
                velx = -velx
            }
            if (posx <= size) {
                posx = size
                velx = -velx
            }
            if (posy >= canvasHeight - size) {
                posy = canvasHeight - size
                vely = -vely
            }
            if (posy <= size) {
                posy = size
                vely = -vely
            }

            posx += velx * 0.05
            posy += vely * 0.05

            positions[i] = posx
            positions[i+1] = posy

            velocities[i] = velx
            velocities[i+1] = vely
        }
    }
    async function updateColors() {
        for (let i = 0; i < primitiveCount*4; i += 4) {
            colors[i]   = textColor.r
            colors[i+1] = textColor.g
            colors[i+2] = textColor.b
            colors[i+3] = textColor.a
        }
    }
    async function updateSizes() {
        for (let i = 0; i < primitiveCount; ++i) {
            sizes[i] = Math.abs(Math.sin(getTime()) * 1) + 1
        }
    }

    async function draw() {
        updateValues()

        // GPUBuffersNeedingUpdate.vertices = true
        GPUBuffersNeedingUpdate.positions = true
        // GPUBuffersNeedingUpdate.sizes = true

        gl.clearColor(backColor.r,backColor.g,backColor.b, backColor.a)
        gl.clear(gl.COLOR_BUFFER_BIT)

        // Setup viewport, orthographic projection matrix
        gl.viewport(0, 0, canvasWidth, canvasHeight)

        gl.useProgram(program)
        gl.bindVertexArray(vao)
        gl.uniform2f(gAttribLocationViewportSize, canvasWidth, canvasHeight)

        const type = gl.TRIANGLE_FAN
        const first = 0
        const count = numVerticesPerCircle
        const primitive_count = primitiveCount

        await updateGPUBuffers()
        gl.drawArraysInstanced(type, first, count, primitive_count)

        window.requestAnimationFrame(await draw)

        lastPrimitiveCount = primitiveCount
    }

    Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(async () => {

        gl = canvas.getContext("webgl2")

        if (!gl)  {
            console.error("no webgl2 context found. stopping.")
            return 
        }

        gl.enable(gl.BLEND)
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

        program = gl.createProgram()
        let vs = gl.createShader(gl.VERTEX_SHADER)
        let fs = gl.createShader(gl.FRAGMENT_SHADER)

        let vs_src = `#version 300 es
        precision highp float;

        in vec2     vertices;
        in vec2     position;
        in vec4     color;
        in float    size;

        uniform vec2 viewport_size;

        out vec4 color0;

        void main() {
            vec2 pos = (((size * vertices + position) / viewport_size) * 2.0) - 1.0;
            gl_Position = vec4(pos, 0.0, 1.0);
            color0 = color;
        }
        `

        let fs_src = `#version 300 es
        precision highp float;
        in vec4 color0;
        out vec4 frag;
        void main() {
            frag = color0;
        }`

        gl.shaderSource(vs, vs_src)
        gl.shaderSource(fs, fs_src)

        gl.compileShader(vs)
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            console.error(
                'ERROR compiling vertex shader!',
                gl.getShaderInfoLog(vs)
            )
            return
        }

        gl.compileShader(fs)
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            console.error(
                'ERROR compiling fragment shader!',
                gl.getShaderInfoLog(fs)
            )
            return
        }

        gl.attachShader(program, vs)
        gl.attachShader(program, fs)

        gl.bindAttribLocation(program, verticesAttribLocation, 'vertices')
        gl.bindAttribLocation(program, positionsAttribLocation, 'position')
        gl.bindAttribLocation(program, colorsAttribLocation, 'color')
        gl.bindAttribLocation(program, sizesAttribLocation, 'size')

        gl.linkProgram(program)
        gl.validateProgram(program)

        gAttribLocationViewportSize = gl.getUniformLocation(program, 'viewport_size')

        gl.deleteShader(vs)
        gl.deleteShader(fs)

        vao = gl.createVertexArray()
        gl.bindVertexArray(vao)

        gl.enableVertexAttribArray(verticesAttribLocation)
        gl.enableVertexAttribArray(positionsAttribLocation)
        gl.enableVertexAttribArray(colorsAttribLocation)
        gl.enableVertexAttribArray(sizesAttribLocation)

        // Add vertices
        for (let i = 0; i < numVerticesPerCircle; ++i) {
            const cont = i * Math.PI * 2 / numVerticesPerCircle
            vertices.push(Math.cos(cont), Math.sin(cont))
        }

        const spawnParticle = () => {
            positions.push(Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0, canvasWidth), Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0, canvasHeight))
            colors.push(Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0,1),Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0,1),Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0,1),Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(0.5,1))
            // colors.push(textColor.r,textColor.g,textColor.b,textColor.a)
            sizes.push(particleSize)
            velocities.push(Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(-10, 10), Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["randFloat"])(-10, 10))
            primitiveCount += 1
        }

        updateValues()
        for (let i = 0; i < desiredPrimitiveCount; ++i)
            spawnParticle()

        const createArrayBuffer = (loc, data, data_members, target, usage, divisor = 0) => {
            const vbo = gl.createBuffer()
            gl.bindBuffer(target, vbo)
            gl.bufferData(target, data, usage)
            gl.vertexAttribPointer(loc, data_members, gl.FLOAT, false, 0, 0)
            gl.enableVertexAttribArray(loc)
            if (divisor !== 0) {
                gl.vertexAttribDivisor(loc, divisor)
            }
            return vbo
        }

        vbo.set('vertices', createArrayBuffer(
            verticesAttribLocation,
            new Float32Array(vertices),
            2,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW
        ))
        vbo.set('positions', createArrayBuffer(
            positionsAttribLocation,
            new Float32Array(positions),
            2,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))
        vbo.set('colors', createArrayBuffer(
            colorsAttribLocation,
            new Float32Array(colors),
            4,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))
        vbo.set('sizes', createArrayBuffer(
            sizesAttribLocation,
            new Float32Array(sizes),
            1,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))

        await draw()
    })

	const writable_props = ['movingBackgroundOptions'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<Moving_background> was created with unknown prop '${key}'`);
	});

	function canvas_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			$$invalidate('canvas', canvas = $$value);
		});
	}

	$$self.$set = $$props => {
		if ('movingBackgroundOptions' in $$props) $$invalidate('movingBackgroundOptions', movingBackgroundOptions = $$props.movingBackgroundOptions);
	};

	$$self.$capture_state = () => {
		return { movingBackgroundOptions, startTime, textColor, backColor, gl, vao, vbo, program, gAttribLocationViewportSize, verticesAttribLocation, positionsAttribLocation, colorsAttribLocation, sizesAttribLocation, canvas, canvasWidth, canvasHeight, bindTo, numVerticesPerCircle, desiredPrimitiveCount, particleSize, lastPrimitiveCount, primitiveCount, lastInfo, vertices, positions, colors, sizes, GPUBuffersNeedingUpdate, velocities };
	};

	$$self.$inject_state = $$props => {
		if ('movingBackgroundOptions' in $$props) $$invalidate('movingBackgroundOptions', movingBackgroundOptions = $$props.movingBackgroundOptions);
		if ('startTime' in $$props) startTime = $$props.startTime;
		if ('textColor' in $$props) textColor = $$props.textColor;
		if ('backColor' in $$props) backColor = $$props.backColor;
		if ('gl' in $$props) gl = $$props.gl;
		if ('vao' in $$props) vao = $$props.vao;
		if ('vbo' in $$props) vbo = $$props.vbo;
		if ('program' in $$props) program = $$props.program;
		if ('gAttribLocationViewportSize' in $$props) gAttribLocationViewportSize = $$props.gAttribLocationViewportSize;
		if ('verticesAttribLocation' in $$props) verticesAttribLocation = $$props.verticesAttribLocation;
		if ('positionsAttribLocation' in $$props) positionsAttribLocation = $$props.positionsAttribLocation;
		if ('colorsAttribLocation' in $$props) colorsAttribLocation = $$props.colorsAttribLocation;
		if ('sizesAttribLocation' in $$props) sizesAttribLocation = $$props.sizesAttribLocation;
		if ('canvas' in $$props) $$invalidate('canvas', canvas = $$props.canvas);
		if ('canvasWidth' in $$props) canvasWidth = $$props.canvasWidth;
		if ('canvasHeight' in $$props) canvasHeight = $$props.canvasHeight;
		if ('bindTo' in $$props) bindTo = $$props.bindTo;
		if ('numVerticesPerCircle' in $$props) numVerticesPerCircle = $$props.numVerticesPerCircle;
		if ('desiredPrimitiveCount' in $$props) desiredPrimitiveCount = $$props.desiredPrimitiveCount;
		if ('particleSize' in $$props) particleSize = $$props.particleSize;
		if ('lastPrimitiveCount' in $$props) lastPrimitiveCount = $$props.lastPrimitiveCount;
		if ('primitiveCount' in $$props) primitiveCount = $$props.primitiveCount;
		if ('lastInfo' in $$props) lastInfo = $$props.lastInfo;
		if ('vertices' in $$props) vertices = $$props.vertices;
		if ('positions' in $$props) positions = $$props.positions;
		if ('colors' in $$props) colors = $$props.colors;
		if ('sizes' in $$props) sizes = $$props.sizes;
		if ('GPUBuffersNeedingUpdate' in $$props) GPUBuffersNeedingUpdate = $$props.GPUBuffersNeedingUpdate;
		if ('velocities' in $$props) velocities = $$props.velocities;
	};

	return {
		movingBackgroundOptions,
		canvas,
		canvas_1_binding
	};
}

class Moving_background extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1y3jfnj-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["movingBackgroundOptions"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Moving_background", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.movingBackgroundOptions === undefined && !('movingBackgroundOptions' in props)) {
			console_1.warn("<Moving_background> was created without expected prop 'movingBackgroundOptions'");
		}
	}

	get movingBackgroundOptions() {
		throw new Error("<Moving_background>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set movingBackgroundOptions(value) {
		throw new Error("<Moving_background>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Moving_background);

/***/ }),

/***/ "./src/components/utils/mat4.js":
/*!**************************************!*\
  !*** ./src/components/utils/mat4.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mat4; });
class mat4 {
    static fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        let out = []
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }
}


/***/ }),

/***/ "./src/components/utils/math.js":
/*!**************************************!*\
  !*** ./src/components/utils/math.js ***!
  \**************************************/
/*! exports provided: v2, v4, mat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v2 */ "./src/components/utils/v2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v2", function() { return _v2__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v4 */ "./src/components/utils/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4 */ "./src/components/utils/mat4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./src/components/utils/query.js":
/*!***************************************!*\
  !*** ./src/components/utils/query.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *  Shorthand syntax for getting elements from the DOM.
 *
 * @param {string} query - Prefix IDs, classes, elements with '# . <' respectivly.
 * @returns {(HTMLElement|HTMLElement[]|NodeListOf<Element>)} Returns element if 'ID' otherwise an array of elements.
 */
const jq = query =>
    query[0] === '#'
        ? document.getElementById(query.slice(1, query.length))
        : query[0] === '.'
        ? [...document.getElementsByClassName(query.slice(1, query.length))]
        : query[0] === '<'
        ? document.createElement(query.slice(1, query.length - 1))
        : [...document.querySelectorAll(query)]
/* harmony default export */ __webpack_exports__["default"] = (jq);


/***/ }),

/***/ "./src/components/utils/utility.js":
/*!*****************************************!*\
  !*** ./src/components/utils/utility.js ***!
  \*****************************************/
/*! exports provided: getMinAndMaxPosition, randFloat, Rect, HSLstringToRGB, HSLtoRGB, HSLtoRGBA, cachedFetch, getTime, getExt, uuidv4, random, addProgressBar, addButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinAndMaxPosition", function() { return getMinAndMaxPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randFloat", function() { return randFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLstringToRGB", function() { return HSLstringToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLtoRGB", function() { return HSLtoRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLtoRGBA", function() { return HSLtoRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachedFetch", function() { return cachedFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExt", function() { return getExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProgressBar", function() { return addProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButton", function() { return addButton; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/components/utils/math.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./src/components/utils/query.js");



/**
 * Returns the minimum and maximum position found.
 * @param {Object[]} objects - An array of objects with a 'pos' property.
 * @returns {min, max}- An object with a 'min' and 'max' property.
 */
const getMinAndMaxPosition = objects => {
    let min = new _math__WEBPACK_IMPORTED_MODULE_0__["v2"](10000, 10000)
    let max = new _math__WEBPACK_IMPORTED_MODULE_0__["v2"](-10000, -10000)

    for (const object of objects) {
        const pos = object.position

        if (pos.x > max.x) max.x = pos.x
        else if (pos.x < min.x) min.x = pos.x

        if (pos.y > max.y) max.y = pos.y
        else if (pos.y < min.y) min.y = pos.y
    }

    return {
        min: min,
        max: max,
    }
}

const randFloat = (min, max) => {
    return Math.random() * (max - min) + min
}

class Rect {
    constructor(min = new _math__WEBPACK_IMPORTED_MODULE_0__["v2"](0, 0), max = new _math__WEBPACK_IMPORTED_MODULE_0__["v2"](0, 0)) {
        this.min = min
        this.max = max
        this.color = {
            r: 1.0,
            g: 1.0,
            b: 1.0,
            a: 1.0,
        }
    }
    containsPoint(position, radius) {
        if (
            position.x - radius < this.max.x &&
            position.x + radius > this.min.x &&
            position.y - radius < this.max.y &&
            position.y + radius > this.min.y
        ) {
            return true
        }
        return false
    }
}

const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
}

const HSLstringToRGB = hsl => {
    const regexp = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g
    let res = regexp.exec(hsl).slice(1)
    res[0] = parseInt(res[0])
    res[1] = parseInt(res[1].slice(0, res[1].length - 1))
    res[2] = parseInt(res[2].slice(0, res[2].length - 1))
    const rgb = HSLtoRGB(res[0], res[1], res[2])
    return { r: rgb.r * 255, g: rgb.g * 255, b: rgb.b * 255 }
}

const HSLtoRGB = (h, s, l) => {
    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs(2 * l - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r += m
    g += m
    b += m

    return { r: r, g: g, b: b }
}

const HSLtoRGBA = (h, s, l) => {
    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs(2 * l - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r += m
    g += m
    b += m

    return { r: r, g: g, b: b, a: 1 }
}

let gStartTime = 0

const cachedFetch = async (root, storage = sessionStorage) => {
    const result = storage.getItem(root)
    if (result !== null) {
        console.log(`getting ${root}... from storage`)
        return JSON.parse(result)
    } else {
        console.log(`getting ${root}... from source`)
        const res = await fetch(root)
        const json = await res.json()
        storage.setItem(root, JSON.stringify(json))
        return json
    }
}

const getTime = () => {
    return (new Date().getTime() - gStartTime) / 1000
}

const getExt = str => {
    return str.split('.').pop()
}

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

const random = (min, max) => {
    return Math.random() * (max - min) + min
}

const addProgressBar = options => {
    const bar = Object(_query__WEBPACK_IMPORTED_MODULE_1__["default"])('<input>')
    bar.type = 'range'
    bar.className = options.className || 'slider'
    bar.setAttribute('value', options.startingValue || 50)
    bar.setAttribute('min', options.minValue || 0)
    bar.setAttribute('max', options.maxValue || 100)
    bar.addEventListener('input', options.callback)
    options.element.appendChild(bar)
}

const addButton = options => {
    const element = Object(_query__WEBPACK_IMPORTED_MODULE_1__["default"])('<button>')
    element.textContent = options.label
    element.id = options.id || options.label
    element.className = options.className || 'btn'
    element.addEventListener('click', options.callback)
    Object(_query__WEBPACK_IMPORTED_MODULE_1__["default"])(`#${options.parent}`).appendChild(element)
}


/***/ }),

/***/ "./src/components/utils/v2.js":
/*!************************************!*\
  !*** ./src/components/utils/v2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return v2; });
class v2 {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    neg() {
        this.x = -this.x
        this.y = -this.y
        return this
    }
    add(v) {
        this.x += v.x
        this.y += v.y
        return this
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        return this
    }
    scale(v) {
        this.x *= v
        this.y *= v
        return this
    }
    div(v) {
        if (v != 0) {
            this.x /= v
            this.y /= v
        }
        return this
    }
    dot(v) {
        return this.x * v.x + this.y * v.y
    }
    length() {
        return Math.sqrt(this.dot(this))
    }
    normalize() {
        return this.div(this.length())
    }

    static distance(a, b) {
        return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
    }
    static neg(v) {
        return new v2(-v.x, -v.y)
    }
    static add(a, b) {
        return new v2(a.x + b.x, a.y + b.y)
    }
    static adds(a, b) {
        return new v2(a.x + b, a.y + b)
    }
    static sub(a, b) {
        return new v2(a.x - b.x, a.y - b.y)
    }
    static subs(a, b) {
        return new v2(a.x - b, a.y - b)
    }
    static scale(a, b) {
        return new v2(a.x * b, a.y * b)
    }
    static div(a, b) {
        return new v2(a.x / b, a.y / b)
    }
    static dot(a, b) {
        return a.x * b.x + a.y * b.y
    }
}


/***/ }),

/***/ "./src/components/utils/v4.js":
/*!************************************!*\
  !*** ./src/components/utils/v4.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return v4; });
class v4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    RGBA() {
        return {
            r: this.x,
            g: this.y,
            b: this.z,
            a: this.w,
        }
    }

    add(b) {
        this.x += b.x
        this.y += b.y
        this.z += b.z
        this.w += b.w
        return this
    }

    sub(b) {
        this.x -= b.x
        this.y -= b.y
        this.z -= b.z
        this.w -= b.w
        return this
    }
    scale(b) {
        this.x *= b
        this.y *= b
        this.z *= b
        this.w *= b
        return this
    }
    static scale(a, b) {
        return new v4(a.x * b, a.y * b, a.z * b, a.w * b)
    }

    static add(a, b) {
        return new v4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w)
    }

    static sub(a, b) {
        return new v4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w)
    }
}


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
/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.12.0 */

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

	const block = {
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

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = (changed.level1) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
									Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_object"])(ctx.level1.props)
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(switch_instance_anchor);
			}

			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(switch_instance, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_else_block.name, type: "else", source: "(21:1) {:else}", ctx });
	return block;
}

// (19:1) {#if error}
function create_if_block(ctx) {
	var current;

	var error_1 = new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	const block = {
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
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(19:1) {#if error}", ctx });
	return block;
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

	const block = {
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_default_slot.name, type: "slot", source: "(18:0) <Layout segment=\"{segments[0]}\" {...level0.props}>", ctx });
	return block;
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

	const block = {
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
			(changed.level0) && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_object"])(ctx.level0.props)
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
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
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

	$$self.$capture_state = () => {
		return { stores, error, status, segments, level0, level1 };
	};

	$$self.$inject_state = $$props => {
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
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "App", options, id: create_fragment.name });

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
		js: () => __webpack_require__.e(/*! import() | index */ "index").then(__webpack_require__.bind(null, /*! ../../../routes/index.svelte */ "./src/routes/index.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(null, /*! ../../../routes/about.svelte */ "./src/routes/about.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | blog */ "blog").then(__webpack_require__.bind(null, /*! ../../../routes/blog.svelte */ "./src/routes/blog.svelte")),
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
		client.connect(10001);
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
/* src/routes/_error.svelte generated by Svelte v3.12.0 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/_error.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-3zgnov-style';
	style.textContent = "h1.svelte-3zgnov,p.svelte-3zgnov{margin:0 auto}h1.svelte-3zgnov{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-3zgnov{margin:1em auto}@media(min-width: 480px){h1.svelte-3zgnov{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vycm9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsiX2Vycm9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdHVzXG4gICAgZXhwb3J0IGxldCBlcnJvclxuXG4gICAgY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaDEsXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XG4gICAgPHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG57L2lmfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJLGdCQUFFLENBQ0YsQ0FBQyxjQUFDLENBQUMsQUFDQyxNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDbEIsQ0FBQyxBQUVELEVBQUUsY0FBQyxDQUFDLEFBQ0EsU0FBUyxDQUFFLEtBQUssQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQUFDdkIsQ0FBQyxBQUVELENBQUMsY0FBQyxDQUFDLEFBQ0MsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLEFBQ3BCLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQ3ZCLEVBQUUsY0FBQyxDQUFDLEFBQ0EsU0FBUyxDQUFFLEdBQUcsQUFDbEIsQ0FBQyxBQUNMLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

// (39:0) {#if dev && error.stack}
function create_if_block(ctx) {
	var pre, t_value = ctx.error.stack + "", t;

	const block = {
		c: function create() {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("pre");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "PRE", {}, false);
			var pre_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(pre);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(pre_nodes, t_value);
			pre_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(pre, file, 39, 4, 541);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, pre, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(pre);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(39:0) {#if dev && error.stack}", ctx });
	return block;
}

function create_fragment(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message + "", t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	const block = {
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
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t3_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-3zgnov");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 34, 0, 469);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "svelte-3zgnov");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 36, 0, 488);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
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

	$$self.$capture_state = () => {
		return { status, error };
	};

	$$self.$inject_state = $$props => {
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
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Error", options, id: create_fragment.name });

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
/* harmony import */ var _components_moving_background_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/moving-background.svelte */ "./src/components/moving-background.svelte");
/* src/routes/_layout.svelte generated by Svelte v3.12.0 */





const file = "src/routes/_layout.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-6bfps8-style';
	style.textContent = "main.svelte-6bfps8{position:relative;padding:2em;margin:0 auto;box-sizing:border-box}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5zdmVsdGUiLCJzb3VyY2VzIjpbIl9sYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5zdmVsdGUnXG4gICAgaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdi5zdmVsdGUnXG4gICAgaW1wb3J0IE1vdmluZ0JhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpbmctYmFja2dyb3VuZC5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBzZWdtZW50XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgbWFpbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyptYXgtd2lkdGg6IDU2ZW07Ki9cbiAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG48L3N0eWxlPlxuXG48IS0tIDxNb3ZpbmdCYWNrZ3JvdW5kIG1vdmluZ0JhY2tncm91bmRPcHRpb25zID0ge1xue1xuICAgICAgICBwYXJ0aWNsZUNvdW50OiAxMDAsXG4gICAgICAgIHZlcnRpY2VzUGVyUGFydGljbGU6IDMsXG4gICAgICAgIHBhcnRpY2xlU2l6ZTogMixcbn0gICAgXG59Lz4gLS0+XG48TmF2IHtzZWdtZW50fSAvPlxuPG1haW4+XG4gICAgPHNsb3QgLz5cbjwvbWFpbj5cbjxGb290ZXIgLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTSSxJQUFJLGNBQUMsQ0FBQyxBQUNGLFFBQVEsQ0FBRSxRQUFRLENBRWxCLE9BQU8sQ0FBRSxHQUFHLENBQ1osTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2QsVUFBVSxDQUFFLFVBQVUsQUFDMUIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
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

	const block = {
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
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", { class: true }, false);
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			footer.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(main, "class", "svelte-6bfps8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 26, 0, 558);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(nav, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(main);
			}

			if (default_slot) default_slot.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(footer, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
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

	$$self.$capture_state = () => {
		return { segment };
	};

	$$self.$inject_state = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-6bfps8-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Layout", options, id: create_fragment.name });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vdmluZy1iYWNrZ3JvdW5kLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9tYXQ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy92Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy92NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zYXNzP2M2MjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL0FwcC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL21hbmlmZXN0LWNsaWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL3NoYXJlZC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvX2xheW91dC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2F2YXRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2F2YXRhcl9waXhlbGF0ZWQuanBnIiwid2VicGFjazovLy8uL3N0YXRpYy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmIiwid2VicGFjazovLy8uL3N0YXRpYy9w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QSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTyxRQUFRO0FBQy9CLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsaUJBQWlCLE9BQU8sT0FBTztBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGdCQUFnQixRQUFRLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsRUFBRSxVQUFVLEVBQUU7QUFDN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWE7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbjJCQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZTtBQUN6QyxZQUFZLG1CQUFPLENBQUMsc0RBQVM7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDN0VBLGtCQUFrQixtQkFBTyxDQUFDLGtFQUFlOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTtBQUNyQyxjQUFjLG1CQUFPLENBQUMsOERBQWdCOztBQUV0Qzs7QUFFQTtBQUNBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDLHFDQUFxQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxLQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsb0JBQW9CLDZDQUE2QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvQkFBb0IsUUFBUSxTQUFTLGNBQWMsYUFBYSxrQkFBa0Isc0JBQXNCLGFBQWE7QUFDdEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxrQ0FBa0MsRUFBRSxjQUFjO0FBQ2xEO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxHQUFHO0FBQ3ZELDZCQUE2QixXQUFXLEdBQUcsSUFBSTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxLQUFLLEdBQUcsS0FBSztBQUN6RDtBQUNBO0FBQ0EsOEJBQThCLGVBQWUsVUFBVSxTQUFTLEVBQUUsS0FBSyxHQUFHLFNBQVMsWUFBWSxNQUFNO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsYUFBYSxXQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVLGFBQWEsZ0JBQWdCLE1BQU0sY0FBYztBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCLEVBQUUsS0FBSztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFpRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRCxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxHQUFHLE9BQU87QUFDclg7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLGVBQWU7QUFDZixjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSTtBQUNoQyw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsdUJBQXVCLEdBQUcsS0FBSyxHQUFHLE9BQU8sSUFBSTtBQUN6RSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0EsNEJBQTRCO0FBQzVCLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUssRUFBRSwwQkFBMEIsZ0VBQWdFLE1BQU0sR0FBRyxFQUFFO0FBQzNIO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0NBQStDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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WixNQUFJLE1BQU0sRUFDTixrQkFBSzs7SUFFaEIsTUFBTSxHQUFHLEdBQUcsYUFBb0IsS0FBSyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ3FCaEQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBQVAsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdEI0RDtJQUM5RCxNQUFJLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnRCLGlCQUFpQixxQkFBdUIsdUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsNkU7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsOEUiLCJmaWxlIjoiN2RlMTQwZThjYTA5MWEyNmRhOTEvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBcIjdkZTE0MGU4Y2EwOTFhMjZkYTkxXCIgKyBcIi9cIiArICh7XCJhYm91dFwiOlwiYWJvdXRcIixcImJsb2dcIjpcImJsb2dcIixcImluZGV4XCI6XCJpbmRleFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIGNodW5rSWQgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJjbGllbnQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsaWVudC5qc1wiKTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29sb3JTdHJpbmcgPSByZXF1aXJlKCdjb2xvci1zdHJpbmcnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKG9iaiA9PSBudWxsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqLm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBvYmouY29sb3Iuc2xpY2UoKTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iai52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgcmVzdWx0ID0gY29sb3JTdHJpbmcuZ2V0KG9iaik7XG5cdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmc6ICcgKyBvYmopO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSByZXN1bHQubW9kZWw7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqLmxlbmd0aCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbCB8fCAncmdiJztcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIG5ld0FyciA9IF9zbGljZS5jYWxsKG9iaiwgMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkobmV3QXJyLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmpbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuXHRcdC8vIHRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0b2JqICY9IDB4RkZGRkZGO1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iaiA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iaiA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmogJiAweEZGXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iaikge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iai5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmouYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdHZhciBoYXNoZWRLZXlzID0ga2V5cy5zb3J0KCkuam9pbignJyk7XG5cdFx0aWYgKCEoaGFzaGVkS2V5cyBpbiBoYXNoZWRNb2RlbEtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSBoYXNoZWRNb2RlbEtleXNbaGFzaGVkS2V5c107XG5cblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cdFx0dmFyIGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmpbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBwZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHR2YXIgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFscGhhID09PSAxID8gdGhpcy5jb2xvci5zbGljZSgpIDogdGhpcy5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHR9LFxuXG5cdG9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0cmVzdWx0W2xhYmVsc1tpXV0gPSB0aGlzLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmVzdWx0LmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHR1bml0QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZ2JbMF0gLz0gMjU1O1xuXHRcdHJnYlsxXSAvPSAyNTU7XG5cdFx0cmdiWzJdIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLnB1c2godGhpcy52YWxwaGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0dW5pdE9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLm9iamVjdCgpO1xuXHRcdHJnYi5yIC89IDI1NTtcblx0XHRyZ2IuZyAvPSAyNTU7XG5cdFx0cmdiLmIgLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLmNvbmNhdCh0aGlzLnZhbHBoYSksIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5jb25jYXQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsKSkpLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gcmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICgodmFsICUgMzYwKSArIDM2MCkgJSAzNjA7IH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbigxMDApKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDApKSxcblxuXHRsOiBnZXRzZXQoJ2xhYicsIDAsIG1heGZuKDEwMCkpLFxuXHRhOiBnZXRzZXQoJ2xhYicsIDEpLFxuXHRiOiBnZXRzZXQoJ2xhYicsIDIpLFxuXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHRoaXMucmdiKCkucm91bmQoKS5jb2xvcik7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0Rhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGlzTGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gKz0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSAtPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gKz0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gLT0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsxXSArPSBod2IuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsyXSArPSBod2IuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGdyYXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsLCB2YWwsIHZhbCk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhICsgKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0dmFyIGh1ZSA9IGhzbC5jb2xvclswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHRoc2wuY29sb3JbMF0gPSBodWU7XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBwb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHRpZiAoIW1peGluQ29sb3IgfHwgIW1peGluQ29sb3IucmdiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IHRvIFwibWl4XCIgd2FzIG5vdCBhIENvbG9yIGluc3RhbmNlLCBidXQgcmF0aGVyIGFuIGluc3RhbmNlIG9mICcgKyB0eXBlb2YgbWl4aW5Db2xvcik7XG5cdFx0fVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3N0YXRpYy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9zdGF0aWMvcHhwbHVzX2libV92Z2E4LXdlYmZvbnQud29mZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9zdGF0aWMvYXZhdGFyX3BpeGVsYXRlZC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vc3RhdGljL2F2YXRhci5wbmdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdweHBsdXNfaWJtX3ZnYThyZWd1bGFyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbmh0bWwge1xcbiAgLS10aGVtZS1zdHlsZTogJ3JldHJvJztcXG4gIC0tY2hyb21l4oCUY29sb3ItbGlnaHQwOiAjRkZGRkZGO1xcbiAgLS1jaHJvbWXigJRjb2xvci1saWdodDE6ICNGNEY1Rjc7XFxuICAtLWNocm9tZeKAlGNvbG9yLWxpZ2h0MjogI0U3RUFFRDtcXG4gIC0tY2hyb21l4oCUY29sb3ItZGFyazA6ICMyMDIxMjQ7XFxuICAtLWNocm9tZeKAlGNvbG9yLWRhcmsxOiAjMkQzMDMzO1xcbiAgLS1jaHJvbWXigJRjb2xvci1kYXJrMjogIzMyMzYzOTtcXG4gIC0tdGV4dC0tY29sb3ItYmFzZS0tbGlnaHQ6IDIyLCAyMSwgMzA7XFxuICAtLWJhY2tncm91bmQtLWNvbG9yLWJhc2UtLWxpZ2h0OiAyNDYsIDIzOSwgMjI4O1xcbiAgLS10ZXh0LS1jb2xvci1iYXNlLS1kYXJrOiAyNDYsIDIzOSwgMjI4O1xcbiAgLS1iYWNrZ3JvdW5kLS1jb2xvci1iYXNlLS1kYXJrOiAyMiwgMjEsIDMwO1xcbiAgLS1wcmltYXJ5OiB2YXIoLS1jaHJvbWUtY29sb3ItZGFyazApO1xcbiAgLS1zZWNvbmRhcnk6IHZhcigtLWNocm9tZeKAlGNvbG9yLWRhcmsxKTtcXG4gIC0tdGhpcmQ6IHZhcigtLWNocm9tZeKAlGNvbG9yLWRhcmsyKTtcXG4gIC0tYXBwbGVfcmV0cm9fZ3JlZW46ICM2MWJiNDY7XFxuICAtLWFwcGxlX3JldHJvX3llbGxvdzogI2ZkYjgyNztcXG4gIC0tYXBwbGVfcmV0cm9fb3JhbmdlOiAjZjU4MjFmO1xcbiAgLS1hcHBsZV9yZXRyb19yZWQ6ICNlMDNhM2U7XFxuICAtLWFwcGxlX3JldHJvX3B1cnBsZTogIzk2M2Q5NztcXG4gIC0tYXBwbGVfYmx1ZTogcmdiKDY0LCAxNTYsIDI1NSk7XFxuICAtLWFwcGxlX2dyYXk6IHJnYigxNTIsIDE1MiwgMTU3KTtcXG4gIC0tYXBwbGVfZ3JlZW46IHJnYig0OCwgMjE5LCA5MSk7XFxuICAtLWFwcGxlX2luZGlnbzogcmdiKDEyNSwgMTIyLCAyNTUpO1xcbiAgLS1hcHBsZV9vcmFuZ2U6IHJnYigyNTUsIDE3OSwgNjQpO1xcbiAgLS1hcHBsZV9waW5rOiByZ2IoMjU1LCAxMDAsIDEzMCk7XFxuICAtLWFwcGxlX3B1cnBsZTogcmdiKDIxOCwgMTQzLCAyNTUpO1xcbiAgLS1hcHBsZV9yZWQ6IHJnYigyNTUsIDEwNSwgOTcpO1xcbiAgLS1hcHBsZV90ZWFsOiByZ2IoMTEyLCAyMTUsIDI1NSk7XFxuICAtLWFwcGxlX3llbGxvdzogcmdiKDI1NSwgMjEyLCAzOCk7XFxuICAtLWNfYmx1ZTogIzI0N0JBMDtcXG4gIC0tY193aGl0ZTogI0ZBRjFEODtcXG4gIC0tY19waW5rOiAjREQ3MzczO1xcbiAgLS1jX2JsYWNrOiAjM0U0RTUwO1xcbiAgLS1jX3dhcm1fYmxhY2s6ICMwMjM5NEE7XFxuICAtLWNfYmxhY2tfb2xpdmU6ICMzOTNEM0Y7XFxuICAtLWNfb3JhbmdlOiAjRjc5RDY1O1xcbiAgLS1jX3R1cnE6ICM2OUQxQzU7XFxuICAtLWNfYWxtb25kOiAjRUVEN0M1O1xcbiAgLS1jX2NhZGVkYmx1ZTogIzVDOUVBRDtcXG4gIC0tY19jYXJpYl9ncmVlbjogIzAyQzM5QTtcXG4gIC0tc3lzdGVtQmx1ZUxpZ2h0OiByZ2IoMCwxMjIsMjU1KTtcXG4gIC0tc3lzdGVtQmx1ZURhcms6IHJnYigxMCwxMzIsMjU1KTtcXG4gIC0tc3lzdGVtR3JheUxpZ2h0OiByZ2IoMTQyLDE0MiwxNDcpO1xcbiAgLS1zeXN0ZW1HcmF5RGFyazogcmdiKDE1MiwxNTIsMTU3KTtcXG4gIC0tc3lzdGVtR3JlZW5MaWdodDogcmdiKDUyLDE5OSw4OSk7XFxuICAtLXN5c3RlbUdyZWVuRGFyazogcmdiKDQ4LDIwOSw4OCk7XFxuICAtLXN5c3RlbUluZGlnb0xpZ2h0OiByZ2IoODgsODYsMjE0KTtcXG4gIC0tc3lzdGVtSW5kaWdvRGFyazogcmdiKDk0LDkyLDIzMCk7XFxuICAtLXN5c3RlbU9yYW5nZUxpZ2h0OiByZ2IoMjU1LDE0OSwwKTtcXG4gIC0tc3lzdGVtT3JhbmdlRGFyazogcmdiKDI1NSwxNTksMTApO1xcbiAgLS1zeXN0ZW1QaW5rTGlnaHQ6IHJnYigyNTUsNDUsODUpO1xcbiAgLS1zeXN0ZW1QaW5rRGFyazogcmdiKDI1NSw1NSw5NSk7XFxuICAtLXN5c3RlbVB1cnBsZUxpZ2h0OiByZ2IoMTc1LDgyLDIyMik7XFxuICAtLXN5c3RlbVB1cnBsZURhcms6IHJnYigxOTEsOTAsMjQyKTtcXG4gIC0tc3lzdGVtUmVkTGlnaHQ6IHJnYigyNTUsNTksNDgpO1xcbiAgLS1zeXN0ZW1SZWREYXJrOiByZ2IoMjU1LDY5LDU4KTtcXG4gIC0tc3lzdGVtVGVhbExpZ2h0OiByZ2IoOTAsMjAwLDI1MCk7XFxuICAtLXN5c3RlbVRlYWxEYXJrOiByZ2IoMTAwLDIxMCwyNTUpO1xcbiAgLS1zeXN0ZW1ZZWxsb3dMaWdodDogcmdiKDI1NSwyMDQsMCk7XFxuICAtLXN5c3RlbVllbGxvd0Rhcms6IHJnYigyNTUsMjE0LDEwKTtcXG4gIC0tc3RvcmFnZTogdmFyKC0tY19jYWRlZGJsdWUpO1xcbiAgLS1saXRlcmFsOiB2YXIoLS1jX2NhcmliX2dyZWVuKTtcXG4gIC0tY29tbWVudDogdmFyKC0tY19vcmFuZ2UpO1xcbiAgLS1rZXl3b3JkOiByZ2IoMjU1LCAxMDAsIDEzMCk7XFxuICAtLWNvbXBpbGVfdGltZV9yZXNvbHZlZDogdmFyKC0tYXBwbGVfaW5kaWdvKTtcXG4gIC0tdGV4dC1iYXNlOiBibHVlO1xcbiAgLS10ZXh0OiByZ2JhKHZhcigtLXRleHQtYmFzZSksIDEpO1xcbiAgLS1iYWNrZ3JvdW5kLWJhc2U6IHJlZDtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAtLWZvbnQ6ICdweHBsdXNfaWJtX3ZnYThyZWd1bGFyJztcXG4gIC0tYXZhdGFyOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIik7XFxuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG4gIGh0bWxbdGhlbWUtc3R5bGU9J2NvbWljJ10ge1xcbiAgICAtLXRoZW1lLXN0eWxlOiAnY29taWMnO1xcbiAgICAtLWZvbnQ6ICdDb21pYyBTYW5zIE1TJztcXG4gICAgLS1hdmF0YXI6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKTtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gIGh0bWxbdGhlbWUtc3R5bGU9J3JldHJvJ10ge1xcbiAgICAtLXRoZW1lLXN0eWxlOiAncmV0cm8nO1xcbiAgICAtLWZvbnQ6ICdweHBsdXNfaWJtX3ZnYThyZWd1bGFyJztcXG4gICAgLS1hdmF0YXI6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKTtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7IH1cXG4gIGh0bWxbdGhlbWUtc3R5bGU9J21vZGVybiddIHtcXG4gICAgLS10aGVtZS1zdHlsZTogJ21vZGVybic7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgLS1hdmF0YXI6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKTtcXG4gICAgLS1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIiwgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgIGh0bWxbdGhlbWUtc3R5bGU9J21vZGVybiddIC5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG5odG1sW3RoZW1lPVxcXCJsaWdodFxcXCJdIHtcXG4gIC0tcHJpbWFyeTogdmFyKC0tY2hyb21l4oCUY29sb3ItbGlnaHQwKTtcXG4gIC0tc2Vjb25kYXJ5OiB2YXIoLS1jaHJvbWXigJRjb2xvci1saWdodDEpO1xcbiAgLS10aGlyZDogdmFyKC0tY2hyb21l4oCUY29sb3ItbGlnaHQyKTtcXG4gIC0tc3lzdGVtQmx1ZTogdmFyKC0tc3lzdGVtQmx1ZUxpZ2h0KTtcXG4gIC0tc3lzdGVtR3JheTogdmFyKC0tc3lzdGVtR3JheUxpZ2h0KTtcXG4gIC0tc3lzdGVtR3JlZW46IHZhcigtLXN5c3RlbUdyZWVuTGlnaHQpO1xcbiAgLS1zeXN0ZW1JbmRpZ286IHZhcigtLXN5c3RlbUluZGlnb0xpZ2h0KTtcXG4gIC0tc3lzdGVtT3JhbmdlOiB2YXIoLS1zeXN0ZW1PcmFuZ2VMaWdodCk7XFxuICAtLXN5c3RlbVBpbms6IHZhcigtLXN5c3RlbVBpbmtMaWdodCk7XFxuICAtLXN5c3RlbVB1cnBsZTogdmFyKC0tc3lzdGVtUHVycGxlTGlnaHQpO1xcbiAgLS1zeXN0ZW1SZWQ6IHZhcigtLXN5c3RlbVJlZExpZ2h0KTtcXG4gIC0tc3lzdGVtVGVhbDogdmFyKC0tc3lzdGVtVGVhbExpZ2h0KTtcXG4gIC0tc3lzdGVtWWVsbG93OiB2YXIoLS1zeXN0ZW1ZZWxsb3dMaWdodCk7XFxuICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tdGV4dCk7XFxuICAtLXRleHQtY29sb3ItLWxpZ2h0OiB2YXIoLS1jX2JsYWNrKTtcXG4gIC0tdGV4dC1jb2xvci0tcmljaGVyOiB2YXIoLS1jX2JsYWNrKTtcXG4gIC0tdGV4dC1jb2xvci0taGlnaGxpZ2h0OiB2YXIoLS1rZXl3b3JkKTtcXG4gIC0tdGV4dC1jb2xvci0tY29tbWVudDogdmFyKC0tY29tbWVudCk7XFxuICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tdGV4dC1iYXNlOiB2YXIoLS10ZXh0LS1jb2xvci1iYXNlLS1saWdodCk7XFxuICAtLWJhY2tncm91bmQtYmFzZTogdmFyKC0tYmFja2dyb3VuZC0tY29sb3ItYmFzZS0tbGlnaHQpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLS1zZWxlY3Rpb246IHllbGxvdzsgfVxcbiAgaHRtbFt0aGVtZT1cXFwibGlnaHRcXFwiXVt0aGVtZS1zdHlsZT0nbW9kZXJuJ10ge1xcbiAgICAtLXRleHQtYmFzZTogMCwwLDA7XFxuICAgIC0tYmFja2dyb3VuZC1iYXNlOiAyNTUsMjU1LDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLS1jb250ZW50OiB3aGl0ZTsgfVxcblxcbmh0bWxbdGhlbWU9J2RhcmsnXSB7XFxuICAtLXByaW1hcnk6IHZhcigtLWNocm9tZeKAlGNvbG9yLWRhcmswKTtcXG4gIC0tc2Vjb25kYXJ5OiB2YXIoLS1jaHJvbWXigJRjb2xvci1kYXJrMSk7XFxuICAtLXRoaXJkOiB2YXIoLS1jaHJvbWXigJRjb2xvci1kYXJrMik7XFxuICAtLXN5c3RlbUJsdWU6IHZhcigtLXN5c3RlbUJsdWVEYXJrKTtcXG4gIC0tc3lzdGVtR3JheTogdmFyKC0tc3lzdGVtR3JheURhcmspO1xcbiAgLS1zeXN0ZW1HcmVlbjogdmFyKC0tc3lzdGVtR3JlZW5EYXJrKTtcXG4gIC0tc3lzdGVtSW5kaWdvOiB2YXIoLS1zeXN0ZW1JbmRpZ29EYXJrKTtcXG4gIC0tc3lzdGVtT3JhbmdlOiB2YXIoLS1zeXN0ZW1PcmFuZ2VEYXJrKTtcXG4gIC0tc3lzdGVtUGluazogdmFyKC0tc3lzdGVtUGlua0RhcmspO1xcbiAgLS1zeXN0ZW1QdXJwbGU6IHZhcigtLXN5c3RlbVB1cnBsZURhcmspO1xcbiAgLS1zeXN0ZW1SZWQ6IHZhcigtLXN5c3RlbVJlZERhcmspO1xcbiAgLS1zeXN0ZW1UZWFsOiB2YXIoLS1zeXN0ZW1UZWFsRGFyayk7XFxuICAtLXN5c3RlbVllbGxvdzogdmFyKC0tc3lzdGVtWWVsbG93RGFyayk7XFxuICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tY193aGl0ZSk7XFxuICAtLXRleHQtY29sb3ItLWxpZ2h0OiB2YXIoLS1jX3doaXRlKTtcXG4gIC0tdGV4dC1jb2xvci0tcmljaGVyOiB2YXIoLS1jX3doaXRlKTtcXG4gIC0tdGV4dC1jb2xvci0taGlnaGxpZ2h0OiB2YXIoLS1hcHBsZV9waW5rKTtcXG4gIC0tdGV4dC1jb2xvci0tY29tbWVudDogdmFyKC0tY29tbWVudCk7XFxuICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IHJnYigzMCwgMzAsIDMwKTtcXG4gIC0tdGV4dC1iYXNlOiB2YXIoLS10ZXh0LS1jb2xvci1iYXNlLS1kYXJrKTtcXG4gIC0tYmFja2dyb3VuZC1iYXNlOiB2YXIoLS1iYWNrZ3JvdW5kLS1jb2xvci1iYXNlLS1kYXJrKTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiB2YXIoLS1hcHBsZV9waW5rKTsgfVxcbiAgaHRtbFt0aGVtZT0nZGFyayddW3RoZW1lLXN0eWxlPSdtb2Rlcm4nXSB7XFxuICAgIC0tdGV4dC1iYXNlOiAyNTUsMjU1LDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLWJhc2U6IDAsMCwwO1xcbiAgICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IGJsYWNrO1xcbiAgICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tdGV4dCk7XFxuICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLXRleHQpO1xcbiAgICAtLXRleHQtY29sb3ItLXJpY2hlcjogdmFyKC0tdGV4dCk7IH1cXG5cXG5odG1sW3RoZW1lPSd0cnVlRGFyayddIHtcXG4gIC0tcHJpbWFyeTogIzAwMDtcXG4gIC0tc2Vjb25kYXJ5OiAjMjIyO1xcbiAgLS10aGlyZDogIzQ0NDtcXG4gIC0tdGV4dC1jb2xvci0tbm9ybWFsOiB2YXIoLS1jX3doaXRlKTtcXG4gIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLWNfd2hpdGUpO1xcbiAgLS10ZXh0LWNvbG9yLS1yaWNoZXI6IHZhcigtLWNfd2hpdGUpO1xcbiAgLS10ZXh0LWNvbG9yLS1oaWdobGlnaHQ6IHZhcigtLWFwcGxlX3BpbmspO1xcbiAgLS10ZXh0LWNvbG9yLS1jb21tZW50OiB2YXIoLS1jb21tZW50KTtcXG4gIC0tYmFja2dyb3VuZC0tY29udGVudDogcmdiKDMwLCAzMCwgMzApO1xcbiAgLS10ZXh0LWJhc2U6IHZhcigtLXRleHQtLWNvbG9yLWJhc2UtLWRhcmspO1xcbiAgLS1iYWNrZ3JvdW5kLWJhc2U6IHZhcigtLWJhY2tncm91bmQtLWNvbG9yLWJhc2UtLWRhcmspO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLS1zZWxlY3Rpb246IHZhcigtLWFwcGxlX3BpbmspOyB9XFxuICBodG1sW3RoZW1lPSd0cnVlRGFyayddW3RoZW1lLXN0eWxlPSdtb2Rlcm4nXSB7XFxuICAgIC0tdGV4dC1iYXNlOiAyNTUsMjU1LDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLWJhc2U6IDAsMCwwO1xcbiAgICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IGJsYWNrO1xcbiAgICAtLXRleHQtY29sb3ItLW5vcm1hbDogdmFyKC0tdGV4dCk7XFxuICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLXRleHQpO1xcbiAgICAtLXRleHQtY29sb3ItLXJpY2hlcjogdmFyKC0tdGV4dCk7IH1cXG5cXG5ib2R5LCBwLCBiLCBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tc2VsZWN0aW9uKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLXNlbGVjdGlvbik7IH1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC42KTsgfVxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMSk7IH1cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG5cXG4jcDJkIHtcXG4gIGN1cnNvcjogbm9uZTsgfVxcblxcbi5jb21tZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6IDFlbSBzb2xpZDsgfVxcbiAgLmNvbW1lbnQuYWR2aWNlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDJDMzlBOyB9XFxuICAgIC5jb21tZW50LmFkdmljZSBwIHtcXG4gICAgICBjb2xvcjogIzIwODk3NTsgfVxcbiAgLmNvbW1lbnQud2FybmluZyB7XFxuICAgIGJvcmRlci1jb2xvcjogI0Y3OUQ2NTsgfVxcbiAgICAuY29tbWVudC53YXJuaW5nIHAge1xcbiAgICAgIGNvbG9yOiAjOWI3NjViOyB9XFxuICAuY29tbWVudC5pbmZvIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNUM5RUFEOyB9XFxuICAgIC5jb21tZW50LmluZm8gcCB7XFxuICAgICAgY29sb3I6ICM0ZDc2N2Y7IH1cXG5cXG4uZW1waGFzaXMge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4OyB9XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XFxuXFxuLmVudGl0eSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBjb2xvcjogI0Y3OUQ2NTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAxNTcsIDEwMSwgMC4xKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5rZXl3b3JkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGNvbG9yOiAjZmY2NDgyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwMCwgMTMwLCAwLjEpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuLmZhaW50IHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXRleHQtYmFzZSksIDAuNSk7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTsgfVxcbiAgYTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDEuMDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpOyB9XFxuXFxuaHIge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLXRleHQtYmFzZSksIDAuMSk7XFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDYwJTsgfVxcblxcbnAge1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcblxcbnNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpOyB9XFxuXFxubGksIHVsIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheWlzaCA9IHJlcXVpcmUoJ2lzLWFycmF5aXNoJyk7XG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJleHBvcnQgeyBhZnRlclVwZGF0ZSwgYmVmb3JlVXBkYXRlLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGdldENvbnRleHQsIG9uRGVzdHJveSwgb25Nb3VudCwgc2V0Q29udGV4dCwgdGljayB9IGZyb20gJy4vaW50ZXJuYWwnO1xuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKCFzdG9yZSB8fCB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXVxuICAgICAgICA/IGFzc2lnbih7fSwgYXNzaWduKGN0eC4kJHNjb3BlLmN0eCwgZGVmaW5pdGlvblsxXShmbiA/IGZuKGN0eCkgOiB7fSkpKVxuICAgICAgICA6IGN0eC4kJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgY3R4LCBjaGFuZ2VkLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdXG4gICAgICAgID8gYXNzaWduKHt9LCBhc3NpZ24oY3R4LiQkc2NvcGUuY2hhbmdlZCB8fCB7fSwgZGVmaW5pdGlvblsxXShmbiA/IGZuKGNoYW5nZWQpIDoge30pKSlcbiAgICAgICAgOiBjdHguJCRzY29wZS5jaGFuZ2VkIHx8IHt9O1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlID0gcmV0KSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBydW5fdGFza3MoKSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrWzBdKG5vdygpKSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFza1sxXSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcnVubmluZyA9IHRhc2tzLnNpemUgPiAwO1xuICAgIGlmIChydW5uaW5nKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIC8vIGZvciB0ZXN0aW5nLi4uXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2tzLmRlbGV0ZSh0YXNrKSk7XG4gICAgcnVubmluZyA9IGZhbHNlO1xufVxuZnVuY3Rpb24gbG9vcChmbikge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICghcnVubmluZykge1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IFtmbiwgZnVsZmlsXSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tb2JqZWN0LWxpdGVyYWwtdHlwZS1hc3NlcnRpb25cbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgZWxzZVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChncm91cFtpXS5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07IC8vIFRPRE8gc3RyaXAgdW53YW50ZWQgYXR0cmlidXRlc1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdmcgPyBzdmdfZWxlbWVudChuYW1lKSA6IGVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSAnJyArIGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0KGRhdGEpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgfHwgaW5wdXQudmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcbiAgICBvYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgICBvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgIG9iamVjdC50YWJJbmRleCA9IC0xO1xuICAgIGxldCB3aW47XG4gICAgb2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgd2luID0gb2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcbiAgICB9O1xuICAgIGlmICgvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG4gICAgICAgIG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgIHdpbiAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoaHRtbCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnUoaHRtbCk7XG4gICAgfVxuICAgIG0odGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGFyZ2V0LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIH1cbiAgICB1KGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMudShodG1sKTtcbiAgICAgICAgdGhpcy5tKHRoaXMudCwgdGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5cbmxldCBzdHlsZXNoZWV0O1xubGV0IGFjdGl2ZSA9IDA7XG5sZXQgY3VycmVudF9ydWxlcyA9IHt9O1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgIGlmICghc3R5bGVzaGVldCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudF9ydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgIClcbiAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgaWYgKG5hbWUgJiYgIS0tYWN0aXZlKVxuICAgICAgICBjbGVhcl9ydWxlcygpO1xufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgY3VycmVudF9ydWxlcyA9IHt9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uYCk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbihldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50KSB7XG4gICAgICAgICQkLnVwZGF0ZSgkJC5kaXJ0eSk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgICQkLmZyYWdtZW50LnAoJCQuZGlydHksICQkLmN0eCk7XG4gICAgICAgICQkLmRpcnR5ID0gbnVsbDtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gcHJvZ3JhbS5iIC0gdDtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBrZXkgJiYgeyBba2V5XTogdmFsdWUgfTtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gYXNzaWduKGFzc2lnbih7fSwgaW5mby5jdHgpLCBpbmZvLnJlc29sdmVkKTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHsgW2luZm8udmFsdWVdOiBwcm9taXNlIH07XG4gICAgfVxufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGNoYW5nZWQsIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGFuZ2VkLCBjaGlsZF9jdHgpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiBtZWFzdXJlKGJsb2Nrcykge1xuICAgIGNvbnN0IHJlY3RzID0ge307XG4gICAgbGV0IGkgPSBibG9ja3MubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHJlY3RzW2Jsb2Nrc1tpXS5rZXldID0gYmxvY2tzW2ldLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgY29uc3QgZXNjYXBlZCA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG4gICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KGVzY2FwZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBlc2NhcGVkID0ge1xuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlID8gJycgOiBgPSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGVzY2FwZSh2YWx1ZSkpIDogYFwiJHt2YWx1ZX1cImB9YH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiBgYDtcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5wcm9wcy5pbmRleE9mKG5hbWUpID09PSAtMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbXBvbmVudC4kJC5ib3VuZFtuYW1lXSA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbbmFtZV0pO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICB9KTtcbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5mcmFnbWVudCkge1xuICAgICAgICBydW5fYWxsKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KTtcbiAgICAgICAgY29tcG9uZW50LiQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgY29tcG9uZW50LiQkLmN0eCA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBrZXkpIHtcbiAgICBpZiAoIWNvbXBvbmVudC4kJC5kaXJ0eSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eSA9IGJsYW5rX29iamVjdCgpO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlba2V5XSA9IHRydWU7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wX25hbWVzKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0IHByb3BzID0gb3B0aW9ucy5wcm9wcyB8fCB7fTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHM6IHByb3BfbmFtZXMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHk6IG51bGxcbiAgICB9O1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBwcm9wcywgKGtleSwgcmV0LCB2YWx1ZSA9IHJldCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2tleV0sICQkLmN0eFtrZXldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQkLmJvdW5kW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2tleV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IHByb3BzO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCk7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudC5sKGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCkge1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgICAgIH1cbiAgICB9O1xufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGRlbiBieSBpbnN0YW5jZSwgaWYgaXQgaGFzIHByb3BzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUluc2VydFwiLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlXCIsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFtcImNhcHR1cmVcIl0gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lclwiLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lclwiLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZVwiLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldEF0dHJpYnV0ZVwiLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldFByb3BlcnR5XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldERhdGFzZXRcIiwgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldERhdGFcIiwgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCd0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWRgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlRWxlbWVudCwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfcmVzaXplX2xpc3RlbmVyLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fZWxlbWVudCwgY2xhaW1fc3BhY2UsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21wb25lbnRfc3Vic2NyaWJlLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVzY2FwZSwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRDb250ZXh0LCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0LCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBtZWFzdXJlLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfZGF0YV9kZXYsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcHJlYWQsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHVwZGF0ZV9rZXllZF9lYWNoLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCJpbXBvcnQgeyBzYWZlX25vdF9lcXVhbCwgbm9vcCwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICogQHBhcmFtIHtTdG9yZXN9IHN0b3JlcyBpbnB1dCBzdG9yZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oU3RvcmVzPSwgZnVuY3Rpb24oKik9KToqfWZuIGZ1bmN0aW9uIGNhbGxiYWNrIHRoYXQgYWdncmVnYXRlcyB0aGUgdmFsdWVzXG4gKiBAcGFyYW0geyo9fWluaXRpYWxfdmFsdWUgd2hlbiB1c2VkIGFzeW5jaHJvbm91c2x5XG4gKi9cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3RvcmUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiaW1wb3J0ICcuL21haW4uc2FzcydcbmltcG9ydCAqIGFzIHNhcHBlciBmcm9tICdAc2FwcGVyL2FwcCdcblxuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJ1xuXG5jb25zdCB1cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzZXRTdHlsZSA9IChlLCBwLCB2KSA9PiBlLnN0eWxlLnNldFByb3BlcnR5KHAsIHYpXG4gICAgY29uc3QgZ2V0U3R5bGVBc1JHQiA9IChlLCBwKSA9PlxuICAgICAgICBDb2xvcihcbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUoZSlcbiAgICAgICAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZShwKVxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgKS5vYmplY3QoKVxuICAgIHdpbmRvdy5jb2xvciA9IHtcbiAgICAgICAgdGV4dE5vcm1hbDogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLW5vcm1hbCdcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dFJpY2hlcjogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLXJpY2hlcidcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dEhpZ2hsaWdodDogZ2V0U3R5bGVBc1JHQihcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICctLXRleHQtY29sb3ItLWhpZ2hsaWdodCdcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dDogZ2V0U3R5bGVBc1JHQihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICctLXRleHQnKSxcbiAgICAgICAgYmFja2dyb3VuZDogZ2V0U3R5bGVBc1JHQihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICctLWJhY2tncm91bmQnKSxcbiAgICAgICAgYmFja2dyb3VuZENvbnRlbnQ6IGdldFN0eWxlQXNSR0IoXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAnLS1iYWNrZ3JvdW5kLS1jb250ZW50J1xuICAgICAgICApLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhlbWUgY2hhbmdlZCcpXG59XG5cbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHJpYnV0ZXMgY2hhbmdlZCcpXG4gICAgICAgICAgICB1cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcygpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLCAvL2NvbmZpZ3VyZSBpdCB0byBsaXN0ZW4gdG8gYXR0cmlidXRlIGNoYW5nZXNcbn0pXG5cbndpbmRvd1xuICAgIC5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpXG4gICAgLmFkZExpc3RlbmVyKHVwZGF0ZUdsb2JhbENvbG9yVmFyaWFibGVzKVxuXG51cGRhdGVHbG9iYWxDb2xvclZhcmlhYmxlcygpXG5cbndpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAndGhlbWUnLFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzXG4gICAgICAgICAgICA/ICdsaWdodCdcbiAgICAgICAgICAgIDogJ2RhcmsnXG4gICAgKVxufSlcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAndGhlbWUnLFxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXNcbiAgICAgICAgPyAnbGlnaHQnXG4gICAgICAgIDogJ2RhcmsnXG4pXG5cbnNhcHBlclxuICAgIC5zdGFydCh7XG4gICAgICAgIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlcicpLFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50LXNpZGUgYXBwIGhhcyBzdGFydGVkJylcbiAgICB9KVxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG4gICAgbGV0IHRoZW1lXG4gICAgbGV0IHRoZW1lU3R5bGVcblxuICAgIGNvbnN0IHRoZW1lcyA9IFsnbGlnaHQnLCAnZGFyayddIC8vICd0cnVlRGFyaydcbiAgICBjb25zdCB0aGVtZVN0eWxlcyA9IFsnbW9kZXJuJywgJ3JldHJvJ11cblxuICAgIG9uTW91bnQoKCkgPT4ge1xuXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgT1MgdGhlbWUgY2hhbmdlcyBhbmQgbWFrZSBzdXJlIHRoZSB0ZXh0IGlzIHVwIHRvIGRhdGUuXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlc1xuICAgICAgICAgICAgPyAnbGlnaHQnXG4gICAgICAgICAgICA6ICdkYXJrJ1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIGxhc3QgdXNlZCB0aGVtZSBmcm9tIHRoZSBzZXNzaW9uU3RvcmFnZS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIG1haW50YWluIHRoZSBjaG9zZW4gdGhlbWUgd2hlbiB0aGUgdXNlciByZWxvYWRzIHRoZSBwYWdlLlxuICAgICAgICBsZXQgbGFzdFRoZW1lVXNlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICAgICAgaWYgKGxhc3RUaGVtZVVzZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgbGFzdFRoZW1lVXNlZClcbiAgICAgICAgICAgIHRoZW1lID0gbGFzdFRoZW1lVXNlZFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhc3RUaGVtZVN0eWxlVXNlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RoZW1lLXN0eWxlJylcbiAgICAgICAgaWYgKGxhc3RUaGVtZVN0eWxlVXNlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnLCBsYXN0VGhlbWVTdHlsZVVzZWQpXG4gICAgICAgICAgICB0aGVtZVN0eWxlID0gbGFzdFRoZW1lU3R5bGVVc2VkXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUnKVxuICAgICAgICB0aGVtZVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKVxuICAgIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPUZvb3Rlci5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxmb290ZXI+PGRpdiBjbGFzcz1cImZhaW50XCI+QnVpbHQgdXNpbmdcbjxiPjxhIGhyZWY9XCJodHRwczovL3NhcHBlci5zdmVsdGUuZGV2L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+U2FwcGVyPC9hPjwvYj5cbiZcbjxiPjxhIGhyZWY9XCJodHRwczovL3N2ZWx0ZS5kZXYvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5TdmVsdGU8L2E+PC9iPlxuJlxuPGI+PGEgaHJlZj1cImh0dHBzOi8vd2VicGFjay5qcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPldlYnBhY2s8L2E+PC9iPlxuJlxuPGI+PGEgaHJlZj1cImh0dHBzOi8vc2Fzcy1sYW5nLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+U2FzczwvYT48L2I+XG4mXG48Yj48YSBocmVmPVwiaHR0cHM6Ly9wdWdqcy5vcmcvYXBpL2dldHRpbmctc3RhcnRlZC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5QdWc8L2E+PC9iPjwvZGl2PjxkaXYgY2xhc3M9XCJmYWludFwiPkZvbnQ6IDxiPjxhIGhyZWY9XCJodHRwczovL2ludDEwaC5vcmcvb2xkc2Nob29sLXBjLWZvbnRzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+UHhQbHVzIElCTSBWR0E4PC9hPjwvYj48L2Rpdj48ZGl2IGNsYXNzPVwiZmFpbnRcIj5Ib3N0OiA8Yj48YSBocmVmPVwiaHR0cHM6Ly93d3cubmV0bGlmeS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5OZXRsaWZ5PC9hPjwvYj48L2Rpdj48L2Zvb3Rlcj5cbjwhLS0gdGhlbWUtc3R5bGUgLS0+XG48YnV0dG9uIG9uOmNsaWNrID0geygpID0+IHtcbiAgICBjb25zdCBhY3RpdmVUaGVtZVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKVxuICAgIGNvbnN0IGkgPSB0aGVtZVN0eWxlcy5maW5kSW5kZXgodCA9PiB0ID09PSBhY3RpdmVUaGVtZVN0eWxlKVxuICAgIGNvbnN0IG5leHRUaGVtZVN0eWxlID0gdGhlbWVTdHlsZXNbKGkgKyAxKSAlIHRoZW1lU3R5bGVzLmxlbmd0aF1cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScsIG5leHRUaGVtZVN0eWxlKVxuICAgIFxuICAgIHRoZW1lU3R5bGUgPSBuZXh0VGhlbWVTdHlsZVxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLXN0eWxlJywgdGhlbWVTdHlsZSlcblxufX0+e3RoZW1lU3R5bGV9PC9idXR0b24+XG5cbjwhLS0gdGhlbWUgLS0+XG48YnV0dG9uIG9uOmNsaWNrID0geygpID0+IHtcbiAgICBjb25zdCBhY3RpdmVUaGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lJylcbiAgICBjb25zdCBpID0gdGhlbWVzLmZpbmRJbmRleCh0ID0+IHQgPT09IGFjdGl2ZVRoZW1lKVxuICAgIGNvbnN0IG5leHRUaGVtZSA9IHRoZW1lc1soaSArIDEpICUgdGhlbWVzLmxlbmd0aF1cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZScsIG5leHRUaGVtZSlcblxuICAgIHRoZW1lID0gbmV4dFRoZW1lXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSlcblxufX0+e3RoZW1lfTwvYnV0dG9uPlxuIiwiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IHNlZ21lbnRcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgbmF2IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLyogY2xlYXJmaXggKi9cbiAgICB1bDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkOjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC41KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMGVtIDFlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuXG48bmF2PlxuICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3M9e3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cIi5cIj5ob21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzcz17c2VnbWVudCA9PT0gJ2Fib3V0JyA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cImFib3V0XCI+YWJvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzPXtzZWdtZW50ID09PSAnYmxvZycgPyAnc2VsZWN0ZWQnIDogJyd9IGhyZWY9XCJibG9nXCI+YmxvZzwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9uYXY+XG48aHI+XG4iLCI8c3R5bGU+XG5jYW52YXMge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHotaW5kZXg6IC05OTk7XG59XG48L3N0eWxlPlxuXG48Y2FudmFzXG4gICAgYmluZDp0aGlzPXtjYW52YXN9XG4+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG4gICAgaW1wb3J0IHsgdjIsIG1hdDQgfSBmcm9tICcuL3V0aWxzL21hdGgnXG4gICAgaW1wb3J0IHsgcmFuZEZsb2F0IH0gZnJvbSAnLi91dGlscy91dGlsaXR5J1xuXG4gICAgZXhwb3J0IGxldCBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9uc1xuXG4gICAgbGV0IHN0YXJ0VGltZSA9IDBcbiAgICBsZXQgdGV4dENvbG9yXG4gICAgbGV0IGJhY2tDb2xvclxuXG4gICAgbGV0IGdsXG4gICAgbGV0IHZhb1xuICAgIGxldCB2Ym8gPSBuZXcgTWFwKClcbiAgICBsZXQgcHJvZ3JhbVxuXG4gICAgbGV0IGdBdHRyaWJMb2NhdGlvblZpZXdwb3J0U2l6ZSA9IDRcblxuICAgIGxldCB2ZXJ0aWNlc0F0dHJpYkxvY2F0aW9uID0gMFxuICAgIGxldCBwb3NpdGlvbnNBdHRyaWJMb2NhdGlvbiA9IDFcbiAgICBsZXQgY29sb3JzQXR0cmliTG9jYXRpb24gPSAyXG4gICAgbGV0IHNpemVzQXR0cmliTG9jYXRpb24gPSAzXG5cbiAgICBsZXQgY2FudmFzXG4gICAgbGV0IGNhbnZhc1dpZHRoID0gMzAwXG4gICAgbGV0IGNhbnZhc0hlaWdodCA9IDMwMFxuXG4gICAgbGV0IGJpbmRUbyA9ICdtb3ZpbmctYmFja2dyb3VuZCdcbiAgICBsZXQgbnVtVmVydGljZXNQZXJDaXJjbGUgPSBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9ucy52ZXJ0aWNlc1BlclBhcnRpY2xlXG4gICAgbGV0IGRlc2lyZWRQcmltaXRpdmVDb3VudCA9IG1vdmluZ0JhY2tncm91bmRPcHRpb25zLnBhcnRpY2xlQ291bnRcbiAgICBsZXQgcGFydGljbGVTaXplID0gbW92aW5nQmFja2dyb3VuZE9wdGlvbnMucGFydGljbGVTaXplXG5cbiAgICBsZXQgbGFzdFByaW1pdGl2ZUNvdW50ID0gMFxuICAgIGxldCBwcmltaXRpdmVDb3VudCA9IDBcblxuICAgIGxldCBsYXN0SW5mbyA9IHtcbiAgICAgICAgdmVydGljZXNMZW5ndGg6IDAsXG4gICAgICAgIHBvc2l0aW9uc0xlbmd0aDogMCxcbiAgICAgICAgY29sb3JzTGVuZ3RoOiAwLFxuICAgICAgICBzaXplc0xlbmd0aDogMCxcbiAgICB9XG5cbiAgICBsZXQgdmVydGljZXMgPSBbXVxuICAgIGxldCBwb3NpdGlvbnMgPSBbXVxuICAgIGxldCBjb2xvcnMgPSBbXVxuICAgIGxldCBzaXplcyA9IFtdXG5cbiAgICBsZXQgR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUgPSB7XG4gICAgICAgIHZlcnRpY2VzOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgY29sb3JzOiBmYWxzZSxcbiAgICAgICAgc2l6ZXM6IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHZlbG9jaXRpZXMgPSBbXVxuICAgIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMFxuICAgIH1cbiAgICBjb25zdCB1cGRhdGVHUFVCdWZmZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUudmVydGljZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVZlcnRpY2VzKClcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2Ym8uZ2V0KCd2ZXJ0aWNlcycpKVxuICAgICAgICAgICAgY29uc3QgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGhcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNlc0xlbmd0aCA+PSBsYXN0SW5mby52ZXJ0aWNlc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuRFlOQU1JQ19EUkFXKVxuICAgICAgICAgICAgICAgIGxhc3RJbmZvLnZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXNMZW5ndGhcbiAgICAgICAgICAgIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUucG9zaXRpb25zKSB7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVQb3NpdGlvbnMoKVxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ3Bvc2l0aW9ucycpKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zTGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uc0xlbmd0aCA+PSBsYXN0SW5mby5wb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgICAgICAgICAgbGFzdEluZm8ucG9zaXRpb25zTGVuZ3RoID0gcG9zaXRpb25zTGVuZ3RoXG4gICAgICAgICAgICB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSwgMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS5jb2xvcnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUNvbG9ycygpXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgnY29sb3JzJykpXG4gICAgICAgICAgICBjb25zdCBjb2xvcnNMZW5ndGggPSBjb2xvcnMubGVuZ3RoXG4gICAgICAgICAgICBpZiAoY29sb3JzTGVuZ3RoID49IGxhc3RJbmZvLmNvbG9yc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgICAgICAgICBsYXN0SW5mby5jb2xvcnNMZW5ndGggPSBjb2xvcnNMZW5ndGhcbiAgICAgICAgICAgIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLnNpemVzKSB7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVTaXplcygpXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgnc2l6ZXMnKSlcbiAgICAgICAgICAgIGNvbnN0IHNpemVzTGVuZ3RoID0gc2l6ZXMubGVuZ3RoXG4gICAgICAgICAgICBpZiAoc2l6ZXNMZW5ndGggPj0gbGFzdEluZm8uc2l6ZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShzaXplcyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgICAgICAgICBsYXN0SW5mby5zaXplc0xlbmd0aCA9IHNpemVzTGVuZ3RoXG4gICAgICAgICAgICB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoc2l6ZXMpLCAwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gR1BVQnVmZmVyc05lZWRpbmdVcGRhdGUpIHByb3AgPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IHJnYmEgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcmdiYS5yIC8gMjU1LFxuICAgICAgICAgICAgZzogcmdiYS5nIC8gMjU1LFxuICAgICAgICAgICAgYjogcmdiYS5iIC8gMjU1LFxuICAgICAgICAgICAgYTogcmdiYS5hIHx8IHJnYmEuYSAvIDI1NSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZlcnRpY2VzKCkge1xuICAgICAgICBudW1WZXJ0aWNlc1BlckNpcmNsZSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5zaW4oZ2V0VGltZSgpKSoxMikrMylcbiAgICAgICAgLy8gQWRkIHZlcnRpY2VzXG4gICAgICAgIHZlcnRpY2VzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlc1BlckNpcmNsZTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ID0gaSAqIE1hdGguUEkgKiAyIC8gbnVtVmVydGljZXNQZXJDaXJjbGVcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goTWF0aC5jb3MoY29udCksIE1hdGguc2luKGNvbnQpKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyAoKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgICAgdmFyIGRlc2lyZWRDU1NXaWR0aCA9IGNhbnZhc1dpZHRoXG4gICAgICAgIHZhciBkZXNpcmVkQ1NTSGVpZ2h0ID0gY2FudmFzSGVpZ2h0XG4gICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCAqIGRldmljZVBpeGVsUmF0aW9cblxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBkZXNpcmVkQ1NTV2lkdGggKyAncHgnXG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBkZXNpcmVkQ1NTSGVpZ2h0ICsgJ3B4J1xuXG4gICAgICAgIGNhbnZhc1dpZHRoICo9IGRldmljZVBpeGVsUmF0aW9cbiAgICAgICAgY2FudmFzSGVpZ2h0ICo9IGRldmljZVBpeGVsUmF0aW9cblxuICAgICAgICB0ZXh0Q29sb3IgPSBub3JtYWxpemUod2luZG93LmNvbG9yLnRleHQpXG4gICAgICAgIHRleHRDb2xvci5hID0gMC4yXG5cbiAgICAgICAgYmFja0NvbG9yID0gbm9ybWFsaXplKHdpbmRvdy5jb2xvci5iYWNrZ3JvdW5kKVxuICAgICAgICBiYWNrQ29sb3IuYSA9IDEuMFxuXG4gICAgICAgIC8vIEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLmNvbG9ycyA9IHRydWVcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWl0aXZlQ291bnQgKiAyOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGxldCBwb3N4ID0gcG9zaXRpb25zW2ldXG4gICAgICAgICAgICBsZXQgcG9zeSA9IHBvc2l0aW9uc1tpKzFdXG5cbiAgICAgICAgICAgIGxldCB2ZWx4ID0gdmVsb2NpdGllc1tpXVxuICAgICAgICAgICAgbGV0IHZlbHkgPSB2ZWxvY2l0aWVzW2krMV1cblxuICAgICAgICAgICAgbGV0IHNpemUgPSBzaXplc1tpIC8gMiAtIDFdXG5cbiAgICAgICAgICAgIGlmIChwb3N4ID49IGNhbnZhc1dpZHRoIC0gc2l6ZSkge1xuICAgICAgICAgICAgICAgIHBvc3ggPSBjYW52YXNXaWR0aCAtIHNpemVcbiAgICAgICAgICAgICAgICB2ZWx4ID0gLXZlbHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3N4IDw9IHNpemUpIHtcbiAgICAgICAgICAgICAgICBwb3N4ID0gc2l6ZVxuICAgICAgICAgICAgICAgIHZlbHggPSAtdmVseFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc3kgPj0gY2FudmFzSGVpZ2h0IC0gc2l6ZSkge1xuICAgICAgICAgICAgICAgIHBvc3kgPSBjYW52YXNIZWlnaHQgLSBzaXplXG4gICAgICAgICAgICAgICAgdmVseSA9IC12ZWx5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zeSA8PSBzaXplKSB7XG4gICAgICAgICAgICAgICAgcG9zeSA9IHNpemVcbiAgICAgICAgICAgICAgICB2ZWx5ID0gLXZlbHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9zeCArPSB2ZWx4ICogMC4wNVxuICAgICAgICAgICAgcG9zeSArPSB2ZWx5ICogMC4wNVxuXG4gICAgICAgICAgICBwb3NpdGlvbnNbaV0gPSBwb3N4XG4gICAgICAgICAgICBwb3NpdGlvbnNbaSsxXSA9IHBvc3lcblxuICAgICAgICAgICAgdmVsb2NpdGllc1tpXSA9IHZlbHhcbiAgICAgICAgICAgIHZlbG9jaXRpZXNbaSsxXSA9IHZlbHlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb2xvcnMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWl0aXZlQ291bnQqNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBjb2xvcnNbaV0gICA9IHRleHRDb2xvci5yXG4gICAgICAgICAgICBjb2xvcnNbaSsxXSA9IHRleHRDb2xvci5nXG4gICAgICAgICAgICBjb2xvcnNbaSsyXSA9IHRleHRDb2xvci5iXG4gICAgICAgICAgICBjb2xvcnNbaSszXSA9IHRleHRDb2xvci5hXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2l6ZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWl0aXZlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoLmFicyhNYXRoLnNpbihnZXRUaW1lKCkpICogMSkgKyAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICB1cGRhdGVWYWx1ZXMoKVxuXG4gICAgICAgIC8vIEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLnZlcnRpY2VzID0gdHJ1ZVxuICAgICAgICBHUFVCdWZmZXJzTmVlZGluZ1VwZGF0ZS5wb3NpdGlvbnMgPSB0cnVlXG4gICAgICAgIC8vIEdQVUJ1ZmZlcnNOZWVkaW5nVXBkYXRlLnNpemVzID0gdHJ1ZVxuXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoYmFja0NvbG9yLnIsYmFja0NvbG9yLmcsYmFja0NvbG9yLmIsIGJhY2tDb2xvci5hKVxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKVxuXG4gICAgICAgIC8vIFNldHVwIHZpZXdwb3J0LCBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXhcbiAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodClcblxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXG4gICAgICAgIGdsLnVuaWZvcm0yZihnQXR0cmliTG9jYXRpb25WaWV3cG9ydFNpemUsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGdsLlRSSUFOR0xFX0ZBTlxuICAgICAgICBjb25zdCBmaXJzdCA9IDBcbiAgICAgICAgY29uc3QgY291bnQgPSBudW1WZXJ0aWNlc1BlckNpcmNsZVxuICAgICAgICBjb25zdCBwcmltaXRpdmVfY291bnQgPSBwcmltaXRpdmVDb3VudFxuXG4gICAgICAgIGF3YWl0IHVwZGF0ZUdQVUJ1ZmZlcnMoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHR5cGUsIGZpcnN0LCBjb3VudCwgcHJpbWl0aXZlX2NvdW50KVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXdhaXQgZHJhdylcblxuICAgICAgICBsYXN0UHJpbWl0aXZlQ291bnQgPSBwcmltaXRpdmVDb3VudFxuICAgIH1cblxuICAgIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIilcblxuICAgICAgICBpZiAoIWdsKSAge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vIHdlYmdsMiBjb250ZXh0IGZvdW5kLiBzdG9wcGluZy5cIilcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmVuYWJsZShnbC5CTEVORClcbiAgICAgICAgZ2wuYmxlbmRFcXVhdGlvbihnbC5GVU5DX0FERClcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcblxuICAgICAgICBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG4gICAgICAgIGxldCB2cyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKVxuICAgICAgICBsZXQgZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKVxuXG4gICAgICAgIGxldCB2c19zcmMgPSBgI3ZlcnNpb24gMzAwIGVzXG4gICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuICAgICAgICBpbiB2ZWMyICAgICB2ZXJ0aWNlcztcbiAgICAgICAgaW4gdmVjMiAgICAgcG9zaXRpb247XG4gICAgICAgIGluIHZlYzQgICAgIGNvbG9yO1xuICAgICAgICBpbiBmbG9hdCAgICBzaXplO1xuXG4gICAgICAgIHVuaWZvcm0gdmVjMiB2aWV3cG9ydF9zaXplO1xuXG4gICAgICAgIG91dCB2ZWM0IGNvbG9yMDtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICB2ZWMyIHBvcyA9ICgoKHNpemUgKiB2ZXJ0aWNlcyArIHBvc2l0aW9uKSAvIHZpZXdwb3J0X3NpemUpICogMi4wKSAtIDEuMDtcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3MsIDAuMCwgMS4wKTtcbiAgICAgICAgICAgIGNvbG9yMCA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGBcblxuICAgICAgICBsZXQgZnNfc3JjID0gYCN2ZXJzaW9uIDMwMCBlc1xuICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gICAgICAgIGluIHZlYzQgY29sb3IwO1xuICAgICAgICBvdXQgdmVjNCBmcmFnO1xuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBmcmFnID0gY29sb3IwO1xuICAgICAgICB9YFxuXG4gICAgICAgIGdsLnNoYWRlclNvdXJjZSh2cywgdnNfc3JjKVxuICAgICAgICBnbC5zaGFkZXJTb3VyY2UoZnMsIGZzX3NyYylcblxuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHZzKVxuICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2cywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICdFUlJPUiBjb21waWxpbmcgdmVydGV4IHNoYWRlciEnLFxuICAgICAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2codnMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoZnMpXG4gICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGZzLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgJ0VSUk9SIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXIhJyxcbiAgICAgICAgICAgICAgICBnbC5nZXRTaGFkZXJJbmZvTG9nKGZzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnMpXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcylcblxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgdmVydGljZXNBdHRyaWJMb2NhdGlvbiwgJ3ZlcnRpY2VzJylcbiAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uLCAncG9zaXRpb24nKVxuICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgY29sb3JzQXR0cmliTG9jYXRpb24sICdjb2xvcicpXG4gICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBzaXplc0F0dHJpYkxvY2F0aW9uLCAnc2l6ZScpXG5cbiAgICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcbiAgICAgICAgZ2wudmFsaWRhdGVQcm9ncmFtKHByb2dyYW0pXG5cbiAgICAgICAgZ0F0dHJpYkxvY2F0aW9uVmlld3BvcnRTaXplID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd2aWV3cG9ydF9zaXplJylcblxuICAgICAgICBnbC5kZWxldGVTaGFkZXIodnMpXG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihmcylcblxuICAgICAgICB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXG5cbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodmVydGljZXNBdHRyaWJMb2NhdGlvbilcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25zQXR0cmliTG9jYXRpb24pXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGNvbG9yc0F0dHJpYkxvY2F0aW9uKVxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaXplc0F0dHJpYkxvY2F0aW9uKVxuXG4gICAgICAgIC8vIEFkZCB2ZXJ0aWNlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2VzUGVyQ2lyY2xlOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnQgPSBpICogTWF0aC5QSSAqIDIgLyBudW1WZXJ0aWNlc1BlckNpcmNsZVxuICAgICAgICAgICAgdmVydGljZXMucHVzaChNYXRoLmNvcyhjb250KSwgTWF0aC5zaW4oY29udCkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGF3blBhcnRpY2xlID0gKCkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocmFuZEZsb2F0KDAsIGNhbnZhc1dpZHRoKSwgcmFuZEZsb2F0KDAsIGNhbnZhc0hlaWdodCkpXG4gICAgICAgICAgICBjb2xvcnMucHVzaChyYW5kRmxvYXQoMCwxKSxyYW5kRmxvYXQoMCwxKSxyYW5kRmxvYXQoMCwxKSxyYW5kRmxvYXQoMC41LDEpKVxuICAgICAgICAgICAgLy8gY29sb3JzLnB1c2godGV4dENvbG9yLnIsdGV4dENvbG9yLmcsdGV4dENvbG9yLmIsdGV4dENvbG9yLmEpXG4gICAgICAgICAgICBzaXplcy5wdXNoKHBhcnRpY2xlU2l6ZSlcbiAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaChyYW5kRmxvYXQoLTEwLCAxMCksIHJhbmRGbG9hdCgtMTAsIDEwKSlcbiAgICAgICAgICAgIHByaW1pdGl2ZUNvdW50ICs9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVZhbHVlcygpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzaXJlZFByaW1pdGl2ZUNvdW50OyArK2kpXG4gICAgICAgICAgICBzcGF3blBhcnRpY2xlKClcblxuICAgICAgICBjb25zdCBjcmVhdGVBcnJheUJ1ZmZlciA9IChsb2MsIGRhdGEsIGRhdGFfbWVtYmVycywgdGFyZ2V0LCB1c2FnZSwgZGl2aXNvciA9IDApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZibyA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdmJvKVxuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YSh0YXJnZXQsIGRhdGEsIHVzYWdlKVxuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihsb2MsIGRhdGFfbWVtYmVycywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICAgICAgaWYgKGRpdmlzb3IgIT09IDApIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvYywgZGl2aXNvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2Ym9cbiAgICAgICAgfVxuXG4gICAgICAgIHZiby5zZXQoJ3ZlcnRpY2VzJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgICAgICB2ZXJ0aWNlc0F0dHJpYkxvY2F0aW9uLFxuICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgICAgICAgZ2wuRFlOQU1JQ19EUkFXXG4gICAgICAgICkpXG4gICAgICAgIHZiby5zZXQoJ3Bvc2l0aW9ucycsIGNyZWF0ZUFycmF5QnVmZmVyKFxuICAgICAgICAgICAgcG9zaXRpb25zQXR0cmliTG9jYXRpb24sXG4gICAgICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgICAgICAgZ2wuRFlOQU1JQ19EUkFXLFxuICAgICAgICAgICAgMVxuICAgICAgICApKVxuICAgICAgICB2Ym8uc2V0KCdjb2xvcnMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgICAgIGNvbG9yc0F0dHJpYkxvY2F0aW9uLFxuICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgICAgIGdsLkRZTkFNSUNfRFJBVyxcbiAgICAgICAgICAgIDFcbiAgICAgICAgKSlcbiAgICAgICAgdmJvLnNldCgnc2l6ZXMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgICAgIHNpemVzQXR0cmliTG9jYXRpb24sXG4gICAgICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHNpemVzKSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgICAgICBnbC5EWU5BTUlDX0RSQVcsXG4gICAgICAgICAgICAxXG4gICAgICAgICkpXG5cbiAgICAgICAgYXdhaXQgZHJhdygpXG4gICAgfSlcblxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXQ0IHtcbiAgICBzdGF0aWMgZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgICAgICAgbGV0IG91dCA9IFtdXG4gICAgICAgIG91dFswXSA9IG0wMDtcbiAgICAgICAgb3V0WzFdID0gbTAxO1xuICAgICAgICBvdXRbMl0gPSBtMDI7XG4gICAgICAgIG91dFszXSA9IG0wMztcbiAgICAgICAgb3V0WzRdID0gbTEwO1xuICAgICAgICBvdXRbNV0gPSBtMTE7XG4gICAgICAgIG91dFs2XSA9IG0xMjtcbiAgICAgICAgb3V0WzddID0gbTEzO1xuICAgICAgICBvdXRbOF0gPSBtMjA7XG4gICAgICAgIG91dFs5XSA9IG0yMTtcbiAgICAgICAgb3V0WzEwXSA9IG0yMjtcbiAgICAgICAgb3V0WzExXSA9IG0yMztcbiAgICAgICAgb3V0WzEyXSA9IG0zMDtcbiAgICAgICAgb3V0WzEzXSA9IG0zMTtcbiAgICAgICAgb3V0WzE0XSA9IG0zMjtcbiAgICAgICAgb3V0WzE1XSA9IG0zMztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgdjIgZnJvbSAnLi92MidcbmltcG9ydCB2NCBmcm9tICcuL3Y0J1xuaW1wb3J0IG1hdDQgZnJvbSAnLi9tYXQ0J1xuZXhwb3J0IHsgdjIsIHY0LCBtYXQ0IH1cbiIsIi8qKlxuICogIFNob3J0aGFuZCBzeW50YXggZm9yIGdldHRpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIFByZWZpeCBJRHMsIGNsYXNzZXMsIGVsZW1lbnRzIHdpdGggJyMgLiA8JyByZXNwZWN0aXZseS5cbiAqIEByZXR1cm5zIHsoSFRNTEVsZW1lbnR8SFRNTEVsZW1lbnRbXXxOb2RlTGlzdE9mPEVsZW1lbnQ+KX0gUmV0dXJucyBlbGVtZW50IGlmICdJRCcgb3RoZXJ3aXNlIGFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICovXG5jb25zdCBqcSA9IHF1ZXJ5ID0+XG4gICAgcXVlcnlbMF0gPT09ICcjJ1xuICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCkpXG4gICAgICAgIDogcXVlcnlbMF0gPT09ICcuJ1xuICAgICAgICA/IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCkpXVxuICAgICAgICA6IHF1ZXJ5WzBdID09PSAnPCdcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCAtIDEpKVxuICAgICAgICA6IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KV1cbmV4cG9ydCBkZWZhdWx0IGpxXG4iLCJpbXBvcnQgeyB2MiB9IGZyb20gJy4vbWF0aCdcbmltcG9ydCBqcSBmcm9tICcuL3F1ZXJ5J1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gcG9zaXRpb24gZm91bmQuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvYmplY3RzIC0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGEgJ3BvcycgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7bWluLCBtYXh9LSBBbiBvYmplY3Qgd2l0aCBhICdtaW4nIGFuZCAnbWF4JyBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1pbkFuZE1heFBvc2l0aW9uID0gb2JqZWN0cyA9PiB7XG4gICAgbGV0IG1pbiA9IG5ldyB2MigxMDAwMCwgMTAwMDApXG4gICAgbGV0IG1heCA9IG5ldyB2MigtMTAwMDAsIC0xMDAwMClcblxuICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIG9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgcG9zID0gb2JqZWN0LnBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHBvcy54ID4gbWF4LngpIG1heC54ID0gcG9zLnhcbiAgICAgICAgZWxzZSBpZiAocG9zLnggPCBtaW4ueCkgbWluLnggPSBwb3MueFxuXG4gICAgICAgIGlmIChwb3MueSA+IG1heC55KSBtYXgueSA9IHBvcy55XG4gICAgICAgIGVsc2UgaWYgKHBvcy55IDwgbWluLnkpIG1pbi55ID0gcG9zLnlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmFuZEZsb2F0ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3IobWluID0gbmV3IHYyKDAsIDApLCBtYXggPSBuZXcgdjIoMCwgMCkpIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW5cbiAgICAgICAgdGhpcy5tYXggPSBtYXhcbiAgICAgICAgdGhpcy5jb2xvciA9IHtcbiAgICAgICAgICAgIHI6IDEuMCxcbiAgICAgICAgICAgIGc6IDEuMCxcbiAgICAgICAgICAgIGI6IDEuMCxcbiAgICAgICAgICAgIGE6IDEuMCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWluc1BvaW50KHBvc2l0aW9uLCByYWRpdXMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9zaXRpb24ueCAtIHJhZGl1cyA8IHRoaXMubWF4LnggJiZcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKyByYWRpdXMgPiB0aGlzLm1pbi54ICYmXG4gICAgICAgICAgICBwb3NpdGlvbi55IC0gcmFkaXVzIDwgdGhpcy5tYXgueSAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueSArIHJhZGl1cyA+IHRoaXMubWluLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDFcbiAgICBpZiAodCA+IDEpIHQgLT0gMVxuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHFcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDZcbiAgICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgSFNMc3RyaW5nVG9SR0IgPSBoc2wgPT4ge1xuICAgIGNvbnN0IHJlZ2V4cCA9IC9oc2xcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCsoPzpcXC5cXGQrKT8lKVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/JSlcXCkvZ1xuICAgIGxldCByZXMgPSByZWdleHAuZXhlYyhoc2wpLnNsaWNlKDEpXG4gICAgcmVzWzBdID0gcGFyc2VJbnQocmVzWzBdKVxuICAgIHJlc1sxXSA9IHBhcnNlSW50KHJlc1sxXS5zbGljZSgwLCByZXNbMV0ubGVuZ3RoIC0gMSkpXG4gICAgcmVzWzJdID0gcGFyc2VJbnQocmVzWzJdLnNsaWNlKDAsIHJlc1syXS5sZW5ndGggLSAxKSlcbiAgICBjb25zdCByZ2IgPSBIU0x0b1JHQihyZXNbMF0sIHJlc1sxXSwgcmVzWzJdKVxuICAgIHJldHVybiB7IHI6IHJnYi5yICogMjU1LCBnOiByZ2IuZyAqIDI1NSwgYjogcmdiLmIgKiAyNTUgfVxufVxuXG5leHBvcnQgY29uc3QgSFNMdG9SR0IgPSAoaCwgcywgbCkgPT4ge1xuICAgIHZhciByLCBnLCBiLCBtLCBjLCB4XG5cbiAgICBpZiAoIWlzRmluaXRlKGgpKSBoID0gMFxuICAgIGlmICghaXNGaW5pdGUocykpIHMgPSAwXG4gICAgaWYgKCFpc0Zpbml0ZShsKSkgbCA9IDBcblxuICAgIGggLz0gNjBcbiAgICBpZiAoaCA8IDApIGggPSA2IC0gKC1oICUgNilcbiAgICBoICU9IDZcblxuICAgIHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBzIC8gMTAwKSlcbiAgICBsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbCAvIDEwMCkpXG5cbiAgICBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHNcbiAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggJSAyKSAtIDEpKVxuXG4gICAgaWYgKGggPCAxKSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSAwXG4gICAgfSBlbHNlIGlmIChoIDwgMikge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gY1xuICAgICAgICBiID0gMFxuICAgIH0gZWxzZSBpZiAoaCA8IDMpIHtcbiAgICAgICAgciA9IDBcbiAgICAgICAgZyA9IGNcbiAgICAgICAgYiA9IHhcbiAgICB9IGVsc2UgaWYgKGggPCA0KSB7XG4gICAgICAgIHIgPSAwXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSBjXG4gICAgfSBlbHNlIGlmIChoIDwgNSkge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gMFxuICAgICAgICBiID0gY1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSAwXG4gICAgICAgIGIgPSB4XG4gICAgfVxuXG4gICAgbSA9IGwgLSBjIC8gMlxuICAgIHIgKz0gbVxuICAgIGcgKz0gbVxuICAgIGIgKz0gbVxuXG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiB9XG59XG5cbmV4cG9ydCBjb25zdCBIU0x0b1JHQkEgPSAoaCwgcywgbCkgPT4ge1xuICAgIHZhciByLCBnLCBiLCBtLCBjLCB4XG5cbiAgICBpZiAoIWlzRmluaXRlKGgpKSBoID0gMFxuICAgIGlmICghaXNGaW5pdGUocykpIHMgPSAwXG4gICAgaWYgKCFpc0Zpbml0ZShsKSkgbCA9IDBcblxuICAgIGggLz0gNjBcbiAgICBpZiAoaCA8IDApIGggPSA2IC0gKC1oICUgNilcbiAgICBoICU9IDZcblxuICAgIHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBzIC8gMTAwKSlcbiAgICBsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbCAvIDEwMCkpXG5cbiAgICBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHNcbiAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggJSAyKSAtIDEpKVxuXG4gICAgaWYgKGggPCAxKSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSAwXG4gICAgfSBlbHNlIGlmIChoIDwgMikge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gY1xuICAgICAgICBiID0gMFxuICAgIH0gZWxzZSBpZiAoaCA8IDMpIHtcbiAgICAgICAgciA9IDBcbiAgICAgICAgZyA9IGNcbiAgICAgICAgYiA9IHhcbiAgICB9IGVsc2UgaWYgKGggPCA0KSB7XG4gICAgICAgIHIgPSAwXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSBjXG4gICAgfSBlbHNlIGlmIChoIDwgNSkge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gMFxuICAgICAgICBiID0gY1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSAwXG4gICAgICAgIGIgPSB4XG4gICAgfVxuXG4gICAgbSA9IGwgLSBjIC8gMlxuICAgIHIgKz0gbVxuICAgIGcgKz0gbVxuICAgIGIgKz0gbVxuXG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiwgYTogMSB9XG59XG5cbmxldCBnU3RhcnRUaW1lID0gMFxuXG5leHBvcnQgY29uc3QgY2FjaGVkRmV0Y2ggPSBhc3luYyAocm9vdCwgc3RvcmFnZSA9IHNlc3Npb25TdG9yYWdlKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3RvcmFnZS5nZXRJdGVtKHJvb3QpXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0dGluZyAke3Jvb3R9Li4uIGZyb20gc3RvcmFnZWApXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0dGluZyAke3Jvb3R9Li4uIGZyb20gc291cmNlYClcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm9vdClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHJvb3QsIEpTT04uc3RyaW5naWZ5KGpzb24pKVxuICAgICAgICByZXR1cm4ganNvblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGdTdGFydFRpbWUpIC8gMTAwMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0RXh0ID0gc3RyID0+IHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcuJykucG9wKClcbn1cblxuZXhwb3J0IGNvbnN0IHV1aWR2NCA9ICgpID0+IHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcbiAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG59XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9ncmVzc0JhciA9IG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IGJhciA9IGpxKCc8aW5wdXQ+JylcbiAgICBiYXIudHlwZSA9ICdyYW5nZSdcbiAgICBiYXIuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgfHwgJ3NsaWRlcidcbiAgICBiYXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnMuc3RhcnRpbmdWYWx1ZSB8fCA1MClcbiAgICBiYXIuc2V0QXR0cmlidXRlKCdtaW4nLCBvcHRpb25zLm1pblZhbHVlIHx8IDApXG4gICAgYmFyLnNldEF0dHJpYnV0ZSgnbWF4Jywgb3B0aW9ucy5tYXhWYWx1ZSB8fCAxMDApXG4gICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb3B0aW9ucy5jYWxsYmFjaylcbiAgICBvcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFyKVxufVxuXG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGpxKCc8YnV0dG9uPicpXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbnMubGFiZWxcbiAgICBlbGVtZW50LmlkID0gb3B0aW9ucy5pZCB8fCBvcHRpb25zLmxhYmVsXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCAnYnRuJ1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmNhbGxiYWNrKVxuICAgIGpxKGAjJHtvcHRpb25zLnBhcmVudH1gKS5hcHBlbmRDaGlsZChlbGVtZW50KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdjIge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG4gICAgbmVnKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgYWRkKHYpIHtcbiAgICAgICAgdGhpcy54ICs9IHYueFxuICAgICAgICB0aGlzLnkgKz0gdi55XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHN1Yih2KSB7XG4gICAgICAgIHRoaXMueCAtPSB2LnhcbiAgICAgICAgdGhpcy55IC09IHYueVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzY2FsZSh2KSB7XG4gICAgICAgIHRoaXMueCAqPSB2XG4gICAgICAgIHRoaXMueSAqPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGRpdih2KSB7XG4gICAgICAgIGlmICh2ICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSB2XG4gICAgICAgICAgICB0aGlzLnkgLz0gdlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGRvdCh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnlcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZG90KHRoaXMpKVxuICAgIH1cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdih0aGlzLmxlbmd0aCgpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKGIueCAtIGEueCkgKiAoYi54IC0gYS54KSArIChiLnkgLSBhLnkpICogKGIueSAtIGEueSkpXG4gICAgfVxuICAgIHN0YXRpYyBuZWcodikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKC12LngsIC12LnkpXG4gICAgfVxuICAgIHN0YXRpYyBhZGQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCArIGIueCwgYS55ICsgYi55KVxuICAgIH1cbiAgICBzdGF0aWMgYWRkcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjIoYS54ICsgYiwgYS55ICsgYilcbiAgICB9XG4gICAgc3RhdGljIHN1YihhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjIoYS54IC0gYi54LCBhLnkgLSBiLnkpXG4gICAgfVxuICAgIHN0YXRpYyBzdWJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB2MihhLnggLSBiLCBhLnkgLSBiKVxuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCAqIGIsIGEueSAqIGIpXG4gICAgfVxuICAgIHN0YXRpYyBkaXYoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCAvIGIsIGEueSAvIGIpXG4gICAgfVxuICAgIHN0YXRpYyBkb3QoYSwgYikge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdjQge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgICAgIHRoaXMudyA9IHdcbiAgICB9XG5cbiAgICBSR0JBKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogdGhpcy54LFxuICAgICAgICAgICAgZzogdGhpcy55LFxuICAgICAgICAgICAgYjogdGhpcy56LFxuICAgICAgICAgICAgYTogdGhpcy53LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKGIpIHtcbiAgICAgICAgdGhpcy54ICs9IGIueFxuICAgICAgICB0aGlzLnkgKz0gYi55XG4gICAgICAgIHRoaXMueiArPSBiLnpcbiAgICAgICAgdGhpcy53ICs9IGIud1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHN1YihiKSB7XG4gICAgICAgIHRoaXMueCAtPSBiLnhcbiAgICAgICAgdGhpcy55IC09IGIueVxuICAgICAgICB0aGlzLnogLT0gYi56XG4gICAgICAgIHRoaXMudyAtPSBiLndcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgc2NhbGUoYikge1xuICAgICAgICB0aGlzLnggKj0gYlxuICAgICAgICB0aGlzLnkgKj0gYlxuICAgICAgICB0aGlzLnogKj0gYlxuICAgICAgICB0aGlzLncgKj0gYlxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHY0KGEueCAqIGIsIGEueSAqIGIsIGEueiAqIGIsIGEudyAqIGIpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZChhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KVxuICAgIH1cblxuICAgIHN0YXRpYyBzdWIoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHY0KGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnosIGEudyAtIGIudylcbiAgICB9XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Fzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQnO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2ludGVybmFsL0FwcC5zdmVsdGUnO1xuaW1wb3J0IHsgaWdub3JlLCByb3V0ZXMsIHJvb3RfcHJlbG9hZCwgY29tcG9uZW50cywgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL21hbmlmZXN0LWNsaWVudCc7XG5cbmZ1bmN0aW9uIGdvdG8oaHJlZiwgb3B0cyA9IHsgcmVwbGFjZVN0YXRlOiBmYWxzZSB9KSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdF9oaXN0b3J5W29wdHMucmVwbGFjZVN0YXRlID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJ10oeyBpZDogY2lkIH0sICcnLCBocmVmKTtcblx0XHRyZXR1cm4gbmF2aWdhdGUodGFyZ2V0LCBudWxsKS50aGVuKCgpID0+IHt9KTtcblx0fVxuXG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZiA9PiB7fSk7IC8vIG5ldmVyIHJlc29sdmVzXG59XG5cbmNvbnN0IGluaXRpYWxfZGF0YSA9IHR5cGVvZiBfX1NBUFBFUl9fICE9PSAndW5kZWZpbmVkJyAmJiBfX1NBUFBFUl9fO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcbmxldCByb290X2NvbXBvbmVudDtcbmxldCBjdXJyZW50X3Rva2VuO1xubGV0IHJvb3RfcHJlbG9hZGVkO1xubGV0IGN1cnJlbnRfYnJhbmNoID0gW107XG5sZXQgY3VycmVudF9xdWVyeSA9ICd7fSc7XG5cbmNvbnN0IHN0b3JlcyA9IHtcblx0cGFnZTogd3JpdGFibGUoe30pLFxuXHRwcmVsb2FkaW5nOiB3cml0YWJsZShudWxsKSxcblx0c2Vzc2lvbjogd3JpdGFibGUoaW5pdGlhbF9kYXRhICYmIGluaXRpYWxfZGF0YS5zZXNzaW9uKVxufTtcblxubGV0ICRzZXNzaW9uO1xubGV0IHNlc3Npb25fZGlydHk7XG5cbnN0b3Jlcy5zZXNzaW9uLnN1YnNjcmliZShhc3luYyB2YWx1ZSA9PiB7XG5cdCRzZXNzaW9uID0gdmFsdWU7XG5cblx0aWYgKCFyZWFkeSkgcmV0dXJuO1xuXHRzZXNzaW9uX2RpcnR5ID0gdHJ1ZTtcblxuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBoeWRyYXRlX3RhcmdldCh0YXJnZXQpO1xuXHRpZiAodG9rZW4gIT09IGN1cnJlbnRfdG9rZW4pIHJldHVybjsgLy8gYSBzZWNvbmRhcnkgbmF2aWdhdGlvbiBoYXBwZW5lZCB3aGlsZSB3ZSB3ZXJlIGxvYWRpbmdcblxuXHRhd2FpdCByZW5kZXIocmVkaXJlY3QsIGJyYW5jaCwgcHJvcHMsIHRhcmdldC5wYWdlKTtcbn0pO1xuXG5sZXQgcHJlZmV0Y2hpbmdcblxuXG4gPSBudWxsO1xuZnVuY3Rpb24gc2V0X3ByZWZldGNoaW5nKGhyZWYsIHByb21pc2UpIHtcblx0cHJlZmV0Y2hpbmcgPSB7IGhyZWYsIHByb21pc2UgfTtcbn1cblxubGV0IHRhcmdldDtcbmZ1bmN0aW9uIHNldF90YXJnZXQoZWxlbWVudCkge1xuXHR0YXJnZXQgPSBlbGVtZW50O1xufVxuXG5sZXQgdWlkID0gMTtcbmZ1bmN0aW9uIHNldF91aWQobikge1xuXHR1aWQgPSBuO1xufVxuXG5sZXQgY2lkO1xuZnVuY3Rpb24gc2V0X2NpZChuKSB7XG5cdGNpZCA9IG47XG59XG5cbmNvbnN0IF9oaXN0b3J5ID0gdHlwZW9mIGhpc3RvcnkgIT09ICd1bmRlZmluZWQnID8gaGlzdG9yeSA6IHtcblx0cHVzaFN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0cmVwbGFjZVN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0c2Nyb2xsUmVzdG9yYXRpb246ICcnXG59O1xuXG5jb25zdCBzY3JvbGxfaGlzdG9yeSA9IHt9O1xuXG5mdW5jdGlvbiBleHRyYWN0X3F1ZXJ5KHNlYXJjaCkge1xuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuXHRcdHNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLmZvckVhY2goc2VhcmNoUGFyYW0gPT4ge1xuXHRcdFx0bGV0IFssIGtleSwgdmFsdWUgPSAnJ10gPSAvKFtePV0qKSg/Oj0oLiopKT8vLmV4ZWMoZGVjb2RlVVJJQ29tcG9uZW50KHNlYXJjaFBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICdzdHJpbmcnKSBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV1dO1xuXHRcdFx0aWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAnb2JqZWN0JykgKHF1ZXJ5W2tleV0gKS5wdXNoKHZhbHVlKTtcblx0XHRcdGVsc2UgcXVlcnlba2V5XSA9IHZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBxdWVyeTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0X3RhcmdldCh1cmwpIHtcblx0aWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgcmV0dXJuIG51bGw7XG5cdGlmICghdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaW5pdGlhbF9kYXRhLmJhc2VVcmwpKSByZXR1cm4gbnVsbDtcblxuXHRsZXQgcGF0aCA9IHVybC5wYXRobmFtZS5zbGljZShpbml0aWFsX2RhdGEuYmFzZVVybC5sZW5ndGgpO1xuXG5cdGlmIChwYXRoID09PSAnJykge1xuXHRcdHBhdGggPSAnLyc7XG5cdH1cblxuXHQvLyBhdm9pZCBhY2NpZGVudGFsIGNsYXNoZXMgYmV0d2VlbiBzZXJ2ZXIgcm91dGVzIGFuZCBwYWdlIHJvdXRlc1xuXHRpZiAoaWdub3JlLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnRlc3QocGF0aCkpKSByZXR1cm47XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcblxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUucGF0dGVybi5leGVjKHBhdGgpO1xuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IGV4dHJhY3RfcXVlcnkodXJsLnNlYXJjaCk7XG5cdFx0XHRjb25zdCBwYXJ0ID0gcm91dGUucGFydHNbcm91dGUucGFydHMubGVuZ3RoIC0gMV07XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKG1hdGNoKSA6IHt9O1xuXG5cdFx0XHRjb25zdCBwYWdlID0geyBob3N0OiBsb2NhdGlvbi5ob3N0LCBwYXRoLCBxdWVyeSwgcGFyYW1zIH07XG5cblx0XHRcdHJldHVybiB7IGhyZWY6IHVybC5ocmVmLCByb3V0ZSwgbWF0Y2gsIHBhZ2UgfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlX2Vycm9yKHVybCkge1xuXHRjb25zdCB7IGhvc3QsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGxvY2F0aW9uO1xuXHRjb25zdCB7IHNlc3Npb24sIHByZWxvYWRlZCwgc3RhdHVzLCBlcnJvciB9ID0gaW5pdGlhbF9kYXRhO1xuXG5cdGlmICghcm9vdF9wcmVsb2FkZWQpIHtcblx0XHRyb290X3ByZWxvYWRlZCA9IHByZWxvYWRlZCAmJiBwcmVsb2FkZWRbMF07XG5cdH1cblxuXHRjb25zdCBwcm9wcyA9IHtcblx0XHRlcnJvcixcblx0XHRzdGF0dXMsXG5cdFx0c2Vzc2lvbixcblx0XHRsZXZlbDA6IHtcblx0XHRcdHByb3BzOiByb290X3ByZWxvYWRlZFxuXHRcdH0sXG5cdFx0bGV2ZWwxOiB7XG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRzdGF0dXMsXG5cdFx0XHRcdGVycm9yXG5cdFx0XHR9LFxuXHRcdFx0Y29tcG9uZW50OiBFcnJvckNvbXBvbmVudFxuXHRcdH0sXG5cdFx0c2VnbWVudHM6IHByZWxvYWRlZFxuXG5cdH07XG5cdGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdF9xdWVyeShzZWFyY2gpO1xuXHRyZW5kZXIobnVsbCwgW10sIHByb3BzLCB7IGhvc3QsIHBhdGg6IHBhdGhuYW1lLCBxdWVyeSwgcGFyYW1zOiB7fSB9KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsX3N0YXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHg6IHBhZ2VYT2Zmc2V0LFxuXHRcdHk6IHBhZ2VZT2Zmc2V0XG5cdH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHRhcmdldCwgaWQsIG5vc2Nyb2xsLCBoYXNoKSB7XG5cdGlmIChpZCkge1xuXHRcdC8vIHBvcHN0YXRlIG9yIGluaXRpYWwgbmF2aWdhdGlvblxuXHRcdGNpZCA9IGlkO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGN1cnJlbnRfc2Nyb2xsID0gc2Nyb2xsX3N0YXRlKCk7XG5cblx0XHQvLyBjbGlja2VkIG9uIGEgbGluay4gcHJlc2VydmUgc2Nyb2xsIHN0YXRlXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IGN1cnJlbnRfc2Nyb2xsO1xuXG5cdFx0aWQgPSBjaWQgPSArK3VpZDtcblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gbm9zY3JvbGwgPyBjdXJyZW50X3Njcm9sbCA6IHsgeDogMCwgeTogMCB9O1xuXHR9XG5cblx0Y2lkID0gaWQ7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSBzdG9yZXMucHJlbG9hZGluZy5zZXQodHJ1ZSk7XG5cblx0Y29uc3QgbG9hZGVkID0gcHJlZmV0Y2hpbmcgJiYgcHJlZmV0Y2hpbmcuaHJlZiA9PT0gdGFyZ2V0LmhyZWYgP1xuXHRcdHByZWZldGNoaW5nLnByb21pc2UgOlxuXHRcdGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCk7XG5cblx0cHJlZmV0Y2hpbmcgPSBudWxsO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBsb2FkZWQ7XG5cdGlmICh0b2tlbiAhPT0gY3VycmVudF90b2tlbikgcmV0dXJuOyAvLyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGhhcHBlbmVkIHdoaWxlIHdlIHdlcmUgbG9hZGluZ1xuXG5cdGF3YWl0IHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgdGFyZ2V0LnBhZ2UpO1xuXHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cblx0aWYgKCFub3Njcm9sbCkge1xuXHRcdGxldCBzY3JvbGwgPSBzY3JvbGxfaGlzdG9yeVtpZF07XG5cblx0XHRpZiAoaGFzaCkge1xuXHRcdFx0Ly8gc2Nyb2xsIGlzIGFuIGVsZW1lbnQgaWQgKGZyb20gYSBoYXNoKSwgd2UgbmVlZCB0byBjb21wdXRlIHkuXG5cdFx0XHRjb25zdCBkZWVwX2xpbmtlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2guc2xpY2UoMSkpO1xuXG5cdFx0XHRpZiAoZGVlcF9saW5rZWQpIHtcblx0XHRcdFx0c2Nyb2xsID0ge1xuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogZGVlcF9saW5rZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbDtcblx0XHRpZiAoc2Nyb2xsKSBzY3JvbGxUbyhzY3JvbGwueCwgc2Nyb2xsLnkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgcGFnZSkge1xuXHRpZiAocmVkaXJlY3QpIHJldHVybiBnb3RvKHJlZGlyZWN0LmxvY2F0aW9uLCB7IHJlcGxhY2VTdGF0ZTogdHJ1ZSB9KTtcblxuXHRzdG9yZXMucGFnZS5zZXQocGFnZSk7XG5cdHN0b3Jlcy5wcmVsb2FkaW5nLnNldChmYWxzZSk7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSB7XG5cdFx0cm9vdF9jb21wb25lbnQuJHNldChwcm9wcyk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvcHMuc3RvcmVzID0ge1xuXHRcdFx0cGFnZTogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wYWdlLnN1YnNjcmliZSB9LFxuXHRcdFx0cHJlbG9hZGluZzogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wcmVsb2FkaW5nLnN1YnNjcmliZSB9LFxuXHRcdFx0c2Vzc2lvbjogc3RvcmVzLnNlc3Npb25cblx0XHR9O1xuXHRcdHByb3BzLmxldmVsMCA9IHtcblx0XHRcdHByb3BzOiBhd2FpdCByb290X3ByZWxvYWRlZFxuXHRcdH07XG5cblx0XHQvLyBmaXJzdCBsb2FkIOKAlCByZW1vdmUgU1NSJ2QgPGhlYWQ+IGNvbnRlbnRzXG5cdFx0Y29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtc3RhcnQnKTtcblx0XHRjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtZW5kJyk7XG5cblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XG5cdFx0XHR3aGlsZSAoc3RhcnQubmV4dFNpYmxpbmcgIT09IGVuZCkgZGV0YWNoKHN0YXJ0Lm5leHRTaWJsaW5nKTtcblx0XHRcdGRldGFjaChzdGFydCk7XG5cdFx0XHRkZXRhY2goZW5kKTtcblx0XHR9XG5cblx0XHRyb290X2NvbXBvbmVudCA9IG5ldyBBcHAoe1xuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRoeWRyYXRlOiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRjdXJyZW50X2JyYW5jaCA9IGJyYW5jaDtcblx0Y3VycmVudF9xdWVyeSA9IEpTT04uc3RyaW5naWZ5KHBhZ2UucXVlcnkpO1xuXHRyZWFkeSA9IHRydWU7XG5cdHNlc3Npb25fZGlydHkgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGFydF9jaGFuZ2VkKGksIHNlZ21lbnQsIG1hdGNoLCBzdHJpbmdpZmllZF9xdWVyeSkge1xuXHQvLyBUT0RPIG9ubHkgY2hlY2sgcXVlcnkgc3RyaW5nIGNoYW5nZXMgZm9yIHByZWxvYWQgZnVuY3Rpb25zXG5cdC8vIHRoYXQgZG8gaW4gZmFjdCBkZXBlbmQgb24gaXQgKHVzaW5nIHN0YXRpYyBhbmFseXNpcyBvclxuXHQvLyBydW50aW1lIGluc3RydW1lbnRhdGlvbilcblx0aWYgKHN0cmluZ2lmaWVkX3F1ZXJ5ICE9PSBjdXJyZW50X3F1ZXJ5KSByZXR1cm4gdHJ1ZTtcblxuXHRjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRfYnJhbmNoW2ldO1xuXG5cdGlmICghcHJldmlvdXMpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlZ21lbnQgIT09IHByZXZpb3VzLnNlZ21lbnQpIHJldHVybiB0cnVlO1xuXHRpZiAocHJldmlvdXMubWF0Y2gpIHtcblx0XHRpZiAoSlNPTi5zdHJpbmdpZnkocHJldmlvdXMubWF0Y2guc2xpY2UoMSwgaSArIDIpKSAhPT0gSlNPTi5zdHJpbmdpZnkobWF0Y2guc2xpY2UoMSwgaSArIDIpKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldClcblxuXG5cbiB7XG5cdGNvbnN0IHsgcm91dGUsIHBhZ2UgfSA9IHRhcmdldDtcblx0Y29uc3Qgc2VnbWVudHMgPSBwYWdlLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0bGV0IHJlZGlyZWN0ID0gbnVsbDtcblxuXHRjb25zdCBwcm9wcyA9IHsgZXJyb3I6IG51bGwsIHN0YXR1czogMjAwLCBzZWdtZW50czogW3NlZ21lbnRzWzBdXSB9O1xuXG5cdGNvbnN0IHByZWxvYWRfY29udGV4dCA9IHtcblx0XHRmZXRjaDogKHVybCwgb3B0cykgPT4gZmV0Y2godXJsLCBvcHRzKSxcblx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRpZiAocmVkaXJlY3QgJiYgKHJlZGlyZWN0LnN0YXR1c0NvZGUgIT09IHN0YXR1c0NvZGUgfHwgcmVkaXJlY3QubG9jYXRpb24gIT09IGxvY2F0aW9uKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbmZsaWN0aW5nIHJlZGlyZWN0c2ApO1xuXHRcdFx0fVxuXHRcdFx0cmVkaXJlY3QgPSB7IHN0YXR1c0NvZGUsIGxvY2F0aW9uIH07XG5cdFx0fSxcblx0XHRlcnJvcjogKHN0YXR1cywgZXJyb3IpID0+IHtcblx0XHRcdHByb3BzLmVycm9yID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IG5ldyBFcnJvcihlcnJvcikgOiBlcnJvcjtcblx0XHRcdHByb3BzLnN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH07XG5cblx0aWYgKCFyb290X3ByZWxvYWRlZCkge1xuXHRcdHJvb3RfcHJlbG9hZGVkID0gaW5pdGlhbF9kYXRhLnByZWxvYWRlZFswXSB8fCByb290X3ByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0cGFyYW1zOiB7fVxuXHRcdH0sICRzZXNzaW9uKTtcblx0fVxuXG5cdGxldCBicmFuY2g7XG5cdGxldCBsID0gMTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHN0cmluZ2lmaWVkX3F1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkocGFnZS5xdWVyeSk7XG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5wYXR0ZXJuLmV4ZWMocGFnZS5wYXRoKTtcblxuXHRcdGxldCBzZWdtZW50X2RpcnR5ID0gZmFsc2U7XG5cblx0XHRicmFuY2ggPSBhd2FpdCBQcm9taXNlLmFsbChyb3V0ZS5wYXJ0cy5tYXAoYXN5bmMgKHBhcnQsIGkpID0+IHtcblx0XHRcdGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcblxuXHRcdFx0aWYgKHBhcnRfY2hhbmdlZChpLCBzZWdtZW50LCBtYXRjaCwgc3RyaW5naWZpZWRfcXVlcnkpKSBzZWdtZW50X2RpcnR5ID0gdHJ1ZTtcblxuXHRcdFx0cHJvcHMuc2VnbWVudHNbbF0gPSBzZWdtZW50c1tpICsgMV07IC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRpZiAoIXBhcnQpIHJldHVybiB7IHNlZ21lbnQgfTtcblxuXHRcdFx0Y29uc3QgaiA9IGwrKztcblxuXHRcdFx0aWYgKCFzZXNzaW9uX2RpcnR5ICYmICFzZWdtZW50X2RpcnR5ICYmIGN1cnJlbnRfYnJhbmNoW2ldICYmIGN1cnJlbnRfYnJhbmNoW2ldLnBhcnQgPT09IHBhcnQuaSkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudF9icmFuY2hbaV07XG5cdFx0XHR9XG5cblx0XHRcdHNlZ21lbnRfZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgeyBkZWZhdWx0OiBjb21wb25lbnQsIHByZWxvYWQgfSA9IGF3YWl0IGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSk7XG5cblx0XHRcdGxldCBwcmVsb2FkZWQ7XG5cdFx0XHRpZiAocmVhZHkgfHwgIWluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdKSB7XG5cdFx0XHRcdHByZWxvYWRlZCA9IHByZWxvYWRcblx0XHRcdFx0XHQ/IGF3YWl0IHByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdFx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdFx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdFx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0cGFyYW1zOiBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKHRhcmdldC5tYXRjaCkgOiB7fVxuXHRcdFx0XHRcdH0sICRzZXNzaW9uKVxuXHRcdFx0XHRcdDoge307XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmVsb2FkZWQgPSBpbml0aWFsX2RhdGEucHJlbG9hZGVkW2kgKyAxXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChwcm9wc1tgbGV2ZWwke2p9YF0gPSB7IGNvbXBvbmVudCwgcHJvcHM6IHByZWxvYWRlZCwgc2VnbWVudCwgbWF0Y2gsIHBhcnQ6IHBhcnQuaSB9KTtcblx0XHR9KSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cHJvcHMuZXJyb3IgPSBlcnJvcjtcblx0XHRwcm9wcy5zdGF0dXMgPSA1MDA7XG5cdFx0YnJhbmNoID0gW107XG5cdH1cblxuXHRyZXR1cm4geyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9O1xufVxuXG5mdW5jdGlvbiBsb2FkX2NzcyhjaHVuaykge1xuXHRjb25zdCBocmVmID0gYGNsaWVudC8ke2NodW5rfWA7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2hyZWZ9XCJdYCkpIHJldHVybjtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbCwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblx0XHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0Jztcblx0XHRsaW5rLmhyZWYgPSBocmVmO1xuXG5cdFx0bGluay5vbmxvYWQgPSAoKSA9PiBmdWxmaWwoKTtcblx0XHRsaW5rLm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZF9jb21wb25lbnQoY29tcG9uZW50KVxuXG5cbiB7XG5cdC8vIFRPRE8gdGhpcyBpcyB0ZW1wb3Jhcnkg4oCUIG9uY2UgcGxhY2Vob2xkZXJzIGFyZVxuXHQvLyBhbHdheXMgcmV3cml0dGVuLCBzY3JhdGNoIHRoZSB0ZXJuYXJ5XG5cdGNvbnN0IHByb21pc2VzID0gKHR5cGVvZiBjb21wb25lbnQuY3NzID09PSAnc3RyaW5nJyA/IFtdIDogY29tcG9uZW50LmNzcy5tYXAobG9hZF9jc3MpKTtcblx0cHJvbWlzZXMudW5zaGlmdChjb21wb25lbnQuanMoKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChocmVmKSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdGlmICghcHJlZmV0Y2hpbmcgfHwgaHJlZiAhPT0gcHJlZmV0Y2hpbmcuaHJlZikge1xuXHRcdFx0c2V0X3ByZWZldGNoaW5nKGhyZWYsIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmVmZXRjaGluZy5wcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KG9wdHNcblxuKSB7XG5cdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIF9oaXN0b3J5KSB7XG5cdFx0X2hpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblx0fVxuXG5cdHNldF90YXJnZXQob3B0cy50YXJnZXQpO1xuXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlX2NsaWNrKTtcblx0YWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVfcG9wc3RhdGUpO1xuXG5cdC8vIHByZWZldGNoXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0cmlnZ2VyX3ByZWZldGNoKTtcblx0YWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlX21vdXNlbW92ZSk7XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGFzaCwgaHJlZiB9ID0gbG9jYXRpb247XG5cblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogdWlkIH0sICcnLCBocmVmKTtcblxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cblx0XHRpZiAoaW5pdGlhbF9kYXRhLmVycm9yKSByZXR1cm4gaGFuZGxlX2Vycm9yKCk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdFx0aWYgKHRhcmdldCkgcmV0dXJuIG5hdmlnYXRlKHRhcmdldCwgdWlkLCB0cnVlLCBoYXNoKTtcblx0fSk7XG59XG5cbmxldCBtb3VzZW1vdmVfdGltZW91dDtcblxuZnVuY3Rpb24gaGFuZGxlX21vdXNlbW92ZShldmVudCkge1xuXHRjbGVhclRpbWVvdXQobW91c2Vtb3ZlX3RpbWVvdXQpO1xuXHRtb3VzZW1vdmVfdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpO1xuXHR9LCAyMCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpIHtcblx0Y29uc3QgYSA9IGZpbmRfYW5jaG9yKGV2ZW50LnRhcmdldCk7XG5cdGlmICghYSB8fCBhLnJlbCAhPT0gJ3ByZWZldGNoJykgcmV0dXJuO1xuXG5cdHByZWZldGNoKGEuaHJlZik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9jbGljayhldmVudCkge1xuXHQvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanNcblx0Ly8gTUlUIGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanMjbGljZW5zZVxuXHRpZiAod2hpY2goZXZlbnQpICE9PSAxKSByZXR1cm47XG5cdGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpIHJldHVybjtcblx0aWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcblxuXHRjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcblx0aWYgKCFhKSByZXR1cm47XG5cblx0aWYgKCFhLmhyZWYpIHJldHVybjtcblxuXHQvLyBjaGVjayBpZiBsaW5rIGlzIGluc2lkZSBhbiBzdmdcblx0Ly8gaW4gdGhpcyBjYXNlLCBib3RoIGhyZWYgYW5kIHRhcmdldCBhcmUgYWx3YXlzIGluc2lkZSBhbiBvYmplY3Rcblx0Y29uc3Qgc3ZnID0gdHlwZW9mIGEuaHJlZiA9PT0gJ29iamVjdCcgJiYgYS5ocmVmLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTVkdBbmltYXRlZFN0cmluZyc7XG5cdGNvbnN0IGhyZWYgPSBTdHJpbmcoc3ZnID8gKGEpLmhyZWYuYmFzZVZhbCA6IGEuaHJlZik7XG5cblx0aWYgKGhyZWYgPT09IGxvY2F0aW9uLmhyZWYpIHtcblx0XHRpZiAoIWxvY2F0aW9uLmhhc2gpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSWdub3JlIGlmIHRhZyBoYXNcblx0Ly8gMS4gJ2Rvd25sb2FkJyBhdHRyaWJ1dGVcblx0Ly8gMi4gcmVsPSdleHRlcm5hbCcgYXR0cmlidXRlXG5cdGlmIChhLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBhLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpIHJldHVybjtcblxuXHQvLyBJZ25vcmUgaWYgPGE+IGhhcyBhIHRhcmdldFxuXHRpZiAoc3ZnID8gKGEpLnRhcmdldC5iYXNlVmFsIDogYS50YXJnZXQpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYpO1xuXG5cdC8vIERvbid0IGhhbmRsZSBoYXNoIGNoYW5nZXNcblx0aWYgKHVybC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWUgJiYgdXJsLnNlYXJjaCA9PT0gbG9jYXRpb24uc2VhcmNoKSByZXR1cm47XG5cblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldCh1cmwpO1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0Y29uc3Qgbm9zY3JvbGwgPSBhLmhhc0F0dHJpYnV0ZSgnc2FwcGVyLW5vc2Nyb2xsJyk7XG5cdFx0bmF2aWdhdGUodGFyZ2V0LCBudWxsLCBub3Njcm9sbCwgdXJsLmhhc2gpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0X2hpc3RvcnkucHVzaFN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgdXJsLmhyZWYpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdoaWNoKGV2ZW50KSB7XG5cdHJldHVybiBldmVudC53aGljaCA9PT0gbnVsbCA/IGV2ZW50LmJ1dHRvbiA6IGV2ZW50LndoaWNoO1xufVxuXG5mdW5jdGlvbiBmaW5kX2FuY2hvcihub2RlKSB7XG5cdHdoaWxlIChub2RlICYmIG5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0EnKSBub2RlID0gbm9kZS5wYXJlbnROb2RlOyAvLyBTVkcgPGE+IGVsZW1lbnRzIGhhdmUgYSBsb3dlcmNhc2UgbmFtZVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3BvcHN0YXRlKGV2ZW50KSB7XG5cdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBzY3JvbGxfc3RhdGUoKTtcblxuXHRpZiAoZXZlbnQuc3RhdGUpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuXHRcdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHRuYXZpZ2F0ZSh0YXJnZXQsIGV2ZW50LnN0YXRlLmlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGhhc2hjaGFuZ2Vcblx0XHRzZXRfdWlkKHVpZCArIDEpO1xuXHRcdHNldF9jaWQodWlkKTtcblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogY2lkIH0sICcnLCBsb2NhdGlvbi5ocmVmKTtcblx0fVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaFJvdXRlcyhwYXRobmFtZXMpIHtcblx0cmV0dXJuIHJvdXRlc1xuXHRcdC5maWx0ZXIocGF0aG5hbWVzXG5cdFx0XHQ/IHJvdXRlID0+IHBhdGhuYW1lcy5zb21lKHBhdGhuYW1lID0+IHJvdXRlLnBhdHRlcm4udGVzdChwYXRobmFtZSkpXG5cdFx0XHQ6ICgpID0+IHRydWVcblx0XHQpXG5cdFx0LnJlZHVjZSgocHJvbWlzZSwgcm91dGUpID0+IHByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocm91dGUucGFydHMubWFwKHBhcnQgPT4gcGFydCAmJiBsb2FkX2NvbXBvbmVudChjb21wb25lbnRzW3BhcnQuaV0pKSk7XG5cdFx0fSksIFByb21pc2UucmVzb2x2ZSgpKTtcbn1cblxuY29uc3Qgc3RvcmVzJDEgPSAoKSA9PiBnZXRDb250ZXh0KENPTlRFWFRfS0VZKTtcblxuZXhwb3J0IHsgZ290bywgcHJlZmV0Y2gsIHByZWZldGNoUm91dGVzLCBzdGFydCwgc3RvcmVzJDEgYXMgc3RvcmVzIH07XG4iLCI8IS0tIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCEgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL3NoYXJlZCc7XG5cdGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcblx0aW1wb3J0IEVycm9yIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHN0b3Jlcztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgc2VnbWVudHM7XG5cdGV4cG9ydCBsZXQgbGV2ZWwwO1xuXHRleHBvcnQgbGV0IGxldmVsMSA9IG51bGw7XG5cblx0c2V0Q29udGV4dChDT05URVhUX0tFWSwgc3RvcmVzKTtcbjwvc2NyaXB0PlxuXG48TGF5b3V0IHNlZ21lbnQ9XCJ7c2VnbWVudHNbMF19XCIgey4uLmxldmVsMC5wcm9wc30+XG5cdHsjaWYgZXJyb3J9XG5cdFx0PEVycm9yIHtlcnJvcn0ge3N0YXR1c30vPlxuXHR7OmVsc2V9XG5cdFx0PHN2ZWx0ZTpjb21wb25lbnQgdGhpcz1cIntsZXZlbDEuY29tcG9uZW50fVwiIHsuLi5sZXZlbDEucHJvcHN9Lz5cblx0ey9pZn1cbjwvTGF5b3V0PiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm9vdCB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5leHBvcnQgeyBwcmVsb2FkIGFzIHJvb3RfcHJlbG9hZCB9IGZyb20gJy4vc2hhcmVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSc7XG5cbmV4cG9ydCBjb25zdCBpZ25vcmUgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW5kZXhcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9pbmRleC5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjppbmRleC5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWJvdXRcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9hYm91dC5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphYm91dC5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYmxvZ1wiICovIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YmxvZy5zdmVsdGVfX1wiXG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDAgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAxIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGJsb2cuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9ibG9nXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDIgfVxuXHRcdF1cblx0fVxuXTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdGltcG9ydChcIi9Vc2Vycy9tYXJjdXNtYXRoaWFzc2VuL2Rldi9ob21lcGFnZS9ub2RlX21vZHVsZXMvc2FwcGVyL3NhcHBlci1kZXYtY2xpZW50LmpzXCIpLnRoZW4oY2xpZW50ID0+IHtcblx0XHRjbGllbnQuY29ubmVjdCgxMDAwMSk7XG5cdH0pO1xufSIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdHVzXG4gICAgZXhwb3J0IGxldCBlcnJvclxuXG4gICAgY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaDEsXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XG4gICAgPHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG57L2lmfVxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLnN2ZWx0ZSdcbiAgICBpbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSdcbiAgICBpbXBvcnQgTW92aW5nQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL21vdmluZy1iYWNrZ3JvdW5kLnN2ZWx0ZSdcbiAgICBleHBvcnQgbGV0IHNlZ21lbnRcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBtYWluIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvKm1heC13aWR0aDogNTZlbTsqL1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbjwvc3R5bGU+XG5cbjwhLS0gPE1vdmluZ0JhY2tncm91bmQgbW92aW5nQmFja2dyb3VuZE9wdGlvbnMgPSB7XG57XG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDEwMCxcbiAgICAgICAgdmVydGljZXNQZXJQYXJ0aWNsZTogMyxcbiAgICAgICAgcGFydGljbGVTaXplOiAyLFxufSAgICBcbn0vPiAtLT5cbjxOYXYge3NlZ21lbnR9IC8+XG48bWFpbj5cbiAgICA8c2xvdCAvPlxuPC9tYWluPlxuPEZvb3RlciAvPlxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2F2YXRhci5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYXZhdGFyX3BpeGVsYXRlZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyZXNvdXJjZXMvcHhwbHVzX2libV92Z2E4LXdlYmZvbnQuMTIxMmZjMGE2OGI3MDQwMmI2Yzk4OWVhODg4NTAwNjcud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlcy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC5kNDRiZTdlYzhkZWRkMDk2NDg4ZjkyYTBkYTY1NDZkMC53b2ZmMlwiOyJdLCJzb3VyY2VSb290IjoiIn0=