(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/p2d.svelte */ "./src/components/p2d.svelte");
/* src/routes/index.svelte generated by Svelte v3.9.2 */



const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div, img0, t1, img1, t2, p0, t3, t4, p1, t5, br, t6;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marcus Mathiassen");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I do compilers and languages.\n    ");
			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("br");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n    Interested in systems design and UX.");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "IMG", { src: true, alt: true }, false);
			var img0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img0);

			img0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n    ");

			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "IMG", { src: true, alt: true }, false);
			var img1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img1);

			img1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Marcus Mathiassen");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "I do compilers and languages.\n    ");

			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p1_nodes, "BR", {}, false);
			var br_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(br);

			br_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "\n    Interested in systems design and UX.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "src", "avatar_pixelated.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "alt", "picture of me");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img0, file, 8, 4, 170);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "src", "avatar.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "alt", "picture of me");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img1, file, 9, 4, 229);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", ".landing-page--hero swapOnHover");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 7, 0, 120);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 11, 0, 281);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 14, 4, 407);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 12, 0, 334);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, img0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, img1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, br);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t6);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			}
		}
	};
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTI4M2I5OGY2Zjc3NGJmYWY4OC9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9