(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects"],{

/***/ "./src/routes/projects.svelte":
/*!************************************!*\
  !*** ./src/routes/projects.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/p2d.svelte */ "./src/components/p2d.svelte");
/* src/routes/projects.svelte generated by Svelte v3.9.2 */



const file = "src/routes/projects.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, div, t3, b, a, t4, t5, p, t6, t7, current;

	var p2d = new _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Thi Programming Language");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Github:\n    ");
			b = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("https://github.com/MarcusMathiassen/thi");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I am filling this one in later.");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2d.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Thi Programming Language");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "Github:\n    ");

			b = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "B", {}, false);
			var b_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(b_nodes, "A", { href: true, target: true, rel: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, "https://github.com/MarcusMathiassen/thi");
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			b_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n    ");

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {}, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "I am filling this one in later.");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");
			p2d.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Projects";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 7, 0, 124);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "https://github.com/MarcusMathiassen/thi");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 11, 8, 206);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b, file, 10, 4, 194);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 18, 4, 402);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "faint");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 8, 0, 158);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, b);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(b, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t7, anchor);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t7);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(p2d, detaching);
		}
	};
}

class Projects extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxNjkyMTRiYzUxYzRhZTA0ZTJhMi9wcm9qZWN0cy5wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9