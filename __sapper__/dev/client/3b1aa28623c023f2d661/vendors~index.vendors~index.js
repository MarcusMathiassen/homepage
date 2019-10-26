(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~index"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZWZsYXNrL2J1aWxkL2NvZGVmbGFzay5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsNklBQStGLHFDQUFxQyxtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxJQUFJLDBCQUEwQixtSEFBbUgsd0JBQXdCLHlDQUF5QyxVQUFVLGtCQUFrQixzQ0FBc0MseUNBQXlDLCtNQUErTSx5QkFBeUIsa0JBQWtCLG1CQUFtQix1QkFBdUIsS0FBSyxnQ0FBZ0MsNkJBQTZCLEtBQUssdUJBQXVCLDJCQUEyQixpQkFBaUIsdUJBQXVCLEtBQUssNEJBQTRCLHVCQUF1QixtQkFBbUIsdUJBQXVCLGlCQUFpQixtQkFBbUIsbUNBQW1DLDhCQUE4Qix3QkFBd0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsS0FBSyx5REFBeUQsZ0RBQWdELEtBQUssd0JBQXdCLHFCQUFxQixtQ0FBbUMsdUJBQXVCLEtBQUssMkJBQTJCLG9CQUFvQiwrQkFBK0IsbUNBQW1DLHVCQUF1Qix5QkFBeUIsYUFBYSxjQUFjLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHVC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QTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixZQUFZOztBQUVaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDeDhCRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiM2IxYWEyODYyM2MwMjNmMmQ2NjEvdmVuZG9yc35pbmRleC52ZW5kb3JzfmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJBQ0tHUk9VTkRfQ09MT1I9XCIjZmZmXCIsTElORV9IRUlHSFQ9XCIyMHB4XCIsRk9OVF9TSVpFPVwiMTNweFwiLGRlZmF1bHRDc3NUaGVtZT1cIlxcbi5jb2RlZmxhc2sge1xcbiAgYmFja2dyb3VuZDogXCIrQkFDS0dST1VORF9DT0xPUitcIjtcXG4gIGNvbG9yOiAjNGY1NTljO1xcbn1cXG5cXG4uY29kZWZsYXNrIC50b2tlbi5wdW5jdHVhdGlvbiB7XFxuICBjb2xvcjogIzRhNGE0YTtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4ua2V5d29yZCB7XFxuICBjb2xvcjogIzg1MDBmZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4ub3BlcmF0b3Ige1xcbiAgY29sb3I6ICNmZjU1OTg7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLnN0cmluZyB7XFxuICBjb2xvcjogIzQxYWQ4ZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uY29tbWVudCB7XFxuICBjb2xvcjogIzliYWRiNztcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uZnVuY3Rpb24ge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLmJvb2xlYW4ge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLm51bWJlciB7XFxuICBjb2xvcjogIzg1MDBmZjtcXG59XFxuXFxuLmNvZGVmbGFzayAudG9rZW4uc2VsZWN0b3Ige1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLnByb3BlcnR5IHtcXG4gIGNvbG9yOiAjODUwMGZmO1xcbn1cXG5cXG4uY29kZWZsYXNrIC50b2tlbi50YWcge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblxcbi5jb2RlZmxhc2sgLnRva2VuLmF0dHItdmFsdWUge1xcbiAgY29sb3I6ICM4NTAwZmY7XFxufVxcblwiO2Z1bmN0aW9uIGNzc1N1cHBvcnRzKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIENTUz9DU1Muc3VwcG9ydHMoZSx0KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJnRvQ2FtZWxDYXNlKGUpaW4gZG9jdW1lbnQuYm9keS5zdHlsZX1mdW5jdGlvbiB0b0NhbWVsQ2FzZShlKXtyZXR1cm4oZT1lLnNwbGl0KFwiLVwiKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuISFlfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlWzBdLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSl9KS5qb2luKFwiXCIpKVswXS50b0xvd2VyQ2FzZSgpK2Uuc3Vic3RyKDEpfXZhciBGT05UX0ZBTUlMWT0nXCJTRk1vbm8tUmVndWxhclwiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZScsQ09MT1I9Y3NzU3VwcG9ydHMoXCJjYXJldC1jb2xvclwiLFwiIzAwMFwiKT9CQUNLR1JPVU5EX0NPTE9SOlwiI2NjY1wiLExJTkVfTlVNQkVSX1dJRFRIPVwiNDBweFwiLGVkaXRvckNzcz1cIlxcbiAgLmNvZGVmbGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2ssIC5jb2RlZmxhc2sgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrX19wcmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX3RleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogXCIrQ09MT1IrXCI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFwiK0ZPTlRfRkFNSUxZK1wiO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHByZTtcXG4gICAgY2FyZXQtY29sb3I6ICMxMTE7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLS1oYXMtbGluZS1udW1iZXJzIC5jb2RlZmxhc2tfX3RleHRhcmVhIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIFwiK0xJTkVfTlVNQkVSX1dJRFRIK1wiKTtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2NvZGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IFwiK0ZPTlRfRkFNSUxZK1wiO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmNvZGVmbGFza19fZmxhdHRlbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogXCIrRk9OVF9TSVpFK1wiO1xcbiAgICBsaW5lLWhlaWdodDogXCIrTElORV9IRUlHSFQrXCI7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLS1oYXMtbGluZS1udW1iZXJzIC5jb2RlZmxhc2tfX2ZsYXR0ZW4ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gXCIrTElORV9OVU1CRVJfV0lEVEgrXCIpO1xcbiAgICBsZWZ0OiBcIitMSU5FX05VTUJFUl9XSURUSCtcIjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2xpbmUtaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IFwiK0xJTkVfSEVJR0hUK1wiO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrX19saW5lcyB7XFxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiBcIitMSU5FX0hFSUdIVCtcIjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VzaW5lJywgbW9ub3NwYWNlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IFwiK0xJTkVfTlVNQkVSX1dJRFRIK1wiO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5jb2RlZmxhc2tfX2xpbmVzX19saW5lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLmNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVycyB7XFxuICAgIHBhZGRpbmctbGVmdDogXCIrTElORV9OVU1CRVJfV0lEVEgrXCI7XFxuICB9XFxuXFxuICAuY29kZWZsYXNrLmNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVyczpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiBcIitMSU5FX05VTUJFUl9XSURUSCtcIjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblwiO2Z1bmN0aW9uIGluamVjdENzcyhlLHQsbil7dmFyIGE9dHx8XCJjb2RlZmxhc2stc3R5bGVcIixzPW58fGRvY3VtZW50LmhlYWQ7aWYoIWUpcmV0dXJuITE7aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpcmV0dXJuITA7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBvLmlubmVySFRNTD1lLG8uaWQ9YSxzLmFwcGVuZENoaWxkKG8pLCEwfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKGUpe3JldHVybiBTdHJpbmcoZSkucmVwbGFjZSgvWyY8PlwiJ2A9L10vZyxmdW5jdGlvbihlKXtyZXR1cm4gZW50aXR5TWFwW2VdfSl9dmFyIGNvbW1vbmpzR2xvYmFsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShlLHQpe3JldHVybiBlKHQ9e2V4cG9ydHM6e319LHQuZXhwb3J0cyksdC5leHBvcnRzfXZhciBwcmlzbT1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD0vXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaSxuPTAsYT17bWFudWFsOmUuUHJpc20mJmUuUHJpc20ubWFudWFsLGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjplLlByaXNtJiZlLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcix1dGlsOntlbmNvZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBzP25ldyBzKGUudHlwZSxhLnV0aWwuZW5jb2RlKGUuY29udGVudCksZS5hbGlhcyk6QXJyYXkuaXNBcnJheShlKT9lLm1hcChhLnV0aWwuZW5jb2RlKTplLnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpfSxvYmpJZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX2lkfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9faWRcIix7dmFsdWU6KytufSksZS5fX2lkfSxjbG9uZTpmdW5jdGlvbiBlKHQsbil7dmFyIHMsbyxpPWEudXRpbC50eXBlKHQpO3N3aXRjaChuPW58fHt9LGkpe2Nhc2VcIk9iamVjdFwiOmlmKG89YS51dGlsLm9iaklkKHQpLG5bb10pcmV0dXJuIG5bb107Zm9yKHZhciByIGluIHM9e30sbltvXT1zLHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKHNbcl09ZSh0W3JdLG4pKTtyZXR1cm4gcztjYXNlXCJBcnJheVwiOnJldHVybiBvPWEudXRpbC5vYmpJZCh0KSxuW29dP25bb106KHM9W10sbltvXT1zLHQuZm9yRWFjaChmdW5jdGlvbih0LGEpe3NbYV09ZSh0LG4pfSkscyk7ZGVmYXVsdDpyZXR1cm4gdH19fSxsYW5ndWFnZXM6e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPWEudXRpbC5jbG9uZShhLmxhbmd1YWdlc1tlXSk7Zm9yKHZhciBzIGluIHQpbltzXT10W3NdO3JldHVybiBufSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSx0LG4scyl7dmFyIG89KHM9c3x8YS5sYW5ndWFnZXMpW2VdLGk9e307Zm9yKHZhciByIGluIG8paWYoby5oYXNPd25Qcm9wZXJ0eShyKSl7aWYocj09dClmb3IodmFyIGwgaW4gbiluLmhhc093blByb3BlcnR5KGwpJiYoaVtsXT1uW2xdKTtuLmhhc093blByb3BlcnR5KHIpfHwoaVtyXT1vW3JdKX12YXIgYz1zW2VdO3JldHVybiBzW2VdPWksYS5sYW5ndWFnZXMuREZTKGEubGFuZ3VhZ2VzLGZ1bmN0aW9uKHQsbil7bj09PWMmJnQhPWUmJih0aGlzW3RdPWkpfSksaX0sREZTOmZ1bmN0aW9uIGUodCxuLHMsbyl7bz1vfHx7fTt2YXIgaT1hLnV0aWwub2JqSWQ7Zm9yKHZhciByIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSl7bi5jYWxsKHQscix0W3JdLHN8fHIpO3ZhciBsPXRbcl0sYz1hLnV0aWwudHlwZShsKTtcIk9iamVjdFwiIT09Y3x8b1tpKGwpXT9cIkFycmF5XCIhPT1jfHxvW2kobCldfHwob1tpKGwpXT0hMCxlKGwsbixyLG8pKToob1tpKGwpXT0hMCxlKGwsbixudWxsLG8pKX19fSxwbHVnaW5zOnt9LGhpZ2hsaWdodEFsbDpmdW5jdGlvbihlLHQpe2EuaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsZSx0KX0saGlnaGxpZ2h0QWxsVW5kZXI6ZnVuY3Rpb24oZSx0LG4pe3ZhciBzPXtjYWxsYmFjazpuLHNlbGVjdG9yOidjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSd9O2EuaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodGFsbFwiLHMpO2Zvcih2YXIgbyxpPXMuZWxlbWVudHN8fGUucXVlcnlTZWxlY3RvckFsbChzLnNlbGVjdG9yKSxyPTA7bz1pW3IrK107KWEuaGlnaGxpZ2h0RWxlbWVudChvLCEwPT09dCxzLmNhbGxiYWNrKX0saGlnaGxpZ2h0RWxlbWVudDpmdW5jdGlvbihuLHMsbyl7Zm9yKHZhciBpLHIsbD1uO2wmJiF0LnRlc3QobC5jbGFzc05hbWUpOylsPWwucGFyZW50Tm9kZTtsJiYoaT0obC5jbGFzc05hbWUubWF0Y2godCl8fFssXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCkscj1hLmxhbmd1YWdlc1tpXSksbi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZSh0LFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikrXCIgbGFuZ3VhZ2UtXCIraSxuLnBhcmVudE5vZGUmJihsPW4ucGFyZW50Tm9kZSwvcHJlL2kudGVzdChsLm5vZGVOYW1lKSYmKGwuY2xhc3NOYW1lPWwuY2xhc3NOYW1lLnJlcGxhY2UodCxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2kpKTt2YXIgYz17ZWxlbWVudDpuLGxhbmd1YWdlOmksZ3JhbW1hcjpyLGNvZGU6bi50ZXh0Q29udGVudH0sZD1mdW5jdGlvbihlKXtjLmhpZ2hsaWdodGVkQ29kZT1lLGEuaG9va3MucnVuKFwiYmVmb3JlLWluc2VydFwiLGMpLGMuZWxlbWVudC5pbm5lckhUTUw9Yy5oaWdobGlnaHRlZENvZGUsYS5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIixjKSxhLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsYyksbyYmby5jYWxsKGMuZWxlbWVudCl9O2lmKGEuaG9va3MucnVuKFwiYmVmb3JlLXNhbml0eS1jaGVja1wiLGMpLGMuY29kZSlpZihhLmhvb2tzLnJ1bihcImJlZm9yZS1oaWdobGlnaHRcIixjKSxjLmdyYW1tYXIpaWYocyYmZS5Xb3JrZXIpe3ZhciB1PW5ldyBXb3JrZXIoYS5maWxlbmFtZSk7dS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7ZChlLmRhdGEpfSx1LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtsYW5ndWFnZTpjLmxhbmd1YWdlLGNvZGU6Yy5jb2RlLGltbWVkaWF0ZUNsb3NlOiEwfSkpfWVsc2UgZChhLmhpZ2hsaWdodChjLmNvZGUsYy5ncmFtbWFyLGMubGFuZ3VhZ2UpKTtlbHNlIGQoYS51dGlsLmVuY29kZShjLmNvZGUpKTtlbHNlIGEuaG9va3MucnVuKFwiY29tcGxldGVcIixjKX0saGlnaGxpZ2h0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgbz17Y29kZTplLGdyYW1tYXI6dCxsYW5ndWFnZTpufTtyZXR1cm4gYS5ob29rcy5ydW4oXCJiZWZvcmUtdG9rZW5pemVcIixvKSxvLnRva2Vucz1hLnRva2VuaXplKG8uY29kZSxvLmdyYW1tYXIpLGEuaG9va3MucnVuKFwiYWZ0ZXItdG9rZW5pemVcIixvKSxzLnN0cmluZ2lmeShhLnV0aWwuZW5jb2RlKG8udG9rZW5zKSxvLmxhbmd1YWdlKX0sbWF0Y2hHcmFtbWFyOmZ1bmN0aW9uKGUsdCxuLG8saSxyLGwpe2Zvcih2YXIgYyBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkoYykmJm5bY10pe2lmKGM9PWwpcmV0dXJuO3ZhciBkPW5bY107ZD1cIkFycmF5XCI9PT1hLnV0aWwudHlwZShkKT9kOltkXTtmb3IodmFyIHU9MDt1PGQubGVuZ3RoOysrdSl7dmFyIHA9ZFt1XSxoPXAuaW5zaWRlLGc9ISFwLmxvb2tiZWhpbmQsZj0hIXAuZ3JlZWR5LG09MCxiPXAuYWxpYXM7aWYoZiYmIXAucGF0dGVybi5nbG9iYWwpe3ZhciBrPXAucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW11eV0qJC8pWzBdO3AucGF0dGVybj1SZWdFeHAocC5wYXR0ZXJuLnNvdXJjZSxrK1wiZ1wiKX1wPXAucGF0dGVybnx8cDtmb3IodmFyIHk9byxDPWk7eTx0Lmxlbmd0aDtDKz10W3ldLmxlbmd0aCwrK3kpe3ZhciBGPXRbeV07aWYodC5sZW5ndGg+ZS5sZW5ndGgpcmV0dXJuO2lmKCEoRiBpbnN0YW5jZW9mIHMpKXtpZihmJiZ5IT10Lmxlbmd0aC0xKXtpZihwLmxhc3RJbmRleD1DLCEoVD1wLmV4ZWMoZSkpKWJyZWFrO2Zvcih2YXIgdj1ULmluZGV4KyhnP1RbMV0ubGVuZ3RoOjApLHg9VC5pbmRleCtUWzBdLmxlbmd0aCx3PXksQT1DLF89dC5sZW5ndGg7dzxfJiYoQTx4fHwhdFt3XS50eXBlJiYhdFt3LTFdLmdyZWVkeSk7Kyt3KXY+PShBKz10W3ddLmxlbmd0aCkmJigrK3ksQz1BKTtpZih0W3ldaW5zdGFuY2VvZiBzKWNvbnRpbnVlO0U9dy15LEY9ZS5zbGljZShDLEEpLFQuaW5kZXgtPUN9ZWxzZXtwLmxhc3RJbmRleD0wO3ZhciBUPXAuZXhlYyhGKSxFPTF9aWYoVCl7ZyYmKG09VFsxXT9UWzFdLmxlbmd0aDowKTt4PSh2PVQuaW5kZXgrbSkrKFQ9VFswXS5zbGljZShtKSkubGVuZ3RoO3ZhciBMPUYuc2xpY2UoMCx2KSxOPUYuc2xpY2UoeCksUz1beSxFXTtMJiYoKyt5LEMrPUwubGVuZ3RoLFMucHVzaChMKSk7dmFyIEk9bmV3IHMoYyxoP2EudG9rZW5pemUoVCxoKTpULGIsVCxmKTtpZihTLnB1c2goSSksTiYmUy5wdXNoKE4pLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodCxTKSwxIT1FJiZhLm1hdGNoR3JhbW1hcihlLHQsbix5LEMsITAsYykscilicmVha31lbHNlIGlmKHIpYnJlYWt9fX19fSx0b2tlbml6ZTpmdW5jdGlvbihlLHQpe3ZhciBuPVtlXSxzPXQucmVzdDtpZihzKXtmb3IodmFyIG8gaW4gcyl0W29dPXNbb107ZGVsZXRlIHQucmVzdH1yZXR1cm4gYS5tYXRjaEdyYW1tYXIoZSxuLHQsMCwwLCExKSxufSxob29rczp7YWxsOnt9LGFkZDpmdW5jdGlvbihlLHQpe3ZhciBuPWEuaG9va3MuYWxsO25bZV09bltlXXx8W10sbltlXS5wdXNoKHQpfSxydW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1hLmhvb2tzLmFsbFtlXTtpZihuJiZuLmxlbmd0aClmb3IodmFyIHMsbz0wO3M9bltvKytdOylzKHQpfX0sVG9rZW46c307ZnVuY3Rpb24gcyhlLHQsbixhLHMpe3RoaXMudHlwZT1lLHRoaXMuY29udGVudD10LHRoaXMuYWxpYXM9bix0aGlzLmxlbmd0aD0wfChhfHxcIlwiKS5sZW5ndGgsdGhpcy5ncmVlZHk9ISFzfWlmKGUuUHJpc209YSxzLnN0cmluZ2lmeT1mdW5jdGlvbihlLHQsbil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIHMuc3RyaW5naWZ5KG4sdCxlKX0pLmpvaW4oXCJcIik7dmFyIG89e3R5cGU6ZS50eXBlLGNvbnRlbnQ6cy5zdHJpbmdpZnkoZS5jb250ZW50LHQsbiksdGFnOlwic3BhblwiLGNsYXNzZXM6W1widG9rZW5cIixlLnR5cGVdLGF0dHJpYnV0ZXM6e30sbGFuZ3VhZ2U6dCxwYXJlbnQ6bn07aWYoZS5hbGlhcyl7dmFyIGk9QXJyYXkuaXNBcnJheShlLmFsaWFzKT9lLmFsaWFzOltlLmFsaWFzXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShvLmNsYXNzZXMsaSl9YS5ob29rcy5ydW4oXCJ3cmFwXCIsbyk7dmFyIHI9T2JqZWN0LmtleXMoby5hdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUrJz1cIicrKG8uYXR0cmlidXRlc1tlXXx8XCJcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKSsnXCInfSkuam9pbihcIiBcIik7cmV0dXJuXCI8XCIrby50YWcrJyBjbGFzcz1cIicrby5jbGFzc2VzLmpvaW4oXCIgXCIpKydcIicrKHI/XCIgXCIrcjpcIlwiKStcIj5cIitvLmNvbnRlbnQrXCI8L1wiK28udGFnK1wiPlwifSwhZS5kb2N1bWVudClyZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyPyhhLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcnx8ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKHQpe3ZhciBuPUpTT04ucGFyc2UodC5kYXRhKSxzPW4ubGFuZ3VhZ2Usbz1uLmNvZGUsaT1uLmltbWVkaWF0ZUNsb3NlO2UucG9zdE1lc3NhZ2UoYS5oaWdobGlnaHQobyxhLmxhbmd1YWdlc1tzXSxzKSksaSYmZS5jbG9zZSgpfSwhMSksYSk6YTt2YXIgbz1kb2N1bWVudC5jdXJyZW50U2NyaXB0fHxbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpKS5wb3AoKTtyZXR1cm4gbyYmKGEuZmlsZW5hbWU9by5zcmMsYS5tYW51YWx8fG8uaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIil8fChcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEuaGlnaGxpZ2h0QWxsKTp3aW5kb3cuc2V0VGltZW91dChhLmhpZ2hsaWdodEFsbCwxNik6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixhLmhpZ2hsaWdodEFsbCkpKSxhfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUmJnNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZT9zZWxmOnt9KTtlLmV4cG9ydHMmJihlLmV4cG9ydHM9dCksdm9pZCAwIT09Y29tbW9uanNHbG9iYWwmJihjb21tb25qc0dsb2JhbC5QcmlzbT10KSx0Lmxhbmd1YWdlcy5tYXJrdXA9e2NvbW1lbnQ6LzwhLS1bXFxzXFxTXSo/LS0+Lyxwcm9sb2c6LzxcXD9bXFxzXFxTXSs/XFw/Pi8sZG9jdHlwZTovPCFET0NUWVBFW1xcc1xcU10rPz4vaSxjZGF0YTovPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSx0YWc6e3BhdHRlcm46LzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi9pLGdyZWVkeTohMCxpbnNpZGU6e3RhZzp7cGF0dGVybjovXjxcXC8/W15cXHM+XFwvXSsvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOi9ePFxcLz8vLG5hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX0sXCJhdHRyLXZhbHVlXCI6e3BhdHRlcm46Lz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOlsvXj0vLHtwYXR0ZXJuOi9eKFxccyopW1wiJ118W1wiJ10kLyxsb29rYmVoaW5kOiEwfV19fSxwdW5jdHVhdGlvbjovXFwvPz4vLFwiYXR0ci1uYW1lXCI6e3BhdHRlcm46L1teXFxzPlxcL10rLyxpbnNpZGU6e25hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX19fSxlbnRpdHk6LyYjP1tcXGRhLXpdezEsOH07L2l9LHQubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlW1wiYXR0ci12YWx1ZVwiXS5pbnNpZGUuZW50aXR5PXQubGFuZ3VhZ2VzLm1hcmt1cC5lbnRpdHksdC5ob29rcy5hZGQoXCJ3cmFwXCIsZnVuY3Rpb24oZSl7XCJlbnRpdHlcIj09PWUudHlwZSYmKGUuYXR0cmlidXRlcy50aXRsZT1lLmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLFwiJlwiKSl9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5sYW5ndWFnZXMubWFya3VwLnRhZyxcImFkZElubGluZWRcIix7dmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgYT17fTthW1wibGFuZ3VhZ2UtXCIrbl09e3BhdHRlcm46LyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksbG9va2JlaGluZDohMCxpbnNpZGU6dC5sYW5ndWFnZXNbbl19LGEuY2RhdGE9L148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7dmFyIHM9e1wiaW5jbHVkZWQtY2RhdGFcIjp7cGF0dGVybjovPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksaW5zaWRlOmF9fTtzW1wibGFuZ3VhZ2UtXCIrbl09e3BhdHRlcm46L1tcXHNcXFNdKy8saW5zaWRlOnQubGFuZ3VhZ2VzW25dfTt2YXIgbz17fTtvW2VdPXtwYXR0ZXJuOlJlZ0V4cCgvKDxfX1tcXHNcXFNdKj8+KSg/OjwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPlxccyp8W1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csZSksXCJpXCIpLGxvb2tiZWhpbmQ6ITAsZ3JlZWR5OiEwLGluc2lkZTpzfSx0Lmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJtYXJrdXBcIixcImNkYXRhXCIsbyl9fSksdC5sYW5ndWFnZXMueG1sPXQubGFuZ3VhZ2VzLmV4dGVuZChcIm1hcmt1cFwiLHt9KSx0Lmxhbmd1YWdlcy5odG1sPXQubGFuZ3VhZ2VzLm1hcmt1cCx0Lmxhbmd1YWdlcy5tYXRobWw9dC5sYW5ndWFnZXMubWFya3VwLHQubGFuZ3VhZ2VzLnN2Zz10Lmxhbmd1YWdlcy5tYXJrdXAsZnVuY3Rpb24oZSl7dmFyIHQ9LyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO2UubGFuZ3VhZ2VzLmNzcz17Y29tbWVudDovXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sYXRydWxlOntwYXR0ZXJuOi9AW1xcdy1dKz9bXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvaSxpbnNpZGU6e3J1bGU6L0BbXFx3LV0rL319LHVybDpSZWdFeHAoXCJ1cmxcXFxcKCg/OlwiK3Quc291cmNlK1wifC4qPylcXFxcKVwiLFwiaVwiKSxzZWxlY3RvcjpSZWdFeHAoXCJbXnt9XFxcXHNdKD86W157fTtcXFwiJ118XCIrdC5zb3VyY2UrXCIpKj8oPz1cXFxccypcXFxceylcIiksc3RyaW5nOntwYXR0ZXJuOnQsZ3JlZWR5OiEwfSxwcm9wZXJ0eTovWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLGltcG9ydGFudDovIWltcG9ydGFudFxcYi9pLGZ1bmN0aW9uOi9bLWEtejAtOV0rKD89XFwoKS9pLHB1bmN0dWF0aW9uOi9bKCl7fTs6LF0vfSxlLmxhbmd1YWdlcy5jc3MuYXRydWxlLmluc2lkZS5yZXN0PWUubGFuZ3VhZ2VzLmNzczt2YXIgbj1lLmxhbmd1YWdlcy5tYXJrdXA7biYmKG4udGFnLmFkZElubGluZWQoXCJzdHlsZVwiLFwiY3NzXCIpLGUubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImluc2lkZVwiLFwiYXR0ci12YWx1ZVwiLHtcInN0eWxlLWF0dHJcIjp7cGF0dGVybjovXFxzKnN0eWxlPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxL2ksaW5zaWRlOntcImF0dHItbmFtZVwiOntwYXR0ZXJuOi9eXFxzKnN0eWxlL2ksaW5zaWRlOm4udGFnLmluc2lkZX0scHVuY3R1YXRpb246L15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcImF0dHItdmFsdWVcIjp7cGF0dGVybjovLisvaSxpbnNpZGU6ZS5sYW5ndWFnZXMuY3NzfX0sYWxpYXM6XCJsYW5ndWFnZS1jc3NcIn19LG4udGFnKSl9KHQpLHQubGFuZ3VhZ2VzLmNsaWtlPXtjb21tZW50Olt7cGF0dGVybjovKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W15cXFxcOl0pXFwvXFwvLiovLGxvb2tiZWhpbmQ6ITAsZ3JlZWR5OiEwfV0sc3RyaW5nOntwYXR0ZXJuOi8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sZ3JlZWR5OiEwfSxcImNsYXNzLW5hbWVcIjp7cGF0dGVybjovKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbXFx3LlxcXFxdKy9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntwdW5jdHVhdGlvbjovWy5cXFxcXS99fSxrZXl3b3JkOi9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLGJvb2xlYW46L1xcYig/OnRydWV8ZmFsc2UpXFxiLyxmdW5jdGlvbjovXFx3Kyg/PVxcKCkvLG51bWJlcjovXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksb3BlcmF0b3I6Ly0tP3xcXCtcXCs/fCE9Pz0/fDw9P3w+PT98PT0/PT98JiY/fFxcfFxcfD98XFw/fFxcKnxcXC98fnxcXF58JS8scHVuY3R1YXRpb246L1t7fVtcXF07KCksLjpdL30sdC5sYW5ndWFnZXMuamF2YXNjcmlwdD10Lmxhbmd1YWdlcy5leHRlbmQoXCJjbGlrZVwiLHtcImNsYXNzLW5hbWVcIjpbdC5sYW5ndWFnZXMuY2xpa2VbXCJjbGFzcy1uYW1lXCJdLHtwYXR0ZXJuOi8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSlbXyRBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLGxvb2tiZWhpbmQ6ITB9XSxrZXl3b3JkOlt7cGF0dGVybjovKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W14uXSlcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sbG9va2JlaGluZDohMH1dLG51bWJlcjovXFxiKD86KD86MFt4WF1bXFxkQS1GYS1mXSt8MFtiQl1bMDFdK3wwW29PXVswLTddKyluP3xcXGQrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltFZV1bKy1dP1xcZCspPy8sZnVuY3Rpb246L1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxvcGVyYXRvcjovLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L30pLHQubGFuZ3VhZ2VzLmphdmFzY3JpcHRbXCJjbGFzcy1uYW1lXCJdWzBdLnBhdHRlcm49LyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvLHQubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImphdmFzY3JpcHRcIixcImtleXdvcmRcIix7cmVnZXg6e3BhdHRlcm46LygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oXFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1XXswLDV9KD89XFxzKigkfFtcXHJcXG4sLjt9KVxcXV0pKS8sbG9va2JlaGluZDohMCxncmVlZHk6ITB9LFwiZnVuY3Rpb24tdmFyaWFibGVcIjp7cGF0dGVybjovW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccypbPTpdXFxzKig/OmFzeW5jXFxzKik/KD86XFxiZnVuY3Rpb25cXGJ8KD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS8sYWxpYXM6XCJmdW5jdGlvblwifSxwYXJhbWV0ZXI6W3twYXR0ZXJuOi8oZnVuY3Rpb24oPzpcXHMrW18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXCkpLyxsb29rYmVoaW5kOiEwLGluc2lkZTp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fSx7cGF0dGVybjovW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxpbnNpZGU6dC5sYW5ndWFnZXMuamF2YXNjcmlwdH0se3BhdHRlcm46LyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sbG9va2JlaGluZDohMCxpbnNpZGU6dC5sYW5ndWFnZXMuamF2YXNjcmlwdH0se3BhdHRlcm46LygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxsb29rYmVoaW5kOiEwLGluc2lkZTp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fV0sY29uc3RhbnQ6L1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvfSksdC5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFwic3RyaW5nXCIse1widGVtcGxhdGUtc3RyaW5nXCI6e3BhdHRlcm46L2AoPzpcXFxcW1xcc1xcU118XFwke1tefV0rfXxbXlxcXFxgXSkqYC8sZ3JlZWR5OiEwLGluc2lkZTp7aW50ZXJwb2xhdGlvbjp7cGF0dGVybjovXFwke1tefV0rfS8saW5zaWRlOntcImludGVycG9sYXRpb24tcHVuY3R1YXRpb25cIjp7cGF0dGVybjovXlxcJHt8fSQvLGFsaWFzOlwicHVuY3R1YXRpb25cIn0scmVzdDp0Lmxhbmd1YWdlcy5qYXZhc2NyaXB0fX0sc3RyaW5nOi9bXFxzXFxTXSsvfX19KSx0Lmxhbmd1YWdlcy5tYXJrdXAmJnQubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZChcInNjcmlwdFwiLFwiamF2YXNjcmlwdFwiKSx0Lmxhbmd1YWdlcy5qcz10Lmxhbmd1YWdlcy5qYXZhc2NyaXB0LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLlByaXNtJiZzZWxmLmRvY3VtZW50JiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yJiYoc2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0PWZ1bmN0aW9uKGUpe2U9ZXx8ZG9jdW1lbnQ7dmFyIG49e2pzOlwiamF2YXNjcmlwdFwiLHB5OlwicHl0aG9uXCIscmI6XCJydWJ5XCIscHMxOlwicG93ZXJzaGVsbFwiLHBzbTE6XCJwb3dlcnNoZWxsXCIsc2g6XCJiYXNoXCIsYmF0OlwiYmF0Y2hcIixoOlwiY1wiLHRleDpcImxhdGV4XCJ9O0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcInByZVtkYXRhLXNyY11cIikpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoIWUuaGFzQXR0cmlidXRlKFwiZGF0YS1zcmMtbG9hZGVkXCIpKXtmb3IodmFyIGEscz1lLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpLG89ZSxpPS9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO28mJiFpLnRlc3Qoby5jbGFzc05hbWUpOylvPW8ucGFyZW50Tm9kZTtpZihvJiYoYT0oZS5jbGFzc05hbWUubWF0Y2goaSl8fFssXCJcIl0pWzFdKSwhYSl7dmFyIHI9KHMubWF0Y2goL1xcLihcXHcrKSQvKXx8WyxcIlwiXSlbMV07YT1uW3JdfHxyfXZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO2wuY2xhc3NOYW1lPVwibGFuZ3VhZ2UtXCIrYSxlLnRleHRDb250ZW50PVwiXCIsbC50ZXh0Q29udGVudD1cIkxvYWRpbmfigKZcIixlLmFwcGVuZENoaWxkKGwpO3ZhciBjPW5ldyBYTUxIdHRwUmVxdWVzdDtjLm9wZW4oXCJHRVRcIixzLCEwKSxjLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PWMucmVhZHlTdGF0ZSYmKGMuc3RhdHVzPDQwMCYmYy5yZXNwb25zZVRleHQ/KGwudGV4dENvbnRlbnQ9Yy5yZXNwb25zZVRleHQsdC5oaWdobGlnaHRFbGVtZW50KGwpLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmMtbG9hZGVkXCIsXCJcIikpOmMuc3RhdHVzPj00MDA/bC50ZXh0Q29udGVudD1cIuKcliBFcnJvciBcIitjLnN0YXR1cytcIiB3aGlsZSBmZXRjaGluZyBmaWxlOiBcIitjLnN0YXR1c1RleHQ6bC50ZXh0Q29udGVudD1cIuKcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eVwiKX0sYy5zZW5kKG51bGwpfX0pLHQucGx1Z2lucy50b29sYmFyJiZ0LnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbihcImRvd25sb2FkLWZpbGVcIixmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQucGFyZW50Tm9kZTtpZih0JiYvcHJlL2kudGVzdCh0Lm5vZGVOYW1lKSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWRvd25sb2FkLWxpbmtcIikpe3ZhciBuPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gYS50ZXh0Q29udGVudD10LmdldEF0dHJpYnV0ZShcImRhdGEtZG93bmxvYWQtbGluay1sYWJlbFwiKXx8XCJEb3dubG9hZFwiLGEuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIixcIlwiKSxhLmhyZWY9bixhfX0pfSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0KCl9KSl9KSxDb2RlRmxhc2s9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBFcnJvcihcIkNvZGVGbGFzayBleHBlY3RzIGEgcGFyYW1ldGVyIHdoaWNoIGlzIEVsZW1lbnQgb3IgYSBTdHJpbmcgc2VsZWN0b3JcIik7aWYoIXQpdGhyb3cgRXJyb3IoXCJDb2RlRmxhc2sgZXhwZWN0cyBhbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGFzIHNlY29uZCBwYXJhbWV0ZXJcIik7aWYoZS5ub2RlVHlwZSl0aGlzLmVkaXRvclJvb3Q9ZTtlbHNle3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7biYmKHRoaXMuZWRpdG9yUm9vdD1uKX10aGlzLm9wdHM9dCx0aGlzLnN0YXJ0RWRpdG9yKCl9O0NvZGVGbGFzay5wcm90b3R5cGUuc3RhcnRFZGl0b3I9ZnVuY3Rpb24oKXtpZighaW5qZWN0Q3NzKGVkaXRvckNzcyxudWxsLHRoaXMub3B0cy5zdHlsZVBhcmVudCkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gaW5qZWN0IENvZGVGbGFzayBDU1MuXCIpO3RoaXMuY3JlYXRlV3JhcHBlcigpLHRoaXMuY3JlYXRlVGV4dGFyZWEoKSx0aGlzLmNyZWF0ZVByZSgpLHRoaXMuY3JlYXRlQ29kZSgpLHRoaXMucnVuT3B0aW9ucygpLHRoaXMubGlzdGVuVGV4dGFyZWEoKSx0aGlzLnBvcHVsYXRlRGVmYXVsdCgpLHRoaXMudXBkYXRlQ29kZSh0aGlzLmNvZGUpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVdyYXBwZXI9ZnVuY3Rpb24oKXt0aGlzLmNvZGU9dGhpcy5lZGl0b3JSb290LmlubmVySFRNTCx0aGlzLmVkaXRvclJvb3QuaW5uZXJIVE1MPVwiXCIsdGhpcy5lbFdyYXBwZXI9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsdGhpcy5lZGl0b3JSb290KSx0aGlzLmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrXCIpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVRleHRhcmVhPWZ1bmN0aW9uKCl7dGhpcy5lbFRleHRhcmVhPXRoaXMuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsdGhpcy5lbFdyYXBwZXIpLHRoaXMuZWxUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrX190ZXh0YXJlYVwiLFwiY29kZWZsYXNrX19mbGF0dGVuXCIpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZVByZT1mdW5jdGlvbigpe3RoaXMuZWxQcmU9dGhpcy5jcmVhdGVFbGVtZW50KFwicHJlXCIsdGhpcy5lbFdyYXBwZXIpLHRoaXMuZWxQcmUuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFza19fcHJlXCIsXCJjb2RlZmxhc2tfX2ZsYXR0ZW5cIil9LENvZGVGbGFzay5wcm90b3R5cGUuY3JlYXRlQ29kZT1mdW5jdGlvbigpe3RoaXMuZWxDb2RlPXRoaXMuY3JlYXRlRWxlbWVudChcImNvZGVcIix0aGlzLmVsUHJlKSx0aGlzLmVsQ29kZS5jbGFzc0xpc3QuYWRkKFwiY29kZWZsYXNrX19jb2RlXCIsXCJsYW5ndWFnZS1cIisodGhpcy5vcHRzLmxhbmd1YWdlfHxcImh0bWxcIikpfSxDb2RlRmxhc2sucHJvdG90eXBlLmNyZWF0ZUxpbmVOdW1iZXJzPWZ1bmN0aW9uKCl7dGhpcy5lbExpbmVOdW1iZXJzPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLHRoaXMuZWxXcmFwcGVyKSx0aGlzLmVsTGluZU51bWJlcnMuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFza19fbGluZXNcIiksdGhpcy5zZXRMaW5lTnVtYmVyKCl9LENvZGVGbGFzay5wcm90b3R5cGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuIHQuYXBwZW5kQ2hpbGQobiksbn0sQ29kZUZsYXNrLnByb3RvdHlwZS5ydW5PcHRpb25zPWZ1bmN0aW9uKCl7dGhpcy5vcHRzLnJ0bD10aGlzLm9wdHMucnRsfHwhMSx0aGlzLm9wdHMudGFiU2l6ZT10aGlzLm9wdHMudGFiU2l6ZXx8Mix0aGlzLm9wdHMuZW5hYmxlQXV0b2NvcnJlY3Q9dGhpcy5vcHRzLmVuYWJsZUF1dG9jb3JyZWN0fHwhMSx0aGlzLm9wdHMubGluZU51bWJlcnM9dGhpcy5vcHRzLmxpbmVOdW1iZXJzfHwhMSx0aGlzLm9wdHMuZGVmYXVsdFRoZW1lPSExIT09dGhpcy5vcHRzLmRlZmF1bHRUaGVtZSx0aGlzLm9wdHMuYXJlYUlkPXRoaXMub3B0cy5hcmVhSWR8fG51bGwsdGhpcy5vcHRzLmFyaWFMYWJlbGxlZGJ5PXRoaXMub3B0cy5hcmlhTGFiZWxsZWRieXx8bnVsbCx0aGlzLm9wdHMucmVhZG9ubHk9dGhpcy5vcHRzLnJlYWRvbmx5fHxudWxsLFwiYm9vbGVhblwiIT10eXBlb2YgdGhpcy5vcHRzLmhhbmRsZVRhYnMmJih0aGlzLm9wdHMuaGFuZGxlVGFicz0hMCksXCJib29sZWFuXCIhPXR5cGVvZiB0aGlzLm9wdHMuaGFuZGxlU2VsZkNsb3NpbmdDaGFyYWN0ZXJzJiYodGhpcy5vcHRzLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycz0hMCksXCJib29sZWFuXCIhPXR5cGVvZiB0aGlzLm9wdHMuaGFuZGxlTmV3TGluZUluZGVudGF0aW9uJiYodGhpcy5vcHRzLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbj0hMCksITA9PT10aGlzLm9wdHMucnRsJiYodGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLHRoaXMuZWxQcmUuc2V0QXR0cmlidXRlKFwiZGlyXCIsXCJydGxcIikpLCExPT09dGhpcy5vcHRzLmVuYWJsZUF1dG9jb3JyZWN0JiYodGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIixcImZhbHNlXCIpLHRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLFwib2ZmXCIpLHRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSx0aGlzLmVsVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSksdGhpcy5vcHRzLmxpbmVOdW1iZXJzJiYodGhpcy5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvZGVmbGFzay0taGFzLWxpbmUtbnVtYmVyc1wiKSx0aGlzLmNyZWF0ZUxpbmVOdW1iZXJzKCkpLHRoaXMub3B0cy5kZWZhdWx0VGhlbWUmJmluamVjdENzcyhkZWZhdWx0Q3NzVGhlbWUsXCJ0aGVtZS1kZWZhdWx0XCIsdGhpcy5vcHRzLnN0eWxlUGFyZW50KSx0aGlzLm9wdHMuYXJlYUlkJiZ0aGlzLmVsVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLm9wdHMuYXJlYUlkKSx0aGlzLm9wdHMuYXJpYUxhYmVsbGVkYnkmJnRoaXMuZWxUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLm9wdHMuYXJpYUxhYmVsbGVkYnkpLHRoaXMub3B0cy5yZWFkb25seSYmdGhpcy5lbmFibGVSZWFkb25seU1vZGUoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS51cGRhdGVMaW5lTnVtYmVyc0NvdW50PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVwiXCIsdD0xO3Q8PXRoaXMubGluZU51bWJlcjt0KyspZT1lKyc8c3BhbiBjbGFzcz1cImNvZGVmbGFza19fbGluZXNfX2xpbmVcIj4nK3QrXCI8L3NwYW4+XCI7dGhpcy5lbExpbmVOdW1iZXJzLmlubmVySFRNTD1lfSxDb2RlRmxhc2sucHJvdG90eXBlLmxpc3RlblRleHRhcmVhPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmVsVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7ZS5jb2RlPXQudGFyZ2V0LnZhbHVlLGUuZWxDb2RlLmlubmVySFRNTD1lc2NhcGVIdG1sKHQudGFyZ2V0LnZhbHVlKSxlLmhpZ2hsaWdodCgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnJ1blVwZGF0ZSgpLGUuc2V0TGluZU51bWJlcigpfSwxKX0pLHRoaXMuZWxUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGZ1bmN0aW9uKHQpe2UuaGFuZGxlVGFicyh0KSxlLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycyh0KSxlLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbih0KX0pLHRoaXMuZWxUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZnVuY3Rpb24odCl7ZS5lbFByZS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZCgtXCIrdC50YXJnZXQuc2Nyb2xsTGVmdCtcInB4LCAtXCIrdC50YXJnZXQuc2Nyb2xsVG9wK1wicHgsIDApXCIsZS5lbExpbmVOdW1iZXJzJiYoZS5lbExpbmVOdW1iZXJzLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKDAsIC1cIit0LnRhcmdldC5zY3JvbGxUb3ArXCJweCwgMClcIil9KX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVUYWJzPWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0cy5oYW5kbGVUYWJzKXtpZig5IT09ZS5rZXlDb2RlKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLG49dC5zZWxlY3Rpb25EaXJlY3Rpb24sYT10LnNlbGVjdGlvblN0YXJ0LHM9dC5zZWxlY3Rpb25FbmQsbz10LnZhbHVlLGk9by5zdWJzdHIoMCxhKSxyPW8uc3Vic3RyaW5nKGEscyksbD1vLnN1YnN0cmluZyhzKSxjPVwiIFwiLnJlcGVhdCh0aGlzLm9wdHMudGFiU2l6ZSk7aWYoYSE9PXMmJnIubGVuZ3RoPj1jLmxlbmd0aCl7dmFyIGQ9YS1pLnNwbGl0KFwiXFxuXCIpLnBvcCgpLmxlbmd0aCx1PWMubGVuZ3RoLHA9Yy5sZW5ndGg7aWYoZS5zaGlmdEtleSlvLnN1YnN0cihkLGMubGVuZ3RoKT09PWM/KHU9LXUsZD5hPyhyPXIuc3Vic3RyaW5nKDAsZCkrci5zdWJzdHJpbmcoZCtjLmxlbmd0aCkscD0wKTpkPT09YT8odT0wLHA9MCxyPXIuc3Vic3RyaW5nKGMubGVuZ3RoKSk6KHA9LXAsaT1pLnN1YnN0cmluZygwLGQpK2kuc3Vic3RyaW5nKGQrYy5sZW5ndGgpKSk6KHU9MCxwPTApLHI9ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXG5cIitjLnNwbGl0KFwiXCIpLmpvaW4oXCJcXFxcXCIpLFwiZ1wiKSxcIlxcblwiKTtlbHNlIGk9aS5zdWJzdHIoMCxkKStjK2kuc3Vic3RyaW5nKGQsYSkscj1yLnJlcGxhY2UoL1xcbi9nLFwiXFxuXCIrYyk7dC52YWx1ZT1pK3IrbCx0LnNlbGVjdGlvblN0YXJ0PWErdSx0LnNlbGVjdGlvbkVuZD1hK3IubGVuZ3RoK3AsdC5zZWxlY3Rpb25EaXJlY3Rpb249bn1lbHNlIHQudmFsdWU9aStjK2wsdC5zZWxlY3Rpb25TdGFydD1hK2MubGVuZ3RoLHQuc2VsZWN0aW9uRW5kPWErYy5sZW5ndGg7dmFyIGg9dC52YWx1ZTt0aGlzLnVwZGF0ZUNvZGUoaCksdGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZD1zK3RoaXMub3B0cy50YWJTaXplfX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVTZWxmQ2xvc2luZ0NoYXJhY3RlcnM9ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRzLmhhbmRsZVNlbGZDbG9zaW5nQ2hhcmFjdGVycyl7dmFyIHQ9ZS5rZXk7aWYoW1wiKFwiLFwiW1wiLFwie1wiLFwiPFwiLFwiJ1wiLCdcIiddLmluY2x1ZGVzKHQpfHxbXCIpXCIsXCJdXCIsXCJ9XCIsXCI+XCIsXCInXCIsJ1wiJ10uaW5jbHVkZXModCkpc3dpdGNoKHQpe2Nhc2VcIihcIjpjYXNlXCIpXCI6dGhpcy5jbG9zZUNoYXJhY3Rlcih0KTticmVhaztjYXNlXCJbXCI6Y2FzZVwiXVwiOnRoaXMuY2xvc2VDaGFyYWN0ZXIodCk7YnJlYWs7Y2FzZVwie1wiOmNhc2VcIn1cIjp0aGlzLmNsb3NlQ2hhcmFjdGVyKHQpO2JyZWFrO2Nhc2VcIjxcIjpjYXNlXCI+XCI6Y2FzZVwiJ1wiOmNhc2UnXCInOnRoaXMuY2xvc2VDaGFyYWN0ZXIodCl9fX0sQ29kZUZsYXNrLnByb3RvdHlwZS5zZXRMaW5lTnVtYmVyPWZ1bmN0aW9uKCl7dGhpcy5saW5lTnVtYmVyPXRoaXMuY29kZS5zcGxpdChcIlxcblwiKS5sZW5ndGgsdGhpcy5vcHRzLmxpbmVOdW1iZXJzJiZ0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzQ291bnQoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS5oYW5kbGVOZXdMaW5lSW5kZW50YXRpb249ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRzLmhhbmRsZU5ld0xpbmVJbmRlbnRhdGlvbiYmMTM9PT1lLmtleUNvZGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD10aGlzLmVsVGV4dGFyZWEsbj10LnNlbGVjdGlvblN0YXJ0LGE9dC5zZWxlY3Rpb25FbmQscz10LnZhbHVlLG89cy5zdWJzdHIoMCxuKSxpPXMuc3Vic3RyaW5nKGEpLHI9cy5sYXN0SW5kZXhPZihcIlxcblwiLG4tMSksbD1yK3Muc2xpY2UocisxKS5zZWFyY2goL1teIF18JC8pLGM9bD5yP2wtcjowLGQ9bytcIlxcblwiK1wiIFwiLnJlcGVhdChjKStpO3QudmFsdWU9ZCx0LnNlbGVjdGlvblN0YXJ0PW4rYysxLHQuc2VsZWN0aW9uRW5kPW4rYysxLHRoaXMudXBkYXRlQ29kZSh0LnZhbHVlKX19LENvZGVGbGFzay5wcm90b3R5cGUuY2xvc2VDaGFyYWN0ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvblN0YXJ0LG49dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZDtpZih0aGlzLnNraXBDbG9zZUNoYXIoZSkpe3ZhciBhPXRoaXMuY29kZS5zdWJzdHIobiwxKT09PWUscz1hP24rMTpuLG89IWEmJltcIidcIiwnXCInXS5pbmNsdWRlcyhlKT9lOlwiXCIsaT1cIlwiK3RoaXMuY29kZS5zdWJzdHJpbmcoMCx0KStvK3RoaXMuY29kZS5zdWJzdHJpbmcocyk7dGhpcy51cGRhdGVDb2RlKGkpLHRoaXMuZWxUZXh0YXJlYS5zZWxlY3Rpb25FbmQ9Kyt0aGlzLmVsVGV4dGFyZWEuc2VsZWN0aW9uU3RhcnR9ZWxzZXt2YXIgcj1lO3N3aXRjaChlKXtjYXNlXCIoXCI6cj1TdHJpbmcuZnJvbUNoYXJDb2RlKGUuY2hhckNvZGVBdCgpKzEpO2JyZWFrO2Nhc2VcIjxcIjpjYXNlXCJ7XCI6Y2FzZVwiW1wiOnI9U3RyaW5nLmZyb21DaGFyQ29kZShlLmNoYXJDb2RlQXQoKSsyKX12YXIgbD10aGlzLmNvZGUuc3Vic3RyaW5nKHQsbiksYz1cIlwiK3RoaXMuY29kZS5zdWJzdHJpbmcoMCx0KStsK3IrdGhpcy5jb2RlLnN1YnN0cmluZyhuKTt0aGlzLnVwZGF0ZUNvZGUoYyl9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZD10fSxDb2RlRmxhc2sucHJvdG90eXBlLnNraXBDbG9zZUNoYXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvblN0YXJ0LG49dGhpcy5lbFRleHRhcmVhLnNlbGVjdGlvbkVuZCxhPU1hdGguYWJzKG4tdCk+MDtyZXR1cm5bXCIpXCIsXCJ9XCIsXCJdXCIsXCI+XCJdLmluY2x1ZGVzKGUpfHxbXCInXCIsJ1wiJ10uaW5jbHVkZXMoZSkmJiFhfSxDb2RlRmxhc2sucHJvdG90eXBlLnVwZGF0ZUNvZGU9ZnVuY3Rpb24oZSl7dGhpcy5jb2RlPWUsdGhpcy5lbFRleHRhcmVhLnZhbHVlPWUsdGhpcy5lbENvZGUuaW5uZXJIVE1MPWVzY2FwZUh0bWwoZSksdGhpcy5oaWdobGlnaHQoKSx0aGlzLnNldExpbmVOdW1iZXIoKSxzZXRUaW1lb3V0KHRoaXMucnVuVXBkYXRlLmJpbmQodGhpcyksMSl9LENvZGVGbGFzay5wcm90b3R5cGUudXBkYXRlTGFuZ3VhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRzLmxhbmd1YWdlO3RoaXMuZWxDb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYW5ndWFnZS1cIit0KSx0aGlzLmVsQ29kZS5jbGFzc0xpc3QuYWRkKFwibGFuZ3VhZ2UtXCIrZSksdGhpcy5vcHRzLmxhbmd1YWdlPWUsdGhpcy5oaWdobGlnaHQoKX0sQ29kZUZsYXNrLnByb3RvdHlwZS5hZGRMYW5ndWFnZT1mdW5jdGlvbihlLHQpe3ByaXNtLmxhbmd1YWdlc1tlXT10fSxDb2RlRmxhc2sucHJvdG90eXBlLnBvcHVsYXRlRGVmYXVsdD1mdW5jdGlvbigpe3RoaXMudXBkYXRlQ29kZSh0aGlzLmNvZGUpfSxDb2RlRmxhc2sucHJvdG90eXBlLmhpZ2hsaWdodD1mdW5jdGlvbigpe3ByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5lbENvZGUsITEpfSxDb2RlRmxhc2sucHJvdG90eXBlLm9uVXBkYXRlPWZ1bmN0aW9uKGUpe2lmKGUmJlwiW29iamVjdCBGdW5jdGlvbl1cIiE9PXt9LnRvU3RyaW5nLmNhbGwoZSkpdGhyb3cgRXJyb3IoXCJDb2RlRmxhc2sgZXhwZWN0cyBjYWxsYmFjayBvZiB0eXBlIEZ1bmN0aW9uXCIpO3RoaXMudXBkYXRlQ2FsbEJhY2s9ZX0sQ29kZUZsYXNrLnByb3RvdHlwZS5nZXRDb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29kZX0sQ29kZUZsYXNrLnByb3RvdHlwZS5ydW5VcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUNhbGxCYWNrJiZ0aGlzLnVwZGF0ZUNhbGxCYWNrKHRoaXMuY29kZSl9LENvZGVGbGFzay5wcm90b3R5cGUuZW5hYmxlUmVhZG9ubHlNb2RlPWZ1bmN0aW9uKCl7dGhpcy5lbFRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsITApfSxDb2RlRmxhc2sucHJvdG90eXBlLmRpc2FibGVSZWFkb25seU1vZGU9ZnVuY3Rpb24oKXt0aGlzLmVsVGV4dGFyZWEucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIil9O2V4cG9ydCBkZWZhdWx0IENvZGVGbGFzaztcbiIsIlByaXNtLmxhbmd1YWdlcy5nbHNsID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjb21tZW50JzogW1xuXHRcdC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQvXFwvXFwvKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cXFxcXFxyXFxuXSkqL1xuXHRdLFxuXHQnbnVtYmVyJzogLyg/OlxcYjB4W1xcZGEtZl0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPylbdWxmXSovaSxcblx0J2tleXdvcmQnOiAvXFxiKD86YXR0cmlidXRlfGNvbnN0fHVuaWZvcm18dmFyeWluZ3xidWZmZXJ8c2hhcmVkfGNvaGVyZW50fHZvbGF0aWxlfHJlc3RyaWN0fHJlYWRvbmx5fHdyaXRlb25seXxhdG9taWNfdWludHxsYXlvdXR8Y2VudHJvaWR8ZmxhdHxzbW9vdGh8bm9wZXJzcGVjdGl2ZXxwYXRjaHxzYW1wbGV8YnJlYWt8Y29udGludWV8ZG98Zm9yfHdoaWxlfHN3aXRjaHxjYXNlfGRlZmF1bHR8aWZ8ZWxzZXxzdWJyb3V0aW5lfGlufG91dHxpbm91dHxmbG9hdHxkb3VibGV8aW50fHZvaWR8Ym9vbHx0cnVlfGZhbHNlfGludmFyaWFudHxwcmVjaXNlfGRpc2NhcmR8cmV0dXJufGQ/bWF0WzIzNF0oPzp4WzIzNF0pP3xbaWJkdV0/dmVjWzIzNF18dWludHxsb3dwfG1lZGl1bXB8aGlnaHB8cHJlY2lzaW9ufFtpdV0/c2FtcGxlclsxMjNdRHxbaXVdP3NhbXBsZXJDdWJlfHNhbXBsZXJbMTJdRFNoYWRvd3xzYW1wbGVyQ3ViZVNoYWRvd3xbaXVdP3NhbXBsZXJbMTJdREFycmF5fHNhbXBsZXJbMTJdREFycmF5U2hhZG93fFtpdV0/c2FtcGxlcjJEUmVjdHxzYW1wbGVyMkRSZWN0U2hhZG93fFtpdV0/c2FtcGxlckJ1ZmZlcnxbaXVdP3NhbXBsZXIyRE1TKD86QXJyYXkpP3xbaXVdP3NhbXBsZXJDdWJlQXJyYXl8c2FtcGxlckN1YmVBcnJheVNoYWRvd3xbaXVdP2ltYWdlWzEyM11EfFtpdV0/aW1hZ2UyRFJlY3R8W2l1XT9pbWFnZUN1YmV8W2l1XT9pbWFnZUJ1ZmZlcnxbaXVdP2ltYWdlWzEyXURBcnJheXxbaXVdP2ltYWdlQ3ViZUFycmF5fFtpdV0/aW1hZ2UyRE1TKD86QXJyYXkpP3xzdHJ1Y3R8Y29tbW9ufHBhcnRpdGlvbnxhY3RpdmV8YXNtfGNsYXNzfHVuaW9ufGVudW18dHlwZWRlZnx0ZW1wbGF0ZXx0aGlzfHJlc291cmNlfGdvdG98aW5saW5lfG5vaW5saW5lfHB1YmxpY3xzdGF0aWN8ZXh0ZXJufGV4dGVybmFsfGludGVyZmFjZXxsb25nfHNob3J0fGhhbGZ8Zml4ZWR8dW5zaWduZWR8c3VwZXJwfGlucHV0fG91dHB1dHxodmVjWzIzNF18ZnZlY1syMzRdfHNhbXBsZXIzRFJlY3R8ZmlsdGVyfHNpemVvZnxjYXN0fG5hbWVzcGFjZXx1c2luZylcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZ2xzbCcsICdjb21tZW50Jywge1xuXHQncHJlcHJvY2Vzc29yJzoge1xuXHRcdHBhdHRlcm46IC8oXlsgXFx0XSopIyg/Oig/OmRlZmluZXx1bmRlZnxpZnxpZmRlZnxpZm5kZWZ8ZWxzZXxlbGlmfGVuZGlmfGVycm9yfHByYWdtYXxleHRlbnNpb258dmVyc2lvbnxsaW5lKVxcYik/L20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2J1aWx0aW4nXG5cdH1cbn0pOyIsIlxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jb3JlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKiBNSVQgbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC9cbiAqIEBhdXRob3IgTGVhIFZlcm91IGh0dHA6Ly9sZWEudmVyb3UubWVcbiAqL1xuXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKXtcblxuLy8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xudmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcbnZhciB1bmlxdWVJZCA9IDA7XG5cbnZhciBfID0ge1xuXHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cdHV0aWw6IHtcblx0XHRlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBfLnV0aWwuZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKF8udXRpbC5lbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGxhbmd1YWdlczoge1xuXHRcdGV4dGVuZDogZnVuY3Rpb24gKGlkLCByZWRlZikge1xuXHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdGxhbmdba2V5XSA9IHJlZGVmW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsYW5nO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnNlcnQgYSB0b2tlbiBiZWZvcmUgYW5vdGhlciB0b2tlbiBpbiBhIGxhbmd1YWdlIGxpdGVyYWxcblx0XHQgKiBBcyB0aGlzIG5lZWRzIHRvIHJlY3JlYXRlIHRoZSBvYmplY3QgKHdlIGNhbm5vdCBhY3R1YWxseSBpbnNlcnQgYmVmb3JlIGtleXMgaW4gb2JqZWN0IGxpdGVyYWxzKSxcblx0XHQgKiB3ZSBjYW5ub3QganVzdCBwcm92aWRlIGFuIG9iamVjdCwgd2UgbmVlZCBhbiBvYmplY3QgYW5kIGEga2V5LlxuXHRcdCAqIEBwYXJhbSBpbnNpZGUgVGhlIGtleSAob3IgbGFuZ3VhZ2UgaWQpIG9mIHRoZSBwYXJlbnRcblx0XHQgKiBAcGFyYW0gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHQgKiBAcGFyYW0gaW5zZXJ0IE9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gaW5zZXJ0XG5cdFx0ICogQHBhcmFtIHJvb3QgVGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGBpbnNpZGVgLiBJZiBlcXVhbCB0byBQcmlzbS5sYW5ndWFnZXMsIGl0IGNhbiBiZSBvbWl0dGVkLlxuXHRcdCAqL1xuXHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdHJvb3QgPSByb290IHx8IF8ubGFuZ3VhZ2VzO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSByb290W2luc2lkZV07XG5cdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgdG9rZW4gd2hpY2ggYWxzbyBvY2N1ciBpbiBpbnNlcnQuIFNlZSAjMTUyNVxuXHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2xkID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0Xy5sYW5ndWFnZXMuREZTKF8ubGFuZ3VhZ2VzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gb2xkICYmIGtleSAhPSBpbnNpZGUpIHtcblx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvLyBUcmF2ZXJzZSBhIGxhbmd1YWdlIGRlZmluaXRpb24gd2l0aCBEZXB0aCBGaXJzdCBTZWFyY2hcblx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdHZhciBvYmpJZCA9IF8udXRpbC5vYmpJZDtcblxuXHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChvLCBpLCBvW2ldLCB0eXBlIHx8IGkpO1xuXG5cdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXSxcblx0XHRcdFx0XHQgICAgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0aWYgKHByb3BlcnR5VHlwZSA9PT0gJ09iamVjdCcgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczoge30sXG5cblx0aGlnaGxpZ2h0QWxsOiBmdW5jdGlvbihhc3luYywgY2FsbGJhY2spIHtcblx0XHRfLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spO1xuXHR9LFxuXG5cdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHR2YXIgZWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpO1xuXG5cdFx0Zm9yICh2YXIgaT0wLCBlbGVtZW50OyBlbGVtZW50ID0gZWxlbWVudHNbaSsrXTspIHtcblx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdHZhciBsYW5ndWFnZSA9ICdub25lJywgZ3JhbW1hciwgcGFyZW50ID0gZWxlbWVudDtcblxuXHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0bGFuZ3VhZ2UgPSAocGFyZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXHRcdH1cblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHRwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICgvcHJlL2kudGVzdChwYXJlbnQubm9kZU5hbWUpKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0dmFyIGluc2VydEhpZ2hsaWdodGVkQ29kZSA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy51dGlsLmVuY29kZShlbnYuY29kZSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luYyAmJiBfc2VsZi5Xb3JrZXIpIHtcblx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlOiBlbnYuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy5oaWdobGlnaHQoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtdG9rZW5pemUnLCBlbnYpO1xuXHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdH0sXG5cblx0bWF0Y2hHcmFtbWFyOiBmdW5jdGlvbiAodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpbmRleCwgc3RhcnRQb3MsIG9uZXNob3QsIHRhcmdldCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0b2tlbiA9PSB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gKF8udXRpbC50eXBlKHBhdHRlcm5zKSA9PT0gXCJBcnJheVwiKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQgPSAhIXBhdHRlcm4ubG9va2JlaGluZCxcblx0XHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRcdGFsaWFzID0gcGF0dGVybi5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybi5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXV5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgXCJnXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRcdC8vIERvbuKAmXQgY2FjaGUgbGVuZ3RoIGFzIGl0IGNoYW5nZXMgZHVyaW5nIHRoZSBsb29wXG5cdFx0XHRcdGZvciAodmFyIGkgPSBpbmRleCwgcG9zID0gc3RhcnRQb3M7IGkgPCBzdHJhcnIubGVuZ3RoOyBwb3MgKz0gc3RyYXJyW2ldLmxlbmd0aCwgKytpKSB7XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gc3RyYXJyW2ldO1xuXG5cdFx0XHRcdFx0aWYgKHN0cmFyci5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncmVlZHkgJiYgaSAhPSBzdHJhcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgPyBtYXRjaFsxXS5sZW5ndGggOiAwKSxcblx0XHRcdFx0XHRcdCAgICB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ICAgIGsgPSBpLFxuXHRcdFx0XHRcdFx0ICAgIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGxlbiA9IHN0cmFyci5sZW5ndGg7IGsgPCBsZW4gJiYgKHAgPCB0byB8fCAoIXN0cmFycltrXS50eXBlICYmICFzdHJhcnJbayAtIDFdLmdyZWVkeSkpOyArK2spIHtcblx0XHRcdFx0XHRcdFx0cCArPSBzdHJhcnJba10ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHQvLyBNb3ZlIHRoZSBpbmRleCBpIHRvIHRoZSBlbGVtZW50IGluIHN0cmFyciB0aGF0IGlzIGNsb3Nlc3QgdG8gZnJvbVxuXHRcdFx0XHRcdFx0XHRpZiAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgc3RyYXJyW2ldIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKHN0cmFycltpXSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOdW1iZXIgb2YgdG9rZW5zIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdGRlbE51bSA9IGsgLSBpO1xuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpLFxuXHRcdFx0XHRcdFx0XHRkZWxOdW0gPSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdCAgICBtYXRjaCA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpLFxuXHRcdFx0XHRcdCAgICB0byA9IGZyb20gKyBtYXRjaC5sZW5ndGgsXG5cdFx0XHRcdFx0ICAgIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHQgICAgYWZ0ZXIgPSBzdHIuc2xpY2UodG8pO1xuXG5cdFx0XHRcdFx0dmFyIGFyZ3MgPSBbaSwgZGVsTnVtXTtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdCsraTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGJlZm9yZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZT8gXy50b2tlbml6ZShtYXRjaCwgaW5zaWRlKSA6IG1hdGNoLCBhbGlhcywgbWF0Y2gsIGdyZWVkeSk7XG5cblx0XHRcdFx0XHRhcmdzLnB1c2god3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFyZ3MucHVzaChhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShzdHJhcnIsIGFyZ3MpO1xuXG5cdFx0XHRcdFx0aWYgKGRlbE51bSAhPSAxKVxuXHRcdFx0XHRcdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpLCBwb3MsIHRydWUsIHRva2VuKTtcblxuXHRcdFx0XHRcdGlmIChvbmVzaG90KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgc3RyYXJyID0gW3RleHRdO1xuXG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgMCwgMCwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHN0cmFycjtcblx0fSxcblxuXHRob29rczoge1xuXHRcdGFsbDoge30sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNhbGxiYWNrOyBjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdOykge1xuXHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRUb2tlbjogVG9rZW5cbn07XG5cbl9zZWxmLlByaXNtID0gXztcblxuZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuXHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8IFwiXCIpLmxlbmd0aHwwO1xuXHR0aGlzLmdyZWVkeSA9ICEhZ3JlZWR5O1xufVxuXG5Ub2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbihvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0cmV0dXJuIG8ubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoZWxlbWVudCwgbGFuZ3VhZ2UpO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGVudiA9IHtcblx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0Y29udGVudDogVG9rZW4uc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdHRhZzogJ3NwYW4nLFxuXHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHR9O1xuXG5cdGlmIChvLmFsaWFzKSB7XG5cdFx0dmFyIGFsaWFzZXMgPSBBcnJheS5pc0FycmF5KG8uYWxpYXMpID8gby5hbGlhcyA6IFtvLmFsaWFzXTtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdH1cblxuXHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0dmFyIGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhlbnYuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHR9KS5qb2luKCcgJyk7XG5cblx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAoYXR0cmlidXRlcyA/ICcgJyArIGF0dHJpYnV0ZXMgOiAnJykgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xufTtcblxuaWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0Ly8gSW4gd29ya2VyXG5cdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSksXG5cdFx0XHRcdGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlID0gbWVzc2FnZS5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZXR1cm4gXztcbn1cblxuLy9HZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucG9wKCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKCFfLm1hbnVhbCAmJiAhc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8uaGlnaGxpZ2h0QWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KF8uaGlnaGxpZ2h0QWxsLCAxNik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIF8uaGlnaGxpZ2h0QWxsKTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tbWFya3VwLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG5cdCdjb21tZW50JzogLzwhLS1bXFxzXFxTXSo/LS0+Lyxcblx0J3Byb2xvZyc6IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuXHQnZG9jdHlwZSc6IC88IURPQ1RZUEVbXFxzXFxTXSs/Pi9pLFxuXHQnY2RhdGEnOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0L149Lyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcblxuXHRpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG5cdFx0ZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG5cdH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGA8c3R5bGU+YCB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcblx0ICogY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cblx0ICogQGV4YW1wbGVcblx0ICogYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG5cdFx0dmFyIGluY2x1ZGVkQ2RhdGFJbnNpZGUgPSB7fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvKF48IVxcW0NEQVRBXFxbKVtcXHNcXFNdKz8oPz1cXF1cXF0+JCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXG5cdFx0dmFyIGluc2lkZSA9IHtcblx0XHRcdCdpbmNsdWRlZC1jZGF0YSc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdFx0XHRpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcblx0XHRcdH1cblx0XHR9O1xuXHRcdGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cblx0XHR2YXIgZGVmID0ge307XG5cdFx0ZGVmW3RhZ05hbWVdID0ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oPF9fW1xcc1xcU10qPz4pKD86PCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+XFxzKnxbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgdGFnTmFtZSksICdpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBpbnNpZGVcblx0XHR9O1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMubWF0aG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5zdmcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0J2F0cnVsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9AW1xcdy1dK1tcXHNcXFNdKj8oPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvQFtcXHctXSsvXG5cdFx0XHRcdC8vIFNlZSByZXN0IGJlbG93XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndXJsJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCd1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3xbXlxcblxccigpXSopXFxcXCknLCAnaScpLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnc2VsZWN0b3InOiBSZWdFeHAoJ1tee31cXFxcc10oPzpbXnt9O1wiXFwnXXwnICsgc3RyaW5nLnNvdXJjZSArICcpKj8oPz1cXFxccypcXFxceyknKSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiAvWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLFxuXHRcdCdpbXBvcnRhbnQnOiAvIWltcG9ydGFudFxcYi9pLFxuXHRcdCdmdW5jdGlvbic6IC9bLWEtejAtOV0rKD89XFwoKS9pLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2luc2lkZScsICdhdHRyLXZhbHVlJywge1xuXHRcdFx0J3N0eWxlLWF0dHInOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cXHMqc3R5bGU9KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFxzKnN0eWxlL2ksXG5cdFx0XHRcdFx0XHRpbnNpZGU6IG1hcmt1cC50YWcuaW5zaWRlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFxuXHRcdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogLy4rL2ksXG5cdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3Ncblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJ1xuXHRcdFx0fVxuXHRcdH0sIG1hcmt1cC50YWcpO1xuXHR9XG5cbn0oUHJpc20pKTtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNsaWtlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5jbGlrZSA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRwdW5jdHVhdGlvbjogL1suXFxcXF0vXG5cdFx0fVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdCdmdW5jdGlvbic6IC9cXHcrKD89XFwoKS8sXG5cdCdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC8tLT98XFwrXFwrP3whPT89P3w8PT98Pj0/fD09Pz0/fCYmP3xcXHxcXHw/fFxcP3xcXCp8XFwvfH58XFxefCUvLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pW18kQS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86Xnx9KVxccyopKD86Y2F0Y2h8ZmluYWxseSlcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pXFxiKD86YXN8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdF0sXG5cdCdudW1iZXInOiAvXFxiKD86KD86MFt4WF0oPzpbXFxkQS1GYS1mXSg/Ol9bXFxkQS1GYS1mXSk/KSt8MFtiQl0oPzpbMDFdKD86X1swMV0pPykrfDBbb09dKD86WzAtN10oPzpfWzAtN10pPykrKW4/fCg/OlxcZCg/Ol9cXGQpPykrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYig/OlxcZCg/Ol9cXGQpPykrXFwuPyg/OlxcZCg/Ol9cXGQpPykqfFxcQlxcLig/OlxcZCg/Ol9cXGQpPykrKSg/OltFZV1bKy1dPyg/OlxcZCg/Ol9cXGQpPykrKT8vLFxuXHQvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcblx0J2Z1bmN0aW9uJzogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHQnb3BlcmF0b3InOiAvLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oXFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PVxccyooJHxbXFxyXFxuLC47fSlcXF1dKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccytbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9bXyRhLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKj0+KS9pLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fVxuXHRdLFxuXHQnY29uc3RhbnQnOiAvXFxiW0EtWl0oPzpbQS1aX118XFxkeD8pKlxcYi9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcblx0J3RlbXBsYXRlLXN0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK318KD8hXFwkeylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCR7fH0kLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0fVxuXHR9XG59KTtcblxuaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZCgnc2NyaXB0JywgJ2phdmFzY3JpcHQnKTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1maWxlLWhpZ2hsaWdodC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8ICFzZWxmLlByaXNtIHx8ICFzZWxmLmRvY3VtZW50IHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0ICovXG5cdHNlbGYuUHJpc20uZmlsZUhpZ2hsaWdodCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBFeHRlbnNpb25zID0ge1xuXHRcdFx0J2pzJzogJ2phdmFzY3JpcHQnLFxuXHRcdFx0J3B5JzogJ3B5dGhvbicsXG5cdFx0XHQncmInOiAncnVieScsXG5cdFx0XHQncHMxJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdFx0J3BzbTEnOiAncG93ZXJzaGVsbCcsXG5cdFx0XHQnc2gnOiAnYmFzaCcsXG5cdFx0XHQnYmF0JzogJ2JhdGNoJyxcblx0XHRcdCdoJzogJ2MnLFxuXHRcdFx0J3RleCc6ICdsYXRleCdcblx0XHR9O1xuXG5cdFx0QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZVtkYXRhLXNyY10nKSkuZm9yRWFjaChmdW5jdGlvbiAocHJlKSB7XG5cdFx0XHQvLyBpZ25vcmUgaWYgYWxyZWFkeSBsb2FkZWRcblx0XHRcdGlmIChwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYy1sb2FkZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxvYWQgY3VycmVudFxuXHRcdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHZhciBsYW5ndWFnZSwgcGFyZW50ID0gcHJlO1xuXHRcdFx0dmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcblx0XHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0XHRsYW5ndWFnZSA9IChwcmUuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICcnXSlbMV07XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9IChzcmMubWF0Y2goL1xcLihcXHcrKSQvKSB8fCBbLCAnJ10pWzFdO1xuXHRcdFx0XHRsYW5ndWFnZSA9IEV4dGVuc2lvbnNbZXh0ZW5zaW9uXSB8fCBleHRlbnNpb247XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29kZScpO1xuXHRcdFx0Y29kZS5jbGFzc05hbWUgPSAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0XHRwcmUudGV4dENvbnRlbnQgPSAnJztcblxuXHRcdFx0Y29kZS50ZXh0Q29udGVudCA9ICdMb2FkaW5n4oCmJztcblxuXHRcdFx0cHJlLmFwcGVuZENoaWxkKGNvZGUpO1xuXG5cdFx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRcdHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXG5cdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPCA0MDAgJiYgeGhyLnJlc3BvbnNlVGV4dCkge1xuXHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IHhoci5yZXNwb25zZVRleHQ7XG5cblx0XHRcdFx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZSk7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGxvYWRlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMtbG9hZGVkJywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9ICfinJYgRXJyb3IgJyArIHhoci5zdGF0dXMgKyAnIHdoaWxlIGZldGNoaW5nIGZpbGU6ICcgKyB4aHIuc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ+KcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR4aHIuc2VuZChudWxsKTtcblx0XHR9KTtcblxuXHRcdGlmIChQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRcdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignZG93bmxvYWQtZmlsZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRcdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmsnKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHRcdFx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGEudGV4dENvbnRlbnQgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmstbGFiZWwnKSB8fCAnRG93bmxvYWQnO1xuXHRcdFx0XHRhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJyk7XG5cdFx0XHRcdGEuaHJlZiA9IHNyYztcblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdC8vIGV4ZWN1dGUgaW5zaWRlIGhhbmRsZXIsIGZvciBkcm9wcGluZyBFdmVudCBhcyBhcmd1bWVudFxuXHRcdHNlbGYuUHJpc20uZmlsZUhpZ2hsaWdodCgpO1xuXHR9KTtcblxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=