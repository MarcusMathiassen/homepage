(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog"],{

/***/ "./src/components/p2d.svelte":
/*!***********************************!*\
  !*** ./src/components/p2d.svelte ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/svelte-loader/index.js):\nError: ParseError: Unexpected token (1:18)\n1: <Comment comment={...{type: 'advice', text: 'Hello you'}} />\n                     ^\n2: <h1>2D Collisions</h1><div id=\"p2d\"><div class=\"comment info\"><p>Any performance issue at this point is actually from the drawing of the particles.\n3: It doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.</p></div></div><p>This is a test paragraf.<b>I am bold</b></p><div class=\"comment info\"><p>This is a info note.\n    at /Users/marcusmathiassen/dev/homepage/node_modules/svelte-loader/index.js:181:12");

/***/ }),

/***/ "./src/routes/blog.svelte":
/*!********************************!*\
  !*** ./src/routes/blog.svelte ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/p2d.svelte */ "./src/components/p2d.svelte");
/* harmony import */ var _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__);
/* src/routes/blog.svelte generated by Svelte v3.12.0 */



const file = "src/routes/blog.svelte";

function create_fragment(ctx) {
	var t, current;

	var p2d = new _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1___default.a({ $$inline: true });

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2d.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p2d.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Blog";
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(p2d, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(p2d.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(p2d.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(p2d, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Blog extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Blog", options, id: create_fragment.name });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmMDk2NDVjOTFkMzNjMDIxZmFkOC9ibG9nLmJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==