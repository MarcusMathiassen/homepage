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

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1x46ntj-style';
	style.textContent = ".landing-page--hero.svelte-1x46ntj{width:50%;margin:5px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj4ubGFuZGluZy1wYWdlLS1oZXJvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSW1CLG1CQUFtQixlQUFDLENBQUMsQUFDdEMsS0FBSyxDQUFFLEdBQUcsQ0FDVixNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQ0FDaEIsT0FBTyxDQUFFLEtBQUssQ0FDZCxnQkFBZ0IsQ0FBRSxJQUFJLFFBQVEsQ0FBQyxDQUMvQixlQUFlLENBQUUsS0FBSyxDQUN0QixLQUFLLENBQUUsS0FBSyxDQUNaLE1BQU0sQ0FBRSxLQUFLLEFBQUUsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, div, p0, t1, p1, t2;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marcus Mathiassen");
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I do compilers and languages.\nInterested in systems design and UX.");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Marcus Mathiassen");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "I do compilers and languages.\nInterested in systems design and UX.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-1x46ntj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 18, 0, 364);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 18, 38, 402);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 18, 90, 454);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			}
		}
	};
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1x46ntj-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI2OGFjMGVhNjAyMjRiNTZjNzVlNi9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9