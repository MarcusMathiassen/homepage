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
/******/ 		return __webpack_require__.p + "" + "2e2fd7fe4debb697e4da" + "/" + ({"about":"about","blog":"blog","index":"index"}[chunkId]||chunkId) + "." + chunkId + ".js"
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

/***/ "./node_modules/codeflask/build/codeflask.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/codeflask/build/codeflask.module.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {var BACKGROUND_COLOR="#fff",LINE_HEIGHT="20px",FONT_SIZE="13px",defaultCssTheme="\n.codeflask {\n  background: "+BACKGROUND_COLOR+";\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n";function cssSupports(e,t){return"undefined"!=typeof CSS?CSS.supports(e,t):"undefined"!=typeof document&&toCamelCase(e)in document.body.style}function toCamelCase(e){return(e=e.split("-").filter(function(e){return!!e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(""))[0].toLowerCase()+e.substr(1)}var FONT_FAMILY='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',COLOR=cssSupports("caret-color","#000")?BACKGROUND_COLOR:"#ccc",LINE_NUMBER_WIDTH="40px",editorCss="\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: "+COLOR+";\n    z-index: 1;\n    resize: none;\n    font-family: "+FONT_FAMILY+";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - "+LINE_NUMBER_WIDTH+");\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: "+FONT_FAMILY+";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: "+FONT_SIZE+";\n    line-height: "+LINE_HEIGHT+";\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - "+LINE_NUMBER_WIDTH+");\n    left: "+LINE_NUMBER_WIDTH+";\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: "+LINE_HEIGHT+";\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: "+LINE_HEIGHT+";\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: "+LINE_NUMBER_WIDTH+";\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: "+LINE_NUMBER_WIDTH+";\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: "+LINE_NUMBER_WIDTH+";\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";function injectCss(e,t,n){var a=t||"codeflask-style",s=n||document.head;if(!e)return!1;if(document.getElementById(a))return!0;var o=document.createElement("style");return o.innerHTML=e,o.id=a,s.appendChild(o),!0}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(e){return String(e).replace(/[&<>"'`=/]/g,function(e){return entityMap[e]})}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var prism=createCommonjsModule(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,o,i=a.util.type(t);switch(n=n||{},i){case"Object":if(o=a.util.objId(t),n[o])return n[o];for(var r in s={},n[o]=s,t)t.hasOwnProperty(r)&&(s[r]=e(t[r],n));return s;case"Array":return o=a.util.objId(t),n[o]?n[o]:(s=[],n[o]=s,t.forEach(function(t,a){s[a]=e(t,n)}),s);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var o=(s=s||a.languages)[e],i={};for(var r in o)if(o.hasOwnProperty(r)){if(r==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(r)||(i[r]=o[r])}var c=s[e];return s[e]=i,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=i)}),i},DFS:function e(t,n,s,o){o=o||{};var i=a.util.objId;for(var r in t)if(t.hasOwnProperty(r)){n.call(t,r,t[r],s||r);var l=t[r],c=a.util.type(l);"Object"!==c||o[i(l)]?"Array"!==c||o[i(l)]||(o[i(l)]=!0,e(l,n,r,o)):(o[i(l)]=!0,e(l,n,null,o))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var o,i=s.elements||e.querySelectorAll(s.selector),r=0;o=i[r++];)a.highlightElement(o,!0===t,s.callback)},highlightElement:function(n,s,o){for(var i,r,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(t)||[,""])[1].toLowerCase(),r=a.languages[i]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var c={element:n,language:i,grammar:r,code:n.textContent},d=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),o&&o.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),s.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(e,t,n,o,i,r,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var d=n[c];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],h=p.inside,g=!!p.lookbehind,f=!!p.greedy,m=0,b=p.alias;if(f&&!p.pattern.global){var k=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,k+"g")}p=p.pattern||p;for(var y=o,C=i;y<t.length;C+=t[y].length,++y){var F=t[y];if(t.length>e.length)return;if(!(F instanceof s)){if(f&&y!=t.length-1){if(p.lastIndex=C,!(T=p.exec(e)))break;for(var v=T.index+(g?T[1].length:0),x=T.index+T[0].length,w=y,A=C,_=t.length;w<_&&(A<x||!t[w].type&&!t[w-1].greedy);++w)v>=(A+=t[w].length)&&(++y,C=A);if(t[y]instanceof s)continue;E=w-y,F=e.slice(C,A),T.index-=C}else{p.lastIndex=0;var T=p.exec(F),E=1}if(T){g&&(m=T[1]?T[1].length:0);x=(v=T.index+m)+(T=T[0].slice(m)).length;var L=F.slice(0,v),N=F.slice(x),S=[y,E];L&&(++y,C+=L.length,S.push(L));var I=new s(c,h?a.tokenize(T,h):T,b,T,f);if(S.push(I),N&&S.push(N),Array.prototype.splice.apply(t,S),1!=E&&a.matchGrammar(e,t,n,y,C,!0,c),r)break}else if(r)break}}}}},tokenize:function(e,t){var n=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,o=0;s=n[o++];)s(t)}},Token:s};function s(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s}if(e.Prism=a,s.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return s.stringify(n,t,e)}).join("");var o={type:e.type,content:s.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,i)}a.hooks.run("wrap",o);var r=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(r?" "+r:"")+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),s=n.language,o=n.code,i=n.immediateClose;e.postMessage(a.highlight(o,a.languages[s],s)),i&&e.close()},!1),a):a;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==commonjsGlobal&&(commonjsGlobal.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var o={};o[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",o)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,s=e.getAttribute("data-src"),o=e,i=/\blang(?:uage)?-([\w-]+)\b/i;o&&!i.test(o.className);)o=o.parentNode;if(o&&(a=(e.className.match(i)||[,""])[1]),!a){var r=(s.match(/\.(\w+)$/)||[,""])[1];a=n[r]||r}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}),CodeFlask=function(e,t){if(!e)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!t)throw Error("CodeFlask expects an object containing options as second parameter");if(e.nodeType)this.editorRoot=e;else{var n=document.querySelector(e);n&&(this.editorRoot=n)}this.opts=t,this.startEditor()};CodeFlask.prototype.startEditor=function(){if(!injectCss(editorCss,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)},CodeFlask.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")},CodeFlask.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")},CodeFlask.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")},CodeFlask.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"))},CodeFlask.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber()},CodeFlask.prototype.createElement=function(e,t){var n=document.createElement(e);return t.appendChild(n),n},CodeFlask.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=!1!==this.opts.defaultTheme,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,"boolean"!=typeof this.opts.handleTabs&&(this.opts.handleTabs=!0),"boolean"!=typeof this.opts.handleSelfClosingCharacters&&(this.opts.handleSelfClosingCharacters=!0),"boolean"!=typeof this.opts.handleNewLineIndentation&&(this.opts.handleNewLineIndentation=!0),!0===this.opts.rtl&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),!1===this.opts.enableAutocorrect&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&injectCss(defaultCssTheme,"theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()},CodeFlask.prototype.updateLineNumbersCount=function(){for(var e="",t=1;t<=this.lineNumber;t++)e=e+'<span class="codeflask__lines__line">'+t+"</span>";this.elLineNumbers.innerHTML=e},CodeFlask.prototype.listenTextarea=function(){var e=this;this.elTextarea.addEventListener("input",function(t){e.code=t.target.value,e.elCode.innerHTML=escapeHtml(t.target.value),e.highlight(),setTimeout(function(){e.runUpdate(),e.setLineNumber()},1)}),this.elTextarea.addEventListener("keydown",function(t){e.handleTabs(t),e.handleSelfClosingCharacters(t),e.handleNewLineIndentation(t)}),this.elTextarea.addEventListener("scroll",function(t){e.elPre.style.transform="translate3d(-"+t.target.scrollLeft+"px, -"+t.target.scrollTop+"px, 0)",e.elLineNumbers&&(e.elLineNumbers.style.transform="translate3d(0, -"+t.target.scrollTop+"px, 0)")})},CodeFlask.prototype.handleTabs=function(e){if(this.opts.handleTabs){if(9!==e.keyCode)return;e.preventDefault();var t=this.elTextarea,n=t.selectionDirection,a=t.selectionStart,s=t.selectionEnd,o=t.value,i=o.substr(0,a),r=o.substring(a,s),l=o.substring(s),c=" ".repeat(this.opts.tabSize);if(a!==s&&r.length>=c.length){var d=a-i.split("\n").pop().length,u=c.length,p=c.length;if(e.shiftKey)o.substr(d,c.length)===c?(u=-u,d>a?(r=r.substring(0,d)+r.substring(d+c.length),p=0):d===a?(u=0,p=0,r=r.substring(c.length)):(p=-p,i=i.substring(0,d)+i.substring(d+c.length))):(u=0,p=0),r=r.replace(new RegExp("\n"+c.split("").join("\\"),"g"),"\n");else i=i.substr(0,d)+c+i.substring(d,a),r=r.replace(/\n/g,"\n"+c);t.value=i+r+l,t.selectionStart=a+u,t.selectionEnd=a+r.length+p,t.selectionDirection=n}else t.value=i+c+l,t.selectionStart=a+c.length,t.selectionEnd=a+c.length;var h=t.value;this.updateCode(h),this.elTextarea.selectionEnd=s+this.opts.tabSize}},CodeFlask.prototype.handleSelfClosingCharacters=function(e){if(this.opts.handleSelfClosingCharacters){var t=e.key;if(["(","[","{","<","'",'"'].includes(t)||[")","]","}",">","'",'"'].includes(t))switch(t){case"(":case")":this.closeCharacter(t);break;case"[":case"]":this.closeCharacter(t);break;case"{":case"}":this.closeCharacter(t);break;case"<":case">":case"'":case'"':this.closeCharacter(t)}}},CodeFlask.prototype.setLineNumber=function(){this.lineNumber=this.code.split("\n").length,this.opts.lineNumbers&&this.updateLineNumbersCount()},CodeFlask.prototype.handleNewLineIndentation=function(e){if(this.opts.handleNewLineIndentation&&13===e.keyCode){e.preventDefault();var t=this.elTextarea,n=t.selectionStart,a=t.selectionEnd,s=t.value,o=s.substr(0,n),i=s.substring(a),r=s.lastIndexOf("\n",n-1),l=r+s.slice(r+1).search(/[^ ]|$/),c=l>r?l-r:0,d=o+"\n"+" ".repeat(c)+i;t.value=d,t.selectionStart=n+c+1,t.selectionEnd=n+c+1,this.updateCode(t.value)}},CodeFlask.prototype.closeCharacter=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd;if(this.skipCloseChar(e)){var a=this.code.substr(n,1)===e,s=a?n+1:n,o=!a&&["'",'"'].includes(e)?e:"",i=""+this.code.substring(0,t)+o+this.code.substring(s);this.updateCode(i),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{var r=e;switch(e){case"(":r=String.fromCharCode(e.charCodeAt()+1);break;case"<":case"{":case"[":r=String.fromCharCode(e.charCodeAt()+2)}var l=this.code.substring(t,n),c=""+this.code.substring(0,t)+l+r+this.code.substring(n);this.updateCode(c)}this.elTextarea.selectionEnd=t},CodeFlask.prototype.skipCloseChar=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd,a=Math.abs(n-t)>0;return[")","}","]",">"].includes(e)||["'",'"'].includes(e)&&!a},CodeFlask.prototype.updateCode=function(e){this.code=e,this.elTextarea.value=e,this.elCode.innerHTML=escapeHtml(e),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)},CodeFlask.prototype.updateLanguage=function(e){var t=this.opts.language;this.elCode.classList.remove("language-"+t),this.elCode.classList.add("language-"+e),this.opts.language=e,this.highlight()},CodeFlask.prototype.addLanguage=function(e,t){prism.languages[e]=t},CodeFlask.prototype.populateDefault=function(){this.updateCode(this.code)},CodeFlask.prototype.highlight=function(){prism.highlightElement(this.elCode,!1)},CodeFlask.prototype.onUpdate=function(e){if(e&&"[object Function]"!=={}.toString.call(e))throw Error("CodeFlask expects callback of type Function");this.updateCallBack=e},CodeFlask.prototype.getCode=function(){return this.code},CodeFlask.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code)},CodeFlask.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0)},CodeFlask.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly")};/* harmony default export */ __webpack_exports__["default"] = (CodeFlask);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: 'pxplus_ibm_vga8regular';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nhtml {\n  --chrome—color-light0: #FFFFFF;\n  --chrome—color-light1: #F4F5F7;\n  --chrome—color-light2: #E7EAED;\n  --chrome—color-dark0: #202124;\n  --chrome—color-dark1: #2D3033;\n  --chrome—color-dark2: #323639;\n  --theme-style: 'retro';\n  --text--color-base--light:            22, 21, 30;\n  --background--color-base--light:      255,255,255;\n  --text--color-base--dark:             254, 248, 239;\n  --background--color-base--dark:       22, 21, 30;\n  --systemBlueLight:   rgb(0,122,255);\n  --systemGrayLight:   rgb(142,142,147);\n  --systemGreenLight:  rgb(52,199,89);\n  --systemIndigoLight: rgb(88,86,214);\n  --systemOrangeLight: rgb(255,149,0);\n  --systemPinkLight:   rgb(255,45,85);\n  --systemPurpleLight: rgb(175,82,222);\n  --systemRedLight:    rgb(255,59,48);\n  --systemTealLight:   rgb(90,200,250);\n  --systemYellowLight: rgb(255,204,0);\n  --systemBlueDark:    rgb(10,132,255);\n  --systemGrayDark:    rgb(152,152,157);\n  --systemGreenDark:   rgb(48,209,88);\n  --systemIndigoDark:  rgb(94,92,230);\n  --systemOrangeDark:  rgb(255,159,10);\n  --systemPinkDark:    rgb(255,55,95);\n  --systemPurpleDark:  rgb(191,90,242);\n  --systemRedDark:     rgb(255,69,58);\n  --systemTealDark:    rgb(100,210,255);\n  --systemYellowDark:  rgb(255,214,10);\n  --text-base: 0,0,0;\n  --text: rgba(var(--text-base),1);\n  --background-base: 0,0,0;\n  --background: rgba(var(--background-base), 1);\n  --font: '';\n  font-size: calc(1vw + 1vh);\n  --border-radius: 50px; }\n  html[theme-style='retro'] {\n    --theme-style: 'retro';\n    --font: 'pxplus_ibm_vga8regular';\n    --border-radius: 0px; }\n  html[theme-style='modern'] {\n    --theme-style: 'modern';\n    --border-radius: 50px;\n    --font: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif; }\n\nhtml[theme=\"light\"] {\n  --primary:   var(--chrome—color-light0);\n  --secondary: var(--chrome—color-light1);\n  --third:     var(--chrome—color-light2);\n  --systemBlue:   var(--systemBlueLight);\n  --systemGray:   var(--systemGrayLight);\n  --systemGreen:  var(--systemGreenLight);\n  --systemIndigo: var(--systemIndigoLight);\n  --systemOrange: var(--systemOrangeLight);\n  --systemPink:   var(--systemPinkLight);\n  --systemPurple: var(--systemPurpleLight);\n  --systemRed:    var(--systemRedLight);\n  --systemTeal:   var(--systemTealLight);\n  --systemYellow: var(--systemYellowLight);\n  --background-color--selection: yellow; }\n  html[theme=\"light\"][theme-style='retro'] {\n    --text-base:        var(--text--color-base--light);\n    --background-base:  var(--background--color-base--light); }\n  html[theme=\"light\"][theme-style='modern'] {\n    --text-base: 39,39,39;\n    --background-base: 255,255,255;\n    --primary:   #FbFbFb;\n    --secondary: #EbEbEb;\n    --third:     #DbDbDb; }\n\nhtml[theme='dark'] {\n  --primary:   var(--chrome—color-dark0);\n  --secondary: var(--chrome—color-dark1);\n  --third:     var(--chrome—color-dark2);\n  --systemBlue:   var(--systemBlueDark);\n  --systemGray:   var(--systemGrayDark);\n  --systemGreen:  var(--systemGreenDark);\n  --systemIndigo: var(--systemIndigoDark);\n  --systemOrange: var(--systemOrangeDark);\n  --systemPink:   var(--systemPinkDark);\n  --systemPurple: var(--systemPurpleDark);\n  --systemRed:    var(--systemRedDark);\n  --systemTeal:   var(--systemTealDark);\n  --systemYellow: var(--systemYellowDark);\n  --background-color--selection: red; }\n  html[theme='dark'][theme-style='retro'] {\n    --text-base:       var(--text--color-base--dark);\n    --background-base: var(--background--color-base--dark); }\n  html[theme='dark'][theme-style='modern'] {\n    --text-base: 245,245,245;\n    --background-base: 0,0,0;\n    --primary:   #0b0b0b;\n    --secondary: #1b1b1b;\n    --third:     #2b2b2b; }\n\nbody, p, b, button {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 1em;\n  font-family: var(--font);\n  color: var(--text);\n  background: var(--background); }\n\n::selection {\n  color: var(--text-color--selection);\n  background-color: var(--background-color--selection); }\n\nbutton {\n  border: none;\n  color: rgba(var(--text-base), 0.6); }\n  button:hover {\n    color: rgba(var(--text-base), 1); }\n  button:focus {\n    outline: 0; }\n\nimg {\n  max-width: 200px;\n  border-radius: 50px; }\n\n.faint {\n  color: rgba(var(--text-base), 0.5); }\n\na {\n  color: var(--text);\n  opacity: 0.8;\n  text-decoration: none;\n  font-family: var(--font); }\n  a:hover {\n    opacity: 1.0;\n    color: var(--text); }\n\nhr {\n  border-color: rgba(var(--text-base), 0.1);\n  border-width: 0.5px;\n  margin: 0 auto;\n  margin-top: 20px;\n  width: 60%; }\n\np {\n  background: none; }\n\nspan {\n  color: var(--text);\n  font-family: var(--font); }\n\nul {\n  padding-inline-start: 10px; }\n\nli {\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  list-style-type: none; }\n", ""]);


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

/***/ "./node_modules/prismjs/components/prism-glsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-glsl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.glsl = Prism.languages.extend('clike', {
	'comment': [
		/\/\*[\s\S]*?\*\//,
		/\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/
	],
	'number': /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
	'keyword': /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
});

Prism.languages.insertBefore('glsl', 'comment', {
	'preprocessor': {
		pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
		lookbehind: true,
		alias: 'builtin'
	}
});

/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

		if (Prism.plugins.toolbar) {
			Prism.plugins.toolbar.registerButton('download-file', function (env) {
				var pre = env.element.parentNode;
				if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
					return;
				}
				var src = pre.getAttribute('data-src');
				var a = document.createElement('a');
				a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
				a.setAttribute('download', '');
				a.href = src;
				return a;
			});
		}

	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
/* harmony import */ var _components_stores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stores.js */ "./src/components/stores.js");






const updateGlobalColorVariables = () => {
    const setStyle = (e, p, v) => e.style.setProperty(p, v)
    const getStyleAsRGB = (e, p) =>
        color__WEBPACK_IMPORTED_MODULE_2___default()(
            getComputedStyle(e)
                .getPropertyValue(p)
                .trim()
        ).object()
    window.color = {
        text: getStyleAsRGB(document.documentElement, '--text'),
        background: getStyleAsRGB(document.documentElement, '--background'),
    }
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type == 'attributes') {
            updateGlobalColorVariables()
            _components_stores_js__WEBPACK_IMPORTED_MODULE_3__["theme"].set(document.documentElement.getAttribute('theme'))
            _components_stores_js__WEBPACK_IMPORTED_MODULE_3__["themeStyle"].set(document.documentElement.getAttribute('theme-style'))
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

/***/ "./src/components/Nav.svelte":
/*!***********************************!*\
  !*** ./src/components/Nav.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/Nav.svelte generated by Svelte v3.12.1 */


const file = "src/components/Nav.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-479vwy-style';
	style.textContent = "nav.svelte-479vwy{position:relative;margin-top:15px;font-weight:600}ul.svelte-479vwy{margin:0;padding:0}ul.svelte-479vwy::after{content:'';display:block;clear:both}li.svelte-479vwy{display:block;float:left;margin:0;padding:0}.selected.svelte-479vwy{color:var(--text)}.selected.svelte-479vwy::after{position:absolute;display:block}a.svelte-479vwy{color:rgba(var(--text-base), 0.5);margin-top:0px;padding:0em 1em;display:block}ul.svelte-479vwy{display:flex;justify-content:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LnN2ZWx0ZSIsInNvdXJjZXMiOlsiTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJjb2ZmZWVcIj52YXIgc2VnbWVudDtcblxuc2VnbWVudCA9IHZvaWQgMDtcblxuZXhwb3J0IHtcbiAgc2VnbWVudFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxudWw6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDsgfVxuXG5saSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5hIHtcbiAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC41KTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAwZW0gMWVtO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPU5hdi5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxuYXY+PHVsPnsjZWFjaCBbJ2hvbWUnLCAnYWJvdXQnXSBhcyBwYWdlfTxsaT48YSBjbGFzcz1cIntzZWdtZW50ID09PSBwYWdlID8gJ3NlbGVjdGVkJyA6ICcnfVwiIGhyZWY9XCJ7cGFnZSA9PT0gJ2hvbWUnID8gJy4nIDogcGFnZX1cIj57cGFnZX08L2E+PC9saT57L2VhY2h9PC91bD48L25hdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUIsR0FBRyxjQUFDLENBQUMsQUFDdEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsVUFBVSxDQUFFLElBQUksQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQUFBRSxDQUFDLEFBRXJCLEVBQUUsY0FBQyxDQUFDLEFBQ0YsTUFBTSxDQUFFLENBQUMsQ0FDVCxPQUFPLENBQUUsQ0FBQyxBQUFFLENBQUMsQUFFZixnQkFBRSxPQUFPLEFBQUMsQ0FBQyxBQUNULE9BQU8sQ0FBRSxFQUFFLENBQ1gsT0FBTyxDQUFFLEtBQUssQ0FDZCxLQUFLLENBQUUsSUFBSSxBQUFFLENBQUMsQUFFaEIsRUFBRSxjQUFDLENBQUMsQUFDRixPQUFPLENBQUUsS0FBSyxDQUNkLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLENBQUMsQ0FDVCxPQUFPLENBQUUsQ0FBQyxBQUFFLENBQUMsQUFFZixTQUFTLGNBQUMsQ0FBQyxBQUNULEtBQUssQ0FBRSxJQUFJLE1BQU0sQ0FBQyxBQUFFLENBQUMsQUFFdkIsdUJBQVMsT0FBTyxBQUFDLENBQUMsQUFDaEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLEtBQUssQUFBRSxDQUFDLEFBRW5CLENBQUMsY0FBQyxDQUFDLEFBQ0QsS0FBSyxDQUFFLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNsQyxVQUFVLENBQUUsR0FBRyxDQUNmLE9BQU8sQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUNoQixPQUFPLENBQUUsS0FBSyxBQUFFLENBQUMsQUFFbkIsRUFBRSxjQUFDLENBQUMsQUFDRixPQUFPLENBQUUsSUFBSSxDQUNiLGVBQWUsQ0FBRSxNQUFNLEFBQUUsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.page = list[i];
	return child_ctx;
}

// (49:9) {#each ['home', 'about'] as page}
function create_each_block(ctx) {
	var li, a, t, a_class_value;

	const block = {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.page);
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", { class: true }, false);
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { class: true, href: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, ctx.page);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", a_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === ctx.page ? 'selected' : '')) + " svelte-479vwy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", ctx.page === 'home' ? '.' : ctx.page);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 48, 46, 695);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li, "class", "svelte-479vwy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 48, 42, 691);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t);
		},

		p: function update(changed, ctx) {
			if ((changed.segment) && a_class_value !== (a_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.segment === ctx.page ? 'selected' : '')) + " svelte-479vwy")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", a_class_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(li);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(49:9) {#each ['home', 'about'] as page}", ctx });
	return block;
}

function create_fragment(ctx) {
	var nav, ul;

	let each_value = ['home', 'about'];

	let each_blocks = [];

	for (let i = 0; i < 2; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("nav");
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");

			for (let i = 0; i < 2; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "NAV", { class: true }, false);
			var nav_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(nav);

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nav_nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (let i = 0; i < 2; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			nav_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(ul, "class", "svelte-479vwy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 48, 5, 654);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(nav, "class", "svelte-479vwy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 48, 0, 649);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, nav, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(nav, ul);

			for (let i = 0; i < 2; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.segment) {
				each_value = ['home', 'about'];

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < 2; i += 1) {
					each_blocks[i].d(1);
				}
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(nav);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	var { segment } = $$props;

$$invalidate('segment', segment = void 0);

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
		if (!document.getElementById("svelte-479vwy-style")) add_css();
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
/* src/components/moving-background.svelte generated by Svelte v3.12.1 */

const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];




const file = "src/components/moving-background.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1srdvqe-style';
	style.textContent = "canvas.svelte-1srdvqe{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-999}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aW5nLWJhY2tncm91bmQuc3ZlbHRlIiwic291cmNlcyI6WyJtb3ZpbmctYmFja2dyb3VuZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIGxhbmc9XCJzYXNzXCI+Y2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC05OTk7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bW92aW5nLWJhY2tncm91bmQuc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48Y2FudmFzIGJpbmQ6dGhpcz1cIntjYW52YXN9XCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG5cbmltcG9ydCB7IHYyLCBtYXQ0IH0gZnJvbSAnLi91dGlscy9tYXRoJ1xuaW1wb3J0IHsgcmFuZEZsb2F0IH0gZnJvbSAnLi91dGlscy91dGlsaXR5J1xuXG5leHBvcnQgbGV0IG1vdmluZ0JhY2tncm91bmRPcHRpb25zXG5cbmxldCBzdGFydFRpbWUgPSAwXG5sZXQgdGV4dENvbG9yXG5sZXQgYmFja0NvbG9yXG5cbmxldCBnbFxubGV0IHZhb1xubGV0IHZibyA9IG5ldyBNYXAoKVxubGV0IHByb2dyYW1cblxubGV0IGdBdHRyaWJMb2NhdGlvblZpZXdwb3J0U2l6ZSA9IDRcblxubGV0IHZlcnRpY2VzQXR0cmliTG9jYXRpb24gPSAwXG5sZXQgcG9zaXRpb25zQXR0cmliTG9jYXRpb24gPSAxXG5sZXQgY29sb3JzQXR0cmliTG9jYXRpb24gPSAyXG5sZXQgc2l6ZXNBdHRyaWJMb2NhdGlvbiA9IDNcblxubGV0IGNhbnZhc1xubGV0IGNhbnZhc1dpZHRoID0gMzAwXG5sZXQgY2FudmFzSGVpZ2h0ID0gMzAwXG5cbmxldCBiaW5kVG8gPSAnbW92aW5nLWJhY2tncm91bmQnXG5sZXQgbnVtVmVydGljZXNQZXJDaXJjbGUgPSAzNlxubGV0IGRlc2lyZWRQcmltaXRpdmVDb3VudCA9IG1vdmluZ0JhY2tncm91bmRPcHRpb25zLmNvdW50XG5sZXQgcGFydGljbGVTaXplID0gbW92aW5nQmFja2dyb3VuZE9wdGlvbnMucGFydGljbGVTaXplXG5sZXQgaW5pdEZ1bmMgPSBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9ucy5pbml0XG5sZXQgdXBkYXRlRnVuYyA9IG1vdmluZ0JhY2tncm91bmRPcHRpb25zLnVwZGF0ZVxuXG5sZXQgbGFzdFByaW1pdGl2ZUNvdW50ID0gMFxubGV0IHByaW1pdGl2ZUNvdW50ID0gMFxuXG5sZXQgbGFzdEluZm8gPSB7XG4gICAgdmVydGljZXNMZW5ndGg6IDAsXG4gICAgcG9zaXRpb25zTGVuZ3RoOiAwLFxuICAgIGNvbG9yc0xlbmd0aDogMCxcbiAgICBzaXplc0xlbmd0aDogMCxcbn1cblxubGV0IHZlcnRpY2VzID0gW11cbmxldCBwb3NpdGlvbnMgPSBbXVxubGV0IGNvbG9ycyA9IFtdXG5sZXQgc2l6ZXMgPSBbXVxuXG5cbmxldCB2ZWxvY2l0aWVzID0gW11cbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwXG59XG5jb25zdCB1cGRhdGVHUFVCdWZmZXJzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gVGhlc2UgYXJlIG5ldmVyIHVwZGF0ZWQgYXQgdGhlIG1vbWVudC5cbiAgICAvLyBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgndmVydGljZXMnKSlcbiAgICAvLyBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aFxuICAgIC8vIGlmICh2ZXJ0aWNlc0xlbmd0aCA+PSBsYXN0SW5mby52ZXJ0aWNlc0xlbmd0aCkge1xuICAgIC8vICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAvLyAgICAgbGFzdEluZm8udmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlc0xlbmd0aFxuICAgIC8vIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIDAsIDApXG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgncG9zaXRpb25zJykpXG4gICAgY29uc3QgcG9zaXRpb25zTGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aFxuICAgIGlmIChwb3NpdGlvbnNMZW5ndGggPj0gbGFzdEluZm8ucG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgbGFzdEluZm8ucG9zaXRpb25zTGVuZ3RoID0gcG9zaXRpb25zTGVuZ3RoXG4gICAgfSBlbHNlIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksIDAsIDApXG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgnY29sb3JzJykpXG4gICAgY29uc3QgY29sb3JzTGVuZ3RoID0gY29sb3JzLmxlbmd0aFxuICAgIGlmIChjb2xvcnNMZW5ndGggPj0gbGFzdEluZm8uY29sb3JzTGVuZ3RoKSB7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgbGFzdEluZm8uY29sb3JzTGVuZ3RoID0gY29sb3JzTGVuZ3RoXG4gICAgfSBlbHNlIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIDAsIDApXG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvLmdldCgnc2l6ZXMnKSlcbiAgICBjb25zdCBzaXplc0xlbmd0aCA9IHNpemVzLmxlbmd0aFxuICAgIGlmIChzaXplc0xlbmd0aCA+PSBsYXN0SW5mby5zaXplc0xlbmd0aCkge1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShzaXplcyksIGdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgbGFzdEluZm8uc2l6ZXNMZW5ndGggPSBzaXplc0xlbmd0aFxuICAgIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheShzaXplcyksIDAsIDApXG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IHJnYmEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IHJnYmEuciAvIDI1NSxcbiAgICAgICAgZzogcmdiYS5nIC8gMjU1LFxuICAgICAgICBiOiByZ2JhLmIgLyAyNTUsXG4gICAgICAgIGE6IHJnYmEuYSB8fCByZ2JhLmEgLyAyNTUsXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVWZXJ0aWNlcygpIHtcbiAgICBudW1WZXJ0aWNlc1BlckNpcmNsZSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5zaW4oZ2V0VGltZSgpKSoxMikrMylcbiAgICAvLyBBZGQgdmVydGljZXNcbiAgICB2ZXJ0aWNlcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlc1BlckNpcmNsZTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGNvbnQgPSBpICogTWF0aC5QSSAqIDIgLyBudW1WZXJ0aWNlc1BlckNpcmNsZVxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKE1hdGguY29zKGNvbnQpLCBNYXRoLnNpbihjb250KSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyAoKSB7XG4gICAgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgdmFyIGRlc2lyZWRDU1NXaWR0aCA9IGNhbnZhc1dpZHRoXG4gICAgdmFyIGRlc2lyZWRDU1NIZWlnaHQgPSBjYW52YXNIZWlnaHRcbiAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG4gICAgY2FudmFzLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkZXNpcmVkQ1NTSGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpb1xuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICsgJ3B4J1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBkZXNpcmVkQ1NTSGVpZ2h0ICsgJ3B4J1xuXG4gICAgY2FudmFzV2lkdGggKj0gZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNhbnZhc0hlaWdodCAqPSBkZXZpY2VQaXhlbFJhdGlvXG5cbiAgICB0ZXh0Q29sb3IgPSBub3JtYWxpemUod2luZG93LmNvbG9yLnRleHQpXG4gICAgdGV4dENvbG9yLmEgPSAwLjJcblxuICAgIGJhY2tDb2xvciA9IG5vcm1hbGl6ZSh3aW5kb3cuY29sb3IuYmFja2dyb3VuZClcbiAgICBiYWNrQ29sb3IuYSA9IDEuMFxufVxuXG5hc3luYyBmdW5jdGlvbiBkcmF3KCkge1xuICAgIHVwZGF0ZVZhbHVlcygpXG5cbiAgICBsZXQgcGkgPSAwXG4gICAgbGV0IGNpID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWl0aXZlQ291bnQ7ICsraSkge1xuICAgICAgICBjb25zdCBwID0gdXBkYXRlRnVuYyh7XG4gICAgICAgICAgICBwb3M6IHt4OiBwb3NpdGlvbnNbcGldLCB5OiBwb3NpdGlvbnNbcGkrMV19LFxuICAgICAgICAgICAgdmVsOiB7eDogdmVsb2NpdGllc1twaV0sIHk6IHZlbG9jaXRpZXNbcGkrMV19LFxuICAgICAgICAgICAgc2l6ZTogc2l6ZXNbaV0sXG4gICAgICAgICAgICBjb2xvcjoge3I6IGNvbG9yc1tjaV0sIGc6IGNvbG9yc1tjaSsxXSwgYjogY29sb3JzW2NpKzJdLCBhOiBjb2xvcnNbY2krM119XG4gICAgICAgIH0pXG5cbiAgICAgICAgcG9zaXRpb25zW3BpXSA9IHAucG9zLnhcbiAgICAgICAgcG9zaXRpb25zW3BpKzFdID0gcC5wb3MueVxuXG4gICAgICAgIHZlbG9jaXRpZXNbcGldID0gcC52ZWwueFxuICAgICAgICB2ZWxvY2l0aWVzW3BpKzFdID0gcC52ZWwueVxuXG4gICAgICAgIHNpemVzW2ldID0gcC5zaXplXG5cbiAgICAgICAgY29sb3JzW2NpKzBdID0gcC5jb2xvci5yXG4gICAgICAgIGNvbG9yc1tjaSsxXSA9IHAuY29sb3IuZ1xuICAgICAgICBjb2xvcnNbY2krMl0gPSBwLmNvbG9yLmJcbiAgICAgICAgY29sb3JzW2NpKzNdID0gcC5jb2xvci5hXG4gICAgICAgIFxuICAgICAgICBwaSArPSAyXG4gICAgICAgIGNpICs9IDRcbiAgICB9XG5cblxuICAgIGdsLmNsZWFyQ29sb3IoMCwwLDAsIDAuMClcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKVxuXG4gICAgLy8gU2V0dXAgdmlld3BvcnQsIG9ydGhvZ3JhcGhpYyBwcm9qZWN0aW9uIG1hdHJpeFxuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpXG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbylcbiAgICBnbC51bmlmb3JtMmYoZ0F0dHJpYkxvY2F0aW9uVmlld3BvcnRTaXplLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxuXG4gICAgY29uc3QgdHlwZSA9IGdsLlRSSUFOR0xFX0ZBTlxuICAgIGNvbnN0IGZpcnN0ID0gMFxuICAgIGNvbnN0IGNvdW50ID0gbnVtVmVydGljZXNQZXJDaXJjbGVcbiAgICBjb25zdCBwcmltaXRpdmVfY291bnQgPSBwcmltaXRpdmVDb3VudFxuXG4gICAgYXdhaXQgdXBkYXRlR1BVQnVmZmVycygpXG4gICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0eXBlLCBmaXJzdCwgY291bnQsIHByaW1pdGl2ZV9jb3VudClcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXdhaXQgZHJhdylcblxuICAgIGxhc3RQcmltaXRpdmVDb3VudCA9IHByaW1pdGl2ZUNvdW50XG59XG5cbm9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKVxuXG4gICAgaWYgKCFnbCkgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJubyB3ZWJnbDIgY29udGV4dCBmb3VuZC4gc3RvcHBpbmcuXCIpXG4gICAgICAgIHJldHVybiBcbiAgICB9XG5cbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpXG4gICAgZ2wuYmxlbmRFcXVhdGlvbihnbC5GVU5DX0FERClcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxuXG4gICAgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICAgIGxldCB2cyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKVxuICAgIGxldCBmcyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG5cbiAgICBsZXQgc2hhZGVyUHJlYW1ibGUgPSBgI3ZlcnNpb24gMzAwIGVzXG4gICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuICAgIGBcblxuICAgIGxldCB2c19zcmMgPSBzaGFkZXJQcmVhbWJsZSArIGBcbiAgICBpbiB2ZWMyICAgICB2ZXJ0aWNlcztcbiAgICBpbiB2ZWMyICAgICBwb3NpdGlvbjtcbiAgICBpbiB2ZWM0ICAgICBjb2xvcjtcbiAgICBpbiBmbG9hdCAgICBzaXplO1xuXG4gICAgdW5pZm9ybSB2ZWMyIHZpZXdwb3J0X3NpemU7XG5cbiAgICBvdXQgdmVjNCBjb2xvcjA7XG5cbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIHZlYzIgcG9zID0gKCgoc2l6ZSAqIHZlcnRpY2VzICsgcG9zaXRpb24pIC8gdmlld3BvcnRfc2l6ZSkgKiAyLjApIC0gMS4wO1xuICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zLCAwLjAsIDEuMCk7XG4gICAgICAgIGNvbG9yMCA9IGNvbG9yO1xuICAgIH1cbiAgICBgXG5cbiAgICBsZXQgZnNfc3JjID0gc2hhZGVyUHJlYW1ibGUgKyBgXG4gICAgaW4gdmVjNCBjb2xvcjA7XG4gICAgb3V0IHZlYzQgZnJhZztcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIGZyYWcgPSBjb2xvcjA7XG4gICAgfWBcblxuICAgIGdsLnNoYWRlclNvdXJjZSh2cywgdnNfc3JjKVxuICAgIGdsLnNoYWRlclNvdXJjZShmcywgZnNfc3JjKVxuXG4gICAgZ2wuY29tcGlsZVNoYWRlcih2cylcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2cywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnRVJST1IgY29tcGlsaW5nIHZlcnRleCBzaGFkZXIhJyxcbiAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2codnMpXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcylcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnRVJST1IgY29tcGlsaW5nIGZyYWdtZW50IHNoYWRlciEnLFxuICAgICAgICAgICAgZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcylcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnMpXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKVxuXG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHZlcnRpY2VzQXR0cmliTG9jYXRpb24sICd2ZXJ0aWNlcycpXG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uLCAncG9zaXRpb24nKVxuICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBjb2xvcnNBdHRyaWJMb2NhdGlvbiwgJ2NvbG9yJylcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgc2l6ZXNBdHRyaWJMb2NhdGlvbiwgJ3NpemUnKVxuXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcbiAgICBnbC52YWxpZGF0ZVByb2dyYW0ocHJvZ3JhbSlcblxuICAgIGdBdHRyaWJMb2NhdGlvblZpZXdwb3J0U2l6ZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndmlld3BvcnRfc2l6ZScpXG5cbiAgICBnbC5kZWxldGVTaGFkZXIodnMpXG4gICAgZ2wuZGVsZXRlU2hhZGVyKGZzKVxuXG4gICAgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKVxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXG5cbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2ZXJ0aWNlc0F0dHJpYkxvY2F0aW9uKVxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uKVxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGNvbG9yc0F0dHJpYkxvY2F0aW9uKVxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNpemVzQXR0cmliTG9jYXRpb24pXG5cbiAgICAvLyBBZGQgdmVydGljZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2VzUGVyQ2lyY2xlOyArK2kpIHtcbiAgICAgICAgY29uc3QgY29udCA9IGkgKiBNYXRoLlBJICogMiAvIG51bVZlcnRpY2VzUGVyQ2lyY2xlXG4gICAgICAgIHZlcnRpY2VzLnB1c2goTWF0aC5jb3MoY29udCksIE1hdGguc2luKGNvbnQpKVxuICAgIH1cblxuICAgIGxldCBwaSA9IDBcbiAgICBsZXQgY2kgPSAwXG4gICAgcHJpbWl0aXZlQ291bnQgPSBkZXNpcmVkUHJpbWl0aXZlQ291bnRcbiAgICBwb3NpdGlvbnMubGVuZ3RoID0gMiAqIHByaW1pdGl2ZUNvdW50XG4gICAgdmVsb2NpdGllcy5sZW5ndGggPSAyICogcHJpbWl0aXZlQ291bnRcbiAgICBzaXplcy5sZW5ndGggPSBwcmltaXRpdmVDb3VudFxuICAgIGNvbG9ycy5sZW5ndGggPSA0KnByaW1pdGl2ZUNvdW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmltaXRpdmVDb3VudDsgKytpKSB7XG4gICAgICAgY29uc3QgcCA9IGluaXRGdW5jKHtcbiAgICAgICAgICAgIHBvczoge3g6IHBvc2l0aW9uc1twaV0sIHk6IHBvc2l0aW9uc1twaSsxXX0sXG4gICAgICAgICAgICB2ZWw6IHt4OiB2ZWxvY2l0aWVzW3BpXSwgeTogdmVsb2NpdGllc1twaSsxXX0sXG4gICAgICAgICAgICBzaXplOiBzaXplc1tpXSxcbiAgICAgICAgICAgIGNvbG9yOiB7cjogY29sb3JzW2NpXSwgZzogY29sb3JzW2NpKzFdLCBiOiBjb2xvcnNbY2krMl0sIGE6IGNvbG9yc1tjaSszXX1cbiAgICAgICAgfSlcblxuICAgICAgICBwb3NpdGlvbnNbcGldID0gcC5wb3MueFxuICAgICAgICBwb3NpdGlvbnNbcGkrMV0gPSBwLnBvcy55XG5cbiAgICAgICAgdmVsb2NpdGllc1twaV0gPSBwLnZlbC54XG4gICAgICAgIHZlbG9jaXRpZXNbcGkrMV0gPSBwLnZlbC55XG5cbiAgICAgICAgc2l6ZXNbaV0gPSBwLnNpemVcblxuICAgICAgICBjb2xvcnNbY2krMF0gPSBwLmNvbG9yLnJcbiAgICAgICAgY29sb3JzW2NpKzFdID0gcC5jb2xvci5nXG4gICAgICAgIGNvbG9yc1tjaSsyXSA9IHAuY29sb3IuYlxuICAgICAgICBjb2xvcnNbY2krM10gPSBwLmNvbG9yLmFcbiAgICAgICAgXG4gICAgICAgIHBpICs9IDJcbiAgICAgICAgY2kgKz0gNFxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlQXJyYXlCdWZmZXIgPSAobG9jLCBkYXRhLCBkYXRhX21lbWJlcnMsIHRhcmdldCwgdXNhZ2UsIGRpdmlzb3IgPSAwKSA9PiB7XG4gICAgICAgIGNvbnN0IHZibyA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG4gICAgICAgIGdsLmJpbmRCdWZmZXIodGFyZ2V0LCB2Ym8pXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEodGFyZ2V0LCBkYXRhLCB1c2FnZSlcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihsb2MsIGRhdGFfbWVtYmVycywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgIGlmIChkaXZpc29yICE9PSAwKSB7XG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvYywgZGl2aXNvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmJvXG4gICAgfVxuXG4gICAgdmJvLnNldCgndmVydGljZXMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgdmVydGljZXNBdHRyaWJMb2NhdGlvbixcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksXG4gICAgICAgIDIsXG4gICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgZ2wuRFlOQU1JQ19EUkFXXG4gICAgKSlcbiAgICB2Ym8uc2V0KCdwb3NpdGlvbnMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgcG9zaXRpb25zQXR0cmliTG9jYXRpb24sXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSxcbiAgICAgICAgMixcbiAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgICBnbC5EWU5BTUlDX0RSQVcsXG4gICAgICAgIDFcbiAgICApKVxuICAgIHZiby5zZXQoJ2NvbG9ycycsIGNyZWF0ZUFycmF5QnVmZmVyKFxuICAgICAgICBjb2xvcnNBdHRyaWJMb2NhdGlvbixcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLFxuICAgICAgICA0LFxuICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgIGdsLkRZTkFNSUNfRFJBVyxcbiAgICAgICAgMVxuICAgICkpXG4gICAgdmJvLnNldCgnc2l6ZXMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgc2l6ZXNBdHRyaWJMb2NhdGlvbixcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShzaXplcyksXG4gICAgICAgIDEsXG4gICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgZ2wuRFlOQU1JQ19EUkFXLFxuICAgICAgICAxXG4gICAgKSlcblxuICAgIGF3YWl0IGRyYXcoKVxufSlcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQW1CLE1BQU0sZUFBQyxDQUFDLEFBQ3pCLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxDQUFDLENBQ04sSUFBSSxDQUFFLENBQUMsQ0FDUCxLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osT0FBTyxDQUFFLElBQUksQUFBRSxDQUFDIn0= */";
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(canvas_1, "class", "svelte-1srdvqe");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(canvas_1, file, 10, 0, 188);
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
let numVerticesPerCircle = 36
let desiredPrimitiveCount = movingBackgroundOptions.count
let particleSize = movingBackgroundOptions.particleSize
let initFunc = movingBackgroundOptions.init
let updateFunc = movingBackgroundOptions.update

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


let velocities = []
const getTime = () => {
    return (new Date().getTime() - startTime) / 1000
}
const updateGPUBuffers = async () => {

    // These are never updated at the moment.
    // gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('vertices'))
    // const verticesLength = vertices.length
    // if (verticesLength >= lastInfo.verticesLength) {
    //     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW)
    //     lastInfo.verticesLength = verticesLength
    // } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('positions'))
    const positionsLength = positions.length
    if (positionsLength >= lastInfo.positionsLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
        lastInfo.positionsLength = positionsLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(positions), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('colors'))
    const colorsLength = colors.length
    if (colorsLength >= lastInfo.colorsLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW)
        lastInfo.colorsLength = colorsLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(colors), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('sizes'))
    const sizesLength = sizes.length
    if (sizesLength >= lastInfo.sizesLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.DYNAMIC_DRAW)
        lastInfo.sizesLength = sizesLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(sizes), 0, 0)
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
}

async function draw() {
    updateValues()

    let pi = 0
    let ci = 0
    for (let i = 0; i < primitiveCount; ++i) {
        const p = updateFunc({
            pos: {x: positions[pi], y: positions[pi+1]},
            vel: {x: velocities[pi], y: velocities[pi+1]},
            size: sizes[i],
            color: {r: colors[ci], g: colors[ci+1], b: colors[ci+2], a: colors[ci+3]}
        })

        positions[pi] = p.pos.x
        positions[pi+1] = p.pos.y

        velocities[pi] = p.vel.x
        velocities[pi+1] = p.vel.y

        sizes[i] = p.size

        colors[ci+0] = p.color.r
        colors[ci+1] = p.color.g
        colors[ci+2] = p.color.b
        colors[ci+3] = p.color.a
        
        pi += 2
        ci += 4
    }


    gl.clearColor(0,0,0, 0.0)
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
        console.log("no webgl2 context found. stopping.")
        return 
    }

    gl.enable(gl.BLEND)
    gl.blendEquation(gl.FUNC_ADD)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    program = gl.createProgram()
    let vs = gl.createShader(gl.VERTEX_SHADER)
    let fs = gl.createShader(gl.FRAGMENT_SHADER)

    let shaderPreamble = `#version 300 es
    precision highp float;
    `

    let vs_src = shaderPreamble + `
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

    let fs_src = shaderPreamble + `
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

    let pi = 0
    let ci = 0
    primitiveCount = desiredPrimitiveCount
    positions.length = 2 * primitiveCount
    velocities.length = 2 * primitiveCount
    sizes.length = primitiveCount
    colors.length = 4*primitiveCount
    for (let i = 0; i < primitiveCount; ++i) {
       const p = initFunc({
            pos: {x: positions[pi], y: positions[pi+1]},
            vel: {x: velocities[pi], y: velocities[pi+1]},
            size: sizes[i],
            color: {r: colors[ci], g: colors[ci+1], b: colors[ci+2], a: colors[ci+3]}
        })

        positions[pi] = p.pos.x
        positions[pi+1] = p.pos.y

        velocities[pi] = p.vel.x
        velocities[pi+1] = p.vel.y

        sizes[i] = p.size

        colors[ci+0] = p.color.r
        colors[ci+1] = p.color.g
        colors[ci+2] = p.color.b
        colors[ci+3] = p.color.a
        
        pi += 2
        ci += 4
    }


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
		return { movingBackgroundOptions, startTime, textColor, backColor, gl, vao, vbo, program, gAttribLocationViewportSize, verticesAttribLocation, positionsAttribLocation, colorsAttribLocation, sizesAttribLocation, canvas, canvasWidth, canvasHeight, bindTo, numVerticesPerCircle, desiredPrimitiveCount, particleSize, initFunc, updateFunc, lastPrimitiveCount, primitiveCount, lastInfo, vertices, positions, colors, sizes, velocities };
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
		if ('initFunc' in $$props) initFunc = $$props.initFunc;
		if ('updateFunc' in $$props) updateFunc = $$props.updateFunc;
		if ('lastPrimitiveCount' in $$props) lastPrimitiveCount = $$props.lastPrimitiveCount;
		if ('primitiveCount' in $$props) primitiveCount = $$props.primitiveCount;
		if ('lastInfo' in $$props) lastInfo = $$props.lastInfo;
		if ('vertices' in $$props) vertices = $$props.vertices;
		if ('positions' in $$props) positions = $$props.positions;
		if ('colors' in $$props) colors = $$props.colors;
		if ('sizes' in $$props) sizes = $$props.sizes;
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
		if (!document.getElementById("svelte-1srdvqe-style")) add_css();
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

/***/ "./src/components/shadertoy.svelte":
/*!*****************************************!*\
  !*** ./src/components/shadertoy.svelte ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utility */ "./src/components/utils/utility.js");
/* harmony import */ var codeflask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codeflask */ "./node_modules/codeflask/build/codeflask.module.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-glsl */ "./node_modules/prismjs/components/prism-glsl.js");
/* harmony import */ var prismjs_components_prism_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* src/components/shadertoy.svelte generated by Svelte v3.12.1 */

const { window: window_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];






const file = "src/components/shadertoy.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-ph5tv9-style';
	style.textContent = "#editor.svelte-ph5tv9{margin:40px;padding:20px;position:relative;color:var(--text);background:rgba(var(--background-base), 0.8);outline:none;z-index:999}#editorToggle.svelte-ph5tv9{background:none;position:absolute;top:50px;left:10px}canvas.svelte-ph5tv9{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-999}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGVydG95LnN2ZWx0ZSIsInNvdXJjZXMiOlsic2hhZGVydG95LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8Y2FudmFzIGJpbmQ6dGhpcz17Y2FudmFzfT48L2NhbnZhcz5cbjxzdmVsdGU6d2luZG93XG4gICAgb246cmVzaXplPXtoYW5kbGVSZXNpemV9XG4gICAgb246bW91c2Vtb3ZlPXtoYW5kbGVNb3VzZX1cbiAgICBvbjptb3VzZWRvd249eygpID0+IHttb3VzZS56ID0gMTsgbW91c2UudyA9IDE7IH19XG4gICAgb246bW91c2V1cD17KCkgPT4ge21vdXNlLnogPSAwOyBtb3VzZS53ID0gMDsgfX1cbiAgICAvPlxuPGJ1dHRvbiBpZD1cImVkaXRvclRvZ2dsZVwiIG9uOmNsaWNrPXsoKT0+IHNob3dFZGl0b3IgPSAhc2hvd0VkaXRvcn0+XG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtdW1icmVsbGEtYmVhY2hcIj48L2k+XG48L2J1dHRvbj5cblxuXG48dGV4dGFyZWEgaWQ9XCJlZGl0b3JcIiBvbjppbnB1dD17KCkgPT4ge1xuICAgIHJlY29tcGlsZVNoYWRlcnMoY29kZSk7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnU2hhZGVyVG95JywgY29kZSk7XG59fSBiaW5kOnZhbHVlPXtjb2RlfSBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIHtzaGFkZXJFcnJvciA/ICdzeXN0ZW1SZWQnIDogJ3N5c3RlbUdyZWVuJ307IGRpc3BsYXk6IHtzaG93RWRpdG9yID8gJ2Jsb2NrJyA6ICdub25lJ31cIj48L3RleHRhcmVhPlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj4jY29kZUFyZWEge1xuICB6LWluZGV4OiA5OTk7IH1cbiAgI2NvZGVBcmVhIC5jb2RlYXJlYSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpLCAwLjgpOyB9XG4gICAgI2NvZGVBcmVhIC5jb2RlYXJlYTo6YmVmb3JlLCAjY29kZUFyZWEgLmNvZGVhcmVhIC5jb2RlZmxhc2tfX2xpbmVzIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1iYXNlKSwgMC44KTsgfVxuXG4jZWRpdG9yIHtcbiAgbWFyZ2luOiA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpLCAwLjgpO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiA5OTk7IH1cblxuI2VkaXRvclRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAxMHB4OyB9XG5cbmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtOTk5OyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNoYWRlcnRveS5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG5pbXBvcnQgeyBnZXRUaW1lIH0gZnJvbSAnLi91dGlscy91dGlsaXR5J1xuaW1wb3J0IENvZGVGbGFzayBmcm9tICdjb2RlZmxhc2snXG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tIFwicHJpc21qc1wiO1xuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIjtcblxubGV0IGZsYXNrXG5sZXQgY29kZVxuXG5sZXQgc2hvd0VkaXRvciA9IGZhbHNlXG5sZXQgc2hhZGVyRXJyb3IgPSBmYWxzZVxuXG5sZXQgc3RhcnRUaW1lID0gMFxubGV0IGdsXG5cbmxldCBwcm9ncmFtXG5sZXQgdnNcbmxldCBmc1xuXG5sZXQgY2FudmFzXG5sZXQgY2FudmFzV2lkdGggPSAzMDBcbmxldCBjYW52YXNIZWlnaHQgPSAzMDBcblxubGV0IHVuaWZvcm1zID0gbmV3IE1hcCgpO1xuXG5sZXQgaUZvcmVncm91bmRcbmxldCBpQmFja2dyb3VuZFxubGV0IGlSZXNvbHV0aW9uXG5sZXQgaVRpbWVcbmxldCBpVGltZURlbHRhXG5sZXQgaU1vdXNlXG5cbmxldCBtb3VzZSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMCxcbiAgICB3OiAwXG59XG5cbmNvbnN0IHNoYWRlclByZWFtYmxlID0gYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG51bmlmb3JtIHZlYzMgICAgICBpRm9yZWdyb3VuZDsgICAgICAgICAgIC8vIGZvcmVncm91bmQgY29sb3JcbnVuaWZvcm0gdmVjMyAgICAgIGlCYWNrZ3JvdW5kOyAgICAgICAgICAgLy8gYmFja2dyb3VuZCBjb2xvclxudW5pZm9ybSB2ZWMzICAgICAgaVJlc29sdXRpb247ICAgICAgICAgICAvLyB2aWV3cG9ydCByZXNvbHV0aW9uIChpbiBwaXhlbHMpXG51bmlmb3JtIGZsb2F0ICAgICBpVGltZTsgICAgICAgICAgICAgICAgIC8vIHNoYWRlciBwbGF5YmFjayB0aW1lIChpbiBzZWNvbmRzKVxudW5pZm9ybSBmbG9hdCAgICAgaVRpbWVEZWx0YTsgICAgICAgICAgICAvLyByZW5kZXIgdGltZSAoaW4gc2Vjb25kcylcbnVuaWZvcm0gdmVjNCAgICAgIGlNb3VzZTsgICAgICAgICAgICAgICAgLy8gbW91c2UgcGl4ZWwgY29vcmRzLiB4eTogY3VycmVudCAoaWYgTUxCIGRvd24pLCB6dzogY2xpY2tcbm91dCB2ZWM0ICAgICAgZnJhZ0NvbG9yO1xuYFxuXG5jb25zdCB2c19zcmMgPSBgI3ZlcnNpb24gMzAwIGVzXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuY29uc3QgdmVjMiB2ZXJ0aWNlc1s2XSA9IHZlYzJbNl0oXG4gICAgICAgICB2ZWMyKDEuMCwgIDEuMCksXG4gICAgICAgIHZlYzIoLTEuMCwgIDEuMCksXG4gICAgICAgIHZlYzIoLTEuMCwgLTEuMCksXG4gICAgICAgIHZlYzIoLTEuMCwgLTEuMCksXG4gICAgICAgICB2ZWMyKDEuMCwgLTEuMCksXG4gICAgICAgICB2ZWMyKDEuMCwgIDEuMClcbik7XG52b2lkIG1haW4oKSB7XG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRpY2VzW2dsX1ZlcnRleElEXSwgMC4wLCAxLjApO1xufVxuYFxuZnVuY3Rpb24gY29tcGlsZVNoYWRlcnMoZnNfY29kZSkge1xuICAgIFxuICAgIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcblxuICAgIHZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpXG4gICAgZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKVxuXG4gICAgZ2wuc2hhZGVyU291cmNlKHZzLCB2c19zcmMpXG4gICAgZ2wuc2hhZGVyU291cmNlKGZzLCBzaGFkZXJQcmVhbWJsZSArIGZzX2NvZGUpXG5cbiAgICBnbC5jb21waWxlU2hhZGVyKHZzKVxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHZzLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdFUlJPUiBjb21waWxpbmcgdmVydGV4IHNoYWRlciEnLFxuICAgICAgICAgICAgZ2wuZ2V0U2hhZGVySW5mb0xvZyh2cylcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzaGFkZXJFcnJvciA9IGZhbHNlXG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcylcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIHNoYWRlckVycm9yID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0VSUk9SIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXIhJyxcbiAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2coZnMpXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKVxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcylcblxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gICAgZ2wudmFsaWRhdGVQcm9ncmFtKHByb2dyYW0pXG5cbiAgICB1bmlmb3Jtcy5zZXQoJ2lGb3JlZ3JvdW5kJywgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpRm9yZWdyb3VuZCcpKVxuICAgIHVuaWZvcm1zLnNldCgnaUJhY2tncm91bmQnLCBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lCYWNrZ3JvdW5kJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpUmVzb2x1dGlvbicsIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaVJlc29sdXRpb24nKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lUaW1lJywgICAgICAgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpVGltZScpKVxuICAgIHVuaWZvcm1zLnNldCgnaVRpbWVEZWx0YScsICBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lUaW1lRGVsdGEnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lNb3VzZScsICAgICAgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpTW91c2UnKSlcbn1cblxuZnVuY3Rpb24gcmVjb21waWxlU2hhZGVycyhmc19jb2RlKSB7XG4gICAgXG4gICAgZ2wuZGV0YWNoU2hhZGVyKHByb2dyYW0sIGZzKVxuICAgIFxuICAgIGdsLnNoYWRlclNvdXJjZShmcywgc2hhZGVyUHJlYW1ibGUgKyBmc19jb2RlKVxuICAgIHNoYWRlckVycm9yID0gZmFsc2VcbiAgICBnbC5jb21waWxlU2hhZGVyKGZzKVxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGZzLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgc2hhZGVyRXJyb3IgPSB0cnVlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnRVJST1IgY29tcGlsaW5nIGZyYWdtZW50IHNoYWRlciEnLFxuICAgICAgICAgICAgZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcylcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpXG5cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICAgIGdsLnZhbGlkYXRlUHJvZ3JhbShwcm9ncmFtKVxuXG4gICAgdW5pZm9ybXMuc2V0KCdpRm9yZWdyb3VuZCcsIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaUZvcmVncm91bmQnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lCYWNrZ3JvdW5kJywgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpQmFja2dyb3VuZCcpKVxuICAgIHVuaWZvcm1zLnNldCgnaVJlc29sdXRpb24nLCBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lSZXNvbHV0aW9uJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpVGltZScsICAgICAgIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaVRpbWUnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lUaW1lRGVsdGEnLCAgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpVGltZURlbHRhJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpTW91c2UnLCAgICAgIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaU1vdXNlJykpXG59XG5cbm9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIC8vIGZsYXNrID0gbmV3IENvZGVGbGFzaygnI2NvZGVBcmVhJywge1xuICAgIC8vICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAvLyAgICAgbGFuZ3VhZ2U6ICdjbGlrZSdcbiAgICAvLyB9KTtcblxuICAgIC8vIGZsYXNrLmFkZExhbmd1YWdlKFwiZ2xzbFwiLCBQcmlzbS5sYW5ndWFnZXMuZ2xzbCk7XG5cbiAgICAvLyBmbGFzay5vblVwZGF0ZShjID0+IHtcbiAgICAvLyAgICAgcmVjb21waWxlU2hhZGVycyhjKTtcbiAgICAvLyAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnU2hhZGVyVG95JywgYyk7XG4gICAgLy8gfSlcblxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIilcblxuICAgIGlmICghZ2wpICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gd2ViZ2wyIGNvbnRleHQgZm91bmQuIHN0b3BwaW5nLlwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpXG4gICAgZ2wuYmxlbmRFcXVhdGlvbihnbC5GVU5DX0FERClcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxuXG4gICAgdXBkYXRlVmFsdWVzKClcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxuXG4gICAgY29kZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1NoYWRlclRveScpXG4gICAgaWYgKCFjb2RlKSB7XG4gICAgICAgIGNvZGUgPSBgZmxvYXQgaGVhcnQodmVjMiB1diwgdmVjMiBwLCBmbG9hdCByKSB7XG4gICAgcmV0dXJuIHNtb290aHN0ZXAociwgci0wLjAwMSwgbGVuZ3RoKHV2LXApKTtcbn1cbnZvaWQgbWFpbigpIHtcbiAgICB2ZWMyIHV2ID0gKGdsX0ZyYWdDb29yZC54eS1pUmVzb2x1dGlvbi54eSouNSkgLyBpUmVzb2x1dGlvbi55O1xuICAgIHZlYzMgY29sID0gdmVjMygwKTtcbiAgICBmbG9hdCByID0gMC4xO1xuICAgIHV2LnggKj0gMC43O1xuICAgIGZsb2F0IGJlYXRzID0gaVRpbWUqMy4wO1xuICAgIGZsb2F0IHNpemUgPSAgMC45O1xuICAgIHV2LnggLz0gbWF4KGFicyhzaW4oYmVhdHMpKSwgc2l6ZSk7XG4gICAgdXYueSAvPSBtYXgoYWJzKHNpbihiZWF0cykpLCBzaXplKTtcbiAgICB1di55IC09IHNxcnQoYWJzKHNpbih1di54KnIpKSk7XG4gICAgdmVjMiBwb3MgPSB2ZWMyKDApO1xuICAgIGZsb2F0IGMgPSBoZWFydCh1diwgcG9zLCByKTtcbiAgICBjb2wgPSBjICogdmVjMygxLC4zLC4zKTtcbiAgICBmcmFnQ29sb3IgPSB2ZWM0KGNvbCwgY29sLngpO1xufVxuYFxuICAgIH1cbiAgICAvLyBmbGFzay51cGRhdGVDb2RlKGNvZGUpO1xuICAgIGNvbXBpbGVTaGFkZXJzKGNvZGUpXG5cbiAgICBzdGFydFRpbWUgPSBnZXRUaW1lKClcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSlcblxuICAgIGF3YWl0IGRyYXcoKVxufSlcblxuY29uc3Qgbm9ybWFsaXplID0gcmdiYSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcmdiYS5yIC8gMjU1LFxuICAgICAgICBnOiByZ2JhLmcgLyAyNTUsXG4gICAgICAgIGI6IHJnYmEuYiAvIDI1NSxcbiAgICAgICAgYTogcmdiYS5hIHx8IHJnYmEuYSAvIDI1NSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyAoKSB7XG4gICAgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgdmFyIGRlc2lyZWRDU1NXaWR0aCA9IGNhbnZhc1dpZHRoXG4gICAgdmFyIGRlc2lyZWRDU1NIZWlnaHQgPSBjYW52YXNIZWlnaHRcbiAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG4gICAgY2FudmFzLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICogZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkZXNpcmVkQ1NTSGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpb1xuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gZGVzaXJlZENTU1dpZHRoICsgJ3B4J1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBkZXNpcmVkQ1NTSGVpZ2h0ICsgJ3B4J1xuXG4gICAgY2FudmFzV2lkdGggKj0gZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNhbnZhc0hlaWdodCAqPSBkZXZpY2VQaXhlbFJhdGlvXG5cbiAgICBpRm9yZWdyb3VuZCA9IG5vcm1hbGl6ZSh3aW5kb3cuY29sb3IudGV4dClcbiAgICBpQmFja2dyb3VuZCA9IG5vcm1hbGl6ZSh3aW5kb3cuY29sb3IuYmFja2dyb3VuZClcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzaXplKGUpIHtcbiAgICB1cGRhdGVWYWx1ZXMoKVxuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpXG59XG5mdW5jdGlvbiBoYW5kbGVNb3VzZShlKSB7XG4gICAgY29uc3QgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgIG1vdXNlLnggPSBlLmNsaWVudFggKiBkcGlcbiAgICBtb3VzZS55ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGUuY2xpZW50WSkgKiBkcGlcbn1cblxubGV0IGxhc3RUaW1lID0gMFxuYXN5bmMgZnVuY3Rpb24gZHJhdygpIHtcblxuICAgIHVwZGF0ZVZhbHVlcygpXG5cbiAgICBpUmVzb2x1dGlvbiA9IHt4OiBjYW52YXNXaWR0aCwgeTogY2FudmFzSGVpZ2h0fVxuICAgIGlUaW1lRGVsdGEgPSBnZXRUaW1lKCkgLSBsYXN0VGltZVxuICAgIGlUaW1lID0gZ2V0VGltZSgpIC0gc3RhcnRUaW1lXG4gICAgaU1vdXNlID0gbW91c2VcblxuICAgIGxhc3RUaW1lID0gaVRpbWVEZWx0YVxuXG4gICAgZ2wudW5pZm9ybTNmKHVuaWZvcm1zLmdldCgnaUZvcmVncm91bmQnKSwgaUZvcmVncm91bmQuciwgaUZvcmVncm91bmQuZywgaUZvcmVncm91bmQuYilcbiAgICBnbC51bmlmb3JtM2YodW5pZm9ybXMuZ2V0KCdpQmFja2dyb3VuZCcpLCBpQmFja2dyb3VuZC5yLCBpQmFja2dyb3VuZC5nLCBpQmFja2dyb3VuZC5iKVxuICAgIGdsLnVuaWZvcm0zZih1bmlmb3Jtcy5nZXQoJ2lSZXNvbHV0aW9uJyksIGlSZXNvbHV0aW9uLngsIGlSZXNvbHV0aW9uLnksIDApXG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLmdldCgnaVRpbWUnKSwgaVRpbWUpXG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLmdldCgnaVRpbWVEZWx0YScpLCBpVGltZURlbHRhKVxuICAgIGdsLnVuaWZvcm00Zih1bmlmb3Jtcy5nZXQoJ2lNb3VzZScpLCBpTW91c2UueCwgaU1vdXNlLnksIGlNb3VzZS56LCBpTW91c2UudylcblxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2KVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXdhaXQgZHJhdylcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQSxPQUFPLGNBQUMsQ0FBQyxBQUNQLE1BQU0sQ0FBRSxJQUFJLENBQ1osT0FBTyxDQUFFLElBQUksQ0FDYixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxNQUFNLENBQUMsQ0FDbEIsVUFBVSxDQUFFLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQzdDLE9BQU8sQ0FBRSxJQUFJLENBQ2IsT0FBTyxDQUFFLEdBQUcsQUFBRSxDQUFDLEFBRWpCLGFBQWEsY0FBQyxDQUFDLEFBQ2IsVUFBVSxDQUFFLElBQUksQ0FDaEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLElBQUksQ0FDVCxJQUFJLENBQUUsSUFBSSxBQUFFLENBQUMsQUFFZixNQUFNLGNBQUMsQ0FBQyxBQUNOLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxDQUFDLENBQ04sSUFBSSxDQUFFLENBQUMsQ0FDUCxLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osT0FBTyxDQUFFLElBQUksQUFBRSxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	var canvas_1, t0, button, i, t1, textarea, dispose;

	const block = {
		c: function create() {
			canvas_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("canvas");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			textarea = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("textarea");
			this.h()
		},

		l: function claim(nodes) {
			canvas_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "CANVAS", { class: true }, false);
			var canvas_1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(canvas_1);

			canvas_1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { id: true, class: true }, false);
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);

			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			textarea = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "TEXTAREA", { id: true, style: true, class: true }, false);
			var textarea_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(textarea);

			textarea_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(canvas_1, "class", "svelte-ph5tv9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(canvas_1, file, 0, 0, 0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i, "class", "fas fa-umbrella-beach");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 8, 4, 297);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "id", "editorToggle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "svelte-ph5tv9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 7, 0, 225);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(textarea, "id", "editor");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(textarea, "border", "1px solid " + (ctx.shaderError ? 'systemRed' : 'systemGreen'));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(textarea, "display", (ctx.showEditor ? 'block' : 'none'));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(textarea, "class", "svelte-ph5tv9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(textarea, file, 12, 0, 347);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(window_1, "resize", ctx.handleResize),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(window_1, "mousemove", ctx.handleMouse),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(window_1, "mousedown", ctx.mousedown_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(window_1, "mouseup", ctx.mouseup_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", ctx.click_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(textarea, "input", ctx.textarea_input_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(textarea, "input", ctx.input_handler)
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, canvas_1, anchor);
			ctx.canvas_1_binding(canvas_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, textarea, anchor);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(textarea, ctx.code);
		},

		p: function update(changed, ctx) {
			if (changed.code) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(textarea, ctx.code);

			if (changed.shaderError) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(textarea, "border", "1px solid " + (ctx.shaderError ? 'systemRed' : 'systemGreen'));
			}

			if (changed.showEditor) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(textarea, "display", (ctx.showEditor ? 'block' : 'none'));
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(canvas_1);
			}

			ctx.canvas_1_binding(null);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(textarea);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

let flask
let code

let showEditor = false
let shaderError = false

let startTime = 0
let gl

let program
let vs
let fs

let canvas
let canvasWidth = 300
let canvasHeight = 300

let uniforms = new Map();

let iForeground
let iBackground
let iResolution
let iTime
let iTimeDelta
let iMouse

let mouse = {
    x: 0,
    y: 0,
    z: 0,
    w: 0
}

const shaderPreamble = `#version 300 es
precision mediump float;
uniform vec3      iForeground;           // foreground color
uniform vec3      iBackground;           // background color
uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
out vec4      fragColor;
`

const vs_src = `#version 300 es
precision mediump float;

const vec2 vertices[6] = vec2[6](
         vec2(1.0,  1.0),
        vec2(-1.0,  1.0),
        vec2(-1.0, -1.0),
        vec2(-1.0, -1.0),
         vec2(1.0, -1.0),
         vec2(1.0,  1.0)
);
void main() {
    gl_Position = vec4(vertices[gl_VertexID], 0.0, 1.0);
}
`
function compileShaders(fs_code) {
    
    program = gl.createProgram()

    vs = gl.createShader(gl.VERTEX_SHADER)
    fs = gl.createShader(gl.FRAGMENT_SHADER)

    gl.shaderSource(vs, vs_src)
    gl.shaderSource(fs, shaderPreamble + fs_code)

    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(
            'ERROR compiling vertex shader!',
            gl.getShaderInfoLog(vs)
        )
        return
    }

    $$invalidate('shaderError', shaderError = false)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        $$invalidate('shaderError', shaderError = true)
        console.error(
            'ERROR compiling fragment shader!',
            gl.getShaderInfoLog(fs)
        )
        return
    }

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)

    gl.linkProgram(program)
    gl.validateProgram(program)

    uniforms.set('iForeground', gl.getUniformLocation(program, 'iForeground'))
    uniforms.set('iBackground', gl.getUniformLocation(program, 'iBackground'))
    uniforms.set('iResolution', gl.getUniformLocation(program, 'iResolution'))
    uniforms.set('iTime',       gl.getUniformLocation(program, 'iTime'))
    uniforms.set('iTimeDelta',  gl.getUniformLocation(program, 'iTimeDelta'))
    uniforms.set('iMouse',      gl.getUniformLocation(program, 'iMouse'))
}

function recompileShaders(fs_code) {
    
    gl.detachShader(program, fs)
    
    gl.shaderSource(fs, shaderPreamble + fs_code)
    $$invalidate('shaderError', shaderError = false)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        $$invalidate('shaderError', shaderError = true)
        console.error(
            'ERROR compiling fragment shader!',
            gl.getShaderInfoLog(fs)
        )
        return
    }

    gl.attachShader(program, fs)

    gl.linkProgram(program)
    gl.validateProgram(program)

    uniforms.set('iForeground', gl.getUniformLocation(program, 'iForeground'))
    uniforms.set('iBackground', gl.getUniformLocation(program, 'iBackground'))
    uniforms.set('iResolution', gl.getUniformLocation(program, 'iResolution'))
    uniforms.set('iTime',       gl.getUniformLocation(program, 'iTime'))
    uniforms.set('iTimeDelta',  gl.getUniformLocation(program, 'iTimeDelta'))
    uniforms.set('iMouse',      gl.getUniformLocation(program, 'iMouse'))
}

Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(async () => {
    // flask = new CodeFlask('#codeArea', {
    //     lineNumbers: true,
    //     language: 'clike'
    // });

    // flask.addLanguage("glsl", Prism.languages.glsl);

    // flask.onUpdate(c => {
    //     recompileShaders(c);
    //     sessionStorage.setItem('ShaderToy', c);
    // })

    gl = canvas.getContext("webgl2")

    if (!gl)  {
        console.log("no webgl2 context found. stopping.")
        return
    }

    gl.enable(gl.BLEND)
    gl.blendEquation(gl.FUNC_ADD)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    updateValues()
    gl.viewport(0, 0, canvasWidth, canvasHeight)

    $$invalidate('code', code = sessionStorage.getItem('ShaderToy'))
    if (!code) {
        $$invalidate('code', code = `float heart(vec2 uv, vec2 p, float r) {
    return smoothstep(r, r-0.001, length(uv-p));
}
void main() {
    vec2 uv = (gl_FragCoord.xy-iResolution.xy*.5) / iResolution.y;
    vec3 col = vec3(0);
    float r = 0.1;
    uv.x *= 0.7;
    float beats = iTime*3.0;
    float size =  0.9;
    uv.x /= max(abs(sin(beats)), size);
    uv.y /= max(abs(sin(beats)), size);
    uv.y -= sqrt(abs(sin(uv.x*r)));
    vec2 pos = vec2(0);
    float c = heart(uv, pos, r);
    col = c * vec3(1,.3,.3);
    fragColor = vec4(col, col.x);
}
`)
    }
    // flask.updateCode(code);
    compileShaders(code)

    startTime = Object(_utils_utility__WEBPACK_IMPORTED_MODULE_2__["getTime"])()

    gl.useProgram(program)

    await draw()
})

const normalize = rgba => {
    return {
        r: rgba.r / 255,
        g: rgba.g / 255,
        b: rgba.b / 255,
        a: rgba.a || rgba.a / 255,
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

    iForeground = normalize(window.color.text)
    iBackground = normalize(window.color.background)
}

function handleResize(e) {
    updateValues()
    gl.viewport(0, 0, canvasWidth, canvasHeight)
}
function handleMouse(e) {
    const dpi = window.devicePixelRatio || 1
    $$invalidate('mouse', mouse.x = e.clientX * dpi, mouse)
    $$invalidate('mouse', mouse.y = (window.innerHeight - e.clientY) * dpi, mouse)
}

let lastTime = 0
async function draw() {

    updateValues()

    iResolution = {x: canvasWidth, y: canvasHeight}
    iTimeDelta = Object(_utils_utility__WEBPACK_IMPORTED_MODULE_2__["getTime"])() - lastTime
    iTime = Object(_utils_utility__WEBPACK_IMPORTED_MODULE_2__["getTime"])() - startTime
    iMouse = mouse

    lastTime = iTimeDelta

    gl.uniform3f(uniforms.get('iForeground'), iForeground.r, iForeground.g, iForeground.b)
    gl.uniform3f(uniforms.get('iBackground'), iBackground.r, iBackground.g, iBackground.b)
    gl.uniform3f(uniforms.get('iResolution'), iResolution.x, iResolution.y, 0)
    gl.uniform1f(uniforms.get('iTime'), iTime)
    gl.uniform1f(uniforms.get('iTimeDelta'), iTimeDelta)
    gl.uniform4f(uniforms.get('iMouse'), iMouse.x, iMouse.y, iMouse.z, iMouse.w)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    window.requestAnimationFrame(await draw)
}

	const mousedown_handler = () => {$$invalidate('mouse', mouse.z = 1, mouse); $$invalidate('mouse', mouse.w = 1, mouse); };

	const mouseup_handler = () => {$$invalidate('mouse', mouse.z = 0, mouse); $$invalidate('mouse', mouse.w = 0, mouse); };

	function canvas_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			$$invalidate('canvas', canvas = $$value);
		});
	}

	const click_handler = () => $$invalidate('showEditor', showEditor = !showEditor);

	function textarea_input_handler() {
		code = this.value;
		$$invalidate('code', code);
	}

	const input_handler = () => {
	    recompileShaders(code);
	    sessionStorage.setItem('ShaderToy', code);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ('flask' in $$props) flask = $$props.flask;
		if ('code' in $$props) $$invalidate('code', code = $$props.code);
		if ('showEditor' in $$props) $$invalidate('showEditor', showEditor = $$props.showEditor);
		if ('shaderError' in $$props) $$invalidate('shaderError', shaderError = $$props.shaderError);
		if ('startTime' in $$props) startTime = $$props.startTime;
		if ('gl' in $$props) gl = $$props.gl;
		if ('program' in $$props) program = $$props.program;
		if ('vs' in $$props) vs = $$props.vs;
		if ('fs' in $$props) fs = $$props.fs;
		if ('canvas' in $$props) $$invalidate('canvas', canvas = $$props.canvas);
		if ('canvasWidth' in $$props) canvasWidth = $$props.canvasWidth;
		if ('canvasHeight' in $$props) canvasHeight = $$props.canvasHeight;
		if ('uniforms' in $$props) uniforms = $$props.uniforms;
		if ('iForeground' in $$props) iForeground = $$props.iForeground;
		if ('iBackground' in $$props) iBackground = $$props.iBackground;
		if ('iResolution' in $$props) iResolution = $$props.iResolution;
		if ('iTime' in $$props) iTime = $$props.iTime;
		if ('iTimeDelta' in $$props) iTimeDelta = $$props.iTimeDelta;
		if ('iMouse' in $$props) iMouse = $$props.iMouse;
		if ('mouse' in $$props) $$invalidate('mouse', mouse = $$props.mouse);
		if ('lastTime' in $$props) lastTime = $$props.lastTime;
	};

	return {
		code,
		showEditor,
		shaderError,
		canvas,
		mouse,
		recompileShaders,
		handleResize,
		handleMouse,
		sessionStorage,
		mousedown_handler,
		mouseup_handler,
		canvas_1_binding,
		click_handler,
		textarea_input_handler,
		input_handler
	};
}

class Shadertoy extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-ph5tv9-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Shadertoy", options, id: create_fragment.name });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Shadertoy);

/***/ }),

/***/ "./src/components/spices.svelte":
/*!**************************************!*\
  !*** ./src/components/spices.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/components/spices.svelte generated by Svelte v3.12.1 */

const { document: document_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];


const file = "src/components/spices.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-wivk4j-style';
	style.textContent = "button.svelte-wivk4j{background:none;font-size:20px}#darkModeToggle.svelte-wivk4j{position:absolute;top:10px;left:20px}#retroToggle.svelte-wivk4j{position:absolute;top:10px;right:20px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BpY2VzLnN2ZWx0ZSIsInNvdXJjZXMiOlsic3BpY2VzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJjb2ZmZWVcIj52YXIgdGhlbWUsIHRoZW1lU3R5bGUsIHRoZW1lU3R5bGVzLCB0aGVtZXMsIHRvZ2dsZVRoZW1lLCB0b2dnbGVUaGVtZVN0eWxlO1xuXG5pbXBvcnQge1xuICBvbk1vdW50XG59IGZyb20gJ3N2ZWx0ZSc7XG5cbnRoZW1lID0gJyc7XG5cbnRoZW1lU3R5bGUgPSAnJztcblxudGhlbWVzID0gWydsaWdodCcsICdkYXJrJ107XG5cbnRoZW1lU3R5bGVzID0gWydtb2Rlcm4nLCAncmV0cm8nXTtcblxub25Nb3VudCgoKSA9PiB7XG4gIHZhciBsYXN0VGhlbWVTdHlsZVVzZWQsIGxhc3RUaGVtZVVzZWQ7XG4gIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICByZXR1cm4gdGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfSk7XG4gIC8vIFJlc3RvcmUgdGhlIGxhc3QgdXNlZCB0aGVtZSBmcm9tIHRoZSBzZXNzaW9uU3RvcmFnZS5cbiAgLy8gVGhpcyB3aWxsIG1haW50YWluIHRoZSBjaG9zZW4gdGhlbWUgd2hlbiB0aGUgdXNlciByZWxvYWRzIHRoZSBwYWdlLlxuICBsYXN0VGhlbWVVc2VkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgaWYgKGxhc3RUaGVtZVVzZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZScsIGxhc3RUaGVtZVVzZWQpO1xuICAgIHRoZW1lID0gbGFzdFRoZW1lVXNlZDtcbiAgfVxuICBsYXN0VGhlbWVTdHlsZVVzZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0aGVtZS1zdHlsZScpO1xuICBpZiAobGFzdFRoZW1lU3R5bGVVc2VkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnLCBsYXN0VGhlbWVTdHlsZVVzZWQpO1xuICAgIHRoZW1lU3R5bGUgPSBsYXN0VGhlbWVTdHlsZVVzZWQ7XG4gIH1cbiAgdGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZScpO1xuICByZXR1cm4gdGhlbWVTdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lLXN0eWxlJyk7XG59KTtcblxudG9nZ2xlVGhlbWVTdHlsZSA9ICgpID0+IHtcbiAgdmFyIGFjdGl2ZVRoZW1lU3R5bGUsIGksIG5leHRUaGVtZVN0eWxlO1xuICBhY3RpdmVUaGVtZVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKTtcbiAgaSA9IHRoZW1lU3R5bGVzLmZpbmRJbmRleCgodCkgPT4ge1xuICAgIHJldHVybiB0ID09PSBhY3RpdmVUaGVtZVN0eWxlO1xuICB9KTtcbiAgbmV4dFRoZW1lU3R5bGUgPSB0aGVtZVN0eWxlc1soaSArIDEpICUgdGhlbWVTdHlsZXMubGVuZ3RoXTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnLCBuZXh0VGhlbWVTdHlsZSk7XG4gIHRoZW1lU3R5bGUgPSBuZXh0VGhlbWVTdHlsZTtcbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLXN0eWxlJywgdGhlbWVTdHlsZSk7XG59O1xuXG50b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgdmFyIGFjdGl2ZVRoZW1lLCBpLCBuZXh0VGhlbWU7XG4gIGFjdGl2ZVRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUnKTtcbiAgaSA9IHRoZW1lcy5maW5kSW5kZXgoKHQpID0+IHtcbiAgICByZXR1cm4gdCA9PT0gYWN0aXZlVGhlbWU7XG4gIH0pO1xuICBuZXh0VGhlbWUgPSB0aGVtZXNbKGkgKyAxKSAlIHRoZW1lcy5sZW5ndGhdO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZScsIG5leHRUaGVtZSk7XG4gIHRoZW1lID0gbmV4dFRoZW1lO1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4jZGFya01vZGVUb2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMjBweDsgfVxuXG4jcmV0cm9Ub2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDIwcHg7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3BpY2VzLnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPGJ1dHRvbiBpZD1cInJldHJvVG9nZ2xlXCIgb246Y2xpY2s9XCJ7dG9nZ2xlVGhlbWVTdHlsZX1cIj48aSBjbGFzcz1cImZhcyBmYS1wZXBwZXItaG90XCI+PC9pPjwvYnV0dG9uPjxidXR0b24gaWQ9XCJkYXJrTW9kZVRvZ2dsZVwiIG9uOmNsaWNrPVwie3RvZ2dsZVRoZW1lfVwiPjxpIGNsYXNzPVwiZmFzIGZhLXt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdzdW4nIDogJ21vb24nIH1cIj48L2k+PC9idXR0b24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERtQixNQUFNLGNBQUMsQ0FBQyxBQUN6QixVQUFVLENBQUUsSUFBSSxDQUNoQixTQUFTLENBQUUsSUFBSSxBQUFFLENBQUMsQUFFcEIsZUFBZSxjQUFDLENBQUMsQUFDZixRQUFRLENBQUUsUUFBUSxDQUNsQixHQUFHLENBQUUsSUFBSSxDQUNULElBQUksQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUVmLFlBQVksY0FBQyxDQUFDLEFBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLElBQUksQ0FDVCxLQUFLLENBQUUsSUFBSSxBQUFFLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document_1.head, style);
}

function create_fragment(ctx) {
	var button0, i0, button1, i1, i1_class_value, dispose;

	const block = {
		c: function create() {
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			this.h()
		},

		l: function claim(nodes) {
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { id: true, class: true }, false);
			var button0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button0);

			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button0_nodes, "I", { class: true }, false);
			var i0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i0);

			i0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);

			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { id: true, class: true }, false);
			var button1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button1);

			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button1_nodes, "I", { class: true }, false);
			var i1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i1);

			i1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i0, "class", "fas fa-pepper-hot");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i0, file, 76, 55, 2265);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "id", "retroToggle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "class", "svelte-wivk4j");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 76, 0, 2210);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i1, "class", i1_class_value = "fas fa-" + (ctx.theme === 'light' ? 'sun' : 'moon'));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i1, file, 76, 150, 2360);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "id", "darkModeToggle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "class", "svelte-wivk4j");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 76, 97, 2307);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button0, "click", ctx.toggleThemeStyle),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button1, "click", ctx.toggleTheme)
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button0, i0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button1, i1);
		},

		p: function update(changed, ctx) {
			if ((changed.theme) && i1_class_value !== (i1_class_value = "fas fa-" + (ctx.theme === 'light' ? 'sun' : 'moon'))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i1, "class", i1_class_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	var theme, themeStyle, themeStyles, themes, toggleTheme, toggleThemeStyle;

$$invalidate('theme', theme = '');

themeStyle = '';

themes = ['light', 'dark'];

themeStyles = ['modern', 'retro'];

Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
  var lastThemeStyleUsed, lastThemeUsed;
  window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
    return $$invalidate('theme', theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  });
  // Restore the last used theme from the sessionStorage.
  // This will maintain the chosen theme when the user reloads the page.
  lastThemeUsed = sessionStorage.getItem('theme');
  if (lastThemeUsed) {
    document.documentElement.setAttribute('theme', lastThemeUsed);
    $$invalidate('theme', theme = lastThemeUsed);
  }
  lastThemeStyleUsed = sessionStorage.getItem('theme-style');
  if (lastThemeStyleUsed) {
    document.documentElement.setAttribute('theme-style', lastThemeStyleUsed);
    themeStyle = lastThemeStyleUsed;
  }
  $$invalidate('theme', theme = document.documentElement.getAttribute('theme'));
  return themeStyle = document.documentElement.getAttribute('theme-style');
});

$$invalidate('toggleThemeStyle', toggleThemeStyle = () => {
  var activeThemeStyle, i, nextThemeStyle;
  activeThemeStyle = document.documentElement.getAttribute('theme-style');
  i = themeStyles.findIndex((t) => {
    return t === activeThemeStyle;
  });
  nextThemeStyle = themeStyles[(i + 1) % themeStyles.length];
  document.documentElement.setAttribute('theme-style', nextThemeStyle);
  themeStyle = nextThemeStyle;
  return sessionStorage.setItem('theme-style', themeStyle);
});

$$invalidate('toggleTheme', toggleTheme = () => {
  var activeTheme, i, nextTheme;
  activeTheme = document.documentElement.getAttribute('theme');
  i = themes.findIndex((t) => {
    return t === activeTheme;
  });
  nextTheme = themes[(i + 1) % themes.length];
  document.documentElement.setAttribute('theme', nextTheme);
  $$invalidate('theme', theme = nextTheme);
  return sessionStorage.setItem('theme', theme);
});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ('theme' in $$props) $$invalidate('theme', theme = $$props.theme);
		if ('themeStyle' in $$props) themeStyle = $$props.themeStyle;
		if ('themeStyles' in $$props) themeStyles = $$props.themeStyles;
		if ('themes' in $$props) themes = $$props.themes;
		if ('toggleTheme' in $$props) $$invalidate('toggleTheme', toggleTheme = $$props.toggleTheme);
		if ('toggleThemeStyle' in $$props) $$invalidate('toggleThemeStyle', toggleThemeStyle = $$props.toggleThemeStyle);
	};

	return { theme, toggleTheme, toggleThemeStyle };
}

class Spices extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document_1.getElementById("svelte-wivk4j-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Spices", options, id: create_fragment.name });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Spices);

/***/ }),

/***/ "./src/components/stores.js":
/*!**********************************!*\
  !*** ./src/components/stores.js ***!
  \**********************************/
/*! exports provided: theme, themeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeStyle", function() { return themeStyle; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const theme = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])('');
const themeStyle = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])('');


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
/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.12.1 */

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
/* src/routes/_error.svelte generated by Svelte v3.12.1 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/_error.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1gozsm8-style';
	style.textContent = "h1.svelte-1gozsm8,p.svelte-1gozsm8{margin:0 auto}h1.svelte-1gozsm8{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1gozsm8{margin:1em auto}@media(min-width: 480px){h1.svelte-1gozsm8{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vycm9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsiX2Vycm9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdHVzXG4gICAgZXhwb3J0IGxldCBlcnJvclxuXG4gICAgY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5oMSwgcCB7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDsgfVxuXG5wIHtcbiAgbWFyZ2luOiAxZW0gYXV0bzsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNGVtOyB9IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPjx0aXRsZT57c3RhdHVzfTwvdGl0bGU+PC9zdmVsdGU6aGVhZD48aDE+e3N0YXR1c308L2gxPjxwPntlcnJvci5tZXNzYWdlfTwvcD57I2lmIGRldiAmJiBlcnJvci5zdGFja308cHJlPntlcnJvci5zdGFja308L3ByZT57L2lmfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQixpQkFBRSxDQUFFLENBQUMsZUFBQyxDQUFDLEFBQ3hCLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxBQUFFLENBQUMsQUFFbkIsRUFBRSxlQUFDLENBQUMsQUFDRixTQUFTLENBQUUsS0FBSyxDQUNoQixXQUFXLENBQUUsR0FBRyxDQUNoQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUFFLENBQUMsQUFFeEIsQ0FBQyxlQUFDLENBQUMsQUFDRCxNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQUFBRSxDQUFDLEFBRXJCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDekIsRUFBRSxlQUFDLENBQUMsQUFDRixTQUFTLENBQUUsR0FBRyxBQUFFLENBQUMsQUFBQyxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

// (25:89) {#if dev && error.stack}
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(pre, file, 24, 113, 493);
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
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(25:89) {#if dev && error.stack}", ctx });
	return block;
}

function create_fragment(ctx) {
	var title_value, h1, t0, p, t1_value = ctx.error.message + "", t1, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.status);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h()
		},

		l: function claim(nodes) {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t1_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-1gozsm8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 24, 50, 430);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "svelte-1gozsm8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 24, 67, 447);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t1);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, ctx.status);
			}

			if ((changed.error) && t1_value !== (t1_value = ctx.error.message + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p);
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
		if (!document.getElementById("svelte-1gozsm8-style")) add_css();
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
/* harmony import */ var _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav.svelte */ "./src/components/Nav.svelte");
/* harmony import */ var _components_spices_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/spices.svelte */ "./src/components/spices.svelte");
/* harmony import */ var _components_moving_background_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/moving-background.svelte */ "./src/components/moving-background.svelte");
/* harmony import */ var _components_shadertoy_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shadertoy.svelte */ "./src/components/shadertoy.svelte");
/* harmony import */ var _components_utils_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utils/utility */ "./src/components/utils/utility.js");
/* harmony import */ var _components_utils_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utils/math */ "./src/components/utils/math.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/routes/_layout.svelte generated by Svelte v3.12.1 */









const file = "src/routes/_layout.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-ajqvg3-style';
	style.textContent = "main.svelte-ajqvg3{margin:0px;width:100%;height:100%;position:relative;padding:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5zdmVsdGUiLCJzb3VyY2VzIjpbIl9sYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSdcbiAgICBpbXBvcnQgU3BpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvc3BpY2VzLnN2ZWx0ZSdcbiAgICBpbXBvcnQgTW92aW5nQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL21vdmluZy1iYWNrZ3JvdW5kLnN2ZWx0ZSdcbiAgICBpbXBvcnQgU2hhZGVyVG95IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhZGVydG95LnN2ZWx0ZSdcbiAgICBpbXBvcnQgeyBnZXRUaW1lLCByYW5kRmxvYXQgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL3V0aWxpdHknXG4gICAgaW1wb3J0IHsgdjIgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL21hdGgnXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcblxuICAgIGV4cG9ydCBsZXQgc2VnbWVudFxuICAgICQ6IHNlZ21lbnQgPSBzZWdtZW50ID09PSB1bmRlZmluZWQgPyAnaG9tZScgOiBzZWdtZW50XG5cbiAgICBsZXQgbW91c2UgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9XG5cbiAgICBjb25zdCBmcyA9IGBcbiAgICBvdXQgdmVjNCBmcmFnO1xuICAgIHZvaWQgbWFpbigpIHtcblxuICAgICAgICB2ZWMyIHV2ID0gZ2xfRnJhZ0Nvb3JkLnh5O1xuXG4gICAgICAgIC8vIENpcmNsZVxuICAgICAgICB2ZWMyIGNlbnRlciA9IGlSZXNvbHV0aW9uLnh5ICogMC41O1xuICAgICAgICBjZW50ZXIueCAqPSBzaW4oaVRpbWUpO1xuICAgICAgICBmbG9hdCByYWRpdXMgPSBpUmVzb2x1dGlvbi55IC8gMi4yNTtcbiAgICAgICAgdmVjMyBjb2xvciA9IHZlYzMoMC4zOCwgMC4xNiwgMC44OSk7XG5cbiAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChjZW50ZXIgLSB1dikgLSByYWRpdXM7XG4gICAgICAgIGZsb2F0IHQgPSBjbGFtcChkLCAwLjAsIDEuMCk7XG5cbiAgICAgICAgdmVjNCBjaXJjbGUgPSB2ZWM0KGNvbG9yLCAxLjAgLSB0KTtcbiAgICAgICAgZnJhZyA9IGNpcmNsZTtcbiAgICB9YFxuXG4gICAgY29uc3QgZ3Jhdml0eSA9IC0wLjk4MVxuXG4gICAgZnVuY3Rpb24gbGVycChwLCB0LCBzKSB7XG4gICAgICAgIHAueCArPSAodC54IC0gcC54KSpzO1xuICAgICAgICBwLnkgKz0gKHQueSAtIHAueSkqcztcbiAgICAgICAgcmV0dXJuIHBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZShlKSB7XG4gICAgICAgIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICAgICAgbW91c2UueCA9IGUuY2xpZW50WCAqIGRwaVxuICAgICAgICBtb3VzZS55ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGUuY2xpZW50WSkgKiBkcGlcbiAgICB9XG5cbiAgICBsZXQgcGFydGljbGVDb3VudCA9IDEwMDBcbiAgICBsZXQgeCA9IDBcbiAgICBsZXQgeSA9IDBcbiAgICBjb25zdCBzcXJ0R3JpZCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KHBhcnRpY2xlQ291bnQpKVxuXG4gICAgY29uc3QgcGFydGljbGVJbml0ID0gKHApID0+IHtcblxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbiAgICAgICAgY29uc3QgY29sID0gKGNhbnZhc1dpZHRoKSAvIHNxcnRHcmlkXG4gICAgICAgIGNvbnN0IHJvdyA9IChjYW52YXNIZWlnaHQpIC8gc3FydEdyaWRcblxuICAgICAgICBwLnBvcy54ID0geFxuICAgICAgICBwLnBvcy55ID0geVxuXG4gICAgICAgIHAuY29sb3IuciA9IHJhbmRGbG9hdCgwLDEpXG4gICAgICAgIHAuY29sb3IuZyA9IHJhbmRGbG9hdCgwLDEpXG4gICAgICAgIHAuY29sb3IuYiA9IHJhbmRGbG9hdCgwLDEpXG4gICAgICAgIHAuY29sb3IuYSA9IDFcblxuICAgICAgICB4ICs9IGNvbFxuICAgICAgICBpZiAoeCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICB5ICs9IHJvd1xuICAgICAgICAgICAgeCA9IGNvbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWNsZVVwZGF0ZSA9IChwKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG4gICAgICAgIHAuY29sb3IuYSA9IDFcbiAgICAgICAgcC5zaXplID0gTWF0aC5taW4odjIuZGlzdGFuY2UocC5wb3MsIG1vdXNlKSowLjAwMSpNYXRoLmFicyhNYXRoLnNpbihnZXRUaW1lKCkpKSwgc3FydEdyaWQpXG5cbiAgICAgICAgcmV0dXJuIHBcbiAgICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5tYWluIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1fbGF5b3V0LnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPCEtLSBTaGFkZXJUb3kgLS0+XG48IS0tIE5hdihzZWdtZW50PSd7c2VnbWVudH0nKSAtLT48bWFpbj48c2xvdD48L3Nsb3Q+PC9tYWluPjwhLS0gU3BpY2VzIC0tPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGbUIsSUFBSSxjQUFDLENBQUMsQUFDdkIsTUFBTSxDQUFFLEdBQUcsQ0FDWCxLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLENBQUMsQUFBRSxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	var main, current;

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	const block = {
		c: function create() {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");

			if (default_slot) default_slot.c();
			this.h()
		},

		l: function claim(nodes) {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", { class: true }, false);
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(main, "class", "svelte-ajqvg3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 104, 33, 2553);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(main);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

let particleCount = 1000

function lerp(p, t, s) {
      p.x += (t.x - p.x)*s;
      p.y += (t.y - p.y)*s;
      return p
  }

function instance($$self, $$props, $$invalidate) {
	

    let { segment } = $$props;

    let mouse = {
        x: 0,
        y: 0
    }

    const fs = `
    out vec4 frag;
    void main() {

        vec2 uv = gl_FragCoord.xy;

        // Circle
        vec2 center = iResolution.xy * 0.5;
        center.x *= sin(iTime);
        float radius = iResolution.y / 2.25;
        vec3 color = vec3(0.38, 0.16, 0.89);

        float d = length(center - uv) - radius;
        float t = clamp(d, 0.0, 1.0);

        vec4 circle = vec4(color, 1.0 - t);
        frag = circle;
    }`

    const gravity = -0.981

    function handleMouse(e) {
        const dpi = window.devicePixelRatio || 1
        mouse.x = e.clientX * dpi
        mouse.y = (window.innerHeight - e.clientY) * dpi
    }
    let x = 0
    let y = 0
    const sqrtGrid = Math.floor(Math.sqrt(particleCount))

    const particleInit = (p) => {

        const canvasWidth = window.innerWidth * window.devicePixelRatio || 1
        const canvasHeight = window.innerHeight * window.devicePixelRatio || 1

        const col = (canvasWidth) / sqrtGrid
        const row = (canvasHeight) / sqrtGrid

        p.pos.x = x
        p.pos.y = y

        p.color.r = Object(_components_utils_utility__WEBPACK_IMPORTED_MODULE_5__["randFloat"])(0,1)
        p.color.g = Object(_components_utils_utility__WEBPACK_IMPORTED_MODULE_5__["randFloat"])(0,1)
        p.color.b = Object(_components_utils_utility__WEBPACK_IMPORTED_MODULE_5__["randFloat"])(0,1)
        p.color.a = 1

        x += col
        if (x > canvasWidth) {
            y += row
            x = col
        }

        return p
    }

    const particleUpdate = (p) => {

        const canvasWidth = window.innerWidth * window.devicePixelRatio || 1
        const canvasHeight = window.innerHeight * window.devicePixelRatio || 1

        p.color.a = 1
        p.size = Math.min(_components_utils_math__WEBPACK_IMPORTED_MODULE_6__["v2"].distance(p.pos, mouse)*0.001*Math.abs(Math.sin(Object(_components_utils_utility__WEBPACK_IMPORTED_MODULE_5__["getTime"])())), sqrtGrid)

        return p
    }

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
		return { segment, mouse, particleCount, x, y };
	};

	$$self.$inject_state = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
		if ('mouse' in $$props) mouse = $$props.mouse;
		if ('particleCount' in $$props) particleCount = $$props.particleCount;
		if ('x' in $$props) x = $$props.x;
		if ('y' in $$props) y = $$props.y;
	};

	$$self.$$.update = ($$dirty = { segment: 1 }) => {
		if ($$dirty.segment) { $$invalidate('segment', segment = segment === undefined ? 'home' : segment) }
	};

	return { segment, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-ajqvg3-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvZGVmbGFzay9idWlsZC9jb2RlZmxhc2subW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wcmlzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aW5nLWJhY2tncm91bmQuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYWRlcnRveS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3BpY2VzLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvbWF0NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvdjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Fzcz9jNjIwIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9hcHAubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9BcHAuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1jbGllbnQubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIiwid2VicGFjazovLy8uL3N0YXRpYy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmIiwid2VicGFjazovLy8uL3N0YXRpYy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLHdFQUF3RSw4Q0FBOEM7UUFDdEg7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QixrQ0FBa0M7UUFDMUQsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTyxRQUFRO0FBQy9CLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsaUJBQWlCLE9BQU8sT0FBTztBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGdCQUFnQixRQUFRLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsRUFBRSxVQUFVLEVBQUU7QUFDN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWE7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbjJCQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZTtBQUN6QyxZQUFZLG1CQUFPLENBQUMsc0RBQVM7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDN0VBLGtCQUFrQixtQkFBTyxDQUFDLGtFQUFlOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUUsa0NBQWtDLEVBQUU7O0FBRXpHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqZUEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDJHQUFtRDtBQUN4RSxzQ0FBc0MsbUJBQU8sQ0FBQyx1RkFBeUM7QUFDdkYsc0NBQXNDLG1CQUFPLENBQUMscUZBQXdDO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixjQUFjLDBDQUEwQyx5SEFBeUgsd0JBQXdCLHVCQUF1QixFQUFFLFVBQVUsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsa0NBQWtDLGtDQUFrQyxrQ0FBa0MsMkJBQTJCLHFEQUFxRCxzREFBc0Qsd0RBQXdELHFEQUFxRCx3Q0FBd0MsMENBQTBDLHdDQUF3Qyx3Q0FBd0Msd0NBQXdDLHdDQUF3Qyx5Q0FBeUMsd0NBQXdDLHlDQUF5Qyx3Q0FBd0MseUNBQXlDLDBDQUEwQyx3Q0FBd0Msd0NBQXdDLHlDQUF5Qyx3Q0FBd0MseUNBQXlDLHdDQUF3QywwQ0FBMEMseUNBQXlDLHVCQUF1QixxQ0FBcUMsNkJBQTZCLGtEQUFrRCxlQUFlLCtCQUErQiwwQkFBMEIsRUFBRSwrQkFBK0IsNkJBQTZCLHVDQUF1QywyQkFBMkIsRUFBRSxnQ0FBZ0MsOEJBQThCLDRCQUE0QixnTEFBZ0wsRUFBRSwyQkFBMkIsNENBQTRDLDRDQUE0Qyw0Q0FBNEMsMkNBQTJDLDJDQUEyQyw0Q0FBNEMsNkNBQTZDLDZDQUE2QywyQ0FBMkMsNkNBQTZDLDBDQUEwQywyQ0FBMkMsNkNBQTZDLDBDQUEwQyxFQUFFLGdEQUFnRCx5REFBeUQsK0RBQStELEVBQUUsaURBQWlELDRCQUE0QixxQ0FBcUMsMkJBQTJCLDJCQUEyQiwyQkFBMkIsRUFBRSx3QkFBd0IsMkNBQTJDLDJDQUEyQywyQ0FBMkMsMENBQTBDLDBDQUEwQywyQ0FBMkMsNENBQTRDLDRDQUE0QywwQ0FBMEMsNENBQTRDLHlDQUF5QywwQ0FBMEMsNENBQTRDLHVDQUF1QyxFQUFFLDZDQUE2Qyx1REFBdUQsNkRBQTZELEVBQUUsOENBQThDLCtCQUErQiwrQkFBK0IsMkJBQTJCLDJCQUEyQiwyQkFBMkIsRUFBRSx3QkFBd0IsdUJBQXVCLHFCQUFxQixtQkFBbUIsNkJBQTZCLHVCQUF1QixrQ0FBa0MsRUFBRSxpQkFBaUIsd0NBQXdDLHlEQUF5RCxFQUFFLFlBQVksaUJBQWlCLHVDQUF1QyxFQUFFLGtCQUFrQix1Q0FBdUMsRUFBRSxrQkFBa0IsaUJBQWlCLEVBQUUsU0FBUyxxQkFBcUIsd0JBQXdCLEVBQUUsWUFBWSx1Q0FBdUMsRUFBRSxPQUFPLHVCQUF1QixpQkFBaUIsMEJBQTBCLDZCQUE2QixFQUFFLGFBQWEsbUJBQW1CLHlCQUF5QixFQUFFLFFBQVEsOENBQThDLHdCQUF3QixtQkFBbUIscUJBQXFCLGVBQWUsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFVBQVUsdUJBQXVCLDZCQUE2QixFQUFFLFFBQVEsK0JBQStCLEVBQUUsUUFBUSxnQkFBZ0IscUJBQXFCLHdCQUF3QiwwQkFBMEIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ05ubUs7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixZQUFZOztBQUVaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7Ozs7Ozs7Ozs7Ozs7QUNBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQ0FBa0MscUNBQXFDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QyxvQkFBb0IsNkNBQTZDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9CQUFvQixRQUFRLFNBQVMsY0FBYyxhQUFhLGtCQUFrQixzQkFBc0IsYUFBYTtBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLGtDQUFrQyxFQUFFLGNBQWM7QUFDbEQ7QUFDQSxvQ0FBb0MsRUFBRSxjQUFjLEdBQUc7QUFDdkQsNkJBQTZCLFdBQVcsR0FBRyxJQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUssR0FBRyxLQUFLO0FBQ3pEO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZSxVQUFVLFNBQVMsRUFBRSxLQUFLLEdBQUcsU0FBUyxZQUFZLE1BQU07QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFhLFdBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsYUFBYSxnQkFBZ0IsTUFBTSxjQUFjO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEIsRUFBRSxLQUFLO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBaUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBaUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFELEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTztBQUNyWDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyx1QkFBdUIsR0FBRyxLQUFLLEdBQUcsT0FBTyxJQUFJO0FBQ3pFLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQSw0QkFBNEI7QUFDNUIsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSyxFQUFFLDBCQUEwQixnRUFBZ0UsTUFBTSxHQUFHLEVBQUU7QUFDM0g7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQ0FBK0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFD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LENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHlEQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5RUFBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQzs7UUFFMUYsT0FBTyxDQUFDO0tBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREEvRUUsT0FBTyxHQUFHLE9BQU8sS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYekQsaUJBQWlCLHFCQUF1Qiw2RTs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qiw4RSIsImZpbGUiOiIyZTJmZDdmZTRkZWJiNjk3ZTRkYS9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIFwiMmUyZmQ3ZmU0ZGViYjY5N2U0ZGFcIiArIFwiL1wiICsgKHtcImFib3V0XCI6XCJhYm91dFwiLFwiYmxvZ1wiOlwiYmxvZ1wiLFwiaW5kZXhcIjpcImluZGV4XCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsgY2h1bmtJZCArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImNsaWVudC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50LmpzXCIpO1xuIiwidmFyIEJBQ0tHUk9VTkRfQ09MT1I9XCIjZmZmXCIsTElORV9IRUlHSFQ9XCIyMHB4XCIsRk9OVF9TSVpFPVwiMTNweFwiLGRlZmF1bHRDc3NUaGVtZT1cIlxcbi5jb2RlZmxhc2sge1xcbiAgYmFja2dyb3VuZDogXCIrQkFDS0dST1VORF9DT0xPUitcIjtcXG4gIGNvbG9yOiAjNGY1NTljO1xcbn1cXG5cXG4uY29kZWZsYXNrIC50b2tlbi5wdW5jdHVhdGlvbiB7XFxuICBjb2xvcjogIzRhNGE0YTtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4ua2V5d29yZCB7XFxuICBjb2xvcjogIzg1MDBmZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4ub3BlcmF0b3Ige1xcbiAgY29sb3I6ICNmZjU1OTg7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLnN0cmluZyB7XFxuICBjb2xvcjogIzQxYWQ4ZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uY29tbWVudCB7XFxuICBjb2xvcjogIzliYWRiNztcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uZnVuY3Rpb24ge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLmJvb2xlYW4ge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLm51bWJlciB7XFxuICBjb2xvcjogIzg1MDBmZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uc2VsZWN0b3Ige1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLnByb3BlcnR5IHtcXG4gIGNvbG9yOiAjODUwMGZmO1xcbn1cXG5cXG4uY29kZWZsYXNrIC50b2tlbi50YWcge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLmF0dHItdmFsdWUge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblwiO2Z1bmN0aW9uIGNzc1N1cHBvcnRzKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIENTUz9DU1Muc3VwcG9ydHMoZSx0KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJnRvQ2FtZWxDYXNlKGUpaW4gZG9jdW1lbnQuYm9keS5zdHlsZX1mdW5jdGlvbiB0b0NhbWVsQ2FzZShlKXtyZXR1cm4oZT1lLnNwbGl0KFwiLVwiKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuISFlfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlWzBdLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSl9KS5qb2luKFwiXCIpKVswXS50b0xvd2VyQ2FzZSgpK2Uuc3Vic3RyKDEpfXZhciBGT05UX0ZBTUlMWT0nXCJTRk1vbm8tUmVndWxhclwiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZScsQ09MT1I9Y3NzU3VwcG9ydHMoXCJjYXJldC1jb2xvclwiLFwiIzAwMFwiKT9CQUNLR1JPVU5EX0NPTE9SOlwiI2NjY1wiLExJTkVfTlVNQkVSX1dJRFRIPVwiNDBweFwiLGVkaXRvckNzcz1cIlxcbiAgLmNvZGVmbGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2ssIC5jb2RlZmxhc2sgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrX19wcmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX3RleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogXCIrQ09MT1IrXCI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFwiK0ZPTlRfRkFNSUxZK1wiO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHByZTtcXG4gICAgY2FyZXQtY29sb3I6ICMxMTE7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLS1oYXMtbGluZS1udW1iZXJzIC5jb2RlZmxhc2tfX3RleHRhcmVhIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIFwiK0xJTkVfTlVNQkVSX1dJRFRIK1wiKTtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2NvZGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IFwiK0ZPTlRfRkFNSUxZK1wiO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmNvZGVmbGFza19fZmxhdHRlbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogXCIrRk9OVF9TSVpFK1wiO1xcbiAgICBsaW5lLWhlaWdodDogXCIrTElORV9IRUlHSFQrXCI7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLS1oYXMtbGluZS1udW1iZXJzIC5jb2RlZmxhc2tfX2ZsYXR0ZW4ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gXCIrTElORV9OVU1CRVJfV0lEVEgrXCIpO1xcbiAgICBsZWZ0OiBcIitMSU5FX05VTUJFUl9XSURUSCtcIjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2xpbmUtaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IFwiK0xJTkVfSEVJR0hUK1wiO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrX19saW5lcyB7XFxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiBcIitMSU5FX0hFSUdIVCtcIjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VzaW5lJywgbW9ub3NwYWNlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IFwiK0xJTkVfTlVNQkVSX1dJRFRIK1wiO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2xpbmVzX19saW5lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLmNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVycyB7XFxuICAgIHBhZGRpbmctbGVmdDogXCIrTElORV9OVU1CRVJfV0lEVEgrXCI7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLmNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVyczpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiBcIitMSU5FX05VTUJFUl9XSURUSCtcIjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblwiO2Z1bmN0aW9uIGluamVjdENzcyhlLHQsbil7dmFyIGE9dHx8XCJjb2RlZmxhc2stc3R5bGVcIixzPW58fGRvY3VtZW50LmhlYWQ7aWYoIWUpcmV0dXJuITE7aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpcmV0dXJuITA7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBvLmlubmVySFRNTD1lLG8uaWQ9YSxzLmFwcGVuZENoaWxkKG8pLCEwfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKGUpe3JldHVybiBTdHJpbmcoZSkucmVwbGFjZSgvWyY8PlwiJ2A9L10vZyxmdW5jdGlvbihlKXtyZXR1cm4gZW50aXR5TWFwW2VdfSl9dmFyIGNvbW1vbmpzR2xvYmFsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShlLHQpe3JldHVybiBlKHQ9e2V4cG9ydHM6e319LHQuZXhwb3J0cyksdC5leHBvcnRzfXZhciBwcmlzbT1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD0vXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaSxuPTAsYT17bWFudWFsOmUuUHJpc20mJmUuUHJpc20ubWFudWFsLGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjplLlByaXNtJiZlLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcix1dGlsOntlbmNvZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBzP25ldyBzKGUudHlwZSxhLnV0aWwuZW5jb2RlKGUuY29udGVudCksZS5hbGlhcyk6QXJyYXkuaXNBcnJheShlKT9lLm1hcChhLnV0aWwuZW5jb2RlKTplLnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpfSxvYmpJZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX2lkfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9faWRcIix7dmFsdWU6KytufSksZS5fX2lkfSxjbG9uZTpmdW5jdGlvbiBlKHQsbil7dmFyIHMsbyxpPWEudXRpbC50eXBlKHQpO3N3aXRjaChuPW58fHt9LGkpe2Nhc2VcIk9iamVjdFwiOmlmKG89YS51dGlsLm9iaklkKHQpLG5bb10pcmV0dXJuIG5bb107Zm9yKHZhciByIGluIHM9e30sbltvXT1zLHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKHNbcl09ZSh0W3JdLG4pKTtyZXR1cm4gcztjYXNlXCJBcnJheVwiOnJldHVybiBvPWEudXRpbC5vYmpJZCh0KSxuW29dP25bb106KHM9W10sbltvXT1zLHQuZm9yRWFjaChmdW5jdGlvbih0LGEpe3NbYV09ZSh0LG4pfSkscyk7ZGVmYXVsdDpyZXR1cm4gdH19fSxsYW5ndWFnZXM6e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPWEudXRpbC5jbG9uZShhLmxhbmd1YWdlc1tlXSk7Zm9yKHZhciBzIGluIHQpbltzXT10W3NdO3JldHVybiBufSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSx0LG4scyl7dmFyIG89KHM9c3x8YS5sYW5ndWFnZXMpW2VdLGk9e307Zm9yKHZhciByIGluIG8paWYoby5oYXNPd25Qcm9wZXJ0eShyKSl7aWYocj09dClmb3IodmFyIGwgaW4gbiluLmhhc093blByb3BlcnR5KGwpJiYoaVtsXT1uW2xdKTtuLmhhc093blByb3BlcnR5KHIpfHwoaVtyXT1vW3JdKX12YXIgYz1zW2VdO3JldHVybiBzW2VdPWksYS5sYW5ndWFnZXMuREZTKGEubGFuZ3VhZ2VzLGZ1bmN0aW9uKHQsbil7bj09PWMmJnQhPWUmJih0aGlzW3RdPWkpfSksaX0sREZTOmZ1bmN0aW9uIGUodCxuLHMsbyl7bz1vfHx7fTt2YXIgaT1hLnV0aWwub2JqSWQ7Zm9yKHZhciByIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSl7bi5jYWxsKHQscix0W3JdLHN8fHIpO3ZhciBsPXRbcl0sYz1hLnV0aWwudHlwZShsKTtcIk9iamVjdFwiIT09Y3x8b1tpKGwpXT9cIkFycmF5XCIhPT1jfHxvW2kobCldfHwob1tpKGwpXT0hMCxlKGwsbixyLG8pKToob1tpKGwpXT0hMCxlKGwsbixudWxsLG8pKX19fSxwbHVnaW5zOnt9LGhpZ2hsaWdodEFsbDpmdW5jdGlvbihlLHQpe2EuaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsZSx0KX0saGlnaGxpZ2h0QWxsVW5kZXI6ZnVuY3Rpb24oZSx0LG4pe3ZhciBzPXtjYWxsYmFjazpuLHNlbGVjdG9yOidjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSd9O2EuaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodGFsbFwiLHMpO2Zvcih2YXIgbyxpPXMuZWxlbWVudHN8fGUucXVlcnlTZWxlY3RvckFsbChzLnNlbGVjdG9yKSxyPTA7bz1pW3IrK107KWEuaGlnaGxpZ2h0RWxlbWVudChvLCEwPT09dCxzLmNhbGxiYWNrKX0saGlnaGxpZ2h0RWxlbWVudDpmdW5jdGlvbihuLHMsbyl7Zm9yKHZhciBpLHIsbD1uO2wmJiF0LnRlc3QobC5jbGFzc05hbWUpOylsPWwucGFyZW50Tm9kZTtsJiYoaT0obC5jbGFzc05hbWUubWF0Y2godCl8fFssXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCkscj1hLmxhbmd1YWdlc1tpXSksbi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZSh0LFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikrXCIgbGFuZ3VhZ2UtXCIraSxuLnBhcmVudE5vZGUmJihsPW4ucGFyZW50Tm9kZSwvcHJlL2kudGVzdChsLm5vZGVOYW1lKSYmKGwuY2xhc3NOYW1lPWwuY2xhc3NOYW1lLnJlcGxhY2UodCxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2kpKTt2YXIgYz17ZWxlbWVudDpuLGxhbmd1YWdlOmksZ3JhbW1hcjpyLGNvZGU6bi50ZXh0Q29udGVudH0sZD1mdW5jdGlvbihlKXtjLmhpZ2hsaWdodGVkQ29kZT1lLGEuaG9va3MucnVuKFwiYmVmb3JlLWluc2VydFwiLGMpLGMuZWxlbWVudC5pbm5lckhUTUw9Yy5oaWdobGlnaHRlZENvZGUsYS5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIixjKSxhLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsYyksbyYmby5jYWxsKGMuZWxlbWVudCl9O2lmKGEuaG9va3MucnVuKFwiYmVmb3JlLXNhbml0eS1jaGVja1wiLGMpLGMuY29kZSlpZihhLmhvb2tzLnJ1bihcImJlZm9yZS1oaWdobGlnaHRcIixjKSxjLmdyYW1tYXIpaWYocyYmZS5Xb3JrZXIpe3ZhciB1PW5ldyBXb3JrZXIoYS5maWxlbmFtZSk7dS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7ZChlLmRhdGEpfSx1LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtsYW5ndWFnZTpjLmxhbmd1YWdlLGNvZGU6Yy5jb2RlLGltbWVkaWF0ZUNsb3NlOiEwfSkpfWVsc2UgZChhLmhpZ2hsaWdodChjLmNvZGUsYy5ncmFtbWFyLGMubGFuZ3VhZ2UpKTtlbHNlIGQoYS51dGlsLmVuY29kZShjLmNvZGUpKTtlbHNlIGEuaG9va3MucnVuKFwiY29tcGxldGVcIixjKX0saGlnaGxpZ2h0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgbz17Y29kZTplLGdyYW1tYXI6dCxsYW5ndWFnZTpufTtyZXR1cm4gYS5ob29rcy5ydW4oXCJiZWZvcmUtdG9rZW5pemVcIixvKSxvLnRva2Vucz1hLnRva2VuaXplKG8uY29kZSxvLmdyYW1tYXIpLGEuaG9va3MucnVuKFwiYWZ0ZXItdG9rZW5pemVcIixvKSxzLnN0cmluZ2lmeShhLnV0aWwuZW5jb2RlKG8udG9rZW5zKSxvLmxhbmd1YWdlKX0sbWF0Y2hHcmFtbWFyOmZ1bmN0aW9uKGUsdCxuLG8saSxyLGwpe2Zvcih2YXIgYyBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkoYykmJm5bY10pe2lmKGM9PWwpcmV0dXJuO3ZhciBkPW5bY107ZD1cIkFycmF5XCI9PT1hLnV0aWwudHlwZShkKT9kOltkXTtmb3IodmFyIHU9MDt1PGQubGVuZ3RoOysrdSl7dmFyIHA9ZFt1XSxoPXAuaW5zaWRlLGc9ISFwLmxvb2tiZWhpbmQsZj0hIXAuZ3JlZWR5LG09MCxiPXAuYWxpYXM7aWYoZiYmIXAucGF0dGVybi5nbG9iYWwpe3ZhciBrPXAucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW11eV0qJC8pWzBdO3AucGF0dGVybj1SZWdFeHAocC5wYXR0ZXJuLnNvdXJjZSxrK1wiZ1wiKX1wPXAucGF0dGVybnx8cDtmb3IodmFyIHk9byxDPWk7eTx0Lmxlbmd0aDtDKz10W3ldLmxlbmd0aCwrK3kpe3ZhciBGPXRbeV07aWYodC5sZW5ndGg+ZS5sZW5ndGgpcmV0dXJuO2lmKCEoRiBpbnN0YW5jZW9mIHMpKXtpZihmJiZ5IT10Lmxlbmd0aC0xKXtpZihwLmxhc3RJbmRleD1DLCEoVD1wLmV4ZWMoZSkpKWJyZWFrO2Zvcih2YXIgdj1ULmluZGV4KyhnP1RbMV0ubGVuZ3RoOjApLHg9VC5pbmRleCtUWzBdLmxlbmd0aCx3PXksQT1DLF89dC5sZW5ndGg7dzxfJiYoQTx4fHwhdFt3XS50eXBlJiYhdFt3LTFdLmdyZWVkeSk7Kyt3KXY+PShBKz10W3ddLmxlbmd0aCkmJigrK3ksQz1BKTtpZih0W3ldaW5zdGFuY2VvZiBzKWNvbnRpbnVlO0U9dy15LEY9ZS5zbGljZShDLEEpLFQuaW5kZXgtPUN9ZWxzZXtwLmxhc3RJbmRleD0wO3ZhciBUPXAuZXhlYyhGKSxFPTF9aWYoVCl7ZyYmKG09VFsxXT9UWzFdLmxlbmd0aDowKTt4PSh2PVQuaW5kZXgrbSkrKFQ9VFswXS5zbGljZShtKSkubGVuZ3RoO3ZhciBMPUYuc2xpY2UoMCx2KSxOPUYuc2xpY2UoeCksUz1beSxFXTtMJiYoKyt5LEMrPUwubGVuZ3RoLFMucHVzaChMKSk7dmFyIEk9bmV3IHMoYyxoP2EudG9rZW5pemUoVCxoKTpULGIsVCxmKTtpZihTLnB1c2goSSksTiYmUy5wdXNoKE4pLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodCxTKSwxIT1FJiZhLm1hdGNoR3JhbW1hcihlLHQsbix5LEMsITAsYykscilicmVha31lbHNlIGlmKHIpYnJlYWt9fX19fSx0b2tlbml6ZTpmdW5jdGlvbihlLHQpe3ZhciBuPVtlXSxzPXQucmVzdDtpZihzKXtmb3IodmFyIG8gaW4gcyl0W29dPXNbb107ZGVsZXRlIHQucmVzdH1yZXR1cm4gYS5tYXRjaEdyYW1tYXIoZSxuLHQsMCwwLCExKSxufSxob29rczp7YWxsOnt9LGFkZDpmdW5jdGlvbihlLHQpe3ZhciBuPWEuaG9va3MuYWxsO25bZV09bltlXXx8W10sbltlXS5wdXNoKHQpfSxydW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1hLmhvb2tzLmFsbFtlXTtpZihuJiZuLmxlbmd0aClmb3IodmFyIHMsbz0wO3M9bltvKytdOylzKHQpfX0sVG9rZW46c307ZnVuY3Rpb24gcyhlLHQsbixhLHMpe3RoaXMudHlwZT1lLHRoaXMuY29udGVudD10LHRoaXMuYWxpYXM9bix0aGlzLmxlbmd0aD0wfChhfHxcIlwiKS5sZW5ndGgsdGhpcy5ncmVlZHk9ISFzfWlmKGUuUHJpc209YSxzLnN0cmluZ2lmeT1mdW5jdGlvbihlLHQsbil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIHMuc3RyaW5naWZ5KG4sdCxlKX0pLmpvaW4oXCJcIik7dmFyIG89e3R5cGU6ZS50eXBlLGNvbnRlbnQ6cy5zdHJpbmdpZnkoZS5jb250ZW50LHQsbiksdGFnOlwic3BhblwiLGNsYXNzZXM6W1widG9rZW5cIixlLnR5cGVdLGF0dHJpYnV0ZXM6e30sbGFuZ3VhZ2U6dCxwYXJlbnQ6bn07aWYoZS5hbGlhcyl7dmFyIGk9QXJyYXkuaXNBcnJheShlLmFsaWFzKT9lLmFsaWFzOltlLmFsaWFzXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShvLmNsYXNzZXMsaSl9YS5ob29rcy5ydW4oXCJ3cmFwXCIsbyk7dmFyIHI9T2JqZWN0LmtleXMoby5hdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUrJz1cIicrKG8uYXR0cmlidXRlc1tlXXx8XCJcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKSsnXCInfSkuam9pbihcIiBcIik7cmV0dXJuXCI8XCIrby50YWcrJyBjbGFzcz1cIicrby5jbGFzc2VzLmpvaW4oXCIgXCIpKydcIicrKHI/XCIgXCIrcjpcIlwiKStcIj5cIitvLmNvbnRlbnQrXCI8L1wiK28udGFnK1wiPlwifSwhZS5kb2N1bWVudClyZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyPyhhLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcnx8ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKHQpe3ZhciBuPUpTT04ucGFyc2UodC5kYXRhKSxzPW4ubGFuZ3VhZ2Usbz1uLmNvZGUsaT1uLmltbWVkaWF0ZUNsb3NlO2UucG9zdE1lc3NhZ2UoYS5oaWdobGlnaHQobyxhLmxhbmd1YWdlc1tzXSxzKSksaSYmZS5jbG9zZSgpfSwhMSksYSk6YTt2YXIgbz1kb2N1bWVudC5jdXJyZW50U2NyaXB0fHxbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpKS5wb3AoKTtyZXR1cm4gbyYmKGEuZmlsZW5hbWU9by5zcmMsYS5tYW51YWx8fG8uaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIil8fChcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEuaGlnaGxpZ2h0QWxsKTp3aW5kb3cuc2V0VGltZW91dChhLmhpZ2hsaWdodEFsbCwxNik6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixhLmhpZ2hsaWdodEFsbCkpKSxhfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUmJnNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZT9zZWxmOnt9KTtlLmV4cG9ydHMmJihlLmV4cG9ydHM9dCksdm9pZCAwIT09Y29tbW9uanNHbG9iYWwmJihjb21tb25qc0dsb2JhbC5QcmlzbT10KSx0Lmxhbmd1YWdlcy5tYXJrdXA9e2NvbW1lbnQ6LzwhLS1bXFxzXFxTXSo/LS0+Lyxwcm9sb2c6LzxcXD9bXFxzXFxTXSs/XFw/Pi8sZG9jdHlwZTovPCFET0NUWVBFW1xcc1xcU10rPz4vaSxjZGF0YTovPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSx0YWc6e3BhdHRlcm46LzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi9pLGdyZWVkeTohMCxpbnNpZGU6e3RhZzp7cGF0dGVybjovXjxcXC8/W15cXHM+XFwvXSsvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOi9ePFxcLz8vLG5hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX0sXCJhdHRyLXZhbHVlXCI6e3BhdHRlcm46Lz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOlsvXj0vLHtwYXR0ZXJuOi9eKFxccyopW1wiJ118W1wiJ10kLyxsb29rYmVoaW5kOiEwfV19fSxwdW5jdHVhdGlvbjovXFwvPz4vLFwiYXR0ci1uYW1lXCI6e3BhdHRlcm46L1teXFxzPlxcL10rLyxpbnNpZGU6e25hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX19fSxlbnRpdHk6LyYjP1tcXGRhLXpdezEsOH07L2l9LHQubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlW1wiYXR0ci12YWx1ZVwiXS5pbnNpZGUuZW50aXR5PXQubGFuZ3VhZ2VzLm1hcmt1cC5lbnRpdHksdC5ob29rcy5hZGQoXCJ3cmFwXCIsZnVuY3Rpb24oZSl7XCJlbnRpdHlcIj09PWUudHlwZSYmKGUuYXR0cmlidXRlcy50aXRsZT1lLmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLFwiJlwiKSl9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5sYW5ndWFnZXMubWFya3VwLnRhZyxcImFkZElubGluZWRcIix7dmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgYT17fTthW1wibGFuZ3VhZ2UtXCIrbl09e3BhdHRlcm46LyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksbG9va2JlaGluZDohMCxpbnNpZGU6dC5sYW5ndWFnZXNbbl19LGEuY2RhdGE9L148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7dmFyIHM9e1wiaW5jbHVkZWQtY2RhdGFcIjp7cGF0dGVybjovPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksaW5zaWRlOmF9fTtzW1wibGFuZ3VhZ2UtXCIrbl09e3BhdHRlcm46L1tcXHNcXFNdKy8saW5zaWRlOnQubGFuZ3VhZ2VzW25dfTt2YXIgbz17fTtvW2VdPXtwYXR0ZXJuOlJlZ0V4cCgvKDxfX1tcXHNcXFNdKj8+KSg/OjwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPlxccyp8W1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csZSksXCJpXCIpLGxvb2tiZWhpbmQ6ITAsZ3JlZWR5OiEwLGluc2lkZTpzfSx0Lmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJtYXJrdXBcIixcImNkYXRhXCIsbyl9fSksdC5sYW5ndWFnZXMueG1sPXQubGFuZ3VhZ2VzLmV4dGVuZChcIm1hcmt1cFwiLHt9KSx0Lmxhbmd1YWdlcy5odG1sPXQubGFuZ3VhZ2VzLm1hcmt1cCx0Lmxhbmd1YWdlcy5tYXRobWw9dC5sYW5ndWFnZXMubWFya3VwLHQubGFuZ3VhZ2VzLnN2Zz10Lmxhbmd1YWdlcy5tYXJrdXAsZnVuY3Rpb24oZSl7dmFyIHQ9LyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO2UubGFuZ3VhZ2VzLmNzcz17Y29tbWVudDovXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sYXRydWxlOntwYXR0ZXJuOi9AW1xcdy1dKz9bXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvaSxpbnNpZGU6e3J1bGU6L0BbXFx3LV0rL319LHVybDpSZWdFeHAoXCJ1cmxcXFxcKCg/OlwiK3Quc291cmNlK1wifC4qPylcXFxcKVwiLFwiaVwiKSxzZWxlY3RvcjpSZWdFeHAoXCJbXnt9XFxcXHNdKD86W157fTtcXFwiJ118XCIrdC5zb3VyY2UrXCIpKj8oPz1cXFxccypcXFxceylcIiksc3RyaW5nOntwYXR0ZXJuOnQsZ3JlZWR5OiEwfSxwcm9wZXJ0eTovWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLGltcG9ydGFudDovIWltcG9ydGFudFxcYi9pLGZ1bmN0aW9uOi9bLWEtejAtOV0rKD89XFwoKS9pLHB1bmN0dWF0aW9uOi9bKCl7fTs6LF0vfSxlLmxhbmd1YWdlcy5jc3MuYXRydWxlLmluc2lkZS5yZXN0PWUubGFuZ3VhZ2VzLmNzczt2YXIgbj1lLmxhbmd1YWdlcy5tYXJrdXA7biYmKG4udGFnLmFkZElubGluZWQoXCJzdHlsZVwiLFwiY3NzXCIpLGUubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImluc2lkZVwiLFwiYXR0ci12YWx1ZVwiLHtcInN0eWxlLWF0dHJcIjp7cGF0dGVybjovXFxzKnN0eWxlPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxL2ksaW5zaWRlOntcImF0dHItbmFtZVwiOntwYXR0ZXJuOi9eXFxzKnN0eWxlL2ksaW5zaWRlOm4udGFnLmluc2lkZX0scHVuY3R1YXRpb246L15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcImF0dHItdmFsdWVcIjp7cGF0dGVybjovLisvaSxpbnNpZGU6ZS5sYW5ndWFnZXMuY3NzfX0sYWxpYXM6XCJsYW5ndWFnZS1jc3NcIn19LG4udGFnKSl9KHQpLHQubGFuZ3VhZ2VzLmNsaWtlPXtjb21tZW50Olt7cGF0dGVybjovKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W15cXFxcOl0pXFwvXFwvLiovLGxvb2tiZWhpbmQ6ITAsZ3JlZWR5OiEwfV0sc3RyaW5nOntwYXR0ZXJuOi8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sZ3JlZWR5OiEwfSxcImNsYXNzLW5hbWVcIjp7cGF0dGVybjovKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbXFx3LlxcXFxdKy9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntwdW5jdHVhdGlvbjovWy5cXFxcXS99fSxrZXl3b3JkOi9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLGJvb2xlYW46L1xcYig/OnRydWV8ZmFsc2UpXFxiLyxmdW5jdGlvbjovXFx3Kyg/PVxcKCkvLG51bWJlcjovXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksb3BlcmF0b3I6Ly0tP3xcXCtcXCs/fCE9Pz0/fDw9P3w+PT98PT0/PT98JiY/fFxcfFxcfD98XFw/fFxcKnxcXC98fnxcXF58JS8scHVuY3R1YXRpb246L1t7fVtcXF07KCksLjpdL30sdC5sYW5ndWFnZXMuamF2YXNjcmlwdD10Lmxhbmd1YWdlcy5leHRlbmQoXCJjbGlrZVwiLHtcImNsYXNzLW5hbWVcIjpbdC5sYW5ndWFnZXMuY2xpa2VbXCJjbGFzcy1uYW1lXCJdLHtwYXR0ZXJuOi8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSlbXyRBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLGxvb2tiZWhpbmQ6ITB9XSxrZXl3b3JkOlt7cGF0dGVybjovKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W14uXSlcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sbG9va2JlaGluZDohMH1dLG51bWJlcjovXFxiKD86KD86MFt4WF1bXFxkQS1GYS1mXSt8MFtiQl1bMDFdK3wwW29PXVswLTddKyluP3xcXGQrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltFZV1bKy1dP1xcZCspPy8sZnVuY3Rpb246L1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxvcGVyYXRvcjovLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L30pLHQubGFuZ3VhZ2VzLmphdmFzY3JpcHRbXCJjbGFzcy1uYW1lXCJdWzBdLnBhdHRlcm49LyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvLHQubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImphdmFzY3JpcHRcIixcImtleXdvcmRcIix7cmVnZXg6e3BhdHRlcm46LygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oXFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1XXswLDV9KD89XFxzKigkfFtcXHJcXG4sLjt9KVxcXV0pKS8sbG9va2JlaGluZDohMCxncmVlZHk6ITB9LFwiZnVuY3Rpb24tdmFyaWFibGVcIjp7cGF0dGVybjovW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccypbPTpdXFxzKig/OmFzeW5jXFxzKik/KD86XFxiZnVuY3Rpb25cXGJ8KD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS8sYWxpYXM6XCJmdW5jdGlvblwifSxwYXJhbWV0ZXI6W3twYXR0ZXJuOi8oZnVuY3Rpb24oPzpcXHMrW18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXCkpLyxsb29rYmVoaW5kOiEwLGluc2lkZTp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fSx7cGF0dGVybjovW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxpbnNpZGU6dC5sYW5ndWFnZXMuamF2YXNjcmlwdH0se3BhdHRlcm46LyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sbG9va2JlaGluZDohMCxpbnNpZGU6dC5sYW5ndWFnZXMuamF2YXNjcmlwdH0se3BhdHRlcm46LygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxsb29rYmVoaW5kOiEwLGluc2lkZTp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fV0sY29uc3RhbnQ6L1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvfSksdC5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFwic3RyaW5nXCIse1widGVtcGxhdGUtc3RyaW5nXCI6e3BhdHRlcm46L2AoPzpcXFxcW1xcc1xcU118XFwke1tefV0rfXxbXlxcXFxgXSkqYC8sZ3JlZWR5OiEwLGluc2lkZTp7aW50ZXJwb2xhdGlvbjp7cGF0dGVybjovXFwke1tefV0rfS8saW5zaWRlOntcImludGVycG9sYXRpb24tcHVuY3R1YXRpb25cIjp7cGF0dGVybjovXlxcJHt8fSQvLGFsaWFzOlwicHVuY3R1YXRpb25cIn0scmVzdDp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fX0sc3RyaW5nOi9bXFxzXFxTXSsvfX19KSx0Lmxhbmd1YWdlcy5tYXJrdXAmJnQubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZChcInNjcmlwdFwiLFwiamF2YXNjcmlwdFwiKSx0Lmxhbmd1YWdlcy5qcz10Lmxhbmd1YWdlcy5qYXZhc2NyaXB0LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLlByaXNtJiZzZWxmLmRvY3VtZW50JiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yJiYoc2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0PWZ1bmN0aW9uKGUpe2U9ZXx8ZG9jdW1lbnQ7dmFyIG49e2pzOlwiamF2YXNjcmlwdFwiLHB5OlwicHl0aG9uXCIscmI6XCJydWJ5XCIscHMxOlwicG93ZXJzaGVsbFwiLHBzbTE6XCJwb3dlcnNoZWxsXCIsc2g6XCJiYXNoXCIsYmF0OlwiYmF0Y2hcIixoOlwiY1wiLHRleDpcImxhdGV4XCJ9O0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcInByZVtkYXRhLXNyY11cIikpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoIWUuaGFzQXR0cmlidXRlKFwiZGF0YS1zcmMtbG9hZGVkXCIpKXtmb3IodmFyIGEscz1lLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpLG89ZSxpPS9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO28mJiFpLnRlc3Qoby5jbGFzc05hbWUpOylvPW8ucGFyZW50Tm9kZTtpZihvJiYoYT0oZS5jbGFzc05hbWUubWF0Y2goaSl8fFssXCJcIl0pWzFdKSwhYSl7dmFyIHI9KHMubWF0Y2goL1xcLihcXHcrKSQvKXx8WyxcIlwiXSlbMV07YT1uW3JdfHxyfXZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO2wuY2xhc3NOYW1lPVwibGFuZ3VhZ2UtXCIrYSxlLnRleHRDb250ZW50PVwiXCIsbC50ZXh0Q29udGVudD1cIkxvYWRpbmfigKZcIixlLmFwcGVuZENoaWxkKGwpO3ZhciBjPW5ldyBYTUxIdHRwUmVxdWVzdDtjLm9wZW4oXCJHRVRcIixzLCEwKSxjLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PWMucmVhZHlTdGF0ZSYmKGMuc3RhdHVzPDQwMCYmYy5yZXNwb25zZVRleHQ/KGwudGV4dENvbnRlbnQ9Yy5yZXNwb25zZVRleHQsdC5oaWdobGlnaHRFbGVtZW50KGwpLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmMtbG9hZGVkXCIsXCJcIikpOmMuc3RhdHVzPj00MDA/bC50ZXh0Q29udGVudD1cIuKcliBFcnJvciBcIitjLnN0YXR1cytcIiB3aGlsZSBmZXRjaGluZyBmaWxlOiBcIitjLnN0YXR1c1RleHQ6bC50ZXh0Q29udGVudD1cIuKcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eVwiKX0sYy5zZW5kKG51bGwpfX0pLHQucGx1Z2lucy50b29sYmFyJiZ0LnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbihcImRvd25sb2FkLWZpbGVcIixmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQucGFyZW50Tm9kZTtpZih0JiYvcHJlL2kudGVzdCh0Lm5vZGVOYW1lKSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWRvd25sb2FkLWxpbmtcIikpe3ZhciBuPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gYS50ZXh0Q29udGVudD10LmdldEF0dHJpYnV0ZShcImRhdGEtZG93bmxvYWQtbGluay1sYWJlbFwiKXx8XCJEb3dubG9hZFwiLGEuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIixcIlwiKSxhLmhyZWY9bixhfX0pfSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0KCl9KSl9KSxDb2RlRmxhc2s9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBFcnJvcihcIkNvZGVGbGFzayBleHBlY3RzIGEgcGFyYW1ldGVyIHdoaWNoIGlzIEVsZW1lbnQgb3IgYSBTdHJpbmcgc2VsZWN0b3JcIik7aWYoIXQpdGhyb3cgRXJyb3IoXCJDb2RlRmxhc2sgZXhwZWN0cyBhbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGFzIHNlY29uZCBwYXJhbWV0ZXJcIik7aWYoZS5ub2RlVHlwZSl0aGlzLmVkaXRvclJvb3Q9ZTtlbHNle3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7biYmKHRoaXMuZWRpdG9yUm9vdD1uKX10aGlzLm9wdHM9dCx0aGlzLnN0YXJ0RWRpdG9yKCl9O0NvZGVGbGFzay5wcm90b3R5cGUuc3RhcnRFZGl0b3I9ZnVuY3Rpb24oKXtpZighaW5qZWN0Q3NzKGVkaXRvckNzcyxudWxsLHRoaXMub3B0cy5zdHlsZVBhcmVudCkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gaW5qZWN0IENvZGVGbGFzayBDU1MuXCIpO3RoaXMuY3JlYXRlV3JhcHBlcigpLHRoaXMuY3JlYXRlVGV4dGFyZWEoKSx0aGlzLmNyZWF0ZVByZSgpLHRoaXMuY3JlYXRlQ29kZSgpLHRoaXMucnVuT3B0aW9ucygpLHRoaXMubGlzdGVuVGV4dGFyZWEoKSx0aGlzLnBvcHVsYXRlRGVmYXVsdCgpLHRoaXMudXBkYXRlQ29kZSh0aGlzLmNvZGUpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVdyYXBwZXI9ZnVuY3Rpb24oKXt0aGlzLmNvZGU9dGhpcy5lZGl0b3JSb290LmlubmVySFRNTCx0aGlzLmVkaXRvclJvb3QuaW5uZXJIVE1MPVwiXCIsdGhpcy5lbFdyYXBwZXI9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsdGhpcy5lZGl0b3JSb290KSx0aGlzLmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrXCIpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVRleHRhcmVhPWZ1bmN0aW9uKCl7dGhpcy5lbFRleHRhcmVhPXRoaXMuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsdGhpcy5lbFdyYXBwZXIpLHRoaXMuZWxUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrX190ZXh0YXJlYVwiLFwiY29kZWZsYXNrX19mbGF0dGVuXCIpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVByZT1mdW5jdGlvbigpe3RoaXMuZWxQcmU9dGhpcy5jcmVhdGVFbGVtZW50KFwicHJlXCIsdGhpcy5lbFdyYXBwZXIpLHRoaXMuZWxQcmUuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFza19fcHJlXCIsXCJjb2RlZmxhc2tfX2ZsYXR0ZW5cIil9LENvZGVGbGFzay5wcm90b3R5cGUuY3JlYXRlQ29kZT1mdW5jdGlvbigpe3RoaXMuZWxDb2RlPXRoaXMuY3JlYXRlRWxlbWVudChcImNvZGVcIix0aGlzLmVsUHJlKSx0aGlzLmVsQ29kZS5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrX19jb2RlXCIsXCJsYW5ndWFnZS1cIisodGhpcy5vcHRzLmxhbmd1YWdlfHxcImh0bWxcIikpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZUxpbmVOdW1iZXJzPWZ1bmN0aW9uKCl7dGhpcy5lbExpbmVOdW1iZXJzPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLHRoaXMuZWxXcmFwcGVyKSx0aGlzLmVsTGluZU51bWJlcnMuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFza19fbGluZXNcIiksdGhpcy5zZXRMaW5lTnVtYmVyKCl9LENvZGVGbGFzay5wcm90b3R5cGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuIHQuYXBwZW5kQ2hpbGQobiksbn0sQ29kZUZsYXNrLnByb3RvdHlwZS5ydW5PcHRpb25zPWZ1bmN0aW9uKCl7dGhpcy5vcHRzLnJ0bD10aGlzLm9wdHMucnRsfHwhMSx0aGlzLm9wdHMudGFiU2l6ZT10aGlzLm9wdHMudGFiU2l6ZXx8Mix0aGlzLm9wdHMuZW5hYmxlQXV0b2NvcnJlY3Q9dGhpcy5vcHRzLmVuYWJsZUF1dG9jb3JyZWN0fHwhMSx0aGlzLm9wdHMubGluZU51bWJlcnM9dGhpcy5vcHRzLmxpbmVOdW1iZXJzfHwhMSx0aGlzLm9wdHMuZGVmYXVsdFRoZW1lPSExIT09dGhpcy5vcHRzLmRlZmF1bHRUaGVtZSx0aGlzLm9wdHMuYXJlYUlkPXRoaXMub3B0cy5hcmVhSWR8fG51bGwsdGhpcy5vcHRzLmFyaWFMYWJlbGxlZGJ5PXRoaXMub3B0cy5hcmlhTGFiZWxsZWRieXx8bnVsbCx0aGlzLm9wdHMucmVhZG9ubHk9dGhpcy5vcHRzLnJlYWRvbmx5fHxudWxsLFwiYm9vbGVhblwiIT10eXBlb2YgdGhpcy5vcHRzLmhhbmRsZVRhYnMmJih0aGlzLm9wdHMuaGFuZGxlVGFicz0hMCksXCJib29sZWFuXCIhPXR5cGVvZiB0aGlzLm9wdHMuaGFuZGxlU2VsZkNsb3NpbmdDaGFyYWN0ZXJzJiYodGhpcy5vcHRzLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycz0hMCksXCJib29sZWFuXCIhPXR5cGVvZiB0aGlzLm9wdHMuaGFuZGxlTmV3TGluZUluZGVudGF0aW9uJiYodGhpcy5vcHRzLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbj0hMCksITA9PT10aGlzLm9wdHMucnRsJiYodGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLHRoaXMuZWxQcmUuc2V0QXR0cmlidXRlKFwiZGlyXCIsXCJydGxcIikpLCExPT09dGhpcy5vcHRzLmVuYWJsZUF1dG9jb3JyZWN0JiYodGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIixcImZhbHNlXCIpLHRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLFwib2ZmXCIpLHRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSx0aGlzLmVsVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSksdGhpcy5vcHRzLmxpbmVOdW1iZXJzJiYodGhpcy5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVyc1wiKSx0aGlzLmNyZWF0ZUxpbmVOdW1iZXJzKCkpLHRoaXMub3B0cy5kZWZhdWx0VGhlbWUmJmluamVjdENzcyhkZWZhdWx0Q3NzVGhlbWUsXCJ0aGVtZS1kZWZhdWx0XCIsdGhpcy5vcHRzLnN0eWxlUGFyZW50KSx0aGlzLm9wdHMuYXJlYUlkJiZ0aGlzLmVsVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLm9wdHMuYXJlYUlkKSx0aGlzLm9wdHMuYXJpYUxhYmVsbGVkYnkmJnRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLm9wdHMuYXJpYUxhYmVsbGVkYnkpLHRoaXMub3B0cy5yZWFkb25seSYmdGhpcy5lbmFibGVSZWFkb25seU1vZGUoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS51cGRhdGVMaW5lTnVtYmVyc0NvdW50PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVwiXCIsdD0xO3Q8PXRoaXMubGluZU51bWJlcjt0KyspZT1lKyc8c3BhbiBjbGFzcz1cImNvZGVmbGFza19fbGluZXNfX2xpbmVcIj4nK3QrXCI8L3NwYW4+XCI7dGhpcy5lbExpbmVOdW1iZXJzLmlubmVySFRNTD1lfSxDb2RlRmxhc2sucHJvdG90eXBlLmxpc3RlblRleHRhcmVhPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmVsVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7ZS5jb2RlPXQudGFyZ2V0LnZhbHVlLGUuZWxDb2RlLmlubmVySFRNTD1lc2NhcGVIdG1sKHQudGFyZ2V0LnZhbHVlKSxlLmhpZ2hsaWdodCgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnJ1blVwZGF0ZSgpLGUuc2V0TGluZU51bWJlcigpfSwxKX0pLHRoaXMuZWxUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGZ1bmN0aW9uKHQpe2UuaGFuZGxlVGFicyh0KSxlLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycyh0KSxlLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbih0KX0pLHRoaXMuZWxUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZnVuY3Rpb24odCl7ZS5lbFByZS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZCgtXCIrdC50YXJnZXQuc2Nyb2xsTGVmdCtcInB4LCAtXCIrdC50YXJnZXQuc2Nyb2xsVG9wK1wicHgsIDApXCIsZS5lbExpbmVOdW1iZXJzJiYoZS5lbExpbmVOdW1iZXJzLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKDAsIC1cIit0LnRhcmdldC5zY3JvbGxUb3ArXCJweCwgMClcIil9KX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVUYWJzPWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0cy5oYW5kbGVUYWJzKXtpZig5IT09ZS5rZXlDb2RlKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLG49dC5zZWxlY3Rpb25EaXJlY3Rpb24sYT10LnNlbGVjdGlvblN0YXJ0LHM9dC5zZWxlY3Rpb25FbmQsbz10LnZhbHVlLGk9by5zdWJzdHIoMCxhKSxyPW8uc3Vic3RyaW5nKGEscyksbD1vLnN1YnN0cmluZyhzKSxjPVwiIFwiLnJlcGVhdCh0aGlzLm9wdHMudGFiU2l6ZSk7aWYoYSE9PXMmJnIubGVuZ3RoPj1jLmxlbmd0aCl7dmFyIGQ9YS1pLnNwbGl0KFwiXFxuXCIpLnBvcCgpLmxlbmd0aCx1PWMubGVuZ3RoLHA9Yy5sZW5ndGg7aWYoZS5zaGlmdEtleSlvLnN1YnN0cihkLGMubGVuZ3RoKT09PWM/KHU9LXUsZD5hPyhyPXIuc3Vic3RyaW5nKDAsZCkrci5zdWJzdHJpbmcoZCtjLmxlbmd0aCkscD0wKTpkPT09YT8odT0wLHA9MCxyPXIuc3Vic3RyaW5nKGMubGVuZ3RoKSk6KHA9LXAsaT1pLnN1YnN0cmluZygwLGQpK2kuc3Vic3RyaW5nKGQrYy5sZW5ndGgpKSk6KHU9MCxwPTApLHI9ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXG5cIitjLnNwbGl0KFwiXCIpLmpvaW4oXCJcXFxcXCIpLFwiZ1wiKSxcIlxcblwiKTtlbHNlIGk9aS5zdWJzdHIoMCxkKStjK2kuc3Vic3RyaW5nKGQsYSkscj1yLnJlcGxhY2UoL1xcbi9nLFwiXFxuXCIrYyk7dC52YWx1ZT1pK3IrbCx0LnNlbGVjdGlvblN0YXJ0PWErdSx0LnNlbGVjdGlvbkVuZD1hK3IubGVuZ3RoK3AsdC5zZWxlY3Rpb25EaXJlY3Rpb249bn1lbHNlIHQudmFsdWU9aStjK2wsdC5zZWxlY3Rpb25TdGFydD1hK2MubGVuZ3RoLHQuc2VsZWN0aW9uRW5kPWErYy5sZW5ndGg7dmFyIGg9dC52YWx1ZTt0aGlzLnVwZGF0ZUNvZGUoaCksdGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZD1zK3RoaXMub3B0cy50YWJTaXplfX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVTZWxmQ2xvc2luZ0NoYXJhY3RlcnM9ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRzLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycyl7dmFyIHQ9ZS5rZXk7aWYoW1wiKFwiLFwiW1wiLFwie1wiLFwiPFwiLFwiJ1wiLCdcIiddLmluY2x1ZGVzKHQpfHxbXCIpXCIsXCJdXCIsXCJ9XCIsXCI+XCIsXCInXCIsJ1wiJ10uaW5jbHVkZXModCkpc3dpdGNoKHQpe2Nhc2VcIihcIjpjYXNlXCIpXCI6dGhpcy5jbG9zZUNoYXJhY3Rlcih0KTticmVhaztjYXNlXCJbXCI6Y2FzZVwiXVwiOnRoaXMuY2xvc2VDaGFyYWN0ZXIodCk7YnJlYWs7Y2FzZVwie1wiOmNhc2VcIn1cIjp0aGlzLmNsb3NlQ2hhcmFjdGVyKHQpO2JyZWFrO2Nhc2VcIjxcIjpjYXNlXCI+XCI6Y2FzZVwiJ1wiOmNhc2UnXCInOnRoaXMuY2xvc2VDaGFyYWN0ZXIodCl9fX0sQ29kZUZsYXNrLnByb3RvdHlwZS5zZXRMaW5lTnVtYmVyPWZ1bmN0aW9uKCl7dGhpcy5saW5lTnVtYmVyPXRoaXMuY29kZS5zcGxpdChcIlxcblwiKS5sZW5ndGgsdGhpcy5vcHRzLmxpbmVOdW1iZXJzJiZ0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzQ291bnQoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVOZXdMaW5lSW5kZW50YXRpb249ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRzLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbiYmMTM9PT1lLmtleUNvZGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD10aGlzLmVsVGV4dGFyZWEsbj10LnNlbGVjdGlvblN0YXJ0LGE9dC5zZWxlY3Rpb25FbmQscz10LnZhbHVlLG89cy5zdWJzdHIoMCxuKSxpPXMuc3Vic3RyaW5nKGEpLHI9cy5sYXN0SW5kZXhPZihcIlxcblwiLG4tMSksbD1yK3Muc2xpY2UocisxKS5zZWFyY2goL1teIF18JC8pLGM9bD5yP2wtcjowLGQ9bytcIlxcblwiK1wiIFwiLnJlcGVhdChjKStpO3QudmFsdWU9ZCx0LnNlbGVjdGlvblN0YXJ0PW4rYysxLHQuc2VsZWN0aW9uRW5kPW4rYysxLHRoaXMudXBkYXRlQ29kZSh0LnZhbHVlKX19LENvZGVGbGFzay5wcm90b3R5cGUuY2xvc2VDaGFyYWN0ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvblN0YXJ0LG49dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZDtpZih0aGlzLnNraXBDbG9zZUNoYXIoZSkpe3ZhciBhPXRoaXMuY29kZS5zdWJzdHIobiwxKT09PWUscz1hP24rMTpuLG89IWEmJltcIidcIiwnXCInXS5pbmNsdWRlcyhlKT9lOlwiXCIsaT1cIlwiK3RoaXMuY29kZS5zdWJzdHJpbmcoMCx0KStvK3RoaXMuY29kZS5zdWJzdHJpbmcocyk7dGhpcy51cGRhdGVDb2RlKGkpLHRoaXMuZWxUZXh0YXJlYS5zZWxlY3Rpb25FbmQ9Kyt0aGlzLmVsVGV4dGFyZWEuc2VsZWN0aW9uU3RhcnR9ZWxzZXt2YXIgcj1lO3N3aXRjaChlKXtjYXNlXCIoXCI6cj1TdHJpbmcuZnJvbUNoYXJDb2RlKGUuY2hhckNvZGVBdCgpKzEpO2JyZWFrO2Nhc2VcIjxcIjpjYXNlXCJ7XCI6Y2FzZVwiW1wiOnI9U3RyaW5nLmZyb21DaGFyQ29kZShlLmNoYXJDb2RlQXQoKSsyKX12YXIgbD10aGlzLmNvZGUuc3Vic3RyaW5nKHQsbiksYz1cIlwiK3RoaXMuY29kZS5zdWJzdHJpbmcoMCx0KStsK3IrdGhpcy5jb2RlLnN1YnN0cmluZyhuKTt0aGlzLnVwZGF0ZUNvZGUoYyl9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZD10fSxDb2RlRmxhc2sucHJvdG90eXBlLnNraXBDbG9zZUNoYXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvblN0YXJ0LG49dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZCxhPU1hdGguYWJzKG4tdCk+MDtyZXR1cm5bXCIpXCIsXCJ9XCIsXCJdXCIsXCI+XCJdLmluY2x1ZGVzKGUpfHxbXCInXCIsJ1wiJ10uaW5jbHVkZXMoZSkmJiFhfSxDb2RlRmxhc2sucHJvdG90eXBlLnVwZGF0ZUNvZGU9ZnVuY3Rpb24oZSl7dGhpcy5jb2RlPWUsdGhpcy5lbFRleHRhcmVhLnZhbHVlPWUsdGhpcy5lbENvZGUuaW5uZXJIVE1MPWVzY2FwZUh0bWwoZSksdGhpcy5oaWdobGlnaHQoKSx0aGlzLnNldExpbmVOdW1iZXIoKSxzZXRUaW1lb3V0KHRoaXMucnVuVXBkYXRlLmJpbmQodGhpcyksMSl9LENvZGVGbGFzay5wcm90b3R5cGUudXBkYXRlTGFuZ3VhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRzLmxhbmd1YWdlO3RoaXMuZWxDb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYW5ndWFnZS1cIit0KSx0aGlzLmVsQ29kZS5jbGFzc0xpc3QuYWRkKFwibGFuZ3VhZ2UtXCIrZSksdGhpcy5vcHRzLmxhbmd1YWdlPWUsdGhpcy5oaWdobGlnaHQoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS5hZGRMYW5ndWFnZT1mdW5jdGlvbihlLHQpe3ByaXNtLmxhbmd1YWdlc1tlXT10fSxDb2RlRmxhc2sucHJvdG90eXBlLnBvcHVsYXRlRGVmYXVsdD1mdW5jdGlvbigpe3RoaXMudXBkYXRlQ29kZSh0aGlzLmNvZGUpfSxDb2RlRmxhc2sucHJvdG90eXBlLmhpZ2hsaWdodD1mdW5jdGlvbigpe3ByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5lbENvZGUsITEpfSxDb2RlRmxhc2sucHJvdG90eXBlLm9uVXBkYXRlPWZ1bmN0aW9uKGUpe2lmKGUmJlwiW29iamVjdCBGdW5jdGlvbl1cIiE9PXt9LnRvU3RyaW5nLmNhbGwoZSkpdGhyb3cgRXJyb3IoXCJDb2RlRmxhc2sgZXhwZWN0cyBjYWxsYmFjayBvZiB0eXBlIEZ1bmN0aW9uXCIpO3RoaXMudXBkYXRlQ2FsbEJhY2s9ZX0sQ29kZUZsYXNrLnByb3RvdHlwZS5nZXRDb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29kZX0sQ29kZUZsYXNrLnByb3RvdHlwZS5ydW5VcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUNhbGxCYWNrJiZ0aGlzLnVwZGF0ZUNhbGxCYWNrKHRoaXMuY29kZSl9LENvZGVGbGFzay5wcm90b3R5cGUuZW5hYmxlUmVhZG9ubHlNb2RlPWZ1bmN0aW9uKCl7dGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsITApfSxDb2RlRmxhc2sucHJvdG90eXBlLmRpc2FibGVSZWFkb25seU1vZGU9ZnVuY3Rpb24oKXt0aGlzLmVsVGV4dGFyZWEucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIil9O2V4cG9ydCBkZWZhdWx0IENvZGVGbGFzaztcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29sb3JTdHJpbmcgPSByZXF1aXJlKCdjb2xvci1zdHJpbmcnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKG9iaiA9PSBudWxsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqLm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBvYmouY29sb3Iuc2xpY2UoKTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iai52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgcmVzdWx0ID0gY29sb3JTdHJpbmcuZ2V0KG9iaik7XG5cdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmc6ICcgKyBvYmopO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSByZXN1bHQubW9kZWw7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqLmxlbmd0aCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbCB8fCAncmdiJztcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIG5ld0FyciA9IF9zbGljZS5jYWxsKG9iaiwgMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkobmV3QXJyLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmpbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuXHRcdC8vIHRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0b2JqICY9IDB4RkZGRkZGO1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iaiA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iaiA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmogJiAweEZGXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iaikge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iai5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmouYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdHZhciBoYXNoZWRLZXlzID0ga2V5cy5zb3J0KCkuam9pbignJyk7XG5cdFx0aWYgKCEoaGFzaGVkS2V5cyBpbiBoYXNoZWRNb2RlbEtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSBoYXNoZWRNb2RlbEtleXNbaGFzaGVkS2V5c107XG5cblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cdFx0dmFyIGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmpbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBwZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHR2YXIgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFscGhhID09PSAxID8gdGhpcy5jb2xvci5zbGljZSgpIDogdGhpcy5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHR9LFxuXG5cdG9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0cmVzdWx0W2xhYmVsc1tpXV0gPSB0aGlzLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmVzdWx0LmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHR1bml0QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZ2JbMF0gLz0gMjU1O1xuXHRcdHJnYlsxXSAvPSAyNTU7XG5cdFx0cmdiWzJdIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLnB1c2godGhpcy52YWxwaGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0dW5pdE9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLm9iamVjdCgpO1xuXHRcdHJnYi5yIC89IDI1NTtcblx0XHRyZ2IuZyAvPSAyNTU7XG5cdFx0cmdiLmIgLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLmNvbmNhdCh0aGlzLnZhbHBoYSksIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5jb25jYXQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsKSkpLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gcmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICgodmFsICUgMzYwKSArIDM2MCkgJSAzNjA7IH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbigxMDApKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDApKSxcblxuXHRsOiBnZXRzZXQoJ2xhYicsIDAsIG1heGZuKDEwMCkpLFxuXHRhOiBnZXRzZXQoJ2xhYicsIDEpLFxuXHRiOiBnZXRzZXQoJ2xhYicsIDIpLFxuXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHRoaXMucmdiKCkucm91bmQoKS5jb2xvcik7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0Rhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGlzTGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gKz0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSAtPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gKz0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gLT0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsxXSArPSBod2IuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsyXSArPSBod2IuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGdyYXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsLCB2YWwsIHZhbCk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhICsgKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0dmFyIGh1ZSA9IGhzbC5jb2xvclswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHRoc2wuY29sb3JbMF0gPSBodWU7XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBwb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHRpZiAoIW1peGluQ29sb3IgfHwgIW1peGluQ29sb3IucmdiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IHRvIFwibWl4XCIgd2FzIG5vdCBhIENvbG9yIGluc3RhbmNlLCBidXQgcmF0aGVyIGFuIGluc3RhbmNlIG9mICcgKyB0eXBlb2YgbWl4aW5Db2xvcik7XG5cdFx0fVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3N0YXRpYy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9zdGF0aWMvcHhwbHVzX2libV92Z2E4LXdlYmZvbnQud29mZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3B4cGx1c19pYm1fdmdhOHJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuaHRtbCB7XFxuICAtLWNocm9tZeKAlGNvbG9yLWxpZ2h0MDogI0ZGRkZGRjtcXG4gIC0tY2hyb21l4oCUY29sb3ItbGlnaHQxOiAjRjRGNUY3O1xcbiAgLS1jaHJvbWXigJRjb2xvci1saWdodDI6ICNFN0VBRUQ7XFxuICAtLWNocm9tZeKAlGNvbG9yLWRhcmswOiAjMjAyMTI0O1xcbiAgLS1jaHJvbWXigJRjb2xvci1kYXJrMTogIzJEMzAzMztcXG4gIC0tY2hyb21l4oCUY29sb3ItZGFyazI6ICMzMjM2Mzk7XFxuICAtLXRoZW1lLXN0eWxlOiAncmV0cm8nO1xcbiAgLS10ZXh0LS1jb2xvci1iYXNlLS1saWdodDogICAgICAgICAgICAyMiwgMjEsIDMwO1xcbiAgLS1iYWNrZ3JvdW5kLS1jb2xvci1iYXNlLS1saWdodDogICAgICAyNTUsMjU1LDI1NTtcXG4gIC0tdGV4dC0tY29sb3ItYmFzZS0tZGFyazogICAgICAgICAgICAgMjU0LCAyNDgsIDIzOTtcXG4gIC0tYmFja2dyb3VuZC0tY29sb3ItYmFzZS0tZGFyazogICAgICAgMjIsIDIxLCAzMDtcXG4gIC0tc3lzdGVtQmx1ZUxpZ2h0OiAgIHJnYigwLDEyMiwyNTUpO1xcbiAgLS1zeXN0ZW1HcmF5TGlnaHQ6ICAgcmdiKDE0MiwxNDIsMTQ3KTtcXG4gIC0tc3lzdGVtR3JlZW5MaWdodDogIHJnYig1MiwxOTksODkpO1xcbiAgLS1zeXN0ZW1JbmRpZ29MaWdodDogcmdiKDg4LDg2LDIxNCk7XFxuICAtLXN5c3RlbU9yYW5nZUxpZ2h0OiByZ2IoMjU1LDE0OSwwKTtcXG4gIC0tc3lzdGVtUGlua0xpZ2h0OiAgIHJnYigyNTUsNDUsODUpO1xcbiAgLS1zeXN0ZW1QdXJwbGVMaWdodDogcmdiKDE3NSw4MiwyMjIpO1xcbiAgLS1zeXN0ZW1SZWRMaWdodDogICAgcmdiKDI1NSw1OSw0OCk7XFxuICAtLXN5c3RlbVRlYWxMaWdodDogICByZ2IoOTAsMjAwLDI1MCk7XFxuICAtLXN5c3RlbVllbGxvd0xpZ2h0OiByZ2IoMjU1LDIwNCwwKTtcXG4gIC0tc3lzdGVtQmx1ZURhcms6ICAgIHJnYigxMCwxMzIsMjU1KTtcXG4gIC0tc3lzdGVtR3JheURhcms6ICAgIHJnYigxNTIsMTUyLDE1Nyk7XFxuICAtLXN5c3RlbUdyZWVuRGFyazogICByZ2IoNDgsMjA5LDg4KTtcXG4gIC0tc3lzdGVtSW5kaWdvRGFyazogIHJnYig5NCw5MiwyMzApO1xcbiAgLS1zeXN0ZW1PcmFuZ2VEYXJrOiAgcmdiKDI1NSwxNTksMTApO1xcbiAgLS1zeXN0ZW1QaW5rRGFyazogICAgcmdiKDI1NSw1NSw5NSk7XFxuICAtLXN5c3RlbVB1cnBsZURhcms6ICByZ2IoMTkxLDkwLDI0Mik7XFxuICAtLXN5c3RlbVJlZERhcms6ICAgICByZ2IoMjU1LDY5LDU4KTtcXG4gIC0tc3lzdGVtVGVhbERhcms6ICAgIHJnYigxMDAsMjEwLDI1NSk7XFxuICAtLXN5c3RlbVllbGxvd0Rhcms6ICByZ2IoMjU1LDIxNCwxMCk7XFxuICAtLXRleHQtYmFzZTogMCwwLDA7XFxuICAtLXRleHQ6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwxKTtcXG4gIC0tYmFja2dyb3VuZC1iYXNlOiAwLDAsMDtcXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpLCAxKTtcXG4gIC0tZm9udDogJyc7XFxuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMXZoKTtcXG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDsgfVxcbiAgaHRtbFt0aGVtZS1zdHlsZT0ncmV0cm8nXSB7XFxuICAgIC0tdGhlbWUtc3R5bGU6ICdyZXRybyc7XFxuICAgIC0tZm9udDogJ3B4cGx1c19pYm1fdmdhOHJlZ3VsYXInO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDsgfVxcbiAgaHRtbFt0aGVtZS1zdHlsZT0nbW9kZXJuJ10ge1xcbiAgICAtLXRoZW1lLXN0eWxlOiAnbW9kZXJuJztcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAtLWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLCBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5odG1sW3RoZW1lPVxcXCJsaWdodFxcXCJdIHtcXG4gIC0tcHJpbWFyeTogICB2YXIoLS1jaHJvbWXigJRjb2xvci1saWdodDApO1xcbiAgLS1zZWNvbmRhcnk6IHZhcigtLWNocm9tZeKAlGNvbG9yLWxpZ2h0MSk7XFxuICAtLXRoaXJkOiAgICAgdmFyKC0tY2hyb21l4oCUY29sb3ItbGlnaHQyKTtcXG4gIC0tc3lzdGVtQmx1ZTogICB2YXIoLS1zeXN0ZW1CbHVlTGlnaHQpO1xcbiAgLS1zeXN0ZW1HcmF5OiAgIHZhcigtLXN5c3RlbUdyYXlMaWdodCk7XFxuICAtLXN5c3RlbUdyZWVuOiAgdmFyKC0tc3lzdGVtR3JlZW5MaWdodCk7XFxuICAtLXN5c3RlbUluZGlnbzogdmFyKC0tc3lzdGVtSW5kaWdvTGlnaHQpO1xcbiAgLS1zeXN0ZW1PcmFuZ2U6IHZhcigtLXN5c3RlbU9yYW5nZUxpZ2h0KTtcXG4gIC0tc3lzdGVtUGluazogICB2YXIoLS1zeXN0ZW1QaW5rTGlnaHQpO1xcbiAgLS1zeXN0ZW1QdXJwbGU6IHZhcigtLXN5c3RlbVB1cnBsZUxpZ2h0KTtcXG4gIC0tc3lzdGVtUmVkOiAgICB2YXIoLS1zeXN0ZW1SZWRMaWdodCk7XFxuICAtLXN5c3RlbVRlYWw6ICAgdmFyKC0tc3lzdGVtVGVhbExpZ2h0KTtcXG4gIC0tc3lzdGVtWWVsbG93OiB2YXIoLS1zeXN0ZW1ZZWxsb3dMaWdodCk7XFxuICAtLWJhY2tncm91bmQtY29sb3ItLXNlbGVjdGlvbjogeWVsbG93OyB9XFxuICBodG1sW3RoZW1lPVxcXCJsaWdodFxcXCJdW3RoZW1lLXN0eWxlPSdyZXRybyddIHtcXG4gICAgLS10ZXh0LWJhc2U6ICAgICAgICB2YXIoLS10ZXh0LS1jb2xvci1iYXNlLS1saWdodCk7XFxuICAgIC0tYmFja2dyb3VuZC1iYXNlOiAgdmFyKC0tYmFja2dyb3VuZC0tY29sb3ItYmFzZS0tbGlnaHQpOyB9XFxuICBodG1sW3RoZW1lPVxcXCJsaWdodFxcXCJdW3RoZW1lLXN0eWxlPSdtb2Rlcm4nXSB7XFxuICAgIC0tdGV4dC1iYXNlOiAzOSwzOSwzOTtcXG4gICAgLS1iYWNrZ3JvdW5kLWJhc2U6IDI1NSwyNTUsMjU1O1xcbiAgICAtLXByaW1hcnk6ICAgI0ZiRmJGYjtcXG4gICAgLS1zZWNvbmRhcnk6ICNFYkViRWI7XFxuICAgIC0tdGhpcmQ6ICAgICAjRGJEYkRiOyB9XFxuXFxuaHRtbFt0aGVtZT0nZGFyayddIHtcXG4gIC0tcHJpbWFyeTogICB2YXIoLS1jaHJvbWXigJRjb2xvci1kYXJrMCk7XFxuICAtLXNlY29uZGFyeTogdmFyKC0tY2hyb21l4oCUY29sb3ItZGFyazEpO1xcbiAgLS10aGlyZDogICAgIHZhcigtLWNocm9tZeKAlGNvbG9yLWRhcmsyKTtcXG4gIC0tc3lzdGVtQmx1ZTogICB2YXIoLS1zeXN0ZW1CbHVlRGFyayk7XFxuICAtLXN5c3RlbUdyYXk6ICAgdmFyKC0tc3lzdGVtR3JheURhcmspO1xcbiAgLS1zeXN0ZW1HcmVlbjogIHZhcigtLXN5c3RlbUdyZWVuRGFyayk7XFxuICAtLXN5c3RlbUluZGlnbzogdmFyKC0tc3lzdGVtSW5kaWdvRGFyayk7XFxuICAtLXN5c3RlbU9yYW5nZTogdmFyKC0tc3lzdGVtT3JhbmdlRGFyayk7XFxuICAtLXN5c3RlbVBpbms6ICAgdmFyKC0tc3lzdGVtUGlua0RhcmspO1xcbiAgLS1zeXN0ZW1QdXJwbGU6IHZhcigtLXN5c3RlbVB1cnBsZURhcmspO1xcbiAgLS1zeXN0ZW1SZWQ6ICAgIHZhcigtLXN5c3RlbVJlZERhcmspO1xcbiAgLS1zeXN0ZW1UZWFsOiAgIHZhcigtLXN5c3RlbVRlYWxEYXJrKTtcXG4gIC0tc3lzdGVtWWVsbG93OiB2YXIoLS1zeXN0ZW1ZZWxsb3dEYXJrKTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiByZWQ7IH1cXG4gIGh0bWxbdGhlbWU9J2RhcmsnXVt0aGVtZS1zdHlsZT0ncmV0cm8nXSB7XFxuICAgIC0tdGV4dC1iYXNlOiAgICAgICB2YXIoLS10ZXh0LS1jb2xvci1iYXNlLS1kYXJrKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWJhc2U6IHZhcigtLWJhY2tncm91bmQtLWNvbG9yLWJhc2UtLWRhcmspOyB9XFxuICBodG1sW3RoZW1lPSdkYXJrJ11bdGhlbWUtc3R5bGU9J21vZGVybiddIHtcXG4gICAgLS10ZXh0LWJhc2U6IDI0NSwyNDUsMjQ1O1xcbiAgICAtLWJhY2tncm91bmQtYmFzZTogMCwwLDA7XFxuICAgIC0tcHJpbWFyeTogICAjMGIwYjBiO1xcbiAgICAtLXNlY29uZGFyeTogIzFiMWIxYjtcXG4gICAgLS10aGlyZDogICAgICMyYjJiMmI7IH1cXG5cXG5ib2R5LCBwLCBiLCBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tc2VsZWN0aW9uKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLXNlbGVjdGlvbik7IH1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC42KTsgfVxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMSk7IH1cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uZmFpbnQge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC41KTsgfVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpOyB9XFxuICBhOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMS4wO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7IH1cXG5cXG5ociB7XFxuICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC4xKTtcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNjAlOyB9XFxuXFxucCB7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7IH1cXG5cXG51bCB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDsgfVxcblxcbmxpIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlByaXNtLmxhbmd1YWdlcy5nbHNsID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjb21tZW50JzogW1xuXHRcdC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQvXFwvXFwvKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cXFxcXFxyXFxuXSkqL1xuXHRdLFxuXHQnbnVtYmVyJzogLyg/OlxcYjB4W1xcZGEtZl0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPylbdWxmXSovaSxcblx0J2tleXdvcmQnOiAvXFxiKD86YXR0cmlidXRlfGNvbnN0fHVuaWZvcm18dmFyeWluZ3xidWZmZXJ8c2hhcmVkfGNvaGVyZW50fHZvbGF0aWxlfHJlc3RyaWN0fHJlYWRvbmx5fHdyaXRlb25seXxhdG9taWNfdWludHxsYXlvdXR8Y2VudHJvaWR8ZmxhdHxzbW9vdGh8bm9wZXJzcGVjdGl2ZXxwYXRjaHxzYW1wbGV8YnJlYWt8Y29udGludWV8ZG98Zm9yfHdoaWxlfHN3aXRjaHxjYXNlfGRlZmF1bHR8aWZ8ZWxzZXxzdWJyb3V0aW5lfGlufG91dHxpbm91dHxmbG9hdHxkb3VibGV8aW50fHZvaWR8Ym9vbHx0cnVlfGZhbHNlfGludmFyaWFudHxwcmVjaXNlfGRpc2NhcmR8cmV0dXJufGQ/bWF0WzIzNF0oPzp4WzIzNF0pP3xbaWJkdV0/dmVjWzIzNF18dWludHxsb3dwfG1lZGl1bXB8aGlnaHB8cHJlY2lzaW9ufFtpdV0/c2FtcGxlclsxMjNdRHxbaXVdP3NhbXBsZXJDdWJlfHNhbXBsZXJbMTJdRFNoYWRvd3xzYW1wbGVyQ3ViZVNoYWRvd3xbaXVdP3NhbXBsZXJbMTJdREFycmF5fHNhbXBsZXJbMTJdREFycmF5U2hhZG93fFtpdV0/c2FtcGxlcjJEUmVjdHxzYW1wbGVyMkRSZWN0U2hhZG93fFtpdV0/c2FtcGxlckJ1ZmZlcnxbaXVdP3NhbXBsZXIyRE1TKD86QXJyYXkpP3xbaXVdP3NhbXBsZXJDdWJlQXJyYXl8c2FtcGxlckN1YmVBcnJheVNoYWRvd3xbaXVdP2ltYWdlWzEyM11EfFtpdV0/aW1hZ2UyRFJlY3R8W2l1XT9pbWFnZUN1YmV8W2l1XT9pbWFnZUJ1ZmZlcnxbaXVdP2ltYWdlWzEyXURBcnJheXxbaXVdP2ltYWdlQ3ViZUFycmF5fFtpdV0/aW1hZ2UyRE1TKD86QXJyYXkpP3xzdHJ1Y3R8Y29tbW9ufHBhcnRpdGlvbnxhY3RpdmV8YXNtfGNsYXNzfHVuaW9ufGVudW18dHlwZWRlZnx0ZW1wbGF0ZXx0aGlzfHJlc291cmNlfGdvdG98aW5saW5lfG5vaW5saW5lfHB1YmxpY3xzdGF0aWN8ZXh0ZXJufGV4dGVybmFsfGludGVyZmFjZXxsb25nfHNob3J0fGhhbGZ8Zml4ZWR8dW5zaWduZWR8c3VwZXJwfGlucHV0fG91dHB1dHxodmVjWzIzNF18ZnZlY1syMzRdfHNhbXBsZXIzRFJlY3R8ZmlsdGVyfHNpemVvZnxjYXN0fG5hbWVzcGFjZXx1c2luZylcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZ2xzbCcsICdjb21tZW50Jywge1xuXHQncHJlcHJvY2Vzc29yJzoge1xuXHRcdHBhdHRlcm46IC8oXlsgXFx0XSopIyg/Oig/OmRlZmluZXx1bmRlZnxpZnxpZmRlZnxpZm5kZWZ8ZWxzZXxlbGlmfGVuZGlmfGVycm9yfHByYWdtYXxleHRlbnNpb258dmVyc2lvbnxsaW5lKVxcYik/L20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2J1aWx0aW4nXG5cdH1cbn0pOyIsIlxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jb3JlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKiBNSVQgbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC9cbiAqIEBhdXRob3IgTGVhIFZlcm91IGh0dHA6Ly9sZWEudmVyb3UubWVcbiAqL1xuXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKXtcblxuLy8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xudmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcbnZhciB1bmlxdWVJZCA9IDA7XG5cbnZhciBfID0ge1xuXHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cdHV0aWw6IHtcblx0XHRlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBfLnV0aWwuZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKF8udXRpbC5lbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGxhbmd1YWdlczoge1xuXHRcdGV4dGVuZDogZnVuY3Rpb24gKGlkLCByZWRlZikge1xuXHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdGxhbmdba2V5XSA9IHJlZGVmW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsYW5nO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnNlcnQgYSB0b2tlbiBiZWZvcmUgYW5vdGhlciB0b2tlbiBpbiBhIGxhbmd1YWdlIGxpdGVyYWxcblx0XHQgKiBBcyB0aGlzIG5lZWRzIHRvIHJlY3JlYXRlIHRoZSBvYmplY3QgKHdlIGNhbm5vdCBhY3R1YWxseSBpbnNlcnQgYmVmb3JlIGtleXMgaW4gb2JqZWN0IGxpdGVyYWxzKSxcblx0XHQgKiB3ZSBjYW5ub3QganVzdCBwcm92aWRlIGFuIG9iamVjdCwgd2UgbmVlZCBhbiBvYmplY3QgYW5kIGEga2V5LlxuXHRcdCAqIEBwYXJhbSBpbnNpZGUgVGhlIGtleSAob3IgbGFuZ3VhZ2UgaWQpIG9mIHRoZSBwYXJlbnRcblx0XHQgKiBAcGFyYW0gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHQgKiBAcGFyYW0gaW5zZXJ0IE9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gaW5zZXJ0XG5cdFx0ICogQHBhcmFtIHJvb3QgVGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGBpbnNpZGVgLiBJZiBlcXVhbCB0byBQcmlzbS5sYW5ndWFnZXMsIGl0IGNhbiBiZSBvbWl0dGVkLlxuXHRcdCAqL1xuXHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdHJvb3QgPSByb290IHx8IF8ubGFuZ3VhZ2VzO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSByb290W2luc2lkZV07XG5cdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgdG9rZW4gd2hpY2ggYWxzbyBvY2N1ciBpbiBpbnNlcnQuIFNlZSAjMTUyNVxuXHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2xkID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0Xy5sYW5ndWFnZXMuREZTKF8ubGFuZ3VhZ2VzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gb2xkICYmIGtleSAhPSBpbnNpZGUpIHtcblx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvLyBUcmF2ZXJzZSBhIGxhbmd1YWdlIGRlZmluaXRpb24gd2l0aCBEZXB0aCBGaXJzdCBTZWFyY2hcblx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdHZhciBvYmpJZCA9IF8udXRpbC5vYmpJZDtcblxuXHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChvLCBpLCBvW2ldLCB0eXBlIHx8IGkpO1xuXG5cdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXSxcblx0XHRcdFx0XHQgICAgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0aWYgKHByb3BlcnR5VHlwZSA9PT0gJ09iamVjdCcgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczoge30sXG5cblx0aGlnaGxpZ2h0QWxsOiBmdW5jdGlvbihhc3luYywgY2FsbGJhY2spIHtcblx0XHRfLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spO1xuXHR9LFxuXG5cdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHR2YXIgZWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpO1xuXG5cdFx0Zm9yICh2YXIgaT0wLCBlbGVtZW50OyBlbGVtZW50ID0gZWxlbWVudHNbaSsrXTspIHtcblx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdHZhciBsYW5ndWFnZSA9ICdub25lJywgZ3JhbW1hciwgcGFyZW50ID0gZWxlbWVudDtcblxuXHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0bGFuZ3VhZ2UgPSAocGFyZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXHRcdH1cblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHRwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICgvcHJlL2kudGVzdChwYXJlbnQubm9kZU5hbWUpKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0dmFyIGluc2VydEhpZ2hsaWdodGVkQ29kZSA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy51dGlsLmVuY29kZShlbnYuY29kZSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luYyAmJiBfc2VsZi5Xb3JrZXIpIHtcblx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlOiBlbnYuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy5oaWdobGlnaHQoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtdG9rZW5pemUnLCBlbnYpO1xuXHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdH0sXG5cblx0bWF0Y2hHcmFtbWFyOiBmdW5jdGlvbiAodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpbmRleCwgc3RhcnRQb3MsIG9uZXNob3QsIHRhcmdldCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0b2tlbiA9PSB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gKF8udXRpbC50eXBlKHBhdHRlcm5zKSA9PT0gXCJBcnJheVwiKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQgPSAhIXBhdHRlcm4ubG9va2JlaGluZCxcblx0XHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRcdGFsaWFzID0gcGF0dGVybi5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybi5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXV5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgXCJnXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRcdC8vIERvbuKAmXQgY2FjaGUgbGVuZ3RoIGFzIGl0IGNoYW5nZXMgZHVyaW5nIHRoZSBsb29wXG5cdFx0XHRcdGZvciAodmFyIGkgPSBpbmRleCwgcG9zID0gc3RhcnRQb3M7IGkgPCBzdHJhcnIubGVuZ3RoOyBwb3MgKz0gc3RyYXJyW2ldLmxlbmd0aCwgKytpKSB7XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gc3RyYXJyW2ldO1xuXG5cdFx0XHRcdFx0aWYgKHN0cmFyci5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncmVlZHkgJiYgaSAhPSBzdHJhcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgPyBtYXRjaFsxXS5sZW5ndGggOiAwKSxcblx0XHRcdFx0XHRcdCAgICB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ICAgIGsgPSBpLFxuXHRcdFx0XHRcdFx0ICAgIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGxlbiA9IHN0cmFyci5sZW5ndGg7IGsgPCBsZW4gJiYgKHAgPCB0byB8fCAoIXN0cmFycltrXS50eXBlICYmICFzdHJhcnJbayAtIDFdLmdyZWVkeSkpOyArK2spIHtcblx0XHRcdFx0XHRcdFx0cCArPSBzdHJhcnJba10ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHQvLyBNb3ZlIHRoZSBpbmRleCBpIHRvIHRoZSBlbGVtZW50IGluIHN0cmFyciB0aGF0IGlzIGNsb3Nlc3QgdG8gZnJvbVxuXHRcdFx0XHRcdFx0XHRpZiAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgc3RyYXJyW2ldIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKHN0cmFycltpXSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOdW1iZXIgb2YgdG9rZW5zIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdGRlbE51bSA9IGsgLSBpO1xuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpLFxuXHRcdFx0XHRcdFx0XHRkZWxOdW0gPSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdCAgICBtYXRjaCA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpLFxuXHRcdFx0XHRcdCAgICB0byA9IGZyb20gKyBtYXRjaC5sZW5ndGgsXG5cdFx0XHRcdFx0ICAgIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHQgICAgYWZ0ZXIgPSBzdHIuc2xpY2UodG8pO1xuXG5cdFx0XHRcdFx0dmFyIGFyZ3MgPSBbaSwgZGVsTnVtXTtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdCsraTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGJlZm9yZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZT8gXy50b2tlbml6ZShtYXRjaCwgaW5zaWRlKSA6IG1hdGNoLCBhbGlhcywgbWF0Y2gsIGdyZWVkeSk7XG5cblx0XHRcdFx0XHRhcmdzLnB1c2god3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFyZ3MucHVzaChhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShzdHJhcnIsIGFyZ3MpO1xuXG5cdFx0XHRcdFx0aWYgKGRlbE51bSAhPSAxKVxuXHRcdFx0XHRcdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpLCBwb3MsIHRydWUsIHRva2VuKTtcblxuXHRcdFx0XHRcdGlmIChvbmVzaG90KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgc3RyYXJyID0gW3RleHRdO1xuXG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgMCwgMCwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHN0cmFycjtcblx0fSxcblxuXHRob29rczoge1xuXHRcdGFsbDoge30sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNhbGxiYWNrOyBjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdOykge1xuXHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRUb2tlbjogVG9rZW5cbn07XG5cbl9zZWxmLlByaXNtID0gXztcblxuZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuXHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8IFwiXCIpLmxlbmd0aHwwO1xuXHR0aGlzLmdyZWVkeSA9ICEhZ3JlZWR5O1xufVxuXG5Ub2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbihvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0cmV0dXJuIG8ubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoZWxlbWVudCwgbGFuZ3VhZ2UpO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGVudiA9IHtcblx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0Y29udGVudDogVG9rZW4uc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdHRhZzogJ3NwYW4nLFxuXHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHR9O1xuXG5cdGlmIChvLmFsaWFzKSB7XG5cdFx0dmFyIGFsaWFzZXMgPSBBcnJheS5pc0FycmF5KG8uYWxpYXMpID8gby5hbGlhcyA6IFtvLmFsaWFzXTtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdH1cblxuXHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0dmFyIGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhlbnYuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHR9KS5qb2luKCcgJyk7XG5cblx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAoYXR0cmlidXRlcyA/ICcgJyArIGF0dHJpYnV0ZXMgOiAnJykgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xufTtcblxuaWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0Ly8gSW4gd29ya2VyXG5cdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSksXG5cdFx0XHRcdGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlID0gbWVzc2FnZS5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZXR1cm4gXztcbn1cblxuLy9HZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucG9wKCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKCFfLm1hbnVhbCAmJiAhc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8uaGlnaGxpZ2h0QWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KF8uaGlnaGxpZ2h0QWxsLCAxNik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIF8uaGlnaGxpZ2h0QWxsKTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tbWFya3VwLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG5cdCdjb21tZW50JzogLzwhLS1bXFxzXFxTXSo/LS0+Lyxcblx0J3Byb2xvZyc6IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuXHQnZG9jdHlwZSc6IC88IURPQ1RZUEVbXFxzXFxTXSs/Pi9pLFxuXHQnY2RhdGEnOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0L149Lyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcblxuXHRpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG5cdFx0ZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG5cdH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGA8c3R5bGU+YCB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcblx0ICogY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cblx0ICogQGV4YW1wbGVcblx0ICogYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG5cdFx0dmFyIGluY2x1ZGVkQ2RhdGFJbnNpZGUgPSB7fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvKF48IVxcW0NEQVRBXFxbKVtcXHNcXFNdKz8oPz1cXF1cXF0+JCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXG5cdFx0dmFyIGluc2lkZSA9IHtcblx0XHRcdCdpbmNsdWRlZC1jZGF0YSc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdFx0XHRpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcblx0XHRcdH1cblx0XHR9O1xuXHRcdGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cblx0XHR2YXIgZGVmID0ge307XG5cdFx0ZGVmW3RhZ05hbWVdID0ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oPF9fW1xcc1xcU10qPz4pKD86PCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+XFxzKnxbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgdGFnTmFtZSksICdpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBpbnNpZGVcblx0XHR9O1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMubWF0aG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5zdmcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0J2F0cnVsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9AW1xcdy1dK1tcXHNcXFNdKj8oPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvQFtcXHctXSsvXG5cdFx0XHRcdC8vIFNlZSByZXN0IGJlbG93XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndXJsJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCd1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3xbXlxcblxccigpXSopXFxcXCknLCAnaScpLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnc2VsZWN0b3InOiBSZWdFeHAoJ1tee31cXFxcc10oPzpbXnt9O1wiXFwnXXwnICsgc3RyaW5nLnNvdXJjZSArICcpKj8oPz1cXFxccypcXFxceyknKSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiAvWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLFxuXHRcdCdpbXBvcnRhbnQnOiAvIWltcG9ydGFudFxcYi9pLFxuXHRcdCdmdW5jdGlvbic6IC9bLWEtejAtOV0rKD89XFwoKS9pLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2luc2lkZScsICdhdHRyLXZhbHVlJywge1xuXHRcdFx0J3N0eWxlLWF0dHInOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cXHMqc3R5bGU9KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFxzKnN0eWxlL2ksXG5cdFx0XHRcdFx0XHRpbnNpZGU6IG1hcmt1cC50YWcuaW5zaWRlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFxuXHRcdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogLy4rL2ksXG5cdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3Ncblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJ1xuXHRcdFx0fVxuXHRcdH0sIG1hcmt1cC50YWcpO1xuXHR9XG5cbn0oUHJpc20pKTtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNsaWtlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5jbGlrZSA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRwdW5jdHVhdGlvbjogL1suXFxcXF0vXG5cdFx0fVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdCdmdW5jdGlvbic6IC9cXHcrKD89XFwoKS8sXG5cdCdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC8tLT98XFwrXFwrP3whPT89P3w8PT98Pj0/fD09Pz0/fCYmP3xcXHxcXHw/fFxcP3xcXCp8XFwvfH58XFxefCUvLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pW18kQS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86Xnx9KVxccyopKD86Y2F0Y2h8ZmluYWxseSlcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pXFxiKD86YXN8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdF0sXG5cdCdudW1iZXInOiAvXFxiKD86KD86MFt4WF0oPzpbXFxkQS1GYS1mXSg/Ol9bXFxkQS1GYS1mXSk/KSt8MFtiQl0oPzpbMDFdKD86X1swMV0pPykrfDBbb09dKD86WzAtN10oPzpfWzAtN10pPykrKW4/fCg/OlxcZCg/Ol9cXGQpPykrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYig/OlxcZCg/Ol9cXGQpPykrXFwuPyg/OlxcZCg/Ol9cXGQpPykqfFxcQlxcLig/OlxcZCg/Ol9cXGQpPykrKSg/OltFZV1bKy1dPyg/OlxcZCg/Ol9cXGQpPykrKT8vLFxuXHQvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcblx0J2Z1bmN0aW9uJzogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHQnb3BlcmF0b3InOiAvLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oXFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PVxccyooJHxbXFxyXFxuLC47fSlcXF1dKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccytbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9bXyRhLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKj0+KS9pLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fVxuXHRdLFxuXHQnY29uc3RhbnQnOiAvXFxiW0EtWl0oPzpbQS1aX118XFxkeD8pKlxcYi9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcblx0J3RlbXBsYXRlLXN0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK318KD8hXFwkeylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCR7fH0kLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0fVxuXHR9XG59KTtcblxuaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZCgnc2NyaXB0JywgJ2phdmFzY3JpcHQnKTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1maWxlLWhpZ2hsaWdodC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8ICFzZWxmLlByaXNtIHx8ICFzZWxmLmRvY3VtZW50IHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0ICovXG5cdHNlbGYuUHJpc20uZmlsZUhpZ2hsaWdodCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBFeHRlbnNpb25zID0ge1xuXHRcdFx0J2pzJzogJ2phdmFzY3JpcHQnLFxuXHRcdFx0J3B5JzogJ3B5dGhvbicsXG5cdFx0XHQncmInOiAncnVieScsXG5cdFx0XHQncHMxJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdFx0J3BzbTEnOiAncG93ZXJzaGVsbCcsXG5cdFx0XHQnc2gnOiAnYmFzaCcsXG5cdFx0XHQnYmF0JzogJ2JhdGNoJyxcblx0XHRcdCdoJzogJ2MnLFxuXHRcdFx0J3RleCc6ICdsYXRleCdcblx0XHR9O1xuXG5cdFx0QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZVtkYXRhLXNyY10nKSkuZm9yRWFjaChmdW5jdGlvbiAocHJlKSB7XG5cdFx0XHQvLyBpZ25vcmUgaWYgYWxyZWFkeSBsb2FkZWRcblx0XHRcdGlmIChwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYy1sb2FkZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxvYWQgY3VycmVudFxuXHRcdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHZhciBsYW5ndWFnZSwgcGFyZW50ID0gcHJlO1xuXHRcdFx0dmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcblx0XHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0XHRsYW5ndWFnZSA9IChwcmUuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICcnXSlbMV07XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9IChzcmMubWF0Y2goL1xcLihcXHcrKSQvKSB8fCBbLCAnJ10pWzFdO1xuXHRcdFx0XHRsYW5ndWFnZSA9IEV4dGVuc2lvbnNbZXh0ZW5zaW9uXSB8fCBleHRlbnNpb247XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29kZScpO1xuXHRcdFx0Y29kZS5jbGFzc05hbWUgPSAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0XHRwcmUudGV4dENvbnRlbnQgPSAnJztcblxuXHRcdFx0Y29kZS50ZXh0Q29udGVudCA9ICdMb2FkaW5n4oCmJztcblxuXHRcdFx0cHJlLmFwcGVuZENoaWxkKGNvZGUpO1xuXG5cdFx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRcdHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXG5cdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPCA0MDAgJiYgeGhyLnJlc3BvbnNlVGV4dCkge1xuXHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IHhoci5yZXNwb25zZVRleHQ7XG5cblx0XHRcdFx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZSk7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGxvYWRlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMtbG9hZGVkJywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9ICfinJYgRXJyb3IgJyArIHhoci5zdGF0dXMgKyAnIHdoaWxlIGZldGNoaW5nIGZpbGU6ICcgKyB4aHIuc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ+KcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR4aHIuc2VuZChudWxsKTtcblx0XHR9KTtcblxuXHRcdGlmIChQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRcdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignZG93bmxvYWQtZmlsZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRcdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmsnKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHRcdFx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGEudGV4dENvbnRlbnQgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmstbGFiZWwnKSB8fCAnRG93bmxvYWQnO1xuXHRcdFx0XHRhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJyk7XG5cdFx0XHRcdGEuaHJlZiA9IHNyYztcblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdC8vIGV4ZWN1dGUgaW5zaWRlIGhhbmRsZXIsIGZvciBkcm9wcGluZyBFdmVudCBhcyBhcmd1bWVudFxuXHRcdHNlbGYuUHJpc20uZmlsZUhpZ2hsaWdodCgpO1xuXHR9KTtcblxufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXlpc2ggPSByZXF1aXJlKCdpcy1hcnJheWlzaCcpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiZXhwb3J0IHsgYWZ0ZXJVcGRhdGUsIGJlZm9yZVVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBnZXRDb250ZXh0LCBvbkRlc3Ryb3ksIG9uTW91bnQsIHNldENvbnRleHQsIHRpY2sgfSBmcm9tICcuL2ludGVybmFsJztcbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmICghc3RvcmUgfHwgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV1cbiAgICAgICAgPyBhc3NpZ24oe30sIGFzc2lnbihjdHguJCRzY29wZS5jdHgsIGRlZmluaXRpb25bMV0oZm4gPyBmbihjdHgpIDoge30pKSlcbiAgICAgICAgOiBjdHguJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sIGN0eCwgY2hhbmdlZCwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXVxuICAgICAgICA/IGFzc2lnbih7fSwgYXNzaWduKGN0eC4kJHNjb3BlLmNoYW5nZWQgfHwge30sIGRlZmluaXRpb25bMV0oZm4gPyBmbihjaGFuZ2VkKSA6IHt9KSkpXG4gICAgICAgIDogY3R4LiQkc2NvcGUuY2hhbmdlZCB8fCB7fTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSA9IHJldCkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKCkge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFza1swXShub3coKSkpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tbMV0oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJ1bm5pbmcgPSB0YXNrcy5zaXplID4gMDtcbiAgICBpZiAocnVubmluZylcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICAvLyBmb3IgdGVzdGluZy4uLlxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrcy5kZWxldGUodGFzaykpO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGxvb3AoZm4pIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSBbZm4sIGZ1bGZpbF0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW9iamVjdC1saXRlcmFsLXR5cGUtYXNzZXJ0aW9uXG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2VcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCkge1xuICAgIGNvbnN0IHZhbHVlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKVxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3ZnID8gc3ZnX2VsZW1lbnQobmFtZSkgOiBlbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gJycgKyBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dChkYXRhKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX3RleHQobm9kZXMsICcgJyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhICE9PSBkYXRhKVxuICAgICAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsIHx8IGlucHV0LnZhbHVlKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihlbGVtZW50LCBmbikge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3Qgb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG4gICAgb2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgb2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcbiAgICBvYmplY3QudGFiSW5kZXggPSAtMTtcbiAgICBsZXQgd2luO1xuICAgIG9iamVjdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG4gICAgfTtcbiAgICBpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgICBvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICB3aW4gJiYgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGh0bWwsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5lID0gZWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYSA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy51KGh0bWwpO1xuICAgIH1cbiAgICBtKHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRhcmdldCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICB9XG4gICAgdShodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLnUoaHRtbCk7XG4gICAgICAgIHRoaXMubSh0aGlzLnQsIHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuXG5sZXQgc3R5bGVzaGVldDtcbmxldCBhY3RpdmUgPSAwO1xubGV0IGN1cnJlbnRfcnVsZXMgPSB7fTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGlmICghY3VycmVudF9ydWxlc1tuYW1lXSkge1xuICAgICAgICBpZiAoIXN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiBgYH0ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcbiAgICAgICAgLnNwbGl0KCcsICcpXG4gICAgICAgIC5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApXG4gICAgICAgIC5qb2luKCcsICcpO1xuICAgIGlmIChuYW1lICYmICEtLWFjdGl2ZSlcbiAgICAgICAgY2xlYXJfcnVsZXMoKTtcbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgIGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbmApO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCkge1xuICAgICAgICAkJC51cGRhdGUoJCQuZGlydHkpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICAkJC5mcmFnbWVudC5wKCQkLmRpcnR5LCAkJC5jdHgpO1xuICAgICAgICAkJC5kaXJ0eSA9IG51bGw7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IHByb2dyYW0uYiAtIHQ7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0ga2V5ICYmIHsgW2tleV06IHZhbHVlIH07XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGFzc2lnbihhc3NpZ24oe30sIGluZm8uY3R4KSwgaW5mby5yZXNvbHZlZCk7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB7IFtpbmZvLnZhbHVlXTogcHJvbWlzZSB9O1xuICAgIH1cbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBjaGFuZ2VkLCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hhbmdlZCwgY2hpbGRfY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0KTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gbWVhc3VyZShibG9ja3MpIHtcbiAgICBjb25zdCByZWN0cyA9IHt9O1xuICAgIGxldCBpID0gYmxvY2tzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICByZWN0c1tibG9ja3NbaV0ua2V5XSA9IGJsb2Nrc1tpXS5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0cztcbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncykge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgIGNvbnN0IGVzY2FwZWQgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJyYjMzQ7JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xuICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lICsgXCI9XCIgKyBKU09OLnN0cmluZ2lmeShlc2NhcGVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cykge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gYCAke25hbWV9JHt2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogYGA7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmIChjb21wb25lbnQuJCQucHJvcHMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXG4gICAgICAgIHJldHVybjtcbiAgICBjb21wb25lbnQuJCQuYm91bmRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W25hbWVdKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yKSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgfSk7XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGlmIChjb21wb25lbnQuJCQuZnJhZ21lbnQpIHtcbiAgICAgICAgcnVuX2FsbChjb21wb25lbnQuJCQub25fZGVzdHJveSk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICBjb21wb25lbnQuJCQub25fZGVzdHJveSA9IGNvbXBvbmVudC4kJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIGNvbXBvbmVudC4kJC5jdHggPSB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwga2V5KSB7XG4gICAgaWYgKCFjb21wb25lbnQuJCQuZGlydHkpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkgPSBibGFua19vYmplY3QoKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5W2tleV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcF9uYW1lcykge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCBwcm9wcyA9IG9wdGlvbnMucHJvcHMgfHwge307XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzOiBwcm9wX25hbWVzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5OiBudWxsXG4gICAgfTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgcHJvcHMsIChrZXksIHJldCwgdmFsdWUgPSByZXQpID0+IHtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtrZXldLCAkJC5jdHhba2V5XSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICgkJC5ib3VuZFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtrZXldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBwcm9wcztcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQubChjaGlsZHJlbihvcHRpb25zLnRhcmdldCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgpIHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoKSB7XG4gICAgICAgIC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZVwiLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbXCJjYXB0dXJlXCJdIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRQcm9wZXJ0eVwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhc2V0XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhXCIsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvbmApO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUVsZW1lbnQsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2VsZW1lbnQsIGNsYWltX3NwYWNlLCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlc2NhcGUsIGVzY2FwZWQsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0Q29udGV4dCwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dCwgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbWVhc3VyZSwgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHJhZiwgcnVuLCBydW5fYWxsLCBzYWZlX25vdF9lcXVhbCwgc2NoZWR1bGVfdXBkYXRlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIHNlbGVjdF9vcHRpb24sIHNlbGVjdF9vcHRpb25zLCBzZWxlY3RfdmFsdWUsIHNlbGYsIHNldENvbnRleHQsIHNldF9hdHRyaWJ1dGVzLCBzZXRfY3VycmVudF9jb21wb25lbnQsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCBzZXRfZGF0YSwgc2V0X2RhdGFfZGV2LCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB1cGRhdGVfa2V5ZWRfZWFjaCwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9zdG9yZSwgeGxpbmtfYXR0ciB9O1xuIiwiaW1wb3J0IHsgc2FmZV9ub3RfZXF1YWwsIG5vb3AsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuZXhwb3J0IHsgZ2V0X3N0b3JlX3ZhbHVlIGFzIGdldCB9IGZyb20gJy4uL2ludGVybmFsJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZSxcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cbi8qKlxuICogRGVyaXZlZCB2YWx1ZSBzdG9yZSBieSBzeW5jaHJvbml6aW5nIG9uZSBvciBtb3JlIHJlYWRhYmxlIHN0b3JlcyBhbmRcbiAqIGFwcGx5aW5nIGFuIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIG92ZXIgaXRzIGlucHV0IHZhbHVlcy5cbiAqIEBwYXJhbSB7U3RvcmVzfSBzdG9yZXMgaW5wdXQgc3RvcmVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKFN0b3Jlcz0sIGZ1bmN0aW9uKCopPSk6Kn1mbiBmdW5jdGlvbiBjYWxsYmFjayB0aGF0IGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlc1xuICogQHBhcmFtIHsqPX1pbml0aWFsX3ZhbHVlIHdoZW4gdXNlZCBhc3luY2hyb25vdXNseVxuICovXG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN0b3JlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnLi9tYWluLnNhc3MnXG5pbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9hcHAnXG5cbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcidcbmltcG9ydCB7IHRoZW1lLCB0aGVtZVN0eWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3Jlcy5qcydcblxuY29uc3QgdXBkYXRlR2xvYmFsQ29sb3JWYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0U3R5bGUgPSAoZSwgcCwgdikgPT4gZS5zdHlsZS5zZXRQcm9wZXJ0eShwLCB2KVxuICAgIGNvbnN0IGdldFN0eWxlQXNSR0IgPSAoZSwgcCkgPT5cbiAgICAgICAgQ29sb3IoXG4gICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGUpXG4gICAgICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUocClcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICkub2JqZWN0KClcbiAgICB3aW5kb3cuY29sb3IgPSB7XG4gICAgICAgIHRleHQ6IGdldFN0eWxlQXNSR0IoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnLS10ZXh0JyksXG4gICAgICAgIGJhY2tncm91bmQ6IGdldFN0eWxlQXNSR0IoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnLS1iYWNrZ3JvdW5kJyksXG4gICAgfVxufVxuXG52YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbikge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgIHVwZGF0ZUdsb2JhbENvbG9yVmFyaWFibGVzKClcbiAgICAgICAgICAgIHRoZW1lLnNldChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZScpKVxuICAgICAgICAgICAgdGhlbWVTdHlsZS5zZXQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsIC8vY29uZmlndXJlIGl0IHRvIGxpc3RlbiB0byBhdHRyaWJ1dGUgY2hhbmdlc1xufSlcblxud2luZG93XG4gICAgLm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJylcbiAgICAuYWRkTGlzdGVuZXIodXBkYXRlR2xvYmFsQ29sb3JWYXJpYWJsZXMpXG5cbnVwZGF0ZUdsb2JhbENvbG9yVmFyaWFibGVzKClcblxud2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICd0aGVtZScsXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXNcbiAgICAgICAgICAgID8gJ2xpZ2h0J1xuICAgICAgICAgICAgOiAnZGFyaydcbiAgICApXG59KVxuXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICd0aGVtZScsXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlc1xuICAgICAgICA/ICdsaWdodCdcbiAgICAgICAgOiAnZGFyaydcbilcblxuc2FwcGVyXG4gICAgLnN0YXJ0KHtcbiAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyJyksXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQtc2lkZSBhcHAgaGFzIHN0YXJ0ZWQnKVxuICAgIH0pXG4iLCI8c2NyaXB0IGxhbmc9XCJjb2ZmZWVcIj52YXIgc2VnbWVudDtcblxuc2VnbWVudCA9IHZvaWQgMDtcblxuZXhwb3J0IHtcbiAgc2VnbWVudFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxudWw6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDsgfVxuXG5saSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5hIHtcbiAgY29sb3I6IHJnYmEodmFyKC0tdGV4dC1iYXNlKSwgMC41KTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAwZW0gMWVtO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPU5hdi5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxuYXY+PHVsPnsjZWFjaCBbJ2hvbWUnLCAnYWJvdXQnXSBhcyBwYWdlfTxsaT48YSBjbGFzcz1cIntzZWdtZW50ID09PSBwYWdlID8gJ3NlbGVjdGVkJyA6ICcnfVwiIGhyZWY9XCJ7cGFnZSA9PT0gJ2hvbWUnID8gJy4nIDogcGFnZX1cIj57cGFnZX08L2E+PC9saT57L2VhY2h9PC91bD48L25hdj5cbiIsIjxzdHlsZSBsYW5nPVwic2Fzc1wiPmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtOTk5OyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmluZy1iYWNrZ3JvdW5kLnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPGNhbnZhcyBiaW5kOnRoaXM9XCJ7Y2FudmFzfVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG5pbXBvcnQgeyB2MiwgbWF0NCB9IGZyb20gJy4vdXRpbHMvbWF0aCdcbmltcG9ydCB7IHJhbmRGbG9hdCB9IGZyb20gJy4vdXRpbHMvdXRpbGl0eSdcblxuZXhwb3J0IGxldCBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9uc1xuXG5sZXQgc3RhcnRUaW1lID0gMFxubGV0IHRleHRDb2xvclxubGV0IGJhY2tDb2xvclxuXG5sZXQgZ2xcbmxldCB2YW9cbmxldCB2Ym8gPSBuZXcgTWFwKClcbmxldCBwcm9ncmFtXG5cbmxldCBnQXR0cmliTG9jYXRpb25WaWV3cG9ydFNpemUgPSA0XG5cbmxldCB2ZXJ0aWNlc0F0dHJpYkxvY2F0aW9uID0gMFxubGV0IHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uID0gMVxubGV0IGNvbG9yc0F0dHJpYkxvY2F0aW9uID0gMlxubGV0IHNpemVzQXR0cmliTG9jYXRpb24gPSAzXG5cbmxldCBjYW52YXNcbmxldCBjYW52YXNXaWR0aCA9IDMwMFxubGV0IGNhbnZhc0hlaWdodCA9IDMwMFxuXG5sZXQgYmluZFRvID0gJ21vdmluZy1iYWNrZ3JvdW5kJ1xubGV0IG51bVZlcnRpY2VzUGVyQ2lyY2xlID0gMzZcbmxldCBkZXNpcmVkUHJpbWl0aXZlQ291bnQgPSBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9ucy5jb3VudFxubGV0IHBhcnRpY2xlU2l6ZSA9IG1vdmluZ0JhY2tncm91bmRPcHRpb25zLnBhcnRpY2xlU2l6ZVxubGV0IGluaXRGdW5jID0gbW92aW5nQmFja2dyb3VuZE9wdGlvbnMuaW5pdFxubGV0IHVwZGF0ZUZ1bmMgPSBtb3ZpbmdCYWNrZ3JvdW5kT3B0aW9ucy51cGRhdGVcblxubGV0IGxhc3RQcmltaXRpdmVDb3VudCA9IDBcbmxldCBwcmltaXRpdmVDb3VudCA9IDBcblxubGV0IGxhc3RJbmZvID0ge1xuICAgIHZlcnRpY2VzTGVuZ3RoOiAwLFxuICAgIHBvc2l0aW9uc0xlbmd0aDogMCxcbiAgICBjb2xvcnNMZW5ndGg6IDAsXG4gICAgc2l6ZXNMZW5ndGg6IDAsXG59XG5cbmxldCB2ZXJ0aWNlcyA9IFtdXG5sZXQgcG9zaXRpb25zID0gW11cbmxldCBjb2xvcnMgPSBbXVxubGV0IHNpemVzID0gW11cblxuXG5sZXQgdmVsb2NpdGllcyA9IFtdXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIHJldHVybiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMFxufVxuY29uc3QgdXBkYXRlR1BVQnVmZmVycyA9IGFzeW5jICgpID0+IHtcblxuICAgIC8vIFRoZXNlIGFyZSBuZXZlciB1cGRhdGVkIGF0IHRoZSBtb21lbnQuXG4gICAgLy8gZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ3ZlcnRpY2VzJykpXG4gICAgLy8gY29uc3QgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGhcbiAgICAvLyBpZiAodmVydGljZXNMZW5ndGggPj0gbGFzdEluZm8udmVydGljZXNMZW5ndGgpIHtcbiAgICAvLyAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgLy8gICAgIGxhc3RJbmZvLnZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXNMZW5ndGhcbiAgICAvLyB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCAwLCAwKVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ3Bvc2l0aW9ucycpKVxuICAgIGNvbnN0IHBvc2l0aW9uc0xlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGhcbiAgICBpZiAocG9zaXRpb25zTGVuZ3RoID49IGxhc3RJbmZvLnBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgIGxhc3RJbmZvLnBvc2l0aW9uc0xlbmd0aCA9IHBvc2l0aW9uc0xlbmd0aFxuICAgIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLCAwLCAwKVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ2NvbG9ycycpKVxuICAgIGNvbnN0IGNvbG9yc0xlbmd0aCA9IGNvbG9ycy5sZW5ndGhcbiAgICBpZiAoY29sb3JzTGVuZ3RoID49IGxhc3RJbmZvLmNvbG9yc0xlbmd0aCkge1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgIGxhc3RJbmZvLmNvbG9yc0xlbmd0aCA9IGNvbG9yc0xlbmd0aFxuICAgIH0gZWxzZSBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAwLCAwKVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiby5nZXQoJ3NpemVzJykpXG4gICAgY29uc3Qgc2l6ZXNMZW5ndGggPSBzaXplcy5sZW5ndGhcbiAgICBpZiAoc2l6ZXNMZW5ndGggPj0gbGFzdEluZm8uc2l6ZXNMZW5ndGgpIHtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoc2l6ZXMpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgICAgIGxhc3RJbmZvLnNpemVzTGVuZ3RoID0gc2l6ZXNMZW5ndGhcbiAgICB9IGVsc2UgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoc2l6ZXMpLCAwLCAwKVxufVxuXG5jb25zdCBub3JtYWxpemUgPSByZ2JhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiByZ2JhLnIgLyAyNTUsXG4gICAgICAgIGc6IHJnYmEuZyAvIDI1NSxcbiAgICAgICAgYjogcmdiYS5iIC8gMjU1LFxuICAgICAgICBhOiByZ2JhLmEgfHwgcmdiYS5hIC8gMjU1LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVmVydGljZXMoKSB7XG4gICAgbnVtVmVydGljZXNQZXJDaXJjbGUgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGguc2luKGdldFRpbWUoKSkqMTIpKzMpXG4gICAgLy8gQWRkIHZlcnRpY2VzXG4gICAgdmVydGljZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXNQZXJDaXJjbGU7ICsraSkge1xuICAgICAgICBjb25zdCBjb250ID0gaSAqIE1hdGguUEkgKiAyIC8gbnVtVmVydGljZXNQZXJDaXJjbGVcbiAgICAgICAgdmVydGljZXMucHVzaChNYXRoLmNvcyhjb250KSwgTWF0aC5zaW4oY29udCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKCkge1xuICAgIGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIHZhciBkZXNpcmVkQ1NTV2lkdGggPSBjYW52YXNXaWR0aFxuICAgIHZhciBkZXNpcmVkQ1NTSGVpZ2h0ID0gY2FudmFzSGVpZ2h0XG4gICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcblxuICAgIGNhbnZhcy53aWR0aCA9IGRlc2lyZWRDU1NXaWR0aCAqIGRldmljZVBpeGVsUmF0aW9cbiAgICBjYW52YXMuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCAqIGRldmljZVBpeGVsUmF0aW9cblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGRlc2lyZWRDU1NXaWR0aCArICdweCdcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCArICdweCdcblxuICAgIGNhbnZhc1dpZHRoICo9IGRldmljZVBpeGVsUmF0aW9cbiAgICBjYW52YXNIZWlnaHQgKj0gZGV2aWNlUGl4ZWxSYXRpb1xuXG4gICAgdGV4dENvbG9yID0gbm9ybWFsaXplKHdpbmRvdy5jb2xvci50ZXh0KVxuICAgIHRleHRDb2xvci5hID0gMC4yXG5cbiAgICBiYWNrQ29sb3IgPSBub3JtYWxpemUod2luZG93LmNvbG9yLmJhY2tncm91bmQpXG4gICAgYmFja0NvbG9yLmEgPSAxLjBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZHJhdygpIHtcbiAgICB1cGRhdGVWYWx1ZXMoKVxuXG4gICAgbGV0IHBpID0gMFxuICAgIGxldCBjaSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW1pdGl2ZUNvdW50OyArK2kpIHtcbiAgICAgICAgY29uc3QgcCA9IHVwZGF0ZUZ1bmMoe1xuICAgICAgICAgICAgcG9zOiB7eDogcG9zaXRpb25zW3BpXSwgeTogcG9zaXRpb25zW3BpKzFdfSxcbiAgICAgICAgICAgIHZlbDoge3g6IHZlbG9jaXRpZXNbcGldLCB5OiB2ZWxvY2l0aWVzW3BpKzFdfSxcbiAgICAgICAgICAgIHNpemU6IHNpemVzW2ldLFxuICAgICAgICAgICAgY29sb3I6IHtyOiBjb2xvcnNbY2ldLCBnOiBjb2xvcnNbY2krMV0sIGI6IGNvbG9yc1tjaSsyXSwgYTogY29sb3JzW2NpKzNdfVxuICAgICAgICB9KVxuXG4gICAgICAgIHBvc2l0aW9uc1twaV0gPSBwLnBvcy54XG4gICAgICAgIHBvc2l0aW9uc1twaSsxXSA9IHAucG9zLnlcblxuICAgICAgICB2ZWxvY2l0aWVzW3BpXSA9IHAudmVsLnhcbiAgICAgICAgdmVsb2NpdGllc1twaSsxXSA9IHAudmVsLnlcblxuICAgICAgICBzaXplc1tpXSA9IHAuc2l6ZVxuXG4gICAgICAgIGNvbG9yc1tjaSswXSA9IHAuY29sb3IuclxuICAgICAgICBjb2xvcnNbY2krMV0gPSBwLmNvbG9yLmdcbiAgICAgICAgY29sb3JzW2NpKzJdID0gcC5jb2xvci5iXG4gICAgICAgIGNvbG9yc1tjaSszXSA9IHAuY29sb3IuYVxuICAgICAgICBcbiAgICAgICAgcGkgKz0gMlxuICAgICAgICBjaSArPSA0XG4gICAgfVxuXG5cbiAgICBnbC5jbGVhckNvbG9yKDAsMCwwLCAwLjApXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVClcblxuICAgIC8vIFNldHVwIHZpZXdwb3J0LCBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXhcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKVxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXG4gICAgZ2wudW5pZm9ybTJmKGdBdHRyaWJMb2NhdGlvblZpZXdwb3J0U2l6ZSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodClcblxuICAgIGNvbnN0IHR5cGUgPSBnbC5UUklBTkdMRV9GQU5cbiAgICBjb25zdCBmaXJzdCA9IDBcbiAgICBjb25zdCBjb3VudCA9IG51bVZlcnRpY2VzUGVyQ2lyY2xlXG4gICAgY29uc3QgcHJpbWl0aXZlX2NvdW50ID0gcHJpbWl0aXZlQ291bnRcblxuICAgIGF3YWl0IHVwZGF0ZUdQVUJ1ZmZlcnMoKVxuICAgIGdsLmRyYXdBcnJheXNJbnN0YW5jZWQodHlwZSwgZmlyc3QsIGNvdW50LCBwcmltaXRpdmVfY291bnQpXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF3YWl0IGRyYXcpXG5cbiAgICBsYXN0UHJpbWl0aXZlQ291bnQgPSBwcmltaXRpdmVDb3VudFxufVxuXG5vbk1vdW50KGFzeW5jICgpID0+IHtcblxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIilcblxuICAgIGlmICghZ2wpICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gd2ViZ2wyIGNvbnRleHQgZm91bmQuIHN0b3BwaW5nLlwiKVxuICAgICAgICByZXR1cm4gXG4gICAgfVxuXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKVxuICAgIGdsLmJsZW5kRXF1YXRpb24oZ2wuRlVOQ19BREQpXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcblxuICAgIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgICBsZXQgdnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUilcbiAgICBsZXQgZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKVxuXG4gICAgbGV0IHNoYWRlclByZWFtYmxlID0gYCN2ZXJzaW9uIDMwMCBlc1xuICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiAgICBgXG5cbiAgICBsZXQgdnNfc3JjID0gc2hhZGVyUHJlYW1ibGUgKyBgXG4gICAgaW4gdmVjMiAgICAgdmVydGljZXM7XG4gICAgaW4gdmVjMiAgICAgcG9zaXRpb247XG4gICAgaW4gdmVjNCAgICAgY29sb3I7XG4gICAgaW4gZmxvYXQgICAgc2l6ZTtcblxuICAgIHVuaWZvcm0gdmVjMiB2aWV3cG9ydF9zaXplO1xuXG4gICAgb3V0IHZlYzQgY29sb3IwO1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgICB2ZWMyIHBvcyA9ICgoKHNpemUgKiB2ZXJ0aWNlcyArIHBvc2l0aW9uKSAvIHZpZXdwb3J0X3NpemUpICogMi4wKSAtIDEuMDtcbiAgICAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApO1xuICAgICAgICBjb2xvcjAgPSBjb2xvcjtcbiAgICB9XG4gICAgYFxuXG4gICAgbGV0IGZzX3NyYyA9IHNoYWRlclByZWFtYmxlICsgYFxuICAgIGluIHZlYzQgY29sb3IwO1xuICAgIG91dCB2ZWM0IGZyYWc7XG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgICBmcmFnID0gY29sb3IwO1xuICAgIH1gXG5cbiAgICBnbC5zaGFkZXJTb3VyY2UodnMsIHZzX3NyYylcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnMsIGZzX3NyYylcblxuICAgIGdsLmNvbXBpbGVTaGFkZXIodnMpXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0VSUk9SIGNvbXBpbGluZyB2ZXJ0ZXggc2hhZGVyIScsXG4gICAgICAgICAgICBnbC5nZXRTaGFkZXJJbmZvTG9nKHZzKVxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnMpXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0VSUk9SIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXIhJyxcbiAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2coZnMpXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKVxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcylcblxuICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0aWNlc0F0dHJpYkxvY2F0aW9uLCAndmVydGljZXMnKVxuICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbnNBdHRyaWJMb2NhdGlvbiwgJ3Bvc2l0aW9uJylcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgY29sb3JzQXR0cmliTG9jYXRpb24sICdjb2xvcicpXG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHNpemVzQXR0cmliTG9jYXRpb24sICdzaXplJylcblxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gICAgZ2wudmFsaWRhdGVQcm9ncmFtKHByb2dyYW0pXG5cbiAgICBnQXR0cmliTG9jYXRpb25WaWV3cG9ydFNpemUgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3ZpZXdwb3J0X3NpemUnKVxuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHZzKVxuICAgIGdsLmRlbGV0ZVNoYWRlcihmcylcblxuICAgIHZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KClcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxuXG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodmVydGljZXNBdHRyaWJMb2NhdGlvbilcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbnNBdHRyaWJMb2NhdGlvbilcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjb2xvcnNBdHRyaWJMb2NhdGlvbilcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaXplc0F0dHJpYkxvY2F0aW9uKVxuXG4gICAgLy8gQWRkIHZlcnRpY2VzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlc1BlckNpcmNsZTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGNvbnQgPSBpICogTWF0aC5QSSAqIDIgLyBudW1WZXJ0aWNlc1BlckNpcmNsZVxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKE1hdGguY29zKGNvbnQpLCBNYXRoLnNpbihjb250KSlcbiAgICB9XG5cbiAgICBsZXQgcGkgPSAwXG4gICAgbGV0IGNpID0gMFxuICAgIHByaW1pdGl2ZUNvdW50ID0gZGVzaXJlZFByaW1pdGl2ZUNvdW50XG4gICAgcG9zaXRpb25zLmxlbmd0aCA9IDIgKiBwcmltaXRpdmVDb3VudFxuICAgIHZlbG9jaXRpZXMubGVuZ3RoID0gMiAqIHByaW1pdGl2ZUNvdW50XG4gICAgc2l6ZXMubGVuZ3RoID0gcHJpbWl0aXZlQ291bnRcbiAgICBjb2xvcnMubGVuZ3RoID0gNCpwcmltaXRpdmVDb3VudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpbWl0aXZlQ291bnQ7ICsraSkge1xuICAgICAgIGNvbnN0IHAgPSBpbml0RnVuYyh7XG4gICAgICAgICAgICBwb3M6IHt4OiBwb3NpdGlvbnNbcGldLCB5OiBwb3NpdGlvbnNbcGkrMV19LFxuICAgICAgICAgICAgdmVsOiB7eDogdmVsb2NpdGllc1twaV0sIHk6IHZlbG9jaXRpZXNbcGkrMV19LFxuICAgICAgICAgICAgc2l6ZTogc2l6ZXNbaV0sXG4gICAgICAgICAgICBjb2xvcjoge3I6IGNvbG9yc1tjaV0sIGc6IGNvbG9yc1tjaSsxXSwgYjogY29sb3JzW2NpKzJdLCBhOiBjb2xvcnNbY2krM119XG4gICAgICAgIH0pXG5cbiAgICAgICAgcG9zaXRpb25zW3BpXSA9IHAucG9zLnhcbiAgICAgICAgcG9zaXRpb25zW3BpKzFdID0gcC5wb3MueVxuXG4gICAgICAgIHZlbG9jaXRpZXNbcGldID0gcC52ZWwueFxuICAgICAgICB2ZWxvY2l0aWVzW3BpKzFdID0gcC52ZWwueVxuXG4gICAgICAgIHNpemVzW2ldID0gcC5zaXplXG5cbiAgICAgICAgY29sb3JzW2NpKzBdID0gcC5jb2xvci5yXG4gICAgICAgIGNvbG9yc1tjaSsxXSA9IHAuY29sb3IuZ1xuICAgICAgICBjb2xvcnNbY2krMl0gPSBwLmNvbG9yLmJcbiAgICAgICAgY29sb3JzW2NpKzNdID0gcC5jb2xvci5hXG4gICAgICAgIFxuICAgICAgICBwaSArPSAyXG4gICAgICAgIGNpICs9IDRcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZUFycmF5QnVmZmVyID0gKGxvYywgZGF0YSwgZGF0YV9tZW1iZXJzLCB0YXJnZXQsIHVzYWdlLCBkaXZpc29yID0gMCkgPT4ge1xuICAgICAgICBjb25zdCB2Ym8gPSBnbC5jcmVhdGVCdWZmZXIoKVxuICAgICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdmJvKVxuICAgICAgICBnbC5idWZmZXJEYXRhKHRhcmdldCwgZGF0YSwgdXNhZ2UpXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jLCBkYXRhX21lbWJlcnMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMClcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICBpZiAoZGl2aXNvciAhPT0gMCkge1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2MsIGRpdmlzb3IpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZib1xuICAgIH1cblxuICAgIHZiby5zZXQoJ3ZlcnRpY2VzJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgIHZlcnRpY2VzQXR0cmliTG9jYXRpb24sXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLFxuICAgICAgICAyLFxuICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgIGdsLkRZTkFNSUNfRFJBV1xuICAgICkpXG4gICAgdmJvLnNldCgncG9zaXRpb25zJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgIHBvc2l0aW9uc0F0dHJpYkxvY2F0aW9uLFxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksXG4gICAgICAgIDIsXG4gICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgZ2wuRFlOQU1JQ19EUkFXLFxuICAgICAgICAxXG4gICAgKSlcbiAgICB2Ym8uc2V0KCdjb2xvcnMnLCBjcmVhdGVBcnJheUJ1ZmZlcihcbiAgICAgICAgY29sb3JzQXR0cmliTG9jYXRpb24sXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSxcbiAgICAgICAgNCxcbiAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgICBnbC5EWU5BTUlDX0RSQVcsXG4gICAgICAgIDFcbiAgICApKVxuICAgIHZiby5zZXQoJ3NpemVzJywgY3JlYXRlQXJyYXlCdWZmZXIoXG4gICAgICAgIHNpemVzQXR0cmliTG9jYXRpb24sXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoc2l6ZXMpLFxuICAgICAgICAxLFxuICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgIGdsLkRZTkFNSUNfRFJBVyxcbiAgICAgICAgMVxuICAgICkpXG5cbiAgICBhd2FpdCBkcmF3KClcbn0pXG5cbjwvc2NyaXB0PlxuIiwiPGNhbnZhcyBiaW5kOnRoaXM9e2NhbnZhc30+PC9jYW52YXM+XG48c3ZlbHRlOndpbmRvd1xuICAgIG9uOnJlc2l6ZT17aGFuZGxlUmVzaXplfVxuICAgIG9uOm1vdXNlbW92ZT17aGFuZGxlTW91c2V9XG4gICAgb246bW91c2Vkb3duPXsoKSA9PiB7bW91c2UueiA9IDE7IG1vdXNlLncgPSAxOyB9fVxuICAgIG9uOm1vdXNldXA9eygpID0+IHttb3VzZS56ID0gMDsgbW91c2UudyA9IDA7IH19XG4gICAgLz5cbjxidXR0b24gaWQ9XCJlZGl0b3JUb2dnbGVcIiBvbjpjbGljaz17KCk9PiBzaG93RWRpdG9yID0gIXNob3dFZGl0b3J9PlxuICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVtYnJlbGxhLWJlYWNoXCI+PC9pPlxuPC9idXR0b24+XG5cblxuPHRleHRhcmVhIGlkPVwiZWRpdG9yXCIgb246aW5wdXQ9eygpID0+IHtcbiAgICByZWNvbXBpbGVTaGFkZXJzKGNvZGUpO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1NoYWRlclRveScsIGNvZGUpO1xufX0gYmluZDp2YWx1ZT17Y29kZX0gc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCB7c2hhZGVyRXJyb3IgPyAnc3lzdGVtUmVkJyA6ICdzeXN0ZW1HcmVlbid9OyBkaXNwbGF5OiB7c2hvd0VkaXRvciA/ICdibG9jaycgOiAnbm9uZSd9XCI+PC90ZXh0YXJlYT5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+I2NvZGVBcmVhIHtcbiAgei1pbmRleDogOTk5OyB9XG4gICNjb2RlQXJlYSAuY29kZWFyZWEge1xuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1iYXNlKSwgMC44KTsgfVxuICAgICNjb2RlQXJlYSAuY29kZWFyZWE6OmJlZm9yZSwgI2NvZGVBcmVhIC5jb2RlYXJlYSAuY29kZWZsYXNrX19saW5lcyB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWJhY2tncm91bmQtYmFzZSksIDAuOCk7IH1cblxuI2VkaXRvciB7XG4gIG1hcmdpbjogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1iYXNlKSwgMC44KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogOTk5OyB9XG5cbiNlZGl0b3JUb2dnbGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMTBweDsgfVxuXG5jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTk5OTsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zaGFkZXJ0b3kuc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuaW1wb3J0IHsgZ2V0VGltZSB9IGZyb20gJy4vdXRpbHMvdXRpbGl0eSdcbmltcG9ydCBDb2RlRmxhc2sgZnJvbSAnY29kZWZsYXNrJ1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSBcInByaXNtanNcIjtcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCI7XG5cbmxldCBmbGFza1xubGV0IGNvZGVcblxubGV0IHNob3dFZGl0b3IgPSBmYWxzZVxubGV0IHNoYWRlckVycm9yID0gZmFsc2VcblxubGV0IHN0YXJ0VGltZSA9IDBcbmxldCBnbFxuXG5sZXQgcHJvZ3JhbVxubGV0IHZzXG5sZXQgZnNcblxubGV0IGNhbnZhc1xubGV0IGNhbnZhc1dpZHRoID0gMzAwXG5sZXQgY2FudmFzSGVpZ2h0ID0gMzAwXG5cbmxldCB1bmlmb3JtcyA9IG5ldyBNYXAoKTtcblxubGV0IGlGb3JlZ3JvdW5kXG5sZXQgaUJhY2tncm91bmRcbmxldCBpUmVzb2x1dGlvblxubGV0IGlUaW1lXG5sZXQgaVRpbWVEZWx0YVxubGV0IGlNb3VzZVxuXG5sZXQgbW91c2UgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDAsXG4gICAgdzogMFxufVxuXG5jb25zdCBzaGFkZXJQcmVhbWJsZSA9IGAjdmVyc2lvbiAzMDAgZXNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xudW5pZm9ybSB2ZWMzICAgICAgaUZvcmVncm91bmQ7ICAgICAgICAgICAvLyBmb3JlZ3JvdW5kIGNvbG9yXG51bmlmb3JtIHZlYzMgICAgICBpQmFja2dyb3VuZDsgICAgICAgICAgIC8vIGJhY2tncm91bmQgY29sb3JcbnVuaWZvcm0gdmVjMyAgICAgIGlSZXNvbHV0aW9uOyAgICAgICAgICAgLy8gdmlld3BvcnQgcmVzb2x1dGlvbiAoaW4gcGl4ZWxzKVxudW5pZm9ybSBmbG9hdCAgICAgaVRpbWU7ICAgICAgICAgICAgICAgICAvLyBzaGFkZXIgcGxheWJhY2sgdGltZSAoaW4gc2Vjb25kcylcbnVuaWZvcm0gZmxvYXQgICAgIGlUaW1lRGVsdGE7ICAgICAgICAgICAgLy8gcmVuZGVyIHRpbWUgKGluIHNlY29uZHMpXG51bmlmb3JtIHZlYzQgICAgICBpTW91c2U7ICAgICAgICAgICAgICAgIC8vIG1vdXNlIHBpeGVsIGNvb3Jkcy4geHk6IGN1cnJlbnQgKGlmIE1MQiBkb3duKSwgenc6IGNsaWNrXG5vdXQgdmVjNCAgICAgIGZyYWdDb2xvcjtcbmBcblxuY29uc3QgdnNfc3JjID0gYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cbmNvbnN0IHZlYzIgdmVydGljZXNbNl0gPSB2ZWMyWzZdKFxuICAgICAgICAgdmVjMigxLjAsICAxLjApLFxuICAgICAgICB2ZWMyKC0xLjAsICAxLjApLFxuICAgICAgICB2ZWMyKC0xLjAsIC0xLjApLFxuICAgICAgICB2ZWMyKC0xLjAsIC0xLjApLFxuICAgICAgICAgdmVjMigxLjAsIC0xLjApLFxuICAgICAgICAgdmVjMigxLjAsICAxLjApXG4pO1xudm9pZCBtYWluKCkge1xuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0aWNlc1tnbF9WZXJ0ZXhJRF0sIDAuMCwgMS4wKTtcbn1cbmBcbmZ1bmN0aW9uIGNvbXBpbGVTaGFkZXJzKGZzX2NvZGUpIHtcbiAgICBcbiAgICBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG5cbiAgICB2cyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKVxuICAgIGZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUilcblxuICAgIGdsLnNoYWRlclNvdXJjZSh2cywgdnNfc3JjKVxuICAgIGdsLnNoYWRlclNvdXJjZShmcywgc2hhZGVyUHJlYW1ibGUgKyBmc19jb2RlKVxuXG4gICAgZ2wuY29tcGlsZVNoYWRlcih2cylcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2cywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnRVJST1IgY29tcGlsaW5nIHZlcnRleCBzaGFkZXIhJyxcbiAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2codnMpXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2hhZGVyRXJyb3IgPSBmYWxzZVxuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnMpXG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICBzaGFkZXJFcnJvciA9IHRydWVcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdFUlJPUiBjb21waWxpbmcgZnJhZ21lbnQgc2hhZGVyIScsXG4gICAgICAgICAgICBnbC5nZXRTaGFkZXJJbmZvTG9nKGZzKVxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cylcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpXG5cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICAgIGdsLnZhbGlkYXRlUHJvZ3JhbShwcm9ncmFtKVxuXG4gICAgdW5pZm9ybXMuc2V0KCdpRm9yZWdyb3VuZCcsIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaUZvcmVncm91bmQnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lCYWNrZ3JvdW5kJywgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpQmFja2dyb3VuZCcpKVxuICAgIHVuaWZvcm1zLnNldCgnaVJlc29sdXRpb24nLCBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lSZXNvbHV0aW9uJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpVGltZScsICAgICAgIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaVRpbWUnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lUaW1lRGVsdGEnLCAgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpVGltZURlbHRhJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpTW91c2UnLCAgICAgIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaU1vdXNlJykpXG59XG5cbmZ1bmN0aW9uIHJlY29tcGlsZVNoYWRlcnMoZnNfY29kZSkge1xuICAgIFxuICAgIGdsLmRldGFjaFNoYWRlcihwcm9ncmFtLCBmcylcbiAgICBcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnMsIHNoYWRlclByZWFtYmxlICsgZnNfY29kZSlcbiAgICBzaGFkZXJFcnJvciA9IGZhbHNlXG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcylcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIHNoYWRlckVycm9yID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0VSUk9SIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXIhJyxcbiAgICAgICAgICAgIGdsLmdldFNoYWRlckluZm9Mb2coZnMpXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKVxuXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcbiAgICBnbC52YWxpZGF0ZVByb2dyYW0ocHJvZ3JhbSlcblxuICAgIHVuaWZvcm1zLnNldCgnaUZvcmVncm91bmQnLCBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lGb3JlZ3JvdW5kJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpQmFja2dyb3VuZCcsIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaUJhY2tncm91bmQnKSlcbiAgICB1bmlmb3Jtcy5zZXQoJ2lSZXNvbHV0aW9uJywgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdpUmVzb2x1dGlvbicpKVxuICAgIHVuaWZvcm1zLnNldCgnaVRpbWUnLCAgICAgICBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lUaW1lJykpXG4gICAgdW5pZm9ybXMuc2V0KCdpVGltZURlbHRhJywgIGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaVRpbWVEZWx0YScpKVxuICAgIHVuaWZvcm1zLnNldCgnaU1vdXNlJywgICAgICBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lNb3VzZScpKVxufVxuXG5vbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAvLyBmbGFzayA9IG5ldyBDb2RlRmxhc2soJyNjb2RlQXJlYScsIHtcbiAgICAvLyAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgLy8gICAgIGxhbmd1YWdlOiAnY2xpa2UnXG4gICAgLy8gfSk7XG5cbiAgICAvLyBmbGFzay5hZGRMYW5ndWFnZShcImdsc2xcIiwgUHJpc20ubGFuZ3VhZ2VzLmdsc2wpO1xuXG4gICAgLy8gZmxhc2sub25VcGRhdGUoYyA9PiB7XG4gICAgLy8gICAgIHJlY29tcGlsZVNoYWRlcnMoYyk7XG4gICAgLy8gICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1NoYWRlclRveScsIGMpO1xuICAgIC8vIH0pXG5cbiAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpXG5cbiAgICBpZiAoIWdsKSAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHdlYmdsMiBjb250ZXh0IGZvdW5kLiBzdG9wcGluZy5cIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKVxuICAgIGdsLmJsZW5kRXF1YXRpb24oZ2wuRlVOQ19BREQpXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcblxuICAgIHVwZGF0ZVZhbHVlcygpXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodClcblxuICAgIGNvZGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdTaGFkZXJUb3knKVxuICAgIGlmICghY29kZSkge1xuICAgICAgICBjb2RlID0gYGZsb2F0IGhlYXJ0KHZlYzIgdXYsIHZlYzIgcCwgZmxvYXQgcikge1xuICAgIHJldHVybiBzbW9vdGhzdGVwKHIsIHItMC4wMDEsIGxlbmd0aCh1di1wKSk7XG59XG52b2lkIG1haW4oKSB7XG4gICAgdmVjMiB1diA9IChnbF9GcmFnQ29vcmQueHktaVJlc29sdXRpb24ueHkqLjUpIC8gaVJlc29sdXRpb24ueTtcbiAgICB2ZWMzIGNvbCA9IHZlYzMoMCk7XG4gICAgZmxvYXQgciA9IDAuMTtcbiAgICB1di54ICo9IDAuNztcbiAgICBmbG9hdCBiZWF0cyA9IGlUaW1lKjMuMDtcbiAgICBmbG9hdCBzaXplID0gIDAuOTtcbiAgICB1di54IC89IG1heChhYnMoc2luKGJlYXRzKSksIHNpemUpO1xuICAgIHV2LnkgLz0gbWF4KGFicyhzaW4oYmVhdHMpKSwgc2l6ZSk7XG4gICAgdXYueSAtPSBzcXJ0KGFicyhzaW4odXYueCpyKSkpO1xuICAgIHZlYzIgcG9zID0gdmVjMigwKTtcbiAgICBmbG9hdCBjID0gaGVhcnQodXYsIHBvcywgcik7XG4gICAgY29sID0gYyAqIHZlYzMoMSwuMywuMyk7XG4gICAgZnJhZ0NvbG9yID0gdmVjNChjb2wsIGNvbC54KTtcbn1cbmBcbiAgICB9XG4gICAgLy8gZmxhc2sudXBkYXRlQ29kZShjb2RlKTtcbiAgICBjb21waWxlU2hhZGVycyhjb2RlKVxuXG4gICAgc3RhcnRUaW1lID0gZ2V0VGltZSgpXG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG5cbiAgICBhd2FpdCBkcmF3KClcbn0pXG5cbmNvbnN0IG5vcm1hbGl6ZSA9IHJnYmEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IHJnYmEuciAvIDI1NSxcbiAgICAgICAgZzogcmdiYS5nIC8gMjU1LFxuICAgICAgICBiOiByZ2JhLmIgLyAyNTUsXG4gICAgICAgIGE6IHJnYmEuYSB8fCByZ2JhLmEgLyAyNTUsXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKCkge1xuICAgIGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIHZhciBkZXNpcmVkQ1NTV2lkdGggPSBjYW52YXNXaWR0aFxuICAgIHZhciBkZXNpcmVkQ1NTSGVpZ2h0ID0gY2FudmFzSGVpZ2h0XG4gICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcblxuICAgIGNhbnZhcy53aWR0aCA9IGRlc2lyZWRDU1NXaWR0aCAqIGRldmljZVBpeGVsUmF0aW9cbiAgICBjYW52YXMuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCAqIGRldmljZVBpeGVsUmF0aW9cblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGRlc2lyZWRDU1NXaWR0aCArICdweCdcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gZGVzaXJlZENTU0hlaWdodCArICdweCdcblxuICAgIGNhbnZhc1dpZHRoICo9IGRldmljZVBpeGVsUmF0aW9cbiAgICBjYW52YXNIZWlnaHQgKj0gZGV2aWNlUGl4ZWxSYXRpb1xuXG4gICAgaUZvcmVncm91bmQgPSBub3JtYWxpemUod2luZG93LmNvbG9yLnRleHQpXG4gICAgaUJhY2tncm91bmQgPSBub3JtYWxpemUod2luZG93LmNvbG9yLmJhY2tncm91bmQpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShlKSB7XG4gICAgdXBkYXRlVmFsdWVzKClcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KVxufVxuZnVuY3Rpb24gaGFuZGxlTW91c2UoZSkge1xuICAgIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBtb3VzZS54ID0gZS5jbGllbnRYICogZHBpXG4gICAgbW91c2UueSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBlLmNsaWVudFkpICogZHBpXG59XG5cbmxldCBsYXN0VGltZSA9IDBcbmFzeW5jIGZ1bmN0aW9uIGRyYXcoKSB7XG5cbiAgICB1cGRhdGVWYWx1ZXMoKVxuXG4gICAgaVJlc29sdXRpb24gPSB7eDogY2FudmFzV2lkdGgsIHk6IGNhbnZhc0hlaWdodH1cbiAgICBpVGltZURlbHRhID0gZ2V0VGltZSgpIC0gbGFzdFRpbWVcbiAgICBpVGltZSA9IGdldFRpbWUoKSAtIHN0YXJ0VGltZVxuICAgIGlNb3VzZSA9IG1vdXNlXG5cbiAgICBsYXN0VGltZSA9IGlUaW1lRGVsdGFcblxuICAgIGdsLnVuaWZvcm0zZih1bmlmb3Jtcy5nZXQoJ2lGb3JlZ3JvdW5kJyksIGlGb3JlZ3JvdW5kLnIsIGlGb3JlZ3JvdW5kLmcsIGlGb3JlZ3JvdW5kLmIpXG4gICAgZ2wudW5pZm9ybTNmKHVuaWZvcm1zLmdldCgnaUJhY2tncm91bmQnKSwgaUJhY2tncm91bmQuciwgaUJhY2tncm91bmQuZywgaUJhY2tncm91bmQuYilcbiAgICBnbC51bmlmb3JtM2YodW5pZm9ybXMuZ2V0KCdpUmVzb2x1dGlvbicpLCBpUmVzb2x1dGlvbi54LCBpUmVzb2x1dGlvbi55LCAwKVxuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy5nZXQoJ2lUaW1lJyksIGlUaW1lKVxuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy5nZXQoJ2lUaW1lRGVsdGEnKSwgaVRpbWVEZWx0YSlcbiAgICBnbC51bmlmb3JtNGYodW5pZm9ybXMuZ2V0KCdpTW91c2UnKSwgaU1vdXNlLngsIGlNb3VzZS55LCBpTW91c2UueiwgaU1vdXNlLncpXG5cbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgNilcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF3YWl0IGRyYXcpXG59XG48L3NjcmlwdD5cbiIsIjxzY3JpcHQgbGFuZz1cImNvZmZlZVwiPnZhciB0aGVtZSwgdGhlbWVTdHlsZSwgdGhlbWVTdHlsZXMsIHRoZW1lcywgdG9nZ2xlVGhlbWUsIHRvZ2dsZVRoZW1lU3R5bGU7XG5cbmltcG9ydCB7XG4gIG9uTW91bnRcbn0gZnJvbSAnc3ZlbHRlJztcblxudGhlbWUgPSAnJztcblxudGhlbWVTdHlsZSA9ICcnO1xuXG50aGVtZXMgPSBbJ2xpZ2h0JywgJ2RhcmsnXTtcblxudGhlbWVTdHlsZXMgPSBbJ21vZGVybicsICdyZXRybyddO1xuXG5vbk1vdW50KCgpID0+IHtcbiAgdmFyIGxhc3RUaGVtZVN0eWxlVXNlZCwgbGFzdFRoZW1lVXNlZDtcbiAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIHJldHVybiB0aGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXMgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICB9KTtcbiAgLy8gUmVzdG9yZSB0aGUgbGFzdCB1c2VkIHRoZW1lIGZyb20gdGhlIHNlc3Npb25TdG9yYWdlLlxuICAvLyBUaGlzIHdpbGwgbWFpbnRhaW4gdGhlIGNob3NlbiB0aGVtZSB3aGVuIHRoZSB1c2VyIHJlbG9hZHMgdGhlIHBhZ2UuXG4gIGxhc3RUaGVtZVVzZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICBpZiAobGFzdFRoZW1lVXNlZCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgbGFzdFRoZW1lVXNlZCk7XG4gICAgdGhlbWUgPSBsYXN0VGhlbWVVc2VkO1xuICB9XG4gIGxhc3RUaGVtZVN0eWxlVXNlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RoZW1lLXN0eWxlJyk7XG4gIGlmIChsYXN0VGhlbWVTdHlsZVVzZWQpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScsIGxhc3RUaGVtZVN0eWxlVXNlZCk7XG4gICAgdGhlbWVTdHlsZSA9IGxhc3RUaGVtZVN0eWxlVXNlZDtcbiAgfVxuICB0aGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lJyk7XG4gIHJldHVybiB0aGVtZVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtc3R5bGUnKTtcbn0pO1xuXG50b2dnbGVUaGVtZVN0eWxlID0gKCkgPT4ge1xuICB2YXIgYWN0aXZlVGhlbWVTdHlsZSwgaSwgbmV4dFRoZW1lU3R5bGU7XG4gIGFjdGl2ZVRoZW1lU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScpO1xuICBpID0gdGhlbWVTdHlsZXMuZmluZEluZGV4KCh0KSA9PiB7XG4gICAgcmV0dXJuIHQgPT09IGFjdGl2ZVRoZW1lU3R5bGU7XG4gIH0pO1xuICBuZXh0VGhlbWVTdHlsZSA9IHRoZW1lU3R5bGVzWyhpICsgMSkgJSB0aGVtZVN0eWxlcy5sZW5ndGhdO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZS1zdHlsZScsIG5leHRUaGVtZVN0eWxlKTtcbiAgdGhlbWVTdHlsZSA9IG5leHRUaGVtZVN0eWxlO1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUtc3R5bGUnLCB0aGVtZVN0eWxlKTtcbn07XG5cbnRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICB2YXIgYWN0aXZlVGhlbWUsIGksIG5leHRUaGVtZTtcbiAgYWN0aXZlVGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZScpO1xuICBpID0gdGhlbWVzLmZpbmRJbmRleCgodCkgPT4ge1xuICAgIHJldHVybiB0ID09PSBhY3RpdmVUaGVtZTtcbiAgfSk7XG4gIG5leHRUaGVtZSA9IHRoZW1lc1soaSArIDEpICUgdGhlbWVzLmxlbmd0aF07XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgbmV4dFRoZW1lKTtcbiAgdGhlbWUgPSBuZXh0VGhlbWU7XG4gIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+YnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbiNkYXJrTW9kZVRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAyMHB4OyB9XG5cbiNyZXRyb1RvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjBweDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcGljZXMuc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48YnV0dG9uIGlkPVwicmV0cm9Ub2dnbGVcIiBvbjpjbGljaz1cInt0b2dnbGVUaGVtZVN0eWxlfVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBlcHBlci1ob3RcIj48L2k+PC9idXR0b24+PGJ1dHRvbiBpZD1cImRhcmtNb2RlVG9nZ2xlXCIgb246Y2xpY2s9XCJ7dG9nZ2xlVGhlbWV9XCI+PGkgY2xhc3M9XCJmYXMgZmEte3RoZW1lID09PSAnbGlnaHQnID8gJ3N1bicgOiAnbW9vbicgfVwiPjwvaT48L2J1dHRvbj5cbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gd3JpdGFibGUoJycpO1xuZXhwb3J0IGNvbnN0IHRoZW1lU3R5bGUgPSB3cml0YWJsZSgnJyk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXQ0IHtcbiAgICBzdGF0aWMgZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgICAgICAgbGV0IG91dCA9IFtdXG4gICAgICAgIG91dFswXSA9IG0wMDtcbiAgICAgICAgb3V0WzFdID0gbTAxO1xuICAgICAgICBvdXRbMl0gPSBtMDI7XG4gICAgICAgIG91dFszXSA9IG0wMztcbiAgICAgICAgb3V0WzRdID0gbTEwO1xuICAgICAgICBvdXRbNV0gPSBtMTE7XG4gICAgICAgIG91dFs2XSA9IG0xMjtcbiAgICAgICAgb3V0WzddID0gbTEzO1xuICAgICAgICBvdXRbOF0gPSBtMjA7XG4gICAgICAgIG91dFs5XSA9IG0yMTtcbiAgICAgICAgb3V0WzEwXSA9IG0yMjtcbiAgICAgICAgb3V0WzExXSA9IG0yMztcbiAgICAgICAgb3V0WzEyXSA9IG0zMDtcbiAgICAgICAgb3V0WzEzXSA9IG0zMTtcbiAgICAgICAgb3V0WzE0XSA9IG0zMjtcbiAgICAgICAgb3V0WzE1XSA9IG0zMztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgdjIgZnJvbSAnLi92MidcbmltcG9ydCB2NCBmcm9tICcuL3Y0J1xuaW1wb3J0IG1hdDQgZnJvbSAnLi9tYXQ0J1xuZXhwb3J0IHsgdjIsIHY0LCBtYXQ0IH1cbiIsIi8qKlxuICogIFNob3J0aGFuZCBzeW50YXggZm9yIGdldHRpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIFByZWZpeCBJRHMsIGNsYXNzZXMsIGVsZW1lbnRzIHdpdGggJyMgLiA8JyByZXNwZWN0aXZseS5cbiAqIEByZXR1cm5zIHsoSFRNTEVsZW1lbnR8SFRNTEVsZW1lbnRbXXxOb2RlTGlzdE9mPEVsZW1lbnQ+KX0gUmV0dXJucyBlbGVtZW50IGlmICdJRCcgb3RoZXJ3aXNlIGFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICovXG5jb25zdCBqcSA9IHF1ZXJ5ID0+XG4gICAgcXVlcnlbMF0gPT09ICcjJ1xuICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCkpXG4gICAgICAgIDogcXVlcnlbMF0gPT09ICcuJ1xuICAgICAgICA/IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCkpXVxuICAgICAgICA6IHF1ZXJ5WzBdID09PSAnPCdcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHF1ZXJ5LnNsaWNlKDEsIHF1ZXJ5Lmxlbmd0aCAtIDEpKVxuICAgICAgICA6IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KV1cbmV4cG9ydCBkZWZhdWx0IGpxXG4iLCJpbXBvcnQgeyB2MiB9IGZyb20gJy4vbWF0aCdcbmltcG9ydCBqcSBmcm9tICcuL3F1ZXJ5J1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gcG9zaXRpb24gZm91bmQuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvYmplY3RzIC0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGEgJ3BvcycgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7bWluLCBtYXh9LSBBbiBvYmplY3Qgd2l0aCBhICdtaW4nIGFuZCAnbWF4JyBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1pbkFuZE1heFBvc2l0aW9uID0gb2JqZWN0cyA9PiB7XG4gICAgbGV0IG1pbiA9IG5ldyB2MigxMDAwMCwgMTAwMDApXG4gICAgbGV0IG1heCA9IG5ldyB2MigtMTAwMDAsIC0xMDAwMClcblxuICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIG9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgcG9zID0gb2JqZWN0LnBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHBvcy54ID4gbWF4LngpIG1heC54ID0gcG9zLnhcbiAgICAgICAgZWxzZSBpZiAocG9zLnggPCBtaW4ueCkgbWluLnggPSBwb3MueFxuXG4gICAgICAgIGlmIChwb3MueSA+IG1heC55KSBtYXgueSA9IHBvcy55XG4gICAgICAgIGVsc2UgaWYgKHBvcy55IDwgbWluLnkpIG1pbi55ID0gcG9zLnlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmFuZEZsb2F0ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3IobWluID0gbmV3IHYyKDAsIDApLCBtYXggPSBuZXcgdjIoMCwgMCkpIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW5cbiAgICAgICAgdGhpcy5tYXggPSBtYXhcbiAgICAgICAgdGhpcy5jb2xvciA9IHtcbiAgICAgICAgICAgIHI6IDEuMCxcbiAgICAgICAgICAgIGc6IDEuMCxcbiAgICAgICAgICAgIGI6IDEuMCxcbiAgICAgICAgICAgIGE6IDEuMCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWluc1BvaW50KHBvc2l0aW9uLCByYWRpdXMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9zaXRpb24ueCAtIHJhZGl1cyA8IHRoaXMubWF4LnggJiZcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKyByYWRpdXMgPiB0aGlzLm1pbi54ICYmXG4gICAgICAgICAgICBwb3NpdGlvbi55IC0gcmFkaXVzIDwgdGhpcy5tYXgueSAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueSArIHJhZGl1cyA+IHRoaXMubWluLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDFcbiAgICBpZiAodCA+IDEpIHQgLT0gMVxuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHFcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDZcbiAgICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgSFNMc3RyaW5nVG9SR0IgPSBoc2wgPT4ge1xuICAgIGNvbnN0IHJlZ2V4cCA9IC9oc2xcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCsoPzpcXC5cXGQrKT8lKVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/JSlcXCkvZ1xuICAgIGxldCByZXMgPSByZWdleHAuZXhlYyhoc2wpLnNsaWNlKDEpXG4gICAgcmVzWzBdID0gcGFyc2VJbnQocmVzWzBdKVxuICAgIHJlc1sxXSA9IHBhcnNlSW50KHJlc1sxXS5zbGljZSgwLCByZXNbMV0ubGVuZ3RoIC0gMSkpXG4gICAgcmVzWzJdID0gcGFyc2VJbnQocmVzWzJdLnNsaWNlKDAsIHJlc1syXS5sZW5ndGggLSAxKSlcbiAgICBjb25zdCByZ2IgPSBIU0x0b1JHQihyZXNbMF0sIHJlc1sxXSwgcmVzWzJdKVxuICAgIHJldHVybiB7IHI6IHJnYi5yICogMjU1LCBnOiByZ2IuZyAqIDI1NSwgYjogcmdiLmIgKiAyNTUgfVxufVxuXG5leHBvcnQgY29uc3QgSFNMdG9SR0IgPSAoaCwgcywgbCkgPT4ge1xuICAgIHZhciByLCBnLCBiLCBtLCBjLCB4XG5cbiAgICBpZiAoIWlzRmluaXRlKGgpKSBoID0gMFxuICAgIGlmICghaXNGaW5pdGUocykpIHMgPSAwXG4gICAgaWYgKCFpc0Zpbml0ZShsKSkgbCA9IDBcblxuICAgIGggLz0gNjBcbiAgICBpZiAoaCA8IDApIGggPSA2IC0gKC1oICUgNilcbiAgICBoICU9IDZcblxuICAgIHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBzIC8gMTAwKSlcbiAgICBsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbCAvIDEwMCkpXG5cbiAgICBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHNcbiAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggJSAyKSAtIDEpKVxuXG4gICAgaWYgKGggPCAxKSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSAwXG4gICAgfSBlbHNlIGlmIChoIDwgMikge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gY1xuICAgICAgICBiID0gMFxuICAgIH0gZWxzZSBpZiAoaCA8IDMpIHtcbiAgICAgICAgciA9IDBcbiAgICAgICAgZyA9IGNcbiAgICAgICAgYiA9IHhcbiAgICB9IGVsc2UgaWYgKGggPCA0KSB7XG4gICAgICAgIHIgPSAwXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSBjXG4gICAgfSBlbHNlIGlmIChoIDwgNSkge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gMFxuICAgICAgICBiID0gY1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSAwXG4gICAgICAgIGIgPSB4XG4gICAgfVxuXG4gICAgbSA9IGwgLSBjIC8gMlxuICAgIHIgKz0gbVxuICAgIGcgKz0gbVxuICAgIGIgKz0gbVxuXG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiB9XG59XG5cbmV4cG9ydCBjb25zdCBIU0x0b1JHQkEgPSAoaCwgcywgbCkgPT4ge1xuICAgIHZhciByLCBnLCBiLCBtLCBjLCB4XG5cbiAgICBpZiAoIWlzRmluaXRlKGgpKSBoID0gMFxuICAgIGlmICghaXNGaW5pdGUocykpIHMgPSAwXG4gICAgaWYgKCFpc0Zpbml0ZShsKSkgbCA9IDBcblxuICAgIGggLz0gNjBcbiAgICBpZiAoaCA8IDApIGggPSA2IC0gKC1oICUgNilcbiAgICBoICU9IDZcblxuICAgIHMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBzIC8gMTAwKSlcbiAgICBsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbCAvIDEwMCkpXG5cbiAgICBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHNcbiAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggJSAyKSAtIDEpKVxuXG4gICAgaWYgKGggPCAxKSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSAwXG4gICAgfSBlbHNlIGlmIChoIDwgMikge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gY1xuICAgICAgICBiID0gMFxuICAgIH0gZWxzZSBpZiAoaCA8IDMpIHtcbiAgICAgICAgciA9IDBcbiAgICAgICAgZyA9IGNcbiAgICAgICAgYiA9IHhcbiAgICB9IGVsc2UgaWYgKGggPCA0KSB7XG4gICAgICAgIHIgPSAwXG4gICAgICAgIGcgPSB4XG4gICAgICAgIGIgPSBjXG4gICAgfSBlbHNlIGlmIChoIDwgNSkge1xuICAgICAgICByID0geFxuICAgICAgICBnID0gMFxuICAgICAgICBiID0gY1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSBjXG4gICAgICAgIGcgPSAwXG4gICAgICAgIGIgPSB4XG4gICAgfVxuXG4gICAgbSA9IGwgLSBjIC8gMlxuICAgIHIgKz0gbVxuICAgIGcgKz0gbVxuICAgIGIgKz0gbVxuXG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiwgYTogMSB9XG59XG5cbmxldCBnU3RhcnRUaW1lID0gMFxuXG5leHBvcnQgY29uc3QgY2FjaGVkRmV0Y2ggPSBhc3luYyAocm9vdCwgc3RvcmFnZSA9IHNlc3Npb25TdG9yYWdlKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3RvcmFnZS5nZXRJdGVtKHJvb3QpXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0dGluZyAke3Jvb3R9Li4uIGZyb20gc3RvcmFnZWApXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0dGluZyAke3Jvb3R9Li4uIGZyb20gc291cmNlYClcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm9vdClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHJvb3QsIEpTT04uc3RyaW5naWZ5KGpzb24pKVxuICAgICAgICByZXR1cm4ganNvblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGdTdGFydFRpbWUpIC8gMTAwMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0RXh0ID0gc3RyID0+IHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcuJykucG9wKClcbn1cblxuZXhwb3J0IGNvbnN0IHV1aWR2NCA9ICgpID0+IHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcbiAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG59XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9ncmVzc0JhciA9IG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IGJhciA9IGpxKCc8aW5wdXQ+JylcbiAgICBiYXIudHlwZSA9ICdyYW5nZSdcbiAgICBiYXIuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgfHwgJ3NsaWRlcidcbiAgICBiYXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnMuc3RhcnRpbmdWYWx1ZSB8fCA1MClcbiAgICBiYXIuc2V0QXR0cmlidXRlKCdtaW4nLCBvcHRpb25zLm1pblZhbHVlIHx8IDApXG4gICAgYmFyLnNldEF0dHJpYnV0ZSgnbWF4Jywgb3B0aW9ucy5tYXhWYWx1ZSB8fCAxMDApXG4gICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb3B0aW9ucy5jYWxsYmFjaylcbiAgICBvcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFyKVxufVxuXG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGpxKCc8YnV0dG9uPicpXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbnMubGFiZWxcbiAgICBlbGVtZW50LmlkID0gb3B0aW9ucy5pZCB8fCBvcHRpb25zLmxhYmVsXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCAnYnRuJ1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmNhbGxiYWNrKVxuICAgIGpxKGAjJHtvcHRpb25zLnBhcmVudH1gKS5hcHBlbmRDaGlsZChlbGVtZW50KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdjIge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG4gICAgbmVnKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgYWRkKHYpIHtcbiAgICAgICAgdGhpcy54ICs9IHYueFxuICAgICAgICB0aGlzLnkgKz0gdi55XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHN1Yih2KSB7XG4gICAgICAgIHRoaXMueCAtPSB2LnhcbiAgICAgICAgdGhpcy55IC09IHYueVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzY2FsZSh2KSB7XG4gICAgICAgIHRoaXMueCAqPSB2XG4gICAgICAgIHRoaXMueSAqPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGRpdih2KSB7XG4gICAgICAgIGlmICh2ICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSB2XG4gICAgICAgICAgICB0aGlzLnkgLz0gdlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGRvdCh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnlcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZG90KHRoaXMpKVxuICAgIH1cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdih0aGlzLmxlbmd0aCgpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKGIueCAtIGEueCkgKiAoYi54IC0gYS54KSArIChiLnkgLSBhLnkpICogKGIueSAtIGEueSkpXG4gICAgfVxuICAgIHN0YXRpYyBuZWcodikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKC12LngsIC12LnkpXG4gICAgfVxuICAgIHN0YXRpYyBhZGQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCArIGIueCwgYS55ICsgYi55KVxuICAgIH1cbiAgICBzdGF0aWMgYWRkcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjIoYS54ICsgYiwgYS55ICsgYilcbiAgICB9XG4gICAgc3RhdGljIHN1YihhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjIoYS54IC0gYi54LCBhLnkgLSBiLnkpXG4gICAgfVxuICAgIHN0YXRpYyBzdWJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB2MihhLnggLSBiLCBhLnkgLSBiKVxuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCAqIGIsIGEueSAqIGIpXG4gICAgfVxuICAgIHN0YXRpYyBkaXYoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHYyKGEueCAvIGIsIGEueSAvIGIpXG4gICAgfVxuICAgIHN0YXRpYyBkb3QoYSwgYikge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdjQge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgICAgIHRoaXMudyA9IHdcbiAgICB9XG5cbiAgICBSR0JBKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogdGhpcy54LFxuICAgICAgICAgICAgZzogdGhpcy55LFxuICAgICAgICAgICAgYjogdGhpcy56LFxuICAgICAgICAgICAgYTogdGhpcy53LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKGIpIHtcbiAgICAgICAgdGhpcy54ICs9IGIueFxuICAgICAgICB0aGlzLnkgKz0gYi55XG4gICAgICAgIHRoaXMueiArPSBiLnpcbiAgICAgICAgdGhpcy53ICs9IGIud1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHN1YihiKSB7XG4gICAgICAgIHRoaXMueCAtPSBiLnhcbiAgICAgICAgdGhpcy55IC09IGIueVxuICAgICAgICB0aGlzLnogLT0gYi56XG4gICAgICAgIHRoaXMudyAtPSBiLndcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgc2NhbGUoYikge1xuICAgICAgICB0aGlzLnggKj0gYlxuICAgICAgICB0aGlzLnkgKj0gYlxuICAgICAgICB0aGlzLnogKj0gYlxuICAgICAgICB0aGlzLncgKj0gYlxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHY0KGEueCAqIGIsIGEueSAqIGIsIGEueiAqIGIsIGEudyAqIGIpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZChhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgdjQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KVxuICAgIH1cblxuICAgIHN0YXRpYyBzdWIoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IHY0KGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnosIGEudyAtIGIudylcbiAgICB9XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Fzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQnO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2ludGVybmFsL0FwcC5zdmVsdGUnO1xuaW1wb3J0IHsgaWdub3JlLCByb3V0ZXMsIHJvb3RfcHJlbG9hZCwgY29tcG9uZW50cywgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL21hbmlmZXN0LWNsaWVudCc7XG5cbmZ1bmN0aW9uIGdvdG8oaHJlZiwgb3B0cyA9IHsgcmVwbGFjZVN0YXRlOiBmYWxzZSB9KSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdF9oaXN0b3J5W29wdHMucmVwbGFjZVN0YXRlID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJ10oeyBpZDogY2lkIH0sICcnLCBocmVmKTtcblx0XHRyZXR1cm4gbmF2aWdhdGUodGFyZ2V0LCBudWxsKS50aGVuKCgpID0+IHt9KTtcblx0fVxuXG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZiA9PiB7fSk7IC8vIG5ldmVyIHJlc29sdmVzXG59XG5cbmNvbnN0IGluaXRpYWxfZGF0YSA9IHR5cGVvZiBfX1NBUFBFUl9fICE9PSAndW5kZWZpbmVkJyAmJiBfX1NBUFBFUl9fO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcbmxldCByb290X2NvbXBvbmVudDtcbmxldCBjdXJyZW50X3Rva2VuO1xubGV0IHJvb3RfcHJlbG9hZGVkO1xubGV0IGN1cnJlbnRfYnJhbmNoID0gW107XG5sZXQgY3VycmVudF9xdWVyeSA9ICd7fSc7XG5cbmNvbnN0IHN0b3JlcyA9IHtcblx0cGFnZTogd3JpdGFibGUoe30pLFxuXHRwcmVsb2FkaW5nOiB3cml0YWJsZShudWxsKSxcblx0c2Vzc2lvbjogd3JpdGFibGUoaW5pdGlhbF9kYXRhICYmIGluaXRpYWxfZGF0YS5zZXNzaW9uKVxufTtcblxubGV0ICRzZXNzaW9uO1xubGV0IHNlc3Npb25fZGlydHk7XG5cbnN0b3Jlcy5zZXNzaW9uLnN1YnNjcmliZShhc3luYyB2YWx1ZSA9PiB7XG5cdCRzZXNzaW9uID0gdmFsdWU7XG5cblx0aWYgKCFyZWFkeSkgcmV0dXJuO1xuXHRzZXNzaW9uX2RpcnR5ID0gdHJ1ZTtcblxuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBoeWRyYXRlX3RhcmdldCh0YXJnZXQpO1xuXHRpZiAodG9rZW4gIT09IGN1cnJlbnRfdG9rZW4pIHJldHVybjsgLy8gYSBzZWNvbmRhcnkgbmF2aWdhdGlvbiBoYXBwZW5lZCB3aGlsZSB3ZSB3ZXJlIGxvYWRpbmdcblxuXHRhd2FpdCByZW5kZXIocmVkaXJlY3QsIGJyYW5jaCwgcHJvcHMsIHRhcmdldC5wYWdlKTtcbn0pO1xuXG5sZXQgcHJlZmV0Y2hpbmdcblxuXG4gPSBudWxsO1xuZnVuY3Rpb24gc2V0X3ByZWZldGNoaW5nKGhyZWYsIHByb21pc2UpIHtcblx0cHJlZmV0Y2hpbmcgPSB7IGhyZWYsIHByb21pc2UgfTtcbn1cblxubGV0IHRhcmdldDtcbmZ1bmN0aW9uIHNldF90YXJnZXQoZWxlbWVudCkge1xuXHR0YXJnZXQgPSBlbGVtZW50O1xufVxuXG5sZXQgdWlkID0gMTtcbmZ1bmN0aW9uIHNldF91aWQobikge1xuXHR1aWQgPSBuO1xufVxuXG5sZXQgY2lkO1xuZnVuY3Rpb24gc2V0X2NpZChuKSB7XG5cdGNpZCA9IG47XG59XG5cbmNvbnN0IF9oaXN0b3J5ID0gdHlwZW9mIGhpc3RvcnkgIT09ICd1bmRlZmluZWQnID8gaGlzdG9yeSA6IHtcblx0cHVzaFN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0cmVwbGFjZVN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0c2Nyb2xsUmVzdG9yYXRpb246ICcnXG59O1xuXG5jb25zdCBzY3JvbGxfaGlzdG9yeSA9IHt9O1xuXG5mdW5jdGlvbiBleHRyYWN0X3F1ZXJ5KHNlYXJjaCkge1xuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuXHRcdHNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLmZvckVhY2goc2VhcmNoUGFyYW0gPT4ge1xuXHRcdFx0bGV0IFssIGtleSwgdmFsdWUgPSAnJ10gPSAvKFtePV0qKSg/Oj0oLiopKT8vLmV4ZWMoZGVjb2RlVVJJQ29tcG9uZW50KHNlYXJjaFBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICdzdHJpbmcnKSBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV1dO1xuXHRcdFx0aWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAnb2JqZWN0JykgKHF1ZXJ5W2tleV0gKS5wdXNoKHZhbHVlKTtcblx0XHRcdGVsc2UgcXVlcnlba2V5XSA9IHZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBxdWVyeTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0X3RhcmdldCh1cmwpIHtcblx0aWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgcmV0dXJuIG51bGw7XG5cdGlmICghdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaW5pdGlhbF9kYXRhLmJhc2VVcmwpKSByZXR1cm4gbnVsbDtcblxuXHRsZXQgcGF0aCA9IHVybC5wYXRobmFtZS5zbGljZShpbml0aWFsX2RhdGEuYmFzZVVybC5sZW5ndGgpO1xuXG5cdGlmIChwYXRoID09PSAnJykge1xuXHRcdHBhdGggPSAnLyc7XG5cdH1cblxuXHQvLyBhdm9pZCBhY2NpZGVudGFsIGNsYXNoZXMgYmV0d2VlbiBzZXJ2ZXIgcm91dGVzIGFuZCBwYWdlIHJvdXRlc1xuXHRpZiAoaWdub3JlLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnRlc3QocGF0aCkpKSByZXR1cm47XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcblxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUucGF0dGVybi5leGVjKHBhdGgpO1xuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IGV4dHJhY3RfcXVlcnkodXJsLnNlYXJjaCk7XG5cdFx0XHRjb25zdCBwYXJ0ID0gcm91dGUucGFydHNbcm91dGUucGFydHMubGVuZ3RoIC0gMV07XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKG1hdGNoKSA6IHt9O1xuXG5cdFx0XHRjb25zdCBwYWdlID0geyBob3N0OiBsb2NhdGlvbi5ob3N0LCBwYXRoLCBxdWVyeSwgcGFyYW1zIH07XG5cblx0XHRcdHJldHVybiB7IGhyZWY6IHVybC5ocmVmLCByb3V0ZSwgbWF0Y2gsIHBhZ2UgfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlX2Vycm9yKHVybCkge1xuXHRjb25zdCB7IGhvc3QsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGxvY2F0aW9uO1xuXHRjb25zdCB7IHNlc3Npb24sIHByZWxvYWRlZCwgc3RhdHVzLCBlcnJvciB9ID0gaW5pdGlhbF9kYXRhO1xuXG5cdGlmICghcm9vdF9wcmVsb2FkZWQpIHtcblx0XHRyb290X3ByZWxvYWRlZCA9IHByZWxvYWRlZCAmJiBwcmVsb2FkZWRbMF07XG5cdH1cblxuXHRjb25zdCBwcm9wcyA9IHtcblx0XHRlcnJvcixcblx0XHRzdGF0dXMsXG5cdFx0c2Vzc2lvbixcblx0XHRsZXZlbDA6IHtcblx0XHRcdHByb3BzOiByb290X3ByZWxvYWRlZFxuXHRcdH0sXG5cdFx0bGV2ZWwxOiB7XG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRzdGF0dXMsXG5cdFx0XHRcdGVycm9yXG5cdFx0XHR9LFxuXHRcdFx0Y29tcG9uZW50OiBFcnJvckNvbXBvbmVudFxuXHRcdH0sXG5cdFx0c2VnbWVudHM6IHByZWxvYWRlZFxuXG5cdH07XG5cdGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdF9xdWVyeShzZWFyY2gpO1xuXHRyZW5kZXIobnVsbCwgW10sIHByb3BzLCB7IGhvc3QsIHBhdGg6IHBhdGhuYW1lLCBxdWVyeSwgcGFyYW1zOiB7fSB9KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsX3N0YXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHg6IHBhZ2VYT2Zmc2V0LFxuXHRcdHk6IHBhZ2VZT2Zmc2V0XG5cdH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHRhcmdldCwgaWQsIG5vc2Nyb2xsLCBoYXNoKSB7XG5cdGlmIChpZCkge1xuXHRcdC8vIHBvcHN0YXRlIG9yIGluaXRpYWwgbmF2aWdhdGlvblxuXHRcdGNpZCA9IGlkO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGN1cnJlbnRfc2Nyb2xsID0gc2Nyb2xsX3N0YXRlKCk7XG5cblx0XHQvLyBjbGlja2VkIG9uIGEgbGluay4gcHJlc2VydmUgc2Nyb2xsIHN0YXRlXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IGN1cnJlbnRfc2Nyb2xsO1xuXG5cdFx0aWQgPSBjaWQgPSArK3VpZDtcblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gbm9zY3JvbGwgPyBjdXJyZW50X3Njcm9sbCA6IHsgeDogMCwgeTogMCB9O1xuXHR9XG5cblx0Y2lkID0gaWQ7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSBzdG9yZXMucHJlbG9hZGluZy5zZXQodHJ1ZSk7XG5cblx0Y29uc3QgbG9hZGVkID0gcHJlZmV0Y2hpbmcgJiYgcHJlZmV0Y2hpbmcuaHJlZiA9PT0gdGFyZ2V0LmhyZWYgP1xuXHRcdHByZWZldGNoaW5nLnByb21pc2UgOlxuXHRcdGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCk7XG5cblx0cHJlZmV0Y2hpbmcgPSBudWxsO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBsb2FkZWQ7XG5cdGlmICh0b2tlbiAhPT0gY3VycmVudF90b2tlbikgcmV0dXJuOyAvLyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGhhcHBlbmVkIHdoaWxlIHdlIHdlcmUgbG9hZGluZ1xuXG5cdGF3YWl0IHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgdGFyZ2V0LnBhZ2UpO1xuXHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cblx0aWYgKCFub3Njcm9sbCkge1xuXHRcdGxldCBzY3JvbGwgPSBzY3JvbGxfaGlzdG9yeVtpZF07XG5cblx0XHRpZiAoaGFzaCkge1xuXHRcdFx0Ly8gc2Nyb2xsIGlzIGFuIGVsZW1lbnQgaWQgKGZyb20gYSBoYXNoKSwgd2UgbmVlZCB0byBjb21wdXRlIHkuXG5cdFx0XHRjb25zdCBkZWVwX2xpbmtlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2guc2xpY2UoMSkpO1xuXG5cdFx0XHRpZiAoZGVlcF9saW5rZWQpIHtcblx0XHRcdFx0c2Nyb2xsID0ge1xuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogZGVlcF9saW5rZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbDtcblx0XHRpZiAoc2Nyb2xsKSBzY3JvbGxUbyhzY3JvbGwueCwgc2Nyb2xsLnkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgcGFnZSkge1xuXHRpZiAocmVkaXJlY3QpIHJldHVybiBnb3RvKHJlZGlyZWN0LmxvY2F0aW9uLCB7IHJlcGxhY2VTdGF0ZTogdHJ1ZSB9KTtcblxuXHRzdG9yZXMucGFnZS5zZXQocGFnZSk7XG5cdHN0b3Jlcy5wcmVsb2FkaW5nLnNldChmYWxzZSk7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSB7XG5cdFx0cm9vdF9jb21wb25lbnQuJHNldChwcm9wcyk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvcHMuc3RvcmVzID0ge1xuXHRcdFx0cGFnZTogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wYWdlLnN1YnNjcmliZSB9LFxuXHRcdFx0cHJlbG9hZGluZzogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wcmVsb2FkaW5nLnN1YnNjcmliZSB9LFxuXHRcdFx0c2Vzc2lvbjogc3RvcmVzLnNlc3Npb25cblx0XHR9O1xuXHRcdHByb3BzLmxldmVsMCA9IHtcblx0XHRcdHByb3BzOiBhd2FpdCByb290X3ByZWxvYWRlZFxuXHRcdH07XG5cblx0XHQvLyBmaXJzdCBsb2FkIOKAlCByZW1vdmUgU1NSJ2QgPGhlYWQ+IGNvbnRlbnRzXG5cdFx0Y29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtc3RhcnQnKTtcblx0XHRjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtZW5kJyk7XG5cblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XG5cdFx0XHR3aGlsZSAoc3RhcnQubmV4dFNpYmxpbmcgIT09IGVuZCkgZGV0YWNoKHN0YXJ0Lm5leHRTaWJsaW5nKTtcblx0XHRcdGRldGFjaChzdGFydCk7XG5cdFx0XHRkZXRhY2goZW5kKTtcblx0XHR9XG5cblx0XHRyb290X2NvbXBvbmVudCA9IG5ldyBBcHAoe1xuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRoeWRyYXRlOiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRjdXJyZW50X2JyYW5jaCA9IGJyYW5jaDtcblx0Y3VycmVudF9xdWVyeSA9IEpTT04uc3RyaW5naWZ5KHBhZ2UucXVlcnkpO1xuXHRyZWFkeSA9IHRydWU7XG5cdHNlc3Npb25fZGlydHkgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGFydF9jaGFuZ2VkKGksIHNlZ21lbnQsIG1hdGNoLCBzdHJpbmdpZmllZF9xdWVyeSkge1xuXHQvLyBUT0RPIG9ubHkgY2hlY2sgcXVlcnkgc3RyaW5nIGNoYW5nZXMgZm9yIHByZWxvYWQgZnVuY3Rpb25zXG5cdC8vIHRoYXQgZG8gaW4gZmFjdCBkZXBlbmQgb24gaXQgKHVzaW5nIHN0YXRpYyBhbmFseXNpcyBvclxuXHQvLyBydW50aW1lIGluc3RydW1lbnRhdGlvbilcblx0aWYgKHN0cmluZ2lmaWVkX3F1ZXJ5ICE9PSBjdXJyZW50X3F1ZXJ5KSByZXR1cm4gdHJ1ZTtcblxuXHRjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRfYnJhbmNoW2ldO1xuXG5cdGlmICghcHJldmlvdXMpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlZ21lbnQgIT09IHByZXZpb3VzLnNlZ21lbnQpIHJldHVybiB0cnVlO1xuXHRpZiAocHJldmlvdXMubWF0Y2gpIHtcblx0XHRpZiAoSlNPTi5zdHJpbmdpZnkocHJldmlvdXMubWF0Y2guc2xpY2UoMSwgaSArIDIpKSAhPT0gSlNPTi5zdHJpbmdpZnkobWF0Y2guc2xpY2UoMSwgaSArIDIpKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldClcblxuXG5cbiB7XG5cdGNvbnN0IHsgcm91dGUsIHBhZ2UgfSA9IHRhcmdldDtcblx0Y29uc3Qgc2VnbWVudHMgPSBwYWdlLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0bGV0IHJlZGlyZWN0ID0gbnVsbDtcblxuXHRjb25zdCBwcm9wcyA9IHsgZXJyb3I6IG51bGwsIHN0YXR1czogMjAwLCBzZWdtZW50czogW3NlZ21lbnRzWzBdXSB9O1xuXG5cdGNvbnN0IHByZWxvYWRfY29udGV4dCA9IHtcblx0XHRmZXRjaDogKHVybCwgb3B0cykgPT4gZmV0Y2godXJsLCBvcHRzKSxcblx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRpZiAocmVkaXJlY3QgJiYgKHJlZGlyZWN0LnN0YXR1c0NvZGUgIT09IHN0YXR1c0NvZGUgfHwgcmVkaXJlY3QubG9jYXRpb24gIT09IGxvY2F0aW9uKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbmZsaWN0aW5nIHJlZGlyZWN0c2ApO1xuXHRcdFx0fVxuXHRcdFx0cmVkaXJlY3QgPSB7IHN0YXR1c0NvZGUsIGxvY2F0aW9uIH07XG5cdFx0fSxcblx0XHRlcnJvcjogKHN0YXR1cywgZXJyb3IpID0+IHtcblx0XHRcdHByb3BzLmVycm9yID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IG5ldyBFcnJvcihlcnJvcikgOiBlcnJvcjtcblx0XHRcdHByb3BzLnN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH07XG5cblx0aWYgKCFyb290X3ByZWxvYWRlZCkge1xuXHRcdHJvb3RfcHJlbG9hZGVkID0gaW5pdGlhbF9kYXRhLnByZWxvYWRlZFswXSB8fCByb290X3ByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0cGFyYW1zOiB7fVxuXHRcdH0sICRzZXNzaW9uKTtcblx0fVxuXG5cdGxldCBicmFuY2g7XG5cdGxldCBsID0gMTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHN0cmluZ2lmaWVkX3F1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkocGFnZS5xdWVyeSk7XG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5wYXR0ZXJuLmV4ZWMocGFnZS5wYXRoKTtcblxuXHRcdGxldCBzZWdtZW50X2RpcnR5ID0gZmFsc2U7XG5cblx0XHRicmFuY2ggPSBhd2FpdCBQcm9taXNlLmFsbChyb3V0ZS5wYXJ0cy5tYXAoYXN5bmMgKHBhcnQsIGkpID0+IHtcblx0XHRcdGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcblxuXHRcdFx0aWYgKHBhcnRfY2hhbmdlZChpLCBzZWdtZW50LCBtYXRjaCwgc3RyaW5naWZpZWRfcXVlcnkpKSBzZWdtZW50X2RpcnR5ID0gdHJ1ZTtcblxuXHRcdFx0cHJvcHMuc2VnbWVudHNbbF0gPSBzZWdtZW50c1tpICsgMV07IC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRpZiAoIXBhcnQpIHJldHVybiB7IHNlZ21lbnQgfTtcblxuXHRcdFx0Y29uc3QgaiA9IGwrKztcblxuXHRcdFx0aWYgKCFzZXNzaW9uX2RpcnR5ICYmICFzZWdtZW50X2RpcnR5ICYmIGN1cnJlbnRfYnJhbmNoW2ldICYmIGN1cnJlbnRfYnJhbmNoW2ldLnBhcnQgPT09IHBhcnQuaSkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudF9icmFuY2hbaV07XG5cdFx0XHR9XG5cblx0XHRcdHNlZ21lbnRfZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgeyBkZWZhdWx0OiBjb21wb25lbnQsIHByZWxvYWQgfSA9IGF3YWl0IGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSk7XG5cblx0XHRcdGxldCBwcmVsb2FkZWQ7XG5cdFx0XHRpZiAocmVhZHkgfHwgIWluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdKSB7XG5cdFx0XHRcdHByZWxvYWRlZCA9IHByZWxvYWRcblx0XHRcdFx0XHQ/IGF3YWl0IHByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdFx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdFx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdFx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0cGFyYW1zOiBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKHRhcmdldC5tYXRjaCkgOiB7fVxuXHRcdFx0XHRcdH0sICRzZXNzaW9uKVxuXHRcdFx0XHRcdDoge307XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmVsb2FkZWQgPSBpbml0aWFsX2RhdGEucHJlbG9hZGVkW2kgKyAxXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChwcm9wc1tgbGV2ZWwke2p9YF0gPSB7IGNvbXBvbmVudCwgcHJvcHM6IHByZWxvYWRlZCwgc2VnbWVudCwgbWF0Y2gsIHBhcnQ6IHBhcnQuaSB9KTtcblx0XHR9KSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cHJvcHMuZXJyb3IgPSBlcnJvcjtcblx0XHRwcm9wcy5zdGF0dXMgPSA1MDA7XG5cdFx0YnJhbmNoID0gW107XG5cdH1cblxuXHRyZXR1cm4geyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9O1xufVxuXG5mdW5jdGlvbiBsb2FkX2NzcyhjaHVuaykge1xuXHRjb25zdCBocmVmID0gYGNsaWVudC8ke2NodW5rfWA7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2hyZWZ9XCJdYCkpIHJldHVybjtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbCwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblx0XHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0Jztcblx0XHRsaW5rLmhyZWYgPSBocmVmO1xuXG5cdFx0bGluay5vbmxvYWQgPSAoKSA9PiBmdWxmaWwoKTtcblx0XHRsaW5rLm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZF9jb21wb25lbnQoY29tcG9uZW50KVxuXG5cbiB7XG5cdC8vIFRPRE8gdGhpcyBpcyB0ZW1wb3Jhcnkg4oCUIG9uY2UgcGxhY2Vob2xkZXJzIGFyZVxuXHQvLyBhbHdheXMgcmV3cml0dGVuLCBzY3JhdGNoIHRoZSB0ZXJuYXJ5XG5cdGNvbnN0IHByb21pc2VzID0gKHR5cGVvZiBjb21wb25lbnQuY3NzID09PSAnc3RyaW5nJyA/IFtdIDogY29tcG9uZW50LmNzcy5tYXAobG9hZF9jc3MpKTtcblx0cHJvbWlzZXMudW5zaGlmdChjb21wb25lbnQuanMoKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChocmVmKSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdGlmICghcHJlZmV0Y2hpbmcgfHwgaHJlZiAhPT0gcHJlZmV0Y2hpbmcuaHJlZikge1xuXHRcdFx0c2V0X3ByZWZldGNoaW5nKGhyZWYsIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmVmZXRjaGluZy5wcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KG9wdHNcblxuKSB7XG5cdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIF9oaXN0b3J5KSB7XG5cdFx0X2hpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblx0fVxuXG5cdHNldF90YXJnZXQob3B0cy50YXJnZXQpO1xuXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlX2NsaWNrKTtcblx0YWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVfcG9wc3RhdGUpO1xuXG5cdC8vIHByZWZldGNoXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0cmlnZ2VyX3ByZWZldGNoKTtcblx0YWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlX21vdXNlbW92ZSk7XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGFzaCwgaHJlZiB9ID0gbG9jYXRpb247XG5cblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogdWlkIH0sICcnLCBocmVmKTtcblxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cblx0XHRpZiAoaW5pdGlhbF9kYXRhLmVycm9yKSByZXR1cm4gaGFuZGxlX2Vycm9yKCk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdFx0aWYgKHRhcmdldCkgcmV0dXJuIG5hdmlnYXRlKHRhcmdldCwgdWlkLCB0cnVlLCBoYXNoKTtcblx0fSk7XG59XG5cbmxldCBtb3VzZW1vdmVfdGltZW91dDtcblxuZnVuY3Rpb24gaGFuZGxlX21vdXNlbW92ZShldmVudCkge1xuXHRjbGVhclRpbWVvdXQobW91c2Vtb3ZlX3RpbWVvdXQpO1xuXHRtb3VzZW1vdmVfdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpO1xuXHR9LCAyMCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpIHtcblx0Y29uc3QgYSA9IGZpbmRfYW5jaG9yKGV2ZW50LnRhcmdldCk7XG5cdGlmICghYSB8fCBhLnJlbCAhPT0gJ3ByZWZldGNoJykgcmV0dXJuO1xuXG5cdHByZWZldGNoKGEuaHJlZik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9jbGljayhldmVudCkge1xuXHQvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanNcblx0Ly8gTUlUIGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanMjbGljZW5zZVxuXHRpZiAod2hpY2goZXZlbnQpICE9PSAxKSByZXR1cm47XG5cdGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpIHJldHVybjtcblx0aWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcblxuXHRjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcblx0aWYgKCFhKSByZXR1cm47XG5cblx0aWYgKCFhLmhyZWYpIHJldHVybjtcblxuXHQvLyBjaGVjayBpZiBsaW5rIGlzIGluc2lkZSBhbiBzdmdcblx0Ly8gaW4gdGhpcyBjYXNlLCBib3RoIGhyZWYgYW5kIHRhcmdldCBhcmUgYWx3YXlzIGluc2lkZSBhbiBvYmplY3Rcblx0Y29uc3Qgc3ZnID0gdHlwZW9mIGEuaHJlZiA9PT0gJ29iamVjdCcgJiYgYS5ocmVmLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTVkdBbmltYXRlZFN0cmluZyc7XG5cdGNvbnN0IGhyZWYgPSBTdHJpbmcoc3ZnID8gKGEpLmhyZWYuYmFzZVZhbCA6IGEuaHJlZik7XG5cblx0aWYgKGhyZWYgPT09IGxvY2F0aW9uLmhyZWYpIHtcblx0XHRpZiAoIWxvY2F0aW9uLmhhc2gpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSWdub3JlIGlmIHRhZyBoYXNcblx0Ly8gMS4gJ2Rvd25sb2FkJyBhdHRyaWJ1dGVcblx0Ly8gMi4gcmVsPSdleHRlcm5hbCcgYXR0cmlidXRlXG5cdGlmIChhLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBhLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpIHJldHVybjtcblxuXHQvLyBJZ25vcmUgaWYgPGE+IGhhcyBhIHRhcmdldFxuXHRpZiAoc3ZnID8gKGEpLnRhcmdldC5iYXNlVmFsIDogYS50YXJnZXQpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYpO1xuXG5cdC8vIERvbid0IGhhbmRsZSBoYXNoIGNoYW5nZXNcblx0aWYgKHVybC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWUgJiYgdXJsLnNlYXJjaCA9PT0gbG9jYXRpb24uc2VhcmNoKSByZXR1cm47XG5cblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldCh1cmwpO1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0Y29uc3Qgbm9zY3JvbGwgPSBhLmhhc0F0dHJpYnV0ZSgnc2FwcGVyLW5vc2Nyb2xsJyk7XG5cdFx0bmF2aWdhdGUodGFyZ2V0LCBudWxsLCBub3Njcm9sbCwgdXJsLmhhc2gpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0X2hpc3RvcnkucHVzaFN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgdXJsLmhyZWYpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdoaWNoKGV2ZW50KSB7XG5cdHJldHVybiBldmVudC53aGljaCA9PT0gbnVsbCA/IGV2ZW50LmJ1dHRvbiA6IGV2ZW50LndoaWNoO1xufVxuXG5mdW5jdGlvbiBmaW5kX2FuY2hvcihub2RlKSB7XG5cdHdoaWxlIChub2RlICYmIG5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0EnKSBub2RlID0gbm9kZS5wYXJlbnROb2RlOyAvLyBTVkcgPGE+IGVsZW1lbnRzIGhhdmUgYSBsb3dlcmNhc2UgbmFtZVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3BvcHN0YXRlKGV2ZW50KSB7XG5cdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBzY3JvbGxfc3RhdGUoKTtcblxuXHRpZiAoZXZlbnQuc3RhdGUpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuXHRcdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHRuYXZpZ2F0ZSh0YXJnZXQsIGV2ZW50LnN0YXRlLmlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGhhc2hjaGFuZ2Vcblx0XHRzZXRfdWlkKHVpZCArIDEpO1xuXHRcdHNldF9jaWQodWlkKTtcblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogY2lkIH0sICcnLCBsb2NhdGlvbi5ocmVmKTtcblx0fVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaFJvdXRlcyhwYXRobmFtZXMpIHtcblx0cmV0dXJuIHJvdXRlc1xuXHRcdC5maWx0ZXIocGF0aG5hbWVzXG5cdFx0XHQ/IHJvdXRlID0+IHBhdGhuYW1lcy5zb21lKHBhdGhuYW1lID0+IHJvdXRlLnBhdHRlcm4udGVzdChwYXRobmFtZSkpXG5cdFx0XHQ6ICgpID0+IHRydWVcblx0XHQpXG5cdFx0LnJlZHVjZSgocHJvbWlzZSwgcm91dGUpID0+IHByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocm91dGUucGFydHMubWFwKHBhcnQgPT4gcGFydCAmJiBsb2FkX2NvbXBvbmVudChjb21wb25lbnRzW3BhcnQuaV0pKSk7XG5cdFx0fSksIFByb21pc2UucmVzb2x2ZSgpKTtcbn1cblxuY29uc3Qgc3RvcmVzJDEgPSAoKSA9PiBnZXRDb250ZXh0KENPTlRFWFRfS0VZKTtcblxuZXhwb3J0IHsgZ290bywgcHJlZmV0Y2gsIHByZWZldGNoUm91dGVzLCBzdGFydCwgc3RvcmVzJDEgYXMgc3RvcmVzIH07XG4iLCI8IS0tIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCEgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL3NoYXJlZCc7XG5cdGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcblx0aW1wb3J0IEVycm9yIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHN0b3Jlcztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgc2VnbWVudHM7XG5cdGV4cG9ydCBsZXQgbGV2ZWwwO1xuXHRleHBvcnQgbGV0IGxldmVsMSA9IG51bGw7XG5cblx0c2V0Q29udGV4dChDT05URVhUX0tFWSwgc3RvcmVzKTtcbjwvc2NyaXB0PlxuXG48TGF5b3V0IHNlZ21lbnQ9XCJ7c2VnbWVudHNbMF19XCIgey4uLmxldmVsMC5wcm9wc30+XG5cdHsjaWYgZXJyb3J9XG5cdFx0PEVycm9yIHtlcnJvcn0ge3N0YXR1c30vPlxuXHR7OmVsc2V9XG5cdFx0PHN2ZWx0ZTpjb21wb25lbnQgdGhpcz1cIntsZXZlbDEuY29tcG9uZW50fVwiIHsuLi5sZXZlbDEucHJvcHN9Lz5cblx0ey9pZn1cbjwvTGF5b3V0PiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm9vdCB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5leHBvcnQgeyBwcmVsb2FkIGFzIHJvb3RfcHJlbG9hZCB9IGZyb20gJy4vc2hhcmVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSc7XG5cbmV4cG9ydCBjb25zdCBpZ25vcmUgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW5kZXhcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9pbmRleC5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjppbmRleC5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWJvdXRcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9hYm91dC5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphYm91dC5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYmxvZ1wiICovIFwiLi4vLi4vLi4vcm91dGVzL2Jsb2cuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YmxvZy5zdmVsdGVfX1wiXG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDAgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAxIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGJsb2cuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9ibG9nXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDIgfVxuXHRcdF1cblx0fVxuXTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdGltcG9ydChcIi9Vc2Vycy9tYXJjdXNtYXRoaWFzc2VuL2Rldi9ob21lcGFnZS9ub2RlX21vZHVsZXMvc2FwcGVyL3NhcHBlci1kZXYtY2xpZW50LmpzXCIpLnRoZW4oY2xpZW50ID0+IHtcblx0XHRjbGllbnQuY29ubmVjdCgxMDAwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdHVzXG4gICAgZXhwb3J0IGxldCBlcnJvclxuXG4gICAgY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5oMSwgcCB7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDsgfVxuXG5wIHtcbiAgbWFyZ2luOiAxZW0gYXV0bzsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNGVtOyB9IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPjx0aXRsZT57c3RhdHVzfTwvdGl0bGU+PC9zdmVsdGU6aGVhZD48aDE+e3N0YXR1c308L2gxPjxwPntlcnJvci5tZXNzYWdlfTwvcD57I2lmIGRldiAmJiBlcnJvci5zdGFja308cHJlPntlcnJvci5zdGFja308L3ByZT57L2lmfVxuIiwiPHNjcmlwdD5cblxuICAgIGltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYuc3ZlbHRlJ1xuICAgIGltcG9ydCBTcGljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zcGljZXMuc3ZlbHRlJ1xuICAgIGltcG9ydCBNb3ZpbmdCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvbW92aW5nLWJhY2tncm91bmQuc3ZlbHRlJ1xuICAgIGltcG9ydCBTaGFkZXJUb3kgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFkZXJ0b3kuc3ZlbHRlJ1xuICAgIGltcG9ydCB7IGdldFRpbWUsIHJhbmRGbG9hdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvdXRpbGl0eSdcbiAgICBpbXBvcnQgeyB2MiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvbWF0aCdcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG4gICAgZXhwb3J0IGxldCBzZWdtZW50XG4gICAgJDogc2VnbWVudCA9IHNlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdob21lJyA6IHNlZ21lbnRcblxuICAgIGxldCBtb3VzZSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH1cblxuICAgIGNvbnN0IGZzID0gYFxuICAgIG91dCB2ZWM0IGZyYWc7XG4gICAgdm9pZCBtYWluKCkge1xuXG4gICAgICAgIHZlYzIgdXYgPSBnbF9GcmFnQ29vcmQueHk7XG5cbiAgICAgICAgLy8gQ2lyY2xlXG4gICAgICAgIHZlYzIgY2VudGVyID0gaVJlc29sdXRpb24ueHkgKiAwLjU7XG4gICAgICAgIGNlbnRlci54ICo9IHNpbihpVGltZSk7XG4gICAgICAgIGZsb2F0IHJhZGl1cyA9IGlSZXNvbHV0aW9uLnkgLyAyLjI1O1xuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjM4LCAwLjE2LCAwLjg5KTtcblxuICAgICAgICBmbG9hdCBkID0gbGVuZ3RoKGNlbnRlciAtIHV2KSAtIHJhZGl1cztcbiAgICAgICAgZmxvYXQgdCA9IGNsYW1wKGQsIDAuMCwgMS4wKTtcblxuICAgICAgICB2ZWM0IGNpcmNsZSA9IHZlYzQoY29sb3IsIDEuMCAtIHQpO1xuICAgICAgICBmcmFnID0gY2lyY2xlO1xuICAgIH1gXG5cbiAgICBjb25zdCBncmF2aXR5ID0gLTAuOTgxXG5cbiAgICBmdW5jdGlvbiBsZXJwKHAsIHQsIHMpIHtcbiAgICAgICAgcC54ICs9ICh0LnggLSBwLngpKnM7XG4gICAgICAgIHAueSArPSAodC55IC0gcC55KSpzO1xuICAgICAgICByZXR1cm4gcFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlKGUpIHtcbiAgICAgICAgY29uc3QgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgICAgICBtb3VzZS54ID0gZS5jbGllbnRYICogZHBpXG4gICAgICAgIG1vdXNlLnkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gZS5jbGllbnRZKSAqIGRwaVxuICAgIH1cblxuICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gMTAwMFxuICAgIGxldCB4ID0gMFxuICAgIGxldCB5ID0gMFxuICAgIGNvbnN0IHNxcnRHcmlkID0gTWF0aC5mbG9vcihNYXRoLnNxcnQocGFydGljbGVDb3VudCkpXG5cbiAgICBjb25zdCBwYXJ0aWNsZUluaXQgPSAocCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcblxuICAgICAgICBjb25zdCBjb2wgPSAoY2FudmFzV2lkdGgpIC8gc3FydEdyaWRcbiAgICAgICAgY29uc3Qgcm93ID0gKGNhbnZhc0hlaWdodCkgLyBzcXJ0R3JpZFxuXG4gICAgICAgIHAucG9zLnggPSB4XG4gICAgICAgIHAucG9zLnkgPSB5XG5cbiAgICAgICAgcC5jb2xvci5yID0gcmFuZEZsb2F0KDAsMSlcbiAgICAgICAgcC5jb2xvci5nID0gcmFuZEZsb2F0KDAsMSlcbiAgICAgICAgcC5jb2xvci5iID0gcmFuZEZsb2F0KDAsMSlcbiAgICAgICAgcC5jb2xvci5hID0gMVxuXG4gICAgICAgIHggKz0gY29sXG4gICAgICAgIGlmICh4ID4gY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIHkgKz0gcm93XG4gICAgICAgICAgICB4ID0gY29sXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcFxuICAgIH1cblxuICAgIGNvbnN0IHBhcnRpY2xlVXBkYXRlID0gKHApID0+IHtcblxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbiAgICAgICAgcC5jb2xvci5hID0gMVxuICAgICAgICBwLnNpemUgPSBNYXRoLm1pbih2Mi5kaXN0YW5jZShwLnBvcywgbW91c2UpKjAuMDAxKk1hdGguYWJzKE1hdGguc2luKGdldFRpbWUoKSkpLCBzcXJ0R3JpZClcblxuICAgICAgICByZXR1cm4gcFxuICAgIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPm1haW4ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPV9sYXlvdXQuc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48IS0tIFNoYWRlclRveSAtLT5cbjwhLS0gTmF2KHNlZ21lbnQ9J3tzZWdtZW50fScpIC0tPjxtYWluPjxzbG90Pjwvc2xvdD48L21haW4+PCEtLSBTcGljZXMgLS0+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyZXNvdXJjZXMvcHhwbHVzX2libV92Z2E4LXdlYmZvbnQuMTIxMmZjMGE2OGI3MDQwMmI2Yzk4OWVhODg4NTAwNjcud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlcy9weHBsdXNfaWJtX3ZnYTgtd2ViZm9udC5kNDRiZTdlYzhkZWRkMDk2NDg4ZjkyYTBkYTY1NDZkMC53b2ZmMlwiOyJdLCJzb3VyY2VSb290IjoiIn0=