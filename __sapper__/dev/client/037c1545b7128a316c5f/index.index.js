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
	style.id = 'svelte-1jn40vy-style';
	style.textContent = ".landing-page--hero.svelte-1jn40vy{width:50%;margin:20px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvID0gXCJcIlxuXG4gICAgZmV0Y2goXCIvLm5ldGxpZnkvZnVuY3Rpb25zL2dpdGh1YlwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICByZXBvID0gbm9kZVswXVxuICAgIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj4ubGFuZGluZy1wYWdlLS1oZXJvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1hdmF0YXIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+PHA+Y3VycmVudGx5IHdvcmtpbmcgb246PC9wPjxoMT57cmVwby5uYW1lfTwvaDE+PGgyPntyZXBvLmRlc2NyaXB0aW9ufTwvaDI+PGgzPntyZXBvLnByaW1hcnlMYW5ndWFnZS5uYW1lfTwvaDM+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW1CLG1CQUFtQixlQUFDLENBQUMsQUFDdEMsS0FBSyxDQUFFLEdBQUcsQ0FDVixNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FDakIsT0FBTyxDQUFFLEtBQUssQ0FDZCxnQkFBZ0IsQ0FBRSxJQUFJLFFBQVEsQ0FBQyxDQUMvQixlQUFlLENBQUUsS0FBSyxDQUN0QixLQUFLLENBQUUsS0FBSyxDQUNaLE1BQU0sQ0FBRSxLQUFLLEFBQUUsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, div, p0, t1, p1, t2, p2, t3, h1, t4_value = ctx.repo.name + "", t4, h2, t5_value = ctx.repo.description + "", t5, h3, t6_value = ctx.repo.primaryLanguage.name + "", t6;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marcus Mathiassen");
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I do compilers and languages.\nInterested in systems design and UX.");
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("currently working on:");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t4_value);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t6_value);
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

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

			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {}, false);
			var p2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p2);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p2_nodes, "currently working on:");
			p2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t4_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H2", {}, false);
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, t5_value);
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t6_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-1jn40vy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 27, 0, 522);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 27, 38, 560);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 27, 90, 612);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p2, file, 28, 40, 716);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 28, 68, 744);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 28, 88, 764);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 28, 115, 791);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p2, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t6);
		},

		p: function update(changed, ctx) {
			if ((changed.repo) && t4_value !== (t4_value = ctx.repo.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t4, t4_value);
			}

			if ((changed.repo) && t5_value !== (t5_value = ctx.repo.description + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t5, t5_value);
			}

			if ((changed.repo) && t6_value !== (t6_value = ctx.repo.primaryLanguage.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t6, t6_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h3);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let repo = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        console.log(json)
        $$invalidate('repo', repo = node[0])
    })

	return { repo };
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1jn40vy-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eURBNEJ5RSxJQUFJLENBQUMsSUFBSSw4QkFBVyxJQUFJLENBQUMsV0FBVyw4QkFBVyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFBeEUsSUFBSSxDQUFDLElBQUk7Ozs7c0RBQVcsSUFBSSxDQUFDLFdBQVc7Ozs7c0RBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F6QjdJLElBQUksSUFBSSxHQUFHLEVBQUU7O0lBRWIsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDOzZCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBQztLQUNqQixDQUFDIiwiZmlsZSI6IjAzN2MxNTQ1YjcxMjhhMzE2YzVmL2luZGV4LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvID0gXCJcIlxuXG4gICAgZmV0Y2goXCIvLm5ldGxpZnkvZnVuY3Rpb25zL2dpdGh1YlwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICByZXBvID0gbm9kZVswXVxuICAgIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj4ubGFuZGluZy1wYWdlLS1oZXJvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1hdmF0YXIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+PHA+Y3VycmVudGx5IHdvcmtpbmcgb246PC9wPjxoMT57cmVwby5uYW1lfTwvaDE+PGgyPntyZXBvLmRlc2NyaXB0aW9ufTwvaDI+PGgzPntyZXBvLnByaW1hcnlMYW5ndWFnZS5uYW1lfTwvaDM+XG4iXSwic291cmNlUm9vdCI6IiJ9